'use client'

import { useEffect, useState } from 'react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [logoLoaded, setLogoLoaded] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="/" className="nav-logo" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          {!logoLoaded && (
            <div
              className="skeleton-shimmer"
              style={{ width: 90, height: 28, borderRadius: 6 }}
            />
          )}
          <img
            src="/logos/3.png"
            alt="BeFlow"
            onLoad={() => setLogoLoaded(true)}
            style={{ display: logoLoaded ? 'block' : 'none' }}
          />
        </a>
        <div className="nav-links">
          <a href="#productos">Productos</a>
          <a href="#developers">Developers</a>
          <a href="#metricas">Precios</a>
        </div>
        <div className="nav-cta">
          <a href="https://net.justbeflow.com" className="btn btn-outline" style={{ padding: '8px 18px', fontSize: '13px' }}>
            Iniciar sesion
          </a>
          <a href="#contacto" className="btn btn-outline" style={{ padding: '8px 18px', fontSize: '13px', borderColor: 'rgba(255,255,255,0.1)' }}>
            Contactar
          </a>
        </div>
        <button className="mobile-menu-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          <span className={`hamburger ${mobileOpen ? 'open' : ''}`} />
        </button>
      </div>
      {mobileOpen && (
        <div className="mobile-menu">
          <a href="#productos" onClick={() => setMobileOpen(false)}>Productos</a>
          <a href="#developers" onClick={() => setMobileOpen(false)}>Developers</a>
          <a href="#metricas" onClick={() => setMobileOpen(false)}>Precios</a>
          <a href="https://net.justbeflow.com" onClick={() => setMobileOpen(false)}>Iniciar sesion</a>
          <a href="#contacto" onClick={() => setMobileOpen(false)} style={{ color: 'var(--accent-1)' }}>Contactar</a>
        </div>
      )}
    </nav>
  )
}
