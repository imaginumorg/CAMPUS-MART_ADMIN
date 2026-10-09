import { memo, useCallback, useState, useMemo } from 'react'
import EmptyState from '../../../shared/components/EmptyState'
import Loader from '../../../shared/components/Loader'
import Modal from '../../../shared/components/Modal'
import { useToast } from '../../../shared/components/ToastContext'
import { useFetch } from '../../../shared/hooks/useFetch'
import { moderationApi } from '../api/moderationApi'
import { productsApi } from '../../products/api/productsApi'
import { usersApi } from '../../users/api/usersApi'
import { REPORT_REASON_LABELS, STATUS_BADGE_STYLES } from '../../../shared/constants/constants'
import { useAuth } from '../../auth/context/AuthContext'

const PRIORITY_STYLES = {
  high: 'bg-[#FEF2F2] text-[#DC2626] border-[#FECACA]',
  medium: 'bg-[#FFF7ED] text-[#C2410C] border-[#FED7AA]',
  low: 'bg-[#F1F5F9] text-[#64748B] border-[#E2E8F0]',
}

const PRIORITY_DOT = {
  high: 'bg-[#DC2626]',
  medium: 'bg-[#F59E0B]',
  low: 'bg-[#94A3B8]',
}

const formatDate = (d) =>
  d
    ? new Intl.DateTimeFormat('en', { month: 'short', day: '2-digit', year: 'numeric' }).format(new Date(d))
    : '—'

const ModerationQueue = () => {
  const { admin } = useAuth()
  const isAdmin = admin?.role === 'admin'
  const { showToast } = useToast()

  const [targetModelFilter, setTargetModelFilter] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [dismissConfirm, setDismissConfirm] = useState(null)
  const [actionConfirm, setActionConfirm] = useState(null)
  const [isActing, setIsActing] = useState(false)

  const loadQueue = useCallback(
    () => moderationApi.getQueue({ target_model: targetModelFilter, page: currentPage }),
    [targetModelFilter, currentPage],
  )

  const { data: queueItems = [], pagination, loading, error, refetch } = useFetch(loadQueue)

  const confirmDismiss = useCallback(async () => {
    if (!dismissConfirm) return
    setIsActing(true)
    const res = await moderationApi.dismissReports({
      targetId: dismissConfirm.targetId,
      targetModel: dismissConfirm.targetModel,
    })
    setIsActing(false)
    setDismissConfirm(null)
    if (res.success) {
      showToast({ type: 'success', message: `Dismissed ${res.data?.dismissedCount || ''} reports` })
    } else {
      showToast({ type: 'error', message: res.message })
    }
    refetch()
  }, [dismissConfirm, refetch, showToast])

  const handleQuickAction = useCallback(
    async (item, action) => {
      setIsActing(true)
      let res
      if (item.targetModel === 'Product') {
        if (action === 'block') res = await productsApi.updateProduct(item.targetId, { status: 'blocked' })
        else if (action === 'unlist') res = await productsApi.updateProduct(item.targetId, { status: 'unlisted' })
        else if (action === 'delete') res = await productsApi.hardDeleteProduct(item.targetId)
      } else if (item.targetModel === 'User') {
        if (action === 'suspend') res = await usersApi.updateUserStatus(item.targetId, 'suspended')
        else if (action === 'activate') res = await usersApi.updateUserStatus(item.targetId, 'active')
      }
      setIsActing(false)
      setActionConfirm(null)
      if (res?.success) {
        showToast({ type: 'success', message: `Action applied successfully` })
        refetch()
      } else {
        showToast({ type: 'error', message: res?.message || 'Action failed' })
      }
    },
    [refetch, showToast],
  )

  if (loading && !queueItems.length) return <Loader rows={5} columns={4} />

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="text-[24px] font-semibold tracking-[-0.03em] text-[#0B1220]">Moderation Queue</h1>
          <p className="mt-1 text-[14px] text-[#475569]">
            Grouped by reported target · sorted by report count. High-priority items need immediate attention.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {pagination?.total != null && (
            <span className="rounded-full bg-[#FEF2F2] px-3 py-1.5 text-[12px] font-semibold text-[#DC2626]">
              {pagination.total} pending
            </span>
          )}
        </div>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-2">
        {[
          { label: 'All', value: '' },
          { label: 'Products', value: 'Product' },
          { label: 'Users', value: 'User' },
        ].map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => { setTargetModelFilter(f.value); setCurrentPage(1) }}
            className={`rounded-xl px-4 py-2 text-[13px] font-semibold transition ${
              targetModelFilter === f.value
                ? 'bg-primary text-white shadow-sm'
                : 'bg-white text-[#334155] hover:bg-[#F8FAFC] border border-[#E2E8F0]'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {error ? (
        <EmptyState message={error} />
      ) : queueItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-[20px] bg-white py-16 shadow-sm ring-1 ring-[#E8ECF4]">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#ECFDF3]">
            <svg viewBox="0 0 24 24" className="h-8 w-8 text-[#16A34A]" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m5 12 5 5L20 7" />
            </svg>
          </div>
          <p className="text-[16px] font-semibold text-[#0B1220]">Queue is clear!</p>
          <p className="mt-1 text-[13px] text-[#64748B]">No pending reports match the current filter.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {queueItems.map((item) => (
            <article
              key={`${item.targetModel}-${item.targetId}`}
              className={`rounded-[18px] border bg-white p-4 shadow-sm transition ${
                item.priority === 'high' ? 'border-[#FECACA]' : 'border-[#E2E8F0]'
              }`}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                {/* Left: target info */}
                <div className="flex min-w-0 flex-1 gap-4">
                  {/* Priority badge */}
                  <div className="flex flex-col items-center gap-1">
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[11px] font-bold border ${PRIORITY_STYLES[item.priority]}`}>
                      {item.reportCount}
                    </span>
                    <span className={`h-2 w-2 rounded-full ${PRIORITY_DOT[item.priority]}`} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider border ${PRIORITY_STYLES[item.priority]}`}>
                        {item.priority} priority
                      </span>
                      <span className="rounded-full bg-[#F1F5F9] px-2.5 py-0.5 text-[10px] font-semibold text-[#64748B]">
                        {item.targetModel}
                      </span>
                    </div>

                    {item.target ? (
                      <div className="mt-2">
                        {item.target.type === 'product' ? (
                          <div className="flex gap-3">
                            {item.target.image && (
                              <img
                                src={item.target.image}
                                alt={item.target.title}
                                className="h-12 w-12 rounded-xl object-cover ring-1 ring-[#E2E8F0]"
                              />
                            )}
                            <div className="min-w-0">
                              <p className="truncate text-[14px] font-semibold text-[#0B1220]">{item.target.title}</p>
                              <p className="text-[12px] text-[#64748B]">
                                {item.target.category} ·{' '}
                                <span className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold ${STATUS_BADGE_STYLES[item.target.status] || ''}`}>
                                  {item.target.status}
                                </span>
                              </p>
                              {item.target.seller && (
                                <p className="mt-0.5 text-[12px] text-[#94A3B8]">
                                  by {item.target.seller.name}
                                </p>
                              )}
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#3838EC] to-[#8B5CF6] text-[14px] font-bold text-white">
                              {item.target.name?.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <p className="text-[14px] font-semibold text-[#0B1220]">{item.target.name}</p>
                              <p className="text-[12px] text-[#64748B]">{item.target.email}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <p className="mt-2 text-[13px] text-[#94A3B8]">Target removed or unavailable</p>
                    )}

                    {/* Reasons */}
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {(item.reasons || []).map((reason) => (
                        <span key={reason} className="rounded-full bg-[#F1F5F9] px-2.5 py-0.5 text-[10px] font-semibold text-[#475569]">
                          {REPORT_REASON_LABELS[reason] || reason}
                        </span>
                      ))}
                    </div>

                    <p className="mt-1.5 text-[11px] text-[#94A3B8]">
                      First reported {formatDate(item.firstReport)} · Last {formatDate(item.latestReport)}
                    </p>
                  </div>
                </div>

                {/* Right: actions */}
                <div className="flex shrink-0 flex-wrap gap-2 md:flex-col md:items-end">
                  {item.target && item.targetModel === 'Product' && (
                    <>
                      <button
                        type="button"
                        disabled={isActing || item.target.status === 'blocked'}
                        onClick={() => setActionConfirm({ item, action: 'block', label: 'Block product' })}
                        className="rounded-xl bg-[#FEF2F2] px-3 py-2 text-[12px] font-semibold text-[#DC2626] disabled:opacity-40"
                      >
                        Block
                      </button>
                      <button
                        type="button"
                        disabled={isActing || item.target.status === 'unlisted'}
                        onClick={() => setActionConfirm({ item, action: 'unlist', label: 'Unlist product' })}
                        className="rounded-xl bg-[#FFF7ED] px-3 py-2 text-[12px] font-semibold text-[#C2410C] disabled:opacity-40"
                      >
                        Unlist
                      </button>
                      {isAdmin && (
                        <button
                          type="button"
                          disabled={isActing}
                          onClick={() => setActionConfirm({ item, action: 'delete', label: 'Delete product permanently' })}
                          className="rounded-xl bg-[#F1F5F9] px-3 py-2 text-[12px] font-semibold text-[#334155] disabled:opacity-40"
                        >
                          Delete
                        </button>
                      )}
                    </>
                  )}

                  {item.target && item.targetModel === 'User' && (
                    <>
                      {item.target.status !== 'suspended' ? (
                        <button
                          type="button"
                          disabled={isActing}
                          onClick={() => setActionConfirm({ item, action: 'suspend', label: 'Suspend user' })}
                          className="rounded-xl bg-[#FEF2F2] px-3 py-2 text-[12px] font-semibold text-[#DC2626] disabled:opacity-40"
                        >
                          Suspend
                        </button>
                      ) : (
                        <button
                          type="button"
                          disabled={isActing}
                          onClick={() => handleQuickAction(item, 'activate')}
                          className="rounded-xl bg-[#ECFDF3] px-3 py-2 text-[12px] font-semibold text-[#15803D] disabled:opacity-40"
                        >
                          Activate
                        </button>
                      )}
                    </>
                  )}

                  <button
                    type="button"
                    disabled={isActing}
                    onClick={() => setDismissConfirm(item)}
                    className="rounded-xl bg-[#F1F5F9] px-3 py-2 text-[12px] font-semibold text-[#64748B] disabled:opacity-40"
                  >
                    Dismiss all
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Pagination */}
      {pagination && pagination.totalPages > 1 && (
        <div className="flex items-center justify-between text-[13px] text-[#64748B]">
          <span>Page {pagination.page} of {pagination.totalPages}</span>
          <div className="flex gap-2">
            <button
              type="button"
              disabled={pagination.page <= 1}
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="rounded-xl border border-[#E2E8F0] px-4 py-2 disabled:opacity-40"
            >
              Previous
            </button>
            <button
              type="button"
              disabled={pagination.page >= pagination.totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="rounded-xl border border-primary px-4 py-2 font-medium text-primary disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Dismiss confirm */}
      <Modal
        open={Boolean(dismissConfirm)}
        title="Dismiss all reports"
        description={
          dismissConfirm
            ? `Dismiss all pending reports for this ${dismissConfirm.targetModel.toLowerCase()}? The content will remain visible.`
            : ''
        }
        confirmLabel="Dismiss"
        tone="default"
        onClose={() => setDismissConfirm(null)}
        onConfirm={confirmDismiss}
      />

      {/* Action confirm */}
      <Modal
        open={Boolean(actionConfirm)}
        title={actionConfirm?.label || ''}
        description={
          actionConfirm
            ? `Are you sure you want to ${actionConfirm.action} this ${actionConfirm.item.targetModel.toLowerCase()}? This action will be logged.`
            : ''
        }
        confirmLabel="Confirm"
        tone={['block', 'delete', 'suspend'].includes(actionConfirm?.action) ? 'danger' : 'default'}
        onClose={() => setActionConfirm(null)}
        onConfirm={() => handleQuickAction(actionConfirm.item, actionConfirm.action)}
      />
    </div>
  )
}

export default memo(ModerationQueue)
