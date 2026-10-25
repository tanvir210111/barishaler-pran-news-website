"use client";

import React, { useState } from "react";
import { Share2, Check, Copy, MessageCircle, Send } from "lucide-react";

interface ShareButtonsProps {
  url?: string;
  title: string;
  compact?: boolean;
}

export default function ShareButtons({ url, title, compact = false }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "https://barishalerpran.com");
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(shareUrl);
      } else {
        const input = document.createElement("input");
        input.value = shareUrl;
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
      }
      setCopied(true);
      setShowToast(true);
      setTimeout(() => {
        setCopied(false);
        setShowToast(false);
      }, 3000);
    } catch {
      alert("লিংক কপি করতে ব্যর্থ হয়েছে। অনুগ্রহ করে ব্রাউজার থেকে লিংক কপি করুন।");
    }
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title,
          text: title,
          url: shareUrl,
        });
      } catch {
        // User cancelled share
      }
    } else {
      handleCopy();
    }
  };

  if (compact) {
    return (
      <div className="relative inline-flex items-center">
        <button
          onClick={handleNativeShare}
          title="শেয়ার করুন"
          aria-label="শেয়ার করুন"
          className="p-1.5 rounded-full text-[#626B75] hover:text-[#0756A4] hover:bg-[#EAF2FB] transition-colors"
        >
          <Share2 className="w-4 h-4" />
        </button>
        {showToast && (
          <div className="absolute bottom-full mb-1 left-1/2 -translate-x-1/2 bg-[#0756A4] text-white text-[11px] py-1 px-2 rounded shadow-md whitespace-nowrap z-50 animate-fade-in">
            লিংক কপি হয়েছে!
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-2 relative">
      <span className="text-xs font-semibold text-[#626B75] mr-1 hidden sm:inline">
        শেয়ার:
      </span>

      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ফেসবুকে শেয়ার করুন"
        className="w-8 h-8 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
        title="ফেসবুক"
      >
        <span className="font-bold text-sm">f</span>
      </a>

      {/* WhatsApp */}
      <a
        href={`https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="হোয়াটসঅ্যাপে শেয়ার করুন"
        className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
        title="হোয়াটসঅ্যাপ"
      >
        <MessageCircle className="w-4 h-4" />
      </a>

      {/* Telegram */}
      <a
        href={`https://t.org/share/url?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="টেলিগ্রামে শেয়ার করুন"
        className="w-8 h-8 rounded-full bg-[#0088CC] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
        title="টেলিগ্রাম"
      >
        <Send className="w-3.5 h-3.5" />
      </a>

      {/* X (Twitter) */}
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="এক্স-এ শেয়ার করুন"
        className="w-8 h-8 rounded-full bg-[#000000] text-white flex items-center justify-center hover:opacity-90 transition-opacity font-bold text-xs"
        title="এক্স"
      >
        𝕏
      </a>

      {/* Copy Link */}
      <button
        onClick={handleCopy}
        aria-label="লিংক কপি করুন"
        className="flex items-center gap-1 h-8 px-2.5 rounded bg-[#EAF2FB] text-[#0756A4] hover:bg-[#d8e8f8] text-xs font-medium transition-colors"
        title="লিংক কপি করুন"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-green-600" />
            <span className="text-green-700">কপি হয়েছে</span>
          </>
        ) : (
          <>
            <Copy className="w-3.5 h-3.5" />
            <span>কপি লিংক</span>
          </>
        )}
      </button>

      {/* Native device share (shown if available) */}
      {typeof navigator !== "undefined" && "share" in navigator && (
        <button
          onClick={handleNativeShare}
          aria-label="অন্যান্য মাধ্যমে শেয়ার"
          className="w-8 h-8 rounded-full bg-[#E2E6EB] text-[#202124] flex items-center justify-center hover:bg-[#d0d7de] transition-colors"
          title="অন্যান্য শেয়ার"
        >
          <Share2 className="w-4 h-4" />
        </button>
      )}

      {showToast && (
        <div className="absolute -top-9 left-1/2 -translate-x-1/2 bg-[#0756A4] text-white text-xs py-1 px-3 rounded shadow-lg whitespace-nowrap z-50">
          লিংক ক্লিপবোর্ডে কপি হয়েছে!
        </div>
      )}
    </div>
  );
}
