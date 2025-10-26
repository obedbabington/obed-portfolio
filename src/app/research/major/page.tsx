import { Column, Heading, Meta, Schema, Text, Card, Row, SmartLink } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { BackButton } from "@/components";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: "Major Research",
    description: "Major research work - core research interests with significant faculty engagement",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Major Research")}`,
    path: "/research/major",
  });
}

export default function MajorResearch() {
  const projects = [
    {
      id: "fpga-neural-networks",
      title: "Accelerating Embedded Neural Network Inference on FPGA Softcore Processors",
      date: "Sep 2024 - May 2025",
      technologies: "Artix-7 FPGA, Xilinx MicroBlaze, Vivado, Vitis IDE, C/C++, VHDL",
      summary: "Designed a fully on-chip hardware-software co-design framework using FPGA-based softcore processor and custom VHDL acceleration modules. Achieved 420× speedup over baseline execution, earning the Technical Excellence Award in Computer Engineering.",
    },
    {
      id: "fpga-acceleration-comparison",
      title: "On-Chip vs. Off-Chip FPGA Acceleration for Embedded Neural Networks",
      date: "Sep 2024 - May 2025",
      technologies: "STM32 (Cortex-M), Artix-7 FPGA, Xilinx MicroBlaze, Vivado, Vitis IDE, STM32CubeIDE, C/C++, VHDL",
      summary: "Conducted systematic comparison of on-chip vs off-chip FPGA acceleration strategies for embedded machine learning. Benchmarked four distinct hardware configurations to isolate the impact of communication overhead on inference latency.",
    },
    {
      id: "agentic-ai-energy-management",
      title: "Agentic AI for Energy Management – Research Consulting with Schneider Electric",
      date: "May 2025 - Jul 2025",
      technologies: "LlamaIndex, Model Context Protocol (MCP), FastAPI, Streamlit, Python, RESTful APIs, Azure OpenAI (GPT-4.1, GPT-4o), Google Gemini, Anthropic Claude, Groq LLMs",
      summary: "Collaborated with Schneider Electric's Data Science team through AMRE program to develop and evaluate an agentic AI co-pilot for sustainable energy operations. Demonstrated that single-agent systems outperform multi-agent setups for top-tier LLMs.",
      link: {
        url: "https://inside.wooster.edu/amre/",
        text: "Learn more about the AMRE Consulting Program"
      }
    },
    {
      id: "wearable-technology-study",
      title: "Wearable Technology, Productivity and Information Overload: A Study & Concept Proposal",
      date: "Jan 2024 - Apr 2024",
      technologies: "Research Design, Literature Review, Needs Assessment (Interviews & Thematic analysis), Wearable Technology Concept Development",
      summary: "As Research Intern at Ashesi University's CaRINE Programme, developed NOTE-IT concept for wearable voice-based journaling to address information overload and improve productivity through seamless thought capture.",
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
        path="/research/major"
        title={`Major Research – ${person.name}`}
        description="Major research work - core research interests with significant faculty engagement"
        image={`/api/og/generate?title=${encodeURIComponent("Major Research")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Back Button */}
      <BackButton href="/research" label="Back to Research" />
      
      {/* Major Research Heading */}
      <Column marginBottom="l" paddingX="l" align="center" style={{ marginTop: "60px" }}>
        <Heading variant="heading-strong-xl" align="center">Major Research</Heading>
      </Column>
      
      {/* Major Research Header */}
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
              src="/images/research/non-major/babbage.png"
              alt="Charles Babbage"
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
              "For one person who is blessed with the power of invention, many will always be found who have the capacity of applying principles."
            </Text>
            <Text variant="body-default-s" align="center" onBackground="neutral-weak" marginTop="s">
              — Charles Babbage, Father of the Computer
            </Text>
          </div>
        </Row>
        <Text variant="body-default-l" align="center" marginTop="l">
          Research work closely aligned with my core research interests and carried out with a significant degree of faculty engagement.
        </Text>
      </Column>

      {/* Major Research Projects - Grid Layout */}
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
              case 'fpga-neural-networks':
                return '/images/research/Vivado_Block_Design.png';
              case 'fpga-acceleration-comparison':
                return '/images/research/fpga-acceleration-comparison_cover.png';
              case 'wearable-technology-study':
                return '/images/research/wearable-technology-study_cover.png';
              case 'agentic-ai-energy-management':
                return '/images/research/majorresearch3.png';
              default:
                return `/images/research/${projectId}_cover.png`;
            }
          };
          const imagePath = getCoverImage(project.id);
          
          return (
            <Card
              key={index}
              as="a"
              href={`/research/major/${project.id}`}
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
                <Heading variant="heading-strong-m" className="text-single-line">{project.title}</Heading>
                <Text variant="body-default-xs" onBackground="neutral-weak">
                  <strong>Date:</strong> {project.date}
                </Text>
                {project.link && (
                  <Text variant="body-default-xs" onBackground="neutral-weak">
                    <strong>Link:</strong> <SmartLink href={project.link.url} target="_blank" rel="noopener noreferrer">{project.link.text}</SmartLink>
                  </Text>
                )}
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
