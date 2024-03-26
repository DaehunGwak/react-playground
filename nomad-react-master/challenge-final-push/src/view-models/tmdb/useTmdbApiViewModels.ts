import {useQuery} from "@tanstack/react-query";
import {getTmdbMovieDetail, getTmdbMovies, searchTmdbMovies} from "../../apis/tmdbApis";
import {TmdbDetailResponse} from "../../models/responses/TmdbDetailResponse";
import {TmdbMoviesApiType, TmdbResponse, TmdbSimpleMovie} from "../../models/responses/TmdbResponse";
import {TmdbSearchedMovie} from "../../models/responses/TmdbSearchResponse";
import {useEffect, useState} from "react";

export function useTmdbMovieDetailApiViewModel(id: number): UseTmdbApiResult<TmdbDetailResponse> {
  const {data, isSuccess, isFetching} = useQuery({
    queryKey: ['tmdb-movie-detail-api', id],
    queryFn: () => getTmdbMovieDetail(id),
  });

  return {
    response: data,
    isSuccess,
    isFetching
  };
}

export function useTmdbMoviesApiViewModel(
  type: string,
  page: number = 1,
  isTmdbMoviesType: boolean = true,
): UseTmdbApiResult<TmdbResponse<TmdbSimpleMovie[]>> {
  const {data, isSuccess, isFetching} = useQuery({
    queryKey: ["tmdb-movies-api", type, page],
    queryFn: async () => getTmdbMovies(type as TmdbMoviesApiType),
    enabled: isTmdbMoviesType,
  });

  return {
    response: data,
    isSuccess,
    isFetching
  };
}

const SEARCH_CACHE_MILLISECONDS = 60 * 1000;
const DEBOUNCE_MILLISECONDS = 1000;

// debounce: https://velog.io/@sjoleee_/debounce-throttle-%EC%A0%95%EB%A6%AC
export function useTmdbSearchApiViewModel(
  query: string
): UseTmdbApiResult<TmdbSearchedMovie[]> {
  const [debounceQuery, setDebounceQuery] = useState(query);

  const {data, isSuccess, isFetching} = useQuery({
    queryKey: ["tmdb-search-api", debounceQuery],
    queryFn: async () => searchTmdbMovies(query),
    enabled: query.length > 1,
    staleTime: SEARCH_CACHE_MILLISECONDS // cache
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceQuery(query);
    }, DEBOUNCE_MILLISECONDS);

    return () => {
      clearTimeout(timer);
    }
  }, [query]);

  return {
    response: data?.results,
    isSuccess,
    isFetching
  };
}

export interface UseTmdbApiResult<T> {
  readonly response?: T;
  readonly isSuccess: boolean;
  readonly isFetching: boolean;
}
