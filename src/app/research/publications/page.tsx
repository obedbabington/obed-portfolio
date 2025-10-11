"use client";

// Removed Once UI imports - using raw HTML instead
import { BackButton } from "@/components";
import { useState, useEffect } from "react";
import styles from "./publications.module.scss";

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
    <div className="fixed-header-spacing" style={{ 
      maxWidth: "1200px", 
      margin: "0 auto", 
      padding: "2rem",
      position: "relative"
    }}>
      {/* Back Button */}
      <BackButton href="/research" label="Back to Research" />
      
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ 
          fontSize: "2.5rem", 
          fontWeight: "700", 
          marginBottom: "1rem",
          color: "#1f2937"
        }}>
          Publications
        </h1>
        <p style={{ 
          color: "#6b7280", 
          fontSize: "1.1rem",
          maxWidth: "600px",
          margin: "0 auto"
        }}>
          Research contributions and academic publications
        </p>
      </div>

      {/* Publications Grid - 2 tiles side by side */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))", 
        gap: "2rem",
        marginBottom: "3rem"
      }}>
        {publications.map((publication) => (
          <div
            key={publication.id}
            style={{
              background: "white",
              borderRadius: "0.75rem",
              padding: "2rem",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              border: "1px solid #e5e7eb",
              cursor: "pointer"
            }}
            onClick={() => setSelectedPublication(publication)}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", width: "100%" }}>
              {/* Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <h3 style={{ 
                    fontSize: "1.5rem", 
                    fontWeight: "600", 
                    margin: 0,
                    color: "#1f2937",
                    lineHeight: "1.3"
                  }}>
                    {publication.title}
                  </h3>
                  <p style={{ 
                    color: "#6b7280", 
                    fontSize: "1rem",
                    margin: 0
                  }}>
                    {publication.authors.join(", ")}
                  </p>
                </div>
                <span style={{
                  padding: "0.5rem 1rem",
                  borderRadius: "1rem",
                  fontSize: "0.8rem",
                  fontWeight: "500",
                  background: getStatusColor(publication.status),
                  color: "white"
                }}>
                  {publication.status}
                </span>
              </div>

              {/* Journal and Year */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ 
                  color: "#6b7280", 
                  fontSize: "0.9rem",
                  margin: 0
                }}>
                  {publication.journal}
                </p>
                <p style={{ 
                  fontSize: "0.9rem",
                  fontWeight: "600",
                  margin: 0,
                  color: "#1f2937"
                }}>
                  {publication.year}
                </p>
              </div>

              {/* Abstract */}
              <p style={{ 
                fontSize: "1rem",
                color: "#4b5563",
                lineHeight: "1.6",
                margin: 0
              }}>
                {publication.abstract}
              </p>

              {/* Keywords */}
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {publication.keywords.map((keyword) => (
                  <span key={keyword} style={{
                    padding: "0.5rem 1rem",
                    background: "#f3f4f6",
                    color: "#374151",
                    borderRadius: "0.5rem",
                    fontSize: "0.8rem",
                    border: "1px solid #d1d5db"
                  }}>
                    {keyword}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", color: "#10b981" }}>
                  <span style={{ fontSize: "0.9rem" }}>View Details</span>
                  <span style={{ fontSize: "0.9rem" }}>→</span>
                </div>
              </div>
            </div>
          </div>
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
    </div>
  );
}


