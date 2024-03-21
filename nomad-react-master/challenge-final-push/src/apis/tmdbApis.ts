import axios from "axios";
import {TmdbMoviesApiType, TmdbResponse, TmdbSimpleMovie} from "./TmdbResponse";

const BASE_URL = "http://ec2-3-39-249-233.ap-northeast-2.compute.amazonaws.com:8080/tmdb";
const TIMEOUT_MS = 5000;

export async function getTmdbMovies(
  type: TmdbMoviesApiType,
  page: number = 1
): Promise<TmdbResponse<TmdbSimpleMovie[]>> {
  return await getData(`/movies/${type}?page=${page}`);
}

async function getData(path: string) {
  try {
    const response = await axios.get(`${BASE_URL}${path}`, { timeout: TIMEOUT_MS });
    return response.data;
  } catch (e) {
    console.error("[axios] getData 중 에러가 발생했습니다. 확인 부탁드립니다.", e);
  }
}
