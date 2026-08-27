import type { PropsWithChildren } from 'react'

import { cn } from '@/shared'
import { Card } from '@/shared/ui/shadcn'

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <main
      className={cn(
        'isolate relative min-h-dvh w-full overflow-hidden',
        'flex items-center justify-center p-4 sm:p-6',
        'bg-background',
      )}
    >
      {/* Фоновые атмосферные мерцания */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 -z-10 overflow-hidden'
      >
        {/* Верхнее свечение */}
        <div
          className={cn(
            'absolute -top-32 left-1/2 -translate-x-1/2',
            'h-96 w-96 sm:h-140 sm:w-140 rounded-full',
            'bg-linear-to-b from-primary/30 via-primary/10 to-transparent',
            'blur-3xl animate-pulse duration-1000',
          )}
        />

        {/* Левое боковое свечение */}
        <div
          className={cn(
            'absolute top-1/3 -left-24',
            'size-72 sm:size-96 rounded-full',
            'bg-linear-to-r from-primary/20 via-foreground/10 to-transparent',
            'blur-3xl animate-pulse duration-1000',
          )}
        />

        {/* Правое нижнее свечение */}
        <div
          className={cn(
            'absolute -bottom-20 -right-20',
            'size-80 sm:size-110 rounded-full',
            'bg-linear-to-l from-primary/25 via-foreground/10 to-transparent',
            'blur-3xl animate-pulse duration-1000',
          )}
        />
      </div>

      {/* Контейнер карточки с эффектом легкого ореола */}
      <div className='relative z-10 w-full max-w-sm sm:max-w-md'>
        <div
          aria-hidden='true'
          className={cn(
            'absolute -inset-0.5 rounded-3xl',
            'bg-linear-to-b from-primary/25 via-border/40 to-transparent',
            'blur-md opacity-70',
          )}
        />

        <Card
          className={cn(
            'relative w-full rounded-2xl',
            'p-6 sm:p-8',
            'border-border/80 bg-card/90 backdrop-blur-xl',
            'shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.5)]',
          )}
        >
          {children}
        </Card>
      </div>
    </main>
  )
}
