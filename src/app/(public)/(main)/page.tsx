import type { Metadata } from 'next'

import { MAIN_PAGE_METADATA } from '@/shared'

export const metadata: Metadata = MAIN_PAGE_METADATA

export default function MainPage() {
  return (
    <main className='min-h-dvh flex flex-col items-center justify-center p-6 text-center'>
      <div className='max-w-md w-full p-8 rounded-2xl border border-border bg-card shadow-sm space-y-4'>
        <h1 className='text-2xl font-bold tracking-tight text-foreground'>
          Next.js + Zustand Template
        </h1>

        <p className='text-sm text-muted-foreground'>
          Шаблон настроен: FSD архитектура, Zustand, TanStack Query, Schema.org JSON-LD, нейтральная
          тема и Edge Middleware.
        </p>
      </div>
    </main>
  )
}
