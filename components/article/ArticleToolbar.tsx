"use client";

import React from "react";
import { Printer, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import ShareButtons from "../news/ShareButtons";

interface ToolbarProps {
  fontSizeLevel: number; // -1 (small), 0 (normal), 1 (large), 2 (xlarge)
  onIncreaseFontSize: () => void;
  onDecreaseFontSize: () => void;
  onResetFontSize: () => void;
  title: string;
  url?: string;
}

export default function ArticleToolbar({
  fontSizeLevel,
  onIncreaseFontSize,
  onDecreaseFontSize,
  onResetFontSize,
  title,
  url,
}: ToolbarProps) {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="bg-[#f8f9fa] border border-[#E2E6EB] rounded-lg p-2.5 sm:px-4 flex flex-wrap items-center justify-between gap-3 no-print my-4">
      {/* Font Size Controls & Print */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        <span className="text-xs font-semibold text-[#626B75] mr-1 hidden sm:inline">
          হরফের আকার:
        </span>

        <button
          onClick={onDecreaseFontSize}
          disabled={fontSizeLevel <= -1}
          aria-label="হরফ ছোট করুন"
          title="হরফ ছোট করুন"
          className="p-1.5 rounded bg-white border border-[#E2E6EB] hover:bg-gray-100 disabled:opacity-40 text-xs font-bold text-[#202124] transition-colors flex items-center gap-0.5"
        >
          <ZoomOut className="w-3.5 h-3.5" />
          <span className="text-[11px]">A-</span>
        </button>

        <button
          onClick={onResetFontSize}
          disabled={fontSizeLevel === 0}
          aria-label="স্বাভাবিক হরফ"
          title="স্বাভাবিক হরফ"
          className="p-1.5 rounded bg-white border border-[#E2E6EB] hover:bg-gray-100 disabled:opacity-40 text-xs font-bold text-[#202124] transition-colors flex items-center gap-0.5"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="text-[11px]">A</span>
        </button>

        <button
          onClick={onIncreaseFontSize}
          disabled={fontSizeLevel >= 2}
          aria-label="হরফ বড় করুন"
          title="হরফ বড় করুন"
          className="p-1.5 rounded bg-white border border-[#E2E6EB] hover:bg-gray-100 disabled:opacity-40 text-xs font-bold text-[#202124] transition-colors flex items-center gap-0.5"
        >
          <ZoomIn className="w-3.5 h-3.5" />
          <span className="text-[11px]">A+</span>
        </button>

        <span className="text-gray-300 mx-1">|</span>

        {/* Print Button */}
        <button
          onClick={handlePrint}
          aria-label="সংবাদটি প্রিন্ট করুন"
          title="প্রিন্ট করুন"
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded bg-white border border-[#E2E6EB] hover:bg-gray-100 text-xs font-medium text-[#202124] transition-colors"
        >
          <Printer className="w-3.5 h-3.5 text-[#0756A4]" />
          <span className="hidden sm:inline">প্রিন্ট</span>
        </button>
      </div>

      {/* Share toolbar */}
      <div>
        <ShareButtons title={title} url={url} />
      </div>
    </div>
  );
}
