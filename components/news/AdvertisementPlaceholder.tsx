import React from "react";

interface AdProps {
  position?: string;
  size?: "leaderboard" | "medium-rectangle" | "banner" | "sidebar" | "square" | "video";
  className?: string;
  imageUrl?: string;
  videoUrl?: string;
  aspectRatio?: string;
  href?: string;
  altText?: string;
}

export default function AdvertisementPlaceholder({
  size = "leaderboard",
  className = "",
  imageUrl,
  videoUrl,
  aspectRatio,
  href,
  altText = "বিজ্ঞাপন",
}: AdProps) {
  // If a video URL is provided, display video ad
  if (videoUrl) {
    const videoAspect = aspectRatio || "aspect-[4/3] min-h-[260px] sm:min-h-[290px] lg:min-h-[310px]";
    const adBody = (
      <div className="w-full overflow-hidden rounded-md border border-[#E2E6EB] shadow-xs bg-black relative group">
        <div className={`relative ${videoAspect} w-full bg-black`}>
          <video
            src={videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover block"
          />
          <div className="absolute top-2.5 right-2.5 bg-black/70 backdrop-blur-xs text-white text-[11px] font-semibold px-2 py-0.5 rounded pointer-events-none">
            {altText}
          </div>
        </div>
      </div>
    );

    return (
      <div className={`w-full flex justify-center items-center ${className}`} aria-label="ভিডিও বিজ্ঞাপন">
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block w-full"
          >
            {adBody}
          </a>
        ) : (
          adBody
        )}
      </div>
    );
  }

  // If an image URL is provided, display the real ad banner
  if (imageUrl) {
    let maxWidthClass = "";
    let heightClass = "";
    if (size === "square") {
      maxWidthClass = "max-w-[280px]";
      heightClass = "max-h-[190px] sm:max-h-[200px]";
    }
    if (size === "medium-rectangle") maxWidthClass = "max-w-[300px]";
    if (size === "sidebar") maxWidthClass = "max-w-[300px]";
    if (size === "banner") maxWidthClass = "max-w-[728px]";

    const adBody = (
      <div className={`w-full ${maxWidthClass} mx-auto`}>
        <div className={`w-full overflow-hidden rounded-md border border-[#E2E6EB] shadow-xs bg-white ${heightClass ? "flex items-center justify-center" : ""}`}>
          <img
            src={imageUrl}
            alt={altText}
            className={`w-full ${heightClass ? `${heightClass} object-cover` : "h-auto object-cover"} block hover:opacity-95 transition-opacity`}
            loading="lazy"
          />
        </div>
      </div>
    );

    return (
      <div className={`my-3 w-full flex justify-center items-center ${className}`} aria-label="বিজ্ঞাপন">
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block w-full"
          >
            {adBody}
          </a>
        ) : (
          adBody
        )}
      </div>
    );
  }

  let dimensions = "h-24 sm:h-28";
  if (size === "medium-rectangle") dimensions = "h-64";
  if (size === "banner") dimensions = "h-32";
  if (size === "sidebar") dimensions = "h-60";
  if (size === "square") dimensions = "h-[190px] sm:h-[210px] w-full max-w-[280px] mx-auto";

  return (
    <div
      className={`my-4 w-full bg-[#f0f3f6] border border-dashed border-[#ccd4dd] rounded p-3 flex flex-col items-center justify-center text-center select-none ${dimensions} ${className}`}
      aria-label="বিজ্ঞাপন স্থান"
    >
      <div className="flex items-center gap-2 mb-1">
        <span className="text-[11px] font-semibold tracking-wider text-[#626B75] bg-[#E2E6EB] px-2 py-0.5 rounded uppercase">
          বিজ্ঞাপন (ডেমো)
        </span>
      </div>
      <p className="text-xs text-[#626B75]">
        এখানে আপনার ব্যবসা বা প্রতিষ্ঠানের বিজ্ঞাপন প্রকাশ করুন
      </p>
      <span className="text-[10px] text-[#0756A4] hover:underline mt-1 cursor-pointer">
        বিজ্ঞাপনের জন্য যোগাযোগ করুন &rarr;
      </span>
    </div>
  );
}
