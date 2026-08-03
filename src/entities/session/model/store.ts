import { create } from 'zustand'

import { apiClient, showError } from '@/shared'

import type { SessionStore } from './types'

export const useSessionStore = create<SessionStore>((set) => ({
  user: null,
  isAuth: false,
  setUser: (user) => set({ user, isAuth: true }),
  logout: async () => {
    try {
      await apiClient.authControllerLogout()
    } catch {
      showError('Ошибка при выходе из системы')
    } finally {
      set({ user: null, isAuth: false })
    }
  },
}))
