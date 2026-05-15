import "dotenv/config";
import { defineConfig } from "prisma/config";

// Migrate/push/studio need a direct (non-pooled) connection. On Supabase
// the pooled DATABASE_URL drops session-level features migrations rely on,
// so prefer DIRECT_URL when present and fall back to DATABASE_URL for
// single-URL setups (local Postgres, dev databases). `prisma generate`
// does not connect, so an undefined url is fine on fresh checkouts.
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: process.env.DIRECT_URL ?? process.env.DATABASE_URL,
  },
});
