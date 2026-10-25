import React, { Suspense } from "react";
import { Metadata } from "next";
import { getCategories, searchArticles } from "@/services/newsService";
import SearchClient from "./SearchClient";

export const metadata: Metadata = {
  title: "অনুসন্ধান | বরিশালের প্রাণ",
  description: "বরিশালের প্রাণের সমৃদ্ধ আর্কাইভ থেকে আপনার পছন্দের সংবাদ ও প্রতিবেদন খুঁজুন।",
};

interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
    category?: string;
    date?: string;
  }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = "", category = "all", date = "all" } = await searchParams;

  const categories = await getCategories();
  const initialArticles = await searchArticles(q, category, date);

  return (
    <Suspense fallback={<div className="p-8 text-center text-sm text-gray-500">লোড হচ্ছে...</div>}>
      <SearchClient
        initialQuery={q}
        initialCategory={category}
        initialDate={date}
        categories={categories}
        initialArticles={initialArticles}
      />
    </Suspense>
  );
}
