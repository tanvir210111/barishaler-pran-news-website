import React from "react";
import Link from "next/link";
import { CATEGORIES } from "@/data/mockNews";
import { Mail, Phone, MapPin } from "lucide-react";
import SocialMediaIcons from "@/components/common/SocialMediaIcons";




export default function Footer() {
  const currentYear = 2026;

  const quickLinks = [
    { name: "আমাদের সম্পর্কে", href: "/about" },
    { name: "যোগাযোগ", href: "/contact" },
    { name: "সম্পাদকীয় নীতিমালা", href: "/editorial-policy" },
    { name: "গোপনীয়তা নীতি", href: "/privacy-policy" },
    { name: "শর্তাবলী", href: "/terms" },
    { name: "বিজ্ঞাপন", href: "/advertise" },
    { name: "ছবি গ্যালারি", href: "/gallery" },
    { name: "ভিডিও", href: "/videos" },
    { name: "পুরাতন নিউজ আর্কাইভ", href: "/archive" },
    { name: "সর্বশেষ খবর", href: "/latest" },
    { name: "জনপ্রিয় খবর", href: "/popular" },
  ];

  return (
    <footer className="bg-[#1a2332] text-gray-300 pt-10 pb-6 border-t-4 border-[#0756A4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-gray-700/60">
          {/* Brand info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center p-1">
                <svg width="20" height="20" className="w-5 h-5 text-[#0756A4]"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="5" fill="#087A43" />
                  <path
                    d="M12 2V5M12 19V22M4.93 4.93L7.05 7.05M16.95 16.95L19.07 19.07M2 12H5M19 12H22M4.93 19.07L7.05 16.95M16.95 7.05L19.07 4.93"
                    stroke="#0756A4"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">
                বরিশালের <span className="text-[#087A43]">প্রাণ</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              সত্যের সঙ্গে, মানুষের পাশে। বস্তুনিষ্ঠ ও নিরপেক্ষ সাংবাদিকতার অঙ্গীকার নিয়ে পরিচালিত বাংলাদেশের অন্যতম শীর্ষস্থানীয় অনলাইন সংবাদপত্র।
            </p>
            <div className="pt-2 text-xs text-gray-400 space-y-1.5">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#0756A4]" />
                প্লট-১২, প্রগতি সরণি, বারিধারা, ঢাকা-১২১২
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#087A43]" />
                +৮৮০ ২ ৯৮৭৬৫৪৩, +৮৮০ ১৭০০০০০০০০
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D62828]" />
                contact@barishalerpran.com
              </p>
            </div>
          </div>

          {/* Categories 1 */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#0756A4] pl-2">
              সংবাদ বিভাগ
            </h4>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-3 text-sm">
              {CATEGORIES.slice(0, 10).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="hover:text-white hover:underline transition-colors block py-0.5"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories 2 */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#087A43] pl-2">
              অন্যান্য বিভাগ
            </h4>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-3 text-sm">
              {CATEGORIES.slice(10).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="hover:text-white hover:underline transition-colors block py-0.5"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information & Socials */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#D62828] pl-2">
              গুরুত্বপূর্ণ লিংক
            </h4>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-2 text-sm mb-4">
              {quickLinks.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-white hover:underline transition-colors block py-0.5"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <span className="block text-xs text-gray-400 mb-2 font-semibold">
                সামাজিক মাধ্যমে আমরা:
              </span>
              <SocialMediaIcons variant="footer" />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3 text-center sm:text-left">
          <p>
            © {currentYear} <strong className="text-gray-200">বরিশালের প্রাণ</strong> (Barishaler Pran)। সর্বস্বত্ব সংরক্ষিত। অনুমতি ছাড়া এই ওয়েবসাইটের কোনো লেখা বা ছবি প্রকাশ বেআইনি।
          </p>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/terms" className="hover:text-white transition-colors">
              শর্তাবলী
            </Link>
            <span>•</span>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              গোপনীয়তা
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              বিজ্ঞাপন ও যোগাযোগ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
