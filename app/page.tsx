import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import VenueCard from "@/components/VenueCard";
import { VENUES } from "@/lib/venues";

const FEATURED = VENUES.filter((v) => v.featured).slice(0, 4);

const STYLES = [
  { label: "Barn & Rustic", emoji: "🌾", href: "/venues?style=Barn+%26+Rustic" },
  { label: "Garden & Outdoor", emoji: "🌸", href: "/venues?style=Garden+%26+Outdoor" },
  { label: "Ballroom & Formal", emoji: "✨", href: "/venues?style=Ballroom+%26+Formal" },
  { label: "Beach & Waterfront", emoji: "🌊", href: "/venues?style=Beach+%26+Waterfront" },
  { label: "Historic & Estate", emoji: "🏛️", href: "/venues?style=Historic+%26+Estate" },
  { label: "Vineyard & Winery", emoji: "🍷", href: "/venues?style=Vineyard+%26+Winery" },
  { label: "Industrial & Modern", emoji: "🏗️", href: "/venues?style=Industrial+%26+Modern" },
  { label: "Rooftop & Urban", emoji: "🌆", href: "/venues?style=Rooftop+%26+Urban" },
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section
        className="relative bg-cover bg-center py-32 px-4"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1600')",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Find Your Perfect
            <br />
            <span className="text-rose-300">Wedding Venue</span>
          </h1>
          <p className="text-stone-200 text-lg mb-10">
            Explore Napa, Sonoma and nearby wine country venues. Compare planning estimates and confirm details directly.
          </p>
          <div className="max-w-2xl mx-auto">
            <SearchBar large />
          </div>
          <p className="text-stone-300 text-sm mt-4">
            {VENUES.length} initial listings · details awaiting verification · illustrative photos
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-rose-600 text-white">
        <div className="max-w-5xl mx-auto px-4 py-4 grid grid-cols-3 divide-x divide-rose-500">
          {[
            { value: String(VENUES.length), label: "Initial Listings" },
            { value: "Wine Country", label: "Our Focus" },
            { value: "MVP", label: "Early Preview" },
          ].map((stat) => (
            <div key={stat.label} className="text-center px-4">
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-rose-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Browse by Style */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl font-bold text-stone-900 mb-2">
          Browse by Venue Style
        </h2>
        <p className="text-stone-500 mb-7">
          What kind of wedding are you envisioning?
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {STYLES.map(({ label, emoji, href }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-3 bg-white border border-stone-100 rounded-xl px-4 py-3.5 hover:border-rose-200 hover:shadow-sm transition-all group"
            >
              <span className="text-2xl">{emoji}</span>
              <span className="text-sm font-medium text-stone-700 group-hover:text-rose-700 transition-colors">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Venues */}
      <section className="bg-stone-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-7">
            <div>
              <h2 className="text-2xl font-bold text-stone-900">
                Featured Venues
              </h2>
              <p className="text-stone-500">
                A starting point for your wine country shortlist
              </p>
            </div>
            <Link
              href="/venues"
              className="text-sm text-rose-600 font-medium hover:text-rose-700 hidden sm:block"
            >
              See all venues →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURED.map((venue) => (
              <VenueCard key={venue.id} venue={venue} />
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <Link
              href="/venues"
              className="inline-block bg-rose-600 text-white px-6 py-2.5 rounded-full font-medium hover:bg-rose-700 transition-colors"
            >
              See all venues
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-stone-900 text-center mb-2">
          How VenueFind Works
        </h2>
        <p className="text-stone-500 text-center mb-10">
          From search to &ldquo;I do&rdquo; in three simple steps
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Search & Filter",
              description:
                "Search by name, city or style. Filter by estimated capacity and budget band. Availability is not live.",
              icon: "🔍",
            },
            {
              step: "02",
              title: "Compare Venues",
              description:
                "Review clearly labeled prototype estimates. Photos are inspiration; listing details still need source verification.",
              icon: "⚖️",
            },
            {
              step: "03",
              title: "Confirm with the Venue",
              description:
                "Request an itemized quote and confirm wedding eligibility, date availability and contract terms directly with the venue.",
              icon: "💍",
            },
          ].map(({ step, title, description, icon }) => (
            <div key={step} className="text-center">
              <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                {icon}
              </div>
              <div className="text-rose-400 text-xs font-bold tracking-widest mb-1">
                STEP {step}
              </div>
              <h3 className="font-semibold text-stone-900 text-lg mb-2">
                {title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-rose-600 py-16">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-3">
            Ready to find your venue?
          </h2>
          <p className="text-rose-100 mb-7">
            Start a shortlist for your Napa or Sonoma celebration.
          </p>
          <Link
            href="/venues"
            className="inline-block bg-white text-rose-600 font-semibold px-8 py-3 rounded-full hover:bg-rose-50 transition-colors"
          >
            Browse All Venues
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xl">💍</span>
            <span className="text-white font-bold">VenueFind</span>
          </div>
          <p>&copy; {new Date().getFullYear()} VenueFind. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
