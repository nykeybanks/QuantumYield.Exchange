import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'QYX Exchange | QuantumYield',
  description: 'Precision digital asset exchange interface for QYX.',
}

export const viewport: Viewport = { width: 'device-width', initialScale: 1, maximumScale: 1, themeColor: '#000000' }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
