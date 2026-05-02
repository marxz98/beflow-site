import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollAnimator } from '@/components/ScrollAnimator'

export const metadata: Metadata = {
  title: 'Mint by BeFlow - Facturacion Electronica para Honduras',
  description: 'API REST para generar, validar y firmar documentos fiscales electronicos cumpliendo con el SAR de Honduras.',
}

export default function MintPage() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />
      <section className="hero">
        <div className="hero-glow" style={{ background: 'radial-gradient(ellipse, rgba(16,185,129,0.08) 0%, rgba(16,185,129,0.03) 30%, transparent 70%)' }} />
        <div className="container">
          <div className="hero-badge hero-anim hero-anim-1" style={{ borderColor: 'rgba(16,185,129,0.15)' }}>
            <span className="dot" style={{ background: '#10B981' }} />
            Mint by BeFlow &middot; API Live
          </div>
          <h1 className="hero-anim hero-anim-2">
            Facturacion electronica<br />
            <span style={{ background: 'linear-gradient(135deg, #10B981, #34D399)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>para Honduras. Una API.</span>
          </h1>
          <p className="hero-sub hero-anim hero-anim-3">
            Envias un JSON simple, recibis XML firmado + PDF listo + CUDE de verificacion. Sin lidiar con la complejidad fiscal del SAR.
          </p>
          <div className="hero-ctas hero-anim hero-anim-4">
            <a href="#" className="btn btn-lg" style={{ background: 'linear-gradient(135deg, #10B981, #34D399)', color: 'white' }}>Ver Documentacion</a>
            <a href="/" className="btn btn-outline btn-lg">Volver a BeFlow</a>
          </div>
        </div>
      </section>
      <div style={{ textAlign: 'center', padding: '80px 24px', color: 'var(--text-tertiary)', fontSize: 15 }}>
        Pagina completa de Mint en construccion. <a href="/" style={{ color: '#10B981' }}>Volver al inicio</a>
      </div>
      <Footer />
    </>
  )
}
