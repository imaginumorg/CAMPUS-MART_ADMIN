import { createApiResponse, fetcher } from '../../../shared/lib/apiClient'
import { productsApi } from '../../products/api/productsApi'

let mockReports = []
let mockUserReports = []

const paginateCollection = (items, { page = 1, limit = 5 } = {}) => {
  const totalItems = items.length
  const totalPages = Math.max(1, Math.ceil(totalItems / limit))
  const startIndex = (page - 1) * limit

  return {
    data: items.slice(startIndex, startIndex + limit),
    pagination: { page, limit, total: totalItems, totalPages },
  }
}

const matchesSearchTerm = (item, searchTerm) =>
  !searchTerm || Object.values(item).join(' ').toLowerCase().includes(searchTerm.toLowerCase())

export const reportsApi = {
  getReports: ({ search = '', page = 1, limit = 5 } = {}) =>
    fetcher(() => {
      const filteredReports = mockReports.filter((report) => report.status === 'open' && matchesSearchTerm(report, search))
      const { data, pagination } = paginateCollection(filteredReports, { page, limit })
      return createApiResponse(data, 'Reports loaded', pagination)
    }),
  getUserReports: () => fetcher(() => createApiResponse(mockUserReports, 'User reports loaded')),
  getUserReportById: (reportId) =>
    fetcher(() => createApiResponse(mockUserReports.find((report) => report.id === reportId), 'User report loaded')),
  updateUserReportStatus: (reportId, status) =>
    fetcher(() => {
      const statusLabelMap = {
        pending: 'Pending',
        dismissed: 'Dismissed',
        warned: 'Warned',
        suspended: 'Suspended',
        banned: 'Banned',
      }

      mockUserReports = mockUserReports.map((report) =>
        report.id === reportId
          ? {
              ...report,
              status,
              resolutionLabel: statusLabelMap[status] || 'Pending',
            }
          : report,
      )

      return createApiResponse(mockUserReports.find((report) => report.id === reportId), 'User report status updated')
    }),
  updateProduct: productsApi.updateProduct,
  ignoreReport: (reportId) =>
    fetcher(() => {
      mockReports = mockReports.map((report) => (report.id === reportId ? { ...report, status: 'ignored' } : report))
      return createApiResponse(mockReports.find((report) => report.id === reportId), 'Report ignored')
    }),
}
