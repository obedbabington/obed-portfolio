import { Column, Heading, Meta, Schema, Text, Row, Icon, Card } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import { BackButton } from "@/components";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: "Aftgonosia - Career Development Initiative - Obed Allotey Babington",
    description: "Designed and implemented a service-learning project addressing career-related anxieties and identity challenges faced by Ghanaian adolescents through self-discovery and career development workshops.",
    path: "/beyond-the-lab/aftgonosia-service-learning",
    baseURL,
  });
}

export default function AftgonosiaServiceLearning() {
  return (
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      {/* Back Button */}
      <BackButton href="/beyond-the-lab" label="Back to Beyond The Lab" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/beyond-the-lab/aftgonosia-service-learning"
        title="Aftgonosia - Career Development Initiative"
        description="Designed and implemented a service-learning project addressing career-related anxieties and identity challenges faced by Ghanaian adolescents"
        image={`/api/og/generate?title=${encodeURIComponent("Aftgonosia - Career Development Initiative")}`}
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

      {/* Page Title */}
      <Column marginBottom="l" paddingX="l" align="center">
        <Heading variant="heading-strong-xl" className="responsive-heading">Aftgonosia - Career Development Initiative</Heading>
      </Column>

      {/* Project Info */}
      <Column marginBottom="l" paddingX="l" align="center">
        <Text variant="body-default-xs" onBackground="neutral-weak" style={{ textTransform: "uppercase", fontWeight: "600" }}>
          Community Service Project • 2024
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
            src="/images/beyond-the-lab/aftognosia-cover.jpg"
            alt="Aftgonosia - Career Development Initiative"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </Column>

      {/* Content */}
      <Column paddingX="l" gap="l">
        <Text variant="body-default-l">
          As part of a service–learning initiative, my team and I designed and implemented a project aimed at addressing the career-related anxieties and identity challenges faced by Ghanaian adolescents. Grounded in Erik Erikson's theory of psychosocial development, we recognized adolescence as a pivotal stage where identity formation intersects with career decision-making, often creating stress and uncertainty.
        </Text>

        <Text variant="body-default-l">
          This challenge is heightened by socioeconomic disparities: students from lower-income backgrounds frequently lack access to the resources and mentorship that foster informed career exploration. To bridge this gap, we created a two-phased intervention model: first, guiding students in self-discovery through personality assessments and reflective exercises; second, supporting them in career development, aligning their strengths and values with possible career trajectories.
        </Text>

        <Text variant="body-default-l">
          We partnered with two junior high schools, where we facilitated interactive workshops that included self-assessment tools (based on the OCEAN framework), group discussions, and one-on-one guidance sessions. Students declared their findings in team presentations, fostering confidence in articulating personal strengths and aspirations.
        </Text>

        <Text variant="body-default-l">
          My role combined facilitation and project design, drawing on my interest in human behavior to connect psychological insight with social impact. Collaborating with my peers, I also contributed to stakeholder management—coordinating with school administrators, adapting workshop materials to context, and collecting post-program feedback.
        </Text>

        <Text variant="body-default-l">
          Through this experience, I strengthened my skills in active listening, facilitation, and stakeholder engagement, while deepening my appreciation of how targeted interventions can empower young people to make more informed, fulfilling decisions about their futures.
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
              src="/images/beyond-the-lab/aftognosia-cover.jpg"
              alt="Aftgonosia - Cover"
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
              src="/images/beyond-the-lab/aftognosia-2.jpg"
              alt="Aftgonosia - Activity 2"
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
          
          @media (max-width: 768px) {
            .responsive-text {
              font-size: 1rem !important;
              line-height: 1.5 !important;
            }
            
            .responsive-heading {
              font-size: 1.5rem !important;
              line-height: 1.3 !important;
            }
          }
          
          @media (max-width: 480px) {
            .responsive-text {
              font-size: 0.9rem !important;
            }
            
            .responsive-heading {
              font-size: 1.25rem !important;
            }
          }
        `
      }} />
    </Column>
  );
}
