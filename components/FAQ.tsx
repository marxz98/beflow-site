'use client'

import { useState } from 'react'
import { IconQuestion } from '@/components/Icons'

export function FAQ({ items, id = 'faq' }: { items: { q: string; a: string }[]; id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="faq-section" id={id}>
      <div className="container">
        <div className="faq-header animate-on-scroll" style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="section-eyebrow"><span className="eyebrow-icon"><IconQuestion /></span> FAQ</div>
          <h2 className="section-title">Preguntas frecuentes</h2>
        </div>
        <div className="faq-grid">
          {items.map((faq, i) => (
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
