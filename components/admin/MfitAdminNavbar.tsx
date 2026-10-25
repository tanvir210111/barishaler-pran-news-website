"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, ChevronDown, User, Settings, Contact, HelpCircle, LogOut } from "lucide-react";

interface MfitAdminNavbarProps {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export default function MfitAdminNavbar({
  onToggleSidebar,
  isSidebarOpen,
}: MfitAdminNavbarProps) {
  const [isAdminDropdownOpen, setIsAdminDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAdminDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full h-[60px] bg-white border-b border-[#E8EEF8] flex items-center shadow-2xs">
      {/* Left side: Brand Logo aligned perfectly with sidebar column */}
      <div
        className={`flex items-center px-4 sm:px-6 border-r border-[#E8EEF8] h-full shrink-0 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "w-[270px]" : "w-auto border-r-0 pr-4"
        }`}
      >
        {/* MFIT Brand with colorful emblem */}
        <Link href="/mfit-admin" className="flex items-center gap-2 select-none group">
          <div className="relative w-7 h-7 flex items-center justify-center shrink-0">
            {/* MFIT stylized colorful lens/circle logo */}
            <svg viewBox="0 0 100 100" className="w-6 h-6" fill="none">
              <defs>
                <linearGradient id="mfitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="35%" stopColor="#10B981" />
                  <stop offset="70%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#6366F1" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="42" stroke="url(#mfitGrad)" strokeWidth="12" strokeLinecap="round" />
              <circle cx="50" cy="50" r="16" fill="url(#mfitGrad)" />
            </svg>
          </div>
          <span className="text-[20px] font-black tracking-tight text-[#0A2540]">
            MFIT
          </span>
        </Link>
      </div>

      {/* Main Content Header Area: Hamburger + HOME aligned directly above Dashboard Title */}
      <div className="flex-1 flex items-center justify-between px-4 sm:px-5 lg:px-6 h-full min-w-0">
        {/* Hamburger + HOME Link */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onToggleSidebar}
            aria-label="Toggle Sidebar"
            className="p-1.5 -ml-1.5 rounded-lg text-[#2563EB] hover:bg-[#F4F7FC] transition-colors cursor-pointer"
          >
            <Menu className="w-5 h-5 stroke-[2.2]" />
          </button>

          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-bold text-[#2563EB] hover:text-[#1D4ED8] tracking-wide uppercase transition-colors"
          >
            HOME
          </Link>
        </div>

        {/* Right side: User profile with orange avatar + Admin dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsAdminDropdownOpen((prev) => !prev)}
            className="flex items-center gap-2 p-1 pl-1.5 pr-2 rounded-full hover:bg-[#F4F7FC] transition-colors cursor-pointer select-none"
            aria-expanded={isAdminDropdownOpen}
          >
            {/* Orange circular avatar icon */}
            <div className="w-8 h-8 rounded-full bg-[#FF6B4A] flex items-center justify-center text-white shadow-2xs shrink-0">
              <User className="w-4 h-4 fill-white" />
            </div>
            <span className="text-sm font-bold text-[#2B3674] hidden sm:inline">
              Admin
            </span>
            <ChevronDown
              className={`w-3.5 h-3.5 text-[#2B3674] transition-transform duration-200 ${
                isAdminDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu matching user screenshot */}
          {isAdminDropdownOpen && (
            <div className="absolute right-0 mt-2.5 w-56 bg-white rounded-xl shadow-xl border border-[#E2E8F0] py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
              {/* Little top pointer arrow */}
              <div className="absolute -top-1.5 right-5 w-3 h-3 bg-white border-t border-l border-[#E2E8F0] rotate-45" />

              {/* Header Title: Admin */}
              <div className="py-2.5 text-center border-b border-[#F1F5F9]">
                <h3 className="text-[16px] font-bold text-[#334155]">Admin</h3>
              </div>

              {/* Group 1: Account Settings & Developer */}
              <div className="py-1">
                <Link
                  href="/mfit-admin#account-settings"
                  onClick={() => setIsAdminDropdownOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 text-[14px] text-[#1E293B] hover:bg-[#F8FAFC] transition-colors"
                >
                  <Settings className="w-[18px] h-[18px] text-[#6366F1] stroke-[2]" />
                  <span>Account Settings</span>
                </Link>

                <Link
                  href="/mfit-admin#developer"
                  onClick={() => setIsAdminDropdownOpen(false)}
                  className="flex items-center gap-3 px-4 py-2.5 text-[14px] text-[#1E293B] hover:bg-[#F8FAFC] transition-colors"
                >
                  <Contact className="w-[18px] h-[18px] text-[#4F46E5] stroke-[2]" />
                  <span>Developer</span>
                </Link>
              </div>

              {/* Divider */}
              <div className="border-t border-[#F1F5F9]" />

              {/* Group 2: Need Help? */}
              <div className="py-1">
                <a
                  href="#need-help"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsAdminDropdownOpen(false);
                    alert("সহায়তার জন্য সাপোর্ট টিমে যোগাযোগ করুন।");
                  }}
                  className="flex items-center gap-3 px-4 py-2.5 text-[14px] text-[#1E293B] hover:bg-[#F8FAFC] transition-colors"
                >
                  <HelpCircle className="w-[18px] h-[18px] text-[#0D9488] stroke-[2]" />
                  <span>Need Help?</span>
                </a>
              </div>

              {/* Divider */}
              <div className="border-t border-[#F1F5F9]" />

              {/* Group 3: Sign Out */}
              <div className="py-1">
                <button
                  type="button"
                  onClick={() => {
                    setIsAdminDropdownOpen(false);
                    alert("লগআউট সফল হয়েছে।");
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-[14px] text-[#1E293B] hover:bg-red-50/70 transition-colors text-left cursor-pointer"
                >
                  <LogOut className="w-[18px] h-[18px] text-[#DC2626] stroke-[2]" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
