import { Column, Heading, Meta, Schema, Text, Card, Media } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { BackButton } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: "Calculus-Driven Data Collection, Analysis & Recommendations for Target Campus Locations",
    description: "Developed a comprehensive data collection and analysis system using calculus principles to study and optimize campus locations, combining hardware sensors with mathematical modeling.",
    path: "/projects/engineering-projects/calculus-data-collection",
    baseURL,
  });
}

export default function CalculusDataCollection() {
  return (
    <Column maxWidth="m" paddingTop="24">
      {/* Back Button */}
      <BackButton href="/projects/engineering-projects" label="Back to Engineering Projects" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/projects/engineering-projects/calculus-data-collection"
        title="Calculus-Driven Data Collection, Analysis & Recommendations for Target Campus Locations"
        description="Developed a comprehensive data collection and analysis system using calculus principles to study and optimize campus locations, combining hardware sensors with mathematical modeling."
        image={`/api/og/generate?title=${encodeURIComponent("Calculus Data Collection")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Calculus-Driven Data Collection, Analysis & Recommendations for Target Campus Locations
        </Heading>
        <Text variant="body-default-l" align="center" onBackground="neutral-weak">
          <strong>Date:</strong> 2023
        </Text>
        <Text variant="body-default-l" align="center" onBackground="neutral-weak">
          <strong>Tools & Technologies:</strong> Arduino for Data Collection, Geogebra
        </Text>
      </Column>

      {/* Project Image */}
      <Column marginBottom="xl" paddingX="l">
        <Media 
          aspectRatio="16 / 9" 
          radius="m" 
          alt="Calculus Data Collection" 
          src="/images/projects/calculusdriven.png" 
        />
      </Column>

      <Column paddingX="l" gap="xl">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Project Overview</Heading>
            <Text variant="body-default-m">
              Developed a comprehensive data collection and analysis system using calculus principles to study and optimize campus locations, combining hardware sensors with mathematical modeling. Using Arduino-based sensors for data collection and Geogebra for mathematical modeling, I developed a system to analyze various factors affecting campus locations and provide data-driven recommendations.
            </Text>
            <Text variant="body-default-m">
              This project demonstrated the integration of hardware development with mathematical analysis to solve real-world optimization problems.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Technical Implementation</Heading>
            <Text variant="body-default-m">
              <strong>Hardware Development:</strong> Designed and implemented Arduino-based sensors to collect data on various environmental and usage factors across different campus locations.
            </Text>
            <Text variant="body-default-m">
              <strong>Mathematical Modeling:</strong> Applied calculus principles to analyze the collected data and identify patterns, trends, and optimization opportunities.
            </Text>
            <Text variant="body-default-m">
              <strong>Data Visualization:</strong> Used Geogebra to create visual representations of the data and mathematical models, making the analysis more accessible and interpretable.
            </Text>
            <Text variant="body-default-m">
              <strong>Recommendation System:</strong> Developed data-driven recommendations for campus location optimization based on mathematical analysis.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Key Outcomes</Heading>
            <Text variant="body-default-m">
              • Comprehensive data collection system using Arduino sensors
            </Text>
            <Text variant="body-default-m">
              • Mathematical models using calculus principles for data analysis
            </Text>
            <Text variant="body-default-m">
              • Data visualization and interpretation using Geogebra
            </Text>
            <Text variant="body-default-m">
              • Data-driven recommendations for campus location optimization
            </Text>
            <Text variant="body-default-m">
              • Integration of hardware development with mathematical modeling
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
