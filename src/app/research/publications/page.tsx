"use client";

import { 
  Column, 
  Heading, 
  Text, 
  Row, 
  Button, 
  Tag, 
  Badge,
  Icon,
  Card,
  Flex
} from "@once-ui-system/core";
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
    <Column maxWidth="l" className="fixed-header-spacing neural-particles" gap="l" style={{ animation: "fadeIn 0.6s ease-out", position: "relative" }}>
      {/* Back Button */}
      <BackButton href="/research" label="Back to Research" />
      
      {/* Header */}
      <Column gap="m" align="center" horizontal="center">
        <Heading as="h1" variant="display-strong-s" align="center">
          Publications
        </Heading>
        <Text onBackground="neutral-weak" align="center" maxWidth="s">
          Research contributions across multiple domains of engineering and applied sciences
        </Text>
      </Column>

      {/* Category Filter */}
      <Row gap="s" wrap="wrap" horizontal="center">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "primary" : "secondary"}
            size="s"
            label={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              transition: "all 0.3s ease",
              transform: selectedCategory === category ? "scale(1.05)" : "scale(1)"
            }}
          />
        ))}
      </Row>

      {/* Publications Grid */}
      <div className={styles.publicationsGrid}>
        {filteredPublications.map((publication, index) => (
          <Card
            key={publication.id}
            className={styles.publicationCard}
            style={{
              animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              cursor: "pointer"
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
            <Column gap="m" fillWidth>
              {/* Header */}
              <Row justify="space-between" align="flex-start" gap="m">
                <Column flex={1} gap="s">
                  <Text variant="heading-strong-s" className={styles.publicationTitle}>
                    {publication.title}
                  </Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {publication.authors.join(", ")}
                  </Text>
                </Column>
                <Column align="flex-end" gap="s">
                  <Badge variant={getStatusColor(publication.status)} size="s">
                    {publication.status}
                  </Badge>
                  <Badge variant={getImpactColor(publication.impact)} size="s">
                    {publication.impact} Impact
                  </Badge>
                </Column>
              </Row>

              {/* Journal and Year */}
              <Row justify="space-between" align="center">
                <Text variant="body-default-xs" onBackground="neutral-weak">
                  {publication.journal}
                </Text>
                <Text variant="body-strong-xs">
                  {publication.year}
                </Text>
              </Row>

              {/* Abstract Preview */}
              <Text variant="body-default-s" className={styles.abstractPreview}>
                {publication.abstract.substring(0, 150)}...
              </Text>

              {/* Keywords */}
              <Row gap="xs" wrap="wrap">
                {publication.keywords.slice(0, 3).map((keyword) => (
                  <Tag key={keyword} variant="secondary" size="s">
                    {keyword}
                  </Tag>
                ))}
                {publication.keywords.length > 3 && (
                  <Tag variant="neutral" size="s">
                    +{publication.keywords.length - 3} more
                  </Tag>
                )}
              </Row>

              {/* Footer */}
              <Row justify="space-between" align="center">
                <Text variant="body-default-xs" onBackground="neutral-weak">
                  {publication.citations} citations
                </Text>
                <Row gap="xs" align="center">
                  <Icon name="external-link" size="s" />
                  <Text variant="body-default-xs">View Details</Text>
                </Row>
              </Row>
            </Column>
          </Card>
        ))}
      </div>

      {/* Publication Detail Modal */}
      {selectedPublication && (
        <div className={styles.modalOverlay} onClick={() => setSelectedPublication(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <Column gap="l" fillWidth>
              {/* Modal Header */}
              <Row justify="space-between" align="flex-start">
                <Column flex={1} gap="s">
                  <Heading as="h2" variant="display-strong-s">
                    {selectedPublication.title}
                  </Heading>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {selectedPublication.authors.join(", ")}
                  </Text>
                </Column>
                <Button
                  variant="secondary"
                  icon="x"
                  onClick={() => setSelectedPublication(null)}
                />
              </Row>

              {/* Publication Details */}
              <Row gap="l" wrap="wrap">
                <Column gap="s" minWidth="200">
                  <Text variant="heading-strong-xs">Journal</Text>
                  <Text variant="body-default-s">{selectedPublication.journal}</Text>
                </Column>
                <Column gap="s" minWidth="200">
                  <Text variant="heading-strong-xs">Year</Text>
                  <Text variant="body-default-s">{selectedPublication.year}</Text>
                </Column>
                <Column gap="s" minWidth="200">
                  <Text variant="heading-strong-xs">DOI</Text>
                  <Text variant="body-default-s" className={styles.doi}>
                    {selectedPublication.doi}
                  </Text>
                </Column>
                <Column gap="s" minWidth="200">
                  <Text variant="heading-strong-xs">Citations</Text>
                  <Text variant="body-default-s">{selectedPublication.citations}</Text>
                </Column>
              </Row>

              {/* Abstract */}
              <Column gap="s">
                <Text variant="heading-strong-xs">Abstract</Text>
                <Text variant="body-default-s">{selectedPublication.abstract}</Text>
              </Column>

              {/* Keywords */}
              <Column gap="s">
                <Text variant="heading-strong-xs">Keywords</Text>
                <Row gap="xs" wrap="wrap">
                  {selectedPublication.keywords.map((keyword) => (
                    <Tag key={keyword} variant="secondary" size="s">
                      {keyword}
                    </Tag>
                  ))}
                </Row>
              </Column>

              {/* Action Buttons */}
              <Row gap="m" justify="flex-end">
                <Button
                  variant="secondary"
                  label="Download PDF"
                  prefixIcon="download"
                />
                <Button
                  variant="primary"
                  label="View Online"
                  prefixIcon="external-link"
                />
              </Row>
            </Column>
          </div>
        </div>
      )}
    </Column>
  );
}


