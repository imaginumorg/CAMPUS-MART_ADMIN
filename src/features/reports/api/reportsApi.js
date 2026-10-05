import { createApiResponse, fetcher } from '../../../shared/lib/apiClient'
import { productsApi } from '../../products/api/productsApi'

let mockReports = [
  {
    id: 1,
    reportId: 'RID-9238476',
    product: 'Zephyr Chronograph',
    productId: 3,
    reporterName: 'Sarah Jenkins',
    reporterReference: 'RID-238776148',
    sellerId: 'UID-1293184',
    sku: '884729',
    reason: 'Counterfeit Item',
    reportCount: 5,
    status: 'open',
    created: '2026-04-20',
  },
  {
    id: 2,
    reportId: 'RID-9238477',
    product: 'SonicMax Elite',
    productId: 5,
    reporterName: 'Michael Chen',
    reporterReference: 'RID-238776149',
    sellerId: 'UID-1294059',
    sku: '886134',
    reason: 'Inappropriate Content',
    reportCount: 3,
    status: 'open',
    created: '2026-04-21',
  },
]

let mockUserReports = [
  {
    id: 'REP-10293',
    reportedUser: 'Alex Rivers',
    email: 'alex.r@example.com',
    sellerId: 'SEL-4829',
    reporterName: 'Sarah Jenkins',
    reporterId: 'USR-9021',
    reason: 'Suspicious Activity',
    shortReason: 'Suspicious ...',
    status: 'pending',
    resolutionLabel: 'Pending',
    severity: 'urgent',
    avatarColor: 'from-[#4B5563] to-[#111827]',
    evidenceText:
      'The user in question has been repeatedly posting content that violates the community guidelines regarding safety and harassment.',
  },
]

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
