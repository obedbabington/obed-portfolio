import { Column, Heading, Meta, Schema, Text, Card, Media } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { BackButton } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: "16-bit CPU in Logism-Evolution",
    description: "Collaborated in the design and implementation of a custom 16-bit CPU using Logisim-Evolution, incorporating key architectural components including ALU, register file, datapath, memory modules, and control unit.",
    path: "/projects/engineering-projects/16-bit-cpu",
    baseURL,
  });
}

export default function SixteenBitCPU() {
  return (
    <Column maxWidth="m" paddingTop="24">
      {/* Back Button */}
      <BackButton href="/projects/engineering-projects" label="Back to Engineering Projects" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/projects/engineering-projects/16-bit-cpu"
        title="16-bit CPU in Logism-Evolution"
        description="Collaborated in the design and implementation of a custom 16-bit CPU using Logisim-Evolution, incorporating key architectural components including ALU, register file, datapath, memory modules, and control unit."
        image={`/api/og/generate?title=${encodeURIComponent("16-bit CPU")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Page Title */}
      <Column marginBottom="l" paddingX="l" align="center">
        <Heading variant="heading-strong-xl">16-bit CPU in Logisim-Evolution</Heading>
      </Column>

      <Column marginBottom="l" paddingX="l" align="center">
        <Text variant="body-default-xs" onBackground="neutral-weak" style={{ textTransform: "uppercase", fontWeight: "600" }}>
          Digital Logic Design • Mar 2024 - May 2024
        </Text>
      </Column>

      {/* Project Image */}
      <Column marginBottom="xl" paddingX="l">
        <Media 
          aspectRatio="16 / 9" 
          radius="m" 
          alt="16-bit CPU in Logisim-Evolution" 
          src="/images/projects/logism.jpeg" 
        />
      </Column>

      <Column paddingX="l" gap="xl">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Project Overview</Heading>
            <Text variant="body-default-m">
              Collaborated in the design and implementation of a custom 16-bit CPU using Logisim-Evolution, incorporating key architectural components including an ALU (arithmetic + relational operations), register file, datapath, memory modules, and a micro-architected control unit.
            </Text>
            <Text variant="body-default-m">
              The processor executed a small instruction set through a sequenced Fetch–Decode–Execute cycle, coordinated by truth-table–driven control signals. Demonstrated the ability to integrate digital logic, combinational/sequential circuits, and memory interfacing into a functional computing system.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Architectural Components</Heading>
            <Text variant="body-default-m">
              <strong>Arithmetic Logic Unit (ALU):</strong> Implemented arithmetic and relational operations for 16-bit data processing.
            </Text>
            <Text variant="body-default-m">
              <strong>Register File:</strong> Designed multi-port register file for data storage and retrieval during instruction execution.
            </Text>
            <Text variant="body-default-m">
              <strong>Datapath:</strong> Created comprehensive data flow architecture connecting all CPU components.
            </Text>
            <Text variant="body-default-m">
              <strong>Memory Modules:</strong> Implemented instruction and data memory interfaces for program storage and execution.
            </Text>
            <Text variant="body-default-m">
              <strong>Control Unit:</strong> Developed micro-architected control unit with truth-table–driven control signals.
            </Text>
            <Text variant="body-default-m">
              <strong>Instruction Set:</strong> Designed and implemented a small but functional instruction set architecture.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Execution Cycle</Heading>
            <Text variant="body-default-m">
              The processor executed instructions through a well-defined Fetch–Decode–Execute cycle:
            </Text>
            <Text variant="body-default-m">
              <strong>Fetch:</strong> Retrieve instruction from memory and load into instruction register.
            </Text>
            <Text variant="body-default-m">
              <strong>Decode:</strong> Decode instruction opcode and generate appropriate control signals.
            </Text>
            <Text variant="body-default-m">
              <strong>Execute:</strong> Perform the operation specified by the instruction using ALU and register file.
            </Text>
            <Text variant="body-default-m">
              All operations were coordinated by truth-table–driven control signals, ensuring proper sequencing and data flow throughout the system.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Key Achievements</Heading>
            <Text variant="body-default-m">
              • Successfully integrated digital logic, combinational/sequential circuits, and memory interfacing
            </Text>
            <Text variant="body-default-m">
              • Implemented complete CPU architecture from scratch using Logisim-Evolution
            </Text>
            <Text variant="body-default-m">
              • Demonstrated understanding of computer architecture principles and instruction execution
            </Text>
            <Text variant="body-default-m">
              • Created functional computing system with proper control flow and data management
            </Text>
            <Text variant="body-default-m">
              • Applied digital logic design principles to real-world computer architecture problems
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
