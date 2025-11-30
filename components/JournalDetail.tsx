/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { JournalArticle } from '../types';

interface JournalDetailProps {
  article: JournalArticle;
  onBack: () => void;
}

const JournalDetail: React.FC<JournalDetailProps> = ({ article, onBack }) => {
  // Process the content to handle indented paragraphs
  const formatContent = (content: string) => {
    return content
      .split('\n\n') // Split by double newlines (paragraphs)
      .map(paragraph => paragraph.trim()) // Remove leading/trailing whitespace
      .filter(paragraph => paragraph.length > 0) // Remove empty paragraphs
      .map((paragraph, index) => (
        <p key={index} className="mb-6 last:mb-0">
          {paragraph}
        </p>
      ));
  };

  return (
    <div className="min-h-screen bg-[#F5F2EB] animate-fade-in-up">
      {/* Hero Image for Article - Full bleed to top so navbar sits on it */}
      <div className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Main Content Container with z-index fix */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 -mt-32 relative z-20 pb-32">
        <div className="relative bg-[#F5F2EB] p-8 md:p-16 shadow-xl shadow-[#2C2A26]/5 z-30">
          <div className="flex justify-between items-center mb-12 border-b border-[#D6D1C7] pb-8">
            <button 
              onClick={onBack}
              className="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#A8A29E] hover:text-[#2C2A26] transition-colors"
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
              Back to Journal
            </button>
            <span className="text-xs font-medium uppercase tracking-widest text-[#A8A29E]">{article.date}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-serif text-[#2C2A26] mb-12 leading-tight text-center">
            {article.title}
          </h1>

          <div className="prose prose-stone prose-lg mx-auto font-light leading-loose text-[#5D5A53]">
            {formatContent(article.content)}
          </div>

          <div className="mt-16 pt-12 border-t border-[#D6D1C7] flex justify-center">
            <span className="text-2xl font-serif italic text-[#2C2A26]">Aura</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalDetail;
