"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import MfitAdminNavbar from "@/components/admin/MfitAdminNavbar";
import MfitAdminSidebar from "@/components/admin/MfitAdminSidebar";

import { saveMediaItem } from "@/services/mediaService";

interface UploadedFileItem {
  id: string;
  name: string;
  status: string;
  progress: number;
}

export default function AddMediaPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Uploaded files list starts empty; only appears after selecting/uploading files
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFileItem[]>([]);

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    Array.from(files).forEach((file, index) => {
      const newFileId = `upload-${Date.now()}-${index}`;
      const newFileItem: UploadedFileItem = {
        id: newFileId,
        name: file.name,
        status: "Uploading...",
        progress: 15,
      };

      setUploadedFiles((prev) => [newFileItem, ...prev]);

      // Read file and save to media storage so it appears in All Media immediately
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;

        const img = new Image();
        img.onload = () => {
          const formattedDate = new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          });

          saveMediaItem({
            id: newFileId,
            title: file.name.replace(/\.[^/.]+$/, ""),
            fileName: file.name,
            uploadedOn: formattedDate,
            uploadedBy: "Admin",
            fileType: file.type.startsWith("image") ? "Image file" : file.type || "File",
            fileSize: `${(file.size / 1024).toFixed(2)} KB`,
            dimensions: `${img.naturalWidth} by ${img.naturalHeight}pixels`,
            url: dataUrl,
            thumbnailUrl: dataUrl,
          });
        };

        img.onerror = () => {
          saveMediaItem({
            id: newFileId,
            title: file.name.replace(/\.[^/.]+$/, ""),
            fileName: file.name,
            uploadedOn: "October 19, 2026",
            uploadedBy: "Admin",
            fileType: file.type.startsWith("image") ? "Image file" : file.type || "File",
            fileSize: `${(file.size / 1024).toFixed(2)} KB`,
            dimensions: "1920 by 1080pixels",
            url: dataUrl,
            thumbnailUrl: dataUrl,
          });
        };

        img.src = dataUrl;
      };
      reader.readAsDataURL(file);

      setTimeout(() => {
        setUploadedFiles((prev) =>
          prev.map((item) =>
            item.id === newFileId ? { ...item, progress: 55 } : item
          )
        );
      }, 300);

      setTimeout(() => {
        setUploadedFiles((prev) =>
          prev.map((item) =>
            item.id === newFileId ? { ...item, progress: 85 } : item
          )
        );
      }, 650);

      setTimeout(() => {
        setUploadedFiles((prev) =>
          prev.map((item) =>
            item.id === newFileId
              ? { ...item, progress: 100, status: "Upload Complete" }
              : item
          )
        );
      }, 950);
    });

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  return (
    <div className="min-h-screen bg-[#F0F4FA] text-[#1E293B] flex flex-col font-sans">
      {/* Top Navbar */}
      <MfitAdminNavbar
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        isSidebarOpen={isSidebarOpen}
      />

      {/* Main Container */}
      <div className="flex-1 flex">
        {/* Left Sidebar */}
        <MfitAdminSidebar isOpen={isSidebarOpen} activePath="/mfit-admin/add-media" />

        {/* Add Media Content matching Screenshot 1 100% */}
        <main className="flex-1 w-full p-4 sm:px-5 sm:py-4 lg:px-6 lg:py-5 min-w-0 flex flex-col justify-between">
          <div>
            {/* Top Row: Title + Return to Media Library Button */}
            <div className="flex items-center justify-between mb-5">
              <h1 className="text-[22px] sm:text-[24px] font-bold text-[#0A2540] tracking-tight">
                Add Media
              </h1>

              <Link
                href="/mfit-admin/media"
                className="bg-[#1677FF] hover:bg-blue-600 text-white text-[13px] font-medium px-3.5 py-1.5 rounded-md flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
              >
                <ArrowLeft className="w-4 h-4 stroke-[2.2]" />
                <span>Media Library</span>
              </Link>
            </div>

            {/* Drag and Drop Upload Box - Compact, Flatter & Always Visible */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`bg-white rounded-md border-2 border-dashed transition-all py-8 sm:py-10 px-6 sm:px-12 flex flex-col items-center justify-center text-center shadow-xs ${
                isDragging
                  ? "border-[#1677FF] bg-blue-50/40"
                  : "border-[#CBD5E1] hover:border-[#94A3B8]"
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*,video/*,application/pdf"
                className="hidden"
                onChange={(e) => handleFiles(e.target.files)}
              />

              <div className="flex flex-col items-center gap-2 max-w-md">
                <h2 className="text-[20px] sm:text-[22px] font-semibold text-[#475569]">
                  Drop files to upload
                </h2>

                <span className="text-xs text-[#94A3B8] font-normal my-0.5">
                  or
                </span>

                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="border border-[#1677FF] text-[#1677FF] hover:bg-blue-50 transition-colors px-4 py-1.5 rounded-sm text-xs font-semibold cursor-pointer"
                >
                  Select Files
                </button>

                <p className="text-[12px] text-[#64748B] mt-1.5">
                  Maximum upload file size: 3 MB.
                </p>
              </div>
            </div>

            {/* Uploaded File Progress Status List matching user screenshot */}
            {uploadedFiles.length > 0 && (
              <div className="mt-4 space-y-3">
                {uploadedFiles.map((file) => (
                  <div
                    key={file.id}
                    className="relative bg-white rounded border border-[#E2E8F0] shadow-2xs p-3 sm:p-3.5 overflow-hidden flex flex-col gap-2"
                  >
                    {/* Left vertical blue accent pill */}
                    <span className="absolute left-0 top-0 bottom-0 w-1 sm:w-1.5 bg-[#1677FF]" />

                    {/* File name & Status */}
                    <div className="pl-2 sm:pl-2.5 text-[13px] sm:text-[13.5px] leading-tight truncate">
                      <span className="font-bold text-[#0A2540]">
                        {file.name}
                      </span>
                      {" - "}
                      <span
                        className={`font-medium ${
                          file.progress === 100
                            ? "text-[#15803D]"
                            : "text-[#2563EB]"
                        }`}
                      >
                        {file.status}
                      </span>
                    </div>

                    {/* Progress Bar with centered 100% label */}
                    <div className="pl-2 sm:pl-2.5">
                      <div className="w-full bg-[#E2E8F0] rounded-xs h-4 overflow-hidden">
                        <div
                          className="bg-[#15803D] h-full flex items-center justify-center text-[10.5px] font-bold text-white transition-all duration-300 select-none"
                          style={{ width: `${file.progress}%` }}
                        >
                          {file.progress}%
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-10 mb-4 pb-2 text-center text-xs font-semibold text-[#8A99AD]">
            Powered by{" "}
            <a
              href="https://bait.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3858F6] hover:underline"
            >
              bait.com
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
