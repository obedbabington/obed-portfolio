import { Column, Heading, Meta, Schema, Text, Row, Icon } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import { BackButton } from "@/components";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: "President, Ashesi Research Club - Obed Allotey Babington",
    description: "Served as the first active president of the Ashesi Research Club to expand students' understanding of the research landscape and build their research skills.",
    path: "/beyond-the-lab/ashesi-research-club-president",
    baseURL,
  });
}

export default function AshesiResearchClubPresident() {
  return (
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      {/* Back Button */}
      <BackButton href="/beyond-the-lab" label="Back to Beyond The Lab" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/beyond-the-lab/ashesi-research-club-president"
        title="President, Ashesi Research Club"
        description="Served as the first active president of the Ashesi Research Club to expand students' understanding of the research landscape"
        image={`/api/og/generate?title=${encodeURIComponent("President, Ashesi Research Club")}`}
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
        <Heading variant="heading-strong-xl">President, Ashesi Research Club</Heading>
      </Column>

      {/* Project Info */}
      <Column marginBottom="l" paddingX="l" align="center">
        <Text variant="body-default-xs" onBackground="neutral-weak" style={{ textTransform: "uppercase", fontWeight: "600" }}>
          Leadership • 2023 - 2024
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
            src="/images/beyond-the-lab/research-club-cover.jpg"
            alt="President, Ashesi Research Club"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </Column>

       {/* Content */}
       <Column paddingX="l" gap="l" maxWidth="l" style={{ margin: "0 auto" }}>
         <Text variant="body-default-l" style={{ maxWidth: "100%", lineHeight: "1.6" }}>
           Served as the first active president of the Ashesi Research Club to expand students' understanding of the research landscape and build their research skills to provide groundbreaking insights for developing innovative, industry-leading solutions for the continent.
         </Text>

         <Text variant="body-default-l" style={{ maxWidth: "100%", lineHeight: "1.6" }}>
           Under the auspices of the provost's office, I co-oversaw the curation of the first-ever campus-wide research festival under the theme, "Exploring New Horizons" to celebrate student scholarship and innovation and ignite their passions for research and the opportunities it offers.
         </Text>

         <Text variant="body-default-l" style={{ maxWidth: "100%", lineHeight: "1.6" }}>
           Directed the development of workshops, championed research-driven projects, and supported student-led research proposals, resulting in enhanced academic engagement and increased research output on campus.
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
              src="/images/beyond-the-lab/research-club-cover.jpg"
              alt="Ashesi Research Club - Cover"
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
              src="/images/beyond-the-lab/research-club-2.jpg"
              alt="Ashesi Research Club - Activity 2"
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
              src="/images/beyond-the-lab/research-club-3.jpg"
              alt="Ashesi Research Club - Activity 3"
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
