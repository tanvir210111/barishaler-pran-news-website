import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getAuthors } from "@/services/newsService";
import { ShieldCheck, Award, Eye, Users, ChevronRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "আমাদের সম্পর্কে | বরিশালের প্রাণ",
  description: "বরিশালের প্রাণ - সত্যের সঙ্গে, মানুষের পাশে। নিরপেক্ষ ও দায়িত্বশীল সাংবাদিকতায় প্রতিশ্রুতিবদ্ধ অনলাইন সংবাদপত্র।",
};

export default async function AboutPage() {
  const authors = await getAuthors();
  return (
    <div className="space-y-6">
      <nav aria-label="ব্রেডক্রাম্ব" className="text-xs text-[#626B75] flex items-center gap-1.5">
        <Link href="/" className="hover:text-[#0756A4] transition-colors">
          প্রচ্ছদ
        </Link>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="text-[#0756A4] font-semibold">আমাদের সম্পর্কে</span>
      </nav>

      <div className="bg-white rounded-lg border border-[#E2E6EB] p-6 sm:p-8 shadow-xs">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-3 h-6 bg-[#087A43] inline-block rounded-xs" />
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0756A4]">
              আমাদের সম্পর্কে — বরিশালের প্রাণ
            </h1>
          </div>
          <p className="text-sm sm:text-base text-[#626B75] leading-relaxed mb-6 font-medium">
            সত্যের সঙ্গে, মানুষের পাশে — এই মূলমন্ত্রকে ধারণ করে ২০২৬ সালে যাত্রা শুরু করে ‘বরিশালের প্রাণ’ (Barishaler Pran)। বস্তুনিষ্ঠ তথ্য পরিবেশন, নিরপেক্ষ দৃষ্টিভঙ্গি এবং নির্ভীক সাংবাদিকতাই আমাদের মূল ভিত্তি।
          </p>
        </div>

        {/* Pillars / Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="p-5 rounded-lg bg-[#EAF2FB] border border-[#0756A4]/20">
            <ShieldCheck className="w-8 h-8 text-[#0756A4] mb-3" />
            <h3 className="text-base font-bold text-[#0756A4] mb-1.5">
              বস্তুনিষ্ঠতা ও সত্যতা
            </h3>
            <p className="text-xs text-[#626B75] leading-relaxed">
              প্রতিটি সংবাদের সত্যতা যাচাইয়ে আমরা কঠোর সম্পাদকীয় মানদণ্ড অনুসরণ করি। ভিত্তিহীন গুজব বা চটকদার সংবাদ বর্জন আমাদের নীতি।
            </p>
          </div>

          <div className="p-5 rounded-lg bg-[#EAF5EE] border border-[#087A43]/20">
            <Eye className="w-8 h-8 text-[#087A43] mb-3" />
            <h3 className="text-base font-bold text-[#087A43] mb-1.5">
              জনস্বার্থ ও জবাবদিহিতা
            </h3>
            <p className="text-xs text-[#626B75] leading-relaxed">
              নাগরিক অধিকার, গণতন্ত্র, উন্নয়ন ও অন্যায়ের বিরুদ্ধে সাধারণ মানুষের শক্তিশালী কণ্ঠস্বর হিসেবে আমরা নিরলস কাজ করে যাচ্ছি।
            </p>
          </div>

          <div className="p-5 rounded-lg bg-red-50 border border-red-200">
            <Award className="w-8 h-8 text-[#D62828] mb-3" />
            <h3 className="text-base font-bold text-[#D62828] mb-1.5">
              আধুনিক ডিজিটাল সাংবাদিকতা
            </h3>
            <p className="text-xs text-[#626B75] leading-relaxed">
              দ্রুততম সময়ে নির্ভুল সংবাদ পরিবেশন, মাল্টিমিডিয়া স্টোরিটেলিং এবং পাঠকদের জন্য সর্বোচ্চ পাঠযোগ্য ডিজিটাল প্ল্যাটফর্ম প্রদান।
            </p>
          </div>
        </div>

        {/* History & Mission */}
        <div className="space-y-4 text-sm text-[#202124] leading-relaxed border-t border-[#E2E6EB] pt-6">
          <h2 className="text-xl font-bold text-[#0756A4]">আমাদের লক্ষ্য ও রূপরেখা</h2>
          <p>
            বরিশালের প্রাণ কোনো রাজনৈতিক দল, করপোরেট গোষ্ঠী বা স্বার্থান্বেষী মহলের পক্ষপাতিত্ব করে না। আমাদের একমাত্র দায়বদ্ধতা দেশের জনগণ ও সত্যের প্রতি। জাতীয় রাজনীতি, বৈদেশিক সম্পর্ক, খেলাধুলা, বিজ্ঞান-প্রযুক্তি থেকে শুরু করে তৃণমূলের প্রত্যন্ত অঞ্চলের খবর আমরা তুলে ধরি সমান গুরুত্বে।
          </p>
          <p>
            ডিজিটাল বাংলাদেশের নতুন প্রজন্মের সাংবাদিকদের নিয়ে গঠিত আমাদের টিম সার্বক্ষণিক ২৪ ঘণ্টা সংবাদের আপডেট পরিবেশনে নিবেদিতপ্রাণ।
          </p>
        </div>

        {/* Editorial Board */}
        <div className="mt-10 pt-6 border-t border-[#E2E6EB]">
          <h2 className="text-xl font-bold text-[#0756A4] mb-6 flex items-center gap-2">
            <Users className="w-5 h-5 text-[#087A43]" />
            সম্পাদকীয় ও জ্যেষ্ঠ সাংবাদিকবৃন্দ
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {authors.map((author) => (
              <div key={author.id} className="p-4 rounded-lg bg-[#f8f9fa] border border-[#E2E6EB] flex items-center gap-3">
                <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border border-gray-300">
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#202124]">{author.name}</h4>
                  <p className="text-xs text-[#0756A4] font-medium">{author.role}</p>
                  <Link
                    href={`/author/${author.slug}`}
                    className="text-[11px] text-[#087A43] hover:underline mt-1 block"
                  >
                    প্রোফাইল দেখুন &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
