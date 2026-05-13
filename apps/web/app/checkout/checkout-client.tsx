"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { formatCcy } from "../../lib/currency";
import { PAYMENT_METHODS } from "../../lib/maison-data";
import { Placeholder } from "../_components/Placeholder";
import { useLocale } from "../providers";

const CONSENTS: [string, boolean][] = [
  ["I confirm the piece matches my brief — and accept the concierge has discretion within the approved budget.", true],
  ["I authorise MAISON to authenticate before dispatch; failed inspections refund in full.", true],
  ["Send LINE updates from @maison_concierge at each milestone.", true],
  ["Hold my address on file for repeat carriage (encrypted at rest).", false],
];

export function CheckoutClient() {
  const { ccy } = useLocale();
  const router = useRouter();
  const [method, setMethod] = useState<"card" | "ecpay" | "line">("card");

  return (
    <div className="fade-in shell">
      <div style={{ padding: "48px 0 16px" }}>
        <div className="eyebrow">File MSN — 04823 · Candidate A · Paris</div>
        <h1
          className="display"
          style={{ fontSize: 52, marginTop: 14, fontWeight: 400, letterSpacing: "-0.02em" }}
        >
          Approve & <span style={{ fontStyle: "italic", color: "var(--accent)" }}>secure</span>.
        </h1>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr",
          gap: 56,
          padding: "32px 0 80px",
        }}
      >
        <div className="stack-lg">
          <div>
            <div className="eyebrow">01 · Delivery</div>
            <div className="hairline" style={{ marginTop: 12 }} />
            <div
              className="row-between"
              style={{ padding: "18px 0", borderBottom: "0.5px solid var(--line)" }}
            >
              <div>
                <div
                  className="display"
                  style={{ fontSize: 19, letterSpacing: "-0.01em" }}
                >
                  Chen Mei-Lin · 陳美琳
                </div>
                <div className="muted" style={{ fontSize: 12.5, marginTop: 4 }}>
                  No. 7, Lane 12, Lishui Street · Da&apos;an District · Taipei 106 · TW
                  <span style={{ marginLeft: 14, color: "var(--accent)" }}>· primary</span>
                </div>
              </div>
              <button className="btn-link" type="button">
                Change
              </button>
            </div>
            <div className="row-between" style={{ padding: "18px 0" }}>
              <div>
                <div
                  className="mono"
                  style={{ fontSize: 10.5, letterSpacing: "0.14em", color: "var(--ink-3)" }}
                >
                  CARRIAGE
                </div>
                <div style={{ marginTop: 6, fontSize: 14 }}>
                  Hand-delivered · Wed 21 May · 14:00 – 18:00 window
                </div>
              </div>
              <button className="btn-link" type="button">
                Re-time
              </button>
            </div>
          </div>

          <div>
            <div className="eyebrow">02 · Payment</div>
            <div className="hairline" style={{ marginTop: 12 }} />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 14,
                padding: "18px 0",
              }}
            >
              {PAYMENT_METHODS.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setMethod(m.id)}
                  style={{
                    textAlign: "left",
                    cursor: "pointer",
                    background: method === m.id ? "var(--bg-card)" : "var(--paper)",
                    border: `0.5px solid ${method === m.id ? "var(--ink)" : "var(--line)"}`,
                    padding: 18,
                  }}
                >
                  <div className="display" style={{ fontSize: 19, letterSpacing: "-0.01em" }}>
                    {m.name}
                  </div>
                  <div className="muted" style={{ fontSize: 11.5, marginTop: 4 }}>
                    {m.sub}
                  </div>
                  <div style={{ marginTop: 10, display: "flex", gap: 6 }}>
                    {[0, 1, 2, 3].map((i) => (
                      <div
                        key={i}
                        style={{ width: 22, height: 14, background: "var(--bg-soft)", borderRadius: 1.5 }}
                      />
                    ))}
                  </div>
                </button>
              ))}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr",
                gap: 20,
                marginTop: 8,
              }}
            >
              <div className="field">
                <label>Card number</label>
                <input placeholder="4242  4242  4242  4242" />
              </div>
              <div className="field">
                <label>Expiry</label>
                <input placeholder="05 / 29" />
              </div>
              <div className="field">
                <label>CVC</label>
                <input placeholder="•••" />
              </div>
            </div>
          </div>

          <div>
            <div className="eyebrow">03 · Consents</div>
            <div className="hairline" style={{ marginTop: 12 }} />
            <div
              style={{
                padding: "20px 0",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                fontSize: 13.5,
                color: "var(--ink-2)",
              }}
            >
              {CONSENTS.map(([copy, on], i) => (
                <label
                  key={i}
                  style={{ display: "flex", gap: 14, cursor: "pointer", alignItems: "flex-start" }}
                >
                  <span
                    style={{
                      width: 16,
                      height: 16,
                      borderRadius: 2,
                      border: "0.5px solid var(--ink-3)",
                      background: on ? "var(--ink)" : "transparent",
                      color: "var(--bg)",
                      display: "grid",
                      placeItems: "center",
                      fontSize: 10,
                      marginTop: 2,
                      flexShrink: 0,
                    }}
                  >
                    {on ? "✓" : ""}
                  </span>
                  {copy}
                </label>
              ))}
            </div>
          </div>
        </div>

        <aside
          style={{
            background: "var(--paper)",
            border: "0.5px solid var(--line)",
            padding: 28,
            alignSelf: "start",
            position: "sticky",
            top: 96,
          }}
        >
          <h4
            style={{
              fontFamily: "var(--mono)",
              fontSize: 10.5,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--ink-3)",
              margin: "0 0 14px",
            }}
          >
            Order summary
          </h4>
          <div className="row" style={{ gap: 14 }}>
            <Placeholder aspect="none" caption="A" style={{ width: 78, height: 96 }} />
            <div>
              <div
                className="mono"
                style={{ fontSize: 10, color: "var(--accent)", letterSpacing: "0.14em" }}
              >
                BIRKETT · 2023
              </div>
              <div className="display" style={{ fontSize: 17, marginTop: 4, lineHeight: 1.15 }}>
                Saddle 25 · Étoupe
              </div>
              <div className="muted" style={{ fontSize: 11.5, marginTop: 6 }}>
                Candidate A · Paris 8e
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: 22,
              paddingTop: 18,
              borderTop: "0.5px solid var(--line)",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              fontSize: 12.5,
            }}
          >
            <div className="row-between">
              <span className="muted">Piece</span>
              <span>{formatCcy(11760, ccy)}</span>
            </div>
            <div className="row-between">
              <span className="muted">Concierge service</span>
              <span>{formatCcy(480, ccy)}</span>
            </div>
            <div className="row-between">
              <span className="muted">Authentication</span>
              <span>{formatCcy(120, ccy)}</span>
            </div>
            <div className="row-between">
              <span className="muted">Insured carriage</span>
              <span>{formatCcy(95, ccy)}</span>
            </div>
            <div className="row-between">
              <span className="muted">Duty (paid)</span>
              <span className="muted">included</span>
            </div>
          </div>
          <div className="hairline" style={{ margin: "20px 0" }} />
          <div className="row-between">
            <span
              className="mono"
              style={{ fontSize: 10.5, letterSpacing: "0.16em", color: "var(--ink-3)" }}
            >
              TOTAL TODAY
            </span>
            <span className="display" style={{ fontSize: 30 }}>
              {formatCcy(12455, ccy)}
            </span>
          </div>
          <div className="fine" style={{ marginTop: 4 }}>
            Held in escrow until vault inspection · refunded if rejected.
          </div>
          <button
            className="btn btn-primary"
            style={{ marginTop: 22, width: "100%", justifyContent: "center" }}
            onClick={() => router.push("/order")}
          >
            Authorise · {formatCcy(12455, ccy)} <span>→</span>
          </button>
          <div className="fine" style={{ marginTop: 14, lineHeight: 1.6, textAlign: "center" }}>
            256-bit · Stripe · escrowed in TWD
          </div>
        </aside>
      </div>
    </div>
  );
}
