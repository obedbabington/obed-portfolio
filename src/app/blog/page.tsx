import { Column, Heading, Meta, Schema, Card, Text, Row, Line } from "@once-ui-system/core";
import { Mailchimp, BackButton } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog, person, newsletter } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default function Blog() {
  return (
    <Column maxWidth="m" paddingTop="8" style={{ animation: "fadeIn 1s ease-out", position: "relative" }}>
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
        `
      }} />
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      
      {/* Back Button */}
      <BackButton href="/" label="Back to Home" />
      
      {/* Enhanced Blog Heading */}
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
            Blog
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
      
      <Column fillWidth flex={1} gap="40" align="center" style={{ minHeight: "60vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Text variant="body-default-l" align="center">
          Coming soon!
        </Text>
      </Column>
    </Column>
  );
}
