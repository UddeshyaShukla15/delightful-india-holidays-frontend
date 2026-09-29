"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import EnquiryModal from "@/components/EnquiryModal";
import {
  Calendar,
  Clock,
  MapPin,
  ChevronRight,
  CheckCircle2,
  Send,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  Award,
} from "lucide-react";

export default function FifteenDayHolidayPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const itineraryDays = [
    {
      day: "Day 1–2",
      title: "Arrival in Delhi",
      city: "Delhi",
      description: [
        "Your Indian adventure begins in Delhi, the vibrant capital where centuries of history meet modern India. Settle into your hotel and take some time to relax after your arrival.",
        "On your sightseeing day, explore some of Delhi's most celebrated landmarks. Visit the magnificent Red Fort, admire the architecture of Humayun's Tomb, experience the peaceful atmosphere around India Gate, and discover the spiritual character of Jama Masjid and the old streets of Old Delhi.",
        "Delhi is also a wonderful introduction to Indian cuisine and culture. Take a rickshaw ride through the lively lanes of Old Delhi, browse colourful markets and sample some traditional local dishes.",
      ],
      highlights: "Red Fort, India Gate, Humayun's Tomb, Jama Masjid, Old Delhi, local markets and Indian cuisine.",
    },
    {
      day: "Day 3",
      title: "Agra",
      city: "Agra",
      description: [
        "Leave Delhi behind and travel to Agra, one of India's most famous historic cities. The highlight of your visit is undoubtedly the Taj Mahal, an extraordinary monument of love and one of the world's most recognisable landmarks.",
        "Spend time exploring the Taj Mahal and learning about the Mughal history behind its creation. Later, visit Agra Fort, a magnificent red sandstone fortress that offers fascinating views and insight into the lives of the Mughal emperors.",
        "As evening approaches, you can explore Agra's local markets and discover traditional handicrafts and marble artwork.",
      ],
      highlights: "Taj Mahal, Agra Fort, Mughal heritage, local handicrafts and city markets.",
    },
    {
      day: "Day 4–5",
      title: "Ranthambore",
      city: "Ranthambore",
      description: [
        "Continue your journey into Rajasthan and travel towards Ranthambore, one of India's most exciting wildlife destinations.",
        "Ranthambore is best known for its tiger reserve, where you can experience the thrill of exploring the wilderness on a safari. A morning or afternoon safari takes you through forests, grasslands, lakes and historic landscapes where wildlife can often be spotted.",
        "Apart from the wildlife experience, Ranthambore is home to the impressive Ranthambore Fort, dramatically positioned above the surrounding landscape. The combination of ancient history and wild nature makes these two days a unique part of your Indian holiday.",
      ],
      highlights: "Ranthambore National Park, wildlife safari, tiger spotting, Ranthambore Fort and natural landscapes.",
    },
    {
      day: "Day 6–7",
      title: "Udaipur",
      city: "Udaipur",
      description: [
        "Your next destination is Udaipur, often called the City of Lakes. Surrounded by the Aravalli Hills and centred around beautiful lakes, Udaipur offers a completely different atmosphere from the destinations you have already visited.",
        "Explore the magnificent City Palace, wander through the historic streets of the old city and enjoy views over Lake Pichola. A boat ride on the lake is a wonderful way to experience Udaipur, particularly around sunset.",
        "Spend your evening enjoying the city's romantic atmosphere, traditional Rajasthani culture and views of the illuminated palaces reflected across the water.",
      ],
      highlights: "City Palace, Lake Pichola, Jagdish Temple, old city, lakeside views and sunset boat ride.",
    },
    {
      day: "Day 8–9",
      title: "Jodhpur",
      city: "Jodhpur",
      description: [
        "Travel onwards to Jodhpur, the Blue City of Rajasthan. As you approach the city, the enormous Mehrangarh Fort dominates the skyline and provides one of Rajasthan's most spectacular historic settings.",
        "Explore Mehrangarh Fort and discover its palaces, courtyards, museums and impressive collections. Afterwards, wander through the blue-painted lanes of the old city and visit the lively markets around Clock Tower and Sardar Market.",
        "Jodhpur is also a great place to experience traditional Rajasthani food, handicrafts and the everyday rhythm of life in an old desert city.",
      ],
      highlights: "Mehrangarh Fort, Jaswant Thada, Blue City, Clock Tower, Sardar Market and Rajasthani cuisine.",
    },
    {
      day: "Day 10–11",
      title: "Jaisalmer",
      city: "Jaisalmer",
      description: [
        "Continue west towards Jaisalmer, the Golden City rising from the Thar Desert. The city's distinctive golden sandstone architecture creates an unforgettable landscape.",
        "Explore the magnificent Jaisalmer Fort, one of the city's most important landmarks, and discover its narrow lanes, ancient temples, havelis and traditional shops. Visit Patwon Ki Haveli and explore the historic streets of the old city.",
        "The experience becomes even more memorable when you head into the Thar Desert. Enjoy a camel safari across the dunes, watch the sunset over the desert and spend an evening experiencing traditional Rajasthani music, dance and hospitality at a desert camp.",
      ],
      highlights: "Jaisalmer Fort, Patwon Ki Haveli, Gadisar Lake, camel safari, Sam Sand Dunes, sunset and desert camp experience.",
    },
    {
      day: "Day 12",
      title: "Pushkar",
      city: "Pushkar",
      description: [
        "Leave the desert behind and travel to Pushkar, one of Rajasthan's most spiritual and atmospheric towns.",
        "Take a peaceful walk around Pushkar Lake and explore the colourful streets surrounding the ghats. Visit the famous Brahma Temple, one of the few major temples in the world dedicated to Lord Brahma.",
        "Pushkar's relaxed atmosphere, colourful bazaars, temples and rooftop cafés make it a wonderful contrast to the busy cities and desert landscapes experienced earlier in your journey.",
      ],
      highlights: "Pushkar Lake, Brahma Temple, sacred ghats, colourful bazaars and local culture.",
    },
    {
      day: "Day 13–15",
      title: "Jaipur",
      city: "Jaipur",
      description: [
        "Your final destination is Jaipur, the famous Pink City and capital of Rajasthan. Spend three days discovering its royal heritage, magnificent architecture, colourful markets and vibrant culture.",
        "Begin with the spectacular Amber Fort, located in the hills outside the city. Continue to the City Palace, explore the fascinating astronomical instruments at Jantar Mantar and admire the iconic façade of Hawa Mahal.",
        "Take time to explore Jaipur's bazaars, where you can shop for traditional textiles, jewellery, handicrafts, blue pottery and other Rajasthani souvenirs.",
        "Your final evening is an opportunity to enjoy a traditional Rajasthani meal and reflect on an unforgettable journey through India's history, wildlife, royal cities and desert landscapes.",
        "After breakfast, enjoy some free time depending on your flight schedule. Your Delightful India Holidays representative will assist with your transfer to Jaipur International Airport for your onward journey.",
      ],
      highlights: "Amber Fort, City Palace, Hawa Mahal, Jantar Mantar, Jaipur bazaars, Rajasthani cuisine and Jaipur Airport departure.",
    },
  ];

  const highlightsList = [
    "Explore Old & New Delhi – Discover iconic landmarks, historic monuments, bustling bazaars and vibrant culture.",
    "Visit the Taj Mahal in Agra – Marvel at one of the world's most celebrated monuments and explore the impressive Agra Fort.",
    "Ranthambore Wildlife Safari – Experience an exciting safari through famous tiger habitats and explore Ranthambore Fort.",
    "Discover Udaipur's Royal Heritage – Visit the magnificent City Palace and enjoy scenic views across Lake Pichola.",
    "Experience the Blue City of Jodhpur – Explore the mighty Mehrangarh Fort, Jaswant Thada and the colourful old city.",
    "Adventure in the Thar Desert – Experience a camel safari, golden sand dunes, desert sunset and Rajasthani hospitality in Jaisalmer.",
    "Explore Golden Jaisalmer – Discover Jaisalmer Fort, Patwon Ki Haveli, Gadisar Lake and golden sandstone havelis.",
    "Experience Spiritual Pushkar – Visit holy Pushkar Lake, sacred ghats, vibrant bazaars and the rare Lord Brahma Temple.",
    "Discover Royal Jaipur – Marvel at Amber Fort, City Palace, Hawa Mahal, Jantar Mantar and royal heritage bazaars.",
  ];

  const glanceTable = [
    { days: "Day 1–2", destination: "Delhi", experience: "History, culture & Old Delhi" },
    { days: "Day 3", destination: "Agra", experience: "Taj Mahal & Mughal heritage" },
    { days: "Day 4–5", destination: "Ranthambore", experience: "Wildlife safari & Ranthambore Fort" },
    { days: "Day 6–7", destination: "Udaipur", experience: "Lakes, palaces & romantic heritage" },
    { days: "Day 8–9", destination: "Jodhpur", experience: "Mehrangarh Fort & Blue City" },
    { days: "Day 10–11", destination: "Jaisalmer", experience: "Golden Fort & Thar Desert" },
    { days: "Day 12", destination: "Pushkar", experience: "Temples, lake & spiritual culture" },
    { days: "Day 13–15", destination: "Jaipur", experience: "Forts, palaces & Pink City departure" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <TopBar />
      <Navbar onOpenEnquiry={() => setIsModalOpen(true)} />

      {/* Hero Banner */}
      <section className="relative min-h-[340px] sm:min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/custom-tours/redfort.webp"
            alt="15-Day Holiday in India"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-12 sm:py-16">
          <h1 className="text-3xl sm:text-5xl lg:text-[46px] font-serif font-normal text-white mb-3 tracking-normal">
            Wayne - 15 Day Holiday in India
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-200 font-sans mb-3">
            <span className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white font-semibold">
              <Clock className="w-4 h-4 text-[#E78031]" /> 15 Days / 14 Nights
            </span>
          </div>

          <p className="text-xs sm:text-sm text-white/90 max-w-2xl mx-auto mb-4 font-sans font-medium">
            Delhi • Agra • Ranthambore • Udaipur • Jodhpur • Jaisalmer • Pushkar • Jaipur
          </p>

          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs sm:text-sm text-white/90 font-sans">
            <Link href="/" className="hover:text-[#E78031] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/80" />
            <Link href="/custum-tours" className="hover:text-[#E78031] transition-colors">
              Custom Tours
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/80" />
            <span className="text-white">15-Day Holiday in India</span>
          </nav>
        </div>
      </section>

      {/* Main Tour Content */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Overview, Highlights, Day-by-day */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div className="bg-[#faf8f5] p-6 sm:p-8 rounded-2xl border border-[#ede5d8]">
              <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-normal mb-4">
                Tour Overview
              </h2>
              <p className="text-base text-gray-700 leading-relaxed font-sans">
                Experience the best of India on an unforgettable 15-day journey through historic cities, royal palaces,
                magnificent forts, colorful markets, wildlife, sacred towns, and the golden Thar Desert. From the
                vibrant streets of Delhi and the timeless beauty of the Taj Mahal to the royal heritage of Rajasthan,
                this private journey is designed to showcase India’s culture, history, architecture, and landscapes.
              </p>
            </div>

            {/* Tour Highlights */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-normal mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-[#E78031]" />
                Tour Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlightsList.map((hl, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#228B48] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-800 leading-relaxed font-sans">{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Day by Day Itinerary */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-normal mb-6">
                15-Day Detailed Itinerary
              </h2>
              <div className="space-y-6">
                {itineraryDays.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="bg-[#E78031] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                          {item.day}
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-gray-900">
                          {item.title}
                        </h3>
                      </div>
                      <span className="flex items-center gap-1 text-xs font-semibold text-[#228B48]">
                        <MapPin className="w-3.5 h-3.5" /> {item.city}
                      </span>
                    </div>

                    <div className="space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
                      {item.description.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>

                    <div className="mt-4 pt-3 border-t border-gray-100 text-xs sm:text-sm text-[#c9a766] font-semibold flex items-start gap-2">
                      <span className="text-gray-900 uppercase font-bold tracking-wider text-xs">Highlights:</span>
                      <span className="text-gray-700 font-normal">{item.highlights}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* At a Glance Table */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-normal mb-6">
                Itinerary at a Glance
              </h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-left text-sm font-sans">
                  <thead className="bg-[#faf8f5] text-gray-900 font-bold uppercase tracking-wider text-xs border-b border-gray-200">
                    <tr>
                      <th className="py-3 px-4">Days</th>
                      <th className="py-3 px-4">Destination</th>
                      <th className="py-3 px-4">Experience</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {glanceTable.map((row, idx) => (
                      <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                        <td className="py-3.5 px-4 font-semibold text-[#E78031] whitespace-nowrap">{row.days}</td>
                        <td className="py-3.5 px-4 font-medium text-gray-900 whitespace-nowrap">{row.destination}</td>
                        <td className="py-3.5 px-4 text-gray-700">{row.experience}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Sidebar: Booking card & quick info */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-lg">
                <div className="text-xs uppercase tracking-wider font-bold text-[#c9a766] mb-1">
                  Private Custom Tour
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  15-Day Holiday in India
                </h3>

                <div className="space-y-3 mb-6 text-sm text-gray-600 font-sans border-y border-gray-100 py-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-800">Duration:</span>
                    <span>15 Days / 14 Nights</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-800">Destinations:</span>
                    <span>8 Iconic Cities</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-800">Vehicle:</span>
                    <span>Private AC Chauffeur</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-800">Customization:</span>
                    <span className="text-[#228B48] font-semibold">100% Tailor-made</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full bg-[#E78031] hover:bg-[#d06b20] text-white font-bold py-3.5 px-6 rounded-[4px] shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enquire for This Tour</span>
                  </button>

                  <a
                    href="https://wa.me/919636784713?text=Hi%2C%20I%20am%20interested%20in%20the%2015-Day%20Holiday%20in%20India%20custom%20tour."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#228B48] hover:bg-[#1c743c] text-white font-bold py-3 px-6 rounded-[4px] shadow-sm transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>

                  <Link
                    href="/plan-my-tour"
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-[4px] transition-all flex items-center justify-center text-sm"
                  >
                    Plan Custom Itinerary
                  </Link>
                </div>
              </div>

              {/* Need help box */}
              <div className="bg-[#faf8f5] rounded-2xl border border-[#ede5d8] p-6 text-center space-y-2 font-sans">
                <div className="text-sm font-bold text-gray-900">Need Immediate Help?</div>
                <p className="text-xs text-gray-600">
                  Speak directly with our local tour directors to craft this itinerary to your budget & dates.
                </p>
                <div className="text-base font-bold text-[#E78031] pt-1">
                  <a href="tel:+919636784713">+91 96367 84713</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      <WhatsAppFloatingButton />
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedTourId="15-Day Holiday in India"
      />
    </div>
  );
}
