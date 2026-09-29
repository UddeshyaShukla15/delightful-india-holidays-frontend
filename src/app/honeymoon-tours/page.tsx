import React from "react";
import { Metadata } from "next";
import HoneymoonClient from "./HoneymoonClient";

export const metadata: Metadata = {
  title: "Honeymoon Tour Packages India - Romantic Holidays | Delightful India Holidays",
  description:
    "Explore bespoke Honeymoon Tour Packages in India. Enjoy romantic heritage hotels, Kerala backwaters, Udaipur lake palaces, and private desert camping.",
};

export default function HoneymoonToursPage() {
  return <HoneymoonClient />;
}
