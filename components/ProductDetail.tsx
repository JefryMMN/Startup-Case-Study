/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

interface TimelineEvent {
  year: string;
  event: string;
}

interface StartupCaseStudy {
  id?: string;
  name?: string;
  category?: string;
  status?: string;
  country?: string;
  year?: string;
  peakValuation?: string;
  failureKeywords?: string[];
  summary?: string;
  logoUrl?: string;
  overview?: string;
  detailedAnalysis?: string;
  founders?: string[];
  timeline?: TimelineEvent[];
  keyMistakes?: string[];
  whyItFailed?: string;
  lessonsLearned?: string[];
  references?: string[];
  trending?: boolean;
}

interface ProductDetailProps {
  study: StartupCaseStudy;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ study, onBack }) => {
  const handlePrint = () => window.print();

  const formatAnalysis = (text?: string) =>
    (text || "Detailed analysis not available.")
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter((p) => p.length > 0)
      .map((p, i) => (
        <p key={i} className="mb-8 last:mb-0 text-justify leading-relaxed">
          {p}
        </p>
      ));

  return (
    <div className="bg-[#F5F2EB] min-h-screen animate-fade-in-up pt-20 pb-24 relative z-10 print:pt-4">
      {/* Action Bar */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 mb-10 print:hidden relative z-20">
        <div className="flex justify-between items-center py-4 border-b border-[#D6D1C7] bg-[#F5F2EB]">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-[#5D5A53] hover:text-[#2C2A26] transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Back to Search
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-6 py-3 bg-[#2C2A26] text-[#F5F2EB] text-xs font-semibold uppercase tracking-widest hover:bg-[#433E38] transition-colors shadow-lg hover:shadow-xl rounded-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Export PDF
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-20 bg-[#F5F2EB]">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-10 items-start mb-16 border-b border-[#D6D1C7] pb-12">
          <div className="flex-1 pt-2">
            <div className="flex flex-wrap gap-3 mb-6">
              {study.category && (
                <span className="bg-[#FFF9C4] text-[#827717] px-4 py-1.5 text-xs font-bold uppercase tracking-wide rounded-md border border-[#FBC02D]/20">
                  {study.category}
                </span>
              )}
              {study.status && (
                <span className="bg-[#FFEBEE] text-[#C62828] px-4 py-1.5 text-xs font-bold uppercase tracking-wide rounded-md border border-[#C62828]/20">
                  {study.status}
                </span>
              )}
            </div>

            <h1 className="text-5xl md:text-8xl font-serif text-[#2C2A26] mb-8 leading-none tracking-tight">
              {study.name || "Unnamed Startup"}
            </h1>

            <p className="text-xl md:text-2xl text-[#5D5A53] font-light leading-relaxed max-w-3xl">
              {study.summary || "No summary available for this startup."}
            </p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Left */}
          <div className="lg:col-span-8 space-y-16">
            <section>
              <h3 className="text-sm font-bold text-[#2C2A26] mb-6 border-b-2 border-[#2C2A26] pb-2 uppercase tracking-widest inline-block">
                The Fatal Flaw
              </h3>
              <p className="text-xl text-[#2C2A26] font-serif italic leading-relaxed bg-[#EBE7DE]/50 p-8 border-l-4 border-[#2C2A26] rounded-r-lg">
                "{study.whyItFailed || 'Detailed failure reason unavailable.'}"
              </p>
            </section>

            <section>
              <h3 className="text-sm font-bold text-[#2C2A26] mb-8 border-b-2 border-[#2C2A26] pb-2 uppercase tracking-widest inline-block">
                Why It Failed: A Deep Dive
              </h3>
              <div className="prose prose-stone prose-lg max-w-none font-light leading-loose text-[#44403C] text-justify">
                {formatAnalysis(study.detailedAnalysis)}
              </div>
            </section>

            {/* Key Mistakes */}
            {study.keyMistakes && study.keyMistakes.length > 0 && (
              <section>
                <h3 className="text-sm font-bold text-[#2C2A26] mb-8 border-b-2 border-[#2C2A26] pb-2 uppercase tracking-widest inline-block">
                  Key Mistakes
                </h3>
                <ul className="space-y-6">
                  {study.keyMistakes.map((mistake, idx) => (
                    <li
                      key={idx}
                      className="flex gap-5 items-start bg-white p-6 rounded-lg shadow-sm border border-[#EBE7DE]"
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#FFEBEE] text-[#C62828] flex items-center justify-center text-lg font-bold">
                        !
                      </span>
                      <div>
                        <h5 className="font-bold text-[#2C2A26] mb-1">Mistake #{idx + 1}</h5>
                        <span className="text-[#5D5A53] leading-relaxed">{mistake}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-12">
            {/* Quick Facts */}
            <div className="bg-white p-8 border border-[#EBE7DE] shadow-lg rounded-xl">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#A8A29E] mb-6 pb-2 border-b border-[#EBE7DE]">
                Quick Facts
              </h4>
              <dl className="space-y-6 text-sm">
                <div>
                  <dt className="text-[#A8A29E] text-xs uppercase tracking-wide mb-1">Location</dt>
                  <dd className="font-serif text-xl text-[#2C2A26]">
                    {study.country || "Not specified"}
                  </dd>
                </div>
                <div>
                  <dt className="text-[#A8A29E] text-xs uppercase tracking-wide mb-1">Peak Valuation</dt>
                  <dd className="font-serif text-xl text-[#2C2A26]">
                    {study.peakValuation || "N/A"}
                  </dd>
                </div>
                <div>
                  <dt className="text-[#A8A29E] text-xs uppercase tracking-wide mb-1">Key Year</dt>
                  <dd className="font-serif text-xl text-[#2C2A26]">{study.year || "Unknown"}</dd>
                </div>
              </dl>

              {/* Founders */}
              {study.founders && study.founders.length > 0 && (
                <>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#A8A29E] mt-10 mb-6 pb-2 border-b border-[#EBE7DE]">
                    Founders
                  </h4>
                  <ul className="space-y-3">
                    {study.founders.map((founder, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-[#2C2A26] font-medium"
                      >
                        <div className="w-8 h-8 bg-[#2C2A26] text-[#F5F2EB] rounded-full flex items-center justify-center text-xs font-serif italic">
                          {founder.charAt(0)}
                        </div>
                        {founder}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Timeline */}
              {study.timeline && study.timeline.length > 0 && (
                <>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#A8A29E] mt-10 mb-6 pb-2 border-b border-[#EBE7DE]">
                    Timeline
                  </h4>
                  <div className="space-y-0 border-l-2 border-[#D6D1C7] ml-2">
                    {study.timeline.map((item, idx) => (
                      <div key={idx} className="relative pl-8 pb-8 last:pb-0">
                        <span className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 bg-[#F5F2EB] border-2 border-[#2C2A26] rounded-full"></span>
                        <span className="block text-xs font-bold text-[#A8A29E] mb-1 uppercase tracking-wider">
                          {item.year}
                        </span>
                        <span className="block text-sm text-[#2C2A26] font-medium leading-tight">
                          {item.event}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Lessons Learned */}
            {study.lessonsLearned && study.lessonsLearned.length > 0 && (
              <div className="bg-[#2C2A26] p-8 rounded-xl text-[#F5F2EB] shadow-xl">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#A8A29E] mb-6 pb-2 border-b border-[#A8A29E]/30">
                  Lessons Learned
                </h4>
                <ul className="space-y-6">
                  {study.lessonsLearned.map((lesson, idx) => (
                    <li
                      key={idx}
                      className="text-lg font-serif italic leading-relaxed opacity-90"
                    >
                      "{lesson}"
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;