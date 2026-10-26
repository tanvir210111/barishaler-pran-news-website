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
        <Link
          href="/mfit-admin/feature/auto-news"
          className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors ${
            activePath === "/mfit-admin/feature/auto-news"
              ? "bg-[#EEF2FF] text-[#10B981]"
              : "text-[#2B3674] hover:bg-[#F4F7FC]"
          }`}
        >
          <Zap className="w-[19px] h-[19px] text-[#10B981] fill-[#10B981]" />
          <span>Auto News</span>
        </Link>

        {/* News Agent */}
        <Link
          href="/mfit-admin/feature/news-agent"
          className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors ${
            activePath === "/mfit-admin/feature/news-agent"
              ? "bg-[#EEF2FF] text-[#10B981]"
              : "text-[#2B3674] hover:bg-[#F4F7FC]"
          }`}
        >
          <Bot className="w-[19px] h-[19px] text-[#10B981]" />
          <span>News Agent</span>
        </Link>

        {/* Live TV */}
        <Link
          href="/mfit-admin/feature/live-tv"
          className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors ${
            activePath === "/mfit-admin/feature/live-tv"
              ? "bg-[#EEF2FF] text-[#10B981]"
              : "text-[#2B3674] hover:bg-[#F4F7FC]"
          }`}
        >
          <Radio className="w-[19px] h-[19px] text-[#10B981]" />
          <span>Live TV</span>
        </Link>

        {/* Audio News */}
        <div>
          <button
            type="button"
            onClick={() => toggleSubmenu("audioNews")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors cursor-pointer ${
              expandedMenus.audioNews || activePath?.includes("audio-news")
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
                expandedMenus.audioNews || activePath?.includes("audio-news") ? "rotate-180 text-[#3858F6]" : "text-[#A3AED0]"
              }`}
            />
          </button>
          {(expandedMenus.audioNews || activePath?.includes("audio-news")) &&
            renderSubMenu([
              { label: "All Audio", href: "/mfit-admin/feature/audio-news" },
              { label: "Add Audio", href: "/mfit-admin/feature/audio-news" },
            ])}
        </div>

        {/* Photo Story */}
        <div>
          <button
            type="button"
            onClick={() => toggleSubmenu("photoStory")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors cursor-pointer ${
              expandedMenus.photoStory || activePath?.includes("photo-story")
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
                expandedMenus.photoStory || activePath?.includes("photo-story") ? "rotate-180 text-[#3858F6]" : "text-[#A3AED0]"
              }`}
            />
          </button>
          {(expandedMenus.photoStory || activePath?.includes("photo-story")) &&
            renderSubMenu([
              { label: "All Stories", href: "/mfit-admin/feature/photo-story" },
              { label: "Add Story", href: "/mfit-admin/feature/photo-story" },
            ])}
        </div>

        {/* Reels Story */}
        <div>
          <button
            type="button"
            onClick={() => toggleSubmenu("reelsStory")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors cursor-pointer ${
              expandedMenus.reelsStory || activePath?.includes("reels-story")
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
                expandedMenus.reelsStory || activePath?.includes("reels-story") ? "rotate-180 text-[#3858F6]" : "text-[#A3AED0]"
              }`}
            />
          </button>
          {(expandedMenus.reelsStory || activePath?.includes("reels-story")) &&
            renderSubMenu([
              { label: "All Reels", href: "/mfit-admin/feature/reels-story" },
              { label: "Add Reel", href: "/mfit-admin/feature/reels-story" },
            ])}
        </div>

        {/* Quotes */}
        <div>
          <button
            type="button"
            onClick={() => toggleSubmenu("quotes")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors cursor-pointer ${
              expandedMenus.quotes || activePath?.includes("quotes")
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
                expandedMenus.quotes || activePath?.includes("quotes") ? "rotate-180 text-[#3858F6]" : "text-[#A3AED0]"
              }`}
            />
          </button>
          {(expandedMenus.quotes || activePath?.includes("quotes")) &&
            renderSubMenu([
              { label: "All Quotes", href: "/mfit-admin/feature/quotes" },
              { label: "Add Quote", href: "/mfit-admin/feature/quotes" },
            ])}
        </div>

        {/* Photo Gallery */}
        <div>
          <button
            type="button"
            onClick={() => toggleSubmenu("photoGallery")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors cursor-pointer ${
              expandedMenus.photoGallery || activePath?.includes("photo-gallery")
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
                expandedMenus.photoGallery || activePath?.includes("photo-gallery") ? "rotate-180 text-[#3858F6]" : "text-[#A3AED0]"
              }`}
            />
          </button>
          {(expandedMenus.photoGallery || activePath?.includes("photo-gallery")) &&
            renderSubMenu([
              { label: "All Galleries", href: "/mfit-admin/feature/photo-gallery" },
              { label: "Create Gallery", href: "/mfit-admin/feature/photo-gallery" },
            ])}
        </div>

        {/* Video Gallery */}
        <Link
          href="/mfit-admin/feature/video-gallery"
          className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors ${
            activePath === "/mfit-admin/feature/video-gallery"
              ? "bg-[#EEF2FF] text-[#7C3AED]"
              : "text-[#2B3674] hover:bg-[#F4F7FC]"
          }`}
        >
          <Video className="w-[19px] h-[19px] text-[#7C3AED]" />
          <span>Video Gallery</span>
        </Link>

        {/* Poll */}
        <div>
          <button
            type="button"
            onClick={() => toggleSubmenu("poll")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors cursor-pointer ${
              expandedMenus.poll || activePath?.includes("poll")
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
                expandedMenus.poll || activePath?.includes("poll") ? "rotate-180 text-[#3858F6]" : "text-[#A3AED0]"
              }`}
            />
          </button>
          {(expandedMenus.poll || activePath?.includes("poll")) &&
            renderSubMenu([
              { label: "All Polls", href: "/mfit-admin/feature/poll" },
              { label: "Create Poll", href: "/mfit-admin/feature/poll" },
            ])}
        </div>

        {/* Reactions & Ratings */}
        <Link
          href="/mfit-admin/feature/reactions"
          className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors ${
            activePath === "/mfit-admin/feature/reactions"
              ? "bg-[#EEF2FF] text-[#9333EA]"
              : "text-[#2B3674] hover:bg-[#F4F7FC]"
          }`}
        >
          <Smile className="w-[19px] h-[19px] text-[#9333EA]" />
          <span>Reactions & Ratings</span>
        </Link>

        {/* Pages */}
        <div>
          <button
            type="button"
            onClick={() => toggleSubmenu("pages")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors cursor-pointer ${
              expandedMenus.pages || activePath?.includes("pages")
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
                expandedMenus.pages || activePath?.includes("pages") ? "rotate-180 text-[#3858F6]" : "text-[#A3AED0]"
              }`}
            />
          </button>
          {(expandedMenus.pages || activePath?.includes("pages")) &&
            renderSubMenu([
              { label: "All Pages", href: "/mfit-admin/feature/pages" },
              { label: "Create Page", href: "/mfit-admin/feature/pages" },
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
              expandedMenus.headerFooter || activePath?.includes("header-footer")
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
                expandedMenus.headerFooter || activePath?.includes("header-footer") ? "rotate-180 text-[#3858F6]" : "text-[#A3AED0]"
              }`}
            />
          </button>
          {(expandedMenus.headerFooter || activePath?.includes("header-footer")) &&
            renderSubMenu([
              { label: "Header Settings", href: "/mfit-admin/feature/header-footer" },
              { label: "Footer Settings", href: "/mfit-admin/feature/header-footer" },
            ])}
        </div>

        {/* Homepage Settings */}
        <div>
          <button
            type="button"
            onClick={() => toggleSubmenu("homeSettings")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors cursor-pointer ${
              expandedMenus.homeSettings || activePath?.includes("homepage-settings")
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
                expandedMenus.homeSettings || activePath?.includes("homepage-settings") ? "rotate-180 text-[#3858F6]" : "text-[#A3AED0]"
              }`}
            />
          </button>
          {(expandedMenus.homeSettings || activePath?.includes("homepage-settings")) &&
            renderSubMenu([
              { label: "Layout Sections", href: "/mfit-admin/feature/homepage-settings" },
              { label: "Hero & Banners", href: "/mfit-admin/feature/homepage-settings" },
            ])}
        </div>

        {/* Post Settings */}
        <div>
          <button
            type="button"
            onClick={() => toggleSubmenu("postSettings")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors cursor-pointer ${
              expandedMenus.postSettings || activePath?.includes("post-settings")
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
                expandedMenus.postSettings || activePath?.includes("post-settings") ? "rotate-180 text-[#3858F6]" : "text-[#A3AED0]"
              }`}
            />
          </button>
          {(expandedMenus.postSettings || activePath?.includes("post-settings")) &&
            renderSubMenu([
              { label: "Single Post Layout", href: "/mfit-admin/feature/post-settings" },
              { label: "Related Posts", href: "/mfit-admin/feature/post-settings" },
            ])}
        </div>

        {/* Advertisement */}
        <div>
          <button
            type="button"
            onClick={() => toggleSubmenu("advertisement")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors cursor-pointer ${
              expandedMenus.advertisement || activePath?.includes("advertisement")
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
                expandedMenus.advertisement || activePath?.includes("advertisement") ? "rotate-180 text-[#3858F6]" : "text-[#A3AED0]"
              }`}
            />
          </button>
          {(expandedMenus.advertisement || activePath?.includes("advertisement")) &&
            renderSubMenu([
              { label: "Ad Slots", href: "/mfit-admin/feature/advertisement" },
              { label: "Add Ad Banner", href: "/mfit-admin/feature/advertisement" },
            ])}
        </div>

        {/* Menu */}
        <div>
          <button
            type="button"
            onClick={() => toggleSubmenu("menu")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors cursor-pointer ${
              expandedMenus.menu || activePath?.includes("menu")
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
                expandedMenus.menu || activePath?.includes("menu") ? "rotate-180 text-[#3858F6]" : "text-[#A3AED0]"
              }`}
            />
          </button>
          {(expandedMenus.menu || activePath?.includes("menu")) &&
            renderSubMenu([
              { label: "Primary Menu", href: "/mfit-admin/feature/menu" },
              { label: "Footer Menu", href: "/mfit-admin/feature/menu" },
            ])}
        </div>

        {/* Photo Card */}
        <div>
          <button
            type="button"
            onClick={() => toggleSubmenu("photoCard")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors cursor-pointer ${
              expandedMenus.photoCard || activePath?.includes("photo-card")
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
                expandedMenus.photoCard || activePath?.includes("photo-card") ? "rotate-180 text-[#3858F6]" : "text-[#A3AED0]"
              }`}
            />
          </button>
          {(expandedMenus.photoCard || activePath?.includes("photo-card")) &&
            renderSubMenu([
              { label: "All Cards", href: "/mfit-admin/feature/photo-card" },
              { label: "Create Card", href: "/mfit-admin/feature/photo-card" },
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
              expandedMenus.writersAccount || activePath?.includes("writers-account")
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
                expandedMenus.writersAccount || activePath?.includes("writers-account") ? "rotate-180 text-[#3858F6]" : "text-[#A3AED0]"
              }`}
            />
          </button>
          {(expandedMenus.writersAccount || activePath?.includes("writers-account")) &&
            renderSubMenu([
              { label: "All Writers", href: "/mfit-admin/feature/writers-account" },
              { label: "Add Writer", href: "/mfit-admin/feature/writers-account" },
            ])}
        </div>

        {/* Settings */}
        <div>
          <button
            type="button"
            onClick={() => toggleSubmenu("settings")}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors cursor-pointer ${
              expandedMenus.settings || activePath === "/mfit-admin/settings"
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
                expandedMenus.settings || activePath === "/mfit-admin/settings" ? "rotate-180 text-[#3858F6]" : "text-[#A3AED0]"
              }`}
            />
          </button>
          {(expandedMenus.settings || activePath === "/mfit-admin/settings") &&
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
              expandedMenus.developerZone || activePath?.includes("developer-zone")
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
                expandedMenus.developerZone || activePath?.includes("developer-zone") ? "rotate-180 text-[#3858F6]" : "text-[#A3AED0]"
              }`}
            />
          </button>
          {(expandedMenus.developerZone || activePath?.includes("developer-zone")) &&
            renderSubMenu([
              { label: "API Keys", href: "/mfit-admin/feature/developer-zone" },
              { label: "Webhooks", href: "/mfit-admin/feature/developer-zone" },
            ])}
        </div>

        {/* Web Access */}
        <Link
          href="/mfit-admin/feature/web-access"
          className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors ${
            activePath === "/mfit-admin/feature/web-access"
              ? "bg-[#EEF2FF] text-[#DC2626]"
              : "text-[#2B3674] hover:bg-[#F4F7FC]"
          }`}
        >
          <ScanFace className="w-[19px] h-[19px] text-[#DC2626]" />
          <span>Web Access</span>
        </Link>

        {/* Security */}
        <Link
          href="/mfit-admin/feature/security"
          className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl font-bold text-[14px] transition-colors mb-6 ${
            activePath === "/mfit-admin/feature/security"
              ? "bg-[#EEF2FF] text-[#DC2626]"
              : "text-[#2B3674] hover:bg-[#F4F7FC]"
          }`}
        >
          <Shield className="w-[19px] h-[19px] text-[#DC2626]" />
          <span>Security</span>
        </Link>
      </div>
    </aside>
  );
}
