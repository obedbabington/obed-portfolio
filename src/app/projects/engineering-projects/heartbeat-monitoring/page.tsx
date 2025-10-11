import { Column, Heading, Meta, Schema, Text, Card, Media } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { BackButton } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: "Heartbeat Monitoring System",
    description: "Developed a real-time heartbeat monitoring system using Arduino and pulse sensors, featuring heart rate calculation algorithms, LCD display output, and alert systems for abnormal readings.",
    path: "/projects/engineering-projects/heartbeat-monitoring",
    baseURL,
  });
}

export default function HeartbeatMonitoring() {
  return (
    <Column maxWidth="m" paddingTop="24">
      {/* Back Button */}
      <BackButton href="/projects/engineering-projects" label="Back to Engineering Projects" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/projects/engineering-projects/heartbeat-monitoring"
        title="Heartbeat Monitoring System"
        description="Developed a real-time heartbeat monitoring system using Arduino and pulse sensors, featuring heart rate calculation algorithms, LCD display output, and alert systems for abnormal readings."
        image={`/api/og/generate?title=${encodeURIComponent("Heartbeat Monitoring System")}`}
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
          ← Back to Engineering Projects
        </Text>
      </Column>

      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Heartbeat Monitoring System
        </Heading>
        <Text variant="body-default-l" align="center" onBackground="neutral-weak">
          <strong>Date:</strong> Jan 2023 - Mar 2023
        </Text>
        <Text variant="body-default-l" align="center" onBackground="neutral-weak">
          <strong>Tools & Technologies:</strong> Arduino, C/C++, Heart Rate Sensor, LCD Display, Medical Electronics
        </Text>
      </Column>

      {/* Project Image */}
      <Column marginBottom="xl" paddingX="l">
        <Media 
          aspectRatio="16 / 9" 
          radius="m" 
          alt="Heartbeat Monitoring System" 
          src="/images/projects/heartbeat.png" 
        />
      </Column>

      {/* Project Video */}
      <Column marginBottom="xl" paddingX="l">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Project Demonstration</Heading>
            <Text variant="body-default-m" marginBottom="m">
              Watch the heartbeat monitoring system in action:
            </Text>
            <video
              controls
              style={{
                width: "100%",
                borderRadius: "8px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)"
              }}
            >
              <source src="/videos/heartbeat-monitoring.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Column>
        </Card>
      </Column>

      <Column paddingX="l" gap="xl">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Project Overview</Heading>
            <Text variant="body-default-m">
              Developed a real-time heartbeat monitoring system using Arduino and pulse sensors, featuring heart rate calculation algorithms, LCD display output, and alert systems for abnormal readings. The system provides continuous monitoring capabilities with immediate visual feedback and safety alerts.
            </Text>
            <Text variant="body-default-m">
              The project involved signal processing, sensor interfacing, and medical electronics principles to create a reliable and accurate heart rate monitoring device suitable for health monitoring applications.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Technical Implementation</Heading>
            <Text variant="body-default-m">
              <strong>Sensor Integration:</strong> Pulse sensor interfacing with Arduino for real-time heart rate detection and signal processing.
            </Text>
            <Text variant="body-default-m">
              <strong>Signal Processing:</strong> Heart rate calculation algorithms to process pulse sensor data and compute accurate BPM readings.
            </Text>
            <Text variant="body-default-m">
              <strong>Display System:</strong> LCD display for real-time heart rate visualization and system status information.
            </Text>
            <Text variant="body-default-m">
              <strong>Alert System:</strong> Built-in alert mechanisms for abnormal heart rate readings and safety monitoring.
            </Text>
            <Text variant="body-default-m">
              <strong>Data Logging:</strong> Continuous monitoring and data collection capabilities for health tracking.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Key Features</Heading>
            <Text variant="body-default-m">
              • Real-time heart rate monitoring with high accuracy
            </Text>
            <Text variant="body-default-m">
              • LCD display for immediate visual feedback
            </Text>
            <Text variant="body-default-m">
              • Alert system for abnormal readings
            </Text>
            <Text variant="body-default-m">
              • Arduino-based implementation with C/C++ programming
            </Text>
            <Text variant="body-default-m">
              • Medical electronics and sensor integration
            </Text>
            <Text variant="body-default-m">
              • Continuous monitoring capabilities
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
