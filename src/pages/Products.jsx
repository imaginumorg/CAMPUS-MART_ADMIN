import { memo, useCallback, useEffect, useState } from 'react'
import Modal from '../components/Modal'
import Loader from '../components/Loader'
import { useFetch } from '../hooks/useFetch'
import { api } from '../services/api'
import { PRODUCT_STATUS } from '../utils/constants'

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
    description: 'This will permanently remove the product from the mock data store.',
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

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('')
  const [selectedStatusFilter, setSelectedStatusFilter] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [pendingProductAction, setPendingProductAction] = useState(null)

  useEffect(() => {
    const debounceTimer = window.setTimeout(() => {
      setDebouncedSearchQuery(searchQuery)
      setCurrentPage(1)
    }, 120)

    return () => window.clearTimeout(debounceTimer)
  }, [searchQuery])

  const loadProducts = useCallback(
    () => api.getProducts({ search: debouncedSearchQuery, status: selectedStatusFilter, page: currentPage }),
    [debouncedSearchQuery, selectedStatusFilter, currentPage],
  )
  const { data: products = [], pagination, loading, refetch } = useFetch(loadProducts)

  const handleProductAction = useCallback(
    async (action, product) => {
      if (action === 'unlist') {
        await api.updateProduct(product.id, { status: PRODUCT_STATUS.UNLISTED })
        refetch()
        return
      }

      setPendingProductAction({ action, product })
    },
    [refetch],
  )

  const confirmProductAction = useCallback(async () => {
    if (!pendingProductAction) return

    const { action, product } = pendingProductAction

    if (action === 'block') await api.updateProduct(product.id, { status: PRODUCT_STATUS.BLOCKED })
    if (action === 'soft_delete') await api.updateProduct(product.id, { is_deleted: true })
    if (action === 'hard_delete') await api.hardDeleteProduct(product.id)

    setPendingProductAction(null)
    refetch()
  }, [pendingProductAction, refetch])

  const selectedAction = pendingProductAction ? productActionConfig[pendingProductAction.action] : null

  if (loading && !products.length) return <Loader rows={4} columns={8} />

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="text-[24px] font-semibold tracking-[-0.03em] text-[#0B1220]">Products</h1>
          <p className="mt-1 text-[14px] text-[#475569]">Moderate marketplace listings and removal actions.</p>
        </div>
        <select
          value={selectedStatusFilter}
          onChange={(event) => {
            setSelectedStatusFilter(event.target.value)
            setCurrentPage(1)
          }}
          className="h-10 rounded-xl border border-[#D9E0EA] bg-white px-4 text-sm font-medium text-[#0B1220] outline-none"
        >
          <option value="">All statuses</option>
          {Object.values(PRODUCT_STATUS).map((statusOption) => (
            <option key={statusOption} value={statusOption}>
              {statusOption}
            </option>
          ))}
        </select>
      </div>

      <div className="max-w-md">
        <div className="flex items-center gap-3 rounded-xl border border-[#E2E8F0] bg-white px-4 py-2.5 shadow-sm">
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

      <section className="overflow-hidden rounded-[20px] bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px] text-left">
            <thead className="bg-[#F8FAFC] text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748B]">
              <tr>
                <th className="px-5 py-4">Product</th>
                <th className="px-4 py-4">Product ID</th>
                <th className="px-4 py-4">Seller ID</th>
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
                  <tr key={product.id} className="border-t border-[#EEF1F5]">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${productImageGradients[index % productImageGradients.length]}`}>
                          <div className="h-5 w-5 rounded bg-white/80" />
                        </div>
                        <span className="text-[14px] font-medium text-[#0B1220]">{product.product}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-[12px] text-[#64748B]">849201748291045</td>
                    <td className="px-4 py-4 text-[12px] text-[#64748B]">SL-{99210 + index * 2324}</td>
                    <td className="px-4 py-4 text-[14px] text-[#0B1220]">{product.category}</td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold ${
                        index === 0 ? 'bg-[#EEF2FF] text-primary' : product.reports >= 3 ? 'bg-[#EEF2FF] text-primary' : 'bg-[#F1F5F9] text-[#475569]'
                      }`}>
                        {index === 0 ? 'Live' : product.reports >= 3 ? 'Auto Flagged' : 'Pending'}
                      </span>
                    </td>
                    <td className={`px-4 py-4 text-[14px] font-medium ${product.reports >= 3 ? 'text-[#DC2626]' : 'text-[#0F172A]'}`}>{product.reports}</td>
                    <td className="px-4 py-4 text-[13px] text-[#334155]">{index === 0 ? 'Oct 12, 2023' : index === 1 ? 'Nov 05, 2023' : 'Nov 18, 2023'}</td>
                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-2 whitespace-nowrap">
                        <button
                          type="button"
                          onClick={() => handleProductAction('unlist', product)}
                          className="rounded-xl bg-[#F8FAFC] px-4 py-2.5 text-[12px] font-medium text-[#475569]"
                        >
                          Unlist
                        </button>
                        <button
                          type="button"
                          onClick={() => handleProductAction('block', product)}
                          className="rounded-xl bg-[#DC2626] px-4 py-2.5 text-[12px] font-medium text-white"
                        >
                          Block
                        </button>
                        <button
                          type="button"
                          onClick={() => handleProductAction('soft_delete', product)}
                          className="rounded-xl bg-[#F8FAFC] px-4 py-2.5 text-[12px] font-medium text-[#475569]"
                        >
                          Soft delete
                        </button>
                        <button
                          type="button"
                          onClick={() => handleProductAction('hard_delete', product)}
                          className="rounded-xl bg-[#B91C1C] px-4 py-2.5 text-[12px] font-medium text-white"
                        >
                          Hard delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="border-t border-[#EEF1F5]">
                  <td colSpan="8" className="px-5 py-10 text-center text-[14px] text-[#64748B]">
                    No products match the current search or filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-end gap-4 px-5 py-5 text-sm text-[#64748B]">
          <span>
            Page {pagination?.page || 1} of {pagination?.totalPages || 1}
          </span>
          <button
            type="button"
            disabled={!pagination || pagination.page <= 1}
            onClick={() => setCurrentPage((currentValue) => Math.max(1, currentValue - 1))}
            className="rounded-xl border border-[#E2E8F0] px-4 py-2 disabled:text-[#CBD5E1]"
          >
            Previous
          </button>
          <button
            type="button"
            disabled={!pagination || pagination.page >= pagination.totalPages}
            onClick={() => setCurrentPage((currentValue) => currentValue + 1)}
            className="rounded-xl border border-[#D9E0EA] bg-white px-4 py-2 text-[#0F172A] disabled:text-[#CBD5E1]"
          >
            Next
          </button>
        </div>
      </section>

      <section className="max-w-sm rounded-[18px] bg-white p-5 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EEF2FF] text-primary">
            <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="m8 12 2.5 2.5L16 9" />
            </svg>
          </div>
          <div>
            <p className="text-[17px] font-semibold text-[#101828]">1,284 Total Resolved</p>
            <p className="text-[13px] text-[#64748B]">Reports Resolved</p>
          </div>
        </div>
      </section>

      <Modal
        open={Boolean(pendingProductAction)}
        title={selectedAction?.title}
        description={selectedAction && pendingProductAction ? `${selectedAction.description} Product: ${pendingProductAction.product.product}.` : ''}
        confirmLabel={selectedAction?.confirmLabel}
        tone={selectedAction?.tone}
        onClose={() => setPendingProductAction(null)}
        onConfirm={confirmProductAction}
      />
    </div>
  )
}

export default memo(Products)
