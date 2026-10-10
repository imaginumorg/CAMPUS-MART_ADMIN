import { createApiResponse, fetcher } from '../../../shared/lib/apiClient'

export const notificationsApi = {
  getNotificationCenter: () =>
    fetcher(() =>
      createApiResponse(
        {
          preview: null,
          broadcasts: [],
        },
        'Notification center loaded',
      ),
    ),
}
