import { Column, Heading, Meta, Schema, Text, SmartLink, Card, Row } from "@once-ui-system/core";
import { baseURL, about, person, research } from "@/resources";
import { BackButton } from "@/components";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: research.title,
    description: research.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(research.title)}`,
    path: research.path,
  });
}

export default function Research() {
  return (
    <Column maxWidth="m" paddingTop="24" className="fixed-header-spacing page-fade-in" style={{ position: "relative" }}>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeInPop {
            0% {
              opacity: 0;
              transform: scale(0.8);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          @media (max-width: 768px) {
            .grid-container {
              grid-template-columns: 1fr !important;
              gap: 1rem !important;
            }
          }
          
          @media (max-width: 480px) {
            .grid-container {
              padding: 0 1rem !important;
            }
          }
        `
      }} />
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={research.path}
        title={research.title}
        description={research.description}
        image={`/api/og/generate?title=${encodeURIComponent(research.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Back Button */}
      <BackButton href="/" label="Back to Home" />
      
      {/* Research Heading */}
      <Column marginBottom="l" paddingX="l" align="center" style={{ marginTop: "30px" }}>
        <Heading variant="heading-strong-xl" align="center">Research</Heading>
      </Column>
      
      {/* Research Experiences Header */}
      <Column marginBottom="l" paddingX="l" align="center">
        <Text variant="body-default-l" align="center" style={{ fontStyle: "italic", fontSize: "1.1em", lineHeight: "1.6" }}>
          "We voluntarily articulate our ignorance and deliberately throw it into the world, reaching for a catch. 'We' are researchers and that is what we do."
        </Text>
        <Text variant="body-default-s" align="center" onBackground="neutral-weak" marginTop="s">
          — Me
        </Text>
      </Column>

      {/* Research Cards - Grid Layout */}
      <div className="grid-container mobile-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1.5rem",
        padding: "0 1.5rem",
        marginBottom: "2rem"
      }}>
        {/* Major Research Card */}
        <Card
          as="a"
          href="/research/major"
          padding="0"
          radius="m"
          shadow="m"
          style={{ 
            display: "flex",
            flexDirection: "column",
            cursor: "pointer",
            transition: "all 0.3s ease",
            textDecoration: "none",
            overflow: "hidden"
          }}
        >
          <div style={{ position: "relative", width: "100%", height: "250px" }}>
            <Image
              src="/images/research/majorresearch3.png"
              alt="Major Research"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <Column gap="s" padding="l">
            <Heading variant="heading-strong-m">Major Research</Heading>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Research work closely aligned with my core research interests and carried out with a significant degree of faculty engagement.
            </Text>
          </Column>
        </Card>

        {/* Non-Major Research Card */}
        <Card
          as="a"
          href="/research/non-major"
          padding="0"
          radius="m"
          shadow="m"
          style={{ 
            display: "flex",
            flexDirection: "column",
            cursor: "pointer",
            transition: "all 0.3s ease",
            textDecoration: "none",
            overflow: "hidden"
          }}
        >
          <div style={{ position: "relative", width: "100%", height: "250px" }}>
            <Image
              src="/images/research/nonmajor1.png"
              alt="Non-Major Research"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <Column gap="s" padding="l">
            <Heading variant="heading-strong-m">Non-Major Research</Heading>
            <Text variant="body-default-s" onBackground="neutral-weak">
              A mix of research experiences gathered through academic coursework and extra-curricular activity. While not tightly connected to my core research areas, I built some of my research foundations through them.
            </Text>
          </Column>
        </Card>
      </div>
    </Column>
  );
}
