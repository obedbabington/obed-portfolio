import { Column, Heading, Meta, Schema, Text, Card, Media, Row } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { BackButton } from "@/components";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: "Accelerating Embedded Neural Network Inference on FPGA Softcore Processors",
    description: "Designed a fully on-chip hardware-software co-design framework using FPGA-based softcore processor and custom VHDL acceleration modules. Achieved 420× speedup over baseline execution.",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Accelerating Embedded Neural Network Inference on FPGA Softcore Processors")}`,
    path: "/research/major/fpga-neural-networks",
  });
}

export default function FPGANeuralNetworks() {
  return (
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      {/* Back Button */}
      <BackButton href="/research/major" label="Back to Major Research" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/research/major/fpga-neural-networks"
        title={`Accelerating Embedded Neural Network Inference on FPGA Softcore Processors – ${person.name}`}
        description="Designed a fully on-chip hardware-software co-design framework using FPGA-based softcore processor and custom VHDL acceleration modules. Achieved 420× speedup over baseline execution."
        image={`/api/og/generate?title=${encodeURIComponent("Accelerating Embedded Neural Network Inference on FPGA Softcore Processors")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Project Header */}
      <Column marginBottom="xl" paddingX="l" align="center" marginTop="l">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Accelerating Embedded Neural Network Inference on FPGA Softcore Processors
        </Heading>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="m">
          <strong>Date:</strong> Sep 2024 - May 2025
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="l">
          <strong>Tools & Technologies:</strong> Artix-7 FPGA, Xilinx MicroBlaze, Vivado, Vitis IDE, C/C++, VHDL
        </Text>
        <Text variant="body-default-l" align="center">
          Designed a fully on-chip hardware-software co-design framework using FPGA-based softcore processor and custom VHDL acceleration modules. Achieved 420× speedup over baseline execution, earning the Technical Excellence Award in Computer Engineering.
        </Text>
      </Column>

      {/* Project Images */}
      <Column paddingX="l" gap="l" marginBottom="xl">
        <Media
          aspectRatio="16 / 9"
          radius="m"
          alt="FPGA Neural Networks"
          src="/images/research/fpga_cover.jpg"
        />
      </Column>

      {/* Project Content */}
      <Column paddingX="l" gap="l">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Project Overview</Heading>
            <Text variant="body-default-m">
              In this project, I tackled one of the core challenges of embedded machine learning: achieving real-time performance without the bottlenecks of external communication overhead.
            </Text>
            <Text variant="body-default-m">
              While embedded systems often rely on off-chip accelerators to speed up inference, the latency introduced by data transfers across system boundaries can be crippling for applications that demand immediacy, such as robotics, wearable health devices, or autonomous sensing platforms.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Technical Approach</Heading>
            <Text variant="body-default-m">
              To address this, I designed a fully on-chip hardware-software co-design framework using an FPGA-based softcore processor (MicroBlaze) and custom-built VHDL acceleration modules for neural network operations. By tightly integrating the accelerator within the FPGA fabric and eliminating external communication overhead, I created a pipeline that allowed inference tasks to remain entirely on-chip.
            </Text>
            <Text variant="body-default-m">
              One of the aspects I am most proud of in this work is the end-to-end custom acceleration pipeline I implemented. Rather than relying on pre-existing IP cores or black-box accelerators, I built VHDL-based modules tailored to neural network primitives, ensuring both flexibility and efficiency. This gave me hands-on experience in hardware description languages while deepening my understanding of how low-level design decisions ripple up to impact system-level performance.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Results & Impact</Heading>
            <Text variant="body-default-m">
              The experimental results were striking: my design achieved a 420× speedup over baseline softcore execution, showcasing how carefully engineered hardware-software co-design can radically transform performance in constrained embedded environments, earning me the Technical Excellence Award in Computer Engineering.
            </Text>
            <Text variant="body-default-m">
              This work reflects my broader interest in pushing the boundaries of embedded AI systems, particularly in contexts where every microsecond matters.
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
