import { Metadata } from "next";
import VenuesClient from "./VenuesClient";

export const metadata: Metadata = {
  title: "Browse Wedding Venues – VenueFind",
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
      initialQuery={params.q ?? ""}
      initialStyle={params.style ?? ""}
    />
  );
}
