'use client'

const olts = [
  { id: 'OLT-01', label: 'Huawei MA5608T', info: '128 ONTs · Col. Kennedy', top: '18%', left: '15%', color: '#10B981' },
  { id: 'OLT-02', label: 'ZTE C320', info: '64 ONTs · Col. Miraflores', top: '65%', left: '55%', color: '#10B981' },
  { id: 'OLT-03', label: 'V-Sol', info: '32 ONTs · Col. Torocagua', top: '40%', left: '78%', color: '#F59E0B' },
]

const naps = [
  { id: 'NAP-01', top: '10%', left: '22%', color: '#10B981' },
  { id: 'NAP-05', top: '30%', left: '35%', color: '#10B981' },
  { id: 'NAP-12', top: '48%', left: '20%', color: '#10B981' },
  { id: 'NAP-19', top: '58%', left: '68%', color: '#10B981' },
  { id: 'NAP-23', top: '35%', left: '65%', color: '#10B981' },
  { id: 'NAP-08', top: '72%', left: '40%', color: '#10B981' },
  { id: 'NAP-31', top: '25%', left: '50%', color: '#10B981' },
  { id: 'NAP-15', top: '50%', left: '85%', color: '#F59E0B' },
]

export function NetworkMap() {
  return (
    <div className="nmap-container animate-on-scroll" style={{ position: 'relative', height: 500, borderRadius: 16, overflow: 'hidden' }}>
      {/* OSM iframe with CSS invert filter for dark mode */}
      <iframe
        src="https://www.openstreetmap.org/export/embed.html?bbox=-87.24%2C14.03%2C-87.14%2C14.12&layer=mapnik"
        style={{
          position: 'absolute',
          top: -20,
          left: -20,
          width: 'calc(100% + 40px)',
          height: 'calc(100% + 40px)',
          border: 'none',
          pointerEvents: 'none',
          filter: 'invert(1) hue-rotate(180deg) brightness(0.8) contrast(1.2) saturate(0.3)',
        }}
        loading="lazy"
        title="Network map of Tegucigalpa"
      />

      {/* Overlay gradients to cover attribution/controls */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 40, background: 'linear-gradient(transparent, #0F172A)', zIndex: 2 }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 40, background: 'linear-gradient(#0F172A, transparent)', zIndex: 2 }} />
      <div style={{ position: 'absolute', top: 0, left: 0, width: 60, height: 90, background: '#0F172A', zIndex: 2, borderRadius: '0 0 8px 0' }} />

      {/* NAP markers */}
      {naps.map((nap) => (
        <div
          key={nap.id}
          style={{
            position: 'absolute',
            top: nap.top,
            left: nap.left,
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: nap.color,
            boxShadow: `0 0 6px ${nap.color}80`,
            zIndex: 3,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}

      {/* OLT markers with ping animation and tooltips */}
      {olts.map((olt) => (
        <div
          key={olt.id}
          className="nmap-olt-group"
          style={{
            position: 'absolute',
            top: olt.top,
            left: olt.left,
            zIndex: 4,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div
            className="nmap-olt-ping"
            style={{ borderColor: `${olt.color}60` }}
          />
          <div
            className="nmap-dot-olt"
            style={{
              background: olt.color,
              boxShadow: `0 0 14px ${olt.color}90`,
            }}
          />
          <div className="nmap-olt-tooltip">
            <div className="nmap-tt-id">{olt.id} {olt.label}</div>
            <div className="nmap-tt-info">{olt.info}</div>
          </div>
        </div>
      ))}

      {/* Fiber lines SVG overlay */}
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 3, pointerEvents: 'none' }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* OLT-01 to NAPs */}
        <line x1="15" y1="18" x2="22" y2="10" stroke="#FF3131" strokeWidth="0.15" opacity="0.3" strokeDasharray="1 0.8" />
        <line x1="15" y1="18" x2="35" y2="30" stroke="#FF3131" strokeWidth="0.15" opacity="0.3" strokeDasharray="1 0.8" />
        <line x1="15" y1="18" x2="20" y2="48" stroke="#FF3131" strokeWidth="0.15" opacity="0.3" strokeDasharray="1 0.8" />
        {/* OLT-02 to NAPs */}
        <line x1="55" y1="65" x2="68" y2="58" stroke="#FF3131" strokeWidth="0.15" opacity="0.3" strokeDasharray="1 0.8" />
        <line x1="55" y1="65" x2="40" y2="72" stroke="#FF3131" strokeWidth="0.15" opacity="0.3" strokeDasharray="1 0.8" />
        <line x1="55" y1="65" x2="50" y2="25" stroke="#FF3131" strokeWidth="0.15" opacity="0.3" strokeDasharray="1 0.8" />
        {/* OLT-03 to NAPs */}
        <line x1="78" y1="40" x2="65" y2="35" stroke="#FF3131" strokeWidth="0.15" opacity="0.3" strokeDasharray="1 0.8" />
        <line x1="78" y1="40" x2="85" y2="50" stroke="#FF3131" strokeWidth="0.15" opacity="0.3" strokeDasharray="1 0.8" />
        {/* Trunk lines between OLTs */}
        <line x1="15" y1="18" x2="55" y2="65" stroke="#FF914D" strokeWidth="0.25" opacity="0.35" strokeDasharray="1.5 1" />
        <line x1="55" y1="65" x2="78" y2="40" stroke="#FF914D" strokeWidth="0.25" opacity="0.35" strokeDasharray="1.5 1" />
      </svg>
    </div>
  )
}
