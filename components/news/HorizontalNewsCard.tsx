import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Article } from "@/types/news";
import { Clock, User } from "lucide-react";
import ShareButtons from "./ShareButtons";

interface HorizontalCardProps {
  article: Article;
  compact?: boolean;
}

export default function HorizontalNewsCard({ article, compact = false }: HorizontalCardProps) {
  return (
    <article className="bg-white rounded-lg border border-[#E2E6EB] hover:border-[#0756A4]/30 hover:shadow-xs transition-all overflow-hidden p-3 flex gap-3 sm:gap-4 group">
      {/* Thumbnail */}
      <div className={`relative ${compact ? "w-24 h-20 sm:w-28 sm:h-24" : "w-28 h-24 sm:w-44 sm:h-32"} shrink-0 rounded overflow-hidden bg-gray-100`}>
        <Link href={`/news/${article.slug}`} className="block w-full h-full">
          <Image
            src={article.featuredImage.url}
            alt={article.featuredImage.alt || article.title}
            fill
            sizes="200px"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>

      {/* Details */}
      <div className="flex flex-col justify-between flex-1 min-w-0">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Link
              href={`/category/${article.category.slug}`}
              className="text-[11px] font-semibold text-[#087A43] hover:underline"
            >
              {article.category.name}
            </Link>
          </div>

          <h3 className={`${compact ? "text-sm sm:text-base font-bold" : "text-base sm:text-lg font-bold"} text-[#202124] group-hover:text-[#0756A4] transition-colors leading-snug line-clamp-2`}>
            <Link href={`/news/${article.slug}`}>
              {article.title}
            </Link>
          </h3>

          {!compact && (
            <p className="text-xs sm:text-sm text-[#626B75] line-clamp-2 mt-1 leading-relaxed hidden sm:block">
              {article.summary}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between text-xs text-[#626B75] mt-2 pt-1 border-t border-gray-100">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="flex items-center gap-1 font-medium text-[#202124]">
              <User className="w-3 h-3 text-[#087A43]" />
              {article.author.name}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-gray-400" />
              {article.publishedAtBengali}
            </span>
          </div>
          <ShareButtons title={article.title} compact url={`/news/${article.slug}`} />
        </div>
      </div>
    </article>
  );
}
