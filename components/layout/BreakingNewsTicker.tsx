"use client";

import React from "react";
import Link from "next/link";
import { Zap } from "lucide-react";
import { BreakingNewsItem } from "@/types/news";

interface TickerProps {
  items: BreakingNewsItem[];
}

export default function BreakingNewsTicker({ items }: TickerProps) {
  if (!items || items.length === 0) return null;

  // Duplicate items twice to ensure an infinite seamless loop
  const tickerItems = [...items, ...items];

  return (
    <div
      className="breaking-ticker bg-[#D62828] text-white shadow-xs w-full overflow-hidden border-b border-red-800/40 select-none"
      role="region"
      aria-label="ব্রেকিং নিউজ স্ক্রলিং"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center text-sm py-2 w-full">
        {/* Fixed Left Badge */}
        <div className="flex items-center gap-1.5 bg-[#8b1010] px-3 py-1 rounded text-xs font-bold shrink-0 tracking-wide shadow-md z-10 mr-4">
          <Zap className="w-3.5 h-3.5 fill-current animate-pulse text-yellow-300" />
          <span className="whitespace-nowrap font-bold">ব্রেকিং নিউজ</span>
        </div>

        {/* Continuous Right-to-Left Infinite Scrolling Track */}
        <div className="relative flex-1 overflow-hidden">
          <div className="animate-marquee flex items-center">
            {tickerItems.map((item, index) => (
              <div key={`${item.id}-${index}`} className="inline-flex items-center shrink-0">
                <Link
                  href={`/news/${item.slug}`}
                  className="hover:underline hover:text-yellow-100 transition-colors font-medium text-white text-sm flex items-center gap-1.5 py-0.5"
                >
                  <span className="text-yellow-200 text-xs font-semibold">
                    [{item.categoryName}]
                  </span>
                  <span>{item.headline}</span>
                </Link>
                {/* Visual Separator between headlines */}
                <span className="mx-6 text-red-300/80 font-bold select-none">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
