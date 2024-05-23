"use server";

import {createClient} from "@supabase/supabase-js";

export async function createSupabaseServerClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_SUPABASE_ROLE_KEY!
  );
}

