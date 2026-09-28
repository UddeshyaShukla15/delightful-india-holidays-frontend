"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { whyChooseUsFeatures } from "@/data/mockData";
import { ArrowRight, CheckCircle, Shield, Award, Users2, Sparkles } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#faf7f2] border-t border-[#e8dcc8]/60">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Part 1: Why Delightful India Holidays */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#c9a766] uppercase">
              Our Core Promise
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-[#192a3d] mt-2 font-serif">
              Why Delightful India Holidays?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mt-4 leading-relaxed">
              At Delightful India Holidays, we believe every journey should be memorable, comfortable, and truly
              authentic. Our experienced local travel experts design personalized holidays that showcase India&apos;s
              rich culture, heritage, wildlife, and breathtaking landscapes.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUsFeatures.map((item) => (
              <div
                key={item.number}
                className="bg-white p-6 rounded-2xl border border-[#e8dcc8] shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#c9a766]/5 rounded-bl-full transition-transform group-hover:scale-125" />
                <span className="text-2xl font-black text-[#c9a766]/50 block mb-3 font-serif">
                  {item.number}
                </span>
                <h3 className="text-base font-bold text-[#192a3d] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Best Travel Agency in Jaisalmer Feature Box */}
        <div className="rounded-3xl bg-[#192a3d] text-white overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-[#c9a766] border border-white/10">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Headquarters in the Golden City</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-light font-serif tracking-tight text-white">
                Best Travel Agency in <span className="italic text-[#c9a766]">Jaisalmer</span>
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Jaisalmer, the &ldquo;Golden City,&rdquo; is a treasure trove of history, culture, and unparalleled desert
                beauty. To explore this magnificent destination in luxury and comfort, a Luxury Travel Agency in
                Jaisalmer is essential.
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                Whether you&apos;re seeking the best experiences through a Jaisalmer TukTuk Tour, a Jaisalmer Walking
                Tour, or a customized desert camping package at Sam Sand Dunes, our veteran local team ensures genuine
                Rajasthani hospitality and memories of a lifetime.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/tours?category=Jaisalmer+Tour+Packages"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#c9a766] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#b8924f] transition-all shadow-md"
                >
                  <span>Explore Jaisalmer Tours</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-transparent px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-all"
                >
                  <span>Meet Our Founder Kamal</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 shadow-inner">
              <Image
                src="/assets/images/Best-Places-to-Visit-in-Jaisalmer-1024x577.jpg"
                alt="Golden City Jaisalmer Desert Experience"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-white/90">
                <p className="font-semibold text-[#c9a766]">Jaisalmer Desert Camps &amp; Living Fort</p>
                <p className="text-[11px] text-white/70">Authentic Camel Safaris &amp; Rajasthani Folk Hospitality</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
