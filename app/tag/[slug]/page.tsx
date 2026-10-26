import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticlesByTag, TAGS } from "@/services/newsService";
import HorizontalNewsCard from "@/components/news/HorizontalNewsCard";
import AdvertisementPlaceholder from "@/components/news/AdvertisementPlaceholder";
import { Tag as TagIcon, ChevronRight } from "lucide-react";

interface TagPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { slug } = await params;
  const decoded = decodeURIComponent(slug);
  const tag = TAGS.find((t) => t.slug === slug) || { name: decoded, slug };

  return {
    title: `#${tag.name} বিষয়ক সংবাদ | বরিশালের প্রাণ`,
    description: `${tag.name} সম্পর্কিত প্রকাশিত সকল সংবাদ ও বিশ্লেষণ।`,
  };
}

export async function generateStaticParams() {
  return TAGS.map((t) => ({ slug: t.slug }));
}

export default async function TagPage({ params }: TagPageProps) {
  const { slug } = await params;
  const decoded = decodeURIComponent(slug);
  const tag = TAGS.find((t) => t.slug === slug) || { name: decoded, slug };

  const articles = await getArticlesByTag(slug);

  return (
    <div className="space-y-6">
      <nav aria-label="ব্রেডক্রাম্ব" className="text-xs text-[#626B75] flex items-center gap-1.5">
        <Link href="/" className="hover:text-[#0756A4] transition-colors">
          প্রচ্ছদ
        </Link>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="text-[#0756A4] font-semibold">ট্যাগ: #{tag.name}</span>
      </nav>

      <div className="bg-white border-b-2 border-[#0756A4] rounded-lg p-5 shadow-xs flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TagIcon className="w-6 h-6 text-[#0756A4]" />
          <div>
            <h1 className="text-2xl font-extrabold text-[#0756A4]">
              #{tag.name}
            </h1>
            <p className="text-xs sm:text-sm text-[#626B75]">
              এই ট্যাগযুক্ত মোট {articles.length}টি সংবাদ প্রকাশিত হয়েছে।
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-3">
          {articles.length === 0 ? (
            <div className="bg-white rounded-lg border border-[#E2E6EB] p-8 text-center text-[#626B75]">
              <p className="text-sm font-semibold">এই ট্যাগে বর্তমানে কোনো সংবাদ নেই।</p>
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
