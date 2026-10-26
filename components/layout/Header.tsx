"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Search,
  Menu,
  X,
  ChevronDown,
  Archive,
  Globe,
  User,
  Sparkles
} from "lucide-react";
import TopUtilityBar from "./TopUtilityBar";
import BreakingNewsTicker from "./BreakingNewsTicker";
import SocialMediaIcons from "@/components/common/SocialMediaIcons";
import { getCategories, getBreakingNews } from "@/services/newsService";
import { Category, BreakingNewsItem } from "@/types/news";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileMoreExpanded, setMobileMoreExpanded] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDemoModal, setShowDemoModal] = useState<string | null>(null);

  const [drawerCategories, setDrawerCategories] = useState<Category[]>([]);
  const [breakingItems, setBreakingItems] = useState<BreakingNewsItem[]>([]);

  useEffect(() => {
    getCategories().then((cats) => {
      if (cats && cats.length > 0) setDrawerCategories(cats);
    });
    getBreakingNews().then((news) => {
      if (news && news.length > 0) setBreakingItems(news);
    });
  }, []);

  const searchInputRef = useRef<HTMLInputElement>(null);

  // Nav links matching editorial priority
  const navLinks = [
    { name: "হোম", href: "/" },
    { name: "সর্বশেষ", href: "/latest" },
    { name: "জাতীয়", href: "/category/national" },
    { name: "রাজনীতি", href: "/category/politics" },
    { name: "বিশ্ব", href: "/category/international" },
    { name: "খেলা", href: "/category/sports" },
    { name: "বিনোদন", href: "/category/entertainment" },
    { name: "ভিডিও", href: "/videos" },
  ];

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Focus search input when search is opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery("");
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="w-full bg-white border-b border-[#E2E8F0] sticky top-0 z-40">
      {/* Main Masthead: Brand Logo on Left & Real-Time Utility (Date, Clock, Weather, Socials) on Right */}
      <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-3">
          
          {/* Left: Mobile hamburger + Brand Logo & Tagline */}
          <div className="flex items-center justify-between md:justify-start gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-[#222222] hover:bg-[#F1F5F9] hover:text-[#123B5D] rounded transition-colors duration-200 cursor-pointer"
              aria-label="মেনু খুলুন"
            >
              <Menu className="w-6 h-6" />
            </button>

            <Link href="/" className="group flex items-center gap-3">
              {/* Refined Brand Logo Icon - keeping existing green and red identity without harsh gradients */}
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#E2E8F0] bg-white group-hover:border-[#087A43] transition-colors duration-200 flex items-center justify-center shrink-0 shadow-2xs">
                <svg
                  width="26"
                  height="26"
                  className="w-6 h-6 sm:w-6.5 sm:h-6.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="5" fill="#087A43" />
                  <path
                    d="M12 2V5M12 19V22M4.93 4.93L7.05 7.05M16.95 16.95L19.07 19.07M2 12H5M19 12H22M4.93 19.07L7.05 16.95M16.95 7.05L19.07 4.93"
                    stroke="#123B5D"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div>
                <div className="flex items-baseline gap-1.5 sm:gap-2">
                  <span className="text-[27px] sm:text-[34px] md:text-[36px] font-black text-[#087A43] tracking-tight leading-none">
                    বরিশালের
                  </span>
                  <span className="text-[27px] sm:text-[34px] md:text-[36px] font-black text-[#C62828] tracking-tight leading-none">
                    প্রাণ
                  </span>
                </div>
                <span className="block text-[11px] sm:text-[12px] text-[#64748B] tracking-wide font-medium mt-1">
                  সত্যের সঙ্গে, মানুষের পাশে | Barishaler Pran
                </span>
              </div>
            </Link>
          </div>

          {/* Right: Real-time Date, Clock, Weather & Social Media */}
          <TopUtilityBar />

        </div>
      </div>

      {/* 2. Deep Navy Blue Editorial Navigation Bar */}
      <nav
        aria-label="প্রধান নেভিগেশন"
        className="w-full bg-[#123B5D] border-b border-[#0D2A42]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-2 py-1">
          {/* Connected Editorial Navigation Items: transparent by default, hover to white + navy text, active with subtle visual indicator */}
          <div className="flex-1 overflow-x-auto no-scrollbar scroll-smooth">
            <ul className="flex items-center gap-0.5 sm:gap-1 shrink-0 py-0.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.name} className="shrink-0">
                    <Link
                      href={link.href}
                      className={`relative inline-flex items-center px-2.5 sm:px-3 py-2 text-[18px] sm:text-[19px] xl:text-[20px] font-bold transition-colors duration-200 ease-in-out whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                        isActive
                          ? "text-white after:absolute after:bottom-0 after:left-1.5 after:right-1.5 after:h-[3.5px] after:bg-[#C62828] after:rounded-full"
                          : "text-white/90 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Side Tools & Icons: Matching Clean Editorial Style */}
          <div className="flex items-center gap-2 shrink-0 pl-3 border-l border-white/20">
            {/* 1. খুঁজুন (Search Trigger) */}
            <button
              onClick={() => setIsSearchOpen((prev) => !prev)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 text-[15px] sm:text-[16px] font-semibold text-white bg-transparent hover:bg-white hover:text-[#123B5D] rounded-xs transition-colors duration-200 ease-in-out cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              title="সংবাদ অনুসন্ধান করুন"
            >
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">খুঁজুন</span>
            </button>

            {/* 2. Eng (Language) */}
            <button
              onClick={() => setShowDemoModal("English edition is coming soon")}
              className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 text-[15px] sm:text-[16px] font-semibold text-white bg-transparent hover:bg-white hover:text-[#123B5D] rounded-xs transition-colors duration-200 ease-in-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              title="English Edition"
            >
              <Globe className="w-4 h-4" />
              <span>Eng</span>
            </button>

            {/* 3. Login / Admin */}
            <Link
              href="/admin"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-[15px] sm:text-[16px] font-semibold text-white bg-transparent hover:bg-white hover:text-[#123B5D] rounded-xs transition-colors duration-200 ease-in-out cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              title="অ্যাডমিন প্যানেল / লগইন"
            >
              <User className="w-4 h-4" />
              <span>Login</span>
            </Link>

            {/* 4. ☰ Hamburger Icon (Opens All Categories Drawer) */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-1.5 text-white bg-transparent hover:bg-white hover:text-[#123B5D] rounded-xs transition-colors duration-200 ease-in-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              title="সকল বিভাগ"
              aria-label="সকল বিভাগ মেনু খুলুন"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Search Input Bar (Dropdown) */}
      {isSearchOpen && (
        <div className="bg-[#F8FAFC] border-b border-[#E2E8F0] py-2.5 animate-in fade-in duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <form
              onSubmit={handleSearchSubmit}
              className="max-w-2xl mx-auto flex items-center gap-2"
            >
              <div className="relative flex-1">
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="খবর, বিষয় বা লেখকের নাম লিখে অনুসন্ধান করুন..."
                  className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-[#CBD5E1] rounded-xs focus:outline-none focus:ring-2 focus:ring-[#123B5D] text-[#222222]"
                />
                <Search className="w-4 h-4 text-[#64748B] absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
              <button
                type="submit"
                className="bg-[#123B5D] hover:bg-[#0D2A42] text-white px-4 py-2 rounded-xs text-sm font-semibold transition-colors duration-200 cursor-pointer"
              >
                অনুসন্ধান
              </button>
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="p-2 text-[#64748B] hover:text-[#222222] rounded-xs cursor-pointer transition-colors duration-200"
                aria-label="অনুসন্ধান বন্ধ করুন"
              >
                <X className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 3. Breaking News Ticker (Refined Red #C62828 with White Text) */}
      <BreakingNewsTicker items={breakingItems} />

      {/* Demo Feedback Modal for E-Paper / Login / Eng */}
      {showDemoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-in fade-in">
          <div className="bg-white rounded-xs p-6 max-w-sm w-full text-center relative border border-[#E2E8F0] shadow-xl">
            <button
              onClick={() => setShowDemoModal(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 cursor-pointer"
              aria-label="বন্ধ করুন"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 rounded-full bg-[#F0F5FA] text-[#123B5D] flex items-center justify-center mx-auto mb-3">
              <Sparkles className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-[#222222] mb-2">বরিশালের প্রাণ</h4>
            <p className="text-sm text-[#64748B] leading-relaxed mb-5">
              {showDemoModal}
            </p>
            <button
              onClick={() => setShowDemoModal(null)}
              className="w-full bg-[#123B5D] text-white py-2 rounded-xs font-semibold text-sm hover:bg-[#0D2A42] transition-colors duration-200 cursor-pointer"
            >
              ঠিক আছে
            </button>
          </div>
        </div>
      )}

      {/* 4. All Categories Drawer (Opened by Hamburger Icon on Desktop and Mobile) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 transition-opacity duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <div className="relative w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 overflow-y-auto">
            {/* Drawer Header: Deep Navy */}
            <div className="p-4 bg-[#123B5D] text-white flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg">সকল বিভাগ</h3>
                <p className="text-xs text-blue-100">বরিশালের প্রাণ</p>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 rounded hover:bg-white/10 text-white cursor-pointer transition-colors duration-200"
                aria-label="বন্ধ করুন"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Drawer Search */}
            <div className="p-3 border-b border-[#E2E8F0] bg-[#F8FAFC]">
              <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="সংবাদ অনুসন্ধান করুন..."
                  className="w-full px-3 py-1.5 text-sm bg-white border border-[#CBD5E1] rounded-xs focus:outline-none focus:ring-1 focus:ring-[#123B5D] text-[#222222]"
                />
                <button
                  type="submit"
                  className="bg-[#123B5D] hover:bg-[#0D2A42] text-white p-2 rounded-xs shrink-0 cursor-pointer transition-colors duration-200"
                  aria-label="অনুসন্ধান"
                >
                  <Search className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* All Category Links in Drawer */}
            <nav className="flex-1 py-3 px-3 overflow-y-auto">
              <div className="grid grid-cols-2 gap-1.5 mb-4">
                {drawerCategories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/category/${cat.slug}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-sm font-semibold text-[#222222] hover:bg-[#F0F5FA] hover:text-[#123B5D] rounded-xs transition-colors duration-200"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>

              <div className="border-t border-[#E2E8F0] pt-3 space-y-1">
                <Link
                  href="/archive"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 p-2 rounded-xs text-sm font-bold text-[#087A43] hover:bg-[#EAF5EE] transition-colors duration-200"
                >
                  <Archive className="w-4 h-4" />
                  <span>পুরাতন নিউজ আর্কাইভ</span>
                </Link>
                <Link
                  href="/gallery"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block p-2 rounded-xs text-sm font-semibold text-[#222222] hover:bg-[#F0F5FA] hover:text-[#123B5D] transition-colors duration-200"
                >
                  ছবি গ্যালারি
                </Link>
                <Link
                  href="/videos"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block p-2 rounded-xs text-sm font-semibold text-[#222222] hover:bg-[#F0F5FA] hover:text-[#123B5D] transition-colors duration-200"
                >
                  ভিডিও সংবাদ
                </Link>
              </div>
            </nav>

            {/* Drawer Footer */}
            <div className="p-4 border-t border-[#E2E8F0] bg-gray-50 text-xs text-[#64748B]">
              <p className="font-semibold text-[#222222]">বরিশালের প্রাণ</p>
              <p className="mt-1 mb-3">সত্যের সঙ্গে, মানুষের পাশে।</p>
              <SocialMediaIcons variant="drawer" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
