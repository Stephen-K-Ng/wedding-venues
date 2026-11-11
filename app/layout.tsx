import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://wedding-venues-one.vercel.app"),
  alternates: {canonical: "/"},
  openGraph: {title: "VenueFind | Napa & Sonoma Weddings", description: "Explore wine country venues with clearly labeled planning estimates.", type: "website"},
  title: "Napa & Sonoma Wedding Venue Directory – VenueFind",
  description:
    "Explore Napa and Sonoma wedding venues with clearly labeled estimates. Confirm pricing, capacity and availability directly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-stone-50 text-stone-900">
        <Navbar />
        {children}
        <footer className="text-center text-sm p-6 text-stone-600"><a href="/privacy" className="underline">Inquiry privacy</a> · Early directory preview</footer>
      </body>
    </html>
  );
}
