import { createApiResponse, fetcher, requestBackend } from '../../../shared/lib/apiClient'

export const dashboardApi = {
  getDashboard: (range) =>
    fetcher(async () => {
      const response = await requestBackend('/admin/dashboard', {
        query: range ? { range } : undefined,
      })
      return createApiResponse(response.data, response.message)
    }),
}
