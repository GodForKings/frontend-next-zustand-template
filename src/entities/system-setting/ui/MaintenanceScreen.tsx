import type { FC } from 'react'
import { Cog, MonitorCog } from 'lucide-react'

import { cn } from '@/shared'

export const MaintenanceScreen: FC = () => {
  return (
    <main
      aria-label='Режим технических работ'
      className={cn(
        'min-h-dvh w-full p-4 lg:p-6 bg-background relative overflow-hidden',
        'grid place-content-center',
        'text-center select-none',
      )}
    >
      <div
        className={cn(
          'max-w-xl w-full shadow',
          'border border-border/30 bg-card rounded-3xl',
          'flex flex-col items-center gap-4',
          'p-6 md:p-8 lg:p-10',
        )}
      >
        <div className={cn('size-20 rounded-xl shadow bg-accent', 'grid place-items-center')}>
          <MonitorCog className='size-12 animate-pulse shrink-0' />
        </div>

        <h1 className='text-xl md:text-2xl xl:text-3xl font-semibold tracking-tight'>
          Технические работы
        </h1>

        <p className='text-sm md:text-base text-muted-foreground text-balance'>
          Мы проводим плановое обновление платформы, чтобы сделать сервис ещё лучше и быстрее.
          Приносим извинения за временные неудобства.
        </p>

        <div
          className={cn(
            'flex items-center gap-3',
            'mt-4 px-4 py-2 bg-accent',
            'text-xs md:text-sm',
            'rounded-full border border-border/50 shadow',
          )}
        >
          <Cog className='size-5 animate-spin' />
          Сервис скоро возобновит работу
        </div>
      </div>
    </main>
  )
}
