import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { requireSession } from "../../../lib/require-role";
import { getStorageProvider } from "../../../lib/storage";

const MAX_BYTES = 10 * 1024 * 1024;
const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
]);

export async function POST(request: Request): Promise<NextResponse> {
  const session = await requireSession();
  const formData = await request.formData();
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "file_required" }, { status: 400 });
  }
  if (!ALLOWED_TYPES.has(file.type)) {
    return NextResponse.json({ error: "unsupported_type" }, { status: 415 });
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "too_large" }, { status: 413 });
  }

  const ext = file.type.split("/")[1] ?? "bin";
  const key = `uploads/${session.user.id}/${randomUUID()}.${ext}`;
  const storage = getStorageProvider();

  await storage.putObject({
    key,
    body: Buffer.from(await file.arrayBuffer()),
    contentType: file.type,
    contentLength: file.size,
  });

  return NextResponse.json({ key });
}
