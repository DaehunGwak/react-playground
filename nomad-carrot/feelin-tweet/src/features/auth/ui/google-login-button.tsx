"use client";

import {FaGoogle} from "react-icons/fa";
import {loginByGoogle} from "@/src/entities/supabase-auth";
import {useState} from "react";

export default function GoogleLoginButton() {
  const [disabled, setDisabled] = useState(false);

  const login = async () => {
    setDisabled(true);
    await loginByGoogle();
    setDisabled(false);
  }

  return (
    <button
      onClick={login}
      disabled={disabled}
      className="flex flex-row justify-center items-center w-full bg-black text-white p-2 rounded gap-2 disabled:bg-gray-500"
    >
      <span className="text-sm">
        Log In with google
      </span>
      <FaGoogle/>
    </button>
  )
}
