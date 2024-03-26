export const TMDB_MOVIES_API_TYPES = ["popular", "now-playing", "upcoming"] as const;

export type TmdbMoviesApiType = typeof TMDB_MOVIES_API_TYPES[number];

const tmdbMoviesApiTypesForCheck: string[] = [...TMDB_MOVIES_API_TYPES];

export function isTmdbMoviesApiType(s: string): boolean {
  return tmdbMoviesApiTypesForCheck.includes(s);
}

export interface TmdbResponse<T> {
  readonly dates?: any;
  readonly page: number;
  readonly total_pages: number;
  readonly total_results: number;
  readonly results: T;
}

export interface TmdbSimpleMovie {
  readonly adult: boolean;
  readonly backdrop_path: string;
  readonly genre_ids: number[];
  readonly id: number;
  readonly original_language: string;
  readonly original_title: string;
  readonly overview: string;
  readonly popularity: number;
  readonly poster_path: string;
  readonly release_date: Date;
  readonly title: string;
  readonly video: boolean;
  readonly vote_average: number;
  readonly vote_count: number;
}
