"use client";

import React, { useState, useEffect, useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Article, Category } from "@/types/news";
import { searchArticles } from "@/services/newsService";
import HorizontalNewsCard from "@/components/news/HorizontalNewsCard";
import AdvertisementPlaceholder from "@/components/news/AdvertisementPlaceholder";
import { Search, Filter, Calendar, FileQuestion } from "lucide-react";

interface SearchClientProps {
  initialQuery: string;
  initialCategory: string;
  initialDate: string;
  categories: Category[];
  initialArticles: Article[];
}

export default function SearchClient({
  initialQuery,
  initialCategory,
  initialDate,
  categories,
  initialArticles,
}: SearchClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || "all");
  const [dateFilter, setDateFilter] = useState(initialDate || "all");
  const [results, setResults] = useState<Article[]>(initialArticles);
  const [isPending, startTransition] = useTransition();

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    startTransition(async () => {
      const filtered = await searchArticles(query, selectedCategory, dateFilter);
      setResults(filtered);

      const params = new URLSearchParams();
      if (query.trim()) params.set("q", query.trim());
      if (selectedCategory !== "all") params.set("category", selectedCategory);
      if (dateFilter !== "all") params.set("date", dateFilter);

      router.push(`/search?${params.toString()}`);
    });
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    startTransition(async () => {
      const filtered = await searchArticles(query, cat, dateFilter);
      setResults(filtered);
    });
  };

  const handleDateChange = (date: string) => {
    setDateFilter(date);
    startTransition(async () => {
      const filtered = await searchArticles(query, selectedCategory, date);
      setResults(filtered);
    });
  };

  return (
    <div className="space-y-6">
      {/* Search Bar & Header */}
      <div className="bg-white rounded-lg border border-[#E2E6EB] p-5 shadow-xs">
        <h1 className="text-2xl font-extrabold text-[#0756A4] mb-3 flex items-center gap-2">
          <Search className="w-6 h-6 text-[#087A43]" />
          সংবাদ অনুসন্ধান
        </h1>

        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2 mb-4">
          <div className="relative flex-1">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="যেকোনো বিষয়, খবর বা ব্যক্তির নাম লিখুন..."
              className="w-full pl-9 pr-4 py-2.5 text-sm bg-[#f8f9fa] border border-[#CCD4DD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0756A4] focus:bg-white text-[#202124]"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="bg-[#0756A4] hover:bg-[#05407c] text-white px-6 py-2.5 rounded-md font-semibold text-sm transition-colors shrink-0 shadow-xs flex items-center justify-center gap-2"
          >
            {isPending ? "অনুসন্ধান চলছে..." : "অনুসন্ধান করুন"}
          </button>
        </form>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 text-xs pt-3 border-t border-gray-100">
          {/* Category Filter */}
          <div className="flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-[#0756A4]" />
            <span className="font-semibold text-[#202124]">বিভাগ:</span>
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="bg-[#f8f9fa] border border-[#CCD4DD] rounded px-2.5 py-1 text-xs text-[#202124] focus:outline-none focus:ring-1 focus:ring-[#0756A4]"
            >
              <option value="all">সকল বিভাগ</option>
              {categories.map((cat) => (
                <option key={cat.slug} value={cat.slug}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Date Range Filter */}
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#087A43]" />
            <span className="font-semibold text-[#202124]">সময়সীমা:</span>
            <select
              value={dateFilter}
              onChange={(e) => handleDateChange(e.target.value)}
              className="bg-[#f8f9fa] border border-[#CCD4DD] rounded px-2.5 py-1 text-xs text-[#202124] focus:outline-none focus:ring-1 focus:ring-[#0756A4]"
            >
              <option value="all">সব সময়</option>
              <option value="today">গত ২৪ ঘণ্টা</option>
              <option value="week">গত ৭ দিন</option>
              <option value="month">গত ৩০ দিন</option>
            </select>
          </div>

          {/* Result Count */}
          <div className="ml-auto text-[#626B75]">
            মোট ফলাফল: <strong className="text-[#0756A4]">{results.length}টি</strong>
          </div>
        </div>
      </div>

      {/* Results Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-4">
          {results.length === 0 ? (
            <div className="bg-white rounded-lg border border-[#E2E6EB] p-10 text-center text-[#626B75]">
              <FileQuestion className="w-12 h-12 mx-auto text-gray-400 mb-3" />
              <h3 className="text-base font-bold text-[#202124] mb-1">
                কোনো ফলাফল পাওয়া যায়নি
              </h3>
              <p className="text-xs text-gray-500 max-w-md mx-auto">
                আপনার অনুসন্ধানের সঙ্গে মেলে এমন কোনো সংবাদ পাওয়া যায়নি। অনুগ্রহ করে বানান পরিবর্তন করুন অথবা অন্য কোনো প্রাসঙ্গিক শব্দ দিয়ে চেষ্টা করুন।
              </p>
            </div>
          ) : (
            results.map((art) => (
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
