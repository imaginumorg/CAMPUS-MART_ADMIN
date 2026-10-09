import { memo, useEffect, useState } from 'react'
import { productsApi } from '../api/productsApi'
import { STATUS_BADGE_STYLES, REPORT_REASON_LABELS } from '../../../shared/constants/constants'

const formatDate = (d) =>
  d
    ? new Intl.DateTimeFormat('en', { month: 'short', day: '2-digit', year: 'numeric' }).format(new Date(d))
    : 'Not available'

const formatPrice = (p) =>
  p != null ? `₹${Number(p).toLocaleString('en-IN')}` : '—'

const conditionLabels = {
  brand_new: 'Brand New',
  like_new: 'Like New',
  gently_used: 'Gently Used',
  well_used: 'Well Used',
  for_parts_or_not_working: 'For Parts',
}

/**
 * ProductDetailsDrawer — right-side slide-in panel showing full product profile.
 */
const ProductDetailsDrawer = ({
  productId,
  onClose,
  onStatusChange,
  onDelete,
  isAdmin = false,
}) => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [activeImage, setActiveImage] = useState(0)
  const [isActing, setIsActing] = useState(false)

  useEffect(() => {
    if (!productId) {
      setProduct(null)
      setError(null)
      setActiveImage(0)
      return
    }

    let active = true
    setLoading(true)
    setError(null)

    productsApi.getProductDetails(productId).then((res) => {
      if (!active) return
      if (res.success) {
        setProduct(res.data)
        setActiveImage(0)
      } else {
        setError(res.message)
      }
      setLoading(false)
    })

    return () => { active = false }
  }, [productId])

  const refreshProduct = async () => {
    if (!product) return
    const res = await productsApi.getProductDetails(product.id)
    if (res.success) setProduct(res.data)
  }

  const handleStatusChange = async (newStatus) => {
    if (!product) return
    setIsActing(true)
    await onStatusChange?.(product.id, newStatus)
    await refreshProduct()
    setIsActing(false)
  }

  const handleDelete = async () => {
    if (!product) return
    setIsActing(true)
    await onDelete?.(product.id)
    setIsActing(false)
    onClose()
  }

  const isOpen = Boolean(productId)

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close drawer"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-[#0F172A]/20 backdrop-blur-[2px]"
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-[440px] flex-col bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Product details"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#EEF1F5] px-5 py-4">
          <h2 className="text-[16px] font-semibold text-[#0B1220]">Product Details</h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#E2E8F0] text-[#64748B] hover:bg-[#F8FAFC]"
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18" /><path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {loading && (
            <div className="flex items-center justify-center py-16">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#EEF2FF] border-t-[#3838EC]" />
            </div>
          )}

          {error && !loading && (
            <div className="px-5 py-10 text-center text-[14px] text-[#DC2626]">{error}</div>
          )}

          {product && !loading && (
            <div className="space-y-5 px-5 py-5">
              {/* Image gallery */}
              {product.images?.length > 0 ? (
                <div>
                  <div className="relative overflow-hidden rounded-[16px] bg-[#F1F5F9]">
                    <img
                      src={product.images[activeImage]?.url}
                      alt={product.title}
                      className="h-52 w-full object-cover"
                    />
                    {product.is_deleted && (
                      <div className="absolute inset-0 flex items-center justify-center bg-[#0F172A]/50">
                        <span className="rounded-full bg-[#DC2626] px-3 py-1 text-[12px] font-bold text-white">DELETED</span>
                      </div>
                    )}
                  </div>
                  {product.images.length > 1 && (
                    <div className="mt-2 flex gap-2">
                      {product.images.map((img, i) => (
                        <button
                          key={img.fileId || i}
                          type="button"
                          onClick={() => setActiveImage(i)}
                          className={`h-12 w-12 overflow-hidden rounded-xl ring-2 transition ${
                            i === activeImage ? 'ring-primary' : 'ring-transparent'
                          }`}
                        >
                          <img src={img.url} alt="" className="h-full w-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex h-36 items-center justify-center rounded-[16px] bg-[#F1F5F9]">
                  <svg viewBox="0 0 24 24" className="h-10 w-10 text-[#CBD5E1]" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="m21 15-5-5L5 21" />
                  </svg>
                </div>
              )}

              {/* Title + status */}
              <div>
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h3 className="text-[17px] font-bold text-[#0B1220]">{product.title || '(Untitled)'}</h3>
                  <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${STATUS_BADGE_STYLES[product.status] || 'bg-[#F1F5F9] text-[#64748B]'}`}>
                    {product.status}
                  </span>
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-3">
                  <span className="text-[20px] font-bold text-[#0B1220]">{formatPrice(product.price)}</span>
                  {product.original_price && product.original_price > product.price && (
                    <span className="text-[14px] text-[#94A3B8] line-through">{formatPrice(product.original_price)}</span>
                  )}
                  {product.is_negotiable && (
                    <span className="rounded-full bg-[#EEF2FF] px-2.5 py-0.5 text-[10px] font-semibold text-[#3838EC]">Negotiable</span>
                  )}
                </div>
                {product.reportCount > 0 && (
                  <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-[#FEF2F2] px-3 py-1 text-[12px] font-semibold text-[#DC2626]">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 9v4" /><path d="M12 17h.01" />
                      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
                    </svg>
                    {product.reportCount} pending report{product.reportCount !== 1 ? 's' : ''}
                  </div>
                )}
              </div>

              {/* Detail table */}
              <div className="rounded-[16px] border border-[#EEF1F5] divide-y divide-[#F1F5F9]">
                {[
                  { label: 'Category', value: product.category?.replace(/_/g, ' ') || '—' },
                  { label: 'Condition', value: conditionLabels[product.condition] || product.condition || '—' },
                  { label: 'Payment', value: product.payment_preference?.toUpperCase() || '—' },
                  { label: 'Views', value: product.views_count ?? 0 },
                  { label: 'Listed', value: formatDate(product.createdAt) },
                  { label: 'Updated', value: formatDate(product.updatedAt) },
                  { label: 'Campus', value: product.campus ? `${product.campus.short_name}` : '—' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between px-4 py-3">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#94A3B8]">{label}</span>
                    <span className="text-[13px] font-medium capitalize text-[#334155]">{String(value)}</span>
                  </div>
                ))}
              </div>

              {/* Seller info */}
              {product.seller && (
                <div className="rounded-[16px] bg-[#F8FAFC] p-4">
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748B]">Seller</p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#3838EC] to-[#8B5CF6] text-[13px] font-bold text-white">
                      {product.seller.name?.charAt(0).toUpperCase()}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[14px] font-semibold text-[#0B1220]">{product.seller.name}</p>
                      <p className="text-[12px] text-[#64748B] truncate">{product.seller.email}</p>
                    </div>
                    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${STATUS_BADGE_STYLES[product.seller.status] || ''}`}>
                      {product.seller.status}
                    </span>
                  </div>
                </div>
              )}

              {/* Recent reports */}
              {product.recentReports?.length > 0 && (
                <div>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748B]">
                    Recent Reports ({product.reportCount} pending)
                  </p>
                  <div className="space-y-2">
                    {product.recentReports.map((report) => (
                      <div key={report.id} className="rounded-[12px] bg-[#FFF7F7] border border-[#FECACA] px-3 py-2.5">
                        <div className="flex items-center justify-between">
                          <span className="text-[12px] font-semibold text-[#DC2626]">
                            {REPORT_REASON_LABELS[report.reason] || report.reason}
                          </span>
                          <span className="text-[11px] text-[#94A3B8]">{formatDate(report.createdAt)}</span>
                        </div>
                        {report.description && (
                          <p className="mt-1 text-[12px] text-[#475569]">{report.description}</p>
                        )}
                        {report.reporter && (
                          <p className="mt-0.5 text-[11px] text-[#94A3B8]">by {report.reporter.name}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer actions */}
        {product && !loading && (
          <div className="border-t border-[#EEF1F5] px-5 py-4 space-y-2">
            <div className="grid grid-cols-2 gap-2">
              {product.status !== 'blocked' && !product.is_deleted && (
                <button
                  type="button"
                  disabled={isActing}
                  onClick={() => handleStatusChange('blocked')}
                  className="rounded-xl bg-[#FEF2F2] px-3 py-2.5 text-[12px] font-semibold text-[#DC2626] transition hover:bg-[#FEE2E2] disabled:opacity-50"
                >
                  Block
                </button>
              )}
              {product.status !== 'unlisted' && !product.is_deleted && (
                <button
                  type="button"
                  disabled={isActing}
                  onClick={() => handleStatusChange('unlisted')}
                  className="rounded-xl bg-[#FFF7ED] px-3 py-2.5 text-[12px] font-semibold text-[#C2410C] transition hover:bg-[#FED7AA] disabled:opacity-50"
                >
                  Unlist
                </button>
              )}
              {product.status !== 'listed' && !product.is_deleted && (
                <button
                  type="button"
                  disabled={isActing}
                  onClick={() => handleStatusChange('listed')}
                  className="rounded-xl bg-[#ECFDF3] px-3 py-2.5 text-[12px] font-semibold text-[#15803D] transition hover:bg-[#D1FAE5] disabled:opacity-50"
                >
                  Re-list
                </button>
              )}
            </div>
            {isAdmin && !product.is_deleted && (
              <button
                type="button"
                disabled={isActing}
                onClick={handleDelete}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#FECACA] bg-white px-4 py-2.5 text-[12px] font-semibold text-[#DC2626] transition hover:bg-[#FEF2F2] disabled:opacity-50"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 6h18" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
                Delete permanently
              </button>
            )}
          </div>
        )}
      </aside>
    </>
  )
}

export default memo(ProductDetailsDrawer)
