import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import DataTable, { StatusBadge } from '../components/DataTable'
import Modal from '../components/Modal'
import { useFetch } from '../hooks/useFetch'
import { api } from '../services/api'
import { PRODUCT_STATUS } from '../utils/constants'

const ACTIONS = {
  BLOCK: 'block',
  UNLIST: 'unlist',
  SOFT_DELETE: 'soft_delete',
  HARD_DELETE: 'hard_delete',
}

const actionModalContent = {
  [ACTIONS.BLOCK]: {
    title: 'Block product',
    description: 'This product will be blocked and hidden from marketplace moderation views.',
    confirmLabel: 'Block',
  },
  [ACTIONS.SOFT_DELETE]: {
    title: 'Soft delete product',
    description: 'This product will be marked as deleted and removed from active tables.',
    confirmLabel: 'Soft delete',
  },
  [ACTIONS.HARD_DELETE]: {
    title: 'Hard delete product',
    description: 'This permanently removes the product and related reports from mock storage.',
    confirmLabel: 'Hard delete',
  },
}

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
    }, 300)

    return () => window.clearTimeout(debounceTimer)
  }, [searchQuery])

  const loadProducts = useCallback(
    () => api.getProducts({ search: debouncedSearchQuery, status: selectedStatusFilter, page: currentPage }),
    [debouncedSearchQuery, selectedStatusFilter, currentPage],
  )
  const { data: products = [], pagination, loading, refetch } = useFetch(loadProducts)

  const handleProductAction = useCallback(async ({ action, product }) => {
    if (action === ACTIONS.UNLIST) {
      await api.updateProduct(product.id, { status: PRODUCT_STATUS.UNLISTED })
      refetch()
      return
    }

    setPendingProductAction({ action, product })
  }, [refetch])

  const confirmProductAction = useCallback(async () => {
    const { action, product } = pendingProductAction

    if (action === ACTIONS.BLOCK) await api.updateProduct(product.id, { status: PRODUCT_STATUS.BLOCKED })
    if (action === ACTIONS.SOFT_DELETE) await api.updateProduct(product.id, { is_deleted: true })
    if (action === ACTIONS.HARD_DELETE) await api.hardDeleteProduct(product.id)

    setPendingProductAction(null)
    refetch()
  }, [pendingProductAction, refetch])

  const productTableColumns = useMemo(
    () => [
      { key: 'product', header: 'Product' },
      { key: 'seller', header: 'Seller' },
      { key: 'category', header: 'Category' },
      { key: 'price', header: 'Price' },
      { key: 'status', header: 'Status', render: (row) => <StatusBadge status={row.status} /> },
      { key: 'reports', header: 'Reports' },
      { key: 'created', header: 'Created' },
      {
        key: 'actions',
        header: 'Actions',
        render: (row) => (
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => handleProductAction({ action: ACTIONS.BLOCK, product: row })}
              className="rounded-xl bg-[#DC2626] px-3 py-2 text-sm font-semibold text-white"
            >
              Block
            </button>
            <button
              type="button"
              onClick={() => handleProductAction({ action: ACTIONS.UNLIST, product: row })}
              className="rounded-xl border border-neutral-300 bg-[#FCFCFC] px-3 py-2 text-sm font-semibold text-[#64707D]"
            >
              Unlist
            </button>
            <button
              type="button"
              onClick={() => handleProductAction({ action: ACTIONS.SOFT_DELETE, product: row })}
              className="rounded-xl border border-[#FECACA] bg-[#FEF2F2] px-3 py-2 text-sm font-semibold text-[#DC2626]"
            >
              Soft delete
            </button>
            <button
              type="button"
              onClick={() => handleProductAction({ action: ACTIONS.HARD_DELETE, product: row })}
              className="rounded-xl border border-[#FECACA] bg-white px-3 py-2 text-sm font-semibold text-[#DC2626]"
            >
              Hard delete
            </button>
          </div>
        ),
      },
    ],
    [handleProductAction],
  )

  const selectedActionModal = pendingProductAction ? actionModalContent[pendingProductAction.action] : null

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
        <div className="mb-4 h-2 w-16 rounded-xl bg-primary" />
        <h1 className="text-2xl font-bold text-[#64707D]">Products</h1>
        <p className="mt-1 text-sm text-[#7A8697]">Moderate marketplace listings and removal actions.</p>
      </div>
      <DataTable
        columns={productTableColumns}
        rows={products}
        loading={loading}
        pagination={pagination}
        onPageChange={setCurrentPage}
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
        searchPlaceholder="Search products"
        filters={
          <select
            value={selectedStatusFilter}
            onChange={(event) => {
              setSelectedStatusFilter(event.target.value)
              setCurrentPage(1)
            }}
            className="rounded-xl border border-neutral-300 bg-[#FCFCFC] px-3 py-2.5 text-sm font-semibold text-[#64707D] outline-none focus:border-primary"
          >
            <option value="">All statuses</option>
            {Object.values(PRODUCT_STATUS).map((productStatus) => (
              <option key={productStatus} value={productStatus}>
                {productStatus}
              </option>
            ))}
          </select>
        }
      />
      <Modal
        open={Boolean(pendingProductAction)}
        title={selectedActionModal?.title}
        description={selectedActionModal ? `${selectedActionModal.description} Product: ${pendingProductAction.product.product}.` : ''}
        confirmLabel={selectedActionModal?.confirmLabel}
        tone="danger"
        onClose={() => setPendingProductAction(null)}
        onConfirm={confirmProductAction}
      />
    </div>
  )
}

export default memo(Products)
