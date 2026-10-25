import type { Metadata } from "next";
import { Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";

const notoSansBengali = Noto_Sans_Bengali({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["bengali", "latin"],
  variable: "--font-bengali",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | বরিশালের প্রাণ",
    default: "বরিশালের প্রাণ (Barishaler Pran) | সত্যের সঙ্গে, মানুষের পাশে",
  },
  description: "বরিশালের প্রাণ - বাংলাদেশের শীর্ষস্থানীয় নিরপেক্ষ অনলাইন সংবাদমাধ্যম। জাতীয়, রাজনীতি, আন্তর্জাতিক, অর্থনীতি, খেলাধুলা, বিনোদন ও প্রযুক্তির সর্বশেষ খবর।",
  keywords: ["বরিশালের প্রাণ", "Barishaler Pran", "Bangla News", "Bengali Newspaper", "Bangladesh News", "অনলাইন পত্রিকা"],
  authors: [{ name: "বরিশালের প্রাণ সম্পাদকীয় দল" }],
  openGraph: {
    title: "বরিশালের প্রাণ | সত্যের সঙ্গে, মানুষের পাশে",
    description: "বিশ্বস্ত ও বস্তুনিষ্ঠ সংবাদের নির্ভরযোগ্য ঠিকানা।",
    type: "website",
    locale: "bn_BD",
    siteName: "বরিশালের প্রাণ",
  },
};

import SiteLayoutWrapper from "@/components/layout/SiteLayoutWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className={`${notoSansBengali.variable} font-sans`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preload" href="/fonts/solaimanlipi-bold-v1.0.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/solaimanlipi-normal-v1.0.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <SiteLayoutWrapper>{children}</SiteLayoutWrapper>
      </body>
    </html>
  );
}
