"use client";

import { usePathname } from "next/navigation";

import { Fade, Flex, Line, Row, ToggleButton } from "@once-ui-system/core";

import { routes, display, about, blog, research, projects, beyondTheLab, contact } from "@/resources";
import { ThemeToggle } from "./ThemeToggle";
import { ResearchDropdown } from "./ResearchDropdown";
import { BlogDropdown } from "./BlogDropdown";
import { ProjectsDropdown } from "./ProjectsDropdown";
import styles from "./Header.module.scss";


export const Header = () => {
  const pathname = usePathname() ?? "";

  return (
    <>
      <Fade s={{ hide: true }} fillWidth position="fixed" height="80" zIndex={9} />
      <Fade
        hide
        s={{ hide: false }}
        fillWidth
        position="fixed"
        bottom="0"
        to="top"
        height="80"
        zIndex={9}
      />
      <Row
        fitHeight
        className={styles.position}
        position="sticky"
        as="header"
        zIndex={9}
        fillWidth
        padding="8"
        horizontal="center"
        data-border="rounded"
        s={{
          position: "fixed",
        }}
      >
        <Row paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
        </Row>
        <Row fillWidth horizontal="center">
          <Row
            background="page"
            border="neutral-alpha-weak"
            radius="m-4"
            shadow="l"
            padding="4"
            horizontal="center"
            zIndex={1}
          >
            <Row gap="4" vertical="center" textVariant="body-default-s" suppressHydrationWarning>
              {routes["/"] && (
                <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />
              )}
              {display.themeSwitcher && (
                <>
                  <Line background="neutral-alpha-medium" vert maxHeight="24" />
                  <ThemeToggle />
                </>
              )}
              <Line background="neutral-alpha-medium" vert maxHeight="24" />
              {routes["/about"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      href="/about"
                      label={about.label}
                      selected={pathname === "/about"}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      href="/about"
                      selected={pathname === "/about"}
                    />
                  </Row>
                </>
              )}
              {routes["/research"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ResearchDropdown />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ResearchDropdown />
                  </Row>
                </>
              )}
              {routes["/projects"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ProjectsDropdown />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ProjectsDropdown />
                  </Row>
                </>
              )}
              {routes["/beyond-the-lab"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      href="/beyond-the-lab"
                      label={beyondTheLab.label}
                      selected={pathname.startsWith("/beyond-the-lab")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      href="/beyond-the-lab"
                      selected={pathname.startsWith("/beyond-the-lab")}
                    />
                  </Row>
                </>
              )}
              {routes["/blog"] && (
                <>
                  <Row s={{ hide: true }}>
                    <BlogDropdown />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <BlogDropdown />
                  </Row>
                </>
              )}
              {routes["/contact"] && (
                <>
                  <Row s={{ hide: true }}>
                    <ToggleButton
                      href="/contact"
                      label={contact.label}
                      selected={pathname.startsWith("/contact")}
                    />
                  </Row>
                  <Row hide s={{ hide: false }}>
                    <ToggleButton
                      href="/contact"
                      selected={pathname.startsWith("/contact")}
                    />
                  </Row>
                </>
              )}
            </Row>
          </Row>
        </Row>
        <Flex fillWidth horizontal="end" vertical="center">
          <Flex
            paddingRight="12"
            horizontal="end"
            vertical="center"
            textVariant="body-default-s"
            gap="20"
          >
          </Flex>
        </Flex>
      </Row>
    </>
  );
};
