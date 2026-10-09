import { memo, useCallback, useState } from 'react'
import EmptyState from '../../../shared/components/EmptyState'
import Loader from '../../../shared/components/Loader'
import { useFetch } from '../../../shared/hooks/useFetch'
import { auditLogApi } from '../api/auditLogApi'
import { AUDIT_ACTION_LABELS } from '../../../shared/constants/constants'

const formatDateTime = (dateValue) => {
  if (!dateValue) return '—'
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(dateValue))
}

const formatRelativeTime = (dateValue) => {
  if (!dateValue) return ''
  const diff = Date.now() - new Date(dateValue).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 1) return 'Just now'
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  return `${Math.floor(hrs / 24)}d ago`
}

const actionToneMap = {
  'user.suspend': 'danger',
  'product.block': 'danger',
  'product.hard_delete': 'danger',
  'product.soft_delete': 'danger',
  'campus.pause': 'warning',
  'campus.create': 'success',
  'campus.activate': 'success',
  'user.activate': 'success',
  'product.activate': 'success',
  'report.dismiss': 'neutral',
}

const toneStyles = {
  danger: 'bg-[#FEF2F2] text-[#DC2626] border-[#FECACA]',
  warning: 'bg-[#FFF7ED] text-[#C2410C] border-[#FED7AA]',
  success: 'bg-[#ECFDF3] text-[#15803D] border-[#BBF7D0]',
  neutral: 'bg-[#F1F5F9] text-[#64748B] border-[#E2E8F0]',
  primary: 'bg-[#EEF2FF] text-[#3838EC] border-[#C7D2FE]',
}

const AuditLog = () => {
  const [targetTypeFilter, setTargetTypeFilter] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const loadLogs = useCallback(
    () => auditLogApi.getLogs({ target_type: targetTypeFilter, page: currentPage, limit: 15 }),
    [targetTypeFilter, currentPage],
  )

  const { data: logs = [], pagination, loading, error, refetch } = useFetch(loadLogs)

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="text-[24px] font-semibold tracking-[-0.03em] text-[#0B1220]">Audit Log</h1>
          <p className="mt-1 text-[14px] text-[#475569]">
            Immutable, append-only history of administrative actions, moderation decisions, and system updates.
          </p>
        </div>
        <button
          type="button"
          onClick={() => refetch()}
          className="flex items-center gap-2 self-start rounded-xl border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-medium text-[#334155] shadow-xs hover:bg-[#F8FAFC] transition"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#64748B]" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
            <path d="M3 3v5h5" />
            <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
            <path d="M16 21h5v-5" />
          </svg>
          Refresh
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {[
          { label: 'All Targets', value: '' },
          { label: 'Users', value: 'user' },
          { label: 'Products', value: 'product' },
          { label: 'Campuses', value: 'campus' },
          { label: 'Reports', value: 'report' },
        ].map((tab) => (
          <button
            key={tab.value}
            type="button"
            onClick={() => {
              setTargetTypeFilter(tab.value)
              setCurrentPage(1)
            }}
            className={`rounded-xl px-4 py-2 text-[13px] font-semibold transition ${
              targetTypeFilter === tab.value
                ? 'bg-primary text-white shadow-xs'
                : 'border border-[#E2E8F0] bg-white text-[#334155] hover:bg-[#F8FAFC]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Table Section */}
      {loading && !logs.length ? (
        <Loader rows={6} columns={5} />
      ) : error ? (
        <EmptyState message={error} />
      ) : logs.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-[20px] bg-white py-16 shadow-sm ring-1 ring-[#E8ECF4]">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#F1F5F9] text-[#64748B]">
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
              <path d="M8 13h8" />
              <path d="M8 17h5" />
            </svg>
          </div>
          <p className="text-[16px] font-semibold text-[#0B1220]">No audit records found</p>
          <p className="mt-1 text-[13px] text-[#64748B]">
            Actions taken by admins and support will be recorded here automatically.
          </p>
        </div>
      ) : (
        <section className="overflow-hidden rounded-[20px] bg-white shadow-sm ring-1 ring-[#E8ECF4]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[860px] text-left">
              <thead className="bg-[#F8FAFC] text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                <tr>
                  <th className="px-5 py-4">Timestamp</th>
                  <th className="px-4 py-4">Actor</th>
                  <th className="px-4 py-4">Action</th>
                  <th className="px-4 py-4">Target Entity</th>
                  <th className="px-5 py-4">Details / Metadata</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EEF1F5]">
                {logs.map((entry) => {
                  const tone = actionToneMap[entry.action] || 'neutral'
                  const toneClass = toneStyles[tone] || toneStyles.neutral

                  return (
                    <tr key={entry._id || entry.id} className="hover:bg-[#FBFDFE] transition">
                      <td className="px-5 py-4">
                        <p className="text-[13px] font-medium text-[#0B1220]">{formatDateTime(entry.createdAt)}</p>
                        <p className="text-[11px] text-[#94A3B8]">{formatRelativeTime(entry.createdAt)}</p>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EEF2FF] text-[12px] font-bold text-primary">
                            {(entry.actor_name || 'A')[0].toUpperCase()}
                          </div>
                          <div>
                            <p className="text-[13px] font-semibold text-[#0B1220]">{entry.actor_name}</p>
                            <span className="inline-block rounded-full bg-[#F1F5F9] px-2 py-0.2 text-[10px] font-semibold uppercase tracking-wider text-[#64748B]">
                              {entry.actor_role}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className={`inline-flex items-center rounded-lg border px-2.5 py-1 text-[11px] font-semibold ${toneClass}`}>
                          {AUDIT_ACTION_LABELS[entry.action] || entry.action}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <p className="text-[13px] font-medium capitalize text-[#0B1220]">
                          {entry.target_type}
                        </p>
                        {entry.target_snapshot ? (
                          <p className="text-[12px] text-[#64748B]">
                            {entry.target_snapshot.name ||
                              entry.target_snapshot.title ||
                              entry.target_snapshot.slug ||
                              `ID: ${entry.target_id}`}
                          </p>
                        ) : (
                          <p className="text-[11px] text-[#94A3B8]">ID: {entry.target_id}</p>
                        )}
                      </td>
                      <td className="px-5 py-4 text-[12px] text-[#475569]">
                        {entry.note ? (
                          <p className="italic text-[#334155]">"{entry.note}"</p>
                        ) : entry.metadata ? (
                          <code className="rounded bg-[#F8FAFC] px-2 py-1 font-mono text-[11px] text-[#475569]">
                            {JSON.stringify(entry.metadata)}
                          </code>
                        ) : (
                          <span className="text-[#CBD5E1]">—</span>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between border-t border-[#EEF1F5] px-5 py-4 text-sm text-[#64748B]">
            <span>
              Page {pagination?.page || 1} of {pagination?.totalPages || 1} ({pagination?.total || logs.length} actions)
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={!pagination || pagination.page <= 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="rounded-xl border border-[#E2E8F0] bg-white px-4 py-2 text-[13px] font-medium text-[#334155] disabled:text-[#CBD5E1] hover:bg-[#F8FAFC] transition shadow-xs"
              >
                Previous
              </button>
              <button
                type="button"
                disabled={!pagination || pagination.page >= pagination.totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className="rounded-xl border border-[#E2E8F0] bg-white px-4 py-2 text-[13px] font-medium text-[#0F172A] disabled:text-[#CBD5E1] hover:bg-[#F8FAFC] transition shadow-xs"
              >
                Next
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default memo(AuditLog)
