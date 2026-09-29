"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import EnquiryModal from "@/components/EnquiryModal";
import { Calendar, ChevronRight, Send } from "lucide-react";

export default function CustomToursPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState<string>("");

  const packages = [
    {
      id: "15-day-holiday-in-india",
      title: "15-Day Holiday in India",
      duration: "15 Days",
      route: "New Delhi, Agra, Jaipur, Jodhpur, Jaisalmer, Pushkar, New Delhi",
      image: "/assets/images/custom-tours/redfort.webp",
      link: "/15-day-holiday-in-india",
      external: false,
    },
    {
      id: "09-days-ivars-cirulis",
      title: "09 Days Ivars Cirulis",
      duration: "09 Days",
      route: "Delhi, Agra, Ranthambore, Jaipur & New Delhi",
      image: "/assets/images/custom-tours/jodhpur-5.jpg",
      link: "#",
      external: false,
    },
    {
      id: "wander-to-india-with-anna",
      title: "Wander to India with Anna",
      duration: "8 Days",
      route: "2 Delhi, 1 Agra, 2 Jaipur, 3 Jaisalmer",
      image: "/assets/images/custom-tours/agra-30.jpg",
      link: "#",
      external: false,
    },
  ];

  const handleCardClick = (pkg: (typeof packages)[0]) => {
    if (pkg.link && pkg.link !== "#") {
      window.location.href = pkg.link;
    } else {
      setSelectedTour(pkg.title);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <TopBar />
      <Navbar onOpenEnquiry={() => { setSelectedTour("Custom Tours"); setIsModalOpen(true); }} />

      {/* Hero Banner with Background Image */}
      <section className="relative min-h-[280px] sm:min-h-[380px] lg:min-h-[400px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/custom-tours/agra-6.jpg"
            alt="Custom Tours"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Content: Heading & Breadcrumb */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-12 sm:py-16">
          <h1 className="text-4xl sm:text-5xl lg:text-[50px] font-serif font-normal text-white mb-3 tracking-normal">
            Custom Tours
          </h1>

          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-sm text-white font-sans">
            <Link href="/" className="hover:text-[#E78031] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/80" />
            <span className="text-white">Custom Tours</span>
          </nav>
        </div>
      </section>

      {/* 3 Packages Section */}
      <section className="bg-white pt-12 pb-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1250px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-[10px] overflow-hidden border border-gray-200 shadow-[0_0_2px_rgba(0,0,0,0.15)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-[255px] w-full overflow-hidden bg-gray-100">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover object-center hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="pt-4 pb-2">
                    {/* Title */}
                    <h2 className="text-[24px] sm:text-[26px] font-bold text-black px-[15px] leading-tight mb-3 font-sans hover:text-[#E78031] transition-colors">
                      {pkg.link && pkg.link !== "#" ? (
                        <Link href={pkg.link}>{pkg.title}</Link>
                      ) : (
                        <button
                          type="button"
                          onClick={() => handleCardClick(pkg)}
                          className="text-left font-bold hover:text-[#E78031] transition-colors"
                        >
                          {pkg.title}
                        </button>
                      )}
                    </h2>

                    {/* Duration with Calendar Icon */}
                    <div className="flex items-center gap-2 text-sm text-[#7A7A7A] px-[15px] mb-3 font-sans">
                      <Calendar className="w-3.5 h-3.5 text-gray-500 flex-shrink-0" />
                      <span>{pkg.duration}</span>
                    </div>

                    {/* Route / Description */}
                    <p className="text-[16px] leading-[22px] tracking-[0.3px] text-black px-[15px] font-sans min-h-[44px]">
                      {pkg.route}
                    </p>
                  </div>
                </div>

                {/* View Details Button */}
                <div className="px-[15px] pb-5 pt-2">
                  {pkg.link && pkg.link !== "#" ? (
                    <Link
                      href={pkg.link}
                      className="inline-block bg-[#E78031] hover:bg-[#d06b20] text-white font-semibold text-sm px-6 py-2.5 rounded-[3px] transition-colors shadow-sm"
                    >
                      View Details
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => handleCardClick(pkg)}
                      className="inline-block bg-[#E78031] hover:bg-[#d06b20] text-white font-semibold text-sm px-6 py-2.5 rounded-[3px] transition-colors shadow-sm cursor-pointer"
                    >
                      View Details
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan My Tour Button Section */}
      <section className="bg-white py-9 sm:py-10 flex items-center justify-center px-4">
        <Link
          href="/plan-my-tour"
          className="inline-flex items-center gap-2.5 bg-[#E78031] hover:bg-[#d06b20] text-white font-semibold text-base sm:text-lg px-8 py-3.5 rounded-[4px] shadow-sm hover:shadow transition-all active:scale-[0.98]"
        >
          <Send className="w-4 h-4 -rotate-45" />
          <span>Plan My Tour</span>
        </Link>
      </section>

      {/* Footer (includes Credibility Section + Complete Footer) */}
      <Footer />
      <WhatsAppFloatingButton />
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedTourId={selectedTour}
      />
    </div>
  );
}
