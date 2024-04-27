"use server";

import {ReadonlyRequestCookies} from "next/dist/server/web/spec-extension/adapters/request-cookies";
import {createSupabaseRouteHandlerClient} from "@/src/shared/supabase/client";
import {User} from "@supabase/auth-js";
import {createSupabaseServerClient} from "@/src/shared/supabase/admin-client";

export async function readUserByCookie(cookieStore: ReadonlyRequestCookies): Promise<User | null> {
  const supabase = createSupabaseRouteHandlerClient(cookieStore);
  const response = await supabase.auth.getUser();
  return response.data.user;
}

export async function readUserById(userId: string): Promise<User | null> {
  const supabase = await createSupabaseServerClient();
  const response = await supabase.auth.admin.getUserById(userId);
  return response.data.user;
}