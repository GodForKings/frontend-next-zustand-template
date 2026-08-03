import type { ReactNode } from 'react'

export interface ModalState {
  isOpen: boolean
  content: ReactNode | null
  className: string | null
}

export interface ModalActions {
  openModal: (params: { content: ReactNode | null; className?: string | null }) => void
  closeModal: () => void
}

export type ModalStore = ModalState & ModalActions
