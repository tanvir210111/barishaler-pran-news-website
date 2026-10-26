"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Home,
  Image as ImageIcon,
  ChevronDown,
  FileEdit,
  PenTool,
  Zap,
  Bot,
  Radio,
  Headphones,
  BookOpen,
  Film,
  Quote,
  Images,
  Video,
  PieChart,
  Smile,
  FileText,
  Layers,
  CreditCard,
  Users,
  Settings as SettingsIcon,
  Code2,
  ScanFace,
  Shield,
  Layout,
} from "lucide-react";

interface MfitAdminSidebarProps {
  isOpen: boolean;
  activePath?: string;
}

export default function MfitAdminSidebar({
  isOpen,
  activePath = "/mfit-admin",
}: MfitAdminSidebarProps) {
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({
    article: true,
  });

  const toggleSubmenu = (key: string) => {
    setExpandedMenus((prev) => (prev[key] ? {} : { [key]: true }));
  };

  const renderSubMenu = (items: { label: string; href: string }[]) => (
    <div className="pl-9 pr-3 pt-2 pb-2 space-y-2.5">
      {items.map((item, idx) => {
        const isActive = activePath === item.href;
        return (
          <Link
            key={idx}
            href={item.href}
            className={`group flex items-center gap-2.5 py-0.5 text-[13.5px] transition-colors select-none ${
              isActive
                ? "text-[#3858F6] font-bold"
                : "text-[#0A2540] font-semibold hover:text-[#3858F6]"
            }`}
          >
            {isActive ? (
              <span className="w-[6px] h-[6px] rounded-full bg-[#3858F6] shrink-0 shadow-xs" />
            ) : (
              <span className="w-[6px] h-[6px] rounded-full border border-[#64748B] group-hover:border-[#3858F6] shrink-0 transition-colors" />
            )}
            <span>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );

  return (
    <aside
      className={`fixed lg:sticky top-[60px] left-0 z-30 h-[calc(100vh-60px)] shrink-0 bg-white border-[#E8EEF8] transition-all duration-300 ease-in-out overflow-y-auto overflow-x-hidden ${
        isOpen
          ? "w-[270px] border-r translate-x-0 opacity-100"
          : "w-0 border-r-0 -translate-x-full lg:translate-x-0 lg:w-0 opacity-0 pointer-events-none"
      }`}
      style={{
        scrollbarWidth: isOpen ? "thin" : "none",
        scrollbarColor: "#CBD5E1 transparent",
      }}
    >
      <div className="w-[270px] pt-5.5 pb-4 pl-4 pr-3 space-y-1.5 text-sm select-none">
        {/* 1. Dashboard (Active state: blue-violet icon, text, light blue pill) */}
        <Link
          href="/mfit-admin"
          className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors ${
            activePath === "/mfit-admin" || activePath === "/admin"
              ? "bg-[#EEF2FF] text-[#4318FF]"
              : "text-[#2B3674] hover:bg-[#F4F7FC]"
          }`}
        >
          <Home className="w-[19px] h-[19px] text-[#4318FF] stroke-[2.2]" />
          <span>Dashboard</span>
        </Link>

        {/* 2. Media Library matching reference screenshot */}
        <div>
          <button
            type="button"
            onClick={() => toggleSubmenu("mediaLibrary")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors cursor-pointer ${
              expandedMenus.mediaLibrary
                ? "bg-[#EEF2FF] text-[#3858F6]"
                : "text-[#2B3674] hover:bg-[#F4F7FC]"
            }`}
          >
            <div className="flex items-center gap-3">
              <ImageIcon className="w-[19px] h-[19px] text-[#B45309] stroke-[2]" />
              <span>Media Library</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                expandedMenus.mediaLibrary ? "rotate-180 text-[#3858F6]" : "text-[#A3AED0]"
              }`}
            />
          </button>
          {expandedMenus.mediaLibrary &&
            renderSubMenu([
              { label: "Add Media", href: "/mfit-admin/add-media" },
              { label: "All Media", href: "/mfit-admin/media" },
            ])}
        </div>

        {/* SECTION: CONTENT */}
        <div className="pt-3.5 pb-1 px-3.5">
          <p className="text-[11.5px] font-black uppercase tracking-wider text-[#A3AED0]">
            CONTENT
          </p>
        </div>

        {/* Article */}
        <div>
          <button
            type="button"
            onClick={() => toggleSubmenu("article")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors cursor-pointer ${
              expandedMenus.article
                ? "bg-[#EEF2FF] text-[#3858F6]"
                : "text-[#2B3674] hover:bg-[#F4F7FC]"
            }`}
          >
            <div className="flex items-center gap-3">
              <PenTool className="w-[19px] h-[19px] text-[#DC2626] stroke-[2]" />
              <span>Article</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                expandedMenus.article ? "rotate-180 text-[#3858F6]" : "text-[#A3AED0]"
              }`}
            />
          </button>
          {expandedMenus.article &&
            renderSubMenu([
              { label: "New Article", href: "/mfit-admin/new-article" },
              { label: "Article", href: "/mfit-admin/articles" },
              { label: "Published Article", href: "/mfit-admin/articles?status=PUBLISHED" },
              { label: "Draft Article", href: "/mfit-admin/articles?status=DRAFT" },
              { label: "Category", href: "/mfit-admin/categories" },
            ])}
        </div>

        {/* Auto News */}
        <a
          href="#auto-news"
          className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-[14px] text-[#2B3674] hover:bg-[#F4F7FC] transition-colors"
        >
          <Zap className="w-[19px] h-[19px] text-[#10B981] fill-[#10B981]" />
          <span>Auto News</span>
        </a>

        {/* News Agent */}
        <a
          href="#news-agent"
          className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-[14px] text-[#2B3674] hover:bg-[#F4F7FC] transition-colors"
        >
          <Bot className="w-[19px] h-[19px] text-[#10B981]" />
          <span>News Agent</span>
        </a>

        {/* Live TV */}
        <a
          href="#live-tv"
          className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-[14px] text-[#2B3674] hover:bg-[#F4F7FC] transition-colors"
        >
          <Radio className="w-[19px] h-[19px] text-[#10B981]" />
          <span>Live TV</span>
        </a>

        {/* Audio News */}
        <div>
          <button
            type="button"
            onClick={() => toggleSubmenu("audioNews")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors cursor-pointer ${
              expandedMenus.audioNews
                ? "bg-[#EEF2FF] text-[#3858F6]"
                : "text-[#2B3674] hover:bg-[#F4F7FC]"
            }`}
          >
            <div className="flex items-center gap-3">
              <Headphones className="w-[19px] h-[19px] text-[#EA580C]" />
              <span>Audio News</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                expandedMenus.audioNews ? "rotate-180 text-[#3858F6]" : "text-[#A3AED0]"
              }`}
            />
          </button>
          {expandedMenus.audioNews &&
            renderSubMenu([
              { label: "All Audio", href: "#all-audio" },
              { label: "Add Audio", href: "#add-audio" },
            ])}
        </div>

        {/* Photo Story */}
        <div>
          <button
            type="button"
            onClick={() => toggleSubmenu("photoStory")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors cursor-pointer ${
              expandedMenus.photoStory
                ? "bg-[#EEF2FF] text-[#3858F6]"
                : "text-[#2B3674] hover:bg-[#F4F7FC]"
            }`}
          >
            <div className="flex items-center gap-3">
              <BookOpen className="w-[19px] h-[19px] text-[#9333EA]" />
              <span>Photo Story</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                expandedMenus.photoStory ? "rotate-180 text-[#3858F6]" : "text-[#A3AED0]"
              }`}
            />
          </button>
          {expandedMenus.photoStory &&
            renderSubMenu([
              { label: "All Stories", href: "#all-stories" },
              { label: "Add Story", href: "#add-story" },
            ])}
        </div>

        {/* Reels Story */}
        <div>
          <button
            type="button"
            onClick={() => toggleSubmenu("reelsStory")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors cursor-pointer ${
              expandedMenus.reelsStory
                ? "bg-[#EEF2FF] text-[#3858F6]"
                : "text-[#2B3674] hover:bg-[#F4F7FC]"
            }`}
          >
            <div className="flex items-center gap-3">
              <Film className="w-[19px] h-[19px] text-[#EF4444]" />
              <span>Reels Story</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                expandedMenus.reelsStory ? "rotate-180 text-[#3858F6]" : "text-[#A3AED0]"
              }`}
            />
          </button>
          {expandedMenus.reelsStory &&
            renderSubMenu([
              { label: "All Reels", href: "#all-reels" },
              { label: "Add Reel", href: "#add-reel" },
            ])}
        </div>

        {/* Quotes */}
        <div>
          <button
            type="button"
            onClick={() => toggleSubmenu("quotes")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors cursor-pointer ${
              expandedMenus.quotes
                ? "bg-[#EEF2FF] text-[#3858F6]"
                : "text-[#2B3674] hover:bg-[#F4F7FC]"
            }`}
          >
            <div className="flex items-center gap-3">
              <Quote className="w-[19px] h-[19px] text-[#DC2626]" />
              <span>Quotes</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                expandedMenus.quotes ? "rotate-180 text-[#3858F6]" : "text-[#A3AED0]"
              }`}
            />
          </button>
          {expandedMenus.quotes &&
            renderSubMenu([
              { label: "All Quotes", href: "#all-quotes" },
              { label: "Add Quote", href: "#add-quote" },
            ])}
        </div>

        {/* Photo Gallery */}
        <div>
          <button
            type="button"
            onClick={() => toggleSubmenu("photoGallery")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors cursor-pointer ${
              expandedMenus.photoGallery
                ? "bg-[#EEF2FF] text-[#3858F6]"
                : "text-[#2B3674] hover:bg-[#F4F7FC]"
            }`}
          >
            <div className="flex items-center gap-3">
              <Images className="w-[19px] h-[19px] text-[#F97316]" />
              <span>Photo Gallery</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                expandedMenus.photoGallery ? "rotate-180 text-[#3858F6]" : "text-[#A3AED0]"
              }`}
            />
          </button>
          {expandedMenus.photoGallery &&
            renderSubMenu([
              { label: "All Galleries", href: "#all-galleries" },
              { label: "Create Gallery", href: "#add-gallery" },
            ])}
        </div>

        {/* Video Gallery */}
        <a
          href="#video-gallery"
          className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-[14px] text-[#2B3674] hover:bg-[#F4F7FC] transition-colors"
        >
          <Video className="w-[19px] h-[19px] text-[#7C3AED]" />
          <span>Video Gallery</span>
        </a>

        {/* Poll */}
        <div>
          <button
            type="button"
            onClick={() => toggleSubmenu("poll")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors cursor-pointer ${
              expandedMenus.poll
                ? "bg-[#EEF2FF] text-[#3858F6]"
                : "text-[#2B3674] hover:bg-[#F4F7FC]"
            }`}
          >
            <div className="flex items-center gap-3">
              <PieChart className="w-[19px] h-[19px] text-[#2563EB]" />
              <span>Poll</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                expandedMenus.poll ? "rotate-180 text-[#3858F6]" : "text-[#A3AED0]"
              }`}
            />
          </button>
          {expandedMenus.poll &&
            renderSubMenu([
              { label: "All Polls", href: "#all-polls" },
              { label: "Create Poll", href: "#create-poll" },
            ])}
        </div>

        {/* Reactions & Ratings */}
        <a
          href="#reactions"
          className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-[14px] text-[#2B3674] hover:bg-[#F4F7FC] transition-colors"
        >
          <Smile className="w-[19px] h-[19px] text-[#9333EA]" />
          <span>Reactions & Ratings</span>
        </a>

        {/* Pages */}
        <div>
          <button
            type="button"
            onClick={() => toggleSubmenu("pages")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors cursor-pointer ${
              expandedMenus.pages
                ? "bg-[#EEF2FF] text-[#3858F6]"
                : "text-[#2B3674] hover:bg-[#F4F7FC]"
            }`}
          >
            <div className="flex items-center gap-3">
              <FileText className="w-[19px] h-[19px] text-[#16A34A] fill-[#16A34A]" />
              <span>Pages</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                expandedMenus.pages ? "rotate-180 text-[#3858F6]" : "text-[#A3AED0]"
              }`}
            />
          </button>
          {expandedMenus.pages &&
            renderSubMenu([
              { label: "All Pages", href: "#all-pages" },
              { label: "Create Page", href: "#create-page" },
            ])}
        </div>

        {/* SECTION: CUSTOMIZATION */}
        <div className="pt-3.5 pb-1 px-3.5">
          <p className="text-[11.5px] font-black uppercase tracking-wider text-[#A3AED0]">
            CUSTOMIZATION
          </p>
        </div>

        {/* Header and Footer */}
        <div>
          <button
            type="button"
            onClick={() => toggleSubmenu("headerFooter")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors cursor-pointer ${
              expandedMenus.headerFooter
                ? "bg-[#EEF2FF] text-[#3858F6]"
                : "text-[#2B3674] hover:bg-[#F4F7FC]"
            }`}
          >
            <div className="flex items-center gap-3">
              <Layout className="w-[19px] h-[19px] text-[#16A34A] fill-[#16A34A]" />
              <span>Header and Footer</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                expandedMenus.headerFooter ? "rotate-180 text-[#3858F6]" : "text-[#A3AED0]"
              }`}
            />
          </button>
          {expandedMenus.headerFooter &&
            renderSubMenu([
              { label: "Header Settings", href: "/mfit-admin/settings" },
              { label: "Footer Settings", href: "/mfit-admin/settings" },
            ])}
        </div>

        {/* Homepage Settings */}
        <div>
          <button
            type="button"
            onClick={() => toggleSubmenu("homeSettings")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors cursor-pointer ${
              expandedMenus.homeSettings
                ? "bg-[#EEF2FF] text-[#3858F6]"
                : "text-[#2B3674] hover:bg-[#F4F7FC]"
            }`}
          >
            <div className="flex items-center gap-3">
              <Home className="w-[19px] h-[19px] text-[#3B82F6] fill-[#3B82F6]" />
              <span>Homepage Settings</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                expandedMenus.homeSettings ? "rotate-180 text-[#3858F6]" : "text-[#A3AED0]"
              }`}
            />
          </button>
          {expandedMenus.homeSettings &&
            renderSubMenu([
              { label: "Layout Sections", href: "#layout" },
              { label: "Hero & Banners", href: "#banners" },
            ])}
        </div>

        {/* Post Settings */}
        <div>
          <button
            type="button"
            onClick={() => toggleSubmenu("postSettings")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors cursor-pointer ${
              expandedMenus.postSettings
                ? "bg-[#EEF2FF] text-[#3858F6]"
                : "text-[#2B3674] hover:bg-[#F4F7FC]"
            }`}
          >
            <div className="flex items-center gap-3">
              <Layers className="w-[19px] h-[19px] text-[#1D4ED8]" />
              <span>Post Settings</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                expandedMenus.postSettings ? "rotate-180 text-[#3858F6]" : "text-[#A3AED0]"
              }`}
            />
          </button>
          {expandedMenus.postSettings &&
            renderSubMenu([
              { label: "Single Post Layout", href: "#post-layout" },
              { label: "Related Posts", href: "#related-posts" },
            ])}
        </div>

        {/* Advertisement */}
        <div>
          <button
            type="button"
            onClick={() => toggleSubmenu("advertisement")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors cursor-pointer ${
              expandedMenus.advertisement
                ? "bg-[#EEF2FF] text-[#3858F6]"
                : "text-[#2B3674] hover:bg-[#F4F7FC]"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 bg-[#7C3AED] text-white text-[9.5px] font-black rounded-xs flex items-center justify-center leading-none">
                Ad
              </span>
              <span>Advertisement</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                expandedMenus.advertisement ? "rotate-180 text-[#3858F6]" : "text-[#A3AED0]"
              }`}
            />
          </button>
          {expandedMenus.advertisement &&
            renderSubMenu([
              { label: "Ad Slots", href: "#ad-spaces" },
              { label: "Add Ad Banner", href: "#add-ad" },
            ])}
        </div>

        {/* Menu */}
        <div>
          <button
            type="button"
            onClick={() => toggleSubmenu("menu")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors cursor-pointer ${
              expandedMenus.menu
                ? "bg-[#EEF2FF] text-[#3858F6]"
                : "text-[#2B3674] hover:bg-[#F4F7FC]"
            }`}
          >
            <div className="flex items-center gap-3">
              <CreditCard className="w-[19px] h-[19px] text-[#DC2626]" />
              <span>Menu</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                expandedMenus.menu ? "rotate-180 text-[#3858F6]" : "text-[#A3AED0]"
              }`}
            />
          </button>
          {expandedMenus.menu &&
            renderSubMenu([
              { label: "Primary Menu", href: "#primary-menu" },
              { label: "Footer Menu", href: "#footer-menu" },
            ])}
        </div>

        {/* Photo Card */}
        <div>
          <button
            type="button"
            onClick={() => toggleSubmenu("photoCard")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors cursor-pointer ${
              expandedMenus.photoCard
                ? "bg-[#EEF2FF] text-[#3858F6]"
                : "text-[#2B3674] hover:bg-[#F4F7FC]"
            }`}
          >
            <div className="flex items-center gap-3">
              <CreditCard className="w-[19px] h-[19px] text-[#2563EB]" />
              <span>Photo Card</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                expandedMenus.photoCard ? "rotate-180 text-[#3858F6]" : "text-[#A3AED0]"
              }`}
            />
          </button>
          {expandedMenus.photoCard &&
            renderSubMenu([
              { label: "All Cards", href: "#all-photo-cards" },
              { label: "Create Card", href: "#create-photo-card" },
            ])}
        </div>

        {/* SECTION: ADVANCE */}
        <div className="pt-3.5 pb-1 px-3.5">
          <p className="text-[11.5px] font-black uppercase tracking-wider text-[#A3AED0]">
            ADVANCE
          </p>
        </div>

        {/* Writers Account */}
        <div>
          <button
            type="button"
            onClick={() => toggleSubmenu("writersAccount")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors cursor-pointer ${
              expandedMenus.writersAccount
                ? "bg-[#EEF2FF] text-[#3858F6]"
                : "text-[#2B3674] hover:bg-[#F4F7FC]"
            }`}
          >
            <div className="flex items-center gap-3">
              <Users className="w-[19px] h-[19px] text-[#16A34A]" />
              <span>Writers Account</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                expandedMenus.writersAccount ? "rotate-180 text-[#3858F6]" : "text-[#A3AED0]"
              }`}
            />
          </button>
          {expandedMenus.writersAccount &&
            renderSubMenu([
              { label: "All Writers", href: "#all-writers" },
              { label: "Add Writer", href: "#add-writer" },
            ])}
        </div>

        {/* Settings */}
        <div>
          <button
            type="button"
            onClick={() => toggleSubmenu("settings")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors cursor-pointer ${
              expandedMenus.settings
                ? "bg-[#EEF2FF] text-[#3858F6]"
                : "text-[#2B3674] hover:bg-[#F4F7FC]"
            }`}
          >
            <div className="flex items-center gap-3">
              <SettingsIcon className="w-[19px] h-[19px] text-[#2563EB]" />
              <span>Settings</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                expandedMenus.settings ? "rotate-180 text-[#3858F6]" : "text-[#A3AED0]"
              }`}
            />
          </button>
          {expandedMenus.settings &&
            renderSubMenu([
              { label: "General Settings", href: "/mfit-admin/settings" },
              { label: "SEO & Metadata", href: "/mfit-admin/settings" },
            ])}
        </div>

        {/* Developer Zone */}
        <div>
          <button
            type="button"
            onClick={() => toggleSubmenu("developerZone")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors cursor-pointer ${
              expandedMenus.developerZone
                ? "bg-[#EEF2FF] text-[#3858F6]"
                : "text-[#2B3674] hover:bg-[#F4F7FC]"
            }`}
          >
            <div className="flex items-center gap-3">
              <Code2 className="w-[19px] h-[19px] text-[#16A34A]" />
              <span>Developer Zone</span>
            </div>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                expandedMenus.developerZone ? "rotate-180 text-[#3858F6]" : "text-[#A3AED0]"
              }`}
            />
          </button>
          {expandedMenus.developerZone &&
            renderSubMenu([
              { label: "API Keys", href: "#api-keys" },
              { label: "Webhooks", href: "#webhooks" },
            ])}
        </div>

        {/* Web Access */}
        <a
          href="#web-access"
          className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-[14px] text-[#2B3674] hover:bg-[#F4F7FC] transition-colors"
        >
          <ScanFace className="w-[19px] h-[19px] text-[#DC2626]" />
          <span>Web Access</span>
        </a>

        {/* Security */}
        <a
          href="#security"
          className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-[14px] text-[#2B3674] hover:bg-[#F4F7FC] transition-colors mb-6"
        >
          <Shield className="w-[19px] h-[19px] text-[#DC2626]" />
          <span>Security</span>
        </a>
      </div>
    </aside>
  );
}
