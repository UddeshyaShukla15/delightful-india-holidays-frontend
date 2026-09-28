"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronUp, ChevronDown, Globe } from "lucide-react";

export interface Language {
  code: string;
  name: string;
  flag: string;
}

export const supportedLanguages: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "zh-CN", name: "中文", flag: "🇨🇳" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
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
        floating ? "fixed top-4 right-4 shadow-xl" : ""
      }`}
    >
      {/* Trigger Button Matching Screenshot: [ 🇺🇸 EN ⌃ ] */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 rounded-lg bg-white/95 px-3 py-1.5 text-xs font-bold text-gray-800 shadow-md border border-gray-200 hover:bg-white transition-all cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="text-base leading-none">{selectedLang.flag}</span>
        <span className="uppercase tracking-wider font-extrabold">{selectedLang.code.slice(0, 2)}</span>
        {isOpen ? (
          <ChevronUp className="h-3.5 w-3.5 text-gray-500" />
        ) : (
          <ChevronDown className="h-3.5 w-3.5 text-gray-500" />
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className={`absolute right-0 w-44 rounded-xl bg-white shadow-2xl border border-gray-200 py-1.5 z-50 animate-in fade-in duration-150 ${
            floating ? "top-full mt-2" : "top-full mt-1.5"
          }`}
        >
          <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-400 border-b border-gray-100">
            Select Language
          </div>
          <div className="max-h-60 overflow-y-auto py-1">
            {supportedLanguages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleSelect(lang)}
                className={`flex w-full items-center gap-2.5 px-3 py-2 text-left text-xs font-medium transition-colors ${
                  selectedLang.code === lang.code
                    ? "bg-[#E78031]/10 text-[#E78031] font-bold"
                    : "text-gray-700 hover:bg-gray-50 hover:text-black"
                }`}
              >
                <span className="text-base leading-none">{lang.flag}</span>
                <span>{lang.name}</span>
                {selectedLang.code === lang.code && (
                  <span className="ml-auto text-xs text-[#E78031]">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
