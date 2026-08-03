import type { FC } from 'react'

import { cn } from '@/shared'

interface LoadingDotsProps {
  className?: string
}
export const LoadingDots: FC<LoadingDotsProps> = (props) => {
  const { className } = props

  return (
    <div className={cn('flex items-center gap-1.5', className)}>
      <div className='size-2.5 animate-bounce rounded-full bg-primary/60 [animation-delay:-0.3s]' />
      <div className='size-2.5 animate-bounce rounded-full bg-primary/60 [animation-delay:-0.15s]' />
      <div className='size-2.5 animate-bounce rounded-full bg-primary/60' />
    </div>
  )
}
