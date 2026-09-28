"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { companyInfo } from "@/data/mockData";
import { MapPin, Phone, Mail, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#192a3d] text-gray-300 text-sm border-t border-white/10">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Brand & Contact Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block relative h-14 w-48">
              <Image
                src="/assets/images/DIH-1.webp"
                alt="Delightful India Holidays"
                fill
                className="object-contain object-left brightness-0 invert"
                sizes="200px"
              />
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed">
              Delightful India Holidays is a premier tailor-made travel operator providing personalized tour packages,
              desert safaris, luxury stays, and private chauffeured cars across India.
            </p>

            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#c9a766] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{companyInfo.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#c9a766] flex-shrink-0" />
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-gray-300 hover:text-[#c9a766] transition-colors"
                >
                  {companyInfo.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#c9a766] flex-shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-gray-300 hover:text-[#c9a766] transition-colors"
                >
                  {companyInfo.email}
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3 text-gray-400">
              <a
                href={companyInfo.socialLinks.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#c9a766] hover:text-white transition-colors"
                title="TripAdvisor"
              >
                <span className="text-[11px] font-black">TA</span>
              </a>
              <a
                href={companyInfo.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#c9a766] hover:text-white transition-colors"
                title="Facebook"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={companyInfo.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#c9a766] hover:text-white transition-colors"
                title="Twitter"
              >
                <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={companyInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#c9a766] hover:text-white transition-colors"
                title="Instagram"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={companyInfo.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#c9a766] hover:text-white transition-colors"
                title="YouTube"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Customer Support */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5 border-b border-white/10 pb-2">
              Customer Support
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <Link href="/about" className="hover:text-[#c9a766] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#c9a766] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#c9a766] transition-colors">
                  Help &amp; FAQs
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="hover:text-[#c9a766] transition-colors">
                  Guest Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact?service=car-hire" className="hover:text-[#c9a766] transition-colors">
                  Car &amp; Driver Hire
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#c9a766] transition-colors">
                  Career Opportunities
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#c9a766] transition-colors">
                  Payment Options
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#c9a766] transition-colors">
                  24x7 Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Tour Packages */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5 border-b border-white/10 pb-2">
              Popular Tour Packages
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <Link href="/tours/agra-sightseeing-tour" className="hover:text-[#c9a766] transition-colors">
                  Agra Tour Packages
                </Link>
              </li>
              <li>
                <Link href="/tours/delhi-sightseeing-tour" className="hover:text-[#c9a766] transition-colors">
                  Delhi Tour Packages
                </Link>
              </li>
              <li>
                <Link href="/tours/2-days-jaipur-agra-tour" className="hover:text-[#c9a766] transition-colors">
                  Jaipur Tour Packages
                </Link>
              </li>
              <li>
                <Link href="/tours/3-days-udaipur-tour" className="hover:text-[#c9a766] transition-colors">
                  Udaipur Tour Packages
                </Link>
              </li>
              <li>
                <Link href="/tours/blissful-jaisalmer-honeymoon-tour" className="hover:text-[#c9a766] transition-colors">
                  Jaisalmer Tour Packages
                </Link>
              </li>
              <li>
                <Link href="/tours/golden-triangle-group-tour" className="hover:text-[#c9a766] transition-colors">
                  Kerala Group Tours
                </Link>
              </li>
              <li>
                <Link href="/tours/wonders-of-ladakh-group-tour" className="hover:text-[#c9a766] transition-colors">
                  Ladakh Mountain Tours
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Tours Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5 border-b border-white/10 pb-2">
              Tours Services
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <Link href="/tours?category=Golden+Triangle+Tours" className="hover:text-[#c9a766] transition-colors">
                  Golden Triangle Tours
                </Link>
              </li>
              <li>
                <Link href="/tours?category=Rajasthan+Tour+Packages" className="hover:text-[#c9a766] transition-colors">
                  Rajasthan Tour Packages
                </Link>
              </li>
              <li>
                <Link href="/tours?category=Honeymoon+Tour+Packages" className="hover:text-[#c9a766] transition-colors">
                  Honeymoon Tours
                </Link>
              </li>
              <li>
                <Link href="/tours?category=Group+Tour+Packages" className="hover:text-[#c9a766] transition-colors">
                  Group Tours
                </Link>
              </li>
              <li>
                <Link href="/tours?category=Same+Day+Tours" className="hover:text-[#c9a766] transition-colors">
                  Same Day Tours
                </Link>
              </li>
              <li>
                <Link href="/tours?category=Wildlife+Tours" className="hover:text-[#c9a766] transition-colors">
                  Wildlife Tours
                </Link>
              </li>
              <li>
                <Link href="/admin/dashboard" className="text-[#c9a766] hover:underline font-semibold block pt-2">
                  → Staff &amp; Admin Panel
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment & Operator Trust Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-[#c9a766]" />
            <span className="text-xs text-gray-400 font-medium">
              Authorized India Tour Operator &bull; Registered Under Government of Rajasthan Tourism
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span className="px-2 py-1 rounded bg-white/5 border border-white/10">VISA</span>
            <span className="px-2 py-1 rounded bg-white/5 border border-white/10">MasterCard</span>
            <span className="px-2 py-1 rounded bg-white/5 border border-white/10">UPI</span>
            <span className="px-2 py-1 rounded bg-white/5 border border-white/10">Bank Transfer</span>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} {companyInfo.name}. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/contact" className="hover:text-gray-300 transition-colors">
              Terms &amp; Conditions
            </Link>
            <span>&bull;</span>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <span>&bull;</span>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
