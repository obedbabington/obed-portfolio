"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Column, Row, ToggleButton, Icon, Fade, Button } from "@once-ui-system/core";
import { routes, about, research, projects, beyondTheLab, blog, contact } from "@/resources";
import { ResearchDropdown } from "./ResearchDropdown";
import { BlogDropdown } from "./BlogDropdown";
import { ProjectsDropdown } from "./ProjectsDropdown";
import { SearchModal } from "./SearchModal";

export const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname() ?? "";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile Header */}
      <Row
        position="fixed"
        top="0"
        left="0"
        right="0"
        as="header"
        zIndex={10}
        fillWidth
        padding="12"
        style={{
          background: "transparent",
          borderBottom: "none",
          boxShadow: "none",
          backdropFilter: "none",
          minHeight: "60px",
        }}
      >
        {/* Logo/Home Button */}
        <Row vertical="center" gap="12">
          {routes["/"] && (
            <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />
          )}
        </Row>

        {/* Spacer */}
        <Row fillWidth />

        {/* Search Button */}
        <Button
          variant="tertiary"
          size="s"
          onMouseEnter={() => setIsSearchOpen(true)}
          style={{ padding: "8px", marginRight: "8px" }}
        >
          <Icon name="search" size="m" />
        </Button>

        {/* Hamburger Menu Button */}
        <Button
          variant="tertiary"
          size="s"
          onClick={toggleMenu}
          style={{ padding: "8px" }}
        >
          <Icon 
            name={isMenuOpen ? "close" : "menu"} 
            size="m"
          />
        </Button>
      </Row>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 15,
            backdropFilter: "blur(4px)",
          }}
          onClick={toggleMenu}
        >
          <Column
            background="page"
            border="neutral-alpha-weak"
            radius="m"
            shadow="l"
            padding="16"
            gap="12"
            style={{
              position: "absolute",
              top: "80px",
              left: "16px",
              right: "16px",
              animation: "slideDown 0.3s ease-out",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* About */}
            {routes["/about"] && (
              <ToggleButton
                href="/about"
                label={about.label}
                selected={pathname === "/about"}
                onClick={toggleMenu}
              />
            )}

            {/* Research */}
            {routes["/research"] && (
              <div style={{ position: "relative" }}>
                <ResearchDropdown onMobileMenuClose={toggleMenu} />
              </div>
            )}

            {/* Projects */}
            {routes["/projects"] && (
              <div style={{ position: "relative" }}>
                <ProjectsDropdown onMobileMenuClose={toggleMenu} />
              </div>
            )}

            {/* Beyond the Lab */}
            {routes["/beyond-the-lab"] && (
              <ToggleButton
                href="/beyond-the-lab"
                label={beyondTheLab.label}
                selected={pathname.startsWith("/beyond-the-lab")}
                onClick={toggleMenu}
              />
            )}

            {/* Blog */}
            {routes["/blog"] && (
              <div style={{ position: "relative" }}>
                <BlogDropdown onMobileMenuClose={toggleMenu} />
              </div>
            )}

            {/* Contact */}
            {routes["/contact"] && (
              <ToggleButton
                href="/contact"
                label={contact.label}
                selected={pathname.startsWith("/contact")}
                onClick={toggleMenu}
              />
            )}
          </Column>
        </div>
      )}

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes slideDown {
            0% {
              opacity: 0;
              transform: translateY(-10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `
      }} />

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};
