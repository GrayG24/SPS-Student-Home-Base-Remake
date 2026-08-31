import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, ExternalLink, X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CALENDAR_URL = 'https://saugatuckpublicschools.com/wp-content/uploads/2026/06/2026-2027-School-Calendar-Revised-Apr-2026.jpg';

export const CalendarModal: React.FC<CalendarModalProps> = ({ isOpen, onClose }) => {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 2.5));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.75));
  const handleResetZoom = () => setZoom(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#071E36]/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-5xl max-h-[92vh] flex flex-col bg-[#0F3862] border border-[#E85D04]/40 rounded-3xl shadow-2xl overflow-hidden text-white"
        >
          {/* Top Orange Stripe */}
          <div className="h-1.5 w-full bg-[#E85D04]" />

          {/* Modal Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-[#13467D]/90 border-b border-blue-400/20">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#E85D04]/20 border border-[#E85D04]/50 flex items-center justify-center text-[#E85D04]">
                <CalendarIcon className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-extrabold text-white font-['Outfit'] flex items-center gap-2">
                  <span>2026–2027 School Calendar</span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#E85D04] text-white font-sans font-bold">
                    Official
                  </span>
                </h2>
                <p className="text-xs text-blue-200">Saugatuck Public Schools District Calendar</p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-1 bg-[#0C2D4E] p-1 rounded-xl border border-blue-400/20">
                <button
                  onClick={handleZoomOut}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-blue-200 hover:text-white transition-colors cursor-pointer"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-blue-200 px-1.5">{Math.round(zoom * 100)}%</span>
                <button
                  onClick={handleZoomIn}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-blue-200 hover:text-white transition-colors cursor-pointer"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={handleResetZoom}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-blue-200 hover:text-white transition-colors cursor-pointer"
                  title="Reset Zoom"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

              <a
                href={CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#E85D04] hover:bg-[#d45200] text-white text-xs font-bold transition-all shadow-sm"
              >
                <span>Full Image</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Calendar Image Container */}
          <div className="flex-1 overflow-auto p-4 sm:p-6 bg-[#09223D]/60 flex items-center justify-center min-h-[400px]">
            <div 
              style={{ transform: `scale(${zoom})`, transformOrigin: 'top center', transition: 'transform 0.15s ease-out' }}
              className="max-w-full"
            >
              <img
                src={CALENDAR_URL}
                alt="Saugatuck Public Schools 2026-2027 District Calendar"
                className="w-full h-auto rounded-xl shadow-2xl border border-blue-300/30 object-contain max-h-[70vh]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-5 py-3 bg-[#13467D]/80 border-t border-blue-400/20 flex items-center justify-between text-xs text-blue-200">
            <span>Saugatuck Public Schools • 2026–2027 Academic Year</span>
            <a
              href={CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E85D04] hover:text-orange-300 font-bold flex items-center gap-1 transition-colors"
            >
              <span>Open in new tab</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
