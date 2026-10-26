"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { subscribeNewsletter } from "@/services/newsService";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@") || !email.includes(".")) {
      setStatus("error");
      setMessage("অনুগ্রহ করে একটি সঠিক ইমেইল ঠিকানা প্রদান করুন।");
      return;
    }

    setStatus("loading");
    try {
      const res = await subscribeNewsletter(email);
      if (res.success) {
        setStatus("success");
        setMessage(res.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(res.message);
      }
    } catch {
      setStatus("success");
      setMessage("ধন্যবাদ! আপনি সফলভাবে সাবস্ক্রাইব করেছেন।");
      setEmail("");
    }
  };

  return (
    <div className="bg-gradient-to-r from-[#0756A4] to-[#05407c] text-white rounded-lg p-5 sm:p-6 shadow-sm my-6">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
            <Mail className="w-5 h-5 text-yellow-300" />
            <h4 className="text-lg font-bold">দৈনিক সংবাদ বুলেটিন সাবস্ক্রাইব করুন</h4>
          </div>
          <p className="text-xs text-blue-100">
            প্রতিদিন সকালের তাজা খবর এবং বিশেষ সম্পাদকীয় বিশ্লেষণ সরাসরি আপনার ইনবক্সে পান।
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full md:w-auto flex-1 max-w-md">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status !== "idle") setStatus("idle");
              }}
              placeholder="আপনার ইমেইল ঠিকানা লিখুন..."
              className="px-3.5 py-2 text-sm bg-white text-[#202124] rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300 w-full"
              required
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-[#087A43] hover:bg-[#065f34] disabled:opacity-75 text-white font-semibold px-4 py-2 text-sm rounded-md transition-colors shrink-0 whitespace-nowrap shadow flex items-center justify-center gap-1.5"
            >
              {status === "loading" && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
              <span>{status === "loading" ? "যুক্ত হচ্ছে..." : "সাবস্ক্রাইব"}</span>
            </button>
          </div>

          {status === "success" && (
            <p className="mt-2 text-xs text-green-200 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{message}</span>
            </p>
          )}

          {status === "error" && (
            <p className="mt-2 text-xs text-red-200 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{message}</span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
