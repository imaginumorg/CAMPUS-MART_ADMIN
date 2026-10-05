import { createApiResponse, fetcher, requestBackend } from '../../../shared/lib/apiClient'

export const productsApi = {
  getProducts: ({ search = '', status = '', page = 1, limit = 5 } = {}) =>
    fetcher(async () => {
      const response = await requestBackend('/admin/products', {
        query: { search, status, page, limit },
      })

      return createApiResponse(response.data, response.message, response.pagination)
    }),
  updateProduct: (productId, updates) =>
    fetcher(async () => {
      if (updates.is_deleted) {
        const response = await requestBackend(`/admin/products/${productId}/soft-delete`, {
          method: 'PATCH',
        })
        return createApiResponse(response.data, response.message)
      }

      const response = await requestBackend(`/admin/products/${productId}/status`, {
        method: 'PATCH',
        body: { status: updates.status },
      })

      return createApiResponse(response.data, response.message)
    }),
  hardDeleteProduct: (productId) =>
    fetcher(async () => {
      const response = await requestBackend(`/admin/products/${productId}`, {
        method: 'DELETE',
      })

      return createApiResponse(response.data, response.message)
    }),
}
