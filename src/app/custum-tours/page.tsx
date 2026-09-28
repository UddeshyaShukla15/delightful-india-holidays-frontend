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
  Calendar,
  MapPin,
  Clock,
  Users,
  Compass,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Send,
  MessageSquare,
} from "lucide-react";

export default function CustomToursPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destinations: "Golden Triangle & Rajasthan",
    duration: "10-14 Days",
    travelers: "2 Adults",
    travelDate: "",
    hotelStyle: "Boutique Heritage Havelis",
    vehicleType: "Private AC SUV (Innova)",
    specialWishes: "",
  });

  const customGuestTours = [
    {
      title: "15-Day Holiday in India",
      duration: "15 Days / 14 Nights",
      route: "New Delhi – Agra – Jaipur – Jodhpur – Jaisalmer – Pushkar – New Delhi",
      image: "/assets/images/redfort.webp",
      tag: "Comprehensive Rajasthan & Golden Triangle",
      description:
        "A complete, slow-paced exploration crafted for travelers wanting to experience the bustling historical heart of Delhi, the iconic sunrise at Taj Mahal, royal Pink City palaces, blue alleys of Jodhpur, magical Thar desert dunes in Jaisalmer, and holy Pushkar lake.",
      highlights: [
        "Private AC Toyota Innova with experienced driver Rauf for all 15 days",
        "Overnight luxury Swiss desert tent with camel safari at Sam Dunes",
        "Rooftop dining overlooking Mehrangarh Fort in Jodhpur",
        "Evening boat cruise on Lake Pichola, Udaipur",
      ],
    },
    {
      title: "09 Days Ivars Cirulis Itinerary",
      duration: "09 Days / 8 Nights",
      route: "Delhi – Agra – Ranthambore – Jaipur – New Delhi",
      image: "/assets/images/jodhpur-5-1024x545.jpg",
      tag: "Heritage & Tiger Safari",
      description:
        "Bespoke itinerary combining northern India's greatest architectural marvels with thrilling wildlife adventures in Ranthambore Tiger Reserve. Specially timed for optimal tiger sightings and morning light photography.",
      highlights: [
        "Two private jungle Gypsy safaris in Ranthambore Core Zones",
        "Sunrise photography session at Taj Mahal & Agra Fort",
        "Amber Fort elephant sanctuary and Nahargarh sunset view",
        "Authentic street food and heritage bazaar tour in Old Delhi",
      ],
    },
    {
      title: "Wander to India with Anna",
      duration: "8 Days / 7 Nights",
      route: "2 Delhi – 1 Agra – 2 Jaipur – 3 Jaisalmer",
      image: "/assets/images/agra-30-1024x545.jpg",
      tag: "Golden Fort & Desert Glamping",
      description:
        "Crafted for solo explorer Anna, focusing on local female-friendly hospitality, boutique haveli accommodations, Instagram reels photography, and deep cultural immersion in the golden sands of Jaisalmer.",
      highlights: [
        "Curated photography and Instagram reel spots across Jaipur & Jaisalmer",
        "Bespoke desert camp with authentic Kalbelia dancers and folk singers",
        "Handicraft shopping with local master artisans in Pink City",
        "24/7 dedicated support and direct phone line to tour director",
      ],
    },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    const msg = `*New Custom Tour Request*%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Destinations:* ${formData.destinations}%0A*Duration:* ${formData.duration}%0A*Travelers:* ${formData.travelers}%0A*Travel Date:* ${formData.travelDate}%0A*Hotel Style:* ${formData.hotelStyle}%0A*Vehicle:* ${formData.vehicleType}%0A*Special Requests:* ${formData.specialWishes}`;
    window.open(`https://wa.me/919636784713?text=${msg}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <TopBar />
      <Navbar onOpenEnquiry={() => setIsModalOpen(true)} />

      {/* Hero Banner */}
      <section className="relative bg-[#192a3d] text-white py-16 sm:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/assets/images/desert-sam-duns-jaialmer.jpg"
            alt="Custom Tours India"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#c9a766] uppercase mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Custom Tours</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-light font-serif mb-4 tracking-tight">
            Custom Tours
          </h1>
          <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed font-light">
            No two travelers are identical. We craft personalized India journeys from scratch based entirely
            around your rhythm, passions, dates, and budget.
          </p>
        </div>
      </section>

      {/* Section 1: Real Client Custom Journeys */}
      <section className="py-16 sm:py-24 bg-[#faf8f5] px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs sm:text-sm font-semibold tracking-[2px] text-[#c9a766] uppercase mb-2 block">
              Real Guest Experiences
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#192a3d] font-normal">
              Tailor-Made Client Itineraries
            </h2>
            <div className="h-1 w-20 bg-[#E78031] mx-auto mt-4 rounded-full" />
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mt-3">
              Browse examples of custom itineraries we recently created and operated for our international guests.
            </p>
          </div>

          <div className="space-y-12">
            {customGuestTours.map((tour, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-[#ede5d8] shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
              >
                <div className="relative h-64 lg:h-auto lg:col-span-5 overflow-hidden bg-gray-100">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute top-4 left-4 bg-[#E78031] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {tour.tag}
                  </div>
                </div>

                <div className="p-8 lg:p-10 lg:col-span-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 text-xs font-bold text-[#c9a766] uppercase tracking-wider mb-2">
                      <Clock className="h-4 w-4" />
                      <span>{tour.duration}</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                      {tour.title}
                    </h3>

                    <div className="flex items-center gap-2 text-sm text-[#228B48] font-semibold mb-4">
                      <MapPin className="h-4 w-4 flex-shrink-0" />
                      <span>{tour.route}</span>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed mb-6">
                      {tour.description}
                    </p>

                    <div className="space-y-2 mb-8 bg-[#faf8f5] p-4 rounded-2xl border border-[#ede5d8]">
                      <div className="text-xs font-bold uppercase text-gray-700 tracking-wider mb-2">
                        Trip Highlights:
                      </div>
                      {tour.highlights.map((hl, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-[#228B48] flex-shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="bg-[#E78031] hover:bg-[#d06b20] text-white text-sm font-bold px-6 py-3 rounded-full transition-all shadow-sm cursor-pointer"
                    >
                      Customize a Trip Like This
                    </button>
                    <a
                      href={`https://wa.me/919636784713?text=Hi%20Kamal%2C%20I%20saw%20the%20custom%20tour%20"${encodeURIComponent(
                        tour.title
                      )}"%20and%20want%20to%20plan%20something%20similar.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#228B48] hover:underline"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>Ask Kamal on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: 4-Step Process */}
      <section className="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <span className="text-xs sm:text-sm font-semibold tracking-[2px] text-[#c9a766] uppercase mb-2 block">
            Simple &amp; Collaborative
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#192a3d] font-normal mb-12">
            How Custom Planning Works
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#faf8f5] p-6 rounded-2xl border border-[#ede5d8]">
              <div className="h-12 w-12 rounded-full bg-[#E78031] text-white font-bold font-serif text-xl flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h4 className="font-serif font-bold text-gray-900 text-lg mb-2">Share Your Vision</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Tell us your preferred dates, cities you dream of seeing, travel style, and budget.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-6 rounded-2xl border border-[#ede5d8]">
              <div className="h-12 w-12 rounded-full bg-[#c9a766] text-white font-bold font-serif text-xl flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h4 className="font-serif font-bold text-gray-900 text-lg mb-2">Receive Itinerary</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Our local specialists craft a tailored day-by-day plan with transparent upfront pricing.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-6 rounded-2xl border border-[#ede5d8]">
              <div className="h-12 w-12 rounded-full bg-[#228B48] text-white font-bold font-serif text-xl flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h4 className="font-serif font-bold text-gray-900 text-lg mb-2">Refine to Perfection</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Unlimited changes until every hotel, guide, safari, and transit timing is 100% ideal.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-6 rounded-2xl border border-[#ede5d8]">
              <div className="h-12 w-12 rounded-full bg-[#192a3d] text-white font-bold font-serif text-xl flex items-center justify-center mx-auto mb-4">
                4
              </div>
              <h4 className="font-serif font-bold text-gray-900 text-lg mb-2">Seamless Travel</h4>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Enjoy your holiday with private chauffeur, pre-arranged entries, and 24/7 concierge assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Interactive Custom Tour Planner Form */}
      <section className="py-16 sm:py-24 bg-[#faf8f5] px-4 sm:px-6 lg:px-8 border-t border-[#ede5d8]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E78031]">
              Start Planning Now
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#192a3d] mt-1">
              Design Your Custom India Tour
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              Fill in your thoughts and our team will get in touch with an initial bespoke proposal.
            </p>
          </div>

          {formSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-3xl p-10 text-center space-y-4">
              <CheckCircle className="h-14 w-14 text-[#228B48] mx-auto" />
              <h3 className="text-2xl font-serif font-bold text-gray-900">Custom Tour Plan Sent!</h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto">
                Thank you! We have opened WhatsApp to connect with you directly. You can also expect an email response within 2 hours.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-4 bg-[#228B48] text-white px-6 py-2.5 rounded-full text-sm font-semibold"
              >
                Plan Another Tour
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleFormSubmit}
              className="bg-white border border-[#e8dcc8] rounded-3xl p-6 sm:p-10 shadow-sm space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full Name"
                    className="w-full rounded-xl border border-gray-300 bg-gray-50/50 px-4 py-2.5 text-sm focus:border-[#E78031] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@address.com"
                    className="w-full rounded-xl border border-gray-300 bg-gray-50/50 px-4 py-2.5 text-sm focus:border-[#E78031] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 or +91 ..."
                    className="w-full rounded-xl border border-gray-300 bg-gray-50/50 px-4 py-2.5 text-sm focus:border-[#E78031] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                    Destinations of Interest
                  </label>
                  <select
                    value={formData.destinations}
                    onChange={(e) => setFormData({ ...formData, destinations: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 bg-gray-50/50 px-4 py-2.5 text-sm focus:border-[#E78031] outline-none"
                  >
                    <option>Golden Triangle &amp; Rajasthan</option>
                    <option>Complete Rajasthan In-Depth</option>
                    <option>Golden Triangle &amp; Varanasi</option>
                    <option>Kerala &amp; South India</option>
                    <option>Ladakh &amp; Himalayas</option>
                    <option>Wild Tigers &amp; Heritage</option>
                    <option>Other / Multi-region</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                    Approx Duration
                  </label>
                  <select
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 bg-gray-50/50 px-4 py-2.5 text-sm focus:border-[#E78031] outline-none"
                  >
                    <option>5 - 7 Days</option>
                    <option>8 - 10 Days</option>
                    <option>10 - 14 Days</option>
                    <option>15 - 20 Days</option>
                    <option>3+ Weeks</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                    Approx Start Date
                  </label>
                  <input
                    type="date"
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 bg-gray-50/50 px-4 py-2.5 text-sm focus:border-[#E78031] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                    Accommodation Style
                  </label>
                  <select
                    value={formData.hotelStyle}
                    onChange={(e) => setFormData({ ...formData, hotelStyle: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 bg-gray-50/50 px-4 py-2.5 text-sm focus:border-[#E78031] outline-none"
                  >
                    <option>Boutique Heritage Havelis</option>
                    <option>Five Star Luxury Palaces (Oberoi / Taj / Leela)</option>
                    <option>Four Star Comfort &amp; Charm</option>
                    <option>Authentic Homestays &amp; Desert Camps</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                    Vehicle Preference
                  </label>
                  <select
                    value={formData.vehicleType}
                    onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                    className="w-full rounded-xl border border-gray-300 bg-gray-50/50 px-4 py-2.5 text-sm focus:border-[#E78031] outline-none"
                  >
                    <option>Private AC SUV (Toyota Innova Crysta)</option>
                    <option>Private Sedan (Toyota Etios / Dzire)</option>
                    <option>Luxury Sedan (BMW / Mercedes)</option>
                    <option>Luxury Tempo Traveller (For Small Groups)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-700 mb-2">
                  Special Wishes &amp; Travel Dreams
                </label>
                <textarea
                  rows={3}
                  value={formData.specialWishes}
                  onChange={(e) => setFormData({ ...formData, specialWishes: e.target.value })}
                  placeholder="Tell us what excites you most: photography, food walks, yoga retreats, camel safaris, anniversary celebrations, etc."
                  className="w-full rounded-xl border border-gray-300 bg-gray-50/50 p-4 text-sm focus:border-[#E78031] outline-none"
                />
              </div>

              <div className="text-center pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-[#E78031] hover:bg-[#d06b20] text-white px-10 py-3.5 rounded-full font-bold text-base shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span>Request Custom Itinerary</span>
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
