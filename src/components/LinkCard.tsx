import React, { useState } from 'react';
import { 
  ExternalLink, 
  Info, 
  HelpCircle, 
  Check, 
  Copy 
} from 'lucide-react';
import { motion } from 'motion/react';
import { SchoolLink } from '../types';
import { LinkLogo } from './LinkLogo';

interface LinkCardProps {
  link: SchoolLink;
}

export const LinkCard: React.FC<LinkCardProps> = ({ link }) => {
  const [showLoginHelp, setShowLoginHelp] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(link.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleHelpClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowLoginHelp(!showLoginHelp);
  };

  return (
    <motion.div 
      whileHover={{ y: -4, transition: { duration: 0.18, ease: 'easeOut' } }}
      className="group relative flex flex-col justify-between h-full min-h-[190px] sm:min-h-[195px] rounded-2xl bg-white/95 hover:bg-white border-2 border-slate-200/80 hover:border-[#E85D04] shadow-sm hover:shadow-xl hover:shadow-orange-950/10 backdrop-blur-md transition-all duration-200 overflow-hidden"
    >
      {/* Top Accent Strip */}
      <div 
        className="h-1.5 w-full transition-all group-hover:h-2 shrink-0"
        style={{ backgroundColor: link.color || '#E85D04' }}
      />

      <div className="p-5 flex flex-col flex-1 justify-between gap-3">
        <div>
          {/* Header Row: Service Logo & Title */}
          <div className="flex items-center gap-3.5 mb-2.5">
            {/* Real Service / Brand Logo */}
            <div className="w-12 h-12 rounded-xl p-1 bg-slate-50 border border-slate-200/80 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
              <LinkLogo id={link.id} className="w-9 h-9" />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-base font-bold text-[#13467D] group-hover:text-[#E85D04] transition-colors font-['Outfit'] leading-snug truncate">
                {link.title}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 font-normal">
            {link.description}
          </p>
        </div>

        {/* Bottom Actions Row */}
        <div className="mt-auto">
          {/* Login Help Info Drawer */}
          {link.loginHelp && (
            <div className="mb-2.5">
              {showLoginHelp ? (
                <div className="p-2.5 rounded-xl bg-orange-50/80 border border-orange-200 text-[11px] text-[#13467D] shadow-xs animate-in fade-in">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-1.5 font-bold text-[#E85D04]">
                      <Info className="w-3.5 h-3.5 text-[#E85D04] shrink-0" />
                      <span>Login Help:</span>
                    </div>
                    <button 
                      onClick={handleHelpClick}
                      className="text-slate-400 hover:text-slate-700 cursor-pointer font-bold px-1"
                    >
                      ✕
                    </button>
                  </div>
                  <p className="mt-1 text-slate-700 font-medium">{link.loginHelp}</p>
                </div>
              ) : (
                <button
                  onClick={handleHelpClick}
                  className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 hover:text-[#E85D04] transition-colors cursor-pointer"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-[#E85D04]" />
                  <span>How to sign in</span>
                </button>
              )}
            </div>
          )}

          <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2">
            <button
              onClick={handleCopyLink}
              title="Copy URL"
              className="px-2.5 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-[11px] font-medium text-slate-600 hover:text-slate-900 border border-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600 font-bold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-400" />
                  <span>Copy</span>
                </>
              )}
            </button>

            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#13467D] hover:bg-[#E85D04] text-white text-xs font-bold transition-all shadow-sm hover:shadow-md group/btn cursor-pointer"
            >
              <span>Open Link</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/80 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:text-white transition-all" />
            </a>
          </div>
        </div>

      </div>
    </motion.div>
  );
};
