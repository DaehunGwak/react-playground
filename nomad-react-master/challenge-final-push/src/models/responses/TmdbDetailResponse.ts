export interface TmdbDetailResponse {
  readonly adult: boolean;
  readonly backdrop_path: string;
  readonly belongs_to_collection: any | null; // TODO: 무슨 타입인지 정확히 알아야 함
  readonly budget: number;
  readonly genres: DetailGenre[];
  readonly homepage: string;
  readonly id: number;
  readonly imdb_id: string;
  readonly original_language: string;
  readonly original_title: string;
  readonly overview: string;
  readonly popularity: number;
  readonly poster_path: string;
  readonly production_companies: DetailProductionCompany[];
  readonly production_countries: DetailProductionCountry[];
  readonly release_date: Date;
  readonly revenue: number;
  readonly runtime: number;
  readonly spoken_languages: DetailSpokenLanguage[];
  readonly status: string;
  readonly tagline: string;
  readonly title: string;
  readonly video: boolean;
  readonly vote_average: number;
  readonly vote_count: number;
}

export interface DetailGenre {
  readonly id: number;
  readonly name: string;
}

export interface DetailProductionCompany {
  readonly id: number;
  readonly logo_path: string | null;
  readonly name: string;
  readonly origin_country: string;
}

export interface DetailProductionCountry {
  readonly iso_3166_1: string;
  readonly name: string;
}

export interface DetailSpokenLanguage {
  readonly english_name: string;
  readonly iso_639_1: string;
  readonly name: string;
}
