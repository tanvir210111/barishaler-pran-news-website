import {
  CATEGORIES,
  AUTHORS,
  TAGS,
  BREAKING_NEWS,
  ARTICLES,
  INITIAL_COMMENTS,
  GALLERY_ITEMS,
  VIDEO_ITEMS,
} from "@/data/mockNews";
import {
  Article,
  Category,
  Author,
  Tag,
  Comment,
  GalleryItem,
  VideoItem,
  BreakingNewsItem,
  SiteSettings,
} from "@/types/news";
import { api } from "@/services/apiClient";
import { toBengaliNumerals } from "@/lib/bangladeshTime";

export { AUTHORS, TAGS, CATEGORIES, BREAKING_NEWS, ARTICLES };

// Convert backend Bengali date or ISO string to standard formatted Bengali date string
export function formatToBengaliDate(isoDateString?: string): string {
  if (!isoDateString) return "আজ";
  try {
    const date = new Date(isoDateString);
    if (isNaN(date.getTime())) return isoDateString;
    const formatted = date.toLocaleDateString("bn-BD", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Asia/Dhaka",
    });
    return formatted;
  } catch {
    return isoDateString;
  }
}

// Intelligent mapper: transforms backend API news response into frontend Article interface
export function mapBackendNewsToArticle(item: any): Article {
  if (!item) return ARTICLES[0];

  // Already an Article
  if (item.author && item.publishedAtBengali && item.featuredImage?.caption !== undefined) {
    return item as Article;
  }

  const categoryName = item.category?.name || "জাতীয়";
  const categorySlug = item.category?.slug || "national";
  const categoryId = item.category?.id || item.categoryId || "cat-1";

  const category: Category = {
    id: categoryId,
    name: categoryName,
    slug: categorySlug,
    order: 1,
    isMain: true,
  };

  const authorName = item.writer?.name || item.guestWriterName || "স্টাফ রিপোর্টার";
  const authorRole = item.writer?.designationTitle || item.guestWriterDesignation || "প্রতিবেদক";
  const authorAvatar =
    item.writer?.profileImage ||
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80";

  const author: Author = {
    id: item.writer?.id || "writer-1",
    name: authorName,
    slug: item.writer?.id || "staff-reporter",
    role: authorRole,
    bio: item.writer?.bio || "বরিশালের প্রাণ সম্পাদকীয় দল",
    avatar: authorAvatar,
  };

  const featuredImageUrl =
    typeof item.featuredImage === "string"
      ? item.featuredImage
      : item.featuredImage?.url ||
        "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1200&auto=format&fit=crop&q=80";

  const tags: Tag[] = Array.isArray(item.tags)
    ? item.tags.map((t: any, idx: number) => {
        if (typeof t === "string") {
          return { id: `tag-${idx}`, name: t, slug: encodeURIComponent(t) };
        }
        return t;
      })
    : [];

  const rawReadingTime = typeof item.readingTime === "string" ? parseInt(item.readingTime, 10) : item.readingTime;
  const readingTimeMinutes = !isNaN(rawReadingTime) && rawReadingTime > 0 ? rawReadingTime : 3;

  const publishedAt = item.publishedDate || item.createdAt || new Date().toISOString();
  const publishedAtBengali = formatToBengaliDate(publishedAt);

  return {
    id: String(item.id || item._id),
    title: item.title || "",
    subtitle: item.subtitle,
    slug: item.slug || String(item.id),
    summary: item.summary || (typeof item.content === "string" ? item.content.replace(/<[^>]*>/g, "").slice(0, 160) : ""),
    content: item.content || [],
    category,
    author,
    featuredImage: {
      url: featuredImageUrl,
      caption: item.imageCaption || item.title || "",
      credit: item.photoCredit || "ছবি: সংগৃহীত",
      alt: item.title || "নিউজ ছবি",
    },
    tags,
    publishedAt,
    publishedAtBengali,
    readingTimeMinutes,
    isLead: Boolean(item.isLead),
    isSubLead: Boolean(item.isSubLead),
    isFeatured: Boolean(item.isFeatured),
    isBreaking: Boolean(item.isBreaking),
    isTrending: Boolean(item.isTrending),
    isSlider: Boolean(item.isSlider),
    viewsCount: item.viewsCount || 0,
    sharesCount: item.sharesCount || 0,
    youtubeLink: item.youtubeLink,
    division: item.division,
    district: item.district,
    upazila: item.upazila,
    navigation: item.navigation,
    relatedNews: item.relatedNews,
  };
}

// ----------------- Categories -----------------

export async function getCategories(): Promise<Category[]> {
  try {
    const res = await api.get<any[]>("/categories");
    if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
      return res.data.map((c, idx) => ({
        id: String(c.id || c._id),
        name: c.name,
        slug: c.slug,
        description: c.description,
        order: c.orderIndex || idx + 1,
        isMain: idx < 10,
      }));
    }
  } catch (err) {
    console.warn("Using fallback categories due to:", err);
  }
  return CATEGORIES;
}

export async function getCategoryBySlug(slug: string): Promise<Category | undefined> {
  const cats = await getCategories();
  return cats.find((c) => c.slug === slug) || CATEGORIES.find((c) => c.slug === slug);
}

// ----------------- Homepage Aggregated -----------------

export async function getHomepageLayout(): Promise<any | null> {
  try {
    const res = await api.get<any>("/news/home");
    if (res?.success && res.data) {
      return res.data;
    }
  } catch (err) {
    console.warn("Failed to fetch /news/home:", err);
  }
  return null;
}

// ----------------- Articles -----------------

export async function getAllArticles(): Promise<Article[]> {
  try {
    const res = await api.get<any[]>("/news?limit=50");
    if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
      return res.data.map(mapBackendNewsToArticle);
    }
  } catch (err) {
    console.warn("Using fallback articles due to:", err);
  }
  return ARTICLES;
}

export async function getLeadArticle(): Promise<Article> {
  try {
    const home = await getHomepageLayout();
    if (home?.leadNews) {
      return mapBackendNewsToArticle(home.leadNews);
    }
    const res = await api.get<any[]>("/news?isLead=true&limit=1");
    if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
      return mapBackendNewsToArticle(res.data[0]);
    }
  } catch (err) {
    console.warn("Using fallback lead article");
  }
  return ARTICLES.find((a) => a.isLead) || ARTICLES[0];
}

export async function getFeaturedArticles(limit: number = 4): Promise<Article[]> {
  try {
    const home = await getHomepageLayout();
    if (home?.subLeadNews && Array.isArray(home.subLeadNews) && home.subLeadNews.length > 0) {
      return home.subLeadNews.map(mapBackendNewsToArticle).slice(0, limit);
    }
    const res = await api.get<any[]>(`/news?isFeatured=true&limit=${limit}`);
    if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
      return res.data.map(mapBackendNewsToArticle);
    }
  } catch (err) {
    console.warn("Using fallback featured articles");
  }
  return ARTICLES.filter((a) => !a.isLead).slice(0, limit);
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  try {
    const res = await api.get<any>(`/news/slug/${encodeURIComponent(slug)}`);
    if (res?.success && res.data) {
      return mapBackendNewsToArticle(res.data);
    }
  } catch (err) {
    console.warn(`Could not fetch article slug: ${slug} from API, using fallback`);
  }
  return ARTICLES.find((a) => a.slug === slug);
}

export async function getArticlesByCategory(categorySlug: string): Promise<Article[]> {
  try {
    const res = await api.get<any[]>(`/news?category=${encodeURIComponent(categorySlug)}&limit=20`);
    if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
      return res.data.map(mapBackendNewsToArticle);
    }
  } catch (err) {
    console.warn(`Failed fetching category ${categorySlug} from API`);
  }
  return ARTICLES.filter((a) => a.category.slug === categorySlug);
}

export async function getArticlesByTag(tagSlug: string): Promise<Article[]> {
  try {
    const res = await api.get<any[]>(`/news?tags=${encodeURIComponent(tagSlug)}&limit=20`);
    if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
      return res.data.map(mapBackendNewsToArticle);
    }
  } catch (err) {
    console.warn(`Failed fetching tag ${tagSlug} from API`);
  }
  return ARTICLES.filter((a) => a.tags.some((t) => t.slug === tagSlug));
}

export async function getArticlesByAuthor(authorSlug: string): Promise<Article[]> {
  return ARTICLES.filter((a) => a.author.slug === authorSlug);
}

export async function getAuthorBySlug(slug: string): Promise<Author | undefined> {
  return AUTHORS.find((a) => a.slug === slug);
}

export async function getLatestArticles(limit: number = 10): Promise<Article[]> {
  try {
    const res = await api.get<any[]>(`/news/recent?limit=${limit}`);
    if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
      return res.data.map(mapBackendNewsToArticle);
    }
  } catch (err) {
    console.warn("Using fallback latest articles");
  }
  return [...ARTICLES]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

export async function getPopularArticles(limit: number = 8): Promise<Article[]> {
  try {
    const res = await api.get<any[]>(`/news/trending?limit=${limit}`);
    if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
      return res.data.map(mapBackendNewsToArticle);
    }
  } catch (err) {
    console.warn("Using fallback popular articles");
  }
  return [...ARTICLES].sort((a, b) => b.viewsCount - a.viewsCount).slice(0, limit);
}

export async function getBreakingNews(): Promise<BreakingNewsItem[]> {
  try {
    const res = await api.get<any[]>("/news/breaking?limit=5");
    if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
      return res.data.map((b) => ({
        id: String(b.id || b._id),
        headline: b.title,
        slug: b.slug,
        categoryName: b.category?.name || "ব্রেকিং",
        publishedTime: formatToBengaliDate(b.publishedDate),
      }));
    }
  } catch (err) {
    console.warn("Using fallback breaking news");
  }
  return BREAKING_NEWS;
}

export async function getGalleryItems(): Promise<GalleryItem[]> {
  return GALLERY_ITEMS;
}

export async function getGalleryItemBySlug(slug: string): Promise<GalleryItem | undefined> {
  return GALLERY_ITEMS.find((g) => g.slug === slug);
}

export async function getVideoItems(): Promise<VideoItem[]> {
  try {
    const res = await api.get<any[]>("/news/videos?limit=10");
    if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
      return res.data.map((v) => ({
        id: String(v.id || v._id),
        title: v.title,
        slug: v.slug,
        videoUrl: v.youtubeLink || "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        thumbnail: typeof v.featuredImage === "string" ? v.featuredImage : v.featuredImage?.url || "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800",
        duration: "৩:৪৫",
        category: v.category?.name || "ভিডিও",
        views: v.viewsCount || 100,
        date: formatToBengaliDate(v.publishedDate),
        summary: v.summary || v.title,
      }));
    }
  } catch (err) {
    console.warn("Using fallback video items");
  }
  return VIDEO_ITEMS;
}

export async function searchArticles(
  query: string = "",
  categorySlug: string = "",
  dateFilter: string = ""
): Promise<Article[]> {
  try {
    let endpoint = `/news?searchTerm=${encodeURIComponent(query)}`;
    if (categorySlug && categorySlug !== "all") {
      endpoint += `&category=${encodeURIComponent(categorySlug)}`;
    }
    const res = await api.get<any[]>(endpoint);
    if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
      return res.data.map(mapBackendNewsToArticle);
    }
  } catch (err) {
    console.warn("Using local search fallback");
  }

  let filtered = [...ARTICLES];
  const q = query.trim().toLowerCase();

  if (q) {
    filtered = filtered.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        a.category.name.toLowerCase().includes(q) ||
        a.author.name.toLowerCase().includes(q) ||
        a.tags.some((t) => t.name.toLowerCase().includes(q))
    );
  }

  if (categorySlug && categorySlug !== "all") {
    filtered = filtered.filter((a) => a.category.slug === categorySlug);
  }

  if (dateFilter) {
    const now = new Date().getTime();
    if (dateFilter === "today") {
      filtered = filtered.filter((a) => {
        const diffDays = (now - new Date(a.publishedAt).getTime()) / (1000 * 3600 * 24);
        return diffDays <= 1;
      });
    } else if (dateFilter === "week") {
      filtered = filtered.filter((a) => {
        const diffDays = (now - new Date(a.publishedAt).getTime()) / (1000 * 3600 * 24);
        return diffDays <= 7;
      });
    } else if (dateFilter === "month") {
      filtered = filtered.filter((a) => {
        const diffDays = (now - new Date(a.publishedAt).getTime()) / (1000 * 3600 * 24);
        return diffDays <= 30;
      });
    }
  }

  return filtered;
}

export async function getArchiveArticles(params: {
  year?: string;
  month?: string;
  category?: string;
  query?: string;
}): Promise<Article[]> {
  let list = [...ARTICLES];

  if (params.category && params.category !== "all") {
    list = list.filter((a) => a.category.slug === params.category);
  }

  if (params.query && params.query.trim()) {
    const q = params.query.toLowerCase().trim();
    list = list.filter((a) => a.title.toLowerCase().includes(q) || a.summary.toLowerCase().includes(q));
  }

  if (params.year && params.year !== "all") {
    list = list.filter((a) => a.publishedAt.startsWith(params.year!));
  }

  if (params.month && params.month !== "all") {
    const target = `-${params.month.padStart(2, "0")}-`;
    list = list.filter((a) => a.publishedAt.includes(target));
  }

  return list;
}

// ----------------- Site Settings -----------------

export async function getSiteSettings(): Promise<SiteSettings> {
  const defaultSettings: SiteSettings = {
    siteName: "বরিশালের প্রাণ",
    siteSlogan: "সত্যের সন্ধানে অবিচল",
    editorName: "সম্পাদক ও প্রকাশক",
    officeAddress: "সিবি ভবন, সদর রোড, বরিশাল-৮২০০",
    phone: "+৮৮০১৭১২-৩৪৫৬৭৮",
    email: "contact@barisalerpran.com",
    facebookUrl: "https://facebook.com",
    youtubeUrl: "https://youtube.com",
  };

  try {
    const res = await api.get<SiteSettings>("/settings");
    if (res?.success && res.data) {
      return {
        ...defaultSettings,
        ...res.data,
      };
    }
  } catch (err) {
    console.warn("Using default settings due to error:", err);
  }
  return defaultSettings;
}

// ----------------- Newsletter -----------------

export async function subscribeNewsletter(email: string): Promise<{ success: boolean; message: string }> {
  try {
    const res = await api.post("/newsletters/subscribe", { email });
    if (res?.success) {
      return { success: true, message: res.message || "ধন্যবাদ! আপনি সফলভাবে সাবস্ক্রাইব করেছেন।" };
    }
    return { success: false, message: res?.message || "সাবস্ক্রিপশন সম্পন্ন করা যায়নি।" };
  } catch (err: any) {
    return { success: false, message: err.message || "নেটওয়ার্ক ত্রুটি।" };
  }
}

// ----------------- Social Share Tracker -----------------

export async function trackShare(newsId: string): Promise<void> {
  try {
    await api.post(`/news/${newsId}/share`);
  } catch {}
}

// ----------------- Comments -----------------

export async function fetchComments(newsId: string): Promise<Comment[]> {
  try {
    const res = await api.get<any[]>(`/comments/news/${newsId}`);
    if (res?.success && Array.isArray(res.data) && res.data.length > 0) {
      return res.data.map((c) => ({
        id: String(c.id || c._id),
        articleId: newsId,
        authorName: c.user?.fullName || c.authorName || "পাঠক",
        content: c.content,
        createdAt: formatToBengaliDate(c.createdAt),
        likes: c.likesCount || c.reactions?.likes || 0,
        replies: Array.isArray(c.replies)
          ? c.replies.map((r: any) => ({
              id: String(r.id || r._id),
              articleId: newsId,
              authorName: r.user?.fullName || r.authorName || "পাঠক",
              content: r.content,
              createdAt: formatToBengaliDate(r.createdAt),
              likes: r.likesCount || 0,
            }))
          : [],
      }));
    }
  } catch (err) {
    console.warn("Falling back to local comments for:", newsId);
  }
  return getStoredComments(newsId);
}

export function getStoredComments(articleId: string): Comment[] {
  if (typeof window === "undefined") {
    return INITIAL_COMMENTS.filter((c) => c.articleId === articleId);
  }

  const stored = localStorage.getItem(`comments_${articleId}`);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return INITIAL_COMMENTS.filter((c) => c.articleId === articleId);
    }
  }

  const defaults = INITIAL_COMMENTS.filter((c) => c.articleId === articleId);
  localStorage.setItem(`comments_${articleId}`, JSON.stringify(defaults));
  return defaults;
}

export async function saveComment(
  articleId: string,
  newComment: Omit<Comment, "id" | "createdAt" | "likes">
): Promise<Comment> {
  // If user is logged in, try sending to backend
  try {
    const res = await api.post("/comments", {
      newsId: articleId,
      content: newComment.content,
    });
    if (res?.success && res.data) {
      const c = res.data;
      return {
        id: String(c.id || c._id),
        articleId,
        authorName: c.user?.fullName || newComment.authorName,
        authorEmail: newComment.authorEmail,
        content: c.content,
        createdAt: formatToBengaliDate(c.createdAt),
        likes: 0,
        replies: [],
      };
    }
  } catch (err) {
    console.warn("Backend comment submission fallback to local storage");
  }

  // Local storage fallback
  const current = getStoredComments(articleId);
  const now = new Date();
  const bengaliDate =
    now.toLocaleDateString("bn-BD", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }) +
    ", " +
    now.toLocaleTimeString("bn-BD", { hour: "2-digit", minute: "2-digit" });

  const created: Comment = {
    ...newComment,
    id: `c_${Date.now()}`,
    createdAt: bengaliDate,
    likes: 0,
    replies: [],
  };

  const updated = [created, ...current];
  if (typeof window !== "undefined") {
    localStorage.setItem(`comments_${articleId}`, JSON.stringify(updated));
  }
  return created;
}

export async function saveReply(
  articleId: string,
  parentCommentId: string,
  authorName: string,
  content: string
): Promise<Comment | null> {
  try {
    const res = await api.post(`/comments/${parentCommentId}/reply`, { content });
    if (res?.success && res.data) {
      const r = res.data;
      return {
        id: String(r.id || r._id),
        articleId,
        authorName: r.user?.fullName || authorName,
        content: r.content,
        createdAt: formatToBengaliDate(r.createdAt),
        likes: 0,
      };
    }
  } catch (err) {
    console.warn("Reply fallback to local");
  }

  const current = getStoredComments(articleId);
  const now = new Date();
  const bengaliDate =
    now.toLocaleDateString("bn-BD", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }) +
    ", " +
    now.toLocaleTimeString("bn-BD", { hour: "2-digit", minute: "2-digit" });

  const reply: Comment = {
    id: `reply_${Date.now()}`,
    articleId,
    authorName,
    content,
    createdAt: bengaliDate,
    likes: 0,
  };

  const traverse = (items: Comment[]): boolean => {
    for (const item of items) {
      if (item.id === parentCommentId) {
        item.replies = item.replies ? [...item.replies, reply] : [reply];
        return true;
      }
      if (item.replies && traverse(item.replies)) {
        return true;
      }
    }
    return false;
  };

  if (traverse(current)) {
    if (typeof window !== "undefined") {
      localStorage.setItem(`comments_${articleId}`, JSON.stringify(current));
    }
    return reply;
  }
  return null;
}

export async function toggleCommentLike(articleId: string, commentId: string): Promise<number> {
  try {
    await api.post(`/comments/${commentId}/react`, { type: "LIKE" });
  } catch {}

  const current = getStoredComments(articleId);
  let newLikes = 0;

  const traverse = (items: Comment[]): boolean => {
    for (const item of items) {
      if (item.id === commentId) {
        item.likes = (item.likes || 0) + 1;
        newLikes = item.likes;
        return true;
      }
      if (item.replies && traverse(item.replies)) {
        return true;
      }
    }
    return false;
  };

  if (traverse(current)) {
    if (typeof window !== "undefined") {
      localStorage.setItem(`comments_${articleId}`, JSON.stringify(current));
    }
  }
  return newLikes;
}

export function reportComment(articleId: string, commentId: string): boolean {
  const current = getStoredComments(articleId);

  const traverse = (items: Comment[]): boolean => {
    for (const item of items) {
      if (item.id === commentId) {
        item.isReported = true;
        return true;
      }
      if (item.replies && traverse(item.replies)) {
        return true;
      }
    }
    return false;
  };

  if (traverse(current)) {
    if (typeof window !== "undefined") {
      localStorage.setItem(`comments_${articleId}`, JSON.stringify(current));
    }
    return true;
  }
  return false;
}
