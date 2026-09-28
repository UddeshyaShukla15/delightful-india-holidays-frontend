"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Phone, Mail } from "lucide-react";
import { companyInfo } from "@/data/mockData";

interface NavbarProps {
  onOpenEnquiry?: () => void;
}

export default function Navbar({ onOpenEnquiry }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm border-b border-gray-100 transition-all font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0" onClick={closeMobileMenu}>
            <div className="relative h-14 w-48 sm:w-56">
              <Image
                src="/assets/images/DIH-1.webp"
                alt="Delightful India Holidays Logo"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 180px, 240px"
              />
            </div>
          </Link>

          {/* Desktop Navigation - 7 Items:
              Bold form, NOT ALL-CAPS (only first letter of words capitalized):
              1. Home
              2. Day Tours
              3. Tours (Golden Triangle Tours, Rajasthan Tours, India Tours)
              4. Luxury India
              5. Custom Tours
              6. Car & Driver Hire
              7. Get In Touch
          */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {/* 1. Home */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("home")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/"
                className={`flex items-center gap-1.5 text-base font-bold py-2 transition-colors ${
                  pathname === "/" ? "text-[#E78031]" : "text-gray-900 hover:text-[#E78031]"
                }`}
              >
                <span>Home</span>
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180 text-gray-500 group-hover:text-[#E78031]" />
              </Link>
              <div className="absolute top-full left-0 w-52 bg-white shadow-xl rounded-b-xl border border-gray-100 py-1.5 hidden group-hover:block transition-all animate-in fade-in slide-in-from-top-1 z-50">
                <Link
                  href="/about"
                  className="block px-4 py-2.5 text-sm font-normal text-gray-800 hover:bg-[#E78031] hover:text-white transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2.5 text-sm font-normal text-gray-800 hover:bg-[#E78031] hover:text-white transition-colors"
                >
                  How We Work
                </Link>
                <Link
                  href="/#blog"
                  className="block px-4 py-2.5 text-sm font-normal text-gray-800 hover:bg-[#E78031] hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </div>
            </div>

            {/* 2. Day Tours */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("day-tours")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/tours?category=Same+Day+Tours"
                className="flex items-center gap-1.5 text-base font-bold py-2 text-gray-900 hover:text-[#E78031] transition-colors"
              >
                <span>Day Tours</span>
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180 text-gray-500 group-hover:text-[#E78031]" />
              </Link>
              <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-b-xl border border-gray-100 py-1.5 hidden group-hover:block transition-all animate-in fade-in slide-in-from-top-1 z-50">
                <Link
                  href="/tours/delhi-sightseeing-tour"
                  className="block px-4 py-2.5 text-sm font-normal text-gray-800 hover:bg-[#E78031] hover:text-white transition-colors"
                >
                  Delhi Tours
                </Link>
                <Link
                  href="/tours/pink-city-jaipur-tuktuk-tour"
                  className="block px-4 py-2.5 text-sm font-normal text-gray-800 hover:bg-[#E78031] hover:text-white transition-colors"
                >
                  Jaipur Tours
                </Link>
                <Link
                  href="/tours/private-full-day-tour-of-golden-city-jaisalmer-with-guide"
                  className="block px-4 py-2.5 text-sm font-normal text-gray-800 hover:bg-[#E78031] hover:text-white transition-colors"
                >
                  Jaisalmer Tours
                </Link>
                <Link
                  href="/tours/agra-sightseeing-tour"
                  className="block px-4 py-2.5 text-sm font-normal text-gray-800 hover:bg-[#E78031] hover:text-white transition-colors"
                >
                  Agra Tours
                </Link>
                <Link
                  href="/tours/colourful-rajasthan-tour"
                  className="block px-4 py-2.5 text-sm font-normal text-gray-800 hover:bg-[#E78031] hover:text-white transition-colors"
                >
                  Jodhpur Tours
                </Link>
                <Link
                  href="/tours/3-days-udaipur-tour"
                  className="block px-4 py-2.5 text-sm font-normal text-gray-800 hover:bg-[#E78031] hover:text-white transition-colors"
                >
                  Udaipur Tours
                </Link>
              </div>
            </div>

            {/* 3. Tours (Wildlife & Group tours removed as requested) */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("tours")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/tours"
                className={`flex items-center gap-1.5 text-base font-bold py-2 transition-colors ${
                  pathname.startsWith("/tours") ? "text-[#E78031]" : "text-gray-900 hover:text-[#E78031]"
                }`}
              >
                <span>Tours</span>
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180 text-gray-500 group-hover:text-[#E78031]" />
              </Link>
              <div className="absolute top-full left-0 w-60 bg-white shadow-xl rounded-b-xl border border-gray-100 py-1.5 hidden group-hover:block transition-all animate-in fade-in slide-in-from-top-1 z-50">
                <Link
                  href="/tours?category=Golden+Triangle+Tours"
                  className="block px-4 py-2.5 text-sm font-normal text-gray-800 hover:bg-[#E78031] hover:text-white transition-colors"
                >
                  Golden Triangle Tours
                </Link>
                <Link
                  href="/tours?category=Rajasthan+Tour+Packages"
                  className="block px-4 py-2.5 text-sm font-normal text-gray-800 hover:bg-[#E78031] hover:text-white transition-colors"
                >
                  Rajasthan Tours
                </Link>
                <Link
                  href="/tours"
                  className="block px-4 py-2.5 text-sm font-normal text-gray-800 hover:bg-[#E78031] hover:text-white transition-colors"
                >
                  India Tours
                </Link>
              </div>
            </div>

            {/* 4. Luxury India */}
            <Link
              href="/tours?category=Rajasthan+Tour+Packages"
              className="text-base font-bold text-gray-900 hover:text-[#E78031] transition-colors whitespace-nowrap"
            >
              Luxury India
            </Link>

            {/* 5. Custom Tours */}
            <button
              onClick={onOpenEnquiry}
              className="text-base font-bold text-gray-900 hover:text-[#E78031] transition-colors whitespace-nowrap cursor-pointer text-left"
            >
              Custom Tours
            </button>

            {/* 6. Car & Driver Hire */}
            <Link
              href="/contact?service=car-hire"
              className="text-base font-bold text-gray-900 hover:text-[#E78031] transition-colors whitespace-nowrap"
            >
              Car &amp; Driver Hire
            </Link>

            {/* 7. Get In Touch */}
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-[#E78031] hover:bg-[#d06b20] px-5 py-2.5 text-sm font-bold text-white shadow hover:shadow-md transition-all cursor-pointer whitespace-nowrap"
            >
              Get In Touch
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={onOpenEnquiry}
              className="rounded-lg bg-[#E78031] px-3.5 py-1.5 text-xs font-bold text-white"
            >
              Plan Tour
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-black hover:bg-gray-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="block rounded-lg px-3 py-2 text-base font-bold text-gray-900 hover:bg-gray-50"
          >
            Home
          </Link>
          <Link
            href="/tours?category=Same+Day+Tours"
            onClick={closeMobileMenu}
            className="block rounded-lg px-3 py-2 text-base font-bold text-gray-900 hover:bg-gray-50"
          >
            Day Tours
          </Link>
          <Link
            href="/tours"
            onClick={closeMobileMenu}
            className="block rounded-lg px-3 py-2 text-base font-bold text-gray-900 hover:bg-gray-50"
          >
            Tours
          </Link>
          <Link
            href="/tours?category=Rajasthan+Tour+Packages"
            onClick={closeMobileMenu}
            className="block rounded-lg px-3 py-2 text-base font-bold text-gray-900 hover:bg-gray-50"
          >
            Luxury India
          </Link>
          <button
            onClick={() => {
              closeMobileMenu();
              onOpenEnquiry && onOpenEnquiry();
            }}
            className="block w-full text-left rounded-lg px-3 py-2 text-base font-bold text-gray-900 hover:bg-gray-50"
          >
            Custom Tours
          </button>
          <Link
            href="/contact?service=car-hire"
            onClick={closeMobileMenu}
            className="block rounded-lg px-3 py-2 text-base font-bold text-gray-900 hover:bg-gray-50"
          >
            Car &amp; Driver Hire
          </Link>
          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="block rounded-lg px-3 py-2 text-base font-bold text-[#E78031] hover:bg-gray-50"
          >
            Get In Touch
          </Link>

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center gap-2 text-sm text-gray-700 font-medium"
            >
              <Phone className="h-4 w-4 text-[#E78031]" />
              <span>{companyInfo.phoneFormatted}</span>
            </a>
            <a
              href={`mailto:${companyInfo.email}`}
              className="flex items-center gap-2 text-sm text-gray-700"
            >
              <Mail className="h-4 w-4 text-[#E78031]" />
              <span>{companyInfo.email}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
