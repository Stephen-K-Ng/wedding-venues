'use client';
import { useState } from 'react';
import Link from 'next/link';
export default function InquiryForm({ venueId = '', enabled = false }: { venueId?: string; enabled?: boolean }) {
  const [state, setState] = useState<'idle' | 'sending' | 'saved' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const field = 'block w-full border border-stone-300 rounded-lg p-2 mt-1';
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); if (state === 'sending' || state === 'saved') return;
    const form = event.currentTarget, data = new FormData(form);
    setState('sending'); setMessage('');
    try {
      const response = await fetch('/api/inquiries', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({
        kind: venueId ? 'couple' : 'owner', venueId, venueName:data.get('venueName') ?? '',
        name:data.get('name'), email:data.get('email'), message:data.get('message'),
        date:data.get('date') ?? '', guests:data.get('guests') ? Number(data.get('guests')) : null,
        website:data.get('website'), consent:data.get('consent') === 'on',
      })});
      const result = await response.json(); setMessage(result.message);
      setState(response.ok ? 'saved' : 'error');
      if (response.ok) form.reset();
    } catch { setState('error'); setMessage('Unable to confirm saving. Your entries are still here; please try again later.'); }
  }
  if (!enabled) return <div className="bg-amber-50 text-amber-950 p-4 rounded-xl"><h2 className="font-semibold">Online inquiries coming soon</h2><p className="text-sm mt-2">We are connecting private inquiry storage. No inquiry is collected here yet. Contact the venue directly to confirm pricing and availability.</p></div>;
  return <form onSubmit={submit} className="space-y-4">
    <h2 className="font-bold text-xl">{venueId ? 'Ask about this venue' : 'Submit a venue for review'}</h2>
    <p className="text-sm text-stone-600">Your request goes to the directory operator for review. It is not automatically sent to a venue. No booking or response time is guaranteed.</p>
    <label className="block">Your name<input name="name" autoComplete="name" maxLength={100} required className={field}/></label>
    <label className="block">Email<input name="email" type="email" autoComplete="email" maxLength={254} required className={field}/></label>
    {!venueId && <label className="block">Venue name<input name="venueName" required maxLength={200} className={field}/></label>}
    {venueId && <><label className="block">Preferred date (optional)<input name="date" type="date" min={new Date().toLocaleDateString('en-CA')} className={field}/></label><label className="block">Guest count (optional)<input name="guests" type="number" min={1} max={10000} className={field}/></label></>}
    <label className="block">Message<textarea name="message" required maxLength={2000} rows={4} className={field}/></label>
    <div hidden aria-hidden="true"><label>Leave blank<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
    <label className="flex gap-2 text-sm"><input type="checkbox" name="consent" required/>I agree to the operator storing my inquiry to respond, as explained in the <Link href="/privacy" className="underline">privacy notice</Link>.</label>
    <button disabled={state === 'sending' || state === 'saved'} className="bg-rose-600 text-white px-5 py-3 rounded-xl disabled:opacity-50">{state === 'sending' ? 'Saving…' : state === 'saved' ? 'Inquiry saved' : 'Save inquiry'}</button>
    <p role="status" aria-live="polite" className={state === 'error' ? 'text-red-800' : 'text-stone-700'}>{message}</p>
  </form>;
}
