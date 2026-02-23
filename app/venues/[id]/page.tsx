import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { getVenueById, VENUES } from "@/lib/venues";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return VENUES.map((v) => ({ id: v.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const venue = getVenueById(id);
  if (!venue) return { title: "Venue Not Found" };
  return {
    title: `${venue.name} – VenueFind`,
    description: venue.description,
  };
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

export default async function VenueDetailPage({ params }: PageProps) {
  const { id } = await params;
  const venue = getVenueById(id);
  if (!venue) notFound();

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <main className="bg-stone-50 min-h-screen">
      {/* Back nav */}
      <div className="bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Link
            href="/venues"
            className="inline-flex items-center gap-1.5 text-sm text-stone-500 hover:text-rose-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to results
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Photo gallery */}
            <div className="grid grid-cols-2 gap-2 rounded-2xl overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={venue.images[0]}
                alt={venue.name}
                className="col-span-2 w-full h-72 object-cover"
              />
              {venue.images[1] && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={venue.images[1]}
                  alt={`${venue.name} interior`}
                  className="w-full h-44 object-cover"
                />
              )}
              {/* Placeholder for a third photo slot */}
              <div className="bg-stone-200 h-44 flex items-center justify-center rounded-br-2xl">
                <span className="text-stone-400 text-sm">+ More photos</span>
              </div>
            </div>

            {/* Header */}
            <div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-stone-900">
                    {venue.name}
                  </h1>
                  <p className="text-stone-500 mt-1 flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-rose-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {venue.location.address}
                  </p>
                </div>
                {venue.featured && (
                  <span className="shrink-0 bg-rose-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Featured
                  </span>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-3">
                <div className="flex">
                  {stars.map((star) => (
                    <svg
                      key={star}
                      className={`w-5 h-5 ${
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
                <span className="font-bold text-stone-700 text-lg">
                  {venue.rating.toFixed(1)}
                </span>
                <span className="text-stone-400">
                  {venue.reviewCount} reviews
                </span>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                {
                  label: "Style",
                  value: venue.style,
                  icon: STYLE_EMOJI[venue.style],
                },
                {
                  label: "Capacity",
                  value: `${venue.capacity.min}–${venue.capacity.max} guests`,
                  icon: "👥",
                },
                {
                  label: "Price",
                  value: `$${venue.pricePerPerson}/person`,
                  icon: "💰",
                },
              ].map(({ label, value, icon }) => (
                <div
                  key={label}
                  className="bg-white rounded-xl border border-stone-100 p-4 text-center"
                >
                  <div className="text-2xl mb-1">{icon}</div>
                  <div className="text-xs text-stone-400 mb-1">{label}</div>
                  <div className="text-sm font-semibold text-stone-800 leading-tight">
                    {value}
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl border border-stone-100 p-6">
              <h2 className="text-lg font-semibold text-stone-900 mb-3">
                About This Venue
              </h2>
              <p className="text-stone-600 leading-relaxed">
                {venue.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-2xl border border-stone-100 p-6">
              <h2 className="text-lg font-semibold text-stone-900 mb-4">
                Amenities & Features
              </h2>
              <div className="grid grid-cols-2 gap-y-3">
                {venue.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-rose-500 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-stone-600">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-white rounded-2xl border border-stone-100 p-6">
              <h2 className="text-lg font-semibold text-stone-900 mb-4">
                Location
              </h2>
              <div className="bg-stone-100 rounded-xl h-48 flex items-center justify-center mb-3">
                <div className="text-center text-stone-400">
                  <div className="text-3xl mb-2">📍</div>
                  <p className="text-sm">{venue.location.address}</p>
                </div>
              </div>
              <p className="text-sm text-stone-500">
                {venue.location.city}, {venue.location.state}
              </p>
            </div>
          </div>

          {/* Booking sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sticky top-20">
              <div className="text-center mb-5">
                <div className="text-3xl font-bold text-stone-900">
                  ${venue.pricePerPerson}
                </div>
                <div className="text-stone-400 text-sm">per person</div>
                <div className="text-stone-500 text-sm mt-1">
                  {venue.priceRange} · {venue.capacity.min}–{venue.capacity.max} guests
                </div>
              </div>

              <div className="space-y-3 mb-5">
                <div>
                  <label className="block text-xs font-semibold text-stone-500 mb-1 uppercase tracking-wide">
                    Wedding Date
                  </label>
                  <input
                    type="date"
                    className="w-full border border-stone-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 text-stone-700"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-500 mb-1 uppercase tracking-wide">
                    Guest Count
                  </label>
                  <input
                    type="number"
                    placeholder={`${venue.capacity.min}–${venue.capacity.max}`}
                    min={venue.capacity.min}
                    max={venue.capacity.max}
                    className="w-full border border-stone-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 placeholder-stone-300"
                  />
                </div>
              </div>

              <button className="w-full bg-rose-600 text-white font-semibold py-3 rounded-xl hover:bg-rose-700 transition-colors">
                Request a Tour
              </button>
              <button className="w-full mt-2.5 border border-stone-200 text-stone-700 font-medium py-3 rounded-xl hover:bg-stone-50 transition-colors text-sm">
                Save to Wishlist
              </button>

              <div className="mt-5 pt-5 border-t border-stone-50">
                <div className="flex items-center gap-2 text-sm text-stone-500 mb-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Free consultation included
                </div>
                <div className="flex items-center gap-2 text-sm text-stone-500 mb-2">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Verified venue details
                </div>
                <div className="flex items-center gap-2 text-sm text-stone-500">
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  No hidden booking fees
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
