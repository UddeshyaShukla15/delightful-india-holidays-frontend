"use client";

import React, { useState } from "react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TourCard from "@/components/TourCard";
import CategoryFilter from "@/components/CategoryFilter";
import CredibilitySection from "@/components/CredibilitySection";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import PersonalizedTripBanner from "@/components/PersonalizedTripBanner";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { tourPackages } from "@/data/mockData";
import Link from "next/link";
import { ArrowRight, Flame, Sparkles } from "lucide-react";

export default function HomePage() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [selectedTourId, setSelectedTourId] = useState<string | undefined>(undefined);
  const [selectedCategory, setSelectedCategory] = useState("All Tours");

  const handleOpenEnquiry = (tourId?: string) => {
    setSelectedTourId(tourId);
    setEnquiryModalOpen(true);
  };

  // Filtered tours based on selectedCategory tab
  const filteredTours =
    selectedCategory === "All Tours"
      ? tourPackages
      : tourPackages.filter((t) => t.category === selectedCategory);

  // Grouped tours for dedicated sections matching the live site
  const goldenTriangleTours = tourPackages.filter(
    (t) => t.category === "Golden Triangle Tours"
  );
  const rajasthanTours = tourPackages.filter(
    (t) => t.category === "Rajasthan Tour Packages"
  );
  const sameDayTours = tourPackages.filter(
    (t) => t.category === "Same Day Tours"
  );
  const honeymoonTours = tourPackages.filter(
    (t) => t.category === "Honeymoon Tour Packages"
  );
  const jaisalmerTours = tourPackages.filter(
    (t) => t.category === "Jaisalmer Tour Packages"
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* TopBar & Main Navbar */}
      <TopBar onOpenEnquiry={() => handleOpenEnquiry()} />
      <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Hero Section */}
      <HeroSection onOpenEnquiry={() => handleOpenEnquiry()} />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* Section: Category Explorer / All Tours Switcher */}
        <section id="explore-tours" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-gray-100">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#c9a766]">
                Explore By Category
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#192a3d] font-serif mt-1">
                Handcrafted India Tour Collections
              </h2>
            </div>
            <Link
              href="/tours"
              className="text-xs font-bold uppercase tracking-wider text-[#c9a766] hover:underline inline-flex items-center gap-1 mt-2 sm:mt-0"
            >
              <span>View Full Catalog</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          {/* Dynamic Grid for Tab Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8">
            {filteredTours.slice(0, 6).map((tour) => (
              <TourCard key={tour.id} tour={tour} onEnquire={handleOpenEnquiry} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href={`/tours${
                selectedCategory !== "All Tours"
                  ? `?category=${encodeURIComponent(selectedCategory)}`
                  : ""
              }`}
              className="inline-flex items-center gap-2 rounded-xl bg-[#192a3d] px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#c9a766] transition-all shadow-md"
            >
              <span>View All {selectedCategory} ({filteredTours.length})</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Section 1: Golden Triangle Tours India - Best Selling Packages */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#faf7f2] border-t border-[#e8dcc8]/60">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#c9a766] mb-1">
                  <Flame className="h-4 w-4 text-[#c9a766] fill-[#c9a766]" />
                  <span>Best Selling Packages</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-light text-[#192a3d] font-serif">
                  Golden Triangle Tours India
                </h2>
                <p className="text-sm text-gray-500 mt-2 max-w-xl">
                  Delhi, Agra, and Jaipur — witness the Taj Mahal at sunrise, royal forts of Rajasthan, and vibrant heritage markets.
                </p>
              </div>
              <Link
                href="/tours?category=Golden+Triangle+Tours"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#c9a766] hover:text-[#b8924f] mt-4 md:mt-0"
              >
                <span>Browse All Golden Triangle</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {goldenTriangleTours.slice(0, 6).map((tour) => (
                <TourCard key={tour.id} tour={tour} onEnquire={handleOpenEnquiry} />
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Rajasthan Tour Packages */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#c9a766]">
                  Land of Kings &amp; Palaces
                </span>
                <h2 className="text-3xl sm:text-4xl font-light text-[#192a3d] font-serif mt-1">
                  Rajasthan Tour Packages
                </h2>
                <p className="text-sm text-gray-500 mt-2 max-w-xl">
                  Opulent palaces, living desert forts, lakeside romantic views, and camel caravans under starry night skies.
                </p>
              </div>
              <Link
                href="/tours?category=Rajasthan+Tour+Packages"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#c9a766] hover:text-[#b8924f] mt-4 md:mt-0"
              >
                <span>Browse All Rajasthan Tours</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {rajasthanTours.slice(0, 6).map((tour) => (
                <TourCard key={tour.id} tour={tour} onEnquire={handleOpenEnquiry} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Delightful India Holidays & Best Travel Agency in Jaisalmer */}
        <WhyChooseUs />

        {/* Section 3: Same Day Tours */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#c9a766]">
                  Short On Time?
                </span>
                <h2 className="text-3xl sm:text-4xl font-light text-[#192a3d] font-serif mt-1">
                  Same Day Tours
                </h2>
                <p className="text-sm text-gray-500 mt-2 max-w-xl">
                  Quick private day tours from Delhi, Jaipur, or Agra with chauffeured car and monument guide.
                </p>
              </div>
              <Link
                href="/tours?category=Same+Day+Tours"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#c9a766] hover:text-[#b8924f] mt-4 md:mt-0"
              >
                <span>Browse All Day Tours</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {sameDayTours.slice(0, 6).map((tour) => (
                <TourCard key={tour.id} tour={tour} onEnquire={handleOpenEnquiry} />
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Jaisalmer Tour Packages (Our Home Ground) */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#faf7f2] border-t border-[#e8dcc8]/60">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#c9a766]">
                  Heart of the Thar Desert
                </span>
                <h2 className="text-3xl sm:text-4xl font-light text-[#192a3d] font-serif mt-1">
                  Jaisalmer Tour Packages
                </h2>
                <p className="text-sm text-gray-500 mt-2 max-w-xl">
                  Authentic camel safaris, luxury Swiss tent camping at Sam sand dunes, and living fort exploration guided by locals.
                </p>
              </div>
              <Link
                href="/tours?category=Jaisalmer+Tour+Packages"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#c9a766] hover:text-[#b8924f] mt-4 md:mt-0"
              >
                <span>Browse All Jaisalmer Tours</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {jaisalmerTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} onEnquire={handleOpenEnquiry} />
              ))}
            </div>
          </div>
        </section>

        {/* Travel To India - Personalized Banner */}
        <PersonalizedTripBanner onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* Credibility Stats & Review Badges */}
        <CredibilitySection />

        {/* Testimonials */}
        <Testimonials />

        {/* Blog / News */}
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
