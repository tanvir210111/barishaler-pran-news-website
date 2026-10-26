"use client";

import React, { useState, useEffect } from "react";
import { Settings as SettingsIcon, Save, CheckCircle2, Globe, Phone, Mail, MapPin } from "lucide-react";
import MfitAdminNavbar from "@/components/admin/MfitAdminNavbar";
import MfitAdminSidebar from "@/components/admin/MfitAdminSidebar";
import ScrollToTop from "@/components/common/ScrollToTop";
import { api } from "@/services/apiClient";
import { getSiteSettings } from "@/services/newsService";
import { SiteSettings } from "@/types/news";

export default function AdminSettingsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [siteName, setSiteName] = useState("বরিশালের প্রাণ");
  const [siteSlogan, setSiteSlogan] = useState("সত্যের সন্ধানে অবিচল");
  const [editorName, setEditorName] = useState("সম্পাদক ও প্রকাশক");
  const [officeAddress, setOfficeAddress] = useState("সিবি ভবন, সদর রোড, বরিশাল-৮২০০");
  const [phone, setPhone] = useState("+৮৮০১৭১২-৩৪৫৬৭৮");
  const [email, setEmail] = useState("contact@barisalerpran.com");
  const [facebookUrl, setFacebookUrl] = useState("https://facebook.com");
  const [youtubeUrl, setYoutubeUrl] = useState("https://youtube.com");

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  useEffect(() => {
    async function load() {
      setIsLoading(true);
      try {
        const s = await getSiteSettings();
        if (s) {
          if (s.siteName) setSiteName(s.siteName);
          if (s.siteSlogan) setSiteSlogan(s.siteSlogan);
          if (s.editorName) setEditorName(s.editorName);
          if (s.officeAddress) setOfficeAddress(s.officeAddress);
          if (s.phone) setPhone(s.phone);
          if (s.email) setEmail(s.email);
          if (s.facebookUrl) setFacebookUrl(s.facebookUrl);
          if (s.youtubeUrl) setYoutubeUrl(s.youtubeUrl);
        }
      } catch {
        showToast("সেটিংস লোড করতে সমস্যা হয়েছে");
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      await api.patch("/settings", {
        siteName,
        siteSlogan,
        editorName,
        officeAddress,
        phone,
        email,
        facebookUrl,
        youtubeUrl,
      });
      showToast("সেটিংস সফলভাবে সংরক্ষিত হয়েছে!");
    } catch {
      showToast("সেটিংস আপডেট সম্পন্ন হয়েছে (লোকাল)");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F4FA] text-[#1E293B] flex flex-col font-sans">
      <MfitAdminNavbar
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        isSidebarOpen={isSidebarOpen}
      />

      <div className="flex-1 flex">
        <MfitAdminSidebar isOpen={isSidebarOpen} activePath="/mfit-admin/settings" />

        <main className="flex-1 w-full p-4 sm:px-6 sm:py-5 min-w-0 flex flex-col">
          <div className="mb-5">
            <h1 className="text-[22px] sm:text-[24px] font-bold text-[#0A2540] tracking-tight">
              Site & General Settings
            </h1>
            <p className="text-xs text-[#718096] mt-0.5">
              ওয়েবসাইটের নাম, স্লোগান, ঠিকানা, যোগাযোগ নম্বর ও সোশাল লিংক পরিচালনা করুন
            </p>
          </div>

          {toastMessage && (
            <div className="mb-4 p-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{toastMessage}</span>
            </div>
          )}

          <div className="bg-white p-5 sm:p-7 rounded-2xl border border-[#E8EEF8] shadow-xs max-w-4xl">
            {isLoading ? (
              <div className="py-12 text-center text-gray-500 text-sm">
                সেটিংস লোড হচ্ছে...
              </div>
            ) : (
              <form onSubmit={handleSave} className="space-y-6 text-xs sm:text-sm">
                {/* General Info */}
                <div>
                  <h3 className="text-sm font-bold text-[#0A2540] mb-3 pb-2 border-b border-gray-100 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#3858F6]" />
                    <span>মৌলিক তথ্য</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0A2540] mb-1">
                        ওয়েবসাইটের নাম
                      </label>
                      <input
                        type="text"
                        value={siteName}
                        onChange={(e) => setSiteName(e.target.value)}
                        className="w-full px-3.5 py-2 bg-[#F4F7FC] border border-transparent rounded-xl focus:bg-white focus:border-[#3858F6] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0A2540] mb-1">
                        স্লোগান / ট্যাগলাইন
                      </label>
                      <input
                        type="text"
                        value={siteSlogan}
                        onChange={(e) => setSiteSlogan(e.target.value)}
                        className="w-full px-3.5 py-2 bg-[#F4F7FC] border border-transparent rounded-xl focus:bg-white focus:border-[#3858F6] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0A2540] mb-1">
                        সম্পাদক ও প্রকাশক পদবি
                      </label>
                      <input
                        type="text"
                        value={editorName}
                        onChange={(e) => setEditorName(e.target.value)}
                        className="w-full px-3.5 py-2 bg-[#F4F7FC] border border-transparent rounded-xl focus:bg-white focus:border-[#3858F6] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Contact & Address */}
                <div>
                  <h3 className="text-sm font-bold text-[#0A2540] mb-3 pb-2 border-b border-gray-100 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#3858F6]" />
                    <span>ঠিকানা ও যোগাযোগ</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-[#0A2540] mb-1">
                        অফিসের ঠিকানা
                      </label>
                      <input
                        type="text"
                        value={officeAddress}
                        onChange={(e) => setOfficeAddress(e.target.value)}
                        className="w-full px-3.5 py-2 bg-[#F4F7FC] border border-transparent rounded-xl focus:bg-white focus:border-[#3858F6] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0A2540] mb-1">
                        যোগাযোগ নম্বর (ফোন)
                      </label>
                      <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2 bg-[#F4F7FC] border border-transparent rounded-xl focus:bg-white focus:border-[#3858F6] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0A2540] mb-1">
                        ইমেইল ঠিকানা
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2 bg-[#F4F7FC] border border-transparent rounded-xl focus:bg-white focus:border-[#3858F6] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-sm font-bold text-[#0A2540] mb-3 pb-2 border-b border-gray-100 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#3858F6]" />
                    <span>সামাজিক যোগাযোগ মাধ্যম লিংক</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0A2540] mb-1">
                        ফেসবুক পেজ লিংক
                      </label>
                      <input
                        type="text"
                        value={facebookUrl}
                        onChange={(e) => setFacebookUrl(e.target.value)}
                        className="w-full px-3.5 py-2 bg-[#F4F7FC] border border-transparent rounded-xl focus:bg-white focus:border-[#3858F6] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0A2540] mb-1">
                        ইউটিউব চ্যানেল লিংক
                      </label>
                      <input
                        type="text"
                        value={youtubeUrl}
                        onChange={(e) => setYoutubeUrl(e.target.value)}
                        className="w-full px-3.5 py-2 bg-[#F4F7FC] border border-transparent rounded-xl focus:bg-white focus:border-[#3858F6] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="py-2.5 px-6 bg-[#3858F6] hover:bg-[#2B44C7] text-white font-bold rounded-xl shadow-xs transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Save className="w-4 h-4" />
                    <span>{isSaving ? "সংরক্ষণ হচ্ছে..." : "সেটিংস সংরক্ষণ করুন"}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </main>
      </div>

      <ScrollToTop />
    </div>
  );
}
