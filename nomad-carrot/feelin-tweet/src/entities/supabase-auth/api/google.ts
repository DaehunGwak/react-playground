import {supabase} from "@/src/shared/supabase/client";

export async function loginByGoogle() {
  return await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${location.origin}/api/users/callback`
    }
  });
}
