import { Column, Heading, Meta, Schema, Text, Card, Row } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import { BackButton } from "@/components";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: "Engineering Projects - Obed Allotey Babington",
    description: "Engineering and hardware projects by Obed Allotey Babington",
    path: "/projects/engineering-projects",
    baseURL,
  });
}

export default function EngineeringProjects() {
  const engineeringProjectsList = [
    {
      id: "morse-code-decoder",
      title: "Real-Time Morse Code Decoder",
      date: "Jan 2023 - Mar 2023",
      technologies: "Arduino, C/C++, Breadboarding, Oscilloscope, Signal Processing",
      summary: "Designed and implemented a real-time Morse code decoder using Arduino that converts audio signals into readable text, featuring noise filtering and timing analysis for accurate character recognition."
    },
    {
      id: "automated-robotic-vehicle",
      title: "Low-Level Prototyping of a Robotic Vehicle",
      date: "Sep 2022 - Dec 2022",
      technologies: "Arduino, C/C++, Sensors, Motor Control, Breadboarding",
      summary: "Designed and implemented a remotely operated robotic vehicle using dual microcontrollers (STM32 M0 and STM32 M7) in register-level bare-metal C using UART-based communication. The M0 was the powerhouse of the \"remote control station,\" while the M7 actualized controls on the vehicle."
    },
    {
      id: "tennis-scoreboard",
      title: "Tennis Scoreboard",
      date: "Mar 2022 - Jun 2022",
      technologies: "Arduino, C/C++, LCD Display, Pushbuttons, Circuit Design",
      summary: "Created a digital tennis scoreboard with LCD display and button controls for tracking game scores, sets, and match progress, featuring intuitive user interface and score validation logic."
    },
    {
      id: "16-bit-cpu",
      title: "16-bit CPU",
      date: "Jan 2022 - Mar 2022",
      technologies: "Logisim Evolution, Digital Logic Design, CPU Architecture",
      summary: "Designed and implemented a complete 16-bit CPU from scratch using Logisim Evolution, including ALU, control unit, registers, and instruction set architecture with assembly language support."
    },
    {
      id: "32-bit-mips-processor",
      title: "32-Bit Single-Cycle MIPS Processor Components in VHDL",
      date: "Sep 2023 - Dec 2023",
      technologies: "VHDL, FPGA, ModelSim, Digital System Design, MIPS Architecture",
      summary: "Implemented key components of a 32-bit single-cycle MIPS processor in VHDL including ALU, register file, control unit, and data path, with comprehensive testing and simulation in ModelSim."
    },
    {
      id: "heartbeat-monitoring",
      title: "Heartbeat Monitoring System",
      date: "Jan 2023 - Mar 2023",
      technologies: "Arduino, C/C++, Heart Rate Sensor, LCD Display, Medical Electronics",
      summary: "Developed a real-time heartbeat monitoring system using Arduino and pulse sensors, featuring heart rate calculation algorithms, LCD display output, and alert systems for abnormal readings."
    },
    {
      id: "electronic-piano",
      title: "Electronic Piano",
      date: "Mar 2022 - Jun 2022",
      technologies: "555 Timer IC, RC Circuits, Breadboarding, Audio Electronics",
      summary: "Collaborated in a team to design and build a portable electronic piano replicating one octave (F5–F6) using a 555 Timer IC in astable mode as the oscillator. Together, we engineered RC timing circuits to generate square-wave frequencies for specific notes, integrated pushbutton inputs for key selection, and output sound through a 4Ω speaker."
    },
    {
      id: "4dof-robotic-arm",
      title: "Arduino-Controlled 4DOF Robotic Arm",
      date: "Mar 2022 - Jun 2022",
      technologies: "Arduino, C/C++, SolidWorks, Proteus, 3D printing, Laser Cutting, Breadboarding",
      summary: "Collaborated in a team to design and build a 4-DOF robotic arm showcased at Ashesi University's Engineering Exhibition. Programmed the control system in C/C++ on Arduino, enabling independent motion through dual joysticks and a potentiometer-operated claw. Applied the engineering design cycle, from ideation and CAD modeling in SolidWorks to prototyping with 3D printing, laser-cutting, and circuit integration."
    },
    {
      id: "traffic-flow-analysis",
      title: "Modelling & Analyzing the Traffic Flow Network of Ashesi University's Canteen with Linear Algebra",
      date: "2023",
      technologies: "Mathematical Modelling (MATLAB)",
      summary: "Applied linear algebra techniques to model and analyze traffic flow patterns in the university canteen, providing insights into optimization and efficiency improvements."
    },
    {
      id: "calculus-data-collection",
      title: "Calculus Data Collection",
      date: "2023",
      technologies: "Mathematical Modelling (MATLAB)",
      summary: "Developed a comprehensive data collection system for calculus research, implementing mathematical modeling techniques to analyze and visualize complex mathematical relationships and patterns."
    }
  ];

  return (
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out", position: "relative" }}>
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
        path="/projects/engineering-projects"
        title="Engineering Projects"
        description="Engineering and hardware projects by Obed Allotey Babington"
        image={`/api/og/generate?title=${encodeURIComponent("Engineering Projects")}`}
        author={{
          name: person.name,
          url: `${baseURL}/about`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Back Button */}
      <BackButton href="/projects" label="Back to Projects" />

      {/* Enhanced Page Heading */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <div style={{
          position: 'relative',
          display: 'inline-block',
          padding: '20px 35px',
          borderRadius: '18px',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.05) 100%)',
          border: '2px solid rgba(16, 185, 129, 0.3)',
          boxShadow: '0 6px 28px rgba(16, 185, 129, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          animation: 'fadeInPop 1s ease-out',
          transform: 'translateZ(0)',
          willChange: 'transform, opacity'
        }}>
          <Heading 
            marginBottom="l" 
            variant="heading-strong-xl" 
            align="center"
            style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
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
            Engineering Projects
          </Heading>
          {/* Decorative elements */}
          <div style={{
            position: 'absolute',
            top: '-2px',
            left: '-2px',
            right: '-2px',
            bottom: '-2px',
            borderRadius: '20px',
            background: 'linear-gradient(45deg, rgba(16, 185, 129, 0.4), rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.4))',
            zIndex: -1,
            animation: 'pulse 3s ease-in-out infinite'
          }} />
        </div>
      </Column>

      {/* Alfred Whitehead Quote */}
      <Column paddingX="l" gap="l" marginBottom="l" align="center" style={{ marginTop: "10px" }}>
        <Row gap="l" vertical="center" align="center" maxWidth="l">
          <div
            style={{
              position: "relative",
              animation: "fadeInPop 1.5s ease-out forwards",
              transformOrigin: "center center",
              opacity: 0,
              transform: "scale(0.8)",
            }}
          >
            <Image
              src="/images/whitehead.png"
              alt="Alfred Whitehead"
              width={140}
              height={140}
              style={{ 
                objectFit: "cover",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
              }}
            />
          </div>
          <Column gap="s" align="center" flex={1}>
            <Text variant="body-default-l" align="center" style={{ fontStyle: "italic", lineHeight: "1.6" }}>
              "Civilization advances by extending the number of important operations which we can perform without thinking about them."
            </Text>
            <Text variant="body-default-s" align="center" onBackground="neutral-weak" style={{ fontStyle: "italic" }}>
              — Alfred Whitehead, Creator of Process Philosophy
            </Text>
          </Column>
        </Row>
      </Column>

      {/* Page Description */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Text variant="body-default-l" align="center">
          Hardware, embedded systems, and engineering projects showcasing practical applications of technology.
        </Text>
      </Column>

      {/* Engineering Projects - Grid Layout */}
      <div className="grid-container" style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1.5rem",
        padding: "0 1.5rem"
      }}>
        {engineeringProjectsList.map((project, index) => {
          // Map project images based on project ID
          const imageMap = {
            'morse-code-decoder': '/images/projects/morsecode.jpg',
            'automated-robotic-vehicle': '/images/robot.jpeg',
            'tennis-scoreboard': '/images/projects/tennis.jpeg',
            '16-bit-cpu': '/images/projects/logism.jpeg',
            '32-bit-mips-processor': '/images/projects/mips.png',
            'heartbeat-monitoring': '/images/projects/heartbeat.png',
            'electronic-piano': '/images/projects/piano.jpeg',
            '4dof-robotic-arm': '/images/projects/roboarm.jpeg',
            'traffic-flow-analysis': '/images/projects/trafficflow.png',
            'calculus-data-collection': '/images/projects/calculusdriven.png'
          };
          const imagePath = imageMap[project.id as keyof typeof imageMap] || '/images/projects/logism.jpeg';
          
          return (
            <Card
              key={index}
              as="a"
              href={`/projects/engineering-projects/${project.id}`}
              padding="0" 
              radius="m" 
              shadow="m"
              style={{ 
                cursor: "pointer",
                transition: "all 0.3s ease",
                textDecoration: "none",
                overflow: "hidden",
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
                <Text variant="body-default-xs" onBackground="neutral-weak">
                  <strong>{project.id === "traffic-flow-analysis" || project.id === "calculus-data-collection" ? "Skills:" : "Tools & Technologies:"}</strong> {project.technologies}
                </Text>
                <Text variant="body-default-s" marginTop="s">{project.summary}</Text>
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
