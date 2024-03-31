import {getData} from "@/shared/api";
import {BestsellerResponse} from "@/entities/best-seller/model/response";

const BASE_URL = "https://books-api.nomadcoders.workers.dev";

export async function getBestsellerListResults() {
  const data = await getData(`${BASE_URL}/lists`) as BestsellerResponse;
  return data.results;
}
