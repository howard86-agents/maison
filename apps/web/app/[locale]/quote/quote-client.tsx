"use client";

import { QUOTE_CANDIDATES, type QuoteCandidate } from "@maison/data";
import { useRouter } from "next/navigation";
import { formatCcy } from "../../../lib/currency";
import { ImageOrPlaceholder } from "../../_components/product-image";
import { localeHref, useLocale } from "../../providers";

const MATCH_ID_BY_LETTER: Record<QuoteCandidate["letter"], string> = {
  A: "m1",
  B: "m2",
  C: "m3",
};

export function QuoteClient() {
  const { ccy, locale, t } = useLocale();
  const router = useRouter();
  const q = t.quote;
  return (
    <div className="fade-in shell">
      <div className="grid grid-cols-[1.2fr_1fr] items-start gap-14 pt-12 pb-8">
        <div>
          <div className="eyebrow">{q.dossierLine}</div>
          <h1 className="display mt-[18px] font-normal text-[60px] leading-[0.98] tracking-[-0.02em]">
            {q.headline1}
            <em className="text-accent italic">{q.headlineEm}</em>
            {q.headline2.split("\n").map((seg, i, arr) => (
              <span key={seg}>
                {seg}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className="mt-[18px] max-w-[46ch] text-[14.5px] text-ink-2">
            {q.noteIntroA}
            <span className="font-display text-ink italic">
              {q.conciergeName}
            </span>
            {q.noteIntroB}
          </p>
        </div>
        <div className="border-[0.5px] border-line bg-paper p-6">
          <div className="row gap-[14px]">
            <div className="grid size-[52px] place-items-center rounded-full bg-ink font-display text-[22px] text-bg">
              HY
            </div>
            <div>
              <div className="display text-[18px]">{q.conciergeFull}</div>
              <div className="mono text-[10.5px] text-ink-3 tracking-[0.14em]">
                {q.conciergeMeta}
              </div>
            </div>
          </div>
          <div className="hairline my-[18px]" />
          <div className="fine text-ink-2 leading-[1.6]">
            {q.repliesBetween}
          </div>
          <button
            className="btn btn-ghost mt-[18px] w-full justify-center"
            type="button"
          >
            {q.openLine}
          </button>
        </div>
      </div>

      <div className="grid-3 gap-6 pb-8">
        {QUOTE_CANDIDATES.map((c) => {
          const candidate = q.candidates[c.letter];
          return (
            <div
              className={`card p-[22px] ${c.recommended ? "border-ink" : "border-line"}`}
              key={c.letter}
            >
              <div className="row-between">
                <div
                  className={`mono text-[10px] tracking-[0.14em] ${c.recommended ? "text-accent" : "text-ink-3"}`}
                >
                  {c.letter} · {candidate.verdict}
                </div>
                {c.recommended && (
                  <div className="mono text-[10px] text-accent tracking-[0.14em]">
                    {q.holding}
                  </div>
                )}
              </div>
              <ImageOrPlaceholder
                alt={`Birkett Saddle 25 · ${candidate.verdict}`}
                aspect="4x5"
                caption={`candidate ${c.letter}`}
                id={MATCH_ID_BY_LETTER[c.letter]}
                kind="matches"
                sizes="(min-width: 1280px) 33vw, 50vw"
                style={{ marginTop: 14 }}
              />
              <div className="display mt-[14px] text-[22px] tracking-[-0.01em]">
                Birkett Saddle 25
              </div>
              <div className="muted mt-1 text-[12.5px]">{candidate.cond}</div>
              <div className="hairline my-[14px]" />
              <div className="grid grid-cols-2 gap-[10px] text-[12.5px]">
                <div>
                  <div className="mono text-[9.5px] text-ink-3 tracking-[0.14em]">
                    {q.sourceLabel}
                  </div>
                  <div>{candidate.city}</div>
                </div>
                <div>
                  <div className="mono text-[9.5px] text-ink-3 tracking-[0.14em]">
                    {q.deliveryLabel}
                  </div>
                  <div>{candidate.time}</div>
                </div>
              </div>
              <div className="hairline my-[14px]" />
              <div className="row-between">
                <div className="display text-[26px]">
                  {formatCcy(c.price, ccy)}
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => router.push(localeHref(locale, "/checkout"))}
                  type="button"
                >
                  {q.approve} <span>→</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-6 pb-20">
        <div className="card-paper p-6">
          <div className="eyebrow">{q.priceEyebrow}</div>
          <div className="display mt-3 text-[20px] leading-[1.3]">
            {q.priceTitle}
          </div>
          <p className="mt-2 text-[13px] text-ink-2">{q.priceCopy}</p>
        </div>
        <div className="card-paper p-6">
          <div className="eyebrow">{q.authEyebrow}</div>
          <div className="display mt-3 text-[20px] leading-[1.3]">
            {q.authTitle}
          </div>
          <p className="mt-2 text-[13px] text-ink-2">{q.authCopy}</p>
        </div>
      </div>
    </div>
  );
}
