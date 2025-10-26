import { Column, Heading, Meta, Schema, Text, Card, Media } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { BackButton } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: "32-Bit Single-Cycle MIPS Processor Components in VHDL",
    description: "Extended the design of a single-cycle CPU by implementing a 32-bit MIPS processor in VHDL, incorporating key modules including the ALU, register file, instruction memory, data memory, and control unit.",
    path: "/projects/engineering-projects/32-bit-mips-processor",
    baseURL,
  });
}

export default function MIPSProcessor() {
  return (
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      {/* Back Button */}
      <BackButton href="/projects/engineering-projects" label="Back to Engineering Projects" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/projects/engineering-projects/32-bit-mips-processor"
        title="32-Bit Single-Cycle MIPS Processor Components in VHDL"
        description="Extended the design of a single-cycle CPU by implementing a 32-bit MIPS processor in VHDL, incorporating key modules including the ALU, register file, instruction memory, data memory, and control unit."
        image={`/api/og/generate?title=${encodeURIComponent("32-Bit Single-Cycle MIPS Processor Components in VHDL")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Project Header */}
      <Column marginBottom="xl" paddingX="l" align="center" marginTop="l">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          32-Bit Single-Cycle MIPS Processor Components in VHDL
        </Heading>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="m">
          Sep 2023 - Dec 2023
        </Text>
        <Text variant="body-default-m" onBackground="neutral-weak" align="center">
          VHDL, FPGA, ModelSim, Digital System Design, MIPS Architecture
        </Text>
      </Column>

      {/* Project Image */}
      <Column marginBottom="xl" paddingX="l">
        <Media 
          aspectRatio="16 / 9" 
          radius="m" 
          alt="32-Bit MIPS Processor Architecture" 
          src="/images/projects/mips.png" 
        />
      </Column>

      <Column paddingX="l" gap="xl">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Project Overview</Heading>
            <Text variant="body-default-m">
              Extended the design of a single-cycle CPU by implementing a 32-bit MIPS processor in VHDL, incorporating key modules including the ALU, register file, instruction memory, data memory, and control unit, each verified with dedicated testbenches and simulation waveforms.
            </Text>
            <Text variant="body-default-m">
              Implemented a subset of MIPS instructions (arithmetic, logical, branching, memory access, and jump operations) while ensuring correct datapath and control signal coordination.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Key Components</Heading>
            <Text variant="body-default-m">
              <strong>Arithmetic Logic Unit (ALU):</strong> Implemented 32-bit ALU supporting arithmetic, logical, and comparison operations for MIPS instruction set.
            </Text>
            <Text variant="body-default-m">
              <strong>Register File:</strong> Designed 32-register file with dual read ports and single write port for efficient data access.
            </Text>
            <Text variant="body-default-m">
              <strong>Instruction Memory:</strong> Implemented instruction memory module for program storage and instruction fetching.
            </Text>
            <Text variant="body-default-m">
              <strong>Data Memory:</strong> Created data memory interface for load and store operations with proper addressing.
            </Text>
            <Text variant="body-default-m">
              <strong>Control Unit:</strong> Developed control unit generating appropriate control signals for instruction execution.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">MIPS Instruction Set</Heading>
            <Text variant="body-default-m">
              <strong>Arithmetic Instructions:</strong> ADD, SUB, ADDI for basic arithmetic operations
            </Text>
            <Text variant="body-default-m">
              <strong>Logical Instructions:</strong> AND, OR, XOR, NOR for bitwise operations
            </Text>
            <Text variant="body-default-m">
              <strong>Branching Instructions:</strong> BEQ, BNE for conditional branching
            </Text>
            <Text variant="body-default-m">
              <strong>Memory Instructions:</strong> LW, SW for load and store operations
            </Text>
            <Text variant="body-default-m">
              <strong>Jump Instructions:</strong> J, JAL for unconditional jumps and function calls
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Testing & Verification</Heading>
            <Text variant="body-default-m">
              <strong>Testbench Development:</strong> Created comprehensive testbenches for each component to verify functionality
            </Text>
            <Text variant="body-default-m">
              <strong>Simulation Waveforms:</strong> Analyzed simulation waveforms in ModelSim to ensure correct operation
            </Text>
            <Text variant="body-default-m">
              <strong>Instruction Testing:</strong> Verified each implemented instruction with dedicated test cases
            </Text>
            <Text variant="body-default-m">
              <strong>Integration Testing:</strong> Tested complete processor with multi-instruction programs
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Key Achievements</Heading>
            <Text variant="body-default-m">
              • Successfully implemented complete 32-bit MIPS processor architecture in VHDL
            </Text>
            <Text variant="body-default-m">
              • Verified all components with comprehensive testbenches and simulation
            </Text>
            <Text variant="body-default-m">
              • Implemented subset of MIPS instruction set with proper control flow
            </Text>
            <Text variant="body-default-m">
              • Demonstrated understanding of computer architecture and digital design principles
            </Text>
            <Text variant="body-default-m">
              • Applied VHDL programming and FPGA development methodologies
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
