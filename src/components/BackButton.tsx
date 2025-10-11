"use client";

import { Row, Text, Icon } from "@once-ui-system/core";

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Row 
      marginBottom="l" 
      align="center" 
      justify="center"
      style={{
        position: "fixed",
        top: "100px",
        left: "24px",
        zIndex: 1000,
        cursor: "pointer",
        padding: "8px",
        borderRadius: "8px",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        width: "40px",
        height: "40px",
        transition: "all 0.2s ease"
      }}
      className="back-button"
      as="a"
      {...({ href } as any)}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        e.currentTarget.style.transform = "scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <Icon 
        name="arrowRight" 
        style={{ 
          transform: "rotate(180deg)",
          cursor: "pointer",
          color: "white"
        }} 
      />
    </Row>
  );
};
