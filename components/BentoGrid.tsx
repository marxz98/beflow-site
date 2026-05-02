'use client'

import { useEffect, useRef, useState } from 'react'
import { BentoSkeletonGrid } from '@/components/Skeleton'

const IconDashboard = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1"/>
    <rect x="14" y="3" width="7" height="7" rx="1"/>
    <rect x="3" y="14" width="7" height="7" rx="1"/>
    <rect x="14" y="14" width="7" height="7" rx="1"/>
  </svg>
)

const IconDocument = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14,2 14,8 20,8"/>
    <line x1="8" y1="13" x2="16" y2="13"/>
    <line x1="8" y1="17" x2="12" y2="17"/>
  </svg>
)

const IconShield = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <path d="M9 12l2 2 4-4"/>
  </svg>
)

const IconSparkles = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"/>
  </svg>
)

const IconCable = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="4" cy="12" r="2"/>
    <circle cx="20" cy="6" r="2"/>
    <circle cx="20" cy="18" r="2"/>
    <path d="M6 12 Q13 6 18 7"/>
    <path d="M6 12 Q13 18 18 17"/>
  </svg>
)

const IconCode = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"/>
    <polyline points="8 6 2 12 8 18"/>
  </svg>
)

const STYLES = `
.bg-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 64px;
}

.bg-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px 28px 0 28px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease, border-color 0.4s, box-shadow 0.4s;
}
.bg-card.bg-visible {
  opacity: 1;
  transform: translateY(0);
}

.bg-net  { grid-column: 1 / 3; grid-row: 1 / 3; }
.bg-mint { grid-column: 3; grid-row: 1; }
.bg-enr  { grid-column: 3; grid-row: 2; }

.bg-card:hover         { border-color: rgba(255,49,49,0.15);   box-shadow: 0 0 40px rgba(255,49,49,0.05); }
.bg-mint:hover         { border-color: rgba(16,185,129,0.2);   box-shadow: 0 0 40px rgba(16,185,129,0.05); }
.bg-enr:hover          { border-color: rgba(59,130,246,0.2);   box-shadow: 0 0 40px rgba(59,130,246,0.05); }
.bg-intel:hover        { border-color: rgba(168,85,247,0.2);   box-shadow: 0 0 40px rgba(168,85,247,0.05); }
.bg-bridge:hover       { border-color: rgba(16,185,129,0.2);   box-shadow: 0 0 40px rgba(16,185,129,0.05); }
.bg-sdks:hover         { border-color: rgba(255,145,77,0.2);   box-shadow: 0 0 40px rgba(255,145,77,0.05); }

/* Header */
.bg-header { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
.bg-icon   { color: rgba(255,255,255,0.55); display: flex; flex-shrink: 0; }
.bg-title  { font-size: 18px; font-weight: 600; color: white; letter-spacing: -0.3px; }
.bg-desc   { font-size: 14px; color: rgba(255,255,255,0.42); line-height: 1.55; margin-bottom: 16px; }

.bg-link {
  font-size: 13px; font-weight: 600; color: var(--accent-1);
  display: inline-flex; align-items: center; gap: 6px;
  margin-bottom: 20px; transition: gap 0.2s;
}
.bg-link:hover { gap: 10px; }
.bg-link.green { color: var(--green); }
.bg-link.blue  { color: var(--blue); }

.bg-badge-row { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
.bg-inline-badge {
  font-size: 11px; font-weight: 600; padding: 2px 8px;
  border-radius: 4px; background: rgba(16,185,129,0.1); color: var(--green);
}

/* ─── BeFlow Net visual ─── */
.bg-net-stats {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 8px; margin-top: auto;
}
.bg-net-stat {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.04);
  border-radius: var(--radius-sm);
  padding: 14px 14px 14px 14px;
  margin-bottom: 28px;
}
.bg-ns-label { font-size: 11px; color: rgba(255,255,255,0.28); margin-bottom: 4px; font-weight: 500; }
.bg-ns-value { font-size: 20px; font-weight: 700; color: white; margin-bottom: 8px; letter-spacing: -0.5px; }
.bg-ns-track { height: 3px; border-radius: 2px; background: rgba(255,255,255,0.06); overflow: hidden; }
.bg-ns-fill  {
  height: 100%; border-radius: 2px;
  background: linear-gradient(90deg, var(--accent-1), var(--accent-2));
  width: 18%;
  transition: width 0.9s cubic-bezier(0.23, 1, 0.32, 1);
}
.bg-net:hover .bg-ns-fill { width: var(--tw, 80%); }

.bg-bullets { margin-bottom: 16px; display: flex; flex-direction: column; gap: 5px; }
.bg-bullet  { font-size: 13px; color: rgba(255,255,255,0.45); display: flex; align-items: center; gap: 8px; }
.bg-bullet-check { color: var(--green); font-weight: 700; font-size: 12px; }

/* ─── Mint visual ─── */
.mint-vis {
  background: rgba(0,0,0,0.35);
  border-radius: var(--radius-sm) var(--radius-sm) 0 0;
  padding: 14px; font-family: var(--mono); font-size: 11px;
  line-height: 1.7; margin-top: auto;
}
.mint-block {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: 6px; padding: 10px 12px;
}
.mint-block.response {
  background: rgba(16,185,129,0.05);
  border-color: rgba(16,185,129,0.12);
}
.mint-method { color: var(--green); font-weight: 700; }
.mint-path   { color: rgba(96,165,250,0.9); }
.mint-key    { color: rgba(255,170,107,0.9); }
.mint-val    { color: rgba(255,255,255,0.4); }
.mint-ok     { color: var(--green); font-weight: 600; }
.mint-sep {
  display: flex; align-items: center; justify-content: center;
  padding: 6px 0;
}
.mint-arrow-svg { display: block; transition: transform 0.3s; }
@keyframes mint-pulse {
  0%, 100% { opacity: 0.35; transform: translateY(0); }
  50%       { opacity: 1;    transform: translateY(3px); }
}
.bg-mint:hover .mint-arrow-svg { animation: mint-pulse 1s ease infinite; }

/* ─── EnvRadar visual ─── */
.enr-vis {
  background: rgba(0,0,0,0.35);
  border-radius: var(--radius-sm) var(--radius-sm) 0 0;
  padding: 12px 14px; font-family: var(--mono); font-size: 11px;
  margin-top: auto;
}
.enr-line {
  display: flex; align-items: center; gap: 8px; padding: 5px 0;
  border-bottom: 1px solid rgba(255,255,255,0.03);
  opacity: 0; transform: translateX(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.enr-line:last-child { border-bottom: none; }
.bg-enr:hover .enr-line:nth-child(1) { opacity: 1; transform: translateX(0); transition-delay: 0.00s; }
.bg-enr:hover .enr-line:nth-child(2) { opacity: 1; transform: translateX(0); transition-delay: 0.10s; }
.bg-enr:hover .enr-line:nth-child(3) { opacity: 1; transform: translateX(0); transition-delay: 0.20s; }
.bg-enr:hover .enr-line:nth-child(4) { opacity: 1; transform: translateX(0); transition-delay: 0.30s; }
.enr-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
.enr-ok   .enr-dot { background: #10B981; }
.enr-warn .enr-dot { background: #F59E0B; }
.enr-err  .enr-dot { background: #EF4444; }
.enr-name { color: rgba(96,165,250,0.85); font-weight: 600; min-width: 80px; }
.enr-val  { color: rgba(255,255,255,0.35); flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.enr-warn-txt { color: #FBBF24; font-size: 10px; font-weight: 600; }
.enr-err-txt  { color: #F87171; font-size: 10px; font-weight: 600; }

/* ─── Intelligence visual ─── */
.intel-vis {
  background: rgba(0,0,0,0.35);
  border-radius: var(--radius-sm) var(--radius-sm) 0 0;
  padding: 16px; margin-top: auto; display: flex; flex-direction: column; gap: 10px;
}
.intel-q { display: flex; justify-content: flex-end; }
.intel-q-bubble {
  background: rgba(255,255,255,0.06); border-radius: 12px 12px 3px 12px;
  padding: 8px 12px; font-size: 12px; color: rgba(255,255,255,0.65);
  max-width: 220px; line-height: 1.4;
}
.intel-a { display: flex; align-items: flex-start; gap: 8px; }
.intel-avatar {
  width: 22px; height: 22px; border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-1), var(--accent-2));
  flex-shrink: 0; display: flex; align-items: center; justify-content: center;
  font-size: 9px; color: white; font-weight: 700; margin-top: 1px;
}
.intel-a-bubble {
  background: rgba(168,85,247,0.08);
  border: 1px solid rgba(168,85,247,0.18);
  border-radius: 3px 12px 12px 12px;
  padding: 8px 12px; font-size: 12px; color: rgba(255,255,255,0.75);
  line-height: 1.4; overflow: hidden; white-space: nowrap;
  max-width: 0;
  transition: max-width 1.2s cubic-bezier(0.23, 1, 0.32, 1);
}
.bg-intel:hover .intel-a-bubble { max-width: 240px; }

/* ─── Bridge visual ─── */
.bridge-vis {
  display: flex; justify-content: center; align-items: center;
  margin-top: auto; padding-bottom: 0;
}
.bridge-svg { width: 100%; max-width: 280px; display: block; overflow: visible; }
.bridge-path {
  stroke-dasharray: 5 5;
  stroke-dashoffset: 0;
  transition: stroke 0.3s;
}
@keyframes bridge-dash-flow { to { stroke-dashoffset: -20; } }
.bg-bridge:hover .bridge-path { animation: bridge-dash-flow 0.7s linear infinite; }
.bridge-node { transition: fill 0.3s; }
.bg-bridge:hover .bridge-node { fill: #10B981; }
@keyframes bridge-node-pulse {
  0%, 100% { r: 6; opacity: 0.35; }
  50%       { r: 9; opacity: 0.12; }
}
.bridge-pulse { animation: bridge-node-pulse 2s ease-in-out infinite; }
.bridge-label { font-family: var(--mono); font-size: 9px; fill: rgba(255,255,255,0.35); }

/* ─── SDKs visual ─── */
.sdks-vis { margin-top: auto; padding-bottom: 28px; }
.sdks-badges { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 14px; }
.sdk-badge {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 8px; padding: 8px 14px;
  font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.5);
  transition: all 0.2s;
}
@keyframes sdk-bounce {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-5px); }
}
.bg-sdks:hover .sdk-badge:nth-child(1) { animation: sdk-bounce 0.45s ease 0.00s; color: #F7DF1E; border-color: rgba(247,223,30,0.25); }
.bg-sdks:hover .sdk-badge:nth-child(2) { animation: sdk-bounce 0.45s ease 0.10s; color: #3B82F6; border-color: rgba(59,130,246,0.25); }
.bg-sdks:hover .sdk-badge:nth-child(3) { animation: sdk-bounce 0.45s ease 0.20s; color: #8892BF; border-color: rgba(136,146,191,0.25); }
.bg-sdks:hover .sdk-badge:nth-child(4) { animation: sdk-bounce 0.45s ease 0.30s; color: #F89820; border-color: rgba(248,152,32,0.25); }
.bg-sdks:hover .sdk-badge:nth-child(5) { animation: sdk-bounce 0.45s ease 0.40s; color: #A855F7; border-color: rgba(168,85,247,0.25); }
.sdks-npm {
  font-family: var(--mono); font-size: 12px;
  background: rgba(0,0,0,0.35); border: 1px solid rgba(255,255,255,0.05);
  border-radius: 8px; padding: 10px 14px;
  color: rgba(255,255,255,0.35);
}
.sdks-npm .npm-cmd { color: var(--green); }
.sdks-npm .npm-pkg { color: rgba(96,165,250,0.8); }

/* ─── Tagline ─── */
.bg-tagline {
  text-align: center; margin-top: 56px;
  font-size: 20px; font-weight: 400; line-height: 1.5;
}
.bg-tagline strong { color: white; font-weight: 600; }
.bg-tagline span   { color: rgba(255,255,255,0.38); }

/* ─── Responsive ─── */
@media (max-width: 900px) {
  .bg-grid { grid-template-columns: 1fr 1fr; }
  .bg-net  { grid-column: 1 / -1; grid-row: auto; }
  .bg-mint { grid-column: auto; grid-row: auto; }
  .bg-enr  { grid-column: auto; grid-row: auto; }
}
@media (max-width: 600px) {
  .bg-grid { grid-template-columns: 1fr; }
  .bg-card { min-height: auto; }
}
`

const NET_STATS = [
  { label: 'Clientes activos', value: '1,847', pct: 92 },
  { label: 'Ingresos mes',     value: 'L 842K', pct: 78 },
  { label: 'Tasa de cobro',    value: '94.2%',  pct: 94 },
  { label: 'OLTs online',      value: '8 / 8',  pct: 100 },
]

export function BentoGrid() {
  const gridRef = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)

  // Skeleton → real content after 600 ms
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 600)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!ready) return
    const cards = gridRef.current?.querySelectorAll('.bg-card')
    if (!cards) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const delay = Number(el.dataset.delay ?? 0)
            setTimeout(() => el.classList.add('bg-visible'), delay)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.1 }
    )
    cards.forEach((c) => observer.observe(c))
    return () => observer.disconnect()
  }, [ready])

  return (
    <div ref={gridRef}>
      <style>{STYLES}</style>

      {!ready ? <BentoSkeletonGrid /> : (
      <>
      <div className="bg-grid">

        {/* ── 1. BeFlow Net ── */}
        <div className="bg-card bg-net" data-delay="0">
          <div className="bg-header">
            <span className="bg-icon"><IconDashboard /></span>
            <span className="bg-title">BeFlow Net</span>
          </div>
          <p className="bg-desc">
            La plataforma todo-en-uno para ISPs. Gestión de clientes, cobros, red de fibra, OLTs y más.
          </p>
          <div className="bg-bullets">
            {['Multi-tenant SaaS', 'Facturación SAR/CAI', 'Red visual GIS'].map((b) => (
              <div key={b} className="bg-bullet">
                <span className="bg-bullet-check">✓</span> {b}
              </div>
            ))}
          </div>
          <a href="/net" className="bg-link">
            Conocer BeFlow Net <span>→</span>
          </a>
          <div className="bg-net-stats">
            {NET_STATS.map((s) => (
              <div key={s.label} className="bg-net-stat">
                <div className="bg-ns-label">{s.label}</div>
                <div className="bg-ns-value">{s.value}</div>
                <div className="bg-ns-track">
                  <div className="bg-ns-fill" style={{ '--tw': `${s.pct}%` } as React.CSSProperties} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 2. Mint ── */}
        <div className="bg-card bg-mint" data-delay="80">
          <div className="bg-header">
            <span className="bg-icon"><IconDocument /></span>
            <span className="bg-title">Mint</span>
          </div>
          <div className="bg-badge-row">
            <p className="bg-desc" style={{ margin: 0 }}>
              Facturación electrónica para Honduras. API REST con firma digital XAdES-BES.
            </p>
          </div>
          <span className="bg-inline-badge" style={{ margin: '8px 0 16px' }}>36 endpoints</span>
          <a href="/mint" className="bg-link green">Explorar Mint <span>→</span></a>

          <div className="mint-vis">
            <div className="mint-block" style={{ marginBottom: 0 }}>
              <div><span className="mint-method">POST</span> <span className="mint-path">/invoices</span></div>
              <div style={{ color: 'rgba(255,255,255,0.22)', fontSize: 10, marginTop: 4 }}>
                <span className="mint-key">&quot;rtn&quot;</span><span style={{ color: 'rgba(255,255,255,0.2)' }}>: </span>
                <span className="mint-val">&quot;0801-1999-12345&quot;</span>
              </div>
            </div>
            <div className="mint-sep">
              <svg className="mint-arrow-svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1v12M3 9l4 4 4-4" stroke="rgba(16,185,129,0.6)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="mint-block response">
              <div><span className="mint-ok">201 signed</span></div>
              <div style={{ color: 'rgba(255,255,255,0.28)', fontSize: 10, marginTop: 4 }}>
                <span className="mint-key">&quot;pdf&quot;</span><span style={{ color: 'rgba(255,255,255,0.2)' }}>: </span>
                <span className="mint-val">&quot;INV-00142.pdf&quot;</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── 3. EnvRadar ── */}
        <div className="bg-card bg-enr" data-delay="160">
          <div className="bg-header">
            <span className="bg-icon"><IconShield /></span>
            <span className="bg-title">EnvRadar</span>
          </div>
          <p className="bg-desc">
            Protege tus .env en VS Code. Detecta secrets, variables faltantes y errores de tipo.
          </p>
          <a href="/envradar" className="bg-link blue">Install from Marketplace <span>→</span></a>

          <div className="enr-vis">
            <div className="enr-line enr-ok">
              <div className="enr-dot" />
              <span className="enr-name">DATABASE_URL</span>
              <span className="enr-val">postgresql://***@host/app</span>
            </div>
            <div className="enr-line enr-ok">
              <div className="enr-dot" />
              <span className="enr-name">PORT</span>
              <span className="enr-val">3000</span>
            </div>
            <div className="enr-line enr-warn">
              <div className="enr-dot" />
              <span className="enr-name">API_KEY</span>
              <span className="enr-warn-txt">Hardcoded secret</span>
            </div>
            <div className="enr-line enr-err">
              <div className="enr-dot" />
              <span className="enr-name">REDIS_URL</span>
              <span className="enr-err-txt">Missing in .env</span>
            </div>
          </div>
        </div>

        {/* ── 4. Intelligence ── */}
        <div className="bg-card bg-intel" data-delay="0">
          <div className="bg-header">
            <span className="bg-icon"><IconSparkles /></span>
            <span className="bg-title">Intelligence</span>
          </div>
          <p className="bg-desc">
            IA integrada que responde preguntas sobre tu operación ISP en español.
          </p>

          <div className="intel-vis">
            <div className="intel-q">
              <div className="intel-q-bubble">¿Cuántos clientes morosos?</div>
            </div>
            <div className="intel-a">
              <div className="intel-avatar">B</div>
              <div className="intel-a-bubble">127 clientes · L 89,400 pendientes</div>
            </div>
          </div>
        </div>

        {/* ── 5. Bridge ── */}
        <div className="bg-card bg-bridge" data-delay="80">
          <div className="bg-header">
            <span className="bg-icon"><IconCable /></span>
            <span className="bg-title">Bridge</span>
          </div>
          <p className="bg-desc">
            Conexión directa a OLTs Huawei, ZTE, V-Sol y routers MikroTik.
          </p>

          <div className="bridge-vis">
            <svg className="bridge-svg" viewBox="0 0 280 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Pulse halos */}
              <circle className="bridge-pulse" cx="44" cy="100" r="6" fill="rgba(16,185,129,0.2)" style={{ animationDelay: '0s' }} />
              <circle className="bridge-pulse" cx="140" cy="36" r="6" fill="rgba(16,185,129,0.2)" style={{ animationDelay: '0.6s' }} />
              <circle className="bridge-pulse" cx="236" cy="100" r="6" fill="rgba(16,185,129,0.2)" style={{ animationDelay: '1.2s' }} />

              {/* Dashed lines */}
              <path className="bridge-path" d="M50 98 L134 40" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"/>
              <path className="bridge-path" d="M146 40 L230 97" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" style={{ animationDelay: '-0.3s' }}/>
              <path className="bridge-path" d="M50 103 L230 103" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" style={{ animationDelay: '-0.6s' }}/>

              {/* Nodes */}
              <circle className="bridge-node" cx="44" cy="100" r="6" fill="rgba(255,255,255,0.15)"/>
              <circle className="bridge-node" cx="140" cy="36" r="6" fill="rgba(255,255,255,0.15)"/>
              <circle className="bridge-node" cx="236" cy="100" r="6" fill="rgba(255,255,255,0.15)"/>

              {/* Labels */}
              <text className="bridge-label" x="16" y="122">OLT-01</text>
              <text className="bridge-label" x="108" y="26">MikroTik</text>
              <text className="bridge-label" x="204" y="122">BeFlow Net</text>
            </svg>
          </div>
        </div>

        {/* ── 6. SDKs & APIs ── */}
        <div className="bg-card bg-sdks" data-delay="160">
          <div className="bg-header">
            <span className="bg-icon"><IconCode /></span>
            <span className="bg-title">SDKs & APIs</span>
          </div>
          <p className="bg-desc">
            Node.js, Python, PHP, Java, C#. Integra Mint en tu stack en minutos.
          </p>

          <div className="sdks-vis">
            <div className="sdks-badges">
              <div className="sdk-badge">JS</div>
              <div className="sdk-badge">PY</div>
              <div className="sdk-badge">PHP</div>
              <div className="sdk-badge">JV</div>
              <div className="sdk-badge">C#</div>
            </div>
            <div className="sdks-npm">
              <span className="npm-cmd">npm</span> install{' '}
              <span className="npm-pkg">@beflow/mint</span>
            </div>
          </div>
        </div>

      </div>

      {/* ── Tagline ── */}
      <div className="bg-tagline">
        <strong>Usá uno o todos.</strong>{' '}
        <span>Productos especializados. Integrados como plataforma.</span>
      </div>
      </>
      )}
    </div>
  )
}
