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
          
          @keyframes pulse {
            0%, 100% {
              opacity: 0.3;
            }
            50% {
              opacity: 0.6;
            }
          }
          
          @media (max-width: 768px) {
            .grid-container {
              grid-template-columns: 1fr !important;
              gap: 1rem !important;
            }
          }
          
          @media (min-width: 769px) and (max-width: 1024px) {
            .grid-container {
              grid-template-columns: repeat(2, 1fr) !important;
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
      
      {/* Enhanced Research Heading */}
      <Column marginBottom="l" paddingX="l" align="center" style={{ marginTop: "30px" }}>
        <div style={{
          position: 'relative',
          display: 'inline-block',
          padding: '24px 40px',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.05) 100%)',
          border: '2px solid rgba(16, 185, 129, 0.3)',
          boxShadow: '0 8px 32px rgba(16, 185, 129, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          animation: 'fadeInPop 1s ease-out',
          transform: 'translateZ(0)',
          willChange: 'transform, opacity'
        }}>
          <Heading 
            variant="heading-strong-xl" 
            align="center"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #ffffff 0%, #10B981 50%, #ffffff 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 8px rgba(16, 185, 129, 0.3)',
              letterSpacing: '-0.02em',
              lineHeight: '1.1'
            }}
          >
            Research
          </Heading>
          {/* Decorative elements */}
          <div style={{
            position: 'absolute',
            top: '-2px',
            left: '-2px',
            right: '-2px',
            bottom: '-2px',
            borderRadius: '22px',
            background: 'linear-gradient(45deg, rgba(16, 185, 129, 0.4), rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.4))',
            zIndex: -1,
            animation: 'pulse 3s ease-in-out infinite'
          }} />
        </div>
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
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
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
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
              quality={85}
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
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
              quality={85}
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

      {/* Publications Card - Below the grid as a rectangle */}
      <div style={{ padding: "0 1.5rem", marginBottom: "2rem" }}>
        <Card
          as="a"
          href="/research/publications"
          padding="0"
          radius="m"
          shadow="m"
          style={{ 
            display: "flex",
            flexDirection: "row",
            cursor: "pointer",
            transition: "all 0.3s ease",
            textDecoration: "none",
            overflow: "hidden",
            minHeight: "200px"
          }}
        >
          {/* Image on the left side */}
          <div style={{ 
            position: "relative",
            width: "300px",
            height: "100%",
            minHeight: "200px",
            flexShrink: 0
          }}>
            <Image
              src="/images/research/fpga-acceleration-comparison_cover.png"
              alt="Publications"
              fill
              priority
              sizes="300px"
              style={{ objectFit: "cover" }}
              quality={85}
            />
          </div>
          
          {/* Content in rectangular box */}
          <Column 
            gap="s" 
            padding="l" 
            style={{ 
              flex: 1,
              justifyContent: "center"
            }}
          >
            <Heading variant="heading-strong-m">Publications</Heading>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Research contributions and academic publications showcasing my work in FPGA acceleration, neural networks, and embedded systems.
            </Text>
          </Column>
        </Card>
      </div>
    </Column>
  );
}
