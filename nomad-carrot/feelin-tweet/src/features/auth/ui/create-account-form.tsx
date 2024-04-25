'use client';

import {useForm} from "react-hook-form";
import {useState} from "react";
import {AuthError} from "@supabase/auth-js";
import {signupEmailAndPasssword} from "@/src/entities/supabase-auth";
import {useRouter} from "next/navigation";

export default function CreateAccountForm() {
  const {
    register,
    handleSubmit,
    formState: {isSubmitting, errors} ,
    getValues,
  } = useForm<LoginFormData>();
  const [authError, setAuthError] = useState<AuthError | null>();
  const router = useRouter();

  const signup = async ({email, password}: LoginFormData) => {
    const {error} = await signupEmailAndPasssword(email, password);
    setAuthError((_) => error);
    if (!error) {
      router.push("/log-in");
    }
  }

  return (
    <form onSubmit={handleSubmit(signup, console.log)} className="flex flex-col w-full gap-1">
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
      <label htmlFor="confirmPassword" className="text-black text-sm mt-1">
        Confirm Password
      </label>
      <input
        {...register("confirmPassword", {
          required: "Please enter your password.",
          minLength: {
            value: 6,
            message: "Please enter at least 6 characters."
          },
          validate: value => getValues("password") === value
            ? true
            : "It is not the same as the password you entered.",
        })}
        type="password"
        id="confirmPassword"
        className={`border border-gray-400 p-1 rounded ${errors.confirmPassword ? "border-red-400" : ""}`}
      />
      {errors.confirmPassword
        ? <span className="text-red-400 text-xs">
          {errors.confirmPassword.message}
        </span>
        : undefined}
      <button
        type="submit"
        className="text-white bg-black w-full h-10 mt-3 rounded disabled:bg-gray-500"
        disabled={isSubmitting}
      >
        Sign Up
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
  confirmPassword: string;
}
