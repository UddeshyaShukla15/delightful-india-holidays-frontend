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

  const handleDropdownToggle = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-md border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0" onClick={closeMobileMenu}>
            <div className="relative h-14 w-44 sm:w-52">
              <Image
                src="/assets/images/DIH-1.webp"
                alt="Delightful India Holidays Logo"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 180px, 220px"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {/* Home Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("home")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/"
                className={`flex items-center gap-1 text-sm font-semibold uppercase tracking-wider py-2 transition-colors ${
                  pathname === "/" ? "text-[#c9a766]" : "text-[#192a3d] hover:text-[#c9a766]"
                }`}
              >
                <span>Home</span>
                <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              <div className="absolute top-full left-0 w-48 bg-white shadow-xl rounded-b-xl border border-gray-100 py-2 hidden group-hover:block transition-all animate-in fade-in slide-in-from-top-1">
                <Link
                  href="/"
                  className="block px-4 py-2 text-xs font-medium text-gray-700 hover:bg-[#faf7f2] hover:text-[#c9a766] transition-colors"
                >
                  Home Page
                </Link>
                <Link
                  href="/about"
                  className="block px-4 py-2 text-xs font-medium text-gray-700 hover:bg-[#faf7f2] hover:text-[#c9a766] transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/tours"
                  className="block px-4 py-2 text-xs font-medium text-gray-700 hover:bg-[#faf7f2] hover:text-[#c9a766] transition-colors"
                >
                  All Tours Catalog
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2 text-xs font-medium text-gray-700 hover:bg-[#faf7f2] hover:text-[#c9a766] transition-colors"
                >
                  How We Work
                </Link>
              </div>
            </div>

            {/* Day Tours Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("day-tours")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/tours?category=Same+Day+Tours"
                className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wider py-2 text-[#192a3d] hover:text-[#c9a766] transition-colors"
              >
                <span>Day Tours</span>
                <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              <div className="absolute top-full left-0 w-52 bg-white shadow-xl rounded-b-xl border border-gray-100 py-2 hidden group-hover:block transition-all animate-in fade-in slide-in-from-top-1">
                <Link
                  href="/tours/delhi-sightseeing-tour"
                  className="block px-4 py-2 text-xs font-medium text-gray-700 hover:bg-[#faf7f2] hover:text-[#c9a766] transition-colors"
                >
                  Delhi Day Tours
                </Link>
                <Link
                  href="/tours/pink-city-jaipur-tuktuk-tour"
                  className="block px-4 py-2 text-xs font-medium text-gray-700 hover:bg-[#faf7f2] hover:text-[#c9a766] transition-colors"
                >
                  Jaipur TukTuk Tours
                </Link>
                <Link
                  href="/tours/agra-sightseeing-tour"
                  className="block px-4 py-2 text-xs font-medium text-gray-700 hover:bg-[#faf7f2] hover:text-[#c9a766] transition-colors"
                >
                  Agra Sightseeing Tours
                </Link>
                <Link
                  href="/tours/private-full-day-tour-of-golden-city-jaisalmer-with-guide"
                  className="block px-4 py-2 text-xs font-medium text-gray-700 hover:bg-[#faf7f2] hover:text-[#c9a766] transition-colors"
                >
                  Jaisalmer Golden City Tours
                </Link>
                <Link
                  href="/tours/jhalana-leopard-safari-tour"
                  className="block px-4 py-2 text-xs font-medium text-gray-700 hover:bg-[#faf7f2] hover:text-[#c9a766] transition-colors"
                >
                  Jhalana Leopard Safari
                </Link>
                <Link
                  href="/tours/same-day-pushkar-tour-from-jaipur"
                  className="block px-4 py-2 text-xs font-medium text-gray-700 hover:bg-[#faf7f2] hover:text-[#c9a766] transition-colors"
                >
                  Pushkar Day Excursion
                </Link>
              </div>
            </div>

            {/* Tours Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("tours")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/tours"
                className={`flex items-center gap-1 text-sm font-semibold uppercase tracking-wider py-2 transition-colors ${
                  pathname.startsWith("/tours") ? "text-[#c9a766]" : "text-[#192a3d] hover:text-[#c9a766]"
                }`}
              >
                <span>Tours</span>
                <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </Link>
              <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-b-xl border border-gray-100 py-2 hidden group-hover:block transition-all animate-in fade-in slide-in-from-top-1">
                <Link
                  href="/tours?category=Golden+Triangle+Tours"
                  className="block px-4 py-2 text-xs font-medium text-gray-700 hover:bg-[#faf7f2] hover:text-[#c9a766] transition-colors"
                >
                  Golden Triangle Tours
                </Link>
                <Link
                  href="/tours?category=Rajasthan+Tour+Packages"
                  className="block px-4 py-2 text-xs font-medium text-gray-700 hover:bg-[#faf7f2] hover:text-[#c9a766] transition-colors"
                >
                  Rajasthan Tour Packages
                </Link>
                <Link
                  href="/tours?category=Honeymoon+Tour+Packages"
                  className="block px-4 py-2 text-xs font-medium text-gray-700 hover:bg-[#faf7f2] hover:text-[#c9a766] transition-colors"
                >
                  Honeymoon Tour Packages
                </Link>
                <Link
                  href="/tours?category=Group+Tour+Packages"
                  className="block px-4 py-2 text-xs font-medium text-gray-700 hover:bg-[#faf7f2] hover:text-[#c9a766] transition-colors"
                >
                  Group Tour Packages
                </Link>
                <Link
                  href="/tours?category=Wildlife+Tours"
                  className="block px-4 py-2 text-xs font-medium text-gray-700 hover:bg-[#faf7f2] hover:text-[#c9a766] transition-colors"
                >
                  Wildlife Tours
                </Link>
                <Link
                  href="/tours?category=Jaisalmer+Tour+Packages"
                  className="block px-4 py-2 text-xs font-medium text-gray-700 hover:bg-[#faf7f2] hover:text-[#c9a766] transition-colors"
                >
                  Jaisalmer Desert Tours
                </Link>
              </div>
            </div>

            {/* About */}
            <Link
              href="/about"
              className={`text-sm font-semibold uppercase tracking-wider transition-colors ${
                pathname === "/about" ? "text-[#c9a766]" : "text-[#192a3d] hover:text-[#c9a766]"
              }`}
            >
              About Us
            </Link>

            {/* Car & Driver Hire */}
            <Link
              href="/contact?service=car-hire"
              className="text-sm font-semibold uppercase tracking-wider text-[#192a3d] hover:text-[#c9a766] transition-colors"
            >
              Car & Driver Hire
            </Link>

            {/* Get In Touch CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-[#c9a766] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow hover:bg-[#b8924f] hover:shadow-md transition-all cursor-pointer"
            >
              Get In Touch
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={onOpenEnquiry}
              className="rounded-lg bg-[#c9a766] px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white"
            >
              Plan Tour
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-[#192a3d] hover:bg-gray-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2">
          <div className="space-y-1">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={closeMobileMenu}
              className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              About Us
            </Link>
            <Link
              href="/tours"
              onClick={closeMobileMenu}
              className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              All Tours & Packages
            </Link>
            <Link
              href="/tours?category=Same+Day+Tours"
              onClick={closeMobileMenu}
              className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              Same Day Tours
            </Link>
            <Link
              href="/tours?category=Golden+Triangle+Tours"
              onClick={closeMobileMenu}
              className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              Golden Triangle Tours
            </Link>
            <Link
              href="/tours?category=Rajasthan+Tour+Packages"
              onClick={closeMobileMenu}
              className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              Rajasthan Tours
            </Link>
            <Link
              href="/tours?category=Jaisalmer+Tour+Packages"
              onClick={closeMobileMenu}
              className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              Jaisalmer Desert Tours
            </Link>
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="block rounded-lg px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
            >
              Contact Us & Enquiries
            </Link>
          </div>

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center gap-2 text-xs text-gray-700 font-medium"
            >
              <Phone className="h-4 w-4 text-[#c9a766]" />
              <span>{companyInfo.phoneFormatted}</span>
            </a>
            <a
              href={`mailto:${companyInfo.email}`}
              className="flex items-center gap-2 text-xs text-gray-700"
            >
              <Mail className="h-4 w-4 text-[#c9a766]" />
              <span>{companyInfo.email}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
