'use client'

import { FC, ReactNode, useEffect } from 'react'

import { useThemeStore } from '../model/store'

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const { loadTheme } = useThemeStore()

  useEffect(() => {
    loadTheme()
  }, [loadTheme])

  return <>{children}</>
}
