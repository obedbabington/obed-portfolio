import { Column, Heading, Meta, Schema, Text, Card, Media, SmartLink } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { BackButton } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: "On-Chip vs. Off-Chip FPGA Acceleration for Embedded Neural Networks",
    description: "Conducted systematic comparison of on-chip vs off-chip FPGA acceleration strategies for embedded machine learning. Benchmarked four distinct hardware configurations.",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("On-Chip vs. Off-Chip FPGA Acceleration for Embedded Neural Networks")}`,
    path: "/research/major/fpga-acceleration-comparison",
  });
}

export default function FPGAAccelerationComparison() {
  return (
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      {/* Back Button */}
      <BackButton href="/research/major" label="Back to Major Research" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/research/major/fpga-acceleration-comparison"
        title={`On-Chip vs. Off-Chip FPGA Acceleration for Embedded Neural Networks – ${person.name}`}
        description="Conducted systematic comparison of on-chip vs off-chip FPGA acceleration strategies for embedded machine learning. Benchmarked four distinct hardware configurations."
        image={`/api/og/generate?title=${encodeURIComponent("On-Chip vs. Off-Chip FPGA Acceleration for Embedded Neural Networks")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Project Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          On-Chip vs. Off-Chip FPGA Acceleration for Embedded Neural Networks
        </Heading>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="m">
          <strong>Date:</strong> Sep 2024 - May 2025
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="m">
          <strong>Tools & Technologies:</strong> STM32 (Cortex-M), Artix-7 FPGA, Xilinx MicroBlaze, Vivado, Vitis IDE, STM32CubeIDE, C/C++, VHDL
        </Text>
        
        {/* Video Link */}
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="l">
          <strong>Link:</strong> <SmartLink href="https://youtu.be/J5wRpPMIeQA" target="_blank" rel="noopener noreferrer">Watch the project demonstration video on YouTube</SmartLink>
        </Text>
        
        <Text variant="body-default-l" align="center">
          Conducted systematic comparison of on-chip vs off-chip FPGA acceleration strategies for embedded machine learning. Benchmarked four distinct hardware configurations to isolate the impact of communication overhead on inference latency.
        </Text>
      </Column>

      {/* Project Images */}
      <Column paddingX="l" gap="l" marginBottom="xl">
        <Media
          aspectRatio="16 / 9"
          radius="m"
          alt="FPGA Acceleration Comparison"
          src="/images/research/fpga-acceleration-comparison_cover.png"
        />
      </Column>

      {/* Project Content */}
      <Column paddingX="l" gap="l">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Research Question</Heading>
            <Text variant="body-default-m">
              Whereas my earlier work focused on eliminating communication bottlenecks through an on-chip acceleration strategy, this project zoomed out to ask a broader systems-level question: What is the actual trade-off between on-chip and off-chip FPGA acceleration strategies for embedded machine learning?
            </Text>
            <Text variant="body-default-m">
              The motivation was clear. In the embedded systems community, both on-chip and off-chip accelerators are widely discussed, yet direct, systematic comparisons are surprisingly scarce. I wanted to provide a rigorous evaluation that could help both researchers and practitioners make informed design choices, depending on whether their priority was latency, flexibility, or scalability.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Methodology</Heading>
            <Text variant="body-default-m">
              To this end, I constructed and benchmarked four distinct hardware configurations spanning both silicon-based microcontrollers and FPGA softcore processors, with accelerators placed either on-chip (directly in FPGA fabric) or off-chip (interfacing through communication buses). By holding the neural network workloads constant and varying only the architectural setup, I was able to isolate the true impact of communication overhead on inference latency.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Key Insights</Heading>
            <Text variant="body-default-m">
              For me personally, this project underscored the importance of asking the right systems-level questions. Sometimes the most impactful contribution is not just building something faster, but creating a structured comparison that helps others make better design trade-offs. This mindset, of combining deep technical implementation with broad architectural reasoning, is one I hope to carry forward into future research.
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
