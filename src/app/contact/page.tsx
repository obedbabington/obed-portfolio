"use client";

import { Column, Heading, Text, Row } from "@once-ui-system/core";
import { baseURL, about, person, contact, iconLibrary } from "@/resources";
import { BackButton } from "@/components";

export default function Contact() {
  return (
    <Column maxWidth="m" className="fixed-header-spacing page-fade-in" style={{ minHeight: "calc(100vh - 120px)", justifyContent: "center", alignItems: "center", paddingTop: "60px", position: "relative" }}>
      {/* Animated Grid Background */}
      <div className="animated-grid" />
      
      {/* Back Button */}
      <BackButton href="/" label="Back to Home" />
      
      {/* Contact Header */}
      <Column marginBottom="xl" paddingX="l" align="center">
        <Text variant="body-default-l" align="center">
          I am best reached via email and WhatsApp. Chime in with a message and let us connect.
        </Text>
      </Column>


      {/* Contact Information */}
      <Column 
        marginTop="l" 
        paddingX="l" 
        align="center"
        style={{ maxWidth: "800px", width: "100%" }}
      >
        <div className="contact-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          width: "100%",
          alignItems: "stretch"
        }}>
          {/* Phone */}
          <Row gap="m" align="center" className="contact-item" style={{ 
            width: "100%", 
            height: "100px",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start"
          }}>
              <a 
                href="tel:+233540304620" 
                className="contact-icon" 
                style={{ 
                  background: "var(--neutral-alpha-weak)", 
                  borderRadius: "10px", 
                  padding: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "48px",
                  height: "48px",
                  cursor: "pointer",
                  textDecoration: "none",
                  transition: "background-color 0.2s ease"
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.background = "var(--neutral-alpha-medium)"}
                onMouseLeave={(e) => (e.target as HTMLElement).style.background = "var(--neutral-alpha-weak)"}
              >
                {iconLibrary.phone({ size: 24, color: "var(--neutral-medium)" })}
              </a>
              <Column style={{ minWidth: "200px" }}>
                <Text variant="body-default-s" onBackground="neutral-weak" style={{ fontWeight: 600 }}>
                  Phone
                </Text>
                <Text variant="body-default-m">
                  +233 540 304 620
                </Text>
              </Column>
          </Row>

          {/* WhatsApp */}
          <Row gap="m" align="center" className="contact-item" style={{ 
            width: "100%", 
            height: "100px",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start"
          }}>
              <a 
                href="https://wa.me/233264741689" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-icon" 
                style={{ 
                  background: "var(--neutral-alpha-weak)", 
                  borderRadius: "10px", 
                  padding: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "48px",
                  height: "48px",
                  cursor: "pointer",
                  textDecoration: "none",
                  transition: "background-color 0.2s ease"
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.background = "var(--neutral-alpha-medium)"}
                onMouseLeave={(e) => (e.target as HTMLElement).style.background = "var(--neutral-alpha-weak)"}
              >
                {iconLibrary.whatsapp({ size: 24, color: "var(--neutral-medium)" })}
              </a>
              <Column style={{ minWidth: "200px" }}>
                <Text variant="body-default-s" onBackground="neutral-weak" style={{ fontWeight: 600 }}>
                  WhatsApp
                </Text>
                <Text variant="body-default-m">
                  +233 264 741 689
                </Text>
              </Column>
          </Row>

          {/* Work Email */}
          <Row gap="m" align="center" className="contact-item" style={{ 
            width: "100%", 
            height: "100px",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start"
          }}>
              <a 
                href="mailto:obed.babington@ashesi.edu.gh" 
                className="contact-icon" 
                style={{ 
                  background: "var(--neutral-alpha-weak)", 
                  borderRadius: "10px", 
                  padding: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "48px",
                  height: "48px",
                  cursor: "pointer",
                  textDecoration: "none",
                  transition: "background-color 0.2s ease"
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.background = "var(--neutral-alpha-medium)"}
                onMouseLeave={(e) => (e.target as HTMLElement).style.background = "var(--neutral-alpha-weak)"}
              >
                {iconLibrary.email({ size: 24, color: "var(--neutral-medium)" })}
              </a>
              <Column style={{ minWidth: "200px" }}>
                <Text variant="body-default-s" onBackground="neutral-weak" style={{ fontWeight: 600 }}>
                  Work Email
                </Text>
                <Text variant="body-default-m" style={{ wordBreak: "break-all" }}>
                  obed.babington@ashesi.edu.gh
                </Text>
              </Column>
          </Row>

          {/* Personal Email */}
          <Row gap="m" align="center" className="contact-item" style={{ 
            width: "100%", 
            height: "100px",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start"
          }}>
              <a 
                href="mailto:obedalloteyb@gmail.com" 
                className="contact-icon" 
                style={{ 
                  background: "var(--neutral-alpha-weak)", 
                  borderRadius: "10px", 
                  padding: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "48px",
                  height: "48px",
                  cursor: "pointer",
                  textDecoration: "none",
                  transition: "background-color 0.2s ease"
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.background = "var(--neutral-alpha-medium)"}
                onMouseLeave={(e) => (e.target as HTMLElement).style.background = "var(--neutral-alpha-weak)"}
              >
                {iconLibrary.gmail({ size: 24, color: "var(--neutral-medium)" })}
              </a>
              <Column style={{ minWidth: "200px" }}>
                <Text variant="body-default-s" onBackground="neutral-weak" style={{ fontWeight: 600 }}>
                  Personal Email
                </Text>
                <Text variant="body-default-m" style={{ wordBreak: "break-all" }}>
                  obedalloteyb@gmail.com
                </Text>
              </Column>
          </Row>
        </div>
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

          /* Desktop styles */
          .contact-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            width: 100%;
            align-items: stretch;
          }

          .contact-item {
            width: 100%;
            height: 100px;
            padding: 20px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }

          .contact-icon {
            background: var(--neutral-alpha-weak);
            border-radius: 10px;
            padding: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            flex-shrink: 0;
            cursor: pointer;
            text-decoration: none;
            transition: background-color 0.2s ease;
          }

          .contact-icon:hover {
            background: var(--neutral-alpha-medium);
          }

          .contact-icon svg {
            width: 24px;
            height: 24px;
          }

          /* Tablet styles */
          @media (max-width: 768px) {
            .contact-grid {
              grid-template-columns: 1fr;
              gap: 16px;
              padding: 0 16px;
            }

            .contact-item {
              height: 90px;
              padding: 16px;
            }

            .contact-icon {
              width: 44px;
              height: 44px;
              padding: 10px;
            }

            .contact-icon svg {
              width: 22px;
              height: 22px;
            }
          }

          /* Mobile styles */
          @media (max-width: 480px) {
            .contact-grid {
              gap: 12px;
              padding: 0 12px;
            }

            .contact-item {
              height: 80px;
              padding: 12px;
              flex-direction: column;
              text-align: center;
              justify-content: center;
            }

            .contact-icon {
              width: 40px;
              height: 40px;
              padding: 8px;
              margin-bottom: 8px;
            }

            .contact-icon svg {
              width: 20px;
              height: 20px;
            }

            .contact-item .column {
              align-items: center;
            }
          }

          /* Extra small mobile */
          @media (max-width: 360px) {
            .contact-item {
              height: 70px;
              padding: 10px;
            }

            .contact-icon {
              width: 36px;
              height: 36px;
              padding: 6px;
            }

            .contact-icon svg {
              width: 18px;
              height: 18px;
            }
          }
        `
      }} />
    </Column>
  );
}
