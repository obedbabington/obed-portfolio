import { Column, Heading, Meta, Schema, Text, Row, Icon, Card } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import { BackButton } from "@/components";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: "ARM-y Students' Club Curator - Obed Allotey Babington",
    description: "Led the curation and editing of student research articles for the ARM-y Students' Club, developing content management and editorial skills while supporting academic research dissemination.",
    path: "/beyond-the-lab/army-students-club-curator",
    baseURL,
  });
}

export default function ArmyStudentsClubCurator() {
  return (
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      {/* Back Button */}
      <BackButton href="/beyond-the-lab" label="Back to Beyond The Lab" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/beyond-the-lab/army-students-club-curator"
        title="ARM-y Students' Club Curator"
        description="Led the curation and editing of student research articles for the ARM-y Students' Club"
        image={`/api/og/generate?title=${encodeURIComponent("ARM-y Students' Club Curator")}`}
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

      {/* Page Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Text variant="body-default-xs" onBackground="neutral-weak" style={{ textTransform: "uppercase", fontWeight: "600" }}>
          Creative Management
        </Text>
        <Heading marginBottom="m" variant="heading-strong-xl" align="center">
          Curating a Network of Student-Developed Research Articles (ARM-y Students' Club)
        </Heading>
        <Text variant="body-default-l" align="center" onBackground="neutral-weak">
          2023
        </Text>
      </Column>

      {/* Project Image */}
      <Column marginBottom="xl" align="center">
        <div style={{ 
          position: "relative", 
          width: "min(100%, 720px)",
          height: "400px",
          margin: "0 auto",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
        }}>
          <Image
            src="/images/projects/arm-y.jpg"
            alt="ARM-y Students Club Research Articles"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </Column>

      {/* Content */}
      <Column paddingX="l" gap="l">
        <Text variant="body-default-l">
          As part of the ARM-y Students' Club, I took on the role of curating and managing a network of student-developed research articles. This project involved developing editorial skills, content management strategies, and supporting the academic research community within the university.
        </Text>

        <Text variant="body-default-l">
          The ARM-y Students' Club provided a platform for students to showcase their research work and collaborate on academic projects. Through my role as curator, I helped establish a structured approach to research dissemination and fostered a culture of academic excellence.
        </Text>

        {/* Key Responsibilities */}
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Key Responsibilities</Heading>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "var(--brand-medium)", fontWeight: "bold" }}>•</span>
                <strong>Content Curation:</strong> Reviewed and selected high-quality student research articles for publication
              </li>
              <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "var(--brand-medium)", fontWeight: "bold" }}>•</span>
                <strong>Editorial Management:</strong> Edited and refined articles to meet publication standards
              </li>
              <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "var(--brand-medium)", fontWeight: "bold" }}>•</span>
                <strong>Creative Direction:</strong> Developed content strategies and presentation approaches
              </li>
              <li style={{ marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "var(--brand-medium)", fontWeight: "bold" }}>•</span>
                <strong>Community Building:</strong> Fostered collaboration among student researchers
              </li>
            </ul>
          </Column>
        </Card>

        {/* Learning Outcomes */}
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Learning Outcomes</Heading>
            <Text variant="body-default-m">
              This experience strengthened my skills in creative management and article editing while contributing to the academic community. It provided valuable experience in content curation, editorial processes, and supporting research dissemination within the university environment.
            </Text>
            <Text variant="body-default-m">
              Through this role, I developed a deep understanding of academic publishing standards, learned to balance creativity with academic rigor, and gained experience in managing collaborative projects that serve the broader university community.
            </Text>
          </Column>
        </Card>

        {/* Impact */}
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Impact & Results</Heading>
            <Text variant="body-default-m">
              • <strong>Enhanced Research Visibility:</strong> Successfully curated and published multiple student research articles, increasing their visibility within the academic community
            </Text>
            <Text variant="body-default-m">
              • <strong>Improved Publication Quality:</strong> Established editorial standards that elevated the overall quality of student research publications
            </Text>
            <Text variant="body-default-m">
              • <strong>Community Engagement:</strong> Built stronger connections between student researchers and fostered a collaborative research environment
            </Text>
            <Text variant="body-default-m">
              • <strong>Skill Development:</strong> Gained expertise in content management, editorial processes, and academic publishing workflows
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
