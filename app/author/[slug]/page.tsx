import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAuthorBySlug, getArticlesByAuthor, getAuthors } from "@/services/newsService";
import HorizontalNewsCard from "@/components/news/HorizontalNewsCard";
import AdvertisementPlaceholder from "@/components/news/AdvertisementPlaceholder";
import { User, Mail, MapPin, ChevronRight, BookOpen } from "lucide-react";

interface AuthorPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = await getAuthorBySlug(slug);

  if (!author) {
    return { title: "লেখক পাওয়া যায়নি | বরিশালের প্রাণ" };
  }

  return {
    title: `${author.name} (${author.role}) | বরিশালের প্রাণ`,
    description: author.bio,
  };
}

export async function generateStaticParams() {
  const authors = await getAuthors();
  return authors.map((a) => ({ slug: a.slug }));
}

export default async function AuthorProfilePage({ params }: AuthorPageProps) {
  const { slug } = await params;
  const author = await getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  const articles = await getArticlesByAuthor(slug);

  return (
    <div className="space-y-6">
      <nav aria-label="ব্রেডক্রাম্ব" className="text-xs text-[#626B75] flex items-center gap-1.5">
        <Link href="/" className="hover:text-[#0756A4] transition-colors">
          প্রচ্ছদ
        </Link>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="text-gray-400">প্রতিবেদক ও লেখক</span>
        <ChevronRight className="w-3 h-3 text-gray-400" />
        <span className="text-[#0756A4] font-semibold">{author.name}</span>
      </nav>

      {/* Author Bio Card */}
      <div className="bg-white rounded-lg border border-[#E2E6EB] p-6 shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-5">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shrink-0 border-2 border-[#0756A4] shadow">
          <Image
            src={author.avatar}
            alt={author.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h1 className="text-2xl font-extrabold text-[#202124]">
                {author.name}
              </h1>
              <p className="text-sm font-semibold text-[#0756A4]">
                {author.role}
              </p>
            </div>
            <div className="text-xs bg-[#EAF2FB] text-[#0756A4] px-3 py-1 rounded-full font-semibold self-center sm:self-auto">
              মোট প্রতিবেদন: {articles.length}টি
            </div>
          </div>

          <p className="text-sm text-[#626B75] mt-3 leading-relaxed">
            {author.bio}
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-4 text-xs text-[#626B75] pt-3 border-t border-gray-100">
            {author.location && (
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#087A43]" />
                {author.location}
              </span>
            )}
            {author.email && (
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-[#0756A4]" />
                {author.email}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Articles List */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-4">
          <h2 className="text-lg font-bold text-[#0756A4] border-b-2 border-[#0756A4] pb-2 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#087A43]" />
            {author.name}-এর প্রকাশিত প্রতিবেদনসমূহ
          </h2>

          {articles.length === 0 ? (
            <div className="bg-white rounded-lg border border-[#E2E6EB] p-8 text-center text-[#626B75]">
              <p className="text-sm">এই প্রতিবেদকের কোনো নিবন্ধ পাওয়া যায়নি।</p>
            </div>
          ) : (
            articles.map((art) => (
              <HorizontalNewsCard key={art.id} article={art} />
            ))
          )}
        </div>

        <aside className="lg:col-span-4 space-y-6">
          <AdvertisementPlaceholder size="sidebar" />
          <AdvertisementPlaceholder size="medium-rectangle" />
        </aside>
      </div>
    </div>
  );
}
