'use client'

import { type FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'

import { PUBLIC_PAGES, showSuccess } from '@/shared'
import { Button, Input, Label } from '@/shared/ui/shadcn'

import { useForgotPasswordMutation } from '../api/queries'
import { type ForgotPasswordFormData, forgotPasswordSchema } from '../model/types'
import { ForgotPasswordSent } from './ForgotPasswordSent'

export const ForgotPasswordForm: FC = () => {
  const { mutate: forgotPassword, isPending } = useForgotPasswordMutation()
  const [submittedEmail, setSubmittedEmail] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = (data: ForgotPasswordFormData) => {
    forgotPassword(data, {
      onSuccess: () => {
        setSubmittedEmail(data.email)
        showSuccess('Инструкция по восстановлению пароля отправлена')
      },
    })
  }

  return (
    <div className='w-full space-y-6'>
      <div className='space-y-2 text-center'>
        <h1 className='text-2xl font-bold tracking-tight text-foreground'>Сброс пароля</h1>

        <p className='text-sm text-muted-foreground'>Восстановление доступа к аккаунту</p>
      </div>

      {submittedEmail ? (
        <ForgotPasswordSent email={submittedEmail} />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
          <div className='space-y-2'>
            <Label htmlFor='forgot-email'>Электронная почта</Label>

            <Input
              {...register('email')}
              id='forgot-email'
              type='email'
              autoComplete='email'
              variant='main'
              placeholder='name@example.com'
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'forgot-email-error' : undefined}
            />

            {errors.email && (
              <p id='forgot-email-error' className='text-xs text-destructive'>
                {errors.email.message}
              </p>
            )}
          </div>

          <Button type='submit' disabled={isPending} className='w-full'>
            {isPending ? <Loader2 className='size-4 animate-spin' /> : 'Получить ссылку'}
          </Button>

          <div className='text-center pt-2'>
            <Button asChild variant='link' size='sm' className='h-auto p-0 font-normal'>
              <Link href={PUBLIC_PAGES.LOGIN}>Вернуться ко входу</Link>
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}
