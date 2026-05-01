export function Footer({ product }: { product?: string }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logos/3.png" alt="BeFlow" style={{ height: 28 }} />
            </div>
            <p>BeFlow es una empresa de tecnologia hondurena. Creamos productos especializados para telecomunicaciones, infraestructura fiscal y herramientas developer.</p>
          </div>
          <div className="footer-col">
            <h4>Productos</h4>
            <a href="/net">BeFlow Net</a>
            <a href="/mint">Mint by BeFlow</a>
            <a href="/envradar">EnvRadar</a>
          </div>
          <div className="footer-col">
            <h4>Developers</h4>
            <a href="/mint#docs">API Docs</a>
            <a href="/mint#sdks">SDKs</a>
            <a href="#">GitHub</a>
            <a href="#">Status</a>
          </div>
          <div className="footer-col">
            <h4>Empresa</h4>
            <a href="/#nosotros">Sobre Nosotros</a>
            <a href="mailto:hello@justbeflow.com">Contacto</a>
            <a href="#">Privacidad</a>
            <a href="#">Terminos</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 BeFlow. Todos los derechos reservados.</span>
          <div className="footer-socials">
            <a href="#" className="footer-social" title="GitHub">GH</a>
            <a href="#" className="footer-social" title="LinkedIn">in</a>
            <a href="#" className="footer-social" title="WhatsApp">W</a>
          </div>
        </div>
        {product && (
          <div style={{ textAlign: 'center', marginTop: 16, paddingTop: 16, borderTop: '1px solid rgba(0,0,0,0.06)' }}>
            <span style={{ fontSize: 12, color: 'var(--text-tertiary)' }}>{product} es un producto de BeFlow &middot; <a href="/" style={{ color: 'var(--accent)' }}>justbeflow.com</a></span>
          </div>
        )}
      </div>
    </footer>
  )
}
