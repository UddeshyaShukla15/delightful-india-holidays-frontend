"use client";

import React, { useState, useEffect, useRef } from "react";
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
  const [mobileToursOpen, setMobileToursOpen] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const toursDropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (toursDropdownRef.current && !toursDropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown((prev) => (prev === "tours" ? null : prev));
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const isHomeActive =
    pathname === "/" ||
    pathname === "/about" ||
    pathname === "/how-we-work" ||
    pathname === "/blogs" ||
    pathname === "/blog";

  const isDayToursActive =
    pathname === "/india-day-tours" ||
    pathname === "/day-tours" ||
    pathname === "/delhi-tour-packages" ||
    pathname === "/jaipur-tour-packages" ||
    pathname === "/jaisalmer-tour-packages" ||
    pathname === "/agra-tour-packages" ||
    pathname === "/jodhpur-tour-packages" ||
    pathname === "/udaipur-tour-packages" ||
    pathname === "/same-day-tours";

  const isToursActive =
    activeDropdown === "tours" ||
    pathname === "/golden-triangle-tours" ||
    pathname === "/rajasthan-tours" ||
    pathname === "/india-tour-packages" ||
    pathname === "/tours";

  const isLuxuryActive =
    pathname === "/luxury-tour-packages" ||
    pathname === "/luxury-india" ||
    pathname.startsWith("/luxury-");

  const isCustomToursActive = pathname.startsWith("/cust");

  const isCarDriverHireActive = pathname.startsWith("/car-driver-hire");

  const isContactActive =
    pathname === "/contact-us" ||
    pathname === "/contact" ||
    pathname === "/get-in-touch";

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
                  isHomeActive
                    ? "text-[#E78031]"
                    : "text-gray-900 hover:text-[#E78031]"
                }`}
              >
                <span>Home</span>
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180 text-gray-500 group-hover:text-[#E78031]" />
              </Link>
              <div className="absolute top-full left-0 w-52 bg-white shadow-xl rounded-b-xl border border-gray-100 py-1.5 hidden group-hover:block transition-all animate-in fade-in slide-in-from-top-1 z-50">
                <Link
                  href="/about"
                  className={`block px-4 py-2.5 text-sm font-normal transition-colors ${
                    pathname === "/about" ? "bg-[#E78031] text-white" : "text-gray-800 hover:bg-[#E78031] hover:text-white"
                  }`}
                >
                  About Us
                </Link>
                <Link
                  href="/how-we-work"
                  className={`block px-4 py-2.5 text-sm font-normal transition-colors ${
                    pathname === "/how-we-work" ? "bg-[#E78031] text-white" : "text-gray-800 hover:bg-[#E78031] hover:text-white"
                  }`}
                >
                  How We Work
                </Link>
                <Link
                  href="/blogs"
                  className={`block px-4 py-2.5 text-sm font-normal transition-colors ${
                    pathname === "/blogs" || pathname === "/blog"
                      ? "bg-[#E78031] text-white"
                      : "text-gray-800 hover:bg-[#E78031] hover:text-white"
                  }`}
                >
                  Blogs
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
                href="/india-day-tours"
                className={`flex items-center gap-1.5 text-base font-bold py-2 transition-colors ${
                  isDayToursActive
                    ? "text-[#E78031]"
                    : "text-gray-900 hover:text-[#E78031]"
                }`}
              >
                <span>Day Tours</span>
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180 text-gray-500 group-hover:text-[#E78031]" />
              </Link>
              <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-b-xl border border-gray-100 py-1.5 hidden group-hover:block transition-all animate-in fade-in slide-in-from-top-1 z-50">
                <Link
                  href="/delhi-tour-packages"
                  className={`block px-4 py-2.5 text-sm font-normal transition-colors ${
                    pathname === "/delhi-tour-packages"
                      ? "bg-[#E78031] text-white"
                      : "text-gray-800 hover:bg-[#E78031] hover:text-white"
                  }`}
                >
                  Delhi Tours
                </Link>
                <Link
                  href="/jaipur-tour-packages"
                  className={`block px-4 py-2.5 text-sm font-normal transition-colors ${
                    pathname === "/jaipur-tour-packages"
                      ? "bg-[#E78031] text-white"
                      : "text-gray-800 hover:bg-[#E78031] hover:text-white"
                  }`}
                >
                  Jaipur Tours
                </Link>
                <Link
                  href="/jaisalmer-tour-packages"
                  className={`block px-4 py-2.5 text-sm font-normal transition-colors ${
                    pathname === "/jaisalmer-tour-packages"
                      ? "bg-[#E78031] text-white"
                      : "text-gray-800 hover:bg-[#E78031] hover:text-white"
                  }`}
                >
                  Jaisalmer Tours
                </Link>
                <Link
                  href="/agra-tour-packages"
                  className={`block px-4 py-2.5 text-sm font-normal transition-colors ${
                    pathname === "/agra-tour-packages"
                      ? "bg-[#E78031] text-white"
                      : "text-gray-800 hover:bg-[#E78031] hover:text-white"
                  }`}
                >
                  Agra Tours
                </Link>
                <Link
                  href="/jodhpur-tour-packages"
                  className={`block px-4 py-2.5 text-sm font-normal transition-colors ${
                    pathname === "/jodhpur-tour-packages"
                      ? "bg-[#E78031] text-white"
                      : "text-gray-800 hover:bg-[#E78031] hover:text-white"
                  }`}
                >
                  Jodhpur Tours
                </Link>
                <Link
                  href="/udaipur-tour-packages"
                  className={`block px-4 py-2.5 text-sm font-normal transition-colors ${
                    pathname === "/udaipur-tour-packages"
                      ? "bg-[#E78031] text-white"
                      : "text-gray-800 hover:bg-[#E78031] hover:text-white"
                  }`}
                >
                  Udaipur Tours
                </Link>
              </div>
            </div>

            {/* 3. Tours */}
            <div
              ref={toursDropdownRef}
              className="relative group"
              onMouseEnter={() => setActiveDropdown("tours")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveDropdown(activeDropdown === "tours" ? null : "tours");
                }}
                className={`flex items-center gap-1.5 text-base font-bold py-2 transition-colors cursor-pointer ${
                  isToursActive
                    ? "text-[#E78031]"
                    : "text-gray-900 hover:text-[#E78031]"
                }`}
              >
                <span>Tours</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 text-gray-500 group-hover:text-[#E78031] ${
                    activeDropdown === "tours" ? "rotate-180 text-[#E78031]" : "group-hover:rotate-180"
                  }`}
                />
              </button>
              <div
                className={`absolute top-full left-0 w-60 bg-white shadow-xl rounded-b-xl border border-gray-100 py-1.5 transition-all animate-in fade-in slide-in-from-top-1 z-50 ${
                  activeDropdown === "tours" ? "block" : "hidden group-hover:block"
                }`}
              >
                <Link
                  href="/golden-triangle-tours"
                  onClick={() => setActiveDropdown(null)}
                  className={`block px-4 py-2.5 text-sm font-normal transition-colors ${
                    pathname === "/golden-triangle-tours"
                      ? "bg-[#E78031] text-white"
                      : "text-gray-800 hover:bg-[#E78031] hover:text-white"
                  }`}
                >
                  Golden Triangle Tours
                </Link>
                <Link
                  href="/rajasthan-tours"
                  onClick={() => setActiveDropdown(null)}
                  className={`block px-4 py-2.5 text-sm font-normal transition-colors ${
                    pathname === "/rajasthan-tours"
                      ? "bg-[#E78031] text-white"
                      : "text-gray-800 hover:bg-[#E78031] hover:text-white"
                  }`}
                >
                  Rajasthan Tours
                </Link>
                <Link
                  href="/india-tour-packages"
                  onClick={() => setActiveDropdown(null)}
                  className={`block px-4 py-2.5 text-sm font-normal transition-colors ${
                    pathname === "/india-tour-packages"
                      ? "bg-[#E78031] text-white"
                      : "text-gray-800 hover:bg-[#E78031] hover:text-white"
                  }`}
                >
                  India Tours
                </Link>
              </div>
            </div>

            {/* 4. Luxury India */}
            <Link
              href="/luxury-tour-packages"
              className={`text-base font-bold transition-colors whitespace-nowrap ${
                isLuxuryActive ? "text-[#E78031]" : "text-gray-900 hover:text-[#E78031]"
              }`}
            >
              Luxury India
            </Link>

            {/* 5. Custom Tours */}
            <Link
              href="/custum-tours"
              className={`text-base font-bold transition-colors whitespace-nowrap cursor-pointer text-left ${
                isCustomToursActive ? "text-[#E78031]" : "text-gray-900 hover:text-[#E78031]"
              }`}
            >
              Custom Tours
            </Link>

            {/* 6. Car & Driver Hire */}
            <Link
              href="/car-driver-hire"
              className={`text-base font-bold transition-colors whitespace-nowrap ${
                isCarDriverHireActive ? "text-[#E78031]" : "text-gray-900 hover:text-[#E78031]"
              }`}
            >
              Car &amp; Driver Hire
            </Link>

            {/* 7. Get In Touch */}
            <Link
              href="/contact-us"
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
            className={`block rounded-lg px-3 py-2 text-base font-bold ${
              pathname === "/" ? "text-[#E78031]" : "text-gray-900 hover:bg-gray-50"
            }`}
          >
            Home
          </Link>
          <div className="pl-4 space-y-1 pb-1">
            <Link
              href="/about"
              onClick={closeMobileMenu}
              className={`block rounded-lg px-3 py-1.5 text-sm font-medium ${
                pathname === "/about" ? "text-[#E78031] font-bold" : "text-gray-600 hover:bg-gray-50 hover:text-[#E78031]"
              }`}
            >
              About Us
            </Link>
            <Link
              href="/how-we-work"
              onClick={closeMobileMenu}
              className={`block rounded-lg px-3 py-1.5 text-sm font-medium ${
                pathname === "/how-we-work" ? "text-[#E78031] font-bold" : "text-gray-600 hover:bg-gray-50 hover:text-[#E78031]"
              }`}
            >
              How We Work
            </Link>
            <Link
              href="/blogs"
              onClick={closeMobileMenu}
              className={`block rounded-lg px-3 py-1.5 text-sm font-medium ${
                pathname === "/blogs" || pathname === "/blog"
                  ? "text-[#E78031] font-bold"
                  : "text-gray-600 hover:bg-gray-50 hover:text-[#E78031]"
              }`}
            >
              Blogs
            </Link>
          </div>
          <Link
            href="/india-day-tours"
            onClick={closeMobileMenu}
            className={`block rounded-lg px-3 py-2 text-base font-bold ${
              isDayToursActive ? "text-[#E78031]" : "text-gray-900 hover:bg-gray-50"
            }`}
          >
            Day Tours
          </Link>
          <div className="pl-4 space-y-1">
            <Link
              href="/delhi-tour-packages"
              onClick={closeMobileMenu}
              className={`block rounded-lg px-3 py-1.5 text-sm font-medium ${
                pathname === "/delhi-tour-packages" ? "text-[#E78031] font-bold" : "text-gray-600 hover:bg-gray-50 hover:text-[#E78031]"
              }`}
            >
              Delhi Tours
            </Link>
            <Link
              href="/jaipur-tour-packages"
              onClick={closeMobileMenu}
              className={`block rounded-lg px-3 py-1.5 text-sm font-medium ${
                pathname === "/jaipur-tour-packages" ? "text-[#E78031] font-bold" : "text-gray-600 hover:bg-gray-50 hover:text-[#E78031]"
              }`}
            >
              Jaipur Tours
            </Link>
            <Link
              href="/jaisalmer-tour-packages"
              onClick={closeMobileMenu}
              className={`block rounded-lg px-3 py-1.5 text-sm font-medium ${
                pathname === "/jaisalmer-tour-packages" ? "text-[#E78031] font-bold" : "text-gray-600 hover:bg-gray-50 hover:text-[#E78031]"
              }`}
            >
              Jaisalmer Tours
            </Link>
            <Link
              href="/agra-tour-packages"
              onClick={closeMobileMenu}
              className={`block rounded-lg px-3 py-1.5 text-sm font-medium ${
                pathname === "/agra-tour-packages" ? "text-[#E78031] font-bold" : "text-gray-600 hover:bg-gray-50 hover:text-[#E78031]"
              }`}
            >
              Agra Tours
            </Link>
            <Link
              href="/jodhpur-tour-packages"
              onClick={closeMobileMenu}
              className={`block rounded-lg px-3 py-1.5 text-sm font-medium ${
                pathname === "/jodhpur-tour-packages" ? "text-[#E78031] font-bold" : "text-gray-600 hover:bg-gray-50 hover:text-[#E78031]"
              }`}
            >
              Jodhpur Tours
            </Link>
            <Link
              href="/udaipur-tour-packages"
              onClick={closeMobileMenu}
              className={`block rounded-lg px-3 py-1.5 text-sm font-medium ${
                pathname === "/udaipur-tour-packages" ? "text-[#E78031] font-bold" : "text-gray-600 hover:bg-gray-50 hover:text-[#E78031]"
              }`}
            >
              Udaipur Tours
            </Link>
          </div>
          <button
            type="button"
            onClick={() => setMobileToursOpen(!mobileToursOpen)}
            className="w-full flex items-center justify-between rounded-lg px-3 py-2 text-base font-bold text-gray-900 hover:bg-gray-50 text-left"
          >
            <span
              className={
                isToursActive
                  ? "text-[#E78031]"
                  : ""
              }
            >
              Tours
            </span>
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 text-gray-500 ${
                mobileToursOpen ? "rotate-180 text-[#E78031]" : ""
              }`}
            />
          </button>
          {mobileToursOpen && (
            <div className="pl-4 space-y-1">
              <Link
                href="/golden-triangle-tours"
                onClick={closeMobileMenu}
                className={`block rounded-lg px-3 py-1.5 text-sm font-medium ${
                  pathname === "/golden-triangle-tours"
                    ? "text-[#E78031] font-bold"
                    : "text-gray-600 hover:bg-gray-50 hover:text-[#E78031]"
                }`}
              >
                Golden Triangle Tours
              </Link>
              <Link
                href="/rajasthan-tours"
                onClick={closeMobileMenu}
                className={`block rounded-lg px-3 py-1.5 text-sm font-medium ${
                  pathname === "/rajasthan-tours"
                    ? "text-[#E78031] font-bold"
                    : "text-gray-600 hover:bg-gray-50 hover:text-[#E78031]"
                }`}
              >
                Rajasthan Tours
              </Link>
              <Link
                href="/india-tour-packages"
                onClick={closeMobileMenu}
                className={`block rounded-lg px-3 py-1.5 text-sm font-medium ${
                  pathname === "/india-tour-packages"
                    ? "text-[#E78031] font-bold"
                    : "text-gray-600 hover:bg-gray-50 hover:text-[#E78031]"
                }`}
              >
                India Tours
              </Link>
            </div>
          )}
          <Link
            href="/luxury-tour-packages"
            onClick={closeMobileMenu}
            className={`block rounded-lg px-3 py-2 text-base font-bold ${
              isLuxuryActive ? "text-[#E78031]" : "text-gray-900 hover:bg-gray-50"
            }`}
          >
            Luxury India
          </Link>
          <Link
            href="/custum-tours"
            onClick={closeMobileMenu}
            className={`block rounded-lg px-3 py-2 text-base font-bold ${
              isCustomToursActive ? "text-[#E78031]" : "text-gray-900 hover:bg-gray-50"
            }`}
          >
            Custom Tours
          </Link>
          <Link
            href="/car-driver-hire"
            onClick={closeMobileMenu}
            className={`block rounded-lg px-3 py-2 text-base font-bold ${
              isCarDriverHireActive ? "text-[#E78031]" : "text-gray-900 hover:bg-gray-50"
            }`}
          >
            Car &amp; Driver Hire
          </Link>
          <Link
            href="/contact-us"
            onClick={closeMobileMenu}
            className={`block rounded-lg px-3 py-2 text-base font-bold ${
              isContactActive ? "text-[#E78031]" : "text-[#E78031] hover:bg-gray-50"
            }`}
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
