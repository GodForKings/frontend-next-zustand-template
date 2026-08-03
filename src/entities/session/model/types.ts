import type { UserResponseDto } from '@/shared/api'

export interface SessionState {
  user: UserResponseDto | null
  isAuth: boolean
}

export interface SessionActions {
  setUser: (user: UserResponseDto) => void
  logout: () => Promise<void>
}

export type SessionStore = SessionState & SessionActions
