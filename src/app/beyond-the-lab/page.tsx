'use client';

import { Column, Heading, Schema, Text, Card, Row, Button } from "@once-ui-system/core";
import { baseURL, about, person, beyondTheLab } from "@/resources";
import { BackButton, ActivityNetworkGraph } from "@/components";
import Image from "next/image";
import { useState } from "react";

export default function BeyondTheLab() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const leadershipList = [
    {
      id: "tedx-ashesi-speaker",
      title: "TEDx Ashesi University Speaker",
      date: "2022",
      category: "Public Speaking",
      summary: "Delivered a TEDx talk on quantum physics and the role of wandering in the realm of the unknown, exploring the importance of self-expression in society.",
      imagePath: "/images/beyond-the-lab/tedx-ashesi-cover.jpg",
      description: "Quantum Physics has always intrigued Obed and the exploration of the world beyond what meets the eye is something he is extremely passionate about. As an Electrical/Electronic Engineering student of Ashesi University, he believes that when the suppression of the willful expression of the self leads to the degradation of society. He loves to use every opportunity he can get to create meaning in people's lives through self-expression.",
      achievements: [
        "Delivered an inspiring TEDx talk that explored the intersection of quantum physics and personal expression, demonstrating the power of curiosity and intellectual wandering.",
        "Addressed a diverse audience about the importance of maintaining authentic self-expression in society and its impact on collective progress.",
        "Contributed to the TEDx Ashesi University community by sharing insights on navigating the unknown and finding meaning through exploration."
      ],
      youtubeVideoId: "l7cPJzOKZcE"
    },
    {
      id: "arm-engage-leadership",
      title: "Research & Innovation Lead, Arm (E³)NGAGE Ashesi Student Club",
      date: "2023 - 2024",
      category: "Leadership",
      summary: "Led club engineering projects and fostered a research culture, producing five diverse research articles and conducting Arduino C coding workshops. Additionally, curated and managed a network of student-developed research articles, developing content management and editorial skills.",
      imagePath: "/images/projects/arm-y.jpg",
      description: "The Arm(E³)NGAGE Ashesi Student Club, a collaboration between ARM and Ashesi University, is responsible for educating Ashesi students on the world of IoT, Embedded systems, and their uses on ARM technology. In doing so, it hopes to foster innovation, entrepreneurship, and research using ARM products. As part of this role, I also took on the responsibility of curating and managing a network of student-developed research articles, developing editorial skills and content management strategies.",
      achievements: [
        "Led club engineering projects, notably an automated parking system. Responsibilities included conducting Arduino C coding workshops, introducing participants to GitHub for collaborative project development, and fostering algorithmic problem-solving skills. Additionally, I authored project documentation and problem design outlines.",
        "Crafted a vibrant network of student researchers in engineering and computer science, leading to the production of five diverse research articles, and pioneering a research culture within the ARM E(3)NGAGE student club.",
        "Reviewed and selected high-quality student research articles for publication, ensuring academic rigor and relevance while developing strong editorial and content management skills.",
        "Developed content strategies and presentation approaches to enhance research dissemination within the university community, fostering collaboration among student researchers and building a supportive academic network."
      ]
    },
    {
      id: "ashesi-research-club-president",
      title: "President, Ashesi Research Club",
      date: "2023 - 2024",
      category: "Leadership",
      summary: "Served as the first active president of the Ashesi Research Club to expand students' understanding of the research landscape and build their research skills.",
      imagePath: "/images/beyond-the-lab/research-club-cover.jpg",
      description: "Served as the first active president of the Ashesi Research Club to expand students' understanding of the research landscape and build their research skills to provide groundbreaking insights for developing innovative, industry-leading solutions for the continent.",
      achievements: [
        "Under the auspices of the provost's office, I co-oversaw the curation of the first-ever campus-wide research festival under the theme, \"Exploring New Horizons\" to celebrate student scholarship and innovation and ignite their passions for research and the opportunities it offers.",
        "Directed the development of workshops, championed research-driven projects, and supported student-led research proposals, resulting in enhanced academic engagement and increased research output on campus."
      ]
    },
    {
      id: "aftgonosia-service-learning",
      title: "Aftgonosia - Career Development Initiative",
      date: "2024",
      category: "Community Service",
      summary: "Designed and implemented a service-learning project addressing career-related anxieties and identity challenges faced by Ghanaian adolescents through self-discovery and career development workshops.",
      imagePath: "/images/beyond-the-lab/aftognosia-cover.jpg",
      description: "As part of a service–learning initiative, my team and I designed and implemented a project aimed at addressing the career-related anxieties and identity challenges faced by Ghanaian adolescents. Grounded in Erik Erikson's theory of psychosocial development, we recognized adolescence as a pivotal stage where identity formation intersects with career decision-making, often creating stress and uncertainty.",
      achievements: [
        "Created a two-phased intervention model: self-discovery through personality assessments and career development alignment",
        "Partnered with two junior high schools to facilitate interactive workshops with self-assessment tools based on the OCEAN framework",
        "Conducted group discussions and one-on-one guidance sessions to support student career exploration",
        "Enabled students to present their findings in team presentations, fostering confidence in articulating personal strengths and aspirations"
      ]
    },
    {
      id: "msmiles-stem-curriculum",
      title: "MSmiles - STEM Curriculum Design",
      date: "2022",
      category: "Education & Mentorship",
      summary: "Contributed to creating and implementing an engaging, research-driven STEM curriculum tailored for orphaned children as a STEM Curriculum Design Associate with Smiles non-profit.",
      imagePath: "/images/beyond-the-lab/msmiles-cover.jpg",
      description: "As a STEM Curriculum Design Associate with Smiles, a non-profit dedicated to the holistic development of orphans, I contributed to creating and implementing an engaging, research-driven STEM curriculum tailored for orphaned children. My role involved researching relevant topics, structuring lesson plans, and iteratively testing and refining content to ensure accessibility and long-term retention.",
      achievements: [
        "Designed the STEM curriculum for the Smiles Launch at Christ Faith Foster Home in Accra, Ghana",
        "Guided students through hands-on design challenges to introduce them to design thinking principles",
        "Facilitated interactive teaching sessions emphasizing curiosity, creativity, and problem-solving",
        "Strengthened skills in curriculum design, research, and facilitation while deepening commitment to STEM education as a tool for empowerment"
      ]
    },
    {
      id: "assistive-technology-makerspace",
      title: "Assistive Technology Makerspace Fellowship",
      date: "Aug - Sep 2019",
      category: "Fellowship",
      summary: "As a Fellow at the Assistive Technology Makerspace, contributed to advancing accessible, low-cost assistive technologies for persons with disabilities in Ghana through hands-on training and team-based design challenges.",
      imagePath: "/images/beyond-the-lab/makerspace-cover.jpg",
      description: "As a Fellow at the Assistive Technology (AT) Makerspace, a program launched by Tech Era in partnership with Dextra (Canada) and the Ashesi D-Lab, I contributed to advancing accessible, low-cost assistive technologies for persons with disabilities in Ghana. Over an intensive two-week fellowship, I gained hands-on training in 3D modeling and printing, Arduino programming, electronics, and lean research methods, and applied these skills in a team-based design challenge.",
      achievements: [
        "Co-designed and prototyped a Braille scientific calculator aimed at empowering visually impaired students to independently access STEM education",
        "Gained hands-on training in 3D modeling and printing, Arduino programming, electronics, and lean research methods",
        "Strengthened abilities in human-centered design, rapid prototyping, and cross-disciplinary collaboration",
        "Reinforced commitment to leveraging technology for social impact and accessibility"
      ]
    },
    {
      id: "flir-c5-video-manual",
      title: "A Video Manual of the Flir C5 Camera",
      date: "Mar 2024",
      category: "Videography",
      summary: "Co-curated a comprehensive video manual demonstrating how the Flir C5 thermal imaging camera works, including theoretical background and practical features.",
      imagePath: "/images/beyond-the-lab/flir_c5.png",
      description: "It's fun to use technology – until you have to explain how it works. I had the pleasure of working with a friend to curate a video manual of how Flir C5, a compact thermal imaging camera, works including the theoretical background of thermal imaging and the very cool features of the camera!",
      achievements: [
        "Co-created a comprehensive video manual explaining the Flir C5 thermal imaging camera functionality",
        "Included theoretical background of thermal imaging technology in the educational content",
        "Demonstrated practical features and applications of the thermal imaging camera",
        "Developed skills in technical video production and educational content creation"
      ]
    },
    {
      id: "pan-africanism-skit",
      title: "Starring in a Skit on Pan-Africanism",
      date: "May 2025",
      category: "Performance",
      summary: "Acted as Dr. Kwame Nkrumah, Ghana's first prime minister and president, in a skit exploring the evolution of Pan-Africanism and his role in political unification.",
      imagePath: "/images/beyond-the-lab/pan-africanism.png",
      description: "To answer the question: \"How did Pan-Africanism evolve from a response to racialised exclusion to an opposition to colonial domination, and what roles had Blyden, Du Bois, Williams and Nkrumah play in reinterpreting it to meet the political and cultural needs of their time?\" I act as Dr. Kwame Nkrumah, Ghana's first prime minister and president, to represent his work on political unification.",
      achievements: [
        "Portrayed Dr. Kwame Nkrumah in an educational skit about Pan-Africanism's historical evolution",
        "Explored the transition from racial exclusion response to colonial domination opposition",
        "Represented Nkrumah's contributions to political unification and Pan-African thought",
        "Enhanced understanding of historical political movements and their contemporary relevance"
      ]
    },
    {
      id: "7ma-show-podcast",
      title: "7MA Show Podcast Appearances",
      date: "March 2023",
      category: "Podcast",
      summary: "Co-hosted a season of the 7MA Show podcast exploring career preparedness and growth through the lens of Ashesi University, offering insights relevant to broader audiences.",
      imagePath: "/images/beyond-the-lab/7MA.jpg",
      description: "Co-hosted a season of the 7MA Show podcast alongside three colleagues, exploring themes of career preparedness and growth through the lens of Ashesi while offering insights relevant to broader audiences. I also hosted another episode with one of Ashesi University's Career Service staff to enlighten students about an upcoming career fair. I enjoyed the process of on-the-spot articulation of thoughts, alongside the camaraderie I experienced in the friendly exchange of insights and experiences.",
      achievements: [
        "Co-hosted multiple episodes of the 7MA Show podcast focusing on career development themes",
        "Collaborated with Ashesi University's Career Service staff to create educational content about career opportunities",
        "Developed skills in on-the-spot articulation and public speaking through podcast hosting",
        "Fostered meaningful discussions about career preparedness relevant to university students and broader audiences"
      ],
      links: [
        {
          title: "Episode 1",
          url: "https://open.spotify.com/episode/0s19Uf3kNIK9MBHI4NnwCg?si=30ad94e0279d4d7c"
        },
        {
          title: "Episode 2", 
          url: "https://open.spotify.com/episode/2U26EjP7Xmm7J41r2fYO21"
        }
      ]
    }
  ];

  return (
    <Column maxWidth="m" paddingTop="24" className="fixed-header-spacing with-back-button" style={{ animation: "fadeIn 1s ease-out", position: "relative" }}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={beyondTheLab.path}
        title={beyondTheLab.title}
        description={beyondTheLab.description}
        image={`/api/og/generate?title=${encodeURIComponent("Beyond The Lab")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Back Button */}
      <BackButton href="/" label="Back to Home" />

      {/* Beyond the Lab Heading */}
      <Column marginBottom="l" paddingX="l" align="center" style={{ marginTop: "30px" }}>
        <Heading variant="heading-strong-xl" align="center">Beyond the Lab</Heading>
      </Column>

      {/* Page Header */}
      <Column marginBottom="l" paddingX="l" align="center">
        <Text variant="body-default-l" align="center" marginTop="m">
          When I am not tackling research or engineering projects, you will find me engaged in a plethora of other endeavors. Leadership, public speaking, community service, writing, you name it.
        </Text>
        <Text variant="body-default-l" align="center" marginTop="m">
          Here lies a more holistic representation of my world. Take a dive.
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

      {/* Network Graph */}
      <Column paddingX="l">
        <ActivityNetworkGraph
          activities={leadershipList}
          onNodeClick={(activityId) => {
            window.location.href = `/beyond-the-lab/${activityId}`;
          }}
          selectedCategory={selectedCategory || undefined}
          onCategoryFilter={(category) => setSelectedCategory(category || null)}
        />
      </Column>
    </Column>
  );
}
