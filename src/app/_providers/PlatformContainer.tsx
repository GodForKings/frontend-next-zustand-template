'use client'

import type { FC, PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast'

import { Dialog, Modal, ToastCard } from '@/shared'

import { MaintenanceGuard } from './MaintenanceGuard'
import { ReactQueryProvider } from './ReactQueryProvider'
import { SessionInitializer } from './SessionInitializer'

export const PlatformContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReactQueryProvider>
      <SessionInitializer />

      <MaintenanceGuard>
        <main className='relative mx-auto w-full'>{children}</main>
      </MaintenanceGuard>

      {/* Глобальная modal */}
      <Modal />
      {/* Глобальный dialog */}
      <Dialog />
      {/* Глобальные тосты */}
      <Toaster position='top-center'>{(t) => <ToastCard t={t} />}</Toaster>
    </ReactQueryProvider>
  )
}
