import { useCallback, useEffect, useState } from 'react'

export const useFetch = (request) => {
  const [responseData, setResponseData] = useState(null)
  const [responsePagination, setResponsePagination] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  const runRequest = useCallback(async () => {
    setIsLoading(true)
    setErrorMessage('')
    const response = await request()

    if (response.success) {
      setResponseData(response.data)
      setResponsePagination(response.pagination)
    } else {
      setErrorMessage(response.message)
    }

    setIsLoading(false)
    return response
  }, [request])

  useEffect(() => {
    // Defer the first request by a tick to keep effect-time state updates lint-safe.
    const requestTimer = window.setTimeout(runRequest, 0)
    return () => window.clearTimeout(requestTimer)
  }, [runRequest])

  return { data: responseData, pagination: responsePagination, loading: isLoading, error: errorMessage, refetch: runRequest }
}
