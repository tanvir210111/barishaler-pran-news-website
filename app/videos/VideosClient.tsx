"use client";

import React, { useState } from "react";
import Image from "next/image";
import { VideoItem } from "@/types/news";
import AdvertisementPlaceholder from "@/components/news/AdvertisementPlaceholder";
import { Play, Eye, Calendar, X } from "lucide-react";

interface VideosClientProps {
  videos: VideoItem[];
}

export default function VideosClient({ videos }: VideosClientProps) {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg border border-[#E2E6EB] p-5 shadow-xs">
        <div className="flex items-center gap-2 mb-1">
          <Play className="w-6 h-6 text-[#D62828] fill-current" />
          <h1 className="text-2xl font-extrabold text-[#202124]">
            ভিডিও সংবাদ
          </h1>
        </div>
        <p className="text-xs sm:text-sm text-[#626B75]">
          মাঠপর্যায়ের সরেজমিন প্রতিবেদন, সরাসরি বিশ্লেষণ এবং এক্সক্লুসিভ ভিডিও ফুটেজ। (ডেমো ভিডিও প্লেয়ার)
        </p>
      </div>

      {/* Featured Video Player Box if selected */}
      {activeVideo && (
        <div className="bg-black text-white rounded-lg overflow-hidden shadow-xl p-4 sm:p-6 border border-gray-800 animate-in fade-in">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-800">
            <h3 className="font-bold text-base sm:text-lg text-white">
              {activeVideo.title}
            </h3>
            <button
              onClick={() => setActiveVideo(null)}
              className="p-1 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white"
              aria-label="প্লেয়ার বন্ধ করুন"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="aspect-[16/9] w-full max-w-4xl mx-auto rounded overflow-hidden bg-gray-900">
            <video
              src={activeVideo.videoUrl}
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-3 text-xs sm:text-sm text-gray-300 max-w-4xl mx-auto">
            {activeVideo.summary}
          </p>
        </div>
      )}

      {/* Videos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {videos.map((vid) => (
          <div
            key={vid.id}
            onClick={() => setActiveVideo(vid)}
            className="group bg-white rounded-lg border border-[#E2E6EB] overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col"
          >
            {/* Thumbnail */}
            <div className="relative aspect-[16/9] w-full bg-gray-900 overflow-hidden">
              <Image
                src={vid.thumbnail}
                alt={vid.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#D62828] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </div>
              </div>
              <span className="absolute bottom-2.5 right-2.5 bg-black/80 text-white text-[10px] font-mono font-medium px-2 py-0.5 rounded">
                {vid.duration}
              </span>
              <span className="absolute top-2.5 left-2.5 bg-[#0756A4]/90 text-white text-[11px] font-semibold px-2 py-0.5 rounded shadow">
                {vid.category}
              </span>
            </div>

            {/* Details */}
            <div className="p-4 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#202124] group-hover:text-[#0756A4] transition-colors leading-snug line-clamp-2 mb-1.5">
                  {vid.title}
                </h3>
                <p className="text-xs text-[#626B75] line-clamp-2 leading-relaxed">
                  {vid.summary}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-[#E2E6EB] flex items-center justify-between text-[11px] text-[#626B75]">
                <span className="flex items-center gap-1">
                  <Eye className="w-3.5 h-3.5 text-[#0756A4]" />
                  {vid.views.toLocaleString("bn-BD")} বার দেখা হয়েছে
                </span>
                <span className="flex items-center gap-1 text-gray-400">
                  <Calendar className="w-3.5 h-3.5" />
                  {vid.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AdvertisementPlaceholder size="leaderboard" />
    </div>
  );
}
