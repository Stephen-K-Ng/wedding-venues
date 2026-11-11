import InquiryForm from '@/components/InquiryForm';
import { inquiriesEnabled } from '@/lib/inquiry-config';
export const metadata = {title: 'Submit a Wine Country Venue – VenueFind', description: 'Suggest a Napa or Sonoma wedding venue for editorial review.', alternates:{canonical:'/list-your-venue'}};
export default function Page() {
  return <main className="max-w-2xl mx-auto px-4 py-12"><h1 className="text-3xl font-bold mb-4">List your wine country venue</h1><p className="mb-8 text-stone-600">This early directory is accepting suggestions when inquiry storage is available. Listings require review; submission does not guarantee publication. An owner dashboard, reviews and booking service are not available yet.</p><div className="bg-white rounded-2xl border p-6"><InquiryForm enabled={inquiriesEnabled()}/></div></main>;
}
