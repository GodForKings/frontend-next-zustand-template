/** Конфиг страниц для авторизованного `USER-а` */
export const PAGES = {
  PROFILE: '/profile',
} as const

/** Конфиг страниц для неавторизованного `USER-а` */
export const PUBLIC_PAGES = {
  LOGIN: '/login',
  REG: '/registration',
  MAIN: '/',
} as const
