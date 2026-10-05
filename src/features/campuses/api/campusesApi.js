import { createApiResponse, fetcher, requestBackend } from '../../../shared/lib/apiClient'

export const campusesApi = {
  getCampuses: () =>
    fetcher(async () => {
      const response = await requestBackend('/admin/campuses')
      return createApiResponse(response.data, response.message)
    }),
  createCampus: (campus) =>
    fetcher(async () => {
      const response = await requestBackend('/admin/campuses', {
        method: 'POST',
        body: campus,
      })
      return createApiResponse(response.data, response.message)
    }),
  updateCampus: (campusId, updates) =>
    fetcher(async () => {
      const response = await requestBackend(`/admin/campuses/${campusId}`, {
        method: 'PATCH',
        body: updates,
      })
      return createApiResponse(response.data, response.message)
    }),
}
