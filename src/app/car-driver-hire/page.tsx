"use client";

import React, { useState } from "react";
import Image from "next/image";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import EnquiryModal from "@/components/EnquiryModal";

export default function CarDriverHirePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<string>("");

  const standardFleet = [
    {
      name: "Toyota Etios",
      capacity: "Sedan · 1–3 Passengers",
      image: "/assets/images/fleet/default-vehicle.jpg",
    },
    {
      name: "Maruti Swift Dzire",
      capacity: "Sedan · 1–3 Passengers",
      image: "/assets/images/fleet/default-vehicle.jpg",
    },
    {
      name: "Toyota Innova",
      capacity: "SUV · 1–6 Passengers",
      image: "/assets/images/fleet/default-vehicle.jpg",
    },
    {
      name: "Toyota Innova Crysta",
      capacity: "SUV · 1–6 Passengers",
      image: "/assets/images/fleet/default-vehicle.jpg",
    },
    {
      name: "Toyota Fortuner",
      capacity: "Premium SUV · 1–6 Passengers",
      image: "/assets/images/fleet/default-vehicle.jpg",
    },
    {
      name: "Tempo Traveller",
      capacity: "Van · 1–12 Passengers",
      image: "/assets/images/fleet/default-vehicle.jpg",
    },
    {
      name: "Volkswagen Crafter",
      capacity: "Van · 1–14 Passengers",
      image: "/assets/images/fleet/default-vehicle.jpg",
    },
  ];

  const coachFleet = [
    {
      name: "18 Seater AC Coach",
      capacity: "Group Coach · Up to 18 Passengers",
      image: "/assets/images/fleet/default-vehicle.jpg",
    },
    {
      name: "27 Seater Deluxe Coach",
      capacity: "Group Coach · Up to 27 Passengers",
      image: "/assets/images/fleet/default-vehicle.jpg",
    },
    {
      name: "35 Seater AC Coach",
      capacity: "Group Coach · Up to 35 Passengers",
      image: "/assets/images/fleet/default-vehicle.jpg",
    },
    {
      name: "45 Seater Luxury Volvo",
      capacity: "Group Coach · Up to 45 Passengers",
      image: "/assets/images/fleet/default-vehicle.jpg",
    },
  ];

  const luxuryFleet = [
    {
      name: "Toyota Camry",
      capacity: "Executive Sedan · 1–3 Passengers",
      image: "/assets/images/fleet/default-vehicle.jpg",
    },
    {
      name: "BMW 5 Series",
      capacity: "Luxury Sedan · 1–3 Passengers",
      image: "/assets/images/fleet/default-vehicle.jpg",
    },
    {
      name: "BMW 7 Series",
      capacity: "Luxury Sedan · 1–3 Passengers",
      image: "/assets/images/fleet/default-vehicle.jpg",
    },
    {
      name: "Mercedes S-Class",
      capacity: "Luxury Sedan · 1–3 Passengers",
      image: "/assets/images/fleet/default-vehicle.jpg",
    },
    {
      name: "Audi A6",
      capacity: "Luxury Sedan · 1–3 Passengers",
      image: "/assets/images/fleet/default-vehicle.jpg",
    },
  ];

  const whyHireItems = [
    {
      title: "Experienced Drivers",
      description:
        "Professional, courteous, English-speaking drivers who know India's roads and hidden gems.",
      icon: <span className="text-2xl">👨‍✈️</span>,
    },
    {
      title: "Transparent Pricing",
      description:
        "No hidden charges — clear, upfront rates for local, outstation, and multi-day hires.",
      icon: <span className="text-2xl">🧾</span>,
    },
    {
      title: "Well-Maintained Fleet",
      description:
        "Clean, regularly serviced vehicles equipped for comfortable long-distance travel.",
      icon: <span className="text-2xl">🛠️</span>,
    },
    {
      title: "24/7 Support",
      description:
        "Round-the-clock assistance throughout your journey for complete peace of mind.",
      icon: <span className="text-2xl">☎️</span>,
    },
  ];

  const handleBookNow = (vehicleName: string) => {
    setSelectedVehicle(vehicleName);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <TopBar />
      <Navbar
        onOpenEnquiry={() => {
          setSelectedVehicle("Car & Driver Hire");
          setIsModalOpen(true);
        }}
      />

      {/* Intro Header Banner matching main website */}
      <section className="relative bg-gradient-to-br from-[#1c1a17] via-[#2b2723] to-[#3a3128] text-white text-center py-20 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Eyebrow */}
          <div className="uppercase tracking-[3px] text-[13px] text-[#b8862c] font-sans font-semibold mb-3.5">
            Delightful India Holidays
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl font-serif font-normal text-white mb-4 tracking-normal">
            Car &amp; Driver Hire
          </h1>

          {/* Description */}
          <p className="max-w-[640px] mx-auto font-sans text-base leading-[1.6] text-[#f1ece0]">
            Travel across India in comfort with our well-maintained vehicles and experienced, English-speaking drivers — available for local, outstation, and multi-day journeys.
          </p>
        </div>
      </section>

      {/* Fleet Sections Container */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* 1. Standard & SUV Fleet */}
        <section className="mb-20">
          <div className="text-center mb-11">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-normal text-[#1c1a17] mb-2.5">
              Standard &amp; SUV Fleet
            </h2>
            <p className="font-sans text-[#6b645b] text-[15px] max-w-[600px] mx-auto">
              Ideal for city sightseeing, airport transfers, and outstation trips across Rajasthan and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {standardFleet.map((vehicle, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[14px] border border-[#e7dfd0] shadow-[0_10px_30px_rgba(28,26,23,0.10)] hover:shadow-[0_18px_40px_rgba(28,26,23,0.18)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden text-center flex flex-col justify-between"
              >
                {/* Vehicle Image */}
                <div className="relative h-[150px] w-full bg-gradient-to-br from-[#f3e9d4] to-[#e9dcc0] flex items-center justify-center overflow-hidden">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Vehicle Body */}
                <div className="p-5 sm:p-6 pb-7 flex flex-col flex-1">
                  <h3 className="text-[19px] font-serif font-normal text-[#1c1a17] mb-2">
                    {vehicle.name}
                  </h3>
                  <p className="font-sans text-[13px] text-[#6b645b] mb-5">
                    {vehicle.capacity}
                  </p>
                  <button
                    type="button"
                    onClick={() => handleBookNow(vehicle.name)}
                    className="mt-auto inline-block text-center py-2.5 px-3.5 text-[13px] font-semibold tracking-[0.4px] rounded-[8px] uppercase font-sans bg-[#b8862c] text-white border border-[#b8862c] hover:bg-[#8f6a1f] hover:border-[#8f6a1f] transition-colors cursor-pointer shadow-sm"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Coach & Group Fleet */}
        <section className="mb-20">
          <div className="text-center mb-11">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-normal text-[#1c1a17] mb-2.5">
              Coach &amp; Group Fleet
            </h2>
            <p className="font-sans text-[#6b645b] text-[15px] max-w-[600px] mx-auto">
              Comfortable AC coaches for larger groups, family reunions, and corporate travel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {coachFleet.map((vehicle, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[14px] border border-[#e7dfd0] shadow-[0_10px_30px_rgba(28,26,23,0.10)] hover:shadow-[0_18px_40px_rgba(28,26,23,0.18)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden text-center flex flex-col justify-between"
              >
                {/* Vehicle Image */}
                <div className="relative h-[150px] w-full bg-gradient-to-br from-[#f3e9d4] to-[#e9dcc0] flex items-center justify-center overflow-hidden">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Vehicle Body */}
                <div className="p-5 sm:p-6 pb-7 flex flex-col flex-1">
                  <h3 className="text-[19px] font-serif font-normal text-[#1c1a17] mb-2">
                    {vehicle.name}
                  </h3>
                  <p className="font-sans text-[13px] text-[#6b645b] mb-5">
                    {vehicle.capacity}
                  </p>
                  <button
                    type="button"
                    onClick={() => handleBookNow(vehicle.name)}
                    className="mt-auto inline-block text-center py-2.5 px-3.5 text-[13px] font-semibold tracking-[0.4px] rounded-[8px] uppercase font-sans bg-[#b8862c] text-white border border-[#b8862c] hover:bg-[#8f6a1f] hover:border-[#8f6a1f] transition-colors cursor-pointer shadow-sm"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Luxury Fleet */}
        <section className="mb-20">
          <div className="text-center mb-11">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-normal text-[#1c1a17] mb-2.5">
              Luxury Fleet
            </h2>
            <p className="font-sans text-[#6b645b] text-[15px] max-w-[600px] mx-auto">
              Premium chauffeur-driven vehicles for weddings, VIP transfers, and bespoke luxury itineraries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {luxuryFleet.map((vehicle, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[14px] border border-[#e7dfd0] shadow-[0_10px_30px_rgba(28,26,23,0.10)] hover:shadow-[0_18px_40px_rgba(28,26,23,0.18)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden text-center flex flex-col justify-between"
              >
                {/* Vehicle Image */}
                <div className="relative h-[150px] w-full bg-gradient-to-br from-[#f3e9d4] to-[#e9dcc0] flex items-center justify-center overflow-hidden">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Vehicle Body */}
                <div className="p-5 sm:p-6 pb-7 flex flex-col flex-1">
                  <h3 className="text-[19px] font-serif font-normal text-[#1c1a17] mb-2">
                    {vehicle.name}
                  </h3>
                  <p className="font-sans text-[13px] text-[#6b645b] mb-5">
                    {vehicle.capacity}
                  </p>
                  <button
                    type="button"
                    onClick={() => handleBookNow(vehicle.name)}
                    className="mt-auto inline-block text-center py-2.5 px-3.5 text-[13px] font-semibold tracking-[0.4px] rounded-[8px] uppercase font-sans bg-[#b8862c] text-white border border-[#b8862c] hover:bg-[#8f6a1f] hover:border-[#8f6a1f] transition-colors cursor-pointer shadow-sm"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* 4. Why Hire With Us Section */}
      <section className="bg-white border-y border-[#e7dfd0] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1240px] mx-auto">
          <div className="text-center mb-11">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-normal text-[#1c1a17] mb-2.5">
              Why Hire With Us
            </h2>
            <p className="font-sans text-[#6b645b] text-[15px] max-w-[600px] mx-auto">
              Reliable, comfortable, and safe travel across India — every time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {whyHireItems.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full border-[1.5px] border-[#b8862c] flex items-center justify-center text-[#b8862c]">
                  {item.icon}
                </div>
                <h4 className="text-[17px] font-serif font-normal text-[#1c1a17] mb-2">
                  {item.title}
                </h4>
                <p className="font-sans text-[13.5px] text-[#6b645b] leading-[1.6] max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer (includes Credibility Section + Footer links) */}
      <Footer />
      <WhatsAppFloatingButton />
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedTourId={selectedVehicle}
      />
    </div>
  );
}
