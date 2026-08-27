'use client'

import { type FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { redirect, useSearchParams } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff, Loader2 } from 'lucide-react'

import { useSessionStore } from '@/entities/session'

import { PUBLIC_PAGES, showSuccess } from '@/shared'
import { Button, Input, Label } from '@/shared/ui/shadcn'

import { useLoginMutation } from '../api/queries'
import { type LoginFormData, loginSchema } from '../model/types'

export const LoginForm: FC = () => {
  const searchParams = useSearchParams()

  const setUser = useSessionStore((state) => state.setUser)
  const { mutate: login, isPending } = useLoginMutation()
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: LoginFormData) => {
    login(data, {
      onSuccess: (res) => {
        setUser(res.data.user)
        showSuccess('Успешный вход')
        redirect(searchParams.get('redirect') ?? PUBLIC_PAGES.MAIN, 'replace')
      },
    })
  }

  return (
    <div className='w-full space-y-6'>
      <div className='space-y-2 text-center'>
        <h1 className='text-2xl font-bold tracking-tight text-foreground'>Авторизация</h1>
        <p className='text-sm text-muted-foreground'>Вход в персональный кабинет</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <div className='space-y-2'>
          <Label htmlFor='login-email'>Электронная почта</Label>

          <Input
            {...register('email')}
            id='login-email'
            type='email'
            autoComplete='email'
            variant='main'
            placeholder='name@example.com'
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'login-email-error' : undefined}
          />

          {errors.email && (
            <p id='login-email-error' className='text-xs text-destructive'>
              {errors.email.message}
            </p>
          )}
        </div>

        <div className='space-y-2'>
          <div className='flex items-center justify-between'>
            <Label htmlFor='login-password'>Пароль</Label>
            <Button asChild variant='link' size='sm' className='h-auto p-0 text-xs font-normal'>
              <Link href={PUBLIC_PAGES.RESET_PASSWORD}>Забыли пароль?</Link>
            </Button>
          </div>

          <div className='relative'>
            <Input
              {...register('password')}
              id='login-password'
              type={showPassword ? 'text' : 'password'}
              autoComplete='current-password'
              variant='main'
              placeholder='Введите пароль'
              className='pr-9'
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? 'login-password-error' : undefined}
            />

            <Button
              type='button'
              variant='ghost'
              size='icon-sm'
              aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
              onClick={() => setShowPassword(!showPassword)}
              className='absolute right-0 top-1/2 -translate-y-1/2'
            >
              {showPassword ? <EyeOff className='size-4' /> : <Eye className='size-4' />}
            </Button>
          </div>

          {errors.password && (
            <p id='login-password-error' className='text-xs text-destructive'>
              {errors.password.message}
            </p>
          )}
        </div>

        <Button type='submit' disabled={isPending} className='w-full'>
          {isPending ? <Loader2 className='size-4 animate-spin' /> : 'Войти'}
        </Button>

        <div className='flex items-center justify-center gap-1 text-sm text-muted-foreground pt-2'>
          <span>Еще нет учетной записи?</span>

          <Button asChild variant='link' size='sm' className='h-auto p-0 font-normal'>
            <Link href={PUBLIC_PAGES.REG}>Зарегистрироваться</Link>
          </Button>
        </div>
      </form>
    </div>
  )
}
