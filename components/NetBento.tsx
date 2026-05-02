'use client'

import { FeatureBento, type BentoCard } from '@/components/FeatureBento'

// ─── Reusable visual base styles ───────────────────────────────────────────
const STYLES = `
/* ── Clientes table ── */
.net-table { width: 100%; font-family: var(--mono); font-size: 11px; margin-top: auto; padding-bottom: 28px; }
.net-th { display: grid; grid-template-columns: 1fr 90px 60px; gap: 8px; padding: 6px 10px; color: rgba(255,255,255,0.2); font-size: 10px; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid rgba(255,255,255,0.05); }
.net-tr {
  display: grid; grid-template-columns: 1fr 90px 60px; gap: 8px;
  padding: 7px 10px; border-bottom: 1px solid rgba(255,255,255,0.03);
  transition: background 0.2s;
}
.net-tr:last-child { border-bottom: none; }
.fb-card:hover .net-tr { background: rgba(255,255,255,0.02); }
.fb-card:hover .net-tr:hover { background: rgba(255,255,255,0.04); }
.net-name { color: rgba(255,255,255,0.7); }
.net-plan { color: rgba(255,255,255,0.35); }
.net-status-ok  { color: #10B981; font-weight: 600; }
.net-status-sus { color: #F59E0B; font-weight: 600; }

/* ── Cobros visual ── */
.net-cobros { padding: 20px; background: rgba(0,0,0,0.3); border-radius: 12px 12px 0 0; margin-top: auto; }
.net-cobros-amount { font-size: 28px; font-weight: 700; color: white; letter-spacing: -1px; margin-bottom: 4px; }
.net-cobros-sub { font-size: 11px; color: rgba(255,255,255,0.3); margin-bottom: 16px; font-family: var(--mono); }
.net-cobros-bar-wrap { display: flex; align-items: center; gap: 10px; }
.net-cobros-track { flex: 1; height: 5px; border-radius: 3px; background: rgba(255,255,255,0.06); overflow: hidden; }
.net-cobros-fill {
  height: 100%; border-radius: 3px;
  background: linear-gradient(90deg, var(--accent-1), var(--accent-2));
  width: 20%;
  transition: width 0.9s cubic-bezier(0.23,1,0.32,1);
}
.fb-card:hover .net-cobros-fill { width: 94%; }
.net-cobros-pct { font-size: 12px; font-weight: 700; color: rgba(255,255,255,0.6); font-family: var(--mono); white-space: nowrap; }

/* ── GIS map ── */
.net-gis { display: flex; justify-content: center; padding: 8px 0 0; }
.net-gis-svg { width: 100%; }
.net-gis-dot { transition: fill 0.3s; }
.fb-card:hover .net-gis-dot { fill: #10B981; }
@keyframes gis-pulse {
  0%, 100% { r: 5; opacity: 0.25; }
  50%       { r: 8; opacity: 0.08; }
}
.net-gis-halo { animation: gis-pulse 2s ease-in-out infinite; }
@keyframes gis-dash { to { stroke-dashoffset: -16; } }
.net-gis-path { stroke-dasharray: 4 4; }
.fb-card:hover .net-gis-path { animation: gis-dash 0.8s linear infinite; }
.net-gis-label { font-family: var(--mono); font-size: 8px; fill: rgba(255,255,255,0.3); }

/* ── Órdenes kanban ── */
.net-kanban { display: flex; gap: 6px; padding-bottom: 28px; margin-top: auto; }
.net-kcard {
  flex: 1; border-radius: 8px; padding: 10px 8px;
  border: 1px solid rgba(255,255,255,0.05);
  background: rgba(255,255,255,0.03);
  font-size: 10px; font-family: var(--mono);
  display: flex; flex-direction: column; gap: 6px;
  transition: transform 0.3s;
}
.fb-card:hover .net-kcard:nth-child(1) { transform: translateY(-2px); }
.fb-card:hover .net-kcard:nth-child(2) { transform: translateY(-4px); }
.fb-card:hover .net-kcard:nth-child(3) { transform: translateY(-3px); }
.net-kdot { width: 6px; height: 6px; border-radius: 50%; }
.net-kdot-amber  { background: #F59E0B; }
.net-kdot-blue   { background: #3B82F6; }
.net-kdot-green  { background: #10B981; }
.net-klabel { color: rgba(255,255,255,0.25); font-size: 9px; text-transform: uppercase; letter-spacing: 0.5px; }
.net-kcount { color: rgba(255,255,255,0.55); font-weight: 700; font-size: 18px; }

/* ── Intelligence mini chat ── */
.net-chat { display: flex; flex-direction: column; gap: 10px; padding: 14px 0 28px; margin-top: auto; }
.net-chat-q { display: flex; justify-content: flex-end; }
.net-chat-q-bubble {
  background: rgba(255,255,255,0.06); border-radius: 10px 10px 2px 10px;
  padding: 8px 12px; font-size: 12px; color: rgba(255,255,255,0.6); max-width: 200px;
}
.net-chat-a { display: flex; gap: 8px; align-items: flex-start; }
.net-chat-av {
  width: 20px; height: 20px; border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-1), var(--accent-2));
  flex-shrink: 0; display: flex; align-items: center; justify-content: center;
  font-size: 8px; color: white; font-weight: 700;
}
.net-chat-a-bubble {
  background: rgba(168,85,247,0.08); border: 1px solid rgba(168,85,247,0.15);
  border-radius: 2px 10px 10px 10px; padding: 8px 12px;
  font-size: 12px; color: rgba(255,255,255,0.7); line-height: 1.4;
  overflow: hidden; white-space: nowrap; max-width: 0;
  transition: max-width 1.2s cubic-bezier(0.23,1,0.32,1);
}
.fb-card:hover .net-chat-a-bubble { max-width: 220px; }

/* ── Reportes bar chart ── */
.net-bars { display: flex; align-items: flex-end; gap: 6px; height: 80px; padding-bottom: 28px; margin-top: auto; }
.net-bar-col { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 4px; height: 100%; justify-content: flex-end; }
.net-bar {
  width: 100%; border-radius: 4px 4px 0 0;
  background: linear-gradient(180deg, var(--accent-1), var(--accent-2));
  opacity: 0.4; transition: height 0.8s cubic-bezier(0.23,1,0.32,1), opacity 0.3s;
}
.fb-card:hover .net-bar { opacity: 0.9; }
.net-bar-lbl { font-size: 9px; color: rgba(255,255,255,0.25); font-family: var(--mono); }
`

const MONTHS = ['Ene', 'Feb', 'Mar', 'Abr', 'May']
const BAR_HEIGHTS = [40, 55, 48, 72, 64]

const CLIENTS_TABLE = (
  <>
    <style>{STYLES}</style>
    <div className="net-table">
      <div className="net-th">
        <span>Cliente</span><span>Plan</span><span>Estado</span>
      </div>
      {[
        { name: 'Ana García',    plan: '60 Mbps', status: 'Activo',    cls: 'net-status-ok' },
        { name: 'Rent. Miraflores', plan: '30 Mbps', status: 'Activo', cls: 'net-status-ok' },
        { name: 'Carlos Mejía', plan: '100 Mbps', status: 'Suspendido', cls: 'net-status-sus' },
      ].map((r) => (
        <div key={r.name} className="net-tr">
          <span className="net-name">{r.name}</span>
          <span className="net-plan">{r.plan}</span>
          <span className={r.cls}>{r.status}</span>
        </div>
      ))}
    </div>
  </>
)

const COBROS_VISUAL = (
  <div className="net-cobros">
    <div className="net-cobros-amount">L 842,000</div>
    <div className="net-cobros-sub">Cobros del mes · Mayo 2026</div>
    <div className="net-cobros-bar-wrap">
      <div className="net-cobros-track">
        <div className="net-cobros-fill" />
      </div>
      <span className="net-cobros-pct">94.2%</span>
    </div>
  </div>
)

const GIS_VISUAL = (
  <div className="net-gis">
    <svg className="net-gis-svg" viewBox="0 0 240 120" fill="none">
      <circle className="net-gis-halo" cx="40" cy="80" r="5" fill="rgba(16,185,129,0.2)" style={{ animationDelay: '0s' }} />
      <circle className="net-gis-halo" cx="120" cy="30" r="5" fill="rgba(16,185,129,0.2)" style={{ animationDelay: '0.5s' }} />
      <circle className="net-gis-halo" cx="200" cy="75" r="5" fill="rgba(16,185,129,0.2)" style={{ animationDelay: '1s' }} />
      <path className="net-gis-path" d="M46 77 L114 33" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
      <path className="net-gis-path" d="M126 33 L194 73" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" style={{ animationDelay: '-0.4s' }} />
      <path className="net-gis-path" d="M46 82 L194 79" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" style={{ animationDelay: '-0.8s' }} />
      <circle className="net-gis-dot" cx="40" cy="80" r="5" fill="rgba(255,255,255,0.15)" />
      <circle className="net-gis-dot" cx="120" cy="30" r="5" fill="rgba(255,255,255,0.15)" />
      <circle className="net-gis-dot" cx="200" cy="75" r="5" fill="rgba(255,255,255,0.15)" />
      <text className="net-gis-label" x="18" y="98">OLT-01</text>
      <text className="net-gis-label" x="94" y="22">OLT-02</text>
      <text className="net-gis-label" x="176" y="94">NAP-07</text>
    </svg>
  </div>
)

const KANBAN_VISUAL = (
  <div className="net-kanban">
    {[
      { label: 'Pendiente', dot: 'net-kdot-amber', count: 12 },
      { label: 'En proceso', dot: 'net-kdot-blue', count: 4 },
      { label: 'Listo', dot: 'net-kdot-green', count: 38 },
    ].map((k) => (
      <div key={k.label} className="net-kcard">
        <div className={`net-kdot ${k.dot}`} />
        <div className="net-klabel">{k.label}</div>
        <div className="net-kcount">{k.count}</div>
      </div>
    ))}
  </div>
)

const INTEL_VISUAL = (
  <div className="net-chat">
    <div className="net-chat-q">
      <div className="net-chat-q-bubble">¿Cuántos morosos hoy?</div>
    </div>
    <div className="net-chat-a">
      <div className="net-chat-av">B</div>
      <div className="net-chat-a-bubble">127 · L 89,400 pendientes</div>
    </div>
  </div>
)

const REPORTS_VISUAL = (
  <div className="net-bars">
    {MONTHS.map((m, i) => (
      <div key={m} className="net-bar-col">
        <div className="net-bar" style={{ height: BAR_HEIGHTS[i] }} />
        <span className="net-bar-lbl">{m}</span>
      </div>
    ))}
  </div>
)

const NET_CARDS: BentoCard[] = [
  {
    id: 'clientes',
    title: 'Gestión de Clientes',
    desc: 'Base de datos con importación Excel, datos por departamento y municipio de Honduras.',
    visual: CLIENTS_TABLE,
    gridArea: '1 / 1 / 3 / 2',
    className: 'accent-green',
  },
  {
    id: 'cobros',
    title: 'Cobros y Pagos',
    desc: 'Cobros mensuales automáticos, registro de pagos y facturación SAR/CAI.',
    visual: COBROS_VISUAL,
  },
  {
    id: 'gis',
    title: 'Red Visual GIS',
    desc: 'Mapa interactivo con OLTs, NAPs, ONTs y tramos de fibra en tiempo real.',
    visual: GIS_VISUAL,
    className: 'accent-green',
  },
  {
    id: 'ordenes',
    title: 'Órdenes de Trabajo',
    desc: 'Asignación a técnicos, seguimiento de instalaciones y vista móvil.',
    visual: KANBAN_VISUAL,
    className: 'accent-amber',
  },
  {
    id: 'intel',
    title: 'Intelligence IA',
    desc: 'Chat en español que responde sobre tu operación usando datos reales.',
    visual: INTEL_VISUAL,
    className: 'accent-purple',
  },
  {
    id: 'reportes',
    title: 'Reportes',
    desc: 'Ingresos, morosidad, crecimiento y red. Exportables a Excel.',
    visual: REPORTS_VISUAL,
  },
]

export function NetBento() {
  return (
    <FeatureBento
      title="Todo lo que tu ISP necesita"
      subtitle="Módulos integrados que cubren cada aspecto de tu operación."
      cards={NET_CARDS}
      delay={300}
    />
  )
}
