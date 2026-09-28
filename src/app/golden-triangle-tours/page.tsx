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
import {
  Calendar,
  Plane,
  Train,
  Car,
  Clock,
  CheckCircle,
  HelpCircle,
  ChevronDown,
  Shield,
  Star,
} from "lucide-react";

export default function GoldenTriangleToursPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTourId, setSelectedTourId] = useState<string | undefined>();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const gtTours = tourPackages.filter(
    (t) =>
      t.category === "Golden Triangle Tours" ||
      t.title.toLowerCase().includes("golden triangle") ||
      (t.route.toLowerCase().includes("delhi") && t.route.toLowerCase().includes("agra"))
  );

  const faqs = [
    {
      q: "What is the Golden Triangle in India?",
      a: "The Golden Triangle is India's most famous tourist circuit connecting Delhi, Agra, and Jaipur. Named for the roughly equilateral triangle the three cities form on the map, it represents the cultural, architectural, and historical pinnacle of northern India.",
    },
    {
      q: "What is the best time to visit the Golden Triangle?",
      a: "The most comfortable time is between October and March when the weather is cool and pleasant for outdoor heritage sightseeing. April to June offers great discounts and fewer crowds, while July to September brings lush monsoon landscapes.",
    },
    {
      q: "How many days are recommended for the Golden Triangle tour?",
      a: "A 5 to 7-day tour is ideal to comfortably experience Delhi (2 days), Agra (1-2 days), and Jaipur (2 days) without rush. If you have limited time, express 3 to 4-day tours are also available.",
    },
    {
      q: "Are private transfers and tour guides included?",
      a: "Yes! All our Golden Triangle packages include private air-conditioned transport with an experienced chauffeur, monument transfers, and government-licensed English-speaking guides at each historic site.",
    },
    {
      q: "Can we extend the Golden Triangle to include Ranthambore, Udaipur, or Varanasi?",
      a: "Absolutely. We specialize in bespoke extensions such as Golden Triangle with Ranthambore Tiger Safari, Varanasi Spiritual Tour, or Udaipur Palace extension. Contact us to customize your route.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <TopBar />
      <Navbar onOpenEnquiry={() => setIsModalOpen(true)} />

      {/* Hero Banner */}
      <section className="relative bg-[#192a3d] text-white py-16 sm:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/assets/images/Golden-Triangle-Tour-img-1024x684.jpg"
            alt="Golden Triangle Tour India"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#c9a766] uppercase mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/tours" className="hover:underline">Tours</Link>
            <span>/</span>
            <span>Golden Triangle Tours</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-light font-serif mb-4 tracking-tight">
            Golden Triangle Tour Packages
          </h1>
          <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
            Delhi &middot; Agra &middot; Jaipur — Discover the three crown jewels of India.
            From the bustling Mughal avenues of Old Delhi and the ethereal Taj Mahal to the royal palaces of Jaipur.
          </p>
        </div>
      </section>

      {/* Overview & Travel Guide Section */}
      <section className="py-16 sm:py-20 bg-[#faf8f5] px-4 sm:px-6 lg:px-8 border-b border-[#ede5d8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-[2px] text-[#c9a766] uppercase mb-2 block">
              Complete Travel Guide
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#192a3d]">
              Golden Triangle Tour India – Delhi, Agra &amp; Jaipur Travel Guide
            </h2>
            <div className="h-1 w-20 bg-[#E78031] mx-auto mt-4 rounded-full" />
          </div>

          <div className="prose max-w-4xl mx-auto text-gray-700 leading-relaxed space-y-6 text-sm sm:text-base">
            <p>
              The <strong>Golden Triangle Tour India</strong> is the definitive first-time journey into the subcontinent,
              connecting three culturally rich and historically transcendent cities: <strong>Delhi, Agra, and Jaipur</strong>.
              Covering approximately 720 kilometers of highway and expressways, this circuit introduces travelers to India&apos;s
              splendid past through UNESCO World Heritage monuments, royal Rajput forts, and vibrant bazaars.
            </p>

            {/* Travel Guide 4 Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="bg-white p-6 rounded-2xl border border-[#ede5d8] shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-[#E78031]/10 text-[#E78031] flex items-center justify-center mb-4">
                  <Calendar className="h-5 w-5" />
                </div>
                <h4 className="font-serif font-bold text-gray-900 text-lg mb-2">Best Time to Visit</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  <strong>October – March:</strong> Pleasant winter sunshine, ideal sightseeing temperatures.
                  <br />
                  <strong>April – June:</strong> Summer deals and quiet monuments.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#ede5d8] shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-[#228B48]/10 text-[#228B48] flex items-center justify-center mb-4">
                  <Car className="h-5 w-5" />
                </div>
                <h4 className="font-serif font-bold text-gray-900 text-lg mb-2">How to Travel</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Fast Yamuna &amp; Delhi-Jaipur Expressways make private chauffeured cars the most comfortable and flexible option, door-to-door.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#ede5d8] shadow-sm">
                <div className="h-10 w-10 rounded-xl bg-[#c9a766]/10 text-[#c9a766] flex items-center justify-center mb-4">
                  <Clock className="h-5 w-5" />
                </div>
                <h4 className="font-serif font-bold text-gray-900 text-lg mb-2">Suggested Duration</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  <strong>3 to 4 Days:</strong> Express Highlights.
                  <br />
                  <strong>5 to 7 Days:</strong> Classic Relaxed Tour.
                  <br />
                  <strong>8 to 11 Days:</strong> Extended with Wildlife or Ganges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Selling Packages Grid */}
      <section className="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-[2px] text-[#c9a766] uppercase mb-2 block">
              Handcrafted Packages
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#192a3d] font-normal">
              Golden Triangle Tours India - Best Selling Packages
            </h2>
            <div className="h-1 w-20 bg-[#E78031] mx-auto mt-4 rounded-full" />
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mt-3">
              Explore our highest-rated itineraries featuring private AC car, handpicked heritage hotels, and verified local guides.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {gtTours.map((tour) => (
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

      {/* FAQs Section */}
      <section className="py-16 bg-[#faf8f5] px-4 sm:px-6 lg:px-8 border-t border-[#ede5d8]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-[2px] text-[#c9a766] uppercase mb-2 block">
              Common Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#192a3d]">
              Frequently Asked Questions (FAQs)
            </h2>
            <div className="h-1 w-20 bg-[#E78031] mx-auto mt-4 rounded-full" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-serif font-bold text-gray-900 hover:text-[#E78031] transition-colors"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180 text-[#E78031]" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
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
