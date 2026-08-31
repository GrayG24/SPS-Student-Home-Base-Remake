import React, { useState, useEffect, useMemo } from 'react';
import { 
  SCHOOL_LINKS, 
  LIBRARY_LINKS 
} from './data/linksData';
import { LinkCategory } from './types';
import { Header } from './components/Header';
import { TrailblazerBanner } from './components/TrailblazerBanner';
import { CategorySection } from './components/CategorySection';
import { CalendarModal } from './components/CalendarModal';
import { Footer } from './components/Footer';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  // Active category tab ('all', 'school', 'library')
  const [activeCategory, setActiveCategory] = useState<LinkCategory | 'all'>('all');

  // Calendar Modal state (triggered solely by the Header Calendar button)
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  // Show scroll-to-top button
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll listener for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Master links
  const schoolLinks = useMemo(() => {
    return SCHOOL_LINKS;
  }, []);

  const libraryLinks = useMemo(() => {
    return LIBRARY_LINKS;
  }, []);

  return (
    <div className="relative min-h-screen bg-[#071E36] text-slate-800 flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#E85D04] selection:text-white overflow-x-hidden">
      
      {/* Background Decorative Subtle Ambient Glows */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-[#165294]/20 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="fixed top-1/3 right-10 w-[500px] h-[500px] bg-[#E85D04]/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="fixed bottom-10 left-10 w-[600px] h-[600px] bg-[#0F3862]/40 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Official Saugatuck Header (Contains the single Calendar button) */}
      <Header onOpenCalendar={() => setIsCalendarOpen(true)} />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8 relative z-10">
        
        {/* Welcome Launchpad Hero with centered larger Student Home Base title and video */}
        <TrailblazerBanner />

        {/* Categorized Resource Sections: School Links and Library Links */}
        <CategorySection
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          schoolLinks={schoolLinks}
          libraryLinks={libraryLinks}
        />

      </main>

      {/* Saugatuck Public Schools Footer with Trailblazer Creed */}
      <Footer />

      {/* 2026-2027 Official School Calendar Modal */}
      <CalendarModal
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
      />

      {/* Floating Scroll To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-4 sm:bottom-6 sm:right-6 z-30 p-3.5 rounded-2xl bg-[#E85D04] hover:bg-[#d45200] text-white shadow-2xl border border-orange-300/40 backdrop-blur-md transition-colors cursor-pointer"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
