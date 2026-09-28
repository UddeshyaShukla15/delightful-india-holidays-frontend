"use client";

import React from "react";
import { companyInfo } from "@/data/mockData";

export default function CredibilitySection() {
  return (
    <section className="relative bg-white py-16 px-4 sm:px-6 lg:px-8">

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-xs sm:text-sm font-semibold tracking-[2px] text-[#c9a766] uppercase mb-3">
            Trusted by Travellers
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#2a2a2a] mb-4 font-serif">
            Our <span className="italic text-[#c9a766] font-normal">Credibility</span>
          </h2>
          <p className="text-sm sm:text-base text-[#8b8b8b] max-w-2xl mx-auto leading-relaxed font-normal">
            Years of desert hospitality, thousands of happy guests, and top ratings across every major travel platform.
          </p>
        </div>

        {/* 5 Statistics (Clean, no boxes, matching screenshot) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16 text-center">
          <div>
            <div className="text-3xl sm:text-5xl font-semibold text-[#2a2a2a] mb-2 font-serif">
              15+
            </div>
            <div className="text-xs uppercase tracking-wider text-[#8b8b8b] font-medium">
              Years in Business
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-5xl font-semibold text-[#2a2a2a] mb-2 font-serif">
              51000+
            </div>
            <div className="text-xs uppercase tracking-wider text-[#8b8b8b] font-medium">
              Happy Guests
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-5xl font-semibold text-[#2a2a2a] mb-2 font-serif">
              5.0
            </div>
            <div className="text-xs uppercase tracking-wider text-[#8b8b8b] font-medium">
              Avg. Rating
            </div>
          </div>

          <div>
            <div className="text-3xl sm:text-5xl font-semibold text-[#2a2a2a] mb-2 font-serif">
              350+
            </div>
            <div className="text-xs uppercase tracking-wider text-[#8b8b8b] font-medium">
              Tour Packages
            </div>
          </div>

          <div className="col-span-2 md:col-span-1">
            <div className="text-3xl sm:text-5xl font-semibold text-[#2a2a2a] mb-2 font-serif">
              100%
            </div>
            <div className="text-xs uppercase tracking-wider text-[#8b8b8b] font-medium">
              Recommended
            </div>
          </div>
        </div>

        {/* Listed & Reviewed On */}
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-[2px] text-[#8b8b8b] mb-6">
            Listed &amp; Reviewed On
          </div>

          {/* 3 Review Badges Matching Screenshot */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {/* 1. Tripadvisor (Green circle with white T) */}
            <a
              href={companyInfo.socialLinks.tripadvisor}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-3 px-6 rounded-full border-2 border-[#e8dcc8] bg-white/50 hover:bg-white hover:border-[#c9a766] transition-all shadow-sm group"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#00aa6c] text-white font-extrabold text-xs">
                T
              </span>
              <div className="text-left">
                <div className="text-xs font-bold text-gray-900 group-hover:text-[#c9a766] transition-colors">
                  Tripadvisor
                </div>
                <div className="text-[11px] text-[#8b8b8b] font-medium">5.0 - Excellent</div>
              </div>
            </a>

            {/* 2. Facebook (Yellow/Golden circle with white f) */}
            <a
              href={companyInfo.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-3 px-6 rounded-full border-2 border-[#e8dcc8] bg-white/50 hover:bg-white hover:border-[#c9a766] transition-all shadow-sm group"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#eab308] text-white font-extrabold text-xs">
                f
              </span>
              <div className="text-left">
                <div className="text-xs font-bold text-gray-900 group-hover:text-[#c9a766] transition-colors">
                  Facebook
                </div>
                <div className="text-[11px] text-[#8b8b8b] font-medium">5.0 - Wonderful</div>
              </div>
            </a>

            {/* 3. Google Reviews (Red circle with white G) */}
            <div className="flex items-center justify-center gap-3 py-3 px-6 rounded-full border-2 border-[#e8dcc8] bg-white/50 hover:bg-white hover:border-[#c9a766] transition-all shadow-sm group">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ea4335] text-white font-extrabold text-xs">
                G
              </span>
              <div className="text-left">
                <div className="text-xs font-bold text-gray-900 group-hover:text-[#c9a766] transition-colors">
                  Google Reviews
                </div>
                <div className="text-[11px] text-[#8b8b8b] font-medium">5.0 - Outstanding</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
