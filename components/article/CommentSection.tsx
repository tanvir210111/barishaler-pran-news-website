"use client";

import React, { useState, useEffect } from "react";
import { Comment } from "@/types/news";
import {
  fetchComments,
  getStoredComments,
  saveComment,
  saveReply,
  toggleCommentLike,
  reportComment,
} from "@/services/newsService";
import {
  MessageSquare,
  ThumbsUp,
  CornerDownRight,
  AlertTriangle,
  Send,
  User,
  CheckCircle2,
} from "lucide-react";

interface CommentSectionProps {
  articleId: string;
}

export default function CommentSection({ articleId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [authorName, setAuthorName] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const [content, setContent] = useState("");
  const [replyingToId, setReplyingToId] = useState<string | null>(null);
  const [replyName, setReplyName] = useState("");
  const [replyContent, setReplyContent] = useState("");

  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    let isMounted = true;
    fetchComments(articleId).then((data) => {
      if (isMounted) setComments(data);
    });
    return () => {
      isMounted = false;
    };
  }, [articleId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    setSuccessMessage("");

    if (!authorName.trim()) {
      setFormError("অনুগ্রহ করে আপনার নাম লিখুন।");
      return;
    }
    if (!content.trim()) {
      setFormError("অনুগ্রহ করে আপনার মন্তব্য লিখুন।");
      return;
    }
    if (content.trim().length < 5) {
      setFormError("মন্তব্য অন্তত ৫ অক্ষরের হতে হবে।");
      return;
    }

    saveComment(articleId, {
      articleId,
      authorName: authorName.trim(),
      authorEmail: authorEmail.trim() || undefined,
      content: content.trim(),
    }).then((newComment) => {
      setComments((prev) => [newComment, ...prev]);
      setContent("");
      setSuccessMessage("আপনার মন্তব্য সফলভাবে প্রকাশিত হয়েছে।");
      setTimeout(() => setSuccessMessage(""), 4000);
    });
  };

  const handleReplySubmit = (parentId: string, e: React.FormEvent) => {
    e.preventDefault();
    if (!replyName.trim() || !replyContent.trim()) {
      alert("অনুগ্রহ করে নাম এবং উত্তর লিখুন।");
      return;
    }

    saveReply(articleId, parentId, replyName.trim(), replyContent.trim()).then((reply) => {
      if (reply) {
        setComments(getStoredComments(articleId));
        setReplyingToId(null);
        setReplyName("");
        setReplyContent("");
      }
    });
  };

  const handleLike = async (commentId: string) => {
    await toggleCommentLike(articleId, commentId);
    setComments(getStoredComments(articleId));
  };

  const handleReport = (commentId: string) => {
    const confirmReport = window.confirm("আপনি কি নিশ্চিত এই মন্তব্যটির বিরুদ্ধে রিপোর্ট করতে চান?");
    if (confirmReport) {
      reportComment(articleId, commentId);
      setComments(getStoredComments(articleId));
      alert("ধন্যবাদ, মন্তব্যটি পর্যালোচনা দলের নিকট প্রেরণ করা হয়েছে।");
    }
  };

  const maxChars = 500;

  return (
    <section className="comment-section-wrapper bg-white rounded-lg border border-[#E2E6EB] p-4 sm:p-6 my-8 shadow-xs">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#E2E6EB] pb-3 mb-6">
        <h3 className="text-xl font-bold text-[#0756A4] flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-[#087A43]" />
          <span>পাঠকের মন্তব্য</span>
          <span className="text-xs bg-[#EAF2FB] text-[#0756A4] px-2 py-0.5 rounded-full font-semibold">
            {comments.length}
          </span>
        </h3>
        <span className="text-xs text-[#626B75] hidden sm:inline">
          শালীন ও প্রাসঙ্গিক মন্তব্য প্রত্যাশিত
        </span>
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="bg-[#F8F9FA] border border-[#E2E6EB] p-4 rounded-lg mb-8">
        <h4 className="text-sm font-bold text-[#202124] mb-3">আপনার মতামত জানান:</h4>

        {formError && (
          <div className="mb-3 text-xs bg-red-50 text-red-700 border border-red-200 px-3 py-2 rounded">
            {formError}
          </div>
        )}

        {successMessage && (
          <div className="mb-3 text-xs bg-green-50 text-green-700 border border-green-200 px-3 py-2 rounded flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span>{successMessage}</span>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
          <div>
            <label className="block text-xs font-semibold text-[#202124] mb-1">
              নাম <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              placeholder="আপনার পুরো নাম"
              className="w-full px-3 py-1.5 text-sm bg-white border border-[#CCD4DD] rounded focus:ring-1 focus:ring-[#0756A4] focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#202124] mb-1">
              ইমেইল <span className="text-gray-400 font-normal">(ঐচ্ছিক, প্রকাশ করা হবে না)</span>
            </label>
            <input
              type="email"
              value={authorEmail}
              onChange={(e) => setAuthorEmail(e.target.value)}
              placeholder="example@mail.com"
              className="w-full px-3 py-1.5 text-sm bg-white border border-[#CCD4DD] rounded focus:ring-1 focus:ring-[#0756A4] focus:outline-none"
            />
          </div>
        </div>

        <div className="mb-2">
          <label className="block text-xs font-semibold text-[#202124] mb-1">
            মন্তব্য <span className="text-red-500">*</span>
          </label>
          <textarea
            rows={3}
            maxLength={maxChars}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="আপনার সুচিন্তিত মন্তব্য লিখুন..."
            className="w-full px-3 py-2 text-sm bg-white border border-[#CCD4DD] rounded focus:ring-1 focus:ring-[#0756A4] focus:outline-none resize-none"
            required
          />
          <div className="flex justify-between items-center text-[11px] text-gray-500 mt-1">
            <span>কমিউনিটি নির্দেশিকা মেনে চলুন।</span>
            <span>
              {content.length}/{maxChars}
            </span>
          </div>
        </div>

        <button
          type="submit"
          className="mt-2 bg-[#0756A4] hover:bg-[#05407c] text-white text-sm font-semibold px-5 py-2 rounded-md transition-colors flex items-center gap-1.5"
        >
          <Send className="w-3.5 h-3.5" />
          <span>মন্তব্য প্রকাশ করুন</span>
        </button>
      </form>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <div className="text-center py-8 text-[#626B75] bg-[#F5F7FA] rounded-md border border-dashed border-[#CCD4DD]">
            <MessageSquare className="w-8 h-8 mx-auto text-gray-400 mb-2" />
            <p className="text-sm font-medium">এখনো কোনো মন্তব্য করা হয়নি।</p>
            <p className="text-xs text-gray-400 mt-1">প্রথম মন্তব্যটি আপনিই করুন!</p>
          </div>
        ) : (
          comments.slice(0, visibleCount).map((c) => (
            <div
              key={c.id}
              className={`p-3 sm:p-4 rounded-lg border transition-colors ${
                c.isReported ? "bg-red-50/50 border-red-200" : "bg-[#F8F9FA] border-[#E2E6EB]"
              }`}
            >
              {/* Comment Header */}
              <div className="flex items-center justify-between text-xs mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#0756A4] text-white flex items-center justify-center font-bold text-xs">
                    {c.authorName.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-[#202124] text-sm">{c.authorName}</h5>
                    <span className="text-[11px] text-gray-400">{c.createdAt}</span>
                  </div>
                </div>

                {c.isReported ? (
                  <span className="text-[11px] text-red-600 bg-red-100 px-2 py-0.5 rounded font-medium">
                    রিপোর্ট করা হয়েছে
                  </span>
                ) : (
                  <button
                    onClick={() => handleReport(c.id)}
                    className="text-gray-400 hover:text-red-500 text-[11px] flex items-center gap-0.5"
                    title="মন্তব্য রিপোর্ট করুন"
                  >
                    <AlertTriangle className="w-3 h-3" />
                    <span>রিপোর্ট</span>
                  </button>
                )}
              </div>

              {/* Text */}
              <p className="text-sm text-[#202124] leading-relaxed my-2 pl-9">
                {c.content}
              </p>

              {/* Actions */}
              <div className="flex items-center gap-4 text-xs text-[#626B75] pl-9 pt-1 border-t border-gray-200/60">
                <button
                  onClick={() => handleLike(c.id)}
                  className="flex items-center gap-1 hover:text-[#0756A4] transition-colors"
                >
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span>পছন্দ ({c.likes || 0})</span>
                </button>

                <button
                  onClick={() => setReplyingToId(replyingToId === c.id ? null : c.id)}
                  className="flex items-center gap-1 hover:text-[#087A43] transition-colors font-medium"
                >
                  <CornerDownRight className="w-3.5 h-3.5" />
                  <span>উত্তর দিন</span>
                </button>
              </div>

              {/* Reply Form */}
              {replyingToId === c.id && (
                <form
                  onSubmit={(e) => handleReplySubmit(c.id, e)}
                  className="mt-3 ml-9 p-3 bg-white border border-[#CCD4DD] rounded-md"
                >
                  <h6 className="text-xs font-bold text-[#202124] mb-2">
                    {c.authorName}-এর মন্তব্যের উত্তর লিখুন:
                  </h6>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                    <input
                      type="text"
                      placeholder="আপনার নাম"
                      value={replyName}
                      onChange={(e) => setReplyName(e.target.value)}
                      className="px-2 py-1 text-xs border rounded"
                      required
                    />
                  </div>
                  <textarea
                    rows={2}
                    placeholder="আপনার উত্তর..."
                    value={replyContent}
                    onChange={(e) => setReplyContent(e.target.value)}
                    className="w-full px-2 py-1 text-xs border rounded mb-2 resize-none"
                    required
                  />
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      className="bg-[#087A43] hover:bg-[#065f34] text-white text-xs px-3 py-1 rounded font-semibold"
                    >
                      উত্তর দিন
                    </button>
                    <button
                      type="button"
                      onClick={() => setReplyingToId(null)}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs px-3 py-1 rounded"
                    >
                      বাতিল
                    </button>
                  </div>
                </form>
              )}

              {/* Nested Replies */}
              {c.replies && c.replies.length > 0 && (
                <div className="mt-3 ml-9 pl-3 border-l-2 border-[#0756A4]/30 space-y-2">
                  {c.replies.map((reply) => (
                    <div key={reply.id} className="bg-white p-2.5 rounded border border-gray-100 text-xs">
                      <div className="flex items-center justify-between font-semibold text-[#202124] mb-1">
                        <span>{reply.authorName}</span>
                        <span className="text-[10px] text-gray-400 font-normal">{reply.createdAt}</span>
                      </div>
                      <p className="text-gray-700">{reply.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}

        {/* Load More Comments */}
        {comments.length > visibleCount && (
          <div className="text-center pt-3">
            <button
              onClick={() => setVisibleCount((prev) => prev + 5)}
              className="text-xs font-semibold text-[#0756A4] bg-[#EAF2FB] hover:bg-[#d5e7f9] px-4 py-2 rounded-md transition-colors"
            >
              আরও মন্তব্য দেখুন ({comments.length - visibleCount}টি বাকি)
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
