import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollAnimator } from '@/components/ScrollAnimator'
import { NetBento } from '@/components/NetBento'

export const metadata: Metadata = {
  title: 'BeFlow Net - La Plataforma Inteligente para ISPs',
  description: 'Gestiona clientes, cobros, red de fibra, OLTs y mas. Todo en una sola plataforma para proveedores de internet en Honduras y Centroamerica.',
}

export default function NetPage() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />

      <section className="hero hero-product">
        <div className="hero-glow" />
        <div className="container">
          <div className="breadcrumb-inline">
            <a href="/">BeFlow</a>
            <span className="bc-sep">/</span>
            <span>BeFlow Net</span>
          </div>
          <div className="hero-badge hero-anim hero-anim-1">
            <span className="dot" />
            BeFlow Net &middot; En produccion
          </div>
          <h1 className="hero-anim hero-anim-2">
            Gestiona tu ISP con<br />
            <span className="grad">inteligencia total</span>
          </h1>
          <p className="hero-sub hero-anim hero-anim-3">
            Clientes, cobros, red de fibra, OLTs y más — todo en una sola plataforma diseñada para proveedores de internet en Centroamérica.
          </p>
          <div className="hero-ctas hero-anim hero-anim-4">
            <a href="mailto:hello@justbeflow.com" className="btn btn-gradient btn-lg">Solicitar Demo</a>
            <a href="https://net.justbeflow.com" className="btn btn-outline btn-lg">Iniciar sesion</a>
          </div>
        </div>
      </section>

      <NetBento />

      {/* Related products */}
      <section className="related-section">
        <div className="container">
          <div className="related-label anim-on-scroll">Más productos de BeFlow</div>
          <div className="related-grid anim-on-scroll">
            <a href="/mint" className="related-card mint">
              <div className="related-name">Mint</div>
              <div className="related-desc">Facturación electrónica para Honduras. Una API REST con firma digital XAdES-BES para el SAR.</div>
              <span className="related-link">Explorar Mint →</span>
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
