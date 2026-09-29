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
import indiaData from "@/data/indiaToursData.json";

export interface TourPackage {
  id: string;
  title: string;
  duration: string;
  route: string;
  image: string;
  localImage?: string;
  link: string;
}

export interface RegionCard {
  id: string;
  name: string;
  toursCount: string;
  image: string;
  localImage?: string;
  anchor: string;
}

export interface PackageSection {
  id: string;
  title: string;
  highlight: string;
  packages: TourPackage[];
}

export default function IndiaToursClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTourId, setSelectedTourId] = useState<string | undefined>();

  const regions: RegionCard[] = indiaData.regions;
  const sections: PackageSection[] = indiaData.sections;

  const renderTourCard = (tour: TourPackage) => {
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

      {/* 1. Hero Banner: India Tour Packages with background image from main website */}
      <section className="relative min-h-[350px] sm:min-h-[400px] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={indiaData.hero.localHeroImage || indiaData.hero.heroImage}
            alt="India Tour Packages"
            fill
            className="object-cover"
            priority
          />
          {/* Subtle dark overlay matching main site */}
          <div className="absolute inset-0 bg-[#3a3a3a]/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center py-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] tracking-tight">
            India Tour Packages
          </h1>
        </div>
      </section>

      {/* Breadcrumb matching main website */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2 text-sm text-gray-600">
        <Link href="/" className="text-[#0284c7] hover:underline font-medium">
          Home
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-700">India Tour Packages</span>
      </div>

      {/* 2. 6 Region Showcase Cards in 3x2 Grid exactly as shown in screenshot */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region) => {
            const imgSrc = region.localImage || region.image;
            return (
              <a
                key={region.id}
                href={region.anchor}
                className="group relative aspect-[16/10] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block"
              >
                <Image
                  src={imgSrc}
                  alt={region.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Subtle dark tint */}
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors" />

                {/* Centered Title and Pill Badge */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <h3 className="text-white font-serif font-bold text-2xl sm:text-3xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-tight mb-2">
                    {region.name}
                  </h3>
                  <span className="inline-block bg-[#E78031] text-white text-xs sm:text-sm font-semibold px-4 py-1 rounded-full shadow-md">
                    {region.toursCount}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* 3. Editorial Content: India Tour Packages Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 text-gray-800">
        <div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#192a3d] font-bold mb-5">
            India Tour Packages
          </h2>
          <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed font-light">
            <p>
              You have booked your flights and hotels, now the next thing you seek to do is scour through tour packages and book one. If it is domestically you plan to travel, you will find innumerable holiday packages, but very few that match your requirement, or for that matter your interests and personality. Enter Yatra and you can now choose from an array of holiday packages in India that span across the length and breadth of the country, taking you into breathtaking tea estates, hill resorts to splendid backwater retreats. By booking your India tour with Yatra, you get to customise your holiday to suit your requirement, and more importantly can avail some attractive discounts and offers from time to time.
            </p>
          </div>
        </div>

        {/* Exciting holiday offers and discounts */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-3">
            Exciting holiday offers and discounts
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
            As you browse through multiple India tour packages, you will find those on Yatra that come with attractive discounts. Presently, there are Andaman packages starting from INR 15,999 valid for a limited period of time. There are also great offers on Kerala, Himachal Pradesh and North East India packages. You can even look up the ‘workstation packages’ where you can enjoy scenic vistas by taking a break from the city and choose to work or even chill from an exotic location in the country. Yatra also offers plenty of discounts on weekend getaway packages, outside of family holiday discounts, and honeymoon special deals.
          </p>
        </div>

        {/* Holiday by theme */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-3">
            Holiday by theme
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
            Another interesting way of searching a holiday package is by theme. On Yatra, depending on your interest area you can now search a holiday package. The themes comprise wildlife, family, religious, honeymoon, weekend getaways, beach, summer, winter, luxury and adventure packages. Among the top honeymoon packages are those in Manali, Shimla, Kashmir, Munnar, Srinagar, Gangtok, Darjeeling, Gulmarg, Jaipur, Thekkady, Alleppey, and Pahalgam. A wildlife lover can explore from a flurry of packages to the Jim Corbett National Park, Kanha National Park, Bandhavgarh National Park, Pench National Park and several other comprising Periyar, Ooty and Jabalpur. Looking for exclusive winter holiday ideas in India? You will find those in Goa, Andaman, Kerala, Darjeeling and across Himachal.
          </p>
        </div>

        {/* Popular India tour packages */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-3">
            Popular India tour packages
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
            You can straightaway look for some of the popular holiday destinations in India and book them on the spot. Andaman, Ladakh, Himachal, Kerala, Goa, North East, South India, Bhutan and Rajasthan are among the top holiday destinations choices in the country. You can book a tour package to any of these destinations depending on your budget and other factors such as how long you would like to stay, your preference of activities such as historical tour, garden and lake visits, or you prefer water activities like snorkelling or scuba diving. There is a holiday to suit every budget as well as every preference of activity. From staying in a sprawling tea bungalow in Darjeeling to a cosy homestay at an apple orchard in Himachal Pradesh, you will really be spoilt for choice. Beach bums can hit Havelock in Andaman or go to Goa and spend a quiet holiday in the southern part of the state, soaking up some, tucking into sumptuous seafood and exploring the beaches and local markets.
          </p>
        </div>

        {/* Workstation packages */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-3">
            Workstation packages
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
            Yatra workstation packages are a great way to take a break from city life and head to a scenic locale where you can enjoy wonderful sunsets or hill views from your room where you have set up your laptop to continue your office work. A great work and chill option, such packages come with fast Wi-Fi for all your calls, work and entertainment, home-cooked meals, well-sanitised accommodation maintaining all COVID protocols as laid down by the WHO. Yatra has handpicked properties for these workstation packages across the country where you can enjoy the above mentioned amenities and more like getting to know the locals, taking a morning walk through a fruit orchard, spotting rare birds and coming back to a hot cup of tea before you begin your workday.
          </p>
        </div>

        {/* Weekend getaway packages */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-3">
            Weekend getaway packages
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
            With a Yatra weekend getaway you can now renew your passion for travel with open skies, long scenic drives, rolling landscapes and gorgeous sunsets. You can choose from a range of weekend getaways whether you stay in Delhi, Mumbai, Pune, Hyderabad, Bangalore, Chennai or Kolkata. You will find ample destinations to suit your tastes in travel with plenty of things to do. You can plan such a weekend getaway with your extended family or just a few close friends and enjoy a cosy, comfortable vacation. Yatra’s weekend getaway packages attract exciting offers with sanitised stay options in this world of post-pandemic travel. Simply look forward to a lovely weekend.
          </p>
        </div>

        {/* Family tours */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-3">
            Family tours
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
            Yatra has exclusive family tours crafted in keeping with the needs of a family whether large or small, with children or the elderly. It is a great way to spend some quality time together in a great destination. You can choose from a bevy of hotel options and even destinations and get some wonderful discounts on your holiday. There are some long and short stay options in places like Himachal Pradesh, Kerala, Munnar, Kashmir, Srinagar, Tamil Nadu, Kochi, Gulmarg, Gangtok, Thekkady, Pahalgam including some self-drive family tours. Choose a destination depending on your weather and view preference and choose a hotel that perfectly sums up your mentality and enjoy your stay with your family.
          </p>
        </div>

        {/* Special curated packages */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-3">
            Special curated packages
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
            Offering Yatra service assurance are a set of special curated packages that entail a stay in an exotic destination with everything such as your hotel stay factored in. Some of Yatra’s popular special curated packages include a 3 night stay in Kathmandu’s Hotel Fairfield by Marriott, a special honeymoon package in Munnar, an exclusive 2 night stay in Shillong, a Tirupati-Pondicherry holiday package, an amazing Darjeeling and Gangtok honeymoon special, a splendid Mysore-Ooty honeymoon special, a 5 day mini Kerala holiday comprising Munnar, Thekkady and Alleppey, a 5 day Mahabalipuram and Pondicherry package among others. These packages are offered at an exclusive price and come with Yatra’s quality assurance.
          </p>
        </div>

        {/* Honeymoon special deals */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-3">
            Honeymoon special deals
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
            You can choose from an array of domestic honeymoon packages that have been specially curated in keeping with your tastes as a couple and also to ensure maximum privacy. Each honeymoon package comes with options for sanitised stay, transfers, a whole lot of activities or things to do, while giving you the liberty to choose your activities depending on your convenience and preference. Most of these packages come at attractive discounts. You can avail some additional add-ons such as room upgrade to the next category, complimentary meal once a day, complimentary in-house activity at the hotel of stay, spa, laundry and meal discount coupons at the hotel of stay, early check-in and late check-out, complimentary candlelight dinner along with cake, flowers, bed decoration once during your stay.
          </p>
        </div>

        {/* Popular domestic destinations */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#192a3d] font-bold mb-3">
            Popular domestic destinations
          </h3>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
            Yatra covers a gamut of destinations across the country which includes all popular destinations frequented by majority of the tourists. Among them are Manali, Goa, Kashmir, Ooty, Kerala, Ladakh, Darjeeling, Shimla and Gangtok. There are some wonderful itineraries in each of these destinations with long as well as short stay options. These holiday packages are tailored to meet every tourists’ budget and caters to every category of travellers. You can choose from varying itineraries, depending on the activities you prefer to be a part of and also the price point. Look up the flight connectivity to your holiday destination and simply close your holiday package booking with Yatra.
          </p>
        </div>
      </section>

      {/* 4. Regional Tour Packages Sections (3 packages each: Central, East, North East, North India, South, West) */}
      <div className="space-y-16 py-8">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24"
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-serif text-[#192a3d] font-bold mb-3">
                <span className="text-[#FFAF19]">{section.highlight}</span>{" "}
                Tour Packages
              </h2>
              <div className="h-1 w-20 bg-[#E78031] mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.packages.map((pkg) => renderTourCard(pkg))}
            </div>
          </section>
        ))}
      </div>

      {/* 5. On-Page Enquiry Part */}
      <DestinationEnquiryForm cityName="India" />

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
