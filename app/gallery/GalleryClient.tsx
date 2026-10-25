"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GalleryItem } from "@/types/news";
import LightboxModal from "@/components/gallery/LightboxModal";
import AdvertisementPlaceholder from "@/components/news/AdvertisementPlaceholder";
import { Camera, Calendar, Maximize2 } from "lucide-react";

interface GalleryClientProps {
  items: GalleryItem[];
}

export default function GalleryClient({ items }: GalleryClientProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = ["all", "জাতীয়", "খেলাধুলা", "সারাদেশ", "ক্যাম্পাস", "লাইফস্টাইল"];

  const filteredItems = selectedCategory === "all"
    ? items
    : items.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg border border-[#E2E6EB] p-5 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Camera className="w-6 h-6 text-[#0756A4]" />
            <h1 className="text-2xl font-extrabold text-[#0756A4]">
              ছবি গ্যালারি
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-[#626B75]">
            ক্যামেরার লেন্সে ধরা পড়া দেশ ও বিদেশের তাৎপর্যপূর্ণ মুহূর্ত, প্রাকৃতিক সৌন্দর্য ও সাম্প্রতিক ঘটনাপ্রবাহের চিত্রমালা।
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors ${
                selectedCategory === cat
                  ? "bg-[#0756A4] text-white shadow-xs"
                  : "bg-[#f0f3f6] text-[#626B75] hover:bg-gray-200"
              }`}
            >
              {cat === "all" ? "সকল ছবি" : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            onClick={() => openLightbox(index)}
            className="group bg-white rounded-lg border border-[#E2E6EB] overflow-hidden shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col"
          >
            {/* Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />

              <span className="absolute top-2.5 left-2.5 bg-[#0756A4]/90 text-white text-[11px] font-semibold px-2 py-0.5 rounded shadow">
                {item.category}
              </span>

              <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Details */}
            <div className="p-3.5 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-base font-bold text-[#202124] group-hover:text-[#0756A4] transition-colors leading-snug line-clamp-2 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-[#626B75] line-clamp-2 leading-relaxed">
                  {item.caption}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-[#E2E6EB] flex items-center justify-between text-[11px] text-[#626B75]">
                <span className="flex items-center gap-1 font-medium text-gray-700">
                  <Camera className="w-3 h-3 text-[#087A43]" />
                  {item.photographer}
                </span>
                <span className="flex items-center gap-1 text-gray-400">
                  <Calendar className="w-3 h-3" />
                  {item.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AdvertisementPlaceholder size="leaderboard" />

      {/* Lightbox Modal */}
      <LightboxModal
        items={filteredItems}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}
