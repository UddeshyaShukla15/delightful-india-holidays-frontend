"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { companyInfo } from "@/data/mockData";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 font-sans">
      {/* ------------------------------------------------------------- */}
      {/* Part 1: "TRUSTED BY TRAVELLERS / Our Credibility" Section       */}
      {/* (Directly integrated into Footer as shown in User's Screenshot) */}
      {/* ------------------------------------------------------------- */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="text-xs sm:text-sm font-semibold tracking-[2px] text-[#c9a766] uppercase mb-2">
            TRUSTED BY TRAVELLERS
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#2a2a2a] mb-4 font-serif">
            Our <span className="italic text-[#c9a766] font-normal">Credibility</span>
          </h2>
          <p className="text-sm sm:text-base text-[#8b8b8b] max-w-2xl mx-auto leading-relaxed">
            Years of desert hospitality, thousands of happy guests, and top ratings across every major travel platform.
          </p>
        </div>

        {/* 5 Statistics (Clean, matching screenshot) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 mb-14 text-center">
          <div>
            <div className="text-3xl sm:text-5xl font-semibold text-[#2a2a2a] mb-2 font-serif">
              15+
            </div>
            <div className="text-xs sm:text-sm uppercase tracking-wider text-[#8b8b8b] font-medium">
              YEARS IN BUSINESS
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-5xl font-semibold text-[#2a2a2a] mb-2 font-serif">
              51000+
            </div>
            <div className="text-xs sm:text-sm uppercase tracking-wider text-[#8b8b8b] font-medium">
              HAPPY GUESTS
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-5xl font-semibold text-[#2a2a2a] mb-2 font-serif">
              5.0
            </div>
            <div className="text-xs sm:text-sm uppercase tracking-wider text-[#8b8b8b] font-medium">
              AVG. RATING
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-5xl font-semibold text-[#2a2a2a] mb-2 font-serif">
              350+
            </div>
            <div className="text-xs sm:text-sm uppercase tracking-wider text-[#8b8b8b] font-medium">
              TOUR PACKAGES
            </div>
          </div>

          <div className="col-span-2 md:col-span-1">
            <div className="text-3xl sm:text-5xl font-semibold text-[#2a2a2a] mb-2 font-serif">
              100%
            </div>
            <div className="text-xs sm:text-sm uppercase tracking-wider text-[#8b8b8b] font-medium">
              RECOMMENDED
            </div>
          </div>
        </div>

        {/* LISTED & REVIEWED ON */}
        <div className="text-center">
          <div className="text-xs sm:text-sm font-semibold uppercase tracking-[2px] text-[#8b8b8b] mb-6">
            LISTED &amp; REVIEWED ON
          </div>

          {/* 3 Review Badges Matching Screenshot */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {/* 1. Tripadvisor (Green circle with white T) */}
            <a
              href={companyInfo.socialLinks.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3.5 py-3.5 px-6 rounded-full border-2 border-[#e8dcc8] bg-white hover:border-[#c9a766] transition-all shadow-sm group"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00aa6c] text-white font-black text-sm">
                T
              </span>
              <div className="text-left">
                <div className="text-sm font-bold text-gray-900 group-hover:text-[#c9a766] transition-colors">
                  Tripadvisor
                </div>
                <div className="text-xs text-[#8b8b8b] font-medium">5.0 - Excellent</div>
              </div>
            </a>

            {/* 2. Facebook (Yellow circle with white f) */}
            <a
              href={companyInfo.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3.5 py-3.5 px-6 rounded-full border-2 border-[#e8dcc8] bg-white hover:border-[#c9a766] transition-all shadow-sm group"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eab308] text-white font-black text-sm">
                f
              </span>
              <div className="text-left">
                <div className="text-sm font-bold text-gray-900 group-hover:text-[#c9a766] transition-colors">
                  Facebook
                </div>
                <div className="text-xs text-[#8b8b8b] font-medium">5.0 - Wonderful</div>
              </div>
            </a>

            {/* 3. Google Reviews (Red circle with white G) */}
            <div className="flex items-center justify-center gap-3.5 py-3.5 px-6 rounded-full border-2 border-[#e8dcc8] bg-white hover:border-[#c9a766] transition-all shadow-sm group">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ea4335] text-white font-black text-sm">
                G
              </span>
              <div className="text-left">
                <div className="text-sm font-bold text-gray-900 group-hover:text-[#c9a766] transition-colors">
                  Google Reviews
                </div>
                <div className="text-xs text-[#8b8b8b] font-medium">5.0 - Outstanding</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Thin Divider Line Matching Screenshot */}
      <hr className="border-gray-200" />

      {/* ------------------------------------------------------------- */}
      {/* Part 2: 4 Main Columns (Increased font size like main website) */}
      {/* ------------------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pb-12">
          {/* Column 1: Brand & Contact Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block relative h-16 w-56 mb-2">
              <Image
                src="/assets/images/DIH-1.webp"
                alt="Delightful India Holidays"
                fill
                className="object-contain object-left"
                sizes="240px"
              />
            </Link>

            <div className="space-y-4 pt-1 text-base text-gray-800">
              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="mt-1 flex-shrink-0 text-[#E78031]">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="leading-snug text-gray-800 font-normal text-[15.5px] sm:text-[16px]">
                  {companyInfo.address}
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 text-[#E78031]">
                  <Phone className="h-5 w-5" />
                </div>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="font-normal text-gray-800 hover:text-[#E78031] transition-colors text-[16px] sm:text-[17px]"
                >
                  {companyInfo.phoneFormatted}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 text-[#E78031]">
                  <Mail className="h-5 w-5" />
                </div>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-gray-800 hover:text-[#E78031] transition-colors text-[15.5px] sm:text-[16px] font-normal"
                >
                  {companyInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Customer Support */}
          <div>
            <h3 className="text-[21px] sm:text-[22px] font-normal text-black mb-4 font-sans">
              Customer Support
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 text-[15.5px] sm:text-[16px] text-gray-700">
              <li>
                <Link href="/about" className="hover:text-[#E78031] transition-colors flex items-center gap-2 font-normal py-0.5">
                  <span className="text-[#E78031] font-bold text-lg leading-none">&raquo;</span>
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E78031] transition-colors flex items-center gap-2 font-normal py-0.5">
                  <span className="text-[#E78031] font-bold text-lg leading-none">&raquo;</span>
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E78031] transition-colors flex items-center gap-2 font-normal py-0.5">
                  <span className="text-[#E78031] font-bold text-lg leading-none">&raquo;</span>
                  <span>Help &amp; FAQs</span>
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-[#E78031] transition-colors flex items-center gap-2 font-normal py-0.5">
                  <span className="text-[#E78031] font-bold text-lg leading-none">&raquo;</span>
                  <span>Testimonials</span>
                </Link>
              </li>
              <li>
                <Link href="/contact?service=car-hire" className="hover:text-[#E78031] transition-colors flex items-center gap-2 font-normal py-0.5">
                  <span className="text-[#E78031] font-bold text-lg leading-none">&raquo;</span>
                  <span>Car &amp; Driver Hire</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E78031] transition-colors flex items-center gap-2 font-normal py-0.5">
                  <span className="text-[#E78031] font-bold text-lg leading-none">&raquo;</span>
                  <span>Career</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E78031] transition-colors flex items-center gap-2 font-normal py-0.5">
                  <span className="text-[#E78031] font-bold text-lg leading-none">&raquo;</span>
                  <span>Payment Options</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#E78031] transition-colors flex items-center gap-2 font-normal py-0.5">
                  <span className="text-[#E78031] font-bold text-lg leading-none">&raquo;</span>
                  <span>Support</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Tour Packages */}
          <div>
            <h3 className="text-[21px] sm:text-[22px] font-normal text-black mb-4 font-sans">
              Popular Tour Packages
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 text-[15.5px] sm:text-[16px] text-gray-700">
              <li>
                <Link href="/tours/agra-sightseeing-tour" className="hover:text-[#E78031] transition-colors flex items-center gap-2 font-normal py-0.5">
                  <span className="text-[#E78031] font-bold text-lg leading-none">&raquo;</span>
                  <span>Agra Tour Packages</span>
                </Link>
              </li>
              <li>
                <Link href="/tours/delhi-sightseeing-tour" className="hover:text-[#E78031] transition-colors flex items-center gap-2 font-normal py-0.5">
                  <span className="text-[#E78031] font-bold text-lg leading-none">&raquo;</span>
                  <span>Delhi Tour Packages</span>
                </Link>
              </li>
              <li>
                <Link href="/tours/2-days-jaipur-agra-tour" className="hover:text-[#E78031] transition-colors flex items-center gap-2 font-normal py-0.5">
                  <span className="text-[#E78031] font-bold text-lg leading-none">&raquo;</span>
                  <span>Jaipur Tour Packages</span>
                </Link>
              </li>
              <li>
                <Link href="/tours/3-days-udaipur-tour" className="hover:text-[#E78031] transition-colors flex items-center gap-2 font-normal py-0.5">
                  <span className="text-[#E78031] font-bold text-lg leading-none">&raquo;</span>
                  <span>Udaipur Tour Packages</span>
                </Link>
              </li>
              <li>
                <Link href="/tours/blissful-jaisalmer-honeymoon-tour" className="hover:text-[#E78031] transition-colors flex items-center gap-2 font-normal py-0.5">
                  <span className="text-[#E78031] font-bold text-lg leading-none">&raquo;</span>
                  <span>Jaisalmer Tour Packages</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Tours Services */}
          <div>
            <h3 className="text-[21px] sm:text-[22px] font-normal text-black mb-4 font-sans">
              Tours Services
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 text-[15.5px] sm:text-[16px] text-gray-700">
              <li>
                <Link href="/tours?category=Golden+Triangle+Tours" className="hover:text-[#E78031] transition-colors flex items-center gap-2 font-normal py-0.5">
                  <span className="text-[#E78031] font-bold text-lg leading-none">&raquo;</span>
                  <span>Golden Triangle Tours</span>
                </Link>
              </li>
              <li>
                <Link href="/tours?category=Rajasthan+Tour+Packages" className="hover:text-[#E78031] transition-colors flex items-center gap-2 font-normal py-0.5">
                  <span className="text-[#E78031] font-bold text-lg leading-none">&raquo;</span>
                  <span>Rajasthan Tour Packages</span>
                </Link>
              </li>
              <li>
                <Link href="/tours?category=Honeymoon+Tour+Packages" className="hover:text-[#E78031] transition-colors flex items-center gap-2 font-normal py-0.5">
                  <span className="text-[#E78031] font-bold text-lg leading-none">&raquo;</span>
                  <span>Honeymoon Tours</span>
                </Link>
              </li>
              <li>
                <Link href="/tours?category=Group+Tour+Packages" className="hover:text-[#E78031] transition-colors flex items-center gap-2 font-normal py-0.5">
                  <span className="text-[#E78031] font-bold text-lg leading-none">&raquo;</span>
                  <span>Group Tours</span>
                </Link>
              </li>
              <li>
                <Link href="/tours?category=Rajasthan+Tour+Packages" className="hover:text-[#E78031] transition-colors flex items-center gap-2 font-normal py-0.5">
                  <span className="text-[#E78031] font-bold text-lg leading-none">&raquo;</span>
                  <span>Luxury Tour Packages</span>
                </Link>
              </li>
              <li>
                <Link href="/tours?category=Wildlife+Tours" className="hover:text-[#E78031] transition-colors flex items-center gap-2 font-normal py-0.5">
                  <span className="text-[#E78031] font-bold text-lg leading-none">&raquo;</span>
                  <span>Wild Life Tours</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* Part 3: Payment Methods & Authorized India Tour Operator       */}
        {/* ------------------------------------------------------------- */}
        <div className="border-t border-gray-200 pt-8 pb-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: Payment Methods */}
          <div className="space-y-3">
            <h4 className="text-[21px] sm:text-[22px] font-normal text-black font-sans">Payment Methods</h4>
            <div className="relative h-16 sm:h-20 w-full max-w-lg">
              <Image
                src="/assets/images/Payment-Option.webp"
                alt="Payment Methods: VISA, RuPay, Paytm, MasterCard, PayPal, PhonePe, Payoneer"
                fill
                className="object-contain object-left"
                sizes="(max-width: 768px) 100vw, 550px"
              />
            </div>
          </div>

          {/* Right: Authorized India Tour Operator */}
          <div className="space-y-3">
            <h4 className="text-[21px] sm:text-[22px] font-normal text-black font-sans">Authorized India Tour Operator</h4>
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-24 border border-gray-200 rounded p-1 bg-white shadow-sm">
                <Image
                  src="/assets/images/rajasthan.webp"
                  alt="Rajasthan Tourism Authorized Operator"
                  fill
                  className="object-contain"
                  sizes="100px"
                />
              </div>
              <div className="relative h-16 w-24 border border-gray-200 rounded p-1 bg-white shadow-sm">
                <Image
                  src="/assets/images/tripadvisor.webp"
                  alt="TripAdvisor Recommended Operator"
                  fill
                  className="object-contain"
                  sizes="100px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* Part 4: Bottom Bar: Copyright, 7 Square Social Buttons & Links  */}
        {/* ------------------------------------------------------------- */}
        <div className="border-t border-gray-200 pt-6 flex flex-col lg:flex-row items-center justify-between gap-5 text-[14px] sm:text-[15px] text-gray-600">
          {/* Copyright */}
          <div className="text-gray-600 font-medium">
            <span>&copy;2026. DelightFul India Holidays, All Rights Reserved.</span>
          </div>

          {/* 7 Square Social Buttons matching screenshot */}
          <div className="flex items-center gap-2">
            {/* 1. TripAdvisor (green #589442) */}
            <a
              href={companyInfo.socialLinks.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded bg-[#589442] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              title="TripAdvisor"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 576 512">
                <path d="M528.91,178.82,576,127.58H471.66a326.11,326.11,0,0,0-367,0H0l47.09,51.24A143.911,143.911,0,0,0,241.86,390.73L288,440.93l46.11-50.17A143.94,143.94,0,0,0,575.88,285.18h-.03A143.56,143.56,0,0,0,528.91,178.82ZM144.06,382.57a97.39,97.39,0,1,1,97.39-97.39A97.39,97.39,0,0,1,144.06,382.57ZM288,282.37c0-64.09-46.62-119.08-108.09-142.59a281,281,0,0,1,216.17,0C334.61,163.3,288,218.29,288,282.37Zm143.88,100.2h-.01a97.405,97.405,0,1,1,.01,0ZM144.06,234.12h-.01a51.06,51.06,0,1,0,51.06,51.06v-.11A51,51,0,0,0,144.06,234.12Zm287.82,0a51.06,51.06,0,1,0,51.06,51.06A51.06,51.06,0,0,0,431.88,234.12Z" />
              </svg>
            </a>

            {/* 2. Facebook (blue #3b5998) */}
            <a
              href={companyInfo.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded bg-[#3b5998] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              title="Facebook"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* 3. X / Twitter (black #000000) */}
            <a
              href={companyInfo.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded bg-[#000000] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              title="X (Twitter)"
            >
              <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* 4. YouTube (red #cd201f) */}
            <a
              href={companyInfo.socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded bg-[#cd201f] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              title="YouTube"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>

            {/* 5. Instagram (dark #262626) */}
            <a
              href={companyInfo.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded bg-[#262626] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              title="Instagram"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* 6. Tumblr (dark navy #35465c) */}
            <a
              href={companyInfo.socialLinks.tumblr}
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded bg-[#35465c] text-white flex items-center justify-center hover:opacity-90 transition-opacity font-bold text-sm"
              title="Tumblr"
            >
              <span className="font-serif lowercase font-bold text-sm leading-none">t</span>
            </a>

            {/* 7. Pinterest (red #bd081c) */}
            <a
              href={companyInfo.socialLinks.pinterest}
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 rounded bg-[#bd081c] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              title="Pinterest"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.291 1.199-.334 1.357-.053.225-.175.271-.403.165-1.499-.697-2.435-2.887-2.435-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-4 text-[14px] sm:text-[15px] font-medium">
            <Link href="/contact" className="hover:text-[#E78031] transition-colors">
              Terms &amp; Conditions
            </Link>
            <span>&bull;</span>
            <Link href="/contact" className="hover:text-[#E78031] transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="/contact" className="hover:text-[#E78031] transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
