export interface FxRate {
  base: string;
  fetchedAt: Date;
  quote: string;
  rate: number;
  source: string;
}

export interface FxProvider {
  fetchRate(base: string, quote: string): Promise<FxRate>;
  readonly id: string;
}
