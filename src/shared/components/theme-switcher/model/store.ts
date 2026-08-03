import { create } from 'zustand'

import type { ThemeStore } from './types'

export const useThemeStore = create<ThemeStore>((set, get) => ({
  theme: null,
  setTheme: (theme) => {
    set({ theme })
    if (theme) {
      localStorage.setItem('theme', theme)
      document.documentElement.classList.add('dark')
    } else {
      localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    }
  },
  toggleTheme: () => {
    const current = get().theme
    get().setTheme(current === 'dark' ? null : 'dark')
  },
  loadTheme: () => {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark') {
      get().setTheme('dark')
      return
    }
    if (stored === 'light') {
      get().setTheme(null)
      return
    }
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      get().setTheme('dark')
    } else {
      get().setTheme(null)
    }
  },
}))
