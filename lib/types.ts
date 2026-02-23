export type VenueStyle =
  | "Barn & Rustic"
  | "Garden & Outdoor"
  | "Ballroom & Formal"
  | "Beach & Waterfront"
  | "Industrial & Modern"
  | "Historic & Estate"
  | "Vineyard & Winery"
  | "Rooftop & Urban";

export type PriceRange = "$" | "$$" | "$$$" | "$$$$";

export interface Venue {
  id: string;
  name: string;
  description: string;
  location: {
    city: string;
    state: string;
    address: string;
    lat: number;
    lng: number;
  };
  capacity: {
    min: number;
    max: number;
  };
  pricePerPerson: number; // USD
  priceRange: PriceRange;
  style: VenueStyle;
  rating: number; // 1-5
  reviewCount: number;
  images: string[];
  amenities: string[];
  featured: boolean;
  available: boolean;
}

export interface SearchFilters {
  query: string;
  city: string;
  state: string;
  capacityMin: number | null;
  capacityMax: number | null;
  priceRanges: PriceRange[];
  styles: VenueStyle[];
}
