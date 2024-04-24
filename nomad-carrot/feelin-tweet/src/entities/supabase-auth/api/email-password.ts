import {supabase} from "@/src/shared/supabase/client";

export async function loginEmailAndPassword(email: string, password: string) {
  const {data, error} = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  console.log(data, error);
  return {data, error};
}
