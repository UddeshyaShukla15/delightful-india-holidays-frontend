"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import CredibilitySection from "@/components/CredibilitySection";
import {
  ArrowRight,
  Send,
  Bookmark,
  User,
  Mail,
  Phone,
  Globe,
  Calendar,
  Users,
  Car,
  Hotel,
  DollarSign,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

export default function DayToursPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "usa",
    tripDate: "",
    travellers: "",
    vehicleType: "Toyota Etios",
    hotelCategory: "Five Star Heritage",
    tourBudget: "Flexible",
    message: "",
  });

  const handleEnquireSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    const msg = `*New Day Tour Enquiry*%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Country:* ${formData.country}%0A*Trip Date:* ${formData.tripDate}%0A*No of Travellers:* ${formData.travellers}%0A*Vehicle Type:* ${formData.vehicleType}%0A*Hotel Category:* ${formData.hotelCategory}%0A*Tour Budget:* ${formData.tourBudget}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/919636784713?text=${msg}`, "_blank");
  };

  const scrollToEnquiry = () => {
    const el = document.getElementById("enquiry-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Top 8 India Destinations matching the original website screenshot
  const destinations = [
    {
      title: "AGRA TOUR PACKAGES",
      count: "8 Tours",
      image: "/assets/images/800px-Taj_Mahal_Agra_India_edit3.jpg",
      link: "/agra-tour-packages",
    },
    {
      title: "DELHI TOUR PACKAGES",
      count: "21 Tours",
      image: "/assets/images/650e2-delhi-1.webp",
      link: "/delhi-tour-packages",
    },
    {
      title: "JAIPUR TOUR PACKAGES",
      count: "10 Tours",
      image: "/assets/images/amer-fort-jaipur-1.jpg",
      link: "/jaipur-tour-packages",
    },
    {
      title: "JODHPUR TOURS",
      count: "26 Tours",
      image: "/assets/images/JODHPUR.jpg",
      link: "/jodhpur-tour-packages",
    },
    {
      title: "UDAIPUR TOUR PACKAGES",
      count: "12 Tours",
      image: "/assets/images/Pichola-Lake-Udaipur-Rajasthan.jpeg",
      link: "/udaipur-tour-packages",
    },
    {
      title: "VARANASI TOURS",
      count: "3 Tours",
      image: "/assets/images/Ahilya_Ghat_by_the_Ganges_Varanasi.jpg",
      link: "/tours?category=Same+Day+Tours",
    },
    {
      title: "JAISALMER TOURS",
      count: "14 Tours",
      image: "/assets/images/jaisalmer-camel-safari.jpeg",
      link: "/jaisalmer-tour-packages",
    },
    {
      title: "AMRITSAR TOUR PACKAGES",
      count: "14 Tours",
      image: "/assets/images/amritsar-10.jpg",
      link: "/tours?category=Same+Day+Tours",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <TopBar />
      <Navbar onOpenEnquiry={scrollToEnquiry} />

      {/* 1. Hero Section matching main website:
          - Background image: The Leela Palace Boat Arrival
          - Heading: "Day Tours"
          - Button: "Enquire Now"
          - REMOVED: Home / Day Tours breadcrumb
          - REMOVED: "Discover the vibrant colors, historic monuments..." paragraph
      */}
      <section className="relative min-h-[420px] sm:min-h-[460px] flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/images/The-Leela-Palace-Udaipur_2019_Boat-Arrival.webp"
            alt="Day Tours Background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-12">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light font-serif tracking-tight text-white mb-6">
            Day Tours
          </h1>

          <div>
            <button
              onClick={scrollToEnquiry}
              className="inline-flex items-center justify-center bg-[#E78031] hover:bg-[#d06b20] text-white text-sm sm:text-base font-bold px-8 py-3 rounded-full transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              Enquire Now
            </button>
          </div>
        </div>
      </section>

      {/* 2. Top India Destinations Section:
          - Matching reference image layout:
            * "Top India Destinations" title with "Destinations" in #FFAF19
            * Horizontal divider
            * 8 full-image cards with top-right tour count badges
            * Bottom text overlay with ALL-CAPS title & "View All Packages ➔"
      */}
      <section className="py-12 sm:py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 tracking-tight">
              Top India <span className="text-[#FFAF19]">Destinations</span>
            </h2>
          </div>
          <div className="border-b border-gray-300 w-full mt-6 mb-8" />

          {/* 8 Destination Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {destinations.map((dest, idx) => (
              <Link
                key={idx}
                href={dest.link}
                className="group relative aspect-[16/10] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block"
              >
                {/* Full-bleed Photo */}
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Dark Gradient Overlay for clear text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                {/* Top-Right Orange Tour Count Badge */}
                {dest.count && (
                  <span className="absolute top-3 right-3 bg-[#E78031] text-white text-xs sm:text-[13px] font-bold px-3 py-1 rounded-md shadow-md">
                    {dest.count}
                  </span>
                )}

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 text-white">
                  <h3 className="text-white font-serif font-bold text-base sm:text-lg lg:text-xl tracking-wide uppercase drop-shadow">
                    {dest.title}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 text-white text-xs sm:text-sm font-medium mt-1 group-hover:text-[#FFAF19] transition-colors">
                    <span>View All Packages</span>
                    <span className="text-sm font-bold">➔</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Text Section:
          - REMOVED: "Handpicked Sightseeing", "Featured Day Tour Packages", subtitle and all 6 packages
          - REMOVED: "Traveler Information"
          - Text strictly matching user prompt
      */}
      <section className="py-14 sm:py-16 bg-[#faf8f5] px-4 sm:px-6 lg:px-8 border-y border-[#ede5d8]">
        <div className="max-w-5xl mx-auto space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-4xl font-serif text-[#192a3d]">
              India Day Tours – Explore India&apos;s Best Destinations in a Day
            </h2>
            <div className="h-1 w-20 bg-[#E78031] mx-auto mt-4 rounded-full" />
          </div>

          <p>
            India is a land of diverse cultures, magnificent monuments, vibrant cities, and unforgettable
            experiences. Our India Day Tours are specially designed for travelers who want to explore the
            country&apos;s most iconic attractions within a single day. Whether you are looking for a Same Day
            Tour Package, a Private Day Tour, or a Full Day Tour, we offer carefully curated experiences across
            India&apos;s most popular destinations.
          </p>

          <p>
            From the historic streets of Delhi and the world-famous Taj Mahal in Agra to the royal heritage of
            Jaipur, Jodhpur, Udaipur, and Jaisalmer, our collection of Day Tours India provides the perfect
            opportunity to discover the essence of India without requiring a lengthy itinerary. Wildlife
            enthusiasts can enjoy a memorable excursion to Ranthambore, while spiritual travelers can explore
            the sacred ghats of Varanasi or witness the patriotic ceremony at Amritsar&apos;s Wagah Border.
          </p>

          <p>
            Our extensive range of One Day Tour Packages includes popular experiences such as the Same Day Taj
            Mahal Tour, Same Day Taj Mahal Tour by Car, Same Day Agra Tour, Same Day Delhi Tour, and One Day
            Jaipur Sightseeing Tour. Travelers seeking authentic Rajasthan experiences can choose from exclusive
            Day Tours in Rajasthan, including the Same Day Pushkar Tour, Same Day Jaipur Tour, Same Day Rajasthan
            Tour, and various heritage excursions from Udaipur and Jodhpur.
          </p>

          <p className="font-semibold text-gray-900 pt-2">
            For travelers visiting Rajasthan, we offer some of the Best Same Day Trips in Rajasthan, including:
          </p>

          <ul className="space-y-1.5 pl-6 list-disc text-gray-800 font-medium">
            <li>Same Day Osian Tour from Jodhpur</li>
            <li>Same Day Pushkar Tour from Jodhpur</li>
            <li>Same Day Ranakpur Tour from Udaipur</li>
            <li>Same Day Ranakpur Kumbhalgarh Tour from Udaipur</li>
            <li>Same Day Chittorgarh Tour from Udaipur</li>
            <li>Same Day Ekling Ji &amp; Nagda Tour from Udaipur</li>
          </ul>

          <p className="pt-2">
            Whether you are interested in historical monuments, cultural experiences, desert landscapes,
            wildlife adventures, or spiritual journeys, our Private Same Day Tour options provide flexibility,
            comfort, and personalized service. We offer both Private vs Shared Day Tour options, allowing
            travelers to select the experience that best matches their budget and travel preferences.
          </p>

          <p>
            Our One Day Trip Package collection is ideal for business travelers, families, solo explorers, and
            international visitors seeking convenient and memorable sightseeing experiences. From a Delhi Same Day
            Sightseeing Tour to a Taj Mahal Same Day Tour, every itinerary is carefully planned to maximize your time
            and cover the most important attractions.
          </p>

          <p>
            If you&apos;re searching for Same Day Travel Ideas India, wondering about Places to Visit in One Day,
            comparing options through a Same Day Jaipur Tour Comparison, or looking for the Best One Day Tour
            Packages, Delightful India Holidays offers expertly crafted tours backed by local knowledge and
            professional guides.
          </p>

          <p>
            Browse our collection of Same Day Tour Packages, choose your preferred destination, and Book Same Day
            Tour experiences that showcase the very best of India in just one day.
          </p>
        </div>
      </section>

      {/* 4. Enquiry Section matching the user's uploaded screenshot:
          - Orange header bar with Bookmark icon and "Enquiry"
          - No language dropdown on the right
          - Row 1: Name, Email, Phone with icons
          - Row 2: Select Country, Trip Date, No of Traveller with icons
          - Row 3: Select Vehicle type, Select Hotel Category, Tour Budget
          - Row 4: Message
          - Row 5: Enquire Now button with Send icon at bottom left
      */}
      <section id="enquiry-section" className="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {formSubmitted ? (
            <div className="border-2 border-[#E78031] rounded-xl overflow-hidden bg-white p-10 text-center space-y-4">
              <CheckCircle className="h-14 w-14 text-[#228B48] mx-auto" />
              <h3 className="text-2xl font-serif font-bold text-gray-900">Enquiry Received!</h3>
              <p className="text-sm text-gray-600 max-w-md mx-auto">
                Thank you! Your inquiry has been sent to our team. We have also opened WhatsApp to assist you
                immediately.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-4 bg-[#E78031] hover:bg-[#d06b20] text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors"
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <div className="border-2 border-[#E78031] rounded-lg overflow-hidden bg-white shadow-sm">
              {/* Header Bar */}
              <div className="bg-[#E78031] px-5 py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-white font-bold text-lg sm:text-xl">
                  {/* Bookmark Icon */}
                  <Bookmark className="h-5 w-5 fill-white text-white" />
                  <span>Enquiry</span>
                </div>
                {/* User explicitly instructed: "dont add that language icon which is there intop right" */}
              </div>

              {/* Form Content */}
              <form onSubmit={handleEnquireSubmit} className="p-6 sm:p-8 space-y-5">
                {/* Row 1: Name, Email, Phone */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {/* Name */}
                  <div>
                    <label className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                      <span className="text-blue-600">
                        <svg className="w-4 h-4 fill-current inline" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </span>
                      <span>Name</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter Your Name"
                      className="w-full rounded border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:border-[#E78031] focus:ring-1 focus:ring-[#E78031] outline-none transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                      <span className="text-blue-500">
                        <svg className="w-4 h-4 fill-current inline" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                      </span>
                      <span>Email</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter Your Email"
                      className="w-full rounded border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:border-[#E78031] focus:ring-1 focus:ring-[#E78031] outline-none transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                      <span className="text-gray-800">
                        <svg className="w-4 h-4 fill-current inline" viewBox="0 0 24 24">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                        </svg>
                      </span>
                      <span>Phone</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter Your Phone"
                      className="w-full rounded border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:border-[#E78031] focus:ring-1 focus:ring-[#E78031] outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Select Country, Trip Date, No of Traveller */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {/* Select Country */}
                  <div>
                    <label className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                      <span className="text-blue-500">
                        <svg className="w-4 h-4 fill-current inline" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                        </svg>
                      </span>
                      <span>Select Country</span>
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full rounded border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-800 focus:border-[#E78031] focus:ring-1 focus:ring-[#E78031] outline-none transition-all cursor-pointer"
                    >
                      <option value="usa">usa</option>
                      <option value="UK">UK</option>
                      <option value="Australia">Australia</option>
                      <option value="Canada">Canada</option>
                      <option value="malaysia">malaysia</option>
                      <option value="london">london</option>
                      <option value="Singapore">Singapore</option>
                      <option value="China">China</option>
                      <option value="Japan">Japan</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                      <option value="South Korea">South Korea</option>
                      <option value="Italy">Italy</option>
                      <option value="India">India</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="San Marino">San Marino</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Norway">Norway</option>
                      <option value="Austria">Austria</option>
                      <option value="Hong Kong">Hong Kong</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Finland">Finland</option>
                      <option value="Spain">Spain</option>
                      <option value="russia">russia</option>
                      <option value="hungary">hungary</option>
                      <option value="Greenland">Greenland</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Iceland">Iceland</option>
                    </select>
                  </div>

                  {/* Trip Date */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                      Trip Date
                    </label>
                    <input
                      type="text"
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => {
                        if (!e.target.value) e.target.type = "text";
                      }}
                      value={formData.tripDate}
                      onChange={(e) => setFormData({ ...formData, tripDate: e.target.value })}
                      placeholder="Arrival Date"
                      className="w-full rounded border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:border-[#E78031] focus:ring-1 focus:ring-[#E78031] outline-none transition-all"
                    />
                  </div>

                  {/* No of Traveller */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                      No of Traveller
                    </label>
                    <input
                      type="text"
                      value={formData.travellers}
                      onChange={(e) => setFormData({ ...formData, travellers: e.target.value })}
                      placeholder="No of Traveller"
                      className="w-full rounded border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:border-[#E78031] focus:ring-1 focus:ring-[#E78031] outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Row 3: Select Vehicle type, Select Hotel Category, Tour Budget */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {/* Select Vehicle type */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                      Select Vehicle type
                    </label>
                    <select
                      value={formData.vehicleType}
                      onChange={(e) => setFormData({ ...formData, vehicleType: e.target.value })}
                      className="w-full rounded border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-800 focus:border-[#E78031] focus:ring-1 focus:ring-[#E78031] outline-none transition-all cursor-pointer"
                    >
                      <option value="Toyota Etios">Toyota Etios</option>
                      <option value="Maruti Maruti Suzuki Ciaz">Maruti Maruti Suzuki Ciaz</option>
                      <option value="Swift Dzire">Swift Dzire</option>
                      <option value="Toyota Crysta">Toyota Crysta</option>
                      <option value="Luxury Luxury Tempo Traveler">Luxury Luxury Tempo Traveler</option>
                      <option value="35 Seater AC Coach">35 Seater AC Coach</option>
                      <option value="45 Seater Luxury Volvo">45 Seater Luxury Volvo</option>
                      <option value="27 Seater Deluxe Coach">27 Seater Deluxe Coach</option>
                      <option value="18 Seater AC Coach">18 Seater AC Coach</option>
                      <option value="Toyota Camry">Toyota Camry</option>
                      <option value="BMW-BMW-5 Series">BMW-BMW-5 Series</option>
                      <option value="BMW-7BMW-7-Series">BMW-7BMW-7-Series</option>
                      <option value="Mercedes-SMercedes-S-Class">Mercedes-SMercedes-S-Class</option>
                      <option value="Audi A6">Audi A6</option>
                      <option value="Volkswagen Crafter">Volkswagen Crafter</option>
                      <option value="Not Required">Not Required</option>
                    </select>
                  </div>

                  {/* Select Hotel Category */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                      Select Hotel Category
                    </label>
                    <select
                      value={formData.hotelCategory}
                      onChange={(e) => setFormData({ ...formData, hotelCategory: e.target.value })}
                      className="w-full rounded border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-800 focus:border-[#E78031] focus:ring-1 focus:ring-[#E78031] outline-none transition-all cursor-pointer"
                    >
                      <option value="Five Star Heritage">Five Star Heritage</option>
                      <option value="Five Star Luxury">Five Star Luxury</option>
                      <option value="Five Star">Five Star</option>
                      <option value="Four Star">Four Star</option>
                      <option value="Budget Class">Budget Class</option>
                    </select>
                  </div>

                  {/* Tour Budget */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                      Tour Budget
                    </label>
                    <select
                      value={formData.tourBudget}
                      onChange={(e) => setFormData({ ...formData, tourBudget: e.target.value })}
                      className="w-full rounded border border-gray-300 bg-white px-3.5 py-2.5 text-sm text-gray-800 focus:border-[#E78031] focus:ring-1 focus:ring-[#E78031] outline-none transition-all cursor-pointer"
                    >
                      <option value="Flexible">Flexible</option>
                      <option value="Less than 500 USD">Less than 500 USD</option>
                      <option value="1000 Above USD">1000 Above USD</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Message */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Message"
                    className="w-full rounded border border-gray-300 bg-white p-3.5 text-sm text-gray-800 placeholder-gray-400 focus:border-[#E78031] focus:ring-1 focus:ring-[#E78031] outline-none transition-all"
                  />
                </div>

                {/* Row 5: Enquire Now Button (Bottom Left) */}
                <div className="pt-2 text-left">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#E78031] hover:bg-[#d06b20] text-white px-6 py-2.5 rounded font-semibold text-sm shadow hover:shadow-md transition-all cursor-pointer"
                  >
                    <Send className="h-4 w-4 fill-white" />
                    <span>Enquire Now</span>
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Credibility Section */}
      <CredibilitySection />

      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
