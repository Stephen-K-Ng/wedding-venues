"use client";

import { pricingFor } from "@/lib/evidence";
import { useState, useMemo } from "react";
import VenueCard from "@/components/VenueCard";
import FilterPanel from "@/components/FilterPanel";
import SearchBar from "@/components/SearchBar";
import { VENUES, filterVenues } from "@/lib/venues";
import { SearchFilters, VenueStyle } from "@/lib/types";

type SortOption = "name" | "price-asc" | "price-desc";

interface VenuesClientProps {
  initialQuery: string;
  initialStyle: string;
}

export default function VenuesClient({
  initialQuery,
  initialStyle,
}: VenuesClientProps) {
  const [filters, setFilters] = useState<SearchFilters>({
    query: initialQuery,
    city: "",
    state: "",
    capacityMin: null,
    capacityMax: null,
    priceRanges: [],
    styles: initialStyle ? [initialStyle as VenueStyle] : [],
  });

  const [sort, setSort] = useState<SortOption>("name");
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const results = useMemo(() => {
    const filtered = filterVenues(VENUES, filters);
    return filtered.sort((a, b) => {
      if (sort !== "name") {
        if (pricingFor(a).amount === null) return 1;
        if (pricingFor(b).amount === null) return -1;
      }
      switch (sort) {
        case "name":
          return a.name.localeCompare(b.name);
        case "price-asc":
          return a.pricePerPerson - b.pricePerPerson;
        case "price-desc":
          return b.pricePerPerson - a.pricePerPerson;
        default:
          return 0;
      }
    });
  }, [filters, sort]);

  const activeFilterCount = [
    filters.priceRanges.length > 0,
    filters.styles.length > 0,
    filters.capacityMin !== null || filters.capacityMax !== null,
    !!filters.city,
    !!filters.state,
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Search header */}
      <div className="bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-3 items-center">
            <div className="flex-1 max-w-xl">
              <SearchBar initialQuery={filters.query} />
            </div>
            {/* Mobile filter toggle */}
            <button
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="lg:hidden flex items-center gap-2 border border-stone-200 rounded-full px-4 py-2 text-sm font-medium text-stone-600 hover:border-rose-300 hover:text-rose-600 transition-colors relative"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
              </svg>
              Filters
              {activeFilterCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-rose-500 text-white text-xs rounded-full flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Mobile filters drawer */}
        {showMobileFilters && (
          <div className="lg:hidden mb-4">
            <FilterPanel
              filters={filters}
              onChange={setFilters}
              resultCount={results.length}
            />
          </div>
        )}

        <div className="flex gap-6">
          {/* Desktop sidebar */}
          <div className="hidden lg:block">
            <FilterPanel
              filters={filters}
              onChange={setFilters}
              resultCount={results.length}
            />
          </div>

          {/* Results */}
          <div className="flex-1 min-w-0">
            <p className="text-sm text-amber-900 bg-amber-50 p-3 rounded-xl mb-4">Early directory: prices and capacities are unverified prototype estimates. Photos are illustrative. Confirm wedding eligibility and availability directly; no live booking is offered.</p>
            {/* Results header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-lg font-semibold text-stone-900">
                  {results.length} Venues Found
                </h1>
                {filters.query && (
                  <p className="text-sm text-stone-500">
                    Results for &ldquo;{filters.query}&rdquo;
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm text-stone-500 hidden sm:block">
                  Sort by:
                </label>
                <select
                  aria-label="Sort venues"
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortOption)}
                  className="text-sm border border-stone-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-rose-300 text-stone-700"
                >
                  <option value="name">Venue name</option>
                  <option value="price-asc">Prototype estimate: Low to High</option>
                  <option value="price-desc">Prototype estimate: High to Low</option>
                </select>
              </div>
            </div>

            {/* Active filter tags */}
            {(filters.styles.length > 0 || filters.priceRanges.length > 0) && (
              <div className="flex flex-wrap gap-2 mb-4">
                {filters.styles.map((style) => (
                  <span
                    key={style}
                    className="inline-flex items-center gap-1.5 bg-rose-50 text-rose-700 text-xs font-medium px-3 py-1 rounded-full border border-rose-100"
                  >
                    {style}
                    <button
                      onClick={() =>
                        setFilters((f) => ({
                          ...f,
                          styles: f.styles.filter((s) => s !== style),
                        }))
                      }
                      className="hover:text-rose-900"
                    >
                      ×
                    </button>
                  </span>
                ))}
                {filters.priceRanges.map((pr) => (
                  <span
                    key={pr}
                    className="inline-flex items-center gap-1.5 bg-rose-50 text-rose-700 text-xs font-medium px-3 py-1 rounded-full border border-rose-100"
                  >
                    {pr}
                    <button
                      onClick={() =>
                        setFilters((f) => ({
                          ...f,
                          priceRanges: f.priceRanges.filter((p) => p !== pr),
                        }))
                      }
                      className="hover:text-rose-900"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            )}

            {/* Venue grid */}
            {results.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {results.map((venue) => (
                  <VenueCard key={venue.id} venue={venue} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-lg font-semibold text-stone-700 mb-2">
                  No venues found
                </h3>
                <p className="text-stone-500 text-sm">
                  Try adjusting your filters or search in a different location.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
