import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import type { BannerStore } from './types'

export const useBannerStore = create<BannerStore>()(
  persist(
    (set) => ({
      dismissedBannerText: null,
      dismissBanner: (text: string) => set({ dismissedBannerText: text }),
    }),
    {
      name: 'system-banner-storage',
    },
  ),
)
