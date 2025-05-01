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


  return (
    <div
      className={`z-0 font-bold ascii-art-container ${className} flex justify-center items-center text-center w-full h-full`}
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
