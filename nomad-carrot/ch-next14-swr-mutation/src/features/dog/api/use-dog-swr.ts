import useSWR from "swr";
import {DogResponse} from "@/src/features/dog/model/response";
import fetcher from "@/src/shared/libs/fetcher";

const DOG_URL = "https://dogs-api.nomadcoders.workers.dev";

export default function useDogSwr() {
  const {isLoading, data, mutate} = useSWR<DogResponse>(DOG_URL, fetcher);

  return {
    isLoading, data, mutate
  };
}
