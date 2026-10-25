import React from "react";
import { Metadata } from "next";
import { getVideoItems } from "@/services/newsService";
import VideosClient from "./VideosClient";

export const metadata: Metadata = {
  title: "ভিডিও সংবাদ | বরিশালের প্রাণ",
  description: "বরিশালের প্রাণের মাঠপর্যায়ের সংবাদ ও বিশেষ ভিডিও প্রতিবেদন।",
};

export default async function VideosPage() {
  const videos = await getVideoItems();
  return <VideosClient videos={videos} />;
}
