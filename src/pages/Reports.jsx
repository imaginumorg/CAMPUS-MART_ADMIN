import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import DataTable, { StatusBadge } from '../components/DataTable'
import Modal from '../components/Modal'
import { useFetch } from '../hooks/useFetch'
import { api } from '../services/api'
import { PRODUCT_STATUS, REPORT_THRESHOLD } from '../utils/constants'

const Reports = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [reportPendingBlock, setReportPendingBlock] = useState(null)

  useEffect(() => {
    const debounceTimer = window.setTimeout(() => {
      setDebouncedSearchQuery(searchQuery)
      setCurrentPage(1)
    }, 300)

    return () => window.clearTimeout(debounceTimer)
  }, [searchQuery])

  const loadReports = useCallback(() => api.getReports({ search: debouncedSearchQuery, page: currentPage }), [debouncedSearchQuery, currentPage])
  const { data: reports = [], pagination, loading, refetch } = useFetch(loadReports)

  const handleIgnoreReport = useCallback(async (reportId) => {
    await api.ignoreReport(reportId)
    refetch()
  }, [refetch])

  const confirmProductBlockFromReport = useCallback(async () => {
    await api.updateProduct(reportPendingBlock.productId, { status: PRODUCT_STATUS.BLOCKED })
    await api.ignoreReport(reportPendingBlock.id)
    setReportPendingBlock(null)
    refetch()
  }, [reportPendingBlock, refetch])

  const reportTableColumns = useMemo(
    () => [
      { key: 'product', header: 'Product' },
      { key: 'reason', header: 'Reason' },
      { key: 'reportCount', header: 'Report count' },
      {
        key: 'status',
        header: 'Status',
        render: (row) => <StatusBadge status={row.reportCount >= REPORT_THRESHOLD ? 'auto-flagged' : 'pending'} />,
      },
      { key: 'created', header: 'Created' },
      {
        key: 'actions',
        header: 'Actions',
        render: (row) => (
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setReportPendingBlock(row)}
              className="rounded-xl bg-[#DC2626] px-3 py-2 text-sm font-semibold text-white"
            >
              Block product
            </button>
            <button
              type="button"
              onClick={() => handleIgnoreReport(row.id)}
              className="rounded-xl border border-neutral-300 bg-[#FCFCFC] px-3 py-2 text-sm font-semibold text-[#64707D]"
            >
              Ignore report
            </button>
          </div>
        ),
      },
    ],
    [handleIgnoreReport],
  )

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
        <div className="mb-4 h-2 w-16 rounded-xl bg-primary" />
        <h1 className="text-2xl font-bold text-[#64707D]">Reports</h1>
        <p className="mt-1 text-sm text-[#7A8697]">Review listing reports against moderation thresholds.</p>
      </div>
      <DataTable
        columns={reportTableColumns}
        rows={reports}
        loading={loading}
        pagination={pagination}
        onPageChange={setCurrentPage}
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
        searchPlaceholder="Search reports"
      />
      <Modal
        open={Boolean(reportPendingBlock)}
        title="Block product"
        description={reportPendingBlock ? `Block ${reportPendingBlock.product} and close this report?` : ''}
        confirmLabel="Block"
        tone="danger"
        onClose={() => setReportPendingBlock(null)}
        onConfirm={confirmProductBlockFromReport}
      />
    </div>
  )
}

export default memo(Reports)
