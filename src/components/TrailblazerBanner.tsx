import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export const TrailblazerBanner: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const { scrollY } = useScroll();
  
  // Subtle parallax on scroll
  const heroY = useTransform(scrollY, [0, 400], [0, 20]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.96]);
  const videoParallax = useTransform(scrollY, [0, 500], [0, -25]);

  return (
    <motion.div 
      style={{ y: heroY, opacity: heroOpacity }}
      className="relative overflow-hidden rounded-3xl bg-[#0F3862] text-white border-2 border-[#E85D04] shadow-2xl shadow-orange-950/25 backdrop-blur-md"
    >
      {/* Top Saugatuck Orange Stripe */}
      <div className="h-2 w-full bg-[#E85D04]" />

      {/* Looping Header Video Background with Smooth Fallback */}
      <motion.div 
        style={{ y: videoParallax }}
        className="absolute inset-0 w-full h-[120%] -top-[10%] pointer-events-none overflow-hidden"
      >
        <video
          ref={videoRef}
          src="https://saugatuckpublicschools.com/wp-content/uploads/2025/08/SPSvideo.mp4"
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-55' : 'opacity-0'
          }`}
        />
        {/* Layered Saugatuck Blue & Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F3862]/85 via-[#13467D]/60 to-[#0F3862]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071E36]/90 via-transparent to-[#13467D]/30" />
      </motion.div>

      {/* Warm Saugatuck Orange Ambient Glow Accents */}
      <div className="absolute -top-16 -right-16 w-80 h-80 bg-[#E85D04]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-[#E85D04]/20 rounded-full blur-3xl pointer-events-none" />

      {/* Hero Content Container - Centered, Big, Clean Blank Space with Video */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-12 py-20 sm:py-28 md:py-36 flex flex-col items-center justify-center text-center min-h-[300px] sm:min-h-[380px] md:min-h-[440px]">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-widest text-white uppercase font-['Plus_Jakarta_Sans',sans-serif] drop-shadow-xl select-none">
            Student Home Base
          </h1>
          <div className="w-16 sm:w-24 h-1.5 bg-[#E85D04] rounded-full shadow-md" />
        </div>
      </div>
    </motion.div>
  );
};
