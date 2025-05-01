'use client';
import React from 'react';

interface AsciiArtProps {
  art: string;
  fontFamily?: 'monospace' | 'courier' | string;
  color?: string;
  fontSize?: string;
  className?: string;
  preserveWhitespace?: boolean;
  center?: boolean; // New prop to control centering
}

const AsciiArt: React.FC<AsciiArtProps> = ({
  art,
  fontFamily = 'monospace',
  color = '#ffffff',
  fontSize = '0.9rem',
  className = '',
  preserveWhitespace = true,
  center = true // Centering enabled by default
}) => {
  const artStyle = {
    fontFamily,
    color,
    fontSize,
    whiteSpace: preserveWhitespace ? 'pre' : 'normal',
    lineHeight: '1.2',
    letterSpacing: '0.5px',
    display: 'inline-block' // Needed for proper centering
  };

  const containerStyle = center ? {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    height: '100%'
  } : {};

  return (
    <div
      className={`z-0 font-bold ascii-art-container ${className}`}
      style={containerStyle}
    >
      <div
        className="ascii-art-content"
        style={artStyle}
      >
        {art}
      </div>
    </div>
  );
};

export default AsciiArt;
