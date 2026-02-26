import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "List Your Venue – VenueFind",
  description:
    "Partner with VenueFind to showcase your wedding venue to thousands of couples searching for their perfect space.",
};

const BENEFITS = [
  {
    icon: "👀",
    title: "Reach More Couples",
    description:
      "Get discovered by thousands of engaged couples actively searching for venues in your area.",
  },
  {
    icon: "📊",
    title: "Detailed Analytics",
    description:
      "Track profile views, inquiries, and bookings with our venue owner dashboard.",
  },
  {
    icon: "⭐",
    title: "Verified Reviews",
    description:
      "Build trust with authentic reviews from real couples who celebrated at your venue.",
  },
  {
    icon: "📸",
    title: "Rich Photo Galleries",
    description:
      "Showcase your space with unlimited photos that highlight your venue's unique character.",
  },
];

export default function ListYourVenuePage() {
  return (
    <main className="bg-stone-50 min-h-screen">
      {/* Hero */}
      <section className="bg-rose-600 py-20 px-4 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          List Your Venue on VenueFind
        </h1>
        <p className="text-rose-100 text-lg max-w-xl mx-auto mb-8">
          Join 500+ verified venues and connect with couples searching for their
          perfect wedding space.
        </p>
        <a
          href="#inquiry-form"
          className="inline-block bg-white text-rose-600 font-semibold px-8 py-3 rounded-full hover:bg-rose-50 transition-colors"
        >
          Get Started
        </a>
      </section>

      {/* Benefits */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-stone-900 text-center mb-10">
          Why list with VenueFind?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {BENEFITS.map(({ icon, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-2xl border border-stone-100 p-6 shadow-sm"
            >
              <div className="text-3xl mb-3">{icon}</div>
              <h3 className="font-semibold text-stone-900 text-lg mb-1">
                {title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Form */}
      <section
        id="inquiry-form"
        className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-20"
      >
        <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-8">
          <h2 className="text-xl font-bold text-stone-900 mb-1">
            Submit Your Venue
          </h2>
          <p className="text-stone-500 text-sm mb-6">
            Fill out the form below and our team will be in touch within 2
            business days.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-500 mb-1 uppercase tracking-wide">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Jane"
                  className="w-full border border-stone-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 text-stone-700 placeholder-stone-300"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-500 mb-1 uppercase tracking-wide">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Smith"
                  className="w-full border border-stone-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 text-stone-700 placeholder-stone-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-500 mb-1 uppercase tracking-wide">
                Email Address
              </label>
              <input
                type="email"
                placeholder="jane@yourvenue.com"
                className="w-full border border-stone-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 text-stone-700 placeholder-stone-300"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-500 mb-1 uppercase tracking-wide">
                Venue Name
              </label>
              <input
                type="text"
                placeholder="The Rosewood Estate"
                className="w-full border border-stone-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 text-stone-700 placeholder-stone-300"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-500 mb-1 uppercase tracking-wide">
                  City
                </label>
                <input
                  type="text"
                  placeholder="Austin"
                  className="w-full border border-stone-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 text-stone-700 placeholder-stone-300"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-stone-500 mb-1 uppercase tracking-wide">
                  State
                </label>
                <input
                  type="text"
                  placeholder="TX"
                  maxLength={2}
                  className="w-full border border-stone-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 text-stone-700 placeholder-stone-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-500 mb-1 uppercase tracking-wide">
                Tell us about your venue
              </label>
              <textarea
                rows={4}
                placeholder="Describe your venue's style, capacity, and what makes it special..."
                className="w-full border border-stone-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 text-stone-700 placeholder-stone-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-rose-600 text-white font-semibold py-3 rounded-xl hover:bg-rose-700 transition-colors"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* Footer nav */}
      <div className="text-center pb-12">
        <Link
          href="/"
          className="text-sm text-stone-500 hover:text-rose-600 transition-colors"
        >
          ← Back to VenueFind
        </Link>
      </div>
    </main>
  );
}
