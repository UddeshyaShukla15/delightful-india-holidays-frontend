"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Star, MapPin, ArrowRight } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import EnquiryModal from "@/components/EnquiryModal";
import DestinationEnquiryForm from "@/components/DestinationEnquiryForm";
import wlData from "@/data/wildlifeData.json";

export interface WildlifeTour {
  id: string;
  title: string;
  duration: string;
  category: string;
  image: string;
  route: string;
  link: string;
}

export interface WildlifeFAQ {
  q: string;
  a: string;
}

export default function WildlifeClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTourId, setSelectedTourId] = useState<string | undefined>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const tours: WildlifeTour[] = wlData.tours;
  const faqs: WildlifeFAQ[] = wlData.faqs;

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const renderTourCard = (tour: WildlifeTour) => {
    return (
      <div
        key={tour.id}
        className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
      >
        {/* Tour Image with Duration & Rating */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
          <Link href={`/${tour.id}`} className="block h-full w-full">
            <Image
              src={tour.image}
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
            <Link href={`/${tour.id}`}>{tour.title}</Link>
          </h3>

          {/* Route with Green Marker */}
          <div className="flex items-start gap-2 mb-6 text-sm text-gray-700">
            <span className="flex-shrink-0 mt-0.5 text-[#228B48]">
              <MapPin className="w-4 h-4 fill-[#228B48] text-white" />
            </span>
            <span className="font-medium line-clamp-2">{tour.route}</span>
          </div>

          {/* Action Button: View Details */}
          <div className="mt-auto pt-3 border-t border-gray-100">
            <Link
              href={`/${tour.id}`}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#E78031] hover:bg-[#d46d20] text-white text-sm sm:text-base font-medium py-2.5 px-4 rounded-[20px] transition-all shadow-sm hover:shadow"
            >
              <span>View Details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7]">
      <TopBar />
      <Navbar onOpenEnquiry={() => setIsModalOpen(true)} />

      {/* Hero Section */}
      <section className="relative w-full h-[340px] sm:h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/images/sariska-tiger-reserve-img-1024x684.png"
          alt="Wildlife Tours India"
          fill
          priority
          className="object-cover brightness-50"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <span className="inline-block px-3 py-1 bg-[#FFAF19]/90 text-black text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full mb-3">
            Royal Bengal Tigers &amp; National Parks
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold mb-4 drop-shadow-md">
            Wildlife Tours in India
          </h1>
          <p className="text-sm sm:text-lg text-gray-100 max-w-2xl mx-auto font-light leading-relaxed drop-shadow">
            Encounter majestic Bengal tigers, Asiatic lions, one-horned rhinos, and exotic birds with private jungle gypsy safaris across India’s premier reserves.
          </p>
        </div>
      </section>

      {/* Tour Grid Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-3">
            Best Wildlife Safari Packages
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Choose from {tours.length} wildlife itineraries covering Ranthambore, Jim Corbett, Gir National Park, Bandhavgarh, and Periyar.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {tours.map(renderTourCard)}
        </div>
      </section>

      {/* Enquiry Form Component */}
      <section className="bg-white border-t border-b border-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <DestinationEnquiryForm cityName="Wildlife Tours in India" />
        </div>
      </section>

      {/* FAQs Section */}
      {faqs && faqs.length > 0 && (
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left px-5 py-4 font-serif font-bold text-gray-900 flex items-center justify-between gap-4 hover:text-[#E78031] transition-colors"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <span className="text-xl text-[#E78031] flex-shrink-0 font-bold">
                    {openFaqIndex === idx ? "−" : "+"}
                  </span>
                </button>
                {openFaqIndex === idx && (
                  <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

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
