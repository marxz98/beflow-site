import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ProductTabs } from '@/components/ProductTabs'
import { NetworkMap } from '@/components/NetworkMap'
import { FAQ } from '@/components/FAQ'
import { ScrollAnimator } from '@/components/ScrollAnimator'
import { IconCheck, IconDocument, IconClipboard, IconMapPin, IconChat, IconBolt, IconArrowRight, IconTarget } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'BeFlow Net — La Plataforma Inteligente para ISPs',
  description: 'Gestiona clientes, cobros, red de fibra, OLTs y mas. Todo en una sola plataforma disenada para proveedores de internet en Honduras y Centroamerica.',
}

const Arrow = () => (
  <svg className="btn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const marqueeItems = ['HUAWEI', 'ZTE', 'V-SOL', 'MikroTik', 'PixelPay', 'WhatsApp', 'Meta', 'Telegram']

const netFaqs = [
  { q: 'Puedo migrar mis datos desde WispHub, Splynx o AppSheet?', a: 'Si. Aceptamos importacion desde cualquier fuente que exporte a Excel o CSV. Nuestro equipo te acompana en el proceso de migracion para asegurar que toda tu informacion (clientes, servicios, cobros, pagos) se transfiera correctamente.' },
  { q: 'Que marcas de OLT son compatibles?', a: 'BeFlow Bridge soporta nativamente OLTs de Huawei (serie MA56xx), ZTE (C320, C300) y V-Sol. Tambien integramos routers MikroTik via API para gestion de queues, firewall y corte/reconexion automatica.' },
  { q: 'Como funciona la facturacion SAR/CAI?', a: 'BeFlow Net genera facturas con el formato fiscal requerido por el SAR de Honduras, incluyendo CAI, rango autorizado, fecha limite de emision y todos los datos fiscales. Tu solo configuras tus datos una vez y el sistema se encarga del resto.' },
  { q: 'Puedo tener mi propio numero de WhatsApp para notificaciones?', a: 'Si. Cada ISP recibe su propio WABA (WhatsApp Business Account) con numero dedicado. Tus clientes reciben notificaciones con el nombre y logo de tu ISP, no de BeFlow Net.' },
  { q: 'Hay un periodo de prueba?', a: 'Si. Ofrecemos una prueba guiada donde configuramos tu operacion con datos reales para que puedas evaluar la plataforma antes de comprometerte.' },
  { q: 'Es mas barato que Splynx o WispHub?', a: 'Significativamente. BeFlow Net esta disenado para el mercado centroamericano con precios acordes. Un ISP con 2,000 clientes paga ~$400/mes con el plan Pro, mientras que soluciones comparables pueden costar 2-3x mas.' },
]

export default function NetPage() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            <span className="badge-dot" />
            BeFlow Net &middot; En produccion
          </div>
          <h1>
            Gestiona tu ISP con<br />
            <span className="gradient-text">inteligencia total</span>
          </h1>
          <p className="hero-sub">
            Clientes, cobros, red de fibra, OLTs y mas — todo en una sola plataforma disenada especificamente para proveedores de internet en Centroamerica.
          </p>
          <div className="hero-ctas">
            <a href="#precios" className="btn btn-accent btn-accent-lg">
              Solicitar Demo <Arrow />
            </a>
            <a href="#como-funciona" className="btn btn-outline" style={{ padding: '14px 32px', fontSize: '15.5px', borderRadius: 12 }}>
              Ver Como Funciona
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
                  {['Dashboard', 'Clientes', 'Servicios', 'Cobros', 'Red', 'Ordenes', 'Reportes', 'Intelligence'].map((item, i) => (
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
                      { label: 'Ordenes Hoy', value: '12', color: '#F59E0B' },
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
                        <div key={i} className="mock-bar" style={{ height: `${h}%`, animationDelay: `${0.1 * (i + 1)}s` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="marquee-section">
        <div className="marquee-label">Integraciones y compatibilidad nativa</div>
        <div className="marquee-track">
          <div className="marquee-inner">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="marquee-brand">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* MODULES */}
      <ProductTabs />

      {/* HOW IT WORKS */}
      <section className="steps-section" id="como-funciona">
        <div className="container">
          <div className="steps-header animate-on-scroll" style={{ textAlign: 'center', marginBottom: 72 }}>
            <div className="section-eyebrow"><span className="eyebrow-icon"><IconArrowRight /></span> Proceso</div>
            <h2 className="section-title">Migrar tu ISP a BeFlow Net</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Migrar tu ISP a BeFlow Net es un proceso guiado paso a paso. Te acompanamos desde la importacion de datos hasta la operacion completa.
            </p>
          </div>

          <div className="steps-grid">
            <div className="step animate-on-scroll">
              <div className="step-content">
                <div className="step-number">01.</div>
                <h3 className="step-title">Conecta tu informacion</h3>
                <p className="step-desc">
                  Importa tu base de clientes desde Excel, Google Sheets o AppSheet. Configuramos departamentos, municipios, planes de servicio y zonas de cobertura de tu ISP.
                </p>
              </div>
              <div className="step-visual">
                <div className="sv-card-stack">
                  {[
                    { icon: <IconDocument />, bg: '#FFE5E5', color: '#FF3131', title: 'clientes_speednet.xlsx', sub: '1,847 registros', status: 'Listo', sc: 'green' },
                    { icon: <IconClipboard />, bg: '#D1FAE5', color: '#059669', title: 'planes_servicio.xlsx', sub: '8 planes FTTH', status: 'Listo', sc: 'green' },
                    { icon: <IconMapPin />, bg: '#FEF3C7', color: '#D97706', title: 'zonas_cobertura.xlsx', sub: '5 zonas', status: 'Procesando', sc: 'blue' },
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

            <div className="step animate-on-scroll">
              <div className="step-content">
                <div className="step-number">02.</div>
                <h3 className="step-title">Configura tu infraestructura</h3>
                <p className="step-desc">
                  Registra tus OLTs, routers MikroTik y equipos de red. BeFlow Bridge establece conexion segura con tu infraestructura para monitoreo y control remoto.
                </p>
              </div>
              <div className="step-visual">
                <div className="sv-terminal">
                  <div className="sv-terminal-line"><span className="prompt">beflow</span> <span className="flag">bridge</span> <span className="cmd">connect --olt 192.168.1.1</span></div>
                  <div className="sv-terminal-line"><span className="result">&#10003; Huawei MA5608T detectado</span></div>
                  <div className="sv-terminal-line"><span className="result">&#10003; 128 ONTs sincronizados</span></div>
                  <div className="sv-terminal-line"><span className="result">&#10003; Senal optica: normal</span></div>
                  <div className="sv-terminal-line" style={{ marginTop: 10 }}><span className="prompt">beflow</span> <span className="flag">bridge</span> <span className="cmd">connect --mikrotik 10.0.0.1</span></div>
                  <div className="sv-terminal-line"><span className="result">&#10003; CCR1036 conectado via API</span></div>
                  <div className="sv-terminal-line"><span className="result">&#10003; 847 queues importados</span></div>
                </div>
              </div>
            </div>

            <div className="step animate-on-scroll">
              <div className="step-content">
                <div className="step-number">03.</div>
                <h3 className="step-title">Opera con todo el poder</h3>
                <p className="step-desc">
                  Tu equipo ya puede gestionar clientes, generar cobros, despachar ordenes a tecnicos, monitorear la red y usar IA para tomar decisiones — todo desde un navegador.
                </p>
              </div>
              <div className="step-visual">
                <div className="sv-card-stack">
                  {[
                    { icon: <IconCheck />, bg: '#D1FAE5', color: '#059669', title: 'Cobros generados automaticamente', sub: '1,847 cobros', status: 'Completado', sc: 'green' },
                    { icon: <IconChat />, bg: '#FFE5E5', color: '#FF3131', title: 'WhatsApp masivo enviado', sub: '1,200 mensajes', status: 'En proceso', sc: 'blue' },
                    { icon: <IconBolt />, bg: '#FFF0E5', color: '#FF914D', title: '3 instalaciones asignadas', sub: 'Tecnico: Carlos Mejia', status: 'Pendiente', sc: 'orange' },
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

      {/* GIS MAP */}
      <section className="gis-section">
        <div className="container">
          <div className="gis-header animate-on-scroll" style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-eyebrow"><span className="eyebrow-icon"><IconMapPin /></span> Red</div>
            <h2 className="section-title">Tu red, visualizada en tiempo real</h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Mapa interactivo con la ubicacion de cada NAP, OLT, cliente y tramo de fibra. Todo actualizado en vivo.
            </p>
          </div>
          <NetworkMap />
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
            <div className="pricing-card animate-on-scroll">
              <div className="pricing-name">Starter</div>
              <div className="pricing-desc">Para ISPs que estan comenzando</div>
              <div className="pricing-price"><span className="pricing-currency">$</span><span className="pricing-amount">0.25</span></div>
              <div className="pricing-unit">por cliente / mes</div>
              <div className="pricing-minimum">Minimo $50/mes &middot; Hasta 500 clientes</div>
              <div className="pricing-features">
                {['4 usuarios incluidos', 'Gestion de clientes y cobros', 'Mapa de red GIS', '1,000 mensajes WhatsApp/mes', 'Facturacion SAR/CAI', 'Soporte por chat'].map((f) => (
                  <div key={f} className="pricing-feature"><span className="check-icon"><IconCheck /></span> {f}</div>
                ))}
              </div>
              <a href="#" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', borderRadius: 10 }}>Comenzar Gratis</a>
            </div>

            <div className="pricing-card featured animate-on-scroll">
              <div className="pricing-badge">Mas Popular</div>
              <div className="pricing-name">Pro</div>
              <div className="pricing-desc">Para ISPs en crecimiento</div>
              <div className="pricing-price"><span className="pricing-currency">$</span><span className="pricing-amount">0.20</span></div>
              <div className="pricing-unit">por cliente / mes</div>
              <div className="pricing-minimum">Minimo $100/mes &middot; Hasta 2,000 clientes</div>
              <div className="pricing-features">
                {['8 usuarios incluidos', 'Todo de Starter +', 'BeFlow Intelligence (IA)', 'BeFlow Bridge (OLT/MikroTik)', '4,000 mensajes WhatsApp/mes', 'Portal de Clientes', 'Soporte prioritario'].map((f) => (
                  <div key={f} className="pricing-feature"><span className="check-icon"><IconCheck /></span> {f}</div>
                ))}
              </div>
              <a href="#" className="btn btn-accent" style={{ width: '100%', justifyContent: 'center', borderRadius: 10 }}>Comenzar con Pro</a>
            </div>

            <div className="pricing-card animate-on-scroll">
              <div className="pricing-name">Enterprise</div>
              <div className="pricing-desc">Para operaciones grandes</div>
              <div className="pricing-price"><span className="pricing-currency">$</span><span className="pricing-amount">0.15</span></div>
              <div className="pricing-unit">por cliente / mes</div>
              <div className="pricing-minimum">Minimo $300/mes &middot; Clientes ilimitados</div>
              <div className="pricing-features">
                {['20 usuarios (+$5/extra)', 'Todo de Pro +', '10,000 mensajes WhatsApp/mes', 'API personalizada', 'Onboarding dedicado', 'SLA garantizado', 'Soporte por WhatsApp directo'].map((f) => (
                  <div key={f} className="pricing-feature"><span className="check-icon"><IconCheck /></span> {f}</div>
                ))}
              </div>
              <a href="#" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', borderRadius: 10 }}>Contactar Ventas</a>
            </div>
          </div>
        </div>
      </section>

      <FAQ items={netFaqs} />

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card animate-on-scroll">
            <h2>Tu ISP merece una plataforma<br />que entienda Centroamerica</h2>
            <p>Unete a los proveedores de internet que estan modernizando su operacion con BeFlow Net.</p>
            <div className="cta-btns">
              <a href="#precios" className="btn btn-accent btn-accent-lg">Solicitar Demo <Arrow /></a>
              <a href="#precios" className="btn" style={{ color: 'rgba(255,255,255,0.6)', border: '1.5px solid rgba(255,255,255,0.15)', padding: '14px 32px', borderRadius: 12, fontSize: '15.5px' }}>Ver Precios</a>
            </div>
          </div>
        </div>
      </section>

      <Footer product="BeFlow Net" />
    </>
  )
}
