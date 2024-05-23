"use client";

import {useForm} from "react-hook-form";
import {readUserByCookie} from "@/src/entities/supabase-auth";
import {createTweet, TweetWithProfileAndLikeCount} from "@/src/entities/tweet";
import {BaseSyntheticEvent, ChangeEvent} from "react";
import {KeyedMutator} from "swr";

export default function TweetNewForm({mutateTweets}: {mutateTweets: KeyedMutator<TweetWithProfileAndLikeCount[]>}) {
  const {
    register,
    handleSubmit,
    formState: {
      isValid
    },
    reset,
  } = useForm<TweetNewFormData>();
  const registerText = register("text", {required: true, minLength: 4});

  const submitTweet = async ({text}: TweetNewFormData, event?: BaseSyntheticEvent) => {
    const user = await readUserByCookie();
    await createTweet(text, user!.id);
    await mutateTweets();

    reset();

    if (!event) return;

    const textarea: HTMLTextAreaElement | null = event.target.children?.text;
    if (textarea) {
      textarea.style.height = "auto";
    }
  }

  const resizeTextarea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <div
      className="w-full max-w-screen-sm flex flex-col rounded-lg shadow-gray-400 shadow-md p-4"
    >
      <form
        onSubmit={handleSubmit(submitTweet)}
        className="w-full flex flex-col gap-3"
      >
        <textarea
          {...registerText}
          placeholder="Please, write down your feelin' :)"
          rows={1}
          onChange={async (event) => {
            await registerText.onChange(event);
            resizeTextarea(event);
          }}
          className="w-full p-1 resize-none outline-none"
        />
        <div className="w-full flex flex-row justify-end">
          <button
            type="submit"
            disabled={!isValid}
            className="text-white bg-black w-24 h-10 rounded-lg disabled:bg-gray-500"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}

interface TweetNewFormData {
  text: string;
}