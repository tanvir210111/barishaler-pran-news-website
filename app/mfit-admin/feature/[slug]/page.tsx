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
    name: "Auto News",
    nameEn: "Automated News Generation",
    category: "CONTENT",
    description: "Advanced automated news gathering, wire-service aggregation, AI drafting, and automated publishing engine.",
    icon: Zap,
    color: "#10B981",
    progress: 75,
    expectedVersion: "v2.0",
    featuresList: [
      "Automated multi-source RSS and wire feed crawling",
      "AI-driven fact verification and automated summarization",
      "Category-based auto-scheduling and smart publishing",
      "Duplicate content detection and plagiarism filter",
    ],
  },
  "news-agent": {
    name: "News Agent",
    nameEn: "Automated News Agent",
    category: "CONTENT",
    description: "Autonomous virtual AI assistant for news analysis, rapid fact-checking, and instant breaking news briefing.",
    icon: Bot,
    color: "#10B981",
    progress: 70,
    expectedVersion: "v2.0",
    featuresList: [
      "24/7 continuous news desk monitoring and alerts",
      "Instant breaking news summary and push dispatch",
      "Smart keyword tagging and automated SEO metadata suggestions",
      "Audience interest insights and editorial recommendations",
    ],
  },
  "live-tv": {
    name: "Live TV",
    nameEn: "Live TV Streaming",
    category: "CONTENT",
    description: "24/7 live video broadcasting platform supporting low-latency HLS, RTMP streams, and special news bulletins.",
    icon: Radio,
    color: "#10B981",
    progress: 80,
    expectedVersion: "v2.0",
    featuresList: [
      "Low-latency adaptive streaming support (HLS / DASH)",
      "YouTube Live and Facebook Live multi-stream synchronization",
      "Live audience engagement and moderated real-time chat",
      "Recorded broadcast library and on-demand replay management",
    ],
  },
  "audio-news": {
    name: "Audio News",
    nameEn: "Audio News & Podcast",
    category: "CONTENT",
    description: "Text-to-speech audio synthesis and podcast hosting engine to convert articles into high-fidelity voice bulletins.",
    icon: Headphones,
    color: "#EA580C",
    progress: 65,
    expectedVersion: "v2.0",
    featuresList: [
      "Natural Bengali & English AI neural voice synthesis",
      "Daily audio news briefs and episodic podcast playlists",
      "Sticky floating background audio player widget",
      "Direct audio file upload and custom playlist management",
    ],
  },
  "photo-story": {
    name: "Photo Story",
    nameEn: "Photo Story & Visual Journalism",
    category: "CONTENT",
    description: "Interactive visual storytelling and photojournalism showcase designed for deep photographic reportage.",
    icon: BookOpen,
    color: "#9333EA",
    progress: 85,
    expectedVersion: "v2.0",
    featuresList: [
      "Multi-image immersive fullscreen gallery viewer",
      "Rich photo captions and photographer attribution credits",
      "Curated visual story categories and tags",
      "Social-media optimized shareable picture cards",
    ],
  },
  "reels-story": {
    name: "Reels Story",
    nameEn: "Short Reels & Stories",
    category: "CONTENT",
    description: "Mobile-first 9:16 vertical short-form video reels and story format tailored for high social engagement.",
    icon: Film,
    color: "#EF4444",
    progress: 60,
    expectedVersion: "v2.1",
    featuresList: [
      "Fullscreen immersive mobile-first vertical video playback",
      "Seamless auto-play with swipe-to-next navigation",
      "Video trimming tool and custom cover thumbnail selector",
      "Direct interactive link embeds to corresponding articles",
    ],
  },
  "quotes": {
    name: "Quotes",
    nameEn: "Quotes & Statements",
    category: "CONTENT",
    description: "Notable quotes and public statements management with instant social media quotation card publishing.",
    icon: Quote,
    color: "#DC2626",
    progress: 80,
    expectedVersion: "v2.0",
    featuresList: [
      "Curated quotation card templates with modern typography",
      "Speaker profile links, portrait photo, and designation tags",
      "Homepage top quotation banner widget integration",
      "1-click high-resolution graphic export for social media",
    ],
  },
  "photo-gallery": {
    name: "Photo Gallery",
    nameEn: "Photo Gallery Albums",
    category: "CONTENT",
    description: "High-resolution photo albums, slideshow carousels, and category-organized media gallery manager.",
    icon: Images,
    color: "#F97316",
    progress: 85,
    expectedVersion: "v2.0",
    featuresList: [
      "Bulk high-res image uploader with drag-and-drop reordering",
      "Modern lightbox slideshow and responsive grid layouts",
      "Granular category and thematic album organization",
      "Automated image watermarking and compression pipeline",
    ],
  },
  "video-gallery": {
    name: "Video Gallery",
    nameEn: "Video Gallery",
    category: "CONTENT",
    description: "Video asset management and playlist curator supporting YouTube, Vimeo, and custom cloud video hosting.",
    icon: Video,
    color: "#7C3AED",
    progress: 75,
    expectedVersion: "v2.0",
    featuresList: [
      "Direct embed support for YouTube, Facebook Video, and Vimeo",
      "Category-based video playlists and featured video sliders",
      "Custom HD poster thumbnails and duration timestamp badges",
      "Dedicated video detail pages with related video suggestions",
    ],
  },
  "poll": {
    name: "Poll & Surveys",
    nameEn: "Public Poll & Surveys",
    category: "CONTENT",
    description: "Interactive public opinion polling, real-time voting computation, and dynamic statistical visualization.",
    icon: PieChart,
    color: "#2563EB",
    progress: 70,
    expectedVersion: "v2.0",
    featuresList: [
      "Single-choice and multi-choice opinion poll creation",
      "Real-time voting tally with live animated percentage bars",
      "IP and cookie-based fraud prevention to eliminate duplicate votes",
      "Automated expiry schedule with public archive records",
    ],
  },
  "reactions": {
    name: "Reactions & Ratings",
    nameEn: "User Reactions & Ratings",
    category: "CONTENT",
    description: "Reader sentiment tracking, emoji reactions, rating modules, and reader engagement analytics.",
    icon: Smile,
    color: "#9333EA",
    progress: 90,
    expectedVersion: "v2.0",
    featuresList: [
      "6 unique emoji reaction counters (Like, Love, Sad, Insightful, etc.)",
      "Article-specific sentiment analytics and engagement breakdown",
      "Most reacted trending stories widget for homepage",
      "Spam click throttling and authenticated reaction tracking",
    ],
  },
  "pages": {
    name: "Pages Management",
    nameEn: "Static & Custom Pages",
    category: "CONTENT",
    description: "Dynamic CMS page builder for About Us, Contact, Editorial Guidelines, Privacy Policy, and custom landing pages.",
    icon: FileText,
    color: "#16A34A",
    progress: 75,
    expectedVersion: "v2.0",
    featuresList: [
      "Full rich-text visual editor with custom HTML component embed",
      "Custom URL slug generation and SEO meta tag controls",
      "Draft, scheduled publishing, and live preview modes",
      "Instant header and footer navigation placement options",
    ],
  },
  "header-footer": {
    name: "Header and Footer",
    nameEn: "Header & Footer Customization",
    category: "CUSTOMIZATION",
    description: "Site-wide header branding, logo management, top announcement bar, multi-column footer widgets, and social links.",
    icon: Layout,
    color: "#16A34A",
    progress: 70,
    expectedVersion: "v2.0",
    featuresList: [
      "Brand logo, favicon, and dark-mode brand asset configuration",
      "Sticky navigation bar behavior and search bar toggle",
      "4-column responsive footer layout with quick link widgets",
      "Top breaking news marquee and urgent notification bar",
    ],
  },
  "homepage-settings": {
    name: "Homepage Settings",
    nameEn: "Homepage Layout & Sections",
    category: "CUSTOMIZATION",
    description: "Visual homepage builder for ordering news blocks, selecting lead story styles, and configuring category grids.",
    icon: Home,
    color: "#3B82F6",
    progress: 65,
    expectedVersion: "v2.0",
    featuresList: [
      "Drag-and-drop homepage section reordering",
      "Selectable hero lead and sub-lead layout templates",
      "Display counts and ordering for category spotlight sections",
      "Toggle switches for photo and video gallery homepage ribbons",
    ],
  },
  "post-settings": {
    name: "Post Settings",
    nameEn: "Article Single Post Settings",
    category: "CUSTOMIZATION",
    description: "Configuration for article reading modes, typography scaling, related article recommendation algorithms, and author bio cards.",
    icon: Layers,
    color: "#1D4ED8",
    progress: 80,
    expectedVersion: "v2.0",
    featuresList: [
      "Interactive reader comments toggle and moderation workflows",
      "Customizable social media share buttons and counter displays",
      "Algorithmic related news recommendation count controls",
      "Author biography box, badges, and contributor card toggles",
    ],
  },
  "advertisement": {
    name: "Advertisement",
    nameEn: "Ad Management & Banner Slots",
    category: "CUSTOMIZATION",
    description: "Comprehensive ad campaign scheduler, banner placement manager, Google AdSense integration, and impression analytics.",
    icon: Layout,
    color: "#7C3AED",
    progress: 85,
    expectedVersion: "v2.0",
    featuresList: [
      "Leaderboard, in-article, sidebar, and popup banner slot controls",
      "Campaign start and end date scheduling with auto-expiry",
      "Real-time impression, click-through rate (CTR), and view tracking",
      "Support for Google AdSense, direct advertiser banners, and HTML5",
    ],
  },
  "menu": {
    name: "Menu Management",
    nameEn: "Navigation Menu Manager",
    category: "CUSTOMIZATION",
    description: "Hierarchical drag-and-drop menu editor for primary navigation, mega dropdowns, category bars, and footer links.",
    icon: CreditCard,
    color: "#DC2626",
    progress: 75,
    expectedVersion: "v2.0",
    featuresList: [
      "Intuitive drag-and-drop multi-level menu ordering",
      "Submenu and mega-dropdown category layout creation",
      "Custom external links and internal category route attachments",
      "Separate mobile-drawer navigation configuration",
    ],
  },
  "photo-card": {
    name: "Photo Card Generator",
    nameEn: "Social Media Photo Cards",
    category: "CUSTOMIZATION",
    description: "Branded automated graphics generator for producing high-impact social media headline cards.",
    icon: CreditCard,
    color: "#2563EB",
    progress: 85,
    expectedVersion: "v2.0",
    featuresList: [
      "Production-ready typography templates with automatic text fitting",
      "Smart headline, subtitle, and branded logo positioning",
      "1-click high-resolution JPEG and PNG download options",
      "Pre-configured dimension presets for Facebook, X (Twitter), and Instagram",
    ],
  },
  "writers-account": {
    name: "Writers Account",
    nameEn: "Writers & Contributors Manager",
    category: "ADVANCE",
    description: "Reporter credentials management, divisional correspondent assignments, and editorial role permissions.",
    icon: Users,
    color: "#16A34A",
    progress: 80,
    expectedVersion: "v2.0",
    featuresList: [
      "District and upazila correspondent account provisioning",
      "Journalist biography, avatar portrait, and official designation editor",
      "Reporter article output analytics and lifetime view metrics",
      "Review-before-publish workflow or direct publishing privileges",
    ],
  },
  "developer-zone": {
    name: "Developer Zone",
    nameEn: "Developer API & Webhooks",
    category: "ADVANCE",
    description: "RESTful API keys, webhook subscriptions, and developer documentation for Android, iOS, and third-party integrations.",
    icon: Code2,
    color: "#16A34A",
    progress: 60,
    expectedVersion: "v2.1",
    featuresList: [
      "Secure REST API endpoints for native iOS and Android apps",
      "Granular API access tokens with rate-limiting controls",
      "Real-time webhook events for breaking news notifications",
      "Live API request logs, latency metrics, and error debugging",
    ],
  },
  "web-access": {
    name: "Web Access Control",
    nameEn: "Web Access & Permissions",
    category: "ADVANCE",
    description: "Enterprise security with IP whitelisting, role-based access control (RBAC), and user login audit logs.",
    icon: ScanFace,
    color: "#DC2626",
    progress: 75,
    expectedVersion: "v2.0",
    featuresList: [
      "Role assignment: Super Admin, Editor, Staff Reporter, and Contributor",
      "IP address restriction and geo-fenced administration login",
      "Active session tracking with instant remote session revocation",
      "Comprehensive chronological audit trail for all editorial actions",
    ],
  },
  "security": {
    name: "Security & Protection",
    nameEn: "Security & DDoS Protection",
    category: "ADVANCE",
    description: "Advanced website cybersecurity, two-factor authentication, brute-force throttling, and automated database backups.",
    icon: Shield,
    color: "#DC2626",
    progress: 70,
    expectedVersion: "v2.0",
    featuresList: [
      "Two-factor authentication (2FA via Authenticator Apps or Email OTP)",
      "Automated brute-force prevention and temporary IP bans",
      "Spam bot filtering and Google reCAPTCHA v3 protection",
      "Scheduled automated database snapshots and AES-256 cloud encryption",
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
    description: "This feature is currently in active development by our engineering team and will be released in an upcoming update.",
    icon: Sparkles,
    color: "#3858F6",
    progress: 70,
    expectedVersion: "v2.0",
    featuresList: [
      "Intuitive modern user interface with responsive performance",
      "Seamless integration with the live backend database",
      "Role-based security and granular permissions",
      "Automated cloud synchronization and real-time updates",
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
                Dashboard
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
                    <span>Feature Under Development</span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                    <Rocket className="w-3.5 h-3.5" />
                    <span>Upcoming Release ({feature.expectedVersion})</span>
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
                <div className="mb-8 p-4.5 rounded-xl bg-gradient-to-r from-[#F0F4FA] to-[#EEF2FF] border border-[#DDE7FB]">
                  <div className="flex items-center justify-between text-xs font-bold text-[#0A2540] mb-2">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#3858F6]" />
                      <span>Development Progress</span>
                    </span>
                    <span className="text-[#3858F6]">{feature.progress}% Completed</span>
                  </div>
                  <div className="w-full h-2.5 bg-white/80 rounded-full overflow-hidden shadow-inner">
                    <div
                      className="h-full rounded-full transition-all duration-1000 bg-gradient-to-r from-[#3858F6] to-[#10B981]"
                      style={{ width: `${feature.progress}%` }}
                    />
                  </div>
                  <p className="text-[12px] text-[#64748B] mt-2 font-medium">
                    Our engineering team is actively building this module. Once development is finalized, the full management console will become active right here.
                  </p>
                </div>

                {/* Upcoming Capabilities / Roadmap List */}
                <div className="mb-8">
                  <h3 className="text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-3">
                    Key Capabilities & Roadmap:
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
                    <span>Back to Dashboard</span>
                  </Link>

                  <Link
                    href="/mfit-admin/new-article"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1677FF] hover:bg-blue-600 text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors"
                  >
                    <span>+ Create New Post</span>
                  </Link>

                  <Link
                    href="/mfit-admin/articles"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-[#F4F7FC] text-[#334155] border border-[#CBD5E1] text-xs sm:text-sm font-semibold transition-colors"
                  >
                    <span>View All Articles</span>
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
