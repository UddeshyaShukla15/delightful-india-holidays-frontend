"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import CredibilitySection from "@/components/CredibilitySection";
import EnquiryModal from "@/components/EnquiryModal";
import {
  Car,
  Users,
  Briefcase,
  Shield,
  Clock,
  CheckCircle,
  FileText,
  Phone,
  Send,
  Fuel,
  MapPin,
  Sparkles,
} from "lucide-react";

export default function CarDriverHirePage() {
  const [activeTab, setActiveTab] = useState<"all" | "standard" | "coach" | "luxury">("all");
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);
  const [quoteForm, setQuoteForm] = useState({
    name: "",
    phone: "",
    email: "",
    pickupCity: "Delhi",
    dropCity: "Jaipur / Rajasthan",
    startDate: "",
    endDate: "",
    vehicle: "Toyota Innova Crysta",
    passengers: "2-4",
    message: "",
  });

  const fleet = [
    // Standard & SUV Fleet
    {
      name: "Toyota Etios",
      category: "standard",
      type: "Sedan",
      capacity: "1–3 Passengers",
      luggage: "2 Large Bags + Handbags",
      image: "/assets/images/Delhi-Sightseeing-Tour-img-1024x684.jpg",
      features: ["Chilled AC", "Comfortable Legroom", "Uniformed Driver", "Bottled Water"],
      bestFor: "Ideal for couples, solo travelers, city transfers, and budget-conscious sightseeing.",
    },
    {
      name: "Maruti Swift Dzire",
      category: "standard",
      type: "Sedan",
      capacity: "1–3 Passengers",
      luggage: "2 Bags + Handbags",
      image: "/assets/images/Jaipur-Agra-img.jpg",
      features: ["Dual AC", "Smooth Highway Ride", "Fuel Efficient", "Clean Interior"],
      bestFor: "Compact and agile for navigating narrow heritage lanes in Delhi, Agra, and Jaipur.",
    },
    {
      name: "Toyota Innova",
      category: "standard",
      type: "SUV",
      capacity: "1–6 Passengers",
      luggage: "4 Bags",
      image: "/assets/images/Colourful-Rajasthan-Tour-img-1024x684.jpg",
      features: ["Rear AC Vents", "Reclining Seats", "High Ground Clearance", "Roof Carrier"],
      bestFor: "The all-time trusted workhorse of Indian highways, perfect for small families.",
    },
    {
      name: "Toyota Innova Crysta",
      category: "standard",
      type: "Premium SUV",
      capacity: "1–6 Passengers",
      luggage: "4-5 Large Bags",
      image: "/assets/images/Golden-Triangle-Tour-img-1024x684.jpg",
      features: ["Captain Leather Seats", "Tri-Zone Climate Control", "USB Charging", "Whisper Quiet"],
      bestFor: "Our most requested vehicle for comfortable long-distance multi-day Rajasthan road trips.",
    },
    {
      name: "Toyota Fortuner",
      category: "standard",
      type: "Luxury 4x4 SUV",
      capacity: "1–6 Passengers",
      luggage: "4 Bags",
      image: "/assets/images/desert-sam-duns-jaialmer.jpg",
      features: ["4WD Power", "Plush Leather", "Commanding View", "Desert Highway Ready"],
      bestFor: "Rugged terrain, desert dune excursions, and premium SUV road travel in total style.",
    },
    {
      name: "Tempo Traveller",
      category: "standard",
      type: "Mini Van",
      capacity: "1–12 Passengers",
      luggage: "10-12 Bags",
      image: "/assets/images/kerala-group-tour-img-1024x684.png",
      features: ["High Ceiling Roof", "Push-back 1x1 Seats", "Mic & PA System", "Individual AC Vents"],
      bestFor: "Extended families and small group tours traveling with luggage in comfort.",
    },
    {
      name: "Volkswagen Crafter",
      category: "standard",
      type: "Executive Van",
      capacity: "1–14 Passengers",
      luggage: "14 Large Bags",
      image: "/assets/images/Delhi-Sightseeing-Tour-img.jpg",
      features: ["European Comfort", "Wide Windows", "Air Suspension", "Executive Styler"],
      bestFor: "Corporate delegations, VIP group travel, and luxury family adventures.",
    },

    // Coach & Group Fleet
    {
      name: "18 Seater AC Coach",
      category: "coach",
      type: "Mini Coach",
      capacity: "Up to 18 Passengers",
      luggage: "Dedicated Luggage Boot",
      image: "/assets/images/East-India-img-1024x684.png",
      features: ["2x1 Seating Layout", "Cool Box", "Curtains & Headrests", "Music System"],
      bestFor: "Small school groups, wedding guests, and corporate offsites.",
    },
    {
      name: "27 Seater Deluxe Coach",
      category: "coach",
      type: "Medium Coach",
      capacity: "Up to 27 Passengers",
      luggage: "Large Underbelly Cargo",
      image: "/assets/images/North-India-img-1024x684.png",
      features: ["2x2 Reclining Seats", "Reading Lights", "PA System", "Comfort Suspension"],
      bestFor: "Mid-sized tour groups exploring the Golden Triangle and Rajasthan circuits.",
    },
    {
      name: "35 Seater AC Coach",
      category: "coach",
      type: "Large AC Coach",
      capacity: "Up to 35 Passengers",
      luggage: "Underfloor Storage",
      image: "/assets/images/South-India-img-1024x684.png",
      features: ["Air Suspension", "Emergency Exits", "First Aid Kit", "Microphone System"],
      bestFor: "Charter groups, destination weddings, and large conference travel.",
    },
    {
      name: "45 Seater Luxury Volvo",
      category: "coach",
      type: "Luxury Volvo Coach",
      capacity: "Up to 45 Passengers",
      luggage: "Full Size Underbelly",
      image: "/assets/images/Golden-Triangle-Tour-img-2-1024x684.jpg",
      features: ["Volvo B11R Chassis", "Air Suspension Glider", "Mobile Charging", "LCD Monitors"],
      bestFor: "The pinnacle of long-distance group coach comfort across Indian expressways.",
    },

    // Luxury Fleet
    {
      name: "Toyota Camry Hybrid",
      category: "luxury",
      type: "Executive Sedan",
      capacity: "1–3 Passengers",
      luggage: "3 Bags",
      image: "/assets/images/800px-Taj_Mahal_Agra_India_edit3.jpg",
      features: ["Electric Hybrid Silence", "Reclining Rear Seats", "Rear Sunshades", "Chilled Console"],
      bestFor: "Eco-conscious executive luxury travel between Delhi, Agra, and Jaipur.",
    },
    {
      name: "BMW 5 Series",
      category: "luxury",
      type: "Luxury Sedan",
      capacity: "1–3 Passengers",
      luggage: "2 Large Bags",
      image: "/assets/images/amer-fort-jaipur-1.jpg",
      features: ["German Precision", "Dakota Leather", "Ambient Lighting", "Tinted Privacy Glass"],
      bestFor: "Discerning business travelers and luxury wedding VIP guest transfers.",
    },
    {
      name: "BMW 7 Series",
      category: "luxury",
      type: "Flagship Luxury Sedan",
      capacity: "1–3 Passengers",
      luggage: "3 Bags",
      image: "/assets/images/Pichola-Lake-Udaipur-Rajasthan.jpeg",
      features: ["Executive Lounge Seating", "Touch Command Tablet", "Sky Lounge Panoramic Roof"],
      bestFor: "Dignitaries, celebrity visits, and ultra-luxury private touring in India.",
    },
    {
      name: "Mercedes-Benz S-Class",
      category: "luxury",
      type: "First Class Luxury",
      capacity: "1–3 Passengers",
      luggage: "3 Bags",
      image: "/assets/images/Royal-Palaces-of-Rajasthan-img-1024x684.jpg",
      features: ["First-Class Cabin", "Hot-Stone Massage Seats", "Burmester 3D Audio", "Air Suspension"],
      bestFor: "The world standard for chauffeur-driven elegance, available on request.",
    },
    {
      name: "Audi A6",
      category: "luxury",
      type: "Executive Luxury Sedan",
      capacity: "1–3 Passengers",
      luggage: "2 Bags",
      image: "/assets/images/redfort.webp",
      features: ["Quattro AWD", "Matrix LED", "Dual Touchscreen MMI", "Valcona Leather"],
      bestFor: "Sleek contemporary luxury for day tours and express intercity transfers.",
    },
  ];

  const filteredFleet =
    activeTab === "all" ? fleet : fleet.filter((item) => item.category === activeTab);

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuoteSubmitted(true);
    const msg = `*Car & Driver Hire Quote Request*%0A*Name:* ${quoteForm.name}%0A*Phone:* ${quoteForm.phone}%0A*Email:* ${quoteForm.email}%0A*Vehicle:* ${quoteForm.vehicle}%0A*Pickup:* ${quoteForm.pickupCity}%0A*Drop:* ${quoteForm.dropCity}%0A*Dates:* ${quoteForm.startDate} to ${quoteForm.endDate}%0A*Passengers:* ${quoteForm.passengers}%0A*Details:* ${quoteForm.message}`;
    window.open(`https://wa.me/919636784713?text=${msg}`, "_blank");
  };

  const handleBookVehicle = (vehicleName: string) => {
    setQuoteForm((prev) => ({ ...prev, vehicle: vehicleName }));
    const formElement = document.getElementById("quote-section");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <TopBar />
      <Navbar onOpenEnquiry={() => setIsModalOpen(true)} />

      {/* Hero Banner matching original site */}
      <section className="relative bg-[#192a3d] text-white py-16 sm:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/assets/images/Delhi-Sightseeing-Tour-img-1024x684.jpg"
            alt="Car & Driver Hire India"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#c9a766] uppercase mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Car &amp; Driver Hire</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-light font-serif mb-4 tracking-tight">
            Car &amp; Driver Hire
          </h1>
          <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
            Travel across India in comfort with our well-maintained vehicles and experienced, English-speaking
            drivers — available for local, outstation, and multi-day journeys.
          </p>
        </div>
      </section>

      {/* Inclusions Banner */}
      <section className="bg-[#faf8f5] py-6 px-4 border-b border-[#ede5d8]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-4 text-xs sm:text-sm font-semibold text-gray-700">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-[#228B48]" />
            <span>All Toll Taxes &amp; State Permits Included</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-[#228B48]" />
            <span>Driver Night Allowance &amp; Fuel Included</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-[#228B48]" />
            <span>English-Speaking Experienced Chauffeurs</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-[#228B48]" />
            <span>Complimentary Chilled Bottled Water</span>
          </div>
        </div>
      </section>

      {/* Fleet Filter Tabs */}
      <section className="py-12 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs sm:text-sm font-semibold tracking-[2px] text-[#c9a766] uppercase mb-2 block">
              Our Vehicles
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#192a3d] font-normal">
              Explore Our Well-Maintained Fleet
            </h2>
            <div className="h-1 w-20 bg-[#E78031] mx-auto mt-4 rounded-full" />
          </div>

          <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-[#E78031] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Fleet ({fleet.length})
            </button>
            <button
              onClick={() => setActiveTab("standard")}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
                activeTab === "standard"
                  ? "bg-[#E78031] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Standard &amp; SUV Fleet
            </button>
            <button
              onClick={() => setActiveTab("coach")}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
                activeTab === "coach"
                  ? "bg-[#E78031] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Coach &amp; Group Fleet
            </button>
            <button
              onClick={() => setActiveTab("luxury")}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
                activeTab === "luxury"
                  ? "bg-[#E78031] text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Luxury Fleet
            </button>
          </div>

          {/* Vehicles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFleet.map((vehicle, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute top-3 left-3 bg-[#192a3d]/90 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {vehicle.type}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-1 group-hover:text-[#E78031] transition-colors">
                      {vehicle.name}
                    </h3>

                    <div className="flex items-center gap-3 text-xs text-gray-500 font-medium mb-3">
                      <span className="flex items-center gap-1 text-[#228B48] font-semibold">
                        <Users className="h-3.5 w-3.5" />
                        {vehicle.capacity}
                      </span>
                      <span>&bull;</span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-3.5 w-3.5" />
                        {vehicle.luggage}
                      </span>
                    </div>

                    <p className="text-xs text-gray-600 leading-relaxed mb-4">
                      {vehicle.bestFor}
                    </p>

                    <div className="space-y-1 bg-gray-50 p-3 rounded-xl border border-gray-100 mb-4">
                      {vehicle.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-[11px] text-gray-700">
                          <CheckCircle className="h-3 w-3 text-[#228B48] flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => handleBookVehicle(vehicle.name)}
                    className="w-full bg-[#E78031] hover:bg-[#d06b20] text-white text-xs sm:text-sm font-bold py-2.5 px-4 rounded-xl transition-all shadow-sm hover:shadow cursor-pointer text-center"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Why Hire With Us (From Original Website) */}
      <section className="py-16 sm:py-20 bg-[#faf8f5] px-4 sm:px-6 lg:px-8 border-y border-[#ede5d8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-[2px] text-[#c9a766] uppercase mb-2 block">
              Reliable &amp; Safe
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#192a3d]">
              Why Hire With Us
            </h2>
            <div className="h-1 w-20 bg-[#E78031] mx-auto mt-4 rounded-full" />
            <p className="text-sm text-gray-600 mt-2 max-w-xl mx-auto">
              Reliable, comfortable, and safe travel across India — every time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#ede5d8] shadow-sm">
              <div className="text-3xl mb-3">👨‍✈️</div>
              <h4 className="font-serif font-bold text-gray-900 text-lg mb-2">Experienced Drivers</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Professional, courteous, English-speaking drivers who know India&apos;s roads, shortcuts, and hidden gems.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#ede5d8] shadow-sm">
              <div className="text-3xl mb-3">🧾</div>
              <h4 className="font-serif font-bold text-gray-900 text-lg mb-2">Transparent Pricing</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                No hidden charges — clear, upfront rates covering tolls, permits, driver allowances, and fuel for local and outstation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#ede5d8] shadow-sm">
              <div className="text-3xl mb-3">🛠️</div>
              <h4 className="font-serif font-bold text-gray-900 text-lg mb-2">Well-Maintained Fleet</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Clean, regularly serviced vehicles equipped with high-efficiency AC and safety equipment for long-distance journeys.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#ede5d8] shadow-sm">
              <div className="text-3xl mb-3">☎️</div>
              <h4 className="font-serif font-bold text-gray-900 text-lg mb-2">24/7 Support</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Round-the-clock coordinator assistance throughout your journey for complete peace of mind and spontaneous route changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Instant Booking / Quote Form */}
      <section id="quote-section" className="py-16 sm:py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E78031]">
              Get Instant Quote
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#192a3d] mt-1">
              Request Your Car &amp; Driver Quote
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Tell us your journey route and chosen vehicle, and we will send an all-inclusive instant quote via WhatsApp.
            </p>
          </div>

          {quoteSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-3xl p-10 text-center space-y-4">
              <CheckCircle className="h-14 w-14 text-[#228B48] mx-auto" />
              <h3 className="text-2xl font-serif font-bold text-gray-900">Quote Request Received!</h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto">
                Thank you! We have opened WhatsApp to provide you with the exact vehicle rate and driver details immediately.
              </p>
              <button
                onClick={() => setQuoteSubmitted(false)}
                className="mt-4 bg-[#228B48] text-white px-6 py-2.5 rounded-full text-sm font-semibold"
              >
                Request Another Quote
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleQuoteSubmit}
              className="bg-[#faf8f5] border border-[#ede5d8] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={quoteForm.name}
                    onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-[#E78031] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={quoteForm.phone}
                    onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-[#E78031] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={quoteForm.email}
                    onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-[#E78031] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                    Vehicle Selected
                  </label>
                  <select
                    value={quoteForm.vehicle}
                    onChange={(e) => setQuoteForm({ ...quoteForm, vehicle: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-[#E78031] outline-none"
                  >
                    <option>Toyota Innova Crysta (SUV)</option>
                    <option>Toyota Etios (Sedan)</option>
                    <option>Maruti Swift Dzire</option>
                    <option>Toyota Innova</option>
                    <option>Toyota Fortuner</option>
                    <option>Tempo Traveller (12 Seater)</option>
                    <option>Volkswagen Crafter (14 Seater)</option>
                    <option>18 Seater AC Coach</option>
                    <option>27 Seater Deluxe Coach</option>
                    <option>35 Seater AC Coach</option>
                    <option>45 Seater Luxury Volvo</option>
                    <option>BMW / Mercedes Luxury Sedan</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                    Pickup City
                  </label>
                  <input
                    type="text"
                    required
                    value={quoteForm.pickupCity}
                    onChange={(e) => setQuoteForm({ ...quoteForm, pickupCity: e.target.value })}
                    placeholder="e.g. Delhi Airport / Jaipur Hotel"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-[#E78031] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                    Drop / Travel Route
                  </label>
                  <input
                    type="text"
                    required
                    value={quoteForm.dropCity}
                    onChange={(e) => setQuoteForm({ ...quoteForm, dropCity: e.target.value })}
                    placeholder="e.g. Agra, Jaipur, Jaisalmer"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-[#E78031] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    required
                    value={quoteForm.startDate}
                    onChange={(e) => setQuoteForm({ ...quoteForm, startDate: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-[#E78031] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                    End Date
                  </label>
                  <input
                    type="date"
                    required
                    value={quoteForm.endDate}
                    onChange={(e) => setQuoteForm({ ...quoteForm, endDate: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-[#E78031] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                    Number of Passengers
                  </label>
                  <input
                    type="text"
                    value={quoteForm.passengers}
                    onChange={(e) => setQuoteForm({ ...quoteForm, passengers: e.target.value })}
                    placeholder="e.g. 2 Adults, 1 Child"
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-[#E78031] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                  Trip Notes / Special Requests
                </label>
                <textarea
                  rows={3}
                  value={quoteForm.message}
                  onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
                  placeholder="Specify flight arrival timings, hotel stops, child car seats, or any specific requirements."
                  className="w-full rounded-xl border border-gray-300 bg-white p-4 text-sm focus:border-[#E78031] outline-none"
                />
              </div>

              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-[#E78031] hover:bg-[#d06b20] text-white px-10 py-3.5 rounded-full font-bold text-base shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>Get All-Inclusive Quote</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <CredibilitySection />
      <Footer />
      <WhatsAppFloatingButton />
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
