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

  // Category colors - distinct shades of green, black, dark blue, grey, and white
  const categoryColors: Record<string, string> = {
    'Leadership': '#10B981',       // Bright green
    'Public Speaking': '#1e3a8a',  // Darker blue (matching page theme)
    'Community Service': '#6B7280', // Medium grey
    'Education & Mentorship': '#000000', // Pure black
    'Fellowship': '#059669',       // Dark green
    'Videography': '#1F2937',      // Dark grey
    'Performance': '#FFFFFF',      // White
    'Podcast': '#374151'           // Light grey
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

    // Create nodes with initial positions - responsive spacing
    const nodes: ActivityNode[] = activities.map((activity, index) => {
      const angle = (index / activities.length) * 2 * Math.PI;
      const radius = Math.min(width, height) * (isMobile ? 0.35 : 0.4); // Responsive radius
      return {
        ...activity,
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
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

    // Create nodes
    const nodeElements = nodes.map(node => {
      const nodeEl = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      const radius = 18 + (node.title.length / 6);
      nodeEl.setAttribute('r', radius.toString());
      
      // Use solid colors - no patterns
      nodeEl.setAttribute('fill', categoryColors[node.category] || '#10B981');
      
      // Use contrasting stroke colors for white and black nodes
      const strokeColor = node.category === 'Performance' ? '#000000' : '#ffffff';
      nodeEl.setAttribute('stroke', strokeColor);
      nodeEl.setAttribute('stroke-width', '3');
      nodeEl.setAttribute('class', 'node');
      nodeEl.setAttribute('cursor', 'pointer');
      nodeEl.setAttribute('data-id', node.id);
      nodeEl.setAttribute('filter', 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.25))');
      
      // Add hover effects
      nodeEl.addEventListener('mouseenter', () => setHoveredNode(node.id));
      nodeEl.addEventListener('mouseleave', () => setHoveredNode(null));
      nodeEl.addEventListener('click', () => onNodeClick?.(node.id));
      
      g.appendChild(nodeEl);
      return { element: nodeEl, data: node };
    });

    // Create labels
    const labelElements = nodes.map(node => {
      const labelEl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      labelEl.setAttribute('class', 'label');
      labelEl.setAttribute('data-id', node.id);
      labelEl.setAttribute('text-anchor', 'middle');
      labelEl.setAttribute('dy', '0.35em');
      labelEl.setAttribute('font-size', '12');
      
      // Use contrasting text colors for white and black nodes
      const textColor = node.category === 'Performance' ? '#000000' : '#ffffff';
      labelEl.setAttribute('fill', textColor);
      labelEl.setAttribute('font-weight', '700');
      labelEl.setAttribute('filter', 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.8))');
      labelEl.textContent = node.title.length > 20 ? node.title.substring(0, 20) + '...' : node.title;
      g.appendChild(labelEl);
      return { element: labelEl, data: node };
    });

    // Continuous force simulation with strong spacing
    let animationId: number;
    
    const tick = () => {
      // Update link positions
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

      // Update node positions
      nodeElements.forEach(({ element, data }) => {
        element.setAttribute('cx', data.x!.toString());
        element.setAttribute('cy', data.y!.toString());
      });

      // Update label positions
      labelElements.forEach(({ element, data }) => {
        element.setAttribute('x', data.x!.toString());
        element.setAttribute('y', (data.y! + 20).toString());
      });

      // Continuous force simulation with responsive spacing
      nodes.forEach(node => {
        if (node.fx === null && node.fy === null) {
          // Apply strong repulsion from other nodes for better spacing
          nodes.forEach(other => {
            if (other !== node) {
              const dx = node.x! - other.x!;
              const dy = node.y! - other.y!;
              const distance = Math.sqrt(dx * dx + dy * dy);
              const repulsionRange = isMobile ? 120 : 200; // Smaller range on mobile
              const repulsionForce = isMobile ? 300 : 500; // Adjusted force for mobile
              if (distance > 0 && distance < repulsionRange) {
                const force = repulsionForce / (distance * distance);
                node.vx! += (dx / distance) * force;
                node.vy! += (dy / distance) * force;
              }
            }
          });

          // Apply attraction from connected nodes (weaker than repulsion)
          validLinks.forEach(link => {
            if (link.source === node.id) {
              const target = nodes.find(n => n.id === link.target);
              if (target) {
                const dx = target.x! - node.x!;
                const dy = target.y! - node.y!;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance > 0) {
                  const force = link.strength * (isMobile ? 0.03 : 0.05); // Reduced attraction on mobile
                  node.vx! += (dx / distance) * force;
                  node.vy! += (dy / distance) * force;
                }
              }
            }
          });

          // Apply damping - more damping on mobile for stability
          const damping = isMobile ? 0.9 : 0.85;
          node.vx! *= damping;
          node.vy! *= damping;

          // Update position
          node.x! += node.vx!;
          node.y! += node.vy!;

          // Keep nodes within bounds with responsive margins
          const margin = isMobile ? 60 : 80;
          if (node.x! < margin) { node.x = margin; node.vx = 0; }
          if (node.x! > width - margin) { node.x = width - margin; node.vx = 0; }
          if (node.y! < margin) { node.y = margin; node.vy = 0; }
          if (node.y! > height - margin) { node.y = height - margin; node.vy = 0; }
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
      flexDirection: isMobile ? 'column' : 'row',
      gap: isMobile ? '16px' : '24px', 
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
        `
      }} />
      
      {/* Graph - Takes most of the space */}
      <div style={{ 
        flex: isMobile ? 'none' : '1',
        height: isMobile ? '500px' : '700px', 
        borderRadius: '12px',
        overflow: 'hidden',
        background: 'transparent',
        position: 'relative',
        width: isMobile ? '100%' : 'auto'
      }}>
        <svg
          ref={svgRef}
          width="100%"
          height="100%"
          style={{ display: 'block' }}
        />
      </div>

      {/* Legend - Right side column */}
      <div style={{ 
        width: isMobile ? '100%' : '280px',
        display: 'flex',
        flexDirection: isMobile ? 'row' : 'column',
        gap: isMobile ? '12px' : '16px',
        flexWrap: isMobile ? 'wrap' : 'nowrap'
      }}>
        {/* Activity Categories */}
        <div style={{ 
          backgroundColor: 'rgba(16, 185, 129, 0.1)', 
          backdropFilter: 'blur(10px)',
          borderRadius: '12px',
          border: '1px solid rgba(16, 185, 129, 0.2)',
          padding: isMobile ? '16px' : '20px',
          flex: isMobile ? '1' : 'none',
          minWidth: isMobile ? '200px' : 'auto'
        }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: isMobile ? 'row' : 'column', 
            gap: isMobile ? '8px' : '12px',
            flexWrap: isMobile ? 'wrap' : 'nowrap'
          }}>
            {categories.map(category => (
              <div 
                key={category}
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px',
                  cursor: 'pointer',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  backgroundColor: selectedCategory === category ? 'rgba(16, 185, 129, 0.2)' : 'transparent',
                  transition: 'all 0.2s ease',
                  border: selectedCategory === category ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid transparent'
                }}
                onClick={() => onCategoryFilter?.(selectedCategory === category ? null : category)}
              >
                <div 
                  style={{ 
                    width: '16px', 
                    height: '16px', 
                    borderRadius: '50%', 
                    backgroundColor: categoryColors[category] || '#10B981',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
                  }} 
                />
                <Text variant="body-default-s" style={{ 
                  color: '#ffffff',
                  fontWeight: selectedCategory === category ? '600' : '400'
                }}>
                  {category}
                </Text>
              </div>
            ))}
          </div>
        </div>
        
      </div>

      {/* Hover Info */}
      {hoveredNode && (
        <div style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          backgroundColor: 'rgba(16, 185, 129, 0.15)',
          backdropFilter: 'blur(15px)',
          padding: '20px',
          borderRadius: '16px',
          boxShadow: '0 12px 40px rgba(16, 185, 129, 0.2)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          maxWidth: '350px',
          zIndex: 1000,
          animation: 'fadeIn 0.3s ease-out'
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
