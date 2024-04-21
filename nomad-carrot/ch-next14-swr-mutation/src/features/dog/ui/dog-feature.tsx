'use client';

import useSWR from "swr";
import fetcher from "@/src/shared/libs/fetcher";
import {DogResponse} from "@/src/features/dog/model/response";

const DOG_URL = "https://dogs-api.nomadcoders.workers.dev";

export default function DogFeature() {
  const {isLoading, data} = useSWR<DogResponse>(DOG_URL, fetcher);

  return (
    <>{
      isLoading
        ? "loading..."
        : <div className="flex flex-col justify-center items-center gap-6">
          <video
            src={data!.url}
            controls
            className="w-64 h-64"
          />
          <div className="flex flex-row gap-3 flex-wrap justify-center items-center">
            <button className="w-52 p-3 rounded-lg shadow-lg active:shadow-none">
              New Dog!
            </button>
            <button className="w-52 p-3 rounded-lg shadow-lg active:shadow-none bg-sky-400 text-white">
              Like
            </button>
          </div>
        </div>
    }</>
  );
}
