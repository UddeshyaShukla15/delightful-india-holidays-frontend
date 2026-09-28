"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TourCard from "@/components/TourCard";
import EnquiryModal from "@/components/EnquiryModal";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { TourPackage, companyInfo } from "@/data/mockData";
import {
  MapPin,
  Clock,
  Star,
  Check,
  X,
  ChevronDown,
  Calendar,
  Users,
  Send,
  PhoneCall,
  ShieldCheck,
  CheckCircle,
  HelpCircle,
  Share2,
} from "lucide-react";

interface TourDetailClientProps {
  tour: TourPackage;
  relatedTours: TourPackage[];
}

export default function TourDetailClient({
  tour,
  relatedTours,
}: TourDetailClientProps) {
  const [openDays, setOpenDays] = useState<number[]>([1]); // Day 1 open by default
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [sidebarSubmitted, setSidebarSubmitted] = useState(false);
  const [sidebarLoading, setSidebarLoading] = useState(false);

  const [sidebarForm, setSidebarForm] = useState({
    name: "",
    email: "",
    phone: "",
    travelDate: "",
    adults: 2,
    children: 0,
    message: "",
  });

  const toggleDay = (dayNum: number) => {
    setOpenDays((prev) =>
      prev.includes(dayNum) ? prev.filter((d) => d !== dayNum) : [...prev, dayNum]
    );
  };

  const handleSidebarSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSidebarLoading(true);
    setTimeout(() => {
      setSidebarLoading(false);
      setSidebarSubmitted(true);
    }, 700);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar onOpenEnquiry={() => setEnquiryModalOpen(true)} />
      <Navbar onOpenEnquiry={() => setEnquiryModalOpen(true)} />

      {/* Breadcrumbs & Header Bar */}
      <div className="bg-[#faf7f2] border-b border-[#e8dcc8]/60 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-[#c9a766] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/tours" className="hover:text-[#c9a766] transition-colors">
              Tours
            </Link>
            <span>/</span>
            <span className="text-gray-800 font-semibold truncate max-w-xs sm:max-w-md">
              {tour.title}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#192a3d] px-3 py-1 text-white text-[11px] font-bold">
              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
              <span>{tour.rating.toFixed(1)} ({tour.reviewsCount} reviews)</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Tour Details */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Itinerary, Overview, Inclusions */}
          <div className="lg:col-span-8 space-y-10">
            {/* Title Section */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#c9a766]">
                {tour.category}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#192a3d] font-serif mt-2 mb-4 uppercase">
                {tour.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center gap-1.5 font-medium">
                  <Clock className="h-4 w-4 text-[#c9a766]" />
                  <span>{tour.duration}</span>
                </div>
                <span>&bull;</span>
                <div className="flex items-center gap-1.5 font-medium">
                  <MapPin className="h-4 w-4 text-[#c9a766]" />
                  <span>{tour.route}</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-lg border border-gray-200">
              <Image
                src={tour.bannerImage || tour.image}
                alt={tour.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
            </div>

            {/* Tour Overview */}
            <div className="rounded-2xl bg-[#faf7f2] p-7 border border-[#e8dcc8]">
              <h2 className="text-2xl font-light text-[#192a3d] font-serif mb-4 flex items-center gap-2">
                <span>Overview</span>
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {tour.overview}
              </p>
            </div>

            {/* Tour Highlights */}
            {tour.highlights && tour.highlights.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-light text-[#192a3d] font-serif">
                  Tour Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tour.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-xl bg-white p-4 border border-gray-200 shadow-sm"
                    >
                      <Check className="h-4 w-4 text-[#c9a766] flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-700 font-medium">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Accordion ITINERARY */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-light text-[#192a3d] font-serif uppercase tracking-wide">
                  ITINERARY
                </h2>
                <p className="text-xs text-gray-500 mt-1">
                  Click on each day to view detailed plan, travel arrangements, and activities.
                </p>
              </div>

              <div className="space-y-4">
                {tour.itinerary.map((day) => {
                  const isOpen = openDays.includes(day.day);
                  return (
                    <div
                      key={day.day}
                      className="overflow-hidden rounded-2xl border border-[#e8dcc8] bg-white shadow-sm transition-all"
                    >
                      {/* Accordion Header */}
                      <button
                        onClick={() => toggleDay(day.day)}
                        className="flex w-full items-center justify-between bg-[#faf7f2] px-6 py-4 text-left transition-colors hover:bg-[#f4ede1]/60 cursor-pointer"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#192a3d] text-xs font-bold text-[#c9a766]">
                            D{day.day}
                          </span>
                          <span className="text-sm sm:text-base font-bold text-[#192a3d]">
                            Day {day.day} : {day.title}
                          </span>
                        </div>
                        <ChevronDown
                          className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-[#c9a766]" : ""
                          }`}
                        />
                      </button>

                      {/* Accordion Body */}
                      {isOpen && (
                        <div className="p-6 space-y-4 text-sm text-gray-700 leading-relaxed border-t border-gray-100 animate-in fade-in duration-150">
                          <p>{day.description}</p>
                          {(day.meals || day.accommodation) && (
                            <div className="flex flex-wrap gap-4 pt-3 border-t border-gray-100 text-xs text-gray-500">
                              {day.meals && (
                                <div>
                                  <strong className="text-gray-700">Meals: </strong>
                                  {day.meals}
                                </div>
                              )}
                              {day.accommodation && (
                                <div>
                                  <strong className="text-gray-700">Stay: </strong>
                                  {day.accommodation}
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Inclusions */}
              <div className="rounded-2xl bg-emerald-50/50 p-6 border border-emerald-100">
                <h3 className="text-lg font-bold text-emerald-950 mb-4 flex items-center gap-2">
                  <Check className="h-5 w-5 text-emerald-600" />
                  <span>Package Inclusions</span>
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                  {tour.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="rounded-2xl bg-rose-50/50 p-6 border border-rose-100">
                <h3 className="text-lg font-bold text-rose-950 mb-4 flex items-center gap-2">
                  <X className="h-5 w-5 text-rose-600" />
                  <span>Package Exclusions</span>
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                  {tour.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold mt-0.5">✕</span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: "Book Your Day Tour" Sidebar Form */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 rounded-2xl bg-white border border-[#e8dcc8] shadow-xl overflow-hidden">
              {/* Header Box */}
              <div className="bg-[#192a3d] p-6 text-white text-center border-b border-[#c9a766]/30">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#c9a766]">
                  Transparent Pricing
                </span>
                <div className="text-3xl font-extrabold text-white mt-1 font-serif">
                  {tour.startingPrice}{" "}
                  <span className="text-xs font-normal text-gray-300">/ per person</span>
                </div>
                <h2 className="text-lg font-semibold text-white mt-2">Book Your Day Tour</h2>
                <p className="text-xs text-gray-300 mt-1">
                  100% Tailor-made &bull; Pay After Confirmation
                </p>
              </div>

              {sidebarSubmitted ? (
                <div className="p-8 text-center space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Booking Enquiry Sent!</h4>
                  <p className="text-xs text-gray-600">
                    Thank you! We have received your booking enquiry for <strong>{tour.title}</strong>. Kamal or our
                    support coordinator will contact you shortly with the finalized quotation.
                  </p>
                  <button
                    onClick={() => setSidebarSubmitted(false)}
                    className="w-full rounded-xl bg-[#c9a766] py-2.5 text-xs font-bold text-white hover:bg-[#b8924f]"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSidebarSubmit} className="p-6 space-y-3.5">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={sidebarForm.name}
                      onChange={(e) => setSidebarForm({ ...sidebarForm, name: e.target.value })}
                      className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 focus:border-[#c9a766] focus:outline-none focus:ring-1 focus:ring-[#c9a766]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={sidebarForm.email}
                      onChange={(e) => setSidebarForm({ ...sidebarForm, email: e.target.value })}
                      className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 focus:border-[#c9a766] focus:outline-none focus:ring-1 focus:ring-[#c9a766]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 96367 84713"
                      value={sidebarForm.phone}
                      onChange={(e) => setSidebarForm({ ...sidebarForm, phone: e.target.value })}
                      className="w-full rounded-xl border border-gray-300 px-3.5 py-2.5 text-xs sm:text-sm text-gray-900 focus:border-[#c9a766] focus:outline-none focus:ring-1 focus:ring-[#c9a766]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Travel Date
                      </label>
                      <input
                        type="date"
                        value={sidebarForm.travelDate}
                        onChange={(e) => setSidebarForm({ ...sidebarForm, travelDate: e.target.value })}
                        className="w-full rounded-xl border border-gray-300 px-3 py-2 text-xs text-gray-900 focus:border-[#c9a766] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                        Adults
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="30"
                        value={sidebarForm.adults}
                        onChange={(e) => setSidebarForm({ ...sidebarForm, adults: parseInt(e.target.value) || 1 })}
                        className="w-full rounded-xl border border-gray-300 px-3 py-2 text-xs text-gray-900 focus:border-[#c9a766] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1">
                      Special Requests / Notes
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Pickup point, hotel category (Heritage/4-Star), dietary preferences..."
                      value={sidebarForm.message}
                      onChange={(e) => setSidebarForm({ ...sidebarForm, message: e.target.value })}
                      className="w-full rounded-xl border border-gray-300 px-3 py-2 text-xs text-gray-900 focus:border-[#c9a766] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sidebarLoading}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#c9a766] py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#b8924f] transition-all cursor-pointer"
                  >
                    {sidebarLoading ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Book / Inquire Now</span>
                      </>
                    )}
                  </button>
                </form>
              )}

              {/* Direct WhatsApp & Call Buttons */}
              <div className="bg-[#faf7f2] p-5 border-t border-[#e8dcc8] space-y-3">
                <a
                  href={`https://wa.me/919636784713?text=Hi%20Kamal%2C%20I%20am%20interested%20in%20booking%20the%20${encodeURIComponent(
                    tour.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#25D366] py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#20ba59] transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center justify-center gap-2 w-full rounded-xl border border-gray-300 bg-white py-2 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <PhoneCall className="h-3.5 w-3.5 text-[#c9a766]" />
                  <span>Call {companyInfo.phoneFormatted}</span>
                </a>
              </div>

              {/* Guarantee items */}
              <div className="p-4 bg-white border-t border-gray-100 text-[11px] text-gray-500 space-y-1.5">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Licensed Government Certified Guide</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
                  <span>Private Sanitized AC Vehicle</span>
                </div>
                <div className="flex items-center gap-2">
                  <HelpCircle className="h-3.5 w-3.5 text-emerald-600" />
                  <span>24x7 Emergency Concierge</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Tours */}
        {relatedTours && relatedTours.length > 0 && (
          <div className="mt-20 pt-12 border-t border-gray-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#c9a766]">
                  More Experiences
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-[#192a3d] font-serif mt-1">
                  You Might Also Like
                </h3>
              </div>
              <Link
                href="/tours"
                className="text-xs font-bold uppercase tracking-wider text-[#c9a766] hover:underline"
              >
                View All Tours &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {relatedTours.map((t) => (
                <TourCard
                  key={t.id}
                  tour={t}
                  onEnquire={(tid) => setEnquiryModalOpen(true)}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />

      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        selectedTourId={tour.id}
      />
      <WhatsAppFloatingButton />
    </div>
  );
}
