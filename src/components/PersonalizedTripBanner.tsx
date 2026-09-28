"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

interface PersonalizedTripBannerProps {
  onOpenEnquiry?: () => void;
}

export default function PersonalizedTripBanner({ onOpenEnquiry }: PersonalizedTripBannerProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-r from-[#192a3d] via-[#1f354d] to-[#192a3d] text-white overflow-hidden shadow-2xl border border-[#c9a766]/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 lg:p-16">
          {/* Text & CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#c9a766]/20 px-3.5 py-1 text-xs font-semibold text-[#c9a766] border border-[#c9a766]/30">
              <Sparkles className="h-3.5 w-3.5" />
              <span>100% Customized Itineraries</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-light font-serif tracking-tight text-white leading-tight">
              Travel to <span className="italic text-[#c9a766] font-normal">India</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-200 font-light leading-relaxed max-w-xl">
              Take inspiration from trips we organized in the past to create your own personalized trip to India.
              Tell us what you want to see, your pace, and your budget — our experts will craft it just for you.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center gap-2 rounded-xl bg-[#c9a766] px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-xl hover:bg-[#b8924f] hover:shadow-2xl transition-all cursor-pointer"
              >
                <span>Create Your Personalized Tour</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Banner Graphic Image */}
          <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-white/10">
            <Image
              src="/assets/images/create-your-personalized-tour-1024x683.png"
              alt="Personalized Tour to India"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
