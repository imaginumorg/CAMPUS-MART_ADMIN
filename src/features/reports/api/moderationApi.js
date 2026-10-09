import { createApiResponse, fetcher, requestBackend } from '../../../shared/lib/apiClient'

export const moderationApi = {
  getQueue: (params = {}) =>
    fetcher(async () => {
      const response = await requestBackend('/admin/moderation/queue', { query: params })
      return {
        success: response.success,
        message: response.message,
        data: response.data,
        pagination: response.pagination,
      }
    }),

  dismissReports: ({ targetId, targetModel }) =>
    fetcher(async () => {
      const response = await requestBackend('/admin/moderation/dismiss', {
        method: 'POST',
        body: { targetId, targetModel },
      })
      return createApiResponse(response.data, response.message)
    }),
}
