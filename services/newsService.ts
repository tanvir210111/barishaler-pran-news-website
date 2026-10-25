import {
  CATEGORIES,
  AUTHORS,
  TAGS,
  BREAKING_NEWS,
  ARTICLES,
  INITIAL_COMMENTS,
  GALLERY_ITEMS,
  VIDEO_ITEMS
} from "@/data/mockNews";
import { Article, Category, Author, Tag, Comment, GalleryItem, VideoItem, BreakingNewsItem } from "@/types/news";

export { AUTHORS, TAGS, CATEGORIES, BREAKING_NEWS, ARTICLES };


// Reusable mock delay helper for realistic loading simulation if needed
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getCategories(): Promise<Category[]> {
  return CATEGORIES;
}

export async function getCategoryBySlug(slug: string): Promise<Category | undefined> {
  return CATEGORIES.find(c => c.slug === slug);
}

export async function getAllArticles(): Promise<Article[]> {
  return ARTICLES;
}

export async function getLeadArticle(): Promise<Article> {
  return ARTICLES.find(a => a.isLead) || ARTICLES[0];
}

export async function getFeaturedArticles(limit: number = 4): Promise<Article[]> {
  return ARTICLES.filter(a => !a.isLead).slice(0, limit);
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  return ARTICLES.find(a => a.slug === slug);
}

export async function getArticlesByCategory(categorySlug: string): Promise<Article[]> {
  return ARTICLES.filter(a => a.category.slug === categorySlug);
}

export async function getArticlesByTag(tagSlug: string): Promise<Article[]> {
  return ARTICLES.filter(a => a.tags.some(t => t.slug === tagSlug));
}

export async function getArticlesByAuthor(authorSlug: string): Promise<Article[]> {
  return ARTICLES.filter(a => a.author.slug === authorSlug);
}

export async function getAuthorBySlug(slug: string): Promise<Author | undefined> {
  return AUTHORS.find(a => a.slug === slug);
}

export async function getLatestArticles(limit: number = 10): Promise<Article[]> {
  return [...ARTICLES]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

export async function getPopularArticles(limit: number = 8): Promise<Article[]> {
  return [...ARTICLES]
    .sort((a, b) => b.viewsCount - a.viewsCount)
    .slice(0, limit);
}

export async function getBreakingNews(): Promise<BreakingNewsItem[]> {
  return BREAKING_NEWS;
}

export async function getGalleryItems(): Promise<GalleryItem[]> {
  return GALLERY_ITEMS;
}

export async function getGalleryItemBySlug(slug: string): Promise<GalleryItem | undefined> {
  return GALLERY_ITEMS.find(g => g.slug === slug);
}

export async function getVideoItems(): Promise<VideoItem[]> {
  return VIDEO_ITEMS;
}

export async function searchArticles(query: string = "", categorySlug: string = "", dateFilter: string = ""): Promise<Article[]> {
  let filtered = [...ARTICLES];
  const q = query.trim().toLowerCase();

  if (q) {
    filtered = filtered.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.category.name.toLowerCase().includes(q) ||
      a.author.name.toLowerCase().includes(q) ||
      a.tags.some(t => t.name.toLowerCase().includes(q))
    );
  }

  if (categorySlug && categorySlug !== "all") {
    filtered = filtered.filter(a => a.category.slug === categorySlug);
  }

  if (dateFilter) {
    const now = new Date().getTime();
    if (dateFilter === "today") {
      filtered = filtered.filter(a => {
        const diffDays = (now - new Date(a.publishedAt).getTime()) / (1000 * 3600 * 24);
        return diffDays <= 1;
      });
    } else if (dateFilter === "week") {
      filtered = filtered.filter(a => {
        const diffDays = (now - new Date(a.publishedAt).getTime()) / (1000 * 3600 * 24);
        return diffDays <= 7;
      });
    } else if (dateFilter === "month") {
      filtered = filtered.filter(a => {
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
    list = list.filter(a => a.category.slug === params.category);
  }

  if (params.query && params.query.trim()) {
    const q = params.query.toLowerCase().trim();
    list = list.filter(a => a.title.toLowerCase().includes(q) || a.summary.toLowerCase().includes(q));
  }

  if (params.year && params.year !== "all") {
    list = list.filter(a => a.publishedAt.startsWith(params.year!));
  }

  if (params.month && params.month !== "all") {
    const target = `-${params.month.padStart(2, '0')}-`;
    list = list.filter(a => a.publishedAt.includes(target));
  }

  return list;
}

// Client-side LocalStorage Comments Helper
export function getStoredComments(articleId: string): Comment[] {
  if (typeof window === "undefined") {
    return INITIAL_COMMENTS.filter(c => c.articleId === articleId);
  }

  const stored = localStorage.getItem(`comments_${articleId}`);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch {
      return INITIAL_COMMENTS.filter(c => c.articleId === articleId);
    }
  }

  const defaults = INITIAL_COMMENTS.filter(c => c.articleId === articleId);
  localStorage.setItem(`comments_${articleId}`, JSON.stringify(defaults));
  return defaults;
}

export function saveComment(articleId: string, newComment: Omit<Comment, "id" | "createdAt" | "likes">): Comment {
  const current = getStoredComments(articleId);
  const now = new Date();
  const bengaliDate = now.toLocaleDateString('bn-BD', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }) + ", " + now.toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' });

  const created: Comment = {
    ...newComment,
    id: `c_${Date.now()}`,
    createdAt: bengaliDate,
    likes: 0,
    replies: []
  };

  const updated = [created, ...current];
  if (typeof window !== "undefined") {
    localStorage.setItem(`comments_${articleId}`, JSON.stringify(updated));
  }
  return created;
}

export function saveReply(articleId: string, parentCommentId: string, authorName: string, content: string): Comment | null {
  const current = getStoredComments(articleId);
  const now = new Date();
  const bengaliDate = now.toLocaleDateString('bn-BD', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }) + ", " + now.toLocaleTimeString('bn-BD', { hour: '2-digit', minute: '2-digit' });

  const reply: Comment = {
    id: `reply_${Date.now()}`,
    articleId,
    authorName,
    content,
    createdAt: bengaliDate,
    likes: 0
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

export function toggleCommentLike(articleId: string, commentId: string): number {
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
