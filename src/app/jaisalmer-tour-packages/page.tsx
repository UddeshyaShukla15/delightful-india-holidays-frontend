import React from "react";
import { Metadata } from "next";
import DayTourDestinationView, { DestinationData } from "@/components/DayTourDestinationView";
import destinationDataJson from "@/data/dayToursDestinationData.json";

export const metadata: Metadata = {
  title: "Jaisalmer Tour Packages - Delightful India Holidays",
  description:
    "Experience the magic of Rajasthan with Jaisalmer Tour Packages. Explore Sonar Qila, Patwon Ki Haveli, Thar Desert camel safaris, and luxury camping on Sam Sand Dunes.",
};

export default function JaisalmerTourPackagesPage() {
  const data = (destinationDataJson as Record<string, DestinationData>)["jaisalmer"];

  return <DayTourDestinationView data={data} />;
}
