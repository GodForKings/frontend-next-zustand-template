import type { ComponentProps } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/shared'

const inputVariants = cva(
  'w-full min-w-0 bg-transparent transition-[color,box-shadow] outline-none file:inline-flex file:border-0 file:bg-transparent file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'h-9 rounded-md border border-input px-2.5 py-1 text-base shadow-xs file:h-7 file:text-sm file:text-foreground placeholder:text-muted-foreground/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40',
        auth: 'h-auto border-b border-border text-[25px] text-foreground placeholder:text-muted-foreground/60 pb-2 rounded-none focus-visible:border-foreground focus-visible:ring-0 shadow-none px-0 aria-invalid:border-destructive aria-invalid:text-destructive',
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

export { Input }
