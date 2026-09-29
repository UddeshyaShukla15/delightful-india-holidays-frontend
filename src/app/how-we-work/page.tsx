"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { ChevronRight } from "lucide-react";

export default function HowWeWorkPage() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar onOpenEnquiry={() => setEnquiryModalOpen(true)} />
      <Navbar onOpenEnquiry={() => setEnquiryModalOpen(true)} />

      {/* 1. Hero Header with Background Photo */}
      <section className="relative w-full h-[360px] sm:h-[420px] flex items-center justify-center overflow-hidden">
        {/* Background Image from Main Website */}
        <Image
          src="/assets/images/Refund-Policy.jpg"
          alt="How We Work - Delightful India Holidays"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark Overlay (matches original elementor #00000073) */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Title & Breadcrumb */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight drop-shadow-md font-sans">
            How We Work
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-white/90 text-sm sm:text-base mt-4 font-medium">
            <Link href="/" className="hover:text-[#E78031] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-white/70" />
            <span className="text-white">How We Work</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* 2. How we Work Section */}
        <section className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#192a3d] font-sans mb-5">
            How we Work
          </h2>

          <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed font-normal mb-12 sm:mb-16">
            Planning your dream holiday to India should be exciting—not overwhelming. At Delightful India Holidays, we
            simplify the entire process by offering personalized travel planning, transparent pricing, and dedicated
            support from your first inquiry until you return home. Our goal is to create memorable journeys tailored to
            your interests, travel style, and budget.
          </p>

          {/* 3. The 5-Step Process Graphic (From Attached Image) */}
          <div className="w-full max-w-6xl mx-auto">
            {/* Desktop Graphic */}
            <div className="hidden md:block">
              <Image
                src="/assets/images/how-we-work.png"
                alt="Delightful India Holidays - How We Work 5-Step Process: 1. Submit Inquiry, 2. Receive Custom Itinerary, 3. Review & Confirm, 4. We Handle Everything, 5. Enjoy Your Journey"
                width={1743}
                height={902}
                priority
                className="w-full h-auto rounded-2xl shadow-sm"
              />
            </div>

            {/* Mobile Graphic */}
            <div className="block md:hidden">
              <Image
                src="/assets/images/how-we-work-mobile.png"
                alt="Delightful India Holidays - How We Work 5-Step Process Mobile"
                width={879}
                height={1789}
                priority
                className="w-full max-w-sm mx-auto h-auto rounded-2xl shadow-sm"
              />
            </div>
          </div>
        </section>

        {/* 4. Our Philosophy Section with 6 Things */}
        <section className="mt-16 sm:mt-24 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#192a3d] font-sans mb-10 sm:mb-14">
            Our Philosophy
          </h2>

          <div className="w-full max-w-6xl mx-auto">
            {/* Desktop Graphic */}
            <div className="hidden md:block">
              <Image
                src="/assets/images/Our-Philosophy.png"
                alt="Our Philosophy - 6 Key Principles: 1. Planning Your Trip, 2. Choosing Places to Stay, 3. Pricing Format, 4. Booking Your Trip, 5. Meeting Our Guests, 6. Sustainable Travel"
                width={1536}
                height={1024}
                className="w-full h-auto rounded-2xl shadow-sm"
              />
            </div>

            {/* Mobile Graphic */}
            <div className="block md:hidden">
              <Image
                src="/assets/images/Our-Philosophy-mobile.png"
                alt="Our Philosophy - 6 Key Principles Mobile"
                width={923}
                height={1704}
                className="w-full max-w-sm mx-auto h-auto rounded-2xl shadow-sm"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <EnquiryModal isOpen={enquiryModalOpen} onClose={() => setEnquiryModalOpen(false)} />
      <WhatsAppFloatingButton />
    </div>
  );
}
