import { Column, Heading, Meta, Schema, Text, Card, Row } from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import { BackButton } from "@/components";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: "CS Projects - Obed Allotey Babington",
    description: "Computer Science and Deep Learning projects by Obed Allotey Babington",
    path: "/projects/cs-projects",
    baseURL,
  });
}

export default function CSProjects() {
  const csProjectsList = [
    {
      id: "automatic-speech-recognition-asante-twi",
      title: "Automatic Speech Recognition System for Asante Twi",
      date: "Nov 2024 - Dec 2024",
      technologies: "Python, TensorFlow/Keras, MFCCs, LSTMs, Sequence-to-Sequence Models, Adam Optimizer, Hugging Face Spaces",
      summary: "Developed an ASR system for Asante Twi, a Ghanaian language with limited digital resources, achieving CER of 0.0714 and WER of 0.20 on curated test samples.",
      description: "For our CS464 Deep Learning final project, my teammate and I developed an Automatic Speech Recognition (ASR) system for Asante Twi, a Ghanaian language with very limited digital resources. Our objective was to build a model capable of converting spoken Twi into accurate text transcriptions, evaluated by Character Error Rate (CER) and Word Error Rate (WER).",
      achievements: [
        "Built a sequence-to-sequence LSTM-based encoder–decoder model from scratch using MFCC features",
        "Achieved strong baseline performance with CER of 0.0714 and WER of 0.20 on curated test samples",
        "Deployed the model on Hugging Face Spaces for public interaction and testing",
        "Demonstrated the feasibility of deep learning for low-resource languages like Asante Twi"
      ],
      link: {
        url: "https://huggingface.co/spaces/sedemkofi/twi-transcription",
        text: "Deployed Model on Hugging Face"
      }
    },
    {
      id: "gender-recognition-audio-signals",
      title: "Gender Recognition from Audio Signals",
      date: "Mar 2024 - Apr 2024",
      technologies: "MATLAB, App Designer, FFT, Butterworth Filter, Signal Processing, GUI Development",
      summary: "Developed a gender recognition system from audio signals using MATLAB and digital signal processing techniques, featuring interactive GUI and dual classification approaches.",
      description: "As part of a team project in Signals and Systems, we developed a gender recognition system from audio signals using MATLAB and digital signal processing techniques. Together, we designed a pipeline that began with audio acquisition and filtering using a Butterworth filter, followed by feature extraction through FFT to isolate fundamental frequencies for classification.",
      achievements: [
        "Implemented both threshold-based classifier (165 Hz cutoff) and MATLAB's pitch function for comparison",
        "Built interactive MATLAB App Designer GUI with audio upload, playback, and visualization",
        "Integrated modules for waveform visualization, FFT spectrum plotting, and real-time classification",
        "Demonstrated practical signal processing applications in speech recognition"
      ],
      link: {
        url: "https://www.pdffiller.com/s/t2Xg63DbB5",
        text: "View Project Report"
      }
    },
    {
      id: "python-pathfinder",
      title: "Python Pathfinder",
      date: "Nov 2022",
      technologies: "Python, Object-Oriented Programming, Data Structures",
      summary: "Co-developed Python PathFinder, a program that computes the shortest path between two points using the A* search algorithm with interactive Pygame visualization.",
      description: "In a three-member team, I co-developed Python PathFinder, a program that computes the shortest path between two points while navigating obstacles. We implemented the A* search algorithm, combining g-scores (path cost) and h-scores (Manhattan distance heuristic), and optimized traversal using priority queues.",
      achievements: [
        "Implemented A* search algorithm with g-scores and h-scores optimization",
        "Designed interactive grid-based interface in Pygame for dynamic obstacle placement",
        "Created visual demonstration of path exploration and selection algorithms",
        "Developed user interface for defining start/end nodes and placing obstacles"
      ],
      link: {
        url: "https://www.pdffiller.com/s/6E715pN9l",
        text: "View Project Report"
      }
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
        path="/projects/cs-projects"
        title="CS Projects"
        description="Computer Science and Deep Learning projects by Obed Allotey Babington"
        image={`/api/og/generate?title=${encodeURIComponent("CS Projects")}`}
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
            CS Projects
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
          Computer Science and Deep Learning projects exploring AI, machine learning, and natural language processing.
        </Text>
      </Column>

      {/* CS Projects - Grid Layout */}
      <div className="grid-container mobile-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1.5rem",
        padding: "0 1.5rem"
      }}>
        {csProjectsList.map((project, index) => (
          <Card
            key={index}
            as="a"
            href={`/projects/cs-projects/${project.id}`}
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
              backgroundColor: "#f5f5f5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              {project.id === "automatic-speech-recognition-asante-twi" && (
                <Image
                  src="/images/projects/speech-recognition.jpg"
                  alt={project.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              )}
              {project.id === "gender-recognition-audio-signals" && (
                <Image
                  src="/images/projects/image-recognition.png"
                  alt={project.title}
                  fill
                  style={{ objectFit: "contain" }}
                />
              )}
              {project.id === "python-pathfinder" && (
                <Image
                  src="/images/projects/pathfinding.png"
                  alt={project.title}
                  fill
                  style={{ objectFit: "contain" }}
                />
              )}
            </div>
            
            {/* Content below image */}
            <Column gap="s" padding="l">
              <Heading variant="heading-strong-m" className="text-single-line">{project.title}</Heading>
              <Text variant="body-default-xs" onBackground="neutral-weak">
                <strong>Date:</strong> {project.date}
              </Text>
              <Text variant="body-default-xs" onBackground="neutral-weak">
                <strong>{project.id === "python-pathfinder" ? "Skills:" : "Tools & Technologies:"}</strong> {project.technologies}
              </Text>
              <Text variant="body-default-s" marginTop="s">{project.summary}</Text>
              {project.link && (
                <Text variant="body-default-xs" onBackground="neutral-weak" marginTop="s">
                  <strong>Link:</strong> <Text as="a" href={project.link.url} target="_blank" style={{ color: "var(--brand-medium)", textDecoration: "none" }}>{project.link.text}</Text>
                </Text>
              )}
              <Text variant="body-default-xs" onBackground="neutral-weak" marginTop="s" style={{ fontStyle: "italic" }}>
                Click to read more →
              </Text>
            </Column>
          </Card>
        ))}
      </div>
    </Column>
  );
}
