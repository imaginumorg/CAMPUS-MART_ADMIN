import { PRODUCT_STATUS, USER_STATUS } from '../utils/constants'

const simulateNetworkDelay = (durationMs = 0) => new Promise((resolve) => setTimeout(resolve, durationMs))

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
  {
    id: 3,
    reportId: 'RID-9238478',
    product: 'Vanguard Trainers',
    productId: 2,
    reporterName: 'Elena Rodriguez',
    reporterReference: 'RID-238776150',
    sellerId: 'UID-1294934',
    sku: '887539',
    reason: 'Spam Listing',
    reportCount: 2,
    status: 'open',
    created: '2026-04-22',
  },
  {
    id: 4,
    reportId: 'RID-9238479',
    product: 'Vanguard Trainers',
    productId: 1,
    reporterName: 'Elena Rodriguez',
    reporterReference: 'RID-238776151',
    sellerId: 'UID-1295809',
    sku: '888944',
    reason: 'Spam Listing',
    reportCount: 1,
    status: 'open',
    created: '2026-04-23',
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
      'The user in question has been repeatedly posting content that violates the community guidelines regarding safety and harassment. Despite multiple requests to stop, they continue to target specific members...',
  },
  {
    id: 'REP-10294',
    reportedUser: 'Maria Chen',
    email: 'm.chen@example.com',
    sellerId: 'SEL-3104',
    reporterName: 'Tom Wilson',
    reporterId: 'USR-4421',
    reason: 'Inaccurate Information',
    shortReason: 'Inaccurate ...',
    status: 'pending',
    resolutionLabel: 'Pending',
    severity: 'medium',
    avatarColor: 'from-[#111827] to-[#64748B]',
    evidenceText:
      'Listing and profile details appear to be inconsistent across multiple reports. Additional review is needed to determine whether this is misinformation or a data mismatch.',
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
          { label: 'Active Reports', value: '1,284' },
          { label: 'Rejected', value: '42' },
          { label: 'Resolved', value: '912' },
        ],
        queue: [
          {
            id: 'queue-1',
            title: 'Review anomalous login spike in Region-4',
            subtitle: 'Triggered by system security audit',
            time: '2 mins ago',
            actionLabel: 'Urgent Action',
            tone: 'danger',
          },
          {
            id: 'queue-2',
            title: 'Validate new data categorization model',
            subtitle: 'Scheduled maintenance task',
            time: '15 mins ago',
            actionLabel: 'Open',
            tone: 'neutral',
          },
        ],
        activity: [
          {
            id: 'activity-1',
            title: 'Content Flag #8902',
            tag: 'AUTO FLAGGED',
            description: 'Automated system detected high-risk keywords in public forum post.',
            time: 'Just now',
            tone: 'primary',
          },
          {
            id: 'activity-2',
            title: 'User Audit Complete',
            tag: 'PENDING',
            description: 'Verification process for user ID_7739-X has been finalized by moderation.',
            time: '12m ago',
            tone: 'neutral',
          },
          {
            id: 'activity-3',
            title: 'Critical Rejection',
            tag: 'HIGH ALERT',
            description: 'Infrastructure attempt blocked from unauthorized IP range 192.x.x.x',
            time: '45m ago',
            tone: 'danger',
          },
        ],
        summary: {
          activeUsers: mockUsers.filter((user) => user.status === USER_STATUS.ACTIVE).length,
          listedProducts: activeProducts.filter((product) => product.status === PRODUCT_STATUS.LISTED).length,
          openReports: mockReports.filter((report) => report.status === 'open').length,
          totalResolved: '1,284',
          productPending: 24,
          userPending: 12,
        },
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
  getUserReports: () =>
    fetcher(() => createApiResponse(mockUserReports, 'User reports loaded')),
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
  getNotificationCenter: () =>
    fetcher(() =>
      createApiResponse({
        preview: {
          title: 'System Maintenance',
          body: 'Scheduled maintenance window starting tomorrow at 9:00 PM.',
        },
        broadcasts: [
          { id: 'broadcast-1', title: 'Holiday Promo Alert', audience: '12.4k recipients', status: 'SENT', time: 'Today, 09:12 AM' },
          { id: 'broadcast-2', title: 'v2.4 Patch Notes', audience: '850 recipients', status: 'DRAFT', time: 'Oct 22, 04:45 PM' },
          { id: 'broadcast-3', title: 'Security Update', audience: 'All Users', status: 'SCHEDULED', time: 'Oct 25, 10:00 AM' },
        ],
      }, 'Notification center loaded'),
    ),
  ignoreReport: (reportId) =>
    fetcher(() => {
      mockReports = mockReports.map((report) => (report.id === reportId ? { ...report, status: 'ignored' } : report))
      return createApiResponse(mockReports.find((report) => report.id === reportId), 'Report ignored')
    }),
}
