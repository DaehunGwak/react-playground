import {getData} from "@/shared/api";
import {BestsellerListDetail, BestsellerListSimple, BestsellerResponse} from "@/entities/bestseller/model/response";

const BASE_URL = "https://books-api.nomadcoders.workers.dev";

export async function getBestsellerListResults() {
  const data = await getData(`${BASE_URL}/lists`) as BestsellerResponse<BestsellerListSimple[]>;
  return data.results;
}

export async function getBestsellerDetailResult(name: string) {
  const data = await getData(`${BASE_URL}/list?name=${name}`) as BestsellerResponse<BestsellerListDetail>;
  return data.results;
}
