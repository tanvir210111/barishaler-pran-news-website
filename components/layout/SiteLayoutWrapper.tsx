"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";

export default function SiteLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminRoute =
    pathname?.startsWith("/mfit-admin") || pathname?.startsWith("/admin");

  if (isAdminRoute) {
    return <div className="min-h-screen w-full bg-[#F4F7FC]">{children}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FA] text-[#202124] antialiased">
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4">
        {children}
      </main>
      <Footer />
      <ScrollToTop threshold={250} />
    </div>
  );
}
