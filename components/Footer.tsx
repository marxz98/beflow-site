export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logos/3.png" alt="BeFlow" />
            </div>
            <p>Empresa de tecnologia hondurena. Construimos productos especializados que resuelven problemas reales.</p>
          </div>
          <div className="footer-col">
            <h4>Productos</h4>
            <a href="/net">BeFlow Net</a>
            <a href="/mint">Mint</a>
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
            <a href="mailto:hello@justbeflow.com">Contacto</a>
            <a href="#">Privacidad</a>
            <a href="#">Terminos</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 BeFlow. Honduras.</span>
          <div className="footer-bottom-links">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
