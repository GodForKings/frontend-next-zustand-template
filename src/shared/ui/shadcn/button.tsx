import type { ComponentProps } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'

import { cn } from '@/shared'

const buttonVariants = cva(
  cn(
    'inline-flex items-center justify-center font-medium whitespace-nowrap select-none',
    'rounded-lg border border-transparent transition-colors duration-150 outline-none',
    'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    '[&_svg]:pointer-events-none [&_svg]:shrink-0',
  ),
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm',
        outline: 'border-border bg-background text-foreground hover:bg-muted shadow-sm',
        ghost: 'text-foreground hover:bg-muted',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-sm',
        link: 'text-primary underline-offset-4 hover:underline p-0 h-auto',
      },
      size: {
        default: 'h-9 px-4 py-2 text-sm gap-2 [&_svg]:size-4',
        sm: 'h-8 px-3 text-xs gap-1.5 rounded-md [&_svg]:size-3.5',
        lg: 'h-10 px-6 text-base gap-2 rounded-xl [&_svg]:size-4.5',
        icon: 'size-9 rounded-lg [&_svg]:size-4',
        'icon-sm': 'size-8 rounded-md [&_svg]:size-3.5',
        'icon-lg': 'size-10 rounded-xl [&_svg]:size-4.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : 'button'

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
