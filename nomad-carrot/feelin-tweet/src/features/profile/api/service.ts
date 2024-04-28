"use server";

import {cookies} from "next/headers";
import {readUserByCookie} from "@/src/entities/supabase-auth";
import {readProfile} from "@/src/entities/profile";

export async function getUserProfileByCookie() {
    const user = await readUserByCookie(cookies());
    if (!user) {
      return null;
    }
    return {
      user: user!,
      profile: await readProfile(user.id),
    };
}

