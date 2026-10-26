import React from "react";
import Link from "next/link";
import { Search, Home, ArrowLeft } from "lucide-react";

const SUGGESTED_CATEGORIES = [
  { name: "জাতীয়", slug: "national" },
  { name: "রাজনীতি", slug: "politics" },
  { name: "আন্তর্জাতিক", slug: "international" },
  { name: "খেলাধুলা", slug: "sports" },
  { name: "বিনোদন", slug: "entertainment" },
  { name: "অর্থনীতি", slug: "economy" },
  { name: "প্রযুক্তি", slug: "technology" },
  { name: "সারাদেশ", slug: "countrywide" },
];

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 bg-white rounded-lg border border-[#E2E6EB] shadow-xs my-6">
      <div className="w-16 h-16 rounded-full bg-red-100 text-[#D62828] flex items-center justify-center font-extrabold text-2xl mb-4">
        ৪০৪
      </div>

      <h1 className="text-2xl sm:text-3xl font-extrabold text-[#202124] mb-2">
        দুঃখিত! পৃষ্ঠাটি পাওয়া যায়নি
      </h1>

      <p className="text-sm text-[#626B75] max-w-md mx-auto mb-6 leading-relaxed">
        আপনি যে সংবাদ বা পৃষ্ঠাটি খুঁজছেন তা মুছে ফেলা হয়েছে অথবা ঠিকানাটি সঠিক নয়। অনুগ্রহ করে নিচের বিভাগগুলো ঘুরে দেখুন বা অনুসন্ধান করুন।
      </p>

      {/* Quick Search */}
      <div className="w-full max-w-md mb-8">
        <form action="/search" method="GET" className="flex items-center gap-2">
          <input
            type="text"
            name="q"
            placeholder="সংবাদ অনুসন্ধান করুন..."
            className="flex-1 px-4 py-2 text-sm bg-[#f8f9fa] border border-[#CCD4DD] rounded-md focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#0756A4]"
          />
          <button
            type="submit"
            className="bg-[#0756A4] hover:bg-[#05407c] text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors flex items-center gap-1.5"
          >
            <Search className="w-4 h-4" />
            <span>খুঁজুন</span>
          </button>
        </form>
      </div>

      {/* Suggested Categories */}
      <div className="w-full max-w-xl">
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
          জনপ্রিয় বিভাগসমূহ ঘুরে দেখুন:
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-2">
          {SUGGESTED_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="text-xs bg-[#EAF2FB] hover:bg-[#0756A4] text-[#0756A4] hover:text-white px-3 py-1.5 rounded font-medium transition-colors"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-100">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0756A4] hover:underline"
        >
          <Home className="w-4 h-4" />
          <span>প্রচ্ছদে ফিরে যান</span>
        </Link>
      </div>
    </div>
  );
}
