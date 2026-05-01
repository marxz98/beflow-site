import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { FAQ } from '@/components/FAQ'
import { MintSDKTabs } from '@/components/MintSDKTabs'
import { ScrollAnimator } from '@/components/ScrollAnimator'
import { IconCheck, IconShield, IconCode, IconDocument, IconFileText, IconAlertTriangle, IconSettings, IconTarget, IconZap } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'Mint by BeFlow — Facturacion Electronica para Honduras',
  description: 'API REST para generar, validar y firmar documentos fiscales electronicos cumpliendo con el SAR de Honduras. Envias un JSON, recibis XML firmado + PDF listo.',
}

const Arrow = () => (
  <svg className="btn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const mintFaqs = [
  { q: 'Que tipos de documento soporta?', a: 'Factura, Nota de Credito, Nota de Debito y Documento Soporte.' },
  { q: 'Necesito un certificado digital?', a: 'Si, necesitas un certificado .p12 emitido por una autoridad certificadora autorizada por el SAR. Mint se encarga de la firma.' },
  { q: 'Puedo probar sin pagar?', a: 'Si. El plan Sandbox es gratis y te da acceso completo al API en modo prueba con 100 documentos de test.' },
  { q: 'Con que sistemas se integra?', a: 'Con cualquier sistema que haga requests HTTP: WooCommerce, Odoo, Zoho, SAP, POS custom, apps moviles, ERPs propios.' },
]

export default function MintPage() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge" style={{ borderColor: 'rgba(16,185,129,0.3)' }}>
            <span className="badge-dot" style={{ background: '#10B981' }} />
            Mint by BeFlow &middot; API Live
          </div>
          <h1>
            Facturacion electronica<br />
            <span className="gradient-text" style={{ background: 'linear-gradient(135deg, #10B981 0%, #34D399 50%, #10B981 100%)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>para Honduras. Una API.</span>
          </h1>
          <p className="hero-sub">
            Envias un JSON simple, recibis XML firmado + PDF listo + CUDE de verificacion. Sin lidiar con la complejidad fiscal del SAR.
          </p>
          <div className="hero-ctas">
            <a href="#docs" className="btn btn-mint btn-accent-lg">
              Ver Documentacion <Arrow />
            </a>
            <a href="#precios" className="btn btn-outline" style={{ padding: '14px 32px', fontSize: '15.5px', borderRadius: 12 }}>
              Comenzar Gratis
            </a>
          </div>

          <div className="hero-visual">
            <div className="mint-hero-code">
              <div className="mockup-header">
                <div className="mockup-dot r" />
                <div className="mockup-dot y" />
                <div className="mockup-dot g" />
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginLeft: 12 }}>POST /api/v1/invoices</span>
              </div>
              <div className="mint-code-body">
                <div className="mint-code-section">
                  <div className="mint-code-label">Request</div>
                  <pre className="mint-pre">{`POST /api/v1/invoices
Content-Type: application/json

{
  "receiver": { "rtn": "0801199912345", "name": "Corp S.A." },
  "items": [
    {
      "description": "Servicio Cloud",
      "quantity": 1,
      "unit_price": 1500.00
    }
  ]
}`}</pre>
                </div>
                <div className="mint-code-section">
                  <div className="mint-code-label response">201 Created</div>
                  <pre className="mint-pre">{`{
  "invoice_number": "001-001-01-00000001",
  "cude": "a1b2c3d4...",
  "pdf_url": "/docs/INV-001.pdf",
  "xml_url": "/docs/INV-001.xml",
  "status": "signed"
}`}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mint-features-section" id="features">
        <div className="container">
          <div className="mint-features-header animate-on-scroll" style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-eyebrow" style={{ color: '#10B981' }}><span className="eyebrow-icon" style={{ background: 'rgba(16,185,129,0.15)' }}><IconShield /></span> Features</div>
            <h2 className="section-title">Todo lo que necesitas para facturar</h2>
          </div>
          <div className="mint-features-grid">
            {[
              { icon: <IconShield />, title: 'Validacion fiscal SAR', desc: 'RTN modulo 11, CAI, ISV 15%/18%, exentos. Todo automatico.', color: '#10B981', bg: 'rgba(16,185,129,0.1)' },
              { icon: <IconCode />, title: 'Firma digital XAdES-BES', desc: 'Certificado .p12. XML firmado listo para el SAR.', color: '#3B82F6', bg: 'rgba(59,130,246,0.1)' },
              { icon: <IconFileText />, title: 'PDF profesional', desc: 'Descargable con CAI, correlativo, desglose ISV. Email automatico al receptor.', color: '#FF3131', bg: 'rgba(255,49,49,0.1)' },
              { icon: <IconSettings />, title: 'Gestion de CAI', desc: 'Alertas de vencimiento, agotamiento, rotacion automatica entre rangos.', color: '#F59E0B', bg: 'rgba(245,158,11,0.1)' },
              { icon: <IconZap />, title: 'Modo contingencia', desc: 'Sigue facturando offline. Unico en Honduras.', color: '#7C3AED', bg: 'rgba(124,58,237,0.1)' },
              { icon: <IconDocument />, title: 'Reportes ISV', desc: 'Exportables en Excel. Listo para declaracion mensual ante el SAR.', color: '#EC4899', bg: 'rgba(236,72,153,0.1)' },
            ].map((f) => (
              <div key={f.title} className="mint-feature-card animate-on-scroll">
                <div className="mint-feature-icon" style={{ background: f.bg, color: f.color }}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="mint-sdk-section" id="sdks">
        <div className="container">
          <div className="mint-sdk-header animate-on-scroll" style={{ textAlign: 'center', marginBottom: 48 }}>
            <div className="section-eyebrow" style={{ color: '#34D399' }}><span className="eyebrow-icon" style={{ background: 'rgba(16,185,129,0.15)' }}><IconCode /></span> SDKs</div>
            <h2 className="section-title" style={{ color: 'white' }}>Tu lenguaje. Tu framework.</h2>
            <p className="section-subtitle" style={{ margin: '0 auto', color: 'rgba(255,255,255,0.5)' }}>
              SDKs oficiales en 5 lenguajes. Instala, configura tu API key y empieza a facturar.
            </p>
          </div>
          <MintSDKTabs />
        </div>
      </section>

      {/* NUMBERS */}
      <section className="metrics-section" style={{ background: 'var(--bg-white)' }}>
        <div className="container">
          <div className="metrics-grid">
            {[
              { value: '36', label: 'Endpoints REST' },
              { value: '5', label: 'SDKs oficiales' },
              { value: '4', label: 'Tipos de documento' },
              { value: '0', label: 'Competidores API-first en Honduras' },
            ].map((m) => (
              <div key={m.label} className="metric animate-on-scroll">
                <div className="metric-value" style={{ background: 'linear-gradient(135deg, #10B981, #34D399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{m.value}</div>
                <div className="metric-label" style={{ color: 'var(--text-tertiary)' }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing-section" id="precios">
        <div className="container">
          <div className="pricing-header animate-on-scroll" style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-eyebrow" style={{ color: '#10B981' }}><span className="eyebrow-icon" style={{ background: 'rgba(16,185,129,0.15)' }}><IconTarget /></span> Precios</div>
            <h2 className="section-title">Precios simples, en Lempiras</h2>
          </div>

          <div className="pricing-grid mint-pricing">
            {[
              { name: 'Sandbox', desc: 'Para developers evaluando', price: 'Gratis', unit: '', minimum: '100 docs de prueba', features: ['API completa en modo test', 'Documentacion completa', 'Sin tarjeta de credito'], cta: 'Comenzar Gratis', style: 'outline' },
              { name: 'Starter', desc: '200 documentos/mes', price: 'L 1,500', unit: '/mes', minimum: '1 certificado digital', features: ['200 documentos/mes', 'Email automatico', 'Soporte por chat'], cta: 'Comenzar', style: 'outline' },
              { name: 'Growth', desc: '1,000 documentos/mes', price: 'L 3,500', unit: '/mes', minimum: 'Webhooks incluidos', features: ['1,000 documentos/mes', 'Webhooks', 'Reportes ISV', 'Soporte prioritario'], cta: 'Comenzar', style: 'featured', badge: 'Recomendado' },
              { name: 'Business', desc: '5,000 documentos/mes', price: 'L 7,500', unit: '/mes', minimum: 'Modo contingencia', features: ['5,000 documentos/mes', 'Modo contingencia offline', 'Soporte dedicado', 'SLA garantizado'], cta: 'Comenzar', style: 'outline' },
            ].map((plan) => (
              <div key={plan.name} className={`pricing-card ${plan.style === 'featured' ? 'featured' : ''} animate-on-scroll`} style={{ borderColor: plan.style === 'featured' ? '#10B981' : undefined, boxShadow: plan.style === 'featured' ? '0 0 60px rgba(16,185,129,0.1), 0 4px 16px rgba(0,0,0,0.06)' : undefined }}>
                {plan.badge && <div className="pricing-badge" style={{ background: 'linear-gradient(135deg, #10B981, #34D399)' }}>{plan.badge}</div>}
                <div className="pricing-name">{plan.name}</div>
                <div className="pricing-desc">{plan.desc}</div>
                <div className="pricing-price">
                  <span className="pricing-amount" style={{ fontSize: plan.price === 'Gratis' ? 40 : undefined }}>{plan.price}</span>
                  {plan.unit && <span className="pricing-unit">{plan.unit}</span>}
                </div>
                <div className="pricing-minimum">{plan.minimum}</div>
                <div className="pricing-features">
                  {plan.features.map((f) => (
                    <div key={f} className="pricing-feature"><span className="check-icon" style={{ background: 'rgba(16,185,129,0.15)', color: '#10B981' }}><IconCheck /></span> {f}</div>
                  ))}
                </div>
                <a href="#" className={`btn ${plan.style === 'featured' ? 'btn-mint' : 'btn-outline'}`} style={{ width: '100%', justifyContent: 'center', borderRadius: 10 }}>{plan.cta}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={mintFaqs} />

      {/* CTA */}
      <section className="cta-section" id="docs">
        <div className="container">
          <div className="cta-card animate-on-scroll">
            <h2>Empieza a facturar<br />con Mint</h2>
            <p>La API de facturacion electronica mas moderna de Honduras. Comienza gratis.</p>
            <div className="cta-btns">
              <a href="#" className="btn btn-mint btn-accent-lg">Comenzar Gratis <Arrow /></a>
              <a href="#" className="btn" style={{ color: 'rgba(255,255,255,0.6)', border: '1.5px solid rgba(255,255,255,0.15)', padding: '14px 32px', borderRadius: 12, fontSize: '15.5px' }}>Ver Documentacion</a>
            </div>
          </div>
        </div>
      </section>

      <Footer product="Mint" />
    </>
  )
}
