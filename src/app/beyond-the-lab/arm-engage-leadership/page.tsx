import { Column, Heading, Meta, Schema, Text, Card, Row } from "@once-ui-system/core";
import { baseURL, about, person, beyondTheLab } from "@/resources";
import { BackButton } from "@/components";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: "ARM E(3)NGAGE Leadership - Beyond The Lab",
    description: "Research & Innovation Lead at Arm(E³)NGAGE Ashesi Student Club (2023-2024)",
    path: "/beyond-the-lab/arm-engage-leadership",
    baseURL,
  });
}

export default function ArmEngageLeadership() {
  return (
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      {/* Back Button */}
      <BackButton href="/beyond-the-lab" label="Back to Beyond The Lab" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/beyond-the-lab/arm-engage-leadership"
        title="ARM E(3)NGAGE Leadership - Beyond The Lab"
        description="Research & Innovation Lead at Arm(E³)NGAGE Ashesi Student Club (2023-2024)"
        image={`/api/og/generate?title=${encodeURIComponent("ARM E(3)NGAGE Leadership")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

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

      {/* Header */}
      <Column marginBottom="l" paddingX="l" align="center">
        <Text variant="body-default-xs" onBackground="neutral-weak" style={{ textTransform: "uppercase", fontWeight: "600" }} marginBottom="s">
          Leadership • 2023 - 2024
        </Text>
      </Column>

      {/* Description */}
      <Column paddingX="l" marginBottom="xl">
        <Text variant="body-default-l" marginBottom="l">
          The Arm(E³)NGAGE Ashesi Student Club, a collaboration between ARM and Ashesi University, is responsible for educating Ashesi students on the world of IoT, Embedded systems, and their uses on ARM technology. In doing so, it hopes to foster innovation, entrepreneurship, and research using ARM products.
        </Text>
      </Column>

      {/* Key Achievements */}
      <Column paddingX="l" marginBottom="xl">
        <Text variant="body-default-l" marginBottom="m">
          Led club engineering projects, notably an automated parking system. Responsibilities included conducting Arduino C coding workshops, introducing participants to GitHub for collaborative project development, and fostering algorithmic problem-solving skills. Additionally, I authored project documentation and problem design outlines.
        </Text>
        <Text variant="body-default-l" marginBottom="m">
          Crafted a vibrant network of student researchers in engineering and computer science, leading to the production of five diverse research articles, and pioneering a research culture within the ARM E(3)NGAGE student club.
        </Text>
      </Column>





    </Column>
  );
}
