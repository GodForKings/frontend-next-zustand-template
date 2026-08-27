'use client'

import type { FC } from 'react'
import Link from 'next/link'

import { PUBLIC_PAGES } from '@/shared'
import { Button } from '@/shared/ui/shadcn'

export const PasswordResetFailed: FC = () => {
  return (
    <div className='w-full space-y-6 text-center'>
      <div className='space-y-2'>
        <h2 className='text-2xl font-bold tracking-tight text-foreground'>
          Ссылка недействительна
        </h2>

        <p className='text-sm text-muted-foreground leading-relaxed'>
          Срок действия ссылки истек или она уже была использована ранее.
        </p>
      </div>

      <Button asChild className='w-full'>
        <Link href={PUBLIC_PAGES.RESET_PASSWORD}>Запросить повторно</Link>
      </Button>
    </div>
  )
}
