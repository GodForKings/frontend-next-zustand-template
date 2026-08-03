'use client'

import { type FC, useEffect } from 'react'
import { X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'

import { cn } from '@/shared'
import { Button } from '@/shared/ui/shadcn'

import { useDialogStore } from '../model/store'

export const Dialog: FC = () => {
  const { isOpen, content, className, closeDialog } = useDialogStore()

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeDialog()
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handler)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [isOpen, closeDialog])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'linear' }}
            className={cn('fixed inset-0 z-101 bg-black/30 backdrop-blur-xs')}
            onClick={closeDialog}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 16 }}
            transition={{ duration: 0.22, ease: 'anticipate' }}
            className={cn(
              'fixed left-1/2 top-1/2 z-102 -translate-x-1/2 -translate-y-1/2',
              'flex max-h-[calc(100dvh-1.5rem)] w-[calc(100vw-1rem)] flex-col overflow-hidden',
              'rounded-2xl border bg-background shadow-2xl',
              'sm:max-h-[calc(100dvh-2rem)] sm:w-[calc(100vw-2rem)]',
              'lg:w-[min(1100px,calc(100vw-3rem))]',
              className,
            )}
            onClick={(e) => e.stopPropagation()}
            role='dialog'
            aria-modal='true'
          >
            <div
              className={cn(
                'absolute right-3 top-3 z-10',
                'pointer-events-none sm:right-4 sm:top-4',
              )}
            >
              <Button
                type='button'
                variant='outline'
                size='icon'
                className='pointer-events-auto rounded-lg backdrop-blur'
                onClick={closeDialog}
                aria-label='Закрыть диалог'
              >
                <X className='size-4' />
              </Button>
            </div>

            <div className='min-h-0 flex-1 overflow-y-auto'>{content}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
