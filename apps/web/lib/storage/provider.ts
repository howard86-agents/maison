export interface UploadInput {
  body: Buffer | Uint8Array | ReadableStream;
  contentLength?: number;
  contentType: string;
  key: string;
}

export interface SignedUrlInput {
  expiresInSeconds?: number;
  key: string;
}

export interface StorageProvider {
  deleteObject(key: string): Promise<void>;
  getSignedUrl(input: SignedUrlInput): Promise<string>;
  readonly id: string;
  putObject(input: UploadInput): Promise<{ key: string }>;
}
