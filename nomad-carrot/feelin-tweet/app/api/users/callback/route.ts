import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";
import {createSupabaseRouteHandlerClient} from "@/src/shared/supabase/client";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  if (code) {
    const supabase = createSupabaseRouteHandlerClient(cookies());
    await supabase.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(url.origin);
}
