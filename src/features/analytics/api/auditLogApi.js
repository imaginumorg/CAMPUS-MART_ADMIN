import { createApiResponse, fetcher, requestBackend } from '../../../shared/lib/apiClient'

export const auditLogApi = {
  getLogs: (params = {}) =>
    fetcher(async () => {
      const response = await requestBackend('/admin/audit-log', { query: params })
      return createApiResponse(response.data, response.message, response.pagination)
    }),
}
