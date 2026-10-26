import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Article } from "@/types/news";
import { ChevronRight, Clock, User } from "lucide-react";

const getImg = (img: any): string => {
  if (typeof img === "string" && img) return img;
  if (img && typeof img === "object" && img.url) return img.url;
  return "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800";
};

interface CategoryBlockProps {
  title: string;
  slug: string;
  articles: Article[];
}

function CategoryColumn({ title, slug, articles }: CategoryBlockProps) {
  if (!articles || articles.length === 0) return null;
  const lead = articles[0];
  const rest = articles.slice(1, 5);

  return (
    <div className="flex flex-col h-full bg-white border border-[#E2E6EB] p-4 sm:p-5 shadow-xs rounded-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-[#0756A4] pb-2 mb-3.5">
        <h3 className="text-lg font-bold text-[#0756A4] flex items-center gap-2">
          <span className="w-2 h-4 bg-[#087A43] inline-block rounded-xs"></span>
          <span>{title}</span>
        </h3>
        <Link
          href={`/category/${slug}`}
          className="text-xs font-semibold text-[#0756A4] hover:text-[#05407c] hover:underline flex items-center gap-0.5"
        >
          <span>আরও</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Primary Lead Story on top (like জাতীয়) */}
      {lead && (
        <article className="group mb-3 pb-3 border-b border-[#E2E6EB]">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xs bg-gray-100 mb-2.5">
            <Link href={`/news/${lead.slug}`} className="block w-full h-full">
              <Image
                src={getImg(lead.featuredImage)}
                alt={lead.featuredImage?.alt || lead.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <div className="absolute top-2.5 left-2.5">
              <Link
                href={`/category/${lead.category.slug}`}
                className="bg-[#0756A4] hover:bg-[#05407c] text-white text-[11px] font-semibold px-2 py-0.5 rounded shadow transition-colors"
              >
                {lead.category.name}
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-[17px] font-bold text-[#202124] group-hover:text-[#0756A4] transition-colors leading-snug tracking-tight mb-1.5">
              <Link href={`/news/${lead.slug}`}>
                {lead.title}
              </Link>
            </h4>

            <p className="text-xs text-[#626B75] line-clamp-2 mb-2 leading-relaxed">
              {lead.summary}
            </p>

            <div className="pt-2 border-t border-[#f0f2f5] flex items-center justify-between text-[11.5px] text-[#626B75]">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 font-medium text-[#202124]">
                  <User className="w-3.5 h-3.5 text-[#087A43]" />
                  {lead.author.name}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-gray-400" />
                  {lead.publishedAtBengali.split(",")[0]}
                </span>
              </div>
            </div>
          </div>
        </article>
      )}

      {/* Sub News Below: 4 news items in a 2x2 Grid (2 ta 2 ta kore 4 ta news) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 mt-auto">
        {rest.map((art) => (
          <article key={art.id} className="group">
            <Link
              href={`/news/${art.slug}`}
              className="block relative aspect-[16/10] w-full overflow-hidden rounded-xs bg-gray-100 mb-2"
            >
              <Image
                src={getImg(art.featuredImage)}
                alt={art.title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute bottom-1.5 left-1.5 bg-[#087A43] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-xs">
                {art.category.name}
              </span>
            </Link>
            <Link href={`/news/${art.slug}`}>
              <h5 className="font-bold text-[12.5px] leading-snug text-[#202124] group-hover:text-[#0756A4] transition-colors line-clamp-2">
                {art.title}
              </h5>
            </Link>
            <div className="flex items-center gap-1 text-[10.5px] text-[#626B75] mt-1">
              <Clock className="w-3 h-3 text-gray-400" />
              <span>{art.publishedAtBengali.split(",")[0]}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

interface DualCategorySectionProps {
  firstCategory: { title: string; slug: string; articles: Article[] };
  secondCategory: { title: string; slug: string; articles: Article[] };
}

export default function DualCategorySection({
  firstCategory,
  secondCategory,
}: DualCategorySectionProps) {
  const hasFirst = Boolean(firstCategory?.articles && firstCategory.articles.length > 0);
  const hasSecond = Boolean(secondCategory?.articles && secondCategory.articles.length > 0);
  if (!hasFirst && !hasSecond) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-6 items-stretch">
      <CategoryColumn
        title={firstCategory.title}
        slug={firstCategory.slug}
        articles={firstCategory.articles}
      />
      <CategoryColumn
        title={secondCategory.title}
        slug={secondCategory.slug}
        articles={secondCategory.articles}
      />
    </div>
  );
}
