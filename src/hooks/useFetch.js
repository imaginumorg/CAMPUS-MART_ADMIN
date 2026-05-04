import { useCallback, useEffect, useRef, useState } from 'react'

export const useFetch = (request) => {
  const [responseData, setResponseData] = useState()
  const [responsePagination, setResponsePagination] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')
  const latestRequestId = useRef(0)
  const hasLoadedData = useRef(false)

  const runRequest = useCallback(async () => {
    const requestId = latestRequestId.current + 1
    latestRequestId.current = requestId

    setIsLoading((currentLoading) => currentLoading || !hasLoadedData.current)
    setErrorMessage('')
    const response = await request()

    if (requestId !== latestRequestId.current) {
      return response
    }

    if (response.success) {
      setResponseData(response.data)
      setResponsePagination(response.pagination)
      hasLoadedData.current = true
    } else {
      setErrorMessage(response.message)
    }

    setIsLoading(false)
    return response
  }, [request])

  useEffect(() => {
    const requestTimer = window.setTimeout(runRequest, 0)
    return () => window.clearTimeout(requestTimer)
  }, [runRequest])

  return { data: responseData, pagination: responsePagination, loading: isLoading, error: errorMessage, refetch: runRequest }
}
