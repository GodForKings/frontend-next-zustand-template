'use client'

import { type FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff, Loader2 } from 'lucide-react'

import { useSessionStore } from '@/entities/session'

import { PUBLIC_PAGES, showSuccess } from '@/shared'
import type { RegisterDto } from '@/shared/api/generated/data-contracts'
import { Button, Input, Label } from '@/shared/ui/shadcn'

import { useLoginMutation, useRegisterMutation } from '../api/queries'
import { type RegisterFormData, registerSchema } from '../model/types'

export const RegisterForm: FC = () => {
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
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: RegisterFormData) => {
    registerMutation(data satisfies RegisterDto, {
      onSuccess: () => {
        login(
          { email: data.email, password: data.password },
          {
            onSuccess: (loginRes) => {
              setUser(loginRes.data.user)
              showSuccess('Успешная регистрация и вход')
              redirect(PUBLIC_PAGES.MAIN, 'replace')
            },
            onError: () => {
              redirect(PUBLIC_PAGES.LOGIN)
            },
          },
        )
      },
    })
  }

  const isPending = isRegisterPending || isLoginPending

  return (
    <div className='w-full space-y-6'>
      <div className='space-y-2 text-center'>
        <h1 className='text-2xl font-bold tracking-tight text-foreground'>Регистрация</h1>
        <p className='text-sm text-muted-foreground'>Создание нового аккаунта</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <div className='space-y-2'>
          <Label htmlFor='register-name'>Имя</Label>

          <Input
            {...register('name')}
            id='register-name'
            type='text'
            autoComplete='name'
            variant='main'
            placeholder='Ваше имя'
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'register-name-error' : undefined}
          />

          {errors.name && (
            <p id='register-name-error' className='text-xs text-destructive'>
              {errors.name.message}
            </p>
          )}
        </div>

        <div className='space-y-2'>
          <Label htmlFor='register-email'>Электронная почта</Label>

          <Input
            {...register('email')}
            id='register-email'
            type='email'
            autoComplete='email'
            variant='main'
            placeholder='name@example.com'
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'register-email-error' : undefined}
          />

          {errors.email && (
            <p id='register-email-error' className='text-xs text-destructive'>
              {errors.email.message}
            </p>
          )}
        </div>

        <div className='space-y-2'>
          <Label htmlFor='register-password'>Пароль</Label>

          <div className='relative'>
            <Input
              {...register('password')}
              id='register-password'
              type={showPassword ? 'text' : 'password'}
              autoComplete='new-password'
              variant='main'
              placeholder='Минимум 8 символов'
              className='pr-9'
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? 'register-password-error' : undefined}
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
            <p id='register-password-error' className='text-xs text-destructive'>
              {errors.password.message}
            </p>
          )}
        </div>

        <Button type='submit' disabled={isPending} className='w-full'>
          {isPending ? <Loader2 className='size-4 animate-spin' /> : 'Зарегистрироваться'}
        </Button>

        <div className='flex items-center justify-center gap-1 text-sm text-muted-foreground pt-2'>
          <span>Уже есть аккаунт?</span>
          <Button asChild variant='link' size='sm' className='h-auto p-0 font-normal'>
            <Link href={PUBLIC_PAGES.LOGIN}>Войти</Link>
          </Button>
        </div>
      </form>
    </div>
  )
}
