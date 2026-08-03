import { create } from 'zustand'

import type { ModalStore } from './types'

export const useModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  content: null,
  className: null,
  openModal: ({ content, className }) =>
    set({ isOpen: true, content, className: className ?? null }),
  closeModal: () => set({ isOpen: false, content: null, className: null }),
}))
