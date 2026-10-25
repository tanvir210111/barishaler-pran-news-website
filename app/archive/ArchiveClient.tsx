"use client";

import React, { useState, useTransition } from "react";
import { Article, Category } from "@/types/news";
import { getArchiveArticles } from "@/services/newsService";
import HorizontalNewsCard from "@/components/news/HorizontalNewsCard";
import AdvertisementPlaceholder from "@/components/news/AdvertisementPlaceholder";
import { Archive, Calendar, Filter, Search, RotateCcw } from "lucide-react";

interface ArchiveClientProps {
  categories: Category[];
  initialArticles: Article[];
}

export default function ArchiveClient({ categories, initialArticles }: ArchiveClientProps) {
  const [year, setYear] = useState("all");
  const [month, setMonth] = useState("all");
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState<Article[]>(initialArticles);
  const [isPending, startTransition] = useTransition();

  const handleFilter = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    startTransition(async () => {
      const res = await getArchiveArticles({
        year,
        month,
        category,
        query,
      });
      setArticles(res);
    });
  };

  const handleReset = () => {
    setYear("all");
    setMonth("all");
    setCategory("all");
    setQuery("");
    setArticles(initialArticles);
  };

  const bengaliMonths = [
    { value: "01", label: "জানুয়ারি" },
    { value: "02", label: "ফেব্রুয়ারি" },
    { value: "03", label: "মার্চ" },
    { value: "04", label: "এপ্রিল" },
    { value: "05", label: "মে" },
    { value: "06", label: "জুন" },
    { value: "07", label: "জুলাই" },
    { value: "08", label: "আগস্ট" },
    { value: "09", label: "সেপ্টেম্বর" },
    { value: "10", label: "অক্টোবর" },
    { value: "11", label: "নভেম্বর" },
    { value: "12", label: "ডিসেম্বর" },
  ];

  const years = ["2026", "2025", "2024", "2023"];

  return (
    <div className="space-y-6">
      {/* Archive Header */}
      <div className="bg-white rounded-lg border border-[#E2E6EB] p-5 shadow-xs">
        <div className="flex items-center gap-2 mb-2">
          <Archive className="w-6 h-6 text-[#0756A4]" />
          <h1 className="text-2xl font-extrabold text-[#0756A4]">
            পুরাতন নিউজ আর্কাইভ
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-[#626B75] mb-5">
          বরিশালের প্রাণের প্রকাশিত সকল পুরাতন সংবাদ, সম্পাদকীয় এবং বিশেষ প্রতিবেদন তারিখ ও বিভাগ অনুযায়ী সহজেই খুঁজে নিন।
        </p>

        {/* Filter Form */}
        <form onSubmit={handleFilter} className="bg-[#f8f9fa] border border-[#CCD4DD] rounded-lg p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
            {/* Year Selector */}
            <div>
              <label className="block text-xs font-semibold text-[#202124] mb-1">
                সাল নির্বাচন করুন:
              </label>
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full bg-white border border-[#CCD4DD] rounded px-3 py-1.5 text-xs focus:ring-1 focus:ring-[#0756A4] focus:outline-none"
              >
                <option value="all">সকল বছর</option>
                {years.map((y) => (
                  <option key={y} value={y}>
                    {y}
                  </option>
                ))}
              </select>
            </div>

            {/* Month Selector */}
            <div>
              <label className="block text-xs font-semibold text-[#202124] mb-1">
                মাস নির্বাচন করুন:
              </label>
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="w-full bg-white border border-[#CCD4DD] rounded px-3 py-1.5 text-xs focus:ring-1 focus:ring-[#0756A4] focus:outline-none"
              >
                <option value="all">সকল মাস</option>
                {bengaliMonths.map((m) => (
                  <option key={m.value} value={m.value}>
                    {m.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Category Selector */}
            <div>
              <label className="block text-xs font-semibold text-[#202124] mb-1">
                বিভাগ নির্বাচন করুন:
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-white border border-[#CCD4DD] rounded px-3 py-1.5 text-xs focus:ring-1 focus:ring-[#0756A4] focus:outline-none"
              >
                <option value="all">সকল বিভাগ</option>
                {categories.map((cat) => (
                  <option key={cat.slug} value={cat.slug}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Headline search */}
            <div>
              <label className="block text-xs font-semibold text-[#202124] mb-1">
                শিরোনাম অনুসন্ধান:
              </label>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="শিরোনাম বা বিষয়..."
                className="w-full bg-white border border-[#CCD4DD] rounded px-3 py-1.5 text-xs focus:ring-1 focus:ring-[#0756A4] focus:outline-none"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-gray-200">
            <span className="text-xs text-[#626B75]">
              খুঁজে পাওয়া প্রতিবেদন: <strong className="text-[#0756A4]">{articles.length}টি</strong>
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleReset}
                className="px-3 py-1.5 rounded bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs font-semibold flex items-center gap-1 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>রিসেট</span>
              </button>
              <button
                type="submit"
                disabled={isPending}
                className="px-4 py-1.5 rounded bg-[#0756A4] hover:bg-[#05407c] text-white text-xs font-semibold flex items-center gap-1 transition-colors shadow-xs"
              >
                <Search className="w-3.5 h-3.5" />
                <span>{isPending ? "ফিল্টার হচ্ছে..." : "আর্কাইভ খুঁজুন"}</span>
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Archive Results */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-4">
          {articles.length === 0 ? (
            <div className="bg-white rounded-lg border border-[#E2E6EB] p-10 text-center text-[#626B75]">
              <Calendar className="w-10 h-10 mx-auto text-gray-400 mb-2" />
              <p className="text-sm font-semibold">নির্বাচিত ফিল্টারের ভিত্তিতে কোনো প্রতিবেদন পাওয়া যায়নি।</p>
              <p className="text-xs text-gray-400 mt-1">দয়া করে অন্য কোনো সাল, মাস বা বিভাগ নির্বাচন করুন।</p>
            </div>
          ) : (
            articles.map((art) => (
              <HorizontalNewsCard key={art.id} article={art} />
            ))
          )}
        </div>

        <aside className="lg:col-span-4 space-y-6">
          <AdvertisementPlaceholder size="sidebar" />
          <AdvertisementPlaceholder size="medium-rectangle" />
        </aside>
      </div>
    </div>
  );
}
