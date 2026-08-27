'use client'

import type { FC, PropsWithChildren } from 'react'

import { useSessionStore } from '@/entities/session'
import { MaintenanceScreen, SystemBanner, useSystemSettingsQuery } from '@/entities/system-setting'

import Loading from '../loading'

export const MaintenanceGuard: FC<PropsWithChildren> = ({ children }) => {
  const user = useSessionStore((state) => state.user)
  const isSessionLoading = useSessionStore((state) => state.isSessionLoading)
  const { data: settings, isPending: isSettingsLoading } = useSystemSettingsQuery()

  const isAdmin = user?.role === 'ADMIN'

  if (isSessionLoading || isSettingsLoading) {
    return (
      <div className='min-h-dvh w-full grid place-content-center'>
        <Loading />
      </div>
    )
  }

  if (settings?.maintenanceMode && !isAdmin) {
    return <MaintenanceScreen />
  }

  return (
    <>
      <SystemBanner settings={settings} isAdmin={isAdmin} />

      {children}
    </>
  )
}
