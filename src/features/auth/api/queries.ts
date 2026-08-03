import { useMutation, useQuery } from '@tanstack/react-query'

import { apiClient } from '@/shared/api'
import type { LoginDto, RegisterDto } from '@/shared/api/generated/data-contracts'

export const authKeys = {
  all: ['auth'] as const,
  profile: () => [...authKeys.all, 'profile'] as const,
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
  return useMutation({
    mutationFn: () => apiClient.authControllerLogout(),
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
