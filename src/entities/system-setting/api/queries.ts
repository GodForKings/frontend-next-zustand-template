import { useQuery } from '@tanstack/react-query'

import { apiClient, SYSTEM_SETTING_QUERY_KEYS } from '@/shared'
import type { SystemSettingResponseDto } from '@/shared/api'

export const useSystemSettingsQuery = () => {
  return useQuery<SystemSettingResponseDto>({
    queryKey: SYSTEM_SETTING_QUERY_KEYS.maintenance(),
    queryFn: async () => {
      const { data } = await apiClient.systemSettingControllerGetMaintenanceStatus()
      return data
    },
    staleTime: 60 * 1000,
    refetchInterval: 5 * 60 * 1000,
    refetchOnWindowFocus: true,
  })
}

export const systemSettingKeys = SYSTEM_SETTING_QUERY_KEYS
