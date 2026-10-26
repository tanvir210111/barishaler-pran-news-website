"use client";

import React, { useState, useEffect, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Search,
  Plus,
  Eye,
  EyeOff,
  CheckCircle2,
  FileEdit,
  ExternalLink,
  Filter,
  Check,
  AlertCircle,
  Trash2,
} from "lucide-react";
import MfitAdminNavbar from "@/components/admin/MfitAdminNavbar";
import MfitAdminSidebar from "@/components/admin/MfitAdminSidebar";
import ScrollToTop from "@/components/common/ScrollToTop";
import { api } from "@/services/apiClient";
import { getAllArticles } from "@/services/newsService";
import { Article } from "@/types/news";

function ArticlesListContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const searchParams = useSearchParams();
  const statusParam = searchParams.get("status");

  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const loadArticles = async () => {
    setIsLoading(true);
    try {
      const list = await getAllArticles();
      setArticles(list);
    } catch {
      showToast("নিউজ লোড করতে সমস্যা হয়েছে");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadArticles();
  }, []);

  // 1-Click Publish
  const handlePublish = async (id: string) => {
    try {
      await api.patch(`/news/${id}/publish`);
      setArticles((prev) =>
        prev.map((a) => (a.id === id ? { ...a, isLead: false } : a))
      );
      showToast("সংবাদটি সফলভাবে প্রকাশিত হয়েছে!");
    } catch {
      showToast("প্রকাশ করা সম্ভব হয়নি");
    }
  };

  // 1-Click Unpublish to draft
  const handleUnpublish = async (id: string) => {
    try {
      await api.patch(`/news/${id}/unpublish`);
      showToast("সংবাদটি ড্রাফট করা হয়েছে");
    } catch {
      showToast("ড্রাফট করা সম্ভব হয়নি");
    }
  };

  // 1-Click Hide/Unhide
  const handleToggleHide = async (id: string, currentlyHidden: boolean) => {
    try {
      if (currentlyHidden) {
        await api.patch(`/news/${id}/unhide`);
        showToast("সংবাদটি পুনরায় লাইভ করা হয়েছে");
      } else {
        await api.patch(`/news/${id}/hide`);
        showToast("সংবাদটি হাইড (গোপন) করা হয়েছে");
      }
    } catch {
      showToast("স্ট্যাটাস পরিবর্তন করা সম্ভব হয়নি");
    }
  };

  // Delete article
  const handleDelete = async (id: string) => {
    if (!confirm("আপনি কি নিশ্চিত এই নিউজটি ডিলিট করতে চান?")) return;
    try {
      await api.delete(`/news/${id}`);
      setArticles((prev) => prev.filter((a) => a.id !== id));
      showToast("সংবাদটি সফলভাবে ডিলিট করা হয়েছে");
    } catch {
      showToast("ডিলিট করা সম্ভব হয়নি");
    }
  };

  const filteredArticles = useMemo(() => {
    return articles.filter((item) => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title?.toLowerCase().includes(q);
        const matchesAuthor = item.author?.name?.toLowerCase().includes(q);
        if (!matchesTitle && !matchesAuthor) return false;
      }
      if (selectedCategory !== "all" && item.category?.slug !== selectedCategory) {
        return false;
      }
      return true;
    });
  }, [articles, searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#F0F4FA] text-[#1E293B] flex flex-col font-sans">
      <MfitAdminNavbar
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        isSidebarOpen={isSidebarOpen}
      />

      <div className="flex-1 flex">
        <MfitAdminSidebar isOpen={isSidebarOpen} activePath="/mfit-admin/articles" />

        <main className="flex-1 w-full p-4 sm:px-6 sm:py-5 min-w-0 flex flex-col">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-5">
            <div>
              <h1 className="text-[22px] sm:text-[24px] font-bold text-[#0A2540] tracking-tight">
                {statusParam === "DRAFT"
                  ? "Draft Articles"
                  : statusParam === "PUBLISHED"
                  ? "Published Articles"
                  : "All Articles"}
              </h1>
              <p className="text-xs text-[#718096] mt-0.5">
                মোট {filteredArticles.length} টি সংবাদ পাওয়া গেছে
              </p>
            </div>

            <Link
              href="/mfit-admin/new-article"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#3858F6] hover:bg-[#2B44C7] text-white text-xs sm:text-sm font-bold rounded-xl shadow-xs transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>New Article</span>
            </Link>
          </div>

          {/* Toast Notification */}
          {toastMessage && (
            <div className="mb-4 p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{toastMessage}</span>
            </div>
          )}

          {/* Filters Bar */}
          <div className="bg-white p-3.5 rounded-2xl border border-[#E8EEF8] shadow-xs mb-4 flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#A3AED0]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="শিরোনাম বা রিপোর্টার অনুসন্ধান..."
                className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-[#F4F7FC] border border-transparent rounded-xl focus:bg-white focus:border-[#3858F6] focus:outline-none transition-colors"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Filter className="w-4 h-4 text-[#718096]" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 text-xs sm:text-sm bg-[#F4F7FC] rounded-xl border border-transparent focus:bg-white focus:border-[#3858F6] focus:outline-none"
              >
                <option value="all">সকল বিভাগ</option>
                <option value="জাতীয়">জাতীয়</option>
                <option value="রাজনীতি">রাজনীতি</option>
                <option value="আন্তর্জাতিক">আন্তর্জাতিক</option>
                <option value="খেলাধুলা">খেলাধুলা</option>
                <option value="বিনোদন">বিনোদন</option>
                <option value="অর্থনীতি">অর্থনীতি</option>
                <option value="সারাদেশ">সারাদেশ</option>
              </select>
            </div>
          </div>

          {/* Articles Table */}
          <div className="bg-white rounded-2xl border border-[#E8EEF8] shadow-xs overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#F8FAFD] border-b border-[#E8EEF8] text-[#718096] uppercase text-[11px] font-bold tracking-wider">
                  <tr>
                    <th className="py-3.5 px-4">সংবাদ</th>
                    <th className="py-3.5 px-4">ক্যাটাগরি</th>
                    <th className="py-3.5 px-4">লেখক / প্রতিনিধি</th>
                    <th className="py-3.5 px-4">তারিখ</th>
                    <th className="py-3.5 px-4">ভিউ</th>
                    <th className="py-3.5 px-4 text-right">অ্যাকশন</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8EEF8]">
                  {isLoading ? (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-gray-500">
                        সংবাদ লোড হচ্ছে...
                      </td>
                    </tr>
                  ) : filteredArticles.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-8 text-center text-gray-500">
                        কোনো সংবাদ পাওয়া যায়নি।
                      </td>
                    </tr>
                  ) : (
                    filteredArticles.map((article) => (
                      <tr key={article.id} className="hover:bg-[#F9FBFF] transition-colors">
                        <td className="py-3 px-4 max-w-xs sm:max-w-md">
                          <div className="flex items-center gap-3">
                            {article.featuredImage ? (
                              <img
                                src={typeof article.featuredImage === "string" ? article.featuredImage : article.featuredImage?.url}
                                alt=""
                                className="w-12 h-10 object-cover rounded-md shrink-0 bg-gray-100"
                              />
                            ) : (
                              <div className="w-12 h-10 bg-gray-200 rounded-md shrink-0" />
                            )}
                            <div className="min-w-0">
                              <p className="font-bold text-[#0A2540] truncate text-xs sm:text-sm">
                                {article.title}
                              </p>
                              {article.isLead && (
                                <span className="inline-block mt-0.5 px-1.5 py-0.2 bg-red-100 text-red-700 text-[10px] font-bold rounded">
                                  Lead
                                </span>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-[#4A5568] whitespace-nowrap">
                          <span className="px-2.5 py-1 bg-[#EEF2FF] text-[#3858F6] text-[11px] font-bold rounded-full">
                            {article.category?.name || "জাতীয়"}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-[#4A5568] whitespace-nowrap">
                          {article.author?.name || "স্টাফ রিপোর্টার"}
                        </td>
                        <td className="py-3 px-4 text-[#718096] whitespace-nowrap text-[12px]">
                          {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString("bn-BD") : "-"}
                        </td>
                        <td className="py-3 px-4 text-[#4A5568] font-semibold whitespace-nowrap">
                          {article.viewsCount || 0}
                        </td>
                        <td className="py-3 px-4 text-right whitespace-nowrap">
                          <div className="inline-flex items-center gap-1.5">
                            <Link
                              href={`/news/${article.slug}`}
                              target="_blank"
                              title="ওয়েবসাইটে দেখুন"
                              className="p-1.5 rounded-lg text-[#718096] hover:text-[#3858F6] hover:bg-[#EEF2FF] transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </Link>

                            <button
                              type="button"
                              onClick={() => handlePublish(article.id)}
                              title="প্রকাশ করুন"
                              className="p-1.5 rounded-lg text-emerald-600 hover:bg-emerald-50 transition-colors"
                            >
                              <Check className="w-4 h-4" />
                            </button>

                            <button
                              type="button"
                              onClick={() => handleToggleHide(article.id, false)}
                              title="গোপন/হাইড করুন"
                              className="p-1.5 rounded-lg text-amber-600 hover:bg-amber-50 transition-colors"
                            >
                              <EyeOff className="w-4 h-4" />
                            </button>

                            <button
                              type="button"
                              onClick={() => handleDelete(article.id)}
                              title="ডিলিট করুন"
                              className="p-1.5 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      <ScrollToTop />
    </div>
  );
}

export default function ArticlesListPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F0F4FA] flex items-center justify-center text-gray-500">
          আর্টিকেল লোড হচ্ছে...
        </div>
      }
    >
      <ArticlesListContent />
    </Suspense>
  );
}

