import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Article } from "@/types/news";
import { Clock, User } from "lucide-react";
import ShareButtons from "./ShareButtons";

interface LeadCardProps {
  article: Article;
}

export default function LeadNewsCard({ article }: LeadCardProps) {
  if (!article) return null;
  const imgUrl = typeof article.featuredImage === "string" ? article.featuredImage : article.featuredImage?.url || "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200";
  return (
    <article className="bg-white rounded-lg border border-[#E2E6EB] shadow-xs hover:shadow-md transition-shadow overflow-hidden flex flex-col h-full group">
      {/* Featured Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
        <Link href={`/news/${article.slug}`} className="block w-full h-full">
          <Image
            src={imgUrl}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
            priority
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        <div className="absolute top-3 left-3">
          <Link
            href={`/category/${article.category.slug}`}
            className="bg-[#0756A4] hover:bg-[#05407c] text-white text-xs font-semibold px-2.5 py-1 rounded shadow transition-colors"
          >
            {article.category.name}
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#202124] group-hover:text-[#0756A4] transition-colors leading-snug tracking-tight mb-2.5">
            <Link href={`/news/${article.slug}`}>
              {article.title}
            </Link>
          </h2>

          <p className="text-sm sm:text-base text-[#626B75] line-clamp-3 mb-4 leading-relaxed">
            {article.summary}
          </p>
        </div>

        {/* Metadata & Share */}
        <div className="pt-3 border-t border-[#E2E6EB] flex items-center justify-between text-xs text-[#626B75]">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="flex items-center gap-1 font-medium text-[#202124]">
              <User className="w-3.5 h-3.5 text-[#087A43]" />
              {article.author.name}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-gray-400" />
              {article.publishedAtBengali}
            </span>
          </div>

          <ShareButtons title={article.title} compact url={`/news/${article.slug}`} />
        </div>
      </div>
    </article>
  );
}
