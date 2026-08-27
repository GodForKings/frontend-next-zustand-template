import type { FC } from 'react'
import { Loader } from 'lucide-react'

import { cn } from '@/shared'

interface LoadingDotsProps {
  className?: string
  size?: 'sm' | 'default' | 'lg'
}

export const LoadingDots: FC<LoadingDotsProps> = ({ className, size = 'default' }) => {
  const sizeClasses = {
    sm: 'size-6',
    default: 'size-10',
    lg: 'size-14',
  }

  return (
    <div
      aria-label='Загрузка...'
      role='status'
      className={cn('relative flex items-center justify-center', className)}
    >
      {/* Деликатный фоновый светящийся ореол */}
      <div
        aria-hidden='true'
        className={cn(
          'absolute pointer-events-none rounded-full',
          'size-24 bg-primary/15 blur-xl animate-pulse',
        )}
      />

      {/* Внешнее статичное ультратонкое кольцо */}
      <div className={cn('rounded-full border border-border/50', sizeClasses[size])} />

      {/* Вращающаяся изящная дуга с градиентным следом */}
      <div
        className={cn(
          'absolute rounded-full border-t-2 border-r border-transparent border-t-foreground border-r-foreground/40',
          'animate-spin duration-1000',
          sizeClasses[size],
        )}
      />

      <Loader className='text-foreground/70 absolute rounded-full animate-spin' />
    </div>
  )
}
