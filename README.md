# BeFlow — Marketing Website

Sitio web marketing de BeFlow en [justbeflow.com](https://justbeflow.com).

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **CSS Global** (design tokens en variables CSS)
- **Deploy:** Vercel

## Setup

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Deploy en Vercel

1. Push a GitHub: `marxz98/beflow-site`
2. Conectar repo en [vercel.com](https://vercel.com)
3. Asignar dominio custom: `justbeflow.com`
4. El subdominio `net.justbeflow.com` sigue apuntando al proyecto `beflow-net`

## Estructura

```
app/
  layout.tsx          # Root layout, fonts, metadata SEO
  page.tsx            # Landing page completa
  globals.css         # Todos los estilos (design tokens)
components/
  Navbar.tsx          # Nav con efecto scroll (client)
  ProductTabs.tsx     # Tabs de productos interactivos (client)
  FAQ.tsx             # Accordion FAQ (client)
  ScrollAnimator.tsx  # Intersection Observer animations (client)
```

## Secciones

1. **Hero** — CTA principal con mockup del dashboard
2. **Logo Marquee** — Integraciones (Huawei, ZTE, V-Sol, MikroTik, PixelPay, WhatsApp, SAR/CAI)
3. **Productos** — Tabs: BeFlow Net, Intelligence, Bridge, Portal
4. **Cómo Funciona** — 3 pasos numerados (01-03)
5. **Métricas** — 22+ diferenciadores, 70% menos costo, etc.
6. **Pricing** — Starter / Pro / Enterprise
7. **FAQ** — 6 preguntas frecuentes
8. **CTA** — Call to action final
9. **Footer** — Links, social, legal
