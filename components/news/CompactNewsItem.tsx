import React from "react";
import Link from "next/link";
import { Article } from "@/types/news";
import { Clock } from "lucide-react";

interface CompactItemProps {
  article: Article;
  index?: number;
}

export default function CompactNewsItem({ article, index }: CompactItemProps) {
  if (!article) return null;
  return (
    <div className="py-2.5 border-b border-[#E2E6EB] last:border-b-0 group">
      <div className="flex items-start gap-2.5">
        {typeof index === "number" && (
          <span className="text-base font-extrabold text-[#0756A4]/60 w-5 shrink-0 text-center">
            {index + 1}
          </span>
        )}
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
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-gray-400" />
              {article.publishedAtBengali}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
