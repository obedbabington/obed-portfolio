import { Column, Heading, Meta, Schema, Text, Card, Media, Button } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { BackButton } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: "Real-Time Morse Code Decoder",
    description: "Designed and implemented a real-time Morse code decoder using Arduino that converts audio signals into readable text, featuring noise filtering and timing analysis for accurate character recognition.",
    path: "/projects/engineering-projects/morse-code-decoder",
    baseURL,
  });
}

export default function MorseCodeDecoder() {
  return (
    <Column maxWidth="m" paddingTop="24">
      {/* Back Button */}
      <BackButton href="/projects/engineering-projects" label="Back to Engineering Projects" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/projects/engineering-projects/morse-code-decoder"
        title="Real-Time Morse Code Decoder"
        description="Designed and implemented a real-time Morse code decoder using Arduino that converts audio signals into readable text, featuring noise filtering and timing analysis for accurate character recognition."
        image={`/api/og/generate?title=${encodeURIComponent("Real-Time Morse Code Decoder")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Real-Time Morse Code Decoder
        </Heading>
        <Text variant="body-default-l" align="center" onBackground="neutral-weak">
          <strong>Date:</strong> Jan 2023 - Mar 2023
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
          alt="Real-Time Morse Code Decoder" 
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
              Designed and implemented a real-time Morse code decoder using Arduino that converts audio signals into readable text. The system features advanced noise filtering and timing analysis for accurate character recognition, making it capable of decoding Morse code signals in real-time with high accuracy.
            </Text>
            <Text variant="body-default-m">
              The project involved signal processing techniques, digital filtering, and timing analysis to distinguish between dots, dashes, and spaces in Morse code transmissions. The system was tested using an oscilloscope to validate signal processing and timing accuracy.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Technical Implementation</Heading>
            <Text variant="body-default-m">
              <strong>Audio Input Processing:</strong> Arduino-based audio signal capture and analog-to-digital conversion for Morse code input.
            </Text>
            <Text variant="body-default-m">
              <strong>Noise Filtering:</strong> Digital signal processing techniques to filter out background noise and improve signal clarity.
            </Text>
            <Text variant="body-default-m">
              <strong>Timing Analysis:</strong> Precise timing measurements to distinguish between dots, dashes, and character/word spacing.
            </Text>
            <Text variant="body-default-m">
              <strong>Character Recognition:</strong> Algorithm to convert timing patterns into Morse code characters and text output.
            </Text>
            <Text variant="body-default-m">
              <strong>Real-time Display:</strong> Immediate text output display as Morse code is decoded in real-time.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Testing & Validation</Heading>
            <Text variant="body-default-m">
              <strong>Oscilloscope Analysis:</strong> Used oscilloscope to validate signal processing and timing accuracy of the decoder.
            </Text>
            <Text variant="body-default-m">
              <strong>Signal Quality Testing:</strong> Tested the system with various signal qualities and noise levels to ensure robust operation.
            </Text>
            <Text variant="body-default-m">
              <strong>Accuracy Validation:</strong> Verified decoding accuracy with known Morse code sequences and real-world transmissions.
            </Text>
            <Text variant="body-default-m">
              <strong>Performance Optimization:</strong> Fine-tuned timing parameters and filtering algorithms for optimal performance.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Key Features</Heading>
            <Text variant="body-default-m">
              • Real-time Morse code decoding with high accuracy
            </Text>
            <Text variant="body-default-m">
              • Advanced noise filtering for improved signal quality
            </Text>
            <Text variant="body-default-m">
              • Precise timing analysis for character recognition
            </Text>
            <Text variant="body-default-m">
              • Arduino-based implementation with C/C++ programming
            </Text>
            <Text variant="body-default-m">
              • Oscilloscope validation and testing
            </Text>
            <Text variant="body-default-m">
              • Breadboard prototyping and circuit integration
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
