import type { Metadata } from 'next'

import { LoginForm } from '@/features'

import { LOGIN_PAGE_METADATA } from '@/shared'

export const metadata: Metadata = LOGIN_PAGE_METADATA

export default function LoginPage() {
  return <LoginForm />
}
