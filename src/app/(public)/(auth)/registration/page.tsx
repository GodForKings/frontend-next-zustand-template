import type { Metadata } from 'next'

import { RegisterForm } from '@/features'

import { REGISTRATION_PAGE_METADATA } from '@/shared'

export const metadata: Metadata = REGISTRATION_PAGE_METADATA

export default function RegisterPage() {
  return <RegisterForm />
}
