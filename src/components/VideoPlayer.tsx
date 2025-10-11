"use client";

import React from 'react';

interface VideoPlayerProps {
  src: string;
  width?: string;
  height?: string;
  controls?: boolean;
  preload?: string;
  playsInline?: boolean;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  width = "100%",
  height = "400",
  controls = true,
  preload = "metadata",
  playsInline = true,
  style,
  children,
}) => {
  const handleError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Video error:', e);
  };

  return (
    <video
      width={width}
      height={height}
      controls={controls}
      preload={preload}
      playsInline={playsInline}
      style={style}
      onError={handleError}
    >
      {children}
    </video>
  );
};
