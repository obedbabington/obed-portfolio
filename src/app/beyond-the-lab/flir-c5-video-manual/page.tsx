import { Column, Heading, Meta, Schema, Text, Card, Media } from "@once-ui-system/core";
import { baseURL, about, person } from "@/resources";
import { BackButton } from "@/components";

export async function generateMetadata() {
  return Meta.generate({
    title: "A Video Manual of the Flir C5 Camera - Obed Allotey Babington",
    description: "Co-curated a comprehensive video manual demonstrating how the Flir C5 thermal imaging camera works, including theoretical background and practical features.",
    path: "/beyond-the-lab/flir-c5-video-manual",
    baseURL,
  });
}

export default function FlirC5VideoManual() {
  return (
    <Column maxWidth="m" paddingTop="24" style={{ animation: "fadeIn 1s ease-out" }}>
      {/* Back Button */}
      <BackButton href="/beyond-the-lab" label="Back to Beyond The Lab" />
      
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/beyond-the-lab/flir-c5-video-manual"
        title="A Video Manual of the Flir C5 Camera"
        description="Co-curated a comprehensive video manual demonstrating how the Flir C5 thermal imaging camera works, including theoretical background and practical features"
        image={`/api/og/generate?title=${encodeURIComponent("A Video Manual of the Flir C5 Camera")}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Page Title */}
      <Column marginBottom="l" paddingX="l" align="center">
        <Heading variant="heading-strong-xl">A Video Manual of the Flir C5 Camera</Heading>
      </Column>

      {/* Project Info */}
      <Column marginBottom="l" paddingX="l" align="center">
        <Text variant="body-default-xs" onBackground="neutral-weak" style={{ textTransform: "uppercase", fontWeight: "600" }}>
          Videography • Mar 2024
        </Text>
      </Column>

      {/* Project Image */}
      <Column marginBottom="xl" paddingX="l">
        <Media
          aspectRatio="16 / 9"
          radius="m"
          alt="FLIR C5 Thermal Imaging Camera"
          src="/images/beyond-the-lab/flir_c5.png"
        />
      </Column>

      {/* Content */}
      <Column paddingX="l" gap="l">
        <Text variant="body-default-l">
          It's fun to use technology – until you have to explain how it works. I had the pleasure of working with a friend to curate a video manual of how Flir C5, a compact thermal imaging camera, works including the theoretical background of thermal imaging and the very cool features of the camera!
        </Text>

        <Card padding="l" radius="m" shadow="m">
          <Column gap="m">
            <Heading variant="heading-strong-l">Video Manual</Heading>
            <Text variant="body-default-m">
              Watch the complete video manual demonstrating the Flir C5 thermal imaging camera:
            </Text>
            <iframe
              src="https://drive.google.com/file/d/1B2jBoYRdme02Js2oXHmmM4BrYcoeYgH_/preview"
              width="100%"
              height="400"
              style={{ border: "none", borderRadius: "8px" }}
              allow="autoplay"
            />
            <Text variant="body-default-s" onBackground="neutral-weak" style={{ fontStyle: "italic" }}>
              If the video doesn't load, you can access it directly: <a href="https://drive.google.com/file/d/1B2jBoYRdme02Js2oXHmmM4BrYcoeYgH_/view?usp=sharing" target="_blank" rel="noopener noreferrer">Flir C5 Video Manual</a>
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
