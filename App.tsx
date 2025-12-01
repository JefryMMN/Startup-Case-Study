/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
// 💡 FIX: Explicitly adding .tsx extension to all component imports
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import ProductGrid from './components/ProductGrid.tsx';
import Journal from './components/Journal.tsx';
import Footer from './components/Footer.tsx';
import ProductDetail from './components/ProductDetail.tsx';
import About from './components/About.tsx';
import Authors from './components/Authors.tsx'; // 💡 NEW: Import Authors component

// NOTE: Please ensure your external 'ViewState' type definition (in ./types) includes:
// | { type: 'authors' }
import { ViewState } from './types';

function App() {
  const [view, setView] = useState<ViewState>({ type: 'home' });
  const [fromTrending, setFromTrending] = useState(false);

  // ✅ Handle navigation with smooth scroll
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    if (targetId === 'trending') {
      setView({ type: 'trending' });
      // Add slight delay to ensure view changes before scroll
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 10);
      return;
    }

    if (targetId === 'about') {
      setView({ type: 'about' });
      // Add slight delay to ensure view changes before scroll
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 10);
      return;
    }

    // 💡 NEW: Handle Authors navigation
    if (targetId === 'authors') {
      setView({ type: 'authors' });
      // Add slight delay to ensure view changes before scroll
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 10);
      return;
    }

    // Default: go back to home for other links
    setView({ type: 'home' });
    setTimeout(() => {
      if (targetId && targetId !== 'trending' && targetId !== 'about' && targetId !== 'authors') {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  const handleBackToHome = () => {
        setView({ type: 'home' });
        window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <div className="min-h-screen bg-[#F5F2EB] font-sans text-[#2C2A26] selection:bg-[#D6D1C7] selection:text-[#2C2A26]">
      {/* Navbar */}
      {(view.type === 'home' || view.type === 'about' || view.type === 'authors') && (
        <div className="print:hidden">
          <Navbar onNavClick={handleNavClick} />
        </div>
      )}

      {/* Main content */}
      <main>
        {/* 🏠 Home Page */}
        {view.type === 'home' && (
          <>
            <Hero onNavClick={handleNavClick} />
            <ProductGrid
              onProductClick={(study) => {
                setFromTrending(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setView({ type: 'case-study', study: study });
              }}
            />
          </>
        )}

        {/* 📰 Trending Section */}
        {view.type === 'trending' && (
          <Journal
            onArticleClick={(study) => {
              setFromTrending(true);
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setView({ type: 'case-study', study });
            }}
            onBack={() => setView({ type: 'home' })}
          />
        )}

        {/* ℹ️ About Page */}
        {view.type === 'about' && (
          <About
            onBack={handleBackToHome}
          />
        )}
        
        {/* 👤 Authors Page 💡 NEW */}
        {view.type === 'authors' && (
          <Authors
            onBack={handleBackToHome}
          />
        )}

        {/* 📘 Case Study Detail */}
        {view.type === 'case-study' && (
          <ProductDetail
            study={view.study as any}
            onBack={() => {
              if (fromTrending) {
                setView({ type: 'trending' });
              } else {
                setView({ type: 'home' });
              }
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }, 100);
            }}
          />
        )}
      </main>

      {/* Footer - Render on all primary views */}
    {/* Footer - Render on all primary views */}
      {(view.type === 'home' || view.type === 'trending' || view.type === 'about' || view.type === 'authors' || view.type === 'case-study') && (
        <div className="print:hidden">
          <Footer onNavClick={handleNavClick} />
        </div>
      )}
    </div>
  );
}

export default App;