import { Column, Heading, Meta, Schema, Text, Card, Media } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { BackButton } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: "Electronic Piano",
    description: "Collaborated in a team to design and build a portable electronic piano replicating one octave (F5–F6) using a 555 Timer IC in astable mode as the oscillator.",
    path: "/projects/engineering-projects/electronic-piano",
    baseURL,
  });
}

export default function ElectronicPiano() {
  return (
    <Column maxWidth="m" paddingTop="24">
      {/* Back Button */}
      <BackButton href="/projects/engineering-projects" label="Back to Engineering Projects" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/projects/engineering-projects/electronic-piano"
        title="Electronic Piano"
        description="Collaborated in a team to design and build a portable electronic piano replicating one octave (F5–F6) using a 555 Timer IC in astable mode as the oscillator."
        image={`/api/og/generate?title=${encodeURIComponent("Electronic Piano")}`}
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
          ←
        </Text>
      </Column>

      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Electronic Piano
        </Heading>
        <Text variant="body-default-l" align="center" onBackground="neutral-weak">
          <strong>Date:</strong> Mar 2022 - Jun 2022
        </Text>
        <Text variant="body-default-l" align="center" onBackground="neutral-weak">
          <strong>Tools & Technologies:</strong> 555 Timer IC, RC Circuits, Breadboarding, Audio Electronics
        </Text>
      </Column>

      {/* Project Image */}
      <Column marginBottom="xl" paddingX="l">
        <Media 
          aspectRatio="16 / 9" 
          radius="m" 
          alt="Electronic Piano" 
          src="/images/projects/piano.jpeg" 
        />
      </Column>

      <Column paddingX="l" gap="xl">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Project Overview</Heading>
            <Text variant="body-default-m">
              Collaborated in a team to design and build a portable electronic piano replicating one octave (F5–F6) using a 555 Timer IC in astable mode as the oscillator. Together, we engineered RC timing circuits to generate square-wave frequencies for specific notes, integrated pushbutton inputs for key selection, and output sound through a 4Ω speaker.
            </Text>
            <Text variant="body-default-m">
              The project demonstrated fundamental electronics principles including oscillator design, RC circuit analysis, and audio electronics while creating a functional musical instrument.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Technical Implementation</Heading>
            <Text variant="body-default-m">
              <strong>Oscillator Design:</strong> 555 Timer IC configured in astable mode to generate square-wave frequencies for musical notes.
            </Text>
            <Text variant="body-default-m">
              <strong>RC Timing Circuits:</strong> Engineered precise RC timing circuits to generate specific frequencies for each note in the octave.
            </Text>
            <Text variant="body-default-m">
              <strong>Key Input System:</strong> Pushbutton inputs for key selection and note activation.
            </Text>
            <Text variant="body-default-m">
              <strong>Audio Output:</strong> 4Ω speaker integration for sound output and audio amplification.
            </Text>
            <Text variant="body-default-m">
              <strong>Circuit Integration:</strong> Breadboard prototyping and final circuit assembly for complete functionality.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Key Features</Heading>
            <Text variant="body-default-m">
              • One octave range (F5–F6) with accurate musical frequencies
            </Text>
            <Text variant="body-default-m">
              • 555 Timer IC-based oscillator design
            </Text>
            <Text variant="body-default-m">
              • Pushbutton key interface for intuitive playing
            </Text>
            <Text variant="body-default-m">
              • 4Ω speaker audio output
            </Text>
            <Text variant="body-default-m">
              • Portable and compact design
            </Text>
            <Text variant="body-default-m">
              • RC circuit-based frequency generation
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
