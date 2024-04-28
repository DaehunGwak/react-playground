"use server";

import {createSupabaseRouteHandlerClient} from "@/src/shared/supabase/client";
import {User} from "@supabase/auth-js";
import {createSupabaseServerClient} from "@/src/shared/supabase/admin-client";
import {cookies} from "next/headers";

export async function readUserByCookie(): Promise<User | null> {
  const supabase = createSupabaseRouteHandlerClient(cookies());
  const response = await supabase.auth.getUser();
  return response.data.user;
}

export async function readUserById(userId: string): Promise<User | null> {
  const supabase = await createSupabaseServerClient();
  const response = await supabase.auth.admin.getUserById(userId);
  return response.data.user;
}