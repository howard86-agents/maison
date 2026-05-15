import type { PaymentProvider } from "./provider";

let cached: PaymentProvider | undefined;

export function getPaymentProvider(): PaymentProvider {
  if (cached) {
    return cached;
  }
  const id = process.env.PAYMENT_PROVIDER ?? "stub";
  throw new Error(
    `No payment provider implementation registered for "${id}". ` +
      "Register one in lib/payments and select via PAYMENT_PROVIDER env."
  );
}

export function registerPaymentProvider(provider: PaymentProvider): void {
  cached = provider;
}

export type {
  CheckoutSession,
  CreateCheckoutInput,
  PaymentProvider,
  WebhookResult,
} from "./provider";
