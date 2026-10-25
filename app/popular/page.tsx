import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { getPopularArticles, getLatestArticles } from "@/services/newsService";
import HorizontalNewsCard from "@/components/news/HorizontalNewsCard";
import LatestNewsItem from "@/components/news/LatestNewsItem";
import AdvertisementPlaceholder from "@/components/news/AdvertisementPlaceholder";
import { Flame, ChevronRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "সর্বাধিক পঠিত সংবাদ | বরিশালের প্রাণ",
  description: "পাঠকদের পছন্দের শীর্ষে থাকা সর্বাধিক পঠিত ও আলোচিত সংবাদগুলো পড়ুন।",
};

export default async function PopularNewsPage() {
  const popularArticles = await getPopularArticles(15);
  const latestArticles = await getLatestArticles(5);

  return (
    <div className="space-y-6">
      <nav aria-label="ব্রেডক্রাম্ব" className="text-xs text-[#626B75] flex items-center gap-1.5">
        <Link href="/" className="hover:text-[#0756A4] transition-colors">
          প্রচ্ছদ
        </Link>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="text-[#D62828] font-semibold">সর্বাধিক পঠিত</span>
      </nav>

      <div className="bg-white border-b-2 border-[#D62828] rounded-lg p-5 shadow-xs flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Flame className="w-6 h-6 text-[#D62828]" />
          <div>
            <h1 className="text-2xl font-extrabold text-[#D62828]">
              সর্বাধিক পঠিত সংবাদ
            </h1>
            <p className="text-xs sm:text-sm text-[#626B75]">
              গত ২৪ ঘণ্টায় পাঠকদের সবচেয়ে বেশি দৃষ্টি আকর্ষণ করা আলোচিত সংবাদ ও বিশ্লেষণ।
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-3">
          {popularArticles.map((art, idx) => (
            <div key={art.id} className="relative">
              <span className="absolute -left-2 -top-2 z-10 w-6 h-6 rounded-full bg-[#D62828] text-white text-xs font-bold flex items-center justify-center shadow">
                {idx + 1}
              </span>
              <HorizontalNewsCard article={art} />
            </div>
          ))}
        </div>

        <aside className="lg:col-span-4 space-y-6">
          <AdvertisementPlaceholder size="sidebar" />
          <div className="bg-white rounded-lg border border-[#E2E6EB] p-4 shadow-xs">
            <h3 className="font-bold text-base text-[#0756A4] border-b-2 border-[#0756A4] pb-2 mb-3 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#0756A4]" />
              তাজা খবর
            </h3>
            <div className="divide-y divide-[#E2E6EB]">
              {latestArticles.map((art) => (
                <LatestNewsItem key={art.id} article={art} />
              ))}
            </div>
          </div>
          <AdvertisementPlaceholder size="medium-rectangle" />
        </aside>
      </div>
    </div>
  );
}
