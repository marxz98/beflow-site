import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollAnimator } from '@/components/ScrollAnimator'
import { EnvBento } from '@/components/EnvBento'

export const metadata: Metadata = {
  title: 'EnvRadar - Protect your environment variables in VS Code',
  description: 'Detect missing variables, leaked secrets, and type errors in your .env files. Fully offline. Completely free. Open source.',
}

export default function EnvRadarPage() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />

      <section className="hero hero-product">
        <div className="hero-glow" style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, rgba(59,130,246,0.03) 30%, transparent 70%)' }} />
        <div className="container">
          <div className="breadcrumb-inline">
            <a href="/">BeFlow</a>
            <span className="bc-sep">/</span>
            <span>EnvRadar</span>
          </div>
          <div className="hero-badge hero-anim hero-anim-1" style={{ borderColor: 'rgba(59,130,246,0.15)' }}>
            <span className="dot" style={{ background: '#3B82F6' }} />
            Open Source &middot; VS Code Extension
          </div>
          <h1 className="hero-anim hero-anim-2">
            Stop shipping<br />
            <span style={{ background: 'linear-gradient(135deg, #3B82F6, #60A5FA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              broken environments.
            </span>
          </h1>
          <p className="hero-sub hero-anim hero-anim-3">
            EnvRadar detects missing variables, leaked secrets, and type errors in your .env files before they reach production. Fully offline. Completely free.
          </p>
          <div className="hero-ctas hero-anim hero-anim-4">
            <a href="#" className="btn btn-lg" style={{ background: 'linear-gradient(135deg, #3B82F6, #60A5FA)', color: 'white' }}>
              Install from Marketplace
            </a>
            <a href="/" className="btn btn-outline btn-lg">View on GitHub</a>
          </div>
        </div>
      </section>

      <EnvBento />

      {/* Related products */}
      <section className="related-section">
        <div className="container">
          <div className="related-label anim-on-scroll">More from BeFlow</div>
          <div className="related-grid anim-on-scroll">
            <a href="/net" className="related-card net">
              <div className="related-name">BeFlow Net</div>
              <div className="related-desc">All-in-one platform for ISPs. Customer management, billing, fiber network, OLTs and AI — in one place.</div>
              <span className="related-link">Explore BeFlow Net →</span>
            </a>
            <a href="/mint" className="related-card mint">
              <div className="related-name">Mint</div>
              <div className="related-desc">Electronic invoicing for Honduras. One REST API with XAdES-BES digital signature for the SAR.</div>
              <span className="related-link">Explore Mint →</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
