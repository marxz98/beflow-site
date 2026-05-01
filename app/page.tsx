import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollAnimator } from '@/components/ScrollAnimator'
import { IconCheck, IconGlobe, IconShield, IconTerminal, IconUsers, IconCurrency, IconBolt, IconTicket, IconDiamond, IconArrowRight, IconCode, IconSearch, IconEye } from '@/components/Icons'

const Arrow = () => (
  <svg className="btn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            <span className="badge-dot" />
            Empresa de tecnologia &middot; Honduras
          </div>
          <h1>
            Software que resuelve<br />
            <span className="gradient-text">problemas reales</span>
          </h1>
          <p className="hero-sub">
            BeFlow crea productos de tecnologia especializados para Honduras y Centroamerica. Desde gestion ISP hasta infraestructura fiscal y herramientas para developers.
          </p>
          <div className="hero-ctas">
            <a href="#productos" className="btn btn-accent btn-accent-lg">
              Explorar Productos <Arrow />
            </a>
            <a href="#developers" className="btn btn-outline" style={{ padding: '14px 32px', fontSize: '15.5px', borderRadius: 12 }}>
              Para Developers
            </a>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products-section" id="productos">
        <div className="container">
          <div className="products-header animate-on-scroll" style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-eyebrow">
              <span className="eyebrow-icon"><IconDiamond /></span> Productos
            </div>
            <h2 className="section-title">Nuestros Productos</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Cada producto nace de un problema real en una industria que conocemos a fondo.
            </p>
          </div>

          <div className="landing-products-grid">
            {/* BeFlow Net */}
            <div className="lp-card animate-on-scroll">
              <div className="lp-card-inner">
                <div className="lp-badge production"><span className="badge-dot-sm" /> En produccion</div>
                <div className="lp-logo-icon" style={{ background: 'linear-gradient(135deg, #FF3131, #FF914D)' }}>
                  <IconGlobe />
                </div>
                <h3 className="lp-name">BeFlow Net</h3>
                <p className="lp-tagline">La plataforma todo-en-uno para proveedores de internet</p>
                <p className="lp-desc">Gestion de clientes, cobros, red de fibra, OLTs, ordenes de trabajo e inteligencia artificial. Disenada para ISPs en Centroamerica.</p>
                <div className="lp-features">
                  <span><IconCheck /> Gestion ISP completa</span>
                  <span><IconCheck /> Red visual GIS</span>
                  <span><IconCheck /> IA integrada</span>
                </div>
                <div className="lp-visual">
                  <div className="pv-grid">
                    <div className="pv-card">
                      <div className="pv-card-icon" style={{ background: 'rgba(255,49,49,0.15)', color: '#FF6B6B' }}><IconUsers /></div>
                      <div className="pv-card-title">Clientes Activos</div>
                      <div className="pv-card-value">1,847</div>
                    </div>
                    <div className="pv-card">
                      <div className="pv-card-icon" style={{ background: 'rgba(16,185,129,0.15)', color: '#34D399' }}><IconCurrency /></div>
                      <div className="pv-card-title">Ingresos Mes</div>
                      <div className="pv-card-value">L 842K</div>
                    </div>
                    <div className="pv-card">
                      <div className="pv-card-icon" style={{ background: 'rgba(245,158,11,0.15)', color: '#FBBF24' }}><IconBolt /></div>
                      <div className="pv-card-title">OLTs Activos</div>
                      <div className="pv-card-value">8</div>
                    </div>
                    <div className="pv-card">
                      <div className="pv-card-icon" style={{ background: 'rgba(255,145,77,0.15)', color: '#FFAA6B' }}><IconTicket /></div>
                      <div className="pv-card-title">Ordenes Hoy</div>
                      <div className="pv-card-value">12</div>
                    </div>
                  </div>
                </div>
                <a href="/net" className="btn btn-accent lp-cta">Conocer BeFlow Net <Arrow /></a>
              </div>
            </div>

            {/* Mint */}
            <div className="lp-card animate-on-scroll">
              <div className="lp-card-inner">
                <div className="lp-badge production" style={{ background: 'var(--green-light)', color: 'var(--green)' }}><span className="badge-dot-sm" /> API Live</div>
                <div className="lp-logo-icon" style={{ background: 'linear-gradient(135deg, #10B981, #34D399)' }}>
                  <IconShield />
                </div>
                <h3 className="lp-name">Mint</h3>
                <p className="lp-tagline">Infraestructura fiscal para facturacion electronica</p>
                <p className="lp-desc">API REST para generar, validar y firmar documentos fiscales electronicos cumpliendo con el SAR. Envias un JSON, recibis PDF firmado.</p>
                <div className="lp-features">
                  <span><IconCheck /> 36 endpoints REST</span>
                  <span><IconCheck /> 5 SDKs oficiales</span>
                  <span><IconCheck /> Firma digital XAdES-BES</span>
                </div>
                <div className="lp-visual">
                  <div className="lp-terminal">
                    <div className="lp-term-line"><span className="t-method">POST</span> <span className="t-url">/api/v1/invoices</span></div>
                    <div className="lp-term-line t-muted">Content-Type: application/json</div>
                    <div className="lp-term-divider" />
                    <div className="lp-term-line"><span className="t-response">201</span> invoice_number: <span className="t-val">&quot;001-001-01-00000001&quot;</span></div>
                    <div className="lp-term-line">status: <span className="t-val">&quot;signed&quot;</span> &middot; pdf_url: <span className="t-val">&quot;/docs/INV-001.pdf&quot;</span></div>
                  </div>
                </div>
                <a href="/mint" className="btn btn-mint lp-cta">Explorar Mint <Arrow /></a>
              </div>
            </div>

            {/* EnvRadar */}
            <div className="lp-card animate-on-scroll">
              <div className="lp-card-inner">
                <div className="lp-badge" style={{ background: '#DBEAFE', color: '#3B82F6' }}><span className="badge-dot-sm" /> Open Source</div>
                <div className="lp-logo-icon" style={{ background: 'linear-gradient(135deg, #3B82F6, #60A5FA)' }}>
                  <IconSearch />
                </div>
                <h3 className="lp-name">EnvRadar</h3>
                <p className="lp-tagline">Protege tus variables de entorno en VS Code</p>
                <p className="lp-desc">Detecta variables faltantes, secrets expuestos y errores de tipo en tus archivos .env. Offline, gratis, open source.</p>
                <div className="lp-features">
                  <span><IconCheck /> Secret Scanner</span>
                  <span><IconCheck /> Diff visual</span>
                  <span><IconCheck /> 15+ lenguajes</span>
                </div>
                <div className="lp-visual">
                  <div className="lp-env-preview">
                    <div className="lp-env-row"><span className="env-key">DATABASE_URL</span><span className="env-eq">=</span><span className="env-val">postgresql://...</span><span className="env-dot ok" /></div>
                    <div className="lp-env-row"><span className="env-key">API_SECRET</span><span className="env-eq">=</span><span className="env-val">sk_live_xxx...</span><span className="env-dot ok" /></div>
                    <div className="lp-env-row"><span className="env-key">STRIPE_KEY</span><span className="env-eq">=</span><span className="env-val missing">no definida</span><span className="env-dot warn" /></div>
                  </div>
                </div>
                <a href="/envradar" className="btn btn-blue lp-cta">Ver EnvRadar <Arrow /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="metrics-section">
        <div className="container">
          <div className="metrics-grid">
            {[
              { value: '3', label: 'Productos en produccion' },
              { value: '374K+', label: 'Empresas potenciales en Honduras' },
              { value: '36+', label: 'Endpoints API en Mint' },
              { value: '23 KB', label: 'EnvRadar. Sin bloat.' },
            ].map((m) => (
              <div key={m.value} className="metric animate-on-scroll">
                <div className="metric-value">{m.value}</div>
                <div className="metric-label">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about-section" id="nosotros">
        <div className="container">
          <div className="about-grid">
            <div className="about-content animate-on-scroll">
              <div className="section-eyebrow"><span className="eyebrow-icon"><IconArrowRight /></span> Nosotros</div>
              <h2 className="section-title">Tecnologia hecha en Honduras,<br/>para Centroamerica</h2>
              <p className="section-subtitle">
                BeFlow es una empresa de tecnologia hondurena. Creamos software especializado para industrias que conocemos a fondo: telecomunicaciones, comercio y desarrollo de software.
              </p>
              <p className="section-subtitle" style={{ marginTop: 16 }}>
                No somos una agencia. No hacemos sitios web. Construimos productos propios que resuelven problemas reales y los operamos como SaaS.
              </p>
            </div>
            <div className="about-stats animate-on-scroll">
              <div className="about-stat">
                <div className="about-stat-value">3</div>
                <div className="about-stat-label">Productos activos</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-value">2026</div>
                <div className="about-stat-label">Fundacion</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-value">HN</div>
                <div className="about-stat-label">Tegucigalpa, Honduras</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-value">100%</div>
                <div className="about-stat-label">Productos propios</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEVELOPERS */}
      <section className="dev-section" id="developers">
        <div className="container">
          <div className="dev-header animate-on-scroll" style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-eyebrow" style={{ color: '#A78BFA' }}><span className="eyebrow-icon" style={{ background: 'rgba(124,58,237,0.15)' }}><IconCode /></span> Developers</div>
            <h2 className="section-title" style={{ color: 'white' }}>Hecho para developers</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', color: 'rgba(255,255,255,0.5)' }}>
              APIs documentadas, SDKs en tu lenguaje favorito y herramientas open-source.
            </p>
          </div>
          <div className="dev-grid">
            <div className="dev-card animate-on-scroll">
              <div className="dev-card-icon" style={{ background: 'rgba(16,185,129,0.15)', color: '#34D399' }}><IconShield /></div>
              <h3>Mint API</h3>
              <p>36 endpoints REST para facturacion electronica. SDKs en Node.js, PHP, Java, Python y C#.</p>
              <a href="/mint" className="dev-card-link">Ver documentacion &rarr;</a>
            </div>
            <div className="dev-card animate-on-scroll">
              <div className="dev-card-icon" style={{ background: 'rgba(59,130,246,0.15)', color: '#60A5FA' }}><IconSearch /></div>
              <h3>EnvRadar</h3>
              <p>Extension de VSCode para proteger tus variables de entorno. Open source.</p>
              <a href="/envradar" className="dev-card-link">Ver extension &rarr;</a>
            </div>
            <div className="dev-card animate-on-scroll">
              <div className="dev-card-icon" style={{ background: 'rgba(255,49,49,0.15)', color: '#FF6B6B' }}><IconTerminal /></div>
              <h3>Documentacion</h3>
              <p>Guias, referencias de API y ejemplos de integracion para todos nuestros productos.</p>
              <a href="/mint#docs" className="dev-card-link">Explorar docs &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contacto">
        <div className="container">
          <div className="cta-card animate-on-scroll">
            <h2>El software que Honduras necesita,<br />hecho en Honduras</h2>
            <p>Desde gestion ISP hasta infraestructura fiscal y herramientas open source.</p>
            <div className="cta-btns">
              <a href="mailto:hello@justbeflow.com" className="btn btn-accent btn-accent-lg">
                Contactar <Arrow />
              </a>
              <a href="#productos" className="btn" style={{ color: 'rgba(255,255,255,0.6)', border: '1.5px solid rgba(255,255,255,0.15)', padding: '14px 32px', borderRadius: 12, fontSize: '15.5px' }}>
                Ver Productos
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
