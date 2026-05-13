export interface Product {
  ccy: "USD";
  condition?: string;
  house: string;
  id: string;
  name: string;
  price: number;
  stockType: "in-vault" | "estimated";
  tag?: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    house: "BIRKETT",
    name: "Saddle 25 in Étoupe",
    price: 12_400,
    ccy: "USD",
    stockType: "estimated",
    condition: "New",
    tag: "Concierge sourced",
  },
  {
    id: "p2",
    house: "AUREL",
    name: "Linked-Chain Tote",
    price: 4200,
    ccy: "USD",
    stockType: "in-vault",
    condition: "New",
    tag: "In vault · Taipei",
  },
  {
    id: "p3",
    house: "COURONNE",
    name: "Skeleton Tourbillon 41",
    price: 86_500,
    ccy: "USD",
    stockType: "estimated",
    condition: "Unworn",
    tag: "Waitlist · 6w",
  },
  {
    id: "p4",
    house: "LUMIÈRE",
    name: "Riviera Knotted Mules",
    price: 1180,
    ccy: "USD",
    stockType: "in-vault",
    condition: "New",
    tag: "Last pair",
  },
  {
    id: "p5",
    house: "ORSAY",
    name: "Crocodile Wallet, Noir",
    price: 3650,
    ccy: "USD",
    stockType: "in-vault",
    condition: "New",
  },
  {
    id: "p6",
    house: "NORD",
    name: "Cashmere Maxi Coat",
    price: 5400,
    ccy: "USD",
    stockType: "estimated",
  },
  {
    id: "p7",
    house: "AUREL",
    name: "Mini Camera Bag · Gold",
    price: 3950,
    ccy: "USD",
    stockType: "in-vault",
    tag: "New season",
  },
  {
    id: "p8",
    house: "COURONNE",
    name: "Pavé Diamond Hour Markers",
    price: 24_800,
    ccy: "USD",
    stockType: "estimated",
    tag: "Quote on request",
  },
];

export const HOUSES = [
  "BIRKETT",
  "AUREL",
  "COURONNE",
  "ORSAY",
  "LUMIÈRE",
  "NORD",
  "VAILLANT",
  "PARC",
];

export type OrderState = "paid" | "sourcing" | "quote" | "delivered";

export interface OrderRow {
  date: string;
  id: string;
  item: string;
  state: OrderState;
  value: string;
}

export const ORDERS: OrderRow[] = [
  {
    id: "MSN-04821",
    date: "2026·05·08",
    item: "Saddle 25 in Étoupe",
    value: "NT$ 392,400",
    state: "sourcing",
  },
  {
    id: "MSN-04687",
    date: "2026·04·22",
    item: "Riviera Knotted Mules",
    value: "NT$  37,460",
    state: "delivered",
  },
  {
    id: "MSN-04514",
    date: "2026·04·05",
    item: "Custom — Vintage Tank Watch",
    value: "NT$  68,000",
    state: "paid",
  },
  {
    id: "MSN-04503",
    date: "2026·04·02",
    item: "Custom — Aurel Sequin Clutch",
    value: "pending quote",
    state: "quote",
  },
];

export type Tier = "Normal" | "Professional" | "Diamond";
export const TIERS: Tier[] = ["Normal", "Professional", "Diamond"];

export const MEMBER = {
  firstName: "Mei-Lin",
  fullName: "Chen Mei-Lin",
  kanji: "陳美琳",
  city: "TPE",
  joined: "March 2022",
  ledgerYtd: "NT$ 1,840,000",
  filesCompleted: 14,
  lineChannel: "@maison_concierge",
  lineMedianReply: "32 min",
};

export interface AiMatch {
  brand: string;
  confidence: number;
  id: string;
  name: string;
}

export const AI_MATCHES: AiMatch[] = [
  {
    id: "m1",
    name: "Saddle 25 · Étoupe",
    brand: "BIRKETT · 2023",
    confidence: 94,
  },
  {
    id: "m2",
    name: "Saddle 25 · Gris Asphalte",
    brand: "BIRKETT · 2022",
    confidence: 71,
  },
  {
    id: "m3",
    name: "Saddle 30 · Étoupe",
    brand: "BIRKETT · 2024",
    confidence: 52,
  },
];

export interface QuoteCandidate {
  city: string;
  cond: string;
  letter: "A" | "B" | "C";
  price: number;
  recommended?: boolean;
  time: string;
  verdict: string;
}

export const QUOTE_CANDIDATES: QuoteCandidate[] = [
  {
    letter: "A",
    verdict: "Recommended",
    city: "Paris · 8e",
    cond: "New, full set, plastic on hardware",
    price: 12_400,
    time: "6 days · hand-carried",
    recommended: true,
  },
  {
    letter: "B",
    verdict: "Best value",
    city: "Hong Kong · IFC",
    cond: "Excellent, complete dust cover",
    price: 11_900,
    time: "11 days · DHL Plus",
  },
  {
    letter: "C",
    verdict: "On request",
    city: "Tokyo · private sale",
    cond: "New, embossed gift box",
    price: 13_750,
    time: "4–5 weeks · sale process",
  },
];

export type OrderStageState = "done" | "cur" | "wait";
export interface OrderStage {
  d: string;
  s: OrderStageState;
  t: string;
  w: string;
}

export const ORDER_STAGES: OrderStage[] = [
  {
    t: "Quote approved",
    w: "14 May · 09:42 GMT+8",
    s: "done",
    d: "You authorised Candidate A — Paris. Funds in escrow.",
  },
  {
    t: "Concierge collecting",
    w: "15 May · 11:20 GMT+1",
    s: "done",
    d: "Hsiao-Yu retrieved the piece from the Faubourg Saint-Honoré boutique.",
  },
  {
    t: "Authenticated · vault inbound",
    w: "16 May · 18:55 GMT+8",
    s: "cur",
    d: "First inspection complete in Paris. Currently in the air — Air France 197.",
  },
  {
    t: "Second inspection · Taipei",
    w: "expected 19 May",
    s: "wait",
    d: "18-image macro dossier will be uploaded to your file.",
  },
  {
    t: "Hand-delivered",
    w: "expected 21 May · 14:00–18:00",
    s: "wait",
    d: "Signature on receipt · lifetime authentication card included.",
  },
];

export interface PaymentMethod {
  id: "card" | "ecpay" | "line";
  name: string;
  sub: string;
}
export const PAYMENT_METHODS: PaymentMethod[] = [
  { id: "card", name: "Card", sub: "Stripe · 3DS" },
  { id: "ecpay", name: "ECPay", sub: "TWD only · 0% interest 12mo" },
  { id: "line", name: "LINE Pay", sub: "instant · TWD" },
];
