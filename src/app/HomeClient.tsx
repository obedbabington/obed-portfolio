"use client";

import {
  Heading,
  Text,
  Button,
  Avatar,
  Column,
  Row,
} from "@once-ui-system/core";
import { home, about, person } from "@/resources";
import { useEffect } from "react";

export function HomeClient() {
  useEffect(() => {
    // Load background image asynchronously
    const heroBg = document.querySelector('.hero-slider-bg') as HTMLElement;
    if (heroBg) {
      const img = new Image();
      img.onload = () => {
        heroBg.style.backgroundImage = "url('/images/public/images/hero/openslide.png')";
        heroBg.classList.add('loaded');
      };
      img.src = '/images/public/images/hero/openslide.png';
    }
  }, []);

  return (
    <Column fillWidth horizontal="center" gap="m">
      <Column maxWidth="s" horizontal="center" align="center" style={{ position: "relative", marginTop: "-16px" }}>
        {/* Sliding background image behind the main headline */}
        <div className="hero-slider-bg" aria-hidden="true" />
        <div className="hero-edge-fade" aria-hidden="true" />
        <div className="hero-foreground">
        <Heading wrap="balance" variant="display-strong-l" style={{ fontWeight: 700, animation: "fadeIn 1s ease-out", lineHeight: "1.2" }}>
          {home.headline}
        </Heading>
        <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl" style={{ fontWeight: 400, animation: "fadeIn 1s ease-out 0.3s both", marginTop: "64px", lineHeight: "1.4" }}>
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
  );
}
