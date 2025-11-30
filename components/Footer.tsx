
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email) return;
    setSubscribeStatus('loading');
    setTimeout(() => {
      setSubscribeStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <footer className="bg-[#EBE7DE] pt-24 pb-12 px-6 text-[#5D5A53]">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        <div className="md:col-span-4">
          <h4 className="text-2xl font-serif text-[#2C2A26] mb-6">Case Study Hub</h4>
          <p className="max-w-xs font-light leading-relaxed">
            The premier resource for analyzing startup failures. 
            Because learning what <em>not</em> to do is half the battle.
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-medium text-[#2C2A26] mb-6 tracking-wide text-sm uppercase">Explore</h4>
          <ul className="space-y-4 font-light">
            <li><a href="#case-studies" onClick={(e) => onLinkClick(e, 'case-studies')} className="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline">All Case Studies</a></li>
            <li><a href="#trending" onClick={(e) => onLinkClick(e, 'trending')} className="hover:text-[#2C2A26] transition-colors underline-offset-4 hover:underline">Trending Failures</a></li>
          </ul>
        </div>
        
        

        
      </div>

      <div className="max-w-[1800px] mx-auto mt-20 pt-8 border-t border-[#D6D1C7] flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest opacity-60">
        <p>Startup Archive © 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
