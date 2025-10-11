import { Column, Heading, Meta, Schema, Text, Card, SmartLink, Media } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { BackButton } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: "Real-Time Morse Code Decoder as Embedded Neural Network",
    description: "Built a neural network–based decoder to translate real-time Morse button-press sequences into text, deployed on both STM32F091RC microcontroller and MicroBlaze/FPGA system.",
    path: "/projects/morse-code-decoder",
    baseURL,
  });
}

export default function MorseCodeDecoder() {
  return (
    <Column maxWidth="m" paddingTop="24" style={{ position: "relative" }}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/projects/morse-code-decoder"
        title="Real-Time Morse Code Decoder as Embedded Neural Network"
        description="Built a neural network–based decoder to translate real-time Morse button-press sequences into text, deployed on both STM32F091RC microcontroller and MicroBlaze/FPGA system."
        image={`/api/og/generate?title=${encodeURIComponent("Real-Time Morse Code Decoder")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Back Button */}
      <BackButton href="/projects" label="Back to Projects" />

      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Real-Time Morse Code Decoder as Embedded Neural Network
        </Heading>
        <Text variant="body-default-l" align="center" onBackground="neutral-weak">
          <strong>Date:</strong> Sep 2024 - Dec 2024
        </Text>
        <Text variant="body-default-l" align="center" onBackground="neutral-weak">
          <strong>Tools & Technologies:</strong> TensorFlow, STM32F091RC, Xilinx Vivado, Vitis, MicroBlaze softcore processor, Embedded C
        </Text>
      </Column>

      {/* Project Image */}
      <Column marginBottom="xl" paddingX="l">
        <Media 
          aspectRatio="16 / 9" 
          radius="m" 
          alt="Morse Code Decoder Neural Network" 
          src="/images/projects/morsecode.jpg" 
        />
      </Column>

      {/* Demo Video Buttons */}
      <Column align="center" gap="m" marginBottom="xl" paddingX="l">
        <Button
          href="https://www.dropbox.com/scl/fi/jy6d3g7wvqblsr62rylzw/Morse-Code-Model-Demo.mp4?rlkey=qqfbo2bhwr0kg2b1pc1jhthp4&st=0d2bvrbg&dl=0"
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          size="m"
          prefixIcon="openLink"
          style={{ margin: "0 auto" }}
        >
          Watch Morse Code Model Demo Video
        </Button>
        <Button
          href="https://www.dropbox.com/scl/fi/gp4ec76gab5hhbgfup6qq/Morse-code-decoder-on-FPGA.mp4?rlkey=3hlk6m87zxfovbpueej2qeifm&st=99pvtwn6&dl=0"
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          size="m"
          prefixIcon="openLink"
          style={{ margin: "0 auto" }}
        >
          Watch Morse Code Decoder on FPGA Video
        </Button>
      </Column>

      <Column paddingX="l" gap="xl">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Project Overview</Heading>
            <Text variant="body-default-m">
              Built a neural network–based decoder to translate real-time Morse button-press sequences (A–J + unclassified) into text, deployed on both an STM32F091RC microcontroller and a MicroBlaze/FPGA system.
            </Text>
            <Text variant="body-default-m">
              The process spanned data collection (timing data via GPIO interrupts + µs timer), model training (normalized features, label encoding, lightweight MLP with ReLU, dropout, Adam optimizer, early stopping, ~85% accuracy), and weights/bias extraction into a C header for embedded use.
            </Text>
            <Text variant="body-default-m">
              On the STM32, implemented the full inference pipeline in bare-metal C (manual matrix–vector multiplies, ReLU, softmax, timer-based benchmarking), while the MicroBlaze deployment required a custom Vivado/Vitis hardware–software co-design (AXI Timer, GPIO, Interrupt Controller).
            </Text>
            <Text variant="body-default-m">
              Beyond demonstrating embedded ML deployment across two hardware targets, the project served as a benchmark workload for evaluating hardware acceleration tradeoffs in my broader research.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Technical Implementation</Heading>
            <Text variant="body-default-m">
              <strong>Data Collection:</strong> Implemented GPIO interrupt-based timing capture with microsecond precision using hardware timers on both platforms.
            </Text>
            <Text variant="body-default-m">
              <strong>Model Training:</strong> Developed a lightweight Multi-Layer Perceptron (MLP) with ReLU activation, dropout regularization, and Adam optimization, achieving ~85% accuracy on Morse code sequences.
            </Text>
            <Text variant="body-default-m">
              <strong>Embedded Deployment:</strong> Manually implemented matrix-vector multiplication, ReLU, and softmax functions in bare-metal C for both STM32 and MicroBlaze platforms.
            </Text>
            <Text variant="body-default-m">
              <strong>Hardware-Software Co-design:</strong> Created custom Vivado/Vitis designs with AXI Timer, GPIO, and Interrupt Controller IPs for the FPGA implementation.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Key Achievements</Heading>
            <Text variant="body-default-m">
              • Successfully deployed neural network inference on resource-constrained embedded systems
            </Text>
            <Text variant="body-default-m">
              • Achieved 85% accuracy in real-time Morse code translation
            </Text>
            <Text variant="body-default-m">
              • Demonstrated cross-platform compatibility between ARM Cortex-M and FPGA softcore processors
            </Text>
            <Text variant="body-default-m">
              • Created benchmark workload for evaluating hardware acceleration strategies
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Video Demonstrations</Heading>
            <Text variant="body-default-m">
              Check out video demos of the project below:
            </Text>
            <Text variant="body-default-s" onBackground="neutral-weak" style={{ fontStyle: "italic" }}>
              Video demonstrations will be available soon.
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
