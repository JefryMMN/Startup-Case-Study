import React from 'react';
import { BRAND_NAME } from '../constants';

interface AuthorsProps {
  onBack: () => void;
}

interface Author {
  name: string;
  title: string;
  bio: string;
  imageSrc: string;
  social: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

const AUTHORS_DATA: Author[] = [
  {
    name: 'Jefry Mammen',
    title: 'Founder & Lead Researcher',
    bio: 'The work behind this platform focuses on decoding the true reasons startups fail. Through in-depth research, data analysis, and founder-based insights, complex failure patterns are translated into useful guidance. A background in product development and early-stage strategy adds practical clarity to understanding what causes companies to break down.',
    imageSrc: '/assets/jefry-mammen.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/jefry-mammen-305a74291?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      twitter: '#',
    },
  },
  {
    name: 'Aaron K.',
    title: 'Chief Data Analyst',
    bio: "With a specialization in statistical modeling and data visualization, Aaron's role is to identify the recurring patterns and correlations across hundreds of failed ventures. He transforms anecdotal evidence into concrete, data-driven insights, ensuring that the platform's lessons are scientifically grounded and universally applicable.",
    imageSrc: '/assets/aaron-k.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/aaron-ros?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      website: '#',
    },
  },
];

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#44403C] hover:text-[#2C2A26] transition-colors duration-300"
    aria-label="Author Social Link"
  >
    {children}
  </a>
);

export default function Authors({ onBack }: AuthorsProps) {
  return (
    <div className="min-h-screen bg-[#F5F2EB] w-full overflow-x-hidden">
      {/* Hero Section - Mobile Optimized */}
      <section className="relative text-[#F5F2EB] min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image - Mobile responsive */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{ 
            backgroundImage: `url('/assets/authors1.jpg')`,
            backgroundPosition: 'center center',
            filter: 'brightness(0.5) contrast(1.15)'
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30"></div>

        {/* Content - Mobile optimized */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-8 py-12 sm:py-20 text-center">
          <h1 
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif font-light mb-4 sm:mb-8 tracking-tight leading-none"
            style={{ 
              textShadow: '0 4px 20px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.8)' 
            }}
          >
            Our Authors
          </h1>
          <p 
            className="text-base sm:text-xl md:text-2xl font-light opacity-95 max-w-4xl mx-auto leading-relaxed px-4"
            style={{ 
              textShadow: '0 2px 15px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.8)' 
            }}
          >
            The dedicated team transforming failure into fuel. Meet the researchers who distill the complex lessons from every startup postmortem.
          </p>
          
          <button
            onClick={onBack}
            className="mt-8 sm:mt-12 px-6 sm:px-8 py-3 sm:py-4 bg-[#F5F2EB] text-[#2C2A26] font-medium uppercase tracking-widest text-xs sm:text-sm hover:bg-white transition-all duration-300 rounded-sm shadow-2xl"
          >
            Back to Home
          </button>
        </div>
      </section>

      {/* Authors Grid Section */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-12 sm:py-20">
        
        {/* Introductory Statement */}
        <section className="mb-12 sm:mb-20 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-6 sm:mb-8 text-[#2C2A26]">
            The Core Team
          </h2>
          <p className="text-lg sm:text-xl text-[#44403C] leading-relaxed px-4">
            At {BRAND_NAME}, our content is built on rigorous analysis. We believe that **unbiased, deep-dive research** is the only way to extract truly valuable lessons from the ashes of failure.
          </p>
          <div className="w-20 h-1 bg-[#2C2A26] mx-auto mt-6 sm:mt-8"></div>
        </section>

        {/* Author Profiles */}
        <div className="space-y-16 sm:space-y-24">
          {AUTHORS_DATA.map((author, index) => (
            <section 
              key={author.name} 
              className={`grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 items-start ${index % 2 !== 0 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              {/* Image Column */}
              

              {/* Text/Bio Column */}
              <div className={`lg:col-span-2 ${index % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light mb-3 text-[#2C2A26]">
                  {author.name}
                </h3>
                <p className="text-sm sm:text-base md:text-lg font-medium uppercase tracking-widest text-[#44403C] mb-6 border-b-2 border-[#D6D1C7] pb-2 inline-block">
                  {author.title}
                </p>
                
                <p className="text-base sm:text-lg md:text-xl text-[#44403C] leading-relaxed mb-8">
                  {author.bio}
                </p>

                {/* Social Links */}
                <div className="flex space-x-6 text-2xl">
                  {author.social.linkedin && (
                    <SocialIcon href={author.social.linkedin}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.264-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </SocialIcon>
                  )}
                  {author.social.twitter && (
                    <SocialIcon href={author.social.twitter}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.795-1.574 2.162-2.722-.951.566-2.005.977-3.128 1.195-.898-.96-2.173-1.564-3.593-1.564-3.592 0-6.491 3.256-6.491 7.274 0 .568.077 1.121.221 1.65-.54-.02-10.165-5.385-11.41-12.871-.16.326-.252.697-.252 1.087 0 2.529 1.282 4.757 3.23 6.075-.487-.024-.94-.148-1.336-.363v.093c0 3.518 2.503 6.45 5.827 7.126-.607.165-1.248.24-1.913.24-.473 0-.932-.055-1.378-.13 1.082 3.517 4.298 6.071 8.084 6.143-3.896 3.559-8.706 5.679-13.987 5.679-1.144 0-2.26-.067-3.35-.194 5.378 3.58 11.722 5.678 18.577 5.678 2.378 0 2.766-.11 4.544-.64 0-.256 0-.505-.008-.752-.397-.565-.898-1.071-1.464-1.527z"/></svg>
                    </SocialIcon>
                  )}
                  {author.social.website && (
                    <SocialIcon href={author.social.website}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </SocialIcon>
                  )}
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}