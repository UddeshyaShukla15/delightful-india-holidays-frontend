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
import gtData from "@/data/goldenTriangleData.json";

export interface GTTour {
  id: string;
  title: string;
  duration: string;
  category: string;
  image: string;
  localImage?: string;
  route: string;
  link: string;
}

export interface GTFAQ {
  q: string;
  a: string;
}

export default function GoldenTriangleClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTourId, setSelectedTourId] = useState<string | undefined>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const tours: GTTour[] = gtData.tours;
  const faqs: GTFAQ[] = gtData.faqs;

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const renderTourCard = (tour: GTTour) => {
    const tourImg = tour.localImage || tour.image;
    return (
      <div
        key={tour.id}
        className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
      >
        {/* Tour Image with Duration & Rating */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
          <Link href={`/tours/${tour.id}`} className="block h-full w-full">
            <Image
              src={tourImg}
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
            <Link href={`/tours/${tour.id}`}>{tour.title}</Link>
          </h3>

          {/* Route with Green Marker */}
          <div className="flex items-center gap-2 mb-6 text-sm text-gray-700">
            <span className="flex-shrink-0 text-[#228B48]">
              <MapPin className="w-4 h-4 fill-[#228B48] text-white" />
            </span>
            <span className="font-medium truncate">{tour.route}</span>
          </div>

          {/* Action Button: View Details */}
          <div className="mt-auto pt-3 border-t border-gray-100">
            <Link
              href={`/tours/${tour.id}`}
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
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <TopBar />
      <Navbar onOpenEnquiry={() => setIsModalOpen(true)} />

      {/* 1. Hero Banner: Exactly 1 heading with background image matching main site */}
      <section className="relative min-h-[350px] sm:min-h-[400px] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={gtData.hero.localHeroImage || gtData.hero.heroImage}
            alt="Golden Triangle Tour Packages"
            fill
            className="object-cover"
            priority
          />
          {/* Subtle dark overlay */}
          <div className="absolute inset-0 bg-[#3a3a3a]/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center py-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] tracking-tight">
            Golden Triangle Tour Packages
          </h1>
        </div>
      </section>

      {/* 2. Editorial Content: Golden Triangle Tour India – Delhi, Agra & Jaipur Travel Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 text-gray-800">
        <div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#192a3d] font-bold mb-5">
            Golden Triangle Tour India – Delhi, Agra &amp; Jaipur Travel Guide
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed font-light">
            <p>
              The Golden Triangle Tour India is one of the most popular travel routes in the country, connecting three culturally rich cities—Delhi, Agra, and Jaipur. This journey offers travelers a chance to explore India’s history, architecture, traditions, and local lifestyle in a well-planned route that is suitable for all types of visitors.
            </p>
            <p>
              Whether it is your first visit to India or a return trip, the Delhi Agra Jaipur Tour provides a balanced experience of monuments, heritage sites, and cultural attractions.
            </p>
          </div>
        </div>

        {/* Overview of Golden Triangle Tour Packages */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-4">
            Overview of Golden Triangle Tour Packages
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light mb-4">
            Golden Triangle Tour Packages are designed to cover the most iconic attractions across all three cities.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-800 font-light mb-6">
            <li>In Delhi, travelers can visit historical landmarks such as the Red Fort, Qutub Minar, India Gate, and Humayun’s Tomb.</li>
            <li>In Agra, the highlight is the Taj Mahal along with Agra Fort and Mehtab Bagh.</li>
            <li>In Jaipur, visitors can explore Amber Fort, City Palace, Hawa Mahal, and local markets.</li>
          </ul>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light mb-3">
            Travelers can choose different durations depending on their time and comfort, such as:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-800 font-light mb-5">
            <li>4 Days Golden Triangle Tour</li>
            <li>5–6 Days Golden Triangle Tour</li>
            <li>7 Days extended itinerary</li>
            <li>Customized private tours based on preference</li>
          </ul>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
            These options allow flexibility for families, couples, groups, and solo travelers.
          </p>
        </div>

        {/* Tour Experience & Travel Options */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-4">
            Tour Experience &amp; Travel Options
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light mb-3">
            The Golden Triangle route can be experienced in different ways depending on travel style and budget:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-800 font-light mb-5">
            <li>Private tours for personalized travel and flexibility</li>
            <li>Group tours for shared experiences and cost savings</li>
            <li>Luxury travel packages with premium hotels and services</li>
            <li>Budget-friendly tours with essential inclusions</li>
          </ul>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light mb-4">
            Some travelers also prefer extended experiences that include nearby destinations such as wildlife safaris or spiritual cities.
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light mb-2">
            Popular travel extensions include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-800 font-light mb-5">
            <li>Golden Triangle with Tiger Safari</li>
            <li>Golden Triangle with Varanasi</li>
            <li>Taj Mahal-focused short trips</li>
          </ul>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
            Each itinerary can be adjusted depending on interests and available time.
          </p>
        </div>

        {/* Best Time to Visit Golden Triangle Tour */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-4">
            Best Time to Visit Golden Triangle Tour
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light mb-6">
            The ideal time to plan a Golden Triangle Tour is between October and March, when the weather is pleasant and suitable for sightseeing.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                Winter Season (October – March)
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                This is the most preferred travel season. Temperatures remain comfortable, making it easier to explore outdoor attractions like the Taj Mahal, forts, and city landmarks.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                Summer Season (April – June)
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Summers can be very hot, especially in Rajasthan and Agra. However, this period often offers lower travel costs and discounts on hotels and packages.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                Monsoon Season (July – September)
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Rainfall brings greenery and fewer tourists. This season is suitable for travelers who prefer quieter experiences, although outdoor plans may sometimes be affected.
              </p>
            </div>
          </div>
        </div>

        {/* How to Reach the Golden Triangle Region */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-4">
            How to Reach the Golden Triangle Region
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light mb-6">
            The Golden Triangle circuit is well connected and easy to access from most parts of India and abroad.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">By Air</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Delhi’s Indira Gandhi International Airport is the main entry point for international travelers. Jaipur and Agra also have airports with domestic connectivity, making air travel convenient for starting or ending your journey.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">By Train</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Delhi, Agra, and Jaipur are well connected through India’s railway network. Fast trains like Gatimaan Express, Shatabdi Express, and Vande Bharat make travel between cities quick and comfortable.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">By Road</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Well-maintained highways connect all three cities, allowing smooth road travel. Many travelers prefer private vehicles for more flexibility and comfort during sightseeing stops.
              </p>
            </div>
          </div>
        </div>

        {/* Suggested Travel Duration */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-4">
            Suggested Travel Duration
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
            A typical Golden Triangle trip lasts between 4 to 7 days, depending on how deeply you want to explore each destination. Short trips focus on major highlights, while longer itineraries include additional sightseeing and relaxed travel pacing.
          </p>
        </div>

        {/* Who Should Take This Tour? */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-4">
            Who Should Take This Tour?
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light mb-3">
            The Golden Triangle route is suitable for:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-800 font-light">
            <li>First-time visitors to India</li>
            <li>Families looking for cultural experiences</li>
            <li>Couples planning a heritage-focused trip</li>
            <li>Solo travelers exploring India safely</li>
            <li>International tourists seeking a compact introduction to India</li>
          </ul>
        </div>

        {/* Final Note */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-4">
            Final Note
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
            The Golden Triangle Tour offers a well-balanced introduction to India’s heritage, combining history, architecture, and cultural experiences in a single route. With flexible itineraries and multiple travel options, it remains one of the most accessible and rewarding travel circuits in India.
          </p>
        </div>
      </section>

      {/* 3. Best Selling Packages: 35 Packages from Main Site */}
      <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-serif text-[#192a3d] font-normal mb-3">
            Golden Triangle Tours India - Best Selling Packages
          </h2>
          <div className="h-1 w-20 bg-[#E78031] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => renderTourCard(tour))}
        </div>
      </section>

      {/* 4. Frequently Asked Questions (FAQs) Accordion: All 28 items numbered 1 to 29 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="pt-4 border-t border-gray-200">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-6">
            Frequently Asked Questions (FAQs)
          </h2>

          <div className="space-y-2">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-[#e5e7eb] rounded bg-white overflow-hidden transition-all shadow-none"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-5 py-3.5 sm:py-4 text-left flex items-center justify-between gap-4 hover:bg-gray-50/70 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-gray-900 text-sm sm:text-base leading-snug">
                      {faq.q}
                    </span>
                    <span className="flex-shrink-0 text-xl font-bold text-gray-800 w-5 text-center select-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-sm sm:text-base text-gray-700 font-light leading-relaxed border-t border-gray-100 bg-gray-50/30">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. On-Page Enquiry Part */}
      <DestinationEnquiryForm cityName="Golden Triangle" />

      {/* 6. Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppFloatingButton />

      {/* Interactive Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedTourId={selectedTourId}
      />
    </div>
  );
}
