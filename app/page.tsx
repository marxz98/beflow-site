import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { CodeTabs } from '@/components/CodeTabs'
import { ScrollAnimator } from '@/components/ScrollAnimator'

const Arrow = () => (
  <svg className="btn-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const marqueeItems = ['Huawei', 'ZTE', 'V-Sol', 'MikroTik', 'PixelPay', 'WhatsApp', 'Meta', 'Telegram', 'Node.js', 'XAdES-BES']

export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="container">
          <div className="hero-badge hero-anim hero-anim-1">
            <span className="dot" />
            Productos en produccion &middot; Honduras
          </div>
          <h1 className="hero-anim hero-anim-2">
            Productos de tecnologia<br />
            <span className="grad">hechos en Honduras</span>
          </h1>
          <p className="hero-sub hero-anim hero-anim-3">
            Construimos y operamos software especializado para telecomunicaciones, infraestructura fiscal y desarrollo.
          </p>
          <div className="hero-ctas hero-anim hero-anim-4">
            <a href="#productos" className="btn btn-gradient btn-lg">
              Explorar productos <Arrow />
            </a>
            <a href="#developers" className="btn btn-outline btn-lg">
              Para developers
            </a>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <section className="marquee-section">
        <div className="marquee-label">Tecnologias con las que trabajamos</div>
        <div className="marquee-track">
          <div className="marquee-inner">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="marquee-brand">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS BENTO ── */}
      <section className="products-section" id="productos">
        <div className="container">
          <div className="section-center anim-on-scroll">
            <div className="section-title">Nuestros productos</div>
            <p className="section-sub">Cada uno nace de un problema real en una industria que conocemos a fondo.</p>
          </div>

          <div className="bento-grid">
            {/* BeFlow Net */}
            <div className="bento-card anim-on-scroll">
              <div className="bc-badge green"><span className="dot" /> En produccion</div>
              <div className="bc-name">BeFlow Net</div>
              <div className="bc-tagline">Plataforma todo-en-uno para proveedores de internet</div>
              <div className="bc-pills">
                <span className="bc-pill">Gestion ISP</span>
                <span className="bc-pill">Red GIS</span>
                <span className="bc-pill">IA integrada</span>
                <span className="bc-pill">SAR/CAI</span>
              </div>
              <a href="/net" className="bc-link red">Conocer BeFlow Net <span className="bc-link-arrow">&rarr;</span></a>
              <div className="bc-visual">
                <div className="bc-stats-grid">
                  {[
                    { label: 'Clientes', value: '1,847', pct: 92 },
                    { label: 'Ingresos', value: 'L 842K', pct: 78 },
                    { label: 'Cobro', value: '94.2%', pct: 94 },
                    { label: 'OLTs', value: '8', pct: 100 },
                  ].map((s) => (
                    <div key={s.label} className="bc-stat">
                      <div className="bc-stat-label">{s.label}</div>
                      <div className="bc-stat-value">{s.value}</div>
                      <div className="bc-stat-bar"><div className="bc-stat-bar-fill" style={{ width: `${s.pct}%` }} /></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mint */}
            <div className="bento-card mint anim-on-scroll">
              <div className="bc-badge green"><span className="dot" /> API Live</div>
              <div className="bc-name">Mint</div>
              <div className="bc-tagline">Infraestructura fiscal para facturacion electronica</div>
              <div className="bc-pills">
                <span className="bc-pill">36 endpoints</span>
                <span className="bc-pill">5 SDKs</span>
                <span className="bc-pill">XAdES-BES</span>
                <span className="bc-pill">Modo offline</span>
              </div>
              <a href="/mint" className="bc-link green">Explorar Mint <span className="bc-link-arrow">&rarr;</span></a>
              <div className="bc-terminal">
                <div className="bc-term-header">
                  <span className="bc-term-dot r" />
                  <span className="bc-term-dot y" />
                  <span className="bc-term-dot g" />
                </div>
                <div className="bc-term-body">
                  <div><span className="t-method">POST</span> <span className="t-str">/api/v1/invoices</span></div>
                  <div><span className="t-op">{'{'}</span></div>
                  <div>&nbsp;&nbsp;<span className="t-key">&quot;receiver&quot;</span><span className="t-op">:</span> <span className="t-op">{'{'}</span> <span className="t-key">&quot;rtn&quot;</span><span className="t-op">:</span> <span className="t-str">&quot;0801199912345&quot;</span> <span className="t-op">{'}'}</span><span className="t-op">,</span></div>
                  <div>&nbsp;&nbsp;<span className="t-key">&quot;items&quot;</span><span className="t-op">:</span> <span className="t-op">[{'{'}</span> <span className="t-key">&quot;amount&quot;</span><span className="t-op">:</span> <span className="t-num">1500.00</span> <span className="t-op">{'}]'}</span></div>
                  <div><span className="t-op">{'}'}</span></div>
                  <div style={{ marginTop: 8, borderTop: '1px solid rgba(255,255,255,0.04)', paddingTop: 8 }}>
                    <span className="t-response">201</span> <span className="t-op">{'{'}</span> <span className="t-key">&quot;status&quot;</span><span className="t-op">:</span> <span className="t-str">&quot;signed&quot;</span><span className="t-op">,</span> <span className="t-key">&quot;pdf&quot;</span><span className="t-op">:</span> <span className="t-str">&quot;INV-001.pdf&quot;</span> <span className="t-op">{'}'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* EnvRadar */}
            <div className="bento-card full envradar anim-on-scroll">
              <div>
                <div className="bc-badge blue"><span className="dot" /> Open Source</div>
                <div className="bc-name">EnvRadar</div>
                <div className="bc-tagline">Stop shipping broken environments.</div>
                <div className="bc-pills">
                  <span className="bc-pill">Secret scanner</span>
                  <span className="bc-pill">Diff visual</span>
                  <span className="bc-pill">15+ lenguajes</span>
                  <span className="bc-pill">23 KB</span>
                  <span className="bc-pill">MIT</span>
                </div>
                <a href="/envradar" className="bc-link blue">Install from Marketplace <span className="bc-link-arrow">&rarr;</span></a>
              </div>
              <div className="bc-vscode">
                <div className="bc-vscode-header">
                  <span className="bc-term-dot r" />
                  <span className="bc-term-dot y" />
                  <span className="bc-term-dot g" />
                  <span style={{ fontSize: 11, color: 'var(--text-tertiary)', marginLeft: 10 }}>EnvRadar &mdash; .env</span>
                </div>
                <div className="bc-vscode-body">
                  <div className="env-row ok"><span className="env-dot ok" /><span className="env-name">DATABASE_URL</span><span className="env-val">postgresql://user:***@host:5432/app</span></div>
                  <div className="env-row ok"><span className="env-dot ok" /><span className="env-name">PORT</span><span className="env-val">3000</span></div>
                  <div className="env-row ok"><span className="env-dot ok" /><span className="env-name">NODE_ENV</span><span className="env-val">production</span></div>
                  <div className="env-row warn"><span className="env-dot warn" /><span className="env-name">API_SECRET</span><span className="env-warn-text">Hardcoded secret detected</span></div>
                  <div className="env-row err"><span className="env-dot err" /><span className="env-name">REDIS_URL</span><span className="env-err-text">Missing in .env</span></div>
                  <div className="env-row err"><span className="env-dot err" /><span className="env-name">SMTP_HOST</span><span className="env-err-text">Defined but unused</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DEVELOPERS ── */}
      <section className="dev-section" id="developers">
        <div className="container">
          <div className="dev-grid">
            <div className="anim-on-scroll">
              <div className="section-label dev-label">Developers</div>
              <div className="dev-title">Hecho para developers</div>
              <p className="dev-desc">APIs robustas, SDKs en tu lenguaje, documentacion completa. Integracion en minutos, no semanas.</p>
              <div className="dev-btns">
                <a href="/mint#docs" className="btn btn-gradient">Documentacion <Arrow /></a>
                <a href="#" className="btn btn-outline">Swagger API</a>
              </div>
            </div>
            <div className="anim-on-scroll">
              <CodeTabs />
            </div>
          </div>
        </div>
      </section>

      {/* ── METRICS ── */}
      <section className="metrics-section" id="metricas">
        <div className="container">
          <div className="metrics-grid anim-on-scroll">
            <div className="metric">
              <div className="metric-value">3</div>
              <div className="metric-label">Productos en produccion</div>
            </div>
            <span className="metric-divider" />
            <div className="metric">
              <div className="metric-value">374K+</div>
              <div className="metric-label">Empresas en Honduras</div>
            </div>
            <span className="metric-divider" />
            <div className="metric">
              <div className="metric-value">36</div>
              <div className="metric-label">Endpoints API</div>
            </div>
            <span className="metric-divider" />
            <div className="metric">
              <div className="metric-value">23 KB</div>
              <div className="metric-label">EnvRadar. Zero bloat.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-section" id="contacto">
        <div className="cta-glow" />
        <div className="container">
          <div className="cta-title anim-on-scroll">Hecho en Honduras.<br />Para el mundo.</div>
          <p className="cta-sub anim-on-scroll">El software que las industrias necesitan.</p>
          <div className="cta-btns anim-on-scroll">
            <a href="mailto:hello@justbeflow.com" className="btn btn-gradient btn-lg">Comenzar ahora <Arrow /></a>
            <a href="mailto:hello@justbeflow.com" className="btn btn-outline btn-lg">Contactar equipo</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
