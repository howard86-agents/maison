import type { Notifier } from "./provider";

let cached: Notifier | undefined;

export function getNotifier(): Notifier {
  if (cached) {
    return cached;
  }
  const id = process.env.NOTIFIER ?? "stub";
  throw new Error(
    `No notifier implementation registered for "${id}". ` +
      "Register one in lib/notifications and select via NOTIFIER env."
  );
}

export function registerNotifier(notifier: Notifier): void {
  cached = notifier;
}

export type {
  Notification,
  Notifier,
  OrderStatusNotification,
  ProxyRequestStatusNotification,
} from "./provider";
