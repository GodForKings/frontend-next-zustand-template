'use client'

import type { FC } from 'react'
import { TriangleAlert, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'

import { cn } from '@/shared'
import type { SystemSettingResponseDto } from '@/shared/api'

import { useBannerStore } from '../model/store'
import { BannerContent } from './BannerContent'

interface SystemBannerProps {
  settings?: SystemSettingResponseDto
  isAdmin?: boolean
}

export const SystemBanner: FC<SystemBannerProps> = (props) => {
  const { settings, isAdmin } = props

  const dismissedBannerText = useBannerStore((state) => state.dismissedBannerText)
  const dismissBanner = useBannerStore((state) => state.dismissBanner)

  const isMaintenanceAlert = Boolean(isAdmin && settings?.maintenanceMode)
  const isInfoBannerActive = Boolean(
    settings?.bannerEnabled && settings?.bannerText && dismissedBannerText !== settings.bannerText,
  )

  const isVisible = isMaintenanceAlert || isInfoBannerActive

  const handleDismiss = () => dismissBanner(String(settings?.bannerText))

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          aria-label='Системное уведомление'
          initial={{ filter: 'blur(4px)', opacity: 0 }}
          animate={{ filter: 'blur(0px)', opacity: 1 }}
          exit={{ filter: 'blur(4px)', opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className={cn(
            'w-full overflow-hidden select-none z-50 bg-nav text-center',
            'px-4 py-1 mx-auto flex items-center justify-between gap-4',
          )}
        >
          <div className='flex-1 flex items-center justify-center'>
            {isMaintenanceAlert && (
              <div
                className={cn('flex justify-center items-center gap-2', 'w-full py-2 px-4 text-sm')}
              >
                <TriangleAlert className='shrink-0 size-6 sm:size-7 text-destructive animate-pulse' />
                Режим технических работ активен. Приложение доступно только администраторам
              </div>
            )}

            {!isMaintenanceAlert && settings?.bannerText && (
              <BannerContent text={settings.bannerText} link={settings.bannerLink} />
            )}
          </div>

          {!isMaintenanceAlert && settings?.bannerText && (
            <button
              aria-label='Закрыть баннер'
              type='button'
              onClick={handleDismiss}
              className='p-1 rounded-full text-muted-foreground hover:text-foreground hover:bg-black/5 transition'
            >
              <X className='size-4' />
            </button>
          )}
        </motion.aside>
      )}
    </AnimatePresence>
  )
}
