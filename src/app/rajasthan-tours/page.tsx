import React from "react";
import { Metadata } from "next";
import RajasthanClient from "./RajasthanClient";

export const metadata: Metadata = {
  title: "Rajasthan Tour Packages - Royal Rajasthan Holidays | Delightful India Holidays",
  description:
    "Explore the best Rajasthan Tour Packages with Delightful India Holidays. Discover Jaipur, Udaipur, Jodhpur, Jaisalmer, royal palaces, desert safaris, and custom itineraries.",
};

export default function RajasthanToursPage() {
  return <RajasthanClient />;
}
