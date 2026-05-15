"use client";

import { HOUSES, PRODUCTS, TIERS, type Tier } from "@maison/data";
import Link from "next/link";
import { ProductCard } from "./_components/product-card";
import { ImageOrPlaceholder } from "./_components/product-image";
import { useT } from "./providers";

function HeroA() {
  const t = useT();
  const h = t.headline;
  return (
    <section className="hero">
      <div>
        <div className="eyebrow">{t.hero.eyebrow}</div>
        <h1 className="hero-headline mt-[22px]">
          {h.line1}
          <br />
          {h.line2}
          <br />
          {h.line3}{" "}
          <em>
            {h.line4em.split("\n").map((seg, i, arr) => (
              <span key={seg}>
                {seg}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </em>
        </h1>
        <p className="hero-sub">{t.hero.sub}</p>
        <div className="hero-cta">
          <Link className="btn btn-primary" href="/request">
            {t.cta.request} <span>→</span>
          </Link>
          <Link className="btn btn-ghost" href="/collection">
            {t.cta.browse}
          </Link>
        </div>
        <div className="hero-meta">
          <div className="hero-meta-cell">
            <div className="num display">2,418</div>
            <div className="lbl">{t.hero.statsSourced}</div>
          </div>
          <div className="hero-meta-cell">
            <div className="num display">
              36
              <span className="ml-1 text-[14px] text-ink-3">
                {t.hero.statsTimeUnit}
              </span>
            </div>
            <div className="lbl">{t.hero.statsTime}</div>
          </div>
          <div className="hero-meta-cell">
            <div className="num display">
              98.4
              <span className="ml-1 text-[14px] text-ink-3">
                {t.hero.statsAuthUnit}
              </span>
            </div>
            <div className="lbl">{t.hero.statsAuth}</div>
          </div>
        </div>
      </div>
      <ImageOrPlaceholder
        alt={t.hero.imageAlt}
        aspect="3x4"
        brackets
        caption={t.hero.imageCaption}
        id="p1"
        kind="products"
        priority
        sizes="(min-width: 1280px) 40vw, 100vw"
        style={{ minHeight: 480 }}
      />
    </section>
  );
}

function Maisons() {
  return (
    <section className="section py-8">
      <div className="shell">
        <div className="maisons">
          {HOUSES.map((h) => (
            <span className="house" key={h}>
              {h}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const t = useT();
  const p = t.process;
  return (
    <section className="section">
      <div className="shell">
        <div className="section-head">
          <div>
            <div className="eyebrow">{p.kicker}</div>
            <h2 className="mt-[14px]">
              <em>{p.title}</em>
            </h2>
          </div>
          <div className="meta">{p.meta}</div>
        </div>
        <div className="process-list">
          {p.steps.map((s) => (
            <div className="step" key={s.n}>
              <div className="num">{s.n}</div>
              <h4>{s.h}</h4>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Collection() {
  const t = useT();
  const c = t.collectionHome;
  return (
    <section className="section">
      <div className="shell">
        <div className="section-head">
          <div>
            <div className="eyebrow">{c.eyebrow}</div>
            <h2 className="mt-[14px]">
              {c.line1}
              <em>{c.lineEm}</em>
              {c.line2}
            </h2>
          </div>
          <div className="meta">
            {c.meta} <span className="mono text-ink-2">{c.inVaultMono}</span>{" "}
            {c.inVaultClause}{" "}
            <span className="mono text-accent">{c.onQuoteMono}</span>{" "}
            {c.onQuoteClause}
          </div>
        </div>
        <div className="grid-4">
          {PRODUCTS.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AtelierNote() {
  const t = useT();
  const a = t.atelierNote;
  return (
    <section className="section">
      <div className="shell">
        <div className="atelier-note">
          <div>
            <div className="eyebrow">{a.eyebrow}</div>
            <h3 className="mt-[14px]">
              {a.headlineA}
              <em>{a.headlineEm}</em>
              {a.headlineB}
            </h3>
          </div>
          <div>
            <p className="mb-4">{a.copy}</p>
            <button className="btn btn-link" type="button">
              {a.readMore}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Tiers() {
  const t = useT();
  const ti = t.tiers;
  const tiersData: { name: Tier; it: boolean; cur: boolean }[] = TIERS.map(
    (tier) => ({
      name: tier,
      it: tier !== "Normal",
      cur: tier === "Professional",
    })
  );
  return (
    <section className="section">
      <div className="shell">
        <div className="section-head">
          <div>
            <div className="eyebrow">{ti.eyebrow}</div>
            <h2 className="mt-[14px]">
              {ti.line1}
              <em>{ti.lineEm}</em>.
            </h2>
          </div>
          <div className="meta">
            {ti.meta.split("\n").map((line, i, arr) => (
              <span key={line}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </div>
        </div>
        <div className="tiers">
          {tiersData.map((tt) => (
            <div className={`tier ${tt.cur ? "cur" : ""}`} key={tt.name}>
              <div className="badge">
                {tt.cur ? ti.yourTier : ti.spend[tt.name]}
              </div>
              <div className="name">
                {tt.it ? <em>{ti.names[tt.name]}</em> : ti.names[tt.name]}
              </div>
              <ul>
                {ti.bens[tt.name].map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeClient() {
  return (
    <div className="fade-in">
      <div className="shell">
        <HeroA />
      </div>
      <Maisons />
      <Process />
      <Collection />
      <AtelierNote />
      <Tiers />
    </div>
  );
}
