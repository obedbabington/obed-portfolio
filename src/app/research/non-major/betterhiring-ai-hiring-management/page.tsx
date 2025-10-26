import { Column, Heading, Meta, Schema, Text, Card, Media, Row, SmartLink } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { BackButton } from "@/components";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: "BetterHiring: Automating Your Hiring Management",
    description: "Designed and evaluated an AI-driven hiring management solution for Ashesi University's Computer Science and Information Systems (CSIS) department, specifically targeting the recruitment of National Service Personnel (NSP).",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("BetterHiring: Automating Your Hiring Management")}`,
    path: "/research/non-major/betterhiring-ai-hiring-management",
  });
}

export default function BetterHiringAIHiringManagement() {
  return (
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      {/* Back Button */}
      <BackButton href="/research/non-major" label="Back to Non-Major Research" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/research/non-major/betterhiring-ai-hiring-management"
        title={`BetterHiring: Automating Your Hiring Management – ${person.name}`}
        description="Designed and evaluated an AI-driven hiring management solution for Ashesi University's Computer Science and Information Systems (CSIS) department, specifically targeting the recruitment of National Service Personnel (NSP)."
        image={`/api/og/generate?title=${encodeURIComponent("BetterHiring: Automating Your Hiring Management")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Project Header */}
      <Column marginBottom="xl" paddingX="l" align="center" marginTop="l">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          BetterHiring: Automating Your Hiring Management
        </Heading>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="m">
          <strong>Date:</strong> Jan - May 2024
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="l">
          <strong>Link:</strong> <SmartLink href="https://www.pdffiller.com/s/d-KK4dM-" target="_blank" rel="noopener noreferrer">View Project Proposal</SmartLink>
        </Text>
        <Text variant="body-default-l" align="center">
          As part of a voluntary research project, I designed and evaluated an AI-driven hiring management solution for Ashesi University's Computer Science and Information Systems (CSIS) department, specifically targeting the recruitment of National Service Personnel (NSP).
        </Text>
      </Column>

      {/* Project Images */}
      <Column paddingX="l" gap="l" marginBottom="xl">
        <Media
          aspectRatio="16 / 9"
          radius="m"
          alt="BetterHiring AI Hiring Management System"
          src="/images/research/non-major/govindha-cover.jpg"
        />
      </Column>

      {/* Project Content */}
      <Column paddingX="l" gap="l">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Project Overview</Heading>
            <Text variant="body-default-m">
              The project addressed inefficiencies in traditional faculty hiring workflows, such as manual scheduling, fragmented data handling, and evaluation delays, through a context-specific, AI-powered web application.
            </Text>
            <Text variant="body-default-m">
              I employed a mixed-methods research approach, beginning with stakeholder interviews and document analysis to identify pain points, before developing and testing the system using an agile, iterative methodology.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Technical Implementation</Heading>
            <Text variant="body-default-m">
              <strong>Frontend:</strong> Candidate portal built with HTML/CSS/Bootstrap for an intuitive user experience
            </Text>
            <Text variant="body-default-m">
              <strong>Backend:</strong> Python/Flask with PostgreSQL for robust data management and API endpoints
            </Text>
            <Text variant="body-default-m">
              <strong>AI Integration:</strong> Automated matching and ranking system with AI-generated candidate summaries
            </Text>
            <Text variant="body-default-m">
              <strong>Calendar Integration:</strong> Automated interview scheduling integrated with Google Calendar API
            </Text>
            <Text variant="body-default-m">
              <strong>Faculty Dashboard:</strong> Enhanced evaluation interface with AI-powered insights and recommendations
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Research Methodology</Heading>
            <Text variant="body-default-m">
              <strong>Mixed-Methods Design:</strong> Combined qualitative stakeholder interviews with quantitative survey analysis
            </Text>
            <Text variant="body-default-m">
              <strong>Stakeholder Engagement:</strong> Conducted in-depth interviews with faculty and HR personnel to understand pain points
            </Text>
            <Text variant="body-default-m">
              <strong>Thematic Coding:</strong> Analyzed interview data to identify key themes and requirements
            </Text>
            <Text variant="body-default-m">
              <strong>Pilot Testing:</strong> Iterative prototyping and user testing to refine the system design
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Results & Impact</Heading>
            <Text variant="body-default-m">
              <strong>Efficiency Gains:</strong> 50–100% time savings in hiring processes
            </Text>
            <Text variant="body-default-m">
              <strong>Scheduling Optimization:</strong> 90% improvement in interview scheduling efficiency
            </Text>
            <Text variant="body-default-m">
              <strong>User Satisfaction:</strong> High satisfaction ratings among faculty users
            </Text>
            <Text variant="body-default-m">
              <strong>Scalability:</strong> Modular system architecture enabling future expansion to other departments
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Tools & Technologies</Heading>
            <Text variant="body-default-m">
              Mixed-methods research design, stakeholder interviews, thematic coding, survey design and analysis, pilot testing, iterative prototyping, HTML/CSS/Bootstrap, Python/Flask, PostgreSQL, Google Calendar API, AI integration
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Learning Outcomes</Heading>
            <Text variant="body-default-m">
              This project sharpened my ability to balance technical innovation with institutional realities, strengthening my skills in AI integration, web development, user-centered research, and stakeholder management. It also deepened my commitment to designing human-centered AI systems that improve efficiency while maintaining fairness and transparency in decision-making.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Project Links</Heading>
            <Text variant="body-default-m">
              <SmartLink href="https://www.pdffiller.com/s/d-KK4dM-" target="_blank" rel="noopener noreferrer">
                Project Proposal
              </SmartLink>
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
              src="/images/research/non-major/govindha-cover.jpg"
              alt="BetterHiring - Cover"
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
              src="/images/research/non-major/govindha-2.jpg"
              alt="BetterHiring - Activity 2"
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
              src="/images/research/non-major/govindha-3.jpg"
              alt="BetterHiring - Activity 3"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </Column>
    </Column>
  );
}
