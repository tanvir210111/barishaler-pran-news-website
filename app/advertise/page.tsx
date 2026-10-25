import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Megaphone, ChevronRight, BarChart2, Globe, Users, CheckCircle2, Mail, Phone } from "lucide-react";
import AdvertisementPlaceholder from "@/components/news/AdvertisementPlaceholder";

export const metadata: Metadata = {
  title: "বিজ্ঞাপন দিন | বরিশালের প্রাণ",
  description: "বরিশালের প্রাণে আপনার প্রতিষ্ঠানের বিজ্ঞাপন দিন। সর্বাধিক পাঠকের কাছে পৌঁছানোর সেরা প্ল্যাটফর্ম।",
};

export default function AdvertisePage() {
  const adFormats = [
    {
      name: "টপ লিডারবোর্ড ব্যানার (Top Leaderboard)",
      dimensions: "970 x 90 / 728 x 90 px",
      position: "ওয়েবসাইটের মূল হেডার ও ব্রেকিং টিকিটের ঠিক নিচে",
      reach: "১০০% ভিজিটর কাভারেজ",
    },
    {
      name: "ইন-আর্টিকেল ব্যানার (In-Article Banner)",
      dimensions: "728 x 90 / 300 x 250 px",
      position: "নিউজ আর্টিকেলের মূল প্যারাগ্রাফের মাঝে",
      reach: "সর্বোচ্চ পাঠক সম্পৃক্ততা ও ক্লিক রেট",
    },
    {
      name: "সাইডবার মিডিয়াম রেক্ট্যাঙ্গেল (Sidebar Rectangle)",
      dimensions: "300 x 250 px",
      position: "হোমপেজ ও প্রতিটি সংবাদ পেজের ডান পাশের সাইডবার",
      reach: "ধারাবাহিক ও দীর্ঘস্থায়ী ভিজিবিলিটি",
    },
    {
      name: "স্পন্সরড আর্টিকেল বা বিজ্ঞাপনী প্রতিবেদন",
      dimensions: "ফুল পেজ প্রতিবেদন",
      position: "মূল ফিডে ব্র্যান্ড স্টোরি বা পিআর আর্টিকেল",
      reach: "গভীর ব্র্যান্ডিং ও বিস্তারিত তথ্য উপস্থাপন",
    },
  ];

  return (
    <div className="space-y-6">
      <nav aria-label="ব্রেডক্রাম্ব" className="text-xs text-[#626B75] flex items-center gap-1.5">
        <Link href="/" className="hover:text-[#0756A4] transition-colors">
          প্রচ্ছদ
        </Link>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="text-[#0756A4] font-semibold">বিজ্ঞাপন দিন</span>
      </nav>

      {/* Header */}
      <div className="bg-white border-b-2 border-[#0756A4] rounded-lg p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-2">
            <Megaphone className="w-7 h-7 text-[#0756A4]" />
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0756A4]">
              বরিশালের প্রাণে বিজ্ঞাপন দিন
            </h1>
          </div>
          <p className="text-sm sm:text-base text-[#626B75] leading-relaxed">
            প্রতিদিন লাখো সচেতন, তরুণ ও নীতিনির্ধারক পাঠকদের কাছে আপনার ব্র্যান্ড ও পণ্যের বার্তা পৌঁছে দিতে বরিশালের প্রাণ একটি অনন্য ডিজিটাল প্ল্যাটফর্ম।
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
          <div className="p-4 rounded-lg bg-[#EAF2FB] border border-[#0756A4]/20 text-center">
            <Users className="w-6 h-6 text-[#0756A4] mx-auto mb-1" />
            <div className="text-2xl font-bold text-[#0756A4]">১৫ লক্ষ+</div>
            <p className="text-xs text-[#626B75] mt-0.5">মাসিক সক্রিয় পাঠক (ডেমো)</p>
          </div>

          <div className="p-4 rounded-lg bg-[#EAF5EE] border border-[#087A43]/20 text-center">
            <BarChart2 className="w-6 h-6 text-[#087A43] mx-auto mb-1" />
            <div className="text-2xl font-bold text-[#087A43]">৮০ লক্ষ+</div>
            <p className="text-xs text-[#626B75] mt-0.5">মাসিক পেজ ভিউ (ডেমো)</p>
          </div>

          <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-center">
            <Globe className="w-6 h-6 text-[#D62828] mx-auto mb-1" />
            <div className="text-2xl font-bold text-[#D62828]">৫০+ দেশ</div>
            <p className="text-xs text-[#626B75] mt-0.5">বিশ্বজুড়ে প্রবাসী বাঙালি পাঠক</p>
          </div>
        </div>

        {/* Ad Formats */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-[#0756A4] mb-4">জনপ্রিয় বিজ্ঞাপন ফরম্যাটসমূহ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {adFormats.map((format, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-[#f8f9fa] border border-[#E2E6EB] hover:border-[#0756A4]/40 transition-colors">
                <h3 className="font-bold text-sm text-[#202124] mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#087A43]" />
                  {format.name}
                </h3>
                <p className="text-xs text-[#626B75] mb-2">{format.position}</p>
                <div className="text-[11px] text-[#0756A4] font-medium bg-white px-2.5 py-1 rounded border inline-block">
                  সাইজ: {format.dimensions} | {format.reach}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ad Demo Placeholder */}
        <div className="my-8">
          <h3 className="text-xs font-bold text-[#626B75] uppercase tracking-wider mb-2">
            বিজ্ঞাপন স্লট প্রিভিউ (Leaderboard Demo)
          </h3>
          <AdvertisementPlaceholder size="leaderboard" />
        </div>

        {/* Contact for ads */}
        <div className="mt-8 p-6 bg-[#0756A4] text-white rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold">বিজ্ঞাপন বুকিং ও রেটকার্ডের জন্য যোগাযোগ</h3>
            <p className="text-xs text-blue-100 mt-1">আমাদের মার্কেটিং বিভাগ আপনাকে সেরা কাস্টম প্যাকেজ তৈরিতে সহায়তা করবে।</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 shrink-0">
            <Link
              href="/contact"
              className="bg-[#087A43] hover:bg-[#065f34] text-white px-5 py-2.5 rounded-md font-semibold text-xs text-center transition-colors shadow"
            >
              বিজ্ঞাপন ফর্ম পূরণ করুন
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
