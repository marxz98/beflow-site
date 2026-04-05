import type { Metadata } from 'next'
import { DM_Sans, Space_Mono } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BeFlow Net — La Plataforma Inteligente para ISPs',
  description: 'Gestiona clientes, cobros, red de fibra, OLTs y más. Todo en una sola plataforma diseñada para proveedores de internet en Honduras y Centroamérica.',
  keywords: ['ISP', 'gestión ISP', 'Honduras', 'fibra óptica', 'OLT', 'MikroTik', 'proveedor internet'],
  openGraph: {
    title: 'BeFlow Net — La Plataforma Inteligente para ISPs',
    description: 'Gestiona clientes, cobros, red de fibra, OLTs y más. Diseñada para ISPs en Centroamérica.',
    url: 'https://justbeflow.com',
    siteName: 'BeFlow Net',
    locale: 'es_HN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BeFlow Net — La Plataforma Inteligente para ISPs',
    description: 'Gestiona clientes, cobros, red de fibra, OLTs y más.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${dmSans.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
