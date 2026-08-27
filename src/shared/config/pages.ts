/** Конфиг страниц для авторизованного `USER-а` */
export const PAGES = {
  PROFILE: '/profile',
} as const

/** Защищенные маршруты (базовые пути) */
export const PROTECTED_ROUTES: readonly string[] = [PAGES.PROFILE]

/** Конфиг страниц для неавторизованного `USER-а` */
export const PUBLIC_PAGES = {
  LOGIN: '/login',
  REG: '/registration',
  RESET_PASSWORD: '/reset-password',
  MAIN: '/',
  ABOUT: '/about',
  CONTACTS: '/contacts',
} as const

/** Маршруты только для неавторизованных пользователей (гостей) */
export const UNAUTH_ONLY_PAGES: readonly string[] = [
  PUBLIC_PAGES.LOGIN,
  PUBLIC_PAGES.REG,
  PUBLIC_PAGES.RESET_PASSWORD,
]
