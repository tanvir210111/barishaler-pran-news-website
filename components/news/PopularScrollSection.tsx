"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Article } from "@/types/news";
import { Clock, ChevronRight, ChevronLeft } from "lucide-react";

interface PopularScrollSectionProps {
  articles: Article[];
  times?: Record<string, string>;
}

export default function PopularScrollSection({
  articles,
  times = {},
}: PopularScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Mouse drag-to-scroll variables
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);
  const isDragging = useRef(false);

  const checkScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = containerRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      window.addEventListener("resize", checkScroll);
      return () => {
        el.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, [articles]);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    isDragging.current = false;
    startX.current = e.pageX - (containerRef.current?.offsetLeft || 0);
    scrollLeftPos.current = containerRef.current?.scrollLeft || 0;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current) return;
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX.current) * 1.5;
    if (Math.abs(walk) > 5) {
      isDragging.current = true;
    }
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeftPos.current - walk;
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (isDragging.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 320;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-white rounded-lg border border-[#E2E6EB] border-b-4 border-b-[#087A43] shadow-xs p-4 sm:p-5">
      {/* Header: Title on Left, 'সব দেখুন' on Right */}
      <div className="border-b border-[#E2E6EB] flex items-center justify-between mb-4">
        <div className="border-b-2 border-[#D62828] pb-1.5 -mb-[1px]">
          <h2 className="text-xl sm:text-2xl font-bold text-[#202124]">সর্বাধিক পঠিত</h2>
        </div>
        <Link
          href="/popular"
          className="text-xs sm:text-sm text-[#626B75] hover:text-[#0756A4] font-medium flex items-center gap-0.5 transition-colors pb-1"
        >
          <span>সব দেখুন</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Horizontal Scroll Track (User side drag / swipe enabled, peek effect on right) */}
      <div className="relative">
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex items-stretch gap-3.5 overflow-x-auto no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing select-none py-1 px-0.5"
          style={{ scrollSnapType: "x proximity" }}
        >
          {articles.map((art) => (
            <Link
              key={art.id}
              href={`/news/${art.slug}`}
              onClick={handleClick}
              className="group w-[265px] sm:w-[295px] shrink-0 bg-white border border-[#E2E6EB] rounded-xs p-3.5 flex flex-col justify-between hover:border-[#0756A4] hover:shadow-xs transition-all block snap-start"
            >
              <div className="flex items-start gap-2.5 mb-3">
                <span className="w-2.5 h-2.5 bg-[#D62828] shrink-0 mt-1.5 rounded-2xs" />
                <h3 className="text-[15.5px] sm:text-[16.5px] font-bold text-[#202124] group-hover:text-[#0756A4] line-clamp-2 leading-snug transition-colors">
                  {art.title}
                </h3>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#626B75] pl-5 mt-auto">
                <Clock className="w-3.5 h-3.5 text-gray-400" />
                <span>{times[art.id] || art.publishedAtBengali}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Right Subtle Gradient Hint (shows more items exist to the right) */}
        {canScrollRight && (
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white via-white/70 to-transparent pointer-events-none rounded-r-xs" />
        )}
      </div>

    </section>
  );
}
