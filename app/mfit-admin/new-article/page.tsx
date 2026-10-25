"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Sparkles,
  Settings,
  LayoutGrid,
  Upload,
  Image as ImageIcon,
  Calendar,
  Save,
  CheckCircle2,
  Undo2,
  Redo2,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  Heading2,
  Palette,
  FileText,
  Video,
  Link2,
  Table,
  RotateCcw,
  Code,
  X,
  FileCheck,
} from "lucide-react";
import MfitAdminNavbar from "@/components/admin/MfitAdminNavbar";
import MfitAdminSidebar from "@/components/admin/MfitAdminSidebar";
import ScrollToTop from "@/components/common/ScrollToTop";
import {
  DIVISIONS,
  DISTRICTS,
  getDistrictsByDivision,
  getUpazilasByDistrict,
  getDivisionByDistrictId,
} from "@/data/bangladeshLocations";
import { ARTICLE_WRITERS } from "@/data/articleWriters";

const SUB_CATEGORIES = [
  "চাকরি",
  "সোশ্যাল মিডিয়া",
  "রাজধানী",
  "আইন আদালত",
  "অপরাধ দুর্নীতি",
  "সম্পাদকীয়",
  "মতামত",
  "জাতীয়",
  "রাজনীতি",
  "আন্তর্জাতিক",
  "খেলাধুলা",
  "বিনোদন",
  "শিক্ষা",
  "প্রযুক্তি",
  "অর্থনীতি",
  "স্বাস্থ্য",
  "সারাদেশ",
];

export default function NewArticlePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // AI Prompt State
  const [aiPrompt, setAiPrompt] = useState("");
  const [isGeneratingAi, setIsGeneratingAi] = useState(false);

  // Form Fields
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [attachedFileName, setAttachedFileName] = useState("");

  // Location Cascade States
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedUpazila, setSelectedUpazila] = useState("");

  // Writers State
  const [guestWriterName, setGuestWriterName] = useState("");
  const [guestWriterDesignation, setGuestWriterDesignation] = useState("");
  const [selectedWriter, setSelectedWriter] = useState("");

  // Right Column Fields
  const [category, setCategory] = useState("");
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([]);
  const [tagTopic, setTagTopic] = useState("");

  // Toggles
  const [isNewsTicker, setIsNewsTicker] = useState(false);
  const [isLeadNews, setIsLeadNews] = useState(false);
  const [isSpotlight, setIsSpotlight] = useState(false);
  const [isSliderNews, setIsSliderNews] = useState(false);

  // Image & Meta
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [imageCaption, setImageCaption] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [publishStatus, setPublishStatus] = useState("Published");

  // Notifications
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageUploadRef = useRef<HTMLInputElement>(null);

  // Set default formatted date on mount
  useEffect(() => {
    const now = new Date();
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    const yyyy = now.getFullYear();

    let hours = now.getHours();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const hh = String(hours).padStart(2, "0");
    const min = String(now.getMinutes()).padStart(2, "0");
    const ss = String(now.getSeconds()).padStart(2, "0");

    setPublishDate(`${mm}/${dd}/${yyyy} ${hh}:${min}:${ss} ${ampm}`);
  }, []);

  // Filtered districts based on selected division
  const availableDistricts = selectedDivision
    ? getDistrictsByDivision(selectedDivision)
    : DISTRICTS;

  // Filtered upazilas based on selected district
  const availableUpazilas = selectedDistrict
    ? getUpazilasByDistrict(selectedDistrict)
    : [];

  // Handle Division Change
  const handleDivisionChange = (divisionId: string) => {
    setSelectedDivision(divisionId);
    // If current district doesn't belong to this division, reset district and upazila
    if (selectedDistrict) {
      const parentDiv = getDivisionByDistrictId(selectedDistrict);
      if (parentDiv !== divisionId) {
        setSelectedDistrict("");
        setSelectedUpazila("");
      }
    }
  };

  // Handle District Change
  const handleDistrictChange = (districtId: string) => {
    setSelectedDistrict(districtId);
    setSelectedUpazila(""); // Reset upazila on district change

    // If division wasn't selected, auto-select corresponding division
    if (districtId) {
      const parentDiv = getDivisionByDistrictId(districtId);
      if (parentDiv && parentDiv !== selectedDivision) {
        setSelectedDivision(parentDiv);
      }
    }
  };

  // Sub Category Toggle
  const toggleSubCategory = (subCat: string) => {
    setSelectedSubCategories((prev) =>
      prev.includes(subCat)
        ? prev.filter((item) => item !== subCat)
        : [...prev, subCat]
    );
  };

  // AI News Generator Simulation
  const handleGenerateAiNews = () => {
    if (!aiPrompt.trim()) {
      alert("অনুগ্রহ করে একটি নিউজের বিষয় বা প্রম্পট লিখুন");
      return;
    }

    setIsGeneratingAi(true);

    setTimeout(() => {
      const promptLower = aiPrompt.toLowerCase();
      let genTitle = "";
      let genSubtitle = "";
      let genContent = "";
      let genCategory = "জাতীয়";

      if (promptLower.includes("মেট্রোরেল") || promptLower.includes("metro")) {
        genTitle = "ঢাকায় নতুন মেট্রোরেল রুটের উদ্বোধন: স্বস্তির নিঃশ্বাস নগরবাসীর";
        genSubtitle = "যানজট নিরসনে নতুন মাইলফলক, প্রতিদিন অতিরিক্ত দুই লাখ যাত্রী যাতায়াত করতে পারবেন";
        genContent = `রাজধানী ঢাকার যোগাযোগ ব্যবস্থায় আরেকটি নতুন মাইলফলক রচিত হলো। আজ সকালে আনুষ্ঠানিকভাবে নতুন মেট্রোরেল সম্প্রসারিত রুটের শুভ উদ্বোধন ঘোষণা করা হয়।\n\nউদ্বোধনী অনুষ্ঠানে সংশ্লিষ্ট কর্তৃপক্ষ জানান, নতুন এই রুটে অত্যাধুনিক বিদ্যুৎ সাশ্রয়ী ট্রেন চলাচল করবে। এর ফলে ফার্মগেট, মতিঝিল ও মিরপুরের মধ্যকার যানজট সহনীয় মাত্রায় নেমে আসবে এবং কর্মজীবী মানুষের মূল্যবান কর্মঘণ্টা সাশ্রয় হবে।\n\nপ্রথম দিনেই স্টেশনগুলোতে উপচে পড়া ভিড় লক্ষ্য করা গেছে। যাত্রীরা দ্রুতগতির ও স্বস্তিদায়ক এই যাতায়াত ব্যবস্থায় দারুণ উচ্ছ্বাস প্রকাশ করেছেন।`;
        genCategory = "রাজধানী";
      } else if (promptLower.includes("বাংলাদেশ") || promptLower.includes("ম্যাচ") || promptLower.includes("খেলা")) {
        genTitle = "শ্বাসরুদ্ধকর লড়াইয়ে শেষ ওভারে বাংলাদেশের রোমাঞ্চকর জয়";
        genSubtitle = "ব্যাটারদের দৃঢ়তা ও শেষ ওভারে দুর্দান্ত বোলিংয়ে জয় ছিনিয়ে নিল টাইগাররা";
        genContent = `শেষ ওভারের নাটকীয়তায় শ্বাসরুদ্ধকর জয় পেল বাংলাদেশ দল। টানটান উত্তেজনার ম্যাচে প্রতিপক্ষকে হারিয়ে মাঠ ছাড়ল টাইগাররা।\n\nম্যাচের শুরুতে টসে জিতে ব্যাট করতে নেমে নির্ধারিত ২০ ওভারে লড়াই করার মতো পুঁজি গড়ে দল। মিডল অর্ডারের দায়িত্বশীল ইনিংস ম্যাচের ভিত্তি গড়ে দেয়।\n\nশেষ ওভারে প্রতিপক্ষের প্রয়োজন ছিল ১২ রান। দুর্দান্ত ইয়র্কার ও নিখুঁত লাইন-লেন্থে মাত্র ৪ রান দিয়ে জয় নিশ্চিত করেন বোলাররা। এই অবিস্মরণীয় জয়ে সারা দেশে ক্রীড়াপ্রেমীদের মধ্যে আনন্দ উল্লাস ছড়িয়ে পড়েছে।`;
        genCategory = "খেলাধুla";
      } else {
        genTitle = `${aiPrompt}: বিস্তারিত সংবাদ ও পটভূমি`;
        genSubtitle = "ঘটনাস্থল থেকে প্রাপ্ত সর্বশেষ তথ্য ও সার্বিক পরিস্থিতির বিশ্লেষণ";
        genContent = `${aiPrompt} সংক্রান্ত বিষয়ে সংশ্লিষ্ট মহলে ব্যাপক আলোচনা চলছে। আজ সকালে প্রাপ্ত সর্বশেষ তথ্যানুযায়ী, বিষয়টির সুষ্ঠু সমাধানে উচ্চপর্যায়ের একটি টিম কাজ করছে।\n\nস্থানীয় প্রতিনিধিরা জানান, সাধারণ মানুষের মাঝে এটি নিয়ে ইতিবাচক সাড়া দেখা গেছে। প্রশাসন সার্বক্ষণিক পরিস্থিতি পর্যবেক্ষণ করছে এবং যেকোনো বিভ্রান্তিকর তথ্য রোধে সতর্ক থাকার পরামর্শ দেওয়া হয়েছে।\n\nঅনলাইন ও মাঠ পর্যায়ে আমাদের নিজস্ব প্রতিনিধি দল সার্বিক ঘটনার ওপর নিবিড় নজর রাখছে। পরবর্তী বুলেটিনে আরো বিস্তারিত তুলে ধরা হবে।`;
      }

      setTitle(genTitle);
      setSubtitle(genSubtitle);
      setContent(genContent);
      setCategory(genCategory);
      setTagTopic(aiPrompt.slice(0, 30));
      setSelectedWriter("writer-1"); // Default to Editor & Publisher
      setIsGeneratingAi(false);

      showToast("✨ এআই সফলভাবে নিউজ তৈরি করেছে!");
    }, 900);
  };

  // Image Upload Handler
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        setPreviewImage(uploadEvent.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Form Submit
  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      alert("অনুগ্রহ করে আর্টিকেলের শিরোনাম (Article Title) দিন।");
      return;
    }

    showToast("🎉 নতুন পোস্ট সফলভাবে প্রকাশিত হয়েছে!");
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#F0F4FA] text-[#1E293B] flex flex-col font-sans">
      {/* Top Navbar */}
      <MfitAdminNavbar
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        isSidebarOpen={isSidebarOpen}
      />

      {/* Main Container: Sidebar + Editor */}
      <div className="flex-1 flex">
        {/* Left Sidebar */}
        <MfitAdminSidebar isOpen={isSidebarOpen} activePath="/mfit-admin/new-article" />

        {/* Content Area */}
        <main className="flex-1 w-full p-3 sm:px-5 sm:py-4 lg:px-6 lg:py-4 min-w-0 flex flex-col justify-between">
          <div>
            {/* Top Header Row: New Article + All Article button */}
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-[21px] sm:text-[23px] font-bold text-[#0A2540] tracking-tight">
                New Article
              </h1>

              <Link
                href="/mfit-admin"
                className="bg-[#1677FF] hover:bg-blue-600 text-white text-[13px] font-medium px-3.5 py-1.5 rounded-md flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
              >
                <LayoutGrid className="w-4 h-4 stroke-[2]" />
                <span>All Article</span>
              </Link>
            </div>

            {/* AI News Writer Box */}
            <div className="bg-white rounded-xl border border-[#D5E1F5] shadow-xs p-4 sm:p-5 mb-5 relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-[#6941C6]/10 flex items-center justify-center text-[#6941C6]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h2 className="text-[14.5px] font-bold text-[#1E293B]">
                    AI News Writer
                  </h2>
                  <span className="bg-[#7C3AED] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Gemini
                  </span>
                </div>

                <button
                  type="button"
                  title="AI Writer Settings"
                  className="text-gray-400 hover:text-gray-600 p-1 rounded-md transition-colors cursor-pointer"
                >
                  <Settings className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-2.5">
                <label className="block text-[12.5px] font-medium text-[#475569]">
                  News Topic / Prompt
                </label>
                <textarea
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  rows={2}
                  placeholder="যেমন: বাংলাদেশ বনাম ভারত ম্যাচে বাংলাদেশের জয় / ঢাকায় নতুন মেট্রোরেল উদ্বোধন"
                  className="w-full text-[13px] px-3.5 py-2.5 border border-[#CBD5E1] rounded-md outline-none focus:border-[#1677FF] focus:ring-1 focus:ring-[#1677FF] text-[#1E293B] placeholder:text-[#94A3B8] resize-y transition-colors"
                />

                <div>
                  <button
                    type="button"
                    onClick={handleGenerateAiNews}
                    disabled={isGeneratingAi}
                    className="bg-[#1677FF] hover:bg-blue-600 disabled:bg-blue-300 text-white text-[12.5px] font-semibold px-4 py-2 rounded-md flex items-center gap-2 transition-all cursor-pointer shadow-xs"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>
                      {isGeneratingAi ? "নিউজ তৈরি হচ্ছে..." : "Generate News"}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Main Article Form */}
            <form onSubmit={handleAddPost}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
                {/* LEFT COLUMN (8 cols): Title, Content, Rich Editor, Location, Writer */}
                <div className="lg:col-span-8 flex flex-col gap-4.5 bg-white p-4.5 sm:p-5.5 rounded-xl border border-[#D5E1F5] shadow-xs">
                  {/* Article Title */}
                  <div>
                    <label className="block text-[13px] font-medium text-[#334155] mb-1.5">
                      Article Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Article Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full text-[13.5px] px-3.5 py-2 border border-[#CBD5E1] rounded-md outline-none focus:border-[#1677FF] focus:ring-1 focus:ring-[#1677FF] text-[#1E293B] placeholder:text-[#94A3B8]"
                    />
                  </div>

                  {/* Subtitle */}
                  <div>
                    <label className="block text-[13px] font-medium text-[#334155] mb-1.5">
                      Subtitle
                    </label>
                    <input
                      type="text"
                      placeholder="Article Subtitle"
                      value={subtitle}
                      onChange={(e) => setSubtitle(e.target.value)}
                      className="w-full text-[13.5px] px-3.5 py-2 border border-[#CBD5E1] rounded-md outline-none focus:border-[#1677FF] focus:ring-1 focus:ring-[#1677FF] text-[#1E293B] placeholder:text-[#94A3B8]"
                    />
                  </div>

                  {/* Article Content with Editor Toolbar */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-[13px] font-medium text-[#334155]">
                        Article Content <span className="text-red-500">*</span>
                      </label>
                      <button
                        type="button"
                        className="bg-[#4B5563] hover:bg-[#374151] text-white text-[11px] font-medium px-2.5 py-1 rounded transition-colors cursor-pointer"
                      >
                        Recent Article
                      </button>
                    </div>

                    {/* Editor Toolbar & Textarea Container */}
                    <div className="border border-[#CBD5E1] rounded-md overflow-hidden focus-within:border-[#1677FF] transition-colors">
                      {/* Toolbar Icons Row */}
                      <div className="bg-[#F8FAFC] border-b border-[#E2E8F0] p-2 flex flex-wrap items-center gap-1.5 text-[#475569]">
                        <button
                          type="button"
                          title="Bold"
                          className="p-1 hover:bg-[#E2E8F0] rounded cursor-pointer transition-colors"
                        >
                          <Bold className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          title="Italic"
                          className="p-1 hover:bg-[#E2E8F0] rounded cursor-pointer transition-colors"
                        >
                          <Italic className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          title="Underline"
                          className="p-1 hover:bg-[#E2E8F0] rounded cursor-pointer transition-colors"
                        >
                          <Underline className="w-3.5 h-3.5" />
                        </button>
                        <div className="w-[1px] h-4 bg-[#CBD5E1] mx-0.5" />
                        <button
                          type="button"
                          title="Align Left"
                          className="p-1 hover:bg-[#E2E8F0] rounded cursor-pointer transition-colors"
                        >
                          <AlignLeft className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          title="Align Center"
                          className="p-1 hover:bg-[#E2E8F0] rounded cursor-pointer transition-colors"
                        >
                          <AlignCenter className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          title="Align Right"
                          className="p-1 hover:bg-[#E2E8F0] rounded cursor-pointer transition-colors"
                        >
                          <AlignRight className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          title="Align Justify"
                          className="p-1 hover:bg-[#E2E8F0] rounded cursor-pointer transition-colors"
                        >
                          <AlignJustify className="w-3.5 h-3.5" />
                        </button>
                        <div className="w-[1px] h-4 bg-[#CBD5E1] mx-0.5" />
                        <button
                          type="button"
                          title="Numbered List"
                          className="p-1 hover:bg-[#E2E8F0] rounded cursor-pointer transition-colors"
                        >
                          <ListOrdered className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          title="Bulleted List"
                          className="p-1 hover:bg-[#E2E8F0] rounded cursor-pointer transition-colors"
                        >
                          <List className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          title="Heading"
                          className="p-1 hover:bg-[#E2E8F0] rounded cursor-pointer transition-colors"
                        >
                          <Heading2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          title="Text Color"
                          className="p-1 hover:bg-[#E2E8F0] rounded cursor-pointer transition-colors"
                        >
                          <Palette className="w-3.5 h-3.5" />
                        </button>
                        <div className="w-[1px] h-4 bg-[#CBD5E1] mx-0.5" />
                        <button
                          type="button"
                          title="Insert Image"
                          className="p-1 hover:bg-[#E2E8F0] rounded cursor-pointer transition-colors"
                        >
                          <ImageIcon className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          title="Insert File"
                          className="p-1 hover:bg-[#E2E8F0] rounded cursor-pointer transition-colors"
                        >
                          <FileText className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          title="Insert Video"
                          className="p-1 hover:bg-[#E2E8F0] rounded cursor-pointer transition-colors"
                        >
                          <Video className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          title="Insert Link"
                          className="p-1 hover:bg-[#E2E8F0] rounded cursor-pointer transition-colors"
                        >
                          <Link2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          title="Insert Table"
                          className="p-1 hover:bg-[#E2E8F0] rounded cursor-pointer transition-colors"
                        >
                          <Table className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          title="Clear Formatting"
                          className="p-1 hover:bg-[#E2E8F0] rounded cursor-pointer transition-colors"
                        >
                          <RotateCcw className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          title="HTML Source"
                          className="p-1 hover:bg-[#E2E8F0] rounded cursor-pointer transition-colors"
                        >
                          <Code className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Content Area */}
                      <div className="relative">
                        <textarea
                          rows={11}
                          required
                          value={content}
                          onChange={(e) => setContent(e.target.value)}
                          placeholder="সংবাদের বিস্তারিত বিষয়বস্তু এখানে লিখুন..."
                          className="w-full p-3.5 text-[13.5px] leading-relaxed text-[#1E293B] outline-none placeholder:text-[#94A3B8] resize-y"
                        />

                        {/* Editor Bottom Status (Undo/Redo) */}
                        <div className="border-t border-[#E2E8F0] px-3 py-1.5 flex items-center gap-2 text-[#94A3B8]">
                          <button
                            type="button"
                            title="Undo"
                            className="hover:text-[#475569] transition-colors cursor-pointer"
                          >
                            <Undo2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            title="Redo"
                            className="hover:text-[#475569] transition-colors cursor-pointer"
                          >
                            <Redo2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Youtube Link */}
                  <div>
                    <label className="block text-[13px] font-medium text-[#334155] mb-1.5">
                      Youtube Link
                    </label>
                    <input
                      type="text"
                      placeholder="eg. https://www.youtube.com/watch?v=ABCDE"
                      value={youtubeLink}
                      onChange={(e) => setYoutubeLink(e.target.value)}
                      className="w-full text-[13.5px] px-3.5 py-2 border border-[#CBD5E1] rounded-md outline-none focus:border-[#1677FF] focus:ring-1 focus:ring-[#1677FF] text-[#1E293B] placeholder:text-[#94A3B8]"
                    />
                  </div>

                  {/* Attach File */}
                  <div>
                    <label className="block text-[13px] font-medium text-[#334155] mb-1.5">
                      Attach File
                    </label>
                    <div className="flex items-center rounded-md border border-[#CBD5E1] overflow-hidden">
                      <input
                        type="file"
                        id="attach-file-input"
                        className="hidden"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) setAttachedFileName(file.name);
                        }}
                      />
                      <label
                        htmlFor="attach-file-input"
                        className="flex-1 px-3.5 py-2 text-[13px] text-[#64748B] cursor-pointer truncate"
                      >
                        {attachedFileName || "Select file"}
                      </label>
                      <label
                        htmlFor="attach-file-input"
                        className="bg-[#00875A] hover:bg-[#00704A] text-white p-2.5 cursor-pointer transition-colors flex items-center justify-center shrink-0"
                      >
                        <Upload className="w-4 h-4" />
                      </label>
                    </div>
                  </div>

                  {/* LOCATION SECTION (Division -> District -> Upazila Cascading) */}
                  <div className="pt-2 border-t border-[#F1F5F9]">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                      {/* 1. Article Location (Division) */}
                      <div>
                        <label className="block text-[12.5px] font-semibold text-[#334155] mb-1.5">
                          Article Location (Division)
                        </label>
                        <select
                          value={selectedDivision}
                          onChange={(e) => handleDivisionChange(e.target.value)}
                          className="w-full text-[13px] px-3 py-2 border border-[#CBD5E1] rounded-md bg-white text-[#1E293B] outline-none focus:border-[#1677FF] focus:ring-1 focus:ring-[#1677FF] cursor-pointer"
                        >
                          <option value="">Select Division</option>
                          {DIVISIONS.map((div) => (
                            <option key={div.id} value={div.id}>
                              {div.name} - {div.bnName}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* 2. District (Filters based on selected division) */}
                      <div>
                        <label className="block text-[12.5px] font-semibold text-[#334155] mb-1.5">
                          District
                        </label>
                        <select
                          value={selectedDistrict}
                          onChange={(e) => handleDistrictChange(e.target.value)}
                          className="w-full text-[13px] px-3 py-2 border border-[#CBD5E1] rounded-md bg-white text-[#1E293B] outline-none focus:border-[#1677FF] focus:ring-1 focus:ring-[#1677FF] cursor-pointer"
                        >
                          <option value="">Select District</option>
                          {availableDistricts.map((dist) => (
                            <option key={dist.id} value={dist.id}>
                              {dist.name} - {dist.bnName}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* 3. Upazila (Populates after district is selected) */}
                      <div>
                        <label className="block text-[12.5px] font-semibold text-[#334155] mb-1.5">
                          Upazila
                        </label>
                        <select
                          value={selectedUpazila}
                          onChange={(e) => setSelectedUpazila(e.target.value)}
                          disabled={!selectedDistrict || availableUpazilas.length === 0}
                          className="w-full text-[13px] px-3 py-2 border border-[#CBD5E1] rounded-md bg-white disabled:bg-[#F8FAFC] disabled:text-[#94A3B8] text-[#1E293B] outline-none focus:border-[#1677FF] focus:ring-1 focus:ring-[#1677FF] cursor-pointer"
                        >
                          <option value="">
                            {!selectedDistrict
                              ? "Select Upazila"
                              : availableUpazilas.length === 0
                              ? "No Upazila found"
                              : "Select Upazila"}
                          </option>
                          {availableUpazilas.map((upz) => (
                            <option key={upz.id} value={upz.id}>
                              {upz.name} - {upz.bnName}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* WRITERS SECTION */}
                  <div className="pt-2 border-t border-[#F1F5F9]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Left: Guest Writer info */}
                      <div className="space-y-3">
                        <div>
                          <label className="block text-[12.5px] font-semibold text-[#334155] mb-1.5">
                            Guest Writer Name
                          </label>
                          <input
                            type="text"
                            placeholder="Writer Name"
                            value={guestWriterName}
                            onChange={(e) => setGuestWriterName(e.target.value)}
                            className="w-full text-[13px] px-3 py-2 border border-[#CBD5E1] rounded-md outline-none focus:border-[#1677FF] focus:ring-1 focus:ring-[#1677FF] text-[#1E293B] placeholder:text-[#94A3B8]"
                          />
                        </div>

                        <div>
                          <label className="block text-[12.5px] font-semibold text-[#334155] mb-1.5">
                            Guest Writer Designation
                          </label>
                          <input
                            type="text"
                            placeholder="Writer Designation"
                            value={guestWriterDesignation}
                            onChange={(e) => setGuestWriterDesignation(e.target.value)}
                            className="w-full text-[13px] px-3 py-2 border border-[#CBD5E1] rounded-md outline-none focus:border-[#1677FF] focus:ring-1 focus:ring-[#1677FF] text-[#1E293B] placeholder:text-[#94A3B8]"
                          />
                        </div>
                      </div>

                      {/* Right: Article Writer (Multiple names dropdown) */}
                      <div>
                        <label className="block text-[12.5px] font-semibold text-[#334155] mb-1.5">
                          Article Writer <span className="text-red-500">*</span>
                        </label>
                        <select
                          required
                          value={selectedWriter}
                          onChange={(e) => setSelectedWriter(e.target.value)}
                          className="w-full text-[13px] px-3 py-2 border border-[#CBD5E1] rounded-md bg-white text-[#1E293B] outline-none focus:border-[#1677FF] focus:ring-1 focus:ring-[#1677FF] cursor-pointer"
                        >
                          <option value="">Select Writer</option>
                          {ARTICLE_WRITERS.map((writer) => (
                            <option key={writer.id} value={writer.id}>
                              {writer.displayName}
                            </option>
                          ))}
                        </select>

                        <p className="text-[11.5px] text-[#64748B] mt-2">
                          নিউজ আর্টিকেল প্রকাশের জন্য নির্দিষ্ট রিপোর্টার অথবা বার্তা কক্ষ নির্বাচন করুন।
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN (4 cols): Category, Subcategories, Toggles, Image, Publish */}
                <div className="lg:col-span-4 flex flex-col gap-4.5 bg-white p-4.5 sm:p-5 rounded-xl border border-[#D5E1F5] shadow-xs">
                  {/* Article Category */}
                  <div>
                    <label className="block text-[13px] font-medium text-[#334155] mb-1.5">
                      Article Category <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full text-[13px] px-3 py-2 border border-[#CBD5E1] rounded-md bg-white text-[#1E293B] outline-none focus:border-[#1677FF] focus:ring-1 focus:ring-[#1677FF] cursor-pointer"
                    >
                      <option value="">Select Category</option>
                      <option value="জাতীয়">জাতীয়</option>
                      <option value="রাজনীতি">রাজনীতি</option>
                      <option value="আন্তর্জাতিক">আন্তর্জাতিক</option>
                      <option value="খেলাধুলা">খেলাধুলা</option>
                      <option value="বিনোদন">বিনোদন</option>
                      <option value="সারাদেশ">সারাদেশ</option>
                      <option value="অর্থনীতি">অর্থনীতি</option>
                      <option value="শিক্ষা">শিক্ষা</option>
                      <option value="প্রযুক্তি">প্রযুক্তি</option>
                      <option value="স্বাস্থ্য">স্বাস্থ্য</option>
                      <option value="চাকরি">চাকরি</option>
                      <option value="মতামত">মতামত</option>
                    </select>
                  </div>

                  {/* Article Sub Category (Scrollable Checkbox List) */}
                  <div>
                    <label className="block text-[13px] font-medium text-[#334155] mb-1.5">
                      Article Sub Category
                    </label>
                    <div className="border border-[#CBD5E1] rounded-md p-2.5 max-h-[140px] overflow-y-auto space-y-2 bg-[#FAFCFF]">
                      {SUB_CATEGORIES.map((subCat) => (
                        <label
                          key={subCat}
                          className="flex items-center gap-2 text-[12.5px] text-[#334155] hover:text-[#1677FF] cursor-pointer select-none"
                        >
                          <input
                            type="checkbox"
                            checked={selectedSubCategories.includes(subCat)}
                            onChange={() => toggleSubCategory(subCat)}
                            className="rounded border-[#CBD5E1] text-[#1677FF] focus:ring-[#1677FF] w-3.5 h-3.5 cursor-pointer"
                          />
                          <span>{subCat}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Tag / Topic */}
                  <div>
                    <label className="block text-[13px] font-medium text-[#334155] mb-1.5">
                      Tag/Topic
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. বাজেট ২০২৬, চ্যাম্পিয়ন্স ট্রফি"
                      value={tagTopic}
                      onChange={(e) => setTagTopic(e.target.value)}
                      className="w-full text-[13px] px-3 py-2 border border-[#CBD5E1] rounded-md outline-none focus:border-[#1677FF] focus:ring-1 focus:ring-[#1677FF] text-[#1E293B] placeholder:text-[#94A3B8]"
                    />
                  </div>

                  {/* Toggles */}
                  <div className="space-y-2.5 pt-2 border-t border-[#F1F5F9]">
                    {/* News Ticker */}
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] text-[#334155]">News Ticker</span>
                      <button
                        type="button"
                        onClick={() => setIsNewsTicker(!isNewsTicker)}
                        className={`w-10 h-5 rounded-full transition-colors relative cursor-pointer ${
                          isNewsTicker ? "bg-[#1677FF]" : "bg-[#CBD5E1]"
                        }`}
                      >
                        <span
                          className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
                            isNewsTicker ? "translate-x-5" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Lead News */}
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] text-[#334155]">Lead News</span>
                      <button
                        type="button"
                        onClick={() => setIsLeadNews(!isLeadNews)}
                        className={`w-10 h-5 rounded-full transition-colors relative cursor-pointer ${
                          isLeadNews ? "bg-[#1677FF]" : "bg-[#CBD5E1]"
                        }`}
                      >
                        <span
                          className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
                            isLeadNews ? "translate-x-5" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Spotlight */}
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] text-[#334155]">Spotlight</span>
                      <button
                        type="button"
                        onClick={() => setIsSpotlight(!isSpotlight)}
                        className={`w-10 h-5 rounded-full transition-colors relative cursor-pointer ${
                          isSpotlight ? "bg-[#1677FF]" : "bg-[#CBD5E1]"
                        }`}
                      >
                        <span
                          className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
                            isSpotlight ? "translate-x-5" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Slider News */}
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] text-[#334155] flex items-center gap-1.5">
                        <ImageIcon className="w-3.5 h-3.5 text-gray-500" />
                        <span>Slider News (হোমপেজ স্লাইডারে দেখাবে)</span>
                      </span>
                      <button
                        type="button"
                        onClick={() => setIsSliderNews(!isSliderNews)}
                        className={`w-10 h-5 rounded-full transition-colors relative cursor-pointer ${
                          isSliderNews ? "bg-[#1677FF]" : "bg-[#CBD5E1]"
                        }`}
                      >
                        <span
                          className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
                            isSliderNews ? "translate-x-5" : ""
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  {/* Choice Image Box */}
                  <div className="pt-2 border-t border-[#F1F5F9]">
                    <input
                      ref={imageUploadRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageUpload}
                    />

                    {previewImage ? (
                      <div className="relative rounded-md overflow-hidden border border-[#CBD5E1] group">
                        <img
                          src={previewImage}
                          alt="Preview"
                          className="w-full h-36 object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => setPreviewImage(null)}
                          className="absolute top-2 right-2 p-1 bg-red-600 text-white rounded-full opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <div
                        onClick={() => imageUploadRef.current?.click()}
                        className="rounded-md border-2 border-dashed border-[#CBD5E1] hover:border-[#1677FF] bg-[#F8FAFC] hover:bg-blue-50/30 transition-all p-6 flex flex-col items-center justify-center cursor-pointer text-center"
                      >
                        <div className="w-12 h-12 rounded-full bg-gray-200/70 flex items-center justify-center text-gray-500 mb-2">
                          <ImageIcon className="w-6 h-6 stroke-[1.5]" />
                        </div>
                        <span className="text-[13px] font-medium text-[#475569]">
                          Choice Image
                        </span>
                        <span className="text-[11px] text-[#94A3B8] mt-0.5">
                          ক্লিক করে ফিচার ছবি আপলোড করুন
                        </span>
                      </div>
                    )}

                    <div className="mt-2.5">
                      <input
                        type="text"
                        placeholder="Image Caption"
                        value={imageCaption}
                        onChange={(e) => setImageCaption(e.target.value)}
                        className="w-full text-[12.5px] px-3 py-1.5 border border-[#CBD5E1] rounded-md outline-none focus:border-[#1677FF] focus:ring-1 focus:ring-[#1677FF] text-[#1E293B] placeholder:text-[#94A3B8]"
                      />
                    </div>
                  </div>

                  {/* Published Date */}
                  <div>
                    <label className="block text-[13px] font-medium text-[#334155] mb-1.5">
                      Published Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={publishDate}
                        onChange={(e) => setPublishDate(e.target.value)}
                        className="w-full text-[13px] px-3 py-2 pr-9 border border-[#CBD5E1] rounded-md outline-none focus:border-[#1677FF] focus:ring-1 focus:ring-[#1677FF] text-[#1E293B]"
                      />
                      <Calendar className="w-4 h-4 text-gray-500 absolute right-3 top-2.5 pointer-events-none" />
                    </div>
                  </div>

                  {/* Publish Status */}
                  <div>
                    <label className="block text-[13px] font-medium text-[#334155] mb-1.5">
                      Publish Status
                    </label>
                    <select
                      value={publishStatus}
                      onChange={(e) => setPublishStatus(e.target.value)}
                      className="w-full text-[13px] px-3 py-2 border border-[#CBD5E1] rounded-md bg-white text-[#1E293B] outline-none focus:border-[#1677FF] focus:ring-1 focus:ring-[#1677FF] cursor-pointer"
                    >
                      <option value="Published">Published</option>
                      <option value="Draft">Draft</option>
                      <option value="Pending">Pending</option>
                      <option value="Scheduled">Scheduled</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#00875A] hover:bg-[#00704A] text-white text-[13.5px] font-semibold py-2.5 px-4 rounded-md flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                    >
                      <FileCheck className="w-4 h-4" />
                      <span>Add New Post</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          {/* Footer */}
          <footer className="mt-8 pt-4 border-t border-[#E2E8F0] text-center text-xs text-[#64748B]">
            Powered by{" "}
            <a
              href="https://mfit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1677FF] hover:underline"
            >
              mfit.com
            </a>
          </footer>
        </main>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0F172A] text-white px-4 py-3 rounded-xl shadow-xl flex items-center gap-3 border border-[#334155] animate-in fade-in slide-in-from-bottom-4 duration-300">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Floating Scroll To Top */}
      <ScrollToTop />
    </div>
  );
}
