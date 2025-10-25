"use client";

import { Row, Icon } from "@once-ui-system/core";

interface BackButtonProps {
  href: string;
  label: string;
}

export const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Row 
      marginBottom="l" 
      align="center" 
      justify="flex-start"
      paddingX="l"
      style={{
        cursor: "pointer",
        transition: "all 0.2s ease",
        width: "fit-content"
      }}
      className="back-button"
      as="a"
      {...({ href } as any)}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateX(-4px)";
        e.currentTarget.style.opacity = "0.8";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateX(0)";
        e.currentTarget.style.opacity = "1";
      }}
    >
      <Icon 
        name="arrowRight" 
        size="l"
        style={{ 
          transform: "rotate(180deg)",
          cursor: "pointer",
          color: "currentColor"
        }} 
      />
    </Row>
  );
};
