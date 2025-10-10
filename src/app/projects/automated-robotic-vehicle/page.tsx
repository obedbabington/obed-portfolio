import { Column, Heading, Meta, Schema, Text, Card, Media } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { BackButton } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: "Automated Robotic Vehicle",
    description: "Designed and implemented a remotely operated robotic vehicle using dual microcontrollers (STM32 M0 and STM32 M7) in register-level bare-metal C using UART-based communication.",
    path: "/projects/automated-robotic-vehicle",
    baseURL,
  });
}

export default function AutomatedRoboticVehicle() {
  return (
    <Column maxWidth="m" paddingTop="24">
      {/* Back Button */}
      <BackButton href="/projects" label="Back to Projects" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/projects/automated-robotic-vehicle"
        title="Automated Robotic Vehicle"
        description="Designed and implemented a remotely operated robotic vehicle using dual microcontrollers (STM32 M0 and STM32 M7) in register-level bare-metal C using UART-based communication."
        image={`/api/og/generate?title=${encodeURIComponent("Automated Robotic Vehicle")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Column marginBottom="xl" paddingX="l" align="center" marginTop="l">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Automated Robotic Vehicle
        </Heading>
        <Text variant="body-default-l" align="center" onBackground="neutral-weak">
          <strong>Date:</strong> Dec 2024
        </Text>
        <Text variant="body-default-l" align="center" onBackground="neutral-weak">
          <strong>Tools & Technologies:</strong> Embedded C, Arm Cortex-M (STM32)
        </Text>
      </Column>

            {/* Project Image */}
      <Column marginBottom="xl" paddingX="l">
        <Media 
          aspectRatio="16 / 9" 
          radius="m" 
          alt="Automated Robotic Vehicle" 
          src="/images/robot.jpeg" 
        />
      </Column>

<Column paddingX="l" gap="xl">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Project Overview</Heading>
            <Text variant="body-default-m">
              Designed and implemented a remotely operated robotic vehicle using dual microcontrollers (STM32 M0 and STM32 M7) in register-level bare-metal C using UART-based communication. The M0 was the powerhouse of the "remote control station," while the M7 actualized controls on the vehicle.
            </Text>
            <Text variant="body-default-m">
              Integrated advanced embedded systems capabilities by deploying an RTOS on the M7 for real-time task scheduling, ensuring efficient coordination of motion, speed regulation, and system monitoring. Implemented variable speed adjustment, keypad-driven motion control, and built-in self-test functionalities, strengthening fault tolerance and system reliability.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Technical Implementation</Heading>
            <Text variant="body-default-m">
              <strong>Dual Microcontroller Architecture:</strong> STM32 M0 for remote control station, STM32 M7 for vehicle control and execution.
            </Text>
            <Text variant="body-default-m">
              <strong>Communication Protocol:</strong> UART-based communication between control station and vehicle for real-time command transmission.
            </Text>
            <Text variant="body-default-m">
              <strong>Real-Time Operating System:</strong> Deployed RTOS on M7 for efficient task scheduling and coordination of multiple system functions.
            </Text>
            <Text variant="body-default-m">
              <strong>Control Features:</strong> Variable speed adjustment, keypad-driven motion control, and comprehensive system monitoring.
            </Text>
            <Text variant="body-default-m">
              <strong>Fault Tolerance:</strong> Built-in self-test functionalities to ensure system reliability and fault detection.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Key Features</Heading>
            <Text variant="body-default-m">
              • Remote operation through dual microcontroller system
            </Text>
            <Text variant="body-default-m">
              • Real-time task scheduling with RTOS implementation
            </Text>
            <Text variant="body-default-m">
              • Variable speed control and keypad-driven motion
            </Text>
            <Text variant="body-default-m">
              • Built-in self-test and fault tolerance mechanisms
            </Text>
            <Text variant="body-default-m">
              • Register-level bare-metal C programming for optimal performance
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
