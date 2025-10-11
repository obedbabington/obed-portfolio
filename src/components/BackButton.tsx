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
        position: "absolute",
        top: "24px",
        left: "24px",
        zIndex: 10,
        cursor: "pointer",
        padding: "8px",
        borderRadius: "8px",
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(8px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        width: "40px",
        height: "40px"
      }}
      className="back-button"
      as="a"
      {...({ href } as any)}
    >
      <Icon 
        name="arrowRight" 
        style={{ 
          transform: "rotate(180deg)",
          cursor: "pointer"
        }} 
      />
    </Row>
  );
};
