
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Journal from './components/Journal';
import Assistant from './components/Assistant';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import { ViewState } from './types';

function App() {
  const [view, setView] = useState<ViewState>({ type: 'home' });

  // Handle navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    if (targetId === 'trending') {
        setView({ type: 'trending' });
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    // Default to home for other links
    setView({ type: 'home' });
    setTimeout(() => {
        if (targetId && targetId !== 'trending') {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-[#F5F2EB] font-sans text-[#2C2A26] selection:bg-[#D6D1C7] selection:text-[#2C2A26]">
      <div className="print:hidden">
        <Navbar 
            onNavClick={handleNavClick} 
        />
      </div>
      
      <main>
        {view.type === 'home' && (
          <>
            <Hero onNavClick={handleNavClick} />
            <ProductGrid onProductClick={(study) => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setView({ type: 'case-study', study: study });
            }} />
          </>
        )}

      {view.type === 'trending' && (
  <Journal
    onArticleClick={(study) => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setView({ type: 'case-study', study: study });
    }}
    onBack={() => {
      setView({ type: 'home' }); // ✅ Back to Search goes Home
    }}
  />
)}

        {view.type === 'case-study' && (
          <ProductDetail 
            study={view.study} 
            onBack={() => {
              setView({ type: 'home' });
            }}
          />
        )}
      </main>

      <div className="print:hidden">
        <Footer onLinkClick={handleNavClick} />
        
      </div>
    </div>
  );
}

export default App;
