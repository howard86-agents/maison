"use client";

import { useRouter } from "next/navigation";
import { formatCcy } from "../../lib/currency";
import { QUOTE_CANDIDATES } from "../../lib/maison-data";
import { Placeholder } from "../_components/placeholder";
import { useLocale } from "../providers";

export function QuoteClient() {
  const { ccy } = useLocale();
  const router = useRouter();
  return (
    <div className="fade-in shell">
      <div
        style={{
          padding: "48px 0 32px",
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: 56,
          alignItems: "start",
        }}
      >
        <div>
          <div className="eyebrow">
            Dossier · MSN — 04823 — delivered 14·05 09:08 GMT+8
          </div>
          <h1
            className="display"
            style={{
              fontSize: 60,
              marginTop: 18,
              lineHeight: 0.98,
              letterSpacing: "-0.02em",
              fontWeight: 400,
            }}
          >
            We have located{" "}
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
              three
            </em>
            <br />
            possible candidates.
          </h1>
          <p
            style={{
              marginTop: 18,
              color: "var(--ink-2)",
              maxWidth: "46ch",
              fontSize: 14.5,
            }}
          >
            A note from{" "}
            <span
              style={{
                fontFamily: "var(--display)",
                fontStyle: "italic",
                color: "var(--ink)",
              }}
            >
              Hsiao-Yu
            </span>
            , your concierge — two are currently held in Paris and Hong Kong;
            one would require a private sale to release. Pricing is all-in and
            includes shipping, duties, and our service.
          </p>
        </div>
        <div
          style={{
            background: "var(--paper)",
            border: "0.5px solid var(--line)",
            padding: 24,
          }}
        >
          <div className="row" style={{ gap: 14 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 999,
                background: "var(--ink)",
                color: "var(--bg)",
                display: "grid",
                placeItems: "center",
                fontFamily: "var(--display)",
                fontSize: 22,
              }}
            >
              HY
            </div>
            <div>
              <div className="display" style={{ fontSize: 18 }}>
                Hsiao-Yu Chen
              </div>
              <div
                className="mono"
                style={{
                  fontSize: 10.5,
                  color: "var(--ink-3)",
                  letterSpacing: "0.14em",
                }}
              >
                YOUR CONCIERGE · 11 YRS
              </div>
            </div>
          </div>
          <div className="hairline" style={{ margin: "18px 0" }} />
          <div
            className="fine"
            style={{ lineHeight: 1.6, color: "var(--ink-2)" }}
          >
            Replies between 09:00 — 19:00 GMT+8 · usually within 32 minutes.
          </div>
          <button
            className="btn btn-ghost"
            style={{ marginTop: 18, width: "100%", justifyContent: "center" }}
            type="button"
          >
            Open LINE concierge channel
          </button>
        </div>
      </div>

      <div className="grid-3" style={{ gap: 24, paddingBottom: 32 }}>
        {QUOTE_CANDIDATES.map((c) => (
          <div
            className="card"
            key={c.letter}
            style={{
              padding: 22,
              borderColor: c.recommended ? "var(--ink)" : "var(--line)",
            }}
          >
            <div className="row-between">
              <div
                className="mono"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  color: c.recommended ? "var(--accent)" : "var(--ink-3)",
                }}
              >
                {c.letter} · {c.verdict.toUpperCase()}
              </div>
              {c.recommended && (
                <div
                  className="mono"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    color: "var(--accent)",
                  }}
                >
                  ● HOLDING
                </div>
              )}
            </div>
            <Placeholder
              aspect="4x5"
              caption={`candidate ${c.letter}`}
              style={{ marginTop: 14 }}
            />
            <div
              className="display"
              style={{ marginTop: 14, fontSize: 22, letterSpacing: "-0.01em" }}
            >
              Birkett Saddle 25
            </div>
            <div className="muted" style={{ fontSize: 12.5, marginTop: 4 }}>
              {c.cond}
            </div>
            <div className="hairline" style={{ margin: "14px 0" }} />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
                fontSize: 12.5,
              }}
            >
              <div>
                <div
                  className="mono"
                  style={{
                    fontSize: 9.5,
                    color: "var(--ink-3)",
                    letterSpacing: "0.14em",
                  }}
                >
                  SOURCE
                </div>
                <div>{c.city}</div>
              </div>
              <div>
                <div
                  className="mono"
                  style={{
                    fontSize: 9.5,
                    color: "var(--ink-3)",
                    letterSpacing: "0.14em",
                  }}
                >
                  DELIVERY
                </div>
                <div>{c.time}</div>
              </div>
            </div>
            <div className="hairline" style={{ margin: "14px 0" }} />
            <div className="row-between">
              <div className="display" style={{ fontSize: 26 }}>
                {formatCcy(c.price, ccy)}
              </div>
              <button
                className="btn btn-primary"
                onClick={() => router.push("/checkout")}
                type="button"
              >
                Approve <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
          paddingBottom: 80,
        }}
      >
        <div className="card-paper" style={{ padding: 24 }}>
          <div className="eyebrow">A note on the price</div>
          <div
            className="display"
            style={{ fontSize: 20, marginTop: 12, lineHeight: 1.3 }}
          >
            Quotes are held in the source currency.
          </div>
          <p style={{ fontSize: 13, color: "var(--ink-2)", marginTop: 8 }}>
            Should JPY soften between approval and dispatch, the saving returns
            to you in full. Should it strengthen, we absorb the difference up to
            2.5% — beyond which we pause and ask before charging.
          </p>
        </div>
        <div className="card-paper" style={{ padding: 24 }}>
          <div className="eyebrow">A note on authenticity</div>
          <div
            className="display"
            style={{ fontSize: 20, marginTop: 12, lineHeight: 1.3 }}
          >
            Inspection happens twice — in source, and in Taipei.
          </div>
          <p style={{ fontSize: 13, color: "var(--ink-2)", marginTop: 8 }}>
            Any piece that fails the second inspection is returned at our
            expense, and your deposit refunded the same day. We attach an
            18-image macro dossier to every dispatched file.
          </p>
        </div>
      </div>
    </div>
  );
}
