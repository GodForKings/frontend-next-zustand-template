'use client'

import { type FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff, Loader2, LoaderCircle } from 'lucide-react'

import { PUBLIC_PAGES, showSuccess } from '@/shared'
import { Button, Input, Label } from '@/shared/ui/shadcn'

import { useResetPasswordMutation, useValidateResetTokenQuery } from '../api/queries'
import { type ResetPasswordFormData, resetPasswordSchema } from '../model/types'
import { PasswordResetFailed } from './PasswordResetFailed'

interface ResetPasswordFormProps {
  token: string
}

export const ResetPasswordForm: FC<ResetPasswordFormProps> = (props) => {
  const { token } = props

  const {
    data: validationData,
    isLoading: isValidating,
    isError: isValidationError,
  } = useValidateResetTokenQuery(token)
  const { mutate: resetPassword, isPending: isResetting } = useResetPasswordMutation()

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit = (data: ResetPasswordFormData) => {
    resetPassword(
      { token, password: data.password },
      {
        onSuccess: () => {
          showSuccess('Пароль успешно изменен')
          redirect(PUBLIC_PAGES.LOGIN, 'replace')
        },
      },
    )
  }

  if (isValidating) {
    return (
      <div className='flex flex-col items-center justify-center gap-3 text-center py-10'>
        <LoaderCircle className='size-8 animate-spin text-muted-foreground' />
        <p className='text-sm text-muted-foreground'>Проверка ссылки сброса пароля...</p>
      </div>
    )
  }

  if (isValidationError || !validationData?.success) {
    return <PasswordResetFailed />
  }

  return (
    <div className='w-full space-y-6'>
      <div className='space-y-2 text-center'>
        <h1 className='text-2xl font-bold tracking-tight text-foreground'>Новый пароль</h1>
        <p className='text-sm text-muted-foreground'>Установка нового пароля для аккаунта</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <div className='space-y-2'>
          <Label htmlFor='new-password'>Новый пароль</Label>

          <div className='relative'>
            <Input
              {...register('password')}
              id='new-password'
              type={showPassword ? 'text' : 'password'}
              autoComplete='new-password'
              variant='main'
              placeholder='Минимум 8 символов'
              className='pr-9'
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? 'new-password-error' : undefined}
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
            <p id='new-password-error' className='text-xs text-destructive'>
              {errors.password.message}
            </p>
          )}
        </div>

        <div className='space-y-2'>
          <Label htmlFor='confirm-new-password'>Подтвердите пароль</Label>

          <div className='relative'>
            <Input
              {...register('confirmPassword')}
              id='confirm-new-password'
              type={showConfirmPassword ? 'text' : 'password'}
              autoComplete='new-password'
              variant='main'
              placeholder='Повторите новый пароль'
              className='pr-9'
              aria-invalid={!!errors.confirmPassword}
              aria-describedby={errors.confirmPassword ? 'confirm-password-error' : undefined}
            />

            <Button
              type='button'
              variant='ghost'
              size='icon-sm'
              aria-label={
                showConfirmPassword
                  ? 'Скрыть подтверждение пароля'
                  : 'Показать подтверждение пароля'
              }
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className='absolute right-0 top-1/2 -translate-y-1/2'
            >
              {showConfirmPassword ? <EyeOff className='size-4' /> : <Eye className='size-4' />}
            </Button>
          </div>

          {errors.confirmPassword && (
            <p id='confirm-password-error' className='text-xs text-destructive'>
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <Button type='submit' disabled={isResetting} className='w-full'>
          {isResetting ? <Loader2 className='size-4 animate-spin' /> : 'Сохранить пароль'}
        </Button>

        <div className='text-center pt-2'>
          <Button asChild variant='link' size='sm' className='h-auto p-0 font-normal'>
            <Link href={PUBLIC_PAGES.LOGIN}>Отмена</Link>
          </Button>
        </div>
      </form>
    </div>
  )
}
