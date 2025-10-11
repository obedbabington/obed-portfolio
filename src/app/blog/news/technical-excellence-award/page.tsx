import { Column, Heading, Meta, Schema, Text, Card, Media, Row, SmartLink } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { BackButton } from "@/components";
import Image from "next/image";

export async function generateMetadata() {
  return Meta.generate({
    title: "Technical Excellence Award in Computer Engineering",
    description: "Honored to receive the prestigious Technical Excellence Award in Computer Engineering for my capstone project on 'Hardware Accelerated Machine Learning with a Softcore Processor'.",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("Technical Excellence Award in Computer Engineering")}`,
    path: "/blog/news/technical-excellence-award",
  });
}

export default function TechnicalExcellenceAward() {
  return (
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      {/* Back Button */}
      <BackButton href="/blog/news" label="Back to News & Achievements" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/blog/news/technical-excellence-award"
        title={`Technical Excellence Award in Computer Engineering – ${person.name}`}
        description="Honored to receive the prestigious Technical Excellence Award in Computer Engineering for my capstone project on 'Hardware Accelerated Machine Learning with a Softcore Processor'."
        image={`/api/og/generate?title=${encodeURIComponent("Technical Excellence Award in Computer Engineering")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Project Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Heading marginBottom="l" variant="heading-strong-xl" align="center">
          Technical Excellence Award in Computer Engineering
        </Heading>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="m">
          <strong>Date:</strong> May 2025
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="l">
          <strong>Category:</strong> Award
        </Text>
        <Text variant="body-default-l" align="center" marginBottom="l">
          Honored to receive the prestigious Technical Excellence Award in Computer Engineering for my capstone project on 'Hardware Accelerated Machine Learning with a Softcore Processor'.
        </Text>
        
        {/* Thesis Defense Link */}
        <Column align="center" gap="s" marginBottom="l">
          <Text variant="body-default-s" onBackground="neutral-weak" align="center">
            <strong>Link:</strong> <SmartLink 
              href="https://youtu.be/J5wRpPMIeQA" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: "var(--primary-medium)",
                textDecoration: "underline",
                fontWeight: "500"
              }}
            >
              Watch My Thesis Defense
            </SmartLink>
          </Text>
        </Column>
      </Column>

      {/* Project Images */}
      <Column paddingX="l" gap="l" marginBottom="xl">
        <Media
          aspectRatio="16 / 9"
          radius="m"
          alt="Technical Excellence Award announcement"
          src="/images/research/capstone_award.png"
        />
        <Row gap="m">
          <Media
            aspectRatio="3 / 4"
            radius="m"
            alt="With mom after awards announcement"
            src="/images/research/obed_mom.jpg"
          />
          <Media
            aspectRatio="3 / 4"
            radius="m"
            alt="Profile at Ashesi awards display"
            src="/images/research/obed_profile.jpg"
          />
        </Row>
      </Column>

      {/* Project Content */}
      <Column paddingX="l" gap="l">
        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Award Details</Heading>
            <Text variant="body-default-m">
              Every year at Ashesi University, one student who demonstrates exceptional technical skills and contributions within the field of Computer Engineering, evidenced through their final capstone project, is awarded the prestigious Technical Excellence Award in Computer Engineering.
            </Text>
            <Text variant="body-default-m">
              This award recognizes outstanding technical achievement, innovation, and contribution to the field of computer engineering through capstone project work.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">My Journey</Heading>
            <Text variant="body-default-m">
              I remember seeing students receive this award annually and never particularly thinking I would do something markedly spectacular in my capstone to be 2025's recipient. But as fate would have it, about a month after completing a public <SmartLink href="https://www.linkedin.com/posts/obed-babington_day100-100dayschallenge-ashesi-activity-7319614240070250496-0VPJ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC0KYZMBSFS8Iay7cDvZn7p4eDGn5yD5oFo" target="_blank" rel="noopener noreferrer">100 days challenge</SmartLink> on my undergraduate thesis, "Hardware Accelerated Machine Learning with a Softcore Processor," I received an email from the Provost office that my work had been adjudged the best by my department.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Project Impact</Heading>
            <Text variant="body-default-m">
              My capstone project focused on developing a fully on-chip hardware-software co-design framework using FPGA-based softcore processor and custom VHDL acceleration modules. The project achieved a 420× speedup over baseline execution, demonstrating significant innovation in embedded machine learning.
            </Text>
            <Text variant="body-default-m">
              The work represents a breakthrough in making AI more accessible and efficient on resource-constrained embedded systems, which has broad implications for IoT devices, edge computing, and mobile applications.
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Recognition & Links</Heading>
            <Text variant="body-default-m">
              While I missed the awards night ceremony to be in the USA for an internship, I am immensely honored to have received this award! You can check out the event coverage <SmartLink href="https://ashesi.edu.gh/celebrating-excellence-student-research-and-innovation/" target="_blank" rel="noopener noreferrer">here</SmartLink>, and watch my thesis defense <SmartLink href="https://youtu.be/J5wRpPMIeQA" target="_blank" rel="noopener noreferrer">here</SmartLink>.
            </Text>
          </Column>
        </Card>
      </Column>
    </Column>
  );
}
