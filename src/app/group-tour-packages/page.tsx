import React from "react";
import { Metadata } from "next";
import GroupToursClient from "./GroupToursClient";

export const metadata: Metadata = {
  title: "Group Tour Packages India - Fixed Departures & Custom Groups | Delightful India Holidays",
  description:
    "Explore guided Group Tour Packages in India. Travel together in luxury AC coaches across the Golden Triangle, Rajasthan, South India, and Ladakh.",
};

export default function GroupToursPage() {
  return <GroupToursClient />;
}
