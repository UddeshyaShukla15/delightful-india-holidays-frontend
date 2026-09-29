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
import rData from "@/data/rajasthanData.json";

export interface RajasthanTour {
  id: string;
  title: string;
  duration: string;
  category: string;
  image: string;
  localImage?: string;
  route: string;
  link: string;
}

export interface RajasthanFAQ {
  q: string;
  a: string;
}

export default function RajasthanClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTourId, setSelectedTourId] = useState<string | undefined>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const tours: RajasthanTour[] = rData.tours;
  const faqs: RajasthanFAQ[] = rData.faqs;

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const renderTourCard = (tour: RajasthanTour) => {
    const tourImg = tour.localImage || tour.image;
    return (
      <div
        key={tour.id}
        className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
      >
        {/* Tour Image with Duration & Rating */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
          <Link href={`/${tour.id}`} className="block h-full w-full">
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
            <Link href={`/${tour.id}`}>{tour.title}</Link>
          </h3>

          {/* Route with Green Marker */}
          <div className="flex items-start gap-2 mb-6 text-sm text-gray-700">
            <span className="flex-shrink-0 mt-0.5 text-[#228B48]">
              <MapPin className="w-4 h-4 fill-[#228B48] text-white" />
            </span>
            <span className="font-medium line-clamp-2">{tour.route}</span>
          </div>

          {/* Action Button: View Details */}
          <div className="mt-auto pt-3 border-t border-gray-100">
            <Link
              href={`/${tour.id}`}
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

      {/* 1. Hero Banner: Only 1 heading with background image matching main site */}
      <section className="relative min-h-[350px] sm:min-h-[400px] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={rData.hero.localHeroImage || rData.hero.heroImage}
            alt="Rajasthan Tour Packages"
            fill
            className="object-cover"
            priority
          />
          {/* Subtle dark overlay matching main site (#3A3A3A at 50%) */}
          <div className="absolute inset-0 bg-[#3a3a3a]/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center py-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] tracking-tight">
            Rajasthan Tour Packages
          </h1>
        </div>
      </section>

      {/* 2. Content below Hero: About Rajasthan Tour Packages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-800">
        <div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#192a3d] font-bold mb-5">
            About Rajasthan Tour Packages
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed font-light">
            <p>
              Rajasthan, the Land of Kings, is one of India’s most captivating travel destinations, renowned for its magnificent forts, royal palaces, vibrant culture, golden deserts, colorful festivals, and rich heritage. Whether you are looking for a Rajasthan Luxury Tour, Rajasthan Cultural Tour, Rajasthan Heritage Tour, or a Rajasthan Family Tour Package, the state offers unforgettable experiences for every traveler.
            </p>
            <p>
              At Delightful India Holidays, we offer carefully designed Rajasthan Tour Packages that showcase the true essence of royal India. From the majestic palaces of Jaipur and Udaipur to the golden sand dunes of Jaisalmer and the blue streets of Jodhpur, our Rajasthan Tourism Packages cover the most iconic destinations and hidden gems.
            </p>
            <p>
              Whether you are planning a Rajasthan Tour from Delhi, a Rajasthan Road Trip, a Rajasthan Honeymoon Tour Package, or a Complete Rajasthan Tour Package for 7, 10, or 15 days, we create personalized itineraries that suit your travel style, budget, and interests.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Heading and 26 Best Selling Tour Packages */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-serif text-[#192a3d] font-normal mb-3">
            Rajasthan Tours - Best Selling Packages
          </h2>
          <div className="h-1 w-20 bg-[#E78031] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => renderTourCard(tour))}
        </div>
      </section>

      {/* 4. Editorial Content below Packages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 text-gray-800">
        {/* Why Choose Delightful India Holidays for Your Rajasthan Holiday? */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-4">
            Why Choose Delightful India Holidays for Your Rajasthan Holiday?
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light mb-6">
            Choosing the right Rajasthan Tour Operator can make all the difference in your travel experience. Delightful India Holidays is committed to delivering authentic, comfortable, and memorable journeys across Rajasthan.
          </p>

          <div className="space-y-5">
            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-1.5">Local Expertise</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Our travel specialists possess extensive knowledge of Rajasthan’s culture, history, heritage sites, and lesser-known attractions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-1.5">Customized Rajasthan Tour Packages</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                We create Tailor Made Rajasthan Tours and Customized Rajasthan Tours based on your preferences, travel duration, and budget.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-1.5">Professional Tour Services</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                As a trusted Rajasthan Travel Agency and Tour Company in Rajasthan, we provide reliable transportation, experienced guides, quality accommodations, and seamless travel arrangements.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-1.5">Wide Range of Packages</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                From Budget Tour of Rajasthan to Luxury Rajasthan Tour Packages, family holidays, honeymoon tours, wildlife adventures, and cultural journeys, we offer options for every traveler.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-1.5">Transparent Pricing</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Our Rajasthan Tour Packages with Price are designed to provide excellent value without hidden costs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-1.5">24/7 Travel Support</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Our dedicated team ensures a hassle-free experience throughout your Rajasthan Holiday Tour.
              </p>
            </div>
          </div>
        </div>

        {/* Best Rajasthan Tour Packages for Every Traveller */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-5">
            Best Rajasthan Tour Packages for Every Traveller
          </h2>
          <div className="space-y-5">
            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-1.5">Rajasthan Family Tour Packages</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Perfect for families seeking cultural experiences, historical sightseeing, wildlife safaris, and comfortable accommodations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-1.5">Rajasthan Honeymoon Tour Packages</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Discover romantic lakes, heritage hotels, palace stays, and desert sunsets in Udaipur, Jaisalmer, and Jaipur.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-1.5">Rajasthan Luxury Tour Packages</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Experience royal hospitality with luxury palace hotels, private chauffeurs, exclusive cultural experiences, and personalized services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-1.5">Rajasthan Desert Tour Package</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Explore the golden dunes of Jaisalmer, enjoy camel safaris, desert camping, folk performances, and breathtaking sunsets.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-1.5">Rajasthan Wildlife Tour Packages</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Visit famous wildlife destinations such as Ranthambore National Park, Sariska Tiger Reserve, and Keoladeo National Park.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-1.5">Rajasthan Cultural &amp; Heritage Tour</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Immerse yourself in Rajasthan’s rich traditions, folk music, festivals, historic monuments, and local crafts.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-1.5">Golden Triangle Tour with Rajasthan</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Combine Delhi, Agra, Jaipur, Udaipur, Jodhpur, and Jaisalmer in one unforgettable journey through India’s most iconic destinations.
              </p>
            </div>
          </div>
        </div>

        {/* Rajasthan Tour Packages by Duration */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-5">
            Rajasthan Tour Packages by Duration
          </h2>
          <div className="space-y-5">
            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-1.5">Rajasthan Tour Packages 3 Days</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Ideal for Jaipur sightseeing and short cultural escapes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-1.5">Rajasthan Tour Packages 5 Days</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Explore Jaipur, Jodhpur, and Udaipur with a well-planned itinerary.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-1.5">Rajasthan Tour Packages 7 Days</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Visit Jaipur, Jodhpur, Jaisalmer, and Udaipur.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-1.5">Rajasthan Tour Packages 10 Days</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Enjoy a complete Rajasthan Cultural Tour covering major cities and heritage attractions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-1.5">Rajasthan Tour Packages 15 Days</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Experience a comprehensive Rajasthan Heritage Tour featuring forts, palaces, wildlife, villages, and desert adventures.
              </p>
            </div>
          </div>
        </div>

        {/* How to Book Your Rajasthan Tour with Delightful India Holidays */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-4">
            How to Book Your Rajasthan Tour with Delightful India Holidays
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light mb-5">
            Booking your Rajasthan Tour Package is simple and hassle-free.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-gray-900 mb-1">Step 1: Choose Your Preferred Tour</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Browse our collection of Rajasthan Holiday Packages and select the itinerary that suits your interests.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-gray-900 mb-1">Step 2: Request a Custom Quote</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Share your travel dates, number of travelers, accommodation preferences, and special requirements.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-gray-900 mb-1">Step 3: Customize Your Tour</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Our travel experts will create a personalized Rajasthan Travel Plan based on your budget and preferences.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-gray-900 mb-1">Step 4: Confirm Your Booking</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Review your itinerary, make the payment, and receive instant booking confirmation.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-gray-900 mb-1">Step 5: Start Your Rajasthan Journey</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Arrive in Rajasthan and enjoy a carefully planned travel experience managed by our professional team.
              </p>
            </div>
          </div>
        </div>

        {/* Best Time to Visit Rajasthan */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-4">
            Best Time to Visit Rajasthan
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light mb-5">
            The Best Time to Visit Rajasthan depends on the experiences you seek.
          </p>
          <div className="space-y-5">
            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-1.5">
                October to March (Peak Tourist Season)
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                This is the most pleasant time for sightseeing, desert safaris, cultural tours, and wildlife adventures. Temperatures remain comfortable, making it ideal for Rajasthan Sightseeing Tours.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-1.5">
                April to June (Summer Season)
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                While temperatures can be high, luxury travelers can enjoy attractive hotel offers and fewer crowds.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-1.5">
                July to September (Monsoon Season)
              </h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                The landscape becomes greener, especially around Udaipur, Mount Abu, and Ranakpur. This period is suitable for photography enthusiasts and budget travelers.
              </p>
            </div>
          </div>
        </div>

        {/* How to Reach Rajasthan */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-4">
            How to Reach Rajasthan
          </h2>
          <div className="space-y-5">
            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-1.5">By Air</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Rajasthan has major airports in Jaipur, Udaipur, Jodhpur, Jaisalmer, and Kishangarh, connected to major Indian cities and international gateways.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-1.5">By Train</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Rajasthan enjoys excellent railway connectivity with Delhi, Mumbai, Agra, Ahmedabad, and other major cities.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-1.5">By Road</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Well-maintained highways make Rajasthan Road Trips highly popular. Travelers can easily drive from Delhi, Agra, Gujarat, and neighboring states.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-1.5">Rajasthan Tour from Delhi</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Delhi serves as one of the most convenient starting points for Rajasthan Tour Packages from Delhi, offering easy access by road, rail, and air.
              </p>
            </div>
          </div>
        </div>

        {/* Top Places to Visit in Rajasthan */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-5">
            Top Places to Visit in Rajasthan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-1">Jaipur</h3>
              <p className="text-base text-gray-700 font-light">
                Known as the Pink City, Jaipur is famous for Amber Fort, City Palace, Hawa Mahal, and vibrant bazaars.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-1">Udaipur</h3>
              <p className="text-base text-gray-700 font-light">
                The City of Lakes offers romantic palaces, scenic boat rides, and luxury heritage hotels.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-1">Jodhpur</h3>
              <p className="text-base text-gray-700 font-light">
                The Blue City is home to the magnificent Mehrangarh Fort and vibrant local culture.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-1">Jaisalmer</h3>
              <p className="text-base text-gray-700 font-light">
                Explore golden sand dunes, desert camps, camel safaris, and the stunning Jaisalmer Fort.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-1">Ranthambore</h3>
              <p className="text-base text-gray-700 font-light">
                One of India’s most famous tiger reserves, perfect for wildlife enthusiasts.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-1">Pushkar</h3>
              <p className="text-base text-gray-700 font-light">
                A sacred town known for its Brahma Temple, holy lake, and world-famous Pushkar Camel Fair.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-1">Bikaner</h3>
              <p className="text-base text-gray-700 font-light">
                Famous for Junagarh Fort, camel breeding farms, and traditional Rajasthani culture.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-1">Mount Abu</h3>
              <p className="text-base text-gray-700 font-light">
                Rajasthan’s only hill station, known for pleasant weather and the exquisite Dilwara Temples.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-1">Chittorgarh</h3>
              <p className="text-base text-gray-700 font-light">
                Discover Rajasthan’s largest fort and inspiring tales of Rajput bravery.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-1">Bundi</h3>
              <p className="text-base text-gray-700 font-light">
                An off-beat destination featuring beautiful palaces, stepwells, and authentic local experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Top Things to Do in Rajasthan */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-4">
            Top Things to Do in Rajasthan
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-800 font-light">
            <li>Explore magnificent Rajasthan Forts and Palaces.</li>
            <li>Experience luxury stays in heritage hotels.</li>
            <li>Enjoy camel safaris in the Thar Desert.</li>
            <li>Attend colorful fairs and festivals.</li>
            <li>Visit traditional villages and local markets.</li>
            <li>Take a wildlife safari in Ranthambore.</li>
            <li>Enjoy boating on Lake Pichola in Udaipur.</li>
            <li>Experience folk music and cultural performances.</li>
            <li>Taste authentic Rajasthani cuisine.</li>
            <li>Capture stunning photography opportunities across historic cities and desert landscapes.</li>
          </ul>
        </div>
      </section>

      {/* 5. Frequently Asked Questions (FAQs) Accordion: All 15 items */}
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

      {/* 6. On-Page Enquiry Part */}
      <DestinationEnquiryForm cityName="Rajasthan" />

      {/* 7. Footer */}
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
