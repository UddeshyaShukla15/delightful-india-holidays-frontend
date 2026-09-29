import React from "react";
import { Metadata } from "next";
import SameDayClient from "./SameDayClient";

export const metadata: Metadata = {
  title: "Same Day Tours India - Day Trips & City Sightseeing | Delightful India Holidays",
  description:
    "Explore iconic destinations in a day. Book private chauffeured Same Day Tours covering Agra Taj Mahal, Delhi, Jaipur, Pushkar, Jodhpur, and Udaipur.",
};

export default function SameDayToursPage() {
  return <SameDayClient />;
}
