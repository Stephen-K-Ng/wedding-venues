"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface SearchBarProps {
  initialQuery?: string;
  large?: boolean;
}

export default function SearchBar({
  initialQuery = "",
  large = false,
}: SearchBarProps) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    router.push(`/venues?${params.toString()}`);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className={`flex items-center bg-white rounded-full shadow-lg border border-stone-100 overflow-hidden ${
          large ? "h-14 text-base" : "h-11 text-sm"
        }`}
      >
        <div className="pl-5 pr-2 text-stone-400">
          <svg
            className={large ? "w-5 h-5" : "w-4 h-4"}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by city, style, or venue name..."
          className={`flex-1 bg-transparent outline-none text-stone-800 placeholder-stone-300 ${
            large ? "text-base" : "text-sm"
          }`}
        />
        <button
          type="submit"
          className={`bg-rose-600 text-white font-semibold rounded-full hover:bg-rose-700 transition-colors mr-1 ${
            large ? "px-6 py-2.5 text-base" : "px-4 py-2 text-sm"
          }`}
        >
          Search
        </button>
      </div>
    </form>
  );
}
