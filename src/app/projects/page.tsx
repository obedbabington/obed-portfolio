import { Column, Heading, Meta, Schema, Text, Card, SmartLink, Row } from "@once-ui-system/core";
import { baseURL, about, person, projects } from "@/resources";
import { BackButton } from "@/components";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: projects.title,
    description: projects.description,
    path: projects.path,
    baseURL,
  });
}

export default function Projects() {
  const projectList = [
    {
      id: "morse-code-decoder",
      title: "Real-Time Morse Code Decoder as Embedded Neural Network",
      date: "Sep 2024 - Dec 2024",
      technologies: "TensorFlow, STM32F091RC, Xilinx Vivado, Vitis, MicroBlaze softcore processor, Embedded C",
      summary: "Built a neural network–based decoder to translate real-time Morse button-press sequences (A–J + unclassified) into text, deployed on both an STM32F091RC microcontroller and a MicroBlaze/FPGA system. Achieved ~85% accuracy with full inference pipeline implementation in bare-metal C."
    },
    {
      id: "automated-robotic-vehicle",
      title: "Low-Level Prototyping of a Robotic Vehicle",
      date: "Dec 2024",
      technologies: "Embedded C, Arm Cortex-M (STM32)",
      summary: "Designed and implemented a remotely operated robotic vehicle using dual microcontrollers (STM32 M0 and STM32 M7) in register-level bare-metal C using UART-based communication. Integrated RTOS on the M7 for real-time task scheduling, ensuring efficient coordination of motion, speed regulation, and system monitoring."
    },
    {
      id: "tennis-scoreboard",
      title: "Tennis Scoreboard Digital System Design",
      date: "July 2024",
      technologies: "Digital Logic Design, Logism-Evolution, VHDL",
      summary: "Designed and implemented a digital lawn tennis scoreboard system, progressing from logic-level design in Logisim to structural and behavioral VHDL implementations. The design incorporated score progression (Love–15–30–40), reversal via a decrement button, and a reset function, with outputs mapped to large 7-segment LED displays on an Artix-7 FPGA."
    },
    {
      id: "16-bit-cpu",
      title: "16-bit CPU in Logism-Evolution",
      date: "Mar 2024 - May 2024",
      technologies: "Logisim-Evolution, Digital Logic Design, Computer Architecture",
      summary: "Collaborated in the design and implementation of a custom 16-bit CPU using Logisim-Evolution, incorporating key architectural components including an ALU (arithmetic + relational operations), register file, datapath, memory modules, and a micro-architected control unit."
    },
    {
      id: "32-bit-mips-processor",
      title: "32-Bit Single-Cycle MIPS Processor Components in VHDL",
      date: "Mar 2024 - May 2024",
      technologies: "RTL Design & Verification, Hardware Simulation (ModelSim)",
      summary: "Extended the design of a single-cycle CPU by implementing a 32-bit MIPS processor in VHDL, incorporating key modules including the ALU, register file, instruction memory, data memory, and control unit, each verified with dedicated testbenches and simulation waveforms. Implemented a subset of MIPS instructions (arithmetic, logical, branching, memory access, and jump operations) while ensuring correct datapath and control signal coordination."
    },
    {
      id: "heartbeat-monitoring",
      title: "Low-Cost Optical Heartbeat Monitoring System",
      date: "Mar 2024 - May 2024",
      technologies: "Analog Signal Processing, Electronic Instrumentation",
      summary: "Co-developed a low-cost heartbeat monitoring device leveraging an infrared LED–phototransistor pair to detect pulse signals through light absorption and reflection. Designed a multi-stage signal conditioning chain with active high-pass and low-pass filters, DC offset removal, and high-gain amplification using LM324N op-amps."
    },
    {
      id: "electronic-piano",
      title: "Basic Electronic Piano",
      date: "Apr 2023 - May 2023",
      technologies: "Electromagnetism, NE555 Timer IC, RC circuits, Breadboarding",
      summary: "Collaborated in a team to design and build a portable electronic piano replicating one octave (F5–F6) using a 555 Timer IC in astable mode as the oscillator. Engineered RC timing circuits to generate square-wave frequencies for specific notes, integrated pushbutton inputs for key selection, and output sound through a 4Ω speaker."
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
      title: "Calculus-Driven Data Collection, Analysis & Recommendations for Target Campus Locations",
      date: "2023",
      technologies: "Arduino for Data Collection, Geogebra",
      summary: "Developed a comprehensive data collection and analysis system using calculus principles to study and optimize campus locations, combining hardware sensors with mathematical modeling."
    }
  ];

  return (
    <Column maxWidth="m" paddingTop="24" className="fixed-header-spacing" style={{ animation: "fadeIn 1s ease-out", position: "relative" }}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={projects.path}
        title={projects.title}
        description={projects.description}
        image={`/api/og/generate?title=${encodeURIComponent("Projects")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Back Button */}
      <BackButton href="/" label="Back to Home" />

      {/* Projects Heading */}
      <Column marginBottom="l" paddingX="l" align="center" style={{ marginTop: "30px" }}>
        <Heading variant="heading-strong-xl" align="center">Projects</Heading>
      </Column>

      {/* Alfred Whitehead Quote */}
      <Column paddingX="l" gap="xl" marginBottom="xl" align="center" style={{ marginTop: "60px" }}>
        <Row gap="m" vertical="center" align="center" maxWidth="l">
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
          <Column gap="m" align="center" flex={1}>
            <Text variant="body-default-l" align="center" style={{ fontStyle: "italic", lineHeight: "1.6" }}>
              "Civilization advances by extending the number of important operations which we can perform without thinking about them."
            </Text>
            <Text variant="body-default-s" align="center" onBackground="neutral-weak" style={{ fontStyle: "italic" }}>
              — Alfred Whitehead, Creator of Process Philosophy
            </Text>
          </Column>
        </Row>
      </Column>

      {/* Project Description */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Text variant="body-default-l" align="center">
          Switching majors from Electrical/Electronics Engineering to Computer Engineering was one of the best decisions I ever made. In taking both engineering and CS classes, my passion for hardware-software co-design only grew.
        </Text>
      </Column>
      
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
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
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


      {/* Project Categories - Grid Layout */}
      <div className="grid-container mobile-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1.5rem",
        padding: "0 1.5rem",
        marginBottom: "2rem"
      }}>
        {/* Engineering Projects Card */}
        <Card
          as="a"
          href="/projects/engineering-projects"
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
              src="/images/projects/projects1.png"
              alt="Engineering Projects"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <Column gap="s" padding="l">
            <Heading variant="heading-strong-m">Engineering Projects</Heading>
            <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="s">
              Hardware, embedded systems, and engineering projects showcasing practical applications of technology.
            </Text>
            <Text variant="body-default-xs" style={{ color: "var(--brand-medium)" }}>
              Arduino, VHDL, FPGA, Hardware Design, Embedded Systems
            </Text>
          </Column>
        </Card>

        {/* CS Projects Card */}
        <Card
          as="a"
          href="/projects/cs-projects"
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
              src="/images/projects/projects2.png"
              alt="CS Projects"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <Column gap="s" padding="l">
            <Heading variant="heading-strong-m">CS Projects</Heading>
            <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="s">
              Computer Science and Deep Learning projects exploring AI, machine learning, and natural language processing.
            </Text>
            <Text variant="body-default-xs" style={{ color: "var(--brand-medium)" }}>
              Python, TensorFlow, Deep Learning, NLP, AI/ML
            </Text>
          </Column>
        </Card>
      </div>
    </Column>
  );
}
