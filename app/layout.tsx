import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VenueFind – Wedding Venue Directory",
  description:
    "Find and compare wedding venues by location, capacity, price, and style. Your dream venue is just a search away.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased bg-stone-50 text-stone-900`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
