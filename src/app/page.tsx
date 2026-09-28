"use client";

import React, { useState } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TourCarousel from "@/components/TourCarousel";
import TourGrid3 from "@/components/TourGrid3";
import TravelToIndiaSection from "@/components/TravelToIndiaSection";
import IndiaRegionsSection from "@/components/IndiaRegionsSection";
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
  const goldenTriangleTours = tourPackages.filter(
    (t) => t.category === "Golden Triangle Tours"
  );

  // Section 4: Rajasthan Tour Packages (6 items for carousel)
  const rajasthanTours = tourPackages.filter(
    (t) => t.category === "Rajasthan Tour Packages"
  );

  // Section 5: Same Day Tours (6 items for carousel)
  const sameDayTours = tourPackages.filter(
    (t) => t.category === "Same Day Tours"
  );

  // Section 6: Honeymoon Tour Packages (3 items grid)
  const honeymoonTours = tourPackages.filter(
    (t) => t.category === "Honeymoon Tour Packages"
  ).slice(0, 3);

  // Section 7: Group Tour Packages (3 items grid)
  const groupTours = tourPackages.filter(
    (t) => t.category === "Group Tour Packages"
  ).slice(0, 3);

  // Section 8: Wildlife Tours (3 items grid: Rajasthan Wildlife, Corbett, South India)
  const wildlifeTours = [
    tourPackages.find((t) => t.id === "rajasthan-wildlife-tour"),
    tourPackages.find((t) => t.id === "corbett-wildlife-tour"),
    tourPackages.find((t) => t.id === "wildlife-of-south-india"),
  ].filter(Boolean) as typeof tourPackages;

  // Section 9: Jaisalmer Tour Packages (3 items grid)
  const jaisalmerTours = tourPackages.filter(
    (t) => t.category === "Jaisalmer Tour Packages"
  ).slice(0, 3);

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
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <h2 className="section-heading mb-8">
            Golden Triangle Tours India -{" "}
            <span style={{ color: "#FFAF19" }}>Best Selling Packages</span>
          </h2>
          <TourCarousel
            tours={goldenTriangleTours}
            onEnquire={handleOpenEnquiry}
          />
        </section>

        {/* Section 4: Rajasthan Tour Packages Carousel */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-gray-100">
          <h2 className="section-heading mb-8">
            <span style={{ color: "#FFAF19" }}>Rajastha Tour Packages</span>
          </h2>
          <TourCarousel
            tours={rajasthanTours}
            onEnquire={handleOpenEnquiry}
          />
        </section>

        {/* Section 5: Best Travel Agency in Jaisalmer + Same Day Tours Carousel */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-gray-100">
          <div className="mb-12">
            <h2 className="section-heading mb-6">Best Travel Agency in Jaisalmer</h2>
            <p className="font-roboto text-[15px] sm:text-[16px] text-gray-700 max-w-5xl mx-auto text-center leading-relaxed">
              Jaisalmer, the “Golden City,” is a treasure trove of history, culture, and unparalleled desert beauty. To explore this magnificent destination in luxury and comfort, a Luxury Travel Agency in Jaisalmer is essential. Whether you’re seeking the best experiences through a Jaisalmer Tuktuk Tour, a Jaisalmer Walking Tour, or a customized Jaisalmer tour package, partnering with the best travel agency in Jaisalmer ensures an unforgettable adventure. With the help of the best travel agent in Jaisalmer or a reliable travel company in Jaisalmer, you can dive deep into the wonders of this golden city. For those who appreciate expert guidance, a travel consultant in Jaisalmer or professional tour operators in Jaisalmer can provide tailored itineraries to suit your needs. Opting for a trusted tour company in Jaisalmer or a convenient car travel agency in Jaisalmer will make your journey through this desert paradise truly seamless and memorable.
            </p>
          </div>

          <h2 className="section-heading mb-8">
            <span style={{ color: "#FFAF19" }}>Same </span> Day Tours
          </h2>
          <TourCarousel
            tours={sameDayTours}
            onEnquire={handleOpenEnquiry}
          />
        </section>

        {/* Section 6: Honeymoon Tour Packages (3-card grid) */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-gray-100">
          <h2 className="section-heading mb-8">
            <span style={{ color: "#FFAF19" }}>Honeymoon </span> Tour Packages
          </h2>
          <TourGrid3
            tours={honeymoonTours}
            onEnquire={handleOpenEnquiry}
          />
        </section>

        {/* Section 7: Group Tour Packages (3-card grid) */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-gray-100">
          <h2 className="section-heading mb-8">
            <span style={{ color: "#FFAF19" }}>Group </span> Tour Packages
          </h2>
          <TourGrid3
            tours={groupTours}
            onEnquire={handleOpenEnquiry}
          />
        </section>

        {/* Section 8: Wildlife Tours (3-card grid) */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-gray-100">
          <h2 className="section-heading mb-8">
            <span style={{ color: "#FFAF19" }}>Wildlife </span> Tours
          </h2>
          <TourGrid3
            tours={wildlifeTours}
            onEnquire={handleOpenEnquiry}
          />
        </section>

        {/* Section 9: Jaisalmer Tour Packages (3-card grid) */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-gray-100">
          <h2 className="section-heading mb-8">
            <span style={{ color: "#FFAF19" }}>Jaisalmer</span> Tour Packages
          </h2>
          <TourGrid3
            tours={jaisalmerTours}
            onEnquire={handleOpenEnquiry}
          />
        </section>

        {/* Section 10: Travel to India + Why Delightful India Holidays? */}
        <TravelToIndiaSection onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* Section 11: India Tour Packages (4 Regions: North, West, South, East) */}
        <IndiaRegionsSection />

        {/* Section 12: Customer Reviews Carousel (Trustindex Google 5.0) */}
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
