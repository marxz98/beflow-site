import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollAnimator } from '@/components/ScrollAnimator'
import { MintBento } from '@/components/MintBento'

export const metadata: Metadata = {
  title: 'Mint by BeFlow - Facturacion Electronica para Honduras',
  description: 'API REST para generar, validar y firmar documentos fiscales electronicos cumpliendo con el SAR de Honduras.',
}

export default function MintPage() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />

      <section className="hero hero-product">
        <div className="hero-glow" style={{ background: 'radial-gradient(ellipse, rgba(16,185,129,0.08) 0%, rgba(16,185,129,0.03) 30%, transparent 70%)' }} />
        <div className="container">
          <div className="breadcrumb-inline">
            <a href="/">BeFlow</a>
            <span className="bc-sep">/</span>
            <span>Mint</span>
          </div>
          <div className="hero-badge hero-anim hero-anim-1" style={{ borderColor: 'rgba(16,185,129,0.15)' }}>
            <span className="dot" style={{ background: '#10B981' }} />
            Mint by BeFlow &middot; API Live
          </div>
          <h1 className="hero-anim hero-anim-2">
            Facturacion electronica<br />
            <span style={{ background: 'linear-gradient(135deg, #10B981, #34D399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              para Honduras. Una API.
            </span>
          </h1>
          <p className="hero-sub hero-anim hero-anim-3">
            Envias un JSON simple, recibis XML firmado + PDF listo + CUDE de verificacion. Sin lidiar con la complejidad fiscal del SAR.
          </p>
          <div className="hero-ctas hero-anim hero-anim-4">
            <a href="#" className="btn btn-lg" style={{ background: 'linear-gradient(135deg, #10B981, #34D399)', color: 'white' }}>
              Ver Documentacion
            </a>
            <a href="/" className="btn btn-outline btn-lg">Volver a BeFlow</a>
          </div>
        </div>
      </section>

      <MintBento />

      {/* Related products */}
      <section className="related-section">
        <div className="container">
          <div className="related-label anim-on-scroll">Más productos de BeFlow</div>
          <div className="related-grid anim-on-scroll">
            <a href="/net" className="related-card net">
              <div className="related-name">BeFlow Net</div>
              <div className="related-desc">Plataforma todo-en-uno para ISPs. Gestión de clientes, cobros, red de fibra y OLTs con IA integrada.</div>
              <span className="related-link">Conocer BeFlow Net →</span>
            </a>
            <a href="/envradar" className="related-card enr">
              <div className="related-name">EnvRadar</div>
              <div className="related-desc">Extensión VS Code que detecta secrets, variables faltantes y errores de tipo en tus .env.</div>
              <span className="related-link">Ver EnvRadar →</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
