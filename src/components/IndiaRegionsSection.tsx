"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function IndiaRegionsSection() {
  const regions = [
    {
      title: "North India",
      image: "/assets/images/north-india-img-1024x684.png",
      description:
        "Discover the rich heritage, vibrant culture, majestic forts, iconic monuments, scenic hill stations, and spiritual destinations with our North India Tour Packages. From the timeless beauty of the Taj Mahal and the royal cities of Rajasthan to the Himalayan landscapes of Himachal Pradesh and Kashmir, every journey is unforgettable. Delightful India Holidays offers customized North India tours with comfortable stays, private transportation, expert guides, and personalized itineraries, ensuring a memorable, hassle-free vacation for families, couples, solo travelers, and groups.",
      imageLeft: true,
      link: "/tours?category=Golden+Triangle+Tours",
    },
    {
      title: "West India",
      image: "/assets/images/West-India-img-1024x684.png",
      description:
        "The Land Of Legends & Traditions REGION- The western part of India consists of the states of Goa, Gujarat, Rajasthan, and Maharashtra, along with the Union territories of India – Daman & Diu, and Dadra & Nagar Haveli. The region is highly industrialized, with a large urban population. Western India is bounded by the great Thar Desert…",
      imageLeft: false,
      link: "/tours?category=Rajasthan+Tour+Packages",
    },
    {
      title: "South India",
      image: "/assets/images/south-india-img-1024x684.png",
      description:
        "The Land Of Legends & Traditions REGION- The southern part of India consists of the states of Kerala, Tamil Nadu, Karnataka, and Andhra Pradesh. Famous for tranquil backwaters, ancient Dravidian temples, lush tea and spice plantations, and golden tropical coastlines. Experience Ayurvedic wellness and serene natural beauty.",
      imageLeft: true,
      link: "/tours?category=India+Tour+Packages",
    },
    {
      title: "East India",
      image: "/assets/images/East-India-img-1024x684.png",
      description:
        "The Land Of Legends & Traditions REGION- The eastern part of India consists of West Bengal, Odisha, Bihar, and the enchanting Seven Sister states of the Northeast. Known for the sacred Ganges, tea gardens of Darjeeling, living root bridges, and vibrant tribal culture.",
      imageLeft: false,
      link: "/tours?category=India+Tour+Packages",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto space-y-16">
        <h2 className="section-heading mb-12">
          <span style={{ color: "#FFAF19" }}>India </span> Tour Packages
        </h2>

        <div className="space-y-12">
          {regions.map((region, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                region.imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center bg-white rounded-[10px] p-4 sm:p-6`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 aspect-[16/10] relative rounded-[10px] overflow-hidden shadow-sm">
                <Image
                  src={region.image}
                  alt={region.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Text & Button */}
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="font-times text-[26px] sm:text-[30px] font-semibold text-black">
                  {region.title}
                </h3>
                <p className="font-roboto text-[14px] sm:text-[15px] text-gray-700 leading-relaxed">
                  {region.description}
                </p>
                <div>
                  <Link
                    href={region.link}
                    className="inline-flex items-center justify-center bg-[#E78031] hover:bg-[#d46d20] text-white text-[14px] font-medium px-6 py-2.5 rounded-[20px] transition-all shadow-sm"
                  >
                    <span>Learn More</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
