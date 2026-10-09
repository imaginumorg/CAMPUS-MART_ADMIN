import { memo, useCallback, useEffect, useState } from 'react'
import Modal from '../../../shared/components/Modal'
import Loader from '../../../shared/components/Loader'
import { useFetch } from '../../../shared/hooks/useFetch'
import { productsApi } from '../api/productsApi'
import { PRODUCT_STATUS } from '../../../shared/constants/constants'
import { useToast } from '../../../shared/components/ToastContext'
import ProductDetailsDrawer from '../components/ProductDetailsDrawer'
import { useAuth } from '../../auth/context/AuthContext'

const productActionConfig = {
  block: {
    title: 'Block product',
    description: 'This product will be blocked and hidden from the marketplace.',
    confirmLabel: 'Block',
    tone: 'danger',
  },
  soft_delete: {
    title: 'Soft delete product',
    description: 'This product will be removed from active tables but kept in the archive.',
    confirmLabel: 'Soft delete',
    tone: 'danger',
  },
  hard_delete: {
    title: 'Hard delete product',
    description: 'This will permanently remove the product from the database.',
    confirmLabel: 'Hard delete',
    tone: 'danger',
  },
}

const productImageGradients = [
  'from-[#E2E8F0] to-[#CBD5E1]',
  'from-[#FECACA] to-[#EF4444]',
  'from-[#D6D3D1] to-[#78716C]',
  'from-[#E0F2FE] to-[#0284C7]',
  'from-[#EDE9FE] to-[#7C3AED]',
]

const statusChipStyles = {
  [PRODUCT_STATUS.LISTED]: 'bg-[#EEF2FF] text-primary',
  [PRODUCT_STATUS.UNLISTED]: 'bg-[#F1F5F9] text-[#475569]',
  [PRODUCT_STATUS.SOLD]: 'bg-[#ECFDF3] text-[#15803D]',
  [PRODUCT_STATUS.BLOCKED]: 'bg-[#FEF2F2] text-[#DC2626]',
}

const statusLabels = {
  [PRODUCT_STATUS.LISTED]: 'Listed',
  [PRODUCT_STATUS.UNLISTED]: 'Unlisted',
  [PRODUCT_STATUS.SOLD]: 'Sold',
  [PRODUCT_STATUS.BLOCKED]: 'Blocked',
}

const formatDisplayDate = (dateValue) =>
  new Intl.DateTimeFormat('en', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }).format(new Date(dateValue))

const Products = () => {
  const { admin } = useAuth()
  const isAdmin = admin?.role === 'admin'
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('')
  const [selectedStatusFilter, setSelectedStatusFilter] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [pendingProductAction, setPendingProductAction] = useState(null)
  const [selectedProductId, setSelectedProductId] = useState(null)
  const { showToast } = useToast()

  useEffect(() => {
    const debounceTimer = window.setTimeout(() => {
      setDebouncedSearchQuery(searchQuery)
      setCurrentPage(1)
    }, 120)

    return () => window.clearTimeout(debounceTimer)
  }, [searchQuery])

  const loadProducts = useCallback(
    () => productsApi.getProducts({ search: debouncedSearchQuery, status: selectedStatusFilter, page: currentPage }),
    [debouncedSearchQuery, selectedStatusFilter, currentPage],
  )
  const { data: products = [], pagination, loading, refetch } = useFetch(loadProducts)

  const handleProductAction = useCallback(
    async (action, product) => {
      if (action === 'toggle_listing') {
        const nextStatus = product.status === PRODUCT_STATUS.LISTED ? PRODUCT_STATUS.UNLISTED : PRODUCT_STATUS.LISTED
        const response = await productsApi.updateProduct(product.id, { status: nextStatus })

        if (response.success) {
          showToast({
            type: 'success',
            message: nextStatus === PRODUCT_STATUS.LISTED ? 'Product listed successfully' : 'Product unlisted successfully',
          })
        } else {
          showToast({ type: 'error', message: response.message })
        }

        refetch()
        return
      }

      setPendingProductAction({ action, product })
    },
    [refetch, showToast],
  )

  const handleDrawerStatusChange = useCallback(
    async (productId, newStatus) => {
      const response = await productsApi.updateProduct(productId, { status: newStatus })
      if (response.success) {
        showToast({ type: 'success', message: response.message || 'Product status updated' })
        refetch()
      } else {
        showToast({ type: 'error', message: response.message || 'Failed to update status' })
      }
    },
    [refetch, showToast],
  )

  const handleDrawerDelete = useCallback(
    async (productId) => {
      const response = await productsApi.hardDeleteProduct(productId)
      if (response.success) {
        showToast({ type: 'success', message: response.message || 'Product deleted permanently' })
        refetch()
      } else {
        showToast({ type: 'error', message: response.message || 'Failed to delete product' })
      }
    },
    [refetch, showToast],
  )

  const confirmProductAction = useCallback(async () => {
    if (!pendingProductAction) return

    const { action, product } = pendingProductAction

    let response

    if (action === 'block') response = await productsApi.updateProduct(product.id, { status: PRODUCT_STATUS.BLOCKED })
    if (action === 'soft_delete') response = await productsApi.updateProduct(product.id, { is_deleted: true })
    if (action === 'hard_delete') response = await productsApi.hardDeleteProduct(product.id)

    if (response?.success) {
      showToast({ type: 'success', message: response.message })
    } else {
      showToast({ type: 'error', message: response?.message || 'Product action failed' })
    }

    setPendingProductAction(null)
    refetch()
  }, [pendingProductAction, refetch, showToast])

  const selectedAction = pendingProductAction ? productActionConfig[pendingProductAction.action] : null

  if (loading && !products.length) return <Loader rows={4} columns={8} />

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="text-[24px] font-semibold tracking-[-0.03em] text-[#0B1220]">Products</h1>
          <p className="mt-1 text-[14px] text-[#475569]">Moderate marketplace listings, view item details, and handle removals.</p>
        </div>
        <select
          value={selectedStatusFilter}
          onChange={(event) => {
            setSelectedStatusFilter(event.target.value)
            setCurrentPage(1)
          }}
          className="h-10 rounded-xl border border-[#D9E0EA] bg-white px-4 text-sm font-medium text-[#0B1220] outline-none shadow-xs"
        >
          <option value="">All statuses</option>
          {Object.values(PRODUCT_STATUS).map((statusOption) => (
            <option key={statusOption} value={statusOption}>
              {statusOption.charAt(0).toUpperCase() + statusOption.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="max-w-md">
        <div className="flex items-center gap-3 rounded-xl border border-[#E2E8F0] bg-white px-4 py-2.5 shadow-xs">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#94A3B8]" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search products, seller or category..."
            className="w-full bg-transparent text-sm text-[#0B1220] outline-none placeholder:text-[#64748B]"
          />
        </div>
      </div>

      <section className="overflow-hidden rounded-[20px] bg-white shadow-sm ring-1 ring-[#E8ECF4]">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[840px] text-left">
            <thead className="bg-[#F8FAFC] text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748B]">
              <tr>
                <th className="px-5 py-4">Product</th>
                <th className="px-4 py-4">Seller</th>
                <th className="px-4 py-4">Category</th>
                <th className="px-4 py-4">Status</th>
                <th className="px-4 py-4">Reports</th>
                <th className="px-4 py-4">Created</th>
                <th className="px-5 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                products.map((product, index) => (
                  <tr key={product.id} className="border-t border-[#EEF1F5] hover:bg-[#FBFDFE] transition">
                    <td className="px-5 py-4">
                      <button
                        type="button"
                        onClick={() => setSelectedProductId(product.id)}
                        className="flex items-center gap-3 text-left group"
                      >
                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${productImageGradients[index % productImageGradients.length]}`}>
                          <div className="h-5 w-5 rounded bg-white/80" />
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-[14px] font-semibold text-[#0B1220] group-hover:text-primary transition">
                            {product.product}
                          </p>
                          <p className="text-[11px] text-[#94A3B8]">ID: {product.id}</p>
                        </div>
                      </button>
                    </td>
                    <td className="px-4 py-4 text-[13px] text-[#334155]">{product.seller?.name || product.sellerId}</td>
                    <td className="px-4 py-4 text-[13px] text-[#0B1220] font-medium">{product.category}</td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold ${statusChipStyles[product.status] || 'bg-[#F1F5F9] text-[#475569]'}`}>
                        {statusLabels[product.status] || product.status}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      {product.reports > 0 ? (
                        <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                          product.reports >= 3 ? 'bg-[#FEF2F2] text-[#DC2626]' : 'bg-[#FFF7ED] text-[#C2410C]'
                        }`}>
                          <span className="h-1.5 w-1.5 rounded-full bg-current" />
                          {product.reports} {product.reports === 1 ? 'report' : 'reports'}
                        </span>
                      ) : (
                        <span className="text-[13px] text-[#94A3B8]">0</span>
                      )}
                    </td>
                    <td className="px-4 py-4 text-[13px] text-[#475569]">{formatDisplayDate(product.created || product.createdAt)}</td>
                    <td className="px-5 py-4">
                      <div className="flex justify-end items-center gap-2 whitespace-nowrap">
                        <button
                          type="button"
                          onClick={() => setSelectedProductId(product.id)}
                          className="rounded-xl border border-[#E2E8F0] bg-white px-3 py-1.5 text-[12px] font-semibold text-[#334155] hover:bg-[#F8FAFC] transition shadow-xs"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          onClick={() => handleProductAction('toggle_listing', product)}
                          className="rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-3 py-1.5 text-[12px] font-medium text-[#475569] hover:bg-[#F1F5F9] transition"
                        >
                          {product.status === PRODUCT_STATUS.LISTED ? 'Unlist' : 'List'}
                        </button>
                        {product.status !== PRODUCT_STATUS.BLOCKED && (
                          <button
                            type="button"
                            onClick={() => handleProductAction('block', product)}
                            className="rounded-xl bg-[#FEF2F2] px-3 py-1.5 text-[12px] font-semibold text-[#DC2626] hover:bg-[#FEE2E2] transition"
                          >
                            Block
                          </button>
                        )}
                        {isAdmin && (
                          <button
                            type="button"
                            onClick={() => handleProductAction('soft_delete', product)}
                            className="rounded-xl border border-[#E2E8F0] px-3 py-1.5 text-[12px] font-medium text-[#64748B] hover:bg-[#F8FAFC] transition"
                          >
                            Archive
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="border-t border-[#EEF1F5]">
                  <td colSpan="7" className="px-5 py-10 text-center text-[14px] text-[#64748B]">
                    No products match the current search or filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between border-t border-[#EEF1F5] px-5 py-4 text-sm text-[#64748B]">
          <span>
            Showing page {pagination?.page || 1} of {pagination?.totalPages || 1} ({pagination?.total || products.length} total)
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={!pagination || pagination.page <= 1}
              onClick={() => setCurrentPage((currentValue) => Math.max(1, currentValue - 1))}
              className="rounded-xl border border-[#E2E8F0] bg-white px-4 py-2 text-[13px] font-medium text-[#334155] disabled:text-[#CBD5E1] hover:bg-[#F8FAFC] transition shadow-xs"
            >
              Previous
            </button>
            <button
              type="button"
              disabled={!pagination || pagination.page >= pagination.totalPages}
              onClick={() => setCurrentPage((currentValue) => currentValue + 1)}
              className="rounded-xl border border-[#E2E8F0] bg-white px-4 py-2 text-[13px] font-medium text-[#0F172A] disabled:text-[#CBD5E1] hover:bg-[#F8FAFC] transition shadow-xs"
            >
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Confirmation Modal */}
      <Modal
        open={Boolean(pendingProductAction)}
        title={selectedAction?.title}
        description={selectedAction && pendingProductAction ? `${selectedAction.description} Product: ${pendingProductAction.product.product}.` : ''}
        confirmLabel={selectedAction?.confirmLabel}
        tone={selectedAction?.tone}
        onClose={() => setPendingProductAction(null)}
        onConfirm={confirmProductAction}
      />

      {/* Product Details Drawer */}
      <ProductDetailsDrawer
        productId={selectedProductId}
        onClose={() => setSelectedProductId(null)}
        onStatusChange={handleDrawerStatusChange}
        onDelete={handleDrawerDelete}
        isAdmin={isAdmin}
      />
    </div>
  )
}

export default memo(Products)
