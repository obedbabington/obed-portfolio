import { Column, Heading, Meta, Schema, Text, Row, Icon } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import { BackButton } from "@/components";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: "TEDx Ashesi University Speaker - Obed Allotey Babington",
    description: "Obed's TEDx talk on quantum physics and the role of wandering in the realm of the unknown, exploring the importance of self-expression in society.",
    path: "/beyond-the-lab/tedx-ashesi-speaker",
    baseURL,
  });
}

export default function TedxAshesiSpeaker() {
  return (
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      {/* Back Button */}
      <BackButton href="/beyond-the-lab" label="Back to Beyond The Lab" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/beyond-the-lab/tedx-ashesi-speaker"
        title="TEDx Ashesi University Speaker"
        description="Obed's TEDx talk on quantum physics and the role of wandering in the realm of the unknown"
        image={`/api/og/generate?title=${encodeURIComponent("TEDx Ashesi University Speaker")}`}
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />


      {/* Page Title */}
      <Column marginBottom="l" paddingX="l" align="center">
        <Heading variant="heading-strong-xl" className="responsive-heading">TEDx Ashesi University Speaker</Heading>
      </Column>

      {/* Project Info */}
      <Column marginBottom="l" paddingX="l" align="center">
        <Text variant="body-default-xs" onBackground="neutral-weak" style={{ textTransform: "uppercase", fontWeight: "600" }}>
          Public Speaking • 2022
        </Text>
      </Column>

      {/* Side by Side Images */}
      <Row marginBottom="xl" gap="l" s={{ direction: "column" }}>
        <div className="responsive-image" style={{ 
          position: "relative", 
          flex: 1,
          height: "300px",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
        }}>
          <Image
            src="/images/beyond-the-lab/tedx-ashesi-cover.jpg"
            alt="TEDx Ashesi University - Obed speaking on stage"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="responsive-image" style={{ 
          position: "relative", 
          flex: 1,
          height: "300px",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
        }}>
          <Image
            src="/images/beyond-the-lab/tedx-ashesi-detail.jpg"
            alt="TEDx Ashesi University - Obed Allotey Babington"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </Row>

      {/* YouTube Video Embed */}
      <Column gap="m" marginBottom="xl" paddingX="l">
        <Heading variant="heading-strong-l">Watch the Talk</Heading>
        <div style={{ 
          position: "relative", 
          width: "100%", 
          height: "0", 
          paddingBottom: "56.25%", // 16:9 aspect ratio
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
        }}>
          <iframe
            src="https://www.youtube.com/embed/l7cPJzOKZcE?start=54"
            title="TEDx Ashesi University - The Role of Wandering in the Realm of the Unknown"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none"
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <Text variant="body-default-s" onBackground="neutral-weak" align="center" marginTop="s">
          This talk was given at a TEDx event using the TED conference format but independently organized by a local community.
        </Text>
      </Column>

      {/* Content */}
      <Column paddingX="l" gap="l">
        <Text variant="body-default-l" className="responsive-text">
          Quantum Physics has always intrigued me and the exploration of the world beyond what meets the eye is something I am extremely passionate about. In my TEDx talk at Ashesi University, I sought to elucidate the role of wandering in the realm of the unknown.
        </Text>

        <Text variant="body-default-l" className="responsive-text">
          I believe that the suppression of the willful expression of the self leads to the degradation of society. Thus, I love to use every opportunity I can get to create meaning.
        </Text>
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
            
            .responsive-image {
              height: 250px !important;
            }
          }
          
          @media (max-width: 480px) {
            .responsive-text {
              font-size: 0.9rem !important;
            }
            
            .responsive-heading {
              font-size: 1.25rem !important;
            }
            
            .responsive-image {
              height: 200px !important;
            }
          }
        `
      }} />
    </Column>
  );
}
