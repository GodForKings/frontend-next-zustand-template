import { create } from 'zustand'

import type { SessionStore } from './types'

export const useSessionStore = create<SessionStore>((set) => ({
  user: null,
  isAuth: false,
  isSessionLoading: true,
  setUser: (user) => set({ user, isAuth: Boolean(user), isSessionLoading: false }),
  clearSession: () => set({ user: null, isAuth: false, isSessionLoading: false }),
}))
