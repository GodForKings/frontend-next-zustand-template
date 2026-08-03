export type ApiErrorBody = {
  message?: string
}

export interface PageParamsProps<TParams> {
  params: Promise<TParams>
}
