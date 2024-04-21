'use client';

import useDogSwr from "@/src/features/dog/api/use-dog-swr";

export default function DogFeature() {
  const {isLoading, data, mutate} = useDogSwr();

  if (isLoading) {
    return (
      <div>loading...</div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <video
        src={data!.url}
        controls
        autoPlay
        loop
        className="w-64 h-64"
      />
      <div className="flex flex-row gap-3 flex-wrap justify-center items-center">
        <button
          onClick={() => mutate()}
          className="w-52 p-3 rounded-lg shadow-lg shadow-gray-400 active:shadow-none dark:bg-white dark:text-black"
        >
          New Dog!
        </button>
        <button
          onClick={() => mutate({...data!, isLiked: !data!.isLiked}, {revalidate: false})}
          className="w-52 p-3 rounded-lg shadow-lg shadow-gray-400 active:shadow-none bg-sky-400 text-white"
        >
          {data!.isLiked ? "Unlike" : "Like"}
        </button>
      </div>
    </div>
  );
}
