import { Column, Heading, Meta, Schema, Text, Card, SmartLink, Row } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { BackButton } from "@/components";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: "Non-Major Research",
    description: "Non-major research experiences - academic coursework and extra-curricular activities",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Non-Major Research")}`,
    path: "/research/non-major",
  });
}

export default function NonMajorResearch() {
  const projects = [
    {
      id: "betterhiring-ai-hiring-management",
      title: "BetterHiring: Automating Your Hiring Management",
      date: "Jan - May 2024",
      technologies: "Mixed-methods research, stakeholder interviews, HTML/CSS/Bootstrap, Python/Flask, PostgreSQL, Google Calendar API, AI integration",
      summary: "Designed and evaluated an AI-driven hiring management solution for Ashesi University's Computer Science and Information Systems (CSIS) department, specifically targeting the recruitment of National Service Personnel (NSP).",
      image: "betterhiring-cover.png"
    },
    {
      id: "solar-panel-soiling",
      title: "Estimating the Impact of Soiling on Solar Panels",
      date: "Jan 2023 - May 2023",
      technologies: "Embedded Systems, IoT, Arduino, Sensors, Data Collection, Mathematical Modeling",
      summary: "Collaborated with a team of research assistants on an embedded systems and IoT project aimed at generating mathematical models to estimate the impact of soiling on solar panels.",
      image: "20230706_112627.jpg"
    },
    {
      id: "depression-mathematical-model",
      title: "Developing a Novel Mathematical Model for Depression",
      date: "Nov 2023 - Dec 2023",
      technologies: "Mathematical Modeling, Differential Equations, MATLAB, Population Dynamics, Statistical Analysis",
      summary: "Developed a novel mathematical model of depression using differential equations to explore how populations transition between depression, remission, and recovery.",
      image: "Image 25-08-2025 at 7.45 PM.jpeg"
    },
    {
      id: "hydrogel-irrigation-study",
      title: "A Comparative Study: The Effects of Different Hydrogel Shapes on Irrigation in Varying Soil Types",
      date: "Nov 2023 - Dec 2023",
      technologies: "Materials Science, Hydrogel Research, PVA-borate, Soil Analysis, Irrigation Systems, Agricultural Technology",
      summary: "Investigated the use of superabsorbent PVA-borate hydrogels as a sustainable irrigation solution for urban agriculture.",
      image: "20230331_161915.jpg"
    },
    {
      id: "prey-predator-mathematical-model",
      title: "Developing a Mathematical Model for Stage-Structured Prey-Predator Relationships",
      date: "Nov 2022 - Dec 2022",
      technologies: "Mathematical Modeling, Stage-structured Systems, Population Dynamics, Differential Equations, Ecological Modeling",
      summary: "Collaborated on a project exploring stage-structured predator–prey systems using mathematical modeling techniques.",
      image: "Image 25-08-2025 at 10.33 PM.jpeg"
    }
  ];

  return (
    <Column maxWidth="m" paddingTop="24" className="page-fade-in" style={{ position: "relative" }}>
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
        path="/research/non-major"
        title={`Non-Major Research – ${person.name}`}
        description="Non-major research experiences - academic coursework and extra-curricular activities"
        image={`/api/og/generate?title=${encodeURIComponent("Non-Major Research")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Back Button */}
      <BackButton href="/research" label="Back to Research" />
      
      {/* Non-Major Research Heading */}
      <Column marginBottom="l" paddingX="l" align="center" style={{ marginTop: "60px" }}>
        <Heading variant="heading-strong-xl" align="center">Non-Major Research</Heading>
      </Column>
      
      {/* Non-Major Research Header */}
      <Column marginBottom="l" paddingX="l" align="center" style={{ marginTop: "60px" }}>
        <Row gap="s" vertical="center" align="center" maxWidth="l" style={{ justifyContent: "center" }}>
          <div
            style={{
              position: "relative",
              animation: "fadeInPop 1.5s ease-out forwards",
              opacity: 0,
              flex: "0 0 auto"
            }}
          >
            <Image
              src="/images/research/non-major/kurtlewin.png"
              alt="Kurt Lewin"
              width={104}
              height={104}
              style={{
                objectFit: "cover",
                borderRadius: "50%",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
                marginRight: "8px"
              }}
            />
          </div>
          <div
            style={{
              position: "relative",
              animation: "fadeInPop 1.5s ease-out 0.3s forwards",
              opacity: 0,
              flex: "0 1 auto",
              minWidth: 0
            }}
          >
            <Text variant="body-default-m" align="center" onBackground="neutral-weak" style={{ fontStyle: "italic" }}>
              "No research without action, no action without research."
            </Text>
            <Text variant="body-default-s" align="center" onBackground="neutral-weak" marginTop="s">
              — Kurt Lewin, Founder of Social Psychology
            </Text>
          </div>
        </Row>
        <Text variant="body-default-l" align="center" marginTop="l">
          A mix of research experiences gathered through academic coursework and extra-curricular activity. While not tightly connected to my core research areas, I built some of my research foundations through them.
        </Text>
      </Column>

      {/* Non-Major Research Projects - Grid Layout */}
      <div className="grid-container" style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1.5rem",
        padding: "0 1.5rem"
      }}>
        {projects.map((project, index) => {
          // Use specific cover photos for projects that have them
          const getCoverImage = (projectId: string) => {
            switch (projectId) {
              case 'solar-panel-soiling':
                return '/images/research/solar-panel-soiling_cover.avif';
              case 'depression-mathematical-model':
                return '/images/research/depression-mathematical-model_cover.png';
              case 'hydrogel-irrigation-study':
                return '/images/research/hydrogel-irrigation-study_cover.png';
              case 'prey-predator-mathematical-model':
                return '/images/research/prey-predator-mathematical-model_cover.png';
              case 'betterhiring-ai-hiring-management':
                return '/images/research/non-major/govindha-cover.jpg';
              default:
                return `/images/research/${projectId}_cover.png`;
            }
          };
          const imagePath = getCoverImage(project.id);
          
          return (
            <Card
              key={index}
              as="a"
              href={`/research/non-major/${project.id}`}
              padding="0"
              radius="m"
              shadow="m"
              style={{ 
                cursor: "pointer",
                transition: "all 0.3s ease",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column"
              }}
            >
              {/* Square Image */}
              <div style={{ 
                position: "relative",
                width: "100%",
                height: "250px",
                backgroundColor: "#f5f5f5"
              }}>
                <Image
                  src={imagePath}
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              
              {/* Content below image */}
              <Column gap="s" padding="l">
                <Heading variant="heading-strong-m">{project.title}</Heading>
                 <Text variant="body-default-xs" onBackground="neutral-weak">
                   <strong>Date:</strong> {project.date}
                 </Text>
                 <Text variant="body-default-xs" onBackground="neutral-weak">
                   <strong>{project.id === "prey-predator-mathematical-model" || project.id === "solar-panel-soiling" || project.id === "hydrogel-irrigation-study" || project.id === "depression-mathematical-model" ? "Skills:" : "Tools & Technologies:"}</strong> {project.technologies}
                 </Text>
                <Text variant="body-default-s" marginTop="s">
                  {project.summary}
                </Text>
                <Text variant="body-default-xs" onBackground="neutral-weak" marginTop="s" style={{ fontStyle: "italic" }}>
                  Click to read more →
                </Text>
              </Column>
            </Card>
          );
        })}
      </div>
    </Column>
  );
}
