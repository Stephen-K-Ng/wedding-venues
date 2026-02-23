import { Venue, SearchFilters } from "./types";

export const VENUES: Venue[] = [
  {
    id: "1",
    name: "Willow Creek Barn",
    description:
      "A stunning restored 1890s barn nestled among weeping willows, offering a magical rustic setting for your perfect wedding day. Features exposed beams, string lights, and a wraparound porch.",
    location: {
      city: "Napa",
      state: "CA",
      address: "4821 Silverado Trail, Napa, CA 94558",
      lat: 38.3468,
      lng: -122.3464,
    },
    capacity: { min: 50, max: 250 },
    pricePerPerson: 120,
    priceRange: "$$$",
    style: "Barn & Rustic",
    rating: 4.8,
    reviewCount: 142,
    images: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=800",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800",
    ],
    amenities: [
      "Catering Kitchen",
      "Bridal Suite",
      "Outdoor Ceremony Space",
      "Parking",
      "Wifi",
    ],
    featured: true,
    available: true,
  },
  {
    id: "2",
    name: "Oceanview Terrace",
    description:
      "Perched dramatically above the Pacific, this breathtaking waterfront venue offers panoramic ocean views, a private beach access path, and a sophisticated open-air terrace for ceremonies and receptions.",
    location: {
      city: "Malibu",
      state: "CA",
      address: "28000 Pacific Coast Hwy, Malibu, CA 90265",
      lat: 34.0194,
      lng: -118.8017,
    },
    capacity: { min: 30, max: 150 },
    pricePerPerson: 280,
    priceRange: "$$$$",
    style: "Beach & Waterfront",
    rating: 4.9,
    reviewCount: 89,
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
      "https://images.unsplash.com/photo-1439405326854-014607f694d7?w=800",
    ],
    amenities: [
      "Full Bar",
      "Catering",
      "Beach Access",
      "Valet Parking",
      "Bridal Suite",
      "Photo Booth",
    ],
    featured: true,
    available: true,
  },
  {
    id: "3",
    name: "The Grand Ballroom at Palmer House",
    description:
      "Step into old-world elegance at this historic downtown landmark. The grand ballroom features 20-foot ceilings with ornate plasterwork, crystal chandeliers, and floor-to-ceiling windows overlooking the city skyline.",
    location: {
      city: "Chicago",
      state: "IL",
      address: "17 E Monroe St, Chicago, IL 60603",
      lat: 41.8819,
      lng: -87.6278,
    },
    capacity: { min: 100, max: 800 },
    pricePerPerson: 175,
    priceRange: "$$$$",
    style: "Ballroom & Formal",
    rating: 4.7,
    reviewCount: 213,
    images: [
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800",
    ],
    amenities: [
      "In-House Catering",
      "Bar Service",
      "Valet",
      "Bridal Suite",
      "Groom's Suite",
      "AV Equipment",
      "Dance Floor",
    ],
    featured: true,
    available: true,
  },
  {
    id: "4",
    name: "Rosewood Gardens",
    description:
      "A lush botanical garden estate spanning 12 acres of manicured grounds, rose arbors, and cascading fountains. The centerpiece pavilion can be opened to the gardens for a seamless indoor-outdoor experience.",
    location: {
      city: "Austin",
      state: "TX",
      address: "1100 Barton Springs Rd, Austin, TX 78704",
      lat: 30.2537,
      lng: -97.7742,
    },
    capacity: { min: 75, max: 400 },
    pricePerPerson: 145,
    priceRange: "$$$",
    style: "Garden & Outdoor",
    rating: 4.6,
    reviewCount: 178,
    images: [
      "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800",
      "https://images.unsplash.com/photo-1487530811015-780540e61a89?w=800",
    ],
    amenities: [
      "Garden Ceremony",
      "Catering Kitchen",
      "Parking",
      "Climate Control",
      "Bridal Suite",
      "Rehearsal Space",
    ],
    featured: false,
    available: true,
  },
  {
    id: "5",
    name: "The Foundry Loft",
    description:
      "A converted 1920s iron foundry with soaring ceilings, exposed brick walls, and original industrial machinery as stunning decor elements. The 6,000 sq ft open floor plan is a blank canvas for your vision.",
    location: {
      city: "Brooklyn",
      state: "NY",
      address: "42 Greenpoint Ave, Brooklyn, NY 11222",
      lat: 40.7282,
      lng: -73.9513,
    },
    capacity: { min: 60, max: 300 },
    pricePerPerson: 195,
    priceRange: "$$$",
    style: "Industrial & Modern",
    rating: 4.5,
    reviewCount: 94,
    images: [
      "https://images.unsplash.com/photo-1543328126-fe76d5f44a8c?w=800",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800",
    ],
    amenities: [
      "Rooftop Access",
      "Full Bar",
      "Catering Options",
      "Green Room",
      "DJ Booth",
      "LED Lighting",
    ],
    featured: false,
    available: true,
  },
  {
    id: "6",
    name: "Magnolia Plantation Estate",
    description:
      "A living piece of American history, this antebellum estate offers centuries-old live oak trees draped in Spanish moss, a restored plantation house, and formal gardens for an unforgettable Southern wedding.",
    location: {
      city: "Charleston",
      state: "SC",
      address: "3550 Ashley River Rd, Charleston, SC 29414",
      lat: 32.8132,
      lng: -80.0532,
    },
    capacity: { min: 50, max: 200 },
    pricePerPerson: 165,
    priceRange: "$$$",
    style: "Historic & Estate",
    rating: 4.9,
    reviewCount: 267,
    images: [
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800",
      "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800",
    ],
    amenities: [
      "Estate Grounds",
      "Historic Manor",
      "Catering",
      "Parking",
      "Bridal Cottage",
      "Garden Access",
    ],
    featured: false,
    available: true,
  },
  {
    id: "7",
    name: "Silver Oaks Winery",
    description:
      "Exchange vows among rolling vineyard hills at this boutique Sonoma winery. The barrel room provides an intimate reception space while the vineyard terrace offers breathtaking sunset ceremony views.",
    location: {
      city: "Healdsburg",
      state: "CA",
      address: "24625 Chianti Rd, Healdsburg, CA 95448",
      lat: 38.5939,
      lng: -122.8458,
    },
    capacity: { min: 40, max: 180 },
    pricePerPerson: 210,
    priceRange: "$$$$",
    style: "Vineyard & Winery",
    rating: 4.7,
    reviewCount: 156,
    images: [
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800",
      "https://images.unsplash.com/photo-1470158499416-75be9aa0c4db?w=800",
    ],
    amenities: [
      "Wine Tasting",
      "Barrel Room",
      "Vineyard Tours",
      "Catering",
      "Parking",
      "Bridal Suite",
    ],
    featured: true,
    available: true,
  },
  {
    id: "8",
    name: "Skyline Rooftop at The Meridian",
    description:
      "Host your celebration 30 floors above the city at this ultra-modern rooftop venue. Floor-to-ceiling glass panels wrap around a sleek interior space that opens to an expansive outdoor deck.",
    location: {
      city: "Seattle",
      state: "WA",
      address: "900 Pine St, Seattle, WA 98101",
      lat: 47.6145,
      lng: -122.3312,
    },
    capacity: { min: 40, max: 200 },
    pricePerPerson: 230,
    priceRange: "$$$$",
    style: "Rooftop & Urban",
    rating: 4.6,
    reviewCount: 71,
    images: [
      "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=800",
      "https://images.unsplash.com/photo-1532939163844-547f958e4b91?w=800",
    ],
    amenities: [
      "Panoramic Views",
      "Full Bar",
      "Catering",
      "Valet",
      "Climate Control",
      "Sound System",
    ],
    featured: false,
    available: true,
  },
  {
    id: "9",
    name: "Sunflower Meadow Farm",
    description:
      "A working lavender and sunflower farm transformed into a whimsical wedding destination. The ceremony field bursts with seasonal blooms while the renovated farmhouse provides a charming reception space.",
    location: {
      city: "Denver",
      state: "CO",
      address: "15200 E Quincy Ave, Denver, CO 80015",
      lat: 39.6425,
      lng: -104.7862,
    },
    capacity: { min: 30, max: 150 },
    pricePerPerson: 95,
    priceRange: "$$",
    style: "Garden & Outdoor",
    rating: 4.4,
    reviewCount: 88,
    images: [
      "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800",
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800",
    ],
    amenities: [
      "Farm Tours",
      "Outdoor Ceremony",
      "Catering Kitchen",
      "Parking",
      "Glamping Options",
    ],
    featured: false,
    available: true,
  },
  {
    id: "10",
    name: "Harbor View Pavilion",
    description:
      "Situated on the waterfront with stunning views of the harbor, this modern glass pavilion combines architecture and nature. The venue features a retractable roof for year-round celebrations.",
    location: {
      city: "Boston",
      state: "MA",
      address: "200 Seaport Blvd, Boston, MA 02210",
      lat: 42.352,
      lng: -71.0442,
    },
    capacity: { min: 80, max: 350 },
    pricePerPerson: 185,
    priceRange: "$$$",
    style: "Beach & Waterfront",
    rating: 4.5,
    reviewCount: 103,
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800",
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800",
    ],
    amenities: [
      "Harbor Views",
      "Retractable Roof",
      "Full Catering",
      "Bar Service",
      "Parking",
      "Bridal Suite",
    ],
    featured: false,
    available: true,
  },
  {
    id: "11",
    name: "The White Dove Chapel & Gardens",
    description:
      "A romantic chapel venue surrounded by English cottage gardens, stone pathways, and a reflecting pond. The chapel accommodates intimate ceremonies while the gardens host grand receptions.",
    location: {
      city: "Nashville",
      state: "TN",
      address: "4306 Harding Pike, Nashville, TN 37205",
      lat: 36.1059,
      lng: -86.8671,
    },
    capacity: { min: 20, max: 120 },
    pricePerPerson: 85,
    priceRange: "$$",
    style: "Garden & Outdoor",
    rating: 4.7,
    reviewCount: 195,
    images: [
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800",
      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=800",
    ],
    amenities: [
      "Chapel",
      "Garden Ceremony",
      "Parking",
      "Getting Ready Rooms",
      "Catering Allowed",
    ],
    featured: false,
    available: true,
  },
  {
    id: "12",
    name: "The Stone Mill at Brandywine",
    description:
      "A beautifully preserved 18th-century grist mill set along a babbling creek. Stone walls, wide-plank floors, and a working waterwheel create an unparalleled historic atmosphere.",
    location: {
      city: "Philadelphia",
      state: "PA",
      address: "1701 Brandywine Creek Rd, Philadelphia, PA 19103",
      lat: 39.9526,
      lng: -75.1652,
    },
    capacity: { min: 40, max: 175 },
    pricePerPerson: 135,
    priceRange: "$$$",
    style: "Historic & Estate",
    rating: 4.8,
    reviewCount: 122,
    images: [
      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=800",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800",
    ],
    amenities: [
      "Historic Mill",
      "Creek Views",
      "Outdoor Space",
      "Catering Kitchen",
      "Parking",
    ],
    featured: false,
    available: true,
  },
  {
    id: "13",
    name: "Mesa Verde Ranch",
    description:
      "A stunning high-desert ranch with red rock canyon views, turquoise skies, and wide-open spaces. Includes a renovated adobe hacienda, a cactus garden ceremony area, and a covered fiesta patio.",
    location: {
      city: "Sedona",
      state: "AZ",
      address: "100 Schnebly Hill Rd, Sedona, AZ 86336",
      lat: 34.8697,
      lng: -111.761,
    },
    capacity: { min: 30, max: 200 },
    pricePerPerson: 155,
    priceRange: "$$$",
    style: "Barn & Rustic",
    rating: 4.9,
    reviewCount: 143,
    images: [
      "https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?w=800",
      "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=800",
    ],
    amenities: [
      "Red Rock Views",
      "Adobe Hacienda",
      "Outdoor Ceremony",
      "Catering",
      "Parking",
      "Lodging Referrals",
    ],
    featured: false,
    available: true,
  },
  {
    id: "14",
    name: "Lakefront Manor",
    description:
      "An elegant lakeside manor with private docking, a boat house that doubles as a bar, and sweeping lawn that slopes to the water's edge. Perfect for summer weddings with water activities.",
    location: {
      city: "Lake Geneva",
      state: "WI",
      address: "1 Geneva National Ave, Lake Geneva, WI 53147",
      lat: 42.5914,
      lng: -88.4331,
    },
    capacity: { min: 60, max: 280 },
    pricePerPerson: 160,
    priceRange: "$$$",
    style: "Beach & Waterfront",
    rating: 4.6,
    reviewCount: 87,
    images: [
      "https://images.unsplash.com/photo-1439405326854-014607f694d7?w=800",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    ],
    amenities: [
      "Private Dock",
      "Boat House Bar",
      "Lawn Ceremony",
      "Catering",
      "Parking",
      "Water Access",
    ],
    featured: false,
    available: true,
  },
  {
    id: "15",
    name: "Cobblestone Courtyard",
    description:
      "Tucked in the French Quarter, this historic Creole courtyard venue offers wrought-iron balconies, a centuries-old magnolia tree, and a private fountain courtyard for an authentically New Orleans celebration.",
    location: {
      city: "New Orleans",
      state: "LA",
      address: "714 Bourbon St, New Orleans, LA 70116",
      lat: 29.9584,
      lng: -90.0644,
    },
    capacity: { min: 25, max: 100 },
    pricePerPerson: 105,
    priceRange: "$$",
    style: "Historic & Estate",
    rating: 4.8,
    reviewCount: 219,
    images: [
      "https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800",
    ],
    amenities: [
      "Courtyard",
      "Jazz Band Access",
      "Full Bar",
      "Catering",
      "Balcony Views",
    ],
    featured: false,
    available: true,
  },
  {
    id: "16",
    name: "Alpine Sky Lodge",
    description:
      "A luxury mountain lodge at 9,000 feet with panoramic Rocky Mountain views, a grand stone fireplace, and a wraparound deck for ceremonies in the clouds. Winter and summer packages available.",
    location: {
      city: "Aspen",
      state: "CO",
      address: "0100 E Dean St, Aspen, CO 81611",
      lat: 39.1911,
      lng: -106.8175,
    },
    capacity: { min: 20, max: 120 },
    pricePerPerson: 320,
    priceRange: "$$$$",
    style: "Barn & Rustic",
    rating: 4.9,
    reviewCount: 76,
    images: [
      "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=800",
      "https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?w=800",
    ],
    amenities: [
      "Mountain Views",
      "Stone Fireplace",
      "Outdoor Deck",
      "Luxury Catering",
      "Ski Access",
      "Lodging",
    ],
    featured: true,
    available: true,
  },
];

export function filterVenues(venues: Venue[], filters: SearchFilters): Venue[] {
  return venues.filter((venue) => {
    // Text search across name, city, state
    if (filters.query) {
      const q = filters.query.toLowerCase();
      const matchesText =
        venue.name.toLowerCase().includes(q) ||
        venue.location.city.toLowerCase().includes(q) ||
        venue.location.state.toLowerCase().includes(q) ||
        venue.description.toLowerCase().includes(q) ||
        venue.style.toLowerCase().includes(q);
      if (!matchesText) return false;
    }

    // City filter
    if (
      filters.city &&
      !venue.location.city.toLowerCase().includes(filters.city.toLowerCase())
    ) {
      return false;
    }

    // State filter
    if (
      filters.state &&
      venue.location.state.toLowerCase() !== filters.state.toLowerCase()
    ) {
      return false;
    }

    // Capacity filter
    if (filters.capacityMin !== null && venue.capacity.max < filters.capacityMin) {
      return false;
    }
    if (filters.capacityMax !== null && venue.capacity.min > filters.capacityMax) {
      return false;
    }

    // Price range filter
    if (
      filters.priceRanges.length > 0 &&
      !filters.priceRanges.includes(venue.priceRange)
    ) {
      return false;
    }

    // Style filter
    if (
      filters.styles.length > 0 &&
      !filters.styles.includes(venue.style)
    ) {
      return false;
    }

    return true;
  });
}

export function getVenueById(id: string): Venue | undefined {
  return VENUES.find((v) => v.id === id);
}

export const US_STATES = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",
];
