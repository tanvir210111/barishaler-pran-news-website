import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Lock, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "গোপনীয়তা নীতি | বরিশালের প্রাণ",
  description: "বরিশালের প্রাণের পাঠকদের তথ্যের সুরক্ষা ও গোপনীয়তা রক্ষার নীতিমালা।",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="space-y-6">
      <nav aria-label="ব্রেডক্রাম্ব" className="text-xs text-[#626B75] flex items-center gap-1.5">
        <Link href="/" className="hover:text-[#0756A4] transition-colors">
          প্রচ্ছদ
        </Link>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="text-[#0756A4] font-semibold">গোপনীয়তা নীতি</span>
      </nav>

      <div className="bg-white rounded-lg border border-[#E2E6EB] p-6 sm:p-8 shadow-xs max-w-4xl mx-auto space-y-6 text-sm text-[#202124] leading-relaxed">
        <div className="border-b border-[#E2E6EB] pb-4">
          <div className="flex items-center gap-2 mb-1">
            <Lock className="w-6 h-6 text-[#0756A4]" />
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0756A4]">
              গোপনীয়তা নীতি (Privacy Policy)
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-[#626B75]">
            সর্বশেষ আপডেট: অক্টোবর ২০২৬ | আপনার ব্যক্তিগত তথ্যের নিরাপত্তা আমাদের অগ্রাধিকার
          </p>
        </div>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0756A4]">১. তথ্যের সংগ্রহ</h2>
          <p>
            বরিশালের প্রাণ পরিদর্শনকালে ব্যবহারকারীর ব্রাউজিং অভিজ্ঞতা উন্নত করার স্বার্থে কিছু স্ট্যান্ডার্ড তথ্য (যেমন: আইপি ঠিকানা, ব্রাউজারের ধরন, পেজ ভিউ) সংগৃহীত হতে পারে। মন্তব্য করা বা নিউজলেটার সাবস্ক্রিপশনের সময় নাম ও ইমেইল ঠিকানা ছাড়া কোনো সংবেদনশীল তথ্য সংগ্রহ করা হয় না।
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0756A4]">২. কুকিজ (Cookies) ব্যবহার</h2>
          <p>
            ওয়েবসাইটের গতিশীলতা বজায় রাখতে ও পাঠকদের পছন্দের খবর সুপারিশ করার উদ্দেশ্যে স্বল্পমাত্রায় কুকিজ ব্যবহৃত হয়। আপনি চাইলে আপনার ব্রাউজার সেটিংস থেকে যেকোনো সময় কুকিজ নিষ্ক্রিয় করতে পারেন।
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0756A4]">৩. তথ্য সুরক্ষা ও তৃতীয় পক্ষ</h2>
          <p>
            আমরা পাঠকদের ব্যক্তিগত কোনো তথ্য কোনো তৃতীয় পক্ষের নিকট বিক্রয়, ভাড়া বা অপব্যবহারের জন্য হস্তান্তর করি না। আইনগত বাধ্যবাধকতা ছাড়া সমস্ত তথ্য কঠোর নিরাপত্তার সঙ্গে সংরক্ষিত থাকে।
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0756A4]">৪. বহিঃসংযোগ (External Links)</h2>
          <p>
            আমাদের প্রতিবেদনে কোনো তৃতীয় পক্ষের ওয়েবসাইটের লিংক থাকলে, সেই ওয়েবসাইটের গোপনীয়তা নীতির জন্য বরিশালের প্রাণ কর্তৃপক্ষ দায়ী থাকবে না।
          </p>
        </section>
      </div>
    </div>
  );
}
