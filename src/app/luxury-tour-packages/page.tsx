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
  Crown,
  Sparkles,
  Shield,
  Star,
  Hotel,
  Award,
  ChevronDown,
  Compass,
  Send,
  CheckCircle,
} from "lucide-react";

export default function LuxuryTourPackagesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTourId, setSelectedTourId] = useState<string | undefined>();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const luxuryTours = [
    {
      id: "luxury-tour-of-golden-triangle",
      title: "Luxury Tour of Golden Triangle",
      duration: "6 Days / 5 Nights",
      route: "Delhi – Agra – Jaipur – Delhi",
      image: "/assets/images/800px-Taj_Mahal_Agra_India_edit3.jpg",
      hotel: "The Oberoi / Taj Palace",
      overview: "Stay in ultra-luxury properties including The Oberoi Amarvilas with uninterrupted views of the Taj Mahal from every room.",
      highlights: [
        "Unobstructed Taj Mahal view rooms at Oberoi Amarvilas",
        "Private heritage walks in Old Delhi with historian",
        "Chauffeur-driven Mercedes / BMW sedan",
        "Royal dining experience at Rambagh Palace Jaipur",
      ],
    },
    {
      id: "luxury-tour-of-royal-rajasthan",
      title: "Luxury Tour of Royal Rajasthan",
      duration: "10 Days / 9 Nights",
      route: "Delhi – Agra – Jaipur – Jodhpur – Udaipur",
      image: "/assets/images/Royal-Palaces-of-Rajasthan-img-1024x684.jpg",
      hotel: "Taj Rambagh & Lake Palace",
      overview: "Live like royal maharajas in authentic palace suites. From Rambagh Palace Jaipur to the floating Taj Lake Palace Udaipur.",
      highlights: [
        "Floating palace suite on Lake Pichola, Udaipur",
        "Private dinner on the dunes of Jaisalmer / Jodhpur",
        "Champagne sunset cruise on Lake Pichola",
        "Exclusive access to private palace courtyards",
      ],
    },
    {
      id: "luxury-tour-of-kerala",
      title: "Luxury Tour of Kerala & Backwaters",
      duration: "7 Days / 6 Nights",
      route: "Cochin – Munnar – Thekkady – Kumarakom",
      image: "/assets/images/kerala-group-tour-img-1024x684.png",
      hotel: "Taj Kumarakom & Spice Village",
      overview: "Private air-conditioned ultra-luxury houseboat with dedicated chef, Ayurvedic rejuvenating wellness treatments, and tea estate bungalows.",
      highlights: [
        "Private 1-bedroom luxury air-conditioned houseboat",
        "Ayurvedic massage and wellness consultations",
        "Private naturalist boat safari at Periyar lake",
        "Sunset Kathakali private performance in Cochin",
      ],
    },
    {
      id: "golden-triangle-with-oberoi",
      title: "Golden Triangle Tour with Oberoi Hotels",
      duration: "7 Days / 6 Nights",
      route: "Delhi – Agra – Jaipur",
      image: "/assets/images/Golden-Triangle-Tour-img-2-1024x684.jpg",
      hotel: "Oberoi Amarvilas & Rajvilas",
      overview: "The gold standard of luxury travel in India: Oberoi New Delhi, Oberoi Amarvilas Agra, and Oberoi Rajvilas Jaipur.",
      highlights: [
        "100% Oberoi luxury hotel collection",
        "Complimentary golf cart transfers inside monuments",
        "VIP fast-track entries to historical attractions",
        "Dedicated private 24/7 travel concierge",
      ],
    },
    {
      id: "luxury-rajasthan-ranthambore",
      title: "Luxury Rajasthan & Ranthambore Safari",
      duration: "8 Days / 7 Nights",
      route: "Delhi – Agra – Ranthambore – Jaipur",
      image: "/assets/images/rajasthan-wildlife-img-1024x684.png",
      hotel: "Six Senses Fort Barwara / Sujan",
      overview: "Combine iconic cultural wonders with royal tiger safaris staying at luxury glamping tented camps or Six Senses Fort Barwara.",
      highlights: [
        "Private luxury 4x4 Gypsy tiger safaris in Ranthambore",
        "Stay at restored 14th-century fort palace (Six Senses)",
        "Private candlelit dinner inside historic fort bastions",
        "Expert wildlife biologist as personal naturalist guide",
      ],
    },
    {
      id: "luxury-jaisalmer-desert-safari",
      title: "Luxury Jaisalmer Desert Safari Tour",
      duration: "4 Days / 3 Nights",
      route: "Jodhpur – Jaisalmer Thar Desert – Jodhpur",
      image: "/assets/images/desert-sam-duns-jaialmer.jpg",
      hotel: "Suryagarh Jaisalmer",
      overview: "Experience aristocratic desert hospitality at Suryagarh Jaisalmer, paired with private dune glamping under the desert starlight.",
      highlights: [
        "Bespoke luxury suite at Suryagarh Fortress",
        "Private dunes dinner with acoustic Manganiyar singers",
        "Chauffeured 4x4 desert dune exploration",
        "Personalized curated haveli and golden fort walks",
      ],
    },
  ];

  const hotelPartners = [
    {
      name: "The Oberoi Amarvilas",
      location: "Agra",
      desc: "Every room offers uninterrupted views of the Taj Mahal, located just 600m from the monument.",
      image: "/assets/images/800px-Taj_Mahal_Agra_India_edit3.jpg",
    },
    {
      name: "Taj Rambagh Palace",
      location: "Jaipur",
      desc: "The former residence of the Maharaja of Jaipur, featuring peacocks on 47 acres of Mughal gardens.",
      image: "/assets/images/amer-fort-jaipur-1.jpg",
    },
    {
      name: "Suryagarh Fortress",
      location: "Jaisalmer",
      desc: "An architectural masterpiece in the heart of the Thar Desert offering bespoke luxury.",
      image: "/assets/images/desert-sam-duns-jaialmer.jpg",
    },
    {
      name: "Six Senses Fort Barwara",
      location: "Ranthambore",
      desc: "A sensitively restored 14th-century royal fort palace overlooking the wild tiger sanctuary.",
      image: "/assets/images/rajasthan-wildlife-img-1024x684.png",
    },
    {
      name: "Taj Lake Palace",
      location: "Udaipur",
      desc: "A floating white marble palace on Lake Pichola accessible only by private boat.",
      image: "/assets/images/Pichola-Lake-Udaipur-Rajasthan.jpeg",
    },
    {
      name: "The Leela Palace",
      location: "New Delhi & Udaipur",
      desc: "Modern Indian palace grandeur with world-class dining and Butler service.",
      image: "/assets/images/Delhi-Sightseeing-Tour-img-1024x684.jpg",
    },
  ];

  const faqs = [
    {
      q: "What defines a Luxury Tour with Delightful India Holidays?",
      a: "Our luxury journeys feature hand-picked 5-star palace and resort accommodations (Oberoi, Taj, Leela, Six Senses, SUJÁN), executive luxury vehicles (Mercedes, BMW, Toyota Camry, Innova Crysta), top-tier certified scholars and guides, VIP monument entry, and 24/7 dedicated concierge assistance.",
    },
    {
      q: "Can we customize the hotel choices in our luxury tour?",
      a: "Yes. Every itinerary can be customized to match your exact hotel preferences, room categories (e.g. Royal Suites, Pool Villas), dietary needs, and special celebration arrangements.",
    },
    {
      q: "Are domestic flights or airport VIP meet-and-greets included?",
      a: "We can arrange complete VIP tarmac meet-and-greet services, domestic business/economy class flights, express luggage handling, and private airport transfers across all Indian airports.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <TopBar />
      <Navbar onOpenEnquiry={() => setIsModalOpen(true)} />

      {/* Hero Banner */}
      <section className="relative bg-[#111c2a] text-white py-20 sm:py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/assets/images/Royal-Palaces-of-Rajasthan-img-1024x684.jpg"
            alt="Luxury India Holidays"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#111c2a] via-[#111c2a]/60 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c9a766]/20 border border-[#c9a766]/40 text-xs sm:text-sm font-semibold tracking-widest text-[#c9a766] uppercase mb-4">
            <Crown className="h-4 w-4" />
            <span>Bespoke Luxury Travel Experiences Across India</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light font-serif mb-4 tracking-tight">
            Luxury India Holidays
          </h1>
          <p className="text-base sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
            Handpicked luxury itineraries across India&apos;s most iconic regions, crafted for elegance, comfort,
            and authentic cultural immersion.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#c9a766] hover:bg-[#b5924f] text-[#111c2a] font-bold px-8 py-3.5 rounded-full text-sm sm:text-base transition-all shadow-lg cursor-pointer"
            >
              Plan Your Bespoke Tour
            </button>
            <a
              href="https://wa.me/919636784713?text=Hi%20Kamal%2C%20I%20am%20interested%20in%20a%20Luxury%20India%20Tour%20Package."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-full text-sm sm:text-base backdrop-blur-sm border border-white/20 transition-all"
            >
              WhatsApp VIP Concierge
            </a>
          </div>
        </div>
      </section>

      {/* Section 1: Our Luxury Tour Collection */}
      <section className="py-16 sm:py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-[2px] text-[#c9a766] uppercase mb-2 block">
              Exclusive Itineraries
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#192a3d] font-normal">
              Our Luxury Tour Collection
            </h2>
            <div className="h-1 w-20 bg-[#c9a766] mx-auto mt-4 rounded-full" />
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mt-3">
              Thoughtfully curated for discerning travelers who demand uncompromising comfort, privacy, and authenticity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {luxuryTours.map((tour) => (
              <div
                key={tour.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#ede5d8] shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-[#192a3d]/90 backdrop-blur-sm text-[#c9a766] text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-[#c9a766]/30">
                    <Crown className="h-3 w-3" />
                    <span>{tour.hotel}</span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 text-gray-900 text-xs font-bold px-3 py-1 rounded-md shadow-sm">
                    {tour.duration}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#c9a766] transition-colors">
                      {tour.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#228B48] uppercase tracking-wider mb-3">
                      {tour.route}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                      {tour.overview}
                    </p>

                    <div className="space-y-1.5 mb-6">
                      {tour.highlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                          <Sparkles className="h-3.5 w-3.5 text-[#c9a766] flex-shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => {
                        setSelectedTourId(tour.id);
                        setIsModalOpen(true);
                      }}
                      className="flex-1 bg-[#192a3d] hover:bg-[#c9a766] hover:text-[#192a3d] text-white text-xs sm:text-sm font-bold py-2.5 px-4 rounded-xl transition-all cursor-pointer text-center"
                    >
                      Enquire Luxury
                    </button>
                    <a
                      href={`https://wa.me/919636784713?text=Hi%20Kamal%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(
                        tour.title
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#228B48] hover:bg-[#1a7038] text-white p-2.5 rounded-xl transition-colors"
                      title="Quick WhatsApp Enquiry"
                    >
                      <Send className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Luxury Hotel Partners */}
      <section className="py-16 sm:py-24 bg-[#faf8f5] px-4 sm:px-6 lg:px-8 border-y border-[#ede5d8]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-[2px] text-[#c9a766] uppercase mb-2 block">
              Legendary Hospitality
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#192a3d] font-normal">
              Luxury Hotel Partners
            </h2>
            <div className="h-1 w-20 bg-[#c9a766] mx-auto mt-4 rounded-full" />
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mt-3">
              We partner with India&apos;s most celebrated heritage palaces, luxury brands, and boutique sanctuaries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotelPartners.map((hotel, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-[#ede5d8] shadow-sm flex flex-col"
              >
                <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={hotel.image}
                    alt={hotel.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {hotel.location}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif text-xl font-bold text-gray-900 mb-2">{hotel.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{hotel.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Why Book with Delightful India Holidays */}
      <section className="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c9a766]">
              Excellence Guaranteed
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#192a3d] mt-2 mb-4">
              Why Book With Delightful India Holidays?
            </h2>
            <div className="h-0.5 w-16 bg-[#c9a766] mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-[#faf8f5] border border-[#ede5d8]">
              <div className="h-12 w-12 rounded-2xl bg-[#c9a766]/10 text-[#c9a766] flex items-center justify-center mx-auto mb-4">
                <Crown className="h-6 w-6" />
              </div>
              <h4 className="font-serif font-bold text-gray-900 text-lg mb-2">Bespoke Curation</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Every detail is tailored to your taste, schedule, and preferences with no cookie-cutter solutions.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-[#faf8f5] border border-[#ede5d8]">
              <div className="h-12 w-12 rounded-2xl bg-[#228B48]/10 text-[#228B48] flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h4 className="font-serif font-bold text-gray-900 text-lg mb-2">24/7 VIP Concierge</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Direct mobile line to your personal tour manager Kamal throughout your entire stay in India.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-[#faf8f5] border border-[#ede5d8]">
              <div className="h-12 w-12 rounded-2xl bg-[#E78031]/10 text-[#E78031] flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h4 className="font-serif font-bold text-gray-900 text-lg mb-2">Top-Rated Operators</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Consistent 5-star rating on TripAdvisor &amp; Google Reviews backed by 15+ years of desert hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-[#faf8f5] px-4 sm:px-6 lg:px-8 border-t border-[#ede5d8]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif text-[#192a3d]">Frequently Asked Questions</h2>
            <div className="h-1 w-16 bg-[#c9a766] mx-auto mt-3 rounded-full" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#ede5d8] overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-serif font-bold text-gray-900 hover:text-[#c9a766] transition-colors"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-gray-500 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180 text-[#c9a766]" : ""
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
