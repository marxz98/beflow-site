'use client'

import { useEffect, useState } from 'react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#" className="nav-logo">
          <img src="/logos/3.png" alt="BeFlow" style={{ height: 32 }} />
        </a>
        <div className="nav-links hide-mobile">
          <a href="#productos">Productos</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#developers">Developers</a>
          <a href="#precios">Precios</a>
        </div>
        <div className="nav-cta hide-mobile">
          <a href="https://net.justbeflow.com" className="btn btn-outline">Iniciar Sesion</a>
          <a href="#contacto" className="btn btn-primary">
            Contactar
            <svg className="btn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
        <button
          className="mobile-menu-btn hide-desktop"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span className={`hamburger ${mobileOpen ? 'open' : ''}`} />
        </button>
      </div>
      {mobileOpen && (
        <div className="mobile-menu">
          <a href="#productos" onClick={() => setMobileOpen(false)}>Productos</a>
          <a href="#nosotros" onClick={() => setMobileOpen(false)}>Nosotros</a>
          <a href="#developers" onClick={() => setMobileOpen(false)}>Developers</a>
          <a href="#precios" onClick={() => setMobileOpen(false)}>Precios</a>
          <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: 16, marginTop: 8, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <a href="https://net.justbeflow.com" className="btn btn-outline" style={{ justifyContent: 'center' }}>Iniciar Sesion</a>
            <a href="#contacto" className="btn btn-accent" style={{ justifyContent: 'center' }} onClick={() => setMobileOpen(false)}>Contactar</a>
          </div>
        </div>
      )}
    </nav>
  )
}
