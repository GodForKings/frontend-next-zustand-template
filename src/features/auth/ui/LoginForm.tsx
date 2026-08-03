'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff, Loader } from 'lucide-react'

import { useSessionStore } from '@/entities/session'

import { cn, PUBLIC_PAGES, showSuccess } from '@/shared'
import { Button, Input, Label } from '@/shared/ui/shadcn'

import { useLoginMutation } from '../api/queries'
import { type LoginFormData, loginSchema } from '../model/types'

export const LoginForm = () => {
  const router = useRouter()
  const setUser = useSessionStore((state) => state.setUser)
  const { mutate: login, isPending } = useLoginMutation()
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: LoginFormData) => {
    login(data, {
      onSuccess: (res) => {
        setUser(res.data.user)
        showSuccess('Успешный вход')
        router.push(PUBLIC_PAGES.MAIN)
      },
    })
  }

  return (
    <div
      className={cn(
        'flex min-h-dvh w-full flex-col items-center justify-center',
        'bg-background font-ysabeau',
      )}
    >
      <div className={cn('flex w-full max-w-125 flex-col items-center', 'px-4')}>
        <h2 className={cn('mb-12 text-center', 'text-[40px] font-semibold text-foreground')}>
          Авторизация
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className={cn('flex w-full flex-col items-center')}>
          <div className={cn('relative mb-8 flex w-full max-w-98.75 flex-col')}>
            <Label className={cn('mb-2 text-left', 'text-2xl font-semibold text-foreground')}>
              Эл. почта
            </Label>

            <Input
              {...register('email')}
              type='email'
              variant='auth'
              placeholder='Введите эл. почту'
              aria-invalid={!!errors.email}
            />

            {errors.email && (
              <span
                className={cn('absolute -bottom-6 left-0', 'text-xs font-medium text-destructive')}
              >
                {errors.email.message}
              </span>
            )}
          </div>

          <div className={cn('relative mb-12 flex w-full max-w-98.75 flex-col')}>
            <Label className={cn('mb-2 text-left', 'text-2xl font-semibold text-foreground')}>
              Пароль
            </Label>

            <div className={cn('relative w-full')}>
              <Input
                {...register('password')}
                type={showPassword ? 'text' : 'password'}
                variant='auth'
                placeholder='Введите пароль'
                className={cn('pr-10')}
                aria-invalid={!!errors.password}
              />
              <Button
                type='button'
                variant='ghost'
                size='icon-sm'
                onClick={() => setShowPassword(!showPassword)}
                className={cn(
                  'absolute right-1 top-1',
                  'text-muted-foreground transition-colors hover:bg-transparent hover:text-foreground',
                )}
              >
                {showPassword ? <EyeOff className='size-6' /> : <Eye className='size-6' />}
              </Button>
            </div>

            {errors.password && (
              <span
                className={cn('absolute -bottom-6 left-0', 'text-xs font-medium text-destructive')}
              >
                {errors.password.message}
              </span>
            )}
          </div>

          <div className={cn('mt-2 flex w-full flex-col items-center gap-8')}>
            <Button
              type='submit'
              disabled={isPending}
              className={cn('h-9 w-36.5', 'rounded-full', 'text-2xl font-semibold')}
            >
              {isPending ? <Loader className='animate-spin' /> : 'Войти'}
            </Button>

            <div
              className={cn(
                'flex w-full max-w-98.75 flex-col items-center justify-between gap-4',
                'sm:flex-row',
              )}
            >
              <Button
                type='button'
                variant='link'
                onClick={() => router.push(PUBLIC_PAGES.REG)}
                className={cn(
                  'h-auto p-0 text-xl font-semibold text-foreground',
                  'hover:no-underline hover:opacity-70',
                )}
              >
                Зарегистрироваться
              </Button>

              <Button
                type='button'
                variant='link'
                className={cn(
                  'h-auto p-0 text-xl font-semibold text-foreground',
                  'hover:no-underline hover:opacity-70',
                )}
              >
                Восстановить пароль
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
