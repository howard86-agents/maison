export function Footer() {
  return (
    <footer className="foot">
      <div className="shell">
        <div className="foot-grid">
          <div>
            <div className="mark">MAISON</div>
            <p
              style={{
                maxWidth: "30ch",
                marginTop: 16,
                color: "var(--ink-2)",
                fontSize: 13,
              }}
            >
              A private concierge for considered pieces. By appointment from our
              Taipei atelier; we ship worldwide with insured delivery and
              lifetime authentication.
            </p>
            <div
              className="rule"
              style={{
                marginTop: 22,
                fontFamily: "var(--mono)",
                fontSize: 10,
                letterSpacing: "0.14em",
              }}
            >
              <span>SOURCED · AUTHENTICATED · DELIVERED</span>
            </div>
          </div>
          <div>
            <h6>The Atelier</h6>
            <ul>
              <li>Our concierges</li>
              <li>The Taipei vault</li>
              <li>Authentication standard</li>
              <li>Press &amp; partners</li>
            </ul>
          </div>
          <div>
            <h6>Service</h6>
            <ul>
              <li>How proxy-shopping works</li>
              <li>Currency &amp; exchange notes</li>
              <li>Shipping &amp; duties</li>
              <li>Returns &amp; resale</li>
              <li>LINE concierge channel</li>
            </ul>
          </div>
          <div>
            <h6>Membership</h6>
            <ul>
              <li>Normal</li>
              <li>Professional</li>
              <li>Diamond — by invitation</li>
              <li>Refer a friend</li>
            </ul>
          </div>
        </div>
        <div className="foot-bot">
          <span>© 2019 — 2026 · MAISON CONCIERGE 工坊</span>
          <span>Taipei · Tokyo · Paris · Hong Kong</span>
          <span>Built privately — never indexed</span>
        </div>
      </div>
    </footer>
  );
}
