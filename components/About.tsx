import React from 'react';
import { BRAND_NAME } from '../constants';

interface AboutProps {
  onBack: () => void;
}

export default function About({ onBack }: AboutProps) {
  return (
    <div className="min-h-screen bg-[#F5F2EB]">
      {/* Hero Section - Matching the home page hero */}
      <section className="relative bg-gradient-to-br from-[#2C2A26] via-[#3D3A36] to-[#44403C] text-[#F5F2EB] min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect fill='%232C2A26' width='1920' height='1080'/%3E%3C/svg%3E"
        >
<source src="https://raw.githubusercontent.com/JefryMMN/Startup-Case-Study/main/public/assets/video2.mp4" type="video/mp4" />        </video>

        {/* Fallback if video doesn't load */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 py-20 text-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light mb-8 tracking-tight leading-none">
            About Us
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto leading-relaxed">
            The largest repository of startup postmortems.<br />
            Learning from failure to build the unicorns of tomorrow.
          </p>
          
          {/* Back Button */}
          <button
            onClick={onBack}
            className="mt-12 px-8 py-4 bg-[#F5F2EB] text-[#2C2A26] font-medium uppercase tracking-widest text-sm hover:bg-white transition-all duration-300 rounded-sm"
          >
            Back to Home
          </button>
        </div>
      </section>

      {/* Content Sections */}
      <div className="max-w-[1400px] mx-auto px-8 py-20">
        
        {/* Mission Statement */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-serif font-light mb-8 text-[#2C2A26]">
                Our Mission
              </h2>
              <div className="w-20 h-1 bg-[#2C2A26] mb-8"></div>
            </div>
            <div className="space-y-6 text-lg text-[#44403C] leading-relaxed">
              <p>
                {BRAND_NAME} exists because failure is not the opposite of success—it's the most valuable teacher on the path to innovation.
              </p>
              <p>
                We document, analyze, and share the stories of startups that didn't make it. Not to celebrate their downfall, but to honor their courage and extract the lessons that can guide the next generation of entrepreneurs.
              </p>
              <p>
                Every shutdown, every pivot gone wrong, every missed opportunity contains insights worth more than any success story. We're here to make sure those insights don't disappear.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do - Card Grid */}
        <section className="mb-32">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-16 text-center text-[#2C2A26]">
            What We Do
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative bg-[#2C2A26] p-12 hover:bg-[#3D3A36] transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5F2EB] opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="w-16 h-16 border-2 border-[#F5F2EB] flex items-center justify-center mb-8">
                  <svg className="w-8 h-8 text-[#F5F2EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-light mb-5 text-[#F5F2EB]">
                  Comprehensive Case Studies
                </h3>
                <p className="text-[#D6D1C7] leading-relaxed text-base">
                  In-depth analyses of startup failures across industries, examining root causes, key decisions, and critical turning points.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-[#2C2A26] p-12 hover:bg-[#3D3A36] transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5F2EB] opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="w-16 h-16 border-2 border-[#F5F2EB] flex items-center justify-center mb-8">
                  <svg className="w-8 h-8 text-[#F5F2EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-light mb-5 text-[#F5F2EB]">
                  Pattern Recognition
                </h3>
                <p className="text-[#D6D1C7] leading-relaxed text-base">
                  We identify recurring patterns and common pitfalls that lead to failure, helping you spot red flags before they become fatal.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-[#2C2A26] p-12 hover:bg-[#3D3A36] transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5F2EB] opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative">
                <div className="w-16 h-16 border-2 border-[#F5F2EB] flex items-center justify-center mb-8">
                  <svg className="w-8 h-8 text-[#F5F2EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif font-light mb-5 text-[#F5F2EB]">
                  Community Learning
                </h3>
                <p className="text-[#D6D1C7] leading-relaxed text-base">
                  A transparent platform where entrepreneurs share failure stories openly, fostering a culture of learning and resilience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters - Full Width Statement */}
        <section className="mb-32">
          <div className="bg-[#44403C] text-[#F5F2EB] p-16 md:p-20">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-10 text-center">
              Why This Matters
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg leading-relaxed">
              <p className="text-center text-xl opacity-90">
                90% of startups fail. Yet most of this knowledge is lost or hidden due to fear of stigma.
              </p>
              <p>
                This creates a cycle where new entrepreneurs repeat the same mistakes that have claimed countless ventures before them. Funding runs out due to poor burn rate management. Products launch without proper market validation. Teams fall apart over preventable conflicts.
              </p>
              <p>
                We're breaking this cycle by creating a transparent archive where failure is not shameful—it's educational. Every case study represents an opportunity to learn, adapt, and build smarter.
              </p>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-6xl md:text-7xl font-sans font-semibold text-[#2C2A26] mb-4 tracking-tight">500+</div>
              <p className="text-sm font-medium text-[#44403C] uppercase tracking-[0.2em] mt-2">Case Studies</p>
            </div>
            <div>
              <div className="text-6xl md:text-7xl font-sans font-semibold text-[#2C2A26] mb-4 tracking-tight">$50B+</div>
              <p className="text-sm font-medium text-[#44403C] uppercase tracking-[0.2em] mt-2">Capital Lost</p>
            </div>
            <div>
              <div className="text-6xl md:text-7xl font-sans font-semibold text-[#2C2A26] mb-4 tracking-tight">20+</div>
              <p className="text-sm font-medium text-[#44403C] uppercase tracking-[0.2em] mt-2">Industries Covered</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-20">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-[#2C2A26]">
            Ready to Learn?
          </h2>
          <p className="text-xl text-[#44403C] mb-10 max-w-2xl mx-auto leading-relaxed">
            Explore our growing archive of case studies and discover the insights that can help you avoid the pitfalls that have claimed others.
          </p>
          <button
            onClick={onBack}
            className="px-12 py-5 bg-[#2C2A26] text-[#F5F2EB] font-medium uppercase tracking-widest text-sm hover:bg-[#44403C] transition-all duration-300 rounded-sm"
          >
            Explore Case Studies
          </button>
        </section>
      </div>
    </div>
  );
}