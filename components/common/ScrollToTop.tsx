"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

interface ScrollToTopProps {
  threshold?: number;
  className?: string;
}

export default function ScrollToTop({
  threshold = 60,
  className = "bg-[#3858F6] hover:bg-[#2563EB]",
}: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const isScrolledDown = scrollPos > threshold;
      const isNearBottom =
        scrollPos > 20 &&
        typeof document !== "undefined" &&
        window.innerHeight + scrollPos >=
          document.documentElement.scrollHeight - 80;

      if (isScrolledDown || isNearBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 w-9 h-9 sm:w-10 sm:h-10 rounded bg-[#3858F6] hover:bg-[#2563EB] text-white flex items-center justify-center shadow-[0_4px_14px_rgba(37,99,235,0.35)] transition-all duration-300 ease-in-out cursor-pointer z-50 hover:scale-105 active:scale-95 ${className} ${
        isVisible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-4 scale-90 pointer-events-none"
      }`}
      title="উপরে যান"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
    </button>
  );
}
