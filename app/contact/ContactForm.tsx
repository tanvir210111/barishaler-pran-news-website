"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMsg, setStatusMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setStatusMsg("অনুগ্রহ করে তারকাচিহ্নিত (*) সকল ঘর সঠিকভাবে পূরণ করুন।");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setStatus("error");
      setStatusMsg("একটি বৈধ ইমেইল ঠিকানা প্রদান করুন।");
      return;
    }

    setStatus("success");
    setStatusMsg("ধন্যবাদ! আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে। আমাদের প্রতিনিধি শীঘ্রই আপনার সাথে যোগাযোগ করবেন।");

    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-[#E2E6EB] p-5 sm:p-6 shadow-xs">
      <h3 className="text-lg font-bold text-[#0756A4] mb-4 border-b pb-2">
        আমাদের সরাসরি বার্তা পাঠান
      </h3>

      {status === "success" && (
        <div className="mb-4 text-xs sm:text-sm bg-green-50 text-green-700 border border-green-200 p-3 rounded-md flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
          <span>{statusMsg}</span>
        </div>
      )}

      {status === "error" && (
        <div className="mb-4 text-xs sm:text-sm bg-red-50 text-red-700 border border-red-200 p-3 rounded-md flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0" />
          <span>{statusMsg}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
        <div>
          <label className="block text-xs font-semibold text-[#202124] mb-1">
            আপনার নাম <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="পুরো নাম লিখুন"
            className="w-full px-3 py-2 text-sm bg-[#f8f9fa] border border-[#CCD4DD] rounded focus:bg-white focus:ring-1 focus:ring-[#0756A4] focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#202124] mb-1">
            ইমেইল ঠিকানা <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
            className="w-full px-3 py-2 text-sm bg-[#f8f9fa] border border-[#CCD4DD] rounded focus:bg-white focus:ring-1 focus:ring-[#0756A4] focus:outline-none"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
        <div>
          <label className="block text-xs font-semibold text-[#202124] mb-1">
            মোবাইল নম্বর <span className="text-gray-400 font-normal">(ঐচ্ছিক)</span>
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="০১৭xxxxxxxx"
            className="w-full px-3 py-2 text-sm bg-[#f8f9fa] border border-[#CCD4DD] rounded focus:bg-white focus:ring-1 focus:ring-[#0756A4] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#202124] mb-1">
            বিষয়
          </label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-3 py-2 text-sm bg-[#f8f9fa] border border-[#CCD4DD] rounded focus:bg-white focus:ring-1 focus:ring-[#0756A4] focus:outline-none"
          >
            <option value="">বিষয় নির্বাচন করুন</option>
            <option value="news">সংবাদের তথ্য বা টিপস</option>
            <option value="ad">বিজ্ঞাপন সংক্রান্ত</option>
            <option value="opinion">মতামত ও প্রতিক্রিয়া</option>
            <option value="complaint">সংশোধনী বা অভিযোগ</option>
            <option value="other">অন্যান্য</option>
          </select>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-xs font-semibold text-[#202124] mb-1">
          আপনার বার্তা বা সংবাদ বিবরণ <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="বিস্তারিত লিখুন..."
          className="w-full px-3 py-2 text-sm bg-[#f8f9fa] border border-[#CCD4DD] rounded focus:bg-white focus:ring-1 focus:ring-[#0756A4] focus:outline-none resize-none"
          required
        />
        <span className="text-[11px] text-gray-500">
          * আপনার তথ্য আমাদের সম্পাদকীয় বিভাগে নিরাপদে সংরক্ষিত থাকবে।
        </span>
      </div>

      <button
        type="submit"
        className="bg-[#0756A4] hover:bg-[#05407c] text-white font-semibold px-6 py-2.5 rounded-md text-sm transition-colors flex items-center gap-2 shadow-xs"
      >
        <Send className="w-4 h-4" />
        <span>বার্তা পাঠান</span>
      </button>
    </form>
  );
}
