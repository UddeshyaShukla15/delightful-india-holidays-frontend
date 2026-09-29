import React from "react";
import { Metadata } from "next";
import DayTourDestinationView, { DestinationData } from "@/components/DayTourDestinationView";
import destinationDataJson from "@/data/dayToursDestinationData.json";

export const metadata: Metadata = {
  title: "Delhi Tour Packages - Delightful India Holidays",
  description:
    "Explore Delhi with our curated Delhi Tour Packages. Visit Red Fort, Qutub Minar, Humayun's Tomb, India Gate, Chandni Chowk, and book day tours from Delhi.",
};

export default function DelhiTourPackagesPage() {
  const data = (destinationDataJson as Record<string, DestinationData>)["delhi"];

  return <DayTourDestinationView data={data} />;
}
