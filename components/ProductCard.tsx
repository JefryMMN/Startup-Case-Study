
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';
import { StartupCaseStudy } from '../types';

interface ProductCardProps {
  study: StartupCaseStudy;
  onClick: (study: StartupCaseStudy) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ study, onClick }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div 
        className="group flex flex-col bg-white rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer h-full" 
        onClick={() => onClick(study)}
    >
      
      <div className="p-6 pb-2 flex-1 flex flex-col">
        {/* Top Badges - Remove margin completely if logo is missing to close the gap */}
        <div className={`flex justify-between items-center transition-all duration-300 ${imageError || !study.logoUrl ? 'mb-0' : 'mb-6'}`}>
            <span className="bg-[#FFF9C4] text-[#827717] px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
                {study.category}
            </span>
            <span className="bg-[#FFEBEE] text-[#C62828] px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
                {study.status}
            </span>
        </div>

       

        {/* Name Area */}
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-3xl font-serif text-[#2C2A26] group-hover:underline decoration-1 underline-offset-4 decoration-[#A8A29E]">
                {study.name}
            </h3>
            <span className="text-[#A8A29E] group-hover:translate-x-1 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
            </span>
        </div>

        {/* Summary */}
        <p className="text-[#5D5A53] text-sm leading-relaxed mb-6 line-clamp-3">
            {study.summary}
        </p>

        {/* Meta Info */}
        <div className="flex items-center gap-2 text-[#9E9E9E] text-sm font-light mt-auto">
            <span>{study.year}</span>
            <span>•</span>
            <span>{study.country}</span>
        </div>
      </div>

      {/* Footer Area with Divider */}
      <div className="px-6 pb-6 pt-4">
        <div className="border-t border-gray-100 pt-4 flex items-end justify-between">
            {/* Peak Valuation */}
            <div>
                <span className="block text-xs text-[#9E9E9E] mb-1">Peak Valuation</span>
                <span className="block text-lg font-bold text-[#2C2A26]">{study.peakValuation}</span>
            </div>

            {/* Failure Tags */}
            <div className="flex flex-wrap gap-2 justify-end max-w-[50%]">
                {study.failureKeywords.map((keyword, idx) => (
                    <span key={idx} className="bg-[#F5F5F5] text-[#616161] px-2 py-1 rounded text-[10px] font-medium uppercase tracking-wider whitespace-nowrap">
                        {keyword}
                    </span>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;