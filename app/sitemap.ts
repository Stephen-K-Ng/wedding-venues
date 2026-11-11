import type { MetadataRoute } from 'next';
import { VENUES } from '@/lib/venues';
export default function sitemap(): MetadataRoute.Sitemap {
  return ['/', '/venues', '/honeymoon', '/list-your-venue', '/privacy', ...VENUES.map(v => `/venues/${v.id}`)].map(path => ({url:`https://wedding-venues-one.vercel.app${path}`}));
}
