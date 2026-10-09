import { createApiResponse, fetcher, requestBackend } from '../../../shared/lib/apiClient'

export const usersApi = {
  getUsers: ({ search = '', status = '', page = 1, limit = 10 } = {}) =>
    fetcher(async () => {
      const response = await requestBackend('/admin/users', {
        query: { search, status, page, limit },
      })

      return createApiResponse(response.data, response.message, response.pagination)
    }),

  getUserDetails: (userId) =>
    fetcher(async () => {
      const response = await requestBackend(`/admin/users/${userId}`)
      return createApiResponse(response.data, response.message)
    }),

  updateUserStatus: (userId, status) =>
    fetcher(async () => {
      const response = await requestBackend(`/admin/users/${userId}/status`, {
        method: 'PATCH',
        body: { status },
      })

      return createApiResponse(response.data, response.message)
    }),
}
