import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { CodeTabs } from '@/components/CodeTabs'
import { ScrollAnimator } from '@/components/ScrollAnimator'
import { BentoGrid } from '@/components/BentoGrid'

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

          <BentoGrid />
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
