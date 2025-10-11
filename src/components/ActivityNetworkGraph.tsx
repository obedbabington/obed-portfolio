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

  // Category colors
  const categoryColors: Record<string, string> = {
    'Leadership': '#3B82F6',
    'Public Speaking': '#10B981',
    'Community Service': '#F59E0B',
    'Education & Mentorship': '#8B5CF6',
    'Fellowship': '#EF4444',
    'Videography': '#06B6D4',
    'Performance': '#EC4899',
    'Podcast': '#84CC16'
  };

  // Connection type colors
  const connectionColors: Record<string, string> = {
    'theme': '#6B7280',
    'skill': '#3B82F6',
    'timeline': '#10B981',
    'collaboration': '#F59E0B'
  };

  useEffect(() => {
    const handleResize = () => {
      if (svgRef.current?.parentElement) {
        const rect = svgRef.current.parentElement.getBoundingClientRect();
        setDimensions({ width: rect.width, height: Math.max(400, rect.height) });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!svgRef.current || activities.length === 0) return;

    const svg = svgRef.current;
    svg.innerHTML = '';

    const width = dimensions.width;
    const height = dimensions.height;
    const centerX = width / 2;
    const centerY = height / 2;

    // Create nodes with initial positions
    const nodes: ActivityNode[] = activities.map((activity, index) => {
      const angle = (index / activities.length) * 2 * Math.PI;
      const radius = Math.min(width, height) * 0.3;
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
      linkEl.setAttribute('stroke-width', (link.strength * 3).toString());
      linkEl.setAttribute('stroke-opacity', '0.6');
      linkEl.setAttribute('class', 'link');
      g.appendChild(linkEl);
      return { element: linkEl, data: link };
    });

    // Create nodes
    const nodeElements = nodes.map(node => {
      const nodeEl = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      const radius = 14 + (node.title.length / 8);
      nodeEl.setAttribute('r', radius.toString());
      nodeEl.setAttribute('fill', categoryColors[node.category] || '#6B7280');
      nodeEl.setAttribute('stroke', '#ffffff');
      nodeEl.setAttribute('stroke-width', '3');
      nodeEl.setAttribute('class', 'node');
      nodeEl.setAttribute('cursor', 'pointer');
      nodeEl.setAttribute('data-id', node.id);
      nodeEl.setAttribute('filter', 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.15))');
      
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
      labelEl.setAttribute('font-size', '11');
      labelEl.setAttribute('fill', '#1f2937');
      labelEl.setAttribute('font-weight', '600');
      labelEl.setAttribute('filter', 'drop-shadow(0 1px 2px rgba(255, 255, 255, 0.8))');
      labelEl.textContent = node.title.length > 20 ? node.title.substring(0, 20) + '...' : node.title;
      g.appendChild(labelEl);
      return { element: labelEl, data: node };
    });

    // Simple force simulation
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

      // Simple force simulation
      nodes.forEach(node => {
        if (node.fx === null && node.fy === null) {
          // Apply repulsion from other nodes
          nodes.forEach(other => {
            if (other !== node) {
              const dx = node.x! - other.x!;
              const dy = node.y! - other.y!;
              const distance = Math.sqrt(dx * dx + dy * dy);
              if (distance > 0 && distance < 100) {
                const force = 100 / (distance * distance);
                node.vx! += (dx / distance) * force;
                node.vy! += (dy / distance) * force;
              }
            }
          });

          // Apply attraction from connected nodes
          validLinks.forEach(link => {
            if (link.source === node.id) {
              const target = nodes.find(n => n.id === link.target);
              if (target) {
                const dx = target.x! - node.x!;
                const dy = target.y! - node.y!;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance > 0) {
                  const force = link.strength * 0.1;
                  node.vx! += (dx / distance) * force;
                  node.vy! += (dy / distance) * force;
                }
              }
            }
          });

          // Apply damping
          node.vx! *= 0.9;
          node.vy! *= 0.9;

          // Update position
          node.x! += node.vx!;
          node.y! += node.vy!;

          // Keep nodes within bounds
          const margin = 50;
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
    <Column gap="l">
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
      {/* Legend */}
      <Column gap="m" padding="l" style={{ 
        backgroundColor: 'rgba(248, 250, 252, 0.6)', 
        backdropFilter: 'blur(10px)',
        borderRadius: '12px',
        border: '1px solid rgba(226, 232, 240, 0.3)'
      }}>
        <Heading variant="heading-strong-s">Activity Categories</Heading>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '8px' 
        }}>
          {categories.map(category => (
            <div 
              key={category}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px',
                cursor: 'pointer',
                padding: '4px 8px',
                borderRadius: '4px',
                backgroundColor: selectedCategory === category ? '#dbeafe' : 'transparent',
                transition: 'background-color 0.2s'
              }}
              onClick={() => onCategoryFilter?.(selectedCategory === category ? null : category)}
            >
              <div 
                style={{ 
                  width: '12px', 
                  height: '12px', 
                  borderRadius: '50%', 
                  backgroundColor: categoryColors[category] || '#6B7280' 
                }} 
              />
              <Text variant="body-default-xs">{category}</Text>
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: '12px' }}>
          <Text variant="body-default-xs" style={{ fontWeight: '600', marginBottom: '8px' }}>Connection Types:</Text>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {Object.entries(connectionColors).map(([type, color]) => (
              <div key={type} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <div style={{ width: '16px', height: '2px', backgroundColor: color }} />
                <Text variant="body-default-xs" style={{ textTransform: 'capitalize' }}>{type}</Text>
              </div>
            ))}
          </div>
        </div>
      </Column>

      {/* Graph */}
      <div style={{ 
        width: '100%', 
        height: '600px', 
        borderRadius: '12px',
        overflow: 'hidden',
        background: 'transparent',
        position: 'relative'
      }}>
        <svg
          ref={svgRef}
          width="100%"
          height="100%"
          style={{ display: 'block' }}
        />
      </div>

      {/* Hover Info */}
      {hoveredNode && (
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          padding: '16px',
          borderRadius: '12px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          maxWidth: '320px',
          zIndex: 1000,
          animation: 'fadeIn 0.2s ease-out'
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
                  color: '#1f2937',
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
                    backgroundColor: categoryColors[activity.category] || '#6B7280'
                  }} />
                  <Text variant="body-default-xs" style={{ 
                    color: '#6B7280',
                    textTransform: 'uppercase',
                    fontWeight: '500'
                  }}>
                    {activity.category}
                  </Text>
                </div>
                
                <Text variant="body-default-xs" style={{ 
                  color: '#6B7280',
                  marginBottom: '8px'
                }}>
                  {activity.date}
                </Text>
                
                <Text variant="body-default-xs" style={{ 
                  color: '#4B5563',
                  lineHeight: '1.4'
                }}>
                  {activity.summary.length > 120 
                    ? activity.summary.substring(0, 120) + '...' 
                    : activity.summary
                  }
                </Text>
                
                <Text variant="body-default-xs" style={{ 
                  color: '#3B82F6',
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
    </Column>
  );
};

export default ActivityNetworkGraph;
