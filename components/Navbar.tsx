"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">💍</span>
            <span className="text-xl font-bold text-rose-600 tracking-tight">
              VenueFind
            </span>
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/venues"
              className={`text-sm font-medium transition-colors ${
                pathname.startsWith("/venues")
                  ? "text-rose-600"
                  : "text-stone-600 hover:text-stone-900"
              }`}
            >
              Browse Venues
            </Link>
            <a
              href="#"
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#"
              className="bg-rose-600 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-rose-700 transition-colors"
            >
              List Your Venue
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
