import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import {
  getCategoryBySlug,
  getCategories,
  getArticlesByCategory,
  getPopularArticles,
  getLatestArticles,
} from "@/services/newsService";
import LeadNewsCard from "@/components/news/LeadNewsCard";
import MediumNewsCard from "@/components/news/MediumNewsCard";
import HorizontalNewsCard from "@/components/news/HorizontalNewsCard";
import PopularNewsItem from "@/components/news/PopularNewsItem";
import AdvertisementPlaceholder from "@/components/news/AdvertisementPlaceholder";
import { ChevronRight, Flame, Clock } from "lucide-react";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "বিভাগ পাওয়া যায়নি | বরিশালের প্রাণ",
    };
  }

  return {
    title: `${category.name} সংবাদ`,
    description: category.description || `${category.name} বিভাগের সর্বশেষ খবর ও সংবাদ বিশ্লেষণ।`,
  };
}

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const articles = await getArticlesByCategory(slug);
  const popularArticles = await getPopularArticles(5);
  const latestArticles = await getLatestArticles(5);

  const featured = articles[0];
  const secondary = articles.slice(1, 3);
  const remaining = articles.slice(3);

  return (
    <div className="space-y-6">
      {/* Breadcrumb Navigation */}
      <nav aria-label="ব্রেডক্রাম্ব" className="text-xs text-[#626B75] flex items-center gap-1.5">
        <Link href="/" className="hover:text-[#0756A4] transition-colors">
          প্রচ্ছদ
        </Link>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="text-[#0756A4] font-semibold">{category.name}</span>
      </nav>

      {/* Category Header Banner */}
      <div className="bg-white border-b-2 border-[#0756A4] rounded-lg p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-3 h-6 bg-[#087A43] rounded-xs inline-block" />
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0756A4]">
              {category.name}
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-[#626B75]">
            {category.description || `${category.name} বিভাগের সর্বশেষ সংবাদ, বিশেষ প্রতিবেদন ও সম্পাদকীয় বিশ্লেষণ।`}
          </p>
        </div>

        <div className="text-xs text-[#626B75] bg-[#f8f9fa] border border-[#E2E6EB] px-3 py-1.5 rounded-full shrink-0">
          মোট প্রকাশিত প্রতিবেদন: <strong className="text-[#0756A4]">{articles.length}টি</strong>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Content Column (8) */}
        <div className="lg:col-span-8 space-y-6">
          {articles.length === 0 ? (
            <div className="bg-white rounded-lg border border-[#E2E6EB] p-8 text-center text-[#626B75]">
              <p className="text-base font-semibold mb-2">এই মুহূর্তে কোনো সংবাদ নেই।</p>
              <p className="text-xs text-gray-400">খুব শীঘ্রই এই বিভাগে নতুন প্রতিবেদন যুক্ত হবে।</p>
            </div>
          ) : (
            <>
              {/* Category Featured Lead */}
              {featured && (
                <div>
                  <LeadNewsCard article={featured} />
                </div>
              )}

              {/* Secondary 2-Column Grid */}
              {secondary.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {secondary.map((art) => (
                    <MediumNewsCard key={art.id} article={art} showCategory={false} />
                  ))}
                </div>
              )}

              {/* Ad in between */}
              <AdvertisementPlaceholder size="banner" />

              {/* Remaining Stories Feed */}
              {remaining.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-base font-bold text-[#202124] border-b pb-2">
                    আরও সংবাদ
                  </h3>
                  <div className="space-y-3">
                    {remaining.map((art) => (
                      <HorizontalNewsCard key={art.id} article={art} />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        {/* Sidebar Column (4) */}
        <aside className="lg:col-span-4 space-y-6">
          <AdvertisementPlaceholder size="sidebar" />

          {/* Popular in Portal */}
          <div className="bg-white rounded-lg border border-[#E2E6EB] p-4 shadow-xs">
            <h3 className="font-bold text-base text-[#D62828] border-b-2 border-[#D62828] pb-2 mb-3 flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-[#D62828]" />
              সর্বাধিক পঠিত সংবাদ
            </h3>
            <div>
              {popularArticles.map((art, idx) => (
                <PopularNewsItem key={art.id} article={art} rank={idx + 1} />
              ))}
            </div>
          </div>

          {/* Latest News */}
          <div className="bg-white rounded-lg border border-[#E2E6EB] p-4 shadow-xs">
            <h3 className="font-bold text-base text-[#0756A4] border-b-2 border-[#0756A4] pb-2 mb-3 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#0756A4]" />
              তাজা খবর
            </h3>
            <div className="divide-y divide-[#E2E6EB]">
              {latestArticles.map((art) => (
                <HorizontalNewsCard key={art.id} article={art} compact />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
