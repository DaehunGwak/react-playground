'use client';

import {useForm} from "react-hook-form";
import {loginEmailAndPassword} from "@/src/entities/supabase-auth";
import {useState} from "react";
import {AuthError} from "@supabase/auth-js";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: {isSubmitting, errors} ,
  } = useForm<LoginFormData>();
  const [authError, setAuthError] = useState<AuthError | null>();

  const login = async ({email, password}: LoginFormData) => {
    const {error} = await loginEmailAndPassword(email, password);
    setAuthError((_) => error);
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
            value: 4,
            message: "Please enter at least 4 characters."
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
          {authError.message}
        </span>
        : undefined}
    </form>
  );
}

interface LoginFormData {
  email: string;
  password: string;
}
