'use client';

import {useForm} from "react-hook-form";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {fetchPostLoginByEmail} from "@/src/entities/supabase-auth";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: {isSubmitting, errors} ,
  } = useForm<LoginFormData>();
  const [authError, setAuthError] = useState<string>();
  const router = useRouter();

  const login = async ({email, password}: LoginFormData) => {
    const response = await fetchPostLoginByEmail(email, password);

    if (response.redirected) {
      router.replace(response.url);
      return;
    }

    const responseJson = await response.json();
    setAuthError(responseJson.error);
  }

  return (
    <form onSubmit={handleSubmit(login, console.log)} className="flex flex-col w-full gap-1">
      <label htmlFor="email" className="text-black text-sm mt-1">
        E-mail
      </label>
      <input
        {...register("email", {
          required: "Please enter your email.",
          validate: (value) => value.includes("@") ? true : "Please enter it in email format."
        })}
        type="text"
        id="email"
        className={`border border-gray-400 p-1 rounded ${errors.email ? "border-red-400" : ""}`}
      />
      {errors.email
        ? <span className="text-red-400 text-xs">
          {errors.email.message}
        </span>
        : undefined}
      <label htmlFor="password" className="text-black text-sm mt-1">
        Password
      </label>
      <input
        {...register("password", {
          required: "Please enter your password.",
          minLength: {
            value: 6,
            message: "Please enter at least 6 characters."
          }
        })}
        type="password"
        id="password"
        className={`border border-gray-400 p-1 rounded ${errors.password ? "border-red-400" : ""}`}
      />
      {errors.password
        ? <span className="text-red-400 text-xs">
          {errors.password.message}
        </span>
        : undefined}
      <button
        type="submit"
        className="text-white bg-black w-full h-10 mt-3 rounded disabled:bg-gray-500"
        disabled={isSubmitting}
      >
        Log In
      </button>
      {authError
        ? <span className="text-red-400 text-xs w-full text-center">
          {authError}
        </span>
        : undefined}
    </form>
  );
}

interface LoginFormData {
  email: string;
  password: string;
}
