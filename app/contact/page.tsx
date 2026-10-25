import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import ContactForm from "./ContactForm";
import { MapPin, Phone, Mail, Clock, ChevronRight, Building } from "lucide-react";

export const metadata: Metadata = {
  title: "যোগাযোগ | বরিশালের প্রাণ",
  description: "বরিশালের প্রাণের সাথে সরাসরি যোগাযোগ করুন। অফিস ঠিকানা, ফোন, ইমেইল এবং সংবাদ টিপস পাঠানোর মাধ্যম।",
};

export default function ContactPage() {
  return (
    <div className="space-y-6">
      <nav aria-label="ব্রেডক্রাম্ব" className="text-xs text-[#626B75] flex items-center gap-1.5">
        <Link href="/" className="hover:text-[#0756A4] transition-colors">
          প্রচ্ছদ
        </Link>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="text-[#0756A4] font-semibold">যোগাযোগ</span>
      </nav>

      <div className="bg-white border-b-2 border-[#0756A4] rounded-lg p-5 shadow-xs">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0756A4] mb-1">
          যোগাযোগ করুন
        </h1>
        <p className="text-xs sm:text-sm text-[#626B75]">
          যেকোনো তথ্য, সংবাদের সূত্র, বিজ্ঞাপন বা মতামতের জন্য আমাদের সাথে সরাসরি যোগাযোগ করতে পারেন।
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Form: 7 Columns */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        {/* Contact Information & Office Details: 5 Columns */}
        <div className="lg:col-span-5 space-y-5">
          <div className="bg-white rounded-lg border border-[#E2E6EB] p-5 shadow-xs space-y-4">
            <h3 className="text-base font-bold text-[#0756A4] border-b pb-2 flex items-center gap-2">
              <Building className="w-5 h-5 text-[#087A43]" />
              প্রধান কার্যালয়
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-[#202124]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0756A4] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-gray-900">অফিস ঠিকানা:</strong>
                  <span>প্লট-১২, ব্লক-জে, প্রগতি সরণি, বারিধারা, ঢাকা-১২১২, বাংলাদেশ।</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#087A43] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-gray-900">টেলিফোন ও হটলাইন:</strong>
                  <span>+৮৮০ ২ ৯৮৭৬৫৪৩, +৮৮০ ১৭০০০০০০০০</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#D62828] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-gray-900">ইমেইল:</strong>
                  <span>বার্তা বিভাগ: news@barishalerpran.com</span>
                  <br />
                  <span>বিজ্ঞাপন বিভাগ: ads@barishalerpran.com</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#0756A4] shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-gray-900">কার্যালয় সময়:</strong>
                  <span>রবিবার - বৃহস্পতিবার: সকাল ৯:০০ - সন্ধ্যা ৬:০০ (অনলাইন ডেস্ক ২৪/৭ সক্রিয়)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map Placeholder */}
          <div className="bg-white rounded-lg border border-[#E2E6EB] p-4 shadow-xs">
            <h4 className="text-xs font-bold text-[#626B75] uppercase tracking-wider mb-2">
              ম্যাপে আমাদের অবস্থান (ডেমো)
            </h4>
            <div className="h-44 w-full bg-[#EAF2FB] border border-[#CCD4DD] rounded flex flex-col items-center justify-center text-center p-3">
              <MapPin className="w-8 h-8 text-[#0756A4] mb-1 animate-bounce" />
              <span className="text-xs font-bold text-[#0756A4]">বারিধারা, ঢাকা-১২১২</span>
              <span className="text-[11px] text-[#626B75] mt-1">
                গুগল ম্যাপস ইন্টিগ্রেশন প্রিভিউ
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
