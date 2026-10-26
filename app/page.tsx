import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  getLeadArticle,
  getFeaturedArticles,
  getLatestArticles,
  getPopularArticles,
  getArticlesByCategory,
  getGalleryItems,
  getVideoItems,
} from "@/services/newsService";
import { Article } from "@/types/news";

const getImg = (img: any): string => {
  if (typeof img === "string" && img) return img;
  if (img && typeof img === "object" && img.url) return img.url;
  return "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800";
};
import LeadNewsCard from "@/components/news/LeadNewsCard";
import MediumNewsCard from "@/components/news/MediumNewsCard";
import CompactNewsItem from "@/components/news/CompactNewsItem";
import HorizontalNewsCard from "@/components/news/HorizontalNewsCard";
import TabbedNewsWidget from "@/components/news/TabbedNewsWidget";
import DualCategorySection from "@/components/news/DualCategorySection";
import CategoryNewsSection from "@/components/news/CategoryNewsSection";
import PopularScrollSection from "@/components/news/PopularScrollSection";
import AdvertisementPlaceholder from "@/components/news/AdvertisementPlaceholder";
import NewsletterForm from "@/components/news/NewsletterForm";
import ShareButtons from "@/components/news/ShareButtons";
import { ChevronRight, Play, Camera, Flame, Sparkles, TrendingUp, Clock, User, Newspaper } from "lucide-react";

export default async function HomePage() {
  const leadArticle = await getLeadArticle();
  const featuredArticles = await getFeaturedArticles(10);
  const latestArticles = await getLatestArticles(25);
  const popularArticles = await getPopularArticles(10);
  const galleryItems = (await getGalleryItems()).slice(0, 4);
  const videoItems = (await getVideoItems()).slice(0, 3);

  // Category specific articles
  const nationalArticles = await getArticlesByCategory("national");
  const politicsArticles = await getArticlesByCategory("politics");

  // National section articles (1 Big Lead on Left + 3 Horizontal Cards on Right)
  const nationalLeadArticle = nationalArticles[0] || leadArticle;
  const nationalSideArticles = nationalArticles.slice(1, 4).length > 0
    ? nationalArticles.slice(1, 4)
    : featuredArticles.slice(0, 3);

  // Popular articles for marquee
  const popularList = popularArticles.length > 0 ? popularArticles : latestArticles.slice(0, 8);

  // Latest News mapping:
  // Left part: 9 items (Image on Top, Title & Time below) in a 3x3 grid
  const leftLatestArticles = latestArticles.slice(0, 9);

  // Right part: 6 items (Title on Left, Image on Right)
  const rightLatestArticles = latestArticles.slice(9, 15);

  const internationalArticles = await getArticlesByCategory("international");
  const sportsArticles = await getArticlesByCategory("sports");
  const entertainmentArticles = await getArticlesByCategory("entertainment");
  const countrywideArticles = await getArticlesByCategory("countrywide");
  const campusArticles = await getArticlesByCategory("campus");
  const islamArticles = await getArticlesByCategory("islam");
  const opinionArticles = await getArticlesByCategory("opinion");
  const economyArticles = await getArticlesByCategory("economy");
  const techArticles = await getArticlesByCategory("technology");
  const healthArticles = await getArticlesByCategory("health");

  return (
    <div className="space-y-8 pb-10">
      {/* 1. Top Leaderboard Advertisement */}
      <AdvertisementPlaceholder
        size="leaderboard"
        className="mt-1 mb-2"
        imageUrl="https://onenewsexpress.com/uploads/5466130579866378084.gif"
        href="https://onenewsexpress.com"
        altText="বিজ্ঞাপন ব্যানার"
      />

      {/* 2. Main Latest News Section (Left Part: 9 cards with larger headlines | Right Part: Video Ad + 5 cards) */}
      <section className="bg-white rounded-lg border border-[#E2E6EB] shadow-xs p-4 sm:p-5">
        <div className="border-b-2 border-[#0756A4] pb-2 flex items-center justify-between mb-4">
          <span className="text-base sm:text-lg font-bold text-[#0756A4] flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#0756A4]" />
            <span>সর্বশেষ সংবাদ</span>
          </span>
          <Link
            href="/latest"
            className="text-xs text-[#626B75] hover:text-[#0756A4] font-medium flex items-center gap-1 transition-colors"
          >
            <span>সব খবর</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-stretch">
          {/* Left Part: 9 cards in 3-column grid (Original dimensions, fonts, line-clamp-3, and gaps restored) */}
          <div className="lg:col-span-8 lg:border-r lg:border-[#E2E6EB] lg:pr-4 xl:pr-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6">
              {leftLatestArticles.map((art) => (
                <article key={art.id} className="group flex flex-col justify-between h-full">
                  <div>
                    <Link
                      href={`/news/${art.slug}`}
                      className="block relative aspect-[16/10] w-full overflow-hidden rounded-xs bg-gray-100 mb-2.5"
                    >
                      <Image
                        src={getImg(art.featuredImage)}
                        alt={art.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </Link>
                    <Link href={`/news/${art.slug}`}>
                      <h3 className="font-bold text-[18px] sm:text-[19px] lg:text-[20px] leading-[1.35] text-[#202124] group-hover:text-[#0756A4] transition-colors line-clamp-3 mb-2">
                        {art.title}
                      </h3>
                    </Link>
                  </div>
                  <div className="flex items-center gap-1.5 text-[12.5px] text-[#626B75] mt-auto pt-1">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span>{art.publishedAtBengali}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right Part: Larger Banner on Top + Original 6 Latest News cards vertically stacked */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            {/* 1. Larger Advertisement Banner within right column, aspect 16:9, w-full */}
            <div className="w-full mb-3">
              <AdvertisementPlaceholder
                size="video"
                videoUrl="https://cdn.dribbble.com/userupload/49248603/file/b200de74a27bbf01ab5276fd6e19ddec.mp4"
                aspectRatio="aspect-[16/9]"
                altText="বিজ্ঞাপন"
                className="!my-0 w-full"
              />
            </div>

            {/* 2. Original Latest News sidebar (Original item sizes, thumbnails w-24 sm:w-26, headline sizes restored) */}
            <div className="space-y-2 sm:space-y-2.5 divide-y divide-[#E2E6EB]">
              {rightLatestArticles.map((art, idx) => (
                <Link
                  key={art.id}
                  href={`/news/${art.slug}`}
                  className={`group flex items-start justify-between gap-3 ${idx > 0 ? "pt-2 sm:pt-2.5" : ""}`}
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[16.5px] sm:text-[17px] font-bold text-[#202124] group-hover:text-[#0756A4] line-clamp-2 leading-[1.3] transition-colors mb-1">
                      {art.title}
                    </h3>
                    <div className="flex items-center gap-1 text-[12px] sm:text-[12.5px] text-[#626B75]">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      <span>{art.publishedAtBengali}</span>
                    </div>
                  </div>
                  <div className="relative w-24 sm:w-26 aspect-[16/10] shrink-0 rounded-xs overflow-hidden bg-gray-100 border border-gray-100">
                    <Image
                      src={getImg(art.featuredImage)}
                      alt={art.title}
                      fill
                      sizes="(max-width: 640px) 96px, 104px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Most Read Section (সর্বাধিক পঠিত) - Above National, User-drag/swipe scroll with visual indicators */}
      <PopularScrollSection articles={popularList} />

      {/* 4. National News Showcase (জাতীয়) - Matching User Screenshot 1 Style (No gaps between right 3 cards, matching height) */}
      <section className="bg-white rounded-lg border border-[#E2E6EB] shadow-xs p-4 sm:p-5">
        {/* Header with red underline accent under the title */}
        <div className="border-b border-[#E2E6EB] flex items-center justify-between mb-4">
          <div className="border-b-2 border-[#D62828] pb-1.5 -mb-[1px]">
            <h2 className="text-xl sm:text-2xl font-bold text-[#202124]">জাতীয়</h2>
          </div>
          <Link
            href="/category/national"
            className="text-xs sm:text-sm text-[#626B75] hover:text-[#0756A4] font-medium flex items-center gap-0.5 transition-colors pb-1"
          >
            <span>সব খবর</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 2-Column Grid: Left lead matches right 3 items height with perfect alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-start">
          {/* Left Column: 1 Lead Story (Compact image, headline only without details) */}
          <div className="lg:col-span-7">
            <article className="group">
              <Link
                href={`/news/${nationalLeadArticle.slug}`}
                className="block relative aspect-[16/7] sm:aspect-[16/7.5] w-full overflow-hidden rounded-xs bg-gray-100 mb-2"
              >
                <Image
                  src={getImg(nationalLeadArticle.featuredImage)}
                  alt={nationalLeadArticle.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <h3 className="text-xl sm:text-[22px] font-bold text-[#202124] group-hover:text-[#0756A4] transition-colors leading-[1.3] mb-2">
                <Link href={`/news/${nationalLeadArticle.slug}`}>
                  {nationalLeadArticle.title}
                </Link>
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-[#626B75]">
                <Clock className="w-3.5 h-3.5 text-gray-400" />
                <span>{nationalLeadArticle.publishedAtBengali}</span>
              </div>
            </article>
          </div>

          {/* Right Column: 3 Horizontal Cards Stacked Vertically (Larger images & headlines, aligned with left) */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-[#E2E6EB] lg:border-l lg:border-[#E2E6EB] lg:pl-6">
            {nationalSideArticles.map((art, idx) => (
              <Link
                key={art.id}
                href={`/news/${art.slug}`}
                className={`group flex items-start gap-3.5 sm:gap-4 ${
                  idx === 0 ? "pb-3.5 sm:pb-4" : idx === 2 ? "pt-3.5 sm:pt-4" : "py-3.5 sm:py-4"
                }`}
              >
                <div className="relative w-36 sm:w-40 lg:w-44 aspect-[16/10] shrink-0 rounded-xs overflow-hidden bg-gray-100 border border-gray-100">
                  <Image
                    src={getImg(art.featuredImage)}
                    alt={art.title}
                    fill
                    sizes="(max-width: 640px) 144px, 176px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-[16.5px] sm:text-[17.5px] font-bold text-[#202124] group-hover:text-[#0756A4] line-clamp-2 leading-snug transition-colors mb-2">
                    {art.title}
                  </h4>
                  <div className="flex items-center gap-1 text-xs sm:text-[12.5px] text-[#626B75]">
                    <Clock className="w-3.5 h-3.5 text-gray-400" />
                    <span>{art.publishedAtBengali}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Daraz 11.11 Promotional Banner */}
      <AdvertisementPlaceholder
        size="leaderboard"
        className="my-3"
        imageUrl="/images/ads/daraz-11-11.png"
        href="https://www.daraz.com.bd"
        altText="দারাজ ১১.১১ ক্যাম্পেইন"
      />

      {/* 3. Dual Section Pair: আন্তর্জাতিক (International) & রাজনীতি (Politics) */}
      <section>
        <DualCategorySection
          firstCategory={{
            title: "আন্তর্জাতিক সংবাদ",
            slug: "international",
            articles: [
              ...internationalArticles,
              ...featuredArticles.filter((a) => a.category.slug === "international" || a.category.slug === "economy"),
              ...latestArticles,
            ].filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i).slice(0, 5),
          }}
          secondCategory={{
            title: "রাজনীতি ও নির্বাচন",
            slug: "politics",
            articles: [
              ...politicsArticles,
              ...featuredArticles.filter((a) => a.category.slug === "politics" || a.category.slug === "national"),
              ...latestArticles,
            ].filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i).slice(0, 5),
          }}
        />
      </section>

      {/* 4. Middle Advertisement Banner (Replacing Opinion & Editorial section) */}
      <AdvertisementPlaceholder
        size="leaderboard"
        className="my-6"
        imageUrl="https://onenewsexpress.com/uploads/5342957609171149330.gif"
        href="https://onenewsexpress.com"
        altText="বিজ্ঞাপন ব্যানার"
      />

      {/* 5. Dual Section Pair: খেলাধুলা (Sports) & বিনোদন (Entertainment) */}
      <section>
        <DualCategorySection
          firstCategory={{
            title: "খেলাধুলা",
            slug: "sports",
            articles: [
              ...sportsArticles,
              ...popularArticles.filter((a) => a.category.slug === "sports"),
              ...latestArticles,
            ].filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i).slice(0, 5),
          }}
          secondCategory={{
            title: "বিনোদন ও শোবিজ",
            slug: "entertainment",
            articles: [
              ...entertainmentArticles,
              ...popularArticles.filter((a) => a.category.slug === "entertainment"),
              ...latestArticles,
            ].filter((v, i, a) => a.findIndex((t) => t.id === v.id) === i).slice(0, 5),
          }}
        />
      </section>

      {/* 6. Middle Broad Banner Advertisement */}
      <AdvertisementPlaceholder
        size="leaderboard"
        className="my-6"
        imageUrl="https://onenewsexpress.com/uploads/18372985650664559018-1.gif"
        href="https://onenewsexpress.com"
        altText="বিজ্ঞাপন ব্যানার"
      />

      {/* 7. ৩-কলাম বিভাগীয় গ্রিড: আন্তর্জাতিক, অর্থনীতি ও প্রযুক্তি */}
      <section className="bg-white border border-[#E2E6EB] p-5 shadow-xs">
        <div className="flex items-center justify-between border-b-2 border-[#0756A4] pb-2 mb-5">
          <h2 className="text-xl font-bold text-[#0756A4] flex items-center gap-2">
            <span className="w-2.5 h-5 bg-[#087A43] inline-block rounded-xs"></span>
            <span>আন্তর্জাতিক, অর্থনীতি ও প্রযুক্তি</span>
          </h2>
          <span className="text-xs text-[#626B75]">বিশ্ব ও বাণিজ্যিক খবরের চালচিত্র</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#E2E6EB]">
          {/* International */}
          <div className="space-y-3 pt-3 md:pt-0">
            <div className="flex items-center justify-between pb-1 border-b border-gray-100">
              <span className="text-sm font-bold text-[#0756A4]">আন্তর্জাতিক</span>
              <Link href="/category/international" className="text-xs text-[#626B75] hover:text-[#0756A4]">আরও →</Link>
            </div>
            {internationalArticles[0] && (
              <article className="group">
                <Link href={`/news/${internationalArticles[0].slug}`} className="block relative aspect-[16/10] overflow-hidden mb-2 rounded-xs bg-gray-100">
                  <Image
                    src={getImg(internationalArticles[0].featuredImage)}
                    alt={internationalArticles[0].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <Link href={`/news/${internationalArticles[0].slug}`}>
                  <h4 className="font-bold text-sm text-[#202124] group-hover:text-[#0756A4] transition-colors line-clamp-2 leading-snug">
                    {internationalArticles[0].title}
                  </h4>
                </Link>
              </article>
            )}
            <div className="pt-2 border-t border-[#E2E6EB] divide-y divide-[#f0f2f5]">
              {internationalArticles.slice(1, 3).map((art) => (
                <Link
                  key={art.id}
                  href={`/news/${art.slug}`}
                  className="group flex items-start gap-2.5 py-2 first:pt-1 last:pb-0"
                >
                  <div className="relative w-16 h-12 shrink-0 rounded-xs overflow-hidden bg-gray-100">
                    <Image
                      src={getImg(art.featuredImage)}
                      alt={art.title}
                      fill
                      sizes="64px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-[12.5px] font-semibold text-[#202124] group-hover:text-[#0756A4] line-clamp-2 leading-snug transition-colors">
                      {art.title}
                    </h5>
                    <div className="flex items-center gap-1.5 mt-1 text-[10.5px] text-[#626B75]">
                      <Clock className="w-3 h-3 text-gray-400" />
                      <span>{art.publishedAtBengali.split(",")[0]}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Economy */}
          <div className="space-y-3 pt-4 md:pt-0 md:pl-6">
            <div className="flex items-center justify-between pb-1 border-b border-gray-100">
              <span className="text-sm font-bold text-[#0756A4]">অর্থনীতি ও বাণিজ্য</span>
              <Link href="/category/economy" className="text-xs text-[#626B75] hover:text-[#0756A4]">আরও →</Link>
            </div>
            {economyArticles[0] && (
              <article className="group">
                <Link href={`/news/${economyArticles[0].slug}`} className="block relative aspect-[16/10] overflow-hidden mb-2 rounded-xs bg-gray-100">
                  <Image
                    src={getImg(economyArticles[0].featuredImage)}
                    alt={economyArticles[0].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <Link href={`/news/${economyArticles[0].slug}`}>
                  <h4 className="font-bold text-sm text-[#202124] group-hover:text-[#0756A4] transition-colors line-clamp-2 leading-snug">
                    {economyArticles[0].title}
                  </h4>
                </Link>
              </article>
            )}
            <div className="pt-2 border-t border-[#E2E6EB] divide-y divide-[#f0f2f5]">
              {economyArticles.slice(1, 3).map((art) => (
                <Link
                  key={art.id}
                  href={`/news/${art.slug}`}
                  className="group flex items-start gap-2.5 py-2 first:pt-1 last:pb-0"
                >
                  <div className="relative w-16 h-12 shrink-0 rounded-xs overflow-hidden bg-gray-100">
                    <Image
                      src={getImg(art.featuredImage)}
                      alt={art.title}
                      fill
                      sizes="64px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-[12.5px] font-semibold text-[#202124] group-hover:text-[#0756A4] line-clamp-2 leading-snug transition-colors">
                      {art.title}
                    </h5>
                    <div className="flex items-center gap-1.5 mt-1 text-[10.5px] text-[#626B75]">
                      <Clock className="w-3 h-3 text-gray-400" />
                      <span>{art.publishedAtBengali.split(",")[0]}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Technology */}
          <div className="space-y-3 pt-4 md:pt-0 md:pl-6">
            <div className="flex items-center justify-between pb-1 border-b border-gray-100">
              <span className="text-sm font-bold text-[#0756A4]">বিজ্ঞান ও প্রযুক্তি</span>
              <Link href="/category/technology" className="text-xs text-[#626B75] hover:text-[#0756A4]">আরও →</Link>
            </div>
            {techArticles[0] && (
              <article className="group">
                <Link href={`/news/${techArticles[0].slug}`} className="block relative aspect-[16/10] overflow-hidden mb-2 rounded-xs bg-gray-100">
                  <Image
                    src={getImg(techArticles[0].featuredImage)}
                    alt={techArticles[0].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <Link href={`/news/${techArticles[0].slug}`}>
                  <h4 className="font-bold text-sm text-[#202124] group-hover:text-[#0756A4] transition-colors line-clamp-2 leading-snug">
                    {techArticles[0].title}
                  </h4>
                </Link>
              </article>
            )}
            <div className="pt-2 border-t border-[#E2E6EB] divide-y divide-[#f0f2f5]">
              {techArticles.slice(1, 3).map((art) => (
                <Link
                  key={art.id}
                  href={`/news/${art.slug}`}
                  className="group flex items-start gap-2.5 py-2 first:pt-1 last:pb-0"
                >
                  <div className="relative w-16 h-12 shrink-0 rounded-xs overflow-hidden bg-gray-100">
                    <Image
                      src={getImg(art.featuredImage)}
                      alt={art.title}
                      fill
                      sizes="64px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-[12.5px] font-semibold text-[#202124] group-hover:text-[#0756A4] line-clamp-2 leading-snug transition-colors">
                      {art.title}
                    </h5>
                    <div className="flex items-center gap-1.5 mt-1 text-[10.5px] text-[#626B75]">
                      <Clock className="w-3 h-3 text-gray-400" />
                      <span>{art.publishedAtBengali.split(",")[0]}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. মাল্টিমিডিয়া সেকশন: ছবি গ্যালারি ও ভিডিও সংবাদ */}
      <section className="bg-[#1a2332] text-white p-6 rounded-xs shadow-md">
        {/* Multimedia Header */}
        <div className="flex items-center justify-between border-b border-gray-700 pb-3 mb-6">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-sm bg-[#D62828] text-white">
              <Camera className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold tracking-tight">
              ছবি ও ভিডিও সংবাদ
            </h2>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <Link href="/gallery" className="text-blue-300 hover:text-white flex items-center gap-1">
              <span>সব ছবি</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/videos" className="text-red-400 hover:text-white flex items-center gap-1">
              <span>সব ভিডিও</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Multimedia Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Gallery Items: 7 Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {galleryItems.slice(0, 2).map((item) => (
              <div key={item.id} className="group relative overflow-hidden bg-gray-900 border border-gray-800 rounded-xs">
                <Link href="/gallery" className="block relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-3">
                    <span className="text-[10px] bg-[#0756A4] text-white font-bold px-2 py-0.5 rounded-xs w-max mb-1">
                      {item.category}
                    </span>
                    <h3 className="text-xs sm:text-sm font-bold text-white line-clamp-2 group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Video Items: 5 Columns */}
          <div className="lg:col-span-5 space-y-3">
            {videoItems.slice(0, 2).map((vid) => (
              <div key={vid.id} className="flex gap-3 bg-gray-800/60 p-2.5 rounded-xs border border-gray-700/60 group hover:border-[#D62828] transition-colors">
                <div className="relative w-28 h-20 shrink-0 overflow-hidden rounded-xs bg-black">
                  <Image
                    src={vid.thumbnail}
                    alt={vid.title}
                    fill
                    sizes="112px"
                    className="object-cover opacity-85 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#D62828]/90 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 text-white fill-current ml-0.5" />
                    </div>
                  </div>
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <Link href="/videos" className="text-xs sm:text-sm font-bold text-white group-hover:text-red-400 line-clamp-2 leading-snug">
                    {vid.title}
                  </Link>
                  <div className="flex items-center gap-2 text-[11px] text-gray-400">
                    <span className="text-[#087A43] font-semibold">{vid.category}</span>
                    <span>•</span>
                    <span>{vid.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. সারাদেশ, ক্যাম্পাস ও ইসলাম (Countrywide, Campus & Islam) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
        <CategoryNewsSection
          category={{ id: "cat-countrywide", name: "সারাদেশ", slug: "countrywide" }}
          articles={countrywideArticles}
        />
        <CategoryNewsSection
          category={{ id: "cat-campus", name: "ক্যাম্পাস", slug: "campus" }}
          articles={campusArticles}
        />
        <CategoryNewsSection
          category={{ id: "cat-islam", name: "ইসলাম", slug: "islam" }}
          articles={islamArticles}
        />
      </section>

      {/* 10. Newsletter Form */}
      <div className="pt-4">
        <NewsletterForm />
      </div>
    </div>
  );
}
