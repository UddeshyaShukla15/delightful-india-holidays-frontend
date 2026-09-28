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
  Castle,
  Crown,
  Compass,
  Sparkles,
  ChevronDown,
  MapPin,
  Calendar,
  CheckCircle,
} from "lucide-react";

export default function RajasthanToursPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTourId, setSelectedTourId] = useState<string | undefined>();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const rajasthanTours = tourPackages.filter(
    (t) =>
      t.category === "Rajasthan Tour Packages" ||
      t.category === "Jaisalmer Tour Packages" ||
      t.title.toLowerCase().includes("rajasthan") ||
      t.route.toLowerCase().includes("jaisalmer") ||
      t.route.toLowerCase().includes("udaipur")
  );

  const faqs = [
    {
      q: "What makes Rajasthan tour packages by Delightful India Holidays unique?",
      a: "As a premier Rajasthan tour company headquartered directly in Jaisalmer, Rajasthan, we have unmatched local roots, private drivers with decades of desert route experience, and direct relationships with royal heritage havelis.",
    },
    {
      q: "When is the best season to explore Rajasthan?",
      a: "The prime travel season is between October and March when the desert weather is comfortably sunny during the day and briskly cool at night — perfect for sightseeing and desert safaris.",
    },
    {
      q: "Can I customize my Rajasthan itinerary?",
      a: "Yes, 100%! Every package can be customized with extra nights in Udaipur, luxury desert glamping in the Thar dunes, Ranthambore tiger safari permits, or village heritage walks.",
    },
    {
      q: "What vehicle is recommended for a Rajasthan road trip?",
      a: "For couples or small groups of up to 3 people, a spacious Toyota Etios or Swift Dzire sedan is great. For families of 4–6, a Toyota Innova or Innova Crysta SUV is the most comfortable choice across Rajasthan highways.",
    },
  ];

  const highlights = [
    {
      icon: <Castle className="h-6 w-6 text-[#E78031]" />,
      title: "Forts & Palaces",
      desc: "Explore Mehrangarh, Amber Palace, Chittorgarh, and Kumbalgarh's great wall.",
    },
    {
      icon: <Compass className="h-6 w-6 text-[#228B48]" />,
      title: "Thar Desert Safaris",
      desc: "Camel rides across sunset dunes, private jeep safaris, and starlit folk nights.",
    },
    {
      icon: <Crown className="h-6 w-6 text-[#c9a766]" />,
      title: "Royal Heritage Stays",
      desc: "Sleep in converted maharajah palaces and authentic centuries-old havelis.",
    },
    {
      icon: <Sparkles className="h-6 w-6 text-[#d06b20]" />,
      title: "Vibrant Culture & Food",
      desc: "Taste Dal Baati Churma, watch Kalbelia dancers, and wander colorful bazaars.",
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
            src="/assets/images/Colourful-Rajasthan-Tour-img-1024x684.jpg"
            alt="Royal Rajasthan Tour"
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
            <span>Rajasthan Tours</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-light font-serif mb-4 tracking-tight">
            Rajasthan Tour Packages
          </h1>
          <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
            Step into the Land of Kings. Immerse yourself in grand fortress ramparts, romantic lakes,
            shifting desert sands, and living royal heritage with local Rajasthani hosts.
          </p>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="py-12 bg-white px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-2xl bg-[#faf8f5] border border-[#ede5d8]"
            >
              <div className="p-3 rounded-xl bg-white shadow-sm flex-shrink-0">{h.icon}</div>
              <div>
                <h4 className="font-serif font-bold text-gray-900 text-base mb-1">{h.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tour Packages Grid */}
      <section className="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-[2px] text-[#c9a766] uppercase mb-2 block">
              Royal Itineraries
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#192a3d] font-normal">
              Rajasthan Tours - Best Selling Packages
            </h2>
            <div className="h-1 w-20 bg-[#E78031] mx-auto mt-4 rounded-full" />
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mt-3">
              Explore authentic Rajasthan holidays curated by local destination specialists based in Jaisalmer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rajasthanTours.map((tour) => (
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

      {/* Guide Content */}
      <section className="py-16 bg-[#faf8f5] px-4 sm:px-6 lg:px-8 border-t border-[#ede5d8]">
        <div className="max-w-5xl mx-auto space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#192a3d]">
            Why Choose Delightful India Holidays for Your Rajasthan Holiday?
          </h3>
          <p>
            Rajasthan is more than a destination; it is an emotion woven with centuries of Rajput courage,
            opulent palaces, folk traditions, and golden sands. With over 15 years of dedicated hospitality,
            our team ensures you experience both iconic marvels (Jaipur, Udaipur, Jodhpur, Jaisalmer) and
            enchanting offbeat hideaways (Neemrana, Mandawa, Pushkar, Bikaner, Ranthambore).
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif text-[#192a3d]">Frequently Asked Questions (FAQs)</h2>
            <div className="h-1 w-16 bg-[#E78031] mx-auto mt-3 rounded-full" />
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#faf8f5] rounded-xl border border-[#ede5d8] overflow-hidden transition-all"
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
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-[#ede5d8]/60 pt-3">
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
