"use client";

import { useT } from "../providers";

export function Footer() {
  const t = useT();
  const f = t.footer;
  return (
    <footer className="foot">
      <div className="shell">
        <div className="foot-grid">
          <div>
            <div className="mark">MAISON</div>
            <p className="mt-4 max-w-[30ch] text-[13px] text-ink-2">
              {f.description}
            </p>
            <div className="rule mt-[22px] font-mono text-[10px] tracking-[0.14em]">
              <span>{f.rule}</span>
            </div>
          </div>
          <div>
            <h6>{f.atelierTitle}</h6>
            <ul>
              {f.atelierItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h6>{f.serviceTitle}</h6>
            <ul>
              {f.serviceItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h6>{f.membershipTitle}</h6>
            <ul>
              {f.membershipItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="foot-bot">
          <span>{f.copyright}</span>
          <span>{f.cities}</span>
          <span>{f.builtPrivately}</span>
        </div>
      </div>
    </footer>
  );
}
