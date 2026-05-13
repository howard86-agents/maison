"use client";

import { useRouter } from "next/navigation";
import { useRef, useState, type ChangeEvent } from "react";
import { CCY, formatCcy } from "../../lib/currency";
import { AI_MATCHES } from "../../lib/maison-data";
import { Placeholder } from "../_components/Placeholder";
import { useLocale } from "../providers";

type FormState = {
  brand: string;
  model: string;
  budgetLow: string;
  budgetHi: string;
  notes: string;
  cond: string;
  deadline: string;
};

const INITIAL_FORM: FormState = {
  brand: "Birkett",
  model: "Saddle 25 · Étoupe",
  budgetLow: "USD 10,000",
  budgetHi: "USD 14,500",
  notes: "",
  cond: "Excellent · pre-loved, no visible wear",
  deadline: "Before September",
};

const AI_DELAY_MS = 1400;

function UploadStep({
  uploadPreview,
  setUploadPreview,
  runningAI,
  aiDone,
  runAI,
}: {
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
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") setUploadPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="stack-lg">
      <div className="field" style={{ gap: 10 }}>
        <label>01 · The piece</label>
        <div className="upload-zone" data-has={hasUpload ? "1" : "0"}>
          <div className="drop-target">
            {hasUpload ? (
              <div
                className="ph ph-square brackets"
                data-ph="reference · uploaded"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundImage: `url(${uploadPreview})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            ) : (
              <div className="muted" style={{ fontSize: 12, textAlign: "center" }}>
                <div
                  className="display"
                  style={{ fontSize: 56, fontStyle: "italic", color: "var(--ink-3)", lineHeight: 1 }}
                >
                  +
                </div>
                <div className="mono" style={{ marginTop: 8, fontSize: 10, letterSpacing: "0.16em" }}>
                  DRAG · OR · BROWSE
                </div>
              </div>
            )}
          </div>
          <div>
            <h3>{hasUpload ? "A handsome reference." : "Add the piece you have in mind."}</h3>
            <p>
              {hasUpload
                ? "Add up to 4 more photographs from different angles, a link, or a sentence about what you remember."
                : "Drop a screenshot, a runway photo, or even a snapshot taken in a friend’s closet. We accept JPG, HEIC, PNG up to 24MB."}
            </p>
            <div className="actions">
              {!hasUpload ? (
                <>
                  <button className="btn btn-primary" onClick={() => fileRef.current?.click()}>
                    Choose a photograph
                  </button>
                  <button className="btn btn-ghost" type="button">
                    Paste a link instead
                  </button>
                </>
              ) : (
                <>
                  <button className="btn btn-ghost" onClick={() => setUploadPreview(null)}>
                    Replace photograph
                  </button>
                  {!aiDone && (
                    <button className="btn btn-primary" onClick={runAI} disabled={runningAI}>
                      {runningAI ? "Identifying…" : "Identify with our assistant"} <span>→</span>
                    </button>
                  )}
                </>
              )}
            </div>
            <input type="file" ref={fileRef} hidden accept="image/*" onChange={onFile} />
          </div>
        </div>
      </div>

      {hasUpload && (runningAI || aiDone) && (
        <div className="ai-card fade-in">
          <div className="row1">
            <span className="pulse" />
            <span>Concierge assistant — suggestion only</span>
          </div>
          <div className="summary">
            {runningAI && !aiDone ? (
              <>Reading hardware, stitching, and grain…</>
            ) : (
              <>
                This appears to be a <em>Birkett Saddle, size 25, Étoupe Togo</em> — circa 2023, hardware in
                palladium.
              </>
            )}
          </div>
          {aiDone && (
            <>
              <div className="matches">
                {AI_MATCHES.map((m) => (
                  <div key={m.id} className="m">
                    <Placeholder aspect="square" caption={m.id} />
                    <div className="body">
                      <div className="nm">{m.name}</div>
                      <div className="pr">{m.brand}</div>
                      <div className="pct">{m.confidence}% confidence</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="footnote">
                <strong>A note from MAISON.</strong> Identification is a suggestion to speed your concierge along —
                never a verification. Your dossier is reviewed and confirmed by a human within 24 hours.
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

function DetailsStep({ form, setForm }: { form: FormState; setForm: (f: FormState) => void }) {
  const upd = (k: keyof FormState, v: string) => setForm({ ...form, [k]: v });
  return (
    <div className="stack-lg">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
        <div className="field">
          <label>02 · Maison or house</label>
          <input
            value={form.brand}
            onChange={(e) => upd("brand", e.target.value)}
            placeholder="e.g. Birkett, Aurel, Couronne"
          />
        </div>
        <div className="field">
          <label>02 · Model or reference</label>
          <input
            value={form.model}
            onChange={(e) => upd("model", e.target.value)}
            placeholder="Saddle 25 · Étoupe · 2023"
          />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
        <div className="field">
          <label>03 · Budget — comfortable</label>
          <input
            value={form.budgetLow}
            onChange={(e) => upd("budgetLow", e.target.value)}
            placeholder="USD 10,000"
          />
          <div className="field-help">What we should aim for if the perfect piece appears.</div>
        </div>
        <div className="field">
          <label>03 · Budget — ceiling</label>
          <input
            value={form.budgetHi}
            onChange={(e) => upd("budgetHi", e.target.value)}
            placeholder="USD 14,500"
          />
          <div className="field-help">The line beyond which we should pause and ask.</div>
        </div>
      </div>

      <div className="field">
        <label>04 · Notes for your concierge</label>
        <textarea
          rows={4}
          value={form.notes}
          onChange={(e) => upd("notes", e.target.value)}
          placeholder="The pre-loved kind is welcome, but please nothing visibly worn at the corners. The colour should read warmer in daylight than the reference photograph — closer to a milky coffee."
        />
        <div className="field-help">
          Anything specific, sentimental, or non-negotiable. Your concierge reads every word.
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
        <div className="field">
          <label>05 · Acceptable condition</label>
          <select value={form.cond} onChange={(e) => upd("cond", e.target.value)}>
            <option>New, unworn — original packaging</option>
            <option>Excellent · pre-loved, no visible wear</option>
            <option>Vintage · any era, original elements only</option>
          </select>
        </div>
        <div className="field">
          <label>05 · Latest acceptable delivery</label>
          <input
            value={form.deadline}
            onChange={(e) => upd("deadline", e.target.value)}
            placeholder="No rush · or specify a date"
          />
        </div>
      </div>
    </div>
  );
}

function ReviewStep({ form }: { form: FormState }) {
  return (
    <div className="stack-lg">
      <div className="card-paper" style={{ padding: 32 }}>
        <div className="row-between" style={{ alignItems: "flex-start" }}>
          <div>
            <div className="eyebrow">File · ready to dispatch</div>
            <h2
              className="display"
              style={{ fontSize: 40, fontWeight: 400, margin: "12px 0 4px", letterSpacing: "-0.015em" }}
            >
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>{form.brand || "Birkett"}</em>{" "}
              {form.model || "Saddle 25 · Étoupe"}
            </h2>
            <div className="muted">
              {form.budgetLow || "USD 10,000"}
              <span style={{ margin: "0 8px", color: "var(--ink-3)" }}>—</span>
              {form.budgetHi || "USD 14,500"}
              <span style={{ margin: "0 12px" }}>·</span>
              {form.cond}
            </div>
          </div>
          <Placeholder aspect="none" caption="reference" style={{ width: 96, height: 96 }} />
        </div>
        <div className="hairline" style={{ margin: "24px 0" }} />
        <div style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 14, fontSize: 13 }}>
          <div
            className="mono"
            style={{ color: "var(--ink-3)", fontSize: 10, letterSpacing: "0.14em" }}
          >
            NOTES
          </div>
          <div>
            {form.notes ||
              "Pre-loved is welcome, nothing visibly worn at corners. Warmer reading than the reference photograph — closer to milky coffee."}
          </div>
          <div
            className="mono"
            style={{ color: "var(--ink-3)", fontSize: 10, letterSpacing: "0.14em" }}
          >
            BY
          </div>
          <div>{form.deadline || "No fixed date"}</div>
          <div
            className="mono"
            style={{ color: "var(--ink-3)", fontSize: 10, letterSpacing: "0.14em" }}
          >
            CHANNEL
          </div>
          <div className="row" style={{ gap: 14, flexWrap: "wrap" }}>
            <span>
              Concierge channel · LINE
              <span className="muted" style={{ marginLeft: 6, fontFamily: "var(--mono)" }}>
                @maison_concierge
              </span>
            </span>
            <span className="tag" style={{ color: "var(--positive)", borderColor: "var(--positive)" }}>
              <span className="dot" style={{ background: "var(--positive)" }} /> connected
            </span>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {(
          [
            ["T+0", "You submit the file", "Now"],
            ["T+24h", "Your concierge dossier arrives", "Wed · 14 May"],
            ["T+3–6w", "Piece in the vault, ready to ship", "mid · June"],
          ] as const
        ).map(([tlabel, w, when]) => (
          <div key={tlabel} className="card-paper" style={{ padding: 18 }}>
            <div
              className="mono"
              style={{ fontSize: 10, color: "var(--accent)", letterSpacing: "0.14em" }}
            >
              {tlabel}
            </div>
            <div className="display" style={{ fontSize: 17, marginTop: 8, lineHeight: 1.2 }}>
              {w}
            </div>
            <div
              className="mono"
              style={{ fontSize: 10, color: "var(--ink-3)", marginTop: 6, letterSpacing: "0.1em" }}
            >
              {when}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function RequestClient() {
  const router = useRouter();
  const { ccy } = useLocale();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [uploadPreview, setUploadPreview] = useState<string | null>(null);
  const [runningAI, setRunningAI] = useState(false);
  const [aiDone, setAiDone] = useState(false);
  const [form, setForm] = useState<FormState>(INITIAL_FORM);

  const runAI = () => {
    setRunningAI(true);
    setAiDone(false);
    setTimeout(() => {
      setRunningAI(false);
      setAiDone(true);
    }, AI_DELAY_MS);
  };

  const lines: [string, string, string][] = [
    ["Concierge service fee", "USD 480", "flat — included in quote"],
    ["Authentication & inspection", "USD 120", "two-stage, in Taipei vault"],
    ["Insured carriage", "USD 95", "door-to-door, signature"],
    ["Reference exchange", `${CCY[ccy].sym} · ${CCY[ccy].rate}`, "live · 15-min refresh"],
  ];

  return (
    <div className="fade-in shell">
      <div className="req-header" style={{ paddingTop: 48 }}>
        <div>
          <div className="eyebrow">Concierge file · new</div>
          <h1>
            Request a <em>piece</em>.
          </h1>
        </div>
        <div className="req-step-list">
          <span className="step" data-on={step === 1 ? "1" : "0"}>
            01 The piece
          </span>
          <span style={{ color: "var(--line-2)" }}>—</span>
          <span className="step" data-on={step === 2 ? "1" : "0"}>
            02 Details
          </span>
          <span style={{ color: "var(--line-2)" }}>—</span>
          <span className="step" data-on={step === 3 ? "1" : "0"}>
            03 Review
          </span>
        </div>
      </div>

      <div className="req">
        <div className="req-form">
          {step === 1 && (
            <UploadStep
              uploadPreview={uploadPreview}
              setUploadPreview={(v) => {
                setUploadPreview(v);
                if (v === null) {
                  setAiDone(false);
                  setRunningAI(false);
                }
              }}
              runningAI={runningAI}
              aiDone={aiDone}
              runAI={runAI}
            />
          )}
          {step === 2 && <DetailsStep form={form} setForm={setForm} />}
          {step === 3 && <ReviewStep form={form} />}
        </div>

        <aside className="req-aside">
          <h4>File preview</h4>
          <div className="price-block">
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10,
                letterSpacing: "0.14em",
                color: "var(--ink-3)",
                display: "block",
                marginBottom: 4,
              }}
            >
              EST. ALL-IN
            </span>
            {formatCcy(13150, ccy)}
            <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 6, fontFamily: "var(--sans)" }}>
              Indicative — final quote arrives within 24 hours.
            </div>
          </div>
          <div className="breakdown">
            {lines.map(([k, v, s]) => (
              <div className="row" key={k}>
                <div className="k">
                  {k}
                  <div
                    style={{
                      fontSize: 10.5,
                      color: "var(--ink-3)",
                      marginTop: 2,
                      fontStyle: "italic",
                    }}
                  >
                    {s}
                  </div>
                </div>
                <div className="v" style={{ marginLeft: "auto" }}>
                  {v}
                </div>
              </div>
            ))}
          </div>
          <div className="total">
            <div className="k">Hold deposit · refundable</div>
            <div className="v">{formatCcy(200, ccy)}</div>
          </div>
          <div style={{ marginTop: 22, display: "flex", gap: 10 }}>
            {step > 1 && (
              <button
                className="btn btn-ghost"
                onClick={() => setStep((s) => (s > 1 ? ((s - 1) as 1 | 2 | 3) : s))}
                style={{ flex: "0 0 auto" }}
              >
                ← back
              </button>
            )}
            {step < 3 ? (
              <button
                className="btn btn-primary"
                style={{ flex: 1 }}
                disabled={step === 1 && uploadPreview === null}
                onClick={() => setStep((s) => (s < 3 ? ((s + 1) as 1 | 2 | 3) : s))}
              >
                {step === 1 ? "Continue to details" : "Continue to review"} <span>→</span>
              </button>
            ) : (
              <button
                className="btn btn-primary"
                style={{ flex: 1 }}
                onClick={() => router.push("/quote")}
              >
                Dispatch file · {formatCcy(200, ccy)} hold
              </button>
            )}
          </div>
          <div className="fine" style={{ marginTop: 18, lineHeight: 1.6 }}>
            Hold deposit is refunded in full if the quote is declined. We never charge it until a dossier is
            delivered.
          </div>
        </aside>
      </div>
    </div>
  );
}
