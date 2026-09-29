import React from "react";
import { Metadata } from "next";
import IndiaToursClient from "./IndiaToursClient";

export const metadata: Metadata = {
  title: "India Tour Packages - Best Holiday Packages in India | Delightful India Holidays",
  description:
    "Explore the best India Tour Packages covering Central, East, North East, South, and West India. Discover incredible destinations, customized itineraries, and memorable travel experiences.",
};

export default function IndiaTourPackagesPage() {
  return <IndiaToursClient />;
}
