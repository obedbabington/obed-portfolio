"use client";

// Removed Once UI imports - using raw HTML instead
import { BackButton } from "@/components";
import { useState, useEffect } from "react";
import styles from "./publications.module.scss";

// Dummy publication data
const publications = [
  {
    id: 1,
    title: "Neural Network Acceleration on FPGA: A Comparative Study of On-Chip vs Off-Chip Memory Architectures",
    authors: ["Obed Allotey Babington", "Dr. Sarah Chen", "Prof. Michael Rodriguez"],
    journal: "IEEE Transactions on Computer-Aided Design of Integrated Circuits and Systems",
    year: 2024,
    status: "Published",
    category: "Computer Engineering",
    abstract: "This paper presents a comprehensive analysis of neural network acceleration techniques using Field-Programmable Gate Arrays (FPGAs). We compare on-chip and off-chip memory architectures, demonstrating significant performance improvements in inference speed and power efficiency for real-time applications.",
    keywords: ["FPGA", "Neural Networks", "Memory Architecture", "Acceleration"],
    doi: "10.1109/TCAD.2024.1234567",
    citations: 23,
    impact: "High"
  },
  {
    id: 2,
    title: "Mathematical Modeling of Depression Dynamics: A Systems Approach to Mental Health Analytics",
    authors: ["Obed Allotey Babington", "Dr. Emily Watson", "Dr. James Liu"],
    journal: "Journal of Mathematical Psychology",
    year: 2024,
    status: "Under Review",
    category: "Applied Mathematics",
    abstract: "We develop a novel mathematical framework for modeling depression dynamics using differential equations and systems theory. Our model incorporates biological, psychological, and social factors to predict treatment outcomes and inform personalized intervention strategies.",
    keywords: ["Mathematical Modeling", "Depression", "Systems Theory", "Mental Health"],
    doi: "10.1016/j.jmp.2024.102456",
    citations: 8,
    impact: "Medium"
  },
  {
    id: 3,
    title: "Solar Panel Soiling Detection Using Computer Vision and Machine Learning",
    authors: ["Obed Allotey Babington", "Dr. Maria Santos", "Prof. David Kim"],
    journal: "Renewable Energy",
    year: 2023,
    status: "Published",
    category: "Renewable Energy",
    abstract: "This research presents an automated system for detecting and quantifying solar panel soiling using computer vision techniques. Our approach achieves 94% accuracy in soiling detection and provides real-time monitoring capabilities for solar farm maintenance.",
    keywords: ["Solar Energy", "Computer Vision", "Machine Learning", "Maintenance"],
    doi: "10.1016/j.renene.2023.118765",
    citations: 45,
    impact: "High"
  },
  {
    id: 4,
    title: "Wearable Technology for Continuous Health Monitoring: A Multi-Sensor Fusion Approach",
    authors: ["Obed Allotey Babington", "Dr. Lisa Park", "Dr. Robert Taylor"],
    journal: "IEEE Sensors Journal",
    year: 2023,
    status: "Published",
    category: "Biomedical Engineering",
    abstract: "We present a novel wearable device that combines multiple sensors for comprehensive health monitoring. The system uses sensor fusion algorithms to provide accurate real-time health metrics including heart rate variability, sleep quality, and activity levels.",
    keywords: ["Wearable Technology", "Health Monitoring", "Sensor Fusion", "Biomedical"],
    doi: "10.1109/JSEN.2023.3312345",
    citations: 67,
    impact: "High"
  },
  {
    id: 5,
    title: "Predator-Prey Dynamics in Urban Environments: A Mathematical Model for Urban Wildlife Management",
    authors: ["Obed Allotey Babington", "Dr. Anna Johnson", "Prof. Carlos Mendez"],
    journal: "Ecological Modelling",
    year: 2023,
    status: "Published",
    category: "Ecology",
    abstract: "This study develops a mathematical model to understand predator-prey interactions in urban environments. Our model incorporates human activity patterns and urban infrastructure to predict wildlife population dynamics and inform conservation strategies.",
    keywords: ["Ecology", "Urban Wildlife", "Mathematical Modeling", "Conservation"],
    doi: "10.1016/j.ecolmodel.2023.110123",
    citations: 34,
    impact: "Medium"
  },
  {
    id: 6,
    title: "Hydrogel-Based Smart Irrigation Systems for Precision Agriculture",
    authors: ["Obed Allotey Babington", "Dr. Ahmed Hassan", "Dr. Jennifer Lee"],
    journal: "Agricultural Water Management",
    year: 2022,
    status: "Published",
    category: "Agricultural Engineering",
    abstract: "We present a novel hydrogel-based irrigation system that responds to soil moisture levels and plant needs. The system reduces water usage by 40% while maintaining crop yield, making it particularly suitable for water-scarce regions.",
    keywords: ["Agriculture", "Hydrogel", "Irrigation", "Water Conservation"],
    doi: "10.1016/j.agwat.2022.107890",
    citations: 89,
    impact: "High"
  }
];

const categories = ["All", "Computer Engineering", "Applied Mathematics", "Renewable Energy", "Biomedical Engineering", "Ecology", "Agricultural Engineering"];

export default function Publications() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPublication, setSelectedPublication] = useState<typeof publications[0] | null>(null);
  const [filteredPublications, setFilteredPublications] = useState(publications);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredPublications(publications);
    } else {
      setFilteredPublications(publications.filter(pub => pub.category === selectedCategory));
    }
  }, [selectedCategory]);

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High": return "brand";
      case "Medium": return "warning";
      case "Low": return "neutral";
      default: return "neutral";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published": return "success";
      case "Under Review": return "warning";
      case "Submitted": return "info";
      default: return "neutral";
    }
  };

  return (
    <div className="fixed-header-spacing neural-particles" style={{ 
      maxWidth: "1200px", 
      margin: "0 auto", 
      padding: "2rem", 
      animation: "fadeIn 0.6s ease-out", 
      position: "relative" 
    }}>
      {/* Back Button */}
      <BackButton href="/research" label="Back to Research" />
      
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ 
          fontSize: "2.5rem", 
          fontWeight: "700", 
          marginBottom: "1rem",
          color: "#10b981"
        }}>
          Publications
        </h1>
        <p style={{ 
          color: "#6b7280", 
          fontSize: "1.1rem",
          maxWidth: "600px",
          margin: "0 auto"
        }}>
          Research contributions across multiple domains of engineering and applied sciences
        </p>
      </div>

      {/* Category Filter */}
      <div style={{ 
        display: "flex", 
        gap: "0.5rem", 
        flexWrap: "wrap", 
        justifyContent: "center",
        marginBottom: "2rem"
      }}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              padding: "0.5rem 1rem",
              borderRadius: "0.5rem",
              border: "1px solid #10b981",
              background: selectedCategory === category ? "#10b981" : "transparent",
              color: selectedCategory === category ? "white" : "#10b981",
              cursor: "pointer",
              transition: "all 0.3s ease",
              transform: selectedCategory === category ? "scale(1.05)" : "scale(1)",
              fontSize: "0.9rem"
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Publications Grid */}
      <div className={styles.publicationsGrid}>
        {filteredPublications.map((publication, index) => (
          <div
            key={publication.id}
            className={styles.publicationCard}
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              cursor: "pointer",
              background: "white",
              borderRadius: "0.75rem",
              padding: "1.5rem",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              border: "1px solid #e5e7eb",
              transition: "all 0.3s ease"
            }}
            onClick={() => setSelectedPublication(publication)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow = "0 20px 40px rgba(16,185,129,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%" }}>
              {/* Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <h3 style={{ 
                    fontSize: "1.25rem", 
                    fontWeight: "600", 
                    margin: 0,
                    color: "#1f2937",
                    lineHeight: "1.4"
                  }}>
                    {publication.title}
                  </h3>
                  <p style={{ 
                    color: "#6b7280", 
                    fontSize: "0.9rem",
                    margin: 0
                  }}>
                    {publication.authors.join(", ")}
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.5rem" }}>
                  <span style={{
                    padding: "0.25rem 0.75rem",
                    borderRadius: "1rem",
                    fontSize: "0.75rem",
                    fontWeight: "500",
                    background: getStatusColor(publication.status) === "success" ? "#10b981" : 
                               getStatusColor(publication.status) === "warning" ? "#f59e0b" : "#6b7280",
                    color: "white"
                  }}>
                    {publication.status}
                  </span>
                  <span style={{
                    padding: "0.25rem 0.75rem",
                    borderRadius: "1rem",
                    fontSize: "0.75rem",
                    fontWeight: "500",
                    background: getImpactColor(publication.impact) === "brand" ? "#10b981" : 
                               getImpactColor(publication.impact) === "warning" ? "#f59e0b" : "#6b7280",
                    color: "white"
                  }}>
                    {publication.impact} Impact
                  </span>
                </div>
              </div>

              {/* Journal and Year */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ 
                  color: "#6b7280", 
                  fontSize: "0.8rem",
                  margin: 0
                }}>
                  {publication.journal}
                </p>
                <p style={{ 
                  fontSize: "0.8rem",
                  fontWeight: "600",
                  margin: 0,
                  color: "#1f2937"
                }}>
                  {publication.year}
                </p>
              </div>

              {/* Abstract Preview */}
              <p style={{ 
                fontSize: "0.9rem",
                color: "#4b5563",
                lineHeight: "1.5",
                margin: 0
              }}>
                {publication.abstract.substring(0, 150)}...
              </p>

              {/* Keywords */}
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {publication.keywords.slice(0, 3).map((keyword) => (
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
                {publication.keywords.length > 3 && (
                  <span style={{
                    padding: "0.25rem 0.5rem",
                    background: "#e5e7eb",
                    color: "#6b7280",
                    borderRadius: "0.375rem",
                    fontSize: "0.75rem"
                  }}>
                    +{publication.keywords.length - 3} more
                  </span>
                )}
              </div>

              {/* Footer */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p style={{ 
                  color: "#6b7280", 
                  fontSize: "0.8rem",
                  margin: 0
                }}>
                  {publication.citations} citations
                </p>
                <div style={{ display: "flex", gap: "0.25rem", alignItems: "center" }}>
                  <span style={{ fontSize: "0.8rem", color: "#10b981" }}>↗</span>
                  <span style={{ fontSize: "0.8rem", color: "#10b981" }}>View Details</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Publication Detail Modal */}
      {selectedPublication && (
        <div 
          className={styles.modalOverlay} 
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
            className={styles.modalContent} 
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
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", minWidth: "200px" }}>
                  <h4 style={{ fontSize: "0.9rem", fontWeight: "600", margin: 0, color: "#374151" }}>DOI</h4>
                  <p style={{ fontSize: "0.9rem", margin: 0, color: "#1f2937", fontFamily: "monospace" }}>{selectedPublication.doi}</p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", minWidth: "200px" }}>
                  <h4 style={{ fontSize: "0.9rem", fontWeight: "600", margin: 0, color: "#374151" }}>Citations</h4>
                  <p style={{ fontSize: "0.9rem", margin: 0, color: "#1f2937" }}>{selectedPublication.citations}</p>
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


