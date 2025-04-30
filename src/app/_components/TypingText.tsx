'use client';

import { useState, useEffect } from 'react';

export default function TypingText({ text = "Welcome to the terminal. This text is being typed character by character with a pulsating cursor at the end.", speed = 50 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [index, setIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    if (index < text.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText(prev => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed); // Typing speed controlled by prop

      return () => clearTimeout(typingTimeout);
    }
  }, [index, text, speed]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500); // Blinking speed in milliseconds

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full max-w-4xl bg-black text-green-400 p-6 rounded-md font-mono font-bold text-lg">
        <div className="flex">
          <div>$ {displayedText}</div>
          <span className={`text-green-400 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>▋</span>
        </div>
      </div>
    </div>
  );
}
