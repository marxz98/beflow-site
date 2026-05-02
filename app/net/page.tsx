import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollAnimator } from '@/components/ScrollAnimator'

export const metadata: Metadata = {
  title: 'BeFlow Net - La Plataforma Inteligente para ISPs',
  description: 'Gestiona clientes, cobros, red de fibra, OLTs y mas. Todo en una sola plataforma para proveedores de internet en Honduras y Centroamerica.',
}

export default function NetPage() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />
      <section className="hero">
        <div className="hero-glow" />
        <div className="container">
          <div className="hero-badge hero-anim hero-anim-1">
            <span className="dot" />
            BeFlow Net &middot; En produccion
          </div>
          <h1 className="hero-anim hero-anim-2">
            Gestiona tu ISP con<br />
            <span className="grad">inteligencia total</span>
          </h1>
          <p className="hero-sub hero-anim hero-anim-3">
            Clientes, cobros, red de fibra, OLTs y mas — todo en una sola plataforma disenada para proveedores de internet en Centroamerica.
          </p>
          <div className="hero-ctas hero-anim hero-anim-4">
            <a href="mailto:hello@justbeflow.com" className="btn btn-gradient btn-lg">Solicitar Demo</a>
            <a href="/" className="btn btn-outline btn-lg">Volver a BeFlow</a>
          </div>
        </div>
      </section>
      <div style={{ textAlign: 'center', padding: '80px 24px', color: 'var(--text-tertiary)', fontSize: 15 }}>
        Pagina completa de BeFlow Net en construccion. <a href="/" style={{ color: 'var(--accent-1)' }}>Volver al inicio</a>
      </div>
      <Footer />
    </>
  )
}
