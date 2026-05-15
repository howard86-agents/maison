import type { StorageProvider } from "./provider";

let cached: StorageProvider | undefined;

export function getStorageProvider(): StorageProvider {
  if (cached) {
    return cached;
  }
  const id = process.env.STORAGE_PROVIDER ?? "stub";
  throw new Error(
    `No storage provider implementation registered for "${id}". ` +
      "Register one in lib/storage and select via STORAGE_PROVIDER env."
  );
}

export function registerStorageProvider(provider: StorageProvider): void {
  cached = provider;
}

export type {
  SignedUrlInput,
  StorageProvider,
  UploadInput,
} from "./provider";
