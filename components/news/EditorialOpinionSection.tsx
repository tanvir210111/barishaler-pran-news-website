import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Article } from "@/types/news";
import { Quote, Feather, ChevronRight } from "lucide-react";

interface EditorialOpinionSectionProps {
  articles: Article[];
}

export default function EditorialOpinionSection({ articles }: EditorialOpinionSectionProps) {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="bg-gradient-to-r from-[#FAF8F5] via-white to-[#FAF8F5] border-y-2 border-[#0756A4] py-8 px-4 sm:px-6 my-8">
      {/* Section Header */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#E2E6EB]">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-sm bg-[#0756A4] text-white">
            <Feather className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#202124] tracking-tight">
              মতামত ও সম্পাদকীয়
            </h2>
            <p className="text-xs text-[#626B75]">
              সমাজ, অর্থনীতি ও রাজনীতির গভীর বিশ্লেষণধর্মী কলাম
            </p>
          </div>
        </div>

        <Link
          href="/category/opinion"
          className="text-xs sm:text-sm font-bold text-[#0756A4] hover:text-[#05407c] hover:underline flex items-center gap-1 transition-colors"
        >
          <span>সকল কলাম</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Opinion Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.slice(0, 3).map((art, index) => (
          <article
            key={art.id}
            className="bg-white border border-[#E2E6EB] hover:border-[#0756A4] p-5 rounded-xs shadow-xs hover:shadow-md transition-all flex flex-col justify-between group relative"
          >
            <div>
              {/* Author Info */}
              <div className="flex items-center gap-3.5 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#087A43] shrink-0">
                  <Image
                    src={art.author.avatar}
                    alt={art.author.name}
                    fill
                    sizes="48px"
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div>
                  <Link
                    href={`/author/${art.author.slug}`}
                    className="font-bold text-sm text-[#202124] hover:text-[#0756A4] transition-colors block"
                  >
                    {art.author.name}
                  </Link>
                  <span className="text-xs text-[#626B75] block line-clamp-1">
                    {art.author.role}
                  </span>
                </div>
              </div>

              {/* Title & Quote */}
              <Link href={`/news/${art.slug}`} className="block">
                <h3 className="font-bold text-[16px] sm:text-[17px] leading-snug text-[#202124] group-hover:text-[#0756A4] transition-colors mb-2.5">
                  <span className="text-[#0756A4] font-serif text-lg mr-1 font-black">“</span>
                  {art.title}
                  <span className="text-[#0756A4] font-serif text-lg ml-1 font-black">”</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#626B75] line-clamp-2 leading-relaxed">
                  {art.summary}
                </p>
              </Link>
            </div>

            {/* Read Column Link */}
            <div className="mt-4 pt-3 border-t border-[#f0f2f5] flex items-center justify-between text-xs">
              <span className="text-[#087A43] font-semibold">কলামিস্ট বিভাগ</span>
              <Link
                href={`/news/${art.slug}`}
                className="text-[#0756A4] font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>পুরো কলাম পড়ুন</span>
                <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
