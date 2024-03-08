export interface CoinDetailResponse {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  tags: CoinTag[];
  team: CoinTeam[];
  description: string;
  message: string;
  open_source: boolean;
  started_at: Date;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  links: CoinLinks;
  links_extended: CoinLinksExtended[];
  whitepaper: CoinWhitepaper;
  first_data_at: Date;
  last_data_at: Date;
}

export interface CoinLinks {
  explorer: string[];
  facebook: string[];
  reddit: string[];
  source_code: string[];
  website: string[];
  youtube: string[];
}

export interface CoinLinksExtended {
  url: string;
  type: string;
  stats?: CoinStats;
}

export interface CoinStats {
  subscribers?: number;
  contributors?: number;
  stars?: number;
  followers?: number;
}

export interface CoinTag {
  id: string;
  name: string;
  coin_counter: number;
  ico_counter: number;
}

export interface CoinTeam {
  id: string;
  name: string;
  position: string;
}

export interface CoinWhitepaper {
  link: string;
  thumbnail: string;
}
