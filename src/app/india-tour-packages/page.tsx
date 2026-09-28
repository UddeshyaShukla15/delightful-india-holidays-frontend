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
import { Compass, MapPin, CheckCircle, ArrowRight } from "lucide-react";

export default function IndiaTourPackagesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTourId, setSelectedTourId] = useState<string | undefined>();
  const [selectedRegion, setSelectedRegion] = useState<string>("All");

  const regions = [
    "All",
    "North India",
    "South India",
    "Rajasthan",
    "Central India",
    "East India",
    "North East",
  ];

  // Curated regional tours
  const regionalPackages = [
    {
      id: "7-days-golden-triangle-tour",
      title: "7 Days Golden Triangle Tour",
      region: "North India",
      duration: "7 Days / 6 Nights",
      route: "Delhi – Agra – Jaipur – Delhi",
      image: "/assets/images/Golden-Triangle-Tour-img-1024x684.jpg",
      category: "North India Tour Packages",
      overview: "The classic North India circuit covering UNESCO World Heritage monuments in Delhi, the Taj Mahal in Agra, and the royal palaces of Jaipur.",
    },
    {
      id: "best-of-kerala-group-tour",
      title: "Best Of Kerala Backwaters Tour",
      region: "South India",
      duration: "6 Days / 5 Nights",
      route: "Cochin – Munnar – Thekkady – Alleppey",
      image: "/assets/images/kerala-group-tour-img-1024x684.png",
      category: "South India Tour Packages",
      overview: "Misty tea plantations in Munnar, spice plantations in Thekkady, and private luxury houseboat cruise on Alleppey backwaters.",
    },
    {
      id: "colourful-rajasthan-tour",
      title: "Colourful Rajasthan Heritage Tour",
      region: "Rajasthan",
      duration: "9 Days / 8 Nights",
      route: "Jaipur – Bikaner – Jaisalmer – Jodhpur – Udaipur",
      image: "/assets/images/Colourful-Rajasthan-Tour-img-1024x684.jpg",
      category: "Rajasthan Tour Packages",
      overview: "A grand expedition across the Royal desert state: living forts, camel safaris, blue houses of Jodhpur, and romantic Udaipur lakes.",
    },
    {
      id: "taj-mahal-with-khajuraho",
      title: "Taj Mahal With Khajuraho Heritage Tour",
      region: "Central India",
      duration: "8 Days / 7 Nights",
      route: "Delhi – Agra – Gwalior – Orchha – Khajuraho – Varanasi",
      image: "/assets/images/Taj-Mahal-With-Khajuraho-img-1024x684.jpg",
      category: "Central India Tour Packages",
      overview: "Marvel at erotic temple carvings of Khajuraho, medieval Orchha palaces on Betwa river, and sacred evening Ganga Aarti in Varanasi.",
    },
    {
      id: "8-days-spritual-ganges-tour",
      title: "8 Days Spiritual Ganges Tour",
      region: "East India",
      duration: "8 Days / 7 Nights",
      route: "Delhi – Agra – Jaipur – Varanasi",
      image: "/assets/images/Ahilya_Ghat_by_the_Ganges_Varanasi.jpg",
      category: "East India Tour Packages",
      overview: "Combine the Golden Triangle with the spiritual epicenter of India: dawn boat rides on the holy river Ganga in Varanasi.",
    },
    {
      id: "wonders-of-ladakh-group-tour",
      title: "Wonders Of Ladakh Himalayan Tour",
      region: "North India",
      duration: "7 Days / 6 Nights",
      route: "Leh – Sham Valley – Nubra Valley – Pangong Lake",
      image: "/assets/images/ladakh-img-1024x684.png",
      category: "North India Tour Packages",
      overview: "High mountain passes, Tibetan Buddhist monasteries, double-humped camel safari in Nubra, and turquoise Pangong Lake.",
    },
    {
      id: "wildlife-of-south-india",
      title: "Wildlife & Hills of South India",
      region: "South India",
      duration: "8 Days / 7 Nights",
      route: "Bangalore – Mysore – Nagarhole – Ooty – Cochin",
      image: "/assets/images/wildlife-tour-package-img-1024x684.png",
      category: "South India Tour Packages",
      overview: "Spot wild Asian elephants and Bengal tigers in Nagarhole National Park combined with colonial Nilgiri mountain toy train in Ooty.",
    },
    {
      id: "corbett-wildlife-tour",
      title: "Corbett Tiger Safari & Wildlife Tour",
      region: "North India",
      duration: "4 Days / 3 Nights",
      route: "Delhi – Jim Corbett National Park – Delhi",
      image: "/assets/images/rajasthan-wildlife-img-1024x684.png",
      category: "North India Tour Packages",
      overview: "India's oldest national park nestled in the Himalayan foothills. Morning & evening jeep safaris in search of the elusive Royal Bengal Tiger.",
    },
  ];

  const filtered =
    selectedRegion === "All"
      ? regionalPackages
      : regionalPackages.filter((p) => p.region === selectedRegion);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <TopBar />
      <Navbar onOpenEnquiry={() => setIsModalOpen(true)} />

      {/* Hero Banner */}
      <section className="relative bg-[#192a3d] text-white py-16 sm:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/assets/images/North-India-img-1024x684.png"
            alt="India Tour Packages"
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
            <span>India Tours</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-light font-serif mb-4 tracking-tight">
            India Tour Packages
          </h1>
          <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
            From the snow-crowned Himalayas of the North to the tranquil palm-fringed backwaters of the South.
            Explore authentic journeys across every corner of India.
          </p>
        </div>
      </section>

      {/* Region Filter Bar */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
          {regions.map((reg) => (
            <button
              key={reg}
              onClick={() => setSelectedRegion(reg)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedRegion === reg
                  ? "bg-[#E78031] text-white shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {reg}
            </button>
          ))}
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16 sm:py-20 bg-[#faf8f5] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-[2px] text-[#c9a766] uppercase mb-2 block">
              Pan-India Circuits
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#192a3d] font-normal">
              {selectedRegion === "All" ? "All India Tour Packages" : `${selectedRegion} Packages`}
            </h2>
            <div className="h-1 w-20 bg-[#E78031] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((tour) => {
              // Find matching tour from mockData if available, or generate tour card structure
              const matched = tourPackages.find((t) => t.id === tour.id) || {
                id: tour.id,
                title: tour.title,
                category: tour.category,
                duration: tour.duration,
                route: tour.route,
                startingPrice: "₹18,500",
                rating: 5.0,
                reviewsCount: 38,
                image: tour.image,
                overview: tour.overview,
                highlights: [],
                itinerary: [],
                inclusions: [],
                exclusions: [],
              };

              return (
                <LiveTourCard
                  key={tour.id}
                  tour={matched}
                  onEnquire={(id) => {
                    setSelectedTourId(id);
                    setIsModalOpen(true);
                  }}
                />
              );
            })}
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
