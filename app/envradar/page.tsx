import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ScrollAnimator } from '@/components/ScrollAnimator'
import { IconCheck, IconSearch, IconShield, IconCode, IconEye, IconAlertTriangle, IconGitBranch, IconZap, IconLock } from '@/components/Icons'

export const metadata: Metadata = {
  title: 'EnvRadar — Protect your environment variables in VS Code',
  description: 'Detect missing variables, leaked secrets, and type errors in your .env files before they reach production. Fully offline. Completely free. Open source.',
}

const Arrow = () => (
  <svg className="btn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function EnvRadarPage() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge" style={{ borderColor: 'rgba(59,130,246,0.3)' }}>
            <span className="badge-dot" style={{ background: '#3B82F6' }} />
            Open Source &middot; VS Code Extension
          </div>
          <h1>
            Stop shipping<br />
            <span className="gradient-text" style={{ background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 50%, #3B82F6 100%)', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>broken environments.</span>
          </h1>
          <p className="hero-sub">
            EnvRadar detects missing variables, leaked secrets, and type errors in your .env files before they reach production. Fully offline. Completely free.
          </p>
          <div className="hero-ctas">
            <a href="#" className="btn btn-blue btn-accent-lg">
              Install from Marketplace <Arrow />
            </a>
            <a href="#" className="btn btn-outline" style={{ padding: '14px 32px', fontSize: '15.5px', borderRadius: 12 }}>
              View on GitHub
            </a>
          </div>

          <div className="hero-visual">
            <div className="envradar-hero-mockup">
              <div className="mockup-header">
                <div className="mockup-dot r" />
                <div className="mockup-dot y" />
                <div className="mockup-dot g" />
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginLeft: 12 }}>EnvRadar &mdash; .env</span>
              </div>
              <div className="envradar-mockup-body">
                <div className="er-panel-header">
                  <span className="er-panel-title">EnvRadar</span>
                  <span className="er-panel-count">3 issues found</span>
                </div>
                <div className="er-var-row ok">
                  <span className="er-status-dot ok" />
                  <span className="er-var-name">DATABASE_URL</span>
                  <span className="er-var-type">url</span>
                  <span className="er-var-value">postgresql://user:***@db.host:5432/app</span>
                </div>
                <div className="er-var-row ok">
                  <span className="er-status-dot ok" />
                  <span className="er-var-name">PORT</span>
                  <span className="er-var-type">number</span>
                  <span className="er-var-value">3000</span>
                </div>
                <div className="er-var-row warn">
                  <span className="er-status-dot warn" />
                  <span className="er-var-name">API_SECRET</span>
                  <span className="er-var-type">secret</span>
                  <span className="er-var-warning">Hardcoded secret detected</span>
                </div>
                <div className="er-var-row error">
                  <span className="er-status-dot error" />
                  <span className="er-var-name">REDIS_URL</span>
                  <span className="er-var-type">url</span>
                  <span className="er-var-warning">Missing in .env</span>
                </div>
                <div className="er-var-row error">
                  <span className="er-status-dot error" />
                  <span className="er-var-name">SMTP_HOST</span>
                  <span className="er-var-type">string</span>
                  <span className="er-var-warning">Defined but unused</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="er-problem-section">
        <div className="container">
          <div className="er-problem animate-on-scroll">
            <p className="er-problem-text">
              Every developer has been there. You deploy to production, the app crashes, and after 30 minutes of debugging you realize a single environment variable was missing. Or worse &mdash; an API key gets committed to a public repo.
            </p>
            <p className="er-problem-sub">The existing tools only do syntax highlighting. They don&apos;t actually protect you.</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="er-features-section" id="features">
        <div className="container">
          <div className="er-features-header animate-on-scroll" style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="section-eyebrow" style={{ color: '#3B82F6' }}><span className="eyebrow-icon" style={{ background: 'rgba(59,130,246,0.15)' }}><IconSearch /></span> Features</div>
            <h2 className="section-title">Everything you need. Nothing you don&apos;t.</h2>
          </div>
          <div className="er-features-grid">
            {[
              { icon: <IconCode />, title: 'Diff', desc: 'Compare .env.example against .env instantly. See missing, extra, and changed variables.', color: '#3B82F6' },
              { icon: <IconShield />, title: 'Secret Scanner', desc: 'Detects hardcoded API keys, tokens, passwords across your entire codebase.', color: '#EF4444' },
              { icon: <IconAlertTriangle />, title: 'Type Validation', desc: 'PORT should be a number. DATABASE_URL should be a URL. If it\'s wrong, you\'ll know.', color: '#F59E0B' },
              { icon: <IconSearch />, title: 'Unused Detection', desc: 'Finds env variables defined but never referenced in your code.', color: '#8B5CF6' },
              { icon: <IconZap />, title: 'Autocomplete', desc: 'Suggests variables for process.env, import.meta.env, os.environ across 15+ languages.', color: '#10B981' },
              { icon: <IconEye />, title: 'Hover Preview', desc: 'See variable values by hovering. Sensitive values automatically masked.', color: '#EC4899' },
              { icon: <IconGitBranch />, title: 'Gitignore Protection', desc: 'Warns if .env isn\'t in .gitignore. One-click fix.', color: '#F97316' },
            ].map((f) => (
              <div key={f.title} className="er-feature-card animate-on-scroll">
                <div className="er-feature-icon" style={{ color: f.color }}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="er-why-section">
        <div className="container">
          <div className="er-why-header animate-on-scroll" style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 className="section-title" style={{ color: 'white' }}>Why EnvRadar?</h2>
          </div>
          <div className="er-why-grid">
            {[
              { title: 'Offline', desc: 'No accounts, no cloud, no telemetry' },
              { title: 'One extension', desc: 'Replaces six separate tools' },
              { title: 'Universal', desc: 'Node.js, Python, Go, Rust, Ruby, PHP, Java, and more' },
              { title: '23 KB', desc: 'Loads instantly' },
              { title: 'MIT', desc: 'Free forever' },
            ].map((item) => (
              <div key={item.title} className="er-why-card animate-on-scroll">
                <div className="er-why-title">{item.title}</div>
                <div className="er-why-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card animate-on-scroll">
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', marginBottom: 16, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>Built by BeFlow</div>
            <h2>Developer tools that<br />solve real problems</h2>
            <p>EnvRadar is our first open source release. Install it, star it, contribute.</p>
            <div className="cta-btns">
              <a href="#" className="btn btn-blue btn-accent-lg">Install Extension <Arrow /></a>
              <a href="#" className="btn" style={{ color: 'rgba(255,255,255,0.6)', border: '1.5px solid rgba(255,255,255,0.15)', padding: '14px 32px', borderRadius: 12, fontSize: '15.5px' }}>Star on GitHub</a>
            </div>
          </div>
        </div>
      </section>

      <Footer product="EnvRadar" />
    </>
  )
}
