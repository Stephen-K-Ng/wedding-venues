export function inquiriesEnabled() {
  return process.env.INQUIRIES_ENABLED === 'true' && Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY && process.env.INQUIRY_HASH_SECRET && process.env.INQUIRY_SUPPORT_EMAIL);
}
