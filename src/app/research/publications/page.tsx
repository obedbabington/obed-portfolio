"use client";

import { Column, Heading, Text, Card, Row } from "@once-ui-system/core";
import { BackButton } from "@/components";
import Image from "next/image";

const publications = [
  {
    id: 1,
    title: "On-Chip vs. Off-Chip FPGA Acceleration for Embedded Neural Networks",
    authors: ["O. Babington", "N. Amanquah"],
    conference: "13th International Conference on Intelligent Embedded, MicroElectronics, Communication and Optical Networks (IEMECON)",
    location: "Jaipur, India",
    year: 2025,
    status: "Accepted",
    abstract: "This paper presents a systematic comparison of on-chip versus off-chip FPGA acceleration strategies for embedded neural network inference. We evaluate the performance trade-offs between integrated FPGA softcore processors and external FPGA acceleration units, analyzing factors such as communication overhead, latency, and power consumption in resource-constrained environments.",
    keywords: ["FPGA", "Neural Networks", "Embedded Systems", "Hardware Acceleration", "On-Chip Processing"]
  }
];

export default function Publications() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published": return "#10b981";
      case "Accepted": return "#10b981";
      case "Under Review": return "#f59e0b";
      case "Submitted": return "#3b82f6";
      default: return "#6b7280";
    }
  };

  return (
    <Column maxWidth="m" paddingTop="24" className="fixed-header-spacing page-fade-in" style={{ position: "relative" }}>
      {/* Back Button */}
      <BackButton href="/research" label="Back to Research" />
      
      {/* Publications Heading */}
      <Column marginBottom="l" paddingX="l" align="center" style={{ marginTop: "20px" }}>
        <Heading variant="heading-strong-xl" align="center">Publications</Heading>
        <Text variant="body-default-l" align="center" marginTop="s" onBackground="neutral-weak">
          Research contributions and academic publications
        </Text>
      </Column>

      {/* Publications Grid */}
      <div className="grid-container mobile-grid" style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "1.5rem",
        padding: "0 1.5rem",
        marginBottom: "2rem"
      }}>
        {publications.map((publication) => (
          <Card
            key={publication.id}
            padding="0"
            radius="m"
            shadow="m"
            style={{ 
              display: "flex",
              flexDirection: "row",
              transition: "all 0.3s ease",
              border: "1px solid rgba(16, 185, 129, 0.1)",
              background: "rgba(255, 255, 255, 0.02)",
              backdropFilter: "blur(10px)",
              overflow: "hidden",
              minHeight: "300px"
            }}
          >
            {/* Image on the right side */}
            <div style={{ 
              position: "relative",
              width: "300px",
              height: "100%",
              minHeight: "300px",
              flexShrink: 0
            }}>
              <Image
                src="/images/research/fpga-acceleration-comparison_cover.png"
                alt={publication.title}
                fill
                priority
                sizes="300px"
                style={{ objectFit: "cover" }}
                quality={85}
              />
            </div>
            
            {/* Content in rectangular box */}
            <Column 
              gap="m" 
              padding="l" 
              style={{ 
                flex: 1,
                justifyContent: "space-between"
              }}
            >
              <Column gap="m">
                <Row horizontal="between" align="start" gap="m">
                  <Column flex={1} gap="s">
                    <Heading variant="heading-strong-m" style={{ lineHeight: "1.3" }}>
                      {publication.title}
                    </Heading>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {publication.authors.join(", ")}
                    </Text>
                  </Column>
                  <div 
                    style={{ 
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: getStatusColor(publication.status),
                      flexShrink: 0
                    }}
                    title={publication.status}
                  />
                </Row>

                <Column gap="xs">
                  <Text variant="body-default-xs" onBackground="neutral-weak">
                    <strong>Conference:</strong> {publication.conference}
                  </Text>
                  <Text variant="body-default-xs" onBackground="neutral-weak">
                    <strong>Location:</strong> {publication.location}
                  </Text>
                  <Text variant="body-default-xs" onBackground="neutral-weak">
                    <strong>Year:</strong> {publication.year}
                  </Text>
                  <Text variant="body-default-xs" onBackground="neutral-weak">
                    <strong>Status:</strong> <span style={{ color: "#77CA75" }}>{publication.status}</span>
                  </Text>
                </Column>

                <a 
                  href="/research/major/fpga-acceleration-comparison" 
                  style={{ 
                    color: "#77CA75", 
                    textDecoration: "none",
                    fontSize: "0.875rem",
                    fontWeight: "500"
                  }}
                >
                  Learn more about this project →
                </a>
              </Column>

            </Column>
          </Card>
        ))}
      </div>

    </Column>
  );
}