'use client'

import { useEffect } from 'react'
import { AlertTriangle } from 'lucide-react'

import { cn } from '@/shared'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-8',
        'min-h-dvh p-6 container mx-auto text-center',
      )}
    >
      <div className={cn('flex flex-col items-center gap-4')}>
        <div
          className={cn(
            'flex items-center justify-center',
            'size-30 rounded-full bg-destructive/10 shadow-sm border border-destructive/20',
          )}
        >
          <AlertTriangle className='size-14 text-destructive opacity-80' strokeWidth={1.5} />
        </div>

        <h1 className='text-3xl font-thin tracking-tight sm:text-4xl'>Ошибка</h1>

        <p className='text-muted-foreground max-w-100 text-sm sm:text-base'>
          Что-то пошло не так. Попробуйте обновить страницу.
        </p>
      </div>

      <button
        onClick={() => reset()}
        className={cn(
          'relative z-10 px-8 py-3',
          'flex items-center justify-center',
          'text-sm font-medium transition-all',
          'bg-primary text-primary-foreground rounded-full',
          'hover:bg-primary/90 hover:shadow-md hover:scale-105',
          'active:scale-95 active:opacity-80',
        )}
      >
        Попробовать снова
      </button>
    </div>
  )
}
