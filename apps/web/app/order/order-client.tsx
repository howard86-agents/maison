"use client";

import { formatCcy } from "../../lib/currency";
import { ORDER_STAGES } from "../../lib/maison-data";
import { Placeholder } from "../_components/Placeholder";
import { useLocale } from "../providers";

const NOTIFICATIONS: [string, boolean][] = [
  ["LINE @maison_concierge", true],
  ["Email · 陳美琳@…", true],
  ["SMS · +886 9·· ····", false],
];

export function OrderClient() {
  const { ccy } = useLocale();
  return (
    <div className="fade-in shell">
      <div style={{ padding: "48px 0 0" }}>
        <div className="eyebrow">File MSN — 04823 · in motion</div>
        <h1
          className="display"
          style={{ fontSize: 56, marginTop: 16, fontWeight: 400, letterSpacing: "-0.02em" }}
        >
          Your{" "}
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>Saddle 25</em> is travelling.
        </h1>
      </div>

      <div className="order-shell">
        <div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: 32,
              paddingBottom: 28,
              borderBottom: "0.5px solid var(--line)",
            }}
          >
            <div className="row" style={{ gap: 18 }}>
              <Placeholder
                aspect="square"
                caption="piece"
                style={{ width: 120, height: 120 }}
              />
              <div>
                <div
                  className="mono"
                  style={{ fontSize: 10, letterSpacing: "0.14em", color: "var(--accent)" }}
                >
                  BIRKETT · 2023
                </div>
                <div
                  className="display"
                  style={{ fontSize: 26, marginTop: 6, letterSpacing: "-0.015em" }}
                >
                  Saddle 25 · Étoupe
                </div>
                <div className="muted" style={{ fontSize: 13, marginTop: 8 }}>
                  Candidate A · Paris 8e · approved 14 May
                </div>
                <div className="row" style={{ gap: 8, marginTop: 14 }}>
                  <span
                    className="tag"
                    style={{ color: "var(--accent)", borderColor: "var(--accent)" }}
                  >
                    <span className="dot" style={{ background: "var(--accent)" }} /> Stage 3 of 5
                  </span>
                  <span className="tag">ETA · 21 May</span>
                </div>
              </div>
            </div>
            <div>
              <div
                className="mono"
                style={{ fontSize: 10.5, color: "var(--ink-3)", letterSpacing: "0.14em" }}
              >
                PAID · ESCROWED
              </div>
              <div className="display" style={{ fontSize: 30, marginTop: 6 }}>
                {formatCcy(12455, ccy)}
              </div>
              <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>
                Released to maison on second-inspection clear.
              </div>
              <div className="process" style={{ marginTop: 20 }}>
                <div className="seg on" />
                <div className="seg on" />
                <div className="seg cur" />
                <div className="seg" />
                <div className="seg" />
                <div className="seg" />
              </div>
            </div>
          </div>

          <div className="timeline">
            {ORDER_STAGES.map((st, i) => (
              <div key={i} className="stage" data-on={st.s}>
                <div className="marker">
                  {st.t.split(" ").slice(0, 2).join(" ")}
                  <div className="when">{st.w}</div>
                </div>
                <div>
                  <h5>{st.t}</h5>
                  <p>{st.d}</p>
                  {st.s === "cur" && (
                    <div className="line-preview" style={{ marginTop: 14 }}>
                      <strong>Hsiao-Yu</strong> · MAISON CONCIERGE
                      <br />
                      Saddle is on AF197, due Taoyuan 06:40 tomorrow. I will photograph her at the vault before
                      lunch and dispatch by Wednesday — we are on track for your Friday hand-delivery window.
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside>
          <div
            style={{
              background: "var(--paper)",
              border: "0.5px solid var(--line)",
              padding: 22,
            }}
          >
            <div className="row" style={{ gap: 14 }}>
              <div
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 999,
                  background: "var(--ink)",
                  color: "var(--bg)",
                  display: "grid",
                  placeItems: "center",
                  fontFamily: "var(--display)",
                  fontSize: 18,
                }}
              >
                HY
              </div>
              <div>
                <div className="display" style={{ fontSize: 16 }}>
                  Hsiao-Yu Chen
                </div>
                <div
                  className="mono"
                  style={{ fontSize: 10, color: "var(--ink-3)", letterSpacing: "0.14em" }}
                >
                  YOUR CONCIERGE
                </div>
              </div>
            </div>
            <div className="hairline" style={{ margin: "16px 0" }} />
            <div className="fine" style={{ lineHeight: 1.7 }}>
              Reachable 09:00 — 19:00 GMT+8.
              <br />
              Replies in 32 mins (median).
            </div>
            <button
              className="btn btn-ghost"
              style={{ marginTop: 16, width: "100%", justifyContent: "center" }}
              type="button"
            >
              Open LINE channel
            </button>
            <button className="btn btn-link" style={{ marginTop: 12 }} type="button">
              Request photographs of the piece
            </button>
          </div>

          <div
            style={{
              background: "var(--bg-card)",
              border: "0.5px solid var(--line)",
              padding: 22,
              marginTop: 18,
            }}
          >
            <div
              className="mono"
              style={{ fontSize: 10.5, color: "var(--ink-3)", letterSpacing: "0.14em" }}
            >
              YOUR NOTIFICATIONS
            </div>
            <div
              style={{
                marginTop: 14,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                fontSize: 12.5,
              }}
            >
              {NOTIFICATIONS.map(([k, on]) => (
                <div key={k} className="row-between">
                  <span>{k}</span>
                  <span
                    className="tag"
                    style={
                      on
                        ? { color: "var(--positive)", borderColor: "var(--positive)" }
                        : { color: "var(--ink-3)" }
                    }
                  >
                    <span
                      className="dot"
                      style={{ background: on ? "var(--positive)" : "var(--ink-3)" }}
                    />
                    {on ? "on" : "off"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              background: "var(--bg-card)",
              border: "0.5px solid var(--line)",
              padding: 22,
              marginTop: 18,
            }}
          >
            <div className="eyebrow">After arrival</div>
            <ul
              style={{
                margin: "12px 0 0",
                padding: 0,
                listStyle: "none",
                fontSize: 13,
                color: "var(--ink-2)",
                display: "flex",
                flexDirection: "column",
                gap: 9,
              }}
            >
              <li>— 14-day no-questions return</li>
              <li>— Resale offer · 70% within 12 months</li>
              <li>— Lifetime authentication card</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
