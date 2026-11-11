import { Venue } from './types';

export function pricingFor(venue: Venue) {
  if (venue.id === '1') return {
    label: 'Quote required', amount: null,
    note: 'The venue says pricing varies by date and a room block is required. Request a dated, itemized quote.',
    source: 'https://auberge.com/stanly-ranch/weddings-faq/',
    checked: '2026-11-10',
  };
  return {
    label: 'Unverified prototype estimate', amount: venue.pricePerPerson,
    note: 'Inherited demo value; no supporting price source. Not a venue quote or total wedding budget. Site fees, food, drinks, tax, service and lodging may be additional. Confirm all details directly.',
    source: null, checked: null,
  };
}
