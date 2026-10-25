"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Camera, Calendar } from "lucide-react";
import { GalleryItem } from "@/types/news";

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function LightboxModal({
  items,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || items.length === 0) return null;

  const current = items[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-3 sm:p-6 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="ছবি প্রদর্শনী ভিউয়ার"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between text-white pb-3 border-b border-gray-800">
        <div>
          <span className="text-xs bg-[#0756A4] text-white px-2 py-0.5 rounded font-semibold mr-2">
            {current.category}
          </span>
          <span className="text-xs text-gray-400">
            {currentIndex + 1} / {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-1.5 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
          aria-label="ভিউয়ার বন্ধ করুন"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image View */}
      <div className="relative flex-1 flex items-center justify-center my-3 max-h-[75vh]">
        <button
          onClick={onPrev}
          aria-label="পূর্ববর্তী ছবি"
          className="absolute left-2 sm:left-4 z-10 p-2 sm:p-3 rounded-full bg-black/60 hover:bg-[#0756A4] text-white transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="relative w-full h-full max-w-5xl flex items-center justify-center">
          <Image
            src={current.image}
            alt={current.title}
            fill
            className="object-contain"
            sizes="(max-width: 1280px) 100vw, 1200px"
            priority
          />
        </div>

        <button
          onClick={onNext}
          aria-label="পরবর্তী ছবি"
          className="absolute right-2 sm:right-4 z-10 p-2 sm:p-3 rounded-full bg-black/60 hover:bg-[#0756A4] text-white transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Caption & Metadata Bottom Sheet */}
      <div className="max-w-4xl mx-auto w-full text-white bg-gray-900/80 p-3 sm:p-4 rounded-lg border border-gray-800 text-center sm:text-left">
        <h4 className="text-base sm:text-lg font-bold text-white mb-1">
          {current.title}
        </h4>
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-2">
          {current.caption}
        </p>
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <Camera className="w-3.5 h-3.5 text-[#087A43]" />
            ছবি: {current.photographer}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-blue-400" />
            {current.date}
          </span>
        </div>
      </div>
    </div>
  );
}
