import { prisma } from "@maison/database";
import { NextResponse } from "next/server";
import {
  getPaymentProvider,
  type WebhookResult,
} from "../../../../lib/payments";

export async function POST(request: Request): Promise<NextResponse> {
  const rawBody = await request.text();
  const provider = getPaymentProvider();

  let result: WebhookResult;
  try {
    result = await provider.verifyWebhook(rawBody, request.headers);
  } catch {
    return NextResponse.json({ error: "invalid_signature" }, { status: 400 });
  }

  await prisma.payment.upsert({
    where: { id: result.providerTxId },
    update: {
      status: result.status,
      webhookPayload: result.raw as object,
    },
    create: {
      id: result.providerTxId,
      orderId: result.orderId,
      provider: provider.id,
      providerTxId: result.providerTxId,
      amount: result.amount,
      currency: result.currency,
      status: result.status,
      webhookPayload: result.raw as object,
    },
  });

  return NextResponse.json({ ok: true });
}
