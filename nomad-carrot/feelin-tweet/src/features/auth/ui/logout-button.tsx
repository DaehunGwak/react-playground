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
      className="text-red-400 hover:text-red-200"
      onClick={logout}
    >
      Log out
    </button>
  );
}