'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff, Loader } from 'lucide-react'

import { useSessionStore } from '@/entities/session'

import { cn, PUBLIC_PAGES, RegisterDto } from '@/shared'
import { showSuccess } from '@/shared/components/toast'
import { Button, Input, Label } from '@/shared/ui/shadcn'

import { useLoginMutation, useRegisterMutation } from '../api/queries'
import { type RegisterFormData, registerSchema } from '../model/types'

export const RegisterForm = () => {
  const router = useRouter()
  const setUser = useSessionStore((state) => state.setUser)
  const { mutate: registerMutation, isPending: isRegisterPending } = useRegisterMutation()
  const { mutate: login, isPending: isLoginPending } = useLoginMutation()
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = (data: RegisterFormData) => {
    registerMutation(data as RegisterDto, {
      onSuccess: () => {
        login(
          { email: data.email, password: data.password },
          {
            onSuccess: (loginRes) => {
              setUser(loginRes.data.user)
              showSuccess('Успешная регистрация и вход')
              router.push(PUBLIC_PAGES.MAIN)
            },
            onError: () => {
              router.push(PUBLIC_PAGES.LOGIN)
            },
          },
        )
      },
    })
  }

  const isPending = isRegisterPending || isLoginPending

  return (
    <div
      className={cn('flex flex-col items-center justify-center', 'bg-background min-h-dvh w-full')}
    >
      <div className={cn('flex w-full max-w-125 flex-col items-center', 'px-4')}>
        <h2 className={cn('mb-12 text-center', 'text-[40px] font-semibold text-foreground')}>
          Регистрация
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className={cn('flex w-full flex-col items-center')}>
          <div className={cn('relative mb-8 flex w-full max-w-98.75 flex-col')}>
            <Label className={cn('mb-2 text-left', 'text-2xl font-semibold text-foreground')}>
              Имя
            </Label>

            <Input
              {...register('name')}
              type='text'
              variant='auth'
              placeholder='Введите имя'
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <span
                className={cn('absolute -bottom-6 left-0', 'text-xs font-medium text-destructive')}
              >
                {errors.name.message}
              </span>
            )}
          </div>

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
              className={cn('h-9 w-fit min-w-36.5', 'px-6', 'text-2xl font-semibold')}
            >
              {isPending ? <Loader className='animate-spin' /> : 'Зарегистрироваться'}
            </Button>

            <Button
              type='button'
              variant='link'
              onClick={() => router.push(PUBLIC_PAGES.LOGIN)}
              className={cn(
                'h-auto p-0 text-xl font-semibold text-foreground',
                'hover:no-underline hover:opacity-70',
              )}
            >
              Уже зарегистрированы? Войти
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
