"use client";

import React, { useState } from "react";
import Image from "next/image";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import EnquiryModal from "@/components/EnquiryModal";
import { CheckCircle2 } from "lucide-react";

export default function PlanMyTourPage() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [captchaChecked, setCaptchaChecked] = useState(false);

  // Form states matching live site
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "United States of America",
    arriveDate: "",
    departureDate: "",
    bookedFlight: "",
    travellersCount: "",
    daysCount: "",
    travellingWith: [] as string[],
    ageGroups: [] as string[],
    destinations: [] as string[],
    interest: "Wildlife",
    accommodationType: "Hostel Dorm Bed",
    budget: "Backpacker < $500",
    guideActivities: [] as string[],
    modeOfTransport: [] as string[],
    specialRequest: "",
  });

  const destinationsList = [
    "Delhi", "Agra", "Jaipur", "Udaipur", "Jodhpur", "Ranthambore",
    "Bikaner", "Pushker", "Jawai", "Bharatpur", "Sariska", "Jaisalmer(Sams & Dunes)",
    "Mandwa", "Kerala", "Varanasi", "Rashikash", "Goa", "Mumbai",
    "Uthrakhand", "Punjab", "Amritsar", "Khujarao", "Madhya Pradesh", "Maharashtra",
    "Tamil Nadu", "Gujarat", "Karnataka", "Himachal Pradesh", "Jammu & Kashmir", "leh ladakh"
  ];

  const travellingWithOptions = [
    "On my own", "With my partner", "With my Family", "With my Friend", "Other"
  ];

  const ageGroupOptions = [
    "<18", "18-24", "25-32", "33-38", "39-45", "46-52", "53-50"
  ];

  const guideOptions = [
    "We Will Plan Indelpineley", "Only in Key Locations", "In All Destnationa"
  ];

  const transportOptions = [
    "Day Train", "Overnight Train", "Bus", "Car With Driver", "Flight"
  ];

  const handleCheckboxToggle = (
    field: "travellingWith" | "ageGroups" | "destinations" | "guideActivities" | "modeOfTransport",
    val: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(val)
        ? prev[field].filter((item) => item !== val)
        : [...prev[field], val],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopBar onOpenEnquiry={() => setEnquiryModalOpen(true)} />
      <Navbar onOpenEnquiry={() => setEnquiryModalOpen(true)} />

      <main className="flex-1">
        {/* ================= PART 1: TOP BANNER WITH BACKGROUND IMAGE ================= */}
        <section className="relative min-h-[280px] sm:min-h-[320px] flex items-center justify-center overflow-hidden">
          {/* Background Image: Refund-Policy.jpg */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/images/Refund-Policy.jpg"
              alt="Plan Your Trip Banner"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/45" />
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="font-times text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-wide drop-shadow-md">
              Plan Your Trip
            </h1>
          </div>
        </section>

        {/* ================= PART 2: PHOTO ON LEFT & CONTENT ON RIGHT (MATCHING HEIGHT) ================= */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            {/* Photo on Left Side: stretches to match full height of right content */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="relative w-full h-full min-h-[400px] lg:min-h-full rounded-[10px] overflow-hidden shadow-lg border border-gray-200">
                <Image
                  src="/assets/images/desert-sam-duns-jaialmer.jpg"
                  alt="Desert Sam Dunes Jaisalmer"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </div>

            {/* Content on Right Side */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-5 font-roboto text-[15px] sm:text-[16px] text-gray-700 leading-relaxed">
              <div>
                <span className="text-xs sm:text-sm font-bold tracking-widest text-[#FFAF19] uppercase block mb-1">
                  TAILOR-MADE TRIPS
                </span>
                <h2 className="font-times text-3xl sm:text-4xl lg:text-5xl font-semibold text-black leading-tight mb-4">
                  Craft Your Perfect India Journey
                </h2>

                <p className="mb-4">
                  Every traveler is unique, and so should be their journey. At{" "}
                  <strong className="text-black">Delightful India Holidays</strong>, we
                  specialize in creating personalized India tour packages designed around
                  your interests, travel style, budget, and schedule.
                </p>

                <p className="mb-4">
                  Whether you&apos;re dreaming of exploring the royal palaces of
                  Rajasthan, experiencing the iconic Golden Triangle, spotting tigers on
                  a wildlife safari, relaxing in Kerala, or discovering the spiritual
                  side of India, our travel experts will craft the perfect itinerary just
                  for you.
                </p>

                <p className="mb-4">
                  From handpicked accommodations and private transportation to
                  sightseeing, experienced local guides, domestic flights, and train
                  bookings, we take care of every detail so you can enjoy a seamless and
                  memorable holiday.
                </p>

                <p className="mb-5">
                  Simply share your travel plans using the enquiry form below, and our team
                  will prepare a customized itinerary that matches your expectations. You can
                  also get in touch with us directly, and we&apos;ll be happy to help you
                  plan your dream vacation in India.
                </p>

                {/* Why Choose Our Tailor-Made Tours */}
                <div className="pt-2 mb-5">
                  <h3 className="font-bold text-black text-[16px] mb-3">
                    Why Choose Our Tailor-Made Tours?
                  </h3>
                  <ul className="space-y-2 text-[14px] text-gray-800">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#228B48] flex-shrink-0" />
                      <span>100% Customized Itineraries</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#228B48] flex-shrink-0" />
                      <span>Private Tours with Flexible Scheduling</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#228B48] flex-shrink-0" />
                      <span>Trusted Local Travel Experts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#228B48] flex-shrink-0" />
                      <span>Handpicked Hotels &amp; Authentic Experiences</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#228B48] flex-shrink-0" />
                      <span>24/7 Travel Assistance Throughout Your Journey</span>
                    </li>
                  </ul>
                </div>

                {/* Please Note Box (photo stretches to this point) */}
                <div className="p-4 rounded-[6px] bg-[#faf7f2] border border-[#e8dcc8] text-[13px] text-gray-600 leading-normal">
                  <strong className="text-black">Please Note:</strong> Some highly
                  customized or extended multi-day itineraries may require a small
                  consultation fee after the initial planning stage. This amount will be
                  fully adjusted against your booking confirmation. Please refer to our{" "}
                  <strong className="text-black">Terms &amp; Conditions</strong> for
                  complete details.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= PART 3: LET US GET TO KNOW YOU BETTER (EXACT FORM FIELDS) ================= */}
        <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full border-t border-gray-100">
          <div className="text-center mb-10">
            <h2 className="font-times text-3xl sm:text-4xl font-semibold text-black">
              Let Us Get To Know You Better
            </h2>
          </div>

          <div className="bg-white rounded-[10px] p-6 sm:p-10 shadow-sm border border-gray-200">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-100 text-[#228B48] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-times text-2xl font-bold text-gray-900">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  We have received your trip details. Our senior itinerary planner will contact you within 24 hours via Email and WhatsApp.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-[4px] bg-[#228B48] text-white font-medium text-sm hover:bg-[#1a7038]"
                >
                  Plan Another Tour
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* ROW 1: FULL NAME & EMAIL */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-bold uppercase tracking-wider text-gray-800 mb-2">
                      FULL NAME
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-[4px] border border-gray-300 px-3.5 py-2.5 text-sm focus:border-gray-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold uppercase tracking-wider text-gray-800 mb-2">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-[4px] border border-gray-300 px-3.5 py-2.5 text-sm focus:border-gray-500 outline-none"
                    />
                  </div>
                </div>

                {/* ROW 2: WHATSAPP NUMBER & SELECT COUNTRY */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-bold uppercase tracking-wider text-gray-800 mb-2">
                      WHATSAPP NUMBER
                    </label>
                    <div className="flex rounded-[4px] border border-gray-300 overflow-hidden focus-within:border-gray-500">
                      <div className="flex items-center gap-1 bg-gray-50 px-3 border-r border-gray-300 text-sm text-gray-700">
                        <span className="text-base">🇮🇳</span>
                        <span className="text-xs text-gray-500">▼</span>
                      </div>
                      <input
                        type="tel"
                        required
                        placeholder="+91 81234 56789"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold uppercase tracking-wider text-gray-800 mb-2">
                      SELECT COUNTRY
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full rounded-[4px] border border-gray-300 px-3.5 py-2.5 text-sm bg-white focus:border-gray-500 outline-none"
                    >
                      <option value="United States of America">United States of America</option>
                      <option value="India">India</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Australia">Australia</option>
                      <option value="Canada">Canada</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                      <option value="Spain">Spain</option>
                      <option value="Italy">Italy</option>
                      <option value="Japan">Japan</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Other">Other Country</option>
                    </select>
                  </div>
                </div>

                {/* ROW 3: ARRIVE DATE & DEPARTURE DATE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-bold uppercase tracking-wider text-gray-800 mb-2">
                      ARRIVE DATE
                    </label>
                    <input
                      type="date"
                      placeholder="Arrive Date"
                      value={formData.arriveDate}
                      onChange={(e) => setFormData({ ...formData, arriveDate: e.target.value })}
                      className="w-full rounded-[4px] border border-gray-300 px-3.5 py-2.5 text-sm focus:border-gray-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold uppercase tracking-wider text-gray-800 mb-2">
                      DEPARTURE DATE
                    </label>
                    <input
                      type="date"
                      placeholder="Departure Date"
                      value={formData.departureDate}
                      onChange={(e) => setFormData({ ...formData, departureDate: e.target.value })}
                      className="w-full rounded-[4px] border border-gray-300 px-3.5 py-2.5 text-sm focus:border-gray-500 outline-none"
                    />
                  </div>
                </div>

                {/* ROW 4: HAVE YOU BOOKED YOUR FLIGHT TO INDIA YET? */}
                <div>
                  <label className="block text-[13px] font-bold uppercase tracking-wider text-gray-800 mb-2">
                    HAVE YOU BOOKED YOUR FLIGHT TO INDIA YET?
                  </label>
                  <div className="flex items-center gap-6 text-sm text-gray-800">
                    <label className="inline-flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="bookedFlight"
                        value="Yes"
                        checked={formData.bookedFlight === "Yes"}
                        onChange={() => setFormData({ ...formData, bookedFlight: "Yes" })}
                        className="rounded-none border-gray-300 text-black focus:ring-0"
                      />
                      <span>Yes</span>
                    </label>
                    <label className="inline-flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="bookedFlight"
                        value="No"
                        checked={formData.bookedFlight === "No"}
                        onChange={() => setFormData({ ...formData, bookedFlight: "No" })}
                        className="rounded-none border-gray-300 text-black focus:ring-0"
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>

                {/* ROW 5: NO. OF TRAVELLERS & NO OF DAYS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-bold uppercase tracking-wider text-gray-800 mb-2">
                      NO. OF TRAVELLERS
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      value={formData.travellersCount}
                      onChange={(e) => setFormData({ ...formData, travellersCount: e.target.value })}
                      className="w-full rounded-[4px] border border-gray-300 px-3.5 py-2.5 text-sm focus:border-gray-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold uppercase tracking-wider text-gray-800 mb-2">
                      NO OF DAYS
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      value={formData.daysCount}
                      onChange={(e) => setFormData({ ...formData, daysCount: e.target.value })}
                      className="w-full rounded-[4px] border border-gray-300 px-3.5 py-2.5 text-sm focus:border-gray-500 outline-none"
                    />
                  </div>
                </div>

                {/* ROW 6: WHO IS TRAVELLING WITH YOU? & HOW OLD ARE YOU AND THE OTHER TRAVELLERS? */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-bold uppercase tracking-wider text-gray-800 mb-2">
                      WHO IS TRAVELLING WITH YOU?
                    </label>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-800">
                      {travellingWithOptions.map((opt) => (
                        <label key={opt} className="inline-flex items-center gap-1.5 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.travellingWith.includes(opt)}
                            onChange={() => handleCheckboxToggle("travellingWith", opt)}
                            className="rounded-none border-gray-300 text-black"
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold uppercase tracking-wider text-gray-800 mb-2">
                      HOW OLD ARE YOU AND THE OTHER TRAVELLERS?
                    </label>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-800">
                      {ageGroupOptions.map((opt) => (
                        <label key={opt} className="inline-flex items-center gap-1.5 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.ageGroups.includes(opt)}
                            onChange={() => handleCheckboxToggle("ageGroups", opt)}
                            className="rounded-none border-gray-300 text-black"
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ROW 7: DESTINATION */}
                <div>
                  <label className="block text-[13px] font-bold uppercase tracking-wider text-gray-800 mb-2">
                    DESTINATION
                  </label>
                  <div className="flex flex-wrap gap-x-4 gap-y-2.5 text-[13px] text-gray-800">
                    {destinationsList.map((dest) => (
                      <label key={dest} className="inline-flex items-center gap-1.5 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.destinations.includes(dest)}
                          onChange={() => handleCheckboxToggle("destinations", dest)}
                          className="rounded-none border-gray-300 text-black"
                        />
                        <span>{dest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* ROW 8: INTEREST, ACCOMMODATION TYPE, BUDGET */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-[13px] font-bold uppercase tracking-wider text-gray-800 mb-2">
                      INTEREST
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full rounded-[4px] border border-gray-300 px-3.5 py-2.5 text-sm bg-white focus:border-gray-500 outline-none"
                    >
                      <option value="Wildlife">Wildlife</option>
                      <option value="Photographic">Photographic</option>
                      <option value="Food Tour">Food Tour</option>
                      <option value="Spiritual Tour">Spiritual Tour</option>
                      <option value="Wellness or Yoga">Wellness or Yoga</option>
                      <option value="Historical or Monument">Historical or Monument</option>
                      <option value="Festival">Festival</option>
                      <option value="Adventure">Adventure</option>
                      <option value="Private Trip">Private Trip</option>
                      <option value="Couple and Family">Couple and Family</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold uppercase tracking-wider text-gray-800 mb-2">
                      ACCOMMODATION TYPE
                    </label>
                    <select
                      value={formData.accommodationType}
                      onChange={(e) => setFormData({ ...formData, accommodationType: e.target.value })}
                      className="w-full rounded-[4px] border border-gray-300 px-3.5 py-2.5 text-sm bg-white focus:border-gray-500 outline-none"
                    >
                      <option value="Hostel Dorm Bed">Hostel Dorm Bed</option>
                      <option value="Hostel Private Room">Hostel Private Room</option>
                      <option value="Home Stay">Home Stay</option>
                      <option value="Budget Class">Budget Class</option>
                      <option value="3 Star">3 Star</option>
                      <option value="4 Star">4 Star</option>
                      <option value="5 Star">5 Star</option>
                      <option value="Heritage & Boutique Haveli">Heritage &amp; Boutique Haveli</option>
                      <option value="Chain & Group Hotels">Chain &amp; Group Hotels</option>
                      <option value="Without Hotel or Accommodation">Without Hotel or Accommodation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold uppercase tracking-wider text-gray-800 mb-2">
                      BUDGET
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full rounded-[4px] border border-gray-300 px-3.5 py-2.5 text-sm bg-white focus:border-gray-500 outline-none"
                    >
                      <option value="Backpacker < $500">Backpacker &lt; $500</option>
                      <option value="Budget $500 - 1000">Budget $500 - 1000</option>
                      <option value="Comfort $ 1000 - 2000">Comfort $ 1000 - 2000</option>
                      <option value="Luxury $2000>">Luxury $2000&gt;</option>
                    </select>
                  </div>
                </div>

                {/* ROW 9: GUIDE & ACTIVITIES & MODE OF TRANSPORT */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-bold uppercase tracking-wider text-gray-800 mb-2">
                      GUIDE &amp; ACTIVITIES
                    </label>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-800">
                      {guideOptions.map((opt) => (
                        <label key={opt} className="inline-flex items-center gap-1.5 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.guideActivities.includes(opt)}
                            onChange={() => handleCheckboxToggle("guideActivities", opt)}
                            className="rounded-none border-gray-300 text-black"
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] font-bold uppercase tracking-wider text-gray-800 mb-2">
                      MODE OF TRANSPORT
                    </label>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-800">
                      {transportOptions.map((opt) => (
                        <label key={opt} className="inline-flex items-center gap-1.5 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.modeOfTransport.includes(opt)}
                            onChange={() => handleCheckboxToggle("modeOfTransport", opt)}
                            className="rounded-none border-gray-300 text-black"
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* ROW 10: SPECIAL REQUEST */}
                <div>
                  <label className="block text-[13px] font-bold uppercase tracking-wider text-gray-800 mb-2">
                    SPECIAL REQUEST
                  </label>
                  <textarea
                    rows={6}
                    value={formData.specialRequest}
                    onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                    className="w-full rounded-[4px] border border-gray-300 p-3.5 text-sm focus:border-gray-500 outline-none"
                  />
                </div>

                {/* ROW 11: reCAPTCHA Box & Submit */}
                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  {/* Styled reCAPTCHA checkbox box */}
                  <div className="flex items-center gap-4 bg-[#f9f9f9] border border-[#d3d3d3] rounded-[3px] p-3 shadow-2xs">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={captchaChecked}
                        onChange={(e) => setCaptchaChecked(e.target.checked)}
                        className="w-6 h-6 rounded-[2px] border-2 border-gray-400 text-blue-600 focus:ring-0 cursor-pointer"
                      />
                      <span className="text-[14px] text-gray-700 font-normal">
                        I&apos;m not a robot
                      </span>
                    </label>
                    <div className="flex flex-col items-center justify-center pl-4 border-l border-gray-200">
                      <div className="w-7 h-7 relative">
                        <svg viewBox="0 0 48 48" className="w-7 h-7">
                          <path fill="#4285F4" d="M24 4C12.95 4 4 12.95 4 24h4c0-8.84 7.16-16 16-16V4z" />
                          <path fill="#34A853" d="M44 24c0 11.05-8.95 20-20 20v-4c8.84 0 16-7.16 16-16h4z" />
                          <path fill="#FBBC05" d="M24 44C12.95 44 4 35.05 4 24h4c0 8.84 7.16 16 16 16v4z" />
                          <path fill="#EA4335" d="M44 24c0-11.05-8.95-20-20-20v4c8.84 0 16 7.16 16 16h4z" />
                        </svg>
                      </div>
                      <span className="text-[9px] text-gray-400 mt-0.5 leading-none">reCAPTCHA</span>
                      <span className="text-[7px] text-gray-400 leading-none">Privacy - Terms</span>
                    </div>
                  </div>

                  {/* Send Button */}
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center bg-[#228B48] hover:bg-[#1a7038] text-white text-[15px] font-medium px-10 py-3 rounded-[4px] transition-all shadow-sm cursor-pointer"
                  >
                    <span>Send</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      <Footer />
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
      />
      <WhatsAppFloatingButton />
    </div>
  );
}
