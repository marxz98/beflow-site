'use client'

import { useState } from 'react'

const Arrow = () => (
  <svg className="btn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const Check = () => (
  <div className="pf-check">✓</div>
)

type Tab = 'net' | 'intelligence' | 'bridge' | 'portal'

const tabs: { id: Tab; label: string }[] = [
  { id: 'net', label: 'BeFlow Net' },
  { id: 'intelligence', label: 'Intelligence' },
  { id: 'bridge', label: 'Bridge' },
  { id: 'portal', label: 'Portal' },
]

export function ProductTabs() {
  const [active, setActive] = useState<Tab>('net')

  return (
    <section className="products-section" id="productos">
      <div className="container">
        <div className="products-header animate-on-scroll" style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="section-eyebrow">
            <span className="eyebrow-icon">◆</span> Productos
          </div>
          <h2 className="section-title">BeFlow Net: nuestro<br/>producto estrella</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            La plataforma todo-en-uno para proveedores de internet. Cuatro módulos que trabajan juntos para cubrir cada aspecto de tu operación ISP.
          </p>
        </div>

        <div className="product-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`product-tab ${active === tab.id ? 'active' : ''}`}
              onClick={() => setActive(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* BeFlow Net */}
        <div className={`product-panel ${active === 'net' ? 'active' : ''}`} style={{ display: active === 'net' ? 'grid' : 'none' }}>
          <div className="product-info">
            <h3>BeFlow Net</h3>
            <p>La plataforma central de gestión ISP. Administra clientes, servicios, cobros, pagos, órdenes de trabajo, y tu red de fibra completa desde un solo lugar.</p>
            <div className="product-features">
              <div className="product-feature"><Check /><div className="pf-text"><strong>Gestión de clientes</strong> con importación Excel y datos de Honduras</div></div>
              <div className="product-feature"><Check /><div className="pf-text"><strong>Cobros y pagos</strong> con facturación SAR/CAI y PixelPay</div></div>
              <div className="product-feature"><Check /><div className="pf-text"><strong>Red visual GIS</strong> con mapa de fibra, NAPs, OLTs y ONTs animado</div></div>
              <div className="product-feature"><Check /><div className="pf-text"><strong>Órdenes de trabajo</strong> con asignación a técnicos y vista móvil</div></div>
            </div>
            <a href="#precios" className="btn btn-accent">Explorar BeFlow Net <Arrow /></a>
          </div>
          <div className="product-visual">
            <div className="pv-grid">
              <div className="pv-card">
                <div className="pv-card-icon" style={{ background: 'rgba(255,49,49,0.15)', color: '#FF6B6B' }}>☷</div>
                <div className="pv-card-title">Clientes Activos</div>
                <div className="pv-card-value">1,847</div>
                <div className="pv-card-sub">+12% vs mes anterior</div>
              </div>
              <div className="pv-card">
                <div className="pv-card-icon" style={{ background: 'rgba(16,185,129,0.15)', color: '#34D399' }}>$</div>
                <div className="pv-card-title">Ingresos Mes</div>
                <div className="pv-card-value">L 842K</div>
                <div className="pv-card-sub">94.2% tasa de cobro</div>
              </div>
              <div className="pv-card">
                <div className="pv-card-icon" style={{ background: 'rgba(245,158,11,0.15)', color: '#FBBF24' }}>⚡</div>
                <div className="pv-card-title">OLTs Activos</div>
                <div className="pv-card-value">8</div>
                <div className="pv-card-sub">100% en línea</div>
              </div>
              <div className="pv-card">
                <div className="pv-card-icon" style={{ background: 'rgba(255,145,77,0.15)', color: '#FFAA6B' }}>◈</div>
                <div className="pv-card-title">Órdenes Hoy</div>
                <div className="pv-card-value">12</div>
                <div className="pv-card-sub">3 instalaciones nuevas</div>
              </div>
            </div>
            <div className="pv-decoration" />
          </div>
        </div>

        {/* Intelligence */}
        <div className={`product-panel ${active === 'intelligence' ? 'active' : ''}`} style={{ display: active === 'intelligence' ? 'grid' : 'none' }}>
          <div className="product-info">
            <h3>BeFlow Intelligence</h3>
            <p>Tu asistente de inteligencia artificial integrado. Haz preguntas en español sobre tu operación y obtén respuestas instantáneas basadas en tus datos reales.</p>
            <div className="product-features">
              <div className="product-feature"><Check /><div className="pf-text"><strong>Chat en español</strong> — pregunta sobre clientes, cobros y más</div></div>
              <div className="product-feature"><Check /><div className="pf-text"><strong>Análisis predictivo</strong> de morosidad y churn de clientes</div></div>
              <div className="product-feature"><Check /><div className="pf-text"><strong>Reportes automáticos</strong> generados con contexto de tu ISP</div></div>
              <div className="product-feature"><Check /><div className="pf-text"><strong>Powered by Claude</strong> — la IA más avanzada del mercado</div></div>
            </div>
            <a href="#precios" className="btn btn-accent">Explorar Intelligence <Arrow /></a>
          </div>
          <div className="product-visual" style={{ background: 'linear-gradient(135deg, #0B1120, #1C0B0B)' }}>
            <div style={{ padding: 8 }}>
              <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 12, padding: 16, marginBottom: 12, border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>Tú</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)' }}>¿Cuántos clientes están morosos este mes?</div>
              </div>
              <div style={{ background: 'rgba(255,49,49,0.1)', borderRadius: 12, padding: 16, border: '1px solid rgba(255,49,49,0.15)' }}>
                <div style={{ fontSize: 12, color: 'rgba(255,107,107,0.7)', marginBottom: 8 }}>⚡ BeFlow Intelligence</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
                  Actualmente tienes <strong style={{ color: '#FBBF24' }}>127 clientes</strong> con pagos pendientes de más de 15 días, representando <strong style={{ color: '#FBBF24' }}>L 89,400</strong> en cobros por recuperar. Te recomiendo enviar recordatorios vía WhatsApp.
                </div>
              </div>
            </div>
            <div className="pv-decoration" style={{ background: 'rgba(255,49,49,0.12)' }} />
          </div>
        </div>

        {/* Bridge */}
        <div className={`product-panel ${active === 'bridge' ? 'active' : ''}`} style={{ display: active === 'bridge' ? 'grid' : 'none' }}>
          <div className="product-info">
            <h3>BeFlow Bridge</h3>
            <p>El puente directo entre tu plataforma y tu infraestructura de red. Conecta tus OLTs, routers MikroTik y gestiona el corte/reconexión automático.</p>
            <div className="product-features">
              <div className="product-feature"><Check /><div className="pf-text"><strong>Conexión SSH directa</strong> a OLTs Huawei, ZTE y V-Sol</div></div>
              <div className="product-feature"><Check /><div className="pf-text"><strong>MikroTik API</strong> — gestión de queues y firewall</div></div>
              <div className="product-feature"><Check /><div className="pf-text"><strong>Corte y reconexión automática</strong> por estado de pago</div></div>
              <div className="product-feature"><Check /><div className="pf-text"><strong>Monitoreo SNMP</strong> en tiempo real de señal óptica</div></div>
            </div>
            <a href="#precios" className="btn btn-accent">Explorar Bridge <Arrow /></a>
          </div>
          <div className="product-visual" style={{ background: 'linear-gradient(135deg, #0B1120, #042f2e)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { name: 'OLT-01 Huawei MA5608T', sub: '192.168.1.1 · 128 ONTs · Señal OK', status: 'Online', color: '#10B981', bg: 'rgba(16,185,129,0.15)', tc: '#34D399' },
                { name: 'MikroTik CCR1036', sub: '10.0.0.1 · 847 queues · CPU 23%', status: 'Online', color: '#10B981', bg: 'rgba(16,185,129,0.15)', tc: '#34D399' },
                { name: 'OLT-02 ZTE C320', sub: '192.168.2.1 · 64 ONTs · 2 alertas', status: 'Warning', color: '#F59E0B', bg: 'rgba(245,158,11,0.15)', tc: '#FBBF24' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '14px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: 10, border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: item.color, boxShadow: `0 0 8px ${item.color}50` }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>{item.name}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{item.sub}</div>
                  </div>
                  <div style={{ fontSize: 11, background: item.bg, color: item.tc, padding: '4px 10px', borderRadius: 100, fontWeight: 600 }}>{item.status}</div>
                </div>
              ))}
              <div style={{ marginTop: 8, padding: '12px 16px', background: 'rgba(255,49,49,0.08)', borderRadius: 10, border: '1px solid rgba(255,49,49,0.12)' }}>
                <div style={{ fontSize: 11, color: 'rgba(255,107,107,0.6)', marginBottom: 4 }}>Última acción automática</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>🔄 Reconexión automática: Cliente #1284 — pago confirmado vía PixelPay</div>
              </div>
            </div>
            <div className="pv-decoration" style={{ background: 'rgba(16,185,129,0.1)' }} />
          </div>
        </div>

        {/* Portal */}
        <div className={`product-panel ${active === 'portal' ? 'active' : ''}`} style={{ display: active === 'portal' ? 'grid' : 'none' }}>
          <div className="product-info">
            <h3>Portal de Clientes</h3>
            <p>Un portal web personalizado con la marca de tu ISP donde tus clientes pueden ver su estado de cuenta, pagar en línea y abrir tickets de soporte.</p>
            <div className="product-features">
              <div className="product-feature"><Check /><div className="pf-text"><strong>Marca personalizada</strong> con logo y colores de tu ISP</div></div>
              <div className="product-feature"><Check /><div className="pf-text"><strong>Pago en línea</strong> integrado con PixelPay</div></div>
              <div className="product-feature"><Check /><div className="pf-text"><strong>Estado de cuenta</strong> y historial de pagos en tiempo real</div></div>
              <div className="product-feature"><Check /><div className="pf-text"><strong>Tickets de soporte</strong> sin necesidad de llamar</div></div>
            </div>
            <a href="#precios" className="btn btn-accent">Explorar Portal <Arrow /></a>
          </div>
          <div className="product-visual" style={{ background: 'linear-gradient(135deg, #F8FAFC, #FFF5F5)', border: '1px solid #E5E7EB' }}>
            <div style={{ textAlign: 'center', padding: 16 }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, background: 'linear-gradient(135deg,#FF3131,#FF914D)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: 22 }}>S</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: '#0B1120', marginBottom: 2 }}>SpeedNet</div>
              <div style={{ fontSize: 13, color: '#9CA3AF', marginBottom: 24 }}>Portal del Cliente</div>
              <div style={{ background: 'white', borderRadius: 12, padding: 20, textAlign: 'left', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', marginBottom: 12 }}>
                <div style={{ fontSize: 12, color: '#9CA3AF', marginBottom: 4 }}>Tu próximo pago</div>
                <div style={{ fontSize: 28, fontWeight: 700, color: '#0B1120' }}>L 599.00</div>
                <div style={{ fontSize: 12, color: '#10B981', fontWeight: 600 }}>Vence: 15 de Abril</div>
              </div>
              <div style={{ background: 'linear-gradient(135deg, #FF3131, #FF914D)', color: 'white', padding: 12, borderRadius: 10, fontSize: 14, fontWeight: 600 }}>Pagar Ahora con PixelPay</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
