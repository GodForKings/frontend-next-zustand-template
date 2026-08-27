export const SYSTEM_SETTING_QUERY_KEYS = {
  all: ['system-settings'] as const,
  maintenance: () => [...SYSTEM_SETTING_QUERY_KEYS.all, 'maintenance'] as const,
} as const

export const authKeys = {
  all: ['auth'] as const,
  profile: () => [...authKeys.all, 'profile'] as const,
} as const
