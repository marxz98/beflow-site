'use client'

import { useState } from 'react'
import { IconQuestion } from '@/components/Icons'

const faqs = [
  {
    q: 'Que es BeFlow exactamente?',
    a: 'BeFlow es una empresa de tecnologia hondurena que crea productos de software especializados. Nuestro primer producto, BeFlow Net, es una plataforma de gestion para proveedores de internet (ISPs). Tambien estamos desarrollando Mint, una API de facturacion electronica, y herramientas para developers.',
  },
  {
    q: 'Que es BeFlow Net y para quien es?',
    a: 'BeFlow Net es una plataforma todo-en-uno para ISPs (proveedores de internet) en Honduras y Centroamerica. Incluye gestion de clientes, cobros, red de fibra, OLTs, ordenes de trabajo, facturacion SAR/CAI e inteligencia artificial. Esta disenada para ISPs pequenos y medianos que quieren profesionalizar su operacion.',
  },
  {
    q: 'Que es Mint by BeFlow?',
    a: 'Mint es una API REST de facturacion electronica para Honduras. Permite a developers y empresas generar, validar, firmar digitalmente (XAdES-BES) y entregar documentos fiscales electronicos cumpliendo con los requisitos del SAR. Envias un JSON, recibes XML firmado + PDF listo. Incluye SDKs en 5 lenguajes.',
  },
  {
    q: 'Puedo migrar mis datos desde WispHub, Splynx o AppSheet a BeFlow Net?',
    a: 'Si. Aceptamos importacion desde cualquier fuente que exporte a Excel o CSV. Nuestro equipo te acompana en el proceso de migracion para asegurar que toda tu informacion (clientes, servicios, cobros, pagos) se transfiera correctamente.',
  },
  {
    q: 'Que marcas de OLT son compatibles con BeFlow Net?',
    a: 'BeFlow Bridge soporta nativamente OLTs de Huawei (serie MA56xx), ZTE (C320, C300) y V-Sol. Tambien integramos routers MikroTik via API para gestion de queues, firewall y corte/reconexion automatica.',
  },
  {
    q: 'Las herramientas de Dev Tools son gratuitas?',
    a: 'Si. Nuestras herramientas developer como Envradar para VSCode son open source y gratuitas. Las publicamos en GitHub y el marketplace de VSCode. Si te son utiles, una estrella en GitHub es suficiente.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-header animate-on-scroll" style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="section-eyebrow"><span className="eyebrow-icon"><IconQuestion /></span> FAQ</div>
          <h2 className="section-title">Preguntas frecuentes</h2>
        </div>
        <div className="faq-grid">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {faq.q}
                <span className="faq-toggle">+</span>
              </button>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
