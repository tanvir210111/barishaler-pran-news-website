import { Category, Author, Tag, Article, GalleryItem, VideoItem, BreakingNewsItem, Comment } from "@/types/news";

export const CATEGORIES: Category[] = [
  { id: "1", name: "জাতীয়", slug: "national", description: "দেশের সামগ্রিক পরিস্থিতি ও জাতীয় গুরুত্বপূর্ণ সংবাদ", order: 1, isMain: true },
  { id: "2", name: "রাজনীতি", slug: "politics", description: "দেশের রাজনৈতিক দল, নির্বাচন ও রাজনৈতিক ঘটনাবলীর বিশ্লেষণ", order: 2, isMain: true },
  { id: "3", name: "আন্তর্জাতিক", slug: "international", description: "বিশ্ব রাজনীতি, আন্তর্জাতিক কূটনীতি ও বহির্বিশ্বের গুরুত্বপূর্ণ খবর", order: 3, isMain: true },
  { id: "4", name: "খেলাধুলা", slug: "sports", description: "ক্রিকেট, ফুটবলসহ দেশ-বিদেশের খেলাধুলার সংবাদ ও সরাসরি আপডেট", order: 4, isMain: true },
  { id: "5", name: "বিনোদন", slug: "entertainment", description: "চলচ্চিত্র, নাটক, ওটিটি, সঙ্গীত ও শোবিজ জগতের সকল সংবাদ", order: 5, isMain: true },
  { id: "6", name: "সারাদেশ", slug: "countrywide", description: "বিভাগ, জেলা ও তৃণমূলের মানুষের জীবনযাত্রার খবরাখবর", order: 6, isMain: true },
  { id: "7", name: "ক্যাম্পাস", slug: "campus", description: "বিশ্ববিদ্যালয়, কলেজ ও ক্যাম্পাস জীবনের সকল সংবাদ ও কার্যক্রম", order: 7, isMain: true },
  { id: "8", name: "ইসলাম", slug: "islam", description: "ইসলামি জীবনবিধান, কোরআন-হাদিসের আলো ও দ্বীনি জীবনযাপন", order: 8, isMain: true },
  { id: "9", name: "অর্থনীতি", slug: "economy", description: "ব্যবসা-বাণিজ্য, মুদ্রাবাজার, ব্যাংকিং ও বৈশ্বিক অর্থনীতির খবর", order: 9, isMain: false },
  { id: "10", name: "শিক্ষা", slug: "education", description: "প্রাথমিক থেকে উচ্চশিক্ষা, পরীক্ষা, ফলাফল ও শিক্ষাব্যবস্থা", order: 10, isMain: false },
  { id: "11", name: "প্রযুক্তি", slug: "technology", description: "স্মার্টফোন, কৃত্রিম বুদ্ধিমত্তা, সাইবার নিরাপত্তা ও গ্যাজেট", order: 11, isMain: false },
  { id: "12", name: "স্বাস্থ্য", slug: "health", description: "চিকিৎসা বিজ্ঞান, পুষ্টি, সুস্থ জীবন ও স্বাস্থ্য সচেতনতা", order: 12, isMain: false },
  { id: "13", name: "চাকরি", slug: "jobs", description: "সরকারি-বেসরকারি চাকরির বিজ্ঞপ্তি, প্রস্তুতি ও ক্যারিয়ার পরামর্শ", order: 13, isMain: false },
  { id: "14", name: "কৃষি", slug: "agriculture", description: "কৃষি অর্থনীতি, ফসলের প্রযুক্তি, কৃষকের অধিকার ও উদ্যোগ", order: 14, isMain: false },
  { id: "15", name: "মতামত", slug: "opinion", description: "বিশ্লেষণধর্মী কলাম, সম্পাদকীয় ও বিশিষ্টজনের অভিমত", order: 15, isMain: false },
  { id: "16", name: "লাইফস্টাইল", slug: "lifestyle", description: "ফ্যাশন, রূপচর্চা, ভ্রমণ, খাবার ও জীবনধারা", order: 16, isMain: false },
  { id: "17", name: "বিজ্ঞান", slug: "science", description: "মহাকাশ গবেষণা, আধুনিক আবিষ্কার ও বিজ্ঞানের বিস্ময়", order: 17, isMain: false },
  { id: "18", name: "অপরাধ", slug: "crime", description: "আইনশৃঙ্খলা, দুর্নীতি দমন ও চাঞ্চল্যকর অপরাধের অনুসন্ধান", order: 18, isMain: false },
  { id: "19", name: "পরিবেশ", slug: "environment", description: "জলবায়ু পরিবর্তন, নদী রক্ষা, দূষণ ও জীববৈচিত্র্য সংরক্ষণ", order: 19, isMain: false },
];

export const AUTHORS: Author[] = [
  {
    id: "auth-1",
    name: "তানভীর আহমেদ",
    slug: "tanvir-ahmed",
    role: "প্রধান প্রতিবেদক",
    bio: "জাতীয় রাজনীতি ও অনুসন্ধানমূলক সাংবাদিকতায় এক দশকের অভিজ্ঞতা সম্পন্ন জ্যেষ্ঠ সাংবাদিক।",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    email: "tanvir.news@barishalerpran.com",
    location: "ঢাকা, বাংলাদেশ"
  },
  {
    id: "auth-2",
    name: "ফারিহা তাসনিম",
    slug: "fariha-tasnim",
    role: "অর্থনীতি ও বাণিজ্য সম্পাদক",
    bio: "ম্যাক্রোইকোনমিক্স ও শেয়ারবাজারের গতিপ্রকৃতি বিশ্লেষণে পারদর্শী অর্থনৈতিক বিশ্লেষক।",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    email: "fariha.biz@barishalerpran.com",
    location: "ঢাকা, বাংলাদেশ"
  },
  {
    id: "auth-3",
    name: "রাকিবুল হাসান",
    slug: "rakibul-hasan",
    role: "ক্রীড়া প্রতিবেদক",
    bio: "আন্তর্জাতিক ক্রিকেট ও ইউরোপীয় ক্লাব ফুটবলের মাঠের খবরের অভিজ্ঞ বিশ্লেষক।",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    email: "rakib.sports@barishalerpran.com",
    location: "চট্টগ্রাম, বাংলাদেশ"
  },
  {
    id: "auth-4",
    name: "নাসরিন সুলতানা",
    slug: "nasrin-sultana",
    role: "প্রযুক্তি ও জীবনধারা লেখক",
    bio: "এআই, ডিজিটাল নিরাপত্তা এবং তরুণ প্রজন্মের জীবনধারা নিয়ে নিয়মিত ফিচার লেখক।",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    email: "nasrin.tech@barishalerpran.com",
    location: "ঢাকা, বাংলাদেশ"
  },
  {
    id: "auth-5",
    name: "ড. সৈয়দ আনোয়ারুল হক",
    slug: "syed-anwarul-haque",
    role: "কলামিস্ট ও শিক্ষাবিদ",
    bio: "সাবেক অধ্যাপক ও সমাজবিজ্ঞানী। রাজনীতি, শিক্ষা ও সমাজভাবনা নিয়ে নিয়মিত কলাম লিখছেন।",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    email: "anwarul.opinion@barishalerpran.com",
    location: "ঢাকা"
  },
  {
    id: "auth-6",
    name: "ফারহানা করিম",
    slug: "farhana-karim",
    role: "কলামিস্ট ও অর্থনীতি বিশ্লেষক",
    bio: "টেকসই উন্নয়ন নীতি ও ব্যাংকিং খাতের সংস্কার বিষয়ক কলাম লেখক।",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    email: "farhana.column@barishalerpran.com",
    location: "ঢাকা"
  }
];

export const TAGS: Tag[] = [
  { id: "1", name: "বাংলাদেশ", slug: "bangladesh" },
  { id: "2", name: "অর্থনীতি", slug: "economy" },
  { id: "3", name: "নির্বাচন", slug: "election" },
  { id: "4", name: "বিশ্ব রাজনীতি", slug: "world-politics" },
  { id: "5", name: "ক্রিকেট", slug: "cricket" },
  { id: "6", name: "প্রযুক্তি", slug: "tech" },
  { id: "7", name: "জলবায়ু", slug: "climate" },
  { id: "8", name: "শিক্ষা", slug: "education" },
  { id: "9", name: "ঢাকা", slug: "dhaka" },
  { id: "10", name: "উন্নয়ন", slug: "development" }
];

// All articles are now live in MongoDB and fetched via the Barisaler Pran backend API
export const ARTICLES: Article[] = [];

// Breaking news items are loaded from the backend API
export const BREAKING_NEWS: BreakingNewsItem[] = [];

// Gallery items are dynamically loaded from live photo-journalism articles
export const GALLERY_ITEMS: GalleryItem[] = [];

// Video items are loaded from the backend API
export const VIDEO_ITEMS: VideoItem[] = [];

// Comments are loaded from and posted to the backend API
export const DEMO_COMMENTS: Comment[] = [];
export const INITIAL_COMMENTS: Comment[] = [];
