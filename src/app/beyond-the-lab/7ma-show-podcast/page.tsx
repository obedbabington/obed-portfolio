import { Column, Heading, Meta, Schema, Text, Card, SmartLink, Media } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { BackButton } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: "7MA Show Podcast Appearances - Obed Allotey Babington",
    description: "Co-hosted a season of the 7MA Show podcast exploring career preparedness and growth through the lens of Ashesi University, offering insights relevant to broader audiences.",
    path: "/beyond-the-lab/7ma-show-podcast",
    baseURL,
  });
}

export default function SevenMAShowPodcast() {
  return (
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      {/* Back Button */}
      <BackButton href="/beyond-the-lab" label="Back to Beyond The Lab" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/beyond-the-lab/7ma-show-podcast"
        title="7MA Show Podcast Appearances"
        description="Co-hosted a season of the 7MA Show podcast exploring career preparedness and growth through the lens of Ashesi University"
        image={`/api/og/generate?title=${encodeURIComponent("7MA Show Podcast Appearances")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Page Title */}
      <Column marginBottom="l" paddingX="l" align="center">
        <Heading variant="heading-strong-xl">7MA Show Podcast Appearances</Heading>
      </Column>

      {/* Project Info */}
      <Column marginBottom="l" paddingX="l" align="center">
        <Text variant="body-default-xs" onBackground="neutral-weak" style={{ textTransform: "uppercase", fontWeight: "600" }}>
          Podcast • March 2023
        </Text>
      </Column>

      {/* Cover Image */}
      <Column paddingX="l" marginBottom="l">
        <Media
          aspectRatio="16 / 9"
          radius="m"
          alt="7MA Show podcast cover"
          src="/images/beyond-the-lab/7MA.jpg"
          style={{ objectPosition: "top" }}
        />
      </Column>

      {/* Content */}
      <Column paddingX="l" gap="l">
        <Text variant="body-default-l">
          Co-hosted a season of the 7MA Show podcast alongside three colleagues, exploring themes of career preparedness and growth through the lens of Ashesi while offering insights relevant to broader audiences. I also hosted another episode with one of Ashesi University's Career Service staff to enlighten students about an upcoming career fair.
        </Text>

        <Text variant="body-default-l">
          I enjoyed the process of on-the-spot articulation of thoughts, alongside the camaraderie I experienced in the friendly exchange of insights and experiences.
        </Text>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Podcast Episodes</Heading>
            <Text variant="body-default-m">
              Listen to the episodes I co-hosted:
            </Text>
            <Column gap="s">
              <SmartLink 
                href="https://open.spotify.com/episode/0s19Uf3kNIK9MBHI4NnwCg?si=30ad94e0279d4d7c" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Text variant="body-default-m" style={{ color: "var(--brand-strong)", textDecoration: "underline" }}>
                  Episode 1 - Career Development and Growth
                </Text>
              </SmartLink>
              <SmartLink 
                href="https://open.spotify.com/episode/2U26EjP7Xmm7J41r2fYO21" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Text variant="body-default-m" style={{ color: "var(--brand-strong)", textDecoration: "underline" }}>
                  Episode 2 - Career Fair Preparation with Career Services
                </Text>
              </SmartLink>
            </Column>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Topics Explored</Heading>
            <Text variant="body-default-m">
              • Career preparedness and professional development
            </Text>
            <Text variant="body-default-m">
              • Student life and academic experiences at Ashesi University
            </Text>
            <Text variant="body-default-m">
              • Career fair preparation and networking strategies
            </Text>
            <Text variant="body-default-m">
              • Insights relevant to university students and broader audiences
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Skills Developed</Heading>
            <Text variant="body-default-m">
              • On-the-spot articulation and public speaking
            </Text>
            <Text variant="body-default-m">
              • Podcast hosting and content creation
            </Text>
            <Text variant="body-default-m">
              • Collaborative discussion and idea exchange
            </Text>
            <Text variant="body-default-m">
              • Educational content development for student audiences
            </Text>
          </Column>
        </Card>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Impact</Heading>
            <Text variant="body-default-m">
              Through these podcast episodes, I contributed to creating valuable educational content that helped students navigate career development challenges while fostering meaningful discussions about professional growth and academic life.
            </Text>
            <Text variant="body-default-m">
              The collaborative nature of the podcast allowed for rich exchanges of perspectives and experiences, creating a supportive learning environment for both hosts and listeners.
            </Text>
          </Column>
        </Card>
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
        `
      }} />
    </Column>
  );
}
