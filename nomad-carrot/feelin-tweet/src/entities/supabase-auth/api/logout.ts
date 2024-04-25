import {ReadonlyRequestCookies} from "next/dist/server/web/spec-extension/adapters/request-cookies";
import {createSupabaseRouteHandlerClient} from "@/src/shared/supabase/client";

export async function signOut(cookieStore: ReadonlyRequestCookies) {
  const supabase = createSupabaseRouteHandlerClient(cookieStore);
  return await supabase.auth.signOut();
}

export async function fetchPostLogOut() {
  return await fetch("/api/users/logout", {
    method: "POST",
    cache: "no-cache",
  });
}
