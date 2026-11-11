import { pricingFor } from "@/lib/evidence";
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
  const price = pricingFor(venue);

  return (
    <Link href={`/venues/${venue.id}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-lg hover:border-rose-100 transition-all duration-200">
        {/* Image */}
        <div className="relative h-52 overflow-hidden bg-stone-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={venue.images[0]}
            alt="Illustrative wedding inspiration, not a verified venue photograph"
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {venue.featured && (
            <div className="absolute top-3 left-3 bg-rose-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
              Featured
            </div>
          )}
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-stone-700 text-xs font-bold px-2.5 py-1 rounded-full">
            Illustrative photo
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

          <p className="text-xs text-amber-800 mt-2">Listing details awaiting verification</p>
          {/* Style & Capacity */}
          <div className="flex items-center gap-3 mt-3">
            <span className="inline-flex items-center gap-1 bg-stone-50 text-stone-600 text-xs font-medium px-2.5 py-1 rounded-full border border-stone-100">
              {STYLE_EMOJI[venue.style]} {venue.style}
            </span>
            <span className="text-xs text-stone-400">
              Capacity estimate: {venue.capacity.max}
            </span>
          </div>

          {/* Price */}
          <div className="mt-3 pt-3 border-t border-stone-50 flex items-center justify-between">
            <div>
              <span className="text-stone-900 font-bold text-lg">
                {price.amount === null ? "Quote required" : `$${price.amount}`}
              </span>
              <span className="text-stone-400 text-sm">{price.amount === null ? "" : " / person"}</span>
              <p className="text-xs text-amber-800 mt-1">{price.label}</p>
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
