export type Inquiry = {
  kind: 'couple' | 'owner'; venueId: string; venueName: string;
  name: string; email: string; message: string; date: string; guests: number | null;
};
export function validateInquiry(value: unknown): Inquiry | null {
  if (!value || typeof value !== 'object') return null;
  const v = value as Record<string, unknown>;
  const str = (key: string, max: number) => typeof v[key] === 'string' && (v[key] as string).trim().length <= max ? (v[key] as string).trim() : '';
  const name = str('name', 100), email = str('email', 254).toLowerCase(), message = str('message', 2000);
  const venueId = str('venueId', 20), venueName = str('venueName', 200), date = str('date', 10);
  if (!['couple', 'owner'].includes(String(v.kind)) || v.consent !== true || !name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message || (v.website !== undefined && v.website !== '')) return null;
  if (date && (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(date)) || new Date(date).toISOString().slice(0,10) !== date || date < new Date().toISOString().slice(0,10))) return null;
  const guests = v.guests === '' || v.guests === undefined || v.guests === null ? null : v.guests;
  if (guests !== null && (typeof guests !== 'number' || !Number.isInteger(guests) || guests < 1 || guests > 10000)) return null;
  if ((v.kind === 'couple' && !venueId) || (v.kind === 'owner' && !venueName)) return null;
  return {kind: v.kind as Inquiry['kind'], venueId, venueName, name, email, message, date, guests};
}
