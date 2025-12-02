import React, { useState, useEffect } from 'react';
import { BRAND_NAME } from '../constants';

interface IntroScreenProps {
  onComplete: () => void;
}

export default function IntroScreen({ onComplete }: IntroScreenProps) {
  const [stage, setStage] = useState(0);
  const [visibleChars, setVisibleChars] = useState(0);
  const brandText = BRAND_NAME; // "Startup Archive."

  useEffect(() => {
    // Animate letters one by one
    if (visibleChars < brandText.length) {
      const charTimer = setTimeout(() => {
        setVisibleChars(prev => prev + 1);
      }, 100); // 100ms per letter
      return () => clearTimeout(charTimer);
    }
  }, [visibleChars, brandText.length]);

  useEffect(() => {
    // After brand name is fully visible, show tagline
    const timer1 = setTimeout(() => setStage(1), 2500);
    
    // Start fade out
    const timer2 = setTimeout(() => setStage(2), 6000);
    
    // Complete intro
    const timer3 = setTimeout(() => {
      onComplete();
    }, 7500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 bg-[#2C2A26] flex items-center justify-center z-50 transition-opacity duration-1000 ${
        stage === 2 ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center px-8">
        {/* Brand Name - Letter by Letter */}
<h1 
  className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-[#F5F2EB] mb-8 whitespace-nowrap"
>

          {brandText.split('').map((char, index) => (
            <span
              key={index}
              className={`inline-block transition-all duration-500 ${
                index < visibleChars ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ 
                transitionDelay: `${index * 50}ms` 
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>

        {/* Tagline */}
        <p 
          className={`text-xl sm:text-2xl md:text-3xl font-light text-[#F5F2EB]/80 transition-all duration-1000 ${
            stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Learning from the best mistakes ever made.
        </p>

        {/* Skip button */}
        <button
          onClick={onComplete}
          className="mt-12 text-[#F5F2EB]/60 hover:text-[#F5F2EB] text-sm uppercase tracking-widest transition-colors duration-300"
        >
          Skip Intro →
        </button>
      </div>
    </div>
  );
}