'use client'

import { type FC, useLayoutEffect } from 'react'
import { usePathname } from 'next/navigation'

import { useLogoutMutation, useProfileQuery } from '@/features/auth'

import { useSessionStore } from '@/entities/session'

import { PROTECTED_ROUTES, UNAUTH_ONLY_PAGES } from '@/shared'

export const SessionInitializer: FC = () => {
  const pathname = usePathname()
  const isAuthRoute = UNAUTH_ONLY_PAGES.some((route) => pathname.startsWith(route))

  /* Токены есть, но они могут быть невалидны */
  const isProtectedRoute = PROTECTED_ROUTES.some((route) => pathname.startsWith(route))

  const { data: profileData, isSuccess, isError } = useProfileQuery(!isAuthRoute)
  const setUser = useSessionStore((state) => state.setUser)
  const clearSession = useSessionStore((state) => state.clearSession)
  const { mutate: logoutOnServer } = useLogoutMutation()

  useLayoutEffect(() => {
    /* На гостевых роутах сразу завершаем загрузку без запросов к API */
    if (isAuthRoute) {
      return clearSession()
    }

    if (isSuccess && profileData) {
      setUser(profileData)
    } else if (isError) {
      /* Сначала сбрасываем клиентское состояние */
      clearSession()

      /* Очищаем куки если юзера пропустило с невалидными куками */
      if (isProtectedRoute) {
        logoutOnServer()
      }
    }
  }, [
    isAuthRoute,
    isProtectedRoute,
    isSuccess,
    isError,
    profileData,
    setUser,
    clearSession,
    logoutOnServer,
  ])

  return null
}
