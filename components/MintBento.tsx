'use client'

import { FeatureBento, type BentoCard } from '@/components/FeatureBento'

const STYLES = `
/* ── SAR Checklist ── */
.mint-checklist { display: flex; flex-direction: column; gap: 8px; padding-bottom: 28px; margin-top: auto; }
.mint-check-row {
  display: flex; align-items: center; gap: 10px; padding: 10px 12px;
  border-radius: 8px; background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.05);
  font-size: 13px; color: rgba(255,255,255,0.6);
  opacity: 0; transform: translateX(-8px);
  transition: opacity 0.3s, transform 0.3s;
}
.fb-card:hover .mint-check-row:nth-child(1) { opacity: 1; transform: translateX(0); transition-delay: 0.0s; }
.fb-card:hover .mint-check-row:nth-child(2) { opacity: 1; transform: translateX(0); transition-delay: 0.12s; }
.fb-card:hover .mint-check-row:nth-child(3) { opacity: 1; transform: translateX(0); transition-delay: 0.24s; }
.mint-check-icon { width: 18px; height: 18px; border-radius: 50%; background: rgba(16,185,129,0.15); border: 1px solid rgba(16,185,129,0.3); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.mint-check-tick { color: #10B981; font-size: 11px; font-weight: 700; }

/* ── Firma flow ── */
.mint-flow { display: flex; align-items: center; justify-content: space-between; gap: 6px; padding: 16px; background: rgba(0,0,0,0.3); border-radius: 10px 10px 0 0; margin-top: auto; font-family: var(--mono); font-size: 11px; }
.mint-flow-block { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); border-radius: 6px; padding: 8px 10px; text-align: center; flex: 1; }
.mint-flow-label { color: rgba(255,255,255,0.3); font-size: 9px; margin-bottom: 3px; }
.mint-flow-val { color: rgba(255,255,255,0.65); font-weight: 600; }
.mint-flow-arrow {
  color: #10B981; font-size: 14px; opacity: 0.5;
  transition: opacity 0.3s, transform 0.3s;
}
.fb-card:hover .mint-flow-arrow { opacity: 1; transform: scale(1.2); }

/* ── PDF preview ── */
.mint-pdf { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; overflow: hidden; margin-top: auto; padding: 12px; font-family: var(--mono); font-size: 10px; }
.mint-pdf-head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px; padding-bottom: 8px; border-bottom: 1px solid rgba(255,255,255,0.04); }
.mint-pdf-brand { font-size: 13px; font-weight: 700; color: rgba(255,255,255,0.7); }
.mint-pdf-meta { text-align: right; color: rgba(255,255,255,0.25); line-height: 1.5; }
.mint-pdf-line { display: flex; justify-content: space-between; padding: 3px 0; color: rgba(255,255,255,0.35); }
.mint-pdf-line.total { color: white; font-weight: 700; border-top: 1px solid rgba(255,255,255,0.06); margin-top: 4px; padding-top: 6px; }
.mint-pdf-cai { color: rgba(255,255,255,0.18); font-size: 9px; margin-top: 8px; }

/* ── CAI bar ── */
.mint-cai { padding: 16px; background: rgba(0,0,0,0.3); border-radius: 10px 10px 0 0; margin-top: auto; }
.mint-cai-label { font-size: 11px; color: rgba(255,255,255,0.3); margin-bottom: 6px; font-family: var(--mono); }
.mint-cai-count { font-size: 22px; font-weight: 700; color: white; letter-spacing: -0.5px; margin-bottom: 10px; }
.mint-cai-track { height: 5px; border-radius: 3px; background: rgba(255,255,255,0.06); overflow: hidden; }
.mint-cai-fill {
  height: 100%; border-radius: 3px;
  background: linear-gradient(90deg, #10B981, #F59E0B);
  width: 20%;
  transition: width 0.9s cubic-bezier(0.23,1,0.32,1);
}
.fb-card:hover .mint-cai-fill { width: 74%; }
.mint-cai-sub { font-size: 11px; color: #F59E0B; margin-top: 6px; font-family: var(--mono); }

/* ── Offline mode ── */
.mint-offline { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; padding: 20px 0 28px; margin-top: auto; }
.mint-offline-icon { width: 40px; height: 40px; border-radius: 50%; background: rgba(16,185,129,0.08); border: 1px solid rgba(16,185,129,0.2); display: flex; align-items: center; justify-content: center; }
.mint-offline-text { font-family: var(--mono); font-size: 12px; color: rgba(255,255,255,0.55); text-align: center; line-height: 1.5; }
.mint-offline-dot { display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: #10B981; margin-right: 5px; animation: pulse-dot 2s infinite; }

/* ── Reportes ISV table ── */
.mint-report { width: 100%; font-family: var(--mono); font-size: 11px; padding-bottom: 28px; margin-top: auto; }
.mint-report-head { display: grid; grid-template-columns: 60px 1fr 1fr; gap: 8px; padding: 5px 8px; color: rgba(255,255,255,0.2); font-size: 9px; text-transform: uppercase; border-bottom: 1px solid rgba(255,255,255,0.05); }
.mint-report-row { display: grid; grid-template-columns: 60px 1fr 1fr; gap: 8px; padding: 6px 8px; border-bottom: 1px solid rgba(255,255,255,0.03); color: rgba(255,255,255,0.5); transition: color 0.2s; }
.fb-card:hover .mint-report-row { color: rgba(255,255,255,0.65); }
.mint-report-row:last-child { border-bottom: none; }
.mint-isv { color: #10B981; }
`

const SAR_VISUAL = (
  <>
    <style>{STYLES}</style>
    <div className="mint-checklist">
      {[
        'RTN válido · módulo 11',
        'CAI vigente · rango activo',
        'ISV 15% calculado',
      ].map((t) => (
        <div key={t} className="mint-check-row">
          <div className="mint-check-icon">
            <span className="mint-check-tick">✓</span>
          </div>
          {t}
        </div>
      ))}
    </div>
  </>
)

const FIRMA_VISUAL = (
  <div className="mint-flow">
    <div className="mint-flow-block">
      <div className="mint-flow-label">Input</div>
      <div className="mint-flow-val">JSON</div>
    </div>
    <span className="mint-flow-arrow">→</span>
    <div className="mint-flow-block">
      <div className="mint-flow-label">Firma</div>
      <div className="mint-flow-val" style={{ color: '#10B981' }}>XAdES</div>
    </div>
    <span className="mint-flow-arrow">→</span>
    <div className="mint-flow-block">
      <div className="mint-flow-label">Output</div>
      <div className="mint-flow-val">XML + PDF</div>
    </div>
  </div>
)

const PDF_VISUAL = (
  <div className="mint-pdf">
    <div className="mint-pdf-head">
      <div className="mint-pdf-brand">Mi Empresa S.A.</div>
      <div className="mint-pdf-meta">
        <div>FAC-00142</div>
        <div>02/05/2026</div>
      </div>
    </div>
    <div className="mint-pdf-line"><span>Servicio internet</span><span>L 499.00</span></div>
    <div className="mint-pdf-line"><span>ISV 15%</span><span>L 74.85</span></div>
    <div className="mint-pdf-line total"><span>Total</span><span>L 573.85</span></div>
    <div className="mint-pdf-cai">CAI: 4A3B2C-1D5E6F-7G8H9I-...</div>
  </div>
)

const CAI_VISUAL = (
  <div className="mint-cai">
    <div className="mint-cai-label">Rango activo · CAI-2026-05</div>
    <div className="mint-cai-count">742 / 1,000</div>
    <div className="mint-cai-track">
      <div className="mint-cai-fill" />
    </div>
    <div className="mint-cai-sub">⚠ 258 facturas restantes</div>
  </div>
)

const OFFLINE_VISUAL = (
  <div className="mint-offline">
    <div className="mint-offline-icon">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(16,185,129,0.8)" strokeWidth="1.5" strokeLinecap="round">
        <line x1="1" y1="1" x2="23" y2="23"/>
        <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/>
        <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/>
        <path d="M10.71 5.05A16 16 0 0 1 22.56 9"/>
        <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/>
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
        <circle cx="12" cy="20" r="1"/>
      </svg>
    </div>
    <div className="mint-offline-text">
      <span className="mint-offline-dot" />
      Offline mode: active
    </div>
  </div>
)

const REPORT_VISUAL = (
  <div className="mint-report">
    <div className="mint-report-head">
      <span>Mes</span><span>Gravado</span><span>ISV</span>
    </div>
    {[
      { mes: 'Mar', gravado: 'L 732K', isv: 'L 109K' },
      { mes: 'Abr', gravado: 'L 801K', isv: 'L 120K' },
      { mes: 'May', gravado: 'L 842K', isv: 'L 126K' },
    ].map((r) => (
      <div key={r.mes} className="mint-report-row">
        <span>{r.mes}</span>
        <span>{r.gravado}</span>
        <span className="mint-isv">{r.isv}</span>
      </div>
    ))}
  </div>
)

const MINT_CARDS: BentoCard[] = [
  {
    id: 'sar',
    title: 'Validación Fiscal SAR',
    desc: 'RTN módulo 11, CAI, ISV 15%/18%, exentos. Validación automática antes de emitir.',
    visual: SAR_VISUAL,
    gridArea: '1 / 1 / 3 / 2',
    className: 'accent-green',
  },
  {
    id: 'firma',
    title: 'Firma Digital XAdES-BES',
    desc: 'Certificado .p12. XML firmado listo para el SAR en milisegundos.',
    visual: FIRMA_VISUAL,
    className: 'accent-green',
  },
  {
    id: 'pdf',
    title: 'PDF Profesional',
    desc: 'Descargable con CAI, correlativo y desglose ISV. Email automático al receptor.',
    visual: PDF_VISUAL,
  },
  {
    id: 'cai',
    title: 'Gestión de CAI',
    desc: 'Alertas de vencimiento, agotamiento y rotación automática entre rangos.',
    visual: CAI_VISUAL,
    className: 'accent-amber',
  },
  {
    id: 'offline',
    title: 'Modo Contingencia',
    desc: 'Sigue facturando offline. Único en Honduras.',
    visual: OFFLINE_VISUAL,
    className: 'accent-green',
  },
  {
    id: 'report',
    title: 'Reportes ISV',
    desc: 'Exportables en Excel. Listo para declaración mensual ante el SAR.',
    visual: REPORT_VISUAL,
  },
]

export function MintBento() {
  return (
    <FeatureBento
      title="Una API. Toda la complejidad fiscal resuelta."
      subtitle="36 endpoints para facturación electrónica en Honduras."
      cards={MINT_CARDS}
      delay={300}
    />
  )
}
