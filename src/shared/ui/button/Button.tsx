'use client'

import type { ButtonHTMLAttributes, FC, ReactNode } from 'react'

import { cn } from '@/shared'

type ButtonVariant = 'primary' | 'secondary' | 'outline'
type ButtonSize = 'lg' | 'md'

interface ButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'className' | 'children'
> {
  children: ReactNode
  className?: string
  variant?: ButtonVariant
  size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    children,
    className,
    variant = 'primary',
    size = 'lg',
    disabled = false,
    ...anotherProps
  } = props
  /** Общие стили */
  const base = cn(
    'transition select-none will-change-transform',
    'flex justify-center items-center gap-2',
    'font-semibold tracking-wider',
    'w-full relative z-2',
    'active:translate-y-px hover:translate-y-px',
    'active:scale-98 hover:scale-101 focus:outline-none',
  )
  /** Размеры */
  const sizes = cn(size === 'lg' ? 'h-13 text-base/5 rounded-2xl' : 'h-7 text-xs rounded-full')
  /** Три варианта */
  const variants = {
    primary: cn(
      'text-white',
      'bg-[linear-gradient(270deg,#111111_0%,#000_50%,#333333_100%)]',
      'shadow hover:opacity-90',
    ),
    secondary: cn(
      'border border-transparent text-black',
      'bg-black/10 backdrop-blur-xl',
      'shadow hover:bg-black/15',
    ),
    outline: cn(
      'text-black',
      'bg-black/10 backdrop-blur-xl',
      'border-[1.5px] border-[#111333]',
      'shadow hover:bg-black/15',
    ),
  } as const
  /** Общее стили для disabled */
  const disabledStyles = cn(
    'pointer-events-none shadow-none',
    'bg-black/10 text-black/40 backdrop-blur-xl',
    'border-transparent transform-none',
  )

  return (
    <button
      disabled={disabled}
      className={cn(base, sizes, variants[variant], className, disabled && disabledStyles)}
      {...anotherProps}
    >
      {children}
    </button>
  )
}
