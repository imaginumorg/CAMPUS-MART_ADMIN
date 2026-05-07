import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const ToastContext = createContext(null)

const toastStyles = {
  success: 'border-[#BBF7D0] bg-[#F0FDF4] text-[#166534]',
  error: 'border-[#FECACA] bg-[#FEF2F2] text-[#991B1B]',
  info: 'border-[#BFDBFE] bg-[#EFF6FF] text-[#1E40AF]',
}

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([])

  const removeToast = useCallback((toastId) => {
    setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== toastId))
  }, [])

  const showToast = useCallback(
    ({ message, type = 'info', duration = 3200 }) => {
      const toastId = `${Date.now()}-${Math.random()}`

      setToasts((currentToasts) => [...currentToasts, { id: toastId, message, type }])
      window.setTimeout(() => removeToast(toastId), duration)
    },
    [removeToast],
  )

  const value = useMemo(() => ({ showToast }), [showToast])

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed right-4 top-4 z-50 flex w-[min(360px,calc(100vw-2rem))] flex-col gap-2">
        {toasts.map((toast) => (
          <div key={toast.id} className={`rounded-xl border px-4 py-3 text-sm font-semibold shadow-sm ${toastStyles[toast.type] || toastStyles.info}`}>
            <div className="flex items-start justify-between gap-3">
              <p>{toast.message}</p>
              <button type="button" onClick={() => removeToast(toast.id)} className="text-current opacity-60 transition hover:opacity-100">
                x
              </button>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useToast = () => useContext(ToastContext)
