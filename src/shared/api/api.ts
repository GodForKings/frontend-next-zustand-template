import type { AxiosRequestConfig } from 'axios'
import axios, { AxiosError, type AxiosResponse } from 'axios'

import { ENVIRONMENT_CONFIG, SYSTEM_SETTING_QUERY_KEYS } from '../config'
import { getQueryClient } from './query-client'

export interface RetryRequestConfig extends AxiosRequestConfig {
  _retry?: boolean
}

export type FailedQueueItem = {
  resolve: (value: AxiosResponse<unknown>) => void
  reject: (error: AxiosError) => void
  originalRequest: RetryRequestConfig
}

export const apiUrl = ENVIRONMENT_CONFIG.API_URL

/** Axios instance */
export const api = axios.create({
  baseURL: apiUrl,
  timeout: 15000,
  paramsSerializer: { indexes: null },
  withCredentials: true,
})

/** флаг refreshing */
let isRefreshing = false
/** Очередь запросов */
let failedQueue: FailedQueueItem[] = []

/** Обработка очереди после успешного / неуспешного refresh */
const processQueue = async (error: AxiosError | null) => {
  await Promise.all(
    failedQueue.map(async (item) => {
      if (error) {
        item.reject(error)
        return
      }

      try {
        const response = await api(item.originalRequest)
        item.resolve(response)
      } catch (err) {
        item.reject(err as AxiosError)
      }
    }),
  )

  failedQueue = []
}

/** Refresh сессии при 401 и инвалидация при 503 */
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as RetryRequestConfig | undefined

    if (!originalRequest) {
      return Promise.reject(error)
    }

    const isMaintenanceRequest = originalRequest.url?.includes('/api/system-settings/maintenance')

    if (error.response?.status === 503 && !isMaintenanceRequest && typeof window !== 'undefined') {
      const queryClient = getQueryClient()
      const maintenanceKey = SYSTEM_SETTING_QUERY_KEYS.maintenance()
      const queryState = queryClient.getQueryState(maintenanceKey)

      if (queryState?.fetchStatus !== 'fetching') {
        queryClient.invalidateQueries({ queryKey: maintenanceKey })
      }
    }

    const isUnauthorized = error.response?.status === 401
    const isRefreshRequest = originalRequest.url?.includes('/api/auth/refresh')
    const isLoginRequest = originalRequest.url?.includes('/api/auth/login')
    const isLogoutRequest = originalRequest.url?.includes('/api/auth/logout')
    const alreadyRetried = originalRequest._retry

    if (
      !isUnauthorized ||
      alreadyRetried ||
      isRefreshRequest ||
      isLoginRequest ||
      isLogoutRequest
    ) {
      return Promise.reject(error)
    }

    originalRequest._retry = true

    if (isRefreshing) {
      return new Promise<AxiosResponse>((resolve, reject) => {
        failedQueue.push({ resolve, reject, originalRequest })
      })
    }

    isRefreshing = true

    try {
      await api.post('/api/auth/refresh')

      await processQueue(null)

      return api(originalRequest)
    } catch (refreshError) {
      await processQueue(refreshError as AxiosError)
      return Promise.reject(refreshError)
    } finally {
      isRefreshing = false
    }
  },
)
