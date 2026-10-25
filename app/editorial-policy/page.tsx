import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ChevronRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "সম্পাদকীয় নীতিমালা | বরিশালের প্রাণ",
  description: "বরিশালের প্রাণের সাংবাদিকতার আদর্শ, তথ্য যাচাইকরণ প্রক্রিয়া এবং নিরপেক্ষতা নীতি।",
};

export default function EditorialPolicyPage() {
  return (
    <div className="space-y-6">
      <nav aria-label="ব্রেডক্রাম্ব" className="text-xs text-[#626B75] flex items-center gap-1.5">
        <Link href="/" className="hover:text-[#0756A4] transition-colors">
          প্রচ্ছদ
        </Link>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="text-[#0756A4] font-semibold">সম্পাদকীয় নীতিমালা</span>
      </nav>

      <div className="bg-white rounded-lg border border-[#E2E6EB] p-6 sm:p-8 shadow-xs max-w-4xl mx-auto space-y-6 text-sm text-[#202124] leading-relaxed">
        <div className="border-b border-[#E2E6EB] pb-4">
          <div className="flex items-center gap-2 mb-1">
            <ShieldCheck className="w-6 h-6 text-[#087A43]" />
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0756A4]">
              সম্পাদকীয় নীতিমালা ও আচরণবিধি
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-[#626B75]">
            সর্বশেষ পরিমার্জন: অক্টোবর ২০২৬ | সততা, নির্ভুলতা ও নিরপেক্ষতা আমাদের অঙ্গিকার
          </p>
        </div>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0756A4]">১. নিরপেক্ষতা ও বস্তুনিষ্ঠতা</h2>
          <p>
            বরিশালের প্রাণ কোনো রাজনৈতিক দল, ধর্মীয় সম্প্রদায়, সামাজিক গোষ্ঠী বা ব্যবসায়িক স্বার্থের পক্ষে বা বিপক্ষে অবস্থান গ্রহণ করে না। আমাদের প্রতিটি প্রতিবেদন তথ্য ও প্রমাণের ভিত্তিতে নিরপেক্ষভাবে উপস্থাপন করা হয়।
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0756A4]">২. তথ্য যাচাই ও তথ্যের উৎস</h2>
          <p>
            যেকোনো সংবাদ প্রকাশের পূর্বে ন্যূনতম দুটি স্বাধীন ও নির্ভরযোগ্য উৎস থেকে তথ্য যাচাই করা বাধ্যতামূলক। বেনামী সূত্রের ক্ষেত্রে কঠোর সতর্কতা অবলম্বন করা হয় এবং কোনোভাবেই নিশ্চিত না হয়ে অনুমানভিত্তিক তথ্য প্রচার করা হয় না।
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0756A4]">৩. সংবেদনশীলতা ও অপরাধ বিষয়ক রিপোর্টিং</h2>
          <p>
            নারী ও শিশু নির্যাতন, যৌন অপরাধ বা সংখ্যালঘু সংক্রান্ত সংবাদ প্রকাশের ক্ষেত্রে ভুক্তভোগীর পরিচয় ও মর্যাদা সুরক্ষায় সর্বোচ্চ গোপনীয়তা বজায় রাখা হয়। কোনো অপ্রমাণিত অপরাধের ঘটনায় কাউকে অপরাধী হিসেবে উপস্থাপন করা হয় না।
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0756A4]">৪. সংশোধনী নীতি (Correction Policy)</h2>
          <p>
            অনিচ্ছাকৃত কোনো ভুল তথ্য বা ত্রুটি দৃষ্টিগোচর হওয়া মাত্রই তা সংশোধন করা হয় এবং সংবাদের নিচে সংশোধনীর স্পষ্ট নোট যুক্ত করা হয়। স্বচ্ছতা বজায় রাখাই আমাদের সম্পাদকীয় সংস্কৃতি।
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-[#0756A4]">৫. ছবি ও ভিডিও ব্যবহারের নীতিমালা</h2>
          <p>
            সংবাদের সঙ্গে ব্যবহৃত প্রতিটি ছবির সঠিক ক্যাপশন ও ফটোগ্রাফার ক্রেডিট প্রদান নিশ্চিত করা হয়। বিকৃত বা কৃত্রিম বুদ্ধিমত্তা দ্বারা তৈরি কোনো বিভ্রান্তিকর ছবি সংবাদ হিসেবে প্রকাশ করা সম্পূর্ণ নিষিদ্ধ।
          </p>
        </section>
      </div>
    </div>
  );
}
