"use client";

import { useState, useEffect } from 'react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-navy border-t-2 border-electricBlue shadow-2xl">
        <div className="px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex-1">
            <div className="text-white font-bold text-sm">Stop Wasting Ad Spend</div>
            <div className="text-gray-300 text-xs">Get your free audit today</div>
          </div>
          <a
            href="#audit"
            className="bg-orange hover:bg-orange/90 text-white font-bold px-6 py-3 rounded-lg transition-all shadow-lg whitespace-nowrap text-sm"
          >
            Get Free Audit →
          </a>
        </div>
      </div>
    </div>
  );
}
