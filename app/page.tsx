import { Navbar } from '@/components/Navbar'
import { FAQ } from '@/components/FAQ'
import { ScrollAnimator } from '@/components/ScrollAnimator'
import { IconCheck, IconCode, IconGlobe, IconShield, IconTerminal, IconPackage, IconUsers, IconCurrency, IconBolt, IconTicket, IconDiamond, IconTarget, IconArrowRight, IconQuestion } from '@/components/Icons'

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
            BeFlow crea productos de tecnologia especializados para industrias clave en Honduras y Centroamerica. Desde gestion ISP hasta infraestructura fiscal.
          </p>
          <div className="hero-ctas">
            <a href="#productos" className="btn btn-accent btn-accent-lg">
              Explorar Productos <Arrow />
            </a>
            <a href="#developers" className="btn btn-outline" style={{ padding: '14px 32px', fontSize: '15.5px', borderRadius: 12 }}>
              Para Developers
            </a>
          </div>

          <div className="hero-visual">
            <div className="hero-products-preview">
              <div className="hpp-card">
                <div className="hpp-icon" style={{ background: 'rgba(255,49,49,0.15)', color: '#FF6B6B' }}><IconGlobe /></div>
                <div className="hpp-name">BeFlow Net</div>
                <div className="hpp-desc">Gestion ISP</div>
              </div>
              <div className="hpp-card">
                <div className="hpp-icon" style={{ background: 'rgba(16,185,129,0.15)', color: '#34D399' }}><IconShield /></div>
                <div className="hpp-name">Mint</div>
                <div className="hpp-desc">Facturacion electronica</div>
              </div>
              <div className="hpp-card">
                <div className="hpp-icon" style={{ background: 'rgba(124,58,237,0.15)', color: '#A78BFA' }}><IconTerminal /></div>
                <div className="hpp-name">Dev Tools</div>
                <div className="hpp-desc">Herramientas developer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="marquee-section">
        <div className="marquee-label">Tecnologias e integraciones</div>
        <div className="marquee-track">
          <div className="marquee-inner">
            {[...'HUAWEI,ZTE,MikroTik,PixelPay,WhatsApp,SAR Honduras,Node.js,VSCode,REST API,XAdES-BES'.split(','), ...'HUAWEI,ZTE,MikroTik,PixelPay,WhatsApp,SAR Honduras,Node.js,VSCode,REST API,XAdES-BES'.split(',')].map((item, i) => (
              <span key={i} className="marquee-brand">{item}</span>
            ))}
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

          <div className="product-cards-grid">
            {/* BeFlow Net */}
            <div className="product-card animate-on-scroll">
              <div className="pc-header">
                <div className="pc-logo-row">
                  <div className="pc-logo-icon" style={{ background: 'linear-gradient(135deg, #FF3131, #FF914D)' }}>
                    <IconGlobe />
                  </div>
                  <div>
                    <div className="pc-name">BeFlow Net</div>
                    <div className="pc-badge production"><span className="badge-dot-sm" /> En produccion</div>
                  </div>
                </div>
                <p className="pc-tagline">La plataforma todo-en-uno para proveedores de internet</p>
                <p className="pc-desc">
                  Gestion de clientes, cobros, red de fibra, OLTs, ordenes de trabajo e inteligencia artificial. Disenada especificamente para ISPs en Centroamerica.
                </p>
                <div className="pc-features">
                  <div className="pc-feature"><span className="pc-check"><IconCheck /></span> Gestion ISP completa</div>
                  <div className="pc-feature"><span className="pc-check"><IconCheck /></span> Red visual GIS con mapa de fibra</div>
                  <div className="pc-feature"><span className="pc-check"><IconCheck /></span> Facturacion SAR/CAI</div>
                  <div className="pc-feature"><span className="pc-check"><IconCheck /></span> IA integrada con BeFlow Intelligence</div>
                </div>
                <a href="https://net.justbeflow.com" className="btn btn-accent" target="_blank" rel="noopener noreferrer">
                  Conocer BeFlow Net <Arrow />
                </a>
              </div>
              <div className="pc-visual">
                <div className="pc-mockup">
                  <div className="mockup-header">
                    <div className="mockup-dot r" />
                    <div className="mockup-dot y" />
                    <div className="mockup-dot g" />
                  </div>
                  <div className="pc-mockup-body">
                    <div className="pv-grid">
                      <div className="pv-card">
                        <div className="pv-card-icon" style={{ background: 'rgba(255,49,49,0.15)', color: '#FF6B6B' }}><IconUsers /></div>
                        <div className="pv-card-title">Clientes Activos</div>
                        <div className="pv-card-value">1,847</div>
                        <div className="pv-card-sub">+12% vs mes anterior</div>
                      </div>
                      <div className="pv-card">
                        <div className="pv-card-icon" style={{ background: 'rgba(16,185,129,0.15)', color: '#34D399' }}><IconCurrency /></div>
                        <div className="pv-card-title">Ingresos Mes</div>
                        <div className="pv-card-value">L 842K</div>
                        <div className="pv-card-sub">94.2% tasa de cobro</div>
                      </div>
                      <div className="pv-card">
                        <div className="pv-card-icon" style={{ background: 'rgba(245,158,11,0.15)', color: '#FBBF24' }}><IconBolt /></div>
                        <div className="pv-card-title">OLTs Activos</div>
                        <div className="pv-card-value">8</div>
                        <div className="pv-card-sub">100% en linea</div>
                      </div>
                      <div className="pv-card">
                        <div className="pv-card-icon" style={{ background: 'rgba(255,145,77,0.15)', color: '#FFAA6B' }}><IconTicket /></div>
                        <div className="pv-card-title">Ordenes Hoy</div>
                        <div className="pv-card-value">12</div>
                        <div className="pv-card-sub">3 instalaciones nuevas</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mint by BeFlow */}
            <div className="product-card animate-on-scroll">
              <div className="pc-header">
                <div className="pc-logo-row">
                  <div className="pc-logo-icon" style={{ background: 'linear-gradient(135deg, #10B981, #34D399)' }}>
                    <IconShield />
                  </div>
                  <div>
                    <div className="pc-name">Mint <span style={{ fontWeight: 400, fontSize: 14, color: 'var(--text-tertiary)' }}>by BeFlow</span></div>
                    <div className="pc-badge development"><span className="badge-dot-sm" /> En desarrollo</div>
                  </div>
                </div>
                <p className="pc-tagline">Infraestructura fiscal para facturacion electronica</p>
                <p className="pc-desc">
                  API REST que permite a developers generar, validar, firmar digitalmente y entregar documentos fiscales electronicos cumpliendo con el SAR. Envias un JSON, recibis XML firmado + PDF listo.
                </p>
                <div className="pc-features">
                  <div className="pc-feature"><span className="pc-check green"><IconCheck /></span> 36 endpoints REST</div>
                  <div className="pc-feature"><span className="pc-check green"><IconCheck /></span> 5 SDKs (Node, PHP, Java, Python, C#)</div>
                  <div className="pc-feature"><span className="pc-check green"><IconCheck /></span> Firma digital XAdES-BES</div>
                  <div className="pc-feature"><span className="pc-check green"><IconCheck /></span> Modo contingencia offline</div>
                </div>
                <a href="#contacto" className="btn btn-mint">
                  Conocer Mint <Arrow />
                </a>
              </div>
              <div className="pc-visual">
                <div className="pc-terminal">
                  <div className="mockup-header">
                    <div className="mockup-dot r" />
                    <div className="mockup-dot y" />
                    <div className="mockup-dot g" />
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginLeft: 12 }}>POST /v1/invoices</span>
                  </div>
                  <div className="pc-terminal-body">
                    <div className="terminal-section">
                      <div className="terminal-label">Request</div>
                      <pre className="terminal-code">{`{
  "tipo": "factura",
  "cliente": {
    "rtn": "0801-1990-12345",
    "nombre": "Carlos Mejia"
  },
  "items": [{
    "descripcion": "Internet 100 Mbps",
    "cantidad": 1,
    "precio": 999.00
  }]
}`}</pre>
                    </div>
                    <div className="terminal-section">
                      <div className="terminal-label response">Response 201</div>
                      <pre className="terminal-code">{`{
  "id": "inv_8x7k2m",
  "cai": "A1B2C3-...",
  "numero": "001-001-01-00000847",
  "pdf_url": "https://mint.beflow...",
  "xml_firmado": true,
  "status": "emitida"
}`}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dev Tools */}
            <div className="product-card full-width animate-on-scroll">
              <div className="pc-header">
                <div className="pc-logo-row">
                  <div className="pc-logo-icon" style={{ background: 'linear-gradient(135deg, #7C3AED, #A78BFA)' }}>
                    <IconTerminal />
                  </div>
                  <div>
                    <div className="pc-name">Dev Tools</div>
                    <div className="pc-badge development"><span className="badge-dot-sm" /> En desarrollo</div>
                  </div>
                </div>
                <p className="pc-tagline">Herramientas para developers que simplifican el dia a dia</p>
                <p className="pc-desc">
                  Extensiones, CLIs y utilidades open-source creadas por BeFlow para la comunidad developer. Herramientas que usamos internamente y compartimos con el mundo.
                </p>
                <div className="pc-features" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 24px' }}>
                  <div className="pc-feature"><span className="pc-check purple"><IconCheck /></span> Envradar para VSCode</div>
                  <div className="pc-feature"><span className="pc-check purple"><IconCheck /></span> Gestion visual de .env</div>
                  <div className="pc-feature"><span className="pc-check purple"><IconCheck /></span> Open source</div>
                  <div className="pc-feature"><span className="pc-check purple"><IconCheck /></span> Mas herramientas pronto</div>
                </div>
                <a href="#developers" className="btn btn-purple">
                  Ver Dev Tools <Arrow />
                </a>
              </div>
              <div className="pc-visual">
                <div className="pc-devtools-preview">
                  <div className="devtool-card">
                    <div className="devtool-icon" style={{ background: 'rgba(124,58,237,0.15)', color: '#A78BFA' }}><IconCode /></div>
                    <div className="devtool-info">
                      <div className="devtool-name">Envradar</div>
                      <div className="devtool-sub">Extension para VSCode</div>
                    </div>
                    <div className="devtool-tag">VSCode</div>
                  </div>
                  <div className="devtool-desc-card">
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>Envradar detecta y visualiza</div>
                    <div className="devtool-env-row">
                      <span className="env-key">DATABASE_URL</span>
                      <span className="env-eq">=</span>
                      <span className="env-val">postgresql://...</span>
                      <span className="env-status ok" />
                    </div>
                    <div className="devtool-env-row">
                      <span className="env-key">API_SECRET</span>
                      <span className="env-eq">=</span>
                      <span className="env-val">sk_live_xxx...</span>
                      <span className="env-status ok" />
                    </div>
                    <div className="devtool-env-row">
                      <span className="env-key">STRIPE_KEY</span>
                      <span className="env-eq">=</span>
                      <span className="env-val missing">no definida</span>
                      <span className="env-status warn" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / NOSOTROS */}
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
                <div className="about-stat-label">Productos en desarrollo</div>
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
            <div className="section-eyebrow"><span className="eyebrow-icon"><IconCode /></span> Developers</div>
            <h2 className="section-title" style={{ color: 'white' }}>Hecho para developers</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', color: 'rgba(255,255,255,0.5)' }}>
              APIs documentadas, SDKs en tu lenguaje favorito y herramientas open-source. Construi sobre BeFlow.
            </p>
          </div>

          <div className="dev-grid">
            <div className="dev-card animate-on-scroll">
              <div className="dev-card-icon" style={{ background: 'rgba(16,185,129,0.15)', color: '#34D399' }}><IconPackage /></div>
              <h3>Mint API</h3>
              <p>36 endpoints REST para facturacion electronica. SDKs en Node.js, PHP, Java, Python y C#.</p>
            </div>
            <div className="dev-card animate-on-scroll">
              <div className="dev-card-icon" style={{ background: 'rgba(124,58,237,0.15)', color: '#A78BFA' }}><IconTerminal /></div>
              <h3>Envradar</h3>
              <p>Extension de VSCode para gestion visual de variables de entorno. Open source en GitHub.</p>
            </div>
            <div className="dev-card animate-on-scroll">
              <div className="dev-card-icon" style={{ background: 'rgba(255,49,49,0.15)', color: '#FF6B6B' }}><IconCode /></div>
              <h3>Documentacion</h3>
              <p>Guias, referencias de API y ejemplos de integracion para todos nuestros productos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing-section" id="precios">
        <div className="container">
          <div className="pricing-header animate-on-scroll" style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-eyebrow"><span className="eyebrow-icon"><IconTarget /></span> Precios</div>
            <h2 className="section-title">Precios que escalan con tu crecimiento</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Paga solo por lo que usas. Sin contratos anuales, sin costos ocultos.
            </p>
          </div>

          <div className="pricing-grid">
            {/* Starter */}
            <div className="pricing-card animate-on-scroll">
              <div className="pricing-name">Starter</div>
              <div className="pricing-desc">Para ISPs que estan comenzando</div>
              <div className="pricing-price">
                <span className="pricing-currency">$</span>
                <span className="pricing-amount">0.25</span>
              </div>
              <div className="pricing-unit">por cliente / mes</div>
              <div className="pricing-minimum">Minimo $50/mes &middot; Hasta 500 clientes</div>
              <div className="pricing-features">
                {['4 usuarios incluidos', 'Gestion de clientes y cobros', 'Mapa de red GIS', '1,000 mensajes WhatsApp/mes', 'Facturacion SAR/CAI', 'Soporte por chat'].map((f) => (
                  <div key={f} className="pricing-feature">
                    <span className="check-icon"><IconCheck /></span> {f}
                  </div>
                ))}
              </div>
              <a href="#contacto" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', borderRadius: 10 }}>Comenzar Gratis</a>
            </div>

            {/* Pro */}
            <div className="pricing-card featured animate-on-scroll">
              <div className="pricing-badge">Mas Popular</div>
              <div className="pricing-name">Pro</div>
              <div className="pricing-desc">Para ISPs en crecimiento</div>
              <div className="pricing-price">
                <span className="pricing-currency">$</span>
                <span className="pricing-amount">0.20</span>
              </div>
              <div className="pricing-unit">por cliente / mes</div>
              <div className="pricing-minimum">Minimo $100/mes &middot; Hasta 2,000 clientes</div>
              <div className="pricing-features">
                {['8 usuarios incluidos', 'Todo de Starter +', 'BeFlow Intelligence (IA)', 'BeFlow Bridge (OLT/MikroTik)', '4,000 mensajes WhatsApp/mes', 'Portal de Clientes', 'Soporte prioritario'].map((f) => (
                  <div key={f} className="pricing-feature">
                    <span className="check-icon"><IconCheck /></span> {f}
                  </div>
                ))}
              </div>
              <a href="#contacto" className="btn btn-accent" style={{ width: '100%', justifyContent: 'center', borderRadius: 10 }}>Comenzar con Pro</a>
            </div>

            {/* Enterprise */}
            <div className="pricing-card animate-on-scroll">
              <div className="pricing-name">Enterprise</div>
              <div className="pricing-desc">Para operaciones grandes</div>
              <div className="pricing-price">
                <span className="pricing-currency">$</span>
                <span className="pricing-amount">0.15</span>
              </div>
              <div className="pricing-unit">por cliente / mes</div>
              <div className="pricing-minimum">Minimo $300/mes &middot; Clientes ilimitados</div>
              <div className="pricing-features">
                {['20 usuarios (+$5/extra)', 'Todo de Pro +', '10,000 mensajes WhatsApp/mes', 'API personalizada', 'Onboarding dedicado', 'SLA garantizado', 'Soporte por WhatsApp directo'].map((f) => (
                  <div key={f} className="pricing-feature">
                    <span className="check-icon"><IconCheck /></span> {f}
                  </div>
                ))}
              </div>
              <a href="#contacto" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', borderRadius: 10 }}>Contactar Ventas</a>
            </div>
          </div>

          <p style={{ textAlign: 'center', marginTop: 32, fontSize: 14, color: 'var(--text-tertiary)' }}>
            Precios de BeFlow Net. Mint y Dev Tools tendran sus propios planes. <a href="#contacto" style={{ color: 'var(--accent)', fontWeight: 600 }}>Contactanos</a> para mas informacion.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <section className="cta-section" id="contacto">
        <div className="container">
          <div className="cta-card animate-on-scroll">
            <h2>Creamos software para<br />industrias que importan</h2>
            <p>Si operas un ISP, necesitas facturacion electronica o buscas herramientas developer, hablemos.</p>
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

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src="/logos/3.png" alt="BeFlow" style={{ height: 28 }} />
              </div>
              <p>BeFlow es una empresa de tecnologia hondurena. Creamos productos especializados para telecomunicaciones, infraestructura fiscal y herramientas developer.</p>
            </div>
            <div className="footer-col">
              <h4>Productos</h4>
              <a href="https://net.justbeflow.com" target="_blank" rel="noopener noreferrer">BeFlow Net</a>
              <a href="#productos">Mint by BeFlow</a>
              <a href="#developers">Dev Tools</a>
              <a href="#developers">Envradar</a>
            </div>
            <div className="footer-col">
              <h4>Empresa</h4>
              <a href="#nosotros">Nosotros</a>
              <a href="#developers">Developers</a>
              <a href="#">Blog</a>
              <a href="#">Changelog</a>
            </div>
            <div className="footer-col">
              <h4>Contacto</h4>
              <a href="mailto:hello@justbeflow.com">hello@justbeflow.com</a>
              <a href="#contacto">Solicitar Demo</a>
              <a href="#">Politica de Privacidad</a>
              <a href="#">Terminos de Uso</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>&copy; 2026 BeFlow. Todos los derechos reservados.</span>
            <div className="footer-socials">
              <a href="#" className="footer-social" title="GitHub">GH</a>
              <a href="#" className="footer-social" title="LinkedIn">in</a>
              <a href="#" className="footer-social" title="WhatsApp">W</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
