"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "@/data/mockData";
import { PhoneCall, Compass, CheckCircle2, ShieldCheck, Headphones } from "lucide-react";

interface HeroSectionProps {
  onOpenEnquiry?: () => void;
}

export default function HeroSection({ onOpenEnquiry }: HeroSectionProps) {
  return (
    <section className="relative min-h-[580px] lg:min-h-[640px] flex flex-col justify-between overflow-hidden">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/lkm.jpg"
          alt="Palace of India - Delightful India Holidays"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        {/* Gradients to match the live site backdrop */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1c2b]/70 via-[#0f1c2b]/50 to-[#0f1c2b]/85" />
      </div>

      {/* Main Glass Panel Center Banner */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 lg:pt-24 pb-12 text-center w-full">
        <div className="glass-panel mx-auto p-6 sm:p-10 max-w-3xl border border-white/20 shadow-2xl backdrop-blur-md rounded-2xl">
          <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest text-[#c9a766] uppercase mb-2">
            Authentic & Royal Experiences
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-4 drop-shadow-sm font-serif">
            Tailor-Made Tours of India
          </h1>
          <p className="text-base sm:text-lg text-white/90 font-light max-w-2xl mx-auto leading-relaxed mb-8">
            &ldquo;Helping your way to Travel &amp; Blissfull Experience&rdquo;
            <br className="hidden sm:inline" />
            <span className="text-white/80 text-sm sm:text-base">
              Craft your Perfect India Trip Planning &amp; Itinerary
            </span>
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenEnquiry}
              className="glass-button w-full sm:w-auto px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-[#c9a766] border border-white/20 hover:border-[#c9a766] transition-all shadow-lg cursor-pointer"
            >
              Start Planning
            </button>
            <a
              href={companyInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-[#25D366] border border-white/20 hover:border-[#25D366] transition-all shadow-lg"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Call us Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3 Highlight Badges */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Feature 1 */}
          <div className="flex items-center gap-4 rounded-xl bg-white/95 p-4 shadow-lg border border-[#e8dcc8]/60 backdrop-blur-sm transition-transform hover:-translate-y-1">
            <div className="relative h-12 w-12 flex-shrink-0">
              <Image
                src="/assets/images/tvicon1.1.png"
                alt="700+ Destinations"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#192a3d]">700+ Destinations</h4>
              <p className="text-xs text-gray-600 leading-snug">
                Our expert team handpicked all destinations on this site
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-4 rounded-xl bg-white/95 p-4 shadow-lg border border-[#e8dcc8]/60 backdrop-blur-sm transition-transform hover:-translate-y-1">
            <div className="relative h-12 w-12 flex-shrink-0">
              <Image
                src="/assets/images/tvicon2.1.png"
                alt="Best Price Guarantee"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#192a3d]">Best Price Guarantee</h4>
              <p className="text-xs text-gray-600 leading-snug">
                Price match within 48 hours of order confirmation
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-4 rounded-xl bg-white/95 p-4 shadow-lg border border-[#e8dcc8]/60 backdrop-blur-sm transition-transform hover:-translate-y-1">
            <div className="relative h-12 w-12 flex-shrink-0">
              <Image
                src="/assets/images/tvicon3.png"
                alt="Top Notch Support"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#192a3d]">Top Notch Support</h4>
              <p className="text-xs text-gray-600 leading-snug">
                We are here to help, before, during, and even after your trip
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
