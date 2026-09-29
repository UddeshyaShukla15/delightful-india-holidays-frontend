"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Star, ArrowRight } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import EnquiryModal from "@/components/EnquiryModal";
import DestinationEnquiryForm from "@/components/DestinationEnquiryForm";

export interface TourItem {
  id: string;
  title: string;
  duration: string;
  category?: string;
  image: string;
  localImage?: string;
  route: string;
  link: string;
  desc?: string;
}

export interface PlaceToVisit {
  name: string;
  desc?: string;
  highlights?: string[];
}

export interface AttractionSection {
  title: string;
  desc: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface DestinationData {
  id: string;
  slug: string;
  cityName: string;
  pageTitle: string;
  tagline: string;
  heroImage: string;
  localHeroImage?: string;
  breadcrumb: string;
  overview: string[];
  tourCount: number;
  tours: TourItem[];
  placesToVisit: PlaceToVisit[];
  attractions: AttractionSection[];
  whyChoose: string[];
  popularExtensions?: string[];
  travelServices: string[];
  faqs: FAQItem[];
}

interface DayTourDestinationViewProps {
  data: DestinationData;
}

export default function DayTourDestinationView({ data }: DayTourDestinationViewProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const heroBg = data.localHeroImage || data.heroImage;

  const scrollToEnquiry = () => {
    const el = document.getElementById("enquiry-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <TopBar />
      <Navbar onOpenEnquiry={() => setIsModalOpen(true)} />

      {/* 1. Hero Banner: Background with subtle shadow (not too much), Title in BOLD, and only 1 Enquiry button */}
      <section className="relative min-h-[380px] sm:min-h-[430px] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBg}
            alt={data.pageTitle}
            fill
            className="object-cover"
            priority
          />
          {/* Subtle shadow overlay (not too dark, keeping photo bright yet readable) */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center py-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] mb-6 tracking-tight">
            {data.pageTitle}
          </h1>

          <button
            type="button"
            onClick={scrollToEnquiry}
            className="inline-flex items-center justify-center gap-2 bg-[#E78031] hover:bg-[#d46d20] text-white font-medium text-base sm:text-lg px-8 py-3.5 rounded transition-all cursor-pointer shadow-lg hover:shadow-xl active:scale-95"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 2. Tour Packages Grid Section */}
      <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-serif text-[#192a3d] font-normal mb-3">
            {data.pageTitle}
          </h2>
          <div className="h-1 w-20 bg-[#E78031] mx-auto rounded-full" />
        </div>

        {/* Removed "Showing 24 curated tour packages" and search bar as requested */}

        {/* Show ALL packages without pagination or "View More" button */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.tours.map((tour) => {
            const tourImg = tour.localImage || tour.image;
            return (
              <div
                key={tour.id}
                className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                {/* Tour Image with Duration & Rating */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                  <Link href={`/tours/${tour.id}`} className="block h-full w-full">
                    <Image
                      src={tourImg}
                      alt={tour.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </Link>

                  {/* Duration Badge */}
                  <div className="absolute top-3.5 right-3.5 bg-black/75 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                    <Clock className="w-3.5 h-3.5 text-[#FFAF19]" />
                    <span>{tour.duration}</span>
                  </div>

                  {/* Rating Stars Overlay */}
                  <div className="absolute bottom-3 left-3.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                    <div className="flex text-[#FFAF19]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-[#FFAF19]" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold text-gray-800 ml-0.5">5.0</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-serif text-xl font-bold text-gray-900 leading-snug line-clamp-2 mb-3 group-hover:text-[#E78031] transition-colors">
                    <Link href={`/tours/${tour.id}`}>{tour.title}</Link>
                  </h3>

                  {/* Route with Green Marker (shows Goa, KASHMIR, Udaipur, MUNNAR, HIMACHAL, etc. as specified) */}
                  <div className="flex items-center gap-2 mb-6 text-sm text-gray-700">
                    <span className="flex-shrink-0 text-[#228B48]">
                      <MapPin className="w-4 h-4 fill-[#228B48] text-white" />
                    </span>
                    <span className="font-medium truncate">{tour.route}</span>
                  </div>

                  {/* Action Button: ONLY View Details */}
                  <div className="mt-auto pt-3 border-t border-gray-100">
                    <Link
                      href={`/tours/${tour.id}`}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#E78031] hover:bg-[#d46d20] text-white text-sm sm:text-base font-medium py-2.5 px-4 rounded-[20px] transition-all shadow-sm hover:shadow"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Editorial Travel Guide Content (Exact text requested by user) */}
      {data.id === "delhi" ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 text-gray-800">
          {/* Delhi Tour Packages & Overview */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#192a3d] font-bold mb-4">
              Delhi Tour Packages
            </h2>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-5">
              Overview
            </h3>
            <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed font-light">
              <p>
                Discover the vibrant charm of India’s capital with our specially curated Delhi Tour Packages, designed for travelers who want to experience the perfect blend of history, culture, modern lifestyle, and heritage. From Mughal-era monuments to bustling markets and grand colonial architecture, Delhi offers an unforgettable journey through time.
              </p>
              <p>
                Our range of Delhi Sightseeing Tour and Delhi Travel Package options includes everything from a quick Delhi Day Tour to detailed multi-day itineraries like the Delhi Tour Package 2 Days. Whether you are looking for a Delhi Private Tour, Delhi Family Tour, or a Delhi Cultural Tour, we offer customized experiences to match every travel style and budget.
              </p>
              <p>
                We also provide seamless travel services such as Car &amp; Driver Hire in Delhi, Taxi Hire in Delhi, Cab Hire in Delhi, and premium Luxury Travel Company in Delhi services to ensure a comfortable and hassle-free journey.
              </p>
              <p>
                For travelers planning extended trips, Delhi serves as the perfect gateway to popular destinations like Agra, Jaipur, Kashmir, Shimla, Manali, Rishikesh, Haridwar, and Leh. You can also choose specialized packages such as Same Day Agra Tour from Delhi by Train, Overnight Agra Tour from Delhi, or a complete Delhi – Agra – Jaipur Tour.
              </p>
            </div>
          </div>

          {/* Places to Visit in Delhi */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-4">
              Places to Visit in Delhi
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light mb-5">
              Delhi is a city of contrasts, where ancient heritage meets modern development. Some of the best places included in our Delhi City Tour Package are:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-800 font-normal mb-5">
              <li>Red Fort (Lal Qila)</li>
              <li>India Gate</li>
              <li>Qutub Minar</li>
              <li>Humayun’s Tomb</li>
              <li>Lotus Temple</li>
              <li>Jama Masjid</li>
              <li>Raj Ghat</li>
              <li>Akshardham Temple</li>
              <li>Chandni Chowk Market</li>
              <li>Connaught Place</li>
            </ul>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
              Each location offers a unique glimpse into Delhi’s rich cultural and historical legacy, making it one of the most exciting destinations for a Delhi Heritage Tour and Delhi Sightseeing Package.
            </p>
          </div>

          {/* Top Attractions in Delhi */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-4">
              Top Attractions in Delhi
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light mb-6">
              Our Delhi Tour Packages cover the most iconic attractions that define the capital’s identity:
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Old Delhi Tour Highlights
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Explore the charm of narrow lanes, historic bazaars, and Mughal architecture with our Old Delhi Tour and Old Delhi Heritage Tour. Chandni Chowk, Jama Masjid, and Red Fort form the heart of this experience.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  New Delhi City Tour Highlights
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Experience the grandeur of modern Delhi with wide roads, government buildings, and colonial architecture. Key attractions include India Gate, Rashtrapati Bhavan, and Parliament House, making it perfect for a New Delhi Tour and New Delhi City Tour.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Cultural &amp; Heritage Experiences
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Our Delhi Heritage Tour, Delhi Cultural Tour, and Delhi Family Tour Package provide deep insight into the city’s traditions, festivals, food, and lifestyle.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Our Delhi Tour Packages? */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-4">
              Why Choose Our Delhi Tour Packages?
            </h2>
            <ul className="list-disc pl-6 space-y-2.5 text-base sm:text-lg text-gray-800 font-light">
              <li>Best Delhi Tour Package options for all budgets</li>
              <li>Fully customizable Private Delhi Tour experiences</li>
              <li>Comfortable transport with private taxi hire in Delhi and private cab hire in Delhi</li>
              <li>Expert local guides for authentic experiences</li>
              <li>Flexible itineraries including Delhi Weekend Tour and Delhi Holiday Package</li>
              <li>Easy connectivity for India Tour Packages from Delhi</li>
            </ul>
          </div>

          {/* Popular Delhi-Based Tour Extensions */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-4">
              Popular Delhi-Based Tour Extensions
            </h2>
            <ul className="list-disc pl-6 space-y-2.5 text-base sm:text-lg text-gray-800 font-light">
              <li>Same Day Agra Tour from Delhi</li>
              <li>Agra Group Tour from Delhi</li>
              <li>2 Days Agra Tour from Delhi with Fatehpur Sikri</li>
              <li>Overnight Agra Tour from Delhi</li>
              <li>Kashmir Tour Packages from Delhi</li>
              <li>Leh Tour from Delhi</li>
              <li>Shimla &amp; Manali Tour from Delhi</li>
              <li>Rishikesh &amp; Haridwar Tour from Delhi</li>
            </ul>
          </div>

          {/* Travel Services in Delhi */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-4">
              Travel Services in Delhi
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light mb-4">
              We also offer complete travel support including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-800 font-light">
              <li>Tour Consultant in Delhi</li>
              <li>Travel Company in Delhi</li>
              <li>Cab Service in Delhi</li>
              <li>Car Hire in Delhi</li>
              <li>One Way Taxi from Delhi</li>
              <li>One Way Cab Service in Delhi</li>
              <li>Tailor Made Delhi Tour</li>
            </ul>
          </div>
        </div>
      ) : (
        /* Other 5 destinations */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 text-gray-800">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#192a3d] font-bold mb-6">
              {data.pageTitle}
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed font-light">
              {data.overview.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {data.placesToVisit && data.placesToVisit.length > 0 && (
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-4">
                Places to Visit in {data.cityName}
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-800 font-light">
                {data.placesToVisit.map((p, idx) => (
                  <li key={idx}>
                    <strong>{p.name}</strong>
                    {p.desc && <span> – {p.desc}</span>}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {data.attractions && data.attractions.length > 0 && (
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-4">
                {data.cityName} Tourist Attractions
              </h2>
              <div className="space-y-4">
                {data.attractions.map((att, idx) => (
                  <div key={idx}>
                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-1">{att.title}</h3>
                    <p className="text-base sm:text-lg text-gray-700 font-light leading-relaxed">{att.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 4. On-Page Enquiry Form: Matching User's Screenshot Exactly */}
      <DestinationEnquiryForm cityName={data.cityName} />

      {/* 5. Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppFloatingButton />

      {/* Optional Interactive Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedTourId={data.id}
      />
    </div>
  );
}
