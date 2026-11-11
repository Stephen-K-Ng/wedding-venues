import { createHmac } from 'node:crypto';
import { validateInquiry } from '@/lib/inquiries';
import { getVenueById } from '@/lib/venues';

export const runtime = 'nodejs';
const reply = (status: number, message: string) => Response.json({ message }, { status, headers: { 'Cache-Control': 'no-store' } });
export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  try {
    if (!origin || new URL(origin).host !== request.headers.get('host')) return reply(403, 'Please submit from this website.');
  } catch { return reply(403, 'Please submit from this website.'); }
  if (!request.headers.get('content-type')?.startsWith('application/json')) return reply(415, 'JSON required.');
  // Bound the streamed body even when Content-Length is missing or inaccurate.
  let raw = '';
  try {
    const reader = request.body?.getReader();
    if (!reader) return reply(400, 'Missing request.');
    const chunks: Uint8Array[] = []; let size = 0;
    while (true) {
      const { done, value } = await reader.read(); if (done) break;
      size += value.byteLength;
      if (size > 12000) { await reader.cancel(); return reply(413, 'Message too large.'); }
      chunks.push(value);
    }
    raw = Buffer.concat(chunks).toString('utf8');
  } catch { return reply(400, 'Unable to read inquiry.'); }
  let input;
  try { input = validateInquiry(JSON.parse(raw)); } catch { return reply(400, 'Invalid inquiry.'); }
  if (!input) return reply(400, 'Check your name, email, message, date, guest count and consent.');
  if (input.kind === 'couple') {
    const venue = getVenueById(input.venueId);
    if (!venue) return reply(400, 'Venue not found.');
    input.venueName = venue.name;
  }
  const url = process.env.SUPABASE_URL, key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const secret = process.env.INQUIRY_HASH_SECRET;
  if (!url || !key || !secret || !process.env.INQUIRY_SUPPORT_EMAIL || process.env.INQUIRIES_ENABLED !== 'true') return reply(503, 'Online inquiries are not available yet. Nothing has been saved.');
  // Only a keyed digest is used for the persistent per-email rate limit.
  const digest = createHmac('sha256', secret).update(input.email).digest('hex');
  try {
    const response = await fetch(`${url}/rest/v1/rpc/submit_directory_inquiry`, {
      method: 'POST', headers: { apikey: key, Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ payload: input, email_digest: digest }), signal: AbortSignal.timeout(8000), cache: 'no-store',
    });
    if (!response.ok) return reply(503, 'Unable to save your inquiry. Please try again later.');
    const saved = await response.json();
    if (saved === 'limited') return reply(429, 'Too many inquiries. Please try again in an hour.');
    if (saved !== 'saved') return reply(503, 'Unable to confirm your inquiry was saved.');
    return reply(201, 'Saved for the directory operator to review. This has not been sent to the venue and is not a booking.');
  } catch { return reply(503, 'Unable to confirm saving. Please try again later.'); }
}
