'use client'

import { useState } from 'react'

const faqs = [
  {
    q: '¿BeFlow es solo para ISPs?',
    a: 'BeFlow es una empresa de tecnología. BeFlow Net es nuestro primer producto, diseñado específicamente para proveedores de internet. Estamos trabajando en soluciones para otras industrias que anunciaremos próximamente.',
  },
  {
    q: '¿Puedo migrar mis datos desde WispHub, Splynx o AppSheet?',
    a: 'Sí. Aceptamos importación desde cualquier fuente que exporte a Excel o CSV. Nuestro equipo te acompaña en el proceso de migración para asegurar que toda tu información (clientes, servicios, cobros, pagos) se transfiera correctamente.',
  },
  {
    q: '¿Qué marcas de OLT son compatibles?',
    a: 'BeFlow Bridge soporta nativamente OLTs de Huawei (serie MA56xx), ZTE (C320, C300) y V-Sol. También integramos routers MikroTik vía API para gestión de queues, firewall y corte/reconexión automática.',
  },
  {
    q: '¿Cómo funciona la facturación SAR/CAI?',
    a: 'BeFlow Net genera facturas con el formato fiscal requerido por el SAR de Honduras, incluyendo CAI, rango autorizado, fecha límite de emisión y todos los datos fiscales. Tú solo configuras tus datos una vez y el sistema se encarga del resto.',
  },
  {
    q: '¿Puedo tener mi propio número de WhatsApp para notificaciones?',
    a: 'Sí. Cada ISP recibe su propio WABA (WhatsApp Business Account) con número dedicado bajo el portfolio de Meta de BeFlow. Tus clientes reciben notificaciones con el nombre y logo de tu ISP, no de BeFlow.',
  },
  {
    q: '¿Hay un período de prueba?',
    a: 'Sí. Ofrecemos una prueba guiada donde configuramos tu operación con datos reales para que puedas evaluar la plataforma antes de comprometerte. Agenda una demo y te mostramos todo el potencial de BeFlow con tu propia información.',
  },
  {
    q: '¿Es más barato que Splynx o WispHub?',
    a: 'Significativamente. BeFlow está diseñado para el mercado centroamericano con precios acordes. Un ISP con 2,000 clientes paga ~$400/mes con BeFlow Pro, mientras que soluciones comparables pueden costar 2-3x más sin incluir las integraciones Honduras-específicas que BeFlow ya trae de serie.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-header animate-on-scroll" style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="section-eyebrow"><span className="eyebrow-icon">?</span> FAQ</div>
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
