"use client";

import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import Results from '@/components/Results';
import HowItWorks from '@/components/HowItWorks';
import Services from '@/components/Services';
import SocialProof from '@/components/SocialProof';
import CaseStudy from '@/components/CaseStudy';
import FinalCTA from '@/components/FinalCTA';
import StickyCTA from '@/components/StickyCTA';
import ExitPopup from '@/components/ExitPopup';

export default function Home() {
  const [showExitPopup, setShowExitPopup] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowExitPopup(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Results />
      <HowItWorks />
      <Services />
      <SocialProof />
      <CaseStudy />
      <FinalCTA />
      <StickyCTA />
      <ExitPopup isOpen={showExitPopup} onClose={() => setShowExitPopup(false)} />
    </main>
  );
}
