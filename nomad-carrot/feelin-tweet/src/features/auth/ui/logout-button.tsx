'use client';

import {fetchPostLogOut} from "@/src/entities/supabase-auth";
import {useRouter} from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const logout = async () => {
    const response = await fetchPostLogOut();

    if (response.redirected) {
      router.replace(response.url);
    }
  }

  return (
    <button
      className="text-red-400 p-3 pt-2.5"
      onClick={logout}
    >
      Log out
    </button>
  );
}