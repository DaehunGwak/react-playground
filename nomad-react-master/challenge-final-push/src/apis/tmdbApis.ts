import axios from "axios";
import {TmdbMoviesApiType, TmdbResponse, TmdbSimpleMovie} from "../models/responses/TmdbResponse";
import {TmdbDetailResponse} from "../models/responses/TmdbDetailResponse";
import {TmdbMovieSearchResponse} from "../models/responses/TmdbSearchResponse";

const TMDB_BASE_URL = "https://api.ordi-elastic-test.site/tmdb"
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

export async function searchTmdbMovies(
  query: string, page: number = 1, size: number = 20
): Promise<TmdbMovieSearchResponse> {
  return await getData(
    `/movies/search?query=${query}&page=${page}&size=${size}`
  );
}

async function getData(path: string) {
  try {
    const response = await axios.get(
      `${TMDB_BASE_URL}${path}`,
      {
        timeout: TIMEOUT_MS
      });
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
