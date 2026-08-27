import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { apiClient } from '@/shared/api'
import type {
  ForgotPasswordDto,
  LoginDto,
  RegisterDto,
  ResetPasswordDto,
} from '@/shared/api/generated/data-contracts'

export const authKeys = {
  all: ['auth'] as const,
  profile: () => [...authKeys.all, 'profile'] as const,
  validateResetToken: (token: string) => [...authKeys.all, 'validate-reset-token', token] as const,
}

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (data: LoginDto) => apiClient.authControllerLogin(data),
  })
}

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: (data: RegisterDto) => apiClient.authControllerRegister(data),
  })
}

export const useLogoutMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => apiClient.authControllerLogout(),
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: authKeys.all })
    },
  })
}

export const useForgotPasswordMutation = () => {
  return useMutation({
    mutationFn: (data: ForgotPasswordDto) => apiClient.authControllerForgotPassword(data),
  })
}

export const useValidateResetTokenQuery = (token: string, enabled = true) => {
  return useQuery({
    queryKey: authKeys.validateResetToken(token),
    queryFn: async () => {
      const { data } = await apiClient.authControllerValidateResetToken({ token })
      return data
    },
    retry: false,
    enabled: Boolean(token) && enabled,
    staleTime: 0,
  })
}

export const useResetPasswordMutation = () => {
  return useMutation({
    mutationFn: (data: ResetPasswordDto) => apiClient.authControllerResetPassword(data),
  })
}

export const useProfileQuery = (enabled = true) => {
  return useQuery({
    queryKey: authKeys.profile(),
    queryFn: async () => {
      const response = await apiClient.authControllerGetMe()
      return response.data
    },
    retry: false,
    enabled,
    staleTime: 5 * 60 * 1000,
  })
}
