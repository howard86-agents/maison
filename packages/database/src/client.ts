import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import { PrismaClient } from "../generated/client";

// biome-ignore lint/performance/noBarrelFile: explicit re-exports of generated enum values keep the package's public surface compatible with the previous `export *` while avoiding the Turbopack warning about wildcard re-exports from CommonJS modules.
export {
  OrderStatus,
  PaymentStatus,
  ProxyRequestStatus,
  UserRole,
} from "../generated/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// 1. Create the Pool specifically for the adapter
const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString,
});

// 2. Pass the pool to the adapter
const adapter = new PrismaPg(pool);

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
    // Optional: Log queries to see if connection works
    // log: ['query', 'info', 'warn', 'error'],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
