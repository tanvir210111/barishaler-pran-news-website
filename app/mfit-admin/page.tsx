"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import MfitAdminNavbar from "@/components/admin/MfitAdminNavbar";
import MfitAdminSidebar from "@/components/admin/MfitAdminSidebar";
import TrafficChart from "@/components/admin/TrafficChart";
import ScrollToTop from "@/components/common/ScrollToTop";
import { api } from "@/services/apiClient";
import { formatToBengaliDate } from "@/services/newsService";

export default function MfitAdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [articles, setArticles] = useState<any[]>([]);
  const [totalCount, setTotalCount] = useState<number>(54);

  useEffect(() => {
    api.get<any[]>("/news?limit=15").then((res: any) => {
      if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
        setArticles(res.data);
        if (res.meta?.total) {
          setTotalCount(res.meta.total);
        }
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#F0F4FA] text-[#1E293B] flex flex-col font-sans">
      {/* Top Navbar */}
      <MfitAdminNavbar
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        isSidebarOpen={isSidebarOpen}
      />

      {/* Main Container: Sidebar + Dashboard */}
      <div className="flex-1 flex">
        {/* Left Sidebar */}
        <MfitAdminSidebar isOpen={isSidebarOpen} activePath="/mfit-admin" />

        {/* Dashboard Content matching screenshot 100% */}
        <main className="flex-1 w-full p-4 sm:px-5 sm:py-3.5 lg:px-6 lg:py-4 min-w-0 flex flex-col justify-between">
          <div>
            {/* Title: Dashboard */}
            <div className="mb-3">
              <h1 className="text-[22px] sm:text-[24px] font-bold text-[#0A2540] tracking-tight">
                Dashboard
              </h1>
            </div>

            {/* Dashboard 2-Column Grid (Left: Stat cards + Traffic, Right: Recent Articles) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
              {/* LEFT COLUMN (8 cols): 3 Stat Cards on Top + Website Traffic on Bottom */}
              <div className="lg:col-span-8 flex flex-col gap-5">
                {/* 3 Stat Cards Row matching reference screenshot */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4.5">
                  {/* Card 1: All Article (Soft blue transparent gradient) */}
                  <div className="bg-gradient-to-br from-[#EEF4FF] via-[#F6F9FF] to-white rounded-2xl p-5 sm:p-5.5 border border-[#DDE7FB] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md transition-all min-h-[138px] flex flex-col justify-between">
                    <span className="block text-[17px] font-bold text-[#0A2540] mb-4">
                      All Article
                    </span>
                    <div className="flex items-center gap-4">
                      {/* Circular soft blue badge */}
                      <div className="w-[54px] h-[54px] rounded-full bg-[#EBF1FF] flex items-center justify-center shrink-0">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#2563EB]" fill="none" stroke="currentColor" strokeWidth="1.8">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <rect x="6" y="6" width="5" height="5" fill="currentColor" fillOpacity="0.25" stroke="none" />
                          <path d="M14 6h4M14 9h4M6 14h12M6 17h8" strokeLinecap="round" />
                        </svg>
                      </div>
                      {/* Stat text block */}
                      <div>
                        <div className="text-[30px] sm:text-[32px] font-extrabold text-[#0A2540] leading-none mb-1">
                          {totalCount}
                        </div>
                        <span className="text-[12.5px] font-medium text-[#718096]">
                          Show Articles
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Published Articles (Soft mint green transparent gradient) */}
                  <div className="bg-gradient-to-br from-[#ECFBF2] via-[#F5FCF7] to-white rounded-2xl p-5 sm:p-5.5 border border-[#D1F2DD] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md transition-all min-h-[138px] flex flex-col justify-between">
                    <span className="block text-[17px] font-bold text-[#0A2540] mb-4">
                      Published Articles
                    </span>
                    <div className="flex items-center gap-4">
                      {/* Circular soft mint green badge */}
                      <div className="w-[54px] h-[54px] rounded-full bg-[#E4F8EC] flex items-center justify-center shrink-0">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#10B981]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                      </div>
                      {/* Stat text block */}
                      <div>
                        <div className="text-[30px] sm:text-[32px] font-extrabold text-[#0A2540] leading-none mb-1">
                          {totalCount}
                        </div>
                        <span className="text-[12.5px] font-medium text-[#718096]">
                          Show Articles
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Pending Articles (Soft lavender/pink transparent gradient) */}
                  <div className="bg-gradient-to-br from-[#FAF0FF] via-[#FDF5FF] to-white rounded-2xl p-5 sm:p-5.5 border border-[#EED7FC] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-md transition-all min-h-[138px] flex flex-col justify-between">
                    <span className="block text-[17px] font-bold text-[#0A2540] mb-4">
                      Pending Articles
                    </span>
                    <div className="flex items-center gap-4">
                      {/* Circular soft peach badge with orange info icon */}
                      <div className="w-[54px] h-[54px] rounded-full bg-[#FFF0E0] flex items-center justify-center shrink-0">
                        <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#F97316]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="16" x2="12" y2="12" />
                          <line x1="12" y1="8" x2="12.01" y2="8" />
                        </svg>
                      </div>
                      {/* Stat text block */}
                      <div>
                        <div className="text-[30px] sm:text-[32px] font-extrabold text-[#0A2540] leading-none mb-1">
                          0
                        </div>
                        <span className="text-[12.5px] font-medium text-[#718096]">
                          Show Articles
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Website Traffic Card */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E2E8F0] shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                  <h2 className="text-[18px] font-bold text-[#0A2540] mb-3">
                    Website Traffic
                  </h2>
                  <TrafficChart />
                </div>
              </div>

              {/* RIGHT COLUMN (4 cols): Recent Articles */}
              <div className="lg:col-span-4 bg-white rounded-2xl p-5 sm:p-6 border border-[#E2E8F0] shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                <div>
                  <h2 className="text-[18px] font-bold text-[#0A2540] mb-5">
                    Recent Articles
                  </h2>

                  {/* Connected Vertical Timeline matching user reference */}
                  <div className="relative">
                    {articles.length > 0
                      ? articles.slice(0, 12).map((item, idx) => {
                          const isLast = idx === Math.min(articles.length, 12) - 1;
                          return (
                            <div key={item.id || idx} className="relative flex items-start gap-3 group">
                              {/* Time */}
                              <span className="text-[11.5px] sm:text-[12px] font-normal text-[#64748B] w-14 shrink-0 pt-0.5 select-none truncate">
                                {formatToBengaliDate(item.publishedDate || item.createdAt)}
                              </span>

                              {/* Timeline column: Vertical Line + Green Dot */}
                              <div className="relative flex flex-col items-center shrink-0 self-stretch">
                                {!isLast && (
                                  <span className="absolute top-2.5 bottom-0 w-[2px] bg-[#EEF2F6] -translate-x-1/2 left-1/2" />
                                )}
                                <span className="relative z-10 w-2.5 h-2.5 rounded-full bg-[#10B981] ring-2 ring-white shrink-0 mt-1.5 shadow-xs" />
                              </div>

                              {/* Bengali Headline */}
                              <Link
                                href={`/article/${item.slug || item.id}`}
                                className="text-[13px] sm:text-[13.5px] font-medium text-[#1E293B] group-hover:text-[#2F54EB] transition-colors leading-[1.45] cursor-pointer line-clamp-2 pb-4"
                              >
                                {item.title}
                              </Link>
                            </div>
                          );
                        })
                      : Array.from({ length: 6 }).map((_, idx) => (
                          <div key={idx} className="flex items-center gap-3 py-2 animate-pulse">
                            <div className="h-3 w-12 bg-gray-200 rounded" />
                            <div className="h-3.5 flex-1 bg-gray-200 rounded" />
                          </div>
                        ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer: Powered by bait.com matching screenshot gap */}
          <div className="mt-10 sm:mt-12 mb-4 pb-2 text-center text-xs font-semibold text-[#8A99AD]">
            Powered by{" "}
            <a
              href="https://bait.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3858F6] hover:underline"
            >
              bait.com
            </a>
          </div>
        </main>
      </div>

      {/* Floating Scroll-To-Top Button (Reliably appears when scrolling down or at bottom) */}
      <ScrollToTop threshold={60} />
    </div>
  );
}
