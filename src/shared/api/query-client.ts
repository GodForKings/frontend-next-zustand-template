import { QueryClient } from '@tanstack/react-query'

import { getErrorMessage, showError } from '@/shared'

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1,
        staleTime: 60 * 1000,
        refetchOnWindowFocus: false,
      },
      mutations: {
        onError: (error) => {
          showError(getErrorMessage(error))
        },
      },
    },
  })
}

let browserQueryClient: QueryClient | undefined = undefined

export function getQueryClient() {
  if (typeof window === 'undefined') {
    return makeQueryClient()
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient()
    return browserQueryClient
  }
}
