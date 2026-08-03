import type { PropsWithChildren } from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter, Ysabeau_Infant } from 'next/font/google'
import { getLocale } from 'next-intl/server'

import { I18nProvider, PlatformContainer } from '@/app/_providers'

import { cn } from '@/shared'
import { ThemeProvider, ThemeScript } from '@/shared'

import './_assets/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const ysabeau = Ysabeau_Infant({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-ysabeau',
  weight: ['400', '600'],
})

export const metadata: Metadata = {
  title: 'MaisonPattern',
  description: 'Приложение MaisonPattern',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  appleWebApp: {
    capable: true,
    title: 'MaisonPattern',
    statusBarStyle: 'default',
  },
}

export const viewport: Viewport = {
  themeColor: '#09090b',
}

export default async function RootLayout({ children }: PropsWithChildren) {
  const locale = await getLocale()

  return (
    <html
      lang={locale}
      className={cn('font-ysabeau', inter.variable, ysabeau.variable)}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
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
