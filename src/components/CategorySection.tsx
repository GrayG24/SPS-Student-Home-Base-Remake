import React, { useState, useRef, useEffect } from 'react';
import { 
  GraduationCap, 
  Library, 
  Layers,
  School,
  ChevronDown,
  Sparkles,
  BookOpen,
  Gamepad2,
  FolderOpen
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SchoolLink, LinkCategory } from '../types';
import { LinkCard } from './LinkCard';

interface CategorySectionProps {
  activeCategory: LinkCategory | 'all';
  onCategoryChange: (cat: LinkCategory | 'all') => void;
  schoolLinks: SchoolLink[];
  libraryLinks: SchoolLink[];
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  activeCategory,
  onCategoryChange,
  schoolLinks,
  libraryLinks,
}) => {
  const [isDesDropdownOpen, setIsDesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const desOptions = [
    { id: 'des-grade-1' as const, label: 'Grade 1', shortLabel: 'DES: Grade 1', icon: BookOpen, desc: '1st Grade resources & classroom activities' },
    { id: 'des-grade-2' as const, label: 'Grade 2', shortLabel: 'DES: Grade 2', icon: BookOpen, desc: '2nd Grade resources & classroom activities' },
    { id: 'des-grade-3' as const, label: 'Grade 3', shortLabel: 'DES: Grade 3', icon: BookOpen, desc: '3rd Grade resources & classroom activities' },
    { id: 'des-grade-4' as const, label: 'Grade 4', shortLabel: 'DES: Grade 4', icon: BookOpen, desc: '4th Grade resources & classroom activities' },
    { id: 'des-grade-5' as const, label: 'Grade 5', shortLabel: 'DES: Grade 5', icon: BookOpen, desc: '5th Grade resources & classroom activities' },
    { id: 'des-activities' as const, label: 'DES Online Activities', shortLabel: 'DES: Activities', icon: Gamepad2, desc: 'Douglas Elementary educational games & activities' },
  ];

  const activeDesOption = desOptions.find(opt => opt.id === activeCategory);
  const isDesActive = Boolean(activeDesOption);

  const categories = [
    {
      id: 'all' as const,
      label: 'All Resources',
      icon: Layers,
      count: schoolLinks.length + libraryLinks.length,
    },
    {
      id: 'school' as const,
      label: 'School Links',
      icon: GraduationCap,
      count: schoolLinks.length,
    },
    {
      id: 'library' as const,
      label: 'Library & Research',
      icon: Library,
      count: libraryLinks.length,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.28, ease: 'easeOut' } 
    },
  };

  return (
    <div className="space-y-10 relative">
      {/* Category Navigation Tabs with Layered Glass Effect */}
      <div className="sticky top-[64px] sm:top-[74px] z-30 py-2.5 backdrop-blur-xl bg-[#0E345D]/90 -mx-4 px-4 sm:mx-0 sm:px-3 rounded-2xl border-2 border-blue-300/30 shadow-xl transition-all overflow-visible">
        <div className="flex flex-wrap items-center gap-2 overflow-visible">
          {/* Main Category Tabs */}
          {categories.map((cat) => {
            const IconComp = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                id={`cat-tab-${cat.id}`}
                type="button"
                onClick={() => {
                  onCategoryChange(cat.id);
                  setIsDesDropdownOpen(false);
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer outline-none focus:outline-none focus:ring-0 focus-visible:outline-none ring-0 border-0 ${
                  isActive
                    ? 'bg-[linear-gradient(90deg,#13467D_0%,#13467D_40%,#6B445B_50%,#E85D04_60%,#E85D04_100%)] text-white shadow-lg font-bold scale-[1.02]'
                    : 'bg-white/90 text-slate-700 hover:text-[#13467D] hover:bg-white border border-slate-200 backdrop-blur-md hover:scale-[1.01]'
                }`}
              >
                <IconComp className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                <span className="drop-shadow-xs">{cat.label}</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[11px] font-mono font-bold ${
                    isActive ? 'bg-white/25 text-white border border-white/20' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}

          {/* Douglas Elementary (DES) Dropdown Tab */}
          <div className="relative z-40" ref={dropdownRef}>
            <button
              id="des-dropdown-tab-btn"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsDesDropdownOpen((prev) => !prev);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer outline-none focus:outline-none focus:ring-0 focus-visible:outline-none ring-0 border-0 ${
                isDesActive
                  ? 'bg-[linear-gradient(90deg,#13467D_0%,#13467D_40%,#6B445B_50%,#E85D04_60%,#E85D04_100%)] text-white shadow-lg font-bold scale-[1.02]'
                  : 'bg-white/90 text-slate-700 hover:text-[#13467D] hover:bg-white border border-slate-200 backdrop-blur-md hover:scale-[1.01]'
              }`}
            >
              <School className={`w-4 h-4 ${isDesActive ? 'text-white' : 'text-slate-500'}`} />
              <span className="drop-shadow-xs">
                {activeDesOption ? activeDesOption.shortLabel : 'Douglas Elementary (DES)'}
              </span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isDesDropdownOpen ? 'rotate-180' : ''} ${isDesActive ? 'text-white' : 'text-slate-500'}`} />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {isDesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.15, ease: 'easeOut' }}
                  className="absolute left-0 top-full mt-2 w-72 sm:w-80 rounded-2xl bg-[#0F3862] border-2 border-blue-400/50 shadow-2xl backdrop-blur-2xl p-2 z-50 overflow-hidden"
                >
                  <div className="px-3 py-2 border-b border-blue-400/20 mb-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider">
                      <School className="w-3.5 h-3.5" />
                      <span>Douglas Elementary School</span>
                    </div>
                    <p className="text-[11px] text-blue-200/80 mt-0.5">Select a grade or online activities page</p>
                  </div>

                  <div className="space-y-1">
                    {desOptions.map((opt) => {
                      const OptIcon = opt.icon;
                      const isOptionSelected = activeCategory === opt.id;
                      return (
                        <button
                          key={opt.id}
                          id={`des-opt-${opt.id}`}
                          type="button"
                          onClick={() => {
                            onCategoryChange(opt.id);
                            setIsDesDropdownOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all cursor-pointer outline-none focus:outline-none ${
                            isOptionSelected
                              ? 'bg-[#E85D04] text-white font-bold shadow-md'
                              : 'text-blue-100 hover:bg-white/10 hover:text-white'
                          }`}
                        >
                          <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                            isOptionSelected ? 'bg-white/20 text-white' : 'bg-blue-900/60 text-orange-400 border border-blue-400/30'
                          }`}>
                            <OptIcon className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-bold truncate">{opt.label}</div>
                            <div className={`text-[10px] truncate ${isOptionSelected ? 'text-orange-100' : 'text-blue-300/80'}`}>
                              {opt.desc}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* School Links Section */}
      {(activeCategory === 'all' || activeCategory === 'school') && schoolLinks.length > 0 && (
        <motion.section 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="space-y-4 pt-2"
        >
          {/* Refined School Links Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 sm:p-5 rounded-2xl bg-[#0F3862]/90 border border-blue-400/30 backdrop-blur-md shadow-lg">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#E85D04]/20 border border-[#E85D04]/50 flex items-center justify-center text-[#E85D04] shrink-0 shadow-inner">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 font-['Outfit']">
                  <span>School Links</span>
                </h2>
                <p className="text-xs text-blue-200/90 mt-0.5">Student grades, email, cloud storage, district info, and safety resources</p>
              </div>
            </div>
            <span className="self-start sm:self-center text-xs font-bold px-3 py-1 rounded-full bg-blue-400/20 text-blue-200 border border-blue-400/30">
              {schoolLinks.length} Links
            </span>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {schoolLinks.map((link) => (
              <motion.div key={link.id} variants={itemVariants} className="h-full">
                <LinkCard link={link} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      )}

      {/* Library & Research Section */}
      {(activeCategory === 'all' || activeCategory === 'library') && libraryLinks.length > 0 && (
        <motion.section 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="space-y-4 pt-4"
        >
          {/* Refined Library Links Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 sm:p-5 rounded-2xl bg-[#0F3862]/90 border border-cyan-400/40 backdrop-blur-md shadow-lg">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shrink-0 shadow-inner">
                <Library className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 font-['Outfit']">
                  <span>Library Links & Research</span>
                </h2>
                <p className="text-xs text-blue-200/90 mt-0.5">Michigan eLibrary (MeL.org), digital research databases, and public library resources</p>
              </div>
            </div>
            <span className="self-start sm:self-center text-xs font-bold px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-200 border border-cyan-400/30">
              {libraryLinks.length} Links
            </span>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-40px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {libraryLinks.map((link) => (
              <motion.div key={link.id} variants={itemVariants} className="h-full">
                <LinkCard link={link} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      )}

      {/* Douglas Elementary (DES) Grade & Online Activities Placeholder Pages */}
      {isDesActive && activeDesOption && (
        <motion.section
          key={activeDesOption.id}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="space-y-6 pt-2"
        >
          {/* DES Page Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 rounded-2xl bg-[#0F3862]/90 border border-orange-400/40 backdrop-blur-md shadow-lg">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#E85D04]/20 border border-[#E85D04]/50 flex items-center justify-center text-[#E85D04] shrink-0 shadow-inner">
                {activeDesOption.id === 'des-activities' ? (
                  <Gamepad2 className="w-6 h-6" />
                ) : (
                  <School className="w-6 h-6" />
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-300 bg-orange-500/20 px-2 py-0.5 rounded-md border border-orange-500/30">
                    Douglas Elementary
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-white mt-1 font-['Outfit']">
                  {activeDesOption.label}
                </h2>
                <p className="text-xs text-blue-200/90 mt-0.5">
                  {activeDesOption.desc}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-white/10 text-blue-100 border border-white/15">
                Ready for links
              </span>
            </div>
          </div>

          {/* Clean Placeholder Container (No Links Added Yet) */}
          <div className="rounded-2xl border-2 border-dashed border-blue-400/30 bg-[#0A2747]/60 p-10 sm:p-14 text-center flex flex-col items-center justify-center backdrop-blur-sm">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#13467D] to-[#E85D04] p-0.5 flex items-center justify-center shadow-lg mb-4">
              <div className="w-full h-full bg-[#0A2747] rounded-[14px] flex items-center justify-center text-orange-400">
                <FolderOpen className="w-8 h-8" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-white font-['Outfit']">
              {activeDesOption.label} Page Ready
            </h3>
            <p className="text-sm text-blue-200/80 max-w-md mt-1.5 leading-relaxed">
              Curated links, student resources, and interactive tools for {activeDesOption.label} will be added here.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => onCategoryChange('all')}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-blue-100 text-xs font-semibold border border-white/20 transition-all cursor-pointer"
              >
                Back to All Resources
              </button>
            </div>
          </div>
        </motion.section>
      )}
    </div>
  );
};
