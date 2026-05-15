"use client";

import { MEMBER, ORDERS, TIERS, type Tier } from "@maison/data";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { formatTemplate } from "../../../lib/translations";
import { TierChip } from "../../_components/tier-chip";
import { localeHref, useLocale } from "../../providers";

type SectionKey =
  | "orders"
  | "saved"
  | "addresses"
  | "payments"
  | "notifications"
  | "profile";

export function AccountClient() {
  const router = useRouter();
  const { locale, t } = useLocale();
  const a = t.account;
  const [page, setPage] = useState<SectionKey>("orders");
  const [tier, setTier] = useState<Tier>("Professional");

  const sideNav: [SectionKey, string][] = [
    ["orders", a.nav.orders],
    ["saved", a.nav.saved],
    ["addresses", a.nav.addresses],
    ["payments", a.nav.payments],
    ["notifications", a.nav.notifications],
    ["profile", a.nav.profile],
  ];

  return (
    <div className="fade-in shell">
      <div className="pt-12">
        <div className="eyebrow">
          {formatTemplate(a.memberSince, { date: MEMBER.joined })}
        </div>
        <h1 className="display mt-[14px] font-normal text-[56px] leading-none tracking-[-0.02em]">
          {a.welcome1}
          <em className="text-accent italic">
            {formatTemplate(a.welcomeEm, { name: MEMBER.firstName })}
          </em>
          .
        </h1>
      </div>

      <div className="acct">
        <aside className="acct-side">
          <div className="me">
            <div className="av">ML</div>
            <div>
              <div className="display text-[17px]">{a.fullName}</div>
              <div className="mono text-[10px] text-ink-3 tracking-[0.14em]">
                {a.cityLine}
              </div>
            </div>
          </div>

          <div className="mt-[22px] border-[0.5px] border-line bg-paper p-[14px]">
            <div className="row-between">
              <div className="mono text-[10px] text-ink-3 tracking-[0.14em]">
                {a.currentTier}
              </div>
              <TierChip tier={tier} />
            </div>
            <div
              className={`display mt-3 text-[24px] leading-none ${tier === "Diamond" ? "not-italic" : "italic"}`}
            >
              {a.tierHeadlines[tier]}
            </div>
            <div className="fine mt-2 leading-[1.6]">
              {formatTemplate(a.ledgerLifetime, {
                ledger: MEMBER.ledgerYtd,
                files: MEMBER.filesCompleted,
              })}
            </div>
            <div className="mt-3 flex gap-[6px]">
              {TIERS.map((tl) => {
                const active = tier === tl;
                return (
                  <button
                    className={`flex-1 cursor-pointer appearance-none border-[0.5px] px-1 py-[6px] font-mono text-[10.5px] uppercase tracking-[0.1em] ${active ? "border-ink bg-ink text-bg" : "border-line bg-transparent text-ink-3"}`}
                    key={tl}
                    onClick={() => setTier(tl)}
                    type="button"
                  >
                    {tl[0]}
                  </button>
                );
              })}
            </div>
            <div className="fine mt-[6px] italic">{a.previewTier}</div>
          </div>

          <nav>
            {sideNav.map(([id, label]) => (
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
                  <div className="eyebrow">{a.filesEyebrow}</div>
                  <div className="display mt-[10px] font-normal text-[32px] tracking-[-0.015em]">
                    {a.filesOpen1}
                    <em className="text-accent italic">{a.filesOpenEm}</em>.
                  </div>
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => router.push(localeHref(locale, "/request"))}
                  type="button"
                >
                  {a.newFile} <span>→</span>
                </button>
              </div>

              <div className="orders-table mt-7">
                <div className="row head">
                  <span>{a.tableFile}</span>
                  <span>{a.tablePiece}</span>
                  <span>{a.tableState}</span>
                  <span>{a.tableValue}</span>
                  <span className="text-right">—</span>
                </div>
                {ORDERS.map((o) => {
                  const itemLabel = a.orderItems[o.id] ?? o.item;
                  const valueLabel = a.orderValues[o.id] ?? o.value;
                  const stateLabel =
                    a.states[o.state as keyof typeof a.states] ?? o.state;
                  return (
                    <div className="row" key={o.id}>
                      <span className="mono text-[11px] tracking-[0.06em]">
                        {o.id}
                        <div className="text-[9.5px] text-ink-3 tracking-[0.1em]">
                          {o.date}
                        </div>
                      </span>
                      <span className="display text-[17px] tracking-[-0.01em]">
                        {itemLabel}
                      </span>
                      <span>
                        <span className="pill-state" data-state={o.state}>
                          {stateLabel}
                        </span>
                      </span>
                      <span className="numeric mono text-[12.5px]">
                        {valueLabel}
                      </span>
                      <span className="text-right">
                        <button
                          className="btn-link"
                          onClick={() =>
                            router.push(localeHref(locale, "/order"))
                          }
                          type="button"
                        >
                          {a.view}
                        </button>
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-5">
                <div className="card-paper p-[22px]">
                  <div className="eyebrow">{a.ledgerYtdEyebrow}</div>
                  <div className="display mt-[10px] text-[32px] tracking-[-0.015em]">
                    {formatTemplate(a.ledgerYtdValue, {
                      ledger: MEMBER.ledgerYtd,
                    })}
                  </div>
                  <div className="fine mt-1">
                    {formatTemplate(a.ledgerYtdNote, {
                      files: MEMBER.filesCompleted,
                    })}
                  </div>
                </div>
                <div className="card-paper p-[22px]">
                  <div className="eyebrow">{a.lineChannelEyebrow}</div>
                  <div className="display mt-[10px] text-[19px] leading-[1.3]">
                    {formatTemplate(a.lineChannelValue, {
                      channel: MEMBER.lineChannel,
                      reply: MEMBER.lineMedianReply,
                    })}
                  </div>
                  <div className="mt-[14px] flex gap-[10px]">
                    <button className="btn btn-ghost" type="button">
                      {a.openChannel}
                    </button>
                    <button className="btn-link" type="button">
                      {a.rebindLine}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="card-paper mt-4 p-10">
              <div className="eyebrow">{a.sectionPreview}</div>
              <h2 className="display mt-3 font-normal text-[36px] tracking-[-0.015em]">
                <em className="text-accent italic">{a.nav[page]}</em>
              </h2>
              <p className="mt-[14px] max-w-[60ch] text-[14px] text-ink-2">
                {a.sectionCopy}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
