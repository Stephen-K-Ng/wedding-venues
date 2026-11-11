import InquiryForm from "@/components/InquiryForm";
import { inquiriesEnabled } from "@/lib/inquiry-config";
import { pricingFor } from "@/lib/evidence";
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
    description: `Explore ${venue.name} in ${venue.location.city}. Confirm wedding eligibility and request a dated quote.`,
    alternates: { canonical: `/venues/${venue.id}` },
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

  const price = pricingFor(venue);

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
                alt="Illustrative celebration, not a verified photograph of this venue"
                className="col-span-2 w-full h-72 object-cover"
              />
              {venue.images[1] && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={venue.images[1]}
                  alt="Wedding inspiration stock image"
                  className="w-full h-44 object-cover"
                />
              )}
              {/* Placeholder for a third photo slot */}
              <div className="bg-stone-200 h-44 flex items-center justify-center rounded-br-2xl">
                <span className="text-stone-400 text-sm">Illustrative photos</span>
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

              <p className="mt-3 text-sm text-amber-900">Unverified listing · confirm wedding eligibility, capacity and amenities directly. Photos below are illustrative stock images.</p>

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
                  label: "Capacity estimate",
                  value: `${venue.capacity.min}–${venue.capacity.max} guests`,
                  icon: "👥",
                },
                {
                  label: "Price",
                  value: price.amount === null ? "Quote required" : `$${price.amount}/person (unverified)`,
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
                Prototype Description
              </h2>
              <p className="text-stone-600 leading-relaxed">
                {venue.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-2xl border border-stone-100 p-6">
              <h2 className="text-lg font-semibold text-stone-900 mb-4">
                Amenities to Confirm
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

          <aside className="lg:col-span-1 space-y-5">
            <section className="bg-white rounded-2xl border border-stone-200 p-6">
              <h2 className="text-xl font-semibold">{price.label}</h2>
              {price.amount !== null && <p className="text-2xl font-bold mt-2">${price.amount} / person</p>}
              <p className="text-sm text-stone-600 mt-3">{price.note}</p>
              {price.source && <p className="text-sm mt-3"><a href={price.source} target="_blank" rel="noopener noreferrer" className="text-rose-700 underline">Official pricing policy</a> · checked {price.checked}. This source does not verify other listing fields.</p>}
            </section>
            <section className="bg-white rounded-2xl border p-6"><InquiryForm venueId={venue.id} enabled={inquiriesEnabled()}/></section>
            <Link href="/honeymoon" className="block text-rose-700 underline">Plan a wine country honeymoon →</Link>
          </aside>
        </div>
      </div>
    </main>
  );
}
