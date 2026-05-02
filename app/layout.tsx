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
  title: 'BeFlow - Productos de tecnologia hechos en Honduras',
  description: 'Construimos y operamos software especializado para telecomunicaciones, infraestructura fiscal y desarrollo. BeFlow Net, Mint, EnvRadar.',
  openGraph: {
    title: 'BeFlow - Productos de tecnologia hechos en Honduras',
    description: 'Software especializado para telecomunicaciones, infraestructura fiscal y desarrollo.',
    url: 'https://justbeflow.com',
    siteName: 'BeFlow',
    locale: 'es_HN',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${dmSans.variable} ${spaceMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
