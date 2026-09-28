"use client";

import React from "react";
import { companyInfo } from "@/data/mockData";
import { Award, Users, Star, Compass, ThumbsUp } from "lucide-react";

export default function CredibilitySection() {
  return (
    <section className="bg-gradient-to-b from-[#faf7f2] to-white py-16 px-4 sm:px-6 lg:px-8 border-y border-[#e8dcc8]/60">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-xs sm:text-sm font-semibold tracking-widest text-[#c9a766] uppercase mb-2">
            Trusted by Travellers
          </div>
          <h2 className="text-3xl sm:text-5xl font-light text-[#2a2a2a] mb-4 font-serif">
            Our <span className="italic text-[#c9a766] font-normal">Credibility</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Years of desert hospitality, thousands of happy guests, and top ratings across every major travel platform.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 mb-14 text-center">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e8dcc8]/70 hover:shadow-md transition-shadow">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#192a3d] mb-1 font-serif">
              {companyInfo.stats.yearsInBusiness}
            </div>
            <div className="text-xs uppercase tracking-wider font-semibold text-gray-500">
              Years in Business
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e8dcc8]/70 hover:shadow-md transition-shadow">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#192a3d] mb-1 font-serif">
              {companyInfo.stats.happyGuests}
            </div>
            <div className="text-xs uppercase tracking-wider font-semibold text-gray-500">
              Happy Guests
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e8dcc8]/70 hover:shadow-md transition-shadow">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#c9a766] mb-1 font-serif flex items-center justify-center gap-1">
              <span>{companyInfo.stats.avgRating}</span>
              <Star className="h-6 w-6 fill-[#c9a766] text-[#c9a766]" />
            </div>
            <div className="text-xs uppercase tracking-wider font-semibold text-gray-500">
              Avg. Rating
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#e8dcc8]/70 hover:shadow-md transition-shadow">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#192a3d] mb-1 font-serif">
              {companyInfo.stats.tourPackages}
            </div>
            <div className="text-xs uppercase tracking-wider font-semibold text-gray-500">
              Tour Packages
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 bg-white p-6 rounded-2xl shadow-sm border border-[#e8dcc8]/70 hover:shadow-md transition-shadow">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#192a3d] mb-1 font-serif">
              {companyInfo.stats.recommended}
            </div>
            <div className="text-xs uppercase tracking-wider font-semibold text-gray-500">
              Recommended
            </div>
          </div>
        </div>

        {/* Listed & Reviewed On */}
        <div className="text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
            Listed &amp; Reviewed On
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {/* TripAdvisor */}
            <a
              href={companyInfo.socialLinks.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 rounded-full border-2 border-[#e8dcc8] bg-white/70 hover:bg-white hover:border-[#c9a766] shadow-sm transition-all group"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00af87] text-white font-black text-xs">
                TA
              </span>
              <div className="text-left">
                <div className="text-xs font-bold text-gray-900 group-hover:text-[#c9a766] transition-colors">
                  Tripadvisor
                </div>
                <div className="text-[11px] text-gray-500 font-medium">5.0 - Excellent</div>
              </div>
            </a>

            {/* Facebook */}
            <a
              href={companyInfo.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 rounded-full border-2 border-[#e8dcc8] bg-white/70 hover:bg-white hover:border-[#c9a766] shadow-sm transition-all group"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1877F2] text-white font-black text-xs">
                f
              </span>
              <div className="text-left">
                <div className="text-xs font-bold text-gray-900 group-hover:text-[#c9a766] transition-colors">
                  Facebook
                </div>
                <div className="text-[11px] text-gray-500 font-medium">5.0 - Wonderful</div>
              </div>
            </a>

            {/* Google */}
            <div className="flex items-center justify-center gap-3 p-4 rounded-full border-2 border-[#e8dcc8] bg-white/70 hover:bg-white hover:border-[#c9a766] shadow-sm transition-all group">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4285F4] text-white font-black text-xs">
                G
              </span>
              <div className="text-left">
                <div className="text-xs font-bold text-gray-900 group-hover:text-[#c9a766] transition-colors">
                  Google Reviews
                </div>
                <div className="text-[11px] text-gray-500 font-medium">5.0 - Outstanding</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
