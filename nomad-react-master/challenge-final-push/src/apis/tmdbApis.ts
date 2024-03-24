import axios from "axios";
import {TmdbMoviesApiType, TmdbResponse, TmdbSimpleMovie} from "../models/responses/TmdbResponse";
import {TmdbDetailResponse} from "../models/responses/TmdbDetailResponse";

const BASE_URL = "http://ec2-3-39-249-233.ap-northeast-2.compute.amazonaws.com:8080/tmdb";
const TIMEOUT_MS = 5000;

export async function getTmdbMovies(
  type: TmdbMoviesApiType,
  page: number = 1
): Promise<TmdbResponse<TmdbSimpleMovie[]>> {
  return await getData(`/movies/${type}?page=${page}`);
}

export async function getTmdbMovieDetail(id: number): Promise<TmdbDetailResponse> {
  return await getData(`/movies/${id}`);
}

async function getData(path: string) {
  try {
    const response = await axios.get(`${BASE_URL}${path}`, { timeout: TIMEOUT_MS });
    return response.data;
  } catch (e) {
    console.error("[axios] getData 중 에러가 발생했습니다. 확인 부탁드립니다.", e);
  }
}

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
type ImageType = "w500" | "original";

export function createImageUrl(path: string, type: ImageType = "w500") {
  return `${IMAGE_BASE_URL}/${type}/${path}`;
}
