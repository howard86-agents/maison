import { prisma } from "@maison/database";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { anonymous } from "better-auth/plugins";

interface ProviderCreds {
  clientId: string;
  clientSecret: string;
}

function provider(
  clientId: string | undefined,
  clientSecret: string | undefined
): ProviderCreds | undefined {
  if (clientId && clientSecret) {
    return { clientId, clientSecret };
  }
  return;
}

const socialProviders = Object.fromEntries(
  Object.entries({
    google: provider(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET
    ),
    facebook: provider(
      process.env.FACEBOOK_CLIENT_ID,
      process.env.FACEBOOK_CLIENT_SECRET
    ),
    line: provider(process.env.LINE_CLIENT_ID, process.env.LINE_CLIENT_SECRET),
  }).filter(([, creds]) => creds !== undefined)
) as Parameters<typeof betterAuth>[0]["socialProviders"];

export const auth = betterAuth({
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  socialProviders,
  plugins: [anonymous()],
});

export type Session = typeof auth.$Infer.Session;
