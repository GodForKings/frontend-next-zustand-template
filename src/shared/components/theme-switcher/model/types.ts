export type Theme = 'dark' | null

export interface ThemeState {
  theme: Theme
}

export interface ThemeActions {
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  loadTheme: () => void
}

export type ThemeStore = ThemeState & ThemeActions
