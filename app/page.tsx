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

const WhatsAppIcon = () => (
  <svg className="marquee-svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const MetaIcon = () => (
  <svg className="marquee-svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a4.892 4.892 0 00.703 1.497C1.658 19.038 2.818 19.8 4.16 19.8c.58 0 1.187-.15 1.782-.488.574-.327 1.14-.81 1.664-1.475.9-1.143 1.694-2.774 2.244-4.953l.122-.483.125.474c.548 2.07 1.326 3.636 2.196 4.746.507.647 1.054 1.12 1.612 1.443.583.336 1.176.486 1.746.486 1.342 0 2.502-.762 3.247-1.881a4.892 4.892 0 00.703-1.497c.14-.604.21-1.267.21-1.973 0-2.566-.704-5.24-2.044-7.303C16.198 5.31 14.483 4.03 12.515 4.03c-.894 0-1.727.302-2.47.834-.717.512-1.36 1.262-1.899 2.244l-.146.267-.146-.267c-.539-.982-1.182-1.732-1.9-2.244-.742-.532-1.575-.834-2.469-.834h-.07zm0 1.9c.602 0 1.163.253 1.715.756.528.48 1.03 1.19 1.469 2.128.478.995.871 2.216 1.152 3.611.209 1.04.345 2.156.394 3.295.015.383.022.721.022.983 0 .293-.005.503-.014.644-.034.483-.102.893-.197 1.222-.143.502-.334.885-.56 1.146-.36.413-.744.618-1.157.618-.585 0-1.174-.36-1.72-1.084-.502-.666-.947-1.626-1.282-2.847-.381-1.385-.594-3.092-.594-4.87 0-1.793.241-3.397.688-4.645.389-1.09.899-1.869 1.458-2.257.328-.228.68-.338 1.046-.338l-.42-.302zm11.2 0c.365 0 .718.11 1.047.338.558.388 1.068 1.168 1.457 2.257.447 1.248.688 2.852.688 4.645 0 1.778-.213 3.485-.594 4.87-.335 1.221-.78 2.181-1.282 2.847-.546.724-1.135 1.084-1.72 1.084-.413 0-.797-.205-1.157-.618-.226-.261-.417-.644-.56-1.146-.095-.329-.163-.739-.197-1.222-.01-.14-.014-.35-.014-.644 0-.262.007-.6.022-.983.05-1.14.185-2.255.394-3.295.281-1.395.674-2.616 1.152-3.61.44-.94.94-1.65 1.469-2.129.552-.503 1.113-.756 1.715-.756l-.42.302z"/>
  </svg>
)

const TelegramIcon = () => (
  <svg className="marquee-svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
)

const marqueeItems: { label: string; type: 'text' | 'icon'; brandColor: string; icon?: React.ReactNode }[] = [
  { label: 'HUAWEI', type: 'text', brandColor: '#FF0000' },
  { label: 'ZTE', type: 'text', brandColor: '#0056A2' },
  { label: 'V-SOL', type: 'text', brandColor: '#FF6600' },
  { label: 'MikroTik', type: 'text', brandColor: '#293239' },
  { label: 'PixelPay', type: 'text', brandColor: '#00C853' },
  { label: 'WhatsApp', type: 'icon', brandColor: '#25D366', icon: <WhatsAppIcon /> },
  { label: 'Meta', type: 'icon', brandColor: '#0081FB', icon: <MetaIcon /> },
  { label: 'Telegram', type: 'icon', brandColor: '#26A5E4', icon: <TelegramIcon /> },
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
              <div key={i} className="marquee-item" style={{ '--brand-color': item.brandColor } as React.CSSProperties}>
                {item.type === 'icon' ? (
                  <>
                    {item.icon}
                    <span className="marquee-brand-text">{item.label}</span>
                  </>
                ) : (
                  <span className="marquee-brand-text">{item.label}</span>
                )}
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
