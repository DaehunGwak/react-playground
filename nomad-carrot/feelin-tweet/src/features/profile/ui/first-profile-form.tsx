'use client';

import {fetchPostProfile, UserDto} from "@/src/entities/profile";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

export default function FirstProfileForm({user}: {user: UserDto}) {
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm<FirstProfileFormData>();
  const [response, setResponse] = useState<Response>();
  const [responseError, setResponseError] = useState<string>()
  const router = useRouter();

  useEffect(() => {
    if (response && response.status === 201) {
      router.replace("/");
      router.refresh();
    }
  }, [response, router]);

  const createProfile = async ({nickname}: FirstProfileFormData) => {
    const response = await fetchPostProfile(nickname);
    setResponse(response);

    if (response.status === 201) {
      router.replace("/");
      router.refresh();
      return;
    }

    const json = await response.json();
    setResponseError(json.error);
  }

  return (
    <div className="w-full flex flex-col gap-6">
      <span className="text-sm text-center">
        Your profile has not been created. Please fill out the profile below.
      </span>
      <form onSubmit={handleSubmit(createProfile)} className="flex flex-col w-full gap-1">
        <label htmlFor="email" className="text-black text-sm mt-1">
          E-mail
        </label>
        <input
          type="text"
          id="email"
          value={user.email}
          disabled
          className="border border-gray-400 p-1 rounded disabled:bg-gray-200 disabled:text-gray-500"
        />
        <label htmlFor="nickname" className="text-black text-sm mt-1">
          Nickname
        </label>
        <input
          {...register("nickname", {
            required: "Please enter your nickname.",
            minLength: {
              value: 6,
              message: "Please enter at least 6 characters."
            },
          })}
          type="text"
          id="nickname"
          className={`border border-gray-400 p-1 rounded ${errors.nickname ? "border-red-400" : ""}`}
        />
        {errors.nickname
          ? <span className="text-red-400 text-xs">
          {errors.nickname.message}
        </span>
          : undefined}
        <button
          type="submit"
          className="text-white bg-black w-full h-10 mt-3 rounded disabled:bg-gray-500"
          disabled={isSubmitting}
        >
          Create Profile
        </button>
        {responseError
          ? <span className="text-red-400 text-xs w-full text-center">
          {responseError}
        </span>
          : undefined}
      </form>
    </div>
  );
}

interface FirstProfileFormData {
  nickname: string;
}