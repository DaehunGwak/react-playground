import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";
import {loginByEmail} from "@/src/entities/supabase-auth";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const response = await loginByEmail(
    String(formData.get("email")),
    String(formData.get("password")),
    cookies(),
  );

  if (response.error) {
    return NextResponse.json({error: response.error.message}, {status: 400});
  }

  const url = new URL(req.url);
  return NextResponse.redirect(url.origin, {status: 301});
}