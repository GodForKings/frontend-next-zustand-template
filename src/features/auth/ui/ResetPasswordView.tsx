'use client'

import type { FC } from 'react'

import { ForgotPasswordForm } from './ForgotPasswordForm'
import { ResetPasswordForm } from './ResetPasswordForm'

interface ResetPasswordViewProps {
  token?: string
}

export const ResetPasswordView: FC<ResetPasswordViewProps> = (props) => {
  const { token } = props

  return <>{token ? <ResetPasswordForm token={token} /> : <ForgotPasswordForm />}</>
}
