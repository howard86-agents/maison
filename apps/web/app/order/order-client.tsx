"use client";

import { ORDER_STAGES } from "@maison/data";
import { formatCcy } from "../../lib/currency";
import { ImageOrPlaceholder } from "../_components/product-image";
import { useLocale } from "../providers";

export function OrderClient() {
  const { ccy, t } = useLocale();
  const o = t.order;

  const notifications: [string, boolean][] = [
    [o.notifLine, true],
    [o.notifEmail, true],
    [o.notifSms, false],
  ];

  return (
    <div className="fade-in shell">
      <div className="pt-12">
        <div className="eyebrow">{o.fileLine}</div>
        <h1 className="display mt-4 font-normal text-[56px] tracking-[-0.02em]">
          {o.title}
          <em className="text-accent italic">{o.titleEm}</em>
          {o.titleAfter}
        </h1>
      </div>

      <div className="order-shell">
        <div>
          <div className="grid grid-cols-[1.2fr_1fr] gap-8 border-line border-b-[0.5px] pb-7">
            <div className="row gap-[18px]">
              <ImageOrPlaceholder
                alt="Saddle 25 · Étoupe"
                aspect="square"
                caption="piece"
                id="p1"
                kind="products"
                sizes="120px"
                style={{ width: 120, height: 120 }}
              />
              <div>
                <div className="mono text-[10px] text-accent tracking-[0.14em]">
                  BIRKETT · 2023
                </div>
                <div className="display mt-[6px] text-[26px] tracking-[-0.015em]">
                  Saddle 25 · Étoupe
                </div>
                <div className="muted mt-2 text-[13px]">{o.candidateLine}</div>
                <div className="row mt-[14px] gap-2">
                  <span className="tag border-accent text-accent">
                    <span className="dot bg-accent" /> {o.stage3of5}
                  </span>
                  <span className="tag">{o.eta}</span>
                </div>
              </div>
            </div>
            <div>
              <div className="mono text-[10.5px] text-ink-3 tracking-[0.14em]">
                {o.paidEscrowed}
              </div>
              <div className="display mt-[6px] text-[30px]">
                {formatCcy(12_455, ccy)}
              </div>
              <div className="muted mt-1 text-[12px]">{o.releasedNote}</div>
              <div className="process mt-5">
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
            {ORDER_STAGES.map((st, i) => {
              const stageText = o.stages[i] ?? { t: st.t, w: st.w, d: st.d };
              return (
                <div className="stage" data-on={st.s} key={st.t}>
                  <div className="marker">
                    {stageText.t.split(" ").slice(0, 2).join(" ")}
                    <div className="when">{stageText.w}</div>
                  </div>
                  <div>
                    <h5>{stageText.t}</h5>
                    <p>{stageText.d}</p>
                    {st.s === "cur" && (
                      <div className="line-preview mt-[14px]">
                        <strong>{o.conciergeMessageSig.split(" · ")[0]}</strong>{" "}
                        · {o.conciergeMessageSig.split(" · ")[1] ?? ""}
                        <br />
                        {o.conciergeMessage}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <aside>
          <div className="border-[0.5px] border-line bg-paper p-[22px]">
            <div className="row gap-[14px]">
              <div className="grid size-[42px] place-items-center rounded-full bg-ink font-display text-[18px] text-bg">
                HY
              </div>
              <div>
                <div className="display text-[16px]">
                  {t.quote.conciergeFull}
                </div>
                <div className="mono text-[10px] text-ink-3 tracking-[0.14em]">
                  {o.yourConcierge}
                </div>
              </div>
            </div>
            <div className="hairline my-4" />
            <div className="fine leading-[1.7]">
              {o.reachable}
              <br />
              {o.repliesIn}
            </div>
            <button
              className="btn btn-ghost mt-4 w-full justify-center"
              type="button"
            >
              {o.openLine}
            </button>
            <button className="btn btn-link mt-3" type="button">
              {o.requestPhotos}
            </button>
          </div>

          <div className="mt-[18px] border-[0.5px] border-line bg-bg-card p-[22px]">
            <div className="mono text-[10.5px] text-ink-3 tracking-[0.14em]">
              {o.yourNotifications}
            </div>
            <div className="mt-[14px] flex flex-col gap-[10px] text-[12.5px]">
              {notifications.map(([k, on]) => (
                <div className="row-between" key={k}>
                  <span>{k}</span>
                  <span
                    className={`tag ${on ? "border-positive text-positive" : "text-ink-3"}`}
                  >
                    <span
                      className={`dot ${on ? "bg-positive" : "bg-ink-3"}`}
                    />
                    {on ? o.on : o.off}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-[18px] border-[0.5px] border-line bg-bg-card p-[22px]">
            <div className="eyebrow">{o.afterArrival}</div>
            <ul className="mx-0 mt-3 mb-0 flex list-none flex-col gap-[9px] p-0 text-[13px] text-ink-2">
              {o.afterArrivalItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
