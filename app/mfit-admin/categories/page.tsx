"use client";

import React, { useState, useEffect } from "react";
import { Plus, FolderPlus, Trash2, CheckCircle2, AlertCircle, Layers } from "lucide-react";
import MfitAdminNavbar from "@/components/admin/MfitAdminNavbar";
import MfitAdminSidebar from "@/components/admin/MfitAdminSidebar";
import ScrollToTop from "@/components/common/ScrollToTop";
import { api } from "@/services/apiClient";
import { getCategories } from "@/services/newsService";
import { Category } from "@/types/news";

export default function AdminCategoriesPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // New category form
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const loadCategories = async () => {
    setIsLoading(true);
    try {
      const list = await getCategories();
      setCategories(list);
    } catch {
      showToast("ক্যাটাগরি লোড করা যায়নি");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const handleCreateCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsSubmitting(true);
    const catSlug = slug.trim() || name.trim().toLowerCase().replace(/\s+/g, "-");

    try {
      const res = await api.post<any>("/categories", {
        name: name.trim(),
        slug: catSlug,
        description: description.trim(),
        orderIndex: categories.length + 1,
      });

      if (res?.success && res.data) {
        setCategories((prev) => [
          ...prev,
          {
            id: String(res.data.id || res.data._id),
            name: res.data.name,
            slug: res.data.slug,
            description: res.data.description,
            articleCount: 0,
          },
        ]);
      } else {
        // Local fallback
        setCategories((prev) => [
          ...prev,
          {
            id: `cat_${Date.now()}`,
            name: name.trim(),
            slug: catSlug,
            description: description.trim(),
            articleCount: 0,
          },
        ]);
      }

      setName("");
      setSlug("");
      setDescription("");
      showToast("নতুন ক্যাটাগরি সফলভাবে তৈরি হয়েছে!");
    } catch {
      // Local addition
      setCategories((prev) => [
        ...prev,
        {
          id: `cat_${Date.now()}`,
          name: name.trim(),
          slug: catSlug,
          description: description.trim(),
          articleCount: 0,
        },
      ]);
      setName("");
      setSlug("");
      setDescription("");
      showToast("ক্যাটাগরি স্থানীয়ভাবে যুক্ত হয়েছে!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F4FA] text-[#1E293B] flex flex-col font-sans">
      <MfitAdminNavbar
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        isSidebarOpen={isSidebarOpen}
      />

      <div className="flex-1 flex">
        <MfitAdminSidebar isOpen={isSidebarOpen} activePath="/mfit-admin/categories" />

        <main className="flex-1 w-full p-4 sm:px-6 sm:py-5 min-w-0 flex flex-col">
          <div className="mb-5">
            <h1 className="text-[22px] sm:text-[24px] font-bold text-[#0A2540] tracking-tight">
              Category Management
            </h1>
            <p className="text-xs text-[#718096] mt-0.5">
              সংবাদের ক্যাটাগরি তৈরি, পরিচালনা ও ক্রম বিন্যাস করুন
            </p>
          </div>

          {toastMessage && (
            <div className="mb-4 p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{toastMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Create Category Form */}
            <div className="lg:col-span-5 bg-white p-5 rounded-2xl border border-[#E8EEF8] shadow-xs">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-100">
                <FolderPlus className="w-5 h-5 text-[#3858F6]" />
                <h2 className="text-sm font-bold text-[#0A2540]">নতুন ক্যাটাগরি যুক্ত করুন</h2>
              </div>

              <form onSubmit={handleCreateCategory} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block text-xs font-bold text-[#0A2540] mb-1">
                    ক্যাটাগরির নাম <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (!slug) {
                        setSlug(e.target.value.toLowerCase().replace(/\s+/g, "-"));
                      }
                    }}
                    placeholder="যেমন: প্রযুক্তি"
                    className="w-full px-3 py-2 bg-[#F4F7FC] border border-transparent rounded-xl focus:bg-white focus:border-[#3858F6] focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0A2540] mb-1">
                    স্লাগ (Slug)
                  </label>
                  <input
                    type="text"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    placeholder="যেমন: technology"
                    className="w-full px-3 py-2 bg-[#F4F7FC] border border-transparent rounded-xl focus:bg-white focus:border-[#3858F6] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0A2540] mb-1">
                    বিবরণ (ঐচ্ছিক)
                  </label>
                  <textarea
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="ক্যাটাগরি সম্পর্কিত সংক্ষিপ্ত বিবরণ..."
                    className="w-full px-3 py-2 bg-[#F4F7FC] border border-transparent rounded-xl focus:bg-white focus:border-[#3858F6] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 px-4 bg-[#3858F6] hover:bg-[#2B44C7] text-white font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Plus className="w-4 h-4" />
                  <span>{isSubmitting ? "সংরক্ষণ হচ্ছে..." : "ক্যাটাগরি যোগ করুন"}</span>
                </button>
              </form>
            </div>

            {/* Categories List */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E8EEF8] shadow-xs overflow-hidden">
              <div className="p-4 border-b border-[#E8EEF8] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#3858F6]" />
                  <h2 className="text-sm font-bold text-[#0A2540]">বর্তমান ক্যাটাগরিসমূহ</h2>
                </div>
                <span className="text-xs text-[#718096]">মোট {categories.length} টি</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-[#F8FAFD] border-b border-[#E8EEF8] text-[#718096] uppercase text-[11px] font-bold">
                    <tr>
                      <th className="py-3 px-4">নাম</th>
                      <th className="py-3 px-4">স্লাগ</th>
                      <th className="py-3 px-4 text-center">আর্টিকেল</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8EEF8]">
                    {isLoading ? (
                      <tr>
                        <td colSpan={3} className="py-6 text-center text-gray-500">
                          লোড হচ্ছে...
                        </td>
                      </tr>
                    ) : categories.length === 0 ? (
                      <tr>
                        <td colSpan={3} className="py-6 text-center text-gray-500">
                          কোনো ক্যাটাগরি পাওয়া যায়নি।
                        </td>
                      </tr>
                    ) : (
                      categories.map((cat, idx) => (
                        <tr key={cat.id || idx} className="hover:bg-[#F9FBFF] transition-colors">
                          <td className="py-3 px-4 font-bold text-[#0A2540]">
                            {cat.name}
                          </td>
                          <td className="py-3 px-4 text-gray-500 font-mono text-[11px]">
                            {cat.slug}
                          </td>
                          <td className="py-3 px-4 text-center">
                            <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-[11px] font-semibold rounded-full">
                              {cat.articleCount || 0}
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>

      <ScrollToTop />
    </div>
  );
}
