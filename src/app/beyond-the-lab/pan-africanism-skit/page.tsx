import { Column, Heading, Meta, Schema, Text, Card } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { BackButton } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: "Starring in a Skit on Pan-Africanism - Obed Allotey Babington",
    description: "Acted as Dr. Kwame Nkrumah, Ghana's first prime minister and president, in a skit exploring the evolution of Pan-Africanism and his role in political unification.",
    path: "/beyond-the-lab/pan-africanism-skit",
    baseURL,
  });
}

export default function PanAfricanismSkit() {
  return (
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      {/* Back Button */}
      <BackButton href="/beyond-the-lab" label="Back to Beyond The Lab" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/beyond-the-lab/pan-africanism-skit"
        title="Starring in a Skit on Pan-Africanism"
        description="Acted as Dr. Kwame Nkrumah, Ghana's first prime minister and president, in a skit exploring the evolution of Pan-Africanism and his role in political unification"
        image={`/api/og/generate?title=${encodeURIComponent("Starring in a Skit on Pan-Africanism")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Page Title */}
      <Column marginBottom="l" paddingX="l" align="center">
        <Heading variant="heading-strong-xl">Starring in a Skit on Pan-Africanism</Heading>
      </Column>

      {/* Project Info */}
      <Column marginBottom="l" paddingX="l" align="center">
        <Text variant="body-default-xs" onBackground="neutral-weak" style={{ textTransform: "uppercase", fontWeight: "600" }}>
          Performance • May 2025
        </Text>
      </Column>

      {/* Content */}
      <Column paddingX="l" gap="l">
        <Text variant="body-default-l">
          To answer the question: "How did Pan-Africanism evolve from a response to racialised exclusion to an opposition to colonial domination, and what roles had Blyden, Du Bois, Williams and Nkrumah play in reinterpreting it to meet the political and cultural needs of their time?" I act as Dr. Kwame Nkrumah, Ghana's first prime minister and president, to represent his work on political unification.
        </Text>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Performance Video</Heading>
            <Text variant="body-default-m">
              Watch the Pan-Africanism skit performance:
            </Text>
            <video
              width="100%"
              height="400"
              controls
              style={{ borderRadius: "8px" }}
            >
              <source src="/videos/pan-africanism.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
