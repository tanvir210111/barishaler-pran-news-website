import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  getArticleBySlug,
  getAllArticles,
  getArticlesByCategory,
  getLatestArticles,
  getPopularArticles,
} from "@/services/newsService";
import ArticleToolbarContainer from "./ArticleToolbarContainer";
import CommentSection from "@/components/article/CommentSection";
import PopularNewsItem from "@/components/news/PopularNewsItem";
import LatestNewsItem from "@/components/news/LatestNewsItem";
import HorizontalNewsCard from "@/components/news/HorizontalNewsCard";
import AdvertisementPlaceholder from "@/components/news/AdvertisementPlaceholder";
import {
  Clock,
  User,
  Calendar,
  ChevronRight,
  Eye,
  ArrowLeft,
  ArrowRight,
  Tag as TagIcon,
  BookOpen,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "সংবাদটি পাওয়া যায়নি | বরিশালের প্রাণ",
    };
  }

  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      locale: "bn_BD",
      images: [
        {
          url: article.featuredImage.url,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const allArticles = await getAllArticles();
  const currentIndex = allArticles.findIndex((a) => a.id === article.id);
  const prevArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

  const relatedArticles = (await getArticlesByCategory(article.category.slug))
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  const latestArticles = (await getLatestArticles(6)).filter((a) => a.id !== article.id);
  const popularArticles = await getPopularArticles(5);

  return (
    <div className="py-2">
      {/* Breadcrumb Navigation */}
      <nav aria-label="ব্রেডক্রাম্ব" className="text-xs text-[#626B75] mb-4 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-[#0756A4] transition-colors">
          প্রচ্ছদ
        </Link>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <Link href={`/category/${article.category.slug}`} className="hover:text-[#0756A4] transition-colors font-medium">
          {article.category.name}
        </Link>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="text-gray-400 truncate max-w-xs sm:max-w-md">
          {article.title}
        </span>
      </nav>

      {/* Main Grid: Article Column (8) + Sidebar (4) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <article className="lg:col-span-8 bg-white rounded-lg border border-[#E2E6EB] p-4 sm:p-7 shadow-xs">
          {/* Category Tag */}
          <div className="mb-3">
            <Link
              href={`/category/${article.category.slug}`}
              className="inline-block bg-[#0756A4] text-white text-xs font-semibold px-3 py-1 rounded"
            >
              {article.category.name}
            </Link>
          </div>

          {/* Bengali Headline */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#202124] leading-tight mb-4 tracking-tight">
            {article.title}
          </h1>

          {/* Lead Summary */}
          <p className="text-base sm:text-lg text-[#626B75] font-medium leading-relaxed mb-4 pb-4 border-b border-[#E2E6EB]">
            {article.summary}
          </p>

          {/* Metadata Row: Author, Date, Reading Time */}
          <div className="flex flex-wrap items-center justify-between text-xs text-[#626B75] gap-3 mb-5">
            <div className="flex items-center gap-3">
              <Link
                href={`/author/${article.author.slug}`}
                className="flex items-center gap-2 group hover:text-[#0756A4]"
              >
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-200">
                  <Image
                    src={article.author.avatar}
                    alt={article.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="font-bold text-[#202124] group-hover:text-[#0756A4] block text-sm">
                    {article.author.name}
                  </span>
                  <span className="text-[11px] text-gray-500 font-normal">
                    {article.author.role}
                  </span>
                </div>
              </Link>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#0756A4]" />
                {article.publishedAtBengali}
              </span>
              {article.updatedAt && (
                <span className="text-[11px] text-gray-400 hidden sm:inline">
                  (আপডেট: {article.updatedAt})
                </span>
              )}
              <span className="flex items-center gap-1 bg-[#EAF2FB] text-[#0756A4] px-2 py-0.5 rounded-full font-medium">
                <BookOpen className="w-3 h-3" />
                পড়ার সময়: {article.readingTimeMinutes} মিনিট
              </span>
            </div>
          </div>

          {/* Client-side Article Toolbar (Font Sizing, Print, Sharing) */}
          <ArticleToolbarContainer
            title={article.title}
            contentBlocks={article.content}
            featuredImage={article.featuredImage}
          />

          {/* Tags Section */}
          {article.tags && article.tags.length > 0 && (
            <div className="my-6 pt-4 border-t border-[#E2E6EB] flex items-center gap-2 flex-wrap">
              <TagIcon className="w-4 h-4 text-[#0756A4]" />
              <span className="text-xs font-bold text-[#202124]">ট্যাগ:</span>
              {article.tags.map((tag) => (
                <Link
                  key={tag.slug}
                  href={`/tag/${tag.slug}`}
                  className="text-xs bg-[#f0f3f6] hover:bg-[#EAF2FB] hover:text-[#0756A4] text-[#626B75] px-2.5 py-1 rounded transition-colors"
                >
                  #{tag.name}
                </Link>
              ))}
            </div>
          )}

          {/* Author Card Box */}
          <div className="my-6 p-4 bg-[#f8f9fa] border border-[#E2E6EB] rounded-lg flex items-start gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-gray-300">
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Link
                  href={`/author/${article.author.slug}`}
                  className="font-bold text-sm text-[#0756A4] hover:underline"
                >
                  {article.author.name}
                </Link>
                <span className="text-xs text-gray-500">({article.author.role})</span>
              </div>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                {article.author.bio}
              </p>
              <Link
                href={`/author/${article.author.slug}`}
                className="inline-block text-xs font-semibold text-[#087A43] hover:underline mt-2"
              >
                এই লেখকের সব সংবাদ &rarr;
              </Link>
            </div>
          </div>

          {/* Previous / Next Article Navigation */}
          <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#E2E6EB]">
            {prevArticle ? (
              <Link
                href={`/news/${prevArticle.slug}`}
                className="p-3 rounded border border-[#E2E6EB] hover:border-[#0756A4] hover:bg-[#EAF2FB]/30 transition-all block group"
              >
                <span className="text-[11px] text-[#626B75] flex items-center gap-1 group-hover:text-[#0756A4]">
                  <ArrowLeft className="w-3 h-3" />
                  পূর্ববর্তী সংবাদ
                </span>
                <p className="text-xs font-bold text-[#202124] line-clamp-1 mt-1 group-hover:text-[#0756A4]">
                  {prevArticle.title}
                </p>
              </Link>
            ) : <div />}

            {nextArticle && (
              <Link
                href={`/news/${nextArticle.slug}`}
                className="p-3 rounded border border-[#E2E6EB] hover:border-[#0756A4] hover:bg-[#EAF2FB]/30 transition-all block text-right group sm:col-start-2"
              >
                <span className="text-[11px] text-[#626B75] flex items-center justify-end gap-1 group-hover:text-[#0756A4]">
                  পরবর্তী সংবাদ
                  <ArrowRight className="w-3 h-3" />
                </span>
                <p className="text-xs font-bold text-[#202124] line-clamp-1 mt-1 group-hover:text-[#0756A4]">
                  {nextArticle.title}
                </p>
              </Link>
            )}
          </div>

          {/* Related News Section */}
          {relatedArticles.length > 0 && (
            <div className="my-8 pt-4 border-t border-[#E2E6EB]">
              <h3 className="text-lg font-bold text-[#0756A4] mb-4 flex items-center gap-2">
                <span className="w-2 h-4 bg-[#087A43] inline-block rounded-xs" />
                সম্পর্কিত সংবাদ
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedArticles.map((rel) => (
                  <div key={rel.id} className="group">
                    <div className="relative aspect-[16/10] w-full rounded overflow-hidden mb-2 bg-gray-100">
                      <Image
                        src={rel.featuredImage.url}
                        alt={rel.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <Link
                      href={`/news/${rel.slug}`}
                      className="text-xs font-bold text-[#202124] group-hover:text-[#0756A4] line-clamp-2 leading-snug"
                    >
                      {rel.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* In-Article Advertisement */}
          <AdvertisementPlaceholder size="banner" className="my-6" />

          {/* Interactive Comment Section */}
          <CommentSection articleId={article.id} />
        </article>

        {/* Sidebar Column */}
        <aside className="lg:col-span-4 space-y-6 article-sidebar">
          {/* Sidebar Ad */}
          <AdvertisementPlaceholder size="sidebar" />

          {/* Latest News */}
          <div className="bg-white rounded-lg border border-[#E2E6EB] p-4 shadow-xs">
            <h3 className="font-bold text-base text-[#0756A4] border-b-2 border-[#0756A4] pb-2 mb-3 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#0756A4]" />
              সর্বশেষ খবর
            </h3>
            <div className="divide-y divide-[#E2E6EB]">
              {latestArticles.map((art) => (
                <LatestNewsItem key={art.id} article={art} />
              ))}
            </div>
          </div>

          {/* Popular News */}
          <div className="bg-white rounded-lg border border-[#E2E6EB] p-4 shadow-xs">
            <h3 className="font-bold text-base text-[#D62828] border-b-2 border-[#D62828] pb-2 mb-3 flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-[#D62828]" />
              সর্বাধিক পঠিত
            </h3>
            <div>
              {popularArticles.map((art, idx) => (
                <PopularNewsItem key={art.id} article={art} rank={idx + 1} />
              ))}
            </div>
          </div>

          {/* Sticky Rectangle Ad */}
          <AdvertisementPlaceholder size="medium-rectangle" />
        </aside>
      </div>
    </div>
  );
}
