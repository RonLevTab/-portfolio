import React from 'react';
import FloatingDots from './FloatingDots';

// A giant faint wordmark with drifting sparkle particles — the page's finale.
export default function SparklesFinale({
  text = 'Ron Lev Tabuchov',
  particleCount = 60,
  particleColor = '#a8895f',
  className = '',
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden py-16 md:py-24 ${className}`}
    >
      <FloatingDots count={particleCount} color={particleColor} />
      <h2 className="relative z-10 px-4 text-center font-serif font-normal tracking-tight text-th-heading/[0.07] text-5xl sm:text-7xl md:text-8xl lg:text-9xl select-none whitespace-nowrap">
        {text}
      </h2>
    </div>
  );
}
