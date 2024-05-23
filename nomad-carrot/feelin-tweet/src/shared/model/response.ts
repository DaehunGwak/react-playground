export interface FeelinResponse<T> {
  readonly result?: T | null,
  readonly error?: string | null,
}
