import type { Metadata, Viewport } from 'next'

import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

import './globals.css'
import { portfolioInfo as info } from '@/lib/info'

import '@fontsource-variable/outfit/wght.css'

export const metadata: Metadata = {
  title: {
    default: `${info.name} - ${info.title}`,
    template: `%s | ${info.name}`,
  },
  description: info.tagline,
  authors: [{ name: info.name }],
  openGraph: {
    title: `${info.name} - ${info.title}`,
    description: info.tagline,
    url: 'https://georgeholman.dev',
    locale: 'en_NZ',
    type: 'website',
  },
  metadataBase: new URL('https://georgeholman.dev'),
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0F0F1A',
}

export default function RootLayout({ children }: { children: React.ReactNode;}) {
  return (
    <html lang="en-NZ">
      <body className="min-h-full flex flex-col antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
