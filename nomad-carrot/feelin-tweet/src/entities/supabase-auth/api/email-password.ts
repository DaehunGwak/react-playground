import {ReadonlyRequestCookies} from "next/dist/server/web/spec-extension/adapters/request-cookies";
import {createSupabaseRouteHandlerClient} from "@/src/shared/supabase/client";

export async function loginByEmail(
  email: string,
  password: string,
  cookieStore: ReadonlyRequestCookies
) {
  const supabase = createSupabaseRouteHandlerClient(cookieStore);
  return await supabase.auth.signInWithPassword({email, password});
}

export async function fetchPostLoginByEmail(email: string, password: string) {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);

  return await fetch("/api/users/email/login", {
    method: "POST",
    cache: "no-cache",
    body: formData,
  });
}

export async function signUpByEmail(
  email: string,
  password: string,
  urlOrigin: string,
  cookieStore: ReadonlyRequestCookies,
) {
  const supabase = createSupabaseRouteHandlerClient(cookieStore);
  return await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${urlOrigin}/api/users/callback`
    }
  });
}

export async function fetchPostSignupByEmail(email: string, password: string) {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);

  return await fetch("/api/users/email/signup", {
    method: "POST",
    cache: "no-cache",
    body: formData,
  });
}
