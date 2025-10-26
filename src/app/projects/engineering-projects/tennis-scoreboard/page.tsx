import { Column, Heading, Meta, Schema, Text, Card, Media } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { BackButton } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: "Tennis Scoreboard",
    description: "Created a digital tennis scoreboard with LCD display and button controls for tracking game scores, sets, and match progress, featuring intuitive user interface and score validation logic.",
    path: "/projects/engineering-projects/tennis-scoreboard",
    baseURL,
  });
}

export default function TennisScoreboard() {
  return (
    <Column maxWidth="m" paddingTop="24">
      {/* Back Button */}
      <BackButton href="/projects/engineering-projects" label="Back to Engineering Projects" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/projects/engineering-projects/tennis-scoreboard"
        title="Tennis Scoreboard"
        description="Created a digital tennis scoreboard with LCD display and button controls for tracking game scores, sets, and match progress, featuring intuitive user interface and score validation logic."
        image={`/api/og/generate?title=${encodeURIComponent("Tennis Scoreboard")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Tennis Scoreboard
        </Heading>
        <Text variant="body-default-l" align="center" onBackground="neutral-weak">
          <strong>Date:</strong> Mar 2022 - Jun 2022
        </Text>
        <Text variant="body-default-l" align="center" onBackground="neutral-weak">
          <strong>Tools & Technologies:</strong> Arduino, C/C++, LCD Display, Pushbuttons, Circuit Design
        </Text>
      </Column>

      {/* Project Image */}
      <Column marginBottom="xl" paddingX="l">
        <Media 
          aspectRatio="16 / 9" 
          radius="m" 
          alt="Tennis Scoreboard" 
          src="/images/projects/tennis.jpeg" 
        />
      </Column>

      <Column paddingX="l" gap="xl">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Project Overview</Heading>
            <Text variant="body-default-m">
              Created a digital tennis scoreboard with LCD display and button controls for tracking game scores, sets, and match progress. The system features an intuitive user interface with score validation logic to ensure accurate scorekeeping according to tennis rules.
            </Text>
            <Text variant="body-default-m">
              The project involved embedded systems programming, user interface design, and circuit integration to create a functional and user-friendly tennis scoring device.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Technical Implementation</Heading>
            <Text variant="body-default-m">
              <strong>LCD Display:</strong> Digital display system for showing current scores, sets, and match progress in real-time.
            </Text>
            <Text variant="body-default-m">
              <strong>Button Interface:</strong> Pushbutton controls for score increment, set advancement, and match management.
            </Text>
            <Text variant="body-default-m">
              <strong>Score Logic:</strong> Implemented tennis scoring rules including deuce, advantage, and set progression logic.
            </Text>
            <Text variant="body-default-m">
              <strong>User Interface:</strong> Intuitive control system for easy operation during tennis matches.
            </Text>
            <Text variant="body-default-m">
              <strong>Circuit Design:</strong> Complete circuit integration with Arduino, LCD, and button controls.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Key Features</Heading>
            <Text variant="body-default-m">
              • Real-time score tracking for tennis games and sets
            </Text>
            <Text variant="body-default-m">
              • LCD display for clear score visualization
            </Text>
            <Text variant="body-default-m">
              • Pushbutton interface for easy score management
            </Text>
            <Text variant="body-default-m">
              • Score validation logic following tennis rules
            </Text>
            <Text variant="body-default-m">
              • Arduino-based implementation with C/C++ programming
            </Text>
            <Text variant="body-default-m">
              • Circuit design and integration
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
