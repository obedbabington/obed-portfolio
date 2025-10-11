import { Column, Heading, Meta, Schema, Text, Card, Media } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { BackButton } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: "Low-Cost Optical Heartbeat Monitoring System",
    description: "Co-developed a low-cost heartbeat monitoring device leveraging an infrared LED–phototransistor pair to detect pulse signals through light absorption and reflection.",
    path: "/projects/heartbeat-monitoring",
    baseURL,
  });
}

export default function HeartbeatMonitoring() {
  return (
    <Column maxWidth="m" paddingTop="24">
      {/* Back Button */}
      <BackButton href="/projects" label="Back to Projects" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/projects/heartbeat-monitoring"
        title="Low-Cost Optical Heartbeat Monitoring System"
        description="Co-developed a low-cost heartbeat monitoring device leveraging an infrared LED–phototransistor pair to detect pulse signals through light absorption and reflection."
        image={`/api/og/generate?title=${encodeURIComponent("Heartbeat Monitoring System")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Low-Cost Optical Heartbeat Monitoring System
        </Heading>
        <Text variant="body-default-l" align="center" onBackground="neutral-weak">
          <strong>Date:</strong> Mar 2024 - May 2024
        </Text>
        <Text variant="body-default-l" align="center" onBackground="neutral-weak">
          <strong>Tools & Technologies:</strong> Analog Signal Processing, Electronic Instrumentation
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
              Co-developed a low-cost heartbeat monitoring device leveraging an infrared LED–phototransistor pair to detect pulse signals through light absorption and reflection. Designed a multi-stage signal conditioning chain with active high-pass and low-pass filters, DC offset removal, and high-gain amplification using LM324N op-amps to isolate and strengthen heartbeat waveforms.
            </Text>
            <Text variant="body-default-m">
              Validated performance through oscilloscope-based waveform analysis, converting signal frequency to real-time BPM measurements. The project demonstrated practical applications of analog signal processing, biomedical instrumentation, and electronic circuit design.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Technical Implementation</Heading>
            <Text variant="body-default-m">
              <strong>Optical Sensing:</strong> Infrared LED–phototransistor pair for non-invasive pulse detection through light absorption and reflection.
            </Text>
            <Text variant="body-default-m">
              <strong>Signal Conditioning:</strong> Multi-stage signal processing chain with active high-pass and low-pass filters for noise reduction and signal isolation.
            </Text>
            <Text variant="body-default-m">
              <strong>DC Offset Removal:</strong> Implemented DC offset elimination to ensure proper signal processing and amplification.
            </Text>
            <Text variant="body-default-m">
              <strong>High-Gain Amplification:</strong> Used LM324N operational amplifiers for high-gain amplification of weak heartbeat signals.
            </Text>
            <Text variant="body-default-m">
              <strong>Signal Analysis:</strong> Oscilloscope-based waveform analysis for signal validation and frequency measurement.
            </Text>
            <Text variant="body-default-m">
              <strong>BPM Calculation:</strong> Real-time conversion of signal frequency to beats per minute (BPM) measurements.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Key Features</Heading>
            <Text variant="body-default-m">
              • Non-invasive optical pulse detection using infrared technology
            </Text>
            <Text variant="body-default-m">
              • Multi-stage analog signal conditioning and filtering
            </Text>
            <Text variant="body-default-m">
              • High-gain amplification for weak signal processing
            </Text>
            <Text variant="body-default-m">
              • Real-time BPM calculation and display
            </Text>
            <Text variant="body-default-m">
              • Low-cost design suitable for educational and prototyping applications
            </Text>
            <Text variant="body-default-m">
              • Comprehensive signal validation and testing framework
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Project Report</Heading>
            <Text variant="body-default-m">
              Detailed project documentation and technical analysis available in the project report:
            </Text>
            <Text variant="body-default-s" onBackground="neutral-weak" style={{ fontStyle: "italic" }}>
              <a href="https://pdf.ac/sldf61hx" target="_blank" rel="noopener noreferrer">
                Project Report (PDF)
              </a>
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
