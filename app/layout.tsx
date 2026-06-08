import type { Metadata, Viewport } from 'next'

import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

import './globals.css'
import { portfolioData } from '@/lib/data'

import '@fontsource-variable/outfit/wght.css'

export const metadata: Metadata = {
  title: {
    default: `${portfolioData.name} - ${portfolioData.title}`,
    template: `%s | ${portfolioData.name}`,
  },
  description: portfolioData.tagline,
  authors: [{ name: portfolioData.name }],
  openGraph: {
    title: `${portfolioData.name} - ${portfolioData.title}`,
    description: portfolioData.tagline,
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
