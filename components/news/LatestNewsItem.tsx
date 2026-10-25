import React from "react";
import Link from "next/link";
import { Article } from "@/types/news";
import { Clock } from "lucide-react";

interface LatestItemProps {
  article: Article;
}

export default function LatestNewsItem({ article }: LatestItemProps) {
  return (
    <article className="py-2.5 border-b border-[#E2E6EB] last:border-0 group flex items-start gap-2.5">
      <div className="w-2 h-2 rounded-full bg-[#0756A4] mt-2 shrink-0 group-hover:scale-125 transition-transform" />
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-[#202124] group-hover:text-[#0756A4] transition-colors leading-snug line-clamp-2">
          <Link href={`/news/${article.slug}`}>
            {article.title}
          </Link>
        </h4>
        <div className="flex items-center gap-2 mt-1 text-[11px] text-[#626B75]">
          <span className="text-[#087A43] font-medium">
            {article.category.name}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1 text-gray-400">
            <Clock className="w-3 h-3" />
            {article.publishedAtBengali}
          </span>
        </div>
      </div>
    </article>
  );
}
