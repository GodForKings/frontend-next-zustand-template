import type { UserResponseDto } from '@/shared/api'

export interface SessionState {
  user: UserResponseDto | null
  isAuth: boolean
  isSessionLoading: boolean
}

export interface SessionActions {
  setUser: (user: UserResponseDto | null) => void
  clearSession: () => void
}

export type SessionStore = SessionState & SessionActions
