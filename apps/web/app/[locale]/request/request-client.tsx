"use client";

import { AI_MATCHES } from "@maison/data";
import { useRouter } from "next/navigation";
import { type ChangeEvent, useRef, useState } from "react";
import { CCY, formatCcy } from "../../../lib/currency";
import { type Dictionary, formatTemplate } from "../../../lib/translations";
import { ImageOrPlaceholder } from "../../_components/product-image";
import { localeHref, useLocale } from "../../providers";

interface FormState {
  brand: string;
  budgetHi: string;
  budgetLow: string;
  cond: string;
  deadline: string;
  model: string;
  notes: string;
}

const AI_DELAY_MS = 1400;

function makeInitialForm(t: Dictionary["request"]): FormState {
  return {
    brand: "Birkett",
    model: "Saddle 25 · Étoupe",
    budgetLow: "USD 10,000",
    budgetHi: "USD 14,500",
    notes: "",
    cond: t.condExcellent,
    deadline: "",
  };
}

function UploadStep({
  t,
  uploadPreview,
  setUploadPreview,
  runningAI,
  aiDone,
  runAI,
}: {
  t: Dictionary["request"];
  uploadPreview: string | null;
  setUploadPreview: (v: string | null) => void;
  runningAI: boolean;
  aiDone: boolean;
  runAI: () => void;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const hasUpload = uploadPreview !== null;

  const onFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setUploadPreview(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="stack-lg">
      <div className="field gap-[10px]">
        <label htmlFor="req-piece-upload">{t.pieceLabel}</label>
        <div className="upload-zone" data-has={hasUpload ? "1" : "0"}>
          <div className="drop-target">
            {hasUpload ? (
              <div
                className="ph ph-square brackets size-full bg-center bg-cover"
                data-ph="reference · uploaded"
                style={{ backgroundImage: `url(${uploadPreview})` }}
              />
            ) : (
              <div className="muted text-center text-[12px]">
                <div className="display text-[56px] text-ink-3 italic leading-none">
                  +
                </div>
                <div className="mono mt-2 text-[10px] tracking-[0.16em]">
                  {t.dragOrBrowse}
                </div>
              </div>
            )}
          </div>
          <div>
            <h3>{hasUpload ? t.uploadedH : t.emptyH}</h3>
            <p>{hasUpload ? t.uploadedP : t.emptyP}</p>
            <div className="actions">
              {hasUpload ? (
                <>
                  <button
                    className="btn btn-ghost"
                    onClick={() => setUploadPreview(null)}
                    type="button"
                  >
                    {t.replacePhoto}
                  </button>
                  {!aiDone && (
                    <button
                      className="btn btn-primary"
                      disabled={runningAI}
                      onClick={runAI}
                      type="button"
                    >
                      {runningAI ? t.identifying : t.identify} <span>→</span>
                    </button>
                  )}
                </>
              ) : (
                <>
                  <button
                    className="btn btn-primary"
                    onClick={() => fileRef.current?.click()}
                    type="button"
                  >
                    {t.choosePhoto}
                  </button>
                  <button className="btn btn-ghost" type="button">
                    {t.pasteLink}
                  </button>
                </>
              )}
            </div>
            <input
              accept="image/*"
              hidden
              id="req-piece-upload"
              onChange={onFile}
              ref={fileRef}
              type="file"
            />
          </div>
        </div>
      </div>

      {hasUpload && (runningAI || aiDone) && (
        <div className="ai-card fade-in">
          <div className="row1">
            <span className="pulse" />
            <span>{t.aiAssistant}</span>
          </div>
          <div className="summary">
            {runningAI && !aiDone ? (
              t.aiReading
            ) : (
              <>
                {t.aiSuggestion1}
                <em>{t.aiSuggestion2}</em>
                {t.aiSuggestion3}
              </>
            )}
          </div>
          {aiDone && (
            <>
              <div className="matches">
                {AI_MATCHES.map((m) => (
                  <div className="m" key={m.id}>
                    <ImageOrPlaceholder
                      alt={`${m.brand} ${m.name}`}
                      aspect="square"
                      caption={m.id}
                      id={m.id}
                      kind="matches"
                      sizes="120px"
                    />
                    <div className="body">
                      <div className="nm">{m.name}</div>
                      <div className="pr">{m.brand}</div>
                      <div className="pct">
                        {formatTemplate(t.aiConfidence, { n: m.confidence })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="footnote">
                <strong>{t.aiFootnoteStrong}</strong>
                {t.aiFootnote}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

function DetailsStep({
  t,
  form,
  setForm,
}: {
  t: Dictionary["request"];
  form: FormState;
  setForm: (f: FormState) => void;
}) {
  const upd = (k: keyof FormState, v: string) => setForm({ ...form, [k]: v });
  return (
    <div className="stack-lg">
      <div className="grid grid-cols-2 gap-8">
        <div className="field">
          <label htmlFor="req-brand">{t.brandLabel}</label>
          <input
            id="req-brand"
            onChange={(e) => upd("brand", e.target.value)}
            placeholder={t.brandPh}
            value={form.brand}
          />
        </div>
        <div className="field">
          <label htmlFor="req-model">{t.modelLabel}</label>
          <input
            id="req-model"
            onChange={(e) => upd("model", e.target.value)}
            placeholder={t.modelPh}
            value={form.model}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="field">
          <label htmlFor="req-budget-low">{t.budgetLowLabel}</label>
          <input
            id="req-budget-low"
            onChange={(e) => upd("budgetLow", e.target.value)}
            placeholder="USD 10,000"
            value={form.budgetLow}
          />
          <div className="field-help">{t.budgetLowHelp}</div>
        </div>
        <div className="field">
          <label htmlFor="req-budget-hi">{t.budgetHiLabel}</label>
          <input
            id="req-budget-hi"
            onChange={(e) => upd("budgetHi", e.target.value)}
            placeholder="USD 14,500"
            value={form.budgetHi}
          />
          <div className="field-help">{t.budgetHiHelp}</div>
        </div>
      </div>

      <div className="field">
        <label htmlFor="req-notes">{t.notesLabel}</label>
        <textarea
          id="req-notes"
          onChange={(e) => upd("notes", e.target.value)}
          placeholder={t.notesPh}
          rows={4}
          value={form.notes}
        />
        <div className="field-help">{t.notesHelp}</div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="field">
          <label htmlFor="req-cond">{t.condLabel}</label>
          <select
            id="req-cond"
            onChange={(e) => upd("cond", e.target.value)}
            value={form.cond}
          >
            <option value={t.condNew}>{t.condNew}</option>
            <option value={t.condExcellent}>{t.condExcellent}</option>
            <option value={t.condVintage}>{t.condVintage}</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="req-deadline">{t.deadlineLabel}</label>
          <input
            id="req-deadline"
            onChange={(e) => upd("deadline", e.target.value)}
            placeholder={t.deadlinePh}
            value={form.deadline}
          />
        </div>
      </div>
    </div>
  );
}

function ReviewStep({
  t,
  form,
}: {
  t: Dictionary["request"];
  form: FormState;
}) {
  return (
    <div className="stack-lg">
      <div className="card-paper p-8">
        <div className="row-between items-start">
          <div>
            <div className="eyebrow">{t.fileReady}</div>
            <h2 className="display mx-0 mt-3 mb-1 font-normal text-[40px] tracking-[-0.015em]">
              <em className="text-accent italic">{form.brand || "Birkett"}</em>{" "}
              {form.model || "Saddle 25 · Étoupe"}
            </h2>
            <div className="muted">
              {form.budgetLow || "USD 10,000"}
              <span className="mx-2 text-ink-3">—</span>
              {form.budgetHi || "USD 14,500"}
              <span className="mx-3">·</span>
              {form.cond}
            </div>
          </div>
          <ImageOrPlaceholder
            alt="reference"
            aspect="none"
            caption="reference"
            id="reference"
            kind="reference"
            sizes="96px"
            style={{ width: 96, height: 96 }}
          />
        </div>
        <div className="hairline my-6" />
        <div className="grid grid-cols-[120px_1fr] gap-[14px] text-[13px]">
          <div className="mono text-[10px] text-ink-3 tracking-[0.14em]">
            {t.notesHeader}
          </div>
          <div>{form.notes || t.defaultNotes}</div>
          <div className="mono text-[10px] text-ink-3 tracking-[0.14em]">
            {t.byHeader}
          </div>
          <div>{form.deadline || t.noFixedDate}</div>
          <div className="mono text-[10px] text-ink-3 tracking-[0.14em]">
            {t.channelHeader}
          </div>
          <div className="row flex-wrap gap-[14px]">
            <span>
              {t.conciergeChannelLine}
              <span className="muted ml-[6px] font-mono">
                @maison_concierge
              </span>
            </span>
            <span className="tag border-positive text-positive">
              <span className="dot bg-positive" /> {t.connected}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {t.timeline.map((item) => (
          <div className="card-paper p-[18px]" key={item.t}>
            <div className="mono text-[10px] text-accent tracking-[0.14em]">
              {item.t}
            </div>
            <div className="display mt-2 text-[17px] leading-[1.2]">
              {item.w}
            </div>
            <div className="mono mt-[6px] text-[10px] text-ink-3 tracking-[0.1em]">
              {item.when}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RequestClient() {
  const router = useRouter();
  const { ccy, locale, t } = useLocale();
  const r = t.request;
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [uploadPreview, setUploadPreview] = useState<string | null>(null);
  const [runningAI, setRunningAI] = useState(false);
  const [aiDone, setAiDone] = useState(false);
  const [form, setForm] = useState<FormState>(() => makeInitialForm(r));

  const runAI = () => {
    setRunningAI(true);
    setAiDone(false);
    setTimeout(() => {
      setRunningAI(false);
      setAiDone(true);
    }, AI_DELAY_MS);
  };

  const lines: [string, string, string][] = [
    [r.conciergeFee, "USD 480", r.conciergeFeeSub],
    [r.authFee, "USD 120", r.authFeeSub],
    [r.insuredFee, "USD 95", r.insuredFeeSub],
    [r.refRate, `${CCY[ccy].sym} · ${CCY[ccy].rate}`, r.refRateSub],
  ];

  return (
    <div className="fade-in shell">
      <div className="req-header pt-12">
        <div>
          <div className="eyebrow">{r.eyebrow}</div>
          <h1>
            {r.title}
            <em>{r.titleEm}</em>.
          </h1>
        </div>
        <div className="req-step-list">
          <span className="step" data-on={step === 1 ? "1" : "0"}>
            {r.step1}
          </span>
          <span className="text-line-2">—</span>
          <span className="step" data-on={step === 2 ? "1" : "0"}>
            {r.step2}
          </span>
          <span className="text-line-2">—</span>
          <span className="step" data-on={step === 3 ? "1" : "0"}>
            {r.step3}
          </span>
        </div>
      </div>

      <div className="req">
        <div className="req-form">
          {step === 1 && (
            <UploadStep
              aiDone={aiDone}
              runAI={runAI}
              runningAI={runningAI}
              setUploadPreview={(v) => {
                setUploadPreview(v);
                if (v === null) {
                  setAiDone(false);
                  setRunningAI(false);
                }
              }}
              t={r}
              uploadPreview={uploadPreview}
            />
          )}
          {step === 2 && <DetailsStep form={form} setForm={setForm} t={r} />}
          {step === 3 && <ReviewStep form={form} t={r} />}
        </div>

        <aside className="req-aside">
          <h4>{r.filePreview}</h4>
          <div className="price-block">
            <span className="mb-1 block font-mono text-[10px] text-ink-3 tracking-[0.14em]">
              {r.estAllIn}
            </span>
            {formatCcy(13_150, ccy)}
            <div className="mt-[6px] font-sans text-[12px] text-ink-3">
              {r.indicative}
            </div>
          </div>
          <div className="breakdown">
            {lines.map(([k, v, s]) => (
              <div className="row" key={k}>
                <div className="k">
                  {k}
                  <div className="mt-[2px] text-[10.5px] text-ink-3 italic">
                    {s}
                  </div>
                </div>
                <div className="v ml-auto">{v}</div>
              </div>
            ))}
          </div>
          <div className="total">
            <div className="k">{r.holdDeposit}</div>
            <div className="v">{formatCcy(200, ccy)}</div>
          </div>
          <div className="mt-[22px] flex gap-[10px]">
            {step > 1 && (
              <button
                className="btn btn-ghost flex-none"
                onClick={() =>
                  setStep((s) => (s > 1 ? ((s - 1) as 1 | 2 | 3) : s))
                }
                type="button"
              >
                {r.backLabel}
              </button>
            )}
            {step < 3 ? (
              <button
                className="btn btn-primary flex-1"
                disabled={step === 1 && uploadPreview === null}
                onClick={() =>
                  setStep((s) => (s < 3 ? ((s + 1) as 1 | 2 | 3) : s))
                }
                type="button"
              >
                {step === 1 ? r.continueDetails : r.continueReview}{" "}
                <span>→</span>
              </button>
            ) : (
              <button
                className="btn btn-primary flex-1"
                onClick={() => router.push(localeHref(locale, "/quote"))}
                type="button"
              >
                {formatTemplate(r.dispatchFile, {
                  amount: formatCcy(200, ccy),
                })}
              </button>
            )}
          </div>
          <div className="fine mt-[18px] leading-[1.6]">{r.holdFootnote}</div>
        </aside>
      </div>
    </div>
  );
}
