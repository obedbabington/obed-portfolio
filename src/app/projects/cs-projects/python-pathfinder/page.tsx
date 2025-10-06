import { Column, Heading, Meta, Schema, Text, Row, Icon, Card } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import { BackButton } from "@/components";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: "Python Pathfinder - Obed Allotey Babington",
    description: "Co-developed Python PathFinder, a program that computes the shortest path between two points using the A* search algorithm with interactive Pygame visualization.",
    path: "/projects/cs-projects/python-pathfinder",
    baseURL,
  });
}

export default function PythonPathfinder() {
  return (
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      {/* Back Button */}
      <BackButton href="/projects/cs-projects" label="Back to CS Projects" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/projects/cs-projects/python-pathfinder"
        title="Python Pathfinder"
        description="Co-developed Python PathFinder, a program that computes the shortest path between two points using the A* search algorithm"
        image={`/api/og/generate?title=${encodeURIComponent("Python Pathfinder")}`}
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Back Button */}
      <Row marginBottom="l" align="center" gap="s">
        <Icon name="arrowRight" style={{ transform: "rotate(180deg)" }} />
        <Text 
          as="a" 
          href="/projects/cs-projects" 
          variant="body-default-s"
          style={{ textDecoration: "none", color: "var(--neutral-weak)" }}
        >
          Back to CS Projects
        </Text>
      </Row>

      {/* Page Title */}
      <Column marginBottom="l" paddingX="l" align="center">
        <Heading variant="heading-strong-xl">Python Pathfinder</Heading>
      </Column>

      {/* Project Info */}
      <Column marginBottom="l" paddingX="l" align="center">
        <Text variant="body-default-xs" onBackground="neutral-weak" style={{ textTransform: "uppercase", fontWeight: "600" }}>
          Algorithm Implementation Project • Nov 2022
        </Text>
      </Column>

      {/* Project Image */}
      <Column marginBottom="xl" align="center">
        <div style={{ 
          position: "relative", 
          width: "100%", 
          maxWidth: "600px", 
          height: "400px",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
        }}>
          <Image
            src="/images/projects/pathfinding.png"
            alt="Python Pathfinder Algorithm Visualization"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </Column>

      {/* Content */}
      <Column paddingX="l" gap="l">
        <Text variant="body-default-l">
          In a three-member team, I co-developed Python PathFinder, a program that computes the shortest path between two points while navigating obstacles. We implemented the A* search algorithm, combining g-scores (path cost) and h-scores (Manhattan distance heuristic), and optimized traversal using priority queues.
        </Text>

        <Text variant="body-default-l">
          For visualization, I designed an interactive grid-based interface in Pygame, where users could define start/end nodes and dynamically place obstacles. This not only showcased the efficiency of the algorithm but also provided a clear visual demonstration of path exploration and selection.
        </Text>

        {/* Algorithm Implementation */}
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Algorithm Implementation</Heading>
            <Text variant="body-default-m">
              <strong>A* Search Algorithm:</strong> Implemented the A* pathfinding algorithm combining g-scores (actual path cost from start) and h-scores (heuristic estimate to goal using Manhattan distance).
            </Text>
            <Text variant="body-default-m">
              <strong>Priority Queue Optimization:</strong> Used priority queues to efficiently manage and traverse nodes based on their f-scores (g + h) for optimal pathfinding performance.
            </Text>
            <Text variant="body-default-m">
              <strong>Heuristic Function:</strong> Manhattan distance heuristic to estimate the cost from any node to the goal, ensuring efficient path exploration.
            </Text>
            <Text variant="body-default-m">
              <strong>Obstacle Navigation:</strong> Dynamic obstacle placement and avoidance system allowing users to create complex pathfinding scenarios.
            </Text>
          </Column>
        </Card>

        {/* Interactive Interface */}
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Interactive Visualization</Heading>
            <Text variant="body-default-m">
              The Pygame-based interface provided comprehensive pathfinding visualization:
            </Text>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "var(--brand-medium)", fontWeight: "bold" }}>•</span>
                Interactive grid-based interface for defining start and end points
              </li>
              <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "var(--brand-medium)", fontWeight: "bold" }}>•</span>
                Dynamic obstacle placement with mouse interaction
              </li>
              <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "var(--brand-medium)", fontWeight: "bold" }}>•</span>
                Real-time path exploration visualization showing algorithm steps
              </li>
              <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "var(--brand-medium)", fontWeight: "bold" }}>•</span>
                Clear visual demonstration of optimal path selection
              </li>
            </ul>
          </Column>
        </Card>

        {/* Key Achievements */}
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Key Achievements</Heading>
            <Text variant="body-default-m">
              Being a freshman at the time, this project stretched not just my algorithmic thinking ability, but my ability to actualize it through code. I developed the mantra that you do not understand an algorithm well enough until you have to implement it in a game!
            </Text>
            <Text variant="body-default-m">
              This project demonstrated the power of visual learning and interactive programming, showing how complex algorithms can be made accessible and engaging through thoughtful user interface design.
            </Text>
            <Text variant="body-default-m">
              <strong>Link to Report:</strong>{" "}
              <Text as="a" href="https://www.pdffiller.com/s/6E715pN9l" target="_blank" style={{ color: "var(--brand-medium)", textDecoration: "underline" }}>
                https://www.pdffiller.com/s/6E715pN9l
              </Text>
            </Text>
          </Column>
        </Card>

        {/* Technologies & Report */}
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Technologies & Report</Heading>
            <Text variant="body-default-m">
              <strong>Tools & Technologies:</strong> Python, Object-Oriented Programming, Data Structures
            </Text>
          </Column>
        </Card>
      </Column>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `
      }} />
    </Column>
  );
}
