import React from 'react';
import { 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Globe 
} from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-16 bg-[#0F3862] text-blue-100 text-xs border-t border-[#165294] shadow-2xl relative z-10">
      {/* Saugatuck Orange Accent Stripe */}
      <div className="h-1.5 w-full bg-[#E85D04]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Col 1: District Brand & Trailblazer Creed */}
          <div className="space-y-3.5">
            <a
              href="https://saugatuckpublicschools.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105"
              title="Saugatuck Public Schools"
            >
              <img 
                src="https://saugatuckpublicschools.com/wp-content/uploads/2025/07/SPS_Crest-Logo_Public-Schools_2-color-RGBwhitetype.png" 
                alt="Saugatuck Public Schools" 
                className="h-11 w-auto object-contain drop-shadow"
                referrerPolicy="no-referrer"
              />
            </a>
            
            <div className="text-blue-100/90 text-xs leading-relaxed space-y-2.5 max-w-sm">
              <p>
                At Saugatuck Public Schools, we lead, we explore, and we learn, together.
              </p>
              <p>
                And while we're forging our own paths, we move forward as one. In the classroom, on the field, on stage, and in our community, we give everything we have, because together, we are Trailblazers.
              </p>
              <p className="font-bold text-[#E85D04]">
                And Trailblazers lead the way.
              </p>
            </div>
          </div>

          {/* Col 2: Student Tech Support */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-1.5 font-['Outfit']">
              <Globe className="w-3.5 h-3.5 text-[#E85D04]" />
              Chromebook Support
            </h3>
            <p className="text-xs text-blue-200/90 mb-2 leading-relaxed">
              Need assistance with your Chromebook, student Google account, or Wi-Fi?
            </p>
            <div className="space-y-1.5 text-xs text-blue-200">
              <div>
                <span className="font-semibold text-white">• Learning Commons/Media Center:</span> Drop in during school hours for tech help.
              </div>
            </div>
          </div>

          {/* Col 3: Safety & Contact */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-1.5 font-['Outfit']">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E85D04]" />
              Contact & Safety
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2 text-blue-200">
                <MapPin className="w-3.5 h-3.5 text-[#E85D04] mt-0.5 shrink-0" />
                <span>401 Elizabeth St, Saugatuck, MI 49453</span>
              </div>
              <div className="flex items-center gap-2 text-blue-200">
                <Phone className="w-3.5 h-3.5 text-[#E85D04] shrink-0" />
                <span>(269) 857-1444</span>
              </div>
              <div className="mt-2.5 p-2.5 rounded-xl bg-rose-950/60 border border-rose-700/50 text-rose-100 text-[11px] font-semibold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-rose-400 shrink-0" />
                <span>OK2SAY Tip Line: 8-555-OK2SAY</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};
