-- Apply once to a Supabase project. No public read/write permissions.
create table public.directory_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email_digest text not null,
  payload jsonb not null
);
alter table public.directory_inquiries enable row level security;
revoke all on public.directory_inquiries from anon, authenticated;
create index directory_inquiries_rate on public.directory_inquiries(email_digest, created_at);
create or replace function public.submit_directory_inquiry(payload jsonb, email_digest text)
returns text language plpgsql security definer set search_path = '' as $$
begin
  -- Serialize requests per email across concurrent serverless invocations.
  perform pg_advisory_xact_lock(hashtextextended(email_digest, 0));
  if (select count(*) from public.directory_inquiries i
      where i.email_digest = submit_directory_inquiry.email_digest
      and i.created_at > now() - interval '1 hour') >= 3 then
    return 'limited';
  end if;
  insert into public.directory_inquiries(payload, email_digest)
  values (payload, email_digest);
  return 'saved';
end;
$$;
revoke all on function public.submit_directory_inquiry(jsonb, text) from public, anon, authenticated;
grant execute on function public.submit_directory_inquiry(jsonb, text) to service_role;
