import React from "react";
import { Metadata } from "next";
import DayTourDestinationView, { DestinationData } from "@/components/DayTourDestinationView";
import destinationDataJson from "@/data/dayToursDestinationData.json";

export const metadata: Metadata = {
  title: "Udaipur Tour Packages - Delightful India Holidays",
  description:
    "Explore the City of Lakes with Udaipur Tour Packages. Visit City Palace, Lake Pichola, Jag Mandir, Fateh Sagar Lake, and enjoy romantic sunset boat rides.",
};

export default function UdaipurTourPackagesPage() {
  const data = (destinationDataJson as Record<string, DestinationData>)["udaipur"];

  return <DayTourDestinationView data={data} />;
}
