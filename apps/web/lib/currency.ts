export type CurrencyCode =
  | "USD"
  | "TWD"
  | "EUR"
  | "JPY"
  | "HKD"
  | "CNY"
  | "KRW";

export const CCY: Record<CurrencyCode, { sym: string; rate: number }> = {
  USD: { sym: "USD $", rate: 1 },
  TWD: { sym: "NT$", rate: 31.8 },
  EUR: { sym: "€", rate: 0.92 },
  JPY: { sym: "¥", rate: 154.4 },
  HKD: { sym: "HK$", rate: 7.81 },
  CNY: { sym: "CN¥", rate: 7.1 },
  KRW: { sym: "₩", rate: 1395 },
};

export const CURRENCY_CODES = Object.keys(CCY) as CurrencyCode[];

export function formatCcy(usd: number, code: CurrencyCode): string {
  const c = CCY[code];
  if (!c) {
    return `$${usd}`;
  }
  const v = Math.round(usd * c.rate);
  const grouped = v.toLocaleString("en-US");
  return `${c.sym} ${grouped}`;
}
