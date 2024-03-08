export interface CoinResponse {
  readonly id: string,
  readonly name: string;
  readonly symbol: string;
  readonly rank: number;
  readonly is_new: boolean;
  readonly is_active: boolean;
  readonly type: string;
}
