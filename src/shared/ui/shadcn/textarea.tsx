import type { ComponentProps } from 'react'

import { cn } from '@/shared'

function Textarea({ className, ...props }: ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot='textarea'
      className={cn(
        'bg-background text-foreground placeholder:text-muted-foreground/70',
        'min-h-20 w-full rounded-lg border border-input px-3 py-2 text-sm shadow-xs',
        'outline-none transition-colors duration-150 resize-y',
        'focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/20',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'aria-invalid:border-destructive aria-invalid:ring-destructive/20',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }
