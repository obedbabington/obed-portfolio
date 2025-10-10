import { Column, Heading, Meta, Schema, Text, Row, Icon, Card } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import { BackButton } from "@/components";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: "Gender Recognition from Audio Signals - Obed Allotey Babington",
    description: "Developed a gender recognition system from audio signals using MATLAB and digital signal processing techniques, featuring interactive GUI and dual classification approaches.",
    path: "/projects/cs-projects/gender-recognition-audio-signals",
    baseURL,
  });
}

export default function GenderRecognitionAudioSignals() {
  return (
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      {/* Back Button */}
      <BackButton href="/projects/cs-projects" label="Back to CS Projects" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/projects/cs-projects/gender-recognition-audio-signals"
        title="Gender Recognition from Audio Signals"
        description="Developed a gender recognition system from audio signals using MATLAB and digital signal processing techniques"
        image={`/api/og/generate?title=${encodeURIComponent("Gender Recognition from Audio Signals")}`}
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Back Button */}
      <Row marginBottom="l" align="center" gap="s">
        <Icon name="arrowRight" style={{ transform: "rotate(180deg)" }} />
      </Row>

      {/* Page Title */}
      <Column marginBottom="l" paddingX="l" align="center">
        <Heading variant="heading-strong-xl">Gender Recognition from Audio Signals</Heading>
      </Column>

      {/* Project Info */}
      <Column marginBottom="l" paddingX="l" align="center">
        <Text variant="body-default-xs" onBackground="neutral-weak" style={{ textTransform: "uppercase", fontWeight: "600" }}>
          Signals and Systems Project • Mar 2024 - Apr 2024
        </Text>
      </Column>

      {/* Project Image */}
      <Column marginBottom="xl" align="center">
        <div style={{ 
          position: "relative", 
          width: "100%", 
          maxWidth: "600px", 
          height: "400px",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
        }}>
          <Image
            src="/images/projects/image-recognition.png"
            alt="Gender Recognition from Audio Signals"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </Column>

      {/* Content */}
      <Column paddingX="l" gap="l" maxWidth="l" style={{ margin: "0 auto" }}>
        <Text variant="body-default-l" style={{ maxWidth: "100%", lineHeight: "1.6" }}>
          As part of a team project in Signals and Systems, we developed a gender recognition system from audio signals using MATLAB and digital signal processing techniques. Together, we designed a pipeline that began with audio acquisition and filtering using a Butterworth filter, followed by feature extraction through FFT to isolate fundamental frequencies for classification.
        </Text>

        <Text variant="body-default-l" style={{ maxWidth: "100%", lineHeight: "1.6" }}>
          We implemented both a user-defined threshold-based classifier (165 Hz cutoff) and MATLAB's in-built pitch function, allowing us to compare optimization strategies. To make the system interactive, we collaborated on building a MATLAB App Designer GUI, integrating modules for audio upload, playback, waveform visualization, FFT spectrum plotting, and real-time gender classification output.
        </Text>

        {/* Technical Approach */}
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m" maxWidth="l" style={{ margin: "0 auto" }}>
            <Heading variant="heading-strong-l">Technical Implementation</Heading>
            <Text variant="body-default-m" style={{ maxWidth: "100%", lineHeight: "1.6" }}>
              <strong>Signal Processing Pipeline:</strong> Audio acquisition and filtering using Butterworth filter for noise reduction and signal conditioning.
            </Text>
            <Text variant="body-default-m" style={{ maxWidth: "100%", lineHeight: "1.6" }}>
              <strong>Feature Extraction:</strong> FFT-based feature extraction to isolate fundamental frequencies for gender classification.
            </Text>
            <Text variant="body-default-m" style={{ maxWidth: "100%", lineHeight: "1.6" }}>
              <strong>Dual Classification Approaches:</strong> Implemented both threshold-based classifier (165 Hz cutoff) and MATLAB's in-built pitch function for comparison.
            </Text>
            <Text variant="body-default-m" style={{ maxWidth: "100%", lineHeight: "1.6" }}>
              <strong>Interactive GUI:</strong> MATLAB App Designer interface with audio upload, playback, and real-time visualization capabilities.
            </Text>
          </Column>
        </Card>

        {/* GUI Features */}
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m" maxWidth="l" style={{ margin: "0 auto" }}>
            <Heading variant="heading-strong-l">GUI Development</Heading>
            <Text variant="body-default-m" style={{ maxWidth: "100%", lineHeight: "1.6" }}>
              The MATLAB App Designer GUI included comprehensive modules for:
            </Text>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "var(--brand-medium)", fontWeight: "bold" }}>•</span>
                Audio upload and playback functionality
              </li>
              <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "var(--brand-medium)", fontWeight: "bold" }}>•</span>
                Waveform visualization for time-domain analysis
              </li>
              <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "var(--brand-medium)", fontWeight: "bold" }}>•</span>
                FFT spectrum plotting for frequency-domain analysis
              </li>
              <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "var(--brand-medium)", fontWeight: "bold" }}>•</span>
                Real-time gender classification output display
              </li>
            </ul>
          </Column>
        </Card>

        {/* Key Achievements */}
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m" maxWidth="l" style={{ margin: "0 auto" }}>
            <Heading variant="heading-strong-l">Key Achievements</Heading>
            <Text variant="body-default-m" style={{ maxWidth: "100%", lineHeight: "1.6" }}>
              The project not only deepened our collective grasp of signal processing in speech recognition, but also highlighted practical challenges such as sensitivity to pitch variations and background noise—sparking discussions on potential improvements like MFCC-based feature extraction or dataset-driven machine learning models.
            </Text>
            <Text variant="body-default-m" style={{ maxWidth: "100%", lineHeight: "1.6" }}>
              This division of work allowed each team member to contribute across DSP implementation, GUI design, and testing, while reinforcing our understanding of concepts like filtering, sampling, and feature extraction.
            </Text>
            <Text variant="body-default-m">
              <strong>Link to Report:</strong>{" "}
              <Text as="a" href="https://www.pdffiller.com/s/t2Xg63DbB5" target="_blank" style={{ color: "var(--brand-medium)", textDecoration: "underline" }}>
                https://www.pdffiller.com/s/t2Xg63DbB5
              </Text>
            </Text>
          </Column>
        </Card>

        {/* Technologies & Report */}
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m" maxWidth="l" style={{ margin: "0 auto" }}>
            <Heading variant="heading-strong-l">Technologies & Report</Heading>
            <Text variant="body-default-m" style={{ maxWidth: "100%", lineHeight: "1.6" }}>
              <strong>Tools & Technologies:</strong> MATLAB, App Designer, FFT, Butterworth Filter, Signal Processing, GUI Development
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
