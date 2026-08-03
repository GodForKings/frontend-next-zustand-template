import { Metadata } from 'next'
import Link from 'next/link'
import { RouteOff } from 'lucide-react'

import { cn } from '@/shared'

export const metadata: Metadata = {
  title: 'Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
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
            'size-30 rounded-full bg-muted/50 shadow-sm border',
          )}
        >
          <RouteOff className='size-14 text-muted-foreground opacity-80' strokeWidth={1.5} />
        </div>

        <h1 className='text-3xl font-thin tracking-tight sm:text-4xl'>404</h1>

        <p className='text-muted-foreground max-w-100 text-sm sm:text-base'>Заблудились.</p>
      </div>

      <Link
        href={'/'}
        className={cn(
          'relative z-10 px-8 py-3',
          'flex items-center justify-center',
          'text-sm font-medium transition-all',
          'bg-primary text-primary-foreground rounded-full',
          'hover:bg-primary/90 hover:shadow-md hover:scale-105',
          'active:scale-95 active:opacity-80',
        )}
      >
        Return Main
      </Link>
    </div>
  )
}
