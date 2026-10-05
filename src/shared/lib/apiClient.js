const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api'

export const buildUrl = (path, query = {}) => {
  const url = new URL(`${API_BASE_URL}${path}`)

  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      url.searchParams.set(key, value)
    }
  })

  return url.toString()
}

export const requestBackend = async (path, { method = 'GET', body, query } = {}) => {
  const response = await fetch(buildUrl(path, query), {
    method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  })

  const payload = await response.json().catch(() => ({
    success: false,
    message: 'Invalid server response',
  }))

  if (!response.ok || !payload.success) {
    const error = new Error(payload.message || 'Request failed')
    error.status = response.status
    error.accountBlocked = Boolean(payload.accountBlocked)
    error.accountStatus = payload.accountStatus
    throw error
  }

  return payload
}

export const createApiResponse = (data, message = 'Request completed', pagination = null) => ({
  success: true,
  message,
  data,
  pagination,
})

export const fetcher = async (request) => {
  try {
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
