/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

interface FooterProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string): boolean => {
    // RFC 5322 compliant email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async () => {
    // Reset error message
    setErrorMessage('');

    // Check if email is empty
    if (!email.trim()) {
      setErrorMessage('Please enter your email address');
      setSubscribeStatus('error');
      return;
    }

    // Validate email format
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      setSubscribeStatus('error');
      return;
    }

    // Send welcome email via EmailJS
    setSubscribeStatus('loading');
    
    try {
      // EmailJS credentials
      const serviceID = 'service_3qk93fe';
      const templateID = 'template_q4huzdb';
      const publicKey = '29U7aPzs0dsrS6dRy';

      const templateParams = {
        to_email: email,
        to_name: email.split('@')[0], // Uses part before @ as name
        from_name: 'Startup Archive',
      };

      await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      setSubscribeStatus('success');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setEmail('');
        setSubscribeStatus('idle');
        setErrorMessage('');
      }, 3000);
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      setErrorMessage('Failed to subscribe. Please try again later.');
      setSubscribeStatus('error');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSubscribe();
  };

  return (
    <footer className="bg-[#44403C] text-[#F5F2EB]">
      {/* Main Footer */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Newsletter */}
          <div className="lg:col-span-5">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#F5F2EB] mb-4 md:mb-6">
              Newsletter
            </h3>

            <p className="text-[#D6D1C7] font-light text-base md:text-lg mb-6 md:mb-8 leading-relaxed max-w-md">
              Stay up to date with the latest startup
              failure case studies and insights
            </p>

            {/* Subscribe Input */}
            <div className="flex flex-col w-full max-w-xl">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (subscribeStatus === 'error') {
                      setSubscribeStatus('idle');
                      setErrorMessage('');
                    }
                  }}
                  onKeyPress={handleKeyPress}
                  placeholder="Email address"
                  disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}
                  className={`flex-1 px-4 md:px-6 py-3 md:py-4 bg-transparent 
                             border-2 ${subscribeStatus === 'error' ? 'border-red-400' : 'border-[#D6D1C7]'}
                             text-[#F5F2EB] placeholder-[#A8A29E]
                             focus:outline-none ${subscribeStatus === 'error' ? 'focus:border-red-400' : 'focus:border-[#F5F2EB]'}
                             transition-colors disabled:opacity-50`}
                />

                <button
                  onClick={handleSubscribe}
                  disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}
                  className="px-6 md:px-8 py-3 md:py-4 
                             border-2 border-[#D6D1C7]
                             bg-[#F5F2EB] text-[#44403C]
                             font-medium uppercase tracking-wider text-sm 
                             hover:bg-white transition-colors 
                             disabled:opacity-50 disabled:cursor-not-allowed
                             whitespace-nowrap"
                >
                  {subscribeStatus === 'loading'
                    ? 'Subscribing...'
                    : subscribeStatus === 'success'
                    ? '✓ Subscribed!'
                    : 'Subscribe'}
                </button>
              </div>
              
              {/* Error Message */}
              {subscribeStatus === 'error' && errorMessage && (
                <p className="text-red-400 text-sm mt-2 font-light">
                  {errorMessage}
                </p>
              )}
              
              {/* Success Message */}
              {subscribeStatus === 'success' && (
                <p className="text-green-400 text-sm mt-2 font-light">
                  Thank you for subscribing! Check your email for confirmation.
                </p>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">

            {/* Company */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#A8A29E] mb-6">
                Company
              </h4>

              <ul className="space-y-4">
                <li>
                  <a
                    href="#about"
                    onClick={(e) => onNavClick(e, 'about')}
                    className="text-[#F5F2EB] hover:text-white transition-colors text-base"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#authors"
                    onClick={(e) => onNavClick(e, 'authors')}
                    className="text-[#F5F2EB] hover:text-white transition-colors text-base"
                  >
                    Our Authors
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

            <p className="text-sm text-[#A8A29E]">
              © 2025 Startup Archive. All rights reserved.
            </p>

            <div className="flex items-center gap-8 text-sm">
              <a className="text-[#A8A29E] hover:text-[#F5F2EB] transition-colors" href="#">
                Terms
              </a>
              <a className="text-[#A8A29E] hover:text-[#F5F2EB] transition-colors" href="#">
                Privacy
              </a>
              <a className="text-[#A8A29E] hover:text-[#F5F2EB] transition-colors" href="#">
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