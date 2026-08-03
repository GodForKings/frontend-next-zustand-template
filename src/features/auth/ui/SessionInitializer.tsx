'use client'

import { useEffect } from 'react'

import { useSessionStore } from '@/entities/session'

import { useProfileQuery } from '../api/queries'

export const SessionInitializer = () => {
  const { data, isSuccess, isError } = useProfileQuery()
  const { setUser, logout } = useSessionStore()

  useEffect(() => {
    if (isSuccess && data) {
      setUser(data)
    } else if (isError) {
      logout()
    }
  }, [isSuccess, isError, data, setUser, logout])

  return null
}
