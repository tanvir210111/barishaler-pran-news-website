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

export const BREAKING_NEWS: BreakingNewsItem[] = [
  {
    id: "bn-1",
    headline: "মেট্রোরেলের নতুন রুটের বাণিজ্যিক চলাচল উদ্বোধন, রাজধানীর যোগাযোগ ব্যবস্থায় স্বস্তি",
    slug: "metro-rail-new-route-commercial-run",
    categoryName: "জাতীয়",
    publishedTime: "১০ মিনিট আগে"
  },
  {
    id: "bn-2",
    headline: "রেমিট্যান্স প্রবাহে নতুন রেকর্ড: গত মাসে দেশে এসেছে ২৪০ কোটি ডলার",
    slug: "remittance-inflow-new-record-240-crore",
    categoryName: "অর্থনীতি",
    publishedTime: "২৫ মিনিট আগে"
  },
  {
    id: "bn-3",
    headline: "টি-টোয়েন্টি সিরিজে দক্ষিণ আফ্রিকার বিপক্ষে শ্বাসরুদ্ধকর জয় পেল বাংলাদেশ",
    slug: "bangladesh-thrilling-victory-against-sa",
    categoryName: "খেলাধুলা",
    publishedTime: "৪০ মিনিট আগে"
  },
  {
    id: "bn-4",
    headline: "জাতিসংঘ সাধারণ অধিবেশনে বিশ্ব শান্তি ও জলবায়ু ন্যায়বিচারের জোরালো আহ্বান",
    slug: "un-general-assembly-peace-climate-call",
    categoryName: "আন্তর্জাতিক",
    publishedTime: "১ ঘণ্টা আগে"
  }
];

export const ARTICLES: Article[] = [
  {
    id: "popular-shot-1",
    title: "চায়ের আমন্ত্রণের পর সদস্যদের পদত্যাগ",
    slug: "members-resignation-after-tea-invitation",
    summary: "রাজনৈতিক মহলে চাঞ্চল্য সৃষ্টি করে গুরুত্বপূর্ণ কমিটির সদস্যদের হঠাৎ গণপদত্যাগপত্র দাখিল।",
    category: CATEGORIES[0], // জাতীয়
    author: AUTHORS[0],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80",
      caption: "সচিবালয় ও রাজনৈতিক কার্যালয়ে আলোচনা।",
      credit: "বিশেষ প্রতিনিধি",
      alt: "পদত্যাগ"
    },
    tags: [TAGS[0]],
    publishedAt: "2026-10-19T05:00:00Z",
    publishedAtBengali: "১ ঘণ্টা আগে",
    readingTimeMinutes: 3,
    isLead: false,
    viewsCount: 98500,
    sharesCount: 8200,
    content: [{ type: "paragraph", text: "চা চক্রের আলোচনার পরেই এ সিদ্ধান্ত এসেছে বলে জানা গেছে।" }]
  },
  {
    id: "popular-shot-2",
    title: "দুপুরে পদত্যাগের ঘোষণা দেবেন ইশরাক",
    slug: "ishraque-announcing-resignation-noon",
    summary: "সংবাদ সম্মেলনের মাধ্যমে নিজের অবস্থান পরিষ্কার করে আনুষ্ঠানিক পদত্যাগের সিদ্ধান্ত জানাতে যাচ্ছেন নেতা ইশরাক।",
    category: CATEGORIES[1], // রাজনীতি
    author: AUTHORS[1],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
      caption: "সংবাদ সম্মেলনের প্রস্তুতি।",
      credit: "নিজস্ব প্রতিবেদক",
      alt: "ইশরাক সংবাদ সম্মেলন"
    },
    tags: [TAGS[0], TAGS[2]],
    publishedAt: "2026-10-19T03:00:00Z",
    publishedAtBengali: "৩ ঘণ্টা আগে",
    readingTimeMinutes: 3,
    isLead: false,
    viewsCount: 91200,
    sharesCount: 7600,
    content: [{ type: "paragraph", text: "দুপুর ১২টায় এ বিষয়ে সংবাদ সম্মেলন ডাকা হয়েছে।" }]
  },
  {
    id: "popular-shot-3",
    title: "তেলাপোকাদের মোকাবিলায় এবার 'লাল হিট'",
    slug: "cockroach-control-lal-hit-initiative",
    summary: "বাসাবাড়িতে কীটপতঙ্গ নিয়ন্ত্রণে নতুন প্রযুক্তির লাল হিট ফর্মুলা নিয়ে ব্যাপক আলোচনা ও কার্যকারিতা যাচাই।",
    category: CATEGORIES[15], // লাইফস্টাইল
    author: AUTHORS[3],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      caption: "গৃহস্থালি সুরক্ষা ও পরিষ্কার-পরিচ্ছন্নতা।",
      credit: "ফিচার ডেস্ক",
      alt: "কীটপতঙ্গ নিয়ন্ত্রণ"
    },
    tags: [TAGS[5]],
    publishedAt: "2026-10-19T04:00:00Z",
    publishedAtBengali: "২ ঘণ্টা আগে",
    readingTimeMinutes: 3,
    isLead: false,
    viewsCount: 84300,
    sharesCount: 6100,
    content: [{ type: "paragraph", text: "বিশেষজ্ঞরা বলছেন নিরাপদ ব্যবহার নিশ্চিত করা জরুরি।" }]
  },
  {
    id: "popular-shot-4",
    title: "সংখ্যালঘুদের ধর্মপালনের অধিকারের বিপরীত চিত্র",
    slug: "minority-religious-rights-contrasting-reality",
    summary: "তৃণমূল পর্যায়ে নিরাপত্তা ও সমঅধিকারের প্রতিশ্রুতি বনাম মাঠপর্যায়ের বাস্তব পরিস্থিতি নিয়ে এক বিশেষ অনুসন্ধান।",
    category: CATEGORIES[0], // জাতীয়
    author: AUTHORS[0],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=800&q=80",
      caption: "নাগরিক অধিকার ও নিরাপত্তা সমাবেশ।",
      credit: "মানবাধিকার ব্যুরো",
      alt: "অধিকার সমাবেশ"
    },
    tags: [TAGS[0]],
    publishedAt: "2026-10-19T05:00:00Z",
    publishedAtBengali: "১ ঘণ্টা আগে",
    readingTimeMinutes: 4,
    isLead: false,
    viewsCount: 79900,
    sharesCount: 5400,
    content: [{ type: "paragraph", text: "সকলের ধর্মীয় স্বাধীনতা ও নাগরিক অধিকার অক্ষুণ্ণ রাখার দাবি উঠেছে।" }]
  },
  {
    id: "new-latest-1",
    title: "রান্নার সরঞ্জাম ও পায়ুপথে লুকানো ছিল ৫ কোটি টাকার স্বর্ণ",
    slug: "five-crore-gold-seized-airport-customs",
    summary: "হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দরে বিশেষ তল্লাশি চালিয়ে রান্নার সরঞ্জাম ও যাত্রীদের পায়ুপথে লুকানো অবস্থায় প্রায় ৫ কোটি টাকা মূল্যের স্বর্ণ উদ্ধার করেছে কাস্টমস কর্তৃপক্ষ।",
    category: CATEGORIES[0], // জাতীয়
    author: AUTHORS[0],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
      caption: "কাস্টমস হলে জব্দকৃত স্বর্ণ ও আটক ব্যক্তিরা।",
      credit: "কাস্টমস গোয়েন্দা / ঢাকা",
      alt: "স্বর্ণ উদ্ধার"
    },
    tags: [TAGS[0]],
    publishedAt: "2026-10-19T05:57:00Z",
    publishedAtBengali: "১৯ অক্টোবর ২০২৬, সকাল ১১:৫৭",
    readingTimeMinutes: 3,
    isLead: false,
    viewsCount: 14200,
    sharesCount: 1200,
    content: [{ type: "paragraph", text: "বিমানবন্দর সূত্র জানায়, গোপন সংবাদের ভিত্তিতে কাস্টমস গোয়েন্দা দল তল্লাশি চালিয়ে এসব স্বর্ণবার ও অলংকার জব্দ করে।" }]
  },
  {
    id: "new-latest-2",
    title: "মুফতি আমির হামজার মাহফিলের অনুমতি দেয়নি প্রশাসন, মুজিবুর রহমানের ক্ষোভ",
    slug: "mufti-amir-hamza-mahfil-permission-denied",
    summary: "পূর্বনির্ধারিত তাফসিরুল কোরআন মাহফিলের অনুমতি না দেওয়ায় স্থানীয় প্রশাসনের সিদ্ধান্তের তীব্র প্রতিবাদ ও ক্ষোভ প্রকাশ করেছেন আয়োজক কমিটির সভাপতি মুজিবুর রহমান।",
    category: CATEGORIES[7], // ইসলাম
    author: AUTHORS[1],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=800&q=80",
      caption: "মাহফিলের অনুমতি না পাওয়ায় প্রেস ব্রিফিংয়ে আয়োজক নেতৃবৃন্দ।",
      credit: "বিশেষ প্রতিনিধি",
      alt: "মাহফিল অনুমতি"
    },
    tags: [TAGS[0]],
    publishedAt: "2026-10-19T05:56:00Z",
    publishedAtBengali: "১৯ অক্টোবর ২০২৬, সকাল ১১:৫৬",
    readingTimeMinutes: 3,
    isLead: false,
    viewsCount: 22300,
    sharesCount: 2400,
    content: [{ type: "paragraph", text: "আয়োজকদের পক্ষ থেকে সকল ধরনের শান্তিপূর্ণ সমাবেশের নিশ্চয়তা দেওয়া সত্ত্বেও শেষ মুহূর্তে মাহফিল স্থগিত করার নির্দেশ আসে।" }]
  },
  {
    id: "new-latest-3",
    title: "শিক্ষার্থীদের কাউন্সেলিংয়ে নবীজির ১০ গুণ",
    slug: "prophet-counseling-qualities-students",
    summary: "শিক্ষার্থীদের মানসিক বিকাশ, আত্মবিশ্বাস ও নৈতিক চরিত্র গঠনে প্রিয় নবী (সা.)-এর অনুকরণীয় ১০টি গুণাবলি ও দিকনির্দেশনা আলোকপাত করেছেন ইসলামি শিক্ষাবিদরা।",
    category: CATEGORIES[7], // ইসলাম
    author: AUTHORS[3],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
      caption: "শিক্ষার্থীদের মানসিক স্বাস্থ্য ও দিকনির্দেশনামূলক পরামর্শ অধিবেশন।",
      credit: "শিক্ষা ও সংস্কৃতি ডেস্ক",
      alt: "শিক্ষার্থীদের কাউন্সেলিং"
    },
    tags: [TAGS[0], TAGS[7]],
    publishedAt: "2026-10-19T05:49:00Z",
    publishedAtBengali: "১৯ অক্টোবর ২০২৬, সকাল ১১:৪৯",
    readingTimeMinutes: 4,
    isLead: false,
    viewsCount: 18900,
    sharesCount: 1950,
    content: [{ type: "paragraph", text: "ধৈর্য, স্নেহশীলতা ও বাস্তবমুখী উপদেশ প্রদানের মাধ্যমে শিক্ষার্থীদের সংকট মোকাবিলার প্রেরণা জোগায় নবীজির অনুপম চরিত্র।" }]
  },
  {
    id: "new-latest-4",
    title: "ডিএমপির অভিযানে ২৪ ঘণ্টায় গ্রেপ্তার ৪৮৪, মামলা ৫৩",
    slug: "dmp-drive-484-arrested-53-cases-24-hours",
    summary: "রাজধানীর বিভিন্ন এলাকায় ঢাকা মহানগর পুলিশের (ডিএমপি) অপরাধবিরোধী বিশেষ অভিযানে গত ২৪ ঘণ্টায় ৪৮৪ জনকে গ্রেপ্তার করা হয়েছে। এ সময় মোট ৫৩টি মামলা দায়ের করা হয়।",
    category: CATEGORIES[0], // জাতীয়
    author: AUTHORS[0],
    featuredImage: {
      url: "/images/dmp.svg",
      caption: "ঢাকা মেট্রোপলিটন পুলিশ (ডিএমপি) মিডিয়া সেন্টার।",
      credit: "ডিএমপি প্রেস উইং",
      alt: "ডিএমপি অভিযান"
    },
    tags: [TAGS[0]],
    publishedAt: "2026-10-19T05:00:00Z",
    publishedAtBengali: "১৯ অক্টোবর ২০২৬, সকাল ১১:০০",
    readingTimeMinutes: 3,
    isLead: false,
    viewsCount: 31200,
    sharesCount: 2900,
    content: [{ type: "paragraph", text: "গ্রেপ্তারকৃতদের বিরুদ্ধে সংশ্লিষ্ট থানাগুলোতে মাদকদ্রব্য নিয়ন্ত্রণ, চুরি ও অন্যান্য অপরাধে মামলা নথিভুক্ত করা হয়েছে।" }]
  },
  {
    id: "new-latest-5",
    title: "ভারতীয় গণতন্ত্রের হিসাব মেলানোর পালা",
    slug: "indian-democracy-analysis-elections",
    summary: "সাম্প্রতিক রাজনৈতিক মেরুকরণ ও নাগরিক অধিকারের পরিপ্রেক্ষিতে ভারতীয় গণতান্ত্রিক ব্যবস্থার ভবিষ্যৎ গতিপ্রকৃতি নিয়ে বিশদ বিশ্লেষণ।",
    category: CATEGORIES[2], // আন্তর্জাতিক
    author: AUTHORS[1],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=800&q=80",
      caption: "গণতান্ত্রিক সমাবেশ ও রাজনৈতিক আলোচনা।",
      credit: "আন্তর্জাতিক ডেস্ক",
      alt: "ভারতীয় গণতন্ত্র"
    },
    tags: [TAGS[3]],
    publishedAt: "2026-10-19T03:00:00Z",
    publishedAtBengali: "১৯ অক্টোবর ২০২৬, সকাল ৯:০০",
    readingTimeMinutes: 4,
    isLead: false,
    viewsCount: 26400,
    sharesCount: 1700,
    content: [{ type: "paragraph", text: "বিশ্বের বৃহত্তম গণতন্ত্রের কাঠামোগত স্থিতিশীলতা নিয়ে গবেষকদের মধ্যে নানা ধরনের পর্যালোচনা চলছে।" }]
  },
  {
    id: "new-latest-6",
    title: "ইউরোপজুড়ে কেন বিক্ষোভ, কী চাইছেন তরুণেরা",
    slug: "europe-youth-protests-what-young-people-want",
    summary: "জীবনযাত্রার ব্যয় বৃদ্ধি, সামাজিক নিরাপত্তা ও ভবিষ্যৎ অনিশ্চয়তার প্রতিবাদে ইউরোপের রাজপথে নেমেছেন তরুণ প্রজন্মের প্রতিনিধিরা।",
    category: CATEGORIES[2], // আন্তর্জাতিক
    author: AUTHORS[0],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
      caption: "ইউরোপের রাজধানীতে তরুণদের বিক্ষোভ মিছিল।",
      credit: "রয়টার্স / এএফপি",
      alt: "ইউরোপ বিক্ষোভ"
    },
    tags: [TAGS[3]],
    publishedAt: "2026-10-19T03:00:00Z",
    publishedAtBengali: "১৯ অক্টোবর ২০২৬, সকাল ৯:০০",
    readingTimeMinutes: 4,
    isLead: false,
    viewsCount: 34500,
    sharesCount: 3100,
    content: [{ type: "paragraph", text: "কর্মসংস্থানের সুযোগ বৃদ্ধি এবং টেকসই নীতির দাবিতে যুবসমাজ কঠোর কর্মসূচি গ্রহণ করছে।" }]
  },
  {
    id: "latest-1",
    title: "ফ্রান্সে নজিরবিহীন সহিংসতায় সংকটে সরকার, স্বরাষ্ট্রমন্ত্রীর পদত্যাগ দাবি",
    slug: "france-violence-crisis-interior-minister-resignation-demand",
    summary: "ফ্রান্সজুড়ে ছড়িয়ে পড়া তীব্র অসন্তোষ ও সহিংস বিক্ষোভের মুখে রাজনৈতিক সংকটে পড়েছে সরকার। স্বরাষ্ট্রমন্ত্রীর অবিলম্বে পদত্যাগ দাবি করেছে বিরোধী দলগুলো।",
    category: CATEGORIES[2], // আন্তর্জাতিক
    author: AUTHORS[0],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80",
      caption: "প্যারিসের রাজপথে বিক্ষোভকারীদের সঙ্গে পুলিশের সংঘর্ষ।",
      credit: "এএফপি / আন্তর্জাতিক ডেস্ক",
      alt: "ফ্রান্স বিক্ষোভ"
    },
    tags: [TAGS[3]],
    publishedAt: "2026-10-19T05:35:00Z",
    publishedAtBengali: "১৯ অক্টোবর ২০২৬, সকাল ১১:৩৫",
    readingTimeMinutes: 3,
    isLead: false,
    viewsCount: 21400,
    sharesCount: 1800,
    content: [{ type: "paragraph", text: "প্যারিসসহ গুরুত্বপূর্ণ শহরগুলোতে নিরাপত্তা ব্যবস্থা জোরদার করা হলেও সহিংসতা থামছে না।" }]
  },
  {
    id: "latest-2",
    title: "ফ্রান্স জ্বলছে, দেরি হওয়ার আগেই সীমান্ত বন্ধ করুন: ট্রাম্প",
    slug: "france-burning-close-borders-trump-warning",
    summary: "ফ্রান্সের অস্থিরতাকে অভিবাসন নীতির চরম ব্যর্থতা আখ্যা দিয়ে পশ্চিমা দেশগুলোকে অবিলম্বে সীমান্ত বন্ধের জোরালো আহ্বান জানিয়েছেন সাবেক মার্কিন প্রেসিডেন্ট ডোনাল্ড ট্রাম্প।",
    category: CATEGORIES[2], // আন্তর্জাতিক
    author: AUTHORS[1],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1580130775562-0ef92da028de?auto=format&fit=crop&w=800&q=80",
      caption: "নির্বাচনী সমাবেশে বক্তব্য রাখছেন ডোনাল্ড ট্রাম্প।",
      credit: "রয়টার্স",
      alt: "ডোনাল্ড ট্রাম্প"
    },
    tags: [TAGS[3]],
    publishedAt: "2026-10-19T05:30:00Z",
    publishedAtBengali: "১৯ অক্টোবর ২০২৬, সকাল ১১:৩০",
    readingTimeMinutes: 3,
    isLead: false,
    viewsCount: 19800,
    sharesCount: 1400,
    content: [{ type: "paragraph", text: "ট্রাম্প দাবি করেন কার্যকর সীমান্ত নীতি ছাড়া কোনো রাষ্ট্র তার সার্বভৌমত্ব ও শান্তি বজায় রাখতে পারে না।" }]
  },
  {
    id: "latest-3",
    title: "দুই বাংলাদেশির মৃত্যুদণ্ড কার্যকর, সৌদি রাষ্ট্রদূতকে ডেকে পরিস্থিতি জানতে চাইল পররাষ্ট্র মন্ত্রণালয়",
    slug: "two-bangladeshis-executed-saudi-arabia-foreign-ministry-summons",
    summary: "সৌদি আরবে মাদক চোরাচালানের অভিযোগে আটক দুই বাংলাদেশির মৃত্যুদণ্ড কার্যকর হওয়ার পর ঢাকায় নিযুক্ত সৌদি রাষ্ট্রদূতকে তলব করে আনুষ্ঠানিক ব্যাখ্যা চেয়েছেন পররাষ্ট্র সচিব।",
    category: CATEGORIES[0], // জাতীয়
    author: AUTHORS[0],
    featuredImage: {
      url: "/images/mofa.svg",
      caption: "পররাষ্ট্র মন্ত্রণালয়ে দ্বিপাক্ষিক বৈঠক অনুষ্ঠিত হয়।",
      credit: "পররাষ্ট্র মন্ত্রণালয় প্রেস উইং",
      alt: "পররাষ্ট্র মন্ত্রণালয়"
    },
    tags: [TAGS[0], TAGS[3]],
    publishedAt: "2026-10-19T05:25:00Z",
    publishedAtBengali: "১৯ অক্টোবর ২০২৬, সকাল ১১:২৫",
    readingTimeMinutes: 4,
    isLead: false,
    viewsCount: 38200,
    sharesCount: 3900,
    content: [{ type: "paragraph", text: "বিচারের স্বচ্ছতা এবং আত্মপক্ষ সমর্থনের সুযোগ নিশ্চিত করা হয়েছিল কি না সে বিষয়ে উদ্বেগ প্রকাশ করেছে বাংলাদেশ।" }]
  },
  {
    id: "latest-4",
    title: "আকাশে খুলে গেল ভারতীয় এয়ার অ্যাম্বুলেন্সের দরজা, ঢাকায় অবতরণের পর রোগীর মৃত্যু",
    slug: "indian-air-ambulance-door-opens-mid-air-patient-dies",
    summary: "মাঝআকাশে আকস্মিক কারিগরি ত্রুটির কারণে অ্যাম্বুলেন্সের দরজা খুলে যায়। হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দরে জরুরি অবতরণের পর চিকিৎসাধীন রোগীর মৃত্যু ঘটে।",
    category: CATEGORIES[0], // জাতীয়
    author: AUTHORS[0],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
      caption: "শাহজালাল আন্তর্জাতিক বিমানবন্দরে জরুরি অবতরণকারী এয়ার অ্যাম্বুলেন্স।",
      credit: "বিশেষ প্রতিনিধি / বরিশালের প্রাণ",
      alt: "এয়ার অ্যাম্বুলেন্স"
    },
    tags: [TAGS[0]],
    publishedAt: "2026-10-19T05:20:00Z",
    publishedAtBengali: "১৯ অক্টোবর ২০২৬, সকাল ১১:২০",
    readingTimeMinutes: 4,
    isLead: false,
    viewsCount: 28900,
    sharesCount: 2500,
    content: [{ type: "paragraph", text: "উড্ডয়নের কিছুক্ষণ পরই কেবিনের চাপ কমে যায় এবং দরজা আলগা হয়ে মারাত্মক আতঙ্ক তৈরি হয়।" }]
  },
  {
    id: "latest-5",
    title: "মহিলা ও শিশুবিষয়ক মন্ত্রণালয়ের নাম পরিবর্তন",
    slug: "women-children-ministry-name-change-decision",
    summary: "মন্ত্রণালয়ের কাজের পরিধি বৃদ্ধি এবং অন্তর্ভুক্তিমূলক সমাজ গঠনের লক্ষ্যে মহিলা ও শিশুবিষয়ক মন্ত্রণালয়ের নাম পরিবর্তনের সিদ্ধান্ত চূড়ান্ত করেছে সরকার।",
    category: CATEGORIES[0], // জাতীয়
    author: AUTHORS[1],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=800&q=80",
      caption: "সচিবালয়ে অনুষ্ঠিত আন্তঃমন্ত্রণালয় সভায় নাম পরিবর্তনের প্রস্তাব অনুমোদন পায়।",
      credit: "পিআইডি",
      alt: "মন্ত্রণালয় সভা"
    },
    tags: [TAGS[0]],
    publishedAt: "2026-10-19T05:15:00Z",
    publishedAtBengali: "১৯ অক্টোবর ২০২৬, সকাল ১১:১৫",
    readingTimeMinutes: 3,
    isLead: false,
    viewsCount: 15600,
    sharesCount: 890,
    content: [{ type: "paragraph", text: "খুব শিগগিরই নতুন নামে গেজেট প্রকাশ করা হবে বলে মন্ত্রিপরিষদ বিভাগ সূত্রে নিশ্চিত করা হয়েছে।" }]
  },
  {
    id: "latest-6",
    title: "অমর একুশে বইমেলা শুরু ৭ জানুয়ারি",
    slug: "amar-ekushey-boimela-begins-january-7",
    summary: "বাংলা একাডেমি প্রাঙ্গণ ও সোহরাওয়ার্দী উদ্যানে যথারীতি শুরু হতে যাচ্ছে বাঙালির প্রাণের মেলা। প্রকাশকদের দাবির মুখে এবার নির্ধারিত সময়ের আগেই প্রস্তুতি শেষ করার তাগিদ।",
    category: CATEGORIES[0], // জাতীয়
    author: AUTHORS[3],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
      caption: "বইমেলা চত্বরে স্টল নির্মাণের প্রাথমিক প্রস্তুতি চলছে।",
      credit: "সংস্কৃতি ডেস্ক / বরিশালের প্রাণ",
      alt: "অমর একুশে বইমেলা"
    },
    tags: [TAGS[0]],
    publishedAt: "2026-10-19T05:10:00Z",
    publishedAtBengali: "১৯ অক্টোবর ২০২৬, সকাল ১১:১০",
    readingTimeMinutes: 3,
    isLead: false,
    viewsCount: 22400,
    sharesCount: 1600,
    content: [{ type: "paragraph", text: "নিরাপত্তা নিশ্চিত করতে পুরো মেলা প্রাঙ্গণ সিসিটিভি ক্যামেরার আওতায় আনা হচ্ছে।" }]
  },
  {
    id: "latest-7",
    title: "শেখ মুজিবের ম্যুরাল নির্মাণের নামে সাড়ে ৬ কোটি টাকা আত্মসাৎ, দুদকের মামলায় হাছান-ইনু",
    slug: "mural-construction-fund-embezzlement-dudak-case",
    summary: "ম্যুরাল নির্মাণের মিথ্যা প্রকল্প দেখিয়ে সরকারি তহবিল থেকে বিপুল অর্থ লোপাটের অভিযোগে সাবেক মন্ত্রী হাছান মাহমুদ ও হাসানুল হক ইনুর বিরুদ্ধে মামলা দায়ের করেছে দুদক।",
    category: CATEGORIES[1], // রাজনীতি
    author: AUTHORS[0],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
      caption: "দুদক প্রধান কার্যালয়ে প্রেস ব্রিফিংয়ে মামলার বিস্তারিত তুলে ধরা হয়।",
      credit: "আদালত প্রতিবেদক",
      alt: "দুদক মামলা"
    },
    tags: [TAGS[2], TAGS[0]],
    publishedAt: "2026-10-19T05:05:00Z",
    publishedAtBengali: "১৯ অক্টোবর ২০২৬, সকাল ১১:০৫",
    readingTimeMinutes: 4,
    isLead: false,
    viewsCount: 34100,
    sharesCount: 3200,
    content: [{ type: "paragraph", text: "তদন্তে প্রমাণিত হয়েছে প্রকল্পটির কোনো বাস্তবিক অস্তিত্ব না থাকলেও ব্যাংকিং চ্যানেলে অর্থ ছাড় করা হয়েছিল।" }]
  },
  {
    id: "latest-8",
    title: "শাহজালালের ১১৮ ফ্লাইট বাতিল, আটকা ১৮৩৬২ যাত্রী",
    slug: "shahjalal-airport-118-flights-cancelled-stranded-passengers",
    summary: "মধ্যপ্রাচ্যগামী এয়ারলাইন্সগুলোর শিডিউল বিপর্যয় ও বৈরী আবহাওয়ার কারণে একদিনে শতাধিক ফ্লাইট বাতিল হয়েছে। চরম দুর্ভোগে পড়েছেন প্রবাসী শ্রমিকসহ হাজারো যাত্রী।",
    category: CATEGORIES[0], // জাতীয়
    author: AUTHORS[2],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
      caption: "টার্মিনালে দীর্ঘ অপেক্ষারত হাজার হাজার যাত্রী।",
      credit: "বিমানবন্দর ব্যুরো / বরিশালের প্রাণ",
      alt: "শাহজালাল বিমানবন্দর"
    },
    tags: [TAGS[0]],
    publishedAt: "2026-10-19T05:00:00Z",
    publishedAtBengali: "১৯ অক্টোবর ২০২৬, সকাল ১১:০০",
    readingTimeMinutes: 4,
    isLead: false,
    viewsCount: 42100,
    sharesCount: 5100,
    content: [{ type: "paragraph", text: "বিমানবন্দর কর্তৃপক্ষ যাত্রীদের ধৈর্য ধরার অনুরোধ জানিয়েছে এবং বিশেষ কাউন্টার খুলে তথ্য সহায়তা দিচ্ছে।" }]
  },
  {
    id: "latest-9",
    title: "বিমান বাহিনীর সাবেক প্রধান আব্দুল হান্নান কাতারে গ্রেপ্তার",
    slug: "former-air-force-chief-abdul-hannan-arrested-qatar",
    summary: "অর্থপাচার ও মানবতাবিরোধী অপরাধের মামলায় ইন্টারপোলের রেড নোটিশ জারির পর কাতারের দোহা আন্তর্জাতিক বিমানবন্দর থেকে তাকে আটক করেছে স্থানীয় পুলিশ।",
    category: CATEGORIES[0], // জাতীয়
    author: AUTHORS[0],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      caption: "বিমান বাহিনীর সাবেক প্রধান আব্দুল হান্নান।",
      credit: "ফাইল ছবি",
      alt: "আব্দুল হান্নান গ্রেপ্তার"
    },
    tags: [TAGS[0], TAGS[2]],
    publishedAt: "2026-10-19T04:55:00Z",
    publishedAtBengali: "১৯ অক্টোবর ২০২৬, সকাল ১০:৫৫",
    readingTimeMinutes: 4,
    isLead: false,
    viewsCount: 51200,
    sharesCount: 6800,
    content: [{ type: "paragraph", text: "তাকে দেশে ফিরিয়ে এনে বিশেষ ট্রাইব্যুনালে হাজির করার জন্য বন্দি বিনিময় চুক্তির আওতায় প্রক্রিয়া শুরু হয়েছে।" }]
  },
  {
    id: "art-1",
    title: "মেট্রোরেলের নতুন রুট উদ্বোধন: ঢাকার যোগাযোগ ব্যবস্থায় বৈপ্লবিক রূপান্তরের নতুন দিগন্ত। যাত্রীদের চোখে-মুখে আনন্দ ও স্বস্তি",
    slug: "metro-rail-new-route-commercial-run",
    summary: "রাজধানীর দীর্ঘদিনের যানজট লাঘবে মেট্রোরেলের নতুন সম্প্রসারিত অংশের আনুষ্ঠানিক বাণিজ্যিক যাত্রা শুরু হয়েছে। প্রথম দিনেই লক্ষাধিক যাত্রীর মসৃণ যাতায়াত নিশ্চিত হয়েছে।",
    category: CATEGORIES[0], // জাতীয়
    author: AUTHORS[0],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
      caption: "রাজধানীতে নতুন সম্প্রসারিত রুটে চলাচল শুরু করেছে আধুনিক মেট্রোরেল।",
      credit: "বরিশালের প্রাণ / ফটো সার্ভিস",
      alt: "মেট্রোরেল নতুন রুট"
    },
    tags: [TAGS[0], TAGS[8], TAGS[9]],
    publishedAt: "2026-10-18T10:30:00Z",
    publishedAtBengali: "১৮ অক্টোবর ২০২৬, সকাল ১০:৩০",
    readingTimeMinutes: 4,
    isLead: true,
    isFeatured: true,
    isBreaking: true,
    viewsCount: 24820,
    sharesCount: 2250,
    content: [
      {
        type: "paragraph",
        text: "রাজধানী ঢাকার দীর্ঘদিনের যানজটের যন্ত্রণা লাঘবে যোগাযোগ খাতে যুক্ত হলো আরও একটি নতুন মাইলফলক। আজ ভোর থেকেই সাধারণ যাত্রীদের জন্য খুলে দেওয়া হয়েছে মেট্রোরেলের নতুন সম্প্রসারিত অংশ।"
      },
      {
        type: "heading",
        text: "যাত্রীদের চোখে-মুখে আনন্দ ও স্বস্তি"
      },
      {
        type: "paragraph",
        text: "নতুন স্টেশনগুলো চালুর ফলে প্রতিদিন লাখো কর্মজীবী মানুষ মাত্র কয়েক মিনিটেই গন্তব্যে পৌঁছাতে পারবেন। মিরপুর থেকে মতিঝিল কিংবা পুরান ঢাকার পথে এখন আর ঘণ্টার পর ঘণ্টা বাসে আটকে থাকতে হচ্ছে না।"
      },
      {
        type: "quote",
        text: "মেট্রোরেল শুধু একটি ট্রেন নয়, এটি ঢাকার নাগরিকদের জীবনযাত্রার গতি ও সময় বাঁচানোর সবচেয়ে নির্ভরযোগ্য বাহন।"
      },
      {
        type: "paragraph",
        text: "সংশ্লিষ্ট কর্মকর্তারা জানিয়েছেন, অত্যাধুনিক নিরাপত্তা ব্যবস্থা, স্বয়ংক্রিয় টিকিটিং এবং পরিবেশবান্ধব বিদ্যুৎ ব্যবস্থার কারণে এই নেটওয়ার্কটি আন্তর্জাতিক মান অর্জন করেছে।"
      }
    ]
  },
  {
    id: "art-2",
    title: "রেমিট্যান্স প্রবাহে নতুন মাইলফলক: একক মাসে দেশে এলো ২৪০ কোটি ডলার",
    slug: "remittance-inflow-new-record-240-crore",
    summary: "প্রবাসী আয়ের ইতিবাচক ধারায় বৈদেশিক মুদ্রার রিজার্ভে তৈরি হয়েছে স্বস্তিদায়ক অবস্থান। ব্যাংকিং চ্যানেলে প্রণোদনা বৃদ্ধিতে হুন্ডি প্রতিরোধে এসেছে বড় সাফল্য।",
    category: CATEGORIES[8], // অর্থনীতি
    author: AUTHORS[1],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
      caption: "ব্যাংকিং চ্যানেলে প্রবাসী আয় বৃদ্ধি পাওয়ায় অর্থনীতিতে গতি ফিরেছে।",
      credit: "ছবি: সংগৃহীত",
      alt: "রেমিট্যান্স ও ব্যাংকিং"
    },
    tags: [TAGS[0], TAGS[1]],
    publishedAt: "2026-10-18T09:15:00Z",
    publishedAtBengali: "১৮ অক্টোবর ২০২৬, সকাল ০৯:১৫",
    readingTimeMinutes: 3,
    isLead: false,
    isFeatured: true,
    isBreaking: true,
    viewsCount: 18420,
    sharesCount: 1520,
    content: [
      {
        type: "paragraph",
        text: "সদ্য সমাপ্ত মাসে প্রবাসীদের প্রেরিত রেমিট্যান্স অতীতের সকল রেকর্ড ভেঙে নতুন উচ্চতায় পৌঁছেছে। কেন্দ্রীয় ব্যাংকের সর্বশেষ প্রতিবেদন অনুযায়ী, গত এক মাসে দেশে এসেছে ২৪০ কোটি ডলার।"
      }
    ]
  },
  {
    id: "art-3",
    title: "টি-টোয়েন্টি সিরিজে দক্ষিণ আফ্রিকার বিপক্ষে শ্বাসরুদ্ধকর জয় পেল বাংলাদেশ",
    slug: "bangladesh-thrilling-victory-against-sa",
    summary: "শেষ ওভারের নাটকীয়তায় ২ উইকেটে জয় তুলে নিল টাইগাররা। অলরাউন্ড নৈপুণ্যে দলকে সিরিজ জয়ের পথে এগিয়ে নিলেন টাইগার তারকারা।",
    category: CATEGORIES[3], // খেলাধুলা
    author: AUTHORS[2],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80",
      caption: "মিরপুর শেরেবাংলা স্টেডিয়ামে টাইগারদের জয়ের উল্লাস।",
      credit: "বিসিবি / স্পোর্টস ফটো",
      alt: "বাংলাদেশ ক্রিকেট বিজয়"
    },
    tags: [TAGS[4], TAGS[0]],
    publishedAt: "2026-10-18T08:00:00Z",
    publishedAtBengali: "১৮ অক্টোবর ২০২৬, সকাল ০৮:০০",
    readingTimeMinutes: 4,
    isLead: false,
    isFeatured: true,
    isBreaking: false,
    viewsCount: 28500,
    sharesCount: 4100,
    content: [
      {
        type: "paragraph",
        text: "মিরপুরের শের-ই-বাংলা জাতীয় ক্রিকেট স্টেডিয়ামে টানটান উত্তেজনার ম্যাচে দক্ষিণ আফ্রিকাকে ২ উইকেটে হারিয়ে তিন ম্যাচ সিরিজে ১-০ ব্যবধানে এগিয়ে গেল বাংলাদেশ।"
      }
    ]
  },
  {
    id: "art-4",
    title: "নির্বাচনী সংস্কার ও রাজনৈতিক সংলাপ: গণতান্ত্রিক ব্যবস্থার স্থায়িত্বে ঐকমত্য জরুরি",
    slug: "political-dialogue-electoral-reform",
    summary: "দেশের সকল রাজনৈতিক শক্তিকে সঙ্গে নিয়ে একটি সুষ্ঠু ও গ্রহণযোগ্য নির্বাচনী রূপরেখা প্রণয়নের আহ্বান জানিয়েছেন বিশিষ্ট নাগরিকরা।",
    category: CATEGORIES[1], // রাজনীতি
    author: AUTHORS[0],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80",
      caption: "জাতীয় প্রেস ক্লাবে অনুষ্ঠিত গোলটেবিল আলোচনায় বক্তব্য রাখছেন রাজনৈতিক নেতৃবৃন্দ।",
      credit: "বরিশালের প্রাণ / তানভীর আহমেদ",
      alt: "রাজনৈতিক সংলাপ"
    },
    tags: [TAGS[0], TAGS[2]],
    publishedAt: "2026-10-18T07:45:00Z",
    publishedAtBengali: "১৮ অক্টোবর ২০২৬, সকাল ০৭:৪৫",
    readingTimeMinutes: 5,
    isLead: false,
    isFeatured: true,
    viewsCount: 16210,
    sharesCount: 910,
    content: [
      {
        type: "paragraph",
        text: "সুষ্ঠু ও নিরপেক্ষ নির্বাচন অনুষ্ঠানে সাংবিধানিক প্রতিষ্ঠানগুলোর স্বাধীনতা ও কার্যকারিতা বৃদ্ধির ওপর জোর দিয়েছেন দেশের শীর্ষস্থানীয় বিশ্লেষকরা।"
      }
    ]
  },
  {
    id: "art-5",
    title: "জাতিসংঘে জলবায়ু সম্মেলন: ক্ষতিগ্রস্ত রাষ্ট্রগুলোর ক্ষতিপূরণ তহবিল অবিলম্বে কার্যকরের দাবি",
    slug: "un-general-assembly-peace-climate-call",
    summary: "বৈশ্বিক উষ্ণায়নে সবচেয়ে ঝুঁকিপূর্ণ দেশগুলোকে সময়মতো জলবায়ু তহবিলের অর্থ ছাড় দেওয়ার আহ্বান জানিয়েছে বাংলাদেশসহ দ্বীপরাষ্ট্রসমূহ।",
    category: CATEGORIES[2], // আন্তর্জাতিক
    author: AUTHORS[0],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      caption: "জলবায়ু সংকট মোকাবিলায় বৈশ্বিক নেতৃত্বের কার্যকর পদক্ষেপ প্রত্যাশিত।",
      credit: "জাতিসংঘ ফটো সার্ভিস",
      alt: "জলবায়ু সম্মেলন"
    },
    tags: [TAGS[3], TAGS[6]],
    publishedAt: "2026-10-18T06:30:00Z",
    publishedAtBengali: "১৮ অক্টোবর ২০২৬, সকাল ০৬:৩০",
    readingTimeMinutes: 4,
    isLead: false,
    isFeatured: true,
    viewsCount: 12150,
    sharesCount: 630,
    content: [
      {
        type: "paragraph",
        text: "বিশ্বব্যাপী জলবায়ু পরিবর্তনের মারাত্মক প্রভাব স্পষ্ট হচ্ছে। ক্ষতিগ্রস্ত দেশগুলোর জন্য প্রতিশ্রুত ক্ষতিপূরণ তহবিল দ্রুত ছাড়ের ওপর জোর দেওয়া হয়েছে।"
      }
    ]
  },
  {
    id: "art-6",
    title: "চলচ্চিত্র উৎসবে প্রশংসিত বাংলাদেশি নতুন সিনেমা, আন্তর্জাতিক অঙ্গনে সাফল্য",
    slug: "bangladeshi-film-wins-acclaim-international-festival",
    summary: "আন্তর্জাতিক ফিল্ম ফেস্টিভ্যালে মৌলিক গল্প ও শৈল্পিক নির্মাণশৈলীর জন্য বিশেষ জুরি অ্যাওয়ার্ড অর্জন করেছে দেশের তরুণ নির্মাতার নতুন চলচ্চিত্র।",
    category: CATEGORIES[4], // বিনোদন
    author: AUTHORS[3],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
      caption: "আন্তর্জাতিক মঞ্চে লাল-সবুজের পতাকার প্রতিনিধিত্বকারী চলচ্চিত্রটি দর্শকমহলে প্রশংসিত।",
      credit: "শোবিজ ডেস্ক",
      alt: "চলচ্চিত্র উৎসব"
    },
    tags: [TAGS[0]],
    publishedAt: "2026-10-17T18:00:00Z",
    publishedAtBengali: "১৭ অক্টোবর ২০২৬, সন্ধ্যা ০৬:০০",
    readingTimeMinutes: 3,
    isLead: false,
    isFeatured: true,
    viewsCount: 19200,
    sharesCount: 1480,
    content: [
      {
        type: "paragraph",
        text: "বিশ্ব চলচ্চিত্রের অন্যতম মর্যাদাপূর্ণ মঞ্চে আবারও বাংলাদেশের নাম উজ্জ্বল করলেন একঝাঁক তরুণ শিল্পী ও নির্মাতা।"
      }
    ]
  },
  {
    id: "art-7",
    title: "উত্তরাঞ্চলে বোরো ধানের বাম্পার ফলন: কৃষকদের মুখে স্বস্তির হাসি",
    slug: "bumper-boro-harvest-in-northern-districts",
    summary: "অনুকূল আবহাওয়া এবং সময়মতো সার-বীজ সরবরাহের ফলে এবার রেকর্ড পরিমাণ ধান উৎপাদনের সম্ভাবনা তৈরি হয়েছে।",
    category: CATEGORIES[5], // সারাদেশ
    author: AUTHORS[1],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
      caption: "সোনালী ধানের শিষ দুলছে ফসলের মাঠে, ফসল তোলায় ব্যস্ত কৃষক পরিবার।",
      credit: "বরিশালের প্রাণ / উত্তরাঞ্চল প্রতিনিধি",
      alt: "বোরো ধানের ফলন"
    },
    tags: [TAGS[0]],
    publishedAt: "2026-10-17T15:20:00Z",
    publishedAtBengali: "১৭ অক্টোবর ২০২৬, বিকেল ০৩:২০",
    readingTimeMinutes: 3,
    isLead: false,
    isFeatured: true,
    viewsCount: 9500,
    sharesCount: 490,
    content: [
      {
        type: "paragraph",
        text: "রংপুর ও রাজশাহী বিভাগের বিস্তীর্ণ ফসলের মাঠে সোনালী ধানের রঙে সেজেছে প্রকৃতি। প্রাকৃতিক দুর্যোগ না থাকায় এবার ফলন অত্যন্ত ইতিবাচক।"
      }
    ]
  },
  {
    id: "art-8",
    title: "ঢাকা বিশ্ববিদ্যালয়ে গবেষণা সপ্তাহ শুরু: উদ্ভাবনী প্রজেক্ট প্রদর্শনীতে তরুণ গবেষকরা",
    slug: "dhaka-university-research-week-starts",
    summary: "বিশ্ববিদ্যালয় শিক্ষার্থীদের উদ্ভাবিত রোবোটিক্স, পরিবেশবান্ধব প্রযুক্তি ও এআই অ্যাপ্লিকেশন প্রদর্শিত হচ্ছে তিন দিনব্যাপী এই আয়োজনে।",
    category: CATEGORIES[6], // ক্যাম্পাস
    author: AUTHORS[3],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
      caption: "ঢাকা বিশ্ববিদ্যালয় ক্যাম্পাসে গবেষণা মেলার উদ্বোধনী অনুষ্ঠান।",
      credit: "ক্যাম্পাস প্রতিনিধি",
      alt: "ক্যাম্পাস গবেষণা মেলা"
    },
    tags: [TAGS[7], TAGS[8]],
    publishedAt: "2026-10-17T12:00:00Z",
    publishedAtBengali: "১৭ অক্টোবর ২০২৬, দুপুর ১২:০০",
    readingTimeMinutes: 4,
    isLead: false,
    isFeatured: true,
    viewsCount: 11800,
    sharesCount: 740,
    content: [
      {
        type: "paragraph",
        text: "বিজ্ঞান ও প্রযুক্তির উৎকর্ষে দেশীয় সমস্যা সমাধানের পথ খুঁজছেন বিশ্ববিদ্যালয়ের শিক্ষক ও তরুণ গবেষকরা।"
      }
    ]
  },
  {
    id: "art-9",
    title: "দৈনন্দিন জীবনে সততা ও মানবিকতার গুরুত্ব: ইসলামি জীবনাচরণের শিক্ষা",
    slug: "islamic-ethics-and-daily-life",
    summary: "পারস্পরিক সৌহার্দ্য, অন্যের অধিকার রক্ষা ও সমাজকল্যাণে ব্যক্তিগত ভূমিকা পালনেই নিহিত রয়েছে প্রকৃত ইসলামের সৌন্দর্য।",
    category: CATEGORIES[7], // ইসলাম
    author: AUTHORS[0],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=80",
      caption: "ইসলামের মূল শিক্ষা হলো মানুষের কল্যাণ ও সমাজে ন্যায়বিচার প্রতিষ্ঠা।",
      credit: "ধর্ম ডেস্ক",
      alt: "ইসলামিক জীবন"
    },
    tags: [TAGS[0]],
    publishedAt: "2026-10-17T10:00:00Z",
    publishedAtBengali: "১৭ অক্টোবর ২০২৬, সকাল ১০:০০",
    readingTimeMinutes: 3,
    isLead: false,
    isFeatured: true,
    viewsCount: 17200,
    sharesCount: 1800,
    content: [
      {
        type: "paragraph",
        text: "ইসলাম একটি পরিপূর্ণ জীবনব্যবস্থা, যা মানুষের ব্যক্তিগত আচরণ থেকে শুরু করে রাষ্ট্রীয় পরিসর পর্যন্ত ন্যায়পরায়ণতার নির্দেশ দেয়।"
      }
    ]
  },
  {
    id: "art-10",
    title: "কৃত্রিম বুদ্ধিমত্তা ও ভবিষ্যৎ কর্মসংস্থান: প্রযুক্তির যুগে আমাদের প্রস্তুতি কতটা?",
    slug: "ai-and-future-of-work-bangladesh-perspective",
    summary: "বিশ্বজুড়ে অটোমেশন ও জেনারেটিভ এআই-এর বিস্তার দ্রুতগতিতে কাজের ধরন বদলে দিচ্ছে। দক্ষ মানবসম্পদ তৈরিতে চাই বিশেষ কারিগরি প্রশিক্ষণ।",
    category: CATEGORIES[10], // প্রযুক্তি
    author: AUTHORS[3],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      caption: "প্রযুক্তির দ্রুত রূপান্তরে কর্মক্ষেত্রে যোগ হচ্ছে নতুন নতুন দক্ষতা ও সম্ভাবনা।",
      credit: "টেক ডেস্ক",
      alt: "কৃত্রিম বুদ্ধিমত্তা ও প্রযুক্তি"
    },
    tags: [TAGS[5], TAGS[1]],
    publishedAt: "2026-10-17T09:00:00Z",
    publishedAtBengali: "১৭ অক্টোবর ২০২৬, সকাল ০৯:০০",
    readingTimeMinutes: 5,
    isLead: false,
    isFeatured: true,
    viewsCount: 21400,
    sharesCount: 2200,
    content: [
      {
        type: "paragraph",
        text: "তথ্যপ্রযুক্তির সাম্প্রতিকতম বিস্ময় কৃত্রিম বুদ্ধিমত্তা বা এআই আজ আর কোনো তাত্ত্বিক বিষয় নয়; বরং প্রতিটি শিল্পখাতকে সরাসরি প্রভাবিত করছে।"
      }
    ]
  },
  {
    id: "art-11",
    title: "ডেঙ্গু প্রতিরোধে চাই সমন্বিত নাগরিক সচেতনতা ও কার্যকর সিটি কাউন্সিল উদ্যোগ",
    slug: "dengue-prevention-community-awareness",
    summary: "বর্ষা মৌসুম পরবর্তী সময়ে মশার বংশবৃদ্ধি রোধে নিয়মিত পরিষ্কার-পরিচ্ছন্নতা ও স্বাস্থ্যবিধি মেনে চলার তাগিদ চিকিৎসকদের।",
    category: CATEGORIES[11], // স্বাস্থ্য
    author: AUTHORS[1],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
      caption: "বাড়ির আঙিনা পরিষ্কার রাখা ও জমে থাকা পানি অপসারণের মাধ্যমে মশার প্রজনন ঠেকানো সম্ভব।",
      credit: "স্বাস্থ্য বার্তা",
      alt: "স্বাস্থ্য সচেতনতা"
    },
    tags: [TAGS[0], TAGS[8]],
    publishedAt: "2026-10-16T16:00:00Z",
    publishedAtBengali: "১৬ অক্টোবর ২০২৬, বিকেল ০৪:০০",
    readingTimeMinutes: 4,
    isLead: false,
    isFeatured: false,
    viewsCount: 9700,
    sharesCount: 620,
    content: [
      {
        type: "paragraph",
        text: "স্বাস্থ্য অধিদপ্তরের বিশেষজ্ঞরা জানাচ্ছেন, ডেঙ্গুর লক্ষণ দেখা দিলে অবহেলা না করে দ্রুত চিকিৎসকের পরামর্শ নিতে হবে এবং পর্যাপ্ত তরল খাবার গ্রহণ করতে হবে।"
      }
    ]
  },
  {
    id: "art-12",
    title: "সুন্দরবনের জীববৈচিত্র্য সুরক্ষায় নতুন পরিকল্পনা: জলবায়ু ঝুঁকি মোকাবিলায় অগ্রাধিকার",
    slug: "sundarbans-biodiversity-protection-climate-priority",
    summary: "বিশ্ব ঐতিহ্য সুন্দরবনের ম্যানগ্রোভ বনভূমি রক্ষা এবং বন্যপ্রাণী সংরক্ষণে ড্রোন নজরদারি ও কমিউনিটি প্যাট্রোল জোরদার করা হচ্ছে।",
    category: CATEGORIES[18], // পরিবেশ
    author: AUTHORS[0],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=80",
      caption: "সবুজে ঘেরা সুন্দরবনের প্রাকৃতিক ভারসাম্য রক্ষায় দীর্ঘমেয়াদী সমন্বিত প্রকল্প গ্রহণ করা হয়েছে।",
      credit: "বন বিভাগ / ফাইল ছবি",
      alt: "সুন্দরবন পরিবেশ"
    },
    tags: [TAGS[6], TAGS[0]],
    publishedAt: "2026-10-16T14:30:00Z",
    publishedAtBengali: "১৬ অক্টোবর ২০২৬, দুপুর ০২:৩০",
    readingTimeMinutes: 4,
    isLead: false,
    isFeatured: false,
    viewsCount: 8200,
    sharesCount: 480,
    content: [
      {
        type: "paragraph",
        text: "সুন্দরবন শুধু বাংলাদেশের প্রাকৃতিক সুরক্ষাকবচ নয়, এটি বিশ্বের অমূল্য প্রাকৃতিক সম্পদের আধার।"
      }
    ]
  },
  {
    id: "art-13",
    title: "গণতান্ত্রিক রূপান্তর ও ন্যায়বিচারের রূপরেখা: কেমন বাংলাদেশ আমরা চাই",
    slug: "democratic-transition-and-justice-outline",
    summary: "রাষ্ট্র সংস্কার কেবল সাংবিধানিক বাক্যবদল নয়, বরং প্রতিটি নাগরিকের ভোটাধিকার, সমমর্যাদা এবং আইনের শাসনের বাস্তবায়ন নিশ্চিত করা।",
    category: CATEGORIES[14], // মতামত
    author: AUTHORS[4], // ড. সৈয়দ আনোয়ারুল হক
    featuredImage: {
      url: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
      caption: "সমাজ ও রাষ্ট্রের অগ্রগতিতে মতপ্রকাশের স্বাধীনতা ও সহনশীলতাই মূল চালিকাশক্তি।",
      credit: "মতামত বিভাগ",
      alt: "গণতন্ত্র ও মতামত"
    },
    tags: [TAGS[0], TAGS[2]],
    publishedAt: "2026-10-18T05:00:00Z",
    publishedAtBengali: "১৮ অক্টোবর ২০২৬, ভোর ০৫:০০",
    readingTimeMinutes: 6,
    isLead: false,
    isFeatured: true,
    viewsCount: 22100,
    sharesCount: 3100,
    content: [
      {
        type: "paragraph",
        text: "একটি দেশের ভবিষ্যৎ নির্ভর করে তার প্রাতিষ্ঠানিক জবাবদিহি ও নাগরিক অধিকারের সুসংহত ভিত্তির ওপর। অতীতে যে সংকীর্ণ দলীয় মানসিকতা রাষ্ট্রকাঠামোকে দুর্বল করেছে, সেখান থেকে শিক্ষা নেওয়াই এখন প্রধান কাজ।"
      },
      {
        type: "quote",
        text: "আইনের শাসন তখনই প্রতিষ্ঠিত হয়, যখন সবচেয়ে দুর্বল নাগরিকও ক্ষমতাধরের বিরুদ্ধে নির্ভয়ে ন্যায়বিচার প্রার্থনা করতে পারেন।"
      }
    ]
  },
  {
    id: "art-14",
    title: "ব্যাংকিং খাতের বিশৃঙ্খলা দূরীকরণ ও মুদ্রাস্ফীতি নিয়ন্ত্রণ: জরুরি সংস্কারের তাগিদ",
    slug: "banking-sector-discipline-inflation-control",
    summary: "মূল্যস্ফীতির জাঁতাকলে সাধারণ মানুষের জীবনযাত্রা দুর্বিষহ। খেলাপি ঋণ আদায় ও ব্যাংকে সুশাসন প্রতিষ্ঠায় আপসহীন পদক্ষেপ গ্রহণ অপরিহার্য।",
    category: CATEGORIES[14], // মতামত
    author: AUTHORS[5], // ফারহানা করিম
    featuredImage: {
      url: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=80",
      caption: "অর্থনীতির টেকসই বিকাশে আর্থিক খাতের স্বচ্ছতা সবচেয়ে গুরুত্বপূর্ণ।",
      credit: "মতামত বিভাগ",
      alt: "অর্থনৈতিক মতামত"
    },
    tags: [TAGS[1], TAGS[0]],
    publishedAt: "2026-10-17T14:00:00Z",
    publishedAtBengali: "১৭ অক্টোবর ২০২৬, দুপুর ০২:০০",
    readingTimeMinutes: 5,
    isLead: false,
    isFeatured: true,
    viewsCount: 16500,
    sharesCount: 1850,
    content: [
      {
        type: "paragraph",
        text: "বর্তমান অর্থনৈতিক বাস্তবতায় মুদ্রাস্ফীতির অভিঘাত সরাসরি শ্রমজীবী ও মধ্যবিত্তের ওপর এসে পড়ছে। বাজার তদারকি এবং সরবরাহ চেইনের সিন্ডিকেট ভাঙা এখন সময়ের দাবি।"
      }
    ]
  },
  {
    id: "art-15",
    title: "ইউরোপীয় ফুটবল লিগ: রিয়ালের জয়রথ অব্যাহত, শেষ মুহূর্তে বার্সার স্বস্তি",
    slug: "european-football-league-real-madrid-barca",
    summary: "চ্যাম্পিয়ন্স লিগের প্রস্তুতিতে লা লিগায় প্রতিপক্ষকে উড়িয়ে দিল বর্তমান চ্যাম্পিয়নরা। অন্য ম্যাচে নাটকীয় ইনজুরি টাইমে জয় ছিনিয়ে নিল কাতালানরা।",
    category: CATEGORIES[3], // খেলাধুলা
    author: AUTHORS[2],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80",
      caption: "মাঠে দারুণ ফুটবলের মহড়া দিয়ে জয় নিশ্চিত করল শীর্ষ দল।",
      credit: "রয়টার্স স্পোর্টস",
      alt: "ইউরোপীয় ফুটবল"
    },
    tags: [TAGS[4]],
    publishedAt: "2026-10-18T04:15:00Z",
    publishedAtBengali: "১৮ অক্টোবর ২০২৬, ভোর ০৪:১৫",
    readingTimeMinutes: 3,
    isLead: false,
    isFeatured: false,
    viewsCount: 14200,
    sharesCount: 920,
    content: [
      {
        type: "paragraph",
        text: "ইউরোপীয় ফুটবলের শীর্ষ লিগগুলোতে সাপ্তাহিক রোমাঞ্চে পূর্ণ ছিল প্রতিটি ম্যাচ।"
      }
    ]
  },
  {
    id: "art-16",
    title: "চট্টগ্রাম বন্দরে ডিজিটাল টার্মিনাল চালুর পর পণ্য খালাসে রেকর্ড গতি",
    slug: "chittagong-port-digital-terminal-record-speed",
    summary: "স্মার্ট লজিস্টিকস ও অটোমেটেড কনটেইনার হ্যান্ডলিংয়ের সুফল পাচ্ছেন ব্যবসায়ীরা। জাহাজের অপেক্ষার সময় কমেছে অর্ধেকে।",
    category: CATEGORIES[5], // সারাদেশ
    author: AUTHORS[2],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
      caption: "চট্টগ্রাম সমুদ্রবন্দরে পুরোদমে চলছে কনটেইনার ওঠানো-নামানোর কাজ।",
      credit: "বরিশালের প্রাণ / চট্টগ্রাম ব্যুরো",
      alt: "চট্টগ্রাম বন্দর"
    },
    tags: [TAGS[0], TAGS[1]],
    publishedAt: "2026-10-18T03:30:00Z",
    publishedAtBengali: "১৮ অক্টোবর ২০২৬, রাত ০৩:৩০",
    readingTimeMinutes: 3,
    isLead: false,
    isFeatured: false,
    viewsCount: 11200,
    sharesCount: 710,
    content: [
      {
        type: "paragraph",
        text: "দেশের প্রধান সমুদ্রবন্দরে অটোমেশন চালুর ফলে আমদানি-রপ্তানি বাণিজ্যে ব্যাপক গতি সঞ্চার হয়েছে।"
      }
    ]
  },
  {
    id: "art-17",
    title: "মধ্যপ্রাচ্যে স্থায়ী যুদ্ধবিরতি ও শান্তি আলোচনায় নতুন অগ্রগতি: আন্তর্জাতিক মহলের স্বাগত",
    slug: "middle-east-peace-dialogue-new-progress",
    summary: "দীর্ঘদিনের সংঘাত নিরসনে আন্তর্জাতিক মধ্যস্থতাকারীদের উদ্যোগে শান্তি আলোচনায় আশাব্যঞ্জক অগ্রগতির আভাস মিলেছে।",
    category: CATEGORIES[2], // আন্তর্জাতিক
    author: AUTHORS[0],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80",
      caption: "শান্তি আলোচনায় অংশগ্রহণকারী প্রতিনিধি দল।",
      credit: "রয়টার্স / আন্তর্জাতিক ডেস্ক",
      alt: "আন্তর্জাতিক শান্তি আলোচনা"
    },
    tags: [TAGS[3], TAGS[0]],
    publishedAt: "2026-10-18T11:00:00Z",
    publishedAtBengali: "১৮ অক্টোবর ২০২৬, সকাল ১১:০০",
    readingTimeMinutes: 4,
    isLead: false,
    isFeatured: true,
    viewsCount: 15400,
    sharesCount: 1200,
    content: [
      {
        type: "paragraph",
        text: "বহু প্রতীক্ষিত শান্তি আলোচনায় সব পক্ষের অংশগ্রহণে সংকট সমাধানের ইতিবাচক পরিবেশ তৈরি হয়েছে।"
      }
    ]
  },
  {
    id: "art-18",
    title: "ইউরোপীয় ইউনিয়নে নতুন সবুজ জ্বালানি নীতিমালা: ২০৩০ সালের লক্ষ্যমাত্রা পুনর্বিবেচনা",
    slug: "eu-green-energy-policy-2030-target",
    summary: "কার্বন নিঃসরণ শূন্যে নামিয়ে আনতে নতুন বিনিয়োগ প্যাকেজ ঘোষণা করেছে ইউরোপীয় কমিশন।",
    category: CATEGORIES[2], // আন্তর্জাতিক
    author: AUTHORS[1],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
      caption: "নবায়নযোগ্য শক্তি উৎপাদনে ইউরোপজুড়ে বাড়ছে সৌর ও বায়ু বিদ্যুৎ প্রকল্প।",
      credit: "ইইউ প্রেস সার্ভিস",
      alt: "সবুজ জ্বালানি প্রকল্প"
    },
    tags: [TAGS[3], TAGS[6]],
    publishedAt: "2026-10-18T10:15:00Z",
    publishedAtBengali: "১৮ অক্টোবর ২০২৬, সকাল ১০:১৫",
    readingTimeMinutes: 3,
    isLead: false,
    isFeatured: false,
    viewsCount: 11800,
    sharesCount: 820,
    content: [
      {
        type: "paragraph",
        text: "জলবায়ু পরিবর্তনের ক্ষতিকর প্রভাব মোকাবিলায় জীবাশ্ম জ্বালানির ওপর নির্ভরতা কমানোর নীতিতে একমত হয়েছে ইউরোপ।"
      }
    ]
  },
  {
    id: "art-19",
    title: "শেয়ারবাজারে সূচকের বড় উত্থান: এক দিনেই লেনদেন ছাড়াল হাজার কোটি টাকা",
    slug: "stock-market-index-sharp-rise-transactions",
    summary: "প্রাতিষ্ঠানিক বিনিয়োগকারীদের সক্রিয়তায় দেশের প্রধান শেয়ারবাজারে সূচকের পাশাপাশি লেনদেনে গতি ফিরেছে।",
    category: CATEGORIES[8], // অর্থনীতি
    author: AUTHORS[1],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80",
      caption: "শেয়ারবাজারে মূল্যসূচকের ঊর্ধ্বমুখী ধারা লক্ষ্য করা যাচ্ছে।",
      credit: "স্টক ফটো / বরিশালের প্রাণ",
      alt: "শেয়ারবাজার উত্থান"
    },
    tags: [TAGS[1]],
    publishedAt: "2026-10-18T12:00:00Z",
    publishedAtBengali: "১৮ অক্টোবর ২০২৬, দুপুর ১২:০০",
    readingTimeMinutes: 3,
    isLead: false,
    isFeatured: true,
    viewsCount: 14200,
    sharesCount: 950,
    content: [
      {
        type: "paragraph",
        text: "দীর্ঘ মন্দা কাটিয়ে দেশের পুঁজিবাজারে বিনিয়োগকারীদের আস্থার প্রতিফলন দেখা যাচ্ছে সাম্প্রতিক লেনদেনে।"
      }
    ]
  },
  {
    id: "art-20",
    title: "পোশাক রপ্তানিতে নতুন অর্ডারের জোয়ার: বৈশ্বিক বাজারে বাংলাদেশি পণ্যের চাহিদা বৃদ্ধি",
    slug: "garment-export-new-orders-surge",
    summary: "ইউরোপ ও মার্কিন বাজারের শীর্ষ ব্র্যান্ডগুলো থেকে নতুন কার্যাদেশ পাচ্ছেন দেশের তৈরি পোশাক উদ্যোক্তারা।",
    category: CATEGORIES[8], // অর্থনীতি
    author: AUTHORS[1],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80",
      caption: "পোশাক শিল্প কারখানায় ব্যস্ত সময় কাটাচ্ছেন শ্রমিক ও কারিগররা।",
      credit: "বিজিএমইএ ফটো আর্কাইভ",
      alt: "পোশাক কারখানা"
    },
    tags: [TAGS[1], TAGS[0]],
    publishedAt: "2026-10-18T09:30:00Z",
    publishedAtBengali: "১৮ অক্টোবর ২০২৬, সকাল ০৯:৩০",
    readingTimeMinutes: 4,
    isLead: false,
    isFeatured: false,
    viewsCount: 12900,
    sharesCount: 880,
    content: [
      {
        type: "paragraph",
        text: "পরিবেশবান্ধব সবুজ কারখানার স্বীকৃতির কারণে বিদেশি ক্রেতাদের কাছে বাংলাদেশি পোশাকের নির্ভরযোগ্যতা বাড়ছে।"
      }
    ]
  },
  {
    id: "art-21",
    title: "চাঁদে পানির সন্ধানে নতুন রোভার পাঠাচ্ছে নাসা: মহাকাশ গবেষণায় নতুন দিগন্ত",
    slug: "nasa-new-lunar-rover-water-exploration",
    summary: "চাঁদের দক্ষিণ মেরুর দুর্গম এলাকায় বরফের উপস্থিতি ও খনিজ সম্পদ অনুসন্ধানে আধুনিক রোভার পাঠানো হচ্ছে।",
    category: CATEGORIES[10], // প্রযুক্তি
    author: AUTHORS[3],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80",
      caption: "নাসার নতুন চন্দ্রাভিযানের বৈজ্ঞানিক মডেল প্রদর্শন।",
      credit: "নাসা / সায়েন্স ফটো",
      alt: "নাসা চন্দ্রাভিযান"
    },
    tags: [TAGS[5], TAGS[7]],
    publishedAt: "2026-10-18T10:40:00Z",
    publishedAtBengali: "১৮ অক্টোবর ২০২৬, সকাল ১০:৪০",
    readingTimeMinutes: 4,
    isLead: false,
    isFeatured: true,
    viewsCount: 19800,
    sharesCount: 1620,
    content: [
      {
        type: "paragraph",
        text: "ভবিষ্যতে চাঁদে মানব বসতি গড়ে তোলার সম্ভাব্যতা যাচাইয়ে এই অভিযানকে অত্যন্ত গুরুত্বপূর্ণ বলে বিবেচনা করছেন বিজ্ঞানীরা।"
      }
    ]
  },
  {
    id: "art-22",
    title: "সাইবার নিরাপত্তায় কোয়ান্টাম এনক্রিপশনের সফল প্রয়োগ: ব্যাংকিং ডেটায় সর্বোচ্চ সুরক্ষা",
    slug: "quantum-encryption-cybersecurity-banking-protection",
    summary: "হ্যাকিং প্রতিরোধে পরবর্তী প্রজন্মের কোয়ান্টাম ক্রিপ্টোগ্রাফি প্রযুক্তি সফলভাবে চালুর ঘোষণা দিয়েছেন গবেষকরা।",
    category: CATEGORIES[10], // প্রযুক্তি
    author: AUTHORS[3],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      caption: "সাইবার সুরক্ষায় অত্যাধুনিক ক্রিপ্টোগ্রাফিক অ্যালগরিদম কার্যকর করা হয়েছে।",
      credit: "প্রযুক্তি বিভাগ / বরিশালের প্রাণ",
      alt: "সাইবার নিরাপত্তা"
    },
    tags: [TAGS[5]],
    publishedAt: "2026-10-18T08:20:00Z",
    publishedAtBengali: "১৮ অক্টোবর ২০২৬, সকাল ০৮:২০",
    readingTimeMinutes: 3,
    isLead: false,
    isFeatured: false,
    viewsCount: 13400,
    sharesCount: 790,
    content: [
      {
        type: "paragraph",
        text: "আর্থিক লেনদেন এবং সংবেদনশীল তথ্য সুরক্ষায় এই অগ্রগতি ডিজিটাল দুনিয়ার নিরাপত্তায় নতুন মাইলফলক।"
      }
    ]
  },
  {
    id: "art-23",
    title: "সিলেটের পর্যটন কেন্দ্রে ভ্রমণপিপাসুদের উপচে পড়া ভিড়: চা বাগান ও জাফলংয়ে মুখর উৎসবের আমেজ",
    slug: "sylhet-tourism-surge-tea-garden-jaflong",
    summary: "ছুটির দিনে পরিবার-পরিজন নিয়ে প্রকৃতির সান্নিধ্যে সময় কাটাতে দেশের নানা প্রান্ত থেকে ছুটে এসেছেন পর্যটকরা।",
    category: CATEGORIES[5], // সারাদেশ
    author: AUTHORS[2],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      caption: "সিলেটের নয়নাভিরাম চা বাগানে পর্যটকদের আনন্দঘন মুহূর্ত।",
      credit: "সিলেট ব্যুরো / বরিশালের প্রাণ",
      alt: "সিলেট পর্যটন"
    },
    tags: [TAGS[0]],
    publishedAt: "2026-10-18T13:15:00Z",
    publishedAtBengali: "১৮ অক্টোবর ২০২৬, দুপুর ০১:১৫",
    readingTimeMinutes: 3,
    isLead: false,
    isFeatured: true,
    viewsCount: 16800,
    sharesCount: 1350,
    content: [
      {
        type: "paragraph",
        text: "অনুকূল আবহাওয়া এবং প্রাকৃতিক সৌন্দর্যের টানে সিলেটের পর্যটন স্পটগুলোতে এখন উৎসবমুখর পরিবেশ।"
      }
    ]
  },
  {
    id: "art-24",
    title: "বুয়েট শিক্ষার্থীদের তৈরি পরিবেশবান্ধব বৈদ্যুতিক গাড়ি আন্তর্জাতিক প্রতিযোগিতায় পুরস্কৃত",
    slug: "buet-students-eco-electric-car-award",
    summary: "বিশ্বমঞ্চে দেশের প্রযুক্তিগত মেধার স্বাক্ষর রেখে ফর্মুলা স্টুডেন্ট প্রতিযোগিতায় দারুণ সাফল্য অর্জন করেছেন শিক্ষার্থীরা।",
    category: CATEGORIES[6], // ক্যাম্পাস
    author: AUTHORS[3],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
      caption: "বুয়েট প্রকৌশলীদের উদ্ভাবিত আধুনিক পরিবেশবান্ধব ফর্মুলা কার।",
      credit: "ক্যাম্পাস প্রতিনিধি / বরিশালের প্রাণ",
      alt: "বুয়েট উদ্ভাবন"
    },
    tags: [TAGS[5], TAGS[7]],
    publishedAt: "2026-10-18T11:30:00Z",
    publishedAtBengali: "১৮ অক্টোবর ২০২৬, সকাল ১১:৩০",
    readingTimeMinutes: 4,
    isLead: false,
    isFeatured: true,
    viewsCount: 21500,
    sharesCount: 2400,
    content: [
      {
        type: "paragraph",
        text: "বিশ্বের শীর্ষস্থানীয় বিশ্ববিদ্যালয়গুলোর সঙ্গে প্রতিদ্বন্দ্বিতা করে শীর্ষস্থান অর্জন করেছে বাংলাদেশি দল।"
      }
    ]
  },
  {
    id: "art-25",
    title: "জাহাঙ্গীরনগর বিশ্ববিদ্যালয়ে তিন দিনব্যাপী জাতীয় বিতর্ক উৎসব শুরু",
    slug: "juniv-national-debate-festival-inaugurated",
    summary: "দেশের ৫০টি বিশ্ববিদ্যালয়ের বিতার্কিকদের অংশগ্রহণে যুক্তি ও মুক্তচিন্তার লড়াইয়ে মুখরিত সবুজ ক্যাম্পাস।",
    category: CATEGORIES[6], // ক্যাম্পাস
    author: AUTHORS[3],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
      caption: "উদ্বোধনী অনুষ্ঠানে যুক্তি তর্কে মেতেছেন বিভিন্ন বিশ্ববিদ্যালয়ের তরুণ বিতার্কিকরা।",
      credit: "জাবি প্রতিনিধি",
      alt: "জাতীয় বিতর্ক উৎসব"
    },
    tags: [TAGS[7]],
    publishedAt: "2026-10-18T10:00:00Z",
    publishedAtBengali: "১৮ অক্টোবর ২০২৬, সকাল ১০:০০",
    readingTimeMinutes: 3,
    isLead: false,
    isFeatured: false,
    viewsCount: 11200,
    sharesCount: 650,
    content: [
      {
        type: "paragraph",
        text: "যুক্তিনির্ভর সমাজ গঠনে তরুণ প্রজন্মের ভূমিকা তুলে ধরেছেন আয়োজকরা।"
      }
    ]
  },
  {
    id: "art-26",
    title: "হজের প্রাক-নিবন্ধন ও নতুন ডিজিটাল নীতিমালা ঘোষণা করল ধর্ম মন্ত্রণালয়",
    slug: "hajj-pre-registration-digital-policy-announced",
    summary: "হজযাত্রীদের সুবিধার্থে ওয়ান-স্টপ অনলাইন সেবা এবং রিয়েল-টাইম ট্র্যাকিং ব্যবস্থা চালু করা হয়েছে।",
    category: CATEGORIES[7], // ইসলাম
    author: AUTHORS[4],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1200&q=80",
      caption: "পবিত্র কাবা প্রাঙ্গণে ইবাদতরত ধর্মপ্রাণ মুসল্লিরা।",
      credit: "ধর্ম ও জীবন ডেস্ক",
      alt: "হজ ও ওমরাহ"
    },
    tags: [TAGS[0]],
    publishedAt: "2026-10-18T12:30:00Z",
    publishedAtBengali: "১৮ অক্টোবর ২০২৬, দুপুর ১২:৩০",
    readingTimeMinutes: 4,
    isLead: false,
    isFeatured: true,
    viewsCount: 17400,
    sharesCount: 1450,
    content: [
      {
        type: "paragraph",
        text: "হজযাত্রাকে আরও সহজ, স্বচ্ছ ও নিরাপদ করতে আধুনিক তথ্যপ্রযুক্তির সমন্বয় ঘটিয়েছে মন্ত্রণালয়।"
      }
    ]
  },
  {
    id: "art-27",
    title: "কোরআনের হাফেজদের সম্মাননা ও আন্তর্জাতিক কেরাত সম্মেলন অনুষ্ঠিত",
    slug: "quran-hafez-reception-international-qirat-conference",
    summary: "বিশ্ববরেণ্য আন্তর্জাতিক কারীদের সুললিত কণ্ঠে কোরআন তেলাওয়াতে আবেগাপ্লুত উপস্থিত শ্রোতামণ্ডলী।",
    category: CATEGORIES[7], // ইসলাম
    author: AUTHORS[4],
    featuredImage: {
      url: "https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1200&q=80",
      caption: "আন্তর্জাতিক কেরাত সম্মেলনে উপস্থিত দেশ-বিদেশের বরেণ্য আলেম ও কারীগণ।",
      credit: "ইসলামিক ফাউন্ডেশন",
      alt: "কেরাত সম্মেলন"
    },
    tags: [TAGS[0]],
    publishedAt: "2026-10-18T09:00:00Z",
    publishedAtBengali: "১৮ অক্টোবর ২০২৬, সকাল ০৯:০০",
    readingTimeMinutes: 3,
    isLead: false,
    isFeatured: false,
    viewsCount: 14300,
    sharesCount: 1200,
    content: [
      {
        type: "paragraph",
        text: "ঐতিহাসিক এই সম্মেলনে কৃতি হাফেজদের মাঝে বিশেষ সনদ ও সম্মাননা স্মারক তুলে দেওয়া হয়।"
      }
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "শরতের কাশফুলে ঢাকা নদীর পাড়: প্রকৃতির স্নিগ্ধ রূপ",
    slug: "autumn-kashful-riverbank-beauty",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80",
    caption: "শরতের শুভ্র কাশফুলের মেলা বসেছে বুড়িগঙ্গা ও ধলেশ্বরীর তীরবর্তী জনপদে।",
    photographer: "আসিফ জামান",
    category: "প্রকৃতি",
    date: "১৮ অক্টোবর ২০২৬"
  },
  {
    id: "gal-2",
    title: "মেট্রোরেলে যাত্রীদের উল্লাস ও স্বস্তির মুহূর্ত",
    slug: "metro-rail-commuter-joy",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=400&q=80",
    caption: "নতুন স্টেশনের উদ্বোধনী দিনে তরুণ-প্রবীণ সবার মুখে ছিল স্বস্তির উচ্ছ্বাস।",
    photographer: "সৌরভ কান্তি",
    category: "জাতীয়",
    date: "১৮ অক্টোবর ২০২৬"
  },
  {
    id: "gal-3",
    title: "ঐতিহাসিক শের-ই-বাংলা স্টেডিয়ামে বিজয়ের গর্জন",
    slug: "sher-e-bangla-stadium-victory-moments",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=400&q=80",
    caption: "গ্যালারিভর্তি দর্শকের গর্জনে মুখরিত হয়ে ওঠে পুরো স্টেডিয়াম চত্বর।",
    photographer: "রাকিব হাসান",
    category: "খেলাধুলা",
    date: "১৭ অক্টোবর ২০২৬"
  },
  {
    id: "gal-4",
    title: "গ্রামবাংলার চিরসবুজ ফসলের মাঠ ও গ্রামীণ জীবন",
    slug: "rural-bangladesh-green-fields",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    thumbnail: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80",
    caption: "হেমন্তের আগমনে রূপসী বাংলার সোনালী ধানের মাঠ যেন অপরূপ চিত্রকলা।",
    photographer: "মাহমুদুল হাসান",
    category: "সারাদেশ",
    date: "১৬ অক্টোবর ২০২৬"
  }
];

export const VIDEO_ITEMS: VideoItem[] = [
  {
    id: "vid-1",
    title: "মেট্রোরেলের নতুন রুট উদ্বোধন: ভিডিও প্রতিবেদনে দেখুন প্রথম দিনের অভিজ্ঞতা",
    slug: "metro-rail-first-day-video-report",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80",
    duration: "০৩:৪৫",
    category: "জাতীয়",
    views: 45200,
    date: "১৮ অক্টোবর ২০২৬",
    summary: "ভোর থেকে শুরু হওয়া বাণিজ্যিক চলাচলের প্রতিটি মুহূর্ত ধারণ করেছে আমাদের টিম।"
  },
  {
    id: "vid-2",
    title: "টাইগারদের রোমাঞ্চকর জয়: শেষ ওভারের রুদ্ধশ্বাস মুহূর্তগুলোর বিশ্লেষণ",
    slug: "tigers-thrilling-win-last-over-analysis",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=600&q=80",
    duration: "০৫:১২",
    category: "খেলাধুলা",
    views: 89000,
    date: "১৮ অক্টোবর ২০২৬",
    summary: "ম্যাচ শেষে সংবাদ সম্মেলনে অধিনায়ক ও ম্যাচসেরা খেলোয়াড়ের সরাসরি প্রতিক্রিয়া।"
  },
  {
    id: "vid-3",
    title: "স্মার্ট কৃষি বিপ্লব: আধুনিক ড্রোন প্রযুক্তিতে ফসলের রোগবালাই শনাক্তকরণ",
    slug: "smart-agriculture-drone-technology-report",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=600&q=80",
    duration: "০৪:২০",
    category: "প্রযুক্তি",
    views: 31000,
    date: "১৭ অক্টোবর ২০২৬",
    summary: "চাষাবাদে কীভাবে স্যাটেলাইট ও ড্রোন প্রযুক্তির মিশ্রণ ফলন বাড়াতে সহায়তা করছে।"
  }
];

export const DEMO_COMMENTS: Comment[] = [
  {
    id: "c-1",
    articleId: "art-1",
    authorName: "কামরুল ইসলাম",
    authorEmail: "kamrul@example.com",
    content: "মেট্রোরেলের এই রুটটি চালুর ফলে সত্যিই ঢাকা শহরের সাধারণ মানুষের বহু মূল্যবান সময় বাঁচবে। অসাধারণ উদ্যোগ!",
    createdAt: "১৮ অক্টোবর ২০২৬, সকাল ১১:১৫",
    likes: 14,
    replies: [
      {
        id: "c-1-1",
        articleId: "art-1",
        authorName: "মাহবুবুর রহমান",
        content: "একমত ভাই। এখন দরকার স্টেশনগুলোর আশপাশে সুশৃঙ্খল ট্রাফিক নিয়ন্ত্রণ যাতে জটলা না তৈরি হয়।",
        createdAt: "১৮ অক্টোবর ২০২৬, সকাল ১১:৩০",
        likes: 5
      }
    ]
  },
  {
    id: "c-2",
    articleId: "art-1",
    authorName: "নুসরাত জাহান",
    content: "পরিচ্ছন্নতা ও শৃঙ্খলার মান যেন সবসময় এভাবে বজায় থাকে—কর্তৃপক্ষের প্রতি এই বিনীত অনুরোধ।",
    createdAt: "১৮ অক্টোবর ২০২৬, দুপুর ১২:০০",
    likes: 8
  }
];

export const INITIAL_COMMENTS = DEMO_COMMENTS;
