"use client";

import React from "react";
import { Mail, Phone, CalendarCheck } from "lucide-react";
import { companyInfo } from "@/data/mockData";
import LanguageDropdown from "./LanguageDropdown";

interface TopBarProps {
  onOpenEnquiry?: () => void;
}

export default function TopBar({ onOpenEnquiry }: TopBarProps) {
  return (
    <div className="bg-[#E78031] text-white py-2 px-4 border-b border-black/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Contact Info (Email and Mobile stacked ONE ABOVE THE OTHER) */}
        <div className="flex flex-col gap-1 text-xs">
          {/* Email Row */}
          <a
            href={`mailto:${companyInfo.email}`}
            className="flex items-center gap-2 text-white hover:text-white/85 transition-colors font-medium"
          >
            <Mail className="h-3.5 w-3.5 text-white flex-shrink-0" />
            <span className="truncate">{companyInfo.email}</span>
          </a>

          {/* Mobile Row */}
          <a
            href={`tel:${companyInfo.phone}`}
            className="flex items-center gap-2 text-white hover:text-white/85 transition-colors font-bold"
          >
            <Phone className="h-3.5 w-3.5 text-white flex-shrink-0" />
            <span>{companyInfo.phoneFormatted}</span>
          </a>
        </div>

        {/* Right: 7 Social Media Icons + Plan My Tour + Language Dropdown */}
        <div className="flex items-center gap-3">
          {/* 7 Social Media Icons with live site green background #228B48 */}
          <div className="hidden sm:flex items-center gap-1.5">
            {/* 1. TripAdvisor */}
            <a
              href={companyInfo.socialLinks.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="h-7 w-7 rounded bg-[#228B48] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              title="TripAdvisor"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 576 512">
                <path d="M528.91,178.82,576,127.58H471.66a326.11,326.11,0,0,0-367,0H0l47.09,51.24A143.911,143.911,0,0,0,241.86,390.73L288,440.93l46.11-50.17A143.94,143.94,0,0,0,575.88,285.18h-.03A143.56,143.56,0,0,0,528.91,178.82ZM144.06,382.57a97.39,97.39,0,1,1,97.39-97.39A97.39,97.39,0,0,1,144.06,382.57ZM288,282.37c0-64.09-46.62-119.08-108.09-142.59a281,281,0,0,1,216.17,0C334.61,163.3,288,218.29,288,282.37Zm143.88,100.2h-.01a97.405,97.405,0,1,1,.01,0ZM144.06,234.12h-.01a51.06,51.06,0,1,0,51.06,51.06v-.11A51,51,0,0,0,144.06,234.12Zm287.82,0a51.06,51.06,0,1,0,51.06,51.06A51.06,51.06,0,0,0,431.88,234.12Z" />
              </svg>
            </a>

            {/* 2. Facebook */}
            <a
              href={companyInfo.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="h-7 w-7 rounded bg-[#228B48] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              title="Facebook"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* 3. X / Twitter */}
            <a
              href={companyInfo.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="h-7 w-7 rounded bg-[#228B48] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              title="X (Twitter)"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* 4. YouTube */}
            <a
              href={companyInfo.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="h-7 w-7 rounded bg-[#228B48] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              title="YouTube"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* 5. Instagram */}
            <a
              href={companyInfo.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="h-7 w-7 rounded bg-[#228B48] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              title="Instagram"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* 6. Tumblr */}
            <a
              href={companyInfo.socialLinks.tumblr}
              target="_blank"
              rel="noopener noreferrer"
              className="h-7 w-7 rounded bg-[#228B48] text-white flex items-center justify-center hover:opacity-90 transition-opacity font-bold text-xs"
              title="Tumblr"
            >
              <span className="font-serif lowercase font-bold text-sm leading-none">t</span>
            </a>

            {/* 7. Pinterest */}
            <a
              href={companyInfo.socialLinks.pinterest}
              target="_blank"
              rel="noopener noreferrer"
              className="h-7 w-7 rounded bg-[#228B48] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              title="Pinterest"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.357-.053.225-.175.271-.403.165-1.499-.697-2.435-2.887-2.435-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </a>
          </div>

          {/* Plan My Tour Button (Green #228B48 with white text matching live site) */}
          <button
            onClick={onOpenEnquiry}
            className="flex items-center gap-1.5 bg-[#228B48] hover:bg-[#1b733b] text-white px-3.5 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
          >
            <CalendarCheck className="h-3.5 w-3.5" />
            <span>Plan My Tour</span>
          </button>

          {/* Language Dropdown widget [ 🇺🇸 EN ⌃ ] */}
          <LanguageDropdown />
        </div>
      </div>
    </div>
  );
}
