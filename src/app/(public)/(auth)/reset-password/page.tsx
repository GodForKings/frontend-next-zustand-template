import type { ReactNode } from 'react'
import type { Metadata } from 'next'

import { ResetPasswordView } from '@/features'

import { RESET_PASSWORD_PAGE_METADATA } from '@/shared'

export const metadata: Metadata = RESET_PASSWORD_PAGE_METADATA

interface ResetPasswordPageProps {
  searchParams: Promise<{ token?: string }>
}

export default async function ResetPasswordPage({
  searchParams,
}: ResetPasswordPageProps): Promise<ReactNode> {
  const awaitedParams = await searchParams
  const token = typeof awaitedParams?.token === 'string' ? awaitedParams.token : undefined

  return <ResetPasswordView token={token} />
}
