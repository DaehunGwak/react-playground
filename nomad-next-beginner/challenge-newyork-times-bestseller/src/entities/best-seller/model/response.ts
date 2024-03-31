export interface BestsellerResponse {
  readonly status: string;
  readonly copyright: string;
  readonly num_results: number;
  readonly results: BestsellerListSimple[];
}

export interface BestsellerListSimple {
  readonly list_name: string;
  readonly display_name: string;
  readonly list_name_encoded: string;
  readonly oldest_published_date: Date;
  readonly newest_published_date: Date;
  readonly updated: Updated;
}

export type Updated = "WEEKLY" | "MONTHLY";
