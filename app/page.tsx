import { Navbar } from '@/components/Navbar'
import { ProductTabs } from '@/components/ProductTabs'
import { FAQ } from '@/components/FAQ'
import { ScrollAnimator } from '@/components/ScrollAnimator'
import { IconDocument, IconClipboard, IconMapPin, IconCheck, IconChat, IconBolt, IconArrowRight, IconTarget } from '@/components/Icons'

const Arrow = () => (
  <svg className="btn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const marqueeItems = [
  { label: 'Huawei OLT', letter: 'H', bg: '#FFE4E6', color: '#E11D48' },
  { label: 'ZTE OLT', letter: 'Z', bg: '#DBEAFE', color: '#2563EB' },
  { label: 'V-Sol OLT', letter: 'V', bg: '#FEF3C7', color: '#D97706' },
  { label: 'MikroTik', letter: 'M', bg: '#D1FAE5', color: '#059669' },
  { label: 'PixelPay', letter: 'P', bg: '#EDE9FE', color: '#7C3AED' },
  { label: 'WhatsApp API', letter: 'W', bg: '#D1FAE5', color: '#059669' },
  { label: 'Meta Business', letter: 'M', bg: '#DBEAFE', color: '#2563EB' },
  { label: 'SAR Honduras', letter: 'S', bg: '#FEF3C7', color: '#D97706' },
  { label: 'CAI Fiscal', letter: 'C', bg: '#FFE4E6', color: '#E11D48' },
  { label: 'Telegram', letter: 'T', bg: '#F3F4F6', color: '#4B5563' },
]

export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />

      {/* ═══════════ HERO ═══════════ */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            <span className="badge-dot" />
            Plataforma en producción · Honduras y Centroamérica
          </div>
          <h1>
            Gestiona tu ISP con<br />
            <span className="gradient-text">inteligencia total</span>
          </h1>
          <p className="hero-sub">
            Clientes, cobros, red de fibra, OLTs y más — todo en una sola plataforma
            diseñada específicamente para proveedores de internet en Centroamérica.
          </p>
          <div className="hero-ctas">
            <a href="#productos" className="btn btn-accent btn-accent-lg">
              Solicitar Demo <Arrow />
            </a>
            <a href="#como-funciona" className="btn btn-outline" style={{ padding: '14px 32px', fontSize: '15.5px', borderRadius: 12 }}>
              Ver Cómo Funciona
            </a>
          </div>

          <div className="hero-visual">
            <div className="hero-mockup">
              <div className="mockup-header">
                <div className="mockup-dot r" />
                <div className="mockup-dot y" />
                <div className="mockup-dot g" />
              </div>
              <div className="mockup-inner">
                <div className="mock-sidebar hide-mobile">
                  {['Dashboard', 'Clientes', 'Servicios', 'Cobros', 'Red', 'Órdenes', 'Reportes', 'Intelligence'].map((item, i) => (
                    <div key={item} className={`mock-sidebar-item ${i === 0 ? 'active' : ''}`}>
                      <div className="si-icon" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mock-main">
                  <div className="mock-stats">
                    {[
                      { label: 'Clientes Activos', value: '1,847' },
                      { label: 'Cobros del Mes', value: 'L 842K', color: '#10B981' },
                      { label: 'Tasa de Cobro', value: '94.2%' },
                      { label: 'Órdenes Hoy', value: '12', color: '#F59E0B' },
                    ].map((stat) => (
                      <div key={stat.label} className="mock-stat">
                        <div className="mock-stat-label">{stat.label}</div>
                        <div className="mock-stat-value" style={stat.color ? { color: stat.color } : undefined}>
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mock-chart">
                    <div className="mock-chart-bars">
                      {[45, 65, 55, 80, 70, 90, 75, 95, 85, 100, 88, 92].map((h, i) => (
                        <div
                          key={i}
                          className="mock-bar"
                          style={{ height: `${h}%`, animationDelay: `${0.1 * (i + 1)}s` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ LOGO MARQUEE ═══════════ */}
      <section className="marquee-section">
        <div className="marquee-label">Integraciones y compatibilidad nativa</div>
        <div className="marquee-track">
          <div className="marquee-inner">
            {/* Double the items for seamless loop */}
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <div key={i} className="marquee-item">
                <span className="marquee-icon" style={{ background: item.bg, color: item.color }}>
                  {item.letter}
                </span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PRODUCTS (Client Component) ═══════════ */}
      <ProductTabs />

      {/* ═══════════ HOW IT WORKS ═══════════ */}
      <section className="steps-section" id="como-funciona">
        <div className="container">
          <div className="steps-header animate-on-scroll" style={{ textAlign: 'center', marginBottom: 72 }}>
            <div className="section-eyebrow"><span className="eyebrow-icon"><IconArrowRight /></span> Proceso</div>
            <h2 className="section-title">Migrar tu ISP a BeFlow Net</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Migrar tu ISP a BeFlow Net es un proceso guiado paso a paso. Te acompañamos desde la importación de datos hasta la operación completa.
            </p>
          </div>

          <div className="steps-grid">
            {/* Step 01 */}
            <div className="step animate-on-scroll">
              <div className="step-content">
                <div className="step-number">01.</div>
                <h3 className="step-title">Conecta tu información</h3>
                <p className="step-desc">
                  Importa tu base de clientes desde Excel, Google Sheets o AppSheet. Configuramos departamentos, municipios, planes de servicio y zonas de cobertura de tu ISP.
                </p>
              </div>
              <div className="step-visual">
                <div className="sv-card-stack">
                  {[
                    { icon: <IconDocument />, bg: '#FFE5E5', color: '#FF3131', title: 'clientes_speednet.xlsx', sub: '1,847 registros · 12 columnas', status: 'Listo', sc: 'green' },
                    { icon: <IconClipboard />, bg: '#D1FAE5', color: '#059669', title: 'planes_servicio.xlsx', sub: '8 planes · FTTH y wireless', status: 'Listo', sc: 'green' },
                    { icon: <IconMapPin />, bg: '#FEF3C7', color: '#D97706', title: 'zonas_cobertura.xlsx', sub: '5 zonas · Col. María Auxiliadora', status: 'Procesando', sc: 'blue' },
                  ].map((card) => (
                    <div key={card.title} className="sv-mini-card">
                      <div className="sv-mc-icon" style={{ background: card.bg, color: card.color }}>{card.icon}</div>
                      <div className="sv-mc-info">
                        <div className="sv-mc-title">{card.title}</div>
                        <div className="sv-mc-sub">{card.sub}</div>
                      </div>
                      <div className={`sv-mc-status ${card.sc}`}>{card.status}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 02 */}
            <div className="step animate-on-scroll">
              <div className="step-content">
                <div className="step-number">02.</div>
                <h3 className="step-title">Configura tu infraestructura</h3>
                <p className="step-desc">
                  Registra tus OLTs, routers MikroTik y equipos de red. BeFlow Bridge establece conexión segura con tu infraestructura para monitoreo y control remoto.
                </p>
              </div>
              <div className="step-visual">
                <div className="sv-terminal">
                  <div className="sv-terminal-line"><span className="prompt">beflow</span> <span className="flag">bridge</span> <span className="cmd">connect --olt 192.168.1.1</span></div>
                  <div className="sv-terminal-line"><span className="result">✓ Huawei MA5608T detectado</span></div>
                  <div className="sv-terminal-line"><span className="result">✓ 128 ONTs sincronizados</span></div>
                  <div className="sv-terminal-line"><span className="result">✓ Señal óptica: normal</span></div>
                  <div className="sv-terminal-line" style={{ marginTop: 10 }}><span className="prompt">beflow</span> <span className="flag">bridge</span> <span className="cmd">connect --mikrotik 10.0.0.1</span></div>
                  <div className="sv-terminal-line"><span className="result">✓ CCR1036 conectado vía API</span></div>
                  <div className="sv-terminal-line"><span className="result">✓ 847 queues importados</span></div>
                  <div className="sv-terminal-line"><span className="result">✓ Auto-corte: habilitado</span></div>
                </div>
              </div>
            </div>

            {/* Step 03 */}
            <div className="step animate-on-scroll">
              <div className="step-content">
                <div className="step-number">03.</div>
                <h3 className="step-title">Opera con todo el poder</h3>
                <p className="step-desc">
                  Tu equipo ya puede gestionar clientes, generar cobros, despachar órdenes a técnicos, monitorear la red y usar IA para tomar decisiones — todo desde un navegador.
                </p>
              </div>
              <div className="step-visual">
                <div className="sv-card-stack">
                  {[
                    { icon: <IconCheck />, bg: '#D1FAE5', color: '#059669', title: 'Cobros generados automáticamente', sub: '1,847 cobros · Abril 2026', status: 'Completado', sc: 'green' },
                    { icon: <IconChat />, bg: '#FFE5E5', color: '#FF3131', title: 'WhatsApp masivo enviado', sub: 'Recordatorio de pago · 1,200 mensajes', status: 'En proceso', sc: 'blue' },
                    { icon: <IconBolt />, bg: '#FFF0E5', color: '#FF914D', title: '3 instalaciones asignadas', sub: 'Técnico: Carlos Mejía · Zona Norte', status: 'Pendiente', sc: 'orange' },
                  ].map((card) => (
                    <div key={card.title} className="sv-mini-card">
                      <div className="sv-mc-icon" style={{ background: card.bg, color: card.color }}>{card.icon}</div>
                      <div className="sv-mc-info">
                        <div className="sv-mc-title">{card.title}</div>
                        <div className="sv-mc-sub">{card.sub}</div>
                      </div>
                      <div className={`sv-mc-status ${card.sc}`}>{card.status}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ METRICS ═══════════ */}
      <section className="metrics-section">
        <div className="container">
          <div className="metrics-grid">
            {[
              { value: '22+', label: 'Módulos integrados vs herramientas separadas' },
              { value: '70%', label: 'Menos costo que Splynx o WispHub' },
              { value: '5 min', label: 'Para importar tu base de clientes' },
              { value: '24/7', label: 'Monitoreo automático de tu red' },
            ].map((m) => (
              <div key={m.value} className="metric animate-on-scroll">
                <div className="metric-value">{m.value}</div>
                <div className="metric-label">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PRICING ═══════════ */}
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
              <div className="pricing-desc">Para ISPs que están comenzando</div>
              <div className="pricing-price">
                <span className="pricing-currency">$</span>
                <span className="pricing-amount">0.25</span>
              </div>
              <div className="pricing-unit">por cliente / mes</div>
              <div className="pricing-minimum">Mínimo $50/mes · Hasta 500 clientes</div>
              <div className="pricing-features">
                {['4 usuarios incluidos', 'Gestión de clientes y cobros', 'Mapa de red GIS', '1,000 mensajes WhatsApp/mes', 'Facturación SAR/CAI', 'Soporte por chat'].map((f) => (
                  <div key={f} className="pricing-feature">
                    <span className="check-icon"><IconCheck /></span> {f}
                  </div>
                ))}
              </div>
              <a href="#" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', borderRadius: 10 }}>Comenzar Gratis</a>
            </div>

            {/* Pro */}
            <div className="pricing-card featured animate-on-scroll">
              <div className="pricing-badge">Más Popular</div>
              <div className="pricing-name">Pro</div>
              <div className="pricing-desc">Para ISPs en crecimiento</div>
              <div className="pricing-price">
                <span className="pricing-currency">$</span>
                <span className="pricing-amount">0.20</span>
              </div>
              <div className="pricing-unit">por cliente / mes</div>
              <div className="pricing-minimum">Mínimo $100/mes · Hasta 2,000 clientes</div>
              <div className="pricing-features">
                {['8 usuarios incluidos', 'Todo de Starter +', 'BeFlow Intelligence (IA)', 'BeFlow Bridge (OLT/MikroTik)', '4,000 mensajes WhatsApp/mes', 'Portal de Clientes', 'Soporte prioritario'].map((f) => (
                  <div key={f} className="pricing-feature">
                    <span className="check-icon"><IconCheck /></span> {f}
                  </div>
                ))}
              </div>
              <a href="#" className="btn btn-accent" style={{ width: '100%', justifyContent: 'center', borderRadius: 10 }}>Comenzar con Pro</a>
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
              <div className="pricing-minimum">Mínimo $300/mes · Clientes ilimitados</div>
              <div className="pricing-features">
                {['20 usuarios (+$5/extra)', 'Todo de Pro +', '10,000 mensajes WhatsApp/mes', 'API personalizada', 'Onboarding dedicado', 'SLA garantizado', 'Soporte por WhatsApp directo'].map((f) => (
                  <div key={f} className="pricing-feature">
                    <span className="check-icon"><IconCheck /></span> {f}
                  </div>
                ))}
              </div>
              <a href="#" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', borderRadius: 10 }}>Contactar Ventas</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ (Client Component) ═══════════ */}
      <FAQ />

      {/* ═══════════ CTA ═══════════ */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card animate-on-scroll">
            <h2>Tu ISP merece una plataforma<br />que entienda Centroamérica</h2>
            <p>Únete a los proveedores de internet que están modernizando su operación con BeFlow Net.</p>
            <div className="cta-btns">
              <a href="#productos" className="btn btn-accent btn-accent-lg">
                Solicitar Demo <Arrow />
              </a>
              <a href="#precios" className="btn" style={{ color: 'rgba(255,255,255,0.6)', border: '1.5px solid rgba(255,255,255,0.15)', padding: '14px 32px', borderRadius: 12, fontSize: '15.5px' }}>
                Ver Precios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src="/logos/4.png" alt="BeFlow Net" style={{ height: 28 }} />
              </div>
              <p>BeFlow Net es la plataforma todo-en-uno para proveedores de internet en Honduras y Centroamérica.</p>
            </div>
            <div className="footer-col">
              <h4>Módulos</h4>
              <a href="#">Gestión ISP</a>
              <a href="#">Intelligence</a>
              <a href="#">Bridge</a>
              <a href="#">Portal de Clientes</a>
            </div>
            <div className="footer-col">
              <h4>Recursos</h4>
              <a href="#">Documentación</a>
              <a href="#">Blog</a>
              <a href="#">Changelog</a>
              <a href="#">Estado del Sistema</a>
            </div>
            <div className="footer-col">
              <h4>Contacto</h4>
              <a href="#">Solicitar Demo</a>
              <a href="#">Soporte</a>
              <a href="#">Política de Privacidad</a>
              <a href="#">Términos de Uso</a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 BeFlow Net. Todos los derechos reservados.</span>
            <div className="footer-socials">
              <a href="#" className="footer-social" title="WhatsApp">W</a>
              <a href="#" className="footer-social" title="LinkedIn">in</a>
              <a href="#" className="footer-social" title="Instagram">ig</a>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 16, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>BeFlow Net es un producto de BeFlow · justbeflow.com</span>
          </div>
        </div>
      </footer>
    </>
  )
}
