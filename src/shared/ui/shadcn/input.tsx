import type { ComponentProps } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/shared'

const inputVariants = cva(
  cn(
    'w-full min-w-0 bg-transparent outline-none select-none',
    'transition-all duration-300 ease-out',
    'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40',
  ),
  {
    variants: {
      variant: {
        default: cn(
          'h-10 rounded-xl border border-input/80 bg-background/50 px-3.5 py-2',
          'text-sm font-normal text-foreground placeholder:text-muted-foreground/60 shadow-xs',
          'focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/20',
          'aria-invalid:border-destructive aria-invalid:ring-destructive/20',
        ),
        main: cn(
          'h-11 rounded-none border-b border-border/70 bg-transparent px-0 py-2.5',
          'text-base font-normal tracking-wide text-foreground placeholder:text-muted-foreground/45 shadow-none',
          'focus-visible:border-foreground focus-visible:ring-0',
          'aria-invalid:border-destructive aria-invalid:text-destructive',
        ),
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface InputProps
  extends Omit<ComponentProps<'input'>, 'size'>, VariantProps<typeof inputVariants> {}

function Input({ className, variant, type, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(inputVariants({ variant, className }))}
      {...props}
    />
  )
}

export { Input, inputVariants }
