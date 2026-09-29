"use client";

import React, { useState } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TourCarousel from "@/components/TourCarousel";
import TourGrid3 from "@/components/TourGrid3";
import SectionCtaButton from "@/components/SectionCtaButton";
import TravelToIndiaSection from "@/components/TravelToIndiaSection";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { tourPackages } from "@/data/mockData";

export default function HomePage() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedTourId, setSelectedTourId] = useState<string | undefined>(undefined);

  const handleOpenEnquiry = (tourId?: string) => {
    setSelectedTourId(tourId);
    setEnquiryModalOpen(true);
  };

  // Section 3: Golden Triangle Tours (6 items for carousel)
  const goldenTriangleTours = tourPackages
    .filter((t) => t.category === "Golden Triangle Tours")
    .slice(0, 6);

  // Section 4: Rajasthan Tour Packages (6 items for carousel)
  const rajasthanTours = tourPackages
    .filter((t) => t.category === "Rajasthan Tour Packages")
    .slice(0, 6);

  // Section 5: Same Day Tours (6 items for carousel)
  const sameDayTours = tourPackages
    .filter((t) => t.category === "Same Day Tours")
    .slice(0, 6);

  // Section 6: Honeymoon Tour Packages (3 items grid)
  const honeymoonTours = tourPackages
    .filter((t) => t.category === "Honeymoon Tour Packages")
    .slice(0, 3);

  // Section 7: Group Tour Packages (3 items grid)
  const groupTours = tourPackages
    .filter((t) => t.category === "Group Tour Packages")
    .slice(0, 3);

  // Section 8: Wildlife Tours (3 items grid: Rajasthan Wildlife, Corbett, South India)
  const wildlifeTours = [
    tourPackages.find((t) => t.id === "rajasthan-wildlife-tour"),
    tourPackages.find((t) => t.id === "corbett-wildlife-tour"),
    tourPackages.find((t) => t.id === "wildlife-of-south-india"),
  ].filter(Boolean) as typeof tourPackages;

  // Section 9: Jaisalmer Tour Packages (3 items grid)
  const jaisalmerTours = tourPackages
    .filter((t) => t.category === "Jaisalmer Tour Packages")
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Top Header Bar */}
      <TopBar onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Main Navigation Bar */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Main Content Sections matching live site sequence */}
      <main className="flex-1">
        {/* Section 1 & 2: Hero Banner & 3 Feature Badges */}
        <HeroSection onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* Section 3: Golden Triangle Tours India - Best Selling Packages Carousel */}
        <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <h2 className="section-heading mb-4 sm:mb-5">
            Golden Triangle Tours India -{" "}
            <span style={{ color: "#FFAF19" }}>Best Selling Packages</span>
          </h2>
          <TourCarousel
            tours={goldenTriangleTours}
            onEnquire={handleOpenEnquiry}
          />
          {/* 1. Below Golden Triangle Tours carousel: View All Tours button */}
          <SectionCtaButton
            label="View All Tours"
            href="/golden-triangle-tours"
          />
        </section>

        {/* Section 4: Rajasthan Tour Packages Carousel */}
        <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-gray-100">
          <h2 className="section-heading mb-4 sm:mb-5">
            <span style={{ color: "#FFAF19" }}>Rajastha Tour Packages</span>
          </h2>
          <TourCarousel
            tours={rajasthanTours}
            onEnquire={handleOpenEnquiry}
          />
          {/* 2. Below Rajasthan Tours carousel: More Rajasthan Tours button */}
          <SectionCtaButton
            label="More Rajasthan Tours"
            href="/rajasthan-tours"
          />
        </section>

        {/* Section 5: Best Travel Agency in Jaisalmer + Same Day Tours Carousel */}
        <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-gray-100">
          <div className="mb-6 sm:mb-8">
            <h2 className="section-heading mb-3 sm:mb-4">Best Travel Agency in Jaisalmer</h2>
            <p className="font-roboto text-[15px] sm:text-[16px] text-gray-700 max-w-5xl mx-auto text-center leading-relaxed">
              Jaisalmer, the “Golden City,” is a treasure trove of history, culture, and unparalleled desert beauty. To explore this magnificent destination in luxury and comfort, a Luxury Travel Agency in Jaisalmer is essential. Whether you’re seeking the best experiences through a Jaisalmer Tuktuk Tour, a Jaisalmer Walking Tour, or a customized Jaisalmer tour package, partnering with the best travel agency in Jaisalmer ensures an unforgettable adventure. With the help of the best travel agent in Jaisalmer or a reliable travel company in Jaisalmer, you can dive deep into the wonders of this golden city. For those who appreciate expert guidance, a travel consultant in Jaisalmer or professional tour operators in Jaisalmer can provide tailored itineraries to suit your needs. Opting for a trusted tour company in Jaisalmer or a convenient car travel agency in Jaisalmer will make your journey through this desert paradise truly seamless and memorable.
            </p>
          </div>

          <h2 className="section-heading mb-4 sm:mb-5">
            <span style={{ color: "#FFAF19" }}>Same </span> Day Tours
          </h2>
          <TourCarousel
            tours={sameDayTours}
            onEnquire={handleOpenEnquiry}
          />
          {/* 3. Below Same Day Tours carousel: More Same Day Tours button */}
          <SectionCtaButton
            label="More Same Day Tours"
            href="/same-day-tours"
          />
        </section>

        {/* Section 6: Honeymoon Tour Packages (3-card grid) */}
        <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-gray-100">
          <h2 className="section-heading mb-4 sm:mb-5">
            <span style={{ color: "#FFAF19" }}>Honeymoon </span> Tour Packages
          </h2>
          <TourGrid3
            tours={honeymoonTours}
            onEnquire={handleOpenEnquiry}
          />
          {/* 4. Below Honeymoon Tours: More Honeymoon Tours button */}
          <SectionCtaButton
            label="More Honeymoon Tours"
            href="/honeymoon-tours"
          />
        </section>

        {/* Section 7: Group Tour Packages (3-card grid) */}
        <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-gray-100">
          <h2 className="section-heading mb-4 sm:mb-5">
            <span style={{ color: "#FFAF19" }}>Group </span> Tour Packages
          </h2>
          <TourGrid3
            tours={groupTours}
            onEnquire={handleOpenEnquiry}
          />
          {/* 5. Below Group Tours: More Tours button */}
          <SectionCtaButton
            label="More Group Tours"
            href="/group-tour-packages"
          />
        </section>

        {/* Section 8: Wildlife Tours (3-card grid) */}
        <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-gray-100">
          <h2 className="section-heading mb-4 sm:mb-5">
            <span style={{ color: "#FFAF19" }}>Wildlife </span> Tours
          </h2>
          <TourGrid3
            tours={wildlifeTours}
            onEnquire={handleOpenEnquiry}
          />
          {/* 6. Below Wildlife Tours: More Wildlife Tours button */}
          <SectionCtaButton
            label="More Wildlife Tours"
            href="/wildlife-tours"
          />
        </section>

        {/* Section 9: Jaisalmer Tour Packages (3-card grid) */}
        <section className="py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-gray-100">
          <h2 className="section-heading mb-4 sm:mb-5">
            <span style={{ color: "#FFAF19" }}>Jaisalmer</span> Tour Packages
          </h2>
          <TourGrid3
            tours={jaisalmerTours}
            onEnquire={handleOpenEnquiry}
          />
          {/* 7. Below Jaisalmer Tours: More Jaisalmer Tours button */}
          <SectionCtaButton
            label="More Jaisalmer Tours"
            href="/jaisalmer-tour-packages"
          />
        </section>

        {/* Section 10: Travel to India + Why Delightful India Holidays? (4 blocks side by side) */}
        <TravelToIndiaSection />

        {/* Note: Section 11 (IndiaRegionsSection) removed as per user instruction 10 */}

        {/* Section 12: Customer Reviews (Dual Slider matching attached screenshot) */}
        <Testimonials />

        {/* Section 13: News & Blog */}
        <BlogSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Interactive Modal & Floating Action Button */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        selectedTourId={selectedTourId}
      />
      <WhatsAppFloatingButton />
    </div>
  );
}
