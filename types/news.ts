export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  order: number;
  isMain: boolean; // true if in top 9 navbar items
}

export interface Author {
  id: string;
  name: string;
  slug: string;
  role: string;
  bio: string;
  avatar: string;
  email?: string;
  location?: string;
  socials?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
  };
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
}

export interface CommentReaction {
  likes: number;
  userLiked?: boolean;
}

export interface Comment {
  id: string;
  articleId: string;
  authorName: string;
  authorEmail?: string;
  content: string;
  createdAt: string;
  likes: number;
  isReported?: boolean;
  replies?: Comment[];
}

export interface ArticleContentBlock {
  type: 'paragraph' | 'heading' | 'quote' | 'image' | 'list';
  text?: string;
  url?: string;
  caption?: string;
  credit?: string;
  items?: string[];
}

export interface Article {
  id: string;
  title: string;
  subtitle?: string;
  slug: string;
  summary: string;
  content: ArticleContentBlock[] | string;
  category: Category;
  author: Author;
  featuredImage: {
    url: string;
    caption: string;
    credit: string;
    alt: string;
  };
  tags: Tag[];
  publishedAt: string; // ISO date
  publishedAtBengali: string;
  updatedAt?: string;
  readingTimeMinutes: number;
  isLead?: boolean;
  isSubLead?: boolean;
  isFeatured?: boolean;
  isBreaking?: boolean;
  isTrending?: boolean;
  isSlider?: boolean;
  viewsCount: number;
  sharesCount: number;
  youtubeLink?: string;
  division?: string;
  district?: string;
  upazila?: string;
  navigation?: {
    prevNews?: { id: string; title: string; slug: string; featuredImage?: string };
    nextNews?: { id: string; title: string; slug: string; featuredImage?: string };
  };
  relatedNews?: any[];
}

export interface GalleryItem {
  id: string;
  title: string;
  slug: string;
  image: string;
  caption: string;
  photographer: string;
  category: string;
  date: string;
  thumbnail: string;
  relatedArticleSlug?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  slug: string;
  videoUrl: string;
  thumbnail: string;
  duration: string;
  category: string;
  views: number;
  date: string;
  summary: string;
}

export interface BreakingNewsItem {
  id: string;
  headline: string;
  slug: string;
  categoryName: string;
  publishedTime: string;
}

export interface AdPlacement {
  id: string;
  position: 'top-header' | 'home-middle' | 'sidebar' | 'in-article' | 'footer-top';
  size: 'leaderboard' | 'medium-rectangle' | 'banner' | 'responsive';
  title?: string;
  demoBrand?: string;
  demoText?: string;
}

export interface SiteSettings {
  id?: string;
  siteName: string;
  siteSlogan?: string;
  logo?: string;
  footerLogo?: string;
  favicon?: string;
  editorName?: string;
  publisherName?: string;
  officeAddress?: string;
  phone?: string;
  email?: string;
  facebookUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  whatsappNumber?: string;
  telegramUrl?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
  headerNotice?: string;
}

