import { Column, Heading, Meta, Schema, Text, Row, Icon, Card } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import { BackButton } from "@/components";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: "MSmiles - STEM Curriculum Design - Obed Allotey Babington",
    description: "Contributed to creating and implementing an engaging, research-driven STEM curriculum tailored for orphaned children as a STEM Curriculum Design Associate with Smiles non-profit.",
    path: "/beyond-the-lab/msmiles-stem-curriculum",
    baseURL,
  });
}

export default function MSmilesSTEMCurriculum() {
  return (
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      {/* Back Button */}
      <BackButton href="/beyond-the-lab" label="Back to Beyond The Lab" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/beyond-the-lab/msmiles-stem-curriculum"
        title="MSmiles - STEM Curriculum Design"
        description="Contributed to creating and implementing an engaging, research-driven STEM curriculum tailored for orphaned children"
        image={`/api/og/generate?title=${encodeURIComponent("MSmiles - STEM Curriculum Design")}`}
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Back Button */}
      <Row marginBottom="l" align="center" gap="s">
        <Icon name="arrowRight" style={{ transform: "rotate(180deg)" }} />
        <Text 
          as="a" 
          href="/beyond-the-lab" 
          variant="body-default-s"
          style={{ textDecoration: "none", color: "var(--neutral-weak)" }}
        >
          Back to Beyond the Lab
        </Text>
      </Row>

      {/* Page Title */}
      <Column marginBottom="l" paddingX="l" align="center">
        <Heading variant="heading-strong-xl">MSmiles - STEM Curriculum Design</Heading>
      </Column>

      {/* Project Info */}
      <Column marginBottom="l" paddingX="l" align="center">
        <Text variant="body-default-xs" onBackground="neutral-weak" style={{ textTransform: "uppercase", fontWeight: "600" }}>
          Education & Mentorship • 2022
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
            src="/images/beyond-the-lab/msmiles-cover.jpg"
            alt="MSmiles - STEM Curriculum Design"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </Column>

      {/* Content */}
      <Column paddingX="l" gap="l">
        <Text variant="body-default-l">
          As a STEM Curriculum Design Associate with Smiles, a non-profit dedicated to the holistic development of orphans, I contributed to creating and implementing an engaging, research-driven STEM curriculum tailored for orphaned children. My role involved researching relevant topics, structuring lesson plans, and iteratively testing and refining content to ensure accessibility and long-term retention. I also facilitated interactive teaching sessions that emphasized curiosity, creativity, and problem-solving.
        </Text>

        <Text variant="body-default-l">
          Notably, I designed the STEM curriculum for the Smiles Launch at Christ Faith Foster Home in Accra, Ghana, where I guided students through a hands-on design challenge to introduce them to design thinking. This experience not only strengthened my skills in curriculum design, research, and facilitation, but also deepened my commitment to using STEM education as a tool for empowerment and social change.
        </Text>
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
              src="/images/beyond-the-lab/msmiles-cover.jpg"
              alt="MSmiles - Cover"
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
              src="/images/beyond-the-lab/msmiles-2.jpg"
              alt="MSmiles - Activity 2"
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
