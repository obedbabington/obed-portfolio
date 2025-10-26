'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Column, Text, Heading } from '@once-ui-system/core';

interface ActivityNode {
  id: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  imagePath?: string;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;
}

interface ActivityLink {
  source: string;
  target: string;
  strength: number;
  type: 'theme' | 'skill' | 'timeline' | 'collaboration';
}

interface ActivityNetworkGraphProps {
  activities: ActivityNode[];
  onNodeClick?: (activityId: string) => void;
  selectedCategory?: string;
  onCategoryFilter?: (category: string | null) => void;
}

const ActivityNetworkGraph: React.FC<ActivityNetworkGraphProps> = ({
  activities,
  onNodeClick,
  selectedCategory,
  onCategoryFilter
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Define connections between activities
  const links: ActivityLink[] = [
    // Leadership connections
    { source: 'arm-engage-leadership', target: 'ashesi-research-club-president', strength: 0.8, type: 'theme' },
    { source: 'arm-engage-leadership', target: 'tedx-ashesi-speaker', strength: 0.6, type: 'skill' },
    
    // Research and education connections
    { source: 'ashesi-research-club-president', target: 'aftgonosia-service-learning', strength: 0.7, type: 'theme' },
    { source: 'msmiles-stem-curriculum', target: 'assistive-technology-makerspace', strength: 0.8, type: 'theme' },
    { source: 'msmiles-stem-curriculum', target: 'aftgonosia-service-learning', strength: 0.6, type: 'theme' },
    
    // Communication and media connections
    { source: 'tedx-ashesi-speaker', target: '7ma-show-podcast', strength: 0.7, type: 'skill' },
    { source: 'tedx-ashesi-speaker', target: 'pan-africanism-skit', strength: 0.5, type: 'skill' },
    { source: '7ma-show-podcast', target: 'flir-c5-video-manual', strength: 0.6, type: 'skill' },
    
    // Community service connections
    { source: 'aftgonosia-service-learning', target: 'msmiles-stem-curriculum', strength: 0.7, type: 'theme' },
    { source: 'assistive-technology-makerspace', target: 'aftgonosia-service-learning', strength: 0.5, type: 'theme' },
    
    // Timeline connections (activities in same year)
    { source: 'tedx-ashesi-speaker', target: 'msmiles-stem-curriculum', strength: 0.4, type: 'timeline' },
    { source: 'arm-engage-leadership', target: 'ashesi-research-club-president', strength: 0.3, type: 'timeline' },
    { source: '7ma-show-podcast', target: 'arm-engage-leadership', strength: 0.3, type: 'timeline' },
  ];

  // Category colors - distinct shades of green, black, dark blue, grey, all dark enough for white text
  const categoryColors: Record<string, string> = {
    'Leadership': '#10B981',       // Bright green
    'Public Speaking': '#1e3a8a',  // Darker blue (matching page theme)
    'Community Service': '#6B7280', // Medium grey
    'Education & Mentorship': '#000000', // Pure black
    'Fellowship': '#059669',       // Dark green
    'Videography': '#1F2937',      // Dark grey
    'Performance': '#1E40AF',      // Dark blue (distinct from Public Speaking)
    'Podcast': '#374151'           // Medium dark grey
  };

  // Connection type colors - green shades
  const connectionColors: Record<string, string> = {
    'theme': '#6B7280',
    'skill': '#10B981',
    'timeline': '#059669',
    'collaboration': '#047857'
  };

  useEffect(() => {
    const handleResize = () => {
      if (svgRef.current?.parentElement) {
        const rect = svgRef.current.parentElement.getBoundingClientRect();
        const newWidth = Math.max(300, rect.width); // Minimum width for mobile
        const newHeight = isMobile ? Math.max(400, rect.height) : Math.max(600, rect.height);
        setDimensions({ width: newWidth, height: newHeight });
        setIsMobile(window.innerWidth < 768);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  useEffect(() => {
    if (!svgRef.current || activities.length === 0) return;

    const svg = svgRef.current;
    svg.innerHTML = '';

    const width = dimensions.width;
    const height = dimensions.height;
    const centerX = width / 2;
    const centerY = height / 2;

    // Create nodes with initial positions - perfect circular formation
    const nodes: ActivityNode[] = activities.map((activity, index) => {
      const angle = (index / activities.length) * 2 * Math.PI;
      // Calculate radius to ensure nodes are well-spaced in a circle
      const nodeSize = isMobile ? 60 : 80;
      const minDistance = nodeSize * (isMobile ? 2.0 : 2.5); // Much more spacing to prevent clustering
      const circumference = activities.length * minDistance;
      const radius = circumference / (2 * Math.PI);
      // Ensure radius doesn't exceed container bounds - more conservative on mobile
      const maxRadius = Math.min(width, height) * (isMobile ? 0.4 : 0.45);
      const finalRadius = Math.min(radius, maxRadius);
      
      return {
        ...activity,
        x: centerX + Math.cos(angle) * finalRadius,
        y: centerY + Math.sin(angle) * finalRadius,
        vx: 0,
        vy: 0,
        fx: null,
        fy: null
      };
    });

    // Filter links based on available nodes
    const validLinks = links.filter(link => 
      nodes.some(n => n.id === link.source) && 
      nodes.some(n => n.id === link.target)
    );

    // Create SVG elements
    const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    svg.appendChild(g);

    // Create links
    const linkElements = validLinks.map(link => {
      const linkEl = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      linkEl.setAttribute('stroke', connectionColors[link.type]);
      linkEl.setAttribute('stroke-width', (link.strength * 5 + 2).toString());
      linkEl.setAttribute('stroke-opacity', '0.6');
      linkEl.setAttribute('class', 'link');
      g.appendChild(linkEl);
      return { element: linkEl, data: link };
    });

    // Create nodes as square images
    const nodeElements = nodes.map(node => {
      const size = isMobile ? 60 : 80; // Larger squares
      
      // Create a group for the square and image
      const groupEl = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      groupEl.setAttribute('class', 'node-group');
      groupEl.setAttribute('data-id', node.id);
      groupEl.setAttribute('cursor', 'pointer');
      
      // Create square background
      const squareEl = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      squareEl.setAttribute('width', size.toString());
      squareEl.setAttribute('height', size.toString());
      squareEl.setAttribute('rx', '8'); // Rounded corners
      squareEl.setAttribute('ry', '8');
      squareEl.setAttribute('fill', categoryColors[node.category] || '#10B981');
      squareEl.setAttribute('stroke', '#ffffff');
      squareEl.setAttribute('stroke-width', '2');
      squareEl.setAttribute('filter', 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3))');
      
      // Create image element
      const imageEl = document.createElementNS('http://www.w3.org/2000/svg', 'image');
      imageEl.setAttribute('width', (size - 4).toString());
      imageEl.setAttribute('height', (size - 4).toString());
      imageEl.setAttribute('x', '2');
      imageEl.setAttribute('y', '2');
      imageEl.setAttribute('href', node.imagePath || '/images/beyond-the-lab/default.jpg');
      // Add error handling for missing images
      imageEl.addEventListener('error', () => {
        imageEl.setAttribute('href', '/images/beyond-the-lab/default.jpg');
      });
      imageEl.setAttribute('preserveAspectRatio', 'xMidYMid slice');
      
      groupEl.appendChild(squareEl);
      groupEl.appendChild(imageEl);
      
      // Add enhanced hover effects and click handling
      groupEl.addEventListener('mouseenter', () => {
        setHoveredNode(node.id);
        // Enhanced visual feedback on hover with smooth transitions
        squareEl.setAttribute('stroke-width', '4');
        squareEl.setAttribute('stroke', '#10B981');
        squareEl.setAttribute('filter', 'drop-shadow(0 8px 25px rgba(16, 185, 129, 0.6)) brightness(1.1)');
        
        // Scale up the entire group slightly
        groupEl.setAttribute('transform', `translate(${node.x! - nodeSize/2}, ${node.y! - nodeSize/2}) scale(1.1)`);
        
        // Add glow effect to connected links
        validLinks.forEach(link => {
          if (link.source === node.id || link.target === node.id) {
            const linkElement = linkElements.find(le => le.data === link)?.element;
            if (linkElement) {
              linkElement.setAttribute('stroke-opacity', '1');
              linkElement.setAttribute('stroke-width', (link.strength * 8 + 4).toString());
              linkElement.setAttribute('filter', 'drop-shadow(0 0 8px rgba(16, 185, 129, 0.8))');
            }
          }
        });
      });
      
      groupEl.addEventListener('mouseleave', () => {
        setHoveredNode(null);
        // Remove visual feedback with smooth transition
        squareEl.setAttribute('stroke-width', '2');
        squareEl.setAttribute('stroke', '#ffffff');
        squareEl.setAttribute('filter', 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3))');
        
        // Reset scale
        groupEl.setAttribute('transform', `translate(${node.x! - nodeSize/2}, ${node.y! - nodeSize/2}) scale(1)`);
        
        // Reset link effects
        validLinks.forEach(link => {
          if (link.source === node.id || link.target === node.id) {
            const linkElement = linkElements.find(le => le.data === link)?.element;
            if (linkElement) {
              linkElement.setAttribute('stroke-opacity', '0.6');
              linkElement.setAttribute('stroke-width', (link.strength * 5 + 2).toString());
              linkElement.setAttribute('filter', 'none');
            }
          }
        });
      });
      groupEl.addEventListener('click', () => onNodeClick?.(node.id));
      
      g.appendChild(groupEl);
      return { element: groupEl, data: node };
    });

    // Create labels with better readability
    const labelElements = nodes.map(node => {
      const labelEl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      labelEl.setAttribute('class', 'label');
      labelEl.setAttribute('data-id', node.id);
      labelEl.setAttribute('text-anchor', 'middle');
      labelEl.setAttribute('dy', '0.35em');
      labelEl.setAttribute('font-size', isMobile ? '14' : '16'); // Larger font size
      
      // Better text styling for readability
      labelEl.setAttribute('fill', '#ffffff');
      labelEl.setAttribute('font-weight', '600');
      labelEl.setAttribute('font-family', 'system-ui, -apple-system, sans-serif');
      labelEl.setAttribute('filter', 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.9))');
      
      // Show more text - allow longer titles
      const maxLength = isMobile ? 25 : 30;
      labelEl.textContent = node.title.length > maxLength ? node.title.substring(0, maxLength) + '...' : node.title;
      g.appendChild(labelEl);
      return { element: labelEl, data: node };
    });

    // Smooth orbital animation with perfect circle formation
    let animationId: number;
    let lastTime = 0;
    const targetFPS = 60; // Higher FPS for smoother animation
    const frameInterval = 1000 / targetFPS;
    let animationTime = 0;
    
    // Calculate perfect circle parameters
    const nodeSize = isMobile ? 60 : 80;
    const minDistance = nodeSize * (isMobile ? 2.2 : 2.8);
    const circumference = activities.length * minDistance;
    const targetRadius = Math.min(circumference / (2 * Math.PI), Math.min(width, height) * (isMobile ? 0.35 : 0.4));
    
    const tick = (currentTime: number = 0) => {
      // Frame rate limiting
      if (currentTime - lastTime < frameInterval) {
        animationId = requestAnimationFrame(tick);
        return;
      }
      lastTime = currentTime;
      animationTime += frameInterval;
      
      // Update link positions with smooth interpolation
      linkElements.forEach(({ element, data }) => {
        const sourceNode = nodes.find(n => n.id === data.source);
        const targetNode = nodes.find(n => n.id === data.target);
        if (sourceNode && targetNode) {
          element.setAttribute('x1', sourceNode.x!.toString());
          element.setAttribute('y1', sourceNode.y!.toString());
          element.setAttribute('x2', targetNode.x!.toString());
          element.setAttribute('y2', targetNode.y!.toString());
        }
      });

      // Update node positions with smooth orbital movement
      nodes.forEach((node, index) => {
        // Calculate base angle for perfect circle
        const baseAngle = (index / activities.length) * 2 * Math.PI;
        
        // Add subtle orbital movement (slow rotation)
        const orbitalSpeed = 0.0003; // Very slow orbital movement
        const orbitalAngle = baseAngle + (animationTime * orbitalSpeed);
        
        // Add gentle floating motion
        const floatAmplitude = 8; // Small floating movement
        const floatSpeed = 0.002;
        const floatOffset = Math.sin(animationTime * floatSpeed + index * 0.5) * floatAmplitude;
        
        // Calculate final position
        const finalRadius = targetRadius + floatOffset;
        node.x = centerX + Math.cos(orbitalAngle) * finalRadius;
        node.y = centerY + Math.sin(orbitalAngle) * finalRadius;
        
        // Update node element position (preserve hover scale if active)
        const nodeElement = nodeElements.find(ne => ne.data.id === node.id);
        if (nodeElement) {
          const isHovered = hoveredNode === node.id;
          const scale = isHovered ? 1.1 : 1;
          nodeElement.element.setAttribute('transform', `translate(${node.x - nodeSize/2}, ${node.y - nodeSize/2}) scale(${scale})`);
        }
        
        // Update label position
        const labelElement = labelElements.find(le => le.data.id === node.id);
        if (labelElement) {
          labelElement.element.setAttribute('x', node.x.toString());
          const labelOffset = isMobile ? 45 : 55;
          labelElement.element.setAttribute('y', (node.y + labelOffset).toString());
        }
      });

      animationId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [activities, dimensions, onNodeClick]);

  const categories = Array.from(new Set(activities.map(a => a.category)));

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      gap: '16px', 
      width: '100%',
      minHeight: isMobile ? 'auto' : '700px'
    }}>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(-10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          /* Smooth transitions for SVG elements */
          .node-group {
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .node-group rect {
            transition: stroke-width 0.3s ease, filter 0.3s ease, stroke 0.3s ease;
          }
          
          .link {
            transition: stroke-opacity 0.3s ease, stroke-width 0.3s ease, filter 0.3s ease;
          }
          
          /* Enhanced hover states */
          .node-group:hover {
            cursor: pointer;
          }
          
          /* Smooth label transitions */
          .label {
            transition: opacity 0.3s ease;
          }
        `
      }} />
      
      {/* Graph - Full width with improved mobile handling */}
      <div style={{ 
        flex: '1',
        height: isMobile ? '600px' : '700px', 
        borderRadius: '12px',
        overflow: 'hidden',
        background: 'transparent',
        position: 'relative',
        width: '100%',
        minHeight: isMobile ? '500px' : '600px'
      }}>
        <svg
          ref={svgRef}
          width="100%"
          height="100%"
          style={{ display: 'block' }}
        />
      </div>

      {/* Hover Info - Enhanced display */}
      {hoveredNode && (
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          backgroundColor: 'rgba(16, 185, 129, 0.2)',
          backdropFilter: 'blur(20px)',
          padding: '24px',
          borderRadius: '20px',
          boxShadow: '0 16px 50px rgba(16, 185, 129, 0.3)',
          border: '2px solid rgba(16, 185, 129, 0.4)',
          maxWidth: '380px',
          zIndex: 1000,
          animation: 'fadeIn 0.3s ease-out',
          transform: 'translateZ(0)', // Hardware acceleration
          willChange: 'transform, opacity'
        }}>
          {(() => {
            const activity = activities.find(a => a.id === hoveredNode);
            return activity ? (
              <Column gap="s">
                {/* Thumbnail */}
                {activity.imagePath && (
                  <div style={{
                    width: '100%',
                    height: '120px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    marginBottom: '8px'
                  }}>
                    <img
                      src={activity.imagePath}
                      alt={activity.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                )}
                
                 {/* Content */}
                 <Text variant="body-default-s" style={{ 
                   fontWeight: '600',
                   color: '#ffffff',
                   lineHeight: '1.4'
                 }}>
                   {activity.title}
                 </Text>
                 
                 <div style={{
                   display: 'flex',
                   alignItems: 'center',
                   gap: '8px',
                   marginBottom: '4px'
                 }}>
                   <div style={{
                     width: '8px',
                     height: '8px',
                     borderRadius: '50%',
                     backgroundColor: categoryColors[activity.category] || '#10B981'
                   }} />
                   <Text variant="body-default-xs" style={{ 
                     color: '#a7f3d0',
                     textTransform: 'uppercase',
                     fontWeight: '500'
                   }}>
                     {activity.category}
                   </Text>
                 </div>
                 
                 <Text variant="body-default-xs" style={{ 
                   color: '#a7f3d0',
                   marginBottom: '8px'
                 }}>
                   {activity.date}
                 </Text>
                 
                 <Text variant="body-default-xs" style={{ 
                   color: '#d1fae5',
                   lineHeight: '1.4'
                 }}>
                   {activity.summary.length > 120 
                     ? activity.summary.substring(0, 120) + '...' 
                     : activity.summary
                   }
                 </Text>
                 
                 <Text variant="body-default-xs" style={{ 
                   color: '#10B981',
                   fontWeight: '500',
                   marginTop: '4px'
                 }}>
                   Click to explore →
                 </Text>
              </Column>
            ) : null;
          })()}
        </div>
      )}
    </div>
  );
};

export default ActivityNetworkGraph;
