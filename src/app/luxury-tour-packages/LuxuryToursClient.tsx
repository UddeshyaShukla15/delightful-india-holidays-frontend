"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import Testimonials from "@/components/Testimonials";
import DestinationEnquiryForm from "@/components/DestinationEnquiryForm";
import EnquiryModal from "@/components/EnquiryModal";
import {
  luxuryTourPackages,
  luxuryHotelPartners,
  whyBookFeatures,
} from "@/data/luxuryToursData";
import {
  Sparkles,
  Palette,
  Globe,
  ChevronDown,
  ChevronUp,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export default function LuxuryToursClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTourId, setSelectedTourId] = useState<string | undefined>();
  const [isExpanded, setIsExpanded] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleOpenTour = (tourId: string) => {
    setSelectedTourId(tourId);
    setIsModalOpen(true);
  };

  const scrollToEnquiry = () => {
    const el = document.getElementById("luxury-enquiry-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      setIsModalOpen(true);
    }
  };

  const faqs = [
    {
      q: "What is the best luxury tour in India?",
      a: "The Luxury Golden Triangle Tour combined with Rajasthan's palace cities is considered one of the best luxury tours to India. It includes Delhi, Agra, Jaipur, Jodhpur, Udaipur, and luxury heritage hotel stays.",
    },
    {
      q: "How much does a luxury India tour cost?",
      a: "Luxury India tour packages typically range from USD 250 to USD 1,500+ per person per day depending on accommodation, transportation, experiences, and exclusivity levels.",
    },
    {
      q: "Is India good for luxury travel?",
      a: "Yes. India offers some of the world's finest luxury experiences, including palace hotels, luxury trains, private wildlife safaris, luxury wellness retreats, and bespoke cultural journeys.",
    },
    {
      q: "What are the best luxury hotels in India?",
      a: "India is home to luxury palace hotels, heritage havelis, boutique resorts, luxury wellness resorts, royal residences, and internationally renowned 5-star accommodations.",
    },
    {
      q: "What are the best luxury honeymoon destinations in India?",
      a: "Popular choices include Rajasthan, Kerala, Udaipur, Jaisalmer, Goa, Kashmir, and the Himalayan regions.",
    },
    {
      q: "Can I customize my luxury India vacation?",
      a: "Absolutely. We specialize in bespoke luxury India holiday packages, tailor-made India vacations, and personalized luxury holidays designed around your interests and travel style.",
    },
    {
      q: "Do you provide private chauffeur-driven tours?",
      a: "Yes. Most of our luxury private tours India include professional chauffeurs, luxury transportation services, and private guided tours India.",
    },
    {
      q: "Do you offer luxury family holidays India?",
      a: "Yes. Our luxury family vacations include kid-friendly experiences, cultural activities, wildlife safaris, luxury resorts, and personalized itineraries for families of all sizes.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <TopBar />
      <Navbar onOpenEnquiry={() => setIsModalOpen(true)} />

      {/* 1. HERO SECTION (Image 2 - without language icon) */}
      <section className="relative w-full min-h-[500px] sm:min-h-[560px] lg:min-h-[620px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/assets/images/luxury-hero-banner.png"
            alt="Luxury India Holidays"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#180A0A]/40" />
        </div>

        {/* Centered Glassmorphism Card */}
        <div className="relative z-10 w-full max-w-4xl mx-4 sm:mx-auto px-6 py-10 sm:py-14 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/20 shadow-2xl text-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white font-normal mb-3 tracking-wide drop-shadow-sm">
            Luxury India Holidays
          </h1>
          <p className="text-base sm:text-xl text-white/95 italic font-light mb-2 drop-shadow-sm">
            &ldquo;Helping Your way to Travel &amp; Blissfull Experience&rdquo;
          </p>
          <p className="text-sm sm:text-base text-gray-200 font-light mb-8 max-w-2xl mx-auto">
            Craft your Perfect Luxury India Trip Planning &amp; Itinerary
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <button
              onClick={scrollToEnquiry}
              className="px-8 py-3.5 rounded-xl border border-white/25 bg-white/10 hover:bg-white/25 text-white font-semibold text-xs sm:text-sm uppercase tracking-widest backdrop-blur-md transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              Start Planning
            </button>
            <a
              href="tel:+919636784713"
              className="px-8 py-3.5 rounded-xl border border-white/25 bg-white/10 hover:bg-white/25 text-white font-semibold text-xs sm:text-sm uppercase tracking-widest backdrop-blur-md transition-all shadow-lg hover:shadow-xl"
            >
              Call us Now
            </a>
          </div>
        </div>
      </section>

      {/* 2. OUR LUXURY TOUR COLLECTION (30 Packages) */}
      <section className="py-14 sm:py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1c1a17] font-normal mb-3">
              Our Luxury Tour Collection
            </h2>
            <p className="text-sm sm:text-base text-[#6b645b] max-w-3xl mx-auto leading-relaxed">
              Handpicked luxury itineraries across India&apos;s most iconic regions, crafted for
              elegance, comfort and authentic cultural experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {luxuryTourPackages.map((tour) => (
              <div
                key={tour.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#e7dfd0] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
              >
                {/* Image Wrap */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#eee2c6]">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className="absolute top-3.5 left-3.5 bg-[#14110d]/85 text-[#b8862c] text-xs font-semibold px-3 py-1 rounded-full border border-[#b8862c]/30 backdrop-blur-sm shadow-sm">
                    {tour.duration}
                  </span>
                </div>

                {/* Tour Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1c1a17] group-hover:text-[#b8862c] transition-colors mb-2.5 leading-snug">
                      {tour.title}
                    </h3>
                    <div className="flex items-start gap-2 text-xs sm:text-sm text-[#6b645b] mb-5 leading-relaxed">
                      <span className="text-[#b8862c] font-bold mt-0.5">•</span>
                      <span>{tour.route}</span>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-[#f0ece1] flex items-center gap-3">
                    <button
                      onClick={() => handleOpenTour(tour.id)}
                      className="flex-1 text-center py-2.5 px-3 rounded-lg border border-[#e7dfd0] hover:border-[#b8862c] text-[#1c1a17] hover:text-[#b8862c] text-xs uppercase font-semibold tracking-wider transition-all cursor-pointer"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleOpenTour(tour.id)}
                      className="flex-1 text-center py-2.5 px-3 rounded-lg bg-[#b8862c] hover:bg-[#8f6a1f] text-white text-xs uppercase font-semibold tracking-wider transition-all shadow-sm cursor-pointer"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LUXURY HOTEL PARTNERS (Image 1) */}
      <section className="py-16 sm:py-24 bg-[#201b17] text-white px-4 sm:px-6 lg:px-8 border-y border-[#3d3328]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-normal mb-3 tracking-wide">
              Luxury Hotel Partners
            </h2>
            <p className="text-sm sm:text-base text-[#c9c2b6] max-w-2xl mx-auto leading-relaxed">
              Stay in India&apos;s most celebrated addresses — handpicked heritage palaces and 5-star
              resorts featured across our luxury itineraries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {luxuryHotelPartners.map((hotel, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-b from-white/[0.04] to-white/[0.02] border border-[#b8862c]/35 hover:border-[#b8862c] hover:bg-gradient-to-b hover:from-[#b8862c]/10 hover:to-white/[0.02] rounded-2xl p-7 text-center transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full border-[1.5px] border-[#b8862c] flex items-center justify-center text-[#b8862c] font-bold text-xl tracking-wider">
                  {hotel.monogram}
                </div>
                <h3 className="text-white text-lg sm:text-xl font-normal mb-1.5">
                  {hotel.name}
                </h3>
                <p className="text-[#b8862c] text-xs font-semibold uppercase tracking-wider mb-4">
                  {hotel.location}
                </p>
                <span className="inline-block text-xs uppercase tracking-widest text-[#e8dfc9] border border-white/20 rounded-full px-4 py-1.5 bg-white/[0.02]">
                  {hotel.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY BOOK WITH DELIGHTFUL INDIA HOLIDAYS? (3 columns side by side) */}
      <section className="py-16 sm:py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1c1a17] font-normal mb-4">
              Why book with Delightful India Holidays?
            </h2>
            <div className="h-0.5 w-16 bg-[#b8862c] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyBookFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#faf8f5] border border-[#ede5d8] text-center hover:shadow-lg transition-all duration-300 flex flex-col justify-start"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#b8862c]/10 text-[#b8862c] flex items-center justify-center mx-auto mb-5">
                  {feat.iconName === "palette" && <Palette className="w-6 h-6" />}
                  {feat.iconName === "sparkles" && <Sparkles className="w-6 h-6" />}
                  {feat.iconName === "globe" && <Globe className="w-6 h-6" />}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1c1a17] mb-3">
                  {feat.title}
                </h3>
                <p className="text-sm sm:text-base text-[#6b645b] leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. LUXURY INDIA TOURS – BESPOKE EXPERIENCES WITH "SEE MORE" */}
      <section className="py-12 sm:py-16 bg-[#faf8f5] px-4 sm:px-6 lg:px-8 border-t border-[#ede5d8]">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#e7dfd0] shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#b8860b] mb-5 leading-snug">
              Luxury India Tours – Bespoke Luxury Travel Experiences Across India
            </h2>

            <p className="text-base text-[#555] leading-relaxed mb-4">
              Experience the finest luxury India tours designed for discerning travelers seeking comfort,
              exclusivity, and authentic cultural experiences. At Delightful India Holidays, we create
              tailor-made India tours featuring luxury heritage hotels, private chauffeurs, expert guides,
              palace stays, luxury train journeys, wildlife safaris, wellness retreats, and exclusive cultural
              encounters.
            </p>

            <p className="text-base text-[#555] leading-relaxed mb-4">
              Whether you are planning a luxury honeymoon in India, a luxury Rajasthan tour, a private Golden
              Triangle journey, or a luxury Kerala backwater holiday, our customized luxury travel packages
              India offer unforgettable experiences crafted around your interests.
            </p>

            <p className="text-base text-[#555] leading-relaxed mb-6">
              As a trusted India luxury travel company, we specialize in bespoke India tours, luxury private tours
              India, luxury family holidays India, luxury cultural tours India, luxury wildlife safaris India,
              luxury wellness retreats India, and ultra luxury India tours for travelers from the USA, UK,
              Australia, Europe, and around the world.
            </p>

            {/* Expandable Content Box */}
            {isExpanded && (
              <div className="mt-8 pt-8 border-t border-[#ede5d8] space-y-8 text-gray-700 animate-fadeIn">
                {/* 1. Why Choose Our Luxury India Tour Packages */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-3">
                    Why Choose Our Luxury India Tour Packages?
                  </h3>
                  <p className="text-sm sm:text-base text-[#555] leading-relaxed mb-3">
                    Our luxury India tour packages are carefully curated to provide exceptional experiences with
                    personalized service.
                  </p>
                  <p className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                    Highlights Include:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-base text-[#555] list-disc list-inside">
                    <li>Private chauffeur-driven luxury vehicles</li>
                    <li>Handpicked luxury heritage hotels India</li>
                    <li>Palace stays and royal heritage properties</li>
                    <li>Personalized India itineraries</li>
                    <li>Luxury sightseeing tours with expert guides</li>
                    <li>VIP Taj Mahal experiences</li>
                    <li>Luxury desert camps and camel safaris</li>
                    <li>Exclusive cultural experiences</li>
                    <li>Luxury Ayurveda and wellness retreats</li>
                    <li>Luxury train journeys India</li>
                    <li>Private game drives and luxury wildlife safaris</li>
                    <li>Luxury family vacations and honeymoon tours</li>
                    <li>Premium hospitality services throughout your journey</li>
                  </ul>
                  <p className="text-sm sm:text-base text-[#555] leading-relaxed mt-4">
                    Whether you seek a luxury India vacation package all-inclusive or a fully customized luxury
                    tour of India, our travel specialists design every detail according to your preferences.
                  </p>
                </div>

                {/* 2. Top Luxury Destinations in India */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-3">
                    Top Luxury Destinations in India
                  </h3>
                  <p className="text-sm sm:text-base text-[#555] leading-relaxed mb-4">
                    Discover royal India through our luxury Rajasthan tour packages featuring magnificent forts,
                    palaces, desert experiences, and royal hospitality.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div className="bg-[#faf8f5] p-4 rounded-xl border border-[#ede5d8]">
                      <h4 className="font-bold text-gray-900 mb-2 text-base">Jaipur</h4>
                      <ul className="text-xs sm:text-sm text-[#555] space-y-1 list-disc list-inside">
                        <li>Luxury Jaipur Tour Package</li>
                        <li>Palace and Fort Tours</li>
                        <li>Royal Rajasthan Experience</li>
                        <li>Heritage Palace Hotels</li>
                      </ul>
                    </div>
                    <div className="bg-[#faf8f5] p-4 rounded-xl border border-[#ede5d8]">
                      <h4 className="font-bold text-gray-900 mb-2 text-base">Jodhpur</h4>
                      <ul className="text-xs sm:text-sm text-[#555] space-y-1 list-disc list-inside">
                        <li>Luxury Jodhpur Tour</li>
                        <li>Luxury Heritage Hotels</li>
                        <li>Royal Heritage Tour</li>
                        <li>Luxury Fort and Palace Tour</li>
                      </ul>
                    </div>
                    <div className="bg-[#faf8f5] p-4 rounded-xl border border-[#ede5d8]">
                      <h4 className="font-bold text-gray-900 mb-2 text-base">Udaipur</h4>
                      <ul className="text-xs sm:text-sm text-[#555] space-y-1 list-disc list-inside">
                        <li>Luxury Udaipur Holiday</li>
                        <li>Luxury Udaipur Retreat</li>
                        <li>Lake Palace Experiences</li>
                        <li>Luxury Boutique Hotels</li>
                      </ul>
                    </div>
                    <div className="bg-[#faf8f5] p-4 rounded-xl border border-[#ede5d8]">
                      <h4 className="font-bold text-gray-900 mb-2 text-base">Jaisalmer</h4>
                      <ul className="text-xs sm:text-sm text-[#555] space-y-1 list-disc list-inside">
                        <li>Luxury Jaisalmer Tour</li>
                        <li>Luxury Desert Safari Tour India</li>
                        <li>Luxury Desert Camp Rajasthan</li>
                        <li>Romantic Desert Camping</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-[#555] leading-relaxed">
                    Our Royal Rajasthan Luxury Tour combines heritage, culture, luxury accommodations, and
                    exclusive local experiences.
                  </p>
                </div>

                {/* 3. Luxury Kerala Tour Package & Experiences */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#faf8f5] p-6 rounded-xl border border-[#ede5d8]">
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-gray-900 mb-2">
                      Luxury Kerala Tour Package
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555] mb-3">
                      Kerala is one of the best luxury holiday destinations in India. Perfect for luxury honeymoon packages India and wellness travelers.
                    </p>
                    <ul className="text-xs sm:text-sm text-[#555] space-y-1 list-disc list-inside">
                      <li>Luxury Kerala Backwater Tour</li>
                      <li>Luxury Houseboat Kerala</li>
                      <li>Luxury Ayurveda Retreat India</li>
                      <li>Luxury Wellness Tour India</li>
                      <li>Luxury Resort Kerala &amp; Beach Holiday</li>
                    </ul>
                  </div>

                  <div className="bg-[#faf8f5] p-6 rounded-xl border border-[#ede5d8]">
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-gray-900 mb-2">
                      Luxury Honeymoon India
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555] mb-3">
                      Celebrate your special moments with romantic palace stays, luxury resorts, candlelight dinners, and private wellness retreats.
                    </p>
                    <ul className="text-xs sm:text-sm text-[#555] space-y-1 list-disc list-inside">
                      <li>Luxury Honeymoon Rajasthan</li>
                      <li>Luxury Honeymoon Kerala</li>
                      <li>Private Honeymoon India &amp; Couple Tour</li>
                      <li>Candlelight Dinner Experiences</li>
                      <li>Luxury Mountain &amp; Beach Honeymoons</li>
                    </ul>
                  </div>
                </div>

                {/* 4. Wellness, Wildlife & Trains */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-[#faf8f5] p-5 rounded-xl border border-[#ede5d8]">
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                      Luxury Wellness &amp; Ayurveda
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555] mb-3">
                      Rejuvenate your body and mind with India&apos;s finest wellness programs.
                    </p>
                    <ul className="text-xs sm:text-sm text-[#555] space-y-1 list-disc list-inside">
                      <li>Luxury Ayurveda Retreat India</li>
                      <li>Yoga &amp; Meditation Retreats</li>
                      <li>Holistic Wellness Vacations</li>
                      <li>Luxury Spa Experiences</li>
                      <li>Detox &amp; Rejuvenation Journeys</li>
                    </ul>
                  </div>

                  <div className="bg-[#faf8f5] p-5 rounded-xl border border-[#ede5d8]">
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                      Luxury Wildlife Safari India
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555] mb-3">
                      Explore iconic national parks with luxury jungle lodges and private game drives.
                    </p>
                    <ul className="text-xs sm:text-sm text-[#555] space-y-1 list-disc list-inside">
                      <li>Luxury Tiger Safari &amp; Ranthambore</li>
                      <li>Exclusive Private Game Drives</li>
                      <li>Luxury Jungle Lodge Stays</li>
                      <li>Wildlife Photography Tours</li>
                      <li>Luxury Nature Retreats</li>
                    </ul>
                  </div>

                  <div className="bg-[#faf8f5] p-5 rounded-xl border border-[#ede5d8]">
                    <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">
                      Luxury Train Journeys
                    </h3>
                    <p className="text-xs sm:text-sm text-[#555] mb-3">
                      Travel like royalty aboard India&apos;s most iconic luxury trains.
                    </p>
                    <ul className="text-xs sm:text-sm text-[#555] space-y-1 list-disc list-inside">
                      <li>Palace on Wheels Luxury Tour</li>
                      <li>Maharajas Express Package</li>
                      <li>Luxury Train Tours India</li>
                      <li>Royal Train Experience India</li>
                      <li>All-Inclusive Sleeper Train Tours</li>
                    </ul>
                  </div>
                </div>

                {/* 5. Packages by Duration */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-4">
                    Luxury India Tour Packages by Duration
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl border border-[#ede5d8] bg-white">
                      <h4 className="font-bold text-gray-900 text-sm mb-1">
                        7 Days Luxury Golden Triangle Tour
                      </h4>
                      <p className="text-xs text-[#555]">Delhi – Agra – Jaipur</p>
                    </div>
                    <div className="p-4 rounded-xl border border-[#ede5d8] bg-white">
                      <h4 className="font-bold text-gray-900 text-sm mb-1">
                        10 Days Luxury Rajasthan Tour Package
                      </h4>
                      <p className="text-xs text-[#555]">Jaipur – Jodhpur – Udaipur – Jaisalmer</p>
                    </div>
                    <div className="p-4 rounded-xl border border-[#ede5d8] bg-white">
                      <h4 className="font-bold text-gray-900 text-sm mb-1">
                        14 Days Luxury India Itinerary
                      </h4>
                      <p className="text-xs text-[#555]">Delhi – Agra – Jaipur – Jodhpur – Udaipur – Ranthambore – Varanasi</p>
                    </div>
                    <div className="p-4 rounded-xl border border-[#ede5d8] bg-white">
                      <h4 className="font-bold text-gray-900 text-sm mb-1">
                        15 Days Luxury North India Tour Package
                      </h4>
                      <p className="text-xs text-[#555]">Golden Triangle, Rajasthan, Wildlife, and Cultural Experiences</p>
                    </div>
                    <div className="p-4 rounded-xl border border-[#ede5d8] bg-white">
                      <h4 className="font-bold text-gray-900 text-sm mb-1">
                        12 Days Luxury South India Holiday Package
                      </h4>
                      <p className="text-xs text-[#555]">Kerala, Backwaters, Beaches, Wellness Retreats</p>
                    </div>
                    <div className="p-4 rounded-xl border border-[#ede5d8] bg-white">
                      <h4 className="font-bold text-gray-900 text-sm mb-1">
                        Bespoke Custom Duration Tours
                      </h4>
                      <p className="text-xs text-[#555]">Tailor-made itineraries crafted to your exact dates and pace</p>
                    </div>
                  </div>
                </div>

                {/* 6. FAQs Accordion */}
                <div className="pt-6 border-t border-[#ede5d8]">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-4">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-3">
                    {faqs.map((faq, index) => {
                      const isOpen = openFaq === index;
                      return (
                        <div
                          key={index}
                          className="border border-[#ede5d8] rounded-xl overflow-hidden bg-white shadow-xs"
                        >
                          <button
                            type="button"
                            onClick={() => toggleFaq(index)}
                            className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-gray-900 hover:text-[#b8860b] transition-colors cursor-pointer"
                          >
                            <span className="text-sm sm:text-base">{faq.q}</span>
                            <span className="text-xl font-bold text-gray-400 flex-shrink-0">
                              {isOpen ? "−" : "+"}
                            </span>
                          </button>
                          {isOpen && (
                            <div className="px-4 sm:px-5 pb-5 text-sm text-[#555] leading-relaxed border-t border-gray-100 pt-3 bg-[#faf8f5]/40">
                              {faq.a}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Toggle Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-6 inline-flex items-center gap-2 px-8 py-3.5 bg-[#b8860b] hover:bg-[#8f6b08] text-white font-semibold rounded-full text-sm sm:text-base transition-all shadow-md cursor-pointer"
            >
              <span>{isExpanded ? "See Less" : "See More"}</span>
              {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </section>

      {/* 6. VERIFIED REVIEWS (Google & TripAdvisor) */}
      <Testimonials />

      {/* 7. ON-PAGE ENQUIRY BOX */}
      <div id="luxury-enquiry-section">
        <DestinationEnquiryForm cityName="Luxury India" />
      </div>

      {/* 8. FOOTER & FLOATING ACTIONS */}
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
