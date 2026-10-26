import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Article, Category } from "@/types/news";
import { ChevronRight, Clock } from "lucide-react";

const getImg = (img: any): string => {
  if (typeof img === "string" && img) return img;
  if (img && typeof img === "object" && img.url) return img.url;
  return "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800";
};

interface CategorySectionProps {
  category: Category;
  articles: Article[];
  accentColor?: string;
}

export default function CategoryNewsSection({
  category,
  articles,
  accentColor = "#0756A4",
}: CategorySectionProps) {
  if (!articles || articles.length === 0) return null;

  const lead = articles[0];
  const subArticles = articles.slice(1, 3);

  return (
    <div className="bg-white border border-[#E2E6EB] p-4 sm:p-5 shadow-xs rounded-sm flex flex-col justify-between h-full">
      <div>
        {/* Category Header */}
        <div
          className="flex items-center justify-between border-b-2 pb-1.5 mb-3"
          style={{ borderColor: accentColor }}
        >
          <h3
            className="text-base sm:text-lg font-bold flex items-center gap-2"
            style={{ color: accentColor }}
          >
            <span className="w-2 h-4 bg-[#087A43] inline-block rounded-xs" />
            <span>{category.name}</span>
          </h3>
          <Link
            href={`/category/${category.slug}`}
            className="text-xs font-semibold text-[#626B75] hover:text-[#0756A4] flex items-center gap-0.5 group transition-colors"
          >
            <span>আরও খবর</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Lead Article with big image */}
        {lead && (
          <article className="group mb-2.5">
            <Link
              href={`/news/${lead.slug}`}
              className="block relative aspect-[16/10] overflow-hidden mb-2 rounded-xs bg-gray-100"
            >
              <Image
                src={getImg(lead.featuredImage)}
                alt={lead.featuredImage?.alt || lead.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <Link href={`/news/${lead.slug}`}>
              <h4 className="font-bold text-sm text-[#202124] group-hover:text-[#0756A4] transition-colors line-clamp-2 leading-snug">
                {lead.title}
              </h4>
            </Link>
          </article>
        )}
      </div>

      {/* 2 News items below the lead story with thumbnail, title & date */}
      <div className="pt-2 border-t border-[#E2E6EB] divide-y divide-[#f0f2f5] mt-auto">
        {subArticles.map((art) => (
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
  );
}
