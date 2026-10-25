import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { FileText, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "ব্যবহারের শর্তাবলী | বরিশালের প্রাণ",
  description: "বরিশালের প্রাণ ওয়েবসাইট ব্যবহারের সাধারণ নিয়ম ও কপিরাইট সংক্রান্ত শর্তাবলী।",
};

export default function TermsPage() {
  return (
    <div className="space-y-6">
      <nav aria-label="ব্রেডক্রাম্ব" className="text-xs text-[#626B75] flex items-center gap-1.5">
        <Link href="/" className="hover:text-[#0756A4] transition-colors">
          প্রচ্ছদ
        </Link>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="text-[#0756A4] font-semibold">ব্যবহারের শর্তাবলী</span>
      </nav>

      <div className="bg-white rounded-lg border border-[#E2E6EB] p-6 sm:p-8 shadow-xs max-w-4xl mx-auto space-y-6 text-sm text-[#202124] leading-relaxed">
        <div className="border-b border-[#E2E6EB] pb-4">
          <div className="flex items-center gap-2 mb-1">
            <FileText className="w-6 h-6 text-[#0756A4]" />
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0756A4]">
              ব্যবহারের শর্তাবলী (Terms & Conditions)
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-[#626B75]">
            সর্বশেষ আপডেট: অক্টোবর ২০২৬ | এই ওয়েবসাইট ব্যবহারের মাধ্যমে আপনি নিম্নের শর্তাবলীতে সম্মতি জ্ঞাপন করছেন
          </p>
        </div>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0756A4]">১. মেধাস্বত্ব ও কপিরাইট</h2>
          <p>
            বরিশালের প্রাণে প্রকাশিত সকল সংবাদ, সম্পাদকীয়, আলোকচিত্র, গ্রাফিক্স ও ভিডিও কনটেন্ট এর সর্বস্বত্ব সংরক্ষিত। কর্তৃপক্ষের লিখিত অনুমতি ব্যতিরেকে কোনো কনটেন্ট হুবহু অনুকরণ বা বাণিজ্যিক উদ্দেশ্যে পুনঃপ্রকাশ আইনত দণ্ডনীয়।
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0756A4]">২. পাঠকদের মন্তব্য ও মতামত</h2>
          <p>
            প্রতিবেদনের নিচে পাঠকদের মন্তব্য প্রকাশের সুযোগ একটি উন্মুক্ত গণতান্ত্রিক চর্চা। তবে কোনো সাম্প্রদায়িক, অশ্লীল, সহিংসতা উদ্রেককারী বা মানহানিকর মন্তব্য বরদাশত করা হবে না। কর্তৃপক্ষ যেকোনো আপত্তিকর মন্তব্য ডিলিট করার অধিকার সংরক্ষণ করে।
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0756A4]">৩. দায়বদ্ধতার সীমাবদ্ধতা</h2>
          <p>
            আমরা সর্বোচ্চ নিখুঁত ও সত্য সংবাদ পরিবেশনে সচেষ্ট। তবে অনিচ্ছাকৃত কোনো প্রযুক্তিগত ত্রুটি বা বিদ্যুৎ বিঘ্নের কারণে সেবা সাময়িক বিঘ্নিত হলে তার জন্য বরিশালের প্রাণ দায়ী থাকবে না।
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0756A4]">৪. শর্তাবলীর পরিবর্তন</h2>
          <p>
            যেকোনো সময় প্রয়োজনে কোনো পূর্বঘোষণা ব্যতিরেকে এই শর্তাবলীতে পরিবর্তন বা পরিমার্জন করার পূর্ণ অধিকার বরিশালের প্রাণ কর্তৃপক্ষের থাকবে।
          </p>
        </section>
      </div>
    </div>
  );
}
