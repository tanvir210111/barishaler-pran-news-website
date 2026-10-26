"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { Plus, Search, LayoutGrid, Menu, ChevronDown } from "lucide-react";
import MfitAdminNavbar from "@/components/admin/MfitAdminNavbar";
import MfitAdminSidebar from "@/components/admin/MfitAdminSidebar";
import MediaDetailsModal, { MediaItem } from "@/components/admin/MediaDetailsModal";
import ScrollToTop from "@/components/common/ScrollToTop";
import {
  INITIAL_MEDIA_ITEMS,
  getStoredMediaItems,
  deleteStoredMediaItem,
} from "@/services/mediaService";

const FILTER_OPTIONS = ["All", "Image", "Video", "Document"];

export default function AllMediaPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [mediaList, setMediaList] = useState<MediaItem[]>(INITIAL_MEDIA_ITEMS);

  useEffect(() => {
    setMediaList(getStoredMediaItems());

    const handleUpdate = () => {
      setMediaList(getStoredMediaItems());
    };

    window.addEventListener("bait_media_updated", handleUpdate);
    window.addEventListener("storage", handleUpdate);

    return () => {
      window.removeEventListener("bait_media_updated", handleUpdate);
      window.removeEventListener("storage", handleUpdate);
    };
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter media items based on search and type
  const filteredItems = useMemo(() => {
    return mediaList.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.fileName.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesType =
        filterType === "All" ||
        (filterType === "Image" && item.fileType.toLowerCase().includes("image")) ||
        (filterType === "Video" && item.fileType.toLowerCase().includes("video")) ||
        (filterType === "Document" &&
          (!item.fileType.toLowerCase().includes("image") &&
            !item.fileType.toLowerCase().includes("video")));

      return matchesSearch && matchesType;
    });
  }, [mediaList, searchQuery, filterType]);

  const handleDeleteMedia = (id: string) => {
    deleteStoredMediaItem(id);
    setMediaList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#F0F4FA] text-[#1E293B] flex flex-col font-sans">
      {/* Top Navbar */}
      <MfitAdminNavbar
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        isSidebarOpen={isSidebarOpen}
      />

      {/* Main Container */}
      <div className="flex-1 flex">
        {/* Left Sidebar */}
        <MfitAdminSidebar isOpen={isSidebarOpen} activePath="/mfit-admin/media" />

        {/* Media Content matching screenshot 100% */}
        <main className="flex-1 w-full p-4 sm:px-5 sm:py-4 lg:px-6 lg:py-5 min-w-0 flex flex-col justify-between">
          <div>
            {/* Top Row: Title + Add Media Button */}
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-[22px] sm:text-[24px] font-bold text-[#0A2540] tracking-tight">
                All Media
              </h1>

              <Link
                href="/mfit-admin/add-media"
                className="bg-[#1677FF] hover:bg-blue-600 text-white text-[13px] font-medium px-3.5 py-1.5 rounded-md flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
              >
                <Plus className="w-4 h-4 stroke-[2.5]" />
                <span>Add Media</span>
              </Link>
            </div>

            {/* Filter Toolbar matching screenshot */}
            <div className="bg-white rounded-xl p-3 sm:p-3.5 mb-5 border border-[#E2E8F0] shadow-xs flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 flex-1 min-w-[280px]">
                {/* Custom Type Filter Dropdown - Sized to exact reference screenshot */}
                <div ref={dropdownRef} className="relative w-[180px] sm:w-[190px] shrink-0">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                    className="w-full h-[42px] border border-[#CBD5E1] rounded-md px-4 text-[14.5px] text-[#334155] bg-white flex items-center justify-between gap-2 hover:border-[#94A3B8] focus:border-[#1677FF] cursor-pointer transition-colors"
                  >
                    <span className="font-medium text-[#1E293B] select-none">{filterType}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#64748B] shrink-0 transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu Options matching user screenshot */}
                  {isDropdownOpen && (
                    <div className="absolute left-0 top-full mt-1.5 w-full bg-white rounded-lg border border-[#E2E8F0] shadow-lg py-1 z-30 overflow-hidden animate-in fade-in duration-100">
                      {FILTER_OPTIONS.map((option) => {
                        const isSelected = filterType === option;
                        return (
                          <div
                            key={option}
                            onClick={() => {
                              setFilterType(option);
                              setIsDropdownOpen(false);
                            }}
                            className={`px-3.5 py-2 text-[13.5px] cursor-pointer transition-colors ${
                              isSelected
                                ? "bg-[#1677FF] text-white font-medium"
                                : "text-[#475569] hover:bg-blue-50/70 hover:text-[#1677FF]"
                            }`}
                          >
                            {option}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Search Input - Bigger height & spacious width */}
                <div className="relative flex-1 max-w-xl">
                  <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Search Image Name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-[42px] pl-10 pr-4 text-[13.5px] border border-[#CBD5E1] rounded-lg text-[#1E293B] placeholder-[#94A3B8] outline-none hover:border-[#94A3B8] focus:border-[#1677FF] transition-colors"
                  />
                </div>
              </div>

              {/* View toggle icon */}
              <div className="flex items-center text-[#64748B] pr-3">
                <Menu className="w-5 h-5 cursor-pointer hover:text-[#0A2540]" />
              </div>
            </div>

            {/* Media 6-Column Grid matching Screenshot 2 */}
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedMedia(item)}
                    className="group relative aspect-square bg-[#F8FAFC] border border-[#D1D5DB] hover:border-[#1677FF] p-1 rounded-xs shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center overflow-hidden"
                  >
                    {item.isPlaceholder ? (
                      <div className="w-full h-full bg-[#EDEDED] flex items-center justify-center p-2 text-center">
                        <span className="text-[11px] font-mono text-[#475569] break-all leading-tight select-none">
                          {item.fileName}
                        </span>
                      </div>
                    ) : (
                      <img
                        src={item.thumbnailUrl || item.url}
                        alt={item.fileName}
                        className="w-full h-full object-cover rounded-xs group-hover:scale-102 transition-transform duration-200"
                        loading="lazy"
                      />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl border border-[#D5E1F5] p-12 text-center text-[#64748B]">
                <p className="text-sm font-medium mb-1">মিডিয়া লাইব্রেরিতে কোনো ফাইল নেই</p>
                <p className="text-xs text-[#94A3B8]">নতুন ছবি বা ফাইল আপলোড করতে উপরে &quot;Add Media&quot; বাটনে ক্লিক করুন।</p>
              </div>
            )}

            {/* Load More Button */}
            {filteredItems.length > 12 && (
              <div className="mt-8 mb-6 flex justify-center">
                <button
                  type="button"
                  className="bg-[#1677FF] hover:bg-blue-600 text-white font-medium text-xs px-5 py-2 rounded-md shadow-xs transition-colors cursor-pointer"
                >
                  Load More
                </button>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-10 mb-4 pb-2 text-center text-xs font-semibold text-[#8A99AD]">
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

      {/* Floating Scroll to Top button */}
      <ScrollToTop threshold={60} />

      {/* Interactive Media Details Modal matching Screenshot 3 */}
      <MediaDetailsModal
        media={selectedMedia}
        onClose={() => setSelectedMedia(null)}
        onDelete={handleDeleteMedia}
      />
    </div>
  );
}
