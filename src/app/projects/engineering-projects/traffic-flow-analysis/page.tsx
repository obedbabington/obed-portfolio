import { Column, Heading, Meta, Schema, Text, Card, Media } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { BackButton } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: "Modelling & Analyzing the Traffic Flow Network of Ashesi University's Canteen with Linear Algebra",
    description: "Applied linear algebra techniques to model and analyze traffic flow patterns in the university canteen, providing insights into optimization and efficiency improvements.",
    path: "/projects/engineering-projects/traffic-flow-analysis",
    baseURL,
  });
}

export default function TrafficFlowAnalysis() {
  return (
    <Column maxWidth="m" paddingTop="24">
      {/* Back Button */}
      <BackButton href="/projects/engineering-projects" label="Back to Engineering Projects" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/projects/engineering-projects/traffic-flow-analysis"
        title="Modelling & Analyzing the Traffic Flow Network of Ashesi University's Canteen with Linear Algebra"
        description="Applied linear algebra techniques to model and analyze traffic flow patterns in the university canteen, providing insights into optimization and efficiency improvements."
        image={`/api/og/generate?title=${encodeURIComponent("Traffic Flow Analysis")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Back Button */}
      <Column marginBottom="l" paddingX="l">
        <Text 
          as="a" 
          href="/projects/engineering-projects" 
          variant="body-default-s"
          style={{ textDecoration: "none", color: "var(--neutral-weak)" }}
        >
          ←
        </Text>
      </Column>

      <Column marginBottom="xl" paddingX="l" align="center" marginTop="l">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Modelling & Analyzing the Traffic Flow Network of Ashesi University's Canteen with Linear Algebra
        </Heading>
        <Text variant="body-default-l" align="center" onBackground="neutral-weak">
          <strong>Date:</strong> 2023
        </Text>
        <Text variant="body-default-l" align="center" onBackground="neutral-weak">
          <strong>Tools & Technologies:</strong> Mathematical Modelling (MATLAB)
        </Text>
      </Column>

      {/* Project Image */}
      <Column marginBottom="xl" paddingX="l">
        <Media 
          aspectRatio="16 / 9" 
          radius="m" 
          alt="Traffic Flow Analysis" 
          src="/images/projects/trafficflow.png" 
        />
      </Column>

      <Column paddingX="l" gap="xl">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Project Overview</Heading>
            <Text variant="body-default-m">
              Applied linear algebra techniques to model and analyze traffic flow patterns in the university canteen, providing insights into optimization and efficiency improvements. The project used mathematical modeling to understand pedestrian movement patterns and identify bottlenecks in the canteen layout.
            </Text>
            <Text variant="body-default-m">
              This project demonstrated the application of mathematical principles to real-world engineering problems, specifically in the optimization of spatial layouts and traffic flow management.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Technical Implementation</Heading>
            <Text variant="body-default-m">
              <strong>Data Collection:</strong> Systematic observation and data collection of pedestrian movement patterns in the canteen.
            </Text>
            <Text variant="body-default-m">
              <strong>Mathematical Modeling:</strong> Linear algebra techniques to model traffic flow as a system of equations.
            </Text>
            <Text variant="body-default-m">
              <strong>Analysis:</strong> MATLAB-based analysis to identify flow patterns, bottlenecks, and optimization opportunities.
            </Text>
            <Text variant="body-default-m">
              <strong>Optimization:</strong> Mathematical optimization techniques to suggest layout improvements and efficiency enhancements.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Key Outcomes</Heading>
            <Text variant="body-default-m">
              • Identification of traffic flow bottlenecks in the canteen layout
            </Text>
            <Text variant="body-default-m">
              • Mathematical models for pedestrian movement patterns
            </Text>
            <Text variant="body-default-m">
              • Optimization recommendations for improved efficiency
            </Text>
            <Text variant="body-default-m">
              • Application of linear algebra to real-world engineering problems
            </Text>
            <Text variant="body-default-m">
              • MATLAB-based mathematical modeling and analysis
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
