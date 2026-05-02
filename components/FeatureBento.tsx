'use client'

import { useEffect, useRef, useState } from 'react'
import { FeatureSkeletonGrid } from '@/components/Skeleton'

export interface BentoCard {
  id: string
  title: string
  desc: string
  visual: React.ReactNode
  /** CSS grid-area shorthand, e.g. "1 / 1 / 3 / 2" */
  gridArea?: string
  /** Extra CSS class on the card (for accent overrides) */
  className?: string
}

interface Props {
  title: string
  subtitle: string
  cards: BentoCard[]
  /** ms before skeleton → real content. Default 600. */
  delay?: number
  /** Extra className on the section wrapper */
  className?: string
}

const FB_STYLES = `
.fb-section { padding: 100px 0; border-top: 1px solid var(--border); }
.fb-header { text-align: center; margin-bottom: 56px; }
.fb-title {
  font-size: clamp(28px, 4vw, 40px); font-weight: 600;
  letter-spacing: -1.2px; line-height: 1.1; margin-bottom: 12px; color: white;
}
.fb-sub {
  font-size: 17px; color: rgba(255,255,255,0.42);
  max-width: 520px; margin: 0 auto; line-height: 1.6;
}

.fb-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.fb-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px 28px 0 28px;
  overflow: hidden; position: relative;
  display: flex; flex-direction: column;
  opacity: 0; transform: translateY(16px);
  transition: opacity 0.55s ease, transform 0.55s ease,
              border-color 0.35s, box-shadow 0.35s;
}
.fb-card.fb-visible { opacity: 1; transform: translateY(0); }
.fb-card:hover {
  border-color: rgba(255,49,49,0.14);
  box-shadow: 0 0 32px rgba(255,49,49,0.05);
}
.fb-card.accent-green:hover {
  border-color: rgba(16,185,129,0.2);
  box-shadow: 0 0 32px rgba(16,185,129,0.05);
}
.fb-card.accent-blue:hover {
  border-color: rgba(59,130,246,0.2);
  box-shadow: 0 0 32px rgba(59,130,246,0.05);
}
.fb-card.accent-amber:hover {
  border-color: rgba(245,158,11,0.2);
  box-shadow: 0 0 32px rgba(245,158,11,0.04);
}
.fb-card.accent-purple:hover {
  border-color: rgba(168,85,247,0.2);
  box-shadow: 0 0 32px rgba(168,85,247,0.05);
}

.fb-card-title {
  font-size: 16px; font-weight: 600; color: white;
  margin-bottom: 8px; letter-spacing: -0.2px;
}
.fb-card-desc {
  font-size: 14px; color: rgba(255,255,255,0.4);
  line-height: 1.55; margin-bottom: 16px;
}
.fb-visual { margin-top: auto; }

@media (max-width: 900px) {
  .fb-section { padding: 72px 0; }
  .fb-grid { grid-template-columns: 1fr 1fr; }
  .fb-card[style*="grid-area"] { grid-area: auto !important; }
}
@media (max-width: 600px) {
  .fb-grid { grid-template-columns: 1fr; }
}
`

export function FeatureBento({ title, subtitle, cards, delay = 600, className = '' }: Props) {
  const gridRef = useRef<HTMLDivElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), delay)
    return () => clearTimeout(t)
  }, [delay])

  useEffect(() => {
    if (!ready) return
    const items = gridRef.current?.querySelectorAll('.fb-card')
    if (!items) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const d = Number(el.dataset.delay ?? 0)
            setTimeout(() => el.classList.add('fb-visible'), d)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.08 }
    )
    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ready])

  return (
    <section className={`fb-section ${className}`}>
      <style>{FB_STYLES}</style>
      <div className="container">
        <div className="fb-header">
          <h2 className="fb-title">{title}</h2>
          <p className="fb-sub">{subtitle}</p>
        </div>

        {!ready ? (
          <FeatureSkeletonGrid cols={3} count={cards.length} />
        ) : (
          <div className="fb-grid" ref={gridRef}>
            {cards.map((card, i) => (
              <div
                key={card.id}
                className={`fb-card ${card.className ?? ''}`}
                style={card.gridArea ? { gridArea: card.gridArea } : undefined}
                data-delay={i * 80}
              >
                <div className="fb-card-title">{card.title}</div>
                <p className="fb-card-desc">{card.desc}</p>
                <div className="fb-visual">{card.visual}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
