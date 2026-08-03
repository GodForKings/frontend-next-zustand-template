import { create } from 'zustand'

import type { DialogStore } from './types'

export const useDialogStore = create<DialogStore>((set) => ({
  isOpen: false,
  content: null,
  className: null,
  openDialog: ({ content, className }) =>
    set({ isOpen: true, content, className: className ?? null }),
  closeDialog: () => set({ isOpen: false, content: null, className: null }),
}))
