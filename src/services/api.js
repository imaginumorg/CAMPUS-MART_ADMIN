import { PRODUCT_STATUS, REPORT_REASONS, USER_STATUS } from '../utils/constants'

const simulateNetworkDelay = (durationMs = 350) => new Promise((resolve) => setTimeout(resolve, durationMs))

// In-memory mock collections keep the UI ready for backend integration without changing page code.
let mockUsers = [
  { id: 1, name: 'Maya Chen', email: 'maya@campus.edu', status: USER_STATUS.ACTIVE, listings: 12, joined: '2026-01-12' },
  { id: 2, name: 'Arjun Mehta', email: 'arjun@campus.edu', status: USER_STATUS.INACTIVE, listings: 4, joined: '2026-02-04' },
  { id: 3, name: 'Lina Ortiz', email: 'lina@campus.edu', status: USER_STATUS.SUSPENDED, listings: 8, joined: '2025-11-18' },
  { id: 4, name: 'Noah Brooks', email: 'noah@campus.edu', status: USER_STATUS.ACTIVE, listings: 21, joined: '2025-12-02' },
  { id: 5, name: 'Priya Shah', email: 'priya@campus.edu', status: USER_STATUS.ACTIVE, listings: 7, joined: '2026-03-09' },
]

let mockProducts = [
  { id: 1, product: 'MacBook Air M2', seller: 'Maya Chen', category: 'Electronics', price: '$760', status: PRODUCT_STATUS.LISTED, reports: 1, created: '2026-04-12', is_deleted: false },
  { id: 2, product: 'Calculus Textbook', seller: 'Arjun Mehta', category: 'Books', price: '$34', status: PRODUCT_STATUS.UNLISTED, reports: 2, created: '2026-04-08', is_deleted: false },
  { id: 3, product: 'Campus Bike', seller: 'Lina Ortiz', category: 'Transport', price: '$140', status: PRODUCT_STATUS.BLOCKED, reports: 5, created: '2026-03-27', is_deleted: false },
  { id: 4, product: 'Desk Lamp', seller: 'Noah Brooks', category: 'Dorm', price: '$18', status: PRODUCT_STATUS.SOLD, reports: 0, created: '2026-03-16', is_deleted: false },
  { id: 5, product: 'Lab Coat', seller: 'Priya Shah', category: 'Supplies', price: '$22', status: PRODUCT_STATUS.LISTED, reports: 3, created: '2026-04-18', is_deleted: false },
]

let mockReports = [
  { id: 1, product: 'Campus Bike', productId: 3, reason: REPORT_REASONS.SCAM, reportCount: 5, status: 'open', created: '2026-04-20' },
  { id: 2, product: 'Lab Coat', productId: 5, reason: REPORT_REASONS.FAKE, reportCount: 3, status: 'open', created: '2026-04-21' },
  { id: 3, product: 'Calculus Textbook', productId: 2, reason: REPORT_REASONS.SPAM, reportCount: 2, status: 'open', created: '2026-04-22' },
  { id: 4, product: 'MacBook Air M2', productId: 1, reason: REPORT_REASONS.OTHER, reportCount: 1, status: 'open', created: '2026-04-23' },
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

const createApiResponse = (data, message = 'Request completed', pagination = null) => ({
  success: true,
  message,
  data,
  pagination,
})

export const fetcher = async (request) => {
  try {
    await simulateNetworkDelay()
    const requestResult = typeof request === 'function' ? await request() : request

    if (!requestResult?.success) {
      throw new Error(requestResult?.message || 'Request failed')
    }

    return {
      success: requestResult.success,
      message: requestResult.message,
      data: requestResult.data,
      pagination: requestResult.pagination,
    }
  } catch (error) {
    return {
      success: false,
      message: error.message,
      data: null,
      pagination: null,
    }
  }
}

export const api = {
  getDashboard: () =>
    fetcher(() => {
      const activeProducts = mockProducts.filter((product) => !product.is_deleted)
      const dashboardPayload = {
        stats: [
          { label: 'Total Products', value: activeProducts.length },
          { label: 'Listed Products', value: activeProducts.filter((product) => product.status === PRODUCT_STATUS.LISTED).length },
          { label: 'Active Users', value: mockUsers.filter((user) => user.status === USER_STATUS.ACTIVE).length },
          { label: 'Open Reports', value: mockReports.filter((report) => report.status === 'open').length },
        ],
        activity: [
          { title: 'Recent flagged products', value: 'Campus Bike, Lab Coat' },
          { title: 'Recent suspensions', value: 'Lina Ortiz moved to suspended' },
          { title: 'Recent approvals', value: 'Desk Lamp listing reviewed' },
          { title: 'Pending reviews summary', value: '6 listings awaiting moderation' },
        ],
      }

      return createApiResponse(dashboardPayload, 'Dashboard loaded')
    }),
  getUsers: ({ search = '', page = 1, limit = 5 } = {}) =>
    fetcher(() => {
      const filteredUsers = mockUsers.filter((user) => matchesSearchTerm(user, search))
      const { data, pagination } = paginateCollection(filteredUsers, { page, limit })
      return createApiResponse(data, 'Users loaded', pagination)
    }),
  updateUserStatus: (userId, status) =>
    fetcher(() => {
      mockUsers = mockUsers.map((user) => (user.id === userId ? { ...user, status } : user))
      return createApiResponse(mockUsers.find((user) => user.id === userId), 'User status updated')
    }),
  getProducts: ({ search = '', status = '', page = 1, limit = 5 } = {}) =>
    fetcher(() => {
      const filteredProducts = mockProducts.filter(
        (product) => !product.is_deleted && matchesSearchTerm(product, search) && (!status || product.status === status),
      )
      const { data, pagination } = paginateCollection(filteredProducts, { page, limit })
      return createApiResponse(data, 'Products loaded', pagination)
    }),
  updateProduct: (productId, updates) =>
    fetcher(() => {
      mockProducts = mockProducts.map((product) => (product.id === productId ? { ...product, ...updates } : product))
      return createApiResponse(mockProducts.find((product) => product.id === productId), 'Product updated')
    }),
  hardDeleteProduct: (productId) =>
    fetcher(() => {
      mockProducts = mockProducts.filter((product) => product.id !== productId)
      mockReports = mockReports.filter((report) => report.productId !== productId)
      return createApiResponse({ id: productId }, 'Product permanently deleted')
    }),
  getReports: ({ search = '', page = 1, limit = 5 } = {}) =>
    fetcher(() => {
      const filteredReports = mockReports.filter((report) => report.status === 'open' && matchesSearchTerm(report, search))
      const { data, pagination } = paginateCollection(filteredReports, { page, limit })
      return createApiResponse(data, 'Reports loaded', pagination)
    }),
  ignoreReport: (reportId) =>
    fetcher(() => {
      mockReports = mockReports.map((report) => (report.id === reportId ? { ...report, status: 'ignored' } : report))
      return createApiResponse(mockReports.find((report) => report.id === reportId), 'Report ignored')
    }),
}
