import { Column, Heading, Meta, Schema, Text, Card, Media, Button } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { BackButton } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: "Arduino-Controlled 4DOF Robotic Arm",
    description: "Collaborated in a team to design and build a 4-DOF robotic arm showcased at Ashesi University's Engineering Exhibition with Arduino control system and 3D printed components.",
    path: "/projects/engineering-projects/4dof-robotic-arm",
    baseURL,
  });
}

export default function FourDOFRoboticArm() {
  return (
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      {/* Back Button */}
      <BackButton href="/projects/engineering-projects" label="Back to Engineering Projects" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/projects/engineering-projects/4dof-robotic-arm"
        title="Arduino-Controlled 4DOF Robotic Arm"
        description="Collaborated in a team to design and build a 4-DOF robotic arm showcased at Ashesi University's Engineering Exhibition with Arduino control system and 3D printed components."
        image={`/api/og/generate?title=${encodeURIComponent("4DOF Robotic Arm")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Arduino-Controlled 4DOF Robotic Arm
        </Heading>
        <Text variant="body-default-l" align="center" onBackground="neutral-weak">
          <strong>Date:</strong> Mar 2022 - Jun 2022
        </Text>
        <Text variant="body-default-l" align="center" onBackground="neutral-weak">
          <strong>Tools & Technologies:</strong> Arduino, C/C++, SolidWorks, Proteus, 3D printing, Laser Cutting, Breadboarding
        </Text>
      </Column>

      {/* Project Video Link */}
      <Column align="center" gap="m" marginBottom="xl" paddingX="l">
        <Button
          href="https://youtu.be/XpJBw8Dp0tI"
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          size="m"
          prefixIcon="openLink"
          style={{ margin: "0 auto" }}
        >
          Watch Project Summary Video
        </Button>
      </Column>

      {/* Project Image */}
      <Column marginBottom="xl" paddingX="l">
        <Media 
          aspectRatio="16 / 9" 
          radius="m" 
          alt="4DOF Robotic Arm" 
          src="/images/projects/roboarm.jpeg" 
        />
      </Column>

      <Column paddingX="l" gap="xl">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Project Overview</Heading>
            <Text variant="body-default-m">
              Collaborated in a team to design and build a 4-DOF robotic arm showcased at Ashesi University's Engineering Exhibition. Programmed the control system in C/C++ on Arduino, enabling independent motion through dual joysticks and a potentiometer-operated claw.
            </Text>
            <Text variant="body-default-m">
              Applied the engineering design cycle, from ideation and CAD modeling in SolidWorks to prototyping with 3D printing, laser-cutting, and circuit integration. Gained hands-on experience in embedded systems, hardware-software interfacing, and PWM servo control, while also strengthening project management skills through structured planning with Gantt charts and Notion.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Technical Implementation</Heading>
            <Text variant="body-default-m">
              <strong>Control System:</strong> Arduino-based control system programmed in C/C++ for precise robotic arm operation.
            </Text>
            <Text variant="body-default-m">
              <strong>Input Interface:</strong> Dual joysticks for independent control of arm movement and positioning.
            </Text>
            <Text variant="body-default-m">
              <strong>Claw Control:</strong> Potentiometer-operated claw for grasping and manipulation tasks.
            </Text>
            <Text variant="body-default-m">
              <strong>Servo Control:</strong> PWM-based servo motor control for smooth and precise joint movement.
            </Text>
            <Text variant="body-default-m">
              <strong>CAD Design:</strong> Complete 3D modeling and design in SolidWorks for mechanical components.
            </Text>
            <Text variant="body-default-m">
              <strong>Circuit Simulation:</strong> Proteus simulation for circuit design validation and testing.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Manufacturing & Prototyping</Heading>
            <Text variant="body-default-m">
              <strong>3D Printing:</strong> Fabricated custom mechanical components using 3D printing technology.
            </Text>
            <Text variant="body-default-m">
              <strong>Laser Cutting:</strong> Precision laser cutting for structural components and mounting brackets.
            </Text>
            <Text variant="body-default-m">
              <strong>Circuit Integration:</strong> Breadboard prototyping and final circuit integration for control electronics.
            </Text>
            <Text variant="body-default-m">
              <strong>Assembly:</strong> Complete mechanical assembly and integration of all system components.
            </Text>
            <Text variant="body-default-m">
              <strong>Testing & Validation:</strong> Comprehensive testing of all degrees of freedom and control functions.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Key Features</Heading>
            <Text variant="body-default-m">
              • 4 degrees of freedom for versatile robotic arm movement
            </Text>
            <Text variant="body-default-m">
              • Arduino-based control system with C/C++ programming
            </Text>
            <Text variant="body-default-m">
              • Dual joystick interface for intuitive control
            </Text>
            <Text variant="body-default-m">
              • Potentiometer-operated claw for object manipulation
            </Text>
            <Text variant="body-default-m">
              • 3D printed and laser-cut custom components
            </Text>
            <Text variant="body-default-m">
              • Showcased at Ashesi University's Engineering Exhibition
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Project Summary</Heading>
            <Text variant="body-default-m">
              This project demonstrates the complete engineering design cycle, from initial concept to final implementation. The robotic arm was successfully showcased at Ashesi University's Engineering Exhibition, highlighting the integration of mechanical design, electronics, and software programming.
            </Text>
            <Text variant="body-default-m">
              The project provided valuable experience in embedded systems programming, hardware-software interfacing, and project management through structured planning with Gantt charts and Notion.
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
