'use client'

import type { FC, ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'

import { SessionInitializer } from '@/features'

import { cn, Dialog, Modal, ToastCard } from '@/shared'

import { ReactQueryProvider } from './ReactQueryProvider'

interface PlatformContainerProps {
  children: ReactNode
  className?: string
}
export const PlatformContainer: FC<PlatformContainerProps> = (props) => {
  const { children, className } = props

  return (
    <ReactQueryProvider>
      <SessionInitializer />

      <div className={cn('relative mx-auto w-full', className)}>{children}</div>
      {/* Глобальная modal */}
      <Modal />
      {/* Глобальный dialog */}
      <Dialog />
      {/* Глобальные тосты */}
      <Toaster position='top-center'>{(t) => <ToastCard t={t} />}</Toaster>
    </ReactQueryProvider>
  )
}
