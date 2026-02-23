import Link from "next/link";
import { Venue } from "@/lib/types";

interface VenueCardProps {
  venue: Venue;
}

const STYLE_EMOJI: Record<string, string> = {
  "Barn & Rustic": "🌾",
  "Garden & Outdoor": "🌸",
  "Ballroom & Formal": "✨",
  "Beach & Waterfront": "🌊",
  "Industrial & Modern": "🏗️",
  "Historic & Estate": "🏛️",
  "Vineyard & Winery": "🍷",
  "Rooftop & Urban": "🌆",
};

export default function VenueCard({ venue }: VenueCardProps) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <Link href={`/venues/${venue.id}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-lg hover:border-rose-100 transition-all duration-200">
        {/* Image */}
        <div className="relative h-52 overflow-hidden bg-stone-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={venue.images[0]}
            alt={venue.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {venue.featured && (
            <div className="absolute top-3 left-3 bg-rose-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              Featured
            </div>
          )}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-stone-700 text-xs font-bold px-2.5 py-1 rounded-full">
            {venue.priceRange}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-stone-900 text-base leading-tight group-hover:text-rose-600 transition-colors">
              {venue.name}
            </h3>
          </div>

          <p className="text-stone-500 text-sm mt-1">
            {venue.location.city}, {venue.location.state}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mt-2">
            <div className="flex">
              {stars.map((star) => (
                <svg
                  key={star}
                  className={`w-3.5 h-3.5 ${
                    star <= Math.round(venue.rating)
                      ? "text-amber-400"
                      : "text-stone-200"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-semibold text-stone-700">
              {venue.rating.toFixed(1)}
            </span>
            <span className="text-sm text-stone-400">
              ({venue.reviewCount} reviews)
            </span>
          </div>

          {/* Style & Capacity */}
          <div className="flex items-center gap-3 mt-3">
            <span className="inline-flex items-center gap-1 bg-stone-50 text-stone-600 text-xs font-medium px-2.5 py-1 rounded-full border border-stone-100">
              {STYLE_EMOJI[venue.style]} {venue.style}
            </span>
            <span className="text-xs text-stone-400">
              Up to {venue.capacity.max} guests
            </span>
          </div>

          {/* Price */}
          <div className="mt-3 pt-3 border-t border-stone-50 flex items-center justify-between">
            <div>
              <span className="text-stone-900 font-bold text-lg">
                ${venue.pricePerPerson}
              </span>
              <span className="text-stone-400 text-sm"> / person</span>
            </div>
            <span className="text-rose-600 text-sm font-medium group-hover:underline">
              View details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
