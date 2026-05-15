import type { OrderStatus, ProxyRequestStatus } from "@maison/database";

export interface OrderStatusNotification {
  kind: "order_status";
  orderId: string;
  recipientLineUserId: string;
  status: OrderStatus;
}

export interface ProxyRequestStatusNotification {
  kind: "proxy_request_status";
  proxyRequestId: string;
  recipientLineUserId: string;
  status: ProxyRequestStatus;
}

export type Notification =
  | OrderStatusNotification
  | ProxyRequestStatusNotification;

export interface Notifier {
  readonly id: string;
  notify(notification: Notification): Promise<void>;
}
