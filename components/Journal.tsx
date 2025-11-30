/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { StartupCaseStudy } from '../types';

interface JournalProps {
  onArticleClick: (study: StartupCaseStudy) => void;
  onBack?: () => void; // ✅ Optional back handler from parent
}

const Journal: React.FC<JournalProps> = ({ onArticleClick, onBack }) => {
  const trendingStartups = [
    {
      id: 'byjus',
      name: "Byju’s",
      category: 'EdTech',
      status: 'Distressed',
      summary:
        "India’s EdTech giant that grew too fast, acquired too many companies, and now faces financial and regulatory crises.",
    },
    {
      id: 'gomechanic',
      name: 'GoMechanic',
      category: 'Auto Services',
      status: 'Shut Down',
      summary:
        'A car service startup that collapsed after funding fraud, misreporting, and unsustainable expansion.',
    },
    {
      id: 'olaelectric',
      name: 'Ola Electric',
      category: 'EV / Mobility',
      status: 'Distressed',
      summary:
        'Electric scooter manufacturer facing production issues, recalls, and customer trust crisis.',
    },
    {
      id: 'fastpay',
      name: 'FastPay',
      category: 'FinTech',
      status: 'Shut Down',
      summary:
        'One-click payments startup that failed to sustain growth amid competition and poor margins.',
    },
    {
      id: 'zilingo',
      name: 'Zilingo',
      category: 'FashionTech',
      status: 'Collapsed',
      summary:
        'Fashion supply chain startup that collapsed amid financial mismanagement and leadership conflict.',
    },
    {
      id: 'ftx',
      name: 'FTX',
      category: 'Crypto / Finance',
      status: 'Bankrupt',
      summary:
        'Cryptocurrency exchange that imploded in one of history’s largest financial scandals.',
    },
  ];

  const handleBack = () => {
    if (onBack) {
      onBack(); // ✅ Call parent handler if provided
    } else {
      // fallback: scroll to top or home
      const homeSection = document.getElementById('home');
      if (homeSection) homeSection.scrollIntoView({ behavior: 'smooth' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section id="trending" className="bg-[#F5F2EB] py-24 px-6 md:px-12 min-h-screen">
      <div className="max-w-[1800px] mx-auto">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 pb-8 border-b border-[#D6D1C7]">
          <div>
            <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#A8A29E] mb-4">
              Most Viewed
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-[#2C2A26] mb-4">
              Trending Failures
            </h2>

            {/* 🔙 Back to Search Button */}
            <button
              onClick={handleBack}
              className="flex items-center text-[#5D5A53] uppercase tracking-widest text-xs hover:text-[#2C2A26] transition-all duration-300 mt-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-3 h-3 mr-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Search
            </button>
          </div>

          <p className="max-w-md text-[#5D5A53] font-light mt-6 md:mt-0 text-right md:text-left">
            The most analyzed case studies by students and founders this month.
          </p>
        </div>

        {/* Trending Startup Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {trendingStartups.map((startup) => (
            <div
              key={startup.id}
              className="group cursor-pointer flex flex-col bg-white border border-[#EBE7DE] shadow-sm hover:shadow-lg transition-all duration-500"
              onClick={() => onArticleClick(startup)}
            >
              <div className="p-8 flex flex-col flex-1">
                <span className="text-xs font-medium uppercase tracking-widest text-[#A8A29E] mb-2">
                  {startup.category}
                </span>
                <h3 className="text-3xl font-serif text-[#2C2A26] mb-4 group-hover:underline decoration-1 underline-offset-4">
                  {startup.name}
                </h3>
                <p className="text-[#5D5A53] font-light leading-relaxed mb-6">
                  {startup.summary}
                </p>
                <button className="self-start text-xs font-bold uppercase tracking-widest text-[#2C2A26] border-b border-[#2C2A26] pb-1 hover:text-[#5D5A53] hover:border-[#5D5A53] transition-colors">
                  Read Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
