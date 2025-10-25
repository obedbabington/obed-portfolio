"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

import { Row, ToggleButton, Button, Icon } from "@once-ui-system/core";

import { routes, display, about, blog, research, projects, beyondTheLab, contact } from "@/resources";
import { ResearchDropdown } from "./ResearchDropdown";
import { BlogDropdown } from "./BlogDropdown";
import { ProjectsDropdown } from "./ProjectsDropdown";
import { MobileHeader } from "./MobileHeader";
import { SearchModal } from "./SearchModal";
import styles from "./Header.module.scss";

export const Header = () => {
  const pathname = usePathname() ?? "";
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <div className={styles.mobileHeader}>
        <MobileHeader />
      </div>

      {/* Desktop Header */}
      <div className={styles.desktopHeader}>
        <Row
          as="header"
          className={styles.fixedHeader}
          position="fixed"
          top="0"
          left="0"
          right="0"
          zIndex={10}
          fillWidth
          padding="12"
          horizontal="between"
          background="page"
          border="neutral-alpha-weak"
        >
          {/* Left side - Home */}
          <Row 
            gap="8" 
            vertical="center" 
            textVariant="body-default-s" 
            suppressHydrationWarning
          >
            {routes["/"] && (
              <ToggleButton prefixIcon="home" href="/" selected={pathname === "/"} />
            )}
            
            {/* Theme toggle removed for dark-only mode */}
          </Row>

          {/* Center - Main Navigation */}
          <Row 
            gap="16" 
            vertical="center" 
            textVariant="body-default-l" 
            suppressHydrationWarning
            horizontal="center"
          >
            {routes["/about"] && (
              <ToggleButton
                href="/about"
                label={about.label}
                selected={pathname === "/about"}
              />
            )}
            
            {routes["/research"] && <ResearchDropdown />}
            
            {routes["/projects"] && <ProjectsDropdown />}
            
            {routes["/beyond-the-lab"] && (
              <ToggleButton
                href="/beyond-the-lab"
                label={beyondTheLab.label}
                selected={pathname.startsWith("/beyond-the-lab")}
              />
            )}
            
            {routes["/blog"] && <BlogDropdown />}
            
            {routes["/contact"] && (
              <ToggleButton
                href="/contact"
                label={contact.label}
                selected={pathname.startsWith("/contact")}
              />
            )}
          </Row>

          {/* Right side - Search */}
          <Row gap="8" vertical="center" style={{ width: "120px", justifyContent: "flex-end" }}>
            <div
              onMouseEnter={() => setIsSearchOpen(true)}
              style={{ padding: "8px", cursor: "pointer" }}
            >
              <Icon name="search" size="m" />
            </div>
          </Row>
        </Row>
      </div>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};
