import {createClientComponentClient, createRouteHandlerClient} from "@supabase/auth-helpers-nextjs";
import {ReadonlyRequestCookies} from "next/dist/server/web/spec-extension/adapters/request-cookies";

export const supabase = createClientComponentClient();

export function createSupabaseRouteHandlerClient(cookies: ReadonlyRequestCookies) {
  return createRouteHandlerClient({
    cookies: () => cookies,
  });
}
