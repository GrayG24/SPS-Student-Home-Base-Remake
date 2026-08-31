import React, { useState, useEffect } from 'react';
import { ExternalLink, Calendar as CalendarIcon, Utensils } from 'lucide-react';

interface HeaderProps {
  onOpenCalendar: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCalendar }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#13467D]/95 backdrop-blur-md shadow-lg border-b border-[#1E60A8]/50' 
          : 'bg-[#165294] border-b border-[#13467D] shadow-md'
      }`}
    >
      {/* Saugatuck Orange Top Accent Stripe */}
      <div className="h-1.5 w-full bg-[#E85D04]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          
          {/* Official SPS Crest Logo & Clean Student Home Base Label */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a 
              href="https://saugatuckpublicschools.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center group transition-transform hover:scale-[1.02]"
              title="Saugatuck Public Schools Official Website"
            >
              <img 
                src="https://saugatuckpublicschools.com/wp-content/uploads/2025/07/SPS_Crest-Logo_Public-Schools_2-color-RGBwhitetype.png" 
                alt="Saugatuck Public Schools" 
                className="h-10 sm:h-12 w-auto object-contain drop-shadow"
                referrerPolicy="no-referrer"
              />
            </a>

            <div className="pl-3 sm:pl-3.5 border-l-2 border-[#E85D04]/70">
              <span className="text-white font-bold text-xs sm:text-sm tracking-wider uppercase select-none">
                Student Home Base
              </span>
            </div>
          </div>

          {/* Right Header Navigation - Lunch Menu & Calendar Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <div className="hidden md:block text-right text-xs text-blue-100 font-mono pr-1 select-none">
              {timeStr}
            </div>

            {/* Daily Lunch Menu Top Bar Link */}
            <a
              href="https://saugatuckpublicschools.com/menus/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0F3862] hover:bg-[#0c2e50] text-blue-100 hover:text-white border border-blue-400/30 text-xs font-semibold transition-all shadow-sm hover:scale-[1.02]"
              title="View Daily SPS Lunch Menus"
            >
              <Utensils className="w-3.5 h-3.5 text-[#E85D04]" />
              <span>Lunch Menu</span>
            </a>

            {/* District Calendar Button */}
            <button
              onClick={onOpenCalendar}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0F3862] hover:bg-[#0c2e50] text-blue-100 hover:text-white border border-blue-400/30 text-xs font-semibold transition-all shadow-sm hover:scale-[1.02] cursor-pointer"
              title="View 2026-2027 District Calendar"
            >
              <CalendarIcon className="w-3.5 h-3.5 text-[#E85D04]" />
              <span>Calendar</span>
            </button>

            <a
              href="https://saugatuckpublicschools.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#0F3862] hover:bg-[#0c2e50] text-blue-100 hover:text-white border border-blue-400/30 text-xs font-semibold transition-all shadow-sm"
            >
              <span>District Site</span>
              <ExternalLink className="w-3 h-3 text-[#E85D04]" />
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};
