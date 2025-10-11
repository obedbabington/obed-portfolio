import { Column, Heading, Meta, Schema, Text, Card, Media, Button } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { BackButton } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: "Basic Electronic Piano",
    description: "Collaborated in a team to design and build a portable electronic piano replicating one octave (F5–F6) using a 555 Timer IC in astable mode as the oscillator.",
    path: "/projects/electronic-piano",
    baseURL,
  });
}

export default function ElectronicPiano() {
  return (
    <Column maxWidth="m" paddingTop="24">
      {/* Back Button */}
      <BackButton href="/projects" label="Back to Projects" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/projects/electronic-piano"
        title="Basic Electronic Piano"
        description="Collaborated in a team to design and build a portable electronic piano replicating one octave (F5–F6) using a 555 Timer IC in astable mode as the oscillator."
        image={`/api/og/generate?title=${encodeURIComponent("Electronic Piano")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Basic Electronic Piano
        </Heading>
        <Text variant="body-default-l" align="center" onBackground="neutral-weak">
          <strong>Date:</strong> Apr 2023 - May 2023
        </Text>
        <Text variant="body-default-l" align="center" onBackground="neutral-weak">
          <strong>Tools & Technologies:</strong> Electromagnetism, NE555 Timer IC, RC circuits, Breadboarding
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

      {/* Demo Video Button */}
      <Column align="center" gap="s" marginBottom="xl" paddingX="l">
        <Button
          href="https://www.dropbox.com/scl/fi/q615alm84qexk3cfan84k/Physics-II-Final-Project-Demo-Mini-Electric-Piano.mov?rlkey=5byov503d1ixub7qk78s5i33g&st=7p7kdqu2&dl=0"
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          size="m"
          prefixIcon="openLink"
          style={{ margin: "0 auto" }}
        >
          Watch Electric Piano Demo Video
        </Button>
      </Column>

<Column paddingX="l" gap="xl">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Project Overview</Heading>
            <Text variant="body-default-m">
              Collaborated in a team to design and build a portable electronic piano replicating one octave (F5–F6) using a 555 Timer IC in astable mode as the oscillator. Together, we engineered RC timing circuits to generate square-wave frequencies for specific notes, integrated pushbutton inputs for key selection, and output sound through a 4Ω speaker.
            </Text>
            <Text variant="body-default-m">
              We validated the system by mapping tones against a standard piano and studied the effect of voltage variation on pitch amplitude. The project demonstrated our ability to translate electromagnetism and circuit theory into a functional musical instrument, while balancing constraints in component availability, portability, and usability.
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
              <strong>RC Timing Circuits:</strong> Engineered RC timing circuits to generate specific frequencies corresponding to piano notes (F5–F6 octave).
            </Text>
            <Text variant="body-default-m">
              <strong>Key Selection:</strong> Integrated pushbutton inputs for individual key selection and note triggering.
            </Text>
            <Text variant="body-default-m">
              <strong>Audio Output:</strong> 4Ω speaker for sound output and audio feedback.
            </Text>
            <Text variant="body-default-m">
              <strong>Frequency Mapping:</strong> Validated system by mapping generated tones against standard piano frequencies.
            </Text>
            <Text variant="body-default-m">
              <strong>Voltage Analysis:</strong> Studied the effect of voltage variation on pitch amplitude and sound quality.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Key Features</Heading>
            <Text variant="body-default-m">
              • Complete one octave (F5–F6) electronic piano implementation
            </Text>
            <Text variant="body-default-m">
              • 555 Timer IC-based oscillator for reliable frequency generation
            </Text>
            <Text variant="body-default-m">
              • Pushbutton key selection for intuitive user interface
            </Text>
            <Text variant="body-default-m">
              • Portable design with breadboard implementation
            </Text>
            <Text variant="body-default-m">
              • Validated frequency mapping against standard piano
            </Text>
            <Text variant="body-default-m">
              • Voltage variation analysis for performance optimization
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
              <a href="https://pdf.ac/K7GSZCZgxk" target="_blank" rel="noopener noreferrer">
                Project Report (PDF)
              </a>
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Video Demonstration</Heading>
            <Text variant="body-default-m">
              Video demo below:
            </Text>
            <Text variant="body-default-s" onBackground="neutral-weak" style={{ fontStyle: "italic" }}>
              Video demonstration will be available soon.
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
