import type { PropsWithChildren } from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { getLocale } from 'next-intl/server'

import { I18nProvider, PlatformContainer } from '@/app/_providers'

import {
  BASE_METADATA,
  cn,
  generateOrganizationAndWebSiteJsonLd,
  JsonLd,
  ThemeProvider,
  ThemeScript,
} from '@/shared'

import './_assets/globals.css'

const inter = Inter({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = BASE_METADATA

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
}

export default async function RootLayout({ children }: PropsWithChildren) {
  const locale = await getLocale()
  const [organizationJsonLd, webSiteJsonLd] = generateOrganizationAndWebSiteJsonLd()

  return (
    <html lang={locale} className={cn('font-sans', inter.variable)} suppressHydrationWarning>
      <head>
        <ThemeScript />

        <JsonLd data={organizationJsonLd} />

        <JsonLd data={webSiteJsonLd} />
      </head>

      <body className={cn('text-foreground', 'isolate')}>
        <I18nProvider>
          <ThemeProvider>
            <PlatformContainer>{children}</PlatformContainer>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  )
}
