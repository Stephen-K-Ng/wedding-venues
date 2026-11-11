"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-16 flex-wrap gap-2 py-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">💍</span>
            <span className="text-xl font-bold text-rose-600 tracking-tight">
              VenueFind
            </span>
          </Link>
          <div className="flex items-center gap-3 sm:gap-6">
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
            <Link
              href="/honeymoon"
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
            >
              Honeymoon
            </Link>
            <Link
              href="/list-your-venue"
              className="bg-rose-600 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-rose-700 transition-colors"
            >
              List a Venue
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
