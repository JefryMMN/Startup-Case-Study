
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useMemo } from 'react';
import { UNIQUE_STARTUPS as STARTUPS } from '../constants';
import { StartupCaseStudy } from '../types';
import ProductCard from './ProductCard';

const categories = ['All', 'Fintech', 'HealthTech', 'PropTech', 'Media', 'Hardware', 'Social', 'Retail', 'Energy'];

interface ProductGridProps {
  onProductClick: (study: StartupCaseStudy) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onProductClick }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStartups = useMemo(() => {
    return STARTUPS.filter(s => {
      const term = searchTerm.toLowerCase();
      
      const matchesCategory = activeCategory === 'All' || s.category.toLowerCase() === activeCategory.toLowerCase();
      
      // Enhanced search logic: checks Name, Category, Summary, Status, and Failure Keywords
      const matchesSearch = s.name.toLowerCase().includes(term) || 
                            s.category.toLowerCase().includes(term) ||
                            s.status.toLowerCase().includes(term) ||
                            s.summary.toLowerCase().includes(term) ||
                            s.failureKeywords.some(k => k.toLowerCase().includes(term));
                            
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  // Logic to hide "Search Only" startups from the main home page view
  // We show the first 10 as "Featured" when there is no search/filter active.
  const displayedStartups = useMemo(() => {
    if (searchTerm || activeCategory !== 'All') {
        return filteredStartups;
    }
    return filteredStartups.slice(0, 12);
  }, [filteredStartups, searchTerm, activeCategory]);

  return (
    <section id="case-studies" className="py-24 px-6 md:px-12 bg-[#F5F2EB]">
      <div className="max-w-[1800px] mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-16 space-y-8">
          <h2 className="text-4xl md:text-6xl font-serif text-[#2C2A26]">The Case Studies</h2>
          
          {/* Search Bar */}
          <div className="w-full max-w-md relative">
            <input 
                type="text"
                placeholder="Search database (e.g. 'PepperTap', 'Fraud')..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-[#D6D1C7] py-3 px-12 rounded-full text-[#2C2A26] placeholder-[#A8A29E] outline-none focus:border-[#2C2A26] transition-colors shadow-sm"
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#A8A29E]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            {searchTerm && (
                <button 
                    onClick={() => setSearchTerm('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#A8A29E] hover:text-[#2C2A26]"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            )}
          </div>

          {/* Minimal Filter */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 pt-4 border-t border-[#D6D1C7]/50 w-full max-w-4xl">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs md:text-sm uppercase tracking-widest pb-1 border-b transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'border-[#2C2A26] text-[#2C2A26]' 
                    : 'border-transparent text-[#A8A29E] hover:text-[#2C2A26]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Large Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {displayedStartups.length > 0 ? (
            displayedStartups.map(study => (
                <ProductCard key={study.id} study={study} onClick={onProductClick} />
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-[#A8A29E] flex flex-col items-center">
                <p className="text-xl font-serif mb-2">No results found for "{searchTerm}"</p>
                <p className="text-sm">Try checking the spelling or use broader keywords like "Retail" or "India".</p>
                <button 
                    onClick={() => {
                        setSearchTerm('');
                        setActiveCategory('All');
                    }}
                    className="mt-6 text-sm underline underline-offset-4 hover:text-[#2C2A26]"
                >
                    Clear all filters
                </button>
            </div>
          )}
        </div>
        
        {!searchTerm && activeCategory === 'All' && (
             <div className="mt-16 text-center">
                 <p className="text-[#A8A29E] text-sm italic">Search to reveal {STARTUPS.length - 10}+ more case studies including Hike, PepperTap, and Wirecard...</p>
             </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
