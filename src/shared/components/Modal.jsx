import { memo, useEffect } from 'react'

const Modal = ({ open, title, description, confirmLabel = 'Confirm', tone = 'primary', onClose, onConfirm }) => {
  useEffect(() => {
    if (!open) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open) return null

  const confirmClass =
    tone === 'danger'
      ? 'rounded-xl bg-[#DC2626] px-4 py-2 text-sm font-semibold text-white'
      : 'rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white'

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#64707D]/40 px-4">
      <div className="w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
        <h2 className="text-base font-semibold text-[#0B1220]">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-[#475569]">{description}</p>
        <div className="mt-5 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-[#475569]"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className={confirmClass}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  )
}

export default memo(Modal)
