'use client'

import type { FC } from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import { useCountdown } from 'usehooks-ts'

import { PUBLIC_PAGES, showSuccess } from '@/shared'
import { Button } from '@/shared/ui/shadcn'

import { useForgotPasswordMutation } from '../api/queries'

interface ForgotPasswordSentProps {
  email: string
}

export const ForgotPasswordSent: FC<ForgotPasswordSentProps> = (props) => {
  const { email } = props

  const { mutate: forgotPassword, isPending } = useForgotPasswordMutation()
  const [count, { startCountdown, resetCountdown }] = useCountdown({
    countStart: 60,
    intervalMs: 1000,
  })

  useEffect(() => {
    startCountdown()
  }, [startCountdown])

  const handleResend = () => {
    forgotPassword(
      { email },
      {
        onSuccess: () => {
          resetCountdown()
          startCountdown()
          showSuccess('Инструкция отправлена повторно')
        },
      },
    )
  }

  return (
    <div className='w-full space-y-6 text-center'>
      <p className='text-sm text-muted-foreground leading-relaxed'>
        Ссылка для сброса пароля отправлена на{' '}
        <span className='font-semibold text-foreground'>{email}</span>. Пожалуйста, проверьте ваш
        почтовый ящик.
      </p>

      <div className='space-y-3'>
        <Button
          type='button'
          disabled={isPending || count > 0}
          onClick={handleResend}
          variant='outline'
          className='w-full'
        >
          {count > 0 ? `Повторить через ${count}с` : 'Отправить повторно'}
        </Button>

        <div className='pt-2'>
          <Button asChild variant='link' size='sm' className='h-auto p-0 font-normal'>
            <Link href={PUBLIC_PAGES.LOGIN}>Вернуться ко входу</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
