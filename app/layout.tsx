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
  title: 'BeFlow — Software que resuelve problemas reales',
  description: 'BeFlow crea productos de tecnologia especializados para Honduras y Centroamerica. BeFlow Net, Mint, EnvRadar.',
  openGraph: {
    title: 'BeFlow — Software que resuelve problemas reales',
    description: 'Productos de tecnologia especializados para Honduras y Centroamerica.',
    url: 'https://justbeflow.com',
    siteName: 'BeFlow',
    locale: 'es_HN',
    type: 'website',
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
