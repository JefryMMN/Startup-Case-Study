/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';

interface FooterProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubscribe = () => {
    if (!email) return;
    
    setSubscribeStatus('loading');
    setTimeout(() => {
      setSubscribeStatus('success');
      setTimeout(() => {
        setEmail('');
        setSubscribeStatus('idle');
      }, 2000);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubscribe();
    }
  };

  return (
    <footer className="bg-[#44403C] text-[#F5F2EB]">
      {/* Main Footer Content */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Newsletter Section - Left Side */}
          <div className="lg:col-span-5">
            <h3 className="text-3xl md:text-4xl font-serif text-[#F5F2EB] mb-6">
              Newsletter
            </h3>
            <p className="text-[#D6D1C7] font-light text-lg mb-8 leading-relaxed max-w-md">
              Stay up to date with the latest startup failure case studies and insights
            </p>
            
            {/* Email Subscribe */}
            <div className="flex items-stretch gap-0 max-w-xl">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Email address"
                disabled={subscribeStatus !== 'idle'}
                className="flex-1 px-6 py-4 bg-transparent border-2 border-[#D6D1C7] text-[#F5F2EB] placeholder-[#A8A29E] focus:outline-none focus:border-[#F5F2EB] transition-colors rounded-l-sm disabled:opacity-50"
              />
              <button
                onClick={handleSubscribe}
                disabled={subscribeStatus !== 'idle'}
                className="px-8 py-4 bg-[#F5F2EB] text-[#44403C] font-medium uppercase tracking-wider text-sm hover:bg-white transition-colors disabled:opacity-50 rounded-r-sm whitespace-nowrap"
              >
                {subscribeStatus === 'loading' ? 'Subscribing...' : subscribeStatus === 'success' ? 'Subscribed!' : 'Subscribe'}
              </button>
            </div>
          </div>

          {/* Navigation Links - Right Side */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-16">
      

       

            {/* Company */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#A8A29E] mb-6">
                Company
              </h4>
              <ul className="space-y-4">
              
        
                <li>
                  <a 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); }}
                    className="text-[#F5F2EB] hover:text-white transition-colors text-base"
                  >
                    About

                  </a>
                </li>
              </ul>
            </div>
    
            {/* Explore */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#A8A29E] mb-6">
                Explore
              </h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="#case-studies" 
                    onClick={(e) => onNavClick(e, 'case-studies')}
                    className="text-[#F5F2EB] hover:text-white transition-colors text-base"
                  >
                    All Case Studies
                  </a>
                </li>
                <li>
                  <a 
                    href="#trending" 
                    onClick={(e) => onNavClick(e, 'trending')}
                    className="text-[#F5F2EB] hover:text-white transition-colors text-base"
                  >
                    Trending Failures
                  </a>
                </li>
              
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#5D5A53]">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Copyright */}
            <p className="text-sm text-[#A8A29E]">
              © 2025 Startup Archive. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-8 text-sm">
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); }}
                className="text-[#A8A29E] hover:text-[#F5F2EB] transition-colors"
              >
                Terms
              </a>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); }}
                className="text-[#A8A29E] hover:text-[#F5F2EB] transition-colors"
              >
                Privacy
              </a>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); }}
                className="text-[#A8A29E] hover:text-[#F5F2EB] transition-colors"
              >
                Cookie Preferences
              </a>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;