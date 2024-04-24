import {NextRequest, NextResponse} from "next/server";
import {createMiddlewareClient} from "@supabase/auth-helpers-nextjs";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const supabase = createMiddlewareClient({req, res});

  const {
    data: {
      session
    }
  } = await supabase.auth.getSession();

  if (!session) {
    return NextResponse.redirect(new URL("/log-in", req.url));
  }

  console.log(session);

  return res;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|log-in|create-account).*)',
  ]
};