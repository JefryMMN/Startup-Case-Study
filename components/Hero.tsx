
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';

interface HeroProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavClick }) => {
  return (
    <section className="relative w-full h-[70vh] min-h-[600px] overflow-hidden bg-[#2C2A26]">
      
      {/* Background Image - Corporate/Building abstract */}
      <div className="absolute inset-0 w-full h-full">
        <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Glass building architecture" 
            className="w-full h-full object-cover grayscale contrast-[1.1] brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-[#2C2A26]/60 mix-blend-multiply"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <div className="animate-fade-in-up w-full max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-normal text-[#F5F2EB] tracking-tight mb-8 drop-shadow-lg leading-none">
            When Giants <br/> <span className="italic text-[#A8A29E] font-light">Fall</span>
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-[#F5F2EB]/80 font-light leading-relaxed mb-12">
            The largest repository of startup postmortems. Analyze the mistakes of the past to build the unicorns of the future.
          </p>
          
          <a 
            href="#case-studies" 
            onClick={(e) => onNavClick(e, 'case-studies')}
            className="group relative px-10 py-4 bg-[#F5F2EB] text-[#2C2A26] rounded-full text-sm font-semibold uppercase tracking-widest hover:bg-white transition-all duration-500 overflow-hidden shadow-lg hover:shadow-xl inline-block"
          >
            <span className="relative z-10 group-hover:text-[#2C2A26]">Explore Case Studies</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
