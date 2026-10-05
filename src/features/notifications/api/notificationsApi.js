import { createApiResponse, fetcher } from '../../../shared/lib/apiClient'

export const notificationsApi = {
  getNotificationCenter: () =>
    fetcher(() =>
      createApiResponse(
        {
          preview: {
            title: 'System Maintenance',
            body: 'Scheduled maintenance window starting tomorrow at 9:00 PM.',
          },
          broadcasts: [
            { id: 'broadcast-1', title: 'Holiday Promo Alert', audience: '12.4k recipients', status: 'SENT', time: 'Today, 09:12 AM' },
            { id: 'broadcast-2', title: 'v2.4 Patch Notes', audience: '850 recipients', status: 'DRAFT', time: 'Oct 22, 04:45 PM' },
          ],
        },
        'Notification center loaded',
      ),
    ),
}
