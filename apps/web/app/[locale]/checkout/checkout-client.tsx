"use client";

import { PAYMENT_METHODS } from "@maison/data";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { formatCcy } from "../../../lib/currency";
import { formatTemplate } from "../../../lib/translations";
import { ImageOrPlaceholder } from "../../_components/product-image";
import { localeHref, useLocale } from "../../providers";

export function CheckoutClient() {
  const { ccy, locale, t } = useLocale();
  const router = useRouter();
  const c = t.checkout;
  const [method, setMethod] = useState<"card" | "ecpay" | "line">("card");

  const consents: [string, boolean][] = c.consents.map((copy, i) => [
    copy,
    i !== 3,
  ]);

  return (
    <div className="fade-in shell">
      <div className="pt-12 pb-4">
        <div className="eyebrow">{c.fileLine}</div>
        <h1 className="display mt-[14px] font-normal text-[52px] tracking-[-0.02em]">
          {c.title}
          <span className="text-accent italic">{c.titleEm}</span>.
        </h1>
      </div>

      <div className="grid grid-cols-[1.5fr_1fr] gap-14 pt-8 pb-20">
        <div className="stack-lg">
          <div>
            <div className="eyebrow">{c.deliveryEyebrow}</div>
            <div className="hairline mt-3" />
            <div className="row-between border-line border-b-[0.5px] py-[18px]">
              <div>
                <div className="display text-[19px] tracking-[-0.01em]">
                  {c.customerName}
                </div>
                <div className="muted mt-1 text-[12.5px]">
                  {c.customerAddress}
                  <span className="ml-[14px] text-accent">{c.primary}</span>
                </div>
              </div>
              <button className="btn-link" type="button">
                {c.change}
              </button>
            </div>
            <div className="row-between py-[18px]">
              <div>
                <div className="mono text-[10.5px] text-ink-3 tracking-[0.14em]">
                  {c.carriageLabel}
                </div>
                <div className="mt-[6px] text-[14px]">{c.carriageValue}</div>
              </div>
              <button className="btn-link" type="button">
                {c.retime}
              </button>
            </div>
          </div>

          <div>
            <div className="eyebrow">{c.paymentEyebrow}</div>
            <div className="hairline mt-3" />
            <div className="grid grid-cols-3 gap-[14px] py-[18px]">
              {PAYMENT_METHODS.map((m) => {
                const active = method === m.id;
                const labels = c.methods[m.id];
                return (
                  <button
                    className={`cursor-pointer border-[0.5px] p-[18px] text-left ${active ? "border-ink bg-bg-card" : "border-line bg-paper"}`}
                    key={m.id}
                    onClick={() => setMethod(m.id)}
                    type="button"
                  >
                    <div className="display text-[19px] tracking-[-0.01em]">
                      {labels.name}
                    </div>
                    <div className="muted mt-1 text-[11.5px]">{labels.sub}</div>
                    <div className="mt-[10px] flex gap-[6px]">
                      {[0, 1, 2, 3].map((i) => (
                        <div
                          className="h-[14px] w-[22px] rounded-[1.5px] bg-bg-soft"
                          key={i}
                        />
                      ))}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-2 grid grid-cols-[2fr_1fr_1fr] gap-5">
              <div className="field">
                <label htmlFor="card-number">{c.cardNumber}</label>
                <input id="card-number" placeholder="4242  4242  4242  4242" />
              </div>
              <div className="field">
                <label htmlFor="card-expiry">{c.expiry}</label>
                <input id="card-expiry" placeholder="05 / 29" />
              </div>
              <div className="field">
                <label htmlFor="card-cvc">{c.cvc}</label>
                <input id="card-cvc" placeholder="•••" />
              </div>
            </div>
          </div>

          <div>
            <div className="eyebrow">{c.consentsEyebrow}</div>
            <div className="hairline mt-3" />
            <div className="flex flex-col gap-[14px] py-5 text-[13.5px] text-ink-2">
              {consents.map(([copy, on]) => (
                <label
                  className="flex cursor-pointer items-start gap-[14px]"
                  key={copy}
                >
                  <input
                    className="pointer-events-none absolute size-px opacity-0"
                    defaultChecked={on}
                    type="checkbox"
                  />
                  <span
                    aria-hidden="true"
                    className={`mt-[2px] grid size-4 shrink-0 place-items-center rounded-[2px] border-[0.5px] border-ink-3 text-[10px] text-bg ${on ? "bg-ink" : "bg-transparent"}`}
                  >
                    {on ? "✓" : ""}
                  </span>
                  {copy}
                </label>
              ))}
            </div>
          </div>
        </div>

        <aside className="sticky top-24 self-start border-[0.5px] border-line bg-paper p-7">
          <h4 className="mx-0 mt-0 mb-[14px] font-mono text-[10.5px] text-ink-3 uppercase tracking-[0.16em]">
            {c.summary}
          </h4>
          <div className="row gap-[14px]">
            <ImageOrPlaceholder
              alt={c.productName}
              aspect="none"
              caption="A"
              id="p1"
              kind="products"
              sizes="78px"
              style={{ width: 78, height: 96 }}
            />
            <div>
              <div className="mono text-[10px] text-accent tracking-[0.14em]">
                {c.productEyebrow}
              </div>
              <div className="display mt-1 text-[17px] leading-[1.15]">
                {c.productName}
              </div>
              <div className="muted mt-[6px] text-[11.5px]">{c.productSub}</div>
            </div>
          </div>
          <div className="mt-[22px] flex flex-col gap-[10px] border-line border-t-[0.5px] pt-[18px] text-[12.5px]">
            <div className="row-between">
              <span className="muted">{c.piece}</span>
              <span>{formatCcy(11_760, ccy)}</span>
            </div>
            <div className="row-between">
              <span className="muted">{c.conciergeService}</span>
              <span>{formatCcy(480, ccy)}</span>
            </div>
            <div className="row-between">
              <span className="muted">{c.authentication}</span>
              <span>{formatCcy(120, ccy)}</span>
            </div>
            <div className="row-between">
              <span className="muted">{c.insuredCarriage}</span>
              <span>{formatCcy(95, ccy)}</span>
            </div>
            <div className="row-between">
              <span className="muted">{c.dutyPaid}</span>
              <span className="muted">{c.included}</span>
            </div>
          </div>
          <div className="hairline my-5" />
          <div className="row-between">
            <span className="mono text-[10.5px] text-ink-3 tracking-[0.16em]">
              {c.totalToday}
            </span>
            <span className="display text-[30px]">
              {formatCcy(12_455, ccy)}
            </span>
          </div>
          <div className="fine mt-1">{c.escrowedNote}</div>
          <button
            className="btn btn-primary mt-[22px] w-full justify-center"
            onClick={() => router.push(localeHref(locale, "/order"))}
            type="button"
          >
            {formatTemplate(c.authorise, { amount: formatCcy(12_455, ccy) })}{" "}
            <span>→</span>
          </button>
          <div className="fine mt-[14px] text-center leading-[1.6]">
            {c.securityNote}
          </div>
        </aside>
      </div>
    </div>
  );
}
