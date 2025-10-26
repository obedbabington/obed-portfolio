import { Column, Heading, Meta, Schema, Card, Text } from "@once-ui-system/core";
import Image from "next/image";
import { BackButton } from "@/components";
import { baseURL, blog, person } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: "News & Achievements",
    description: "Latest news, achievements, and milestones in my academic and professional journey",
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent("News & Achievements")}`,
    path: "/blog/news",
  });
}

export default function News() {
  const newsList = [
    {
      id: "technical-excellence-award",
      title: "Technical Excellence Award in Computer Engineering",
      date: "May 2025",
      category: "Award",
      summary: "Honored to receive the prestigious Technical Excellence Award in Computer Engineering for my capstone project on 'Hardware Accelerated Machine Learning with a Softcore Processor'.",
      image: "/images/research/capstone_award.png"
    }
  ];

  return (
    <Column maxWidth="m" paddingTop="8" style={{ animation: "fadeIn 1s ease-out", position: "relative" }}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/blog/news"
        title="News & Achievements"
        description="Latest news, achievements, and milestones in my academic and professional journey"
        image={`/api/og/generate?title=${encodeURIComponent("News & Achievements")}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Back Button */}
      <BackButton href="/blog" label="Back to Blog" />

      {/* Enhanced Page Title */}
      <Column marginBottom="l" paddingX="l" align="center" style={{ marginTop: "10px" }}>
        <div style={{
          position: 'relative',
          display: 'inline-block',
          padding: '24px 40px',
          borderRadius: '20px',
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0.05) 100%)',
          border: '2px solid rgba(16, 185, 129, 0.3)',
          boxShadow: '0 8px 32px rgba(16, 185, 129, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          animation: 'fadeInPop 1s ease-out',
          transform: 'translateZ(0)',
          willChange: 'transform, opacity'
        }}>
          <Heading 
            variant="heading-strong-xl" 
            align="center"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #ffffff 0%, #10B981 50%, #ffffff 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 8px rgba(16, 185, 129, 0.3)',
              letterSpacing: '-0.02em',
              lineHeight: '1.1'
            }}
          >
            News and Achievements
          </Heading>
          {/* Decorative elements */}
          <div style={{
            position: 'absolute',
            top: '-2px',
            left: '-2px',
            right: '-2px',
            bottom: '-2px',
            borderRadius: '22px',
            background: 'linear-gradient(45deg, rgba(16, 185, 129, 0.4), rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.4))',
            zIndex: -1,
            animation: 'pulse 3s ease-in-out infinite'
          }} />
        </div>
      </Column>

      {/* Page Header */}
      <Column marginBottom="l" paddingX="l" align="center">
        <Text variant="body-default-l" align="center" marginTop="m">
          Latest news, achievements, and milestones in my academic and professional journey.
        </Text>
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
          
          @keyframes fadeInPop {
            0% {
              opacity: 0;
              transform: scale(0.8);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
          
          @keyframes pulse {
            0%, 100% {
              opacity: 0.3;
            }
            50% {
              opacity: 0.6;
            }
          }
          
          @media (max-width: 768px) {
            .grid-container {
              grid-template-columns: 1fr !important;
              gap: 1rem !important;
            }
          }
          
          @media (max-width: 480px) {
            .grid-container {
              padding: 0 1rem !important;
            }
          }
        `
      }} />

      {/* News & Achievements - Grid Layout */}
      <div className="grid-container mobile-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1.5rem",
        padding: "0 1.5rem"
      }}>
        {newsList.map((item, index) => (
          <Card
            key={index}
            as="a"
            href={`/blog/news/${item.id}`}
            padding="0" 
            radius="m" 
            shadow="m"
            style={{ 
              cursor: "pointer",
              transition: "all 0.3s ease",
              textDecoration: "none",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column"
            }}
          >
            {/* Square Image */}
            <div style={{ 
              position: "relative",
              width: "100%",
              height: "250px",
              backgroundColor: "#f5f5f5"
            }}>
              <Image
                src={item.image}
                alt={item.title}
                fill
                style={{ 
                  objectFit: "cover",
                  objectPosition: "center"
                }}
              />
            </div>
            
            {/* Content below image */}
            <Column gap="s" padding="l">
              <Text variant="body-default-xs" onBackground="neutral-weak" style={{ textTransform: "uppercase", fontWeight: "600" }} className="category-tag">
                {item.category}
              </Text>
              <Heading variant="heading-strong-m" className="text-single-line">{item.title}</Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">
                <strong>Date:</strong> {item.date}
              </Text>
              <Text variant="body-default-s" marginTop="s">{item.summary}</Text>
              <Text variant="body-default-xs" onBackground="neutral-weak" marginTop="s" style={{ fontStyle: "italic" }}>
                Click to read more →
              </Text>
            </Column>
          </Card>
        ))}
      </div>
    </Column>
  );
}
