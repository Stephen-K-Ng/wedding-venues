import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateInquiry } from '../lib/inquiries.ts';
const valid = {kind:'couple', venueId:'1', name:'Test Couple', email:'TEST@example.com', message:'Please share details.', consent:true, website:'', guests:80};
test('normalizes a valid inquiry',()=>assert.equal(validateInquiry(valid)?.email, 'test@example.com'));
test('rejects missing consent, bots, oversized values and invalid guests',()=>{
  for (const patch of [{consent:false},{website:'spam'},{email:'invalid'},{message:'x'.repeat(2001)},{guests:0},{guests:'80'},{guests:1.5},{name:''}]) assert.equal(validateInquiry({...valid,...patch}),null);
});
test('validates venue owner inputs and calendar dates',()=>{
  assert.equal(validateInquiry({...valid,kind:'owner',venueName:''}),null);
  assert.ok(validateInquiry({...valid,kind:'owner',venueName:'Test estate'}));
  assert.equal(validateInquiry({...valid,date:'2030-02-30'}),null);
  assert.equal(validateInquiry({...valid,date:'2020-01-01'}),null);
  assert.ok(validateInquiry({...valid,date:'2030-05-10'}));
});
