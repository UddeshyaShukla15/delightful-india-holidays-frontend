"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export const supportedLanguages: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "ar", name: "Arabic", flag: "🇸🇦" },
  { code: "zh-CN", name: "Chinese", flag: "🇨🇳" },
  { code: "hr", name: "Croatian", flag: "🇭🇷" },
  { code: "cs", name: "Czech", flag: "🇨🇿" },
  { code: "da", name: "Danish", flag: "🇩🇰" },
  { code: "nl", name: "Dutch", flag: "🇳🇱" },
  { code: "et", name: "Estonian", flag: "🇪🇪" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "de", name: "German", flag: "🇩🇪" },
  { code: "el", name: "Greek", flag: "🇬🇷" },
  { code: "hu", name: "Hungarian", flag: "🇭🇺" },
  { code: "it", name: "Italian", flag: "🇮🇹" },
  { code: "ja", name: "Japanese", flag: "🇯🇵" },
  { code: "ko", name: "Korean", flag: "🇰🇷" },
  { code: "la", name: "Latin", flag: "🇻🇦" },
  { code: "lv", name: "Latvian", flag: "🇱🇻" },
  { code: "no", name: "Norwegian", flag: "🇳🇴" },
  { code: "pl", name: "Polish", flag: "🇵🇱" },
  { code: "pt", name: "Portuguese", flag: "🇵🇹" },
  { code: "ro", name: "Romanian", flag: "🇷🇴" },
  { code: "ru", name: "Russian", flag: "🇷🇺" },
  { code: "sr", name: "Serbian", flag: "🇷🇸" },
  { code: "sl", name: "Slovenian", flag: "🇸🇮" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  { code: "th", name: "Thai", flag: "🇹🇭" },
  { code: "tr", name: "Turkish", flag: "🇹🇷" },
];

interface LanguageDropdownProps {
  floating?: boolean;
}

export default function LanguageDropdown({ floating = false }: LanguageDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<Language>(supportedLanguages[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (lang: Language) => {
    setSelectedLang(lang);
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className={`relative inline-block text-left z-50 ${
        floating ? "fixed top-3 right-4 shadow-xl" : ""
      }`}
    >
      {/* Trigger Button: [ 🇺🇸 EN ⌃ ] */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 rounded bg-white px-3.5 py-1.5 text-[14px] sm:text-[15px] font-bold text-gray-800 shadow-sm border border-gray-200 hover:bg-gray-50 transition-all cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-base leading-none">{selectedLang.flag}</span>
        <span className="uppercase tracking-wider font-extrabold">{selectedLang.code.slice(0, 2)}</span>
        {isOpen ? (
          <ChevronUp className="h-4 w-4 text-gray-600" />
        ) : (
          <ChevronDown className="h-4 w-4 text-gray-600" />
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 top-full mt-1.5 w-52 rounded-xl bg-white shadow-2xl border border-gray-200 py-2 z-50 animate-in fade-in duration-150"
        >
          <div className="px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-gray-400 border-b border-gray-100">
            Select Language ({supportedLanguages.length})
          </div>
          <div className="max-h-64 overflow-y-auto py-1">
            {supportedLanguages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang)}
                className={`flex w-full items-center gap-2.5 px-3.5 py-2 text-left text-[13.5px] sm:text-[14px] transition-colors ${
                  selectedLang.code === lang.code
                    ? "bg-[#E78031]/10 text-[#E78031] font-bold"
                    : "text-gray-700 hover:bg-gray-50 hover:text-black font-medium"
                }`}
              >
                <span className="text-base leading-none">{lang.flag}</span>
                <span>{lang.name}</span>
                {selectedLang.code === lang.code && (
                  <span className="ml-auto text-xs text-[#E78031] font-bold">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
