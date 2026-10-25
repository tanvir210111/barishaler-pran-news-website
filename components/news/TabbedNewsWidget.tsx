"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Article } from "@/types/news";
import { Sparkles, TrendingUp, Clock, ChevronRight } from "lucide-react";

interface TabbedNewsWidgetProps {
  importantArticles?: Article[];
  popularArticles: Article[];
  latestArticles?: Article[];
  defaultTab?: "important" | "popular" | "latest";
}

const BENGALI_RANKS = ["১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯", "১০"];

export default function TabbedNewsWidget({
  importantArticles,
  popularArticles,
  latestArticles,
  defaultTab,
}: TabbedNewsWidgetProps) {
  const isImportantMode = Boolean(importantArticles && importantArticles.length > 0);
  const initialTab = defaultTab || (isImportantMode ? "important" : "latest");
  const [activeTab, setActiveTab] = useState<"important" | "popular" | "latest">(initialTab);

  let displayArticles: Article[] = [];
  if (activeTab === "important") {
    displayArticles = (importantArticles || []).slice(0, 8);
  } else if (activeTab === "popular") {
    displayArticles = (popularArticles || []).slice(0, 8);
  } else {
    displayArticles = (latestArticles || []).slice(0, 8);
  }

  return (
    <div className="bg-white border border-[#E2E6EB] shadow-2xs rounded-xs overflow-hidden">
      {/* Tabs Header */}
      <div className="flex border-b border-[#E2E6EB] bg-[#f8f9fa]">
        {isImportantMode ? (
          <button
            type="button"
            onClick={() => setActiveTab("important")}
            className={`flex-1 py-2.5 px-3 text-xs sm:text-sm font-bold text-center flex items-center justify-center gap-1.5 transition-colors cursor-pointer relative ${
              activeTab === "important"
                ? "text-[#0756A4] bg-white border-t-2 border-[#0756A4]"
                : "text-[#626B75] hover:text-[#0756A4] hover:bg-gray-100/60"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#087A43]" />
            <span>গুরুত্বপূর্ণ</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setActiveTab("latest")}
            className={`flex-1 py-2.5 px-3 text-xs sm:text-sm font-bold text-center flex items-center justify-center gap-1.5 transition-colors cursor-pointer relative ${
              activeTab === "latest"
                ? "text-[#0756A4] bg-white border-t-2 border-[#0756A4]"
                : "text-[#626B75] hover:text-[#0756A4] hover:bg-gray-100/60"
            }`}
          >
            <Clock className="w-3.5 h-3.5 text-[#0756A4]" />
            <span>সর্বশেষ সংবাদ</span>
          </button>
        )}

        <button
          type="button"
          onClick={() => setActiveTab("popular")}
          className={`flex-1 py-2.5 px-3 text-xs sm:text-sm font-bold text-center flex items-center justify-center gap-1.5 transition-colors cursor-pointer relative ${
            activeTab === "popular"
              ? "text-[#D62828] bg-white border-t-2 border-[#D62828]"
              : "text-[#626B75] hover:text-[#D62828] hover:bg-gray-100/60"
          }`}
        >
          <TrendingUp className="w-3.5 h-3.5 text-[#D62828]" />
          <span>সর্বাধিক পঠিত</span>
        </button>
      </div>

      {/* List Content: Just compact headlines as requested */}
      <div className="divide-y divide-[#f0f2f5] p-1.5 sm:p-2">
        {displayArticles.map((art, idx) => (
          <Link
            key={art.id}
            href={`/news/${art.slug}`}
            className="group flex items-start gap-2.5 p-2 sm:p-2.5 hover:bg-[#F5F7FA] transition-colors rounded-xs"
          >
            {/* Number Rank in Bengali */}
            <span
              className={`flex items-center justify-center w-5 h-5 sm:w-5.5 sm:h-5.5 shrink-0 rounded-full text-xs font-bold ${
                activeTab === "popular"
                  ? idx === 0
                    ? "bg-[#D62828] text-white"
                    : idx === 1
                    ? "bg-[#0756A4] text-white"
                    : idx === 2
                    ? "bg-[#087A43] text-white"
                    : "bg-gray-100 text-[#626B75]"
                  : idx === 0
                  ? "bg-[#0756A4] text-white"
                  : "bg-blue-50 text-[#0756A4] border border-blue-200"
              }`}
            >
              {BENGALI_RANKS[idx] || idx + 1}
            </span>

            {/* Headline and Metadata */}
            <div className="flex-1 min-w-0">
              <h4 className="text-[13px] sm:text-[13.5px] leading-snug font-semibold text-[#202124] group-hover:text-[#0756A4] transition-colors line-clamp-2">
                {art.title}
              </h4>
              <div className="flex items-center gap-2 mt-1 text-[11px] text-[#626B75]">
                <span className="font-medium text-[#087A43]">
                  {art.category.name}
                </span>
                <span>•</span>
                <span>{art.publishedAtBengali.split(",")[0]}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom Action Link */}
      <div className="p-2 bg-[#fbfcfd] border-t border-[#E2E6EB] text-center">
        <Link
          href={activeTab === "popular" ? "/popular" : "/latest"}
          className="text-xs font-bold text-[#0756A4] hover:text-[#05407c] hover:underline inline-flex items-center gap-1 transition-colors"
        >
          <span>
            {activeTab === "important"
              ? "সকল গুরুত্বপূর্ণ খবর"
              : activeTab === "popular"
              ? "সকল আলোচিত খবর"
              : "সকল সর্বশেষ সংবাদ"}
          </span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
