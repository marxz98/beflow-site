'use client'

interface SkeletonProps {
  width?: string | number
  height?: string | number
  radius?: number
  className?: string
  style?: React.CSSProperties
}

export function Skeleton({ width, height = 16, radius = 8, className = '', style }: SkeletonProps) {
  return (
    <div
      className={`skeleton-shimmer ${className}`}
      style={{ width: width ?? '100%', height, borderRadius: radius, ...style }}
    />
  )
}

export function SkeletonText({ width = '100%' }: { width?: string }) {
  return <Skeleton width={width} height={14} radius={4} style={{ marginBottom: 8 }} />
}

export function SkeletonTitle({ width = '60%' }: { width?: string }) {
  return <Skeleton width={width} height={32} radius={6} style={{ marginBottom: 12 }} />
}

export function SkeletonCard({
  height = 200,
  radius = 16,
  className = '',
}: {
  height?: number | string
  radius?: number
  className?: string
}) {
  return <Skeleton height={height} radius={radius} className={className} />
}

export function SkeletonCircle({ size = 40 }: { size?: number }) {
  return <Skeleton width={size} height={size} radius={size / 2} />
}

/** A skeleton that mimics the 6-card bento layout */
export function BentoSkeletonGrid() {
  const cardStyle: React.CSSProperties = {
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 16,
    padding: 28,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
    minHeight: 200,
  }
  const row: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 8 }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 16,
      }}
    >
      {/* big card (col 1-2, rows 1-2) */}
      <div style={{ ...cardStyle, gridColumn: '1 / 3', gridRow: '1 / 3', minHeight: 420 }}>
        <Skeleton width="50%" height={22} radius={6} />
        <div style={row}>
          <SkeletonText />
          <SkeletonText width="80%" />
        </div>
        <Skeleton height={120} radius={10} style={{ marginTop: 'auto' }} />
      </div>
      {/* mint */}
      <div style={cardStyle}>
        <Skeleton width="45%" height={20} radius={6} />
        <SkeletonText />
        <SkeletonText width="70%" />
        <Skeleton height={80} radius={8} style={{ marginTop: 'auto' }} />
      </div>
      {/* envradar */}
      <div style={cardStyle}>
        <Skeleton width="55%" height={20} radius={6} />
        <SkeletonText />
        <SkeletonText width="65%" />
        <Skeleton height={80} radius={8} style={{ marginTop: 'auto' }} />
      </div>
      {/* bottom row × 3 */}
      {[0, 1, 2].map((i) => (
        <div key={i} style={cardStyle}>
          <Skeleton width="50%" height={20} radius={6} />
          <SkeletonText />
          <SkeletonText width="75%" />
          <Skeleton height={72} radius={8} style={{ marginTop: 'auto' }} />
        </div>
      ))}
    </div>
  )
}

/** A skeleton for a generic N-card feature bento */
export function FeatureSkeletonGrid({ cols = 3, count = 6 }: { cols?: number; count?: number }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gap: 16,
      }}
    >
      {/* first card is large */}
      <div
        style={{
          background: 'var(--bg-card)', border: '1px solid var(--border)',
          borderRadius: 16, padding: 28, display: 'flex', flexDirection: 'column',
          gap: 10, gridColumn: '1 / 2', gridRow: '1 / 3', minHeight: 380,
        }}
      >
        <Skeleton width="55%" height={20} radius={6} />
        <SkeletonText />
        <SkeletonText width="80%" />
        <Skeleton height={140} radius={10} style={{ marginTop: 'auto' }} />
      </div>
      {/* remaining cards */}
      {Array.from({ length: count - 1 }).map((_, i) => (
        <div
          key={i}
          style={{
            background: 'var(--bg-card)', border: '1px solid var(--border)',
            borderRadius: 16, padding: 28, display: 'flex', flexDirection: 'column',
            gap: 8, minHeight: 180,
          }}
        >
          <Skeleton width="50%" height={18} radius={6} />
          <SkeletonText />
          <SkeletonText width="70%" />
          <Skeleton height={60} radius={8} style={{ marginTop: 'auto' }} />
        </div>
      ))}
    </div>
  )
}
