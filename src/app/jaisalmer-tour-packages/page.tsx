"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import CredibilitySection from "@/components/CredibilitySection";
import LiveTourCard from "@/components/LiveTourCard";
import EnquiryModal from "@/components/EnquiryModal";
import { tourPackages } from "@/data/mockData";

export default function JaisalmerTourPackagesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTourId, setSelectedTourId] = useState<string | undefined>();

  const jaisalmerTours = tourPackages.filter(
    (t) =>
      t.id.includes("jaisalmer") ||
      t.route.toLowerCase().includes("jaisalmer") ||
      t.title.toLowerCase().includes("jaisalmer")
  );

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <TopBar />
      <Navbar onOpenEnquiry={() => setIsModalOpen(true)} />

      {/* Hero Banner */}
      <section className="relative bg-[#192a3d] text-white py-16 sm:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/assets/images/desert-sam-duns-jaialmer.jpg"
            alt="Jaisalmer Thar Desert"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#c9a766] uppercase mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/india-day-tours" className="hover:underline">Day Tours</Link>
            <span>/</span>
            <span>Jaisalmer Tours</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-light font-serif mb-4 tracking-tight">
            Jaisalmer Tour Packages
          </h1>
          <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
            Headquartered in Jaisalmer, Delightful India Holidays brings you authentic Thar desert safaris,
            golden fortress walks, overnight dune camping, folk music, and romantic haveli tours.
          </p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-[2px] text-[#c9a766] uppercase mb-2 block">
              Golden City Adventures
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#192a3d] font-normal">
              Best Jaisalmer Desert &amp; City Tours
            </h2>
            <div className="h-1 w-20 bg-[#E78031] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {jaisalmerTours.map((tour) => (
              <LiveTourCard
                key={tour.id}
                tour={tour}
                onEnquire={(id) => {
                  setSelectedTourId(id);
                  setIsModalOpen(true);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Desert & City Highlights */}
      <section className="py-14 bg-[#faf8f5] px-4 sm:px-6 lg:px-8 border-y border-[#ede5d8]">
        <div className="max-w-5xl mx-auto space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-2xl font-serif font-bold text-[#192a3d]">
            Desert Living &amp; Golden Fort Heritage
          </h3>
          <p>
            Experience the only living fort in India — the <strong>Sonar Qila (Jaisalmer Fort)</strong>, carved
            from yellow sandstone. Visit Patwon Ki Haveli, Salim Singh Ki Haveli, and Gadisar Lake. In the afternoon,
            venture into the golden dunes of <strong>Sam or Khuri</strong> for thrilling jeep safaris, sunset camel
            rides, and stargazing at our private desert camps.
          </p>
        </div>
      </section>

      <CredibilitySection />
      <Footer />
      <WhatsAppFloatingButton />
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedTourId={selectedTourId}
      />
    </div>
  );
}
