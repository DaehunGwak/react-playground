import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";
import {signOut} from "@/src/entities/supabase-auth";

export async function POST(req: NextRequest) {
  const response = await signOut(cookies());

  if (response.error) {
    return NextResponse.json({error: response.error.message}, {status: 400});
  }

  const url = new URL(req.url);
  return NextResponse.redirect(`${url.origin}/log-in`, {status: 301});
}
