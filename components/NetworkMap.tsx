'use client'

const olts = [
  { id: 'OLT-01', label: 'Huawei MA5608T', info: '128 ONTs · Col. Kennedy', top: 30, left: 35, color: 'green' as const, showTooltip: true },
  { id: 'OLT-02', label: 'ZTE C320', info: '64 ONTs · Col. Miraflores', top: 55, left: 60, color: 'green' as const, showTooltip: true },
  { id: 'OLT-03', label: 'V-Sol', info: '32 ONTs · Col. Torocagua', top: 40, left: 75, color: 'orange' as const, showTooltip: true },
]

const naps = [
  { id: 'NAP-01', info: '16 puertos · 14 activos', top: 25, left: 30, color: 'green' as const },
  { id: 'NAP-05', info: '8 puertos · 8 activos', top: 35, left: 45, color: 'green' as const },
  { id: 'NAP-12', info: '16 puertos · 12 activos', top: 50, left: 40, color: 'green' as const },
  { id: 'NAP-19', info: '8 puertos · 7 activos', top: 60, left: 55, color: 'orange' as const },
  { id: 'NAP-23', info: '16 puertos · 15 activos', top: 45, left: 65, color: 'green' as const },
  { id: 'NAP-08', info: '8 puertos · 6 activos', top: 70, left: 45, color: 'green' as const },
]

// Client dots distributed around NAPs
const clients = [
  { top: 22, left: 28 }, { top: 27, left: 32 }, { top: 24, left: 34 }, { top: 29, left: 27 },
  { top: 33, left: 43 }, { top: 37, left: 47 }, { top: 34, left: 49 }, { top: 38, left: 42 },
  { top: 48, left: 38 }, { top: 52, left: 42 }, { top: 49, left: 44 }, { top: 53, left: 37 }, { top: 46, left: 41 },
  { top: 58, left: 53 }, { top: 62, left: 57 }, { top: 59, left: 59 }, { top: 63, left: 52 }, { top: 57, left: 56 },
  { top: 43, left: 63 }, { top: 47, left: 67 }, { top: 44, left: 69 }, { top: 48, left: 62 },
  { top: 68, left: 43 }, { top: 72, left: 47 }, { top: 69, left: 49 }, { top: 73, left: 42 },
  { top: 31, left: 37 }, { top: 26, left: 29 }, { top: 36, left: 41 }, { top: 51, left: 36 },
  { top: 61, left: 54 }, { top: 44, left: 66 }, { top: 71, left: 44 }, { top: 55, left: 58 },
  { top: 42, left: 72 }, { top: 38, left: 76 }, { top: 65, left: 48 }, { top: 32, left: 46 },
]

// Fiber lines from OLTs to NAPs
const fibers = [
  // OLT-01 (35,30) → NAPs
  { x1: 35, y1: 30, x2: 30, y2: 25 },
  { x1: 35, y1: 30, x2: 45, y2: 35 },
  { x1: 35, y1: 30, x2: 40, y2: 50 },
  // OLT-02 (60,55) → NAPs
  { x1: 60, y1: 55, x2: 55, y2: 60 },
  { x1: 60, y1: 55, x2: 65, y2: 45 },
  { x1: 60, y1: 55, x2: 45, y2: 70 },
  // OLT-03 (75,40) → NAPs
  { x1: 75, y1: 40, x2: 65, y2: 45 },
  // OLT interconnect
  { x1: 35, y1: 30, x2: 60, y2: 55 },
  { x1: 60, y1: 55, x2: 75, y2: 40 },
]

export function NetworkMap() {
  return (
    <div className="nmap-container animate-on-scroll">
      {/* Map background via OpenStreetMap iframe with dark filter */}
      <div className="nmap-bg">
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=-87.23%2C14.04%2C-87.15%2C14.11&layer=mapnik"
          title="Mapa de Tegucigalpa"
          loading="lazy"
        />
      </div>

      {/* Fiber lines layer */}
      <svg className="nmap-fibers" viewBox="0 0 100 100" preserveAspectRatio="none">
        {fibers.map((f, i) => (
          <line
            key={i}
            x1={f.x1} y1={f.y1} x2={f.x2} y2={f.y2}
            className={`nmap-fiber ${i >= 7 ? 'nmap-fiber-trunk' : ''}`}
          />
        ))}
      </svg>

      {/* Client dots layer */}
      <div className="nmap-layer nmap-clients-layer">
        {clients.map((c, i) => (
          <div key={i} className="nmap-client" style={{ top: `${c.top}%`, left: `${c.left}%` }} />
        ))}
      </div>

      {/* NAP markers layer */}
      <div className="nmap-layer nmap-naps-layer">
        {naps.map((nap) => (
          <div key={nap.id} className="nmap-nap" style={{ top: `${nap.top}%`, left: `${nap.left}%` }}>
            <div className={`nmap-dot-nap ${nap.color}`} />
            <div className="nmap-nap-tooltip">{nap.id} · {nap.info}</div>
          </div>
        ))}
      </div>

      {/* OLT markers layer */}
      <div className="nmap-layer nmap-olts-layer">
        {olts.map((olt) => (
          <div key={olt.id} className="nmap-olt" style={{ top: `${olt.top}%`, left: `${olt.left}%` }}>
            <div className="nmap-olt-ping" />
            <div className={`nmap-dot-olt ${olt.color}`} />
            {olt.showTooltip && (
              <div className="nmap-olt-tooltip">
                <div className="nmap-tt-id">{olt.id} {olt.label}</div>
                <div className="nmap-tt-info">{olt.info}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
