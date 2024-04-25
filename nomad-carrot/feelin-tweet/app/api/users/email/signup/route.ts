import {NextRequest, NextResponse} from "next/server";
import {cookies} from "next/headers";
import {signUpByEmail} from "@/src/entities/supabase-auth";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const url = new URL(req.url);

  const response = await signUpByEmail(
    String(formData.get("email")),
    String(formData.get("password")),
    url.origin,
    cookies(),
  );

  if (response.error) {
    return NextResponse.json({error: response.error.message}, {status: 400});
  }

  return NextResponse.redirect(url.origin, {status: 301});
}
