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
        description="Led innovation and research initiatives for the Arm(E³)NGAGE Ashesi Student Club (2023–2024), advancing student engagement in embedded systems, IoT, and applied research."
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
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `
      }} />

      {/* Header */}
      <Column marginBottom="l" paddingX="l" align="center">
        <Heading variant="heading-strong-xl" align="center" marginBottom="s">
          Research & Innovation Lead, Arm (E³)NGAGE Ashesi Student Club
        </Heading>
        <Text
          variant="body-default-xs"
          onBackground="neutral-weak"
          style={{ textTransform: "uppercase", fontWeight: "600" }}
          marginBottom="s"
        >
          Leadership • 2023 - 2024
        </Text>
      </Column>

      {/* Group Photo */}
      <Column marginBottom="xl" paddingX="l">
        <Media 
          aspectRatio="16 / 9" 
          radius="m" 
          alt="ARM (E³)NGAGE Ashesi Student Club Group Photo" 
          src="/images/projects/arm-y.jpg" 
        />
        <Text variant="body-default-s" onBackground="neutral-weak" align="center" marginTop="s" style={{ fontStyle: "italic" }}>
          Members of the ARM (E³)NGAGE Ashesi Student Club
        </Text>
      </Column>

      {/* Description */}
      <Column paddingX="l" marginBottom="xl">
        <Text variant="body-default-l" marginBottom="l">
          The Arm(E³)NGAGE Ashesi Student Club, a partnership between ARM and Ashesi University, empowers students to explore embedded systems, IoT, and innovation through hands-on engineering projects and research initiatives.
        </Text>
        <Text variant="body-default-l">
          As Research & Innovation Lead, I guided the club’s technical direction, spearheaded collaborative projects, and established a system for curating and publishing student-led research articles, nurturing a vibrant research culture within the club.
        </Text>
      </Column>

      {/* Key Achievements */}
      <Column paddingX="l" marginBottom="xl">
        <Text variant="body-default-l" marginBottom="m">
          • Led the development of an automated parking system, organizing Arduino C workshops and introducing members to GitHub-based collaboration and algorithmic problem-solving.
        </Text>
        <Text variant="body-default-l" marginBottom="m">
          • Built and managed a network of student researchers, resulting in the creation and publication of five research articles that expanded the club’s technical visibility on campus.
        </Text>
        <Text variant="body-default-l" marginBottom="m">
          • Designed and implemented editorial and content strategies for research dissemination, enhancing the quality and impact of student publications within the Ashesi community.
        </Text>
      </Column>
    </Column>
  );
}
