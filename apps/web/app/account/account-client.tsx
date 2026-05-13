"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { MEMBER, ORDERS, TIERS, type Tier } from "../../lib/maison-data";
import { TierChip } from "../_components/tier-chip";

const SIDE_NAV: [string, string][] = [
  ["orders", "Concierge files"],
  ["saved", "Saved & waitlists"],
  ["addresses", "Addresses & vaults"],
  ["payments", "Payment & escrow"],
  ["notifications", "LINE & notifications"],
  ["profile", "Profile & language"],
];

const SECTION_TITLES: Record<string, string> = {
  saved: "Saved & waitlists",
  addresses: "Addresses & vaults",
  payments: "Payment & escrow",
  notifications: "LINE & notifications",
  profile: "Profile & language",
};

const TIER_HEADLINES: Record<Tier, string> = {
  Normal: "— building file",
  Professional: "Quarterly preview unlocked",
  Diamond: "By invitation",
};

export function AccountClient() {
  const router = useRouter();
  const [page, setPage] = useState("orders");
  const [tier, setTier] = useState<Tier>("Professional");

  return (
    <div className="fade-in shell">
      <div style={{ padding: "48px 0 0" }}>
        <div className="eyebrow">Member · since {MEMBER.joined}</div>
        <h1
          className="display"
          style={{
            fontSize: 56,
            marginTop: 14,
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          Welcome back,{" "}
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
            {MEMBER.firstName}
          </em>
          .
        </h1>
      </div>

      <div className="acct">
        <aside className="acct-side">
          <div className="me">
            <div className="av">ML</div>
            <div>
              <div className="display" style={{ fontSize: 17 }}>
                {MEMBER.fullName}
              </div>
              <div
                className="mono"
                style={{
                  fontSize: 10,
                  color: "var(--ink-3)",
                  letterSpacing: "0.14em",
                }}
              >
                {MEMBER.kanji} · {MEMBER.city}
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: 22,
              padding: 14,
              background: "var(--paper)",
              border: "0.5px solid var(--line)",
            }}
          >
            <div className="row-between">
              <div
                className="mono"
                style={{
                  fontSize: 10,
                  color: "var(--ink-3)",
                  letterSpacing: "0.14em",
                }}
              >
                CURRENT TIER
              </div>
              <TierChip tier={tier} />
            </div>
            <div
              className="display"
              style={{
                fontSize: 24,
                marginTop: 12,
                lineHeight: 1,
                fontStyle: tier === "Diamond" ? "normal" : "italic",
              }}
            >
              {TIER_HEADLINES[tier]}
            </div>
            <div className="fine" style={{ marginTop: 8, lineHeight: 1.6 }}>
              Lifetime · {MEMBER.ledgerYtd} across {MEMBER.filesCompleted}{" "}
              files. Next review: Aug 2026.
            </div>
            <div style={{ marginTop: 12, display: "flex", gap: 6 }}>
              {TIERS.map((tl) => (
                <button
                  key={tl}
                  onClick={() => setTier(tl)}
                  style={{
                    flex: 1,
                    cursor: "pointer",
                    appearance: "none",
                    padding: "6px 4px",
                    fontSize: 10.5,
                    fontFamily: "var(--mono)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    background: tier === tl ? "var(--ink)" : "transparent",
                    color: tier === tl ? "var(--bg)" : "var(--ink-3)",
                    border:
                      "0.5px solid " +
                      (tier === tl ? "var(--ink)" : "var(--line)"),
                  }}
                  type="button"
                >
                  {tl[0]}
                </button>
              ))}
            </div>
            <div className="fine" style={{ marginTop: 6, fontStyle: "italic" }}>
              preview a tier
            </div>
          </div>

          <nav>
            {SIDE_NAV.map(([id, label]) => (
              <button
                data-on={page === id ? "1" : "0"}
                key={id}
                onClick={() => setPage(id)}
                type="button"
              >
                {label}
              </button>
            ))}
          </nav>
        </aside>

        <div>
          {page === "orders" ? (
            <div>
              <div className="row-between">
                <div>
                  <div className="eyebrow">Files · live and historical</div>
                  <div
                    className="display"
                    style={{
                      fontSize: 32,
                      fontWeight: 400,
                      marginTop: 10,
                      letterSpacing: "-0.015em",
                    }}
                  >
                    Four files{" "}
                    <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                      open
                    </em>
                    .
                  </div>
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => router.push("/request")}
                  type="button"
                >
                  New file <span>→</span>
                </button>
              </div>

              <div className="orders-table" style={{ marginTop: 28 }}>
                <div className="row head">
                  <span>File</span>
                  <span>Piece</span>
                  <span>State</span>
                  <span>Value</span>
                  <span style={{ textAlign: "right" }}>—</span>
                </div>
                {ORDERS.map((o) => (
                  <div className="row" key={o.id}>
                    <span
                      className="mono"
                      style={{ fontSize: 11, letterSpacing: "0.06em" }}
                    >
                      {o.id}
                      <div
                        style={{
                          fontSize: 9.5,
                          color: "var(--ink-3)",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {o.date}
                      </div>
                    </span>
                    <span
                      className="display"
                      style={{ fontSize: 17, letterSpacing: "-0.01em" }}
                    >
                      {o.item}
                    </span>
                    <span>
                      <span className="pill-state" data-state={o.state}>
                        {o.state}
                      </span>
                    </span>
                    <span className="numeric mono" style={{ fontSize: 12.5 }}>
                      {o.value}
                    </span>
                    <span style={{ textAlign: "right" }}>
                      <button
                        className="btn-link"
                        onClick={() => router.push("/order")}
                        type="button"
                      >
                        View
                      </button>
                    </span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: 32,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 20,
                }}
              >
                <div className="card-paper" style={{ padding: 22 }}>
                  <div className="eyebrow">Concierge ledger · year to date</div>
                  <div
                    className="display"
                    style={{
                      fontSize: 32,
                      marginTop: 10,
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {MEMBER.ledgerYtd}
                  </div>
                  <div className="fine" style={{ marginTop: 4 }}>
                    {MEMBER.filesCompleted} files completed · 0 rejected at
                    second inspection
                  </div>
                </div>
                <div className="card-paper" style={{ padding: 22 }}>
                  <div className="eyebrow">LINE concierge channel</div>
                  <div
                    className="display"
                    style={{ fontSize: 19, marginTop: 10, lineHeight: 1.3 }}
                  >
                    {MEMBER.lineChannel} · {MEMBER.lineMedianReply} median reply
                  </div>
                  <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
                    <button className="btn btn-ghost" type="button">
                      Open channel
                    </button>
                    <button className="btn-link" type="button">
                      Re-bind LINE
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="card-paper" style={{ padding: 40, marginTop: 16 }}>
              <div className="eyebrow">Section preview</div>
              <h2
                className="display"
                style={{
                  fontSize: 36,
                  fontWeight: 400,
                  letterSpacing: "-0.015em",
                  marginTop: 12,
                }}
              >
                <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                  {SECTION_TITLES[page]}
                </em>
              </h2>
              <p
                style={{
                  marginTop: 14,
                  maxWidth: "60ch",
                  color: "var(--ink-2)",
                  fontSize: 14,
                }}
              >
                Sketched here for the prototype. The shape of this surface
                follows the same restraint — a single column, generous airline
                above the fold, no calls-to-action competing for the eye.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
