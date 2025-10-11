import {
  Heading,
  Text,
  Button,
  Avatar,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center" className="mobile-padding fixed-header-spacing ai-gradient" style={{ animation: "fadeIn 1s ease-out" }}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={home.image}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center" style={{ position: "relative", marginTop: "-16px" }}>
          {/* Sliding background image behind the main headline */}
          <div className="hero-slider-bg" aria-hidden="true" />
          <div className="hero-edge-fade" aria-hidden="true" />
          <div className="hero-foreground">
          <Heading wrap="balance" variant="display-strong-l" style={{ fontWeight: 500, animation: "fadeIn 1s ease-out", lineHeight: "1.2" }}>
            {home.headline}
          </Heading>
          <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl" style={{ fontWeight: 400, animation: "fadeIn 1s ease-out 0.3s both", marginTop: "32px", lineHeight: "1.4" }}>
            {home.subline}
          </Text>
          <div style={{ paddingTop: "16px", animation: "fadeIn 1s ease-out 0.6s both", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
              style={{
                boxShadow: "0 0 18px rgba(16,185,129,0.35), 0 0 36px rgba(16,185,129,0.25)",
                borderColor: "rgba(16,185,129,0.6)",
                color: "#eafff5",
                margin: "0 auto",
              }}
            >
              <Row gap="8" vertical="center" horizontal="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Row>
            </Button>
          </div>
          </div>
        </Column>
      </Column>
      {/* Home simplified: only hero remains */}
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `
      }} />
    </Column>
  );
}
