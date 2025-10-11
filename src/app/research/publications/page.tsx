"use client";

import { Card, Column, Heading, Text, Row } from "@once-ui-system/core";
import { BackButton } from "@/components";
import { useState } from "react";

// Simple dummy publication data - 2 tiles only
const publications = [
  {
    id: 1,
    title: "Sample Publication Title",
    authors: ["Obed Allotey Babington", "Co-Author Name"],
    journal: "Journal Name",
    year: 2024,
    status: "Published",
    abstract: "This is a sample abstract that describes the research work. It provides a brief overview of the methodology, findings, and contributions of the study.",
    keywords: ["Keyword1", "Keyword2", "Keyword3"]
  },
  {
    id: 2,
    title: "Another Sample Publication",
    authors: ["Obed Allotey Babington", "Another Co-Author"],
    journal: "Another Journal",
    year: 2023,
    status: "Under Review",
    abstract: "This is another sample abstract that demonstrates the structure. It shows how the publication tiles will look with different content.",
    keywords: ["Research", "Technology", "Innovation"]
  }
];

export default function Publications() {
  const [selectedPublication, setSelectedPublication] = useState<typeof publications[0] | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published": return "#10b981";
      case "Under Review": return "#f59e0b";
      case "Submitted": return "#3b82f6";
      default: return "#6b7280";
    }
  };

  return (
    <Column maxWidth="m" paddingTop="24" className="fixed-header-spacing" style={{ position: "relative" }}>
      {/* Back Button */}
      <BackButton href="/research" label="Back to Research" />
      
      {/* Publications Heading */}
      <Column marginBottom="l" paddingX="l" align="center" style={{ marginTop: "20px" }}>
        <Heading variant="heading-strong-xl" align="center">Publications</Heading>
      </Column>

      {/* Publications Description */}
      <Column marginBottom="l" paddingX="l" align="center">
        <Text variant="body-default-l" align="center">
          Research contributions and academic publications across multiple domains of engineering and applied sciences.
        </Text>
      </Column>

      {/* Publications Grid - 2 tiles side by side */}
      <div className="grid-container mobile-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
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
              flexDirection: "column",
              cursor: "pointer",
              transition: "all 0.3s ease",
              textDecoration: "none",
              overflow: "hidden"
            }}
            onClick={() => setSelectedPublication(publication)}
          >
            <Column gap="s" padding="l">
              <Row horizontal="between" align="start" gap="m">
                <Column flex={1} gap="s">
                  <Heading variant="heading-strong-m">{publication.title}</Heading>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {publication.authors.join(", ")}
                  </Text>
                </Column>
                <Text 
                  variant="body-default-xs" 
                  style={{ 
                    padding: "0.25rem 0.75rem",
                    borderRadius: "1rem",
                    background: getStatusColor(publication.status),
                    color: "white",
                    fontWeight: "500"
                  }}
                >
                  {publication.status}
                </Text>
              </Row>

              <Row horizontal="between" align="center">
                <Text variant="body-default-xs" onBackground="neutral-weak">
                  {publication.journal}
                </Text>
                <Text variant="body-strong-xs">
                  {publication.year}
                </Text>
              </Row>

              <Text variant="body-default-s" onBackground="neutral-weak" marginBottom="s">
                {publication.abstract}
              </Text>

              <Row gap="xs" wrap>
                {publication.keywords.map((keyword) => (
                  <Text 
                    key={keyword} 
                    variant="body-default-xs" 
                    style={{ 
                      padding: "0.25rem 0.5rem",
                      background: "#f3f4f6",
                      color: "#374151",
                      borderRadius: "0.375rem",
                      border: "1px solid #d1d5db"
                    }}
                  >
                    {keyword}
                  </Text>
                ))}
              </Row>

              <Row horizontal="end" align="center">
                <Text variant="body-default-xs" style={{ color: "var(--brand-medium)" }}>
                  View Details →
                </Text>
              </Row>
            </Column>
          </Card>
        ))}
      </div>

      {/* Publication Detail Modal */}
      {selectedPublication && (
        <div 
          onClick={() => setSelectedPublication(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "white",
              borderRadius: "0.75rem",
              padding: "2rem",
              maxWidth: "800px",
              maxHeight: "90vh",
              overflow: "auto",
              margin: "1rem"
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem", width: "100%" }}>
              {/* Modal Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <h2 style={{ 
                    fontSize: "2rem", 
                    fontWeight: "700", 
                    margin: 0,
                    color: "#1f2937"
                  }}>
                    {selectedPublication.title}
                  </h2>
                  <p style={{ 
                    color: "#6b7280", 
                    fontSize: "1.1rem",
                    margin: 0
                  }}>
                    {selectedPublication.authors.join(", ")}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedPublication(null)}
                  style={{
                    background: "transparent",
                    border: "none",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                    color: "#6b7280",
                    padding: "0.5rem"
                  }}
                >
                  ×
                </button>
              </div>

              {/* Publication Details */}
              <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", minWidth: "200px" }}>
                  <h4 style={{ fontSize: "0.9rem", fontWeight: "600", margin: 0, color: "#374151" }}>Journal</h4>
                  <p style={{ fontSize: "0.9rem", margin: 0, color: "#1f2937" }}>{selectedPublication.journal}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", minWidth: "200px" }}>
                  <h4 style={{ fontSize: "0.9rem", fontWeight: "600", margin: 0, color: "#374151" }}>Year</h4>
                  <p style={{ fontSize: "0.9rem", margin: 0, color: "#1f2937" }}>{selectedPublication.year}</p>
                </div>
              </div>

              {/* Abstract */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <h4 style={{ fontSize: "0.9rem", fontWeight: "600", margin: 0, color: "#374151" }}>Abstract</h4>
                <p style={{ fontSize: "0.9rem", margin: 0, color: "#1f2937", lineHeight: "1.6" }}>{selectedPublication.abstract}</p>
              </div>

              {/* Keywords */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <h4 style={{ fontSize: "0.9rem", fontWeight: "600", margin: 0, color: "#374151" }}>Keywords</h4>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {selectedPublication.keywords.map((keyword) => (
                    <span key={keyword} style={{
                      padding: "0.25rem 0.5rem",
                      background: "#f3f4f6",
                      color: "#374151",
                      borderRadius: "0.375rem",
                      fontSize: "0.75rem",
                      border: "1px solid #d1d5db"
                    }}>
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: "1rem", justifyContent: "flex-end" }}>
                <button style={{
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #d1d5db",
                  background: "white",
                  color: "#374151",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  fontWeight: "500"
                }}>
                  Download PDF
                </button>
                <button style={{
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.5rem",
                  border: "none",
                  background: "#10b981",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  fontWeight: "500"
                }}>
                  View Online
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Column>
  );
}


