import { prisma } from "@maison/database";
import type { FxProvider, FxRate } from "./provider";

const DEFAULT_TTL_MS = 60 * 60 * 1000;

export async function getCachedRate(
  base: string,
  quote: string,
  provider: FxProvider,
  ttlMs: number = DEFAULT_TTL_MS
): Promise<FxRate> {
  if (base === quote) {
    return { base, quote, rate: 1, fetchedAt: new Date(), source: "identity" };
  }

  const cached = await prisma.fxRate.findUnique({
    where: {
      baseCurrency_quoteCurrency_source: {
        baseCurrency: base,
        quoteCurrency: quote,
        source: provider.id,
      },
    },
  });

  if (cached && Date.now() - cached.fetchedAt.getTime() < ttlMs) {
    return {
      base: cached.baseCurrency,
      quote: cached.quoteCurrency,
      rate: Number(cached.rate),
      fetchedAt: cached.fetchedAt,
      source: cached.source,
    };
  }

  const fresh = await provider.fetchRate(base, quote);
  await prisma.fxRate.upsert({
    where: {
      baseCurrency_quoteCurrency_source: {
        baseCurrency: base,
        quoteCurrency: quote,
        source: provider.id,
      },
    },
    update: { rate: fresh.rate, fetchedAt: fresh.fetchedAt },
    create: {
      baseCurrency: base,
      quoteCurrency: quote,
      rate: fresh.rate,
      source: provider.id,
      fetchedAt: fresh.fetchedAt,
    },
  });
  return fresh;
}
