import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollAnimator } from '@/components/ScrollAnimator'

export const metadata: Metadata = {
  title: 'EnvRadar - Protect your environment variables in VS Code',
  description: 'Detect missing variables, leaked secrets, and type errors in your .env files. Fully offline. Completely free. Open source.',
}

export default function EnvRadarPage() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />
      <section className="hero">
        <div className="hero-glow" style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, rgba(59,130,246,0.03) 30%, transparent 70%)' }} />
        <div className="container">
          <div className="hero-badge hero-anim hero-anim-1" style={{ borderColor: 'rgba(59,130,246,0.15)' }}>
            <span className="dot" style={{ background: '#3B82F6' }} />
            Open Source &middot; VS Code Extension
          </div>
          <h1 className="hero-anim hero-anim-2">
            Stop shipping<br />
            <span style={{ background: 'linear-gradient(135deg, #3B82F6, #60A5FA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>broken environments.</span>
          </h1>
          <p className="hero-sub hero-anim hero-anim-3">
            EnvRadar detects missing variables, leaked secrets, and type errors in your .env files before they reach production. Fully offline. Completely free.
          </p>
          <div className="hero-ctas hero-anim hero-anim-4">
            <a href="#" className="btn btn-lg" style={{ background: 'linear-gradient(135deg, #3B82F6, #60A5FA)', color: 'white' }}>Install from Marketplace</a>
            <a href="/" className="btn btn-outline btn-lg">View on GitHub</a>
          </div>
        </div>
      </section>
      <div style={{ textAlign: 'center', padding: '80px 24px', color: 'var(--text-tertiary)', fontSize: 15 }}>
        Full EnvRadar page coming soon. <a href="/" style={{ color: '#3B82F6' }}>Back to BeFlow</a>
      </div>
      <Footer />
    </>
  )
}
