export interface TmdbMovieSearchResponse {
  readonly pageNumber: number;
  readonly totalPage: number;
  readonly pageSize: number;
  readonly totalHits: number;
  readonly results: TmdbSearchedMovie[];
}

export interface TmdbSearchedMovie {
  readonly movieId: number;
  readonly title: string;
  readonly originTitle: string;
  readonly overview: string;
}