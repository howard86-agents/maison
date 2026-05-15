import type { FxProvider } from "./provider";

let cached: FxProvider | undefined;

export function getFxProvider(): FxProvider {
  if (cached) {
    return cached;
  }
  const id = process.env.FX_PROVIDER ?? "stub";
  throw new Error(
    `No FX provider implementation registered for "${id}". ` +
      "Register one in lib/fx and select via FX_PROVIDER env."
  );
}

export function registerFxProvider(provider: FxProvider): void {
  cached = provider;
}

export type { FxProvider, FxRate } from "./provider";
