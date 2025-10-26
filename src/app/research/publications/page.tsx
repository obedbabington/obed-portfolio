"use client";

import { Column, Heading, Text, Card, Row } from "@once-ui-system/core";
import { BackButton } from "@/components";

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
        gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
        gap: "1.5rem",
        padding: "0 1.5rem",
        marginBottom: "2rem"
      }}>
        {publications.map((publication) => (
          <Card
            key={publication.id}
            padding="l"
            radius="m"
            shadow="m"
            style={{ 
              display: "flex",
              flexDirection: "column",
              transition: "all 0.3s ease",
              border: "1px solid rgba(16, 185, 129, 0.1)",
              background: "rgba(255, 255, 255, 0.02)",
              backdropFilter: "blur(10px)"
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
                  <strong>Status:</strong> {publication.status}
                </Text>
              </Column>

              <Text variant="body-default-s" onBackground="neutral-weak" style={{ lineHeight: "1.5" }}>
                {publication.abstract}
              </Text>

              <Row gap="xs" wrap>
                {publication.keywords.map((keyword, index) => (
                  <Text 
                    key={index}
                    variant="body-default-xs" 
                    style={{ 
                      background: "rgba(16, 185, 129, 0.1)",
                      color: "var(--brand-medium)",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      fontSize: "0.75rem"
                    }}
                  >
                    {keyword}
                  </Text>
                ))}
              </Row>
            </Column>
          </Card>
        ))}
      </div>

      {/* Additional Information */}
      <Column paddingX="l" align="center" marginTop="xl">
        <Text variant="body-default-s" align="center" onBackground="neutral-weak" style={{ fontStyle: "italic" }}>
          More publications and research contributions coming soon.
        </Text>
      </Column>
    </Column>
  );
}