"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Star, ArrowRight } from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import EnquiryModal from "@/components/EnquiryModal";
import DestinationEnquiryForm from "@/components/DestinationEnquiryForm";

export interface TourItem {
  id: string;
  title: string;
  duration: string;
  category?: string;
  image: string;
  localImage?: string;
  route: string;
  link: string;
  desc?: string;
}

export interface PlaceToVisit {
  name: string;
  desc?: string;
  highlights?: string[];
}

export interface AttractionSection {
  title: string;
  desc: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface GroupedTourSection {
  heading: string;
  tours: TourItem[];
}

export interface DestinationData {
  id: string;
  slug: string;
  cityName: string;
  pageTitle: string;
  tagline: string;
  heroImage: string;
  localHeroImage?: string;
  breadcrumb: string;
  overview: string[];
  tourCount: number;
  tours: TourItem[];
  groupedSections?: GroupedTourSection[];
  placesToVisit: PlaceToVisit[];
  attractions: AttractionSection[];
  whyChoose: string[];
  popularExtensions?: string[];
  travelServices: string[];
  faqs: FAQItem[];
}

interface DayTourDestinationViewProps {
  data: DestinationData;
}

export default function DayTourDestinationView({ data }: DayTourDestinationViewProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const heroBg = data.localHeroImage || data.heroImage;

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToEnquiry = () => {
    const el = document.getElementById("enquiry-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      setIsModalOpen(true);
    }
  };

  const renderTourCard = (tour: TourItem) => {
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
          <div className="flex items-center gap-2 mb-6 text-sm text-gray-700">
            <span className="flex-shrink-0 text-[#228B48]">
              <MapPin className="w-4 h-4 fill-[#228B48] text-white" />
            </span>
            <span className="font-medium truncate">{tour.route}</span>
          </div>

          {/* Action Button: ONLY View Details */}
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

      {/* 1. Hero Banner: Background with subtle shadow (not too much), Title in BOLD, and only 1 Enquiry button */}
      <section className="relative min-h-[380px] sm:min-h-[430px] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroBg}
            alt={data.pageTitle}
            fill
            className="object-cover"
            priority
          />
          {/* Subtle shadow overlay (not too dark, keeping photo bright yet readable) */}
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center py-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] mb-6 tracking-tight">
            {data.pageTitle}
          </h1>

          <button
            type="button"
            onClick={scrollToEnquiry}
            className="inline-flex items-center justify-center gap-2 bg-[#E78031] hover:bg-[#d46d20] text-white font-medium text-base sm:text-lg px-8 py-3.5 rounded transition-all cursor-pointer shadow-lg hover:shadow-xl active:scale-95"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 2. Tour Packages Grid Section */}
      <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {data.id === "jaisalmer" && data.groupedSections && data.groupedSections.length > 0 ? (
          <div className="space-y-16">
            {data.groupedSections.map((section, sIdx) => (
              <div key={sIdx} className="space-y-8">
                <div className="text-center mb-10">
                  <h2 className="text-3xl sm:text-4xl font-serif text-[#192a3d] font-normal mb-3">
                    {section.heading}
                  </h2>
                  <div className="h-1 w-20 bg-[#E78031] mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {section.tours.map((tour) => renderTourCard(tour))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-serif text-[#192a3d] font-normal mb-3">
                {data.pageTitle}
              </h2>
              <div className="h-1 w-20 bg-[#E78031] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.tours.map((tour) => renderTourCard(tour))}
            </div>
          </div>
        )}
      </section>

      {/* 3. Editorial Travel Guide Content (Exact text requested by user) */}
      {data.id === "delhi" ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 text-gray-800">
          {/* Delhi Tour Packages & Overview */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#192a3d] font-bold mb-4">
              Delhi Tour Packages
            </h2>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-5">
              Overview
            </h3>
            <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed font-light">
              <p>
                Discover the vibrant charm of India’s capital with our specially curated Delhi Tour Packages, designed for travelers who want to experience the perfect blend of history, culture, modern lifestyle, and heritage. From Mughal-era monuments to bustling markets and grand colonial architecture, Delhi offers an unforgettable journey through time.
              </p>
              <p>
                Our range of Delhi Sightseeing Tour and Delhi Travel Package options includes everything from a quick Delhi Day Tour to detailed multi-day itineraries like the Delhi Tour Package 2 Days. Whether you are looking for a Delhi Private Tour, Delhi Family Tour, or a Delhi Cultural Tour, we offer customized experiences to match every travel style and budget.
              </p>
              <p>
                We also provide seamless travel services such as Car &amp; Driver Hire in Delhi, Taxi Hire in Delhi, Cab Hire in Delhi, and premium Luxury Travel Company in Delhi services to ensure a comfortable and hassle-free journey.
              </p>
              <p>
                For travelers planning extended trips, Delhi serves as the perfect gateway to popular destinations like Agra, Jaipur, Kashmir, Shimla, Manali, Rishikesh, Haridwar, and Leh. You can also choose specialized packages such as Same Day Agra Tour from Delhi by Train, Overnight Agra Tour from Delhi, or a complete Delhi – Agra – Jaipur Tour.
              </p>
            </div>
          </div>

          {/* Places to Visit in Delhi */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-4">
              Places to Visit in Delhi
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light mb-5">
              Delhi is a city of contrasts, where ancient heritage meets modern development. Some of the best places included in our Delhi City Tour Package are:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-800 font-normal mb-5">
              <li>Red Fort (Lal Qila)</li>
              <li>India Gate</li>
              <li>Qutub Minar</li>
              <li>Humayun’s Tomb</li>
              <li>Lotus Temple</li>
              <li>Jama Masjid</li>
              <li>Raj Ghat</li>
              <li>Akshardham Temple</li>
              <li>Chandni Chowk Market</li>
              <li>Connaught Place</li>
            </ul>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
              Each location offers a unique glimpse into Delhi’s rich cultural and historical legacy, making it one of the most exciting destinations for a Delhi Heritage Tour and Delhi Sightseeing Package.
            </p>
          </div>

          {/* Top Attractions in Delhi */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-4">
              Top Attractions in Delhi
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light mb-6">
              Our Delhi Tour Packages cover the most iconic attractions that define the capital’s identity:
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Old Delhi Tour Highlights
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Explore the charm of narrow lanes, historic bazaars, and Mughal architecture with our Old Delhi Tour and Old Delhi Heritage Tour. Chandni Chowk, Jama Masjid, and Red Fort form the heart of this experience.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  New Delhi City Tour Highlights
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Experience the grandeur of modern Delhi with wide roads, government buildings, and colonial architecture. Key attractions include India Gate, Rashtrapati Bhavan, and Parliament House, making it perfect for a New Delhi Tour and New Delhi City Tour.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Cultural &amp; Heritage Experiences
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Our Delhi Heritage Tour, Delhi Cultural Tour, and Delhi Family Tour Package provide deep insight into the city’s traditions, festivals, food, and lifestyle.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Our Delhi Tour Packages? */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-4">
              Why Choose Our Delhi Tour Packages?
            </h2>
            <ul className="list-disc pl-6 space-y-2.5 text-base sm:text-lg text-gray-800 font-light">
              <li>Best Delhi Tour Package options for all budgets</li>
              <li>Fully customizable Private Delhi Tour experiences</li>
              <li>Comfortable transport with private taxi hire in Delhi and private cab hire in Delhi</li>
              <li>Expert local guides for authentic experiences</li>
              <li>Flexible itineraries including Delhi Weekend Tour and Delhi Holiday Package</li>
              <li>Easy connectivity for India Tour Packages from Delhi</li>
            </ul>
          </div>

          {/* Popular Delhi-Based Tour Extensions */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-4">
              Popular Delhi-Based Tour Extensions
            </h2>
            <ul className="list-disc pl-6 space-y-2.5 text-base sm:text-lg text-gray-800 font-light">
              <li>Same Day Agra Tour from Delhi</li>
              <li>Agra Group Tour from Delhi</li>
              <li>2 Days Agra Tour from Delhi with Fatehpur Sikri</li>
              <li>Overnight Agra Tour from Delhi</li>
              <li>Kashmir Tour Packages from Delhi</li>
              <li>Leh Tour from Delhi</li>
              <li>Shimla &amp; Manali Tour from Delhi</li>
              <li>Rishikesh &amp; Haridwar Tour from Delhi</li>
            </ul>
          </div>

          {/* Travel Services in Delhi */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-4">
              Travel Services in Delhi
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light mb-4">
              We also offer complete travel support including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-800 font-light">
              <li>Tour Consultant in Delhi</li>
              <li>Travel Company in Delhi</li>
              <li>Cab Service in Delhi</li>
              <li>Car Hire in Delhi</li>
              <li>One Way Taxi from Delhi</li>
              <li>One Way Cab Service in Delhi</li>
              <li>Tailor Made Delhi Tour</li>
            </ul>
          </div>
        </div>
      ) : data.id === "jaipur" ? (
        /* ======================== JAIPUR EXACT SECTIONS ======================== */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 text-gray-800">
          {/* Jaipur Tour Packages */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#192a3d] font-bold mb-6">
              Jaipur Tour Packages
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed font-light">
              <p>
                Jaipur, popularly known as the Pink City of Rajasthan, is one of India’s most fascinating travel destinations. Renowned for its magnificent forts, royal palaces, colorful bazaars, and rich cultural heritage, Jaipur offers an unforgettable experience for every traveler. Whether you are planning a short getaway, a family vacation, a romantic holiday, or a heritage exploration, our carefully designed Jaipur Tour Packages provide the perfect way to discover the city’s timeless charm.
              </p>
              <p>
                At Delightful India Holidays, we offer a wide range of Jaipur Travel Packages and Jaipur Holiday Packages tailored to suit different interests and budgets. From a Jaipur City Tour covering iconic landmarks to a Jaipur Heritage Tour showcasing the city’s royal history, every itinerary is thoughtfully crafted to provide an authentic Rajasthan experience. Visitors can explore grand attractions such as Amber Fort, City Palace, Hawa Mahal, Jantar Mantar, and Nahargarh Fort while enjoying a memorable Jaipur Sightseeing Tour.
              </p>
              <p>
                Our Jaipur Tour Operator team specializes in customized travel experiences, including Jaipur Family Tour Packages, Jaipur Private Tours, Jaipur Group Tours, Jaipur Walking Tours, Jaipur Food Tours, Jaipur Shopping Tours, and Jaipur Photography Tours. Travelers looking for unique experiences can enjoy a Jaipur Tuk Tuk Tour, Jaipur Cycling Tour, Jaipur Heritage Walk, Jaipur Night Tour, or exciting wildlife excursions such as the Jhalana Leopard Safari and Elephant Sanctuary in Jaipur.
              </p>
              <p>
                For travelers arriving from the capital, we also provide Jaipur Tour Package from Delhi options, including Same Day Jaipur Tour from Delhi by Car, Same Day Jaipur Tour from Delhi by Train, Jaipur Day Tour from Delhi, 2 Days Jaipur Tour from Delhi, and 1 Night 2 Days Jaipur Tour from Delhi. Our transportation services include Private Delhi to Jaipur Transfer, Delhi Transfer via Taj Mahal from Jaipur, and comfortable cab and car hire services.
              </p>
              <p>
                Beyond Jaipur, we offer popular excursions such as Same Day Pushkar Tour from Jaipur, Same Day Ajmer Pushkar Tour from Jaipur, Same Day Ranthambore Safari Tour from Jaipur, Same Day Abhaneri Tour from Jaipur, Same Day Sariska Tour from Jaipur, Same Day Bhangarh Tour from Jaipur, and Same Day Agra Tour from Jaipur. Multi-day tours including Jaipur Agra Delhi Tour, Jaipur Jodhpur Udaipur Tour, 4 Days Jaipur Jodhpur Tour with Pushkar, Overnight Agra Tour from Jaipur, and Overnight Ranthambore Tour from Jaipur are ideal for travelers wishing to explore more of North India’s cultural treasures.
              </p>
              <p>
                Whether you are seeking a Jaipur Full Day Tour with Guide, Jaipur Sightseeing Tour by Car, Jaipur Sightseeing Tour by Tuk Tuk, Jaipur Honeymoon Tour, Jaipur Cultural Tour, Jaipur Festival Tour, or a fully Customized Jaipur Tour, Delightful India Holidays is your trusted Travel Agency in Jaipur and Luxury Travel Company in Jaipur. Our expert guides, comfortable transportation, and personalized services ensure a memorable and hassle-free journey through the royal capital of Rajasthan.
              </p>
            </div>
          </div>

          {/* Jaipur Tourist Attractions */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-6">
              Jaipur Tourist Attractions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Amber Fort</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  The most iconic landmark of Jaipur, Amber Fort is a UNESCO World Heritage Site known for its majestic architecture, beautiful courtyards, Sheesh Mahal, and panoramic views of the Aravalli Hills.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">City Palace</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Located in the heart of the Pink City, City Palace showcases a blend of Rajput and Mughal architecture. The palace complex houses museums, courtyards, royal artifacts, and the residence of Jaipur’s royal family.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Hawa Mahal</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Known as the Palace of Winds, Hawa Mahal is Jaipur’s most photographed monument. Its unique five-story facade with 953 windows was designed for royal women to observe city life while remaining unseen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Jantar Mantar</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  A UNESCO-listed astronomical observatory built by Maharaja Sawai Jai Singh II, Jantar Mantar features fascinating astronomical instruments that continue to amaze visitors.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Nahargarh Fort</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Perched on the Aravalli Hills, Nahargarh Fort offers breathtaking views of Jaipur city, especially during sunset. It is a favorite destination for photographers and history enthusiasts.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Jaigarh Fort</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Famous for housing the world’s largest cannon on wheels, Jaivana Cannon, Jaigarh Fort offers impressive military architecture and stunning views of Amber Fort.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Albert Hall Museum</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  The oldest museum in Rajasthan, Albert Hall Museum showcases an extensive collection of artifacts, paintings, sculptures, and historical exhibits.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Jal Mahal</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Situated in the middle of Man Sagar Lake, Jal Mahal is a stunning water palace that provides one of Jaipur’s most picturesque views.
                </p>
              </div>
            </div>
          </div>

          {/* Places to Visit in Jaipur */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-6">
              Places to Visit in Jaipur
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Bapu Bazaar</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  A paradise for shoppers looking for traditional textiles, handicrafts, jewelry, and souvenirs. It is a must-visit destination during any Jaipur Shopping Tour.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Johari Bazaar</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Famous for gemstones, precious jewelry, and traditional Rajasthani craftsmanship, Johari Bazaar is one of Jaipur’s oldest and busiest markets.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Patrika Gate</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Known for its colorful architecture and intricate artwork, Patrika Gate has become one of Jaipur’s most popular photography spots.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Galtaji Temple (Monkey Temple)</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Nestled amidst the hills, this ancient pilgrimage site is known for its sacred water tanks, temples, and resident monkey population.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Sisodia Rani Garden</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  A beautifully landscaped garden featuring fountains, pavilions, and murals depicting the love story of Radha and Krishna.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Panna Meena Ka Kund</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  An architectural marvel near Amber Fort, this historic stepwell is famous for its symmetrical staircases and stunning geometric design.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Chokhi Dhani</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Experience authentic Rajasthani culture through folk performances, traditional cuisine, camel rides, and village-style hospitality.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Jhalana Leopard Safari</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  One of India’s best urban wildlife experiences, Jhalana Leopard Safari offers excellent opportunities to spot leopards and other wildlife near Jaipur.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Elephant Sanctuary Jaipur</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  A unique attraction where visitors can interact with rescued elephants through ethical and responsible elephant activities.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Hot Air Balloon Ride in Jaipur</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Enjoy spectacular aerial views of Jaipur’s forts, palaces, and countryside with a memorable Hot Air Balloon Ride in Jaipur.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : data.id === "jaisalmer" ? (
        /* ======================== JAISALMER EXACT SECTIONS ======================== */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 text-gray-800">
          {/* Jaisalmer Tour Packages – Explore the Golden City of Rajasthan */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#192a3d] font-bold mb-4">
              Jaisalmer Tour Packages – Explore the Golden City of Rajasthan
            </h2>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-5">
              Overview
            </h3>
            <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed font-light">
              <p>
                Experience the magic of Rajasthan with our carefully designed Jaisalmer Tour Packages, offering an unforgettable journey through the heart of the Thar Desert. Known as the “Golden City of India,” Jaisalmer is famous for its magnificent sandstone architecture, royal heritage, vibrant culture, and mesmerizing desert landscapes. Whether you are looking for a Jaisalmer Holiday Package, a romantic getaway, a family vacation, or an adventurous Jaisalmer Desert Safari, we offer customized tours to suit every traveler.
              </p>
              <p>
                Our Jaisalmer Travel Packages include visits to iconic forts, ancient havelis, colorful markets, desert camps, and thrilling camel safaris. From luxury stays in heritage properties to authentic desert camping experiences, our tours showcase the best of Rajasthan’s desert culture. Whether you choose a Jaisalmer Tour Package 2 Days, Jaisalmer Tour Package 3 Days, or a longer itinerary, you can enjoy the perfect blend of history, culture, and adventure.
              </p>
              <p>
                As a trusted Jaisalmer Tour Operator, we provide complete travel solutions including accommodation, transportation, sightseeing, and desert safari bookings. Book the Best Jaisalmer Tour Package and discover why this golden desert city remains one of India’s most captivating destinations.
              </p>
            </div>
          </div>

          {/* About Jaisalmer */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-4">
              About Jaisalmer
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed font-light">
              <p>
                Located in western Rajasthan near the India-Pakistan border, Jaisalmer rises like a golden mirage from the vast Thar Desert. Founded in 1156 AD by Rawal Jaisal, the city is renowned for its magnificent Jaisalmer Fort, one of the few living forts in the world where people still reside.
              </p>
              <p>
                The city is famous for its intricate havelis, historic temples, colorful bazaars, and desert adventures. Travelers can enjoy a Jaisalmer Cultural Tour, explore centuries-old heritage sites, experience traditional Rajasthani folk performances, and spend memorable nights at a Desert Camp Jaisalmer under star-filled skies.
              </p>
              <p>
                Whether you’re planning a Jaisalmer Family Tour, a honeymoon getaway, or a luxury desert retreat, Jaisalmer offers experiences that create lifelong memories.
              </p>
            </div>
          </div>

          {/* Best Attractions in Jaisalmer */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-6">
              Best Attractions in Jaisalmer
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Jaisalmer Fort
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  A UNESCO World Heritage Site and one of the largest living forts in the world, showcasing royal palaces, temples, and bustling markets.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Patwon Ki Haveli
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  The most famous haveli complex in Jaisalmer, known for its intricate carvings and beautiful architecture.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Salim Singh Ki Haveli
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  An architectural masterpiece featuring unique peacock-shaped balconies and historic interiors.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Nathmal Ki Haveli
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  A stunning haveli blending Rajput and Islamic architectural styles.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Gadisar Lake
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  A scenic man-made lake surrounded by temples and cenotaphs, ideal for boating and photography.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Sam Sand Dunes
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  The highlight of every Sam Sand Dunes Tour, offering spectacular sunset views, camel rides, jeep safaris, and cultural performances.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Kuldhara Village
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  A mysterious abandoned village known for its fascinating legends and history.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Desert National Park
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Home to unique desert wildlife including the Great Indian Bustard.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Bada Bagh
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  A historic garden complex featuring royal cenotaphs and stunning sunset photography opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Popular Things to Do in Jaisalmer */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-4">
              Popular Things to Do in Jaisalmer
            </h2>
            <ul className="list-disc pl-6 space-y-2.5 text-base sm:text-lg text-gray-800 font-light">
              <li>Enjoy a thrilling Jaisalmer Desert Safari</li>
              <li>Experience a traditional Camel Safari in Jaisalmer</li>
              <li>Stay overnight at a luxury desert camp</li>
              <li>Book a Sam Sand Dunes Package with cultural performances</li>
              <li>Take a Jaisalmer Sightseeing Tour</li>
              <li>Explore the narrow lanes of Jaisalmer Fort</li>
              <li>Visit heritage havelis and museums</li>
              <li>Enjoy folk music and Kalbelia dance performances</li>
              <li>Try authentic Rajasthani cuisine</li>
              <li>Experience a Jaisalmer Walking Tour</li>
              <li>Take a Jaisalmer Full Day Tuk-Tuk Tour</li>
              <li>Enjoy a Jaisalmer Private Full Day Tour</li>
              <li>Explore local markets for handicrafts and souvenirs</li>
              <li>Experience a Jaisalmer Sightseeing with Sunset Desert Tour</li>
              <li>Book a Jaisalmer Sightseeing with Camel Safari</li>
            </ul>
          </div>

          {/* Best Places to Visit in Jaisalmer */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-4">
              Best Places to Visit in Jaisalmer
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-800 font-light mb-5">
              <li>Jaisalmer Fort</li>
              <li>Patwon Ki Haveli</li>
              <li>Salim Singh Ki Haveli</li>
              <li>Nathmal Ki Haveli</li>
              <li>Gadisar Lake</li>
              <li>Sam Sand Dunes</li>
              <li>Khuri Sand Dunes</li>
              <li>Kuldhara Village</li>
              <li>Desert National Park</li>
              <li>Bada Bagh</li>
              <li>Jain Temples</li>
              <li>Tanot Mata Temple</li>
              <li>Longewala War Memorial</li>
              <li>Amar Sagar Lake</li>
              <li>Vyas Chhatri</li>
            </ul>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
              These are among the most recommended Places to Visit in Jaisalmer and major Jaisalmer Tourist Attractions included in our sightseeing packages.
            </p>
          </div>

          {/* Best Time to Visit Jaisalmer */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-4">
              Best Time to Visit Jaisalmer
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light mb-6">
              The best time to visit Jaisalmer is from October to March when temperatures remain pleasant and ideal for sightseeing, desert safaris, and camping activities.
            </p>

            <div className="space-y-6 mb-6">
              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Winter (October – March)
                </h3>
                <ul className="list-disc pl-6 space-y-1.5 text-base sm:text-lg text-gray-800 font-light">
                  <li>Best season for tourism</li>
                  <li>Ideal for desert camping and camel safaris</li>
                  <li>Pleasant weather for sightseeing</li>
                  <li>Perfect for family and honeymoon tours</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Summer (April – June)
                </h3>
                <ul className="list-disc pl-6 space-y-1.5 text-base sm:text-lg text-gray-800 font-light">
                  <li>Hot temperatures</li>
                  <li>Suitable for budget travelers seeking lower hotel rates</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Monsoon (July – September)
                </h3>
                <ul className="list-disc pl-6 space-y-1.5 text-base sm:text-lg text-gray-800 font-light">
                  <li>Occasional rainfall</li>
                  <li>Desert landscapes appear refreshed</li>
                  <li>Less crowded tourist attractions</li>
                </ul>
              </div>
            </div>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
              For travelers planning their itinerary, we recommend at least 2–3 days to explore the city and desert attractions comfortably. If you’re wondering how many days required for Jaisalmer, a Jaisalmer 2 day itinerary covers major attractions, while a Jaisalmer 3 day itinerary allows for a complete desert experience.
            </p>
          </div>

          {/* Frequently Asked Questions (FAQs) Accordion - Matching screenshot, NO language icon */}
          <div className="pt-4 border-t border-gray-200">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-6">
              Frequently Asked Questions (FAQs)
            </h2>

            <div className="space-y-2">
              {data.faqs && data.faqs.map((faq, idx) => {
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
        </div>
      ) : data.id === "agra" ? (
        /* ======================== AGRA EXACT SECTIONS ======================== */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 text-gray-800">
          {/* Overview – Agra Tour Packages (India Day Tours) */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#192a3d] font-bold mb-5">
              Overview – Agra Tour Packages (India Day Tours)
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed font-light">
              <p>
                Agra Tour Packages are among the most popular India Day Tours, offering a perfect blend of history, architecture, and cultural heritage. Located in Uttar Pradesh, Agra is world-famous for its Mughal-era monuments and is a key highlight of the Golden Triangle route. These Agra Sightseeing Tour options are ideal for travelers looking for a Taj Mahal Tour, whether it is a Same Day Agra Tour, Agra Overnight Tour, or a well-planned Agra Holiday Package.
              </p>
              <p>
                Our curated Agra Tour Packages from Delhi are designed for comfort and flexibility, including private transfers, guided sightseeing, and customizable itineraries. From a quick Agra City Tour to a detailed Agra Tour Package 2 Days, travelers can explore Agra at their own pace. These packages are perfect for couples, families, and international visitors seeking the Best Agra Tour Package with memorable experiences.
              </p>
              <p>
                The highlight of every trip is the breathtaking Taj Mahal, one of the Seven Wonders of the World, along with other iconic monuments like the Agra Fort and Mehtab Bagh.
              </p>
            </div>
          </div>

          {/* Agra Tourist Attractions */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-4">
              Agra Tourist Attractions
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light mb-6">
              Agra is home to some of the most remarkable Mughal architecture in India. The city offers a rich collection of historical monuments, gardens, and cultural sites that make it a must-visit destination.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                  Top experiences included in Agra Sightseeing Packages:
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-800 font-light">
                  <li>Sunrise view of the Taj Mahal</li>
                  <li>Guided heritage walks in Old Agra</li>
                  <li>Yamuna river sunset views</li>
                  <li>Mughal architecture exploration</li>
                  <li>Local handicraft shopping (marble inlay work)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                  Popular tour types:
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-800 font-light">
                  <li>Agra Heritage Tour</li>
                  <li>Agra Family Tour Package</li>
                  <li>Agra Private Tour</li>
                  <li>Agra Group Tour</li>
                  <li>Agra Travel Package</li>
                </ul>
              </div>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light pt-2">
                For travelers from Delhi, options like Taj Mahal Sunrise Tour by car, Agra Same Day Tour, and Taj Mahal Day Trip by Car are highly preferred for quick yet immersive experiences.
              </p>
            </div>
          </div>

          {/* Places to Visit in Agra */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-4">
              Places to Visit in Agra
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light mb-6">
              Agra offers several must-visit attractions that define its historical and cultural identity:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  1. Taj Mahal
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  The crown jewel of India, the Taj Mahal is the ultimate highlight of every Taj Mahal Tour Package, Agra Tour Package, and Agra Sightseeing Tour. Whether you choose a Taj Mahal Sunrise Tour, Taj Mahal One Day Tour, or a relaxed Agra Overnight Tour, this monument remains the centerpiece of your journey.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  2. Agra Fort
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Agra Fort is another UNESCO World Heritage Site showcasing Mughal grandeur. It is an essential stop in every Agra Heritage Tour and Agra City Tour itinerary.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  3. Mehtab Bagh
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  A perfect sunset viewpoint of the Taj Mahal, ideal for photography lovers and those on a Agra Private Tour or romantic getaway.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  4. Itmad-ud-Daulah (Baby Taj)
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Known for its intricate marble work, this monument is often included in Best Agra Tour Packages and detailed Agra Itinerary plans.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  5. Fatehpur Sikri (Optional Extension)
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  A historic Mughal city often added in extended Agra Tour Package 2 Days or Agra Travel Packages from Delhi.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : data.id === "jodhpur" ? (
        /* ======================== JODHPUR EXACT SECTIONS ======================== */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 text-gray-800">
          {/* Explore the Blue City with Our Jodhpur Tour Packages */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#192a3d] font-bold mb-5">
              Explore the Blue City with Our Jodhpur Tour Packages
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed font-light">
              <p>
                Discover the royal charm of Rajasthan with our carefully crafted Jodhpur Tour Packages. Known as the Blue City, Jodhpur is famous for its magnificent forts, royal palaces, vibrant markets, and rich cultural heritage. Whether you are looking for a Jodhpur Family Tour, Jodhpur Luxury Tour, Jodhpur Private Tour, or a short Jodhpur Weekend Tour, we offer customized itineraries to suit every traveler.
              </p>
              <p>
                Our Jodhpur Travel Packages cover the city’s iconic attractions, heritage walks, local experiences, village tours, and comfortable transportation services. From exploring the majestic Mehrangarh Fort to enjoying authentic Rajasthani cuisine, every moment in Jodhpur promises unforgettable memories.
              </p>
            </div>
          </div>

          {/* Places to Visit in Jodhpur */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-6">
              Places to Visit in Jodhpur
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Mehrangarh Fort
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light mb-3">
                  A visit to Jodhpur is incomplete without a Mehrangarh Fort Tour. Perched on a rocky hill, this massive fort offers panoramic views of the Blue City and houses museums, palaces, and historical artifacts. It is one of the most popular attractions included in every Jodhpur Sightseeing Tour.
                </p>
                <div>
                  <p className="font-semibold text-gray-900 mb-2 text-base sm:text-lg">
                    Highlights:
                  </p>
                  <ul className="list-disc pl-6 space-y-1.5 text-base sm:text-lg text-gray-800 font-light">
                    <li>Fort Museum</li>
                    <li>Sheesh Mahal</li>
                    <li>Phool Mahal</li>
                    <li>Cannon viewpoints</li>
                    <li>Zipline Adventure</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Jaswant Thada
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Known as the “Taj Mahal of Marwar,” Jaswant Thada is a beautiful marble cenotaph built in memory of Maharaja Jaswant Singh II. Its peaceful gardens and architecture make it a must-visit destination.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Umaid Bhawan Palace
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  One of the world’s largest private residences, Umaid Bhawan Palace combines royal history with luxury hospitality. It is a major attraction in many Jodhpur Luxury Tour Packages.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Clock Tower &amp; Sardar Market
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Experience local culture through colorful markets offering handicrafts, spices, textiles, and souvenirs. The area is ideal for shopping and food exploration.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Mandore Gardens
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Mandore Gardens features royal cenotaphs, temples, and lush landscapes, making it an important stop during a Jodhpur Local Sightseeing tour.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Toorji Ka Jhalra
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  A beautifully restored stepwell showcasing traditional Rajput architecture and local heritage.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Rao Jodha Desert Rock Park
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Nature lovers can enjoy walking trails and desert flora while learning about the region’s ecological significance.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Bishnoi Village
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Take a Vishnoi Village Tour from Jodhpur to experience traditional rural life, wildlife conservation, and local handicrafts.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Osian
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Popular for ancient temples and desert safaris, Osian is perfect for a Same Day Osian Tour from Jodhpur.
                </p>
              </div>
            </div>
          </div>

          {/* Best Time to Visit Jodhpur */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-6">
              Best Time to Visit Jodhpur
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  October to March (Peak Season)
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  The winter months offer pleasant weather, making it the ideal time for sightseeing and outdoor activities. This period is perfect for a Blue City Tour Jodhpur, heritage walks, and desert excursions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  July to September (Monsoon Season)
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Light rainfall adds freshness to the city, and travelers can enjoy fewer crowds and discounted hotel rates.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  April to June (Summer Season)
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Although temperatures are high, luxury travelers can still enjoy palace stays, museums, and indoor attractions at attractive prices.
                </p>
              </div>
            </div>
          </div>

          {/* Things to Do in Jodhpur */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-6">
              Things to Do in Jodhpur
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Jodhpur Heritage Walk
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Join a guided Jodhpur Heritage Walk through the old city’s narrow blue lanes, historic temples, and bustling markets.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Walking Tour in Jodhpur
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Explore hidden gems, local neighborhoods, and centuries-old architecture with an expert local guide.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Food Tour in Jodhpur
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light mb-2">
                  Taste famous local delicacies such as:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-base sm:text-lg text-gray-800 font-light mb-3">
                  <li>Mirchi Bada</li>
                  <li>Makhaniya Lassi</li>
                  <li>Pyaaz Kachori</li>
                  <li>Dal Baati Churma</li>
                </ul>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  A Food Tour in Jodhpur is one of the best ways to experience the city’s culture.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Jodhpur Sightseeing Tour by TukTuk
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Enjoy a unique and eco-friendly city exploration with a Jodhpur Sightseeing Tour by TukTuk, covering major attractions and local markets.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Village Safari Experience
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Visit Bishnoi villages and witness traditional lifestyles, wildlife, pottery-making, and handicrafts.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Photography Tour
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Capture stunning views of blue-painted houses, majestic forts, and colorful local markets.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Shopping in Local Markets
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light mb-2">
                  Purchase:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 text-base sm:text-lg text-gray-800 font-light">
                  <li>Handcrafted textiles</li>
                  <li>Leather goods</li>
                  <li>Silver jewelry</li>
                  <li>Traditional Rajasthani handicrafts</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Popular Jodhpur Tour Packages */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-6">
              Popular Jodhpur Tour Packages
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Jodhpur Tour Package 2 Days
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Perfect for travelers looking to explore the major attractions of the city in a short duration.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Jodhpur Family Tour Package
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Designed for families seeking a comfortable and memorable holiday experience.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Jodhpur Holiday Package
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Combines sightseeing, cultural experiences, local cuisine, and comfortable accommodation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Jodhpur Private Tour
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  A personalized experience with a private guide, vehicle, and flexible itinerary.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Jodhpur Heritage Tour
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Ideal for history enthusiasts wanting to explore forts, palaces, and heritage sites.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  Jodhpur Luxury Tour
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Experience royal hospitality with luxury hotels, heritage stays, and premium transportation.
                </p>
              </div>
            </div>
          </div>

          {/* Excursions and Transfers from Jodhpur */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-6">
              Excursions and Transfers from Jodhpur
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                  We also provide:
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-800 font-light">
                  <li>Private Udaipur Transfer from Jodhpur</li>
                  <li>Jodhpur Udaipur Cab Service</li>
                  <li>Private Jodhpur Transfer from Udaipur</li>
                  <li>Jodhpur Transfer from Jaipur</li>
                  <li>Car Hire in Jodhpur</li>
                  <li>Cab Hire in Jodhpur</li>
                  <li>Taxi Hire in Jodhpur</li>
                  <li>Private Car Hire in Jodhpur</li>
                  <li>One Way Cab Service in Jodhpur</li>
                  <li>One Way Taxi Service in Jodhpur</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3">
                  Popular excursion tours include:
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-800 font-light">
                  <li>Same Day Pushkar Tour from Jodhpur</li>
                  <li>Same Day Osian Tour from Jodhpur</li>
                  <li>Same Day Jaisalmer Tour From Jodhpur</li>
                  <li>Same Day Jaisalmer Tour From Jodhpur by Car</li>
                  <li>Same Day Jaisalmer Tour From Jodhpur by Train</li>
                  <li>2 Days Jaisalmer Tour from Jodhpur</li>
                  <li>3 Days Jaisalmer Tour from Jodhpur</li>
                  <li>4 Days Jaisalmer Jodhpur Tour</li>
                  <li>Jodhpur Jaisalmer Cab Service</li>
                  <li>Golden Triangle Tour with Jaisalmer &amp; Jodhpur</li>
                  <li>Golden Triangle Tour with Jodhpur &amp; Udaipur</li>
                  <li>4 Days Jaipur Jodhpur Tour with Pushkar</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Frequently Asked Questions (FAQs) Accordion */}
          {data.faqs && data.faqs.length > 0 && (
            <div className="pt-4 border-t border-gray-200">
              <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-6">
                Frequently Asked Questions (FAQs)
              </h2>

              <div className="space-y-2">
                {data.faqs.map((faq, idx) => {
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
          )}
        </div>
      ) : data.id === "udaipur" ? (
        /* ======================== UDAIPUR EXACT SECTIONS ======================== */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 text-gray-800">
          {/* Udaipur Tour Packages – Explore the City of Lakes & About Udaipur */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#192a3d] font-bold mb-4">
              Udaipur Tour Packages – Explore the City of Lakes
            </h2>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-5">
              About Udaipur
            </h3>
            <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed font-light">
              <p>
                Known as the “City of Lakes,” Udaipur is one of the most beautiful destinations in Rajasthan and a favorite choice for travelers seeking heritage, romance, and luxury. Surrounded by the scenic Aravalli Hills, the city is famous for its magnificent palaces, serene lakes, colorful bazaars, and rich Rajput culture. Whether you are planning a romantic getaway, family vacation, cultural exploration, or luxury holiday, our carefully designed Udaipur Tour Packages offer unforgettable experiences.
              </p>
              <p>
                From a relaxing Udaipur Lake Tour on Lake Pichola to exploring royal palaces and historic temples, Udaipur offers something for every traveler. We provide customized Udaipur Holiday Packages, Udaipur Travel Packages, Udaipur Family Tour Packages, and Udaipur Honeymoon Tour Packages to suit different budgets and travel styles.
              </p>
              <p>
                Choose from a Udaipur Tour Package 2 Days, Udaipur Tour Package 3 Days, or a complete Udaipur Tour Package from Delhi for a memorable Rajasthan holiday. As a trusted Travel Agency in Udaipur and experienced Tour Operator in Udaipur, we also offer Car Hire in Udaipur, Cab Hire in Udaipur, Taxi Hire in Udaipur, and professional guide services.
              </p>
            </div>
          </div>

          {/* Best Attractions in Udaipur */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-6">
              Best Attractions in Udaipur
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">City Palace</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  The largest palace complex in Rajasthan, City Palace showcases stunning architecture, royal courtyards, museums, and panoramic views of Lake Pichola.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Lake Pichola</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  A beautiful artificial lake famous for boat rides, sunset views, and iconic landmarks like Jag Mandir and Lake Palace.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Jag Mandir</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  A historic island palace located on Lake Pichola, known for its impressive architecture and tranquil surroundings.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Fateh Sagar Lake</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  One of the most popular Udaipur Tourist Attractions, offering boating experiences and scenic views.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Saheliyon Ki Bari</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  A beautiful garden featuring fountains, marble pavilions, and lotus pools built for royal ladies.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Sajjangarh Monsoon Palace</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  Perched atop a hill, this palace offers breathtaking views of Udaipur city, lakes, and sunsets.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Jagdish Temple</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  A magnificent Hindu temple known for its intricate carvings and spiritual significance.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Bagore Ki Haveli</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  A historic haveli showcasing traditional Rajasthani culture, folk performances, and heritage exhibits.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Eklingji Temple</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  A famous temple complex located near Udaipur and an important pilgrimage site.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">Shilpgram</h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                  A rural arts and crafts village where visitors can experience local culture, handicrafts, and traditional performances.
                </p>
              </div>
            </div>
          </div>

          {/* Popular Things to Do in Udaipur */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-6">
              Popular Things to Do in Udaipur
            </h2>
            <ul className="list-disc pl-6 space-y-2.5 text-base sm:text-lg text-gray-800 font-light">
              <li>Enjoy a scenic Udaipur Sightseeing Tour covering major attractions.</li>
              <li>Experience a sunset boat ride during your Udaipur Lake Tour.</li>
              <li>Explore heritage sites through a Walking Tour in Udaipur.</li>
              <li>Discover local flavors with a guided Food Tour in Udaipur.</li>
              <li>Take a romantic boat cruise as part of a Udaipur Honeymoon Package.</li>
              <li>Visit colorful local markets for handicrafts and souvenirs.</li>
              <li>Enjoy a traditional Rajasthani cultural show at Bagore Ki Haveli.</li>
              <li>Book a Guided Tour in Udaipur to learn about the city’s royal history.</li>
              <li>Explore hidden streets with a Udaipur Sightseeing Tour by TukTuk.</li>
              <li>Hire a local expert through our Guide Hire in Udaipur service.</li>
              <li>Visit nearby attractions with Private Car Hire in Udaipur.</li>
              <li>Enjoy convenient transportation through One Way Cab Service in Udaipur and One Way Taxi Service in Udaipur.</li>
            </ul>
          </div>

          {/* Best Places to Visit in Udaipur */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-4">
              Best Places to Visit in Udaipur
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light mb-5">
              When planning your Udaipur Itinerary, include these must-visit destinations:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-800 font-light mb-5">
              <li>City Palace</li>
              <li>Lake Pichola</li>
              <li>Fateh Sagar Lake</li>
              <li>Jag Mandir</li>
              <li>Jagdish Temple</li>
              <li>Saheliyon Ki Bari</li>
              <li>Sajjangarh Monsoon Palace</li>
              <li>Bagore Ki Haveli</li>
              <li>Shilpgram</li>
              <li>Eklingji Temple</li>
              <li>Karni Mata Temple</li>
              <li>Doodh Talai</li>
              <li>Vintage Car Museum</li>
              <li>Rajsamand Lake</li>
              <li>Nathdwara Temple</li>
            </ul>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
              These attractions make Udaipur one of the most popular destinations for a Udaipur Family Tour, Udaipur Romantic Tour, and Udaipur Luxury Tour Package.
            </p>
          </div>

          {/* FAQs Accordion - Matches the user's attached screenshot without language icon */}
          {data.faqs && data.faqs.length > 0 && (
            <div className="pt-4 border-t border-gray-200">
              <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-6">
                FAQs
              </h2>

              <div className="space-y-2">
                {data.faqs.map((faq, idx) => {
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
          )}
        </div>
      ) : (
        /* Fallback for any other destination */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 text-gray-800">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#192a3d] font-bold mb-6">
              {data.pageTitle}
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed font-light">
              {data.overview.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {data.placesToVisit && data.placesToVisit.length > 0 && (
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-4">
                Places to Visit in {data.cityName}
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg text-gray-800 font-light">
                {data.placesToVisit.map((p, idx) => (
                  <li key={idx}>
                    <strong>{p.name}</strong>
                    {p.desc && <span> – {p.desc}</span>}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {data.attractions && data.attractions.length > 0 && (
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-4">
                {data.cityName} Tourist Attractions
              </h2>
              <div className="space-y-4">
                {data.attractions.map((att, idx) => (
                  <div key={idx}>
                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-1">{att.title}</h3>
                    <p className="text-base sm:text-lg text-gray-700 font-light leading-relaxed">{att.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* 4. On-Page Enquiry Form: Matching User's Screenshot Exactly */}
      <DestinationEnquiryForm cityName={data.cityName} />

      {/* 5. Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppFloatingButton />

      {/* Optional Interactive Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedTourId={data.id}
      />
    </div>
  );
}
