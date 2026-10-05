import { PRODUCT_STATUS, USER_STATUS } from '../../../shared/constants/constants'
import { createApiResponse, fetcher } from '../../../shared/lib/apiClient'

const mockUsers = [
  { id: 1, status: USER_STATUS.ACTIVE },
  { id: 2, status: USER_STATUS.INACTIVE },
  { id: 3, status: USER_STATUS.SUSPENDED },
  { id: 4, status: USER_STATUS.ACTIVE },
  { id: 5, status: USER_STATUS.ACTIVE },
]

const mockProducts = [
  { id: 1, status: PRODUCT_STATUS.LISTED, is_deleted: false },
  { id: 2, status: PRODUCT_STATUS.UNLISTED, is_deleted: false },
  { id: 3, status: PRODUCT_STATUS.BLOCKED, is_deleted: false },
  { id: 4, status: PRODUCT_STATUS.SOLD, is_deleted: false },
]

const mockReports = [
  { id: 1, status: 'open' },
  { id: 2, status: 'open' },
  { id: 3, status: 'ignored' },
]

export const dashboardApi = {
  getDashboard: () =>
    fetcher(() => {
      const activeProducts = mockProducts.filter((product) => !product.is_deleted)

      return createApiResponse(
        {
          stats: [
            { label: 'Active Users', value: String(mockUsers.filter((user) => user.status === USER_STATUS.ACTIVE).length) },
            { label: 'Listed Products', value: String(activeProducts.filter((product) => product.status === PRODUCT_STATUS.LISTED).length) },
            { label: 'Pending Reviews', value: String(mockReports.filter((report) => report.status === 'open').length) },
          ],
          queue: [
            {
              id: 'queue-1',
              title: 'Review high-report product listings',
              subtitle: 'Moderation queue needs attention',
              time: 'Live queue',
              actionLabel: 'Open',
              tone: 'danger',
            },
            {
              id: 'queue-2',
              title: 'Verify newly requested campus entries',
              subtitle: 'Campus directory health check',
              time: 'Today',
              actionLabel: 'Review',
              tone: 'neutral',
            },
          ],
          activity: [
            {
              id: 'activity-1',
              title: 'Campus controls added',
              tag: 'NEW',
              description: 'Admins can now manage campus availability and email domains.',
              time: 'Now',
              tone: 'primary',
            },
            {
              id: 'activity-2',
              title: 'Product moderation ready',
              tag: 'ACTIVE',
              description: 'Listing, blocking, and deletion actions are connected to backend APIs.',
              time: 'Today',
              tone: 'neutral',
            },
          ],
        },
        'Dashboard loaded',
      )
    }),
}
