"use client";

import React, { useState } from "react";
import Image from "next/image";
import ArticleToolbar from "@/components/article/ArticleToolbar";
import { ArticleContentBlock } from "@/types/news";

interface ContainerProps {
  title: string;
  contentBlocks: ArticleContentBlock[];
  featuredImage: {
    url: string;
    caption: string;
    credit: string;
    alt: string;
  };
}

export default function ArticleToolbarContainer({
  title,
  contentBlocks,
  featuredImage,
}: ContainerProps) {
  const [fontSizeLevel, setFontSizeLevel] = useState(0); // -1 (sm), 0 (base), 1 (lg), 2 (xl)

  const getFontSizeClass = () => {
    switch (fontSizeLevel) {
      case -1:
        return "text-sm leading-normal";
      case 1:
        return "text-lg leading-relaxed";
      case 2:
        return "text-xl leading-loose";
      default:
        return "text-base leading-relaxed";
    }
  };

  return (
    <div>
      {/* Interactive Toolbar */}
      <ArticleToolbar
        fontSizeLevel={fontSizeLevel}
        onIncreaseFontSize={() => setFontSizeLevel((prev) => Math.min(prev + 1, 2))}
        onDecreaseFontSize={() => setFontSizeLevel((prev) => Math.max(prev - 1, -1))}
        onResetFontSize={() => setFontSizeLevel(0)}
        title={title}
      />

      {/* Featured Image */}
      <div className="my-5 rounded-lg overflow-hidden bg-gray-100 border border-[#E2E6EB]">
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={featuredImage.url}
            alt={featuredImage.alt || title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 800px"
            className="object-cover"
          />
        </div>
        {(featuredImage.caption || featuredImage.credit) && (
          <div className="p-2.5 bg-gray-50 border-t border-gray-200 text-xs text-[#626B75] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <span>{featuredImage.caption}</span>
            {featuredImage.credit && (
              <span className="font-semibold text-gray-500 shrink-0">
                ছবি: {featuredImage.credit}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Article Body Content with Dynamic Font Scaling */}
      <div className={`article-body text-[#202124] space-y-4 ${getFontSizeClass()}`}>
        {contentBlocks.map((block, index) => {
          if (block.type === "paragraph") {
            return (
              <p key={index} className="text-[#202124]">
                {block.text}
              </p>
            );
          }

          if (block.type === "heading") {
            return (
              <h2
                key={index}
                className="text-xl sm:text-2xl font-bold text-[#0756A4] pt-3 pb-1 border-b border-gray-200"
              >
                {block.text}
              </h2>
            );
          }

          if (block.type === "quote") {
            return (
              <blockquote
                key={index}
                className="my-4 border-l-4 border-[#087A43] pl-4 py-2 bg-[#EAF5EE] text-[#05407c] font-medium italic rounded-r"
              >
                {block.text}
              </blockquote>
            );
          }

          if (block.type === "image" && block.url) {
            return (
              <div key={index} className="my-5 rounded overflow-hidden border border-gray-200 bg-gray-50">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={block.url}
                    alt={block.caption || "প্রতিবেদন ছবি"}
                    fill
                    sizes="(max-width: 1024px) 100vw, 800px"
                    className="object-cover"
                  />
                </div>
                {block.caption && (
                  <p className="p-2 text-xs text-gray-600 italic text-center bg-gray-100">
                    {block.caption} {block.credit && `(ছবি: ${block.credit})`}
                  </p>
                )}
              </div>
            );
          }

          if (block.type === "list" && block.items) {
            return (
              <ul key={index} className="list-disc list-inside space-y-1.5 my-3 pl-2 text-gray-800">
                {block.items.map((item, itemIdx) => (
                  <li key={itemIdx}>{item}</li>
                ))}
              </ul>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}
