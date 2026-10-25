import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Article } from "@/types/news";
import { Clock } from "lucide-react";
import ShareButtons from "./ShareButtons";

interface MediumCardProps {
  article: Article;
  showCategory?: boolean;
}

export default function MediumNewsCard({ article, showCategory = true }: MediumCardProps) {
  return (
    <article className="bg-white rounded-lg border border-[#E2E6EB] shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full group">
      {/* Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
        <Link href={`/news/${article.slug}`} className="block w-full h-full">
          <Image
            src={article.featuredImage.url}
            alt={article.featuredImage.alt || article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        {showCategory && (
          <div className="absolute top-2.5 left-2.5">
            <Link
              href={`/category/${article.category.slug}`}
              className="bg-[#0756A4]/90 hover:bg-[#0756A4] text-white text-[11px] font-semibold px-2 py-0.5 rounded shadow transition-colors"
            >
              {article.category.name}
            </Link>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3.5 sm:p-4 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-[#202124] group-hover:text-[#0756A4] transition-colors leading-snug line-clamp-2 mb-2">
            <Link href={`/news/${article.slug}`}>
              {article.title}
            </Link>
          </h3>
          <p className="text-xs sm:text-sm text-[#626B75] line-clamp-2 leading-relaxed">
            {article.summary}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-3 pt-2.5 border-t border-[#E2E6EB] flex items-center justify-between text-xs text-[#626B75]">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3 text-gray-400" />
            {article.publishedAtBengali}
          </span>
          <ShareButtons title={article.title} compact url={`/news/${article.slug}`} />
        </div>
      </div>
    </article>
  );
}
