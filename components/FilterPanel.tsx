"use client";

import { SearchFilters, VenueStyle, PriceRange } from "@/lib/types";

const STYLES: VenueStyle[] = [
  "Barn & Rustic",
  "Garden & Outdoor",
  "Ballroom & Formal",
  "Beach & Waterfront",
  "Industrial & Modern",
  "Historic & Estate",
  "Vineyard & Winery",
  "Rooftop & Urban",
];

const PRICE_RANGES: { value: PriceRange; label: string }[] = [
  { value: "$", label: "$ Under $100/pp" },
  { value: "$$", label: "$$ $100–$150/pp" },
  { value: "$$$", label: "$$$ $150–$200/pp" },
  { value: "$$$$", label: "$$$$ $200+/pp" },
];

const CAPACITY_OPTIONS = [
  { label: "Any", min: null, max: null },
  { label: "Intimate (< 50)", min: null, max: 50 },
  { label: "Small (50–100)", min: 50, max: 100 },
  { label: "Medium (100–200)", min: 100, max: 200 },
  { label: "Large (200–400)", min: 200, max: 400 },
  { label: "Grand (400+)", min: 400, max: null },
];

interface FilterPanelProps {
  filters: SearchFilters;
  onChange: (filters: SearchFilters) => void;
  resultCount: number;
}

export default function FilterPanel({
  filters,
  onChange,
  resultCount,
}: FilterPanelProps) {
  function togglePriceRange(pr: PriceRange) {
    const updated = filters.priceRanges.includes(pr)
      ? filters.priceRanges.filter((p) => p !== pr)
      : [...filters.priceRanges, pr];
    onChange({ ...filters, priceRanges: updated });
  }

  function toggleStyle(style: VenueStyle) {
    const updated = filters.styles.includes(style)
      ? filters.styles.filter((s) => s !== style)
      : [...filters.styles, style];
    onChange({ ...filters, styles: updated });
  }

  function setCapacity(min: number | null, max: number | null) {
    onChange({ ...filters, capacityMin: min, capacityMax: max });
  }

  function clearAll() {
    onChange({
      query: filters.query,
      city: "",
      state: "",
      capacityMin: null,
      capacityMax: null,
      priceRanges: [],
      styles: [],
    });
  }

  const hasActiveFilters =
    filters.priceRanges.length > 0 ||
    filters.styles.length > 0 ||
    filters.capacityMin !== null ||
    filters.capacityMax !== null ||
    filters.city ||
    filters.state;

  return (
    <aside className="w-72 shrink-0">
      <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-5 sticky top-20">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-semibold text-stone-900">Filters</h2>
          <div className="flex items-center gap-3">
            <span className="text-sm text-stone-400">{resultCount} venues</span>
            {hasActiveFilters && (
              <button
                onClick={clearAll}
                className="text-xs text-rose-600 hover:text-rose-700 font-medium"
              >
                Clear all
              </button>
            )}
          </div>
        </div>

        {/* Location */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-stone-700 mb-2.5">
            Location
          </h3>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="City"
              value={filters.city}
              onChange={(e) => onChange({ ...filters, city: e.target.value })}
              className="w-full text-sm border border-stone-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent placeholder-stone-300"
            />
            <select
              value={filters.state}
              onChange={(e) => onChange({ ...filters, state: e.target.value })}
              className="w-full text-sm border border-stone-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent text-stone-600"
            >
              <option value="">Any State</option>
              {[
                "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN",
                "IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV",
                "NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN",
                "TX","UT","VT","VA","WA","WV","WI","WY",
              ].map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-stone-700 mb-2.5">
            Price Range
          </h3>
          <div className="space-y-1.5">
            {PRICE_RANGES.map(({ value, label }) => (
              <label
                key={value}
                className="flex items-center gap-2.5 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={filters.priceRanges.includes(value)}
                  onChange={() => togglePriceRange(value)}
                  className="w-4 h-4 rounded border-stone-300 text-rose-500 focus:ring-rose-400 cursor-pointer"
                />
                <span className="text-sm text-stone-600 group-hover:text-stone-900 transition-colors">
                  {label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Capacity */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-stone-700 mb-2.5">
            Guest Capacity
          </h3>
          <div className="space-y-1.5">
            {CAPACITY_OPTIONS.map(({ label, min, max }) => {
              const isSelected =
                filters.capacityMin === min && filters.capacityMax === max;
              return (
                <label
                  key={label}
                  className="flex items-center gap-2.5 cursor-pointer group"
                >
                  <input
                    type="radio"
                    name="capacity"
                    checked={isSelected}
                    onChange={() => setCapacity(min, max)}
                    className="w-4 h-4 border-stone-300 text-rose-500 focus:ring-rose-400 cursor-pointer"
                  />
                  <span className="text-sm text-stone-600 group-hover:text-stone-900 transition-colors">
                    {label}
                  </span>
                </label>
              );
            })}
          </div>
        </div>

        {/* Venue Style */}
        <div>
          <h3 className="text-sm font-semibold text-stone-700 mb-2.5">
            Venue Style
          </h3>
          <div className="space-y-1.5">
            {STYLES.map((style) => (
              <label
                key={style}
                className="flex items-center gap-2.5 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={filters.styles.includes(style)}
                  onChange={() => toggleStyle(style)}
                  className="w-4 h-4 rounded border-stone-300 text-rose-500 focus:ring-rose-400 cursor-pointer"
                />
                <span className="text-sm text-stone-600 group-hover:text-stone-900 transition-colors">
                  {style}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
