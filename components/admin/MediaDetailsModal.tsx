"use client";

import React, { useState } from "react";
import { X, Trash2, ArrowRight, Check, Link as LinkIcon, ExternalLink } from "lucide-react";

export interface MediaItem {
  id: string;
  title: string;
  fileName: string;
  uploadedOn: string;
  uploadedBy: string;
  fileType: string;
  fileSize: string;
  dimensions: string;
  url: string;
  thumbnailUrl?: string;
  isPlaceholder?: boolean;
}

interface MediaDetailsModalProps {
  media: MediaItem | null;
  onClose: () => void;
  onDelete?: (id: string) => void;
}

export default function MediaDetailsModal({
  media,
  onClose,
  onDelete,
}: MediaDetailsModalProps) {
  const [copied, setCopied] = useState(false);

  if (!media) return null;

  const handleCopyLink = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(media.url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
      {/* Click outside backdrop to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-5xl bg-white rounded-xl shadow-2xl border border-[#E2E8F0] overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2E8F0] bg-white">
          <h2 className="text-[20px] font-bold text-[#0A2540] tracking-tight">
            Media details
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#94A3B8] hover:text-[#0A2540] rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 stroke-[2.2]" />
          </button>
        </div>

        {/* Modal Body: 2 Columns */}
        <div className="p-6 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Left Preview Box (7 cols) */}
            <div className="md:col-span-7 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg p-3 min-h-[340px] max-h-[500px] flex items-center justify-center overflow-hidden">
              {media.isPlaceholder ? (
                <div className="w-full h-64 flex flex-col items-center justify-center text-center p-6 bg-white border border-[#CBD5E1] rounded">
                  <span className="text-sm font-mono text-[#64748B] break-all max-w-[260px]">
                    {media.fileName}
                  </span>
                </div>
              ) : (
                <img
                  src={media.thumbnailUrl || media.url}
                  alt={media.fileName}
                  className="w-full h-auto max-h-[460px] object-contain rounded shadow-xs"
                />
              )}
            </div>

            {/* Right Details Panel (5 cols) */}
            <div className="md:col-span-5 flex flex-col justify-between space-y-5 text-sm">
              {/* Metadata Details */}
              <div className="space-y-3.5 text-[#1E293B]">
                <div>
                  <span className="font-bold text-[15px] text-[#0A2540]">Uploaded on: </span>
                  <span className="text-[14.5px] text-[#334155]">{media.uploadedOn}</span>
                </div>

                <div>
                  <span className="font-bold text-[15px] text-[#0A2540]">Uploaded by: </span>
                  <span className="text-[14.5px] text-[#334155]">{media.uploadedBy}</span>
                </div>

                <div>
                  <span className="font-bold text-[15px] text-[#0A2540]">File name: </span>
                  <span className="text-[13.5px] font-normal text-[#334155] break-all">
                    {media.fileName}
                  </span>
                </div>

                <div>
                  <span className="font-bold text-[15px] text-[#0A2540]">File type: </span>
                  <span className="text-[14.5px] text-[#334155]">{media.fileType}</span>
                </div>

                <div>
                  <span className="font-bold text-[15px] text-[#0A2540]">File size: </span>
                  <span className="text-[14.5px] text-[#334155]">{media.fileSize}</span>
                </div>

                <div>
                  <span className="font-bold text-[15px] text-[#0A2540]">Dimensions: </span>
                  <span className="text-[14.5px] text-[#334155]">{media.dimensions}</span>
                </div>
              </div>

              {/* Copy Link Row matching screenshot */}
              <div className="pt-2">
                <div className="flex items-stretch border border-[#059669] rounded-md overflow-hidden shadow-xs">
                  <input
                    type="text"
                    readOnly
                    value={media.url}
                    className="flex-1 px-3 py-2 text-xs text-[#334155] bg-white border-0 outline-none select-all truncate font-mono"
                  />
                  <button
                    type="button"
                    onClick={handleCopyLink}
                    className="bg-[#059669] hover:bg-[#047857] text-white px-3.5 py-2 text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <LinkIcon className="w-3.5 h-3.5" />
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Action Buttons: Delete Media (Red) & View Media (Blue) */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    if (onDelete) onDelete(media.id);
                    onClose();
                  }}
                  className="bg-[#DC2626] hover:bg-red-700 text-white font-semibold text-xs py-2.5 px-4 rounded-md flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Delete Media</span>
                </button>

                <a
                  href={media.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1677FF] hover:bg-blue-600 text-white font-semibold text-xs py-2.5 px-4 rounded-md flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs text-center"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>View Media</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
