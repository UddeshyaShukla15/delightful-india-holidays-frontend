import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plan A Trip to India | Personalized Trip to India | Tailor-Made Tours - Delightful India Holidays",
  description:
    "Delightful India Holidays is a premier tailor-made travel operator providing personalized tour packages, Golden Triangle tours, Rajasthan desert safaris in Jaisalmer, and private chauffeured cars across India.",
  keywords: [
    "Delightful India Holidays",
    "Plan a Trip to India",
    "Golden Triangle Tours",
    "Rajasthan Tour Packages",
    "Best Travel Agency in Jaisalmer",
    "Jaisalmer Desert Safari",
    "Taj Mahal Tour",
    "Tailor-Made India Tours",
  ],
  authors: [{ name: "Kamal Kishor - Delightful India Holidays" }],
  icons: {
    icon: "/assets/images/cropped-DIH-1-1-e1718169220798-32x32.webp",
    apple: "/assets/images/cropped-DIH-1-1-e1718169220798-180x180.webp",
  },
  openGraph: {
    title: "Plan A Trip to India | Delightful India Holidays",
    description:
      "Craft your perfect India trip with private drivers, authentic desert camps, and customized itineraries.",
    url: "https://delightfulindiaholidays.com",
    siteName: "Delightful India Holidays",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col font-sans antialiased text-[#222222] bg-white selection:bg-[#c9a766] selection:text-white">
        {children}
      </body>
    </html>
  );
}
