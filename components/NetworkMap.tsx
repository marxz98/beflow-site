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

const fibers = [
  { x1: 35, y1: 30, x2: 30, y2: 25 },
  { x1: 35, y1: 30, x2: 45, y2: 35 },
  { x1: 35, y1: 30, x2: 40, y2: 50 },
  { x1: 60, y1: 55, x2: 55, y2: 60 },
  { x1: 60, y1: 55, x2: 65, y2: 45 },
  { x1: 60, y1: 55, x2: 45, y2: 70 },
  { x1: 75, y1: 40, x2: 65, y2: 45 },
  { x1: 35, y1: 30, x2: 60, y2: 55 },
  { x1: 60, y1: 55, x2: 75, y2: 40 },
]

const labels = [
  { text: 'Tegucigalpa', top: 12, left: 50, size: 14, opacity: 0.12 },
  { text: 'Col. Kennedy', top: 22, left: 28, size: 10, opacity: 0.18 },
  { text: 'Col. Miraflores', top: 62, left: 63, size: 10, opacity: 0.18 },
  { text: 'Comayagüela', top: 75, left: 30, size: 11, opacity: 0.1 },
  { text: 'Col. Torocagua', top: 33, left: 78, size: 10, opacity: 0.18 },
  { text: 'Blvd. Morazán', top: 44, left: 52, size: 9, opacity: 0.1 },
  { text: 'Río Choluteca', top: 82, left: 55, size: 9, opacity: 0.08 },
]

export function NetworkMap() {
  return (
    <div className="nmap-container animate-on-scroll">
      {/* Dark map background with SVG street grid */}
      <div className="nmap-bg">
        <svg className="nmap-streets" viewBox="0 0 200 100" preserveAspectRatio="none">
          {/* Major roads */}
          <path d="M0,45 Q40,42 80,48 T160,44 200,46" className="nmap-road major" />
          <path d="M0,55 Q50,58 100,52 T200,56" className="nmap-road major" />
          <path d="M60,0 Q58,30 62,50 T58,100" className="nmap-road major" />
          <path d="M130,0 Q128,25 132,50 T128,100" className="nmap-road major" />
          {/* Boulevard diagonal */}
          <path d="M20,20 Q60,35 100,45 T180,70" className="nmap-road major" />
          <path d="M10,70 Q50,55 90,50 T190,30" className="nmap-road major" />
          {/* Secondary roads - horizontal */}
          <path d="M0,20 L200,22" className="nmap-road" />
          <path d="M0,32 L200,30" className="nmap-road" />
          <path d="M0,65 L200,67" className="nmap-road" />
          <path d="M0,78 L200,76" className="nmap-road" />
          <path d="M0,88 L200,90" className="nmap-road" />
          {/* Secondary roads - vertical */}
          <path d="M25,0 L27,100" className="nmap-road" />
          <path d="M45,0 L43,100" className="nmap-road" />
          <path d="M85,0 L87,100" className="nmap-road" />
          <path d="M105,0 L103,100" className="nmap-road" />
          <path d="M150,0 L148,100" className="nmap-road" />
          <path d="M175,0 L177,100" className="nmap-road" />
          {/* Tertiary / residential */}
          <path d="M10,10 Q30,12 50,10" className="nmap-road minor" />
          <path d="M70,15 Q90,18 110,15" className="nmap-road minor" />
          <path d="M140,12 Q160,15 180,12" className="nmap-road minor" />
          <path d="M15,38 Q35,40 55,37" className="nmap-road minor" />
          <path d="M65,35 Q85,38 105,36" className="nmap-road minor" />
          <path d="M115,40 Q135,42 155,39" className="nmap-road minor" />
          <path d="M160,38 Q175,40 195,37" className="nmap-road minor" />
          <path d="M5,58 Q25,60 45,57" className="nmap-road minor" />
          <path d="M55,62 Q75,64 95,60" className="nmap-road minor" />
          <path d="M110,58 Q130,61 150,58" className="nmap-road minor" />
          <path d="M155,63 Q175,65 195,62" className="nmap-road minor" />
          <path d="M20,72 Q40,74 60,72" className="nmap-road minor" />
          <path d="M70,74 Q90,76 110,73" className="nmap-road minor" />
          <path d="M120,72 Q140,75 160,72" className="nmap-road minor" />
          <path d="M30,84 Q50,86 70,84" className="nmap-road minor" />
          <path d="M80,86 Q100,88 120,85" className="nmap-road minor" />
          <path d="M135,84 Q155,87 175,84" className="nmap-road minor" />
          <path d="M10,93 Q30,95 50,93" className="nmap-road minor" />
          <path d="M60,95 Q80,97 100,94" className="nmap-road minor" />
          {/* Tertiary - vertical short */}
          <path d="M35,8 L36,25" className="nmap-road minor" />
          <path d="M55,15 L54,35" className="nmap-road minor" />
          <path d="M75,5 L76,22" className="nmap-road minor" />
          <path d="M95,10 L94,30" className="nmap-road minor" />
          <path d="M115,8 L116,28" className="nmap-road minor" />
          <path d="M140,15 L139,38" className="nmap-road minor" />
          <path d="M165,5 L166,25" className="nmap-road minor" />
          <path d="M35,50 L36,70" className="nmap-road minor" />
          <path d="M55,55 L54,75" className="nmap-road minor" />
          <path d="M75,48 L76,68" className="nmap-road minor" />
          <path d="M95,52 L94,72" className="nmap-road minor" />
          <path d="M115,50 L116,70" className="nmap-road minor" />
          <path d="M140,55 L139,78" className="nmap-road minor" />
          <path d="M165,48 L166,72" className="nmap-road minor" />
          {/* River */}
          <path d="M0,85 Q30,82 60,86 T120,83 160,87 200,84" className="nmap-river" />
        </svg>
      </div>

      {/* Place name labels */}
      <div className="nmap-layer nmap-labels-layer">
        {labels.map((l) => (
          <span
            key={l.text}
            className="nmap-label"
            style={{
              top: `${l.top}%`,
              left: `${l.left}%`,
              fontSize: l.size,
              opacity: l.opacity,
            }}
          >
            {l.text}
          </span>
        ))}
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
