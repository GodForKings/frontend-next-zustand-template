import type { Metadata } from 'next'

import { ENVIRONMENT_CONFIG } from './environment'

export const SITE_NAME = 'Application'
export const DEFAULT_SITE_URL = ENVIRONMENT_CONFIG.SITE_URL

/** Базовые метаданные приложения */
export const BASE_METADATA: Metadata = {
  metadataBase: new URL(DEFAULT_SITE_URL),
  title: {
    default: `${SITE_NAME} - Платформа сервиса`,
    template: `%s | ${SITE_NAME}`,
  },
  description: 'Современное веб-приложение на базе Next.js и React.',
  keywords: ['Next.js', 'React', 'Zustand', 'TanStack Query', 'TypeScript'],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: './',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: DEFAULT_SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} - Платформа сервиса`,
    description: 'Современное веб-приложение на базе Next.js и React.',
    images: [
      {
        url: `${DEFAULT_SITE_URL}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} - Платформа сервиса`,
    description: 'Современное веб-приложение на базе Next.js и React.',
    images: [`${DEFAULT_SITE_URL}/images/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  appleWebApp: {
    capable: true,
    title: SITE_NAME,
    statusBarStyle: 'default',
  },
}

/** Хелпер для создания метаданных закрытых от индексации страниц */
export const createNoIndexMetadata = (title: string): Metadata => ({
  title,
  robots: {
    index: false,
    follow: false,
  },
})

/** Метаданные для страниц авторизации и сброса пароля */
export const LOGIN_PAGE_METADATA: Metadata = createNoIndexMetadata('Вход в личный кабинет')
export const REGISTRATION_PAGE_METADATA: Metadata = createNoIndexMetadata('Регистрация')
export const RESET_PASSWORD_PAGE_METADATA: Metadata = createNoIndexMetadata('Сброс пароля')

/** Метаданные для главной страницы */
export const MAIN_PAGE_METADATA: Metadata = {
  title: `${SITE_NAME} - Главная страница`,
  description: 'Добро пожаловать в сервис.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${SITE_NAME} - Главная страница`,
    description: 'Добро пожаловать в сервис.',
    url: '/',
    images: [
      {
        url: `${DEFAULT_SITE_URL}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
}
