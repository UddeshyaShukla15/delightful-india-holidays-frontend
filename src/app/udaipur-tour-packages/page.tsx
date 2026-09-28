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

export default function UdaipurTourPackagesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTourId, setSelectedTourId] = useState<string | undefined>();

  const udaipurTours = tourPackages.filter(
    (t) =>
      t.id.includes("udaipur") ||
      t.route.toLowerCase().includes("udaipur") ||
      t.title.toLowerCase().includes("udaipur") ||
      t.category === "Rajasthan Tour Packages"
  );

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <TopBar />
      <Navbar onOpenEnquiry={() => setIsModalOpen(true)} />

      {/* Hero Banner */}
      <section className="relative bg-[#192a3d] text-white py-16 sm:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/assets/images/Pichola-Lake-Udaipur-Rajasthan.jpeg"
            alt="Lake Pichola Udaipur"
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
            <span>Udaipur Tours</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-light font-serif mb-4 tracking-tight">
            Udaipur Tour Packages
          </h1>
          <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
            Fall in love with the Venice of the East. Sunset boat rides on Lake Pichola, towering City Palace,
            peaceful Jagmandir Island, Saheliyon Ki Bari, and the majestic Monsoon Palace atop the Aravalis.
          </p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-[2px] text-[#c9a766] uppercase mb-2 block">
              City of Lakes
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#192a3d] font-normal">
              Best Udaipur Sightseeing &amp; Excursions
            </h2>
            <div className="h-1 w-20 bg-[#E78031] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {udaipurTours.slice(0, 6).map((tour) => (
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

      {/* Udaipur Highlights */}
      <section className="py-14 bg-[#faf8f5] px-4 sm:px-6 lg:px-8 border-y border-[#ede5d8]">
        <div className="max-w-5xl mx-auto space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-2xl font-serif font-bold text-[#192a3d]">
            Romantic Lakes &amp; Mewar Royalty
          </h3>
          <p>
            Udaipur is renowned for its tranquil beauty and architectural majesty. Tour the massive
            <strong>City Palace complex</strong>, take an evening sunset cruise to <strong>Jagmandir Island</strong>,
            admire the fountains at <strong>Saheliyon Ki Bari</strong>, and watch the sun dip into the Aravali hills
            from <strong>Sajjangarh (Monsoon Palace)</strong>. Day excursions to Kumbhalgarh Fort and Ranakpur Jain
            Temples are also available with private chauffeur.
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
