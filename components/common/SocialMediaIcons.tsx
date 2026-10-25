import React from "react";

export interface SocialIconItem {
  id: string;
  name: string;
  nameBn: string;
  title: string;
  hoverColor: string;
  iconBgColor?: string;
  icon: React.ReactNode;
}

// 10 Social Media Icons inspired by Daily Amardesh
// Visual placeholders only, non-clickable, accessible
export const SOCIAL_MEDIA_ITEMS: SocialIconItem[] = [
  {
    id: "facebook",
    name: "Facebook",
    nameBn: "ফেসবুক",
    title: "ফেসবুক (বরিশালের প্রাণ)",
    hoverColor: "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    id: "facebook-group",
    name: "Facebook Group",
    nameBn: "ফেসবুক গ্রুপ",
    title: "ফেসবুক গ্রুপ (বরিশালের প্রাণ)",
    hoverColor: "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
        <path d="M12 12.75c1.63 0 3.07.39 4.24.9 1.08.48 1.76 1.56 1.76 2.73V18H6v-1.62c0-1.17.68-2.25 1.76-2.73 1.17-.51 2.61-.9 4.24-.9zM12 4a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm6.5 8.75c1.06 0 2.05.27 2.87.65.91.43 1.48 1.34 1.48 2.35V17.5h-3.25v-1.45c0-.65-.18-1.28-.5-1.83.43-.07.9-.12 1.4-.12zM17.5 5.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm-11 7.25c.5 0 .97.05 1.4.12-.32.55-.5 1.18-.5 1.83v1.45H3.15V15.75c0-1.01.57-1.92 1.48-2.35.82-.38 1.81-.65 2.87-.65zm-1-7.25a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
      </svg>
    ),
  },
  {
    id: "x-twitter",
    name: "X (Twitter)",
    nameBn: "এক্স (টুইটার)",
    title: "এক্স / টুইটার (বরিশালের প্রাণ)",
    hoverColor: "hover:bg-black hover:text-white hover:border-black",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    id: "tiktok",
    name: "TikTok",
    nameBn: "টিকটক",
    title: "টিকটক (বরিশালের প্রাণ)",
    hoverColor: "hover:bg-black hover:text-white hover:border-black",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.47 6.29 6.29 0 0 0 1.95-4.57V8.75a8.16 8.16 0 0 0 4.82 1.56V6.86a4.85 4.85 0 0 1-1-.17z" />
      </svg>
    ),
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    nameBn: "হোয়াটসঅ্যাপ",
    title: "হোয়াটসঅ্যাপ (বরিশালের প্রাণ)",
    hoverColor: "hover:bg-[#25D366] hover:text-white hover:border-[#25D366]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    ),
  },
  {
    id: "pinterest",
    name: "Pinterest",
    nameBn: "পিন্টারেস্ট",
    title: "পিন্টারেস্ট (বরিশালের প্রাণ)",
    hoverColor: "hover:bg-[#E60023] hover:text-white hover:border-[#E60023]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.171-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.62-5.373-11.987-11.983-11.987z" />
      </svg>
    ),
  },
  {
    id: "youtube",
    name: "YouTube",
    nameBn: "ইউটিউব",
    title: "ইউটিউব (বরিশালের প্রাণ)",
    hoverColor: "hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    nameBn: "লিংকডইন",
    title: "লিংকডইন (বরিশালের প্রাণ)",
    hoverColor: "hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    id: "instagram",
    name: "Instagram",
    nameBn: "ইনস্টাগ্রাম",
    title: "ইনস্টাগ্রাম (বরিশালের প্রাণ)",
    hoverColor: "hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] hover:text-white hover:border-transparent",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    id: "google-news",
    name: "Google News",
    nameBn: "গুগল নিউজ",
    title: "গুগল নিউজ (বরিশালের প্রাণ)",
    hoverColor: "hover:bg-[#4285F4] hover:text-white hover:border-[#4285F4]",
    icon: (
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" aria-hidden="true" fill="none">
        <rect x="3.5" y="3.5" width="17" height="17" rx="3" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.2" />
        <rect x="5.5" y="6" width="5.5" height="4.5" rx="1" fill="currentColor" />
        <rect x="12.5" y="6" width="6" height="1.5" rx="0.75" fill="currentColor" />
        <rect x="12.5" y="9" width="6" height="1.5" rx="0.75" fill="currentColor" />
        <rect x="5.5" y="13" width="13" height="1.5" rx="0.75" fill="currentColor" />
        <rect x="5.5" y="16" width="9.5" height="1.5" rx="0.75" fill="currentColor" />
      </svg>
    ),
  },
];

interface SocialMediaIconsProps {
  className?: string;
  variant?: "header" | "footer" | "drawer";
}

export default function SocialMediaIcons({
  className = "",
  variant = "header",
}: SocialMediaIconsProps) {
  // Common styling based on variant
  const getContainerStyle = (item: SocialIconItem) => {
    if (variant === "footer") {
      return `w-7 h-7 sm:w-8 sm:h-8 rounded bg-gray-700/80 border border-gray-600/50 text-gray-300 flex items-center justify-center transition-all duration-200 cursor-default shadow-xs hover:scale-110 ${item.hoverColor}`;
    }
    if (variant === "drawer") {
      return `w-7 h-7 rounded-full bg-white border border-[#CBD5E1] text-[#64748B] flex items-center justify-center transition-all duration-200 cursor-default shadow-2xs hover:scale-110 ${item.hoverColor}`;
    }
    // Default Header styling
    return `w-6 h-6 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#64748B] flex items-center justify-center transition-all duration-200 cursor-default shadow-2xs hover:scale-110 ${item.hoverColor}`;
  };

  return (
    <div
      role="group"
      aria-label="সামাজিক যোগাযোগ মাধ্যম"
      className={`flex items-center flex-wrap gap-1.5 sm:gap-2 ${className}`}
    >
      {SOCIAL_MEDIA_ITEMS.map((item) => (
        <span
          key={item.id}
          role="img"
          aria-label={item.name}
          title={item.title}
          className={getContainerStyle(item)}
        >
          {item.icon}
        </span>
      ))}
    </div>
  );
}
