"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "@/data/mockData";

interface HeroSectionProps {
  onOpenEnquiry?: () => void;
}

export default function HeroSection({ onOpenEnquiry }: HeroSectionProps) {
  return (
    <div className="relative w-full">
      {/* Hero Banner Section */}
      <section className="relative min-h-[520px] lg:min-h-[580px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/lkm.jpg"
            alt="Palace of India - Delightful India Holidays"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Subtle overlay for contrast */}
          <div className="absolute inset-0 bg-black/35" />
        </div>

        {/* Center Glass Panel */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center w-full">
          <div className="glass-panel mx-auto p-6 sm:p-10 max-w-3xl rounded-[16px] backdrop-blur-md bg-[#0f1c2b]/40 border border-white/20 shadow-2xl">
            <h1 className="font-times text-3xl sm:text-5xl lg:text-6xl font-normal text-white mb-4 leading-tight drop-shadow-sm">
              Tailor-Made Tours of India
            </h1>
            <p className="font-roboto text-sm sm:text-base lg:text-lg text-white/95 max-w-2xl mx-auto leading-relaxed mb-8">
              &ldquo;Helping your way to Travel &amp; Blissfull Experience&rdquo;
              <br />
              <span className="text-white/90 text-xs sm:text-sm lg:text-base">
                Craft your Perfect India Trip Planning &amp; Itinerary
              </span>
            </p>

            {/* Glass Toolbar with Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/plan-my-tour"
                className="w-full sm:w-auto px-8 py-3 rounded-[8px] text-sm font-semibold tracking-wide text-white bg-white/15 hover:bg-[#FFAF19] border border-white/30 hover:border-[#FFAF19] transition-all cursor-pointer shadow-md text-center inline-block"
              >
                Start Planning
              </Link>
              <a
                href={companyInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3 rounded-[8px] text-sm font-semibold tracking-wide text-white bg-white/15 hover:bg-[#25D366] border border-white/30 hover:border-[#25D366] transition-all shadow-md text-center"
              >
                Call us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Badges Banner (Section 2) with Gradient */}
      <section className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 -mt-10 sm:-mt-12 mb-3 sm:mb-4">
        <div className="rounded-[4px] shadow-xl bg-gradient-to-r from-[#228B48] via-[#85863D] to-[#E78031] p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-white/20">
            {/* Feature 1 */}
            <div className="flex items-center gap-4 text-white">
              <div className="relative w-14 h-14 flex-shrink-0">
                <Image
                  src="/assets/images/tvicon1.1.png"
                  alt="700+ Destinations"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-roboto text-[16px] font-normal uppercase text-white tracking-wide">
                  700+ Destinations
                </p>
                <p className="font-roboto text-[13px] text-white/90 leading-snug mt-1">
                  Our expert team handpicked all destinations in this site
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-4 text-white pt-6 md:pt-0 md:pl-6">
              <div className="relative w-14 h-14 flex-shrink-0">
                <Image
                  src="/assets/images/tvicon2.1.png"
                  alt="Best Price Guarantee"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-roboto text-[16px] font-normal uppercase text-white tracking-wide">
                  Best Price Guarantee
                </p>
                <p className="font-roboto text-[13px] text-white/90 leading-snug mt-1">
                  Price match within 48 hours of order confirmation
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-4 text-white pt-6 md:pt-0 md:pl-6">
              <div className="relative w-14 h-14 flex-shrink-0">
                <Image
                  src="/assets/images/tvicon3.png"
                  alt="Top Notch support"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-roboto text-[16px] font-normal uppercase text-white tracking-wide">
                  Top Notch support
                </p>
                <p className="font-roboto text-[13px] text-white/90 leading-snug mt-1">
                  We are here to help, before, during, and even after your trip.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
