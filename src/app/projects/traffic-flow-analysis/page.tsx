import { Column, Heading, Meta, Schema, Text, Card } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { BackButton } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: "Modelling & Analyzing the Traffic Flow Network of Ashesi University's Canteen with Linear Algebra",
    description: "Applied linear algebra techniques to model and analyze traffic flow patterns in the university canteen, providing insights into optimization and efficiency improvements.",
    path: "/projects/traffic-flow-analysis",
    baseURL,
  });
}

export default function TrafficFlowAnalysis() {
  return (
    <Column maxWidth="m" paddingTop="24">
      {/* Back Button */}
      <BackButton href="/projects" label="Back to Projects" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/projects/traffic-flow-analysis"
        title={`Modelling & Analyzing the Traffic Flow Network of Ashesi University's Canteen with Linear Algebra – ${person.name}`}
        description="Applied linear algebra techniques to model and analyze traffic flow patterns in the university canteen, providing insights into optimization and efficiency improvements."
        image={`/api/og/generate?title=${encodeURIComponent("Traffic Flow Analysis")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Project Header */}
      <Column marginBottom="xl" paddingX="l" align="center" marginTop="l">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Modelling & Analyzing the Traffic Flow Network of Ashesi University's Canteen with Linear Algebra
        </Heading>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="m">
          <strong>Date:</strong> 2023
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="l">
          <strong>Tools & Technologies:</strong> Mathematical Modelling (MATLAB)
        </Text>
        <Text variant="body-default-l" align="center">
          Applied linear algebra techniques to model and analyze traffic flow patterns in the university canteen, providing insights into optimization and efficiency improvements.
        </Text>
      </Column>

      {/* Project Content */}
      <Column paddingX="l" gap="l">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Project Overview</Heading>
            <Text variant="body-default-m">
              This project involved applying mathematical modeling techniques to analyze the traffic flow patterns in Ashesi University's canteen. Using linear algebra principles, I developed a model to understand how students move through the canteen space and identify potential bottlenecks or optimization opportunities.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Mathematical Approach</Heading>
            <Text variant="body-default-m">
              The project used linear algebra techniques to represent the canteen as a network of nodes and edges, where each node represents a specific area (entrance, food stations, seating areas, exit) and edges represent the flow paths between these areas. This mathematical representation allowed for systematic analysis of traffic patterns.
            </Text>
            <Text variant="body-default-m">
              By modeling these transitions mathematically, the project aimed to provide insights into the complex dynamics of traffic flow and identify opportunities for improving efficiency and reducing congestion.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Practical Applications</Heading>
            <Text variant="body-default-m">
              The analysis provided valuable insights into how the canteen layout and flow patterns could be optimized to improve the student experience. This project demonstrated the practical application of mathematical modeling in real-world scenarios and provided a foundation for understanding how mathematical tools can be used to solve everyday problems.
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
