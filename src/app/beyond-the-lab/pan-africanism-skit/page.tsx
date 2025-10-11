import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { BackButton, VideoPlayer } from "@/components";

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
        <Heading variant="heading-strong-xl" className="responsive-heading">Starring in a Skit on Pan-Africanism</Heading>
      </Column>

      {/* Project Info */}
      <Column marginBottom="l" paddingX="l" align="center">
        <Text variant="body-default-xs" onBackground="neutral-weak" style={{ textTransform: "uppercase", fontWeight: "600" }}>
          Performance • May 2025
        </Text>
      </Column>

      {/* Content */}
      <Column paddingX="l" gap="l">
        <Text variant="body-default-l" className="responsive-text">
          To answer the question: "How did Pan-Africanism evolve from a response to racialised exclusion to an opposition to colonial domination, and what roles had Blyden, Du Bois, Williams and Nkrumah play in reinterpreting it to meet the political and cultural needs of their time?" I act as Dr. Kwame Nkrumah, Ghana's first prime minister and president, to represent his work on political unification.
        </Text>

        <Column gap="m" align="center">
          <Heading variant="heading-strong-l" className="responsive-heading">Performance Video</Heading>
          <Text variant="body-default-m" className="responsive-text">
            Watch the Pan-Africanism skit performance:
          </Text>
          <div style={{ 
            position: "relative", 
            width: "100%", 
            height: "0", 
            paddingBottom: "56.25%", // 16:9 aspect ratio
            borderRadius: "8px",
            overflow: "hidden",
            backgroundColor: "#000"
          }}>
            <VideoPlayer
              width="100%"
              height="100%"
              controls
              preload="metadata"
              playsInline
              style={{ 
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "8px",
                backgroundColor: "#000"
              }}
            >
              <source src="/videos/pan-africanism.mp4" type="video/mp4; codecs=avc1.42E01E,mp4a.40.2" />
              <source src="/videos/pan-africanism.webm" type="video/webm" />
              <p>
                Your browser doesn't support HTML5 video. 
                <a href="/videos/pan-africanism.mp4" download>Download the video</a> instead.
              </p>
            </VideoPlayer>
          </div>
          <Text variant="body-default-s" onBackground="neutral-weak" style={{ fontStyle: "italic", textAlign: "center" }}>
            If the video appears black, try refreshing the page or use a different browser. 
            <a href="/videos/pan-africanism.mp4" target="_blank" rel="noopener noreferrer" style={{ color: "var(--primary-medium)", textDecoration: "underline" }}>
              Direct video link
            </a>
          </Text>
        </Column>
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
            .responsive-text {
              font-size: 1rem !important;
              line-height: 1.5 !important;
            }
            
            .responsive-heading {
              font-size: 1.5rem !important;
              line-height: 1.3 !important;
            }
          }
          
          @media (max-width: 480px) {
            .responsive-text {
              font-size: 0.9rem !important;
            }
            
            .responsive-heading {
              font-size: 1.25rem !important;
            }
          }
        `
      }} />
    </Column>
  );
}
