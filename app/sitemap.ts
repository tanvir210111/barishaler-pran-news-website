import { MetadataRoute } from "next";
import { getAllArticles, getCategories } from "@/services/newsService";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://barishalerpran.com";
  const articles = await getAllArticles();
  const categories = await getCategories();

  const articleEntries = articles.map((article) => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  const categoryEntries = categories.map((cat) => ({
    url: `${baseUrl}/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "hourly" as const,
    priority: 0.9,
  }));

  const staticEntries = [
    "",
    "/latest",
    "/popular",
    "/archive",
    "/gallery",
    "/videos",
    "/about",
    "/contact",
    "/editorial-policy",
    "/privacy-policy",
    "/terms",
    "/advertise",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1.0 : 0.7,
  }));

  return [...staticEntries, ...categoryEntries, ...articleEntries];
}
