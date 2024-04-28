"use server";

import {readUserByCookie} from "@/src/entities/supabase-auth";
import {readProfile} from "@/src/entities/profile";

export async function getUserProfileByCookie() {
    const user = await readUserByCookie();
    if (!user) {
      return null;
    }
    return {
      user: user!,
      profile: await readProfile(user.id),
    };
}
