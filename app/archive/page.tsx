import React from "react";
import { Metadata } from "next";
import { getCategories, getAllArticles } from "@/services/newsService";
import ArchiveClient from "./ArchiveClient";

export const metadata: Metadata = {
  title: "পুরাতন নিউজ আর্কাইভ | বরিশালের প্রাণ",
  description: "বরিশালের প্রাণের প্রকাশিত সকল পুরাতন সংবাদ, সম্পাদকীয় এবং বিশেষ প্রতিবেদন খুঁজুন।",
};

export default async function ArchivePage() {
  const categories = await getCategories();
  const allArticles = await getAllArticles();

  return <ArchiveClient categories={categories} initialArticles={allArticles} />;
}
