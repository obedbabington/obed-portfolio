"use client";

import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import { BackButton } from "@/components";
import TableOfContents from "@/components/about/TableOfContents";
import WorkRoadmap from "@/components/about/WorkRoadmap";
import CompetenciesCircles from "@/components/about/CompetenciesCircles";
import styles from "@/components/about/about.module.scss";
import React from "react";

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];
  return (
    <Column maxWidth="m" className="fixed-header-spacing" style={{ position: "relative" }}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Back Button */}
      <BackButton href="/" label="Back to Home" />
      
      <Row 
        fillWidth 
        s={{ 
          direction: "column", 
          alignItems: "center",
          horizontal: "center"
        }} 
        horizontal="center" 
        vertical="center" 
        style={{ 
          minHeight: "60vh", 
          alignItems: "flex-start"
        }}
      >
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            position="sticky"
            top="24"
            s={{ position: "relative", alignItems: "center" }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" radius="full" />
            {about.tableOfContent.display && (
              <Column
                gap="32"
                s={{ hide: true }}
                style={{ marginTop: "2rem" }}
              >
                <TableOfContents structure={structure} about={about} />
              </Column>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Row
                fitWidth
                border="brand-alpha-medium"
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Row paddingX="8">Schedule a call</Row>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Row>
            )}
                  <Heading className={styles.textAlign} variant="display-strong-s" align="center">
                    {person.name}
                  </Heading>
            <Row
              paddingTop="20"
              paddingBottom="8"
              gap="8"
              horizontal="center"
              vertical="center"
              fillWidth
            >
              <Button
                href="/cv/Obed_Babington_CV.pdf"
                target="_blank"
                prefixIcon="download"
                label="Download CV"
                size="m"
                weight="default"
                variant="secondary"
                style={{
                  transition: "all 0.3s ease",
                  boxShadow: "0 0 18px rgba(16,185,129,0.35), 0 0 36px rgba(16,185,129,0.25)",
                  borderColor: "rgba(16,185,129,0.6)",
                  color: "#eafff5",
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(16,185,129,0.55), 0 0 40px rgba(16,185,129,0.35)";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.currentTarget.style.boxShadow = "0 0 0 rgba(0, 0, 0, 0)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
            </Row>
          </Column>

          {/* About content without fork visuals */}
          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
          )}

          {about.studies.display && (
            <>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Row align="center" gap="m">
                      {institution.logo && (
                        <img 
                          src={institution.logo} 
                          alt={`${institution.name} logo`}
                          style={{ 
                            height: '40px', 
                            width: 'auto',
                            objectFit: 'contain'
                          }}
                        />
                      )}
                      <Text id={institution.name} variant="heading-strong-l">
                        {institution.name}
                      </Text>
                    </Row>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                {about.work.title}
              </Heading>
              <WorkRoadmap experiences={about.work.experiences} />
            </>
          )}

          {about.technical.display && (
            <>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="40"
                style={{ paddingLeft: "2rem" }}
              >
                {about.technical.title}
              </Heading>
              <CompetenciesCircles competencies={about.technical.skills} />
            </>
          )}
        </Column>
      </Row>
    </Column>
  );
}