import { Api } from './generated/Api'
import { api } from './api'

export const apiClient = new Api()
apiClient.instance = api

export { api } from './api'
export * from './generated/data-contracts'
export * from './query-client'
