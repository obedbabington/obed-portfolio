import { Column, Heading, Meta, Schema, Text, Card } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { BackButton } from "@/components";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: "Assistive Technology Makerspace Fellowship - Obed Allotey Babington",
    description: "As a Fellow at the Assistive Technology Makerspace, contributed to advancing accessible, low-cost assistive technologies for persons with disabilities in Ghana through hands-on training and team-based design challenges.",
    path: "/beyond-the-lab/assistive-technology-makerspace",
    baseURL,
  });
}

export default function AssistiveTechnologyMakerspace() {
  return (
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      {/* Back Button */}
      <BackButton href="/beyond-the-lab" label="Back to Beyond The Lab" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/beyond-the-lab/assistive-technology-makerspace"
        title="Assistive Technology Makerspace Fellowship"
        description="As a Fellow at the Assistive Technology Makerspace, contributed to advancing accessible, low-cost assistive technologies for persons with disabilities in Ghana"
        image={`/api/og/generate?title=${encodeURIComponent("Assistive Technology Makerspace Fellowship")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Page Title */}
      <Column marginBottom="l" paddingX="l" align="center">
        <Heading variant="heading-strong-xl">Assistive Technology Makerspace Fellowship</Heading>
      </Column>

      {/* Project Info */}
      <Column marginBottom="l" paddingX="l" align="center">
        <Text variant="body-default-xs" onBackground="neutral-weak" style={{ textTransform: "uppercase", fontWeight: "600" }}>
          Fellowship • Aug - Sep 2019
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
            src="/images/beyond-the-lab/makerspace-cover.jpg"
            alt="Assistive Technology Makerspace Fellowship"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </Column>

      {/* Content */}
      <Column paddingX="l" gap="l">
        <Text variant="body-default-l">
          As a Fellow at the Assistive Technology (AT) Makerspace, a program launched by Tech Era in partnership with Dextra (Canada) and the Ashesi D-Lab, I contributed to advancing accessible, low-cost assistive technologies for persons with disabilities in Ghana.
        </Text>

        <Text variant="body-default-l">
          Over an intensive two-week fellowship, I gained hands-on training in 3D modeling and printing, Arduino programming, electronics, and lean research methods, and applied these skills in a team-based design challenge.
        </Text>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Key Achievements</Heading>
            <Text variant="body-default-m">
              Working in a team of two, I co-designed and prototyped a Braille scientific calculator aimed at empowering visually impaired students to independently access STEM education.
            </Text>
            <Text variant="body-default-m">
              The experience strengthened my abilities in human-centered design, rapid prototyping, and cross-disciplinary collaboration, while reinforcing my commitment to leveraging technology for social impact.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Skills Developed</Heading>
            <Text variant="body-default-m">
              • 3D modeling and printing techniques for assistive device prototyping
            </Text>
            <Text variant="body-default-m">
              • Arduino programming for embedded systems in assistive technologies
            </Text>
            <Text variant="body-default-m">
              • Electronics design and implementation for accessibility solutions
            </Text>
            <Text variant="body-default-m">
              • Lean research methods for user-centered design
            </Text>
            <Text variant="body-default-m">
              • Cross-disciplinary collaboration in technology for social impact
            </Text>
          </Column>
        </Card>
      </Column>

      {/* Image Gallery */}
      <Column marginTop="xl" paddingX="l" gap="l">
        <Heading variant="heading-strong-l">Gallery</Heading>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem"
        }}>
          <div style={{ 
            position: "relative", 
            width: "100%", 
            height: "250px",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)"
          }}>
            <Image
              src="/images/beyond-the-lab/makerspace-cover.jpg"
              alt="Makerspace - Cover"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div style={{ 
            position: "relative", 
            width: "100%", 
            height: "250px",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)"
          }}>
            <Image
              src="/images/beyond-the-lab/makerspace.jpg"
              alt="Makerspace - Activity"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
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
