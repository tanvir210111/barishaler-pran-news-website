import React from "react";
import Link from "next/link";
import { Article } from "@/types/news";
import { Eye } from "lucide-react";

interface PopularItemProps {
  article: Article;
  rank: number;
}

export default function PopularNewsItem({ article, rank }: PopularItemProps) {
  // Rank badge styling
  const isTopThree = rank <= 3;
  const badgeColors = [
    "bg-[#D62828] text-white", // 1
    "bg-[#0756A4] text-white", // 2
    "bg-[#087A43] text-white", // 3
    "bg-gray-200 text-gray-700", // 4+
  ];

  const badgeClass = rank <= 3 ? badgeColors[rank - 1] : badgeColors[3];

  return (
    <article className="py-2.5 border-b border-[#E2E6EB] last:border-0 group flex items-start gap-3">
      <span
        className={`w-6 h-6 rounded flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 ${badgeClass}`}
      >
        {rank}
      </span>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-[#202124] group-hover:text-[#0756A4] transition-colors leading-snug line-clamp-2">
          <Link href={`/news/${article.slug}`}>
            {article.title}
          </Link>
        </h4>
        <div className="flex items-center justify-between gap-2 mt-1 text-[11px] text-[#626B75]">
          <span className="text-[#087A43] font-medium">
            {article.category.name}
          </span>
          <span className="flex items-center gap-1 text-gray-400">
            <Eye className="w-3 h-3 text-[#0756A4]" />
            {article.viewsCount.toLocaleString("bn-BD")} বার পঠিত
          </span>
        </div>
      </div>
    </article>
  );
}
