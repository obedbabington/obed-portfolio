import { About, Blog, Contact, Home, Newsletter, Person, Social, Work, Research } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Obed",
  lastName: "Allotey Babington",
  name: `Obed Allotey Babington`,
  role: "Computer Engineering Student",
  avatar: "/images/obedabout2.jpg",
  email: "obed.babington@ashesi.edu.gh",
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/obed-babington",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:obed.babington@ashesi.edu.gh",
  },
];

const home: Home = {
  path: "/",
  image: "/api/og/generate?title=Obed Allotey Babington | Official Portfolio",
  label: "Home",
  title: "Obed Allotey Babington | Official Portfolio",
  description: "Shaping digital and embedded systems for intelligence at the edge",
  headline: <>Shaping digital and embedded systems for intelligence at the edge</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Latest News
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Hi, I am Obed, a research assistant at Ashesi University, blending ideas from hardware, software, and artificial intelligence to build future-ready systems.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `Welcome To My World!`,
  description: `Meet ${person.name}, ${person.role}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        At my core, I am marked by an intellectual curiosity, ambition, and a love for social connection.<br /><br />
        My current research interests lie in the development of embedded machine learning solutions for deploying AI models on edge devices. This includes the design and implementation of hardware acceleration strategies for neural network inference using FPGAs.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Smart Technologies Lab, Ashesi University",
        timeframe: "Aug 2025 – Present",
        role: "Research Assistant",
        achievements: [
          <>
            Conducting research on <strong>embedded machine learning (TinyML)</strong> solutions for deploying AI models on <strong>resource-constrained microcontrollers and SoC</strong> for local applications.
          </>,
          <>
            Designing and implementing <strong>hardware acceleration strategies</strong> for neural network inference using <strong>FPGAs (Xilinx Artix-7, ZYNQ-7000)</strong> with custom accelerators and <strong>co-design methodologies</strong> involving softcore processors (<strong>MicroBlaze</strong>).
          </>,
          <>
            Benchmarking performance across microcontrollers and FPGA-based accelerators, analyzing <strong>latency</strong> and <strong>energy efficiency trade-offs</strong>.
          </>,
        ],
        images: [],
      },
      {
        company: "Schneider Electric Sustainability Business",
        timeframe: "May 2025 – Jul 2025",
        role: "Research Consultant (Intern)",
        achievements: [
          <>
            Through the AMRE Program at the College of Wooster, collaborated with a research team to design and prototype an <strong>Energy Management Co-Pilot</strong> using <strong>large language models (LLMs)</strong> and <strong>autonomous agent architectures</strong>.
          </>,
          <>
            Developed an evaluation pipeline leveraging LlamaIndex's <strong>CorrectnessEvaluator</strong> to assess agent responses against ground-truth datasets across multiple query categories.
          </>,
          <>
            Delivered a <strong>35-minute final presentation</strong> to Schneider Electric's Sustainability Business team and co-authored a <strong>66-page technical report</strong> documenting research findings, methodologies, and recommendations.
          </>,
        ],
        images: [],
      },
      {
        company: "Smart Technologies Lab, Ashesi University",
        timeframe: "May 2024 – Sep 2024",
        role: "Undergraduate Research Assistant",
        achievements: [
          <>
            Investigated hardware acceleration of <strong>neural network inference</strong> using a Xilinx Basys 3 Artix-7 FPGA in parallel communication with microcontroller units (MCUs).
          </>,
          <>
            Interfaced the FPGA with both an 8-bit Arduino Uno and a 32-bit Freedom KL25Z MCU, analyzing the effect of MCU <strong>bit-width architecture</strong> on inference latency.
          </>,
          <>
            Demonstrated up to <strong>86% performance improvement</strong> in inference execution time across both MCU platforms through FPGA-based acceleration.
          </>,
        ],
        images: [],
      },
      {
        company: "Swoove360",
        timeframe: "Jun 2023 – Dec 2023",
        role: "Telematics Engineer (Intern)",
        achievements: [
          <>
            Contributed to the launch of <strong>Fleet360</strong>, a fleet management platform designed to optimize vehicle operations in Ghana.
          </>,
          <>
            Configured and synchronized telematics devices with company servers and APIs, ensuring reliable <strong>real-time data streaming</strong>.
          </>,
          <>
            Maintained and managed a ledger of SIM cards for device connectivity, supporting data integration with Swoove360's API endpoints.
          </>,
          <>
            Authored and updated comprehensive telematics documentation, enhancing troubleshooting workflows and system optimization across engineering operations.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Ashesi University",
        logo: "/images/ashesi_logo.png",
        description: (
          <>
            <span style={{ color: 'var(--brand-medium)' }}>B.Sc. (Hons) Computer Engineering</span><br />
            <span style={{ color: 'var(--brand-medium)' }}>Cumulative GPA: 3.84/4.0</span><br />
            <span style={{ color: 'var(--brand-medium)' }}>2021–2025</span><br /><br />
            <strong>Relevant Courses:</strong> Embedded Systems, Digital System Design, Internet of Things (IoT), Deep Learning, Circuits and Electronics, Data Structures and Algorithms, Object-Oriented Programming
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Competencies",
    skills: [
      {
        title: "Hardware",
        description: (
          <>ARM Cortex-M (STM32), FPGA (Xilinx Artix-7, ZYNQ-7000), Arduino, ESP32, Raspberry Pi, Oscilloscopes, Signal Generators</>
        ),
      },
      {
        title: "Programming",
        description: (
          <>Embedded C, VHDL, Python, Java, MATLAB, C++, Assembly</>
        ),
      },
      {
        title: "Tools",
        description: (
          <>Vivado, Vitis IDE, ModelSim, Logisim Evolution, Git/GitHub, Linux/UNIX, VS Code, Microsoft Office Suite, Notion</>
        ),
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Updates",
  title: "Updates - Obed Allotey Babington",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Work – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const research: Research = {
  path: "/research",
  label: "Research",
  title: `Research – ${person.name}`,
  description: `Research experiences and work by ${person.name}`,
};


const projects: Contact = {
  path: "/projects",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Engineering and Computer Science projects by ${person.name}`,
};

const beyondTheLab: Contact = {
  path: "/beyond-the-lab",
  label: "Beyond The Lab",
  title: `Beyond The Lab – ${person.name}`,
  description: `Leadership, public speaking, community service, writing, and more by ${person.name}`,
};

const contact: Contact = {
  path: "/contact",
  label: "Contact",
  title: `Contact – ${person.name}`,
  description: `Get in touch with ${person.name}`,
};

export { person, social, newsletter, home, about, blog, work, research, projects, beyondTheLab, contact };