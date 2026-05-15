import type { PaymentStatus } from "@maison/database";

export interface CheckoutSession {
  providerTxId: string;
  redirectUrl: string;
}

export interface CreateCheckoutInput {
  amount: number;
  cancelUrl: string;
  currency: string;
  customerEmail?: string;
  orderId: string;
  successUrl: string;
}

export interface WebhookResult {
  amount: number;
  currency: string;
  orderId: string;
  providerTxId: string;
  raw: unknown;
  status: PaymentStatus;
}

export interface PaymentProvider {
  createCheckout(input: CreateCheckoutInput): Promise<CheckoutSession>;
  readonly id: string;
  verifyWebhook(rawBody: string, headers: Headers): Promise<WebhookResult>;
}
