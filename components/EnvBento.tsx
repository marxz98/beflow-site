'use client'

import { FeatureBento, type BentoCard } from '@/components/FeatureBento'

const STYLES = `
/* ── Diff view ── */
.env-diff { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: rgba(255,255,255,0.05); border-radius: 8px; overflow: hidden; margin-top: auto; padding-bottom: 28px; font-family: var(--mono); font-size: 10px; }
.env-diff-col { background: rgba(0,0,0,0.35); padding: 10px; }
.env-diff-header { color: rgba(255,255,255,0.25); font-size: 9px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px; }
.env-diff-line { padding: 2px 0; line-height: 1.7; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.env-diff-line.ok   { color: rgba(255,255,255,0.45); }
.env-diff-line.add  { color: #10B981; background: rgba(16,185,129,0.06); }
.env-diff-line.del  { color: #EF4444; background: rgba(239,68,68,0.06); text-decoration: line-through; opacity: 0.7; }
.env-diff-line.miss { color: rgba(255,255,255,0.2); }

/* ── Secret scanner ── */
.env-secret { background: rgba(0,0,0,0.35); border-radius: 8px; padding: 14px; margin-top: auto; font-family: var(--mono); font-size: 11px; }
.env-secret-line { color: rgba(255,255,255,0.4); margin-bottom: 8px; line-height: 1.5; }
.env-secret-highlight {
  background: rgba(239,68,68,0.12); border: 1px solid rgba(239,68,68,0.2);
  border-radius: 4px; padding: 6px 10px; display: flex; align-items: center; justify-content: space-between;
}
.env-secret-key { color: #60A5FA; }
.env-secret-val { color: #F87171; }
.env-secret-badge {
  font-size: 9px; font-weight: 700; background: rgba(239,68,68,0.2); color: #F87171;
  border-radius: 3px; padding: 2px 6px; white-space: nowrap;
}

/* ── Type validation ── */
.env-types { display: flex; flex-direction: column; gap: 8px; margin-top: auto; padding-bottom: 28px; font-family: var(--mono); font-size: 11px; }
.env-type-row { display: flex; align-items: center; gap: 10px; padding: 8px 10px; border-radius: 6px; }
.env-type-row.good { background: rgba(16,185,129,0.06); border: 1px solid rgba(16,185,129,0.12); }
.env-type-row.bad  { background: rgba(239,68,68,0.06);  border: 1px solid rgba(239,68,68,0.12); }
.env-type-icon { font-size: 12px; font-weight: 700; width: 14px; flex-shrink: 0; }
.env-type-icon.ok  { color: #10B981; }
.env-type-icon.err { color: #EF4444; }
.env-type-code { color: rgba(255,255,255,0.55); }
.env-type-code .k { color: #60A5FA; }
.env-type-code .v-ok  { color: #10B981; }
.env-type-code .v-bad { color: #F87171; }

/* ── Unused detection ── */
.env-unused { background: rgba(0,0,0,0.35); border-radius: 8px; padding: 14px; margin-top: auto; font-family: var(--mono); font-size: 11px; }
.env-unused-ok { color: rgba(255,255,255,0.4); padding: 4px 0; }
.env-unused-line { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 7px 10px; margin-top: 6px; border-radius: 5px; background: rgba(245,158,11,0.06); border: 1px solid rgba(245,158,11,0.14); }
.env-unused-key { color: #60A5FA; text-decoration: line-through; opacity: 0.6; }
.env-unused-badge { font-size: 9px; font-weight: 700; background: rgba(245,158,11,0.15); color: #F59E0B; border-radius: 3px; padding: 2px 6px; white-space: nowrap; }

/* ── Autocomplete ── */
.env-autocomplete { background: rgba(0,0,0,0.35); border-radius: 8px; overflow: hidden; margin-top: auto; font-family: var(--mono); font-size: 11px; }
.env-ac-input { padding: 10px 12px; display: flex; align-items: center; gap: 6px; border-bottom: 1px solid rgba(255,255,255,0.05); }
.env-ac-prefix { color: rgba(255,255,255,0.2); }
.env-ac-typed { color: #60A5FA; }
.env-ac-cursor { width: 7px; height: 14px; background: rgba(96,165,250,0.6); border-radius: 1px; animation: blink 1s step-end infinite; }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
.env-ac-item { padding: 8px 12px; display: flex; align-items: center; gap: 10px; transition: background 0.15s; }
.env-ac-item.active { background: rgba(96,165,250,0.08); }
.env-ac-item-key { color: rgba(255,255,255,0.6); flex: 1; }
.env-ac-item-type { color: rgba(255,255,255,0.22); font-size: 9px; }

/* ── Hover preview tooltip ── */
.env-hover { position: relative; padding: 20px 0 28px; margin-top: auto; display: flex; flex-direction: column; gap: 6px; font-family: var(--mono); font-size: 11px; }
.env-hover-line { color: rgba(255,255,255,0.4); padding: 3px 0; }
.env-hover-line .hk { color: #60A5FA; }
.env-tooltip {
  background: rgba(20,20,20,0.95); border: 1px solid rgba(255,255,255,0.08);
  border-radius: 6px; padding: 8px 12px; font-size: 11px;
  display: flex; align-items: center; gap: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.5);
  opacity: 0; transform: translateY(4px);
  transition: opacity 0.3s, transform 0.3s;
}
.fb-card:hover .env-tooltip { opacity: 1; transform: translateY(0); }
.env-tooltip-key { color: #60A5FA; font-weight: 600; }
.env-tooltip-val { color: rgba(255,255,255,0.5); }
.env-tooltip-masked { letter-spacing: 2px; color: rgba(255,255,255,0.2); }

/* ── Gitignore warning ── */
.env-gitignore { margin-top: auto; padding-bottom: 28px; }
.env-git-alert {
  background: rgba(245,158,11,0.06); border: 1px solid rgba(245,158,11,0.18);
  border-radius: 8px; padding: 14px 16px;
  display: flex; flex-direction: column; gap: 10px;
}
.env-git-top { display: flex; align-items: center; gap: 8px; font-size: 12px; color: #F59E0B; font-weight: 600; }
.env-git-desc { font-size: 12px; color: rgba(255,255,255,0.4); line-height: 1.4; }
.env-git-btn {
  font-size: 11px; font-weight: 700; color: #F59E0B;
  background: rgba(245,158,11,0.1); border: 1px solid rgba(245,158,11,0.2);
  border-radius: 5px; padding: 6px 12px; width: fit-content;
  font-family: var(--mono); cursor: default;
  transition: background 0.2s;
}
.fb-card:hover .env-git-btn { background: rgba(245,158,11,0.2); }
`

// ─── Visuals ──────────────────────────────────────────────────────────────

const DIFF_VISUAL = (
  <>
    <style>{STYLES}</style>
    <div className="env-diff">
      <div className="env-diff-col">
        <div className="env-diff-header">.env.example</div>
        <div className="env-diff-line ok">DATABASE_URL=</div>
        <div className="env-diff-line ok">PORT=3000</div>
        <div className="env-diff-line ok">API_KEY=</div>
        <div className="env-diff-line ok">REDIS_URL=</div>
      </div>
      <div className="env-diff-col">
        <div className="env-diff-header">.env</div>
        <div className="env-diff-line add">DATABASE_URL=pg://...</div>
        <div className="env-diff-line add">PORT=3000</div>
        <div className="env-diff-line del">API_KEY=sk_live_...</div>
        <div className="env-diff-line miss">REDIS_URL missing</div>
      </div>
    </div>
  </>
)

const SECRET_VISUAL = (
  <div className="env-secret">
    <div className="env-secret-line">NODE_ENV=production</div>
    <div className="env-secret-highlight">
      <span>
        <span className="env-secret-key">API_KEY</span>
        <span style={{ color: 'rgba(255,255,255,0.2)' }}>= </span>
        <span className="env-secret-val">sk_live_4eC39...</span>
      </span>
      <span className="env-secret-badge">secret</span>
    </div>
  </div>
)

const TYPES_VISUAL = (
  <div className="env-types">
    <div className="env-type-row bad">
      <span className="env-type-icon err">✗</span>
      <span className="env-type-code">
        <span className="k">PORT</span>=<span className="v-bad">abc</span>
      </span>
      <span style={{ fontSize: 10, color: '#F87171', marginLeft: 'auto' }}>not a number</span>
    </div>
    <div className="env-type-row good">
      <span className="env-type-icon ok">✓</span>
      <span className="env-type-code">
        <span className="k">PORT</span>=<span className="v-ok">3000</span>
      </span>
      <span style={{ fontSize: 10, color: '#10B981', marginLeft: 'auto' }}>number</span>
    </div>
  </div>
)

const UNUSED_VISUAL = (
  <div className="env-unused">
    <div className="env-unused-ok">DATABASE_URL=pg://...</div>
    <div className="env-unused-ok">PORT=3000</div>
    <div className="env-unused-line">
      <span className="env-unused-key">SMTP_HOST</span>
      <span className="env-unused-badge">0 references</span>
    </div>
  </div>
)

const AUTOCOMPLETE_VISUAL = (
  <div className="env-autocomplete">
    <div className="env-ac-input">
      <span className="env-ac-prefix">process.env.</span>
      <span className="env-ac-typed">DATA</span>
      <div className="env-ac-cursor" />
    </div>
    {[
      { key: 'DATABASE_URL', type: 'string' },
      { key: 'DATABASE_HOST', type: 'string' },
      { key: 'DATABASE_PORT', type: 'number' },
    ].map((item, i) => (
      <div key={item.key} className={`env-ac-item ${i === 0 ? 'active' : ''}`}>
        <span className="env-ac-item-key">{item.key}</span>
        <span className="env-ac-item-type">{item.type}</span>
      </div>
    ))}
  </div>
)

const HOVER_VISUAL = (
  <div className="env-hover">
    <div className="env-hover-line"><span className="hk">NODE_ENV</span>=production</div>
    <div className="env-hover-line"><span className="hk">PORT</span>=3000</div>
    <div className="env-hover-line" style={{ color: 'rgba(96,165,250,0.6)', textDecoration: 'underline' }}>
      <span className="hk">DB_PASSWORD</span>=...
    </div>
    <div className="env-tooltip">
      <span className="env-tooltip-key">DB_PASSWORD</span>
      <span className="env-tooltip-val">=</span>
      <span className="env-tooltip-masked">●●●●●●</span>
    </div>
  </div>
)

const GITIGNORE_VISUAL = (
  <div className="env-gitignore">
    <div className="env-git-alert">
      <div className="env-git-top">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
          <line x1="12" y1="9" x2="12" y2="13"/>
          <line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
        .env not in .gitignore
      </div>
      <div className="env-git-desc">Your secrets could be committed. Fix it now.</div>
      <div className="env-git-btn">Add to .gitignore →</div>
    </div>
  </div>
)

const ENV_CARDS: BentoCard[] = [
  {
    id: 'diff',
    title: 'Diff',
    desc: 'Compare .env.example against .env. See every missing, extra, and changed variable.',
    visual: DIFF_VISUAL,
    gridArea: '1 / 1 / 3 / 2',
    className: 'accent-blue',
  },
  {
    id: 'secret',
    title: 'Secret Scanner',
    desc: 'Detects hardcoded API keys, tokens, and passwords across your codebase.',
    visual: SECRET_VISUAL,
    className: 'accent-blue',
  },
  {
    id: 'types',
    title: 'Type Validation',
    desc: 'PORT should be a number. DATABASE_URL should be a URL. Enforced automatically.',
    visual: TYPES_VISUAL,
  },
  {
    id: 'unused',
    title: 'Unused Detection',
    desc: 'Finds env variables defined but never referenced in code.',
    visual: UNUSED_VISUAL,
    className: 'accent-amber',
  },
  {
    id: 'autocomplete',
    title: 'Autocomplete',
    desc: 'Suggests variables for process.env across 15+ languages and frameworks.',
    visual: AUTOCOMPLETE_VISUAL,
    className: 'accent-blue',
  },
  {
    id: 'hover',
    title: 'Hover Preview',
    desc: 'See values by hovering. Sensitive values are automatically masked.',
    visual: HOVER_VISUAL,
  },
  {
    id: 'gitignore',
    title: 'Gitignore Protection',
    desc: 'Warns if .env is not in .gitignore. One-click fix.',
    visual: GITIGNORE_VISUAL,
    className: 'accent-amber',
  },
]

export function EnvBento() {
  return (
    <FeatureBento
      title="Everything your .env files need"
      subtitle="One extension replaces six separate tools."
      cards={ENV_CARDS}
      delay={300}
    />
  )
}
