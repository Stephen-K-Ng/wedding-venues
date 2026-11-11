import { Metadata } from "next";
import VenuesClient from "./VenuesClient";

export const metadata: Metadata = {
  title: "Napa & Sonoma Wedding Venues – VenueFind",
  alternates: { canonical: "/venues" },
  description:
    "Search and filter wedding venues by location, capacity, price range, and style.",
};

interface PageProps {
  searchParams: Promise<{ q?: string; style?: string }>;
}

export default async function VenuesPage({ searchParams }: PageProps) {
  const params = await searchParams;
  return (
    <VenuesClient
      key={`${params.q ?? ""}:${params.style ?? ""}`}
      initialQuery={params.q ?? ""}
      initialStyle={params.style ?? ""}
    />
  );
}
