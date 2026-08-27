import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { PROTECTED_ROUTES, PUBLIC_PAGES, UNAUTH_ONLY_PAGES } from '@/shared'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  /** Разрешаем доступ к статике и API */
  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.includes('.')) {
    return NextResponse.next()
  }

  /** Флаг наличие сессионных токенов */
  const hasAuthCookie = request.cookies.has('refreshToken') || request.cookies.has('accessToken')

  /** Проверка на соответствие маршрута защищенным роутам */
  const isProtectedRoute = PROTECTED_ROUTES.some((route) => pathname.startsWith(route))

  /** Маршруты только для неавторизованных */
  const isAuthRoute = UNAUTH_ONLY_PAGES.some((route) => pathname.startsWith(route))

  // Если нет куки и маршрут защищен - отправляем на логин
  if (!hasAuthCookie && isProtectedRoute) {
    const loginUrl = new URL(PUBLIC_PAGES.LOGIN, request.url)
    return NextResponse.redirect(loginUrl)
  }

  // Если кука есть, а юзер идет на логин/регистрацию/восстановление кидаем на главную
  if (hasAuthCookie && isAuthRoute) {
    const mainUrl = new URL(PUBLIC_PAGES.MAIN, request.url)
    return NextResponse.redirect(mainUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
