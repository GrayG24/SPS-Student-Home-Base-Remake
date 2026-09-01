import React, { useState } from 'react';

interface LinkLogoProps {
  id: string;
  className?: string;
}

export const LinkLogo: React.FC<LinkLogoProps> = ({ id, className = 'w-7 h-7' }) => {
  const [imageError, setImageError] = useState(false);

  // Common image renderer helper with fallback
  const renderImage = (src: string, alt: string, fallbackNode: React.ReactNode) => {
    if (imageError) {
      return fallbackNode;
    }
    return (
      <img
        src={src}
        alt={alt}
        className={`${className} object-contain rounded-md`}
        referrerPolicy="no-referrer"
        onError={() => setImageError(true)}
      />
    );
  };

  switch (id) {
    case 'powerschool':
      return renderImage(
        'https://en.appmobs.com/games/images/20230202/com_powerschool_portal_202302021523479532.png',
        'PowerSchool Portal',
        <svg viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="10" fill="#024D94" />
          <path d="M12 11h14c6.6 0 11 4.4 11 11s-4.4 11-11 11h-6v7h-8V11zm8 15h6c2.8 0 4.5-1.7 4.5-4s-1.7-4-4.5-4h-6v8z" fill="#FFFFFF" />
          <circle cx="36" cy="12" r="3.5" fill="#FF8D00" />
        </svg>
      );

    case 'student-gmail':
    case 'gmail':
      return renderImage(
        'https://brandlogos.net/wp-content/uploads/2020/10/gmail-logo-1.png',
        'Gmail',
        <svg viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="10" fill="#FFFFFF" />
          <path fill="#4285F4" d="M38 12H10c-2.2 0-4 1.8-4 4v20c0 2.2 1.8 4 4 4h28c2.2 0 4-1.8 4-4V16c0-2.2-1.8-4-4-4z"/>
          <path fill="#34A853" d="M10 40h6V23L6 16v20c0 2.2 1.8 4 4 4z"/>
          <path fill="#4285F4" d="M38 40h-6V23l10-7v20c0 2.2-1.8 4-4 4z"/>
          <path fill="#EA4335" d="M32 12l-8 7-8-7H6l18 14 18-14z"/>
          <path fill="#FBBC05" d="M6 16l10 7-10 7z"/>
          <path fill="#EA4335" d="M42 16l-10 7 10 7z"/>
        </svg>
      );

    case 'google-drive':
      return renderImage(
        'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Google_Drive_icon_(2026).svg/1280px-Google_Drive_icon_(2026).svg.png',
        'Google Drive',
        <svg viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="10" fill="#FFFFFF" />
          <path fill="#FFC107" d="M17 9l-11 19 6 10 11-19z"/>
          <path fill="#2196F3" d="M31 9H17l11 19 7-12z"/>
          <path fill="#4CAF50" d="M42 28H18l-6 10h24z"/>
        </svg>
      );

    case 'sps-website':
      return renderImage(
        'https://www.hollandsentinel.com/gcdn/presto/2021/08/17/NHOS/d50322fd-65e1-4f7b-96fe-c65927707f3c-32dc8744-b3f4-427b-8551-ad1b3948e7a1.jpg',
        'Saugatuck Public Schools District',
        <img 
          src="https://saugatuckpublicschools.com/wp-content/uploads/2025/07/SPS_Crest-Logo_Public-Schools_2-color-RGBwhitetype.png" 
          alt="SPS Crest"
          className={`${className} object-contain`}
          referrerPolicy="no-referrer"
        />
      );

    case 'sps-helpful-links':
      return renderImage(
        'https://www.hollandsentinel.com/gcdn/presto/2021/08/17/NHOS/d50322fd-65e1-4f7b-96fe-c65927707f3c-32dc8744-b3f4-427b-8551-ad1b3948e7a1.jpg',
        'SPS Helpful Links',
        <svg viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="10" fill="#4F46E5" />
          <circle cx="24" cy="24" r="14" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
          <path d="M18 24h12m-4-6l6 6-6 6" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'ok2say-michigan':
    case 'oktosay':
    case 'ok2say':
      return renderImage(
        'https://www.michigan.gov/ok2say/-/media/Project/Websites/shared/Site-Logos/MichiganGlobal-logo-Icon.svg?rev=e29162c06c174283bdf2106d78d932ac&hash=8613973E14C16DDDBCF5EB53CA8467F3',
        'OK2SAY Michigan',
        <svg viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="10" fill="#991B1B" />
          <path d="M24 7l13 6v10c0 9-6 15-13 18-7-3-13-9-13-18V13l13-6z" fill="#DC2626" stroke="#FFFFFF" strokeWidth="1.5" />
          <text x="24" y="27" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="900" fontFamily="sans-serif">OK2</text>
          <text x="24" y="35" textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="900" fontFamily="sans-serif">SAY</text>
        </svg>
      );

    case 'michigan-elibrary':
      return renderImage(
        'https://ovidpubliclibrary.com/wp-content/uploads/2025/05/melcat57.jpg',
        'Michigan eLibrary (MeL)',
        <svg viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="10" fill="#1E40AF" />
          <path d="M12 34l8-20h6l8 20h-5l-2-6h-10l-2 6h-3zm9-10h6l-3-8-3 8z" fill="#FFFFFF" />
          <text x="36" y="24" fill="#F59E0B" fontSize="10" fontWeight="bold">eL</text>
        </svg>
      );

    case 'sddl-public-library':
      return renderImage(
        'https://douglas-mi.municodemeetings.com/sites/douglas-mi.municodemeetings.com/themes/mmportal_subtheme/logo.png',
        'Saugatuck-Douglas District Library',
        <svg viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="10" fill="#0D9488" />
          <path d="M12 16h24v2H12zm2 4h20v14H14zm3 3v8m4-8v8m4-8v8m4-8v8" stroke="#FFFFFF" strokeWidth="2" fill="none" />
          <path d="M10 36h28v3H10z" fill="#FFFFFF" />
          <path d="M24 9l15 7H9z" fill="#FFFFFF" />
        </svg>
      );

    case 'google-classroom':
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <rect x="4" y="8" width="40" height="32" rx="4" fill="#0F9D58" stroke="#F4B400" strokeWidth="2.5" />
          <path d="M24 16c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm-8 16v-1.5c0-2.7 5.3-4 8-4s8 1.3 8 4V32H16z" fill="#FFFFFF" />
          <circle cx="16" cy="20" r="2.5" fill="#E8F0FE" opacity="0.8" />
          <path d="M11 31v-1c0-1.8 3.6-2.7 5.4-2.7.6 0 1.3.1 2 .3-.7.7-1.1 1.6-1.1 2.6v.8H11z" fill="#E8F0FE" opacity="0.8" />
          <circle cx="32" cy="20" r="2.5" fill="#E8F0FE" opacity="0.8" />
          <path d="M37 31v-1c0-1.8-3.6-2.7-5.4-2.7-.6 0-1.3.1-2 .3.7.7 1.1 1.6 1.1 2.6v.8H37z" fill="#E8F0FE" opacity="0.8" />
        </svg>
      );

    case 'sps-lunch-menu':
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="10" fill="#10B981" />
          <circle cx="24" cy="24" r="14" fill="#FFFFFF" opacity="0.25" />
          <path d="M16 14v9a4 4 0 004 4v9h2v-9a4 4 0 004-4v-9h-2v7h-1.5v-7h-2v7H19v-7h-3zM32 14v9c0 2.2-1.8 4-4 4v9h-2V14c3 0 6 2 6 0v0z" fill="#FFFFFF" />
        </svg>
      );

    case 'trailblazer-athletics':
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="10" fill="#0F3862" stroke="#E85D04" strokeWidth="2" />
          <path d="M24 8l12 7v9c0 8-5 13-12 16-7-3-12-8-12-16v-9l12-7z" fill="#E85D04" />
          <path d="M24 12l8 5v6c0 5.5-3.5 9-8 11-4.5-2-8-5.5-8-11v-6l8-5z" fill="#0F3862" />
          <path d="M24 16l3 6h6l-5 4 2 6-6-4-6 4 2-6-5-4h6z" fill="#FFFFFF" />
        </svg>
      );

    case 'chromebook-helpdesk':
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="10" fill="#FFFFFF" />
          <circle cx="24" cy="24" r="16" fill="#EA4335" />
          <path d="M24 8a16 16 0 0113.8 8H24v8h-8.8A16 16 0 0124 8z" fill="#EA4335" />
          <path d="M37.8 16a16 16 0 01-6 21.8l-4-6.9a8 8 0 004-6.9h6z" fill="#FBBC05" />
          <path d="M31.8 37.8A16 16 0 0110.2 32l4-6.9a8 8 0 006.9 4l-4 8.7z" fill="#34A853" />
          <circle cx="24" cy="24" r="7" fill="#FFFFFF" />
          <circle cx="24" cy="24" r="5.5" fill="#4285F4" />
        </svg>
      );

    case 'google-docs':
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="10" fill="#FFFFFF" />
          <path fill="#4285F4" d="M33 8H15c-1.7 0-3 1.3-3 3v26c0 1.7 1.3 3 3 3h18c1.7 0 3-1.3 3-3V11c0-1.7-1.3-3-3-3z"/>
          <path fill="#FFFFFF" d="M17 19h14v2H17zm0 5h14v2H17zm0 5h9v2H17z"/>
        </svg>
      );

    case 'google-slides':
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="10" fill="#FFFFFF" />
          <path fill="#FBBC05" d="M34 9H14c-1.7 0-3 1.3-3 3v24c0 1.7 1.3 3 3 3h20c1.7 0 3-1.3 3-3V12c0-1.7-1.3-3-3-3z"/>
          <rect x="17" y="16" width="14" height="11" rx="1" fill="#FFFFFF"/>
          <rect x="19" y="19" width="10" height="5" fill="#FBBC05"/>
        </svg>
      );

    case 'counseling-center':
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="10" fill="#8B5CF6" />
          <path d="M24 37s-11-7.2-11-14.5c0-4.1 3.4-7.5 7.5-7.5 2.5 0 4.7 1.2 6 3 1.3-1.8 3.5-3 6-3 4.1 0 7.5 3.4 7.5 7.5C40 29.8 24 37 24 37z" fill="#FFFFFF" />
          <path d="M21 24h6m-3-3v6" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'clever-portal':
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="10" fill="#2563EB" />
          <path d="M29 13a11 11 0 100 22c4 0 7-2 9-5l-4.5-3c-1.2 2-2.7 3-4.5 3a6 6 0 110-12c1.8 0 3.3 1 4.5 3l4.5-3c-2-3-5-5-9-5z" fill="#FFFFFF" />
        </svg>
      );

    case 'khan-academy':
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="10" fill="#14BF96" />
          <path d="M24 10c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14-6.3-14-14-14zm-1 7a5 5 0 110 10 5 5 0 010-10zm7.5 14.5c0 1.7-3 3.5-6.5 3.5s-6.5-1.8-6.5-3.5c0-2.2 2.9-4 6.5-4s6.5 1.8 6.5 4z" fill="#FFFFFF" />
          <path d="M24 16c2 0 4 2 4 4s-2 4-4 4-4-2-4-4 2-4 4-4z" fill="#14BF96" />
        </svg>
      );

    case 'ixl-learning':
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="10" fill="#0284C7" />
          <text x="24" y="32" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">
            IXL
          </text>
          <path d="M12 36h24" stroke="#84CC16" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );

    case 'deltamath':
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="10" fill="#4F46E5" />
          <path d="M24 10L10 36h28L24 10zm0 8l9 14H15l9-14z" fill="#FFFFFF" />
        </svg>
      );

    case 'desmos-calculator':
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="10" fill="#059669" />
          <path d="M14 12h10c6.6 0 12 5.4 12 12s-5.4 12-12 12H14V12zm6 18h4c3.3 0 6-2.7 6-6s-2.7-6-6-6h-4v12z" fill="#FFFFFF" />
          <path d="M16 24c3-4 6 4 9 0" stroke="#34D399" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </svg>
      );

    case 'mcgraw-hill-connected':
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="10" fill="#DC2626" />
          <path d="M13 14h6l5 10 5-10h6v20h-5V22l-4.5 8.5h-3L18 22v12h-5V14z" fill="#FFFFFF" />
        </svg>
      );

    case 'typingclub':
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="10" fill="#D97706" />
          <rect x="10" y="14" width="28" height="20" rx="3" fill="#FFFFFF" />
          <rect x="13" y="17" width="4" height="3" rx="0.5" fill="#D97706" />
          <rect x="19" y="17" width="4" height="3" rx="0.5" fill="#D97706" />
          <rect x="25" y="17" width="4" height="3" rx="0.5" fill="#D97706" />
          <rect x="31" y="17" width="4" height="3" rx="0.5" fill="#D97706" />
          <rect x="15" y="22" width="4" height="3" rx="0.5" fill="#D97706" />
          <rect x="21" y="22" width="4" height="3" rx="0.5" fill="#D97706" />
          <rect x="27" y="22" width="4" height="3" rx="0.5" fill="#D97706" />
          <rect x="16" y="27" width="16" height="3" rx="0.5" fill="#D97706" />
        </svg>
      );

    case 'quizlet':
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="10" fill="#4257B2" />
          <circle cx="23" cy="23" r="10" fill="#FFFFFF" />
          <circle cx="23" cy="23" r="6" fill="#4257B2" />
          <path d="M28 28l7 7" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );

    case 'kahoot-join':
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="10" fill="#46178F" />
          <text x="20" y="34" textAnchor="middle" fill="#FFFFFF" fontSize="26" fontWeight="900" fontFamily="sans-serif">
            K!
          </text>
        </svg>
      );

    case 'blooket-join':
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="10" fill="#F97316" />
          <text x="24" y="35" textAnchor="middle" fill="#FFFFFF" fontSize="28" fontWeight="900" fontFamily="sans-serif">
            B
          </text>
          <circle cx="16" cy="15" r="2.5" fill="#FFFFFF" />
          <circle cx="32" cy="15" r="2.5" fill="#FFFFFF" />
        </svg>
      );

    case 'code-org':
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="10" fill="#0094C6" />
          <rect x="11" y="11" width="26" height="26" rx="4" fill="#FFFFFF" />
          <text x="24" y="28" textAnchor="middle" fill="#0094C6" fontSize="13" fontWeight="900" fontFamily="sans-serif">
            C O
          </text>
          <text x="24" y="35" textAnchor="middle" fill="#0094C6" fontSize="8" fontWeight="900" fontFamily="sans-serif">
            D E
          </text>
        </svg>
      );

    case 'duolingo-schools':
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="10" fill="#58CC02" />
          <circle cx="18" cy="22" r="7" fill="#FFFFFF" />
          <circle cx="30" cy="22" r="7" fill="#FFFFFF" />
          <circle cx="19" cy="22" r="3.5" fill="#1CB0F6" />
          <circle cx="29" cy="22" r="3.5" fill="#1CB0F6" />
          <path d="M21 28h6l-3 4z" fill="#FFC800" />
        </svg>
      );

    case 'destiny-discover':
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="10" fill="#EA580C" />
          <path d="M24 14c-4-3-8-3-12-1v18c4-2 8-2 12 1 4-3 8-3 12-1V13c-4-2-8-2-12 1z" fill="#FFFFFF" />
          <path d="M24 14v18" stroke="#EA580C" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'sora-overdrive':
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="10" fill="#06B6D4" />
          <circle cx="24" cy="20" r="8" fill="#FFFFFF" />
          <ellipse cx="24" cy="20" rx="6" ry="4" fill="#06B6D4" />
          <path d="M16 34c0-5 3.6-9 8-9s8 4 8 9z" fill="#FFFFFF" />
          <circle cx="24" cy="20" r="2" fill="#FFFFFF" />
        </svg>
      );

    case 'purdue-owl':
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="10" fill="#B45309" />
          <circle cx="18" cy="20" r="5" fill="#FFFFFF" />
          <circle cx="30" cy="20" r="5" fill="#FFFFFF" />
          <circle cx="18" cy="20" r="2.5" fill="#000000" />
          <circle cx="30" cy="20" r="2.5" fill="#000000" />
          <path d="M24 24l-3 5h6z" fill="#F59E0B" />
          <path d="M14 13l4 3m16-3l-4 3" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'google-scholar':
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="10" fill="#FFFFFF" />
          <path d="M24 10l16 8-16 8-16-8 16-8zm-10 14.5v7c0 4.5 4.5 8 10 8s10-3.5 10-8v-7l-10 5-10-5z" fill="#4285F4" />
        </svg>
      );

    case 'project-gutenberg':
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="10" fill="#65A30D" />
          <path d="M12 14c4-2 8-2 12 1 4-3 8-3 12-1v19c-4-2-8-2-12 1-4-3-8-3-12-1V14z" fill="#FFFFFF" />
          <text x="24" y="27" textAnchor="middle" fill="#65A30D" fontSize="11" fontWeight="900">G</text>
        </svg>
      );

    case 'world-book-online':
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="10" fill="#1D4ED8" />
          <circle cx="24" cy="24" r="14" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
          <ellipse cx="24" cy="24" rx="7" ry="14" stroke="#FFFFFF" strokeWidth="2" fill="none" />
          <path d="M10 24h28M14 16h20M14 32h20" stroke="#FFFFFF" strokeWidth="1.5" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 48 48" className={className}>
          <rect width="48" height="48" rx="10" fill="#13467D" />
          <circle cx="24" cy="24" r="10" fill="#E85D04" />
        </svg>
      );
  }
};
