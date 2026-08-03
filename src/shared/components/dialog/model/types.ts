import type { ReactNode } from 'react'

export interface DialogState {
  isOpen: boolean
  content: ReactNode | null
  className: string | null
}

export interface DialogActions {
  openDialog: (params: { content: ReactNode | null; className?: string | null }) => void
  closeDialog: () => void
}

export type DialogStore = DialogState & DialogActions
