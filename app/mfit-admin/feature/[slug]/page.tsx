"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Sparkles,
  Hammer,
  Clock,
  ArrowLeft,
  ChevronRight,
  ShieldAlert,
  Zap,
  Bot,
  Radio,
  Headphones,
  BookOpen,
  Film,
  Quote,
  Images,
  Video,
  PieChart,
  Smile,
  FileText,
  Layout,
  Home,
  Layers,
  CreditCard,
  Users,
  Code2,
  ScanFace,
  Shield,
  CheckCircle2,
  Rocket,
} from "lucide-react";
import MfitAdminNavbar from "@/components/admin/MfitAdminNavbar";
import MfitAdminSidebar from "@/components/admin/MfitAdminSidebar";
import ScrollToTop from "@/components/common/ScrollToTop";

interface FeatureInfo {
  name: string;
  nameEn: string;
  category: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  progress: number;
  expectedVersion: string;
  featuresList: string[];
}

const FEATURE_DATA: Record<string, FeatureInfo> = {
  "auto-news": {
    name: "অটো নিউজ",
    nameEn: "Auto News Generation",
    category: "CONTENT",
    description: "এআই এবং আরএসএস ফিডের মাধ্যমে স্বয়ংক্রিয়ভাবে তাজা সংবাদ সংগ্রহ, অনুবাদ ও খসড়া তৈরির অত্যাধুনিক সিস্টেম।",
    icon: Zap,
    color: "#10B981",
    progress: 75,
    expectedVersion: "v2.0",
    featuresList: [
      "স্বয়ংক্রিয় আরএসএস ও নিউজ সোর্স ক্রলিং",
      "এআই ভিত্তিক ফ্যাক্ট ভেরিফিকেশন ও সামারি",
      "ক্যাটাগরি ভিত্তিক অটো শিডিউলিং ও পাবলিশিং",
      "কন্টেন্ট ডুপ্লিকেশন রোধ ফিল্টার",
    ],
  },
  "news-agent": {
    name: "নিউজ এজেন্ট",
    nameEn: "Automated News Agent",
    category: "CONTENT",
    description: "সংবাদ বিশ্লেষণ, তথ্য যাচাই (Fact-checking) ও স্বয়ংক্রিয় সামারি তৈরির ভার্চুয়াল এআই সহকারী।",
    icon: Bot,
    color: "#10B981",
    progress: 70,
    expectedVersion: "v2.0",
    featuresList: [
      "২৪/৭ সংবাদ পর্যবেক্ষণ ও নোটিফিকেশন",
      "ব্রেকিং নিউজের তাত্ক্ষণিক সারাংশ প্রস্তুত",
      "স্মার্ট ট্যাগিং ও এসইও কিওয়ার্ড সাজেশন",
      "পাঠকের আগ্রহ ভিত্তিক টপিক রিকমেন্ডেশন",
    ],
  },
  "live-tv": {
    name: "লাইভ টিভি",
    nameEn: "Live TV Streaming",
    category: "CONTENT",
    description: "এইচএলএস/আরটিএমপি প্রটোকলসহ সরাসরি ২৪/৭ লাইভ ভিডিও ও স্পেশাল সংবাদ বুলেটিন সম্প্রচার ফিচার।",
    icon: Radio,
    color: "#10B981",
    progress: 80,
    expectedVersion: "v2.0",
    featuresList: [
      "লো-লেটেন্সি লাইভ স্ট্রিমিং সাপোর্ট (HLS/DASH)",
      "ইউটিউব এবং ফেসবুক লাইভ সিনক্রোনাইজেশন",
      "লাইভ চ্যাট ও অডিয়েন্স এনগেজমেন্ট কন্ট্রোল",
      "রেকর্ডকৃত প্রোগ্রাম আর্কাইভ ম্যানেজমেন্ট",
    ],
  },
  "audio-news": {
    name: "অডিও সংবাদ",
    nameEn: "Audio News & Podcast",
    category: "CONTENT",
    description: "টেক্সট-টু-স্পিচ (TTS) প্রযুক্তি ও পডকাস্টের মাধ্যমে সংবাদকে শ্রুতিমধুর অডিওতে রূপান্তরের প্ল্যাটফর্ম।",
    icon: Headphones,
    color: "#EA580C",
    progress: 65,
    expectedVersion: "v2.0",
    featuresList: [
      "উচ্চমানের বাংলা এআই ভয়েস সিন্থেসিস",
      "দৈনিক অডিও বুলেটিন ও পডকাস্ট প্লেলিস্ট",
      "ব্যাকগ্রাউন্ড প্লে এবং অডিও প্লেয়ার উইজেট",
      "অডিও ফাইল আপলোড ও প্লেলিস্ট ম্যানেজমেন্ট",
    ],
  },
  "photo-story": {
    name: "ফটো স্টোরি",
    nameEn: "Photo Story & Visual Journalism",
    category: "CONTENT",
    description: "আকর্ষণীয় ছবির মাধ্যমে ভিজ্যুয়াল সাংবাদিকতা ও আধুনিক গল্প উপস্থাপনার বিশেষ মাধ্যম।",
    icon: BookOpen,
    color: "#9333EA",
    progress: 85,
    expectedVersion: "v2.0",
    featuresList: [
      "মাল্টি-ইমেজ ফুলস্ক্রিন স্লাইডভিউয়ার",
      "ছবির সাথে বিশদ ক্যাপশন ও আলোকচিত্রীর ক্রেডিট",
      "ফটোগ্রাফি ক্যাটাগরি ও অ্যালবাম ফিল্টার",
      "সোশ্যাল মিডিয়া অপ্টিমাইজড শেয়ার কার্ড",
    ],
  },
  "reels-story": {
    name: "রিলস স্টোরি",
    nameEn: "Short Reels & Stories",
    category: "CONTENT",
    description: "ইনস্টাগ্রাম ও ফেসবুকের মতো ৯:১৬ উল্লম্ব ফরম্যাটের শর্ট ভিডিও স্টোরি ও রিলস সিস্টেম।",
    icon: Film,
    color: "#EF4444",
    progress: 60,
    expectedVersion: "v2.1",
    featuresList: [
      "মোবাইল-ফ্রেন্ডলি ফুলস্ক্রিন ভার্টিকাল ভিডিও",
      "অটো প্লে এবং সোয়াইপ নেভিগেশন",
      "ভিডিও ট্রিম এবং কভার থাম্বনেইল নির্বাচন",
      "রিলসের সাথে সম্পর্কিত নিউজের লিংক যোগ",
    ],
  },
  "quotes": {
    name: "উক্তি ও বাণী",
    nameEn: "Quotes & Statements",
    category: "CONTENT",
    description: "বিশিষ্ট ব্যক্তিবর্গের গুরুত্বপূর্ণ উক্তি ও বিবৃতি ফটো কার্ড ও কোটেশন আকারে প্রকাশের টুল।",
    icon: Quote,
    color: "#DC2626",
    progress: 80,
    expectedVersion: "v2.0",
    featuresList: [
      "কোটেশন কার্ড টেমপ্লেট ও ডিজাইন কাস্টমাইজার",
      "বক্তা ও ব্যক্তিত্বের প্রোফাইল ও ফটো লিংক",
      "টপ কোটস হোমপেজ উইজেট",
      "১-ক্লিকে সোশ্যাল মিডিয়া পোস্ট এক্সপোর্ট",
    ],
  },
  "photo-gallery": {
    name: "ছবি গ্যালারি",
    nameEn: "Photo Gallery Albums",
    category: "CONTENT",
    description: "হাই-রেজোলিউশন ফটো অ্যালবাম, স্লাইডশো এবং অ্যালবাম ভিত্তিক ছবি ব্যবস্থাপনা।",
    icon: Images,
    color: "#F97316",
    progress: 85,
    expectedVersion: "v2.0",
    featuresList: [
      "বাল্ক ছবি আপলোড ও ড্র্যাগ-ড্রপ সর্টিং",
      "লাইটরুম ও গ্রিডভিউ স্লাইডশো লেআউট",
      "ক্যাটাগরি অনুযায়ী অ্যালবাম বিভাজন",
      "ইমেজ ওয়াটারমার্কিং ও সাইজ অপ্টিমাইজেশন",
    ],
  },
  "video-gallery": {
    name: "ভিডিও গ্যালারি",
    nameEn: "Video Gallery",
    category: "CONTENT",
    description: "ইউটিউব, ফেসবুক ও নিজস্ব ক্লাউডে সংরক্ষিত ভিডিও সংকলন ও প্লেলিস্ট সিস্টেম।",
    icon: Video,
    color: "#7C3AED",
    progress: 75,
    expectedVersion: "v2.0",
    featuresList: [
      "ইউটিউব ও ভিমিও ভিডিও লিঙ্ক সরাসরি এম্বেড",
      "ভিডিও ক্যাটাগরি ও প্লেলিস্ট ব্যবস্থাপনা",
      "কাস্টম থাম্বনেইল ও সময়সীমা ব্যাজ",
      "ভিডিও ডিটেইলস পেজ ও রিলেটেড ভিডিওস",
    ],
  },
  "poll": {
    name: "অনলাইন পোল ও জরিপ",
    nameEn: "Public Poll & Surveys",
    category: "CONTENT",
    description: "জনমত জরিপ, রিয়েল-টাইম ভোটিং এবং ভোট পরিসংখ্যান পাই-চার্ট সিস্টেম।",
    icon: PieChart,
    color: "#2563EB",
    progress: 70,
    expectedVersion: "v2.0",
    featuresList: [
      "মাল্টিপল চয়েস ও একক উত্তর পোল তৈরি",
      "রিয়েল-টাইম ভোট কাউন্টিং ও বার চার্ট ফলাফল",
      "আইপি ও কুকি ভিত্তিক ডুপ্লিকেট ভোট রোধ",
      "নির্দিষ্ট সময়ে পোল স্বয়ংক্রিয় বন্ধ ও আর্কাইভ",
    ],
  },
  "reactions": {
    name: "প্রতিক্রিয়া ও রেটিং",
    nameEn: "User Reactions & Ratings",
    category: "CONTENT",
    description: "প্রতিটি সংবাদে পাঠকের ইমোজি রিঅ্যাকশন, লাইক ও এনগেজমেন্ট অ্যানালিটিক্স।",
    icon: Smile,
    color: "#9333EA",
    progress: 90,
    expectedVersion: "v2.0",
    featuresList: [
      "৬টি স্বতন্ত্র ইমোজি রিঅ্যাকশন (লাইক, ভালোবাসা, দুঃখ, ইত্যাদি)",
      "নিউজ অনুযায়ী পাঠকের মানসিক প্রতিক্রিয়া বিশ্লেষণ",
      "মোস্ট রিঅ্যাক্টেড নিউজের টপ চার্ট",
      "স্প্যাম ক্লিক প্রতিরোধ ফিল্টার",
    ],
  },
  "pages": {
    name: "পেজ ম্যানেজমেন্ট",
    nameEn: "Static & Custom Pages",
    category: "CONTENT",
    description: "আমাদের সম্পর্কে, যোগাযোগ, বিজ্ঞাপন, গোপনীয়তা নীতিমালা ইত্যাদি ডাইনামিক পেজ ক্রিয়েটর।",
    icon: FileText,
    color: "#16A34A",
    progress: 75,
    expectedVersion: "v2.0",
    featuresList: [
      "রিচ টেক্সট এডিটর ও এইচটিএমএল সাপোর্ট",
      "কাস্টম স্ল্যাগ ও মেটা ডেসক্রিপশন এসইও",
      "পাবলিশ, ড্রাফট ও প্রিভিউ মোড",
      "ফুটার ও হেডারে সরাসরি পেজ লিঙ্ক সংযোগ",
    ],
  },
  "header-footer": {
    name: "হেডার ও ফুটার সেটিংস",
    nameEn: "Header & Footer Customization",
    category: "CUSTOMIZATION",
    description: "ওয়েবসাইটের মূল হেডার, লোগো, ফুটার কলাম, কপিরাইট টেক্সট ও সোশ্যাল লিঙ্কস কাস্টমাইজেশন।",
    icon: Layout,
    color: "#16A34A",
    progress: 70,
    expectedVersion: "v2.0",
    featuresList: [
      "লোগো, ফেভিকন ও ব্যানার স্লট পরিবর্তন",
      "হেডার স্টিকি মেনু ও সার্চ বার কনফিগারেশন",
      "ফুটার ৪-কলাম উইজেট ও সোশ্যাল মিডিয়া লিঙ্ক",
      "জরুরি নোটিশ বার ও টপ হেডার বার সেটিংস",
    ],
  },
  "homepage-settings": {
    name: "হোমপেজ সেটিংস",
    nameEn: "Homepage Layout & Sections",
    category: "CUSTOMIZATION",
    description: "হোমপেজের প্রতিটি সেকশনের ক্রম, ক্যাটাগরি ব্লক কন্ট্রোল এবং হিরো ব্যানার সেটিং।",
    icon: Home,
    color: "#3B82F6",
    progress: 65,
    expectedVersion: "v2.0",
    featuresList: [
      "ড্র্যাগ-অ্যান্ড-ড্রপ সেকশন রি-অর্ডারিং",
      "লিড ও সাব-লিড নিউজের লেআউট টেমপ্লেট বাছাই",
      "হোমপেজে প্রদর্শিত ক্যাটাগরি ও পোস্ট সংখ্যা নির্ধারণ",
      "ভিডিও ও ফটো গ্যালারি সেকশন অন/অফ সুইচ",
    ],
  },
  "post-settings": {
    name: "পোস্ট সেটিংস",
    nameEn: "Article Single Post Settings",
    category: "CUSTOMIZATION",
    description: "সিঙ্গেল নিউজ পোস্টের রিডিং মোড, ফন্ট সাইজ কন্ট্রোল, রিলেটেড নিউজ ও কমেন্ট কনফিগারেশন।",
    icon: Layers,
    color: "#1D4ED8",
    progress: 80,
    expectedVersion: "v2.0",
    featuresList: [
      "কমেন্ট সেকশন অন/অফ এবং মডারেশন সেটিংস",
      "সোশ্যাল মিডিয়া শেয়ার বাটন নির্বাচন",
      "সম্পর্কিত খবর (Related News) সংখ্যা নির্ধারণ",
      "লেখক পরিচিতি ও বায়ো বক্স ডিসপ্লে টগল",
    ],
  },
  "advertisement": {
    name: "বিজ্ঞাপন ম্যানেজমেন্ট",
    nameEn: "Ad Management & Banner Slots",
    category: "CUSTOMIZATION",
    description: "হেডার লিডারবোর্ড, ইন-আর্টিকেল ব্যানার, সাইডবার ও পপ-আপ অ্যাড শিডিউলিং।",
    icon: Layout,
    color: "#7C3AED",
    progress: 85,
    expectedVersion: "v2.0",
    featuresList: [
      "লিডারবোর্ড, ব্যানার ও সাইডবার অ্যাড স্লট কন্ট্রোল",
      "বিজ্ঞাপনের শুরু ও সমাপ্তির তারিখ নির্ধারণ",
      "ইমপ্রেশন এবং ক্লিক ট্র্যাকিং রিপোর্ট",
      "গুগল অ্যাডসেন্স ও কাস্টম ব্যানার সাপোর্ট",
    ],
  },
  "menu": {
    name: "মেনু ম্যানেজমেন্ট",
    nameEn: "Navigation Menu Manager",
    category: "CUSTOMIZATION",
    description: "ওয়েবসাইটের প্রাইমারি মেনু, মেগা মেনু এবং ফুটার নেভিগেশন আইটেম কাস্টমাইজার।",
    icon: CreditCard,
    color: "#DC2626",
    progress: 75,
    expectedVersion: "v2.0",
    featuresList: [
      "ড্র্যাগ-ড্রপ মেনু অর্ডার সাজানো",
      "সাব-মেনু ও ড্রপডাউন ক্রিয়েশন",
      "কাস্টম এক্সটার্নাল লিঙ্ক যুক্ত করার সুবিধা",
      "মোবাইল মেনু আলাদা কনফিগারেশন",
    ],
  },
  "photo-card": {
    name: "ফটো কার্ড জেনারেটর",
    nameEn: "Social Media Photo Cards",
    category: "CUSTOMIZATION",
    description: "সংবাদের ব্রেকিং ও আকর্ষণীয় হেডলাইন দিয়ে ব্র্যান্ডেড সোশ্যাল মিডিয়া ফটো কার্ড জেনারেটর।",
    icon: CreditCard,
    color: "#2563EB",
    progress: 85,
    expectedVersion: "v2.0",
    featuresList: [
      "রেডিমেড প্রফেশনাল ফটো কার্ড টেমপ্লেট",
      "হেডলাইন, সাবটাইটেল ও লোগো অটো-প্লেসমেন্ট",
      "১-ক্লিকে হাই-রেজোলিউশন জেপিজি ডাউনলোড",
      "ফেসবুক ও এক্স (টুইটার) সাইজ অপ্টিমাইজড",
    ],
  },
  "writers-account": {
    name: "রাইটার্স অ্যাকাউন্ট",
    nameEn: "Writers & Contributors Manager",
    category: "ADVANCE",
    description: "প্রতিনিধি ও লেখকদের অ্যাকাউন্ট তৈরি, পদবী বরাদ্দ এবং নিউজ সাবমিশন পারমিশন।",
    icon: Users,
    color: "#16A34A",
    progress: 80,
    expectedVersion: "v2.0",
    featuresList: [
      "জেলা ও উপজেলা প্রতিনিধিদের আলাদা আইডি",
      "প্রতিবেদকের বায়ো, ছবি ও ডেসিগনেশন সম্পাদনা",
      "লেখকের মোট পোস্ট ও ভিউ সংখ্যা পরিসংখ্যান",
      "পোস্ট রিভিউর পর প্রকাশ বা সরাসরি পাবলিশ রোল",
    ],
  },
  "developer-zone": {
    name: "ডেভেলপার জোন",
    nameEn: "Developer API & Webhooks",
    category: "ADVANCE",
    description: "তৃতীয় পক্ষের মোবাইল অ্যাপ বা ওয়েবসাইটের জন্য রেস্ট এপিআই (REST API) কি এবং ওয়েবহুক কনফিগারেশন।",
    icon: Code2,
    color: "#16A34A",
    progress: 60,
    expectedVersion: "v2.1",
    featuresList: [
      "অ্যান্ড্রয়েড ও আইওএস অ্যাপের জন্য API এন্ডপয়েন্ট",
      "সিকিউর এপিআই টোকেন ও রেট লিমিটিং",
      "ব্রেকিং নিউজের তাত্ক্ষণিক ওয়েবহুক পুশ",
      "এপিআই লগ ও রিকোয়েস্ট মনিটরিং",
    ],
  },
  "web-access": {
    name: "ওয়েব এক্সেস কন্ট্রোল",
    nameEn: "Web Access & Permissions",
    category: "ADVANCE",
    description: "আইপি হোয়াইটলিস্টিং, রোল-বেসড অ্যাক্সেস কন্ট্রোল (RBAC) এবং লগইন সেশন অডিট ট্রেইল।",
    icon: ScanFace,
    color: "#DC2626",
    progress: 75,
    expectedVersion: "v2.0",
    featuresList: [
      "অ্যাডমিন, এডিটর ও স্টাফ রিপোর্টার রোল অ্যাসাইনমেন্ট",
      "আইপি রেস্ট্রিকশন ও নির্দিষ্ট আইপি থেকে অ্যাক্সেস",
      "সক্রিয় লগইন সেশন ট্র্যাক ও রিমোট লগআউট",
      "অ্যাডমিন এক্টিভিটি অডিট লগ",
    ],
  },
  "security": {
    name: "নিরাপত্তা ও ফায়ারওয়াল",
    nameEn: "Security & DDoS Protection",
    category: "ADVANCE",
    description: "টু-ফ্যাক্টর অথেনটিকেশন (2FA), ব্রুট-ফোর্স প্রটেকশন এবং স্প্যাম বট ফিল্টারিং।",
    icon: Shield,
    color: "#DC2626",
    progress: 70,
    expectedVersion: "v2.0",
    featuresList: [
      "টু-ফ্যাক্টর অথেনটিকেশন (OTP / Authenticator App)",
      "ব্রুট ফোর্স অ্যাটাক প্রতিরোধ ও অটো আইপি ব্যান",
      "স্প্যাম বট ফিল্টারিং ও রিক্যাপচা v3 সুরক্ষা",
      "ডাটাবেজ অটো ব্যাকআপ ও এনক্রিপশন সিস্টেম",
    ],
  },
};

export default function FeatureComingSoonPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const params = useParams();
  const slug = (params?.slug as string) || "feature";

  // Lookup info or fallback
  const feature = FEATURE_DATA[slug] || {
    name: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    nameEn: "Upcoming Feature",
    category: "ADMIN FEATURE",
    description: "এই ফিচারটি বর্তমানে আমাদের ডেভেলপমেন্ট টিম কর্তৃক উন্নয়নাধীন রয়েছে। খুব শীঘ্রই এটি সক্রিয় করা হবে।",
    icon: Sparkles,
    color: "#3858F6",
    progress: 70,
    expectedVersion: "v2.0",
    featuresList: [
      "অত্যাধুনিক ইউজার ইন্টারফেস ও স্মুথ এক্সপেরিয়েন্স",
      "লাইভ ডাটাবেজের সাথে সরাসরি ইন্টিগ্রেশন",
      "রোল ভিত্তিক নিরাপত্তা ও পারমিশন কন্ট্রোল",
      "স্বয়ংক্রিয় ক্লাউড ব্যাকআপ ও ব্যাকগ্রাউন্ড সিঙ্ক",
    ],
  };

  const IconComponent = feature.icon;

  return (
    <div className="min-h-screen bg-[#F0F4FA] text-[#1E293B] flex flex-col font-sans">
      {/* Top Navbar */}
      <MfitAdminNavbar
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        isSidebarOpen={isSidebarOpen}
      />

      {/* Main Container: Sidebar + Feature Content */}
      <div className="flex-1 flex">
        {/* Left Sidebar */}
        <MfitAdminSidebar isOpen={isSidebarOpen} activePath={`/mfit-admin/feature/${slug}`} />

        {/* Content Area */}
        <main className="flex-1 w-full p-4 sm:px-6 sm:py-5 min-w-0 flex flex-col justify-between">
          <div className="max-w-4xl mx-auto w-full">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs font-medium text-[#64748B] mb-5">
              <Link href="/mfit-admin" className="hover:text-[#1677FF] transition-colors">
                ড্যাশবোর্ড
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span>{feature.category}</span>
              <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-[#0A2540] font-semibold">{feature.name}</span>
            </div>

            {/* Main Hero Card: Under Development / Upcoming Feature */}
            <div className="bg-white rounded-2xl border border-[#D5E1F5] shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden mb-6">
              {/* Header Gradient Stripe */}
              <div
                className="h-2 w-full"
                style={{
                  background: `linear-gradient(90deg, ${feature.color}, #3858F6, #7C3AED)`,
                }}
              />

              <div className="p-6 sm:p-8 lg:p-10">
                {/* Badges Row */}
                <div className="flex flex-wrap items-center gap-2.5 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                    <Hammer className="w-3.5 h-3.5 animate-bounce" />
                    <span>🛠️ উন্নয়নাধীন ফিচার (Under Development)</span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                    <Rocket className="w-3.5 h-3.5" />
                    <span>🚀 আসন্ন আপডেট ({feature.expectedVersion})</span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-gray-100 text-gray-600">
                    <Clock className="w-3 h-3" />
                    <span>Coming Soon</span>
                  </span>
                </div>

                {/* Title & Icon Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-xs"
                    style={{
                      backgroundColor: `${feature.color}15`,
                      color: feature.color,
                    }}
                  >
                    <IconComponent className="w-7 h-7 stroke-[2.2]" />
                  </div>
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight mb-1">
                      {feature.name}
                    </h1>
                    <p className="text-sm font-medium text-[#64748B]">
                      {feature.nameEn} • {feature.category}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[15px] sm:text-[16px] text-[#334155] leading-relaxed mb-6 bg-[#F8FAFC] p-4 rounded-xl border border-[#E2E8F0]">
                  {feature.description}
                </p>

                {/* Development Progress Indicator */}
                <div className="mb-8 p-4 rounded-xl bg-gradient-to-r from-[#F0F4FA] to-[#EEF2FF] border border-[#DDE7FB]">
                  <div className="flex items-center justify-between text-xs font-bold text-[#0A2540] mb-2">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#3858F6]" />
                      <span>উন্নয়ন অগ্রগতি (Progress Status)</span>
                    </span>
                    <span className="text-[#3858F6]">{feature.progress}% সম্পন্ন</span>
                  </div>
                  <div className="w-full h-2.5 bg-white/80 rounded-full overflow-hidden shadow-inner">
                    <div
                      className="h-full rounded-full transition-all duration-1000 bg-gradient-to-r from-[#3858F6] to-[#10B981]"
                      style={{ width: `${feature.progress}%` }}
                    />
                  </div>
                  <p className="text-[11.5px] text-[#64748B] mt-2 font-medium">
                    আমাদের ইঞ্জিনিয়ারিং দল সক্রিয়ভাবে এই ফিচারটির ব্যাকএন্ড ও ইউআই তৈরি করছে। সম্পন্ন হলে এই পেজে পূর্ণাঙ্গ ড্যাশবোর্ড সক্রিয় হবে।
                  </p>
                </div>

                {/* Upcoming Capabilities / Roadmap List */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-[#0A2540] uppercase tracking-wider mb-3">
                    এই ফিচারে যা যা থাকছে:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {feature.featuresList.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#E8EEF8] shadow-xs text-xs font-medium text-[#1E293B]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Action Navigation Buttons */}
                <div className="pt-6 border-t border-[#E8EEF8] flex flex-wrap items-center gap-3">
                  <Link
                    href="/mfit-admin"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A2540] hover:bg-[#1E293B] text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>ড্যাশবোর্ডে ফিরে যান</span>
                  </Link>

                  <Link
                    href="/mfit-admin/new-article"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1677FF] hover:bg-blue-600 text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors"
                  >
                    <span>+ নতুন পোস্ট তৈরি করুন</span>
                  </Link>

                  <Link
                    href="/mfit-admin/articles"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-[#F4F7FC] text-[#334155] border border-[#CBD5E1] text-xs sm:text-sm font-semibold transition-colors"
                  >
                    <span>সকল সংবাদ দেখুন</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-8 pt-4 border-t border-[#E2E8F0] text-center text-xs text-[#64748B]">
            Powered by{" "}
            <a
              href="https://mfit.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1677FF] hover:underline"
            >
              mfit.com
            </a>
          </footer>
        </main>
      </div>

      <ScrollToTop />
    </div>
  );
}
