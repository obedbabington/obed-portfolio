import { Column, Heading, Meta, Schema, Text, Card, Row, Media } from "@once-ui-system/core";
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
        title="Research & Innovation Lead, Arm (E³)NGAGE Ashesi Student Club - Beyond The Lab"
        description="Research & Innovation Lead at Arm (E³)NGAGE Ashesi Student Club (2023-2024), leading engineering projects, fostering research culture, and curating student research articles."
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
        <Heading variant="heading-strong-xl" align="center" marginBottom="s">
          Research & Innovation Lead, Arm (E³)NGAGE Ashesi Student Club
        </Heading>
        <Text variant="body-default-xs" onBackground="neutral-weak" style={{ textTransform: "uppercase", fontWeight: "600" }} marginBottom="s">
          Leadership • 2023 - 2024
        </Text>
      </Column>

      {/* Group Photo */}
      <Column marginBottom="xl" paddingX="l">
        <Media 
          aspectRatio="16 / 9" 
          radius="m" 
          alt="ARM (E³)NGAGE Ashesi Student Club Group Photo" 
          src="/images/beyond-the-lab/arm-y.jpg" 
        />
        <Text variant="body-default-s" onBackground="neutral-weak" align="center" marginTop="s" style={{ fontStyle: "italic" }}>
          Group photo of ARM (E³)NGAGE Ashesi Student Club members
        </Text>
      </Column>

      {/* Description */}
      <Column paddingX="l" marginBottom="xl">
        <Text variant="body-default-l" marginBottom="l">
          The Arm(E³)NGAGE Ashesi Student Club, a collaboration between ARM and Ashesi University, is responsible for educating Ashesi students on the world of IoT, Embedded systems, and their uses on ARM technology. In doing so, it hopes to foster innovation, entrepreneurship, and research using ARM products.
        </Text>
        <Text variant="body-default-l" marginBottom="l">
          As part of this role, I also took on the responsibility of curating and managing a network of student-developed research articles, developing editorial skills and content management strategies to support the academic research community within the university.
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
        <Text variant="body-default-l" marginBottom="m">
          Reviewed and selected high-quality student research articles for publication, ensuring academic rigor and relevance while developing strong editorial and content management skills. Developed content strategies and presentation approaches to enhance research dissemination within the university community.
        </Text>
      </Column>





    </Column>
  );
}
