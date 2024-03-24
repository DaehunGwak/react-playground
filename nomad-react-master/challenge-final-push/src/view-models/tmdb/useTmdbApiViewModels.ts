import {useQuery} from "@tanstack/react-query";
import {getTmdbMovieDetail, getTmdbMovies} from "../../apis/tmdbApis";
import {TmdbDetailResponse} from "../../models/responses/TmdbDetailResponse";
import {TmdbMoviesApiType, TmdbResponse, TmdbSimpleMovie} from "../../models/responses/TmdbResponse";

export function useTmdbMovieDetailApiViewModel(id: number): UseTmdbApiResult<TmdbDetailResponse> {
  const {data, isSuccess} = useQuery({
    queryKey: ['tmdb-movie-detail-api', id],
    queryFn: () => getTmdbMovieDetail(id),
  });

  return {
    response: data, isSuccess
  };
}

export function useTmdbMoviesApiViewModel(
  type: string,
  page: number = 1,
  isTmdbMoviesType: boolean = true,
): UseTmdbApiResult<TmdbResponse<TmdbSimpleMovie[]>> {
  const {data, isSuccess} = useQuery({
    queryKey: ["tmdb-movies-api", type, page],
    queryFn: async () => getTmdbMovies(type as TmdbMoviesApiType),
    enabled: isTmdbMoviesType,
  });

  return {
    response: data, isSuccess
  };
}

export interface UseTmdbApiResult<T> {
  readonly response?: T;
  readonly isSuccess: boolean;
}
