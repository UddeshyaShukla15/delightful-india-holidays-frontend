"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import CredibilitySection from "@/components/CredibilitySection";
import { companyInfo } from "@/data/mockData";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Copy,
  Users,
  Briefcase,
  Share2,
  Handshake,
  MessageSquare,
} from "lucide-react";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    occupation: "Traveler",
    countryCode: "+91",
    phone: "",
    tripDate: "",
    travelers: "2",
    vehicleType: "Toyota Innova Crysta",
    hotelCategory: "Five Star Heritage",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const msg = `*New Contact / Dream Journey Inquiry*%0A*Name:* ${formData.name}%0A*Occupation:* ${formData.occupation}%0A*Phone:* ${formData.countryCode} ${formData.phone}%0A*Email:* ${formData.email}%0A*Trip Date:* ${formData.tripDate}%0A*Travelers:* ${formData.travelers}%0A*Vehicle:* ${formData.vehicleType}%0A*Hotel:* ${formData.hotelCategory}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/919636784713?text=${msg}`, "_blank");
  };

  const handleCopyDetails = () => {
    const text = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.countryCode} ${formData.phone}\nOccupation: ${formData.occupation}\nTrip Date: ${formData.tripDate}\nTravelers: ${formData.travelers}\nVehicle: ${formData.vehicleType}\nMessage: ${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <TopBar />
      <Navbar />

      {/* Hero Banner */}
      <section className="relative bg-[#192a3d] text-white py-16 sm:py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="h-full w-full bg-[radial-gradient(#c9a766_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#c9a766] uppercase mb-3">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <span>Get in Touch</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-light font-serif mb-4 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            We would love to hear from you! Whether you have questions, feedback, or want to craft a tailor-made
            India journey, our team is ready 24/7.
          </p>
        </div>
      </section>

      {/* Main Grid: Direct Contact Details & Interactive Form */}
      <section className="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#c9a766]">
                Direct Communication
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif text-[#192a3d] mt-1">
                Reach Us Anytime
              </h2>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                Connect directly with tour coordinator Kamal for instant quotes, personalized advice, and customized itineraries.
              </p>
            </div>

            <div className="space-y-4">
              {/* Phone / WhatsApp */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#faf8f5] border border-[#ede5d8]">
                <div className="h-11 w-11 rounded-xl bg-[#192a3d] text-[#c9a766] flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Phone &amp; WhatsApp
                  </h4>
                  <a
                    href="tel:+919636784713"
                    className="text-base sm:text-lg font-bold text-gray-900 hover:text-[#E78031] transition-colors block mt-0.5"
                  >
                    +91 96367 84713
                  </a>
                  <p className="text-xs text-gray-500 mt-1">Available 24 hours a day, 7 days a week</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#faf8f5] border border-[#ede5d8]">
                <div className="h-11 w-11 rounded-xl bg-[#192a3d] text-[#c9a766] flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Email Inquiries
                  </h4>
                  <a
                    href="mailto:delightfulindiaholidays@gmail.com"
                    className="text-base sm:text-lg font-bold text-gray-900 hover:text-[#E78031] transition-colors block mt-0.5 break-all"
                  >
                    delightfulindiaholidays@gmail.com
                  </a>
                  <p className="text-xs text-gray-500 mt-1">Detailed quotes replied within 2–4 hours</p>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#faf8f5] border border-[#ede5d8]">
                <div className="h-11 w-11 rounded-xl bg-[#192a3d] text-[#c9a766] flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
                    Head Office
                  </h4>
                  <p className="text-sm font-semibold text-gray-900 mt-0.5 leading-relaxed">
                    Near Airforce Circle, Dhibba Para, Jaisalmer, Rajasthan 345001, India
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Operating across North India, Rajasthan &amp; Kerala</p>
                </div>
              </div>
            </div>

            {/* Quick 1-Click WhatsApp CTA */}
            <div className="p-6 rounded-2xl bg-[#228B48]/10 border border-[#228B48]/20 flex items-center justify-between gap-4">
              <div>
                <h4 className="font-serif font-bold text-gray-900 text-base">Instant Chat with Kamal</h4>
                <p className="text-xs text-gray-600 mt-0.5">Need immediate advice or a fast quote?</p>
              </div>
              <a
                href="https://wa.me/919636784713?text=Hi%20Kamal%2C%20I%20am%20visiting%20your%20website%20and%20would%20like%20to%20plan%20a%20tour."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#228B48] hover:bg-[#1a7038] text-white px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap shadow-sm"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: "Plan Your Dream India Journey" Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#faf8f5] border border-[#ede5d8] rounded-3xl p-6 sm:p-10 shadow-sm">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E78031]">
                  ✦ Tailor-Made Experience
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#192a3d] mt-1">
                  Plan Your Dream India Journey
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Fill in your details below and we will craft a customized itinerary just for you.
                </p>
              </div>

              {submitted ? (
                <div className="bg-white border border-green-200 rounded-2xl p-8 text-center space-y-4">
                  <CheckCircle className="h-12 w-12 text-[#228B48] mx-auto" />
                  <h4 className="text-2xl font-serif font-bold text-gray-900">Enquiry Received!</h4>
                  <p className="text-sm text-gray-600 max-w-md mx-auto">
                    Your details have been submitted. We&apos;ll review it and get back to you shortly via WhatsApp.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href="https://wa.me/919636784713"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#228B48] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-sm"
                    >
                      <MessageSquare className="h-4 w-4" />
                      <span>Open WhatsApp</span>
                    </a>
                    <button
                      onClick={handleCopyDetails}
                      className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-colors cursor-pointer"
                    >
                      <Copy className="h-4 w-4" />
                      <span>{copied ? "Copied!" : "Copy Details"}</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Please enter your full name"
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-[#E78031] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter a valid email"
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-[#E78031] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                        Occupation *
                      </label>
                      <select
                        value={formData.occupation}
                        onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-[#E78031] outline-none"
                      >
                        <option>Traveler / Tourist</option>
                        <option>Blogger</option>
                        <option>Vendor</option>
                        <option>Video Editor</option>
                        <option>Business</option>
                        <option>B2B Partner</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                        Contact Number *
                      </label>
                      <div className="flex gap-2">
                        <select
                          value={formData.countryCode}
                          onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                          className="rounded-xl border border-gray-300 bg-white px-2 py-2.5 text-xs font-semibold focus:border-[#E78031] outline-none w-24 flex-shrink-0"
                        >
                          <option value="+91">🇮🇳 +91</option>
                          <option value="+1">🇺🇸 +1</option>
                          <option value="+44">🇬🇧 +44</option>
                          <option value="+61">🇦🇺 +61</option>
                          <option value="+49">🇩🇪 +49</option>
                          <option value="+33">🇫🇷 +33</option>
                          <option value="+81">🇯🇵 +81</option>
                          <option value="+65">🇸🇬 +65</option>
                          <option value="+971">🇦🇪 +971</option>
                        </select>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="Phone number"
                          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-[#E78031] outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                        Approx Trip Date
                      </label>
                      <input
                        type="date"
                        value={formData.tripDate}
                        onChange={(e) => setFormData({ ...formData, tripDate: e.target.value })}
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-[#E78031] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                        No. of Travelers
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="50"
                        value={formData.travelers}
                        onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-[#E78031] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                        Vehicle Preference
                      </label>
                      <select
                        value={formData.vehicleType}
                        onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm focus:border-[#E78031] outline-none"
                      >
                        <option>Toyota Innova Crysta</option>
                        <option>Toyota Etios Sedan</option>
                        <option>Tempo Traveller</option>
                        <option>BMW / Mercedes Luxury</option>
                        <option>Not Required</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-gray-700 mb-1.5">
                      Detailed Requirements &amp; Destinations
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Mention the cities you want to visit, days in mind, hotel preferences, or any specific questions."
                      className="w-full rounded-xl border border-gray-300 bg-white p-4 text-sm focus:border-[#E78031] outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#E78031] hover:bg-[#d06b20] text-white py-3.5 px-6 rounded-full font-bold text-base shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    <span>Submit &amp; Open WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Work with Us (From Original Site) */}
      <section className="py-16 sm:py-20 bg-[#faf8f5] px-4 sm:px-6 lg:px-8 border-y border-[#ede5d8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs sm:text-sm font-semibold tracking-[2px] text-[#c9a766] uppercase mb-2 block">
              Collaborations &amp; Partnerships
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#192a3d]">
              Work with Us
            </h2>
            <div className="h-1 w-20 bg-[#E78031] mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-[#ede5d8] shadow-sm flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-[#E78031]/10 text-[#E78031] flex items-center justify-center mb-5">
                  <Share2 className="h-6 w-6" />
                </div>
                <h4 className="font-serif font-bold text-gray-900 text-xl mb-3">BLOGGER / CREATOR</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  We are a small, passionate team that enjoys working closely with our guests to help them plan
                  a personalized trip to India. If you would like to work with us on promoting India to your
                  readers, followers, or travel community, let us know!
                </p>
              </div>
              <div className="pt-6">
                <a
                  href="mailto:delightfulindiaholidays@gmail.com?subject=Blogger%20Collaboration"
                  className="text-xs font-bold text-[#E78031] hover:underline"
                >
                  Propose Collaboration &rarr;
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#ede5d8] shadow-sm flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-[#228B48]/10 text-[#228B48] flex items-center justify-center mb-5">
                  <Handshake className="h-6 w-6" />
                </div>
                <h4 className="font-serif font-bold text-gray-900 text-xl mb-3">VENDOR / SUPPLIER</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  We are always actively partnering with local Rajasthani heritage havelis, luxury desert glamping
                  outfits, state-certified scholarly guides, and experiential transport providers across India.
                </p>
              </div>
              <div className="pt-6">
                <a
                  href="mailto:delightfulindiaholidays@gmail.com?subject=Vendor%20Partnership"
                  className="text-xs font-bold text-[#228B48] hover:underline"
                >
                  Partner With Us &rarr;
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#ede5d8] shadow-sm flex flex-col justify-between">
              <div>
                <div className="h-12 w-12 rounded-2xl bg-[#c9a766]/10 text-[#c9a766] flex items-center justify-center mb-5">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h4 className="font-serif font-bold text-gray-900 text-xl mb-3">B2B TRAVEL AGENTS</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  We provide trusted, white-label inbound ground handling services for international travel agencies,
                  European &amp; American operators, and corporate event organizers needing reliable India execution.
                </p>
              </div>
              <div className="pt-6">
                <a
                  href="mailto:delightfulindiaholidays@gmail.com?subject=B2B%20Agency%20Inquiry"
                  className="text-xs font-bold text-[#c9a766] hover:underline"
                >
                  Request B2B Net Rates &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CredibilitySection />
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
