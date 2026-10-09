import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import Loader from '../../../shared/components/Loader'
import { useFetch } from '../../../shared/hooks/useFetch'
import { dashboardApi } from '../api/dashboardApi'
import { AUDIT_ACTION_LABELS } from '../../../shared/constants/constants'

const formatRelativeTime = (dateValue) => {
  const diff = Date.now() - new Date(dateValue).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 1) return 'Just now'
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  return `${Math.floor(hrs / 24)}d ago`
}

const StatCard = ({ label, value, accent, icon, sublabel }) => (
  <article className={`rounded-[18px] bg-white p-5 shadow-sm ring-1 ring-[#E8ECF4] border-l-4 ${accent}`}>
    <div className="flex items-start justify-between">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748B]">{label}</p>
        <p className="mt-4 text-[36px] font-bold leading-none tracking-[-0.04em] text-[#0B1220]">{value ?? '—'}</p>
        {sublabel && <p className="mt-2 text-[12px] text-[#64748B]">{sublabel}</p>}
      </div>
      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F1F5F9]">
        {icon}
      </div>
    </div>
  </article>
)

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

const toneBg = {
  danger: 'bg-[#FEF2F2] text-[#DC2626]',
  warning: 'bg-[#FFF7ED] text-[#C2410C]',
  success: 'bg-[#ECFDF3] text-[#15803D]',
  neutral: 'bg-[#F1F5F9] text-[#64748B]',
  primary: 'bg-[#EEF2FF] text-[#3838EC]',
}

const Dashboard = () => {
  const navigate = useNavigate()
  const loadDashboard = useCallback(() => dashboardApi.getDashboard(), [])
  const { data: dashboardData, loading, error } = useFetch(loadDashboard)

  if (loading && !dashboardData) return <Loader rows={4} columns={3} />

  if (error || !dashboardData) {
    return (
      <div className="flex items-center justify-center py-20 text-[#64748B]">
        <p>Failed to load dashboard. Please refresh.</p>
      </div>
    )
  }

  const { stats, recentActivity } = dashboardData

  const statCards = [
    {
      label: 'Total Users',
      value: stats.totalUsers,
      accent: 'border-[#3838EC]',
      sublabel: `${stats.activeUsers} active · ${stats.suspendedUsers} suspended`,
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#3838EC]" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      label: 'Listed Products',
      value: stats.listedProducts,
      accent: 'border-[#16A34A]',
      sublabel: `${stats.blockedProducts} blocked`,
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#16A34A]" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 7h18" />
          <path d="M6 3h12l1 4H5l1-4Z" />
          <rect x="4" y="7" width="16" height="14" rx="2" />
        </svg>
      ),
    },
    {
      label: 'Pending Reports',
      value: stats.pendingReports,
      accent: stats.pendingReports > 0 ? 'border-[#DC2626]' : 'border-[#E2E8F0]',
      sublabel: stats.pendingReports > 0 ? 'Needs attention' : 'All clear',
      icon: (
        <svg viewBox="0 0 24 24" className={`h-5 w-5 ${stats.pendingReports > 0 ? 'text-[#DC2626]' : 'text-[#64748B]'}`} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 9v4" />
          <path d="M12 17h.01" />
          <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
        </svg>
      ),
    },
    {
      label: 'Active Campuses',
      value: stats.activeCampuses,
      accent: 'border-[#8B5CF6]',
      sublabel: 'Live marketplaces',
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#8B5CF6]" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 21h18" />
          <path d="M5 21V7l7-4 7 4v14" />
          <path d="M9 21v-6h6v6" />
        </svg>
      ),
    },
    {
      label: 'Active Users',
      value: stats.activeUsers,
      accent: 'border-[#0EA5E9]',
      sublabel: `${stats.inactiveUsers} inactive`,
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-[#0EA5E9]" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="5" />
          <path d="M20 21a8 8 0 1 0-16 0" />
        </svg>
      ),
    },
    {
      label: 'Suspended Users',
      value: stats.suspendedUsers,
      accent: stats.suspendedUsers > 0 ? 'border-[#F59E0B]' : 'border-[#E2E8F0]',
      sublabel: 'Restricted accounts',
      icon: (
        <svg viewBox="0 0 24 24" className={`h-5 w-5 ${stats.suspendedUsers > 0 ? 'text-[#F59E0B]' : 'text-[#64748B]'}`} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M8 8l8 8" />
        </svg>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-[26px] font-bold tracking-[-0.03em] text-[#0B1220]">Control Center</h1>
        <div className="mt-1.5 flex flex-wrap items-center gap-2 text-[13px] text-[#64748B]">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#ECFDF3]">
            <svg viewBox="0 0 24 24" className="h-3 w-3 text-[#16A34A]" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="m5 12 5 5L20 7" />
            </svg>
          </span>
          <span>Platform operational · Live data</span>
        </div>
      </div>

      {/* Stat Grid */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {statCards.map((card) => (
          <StatCard key={card.label} {...card} />
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <button
          type="button"
          onClick={() => navigate('/moderation')}
          className={`group flex items-center gap-4 rounded-[18px] border p-4 text-left transition hover:shadow-md ${
            stats.pendingReports > 0
              ? 'border-[#FECACA] bg-[#FFF7F7]'
              : 'border-[#E2E8F0] bg-white'
          }`}
        >
          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${stats.pendingReports > 0 ? 'bg-[#EF4444] text-white' : 'bg-[#F1F5F9] text-[#64748B]'}`}>
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 9v4" /><path d="M12 17h.01" />
              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-[15px] font-semibold text-[#0B1220]">Moderation Queue</p>
            <p className="mt-0.5 text-[13px] text-[#475569]">
              {stats.pendingReports > 0 ? `${stats.pendingReports} pending reports` : 'No pending reports'}
            </p>
          </div>
          <svg viewBox="0 0 24 24" className="ml-auto h-4 w-4 shrink-0 text-[#94A3B8] transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => navigate('/campuses')}
          className="group flex items-center gap-4 rounded-[18px] border border-[#E2E8F0] bg-white p-4 text-left transition hover:shadow-md"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EEF2FF] text-[#3838EC]">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 21h18" /><path d="M5 21V7l7-4 7 4v14" /><path d="M9 21v-6h6v6" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-[15px] font-semibold text-[#0B1220]">Campus Management</p>
            <p className="mt-0.5 text-[13px] text-[#475569]">{stats.activeCampuses} active campuses</p>
          </div>
          <svg viewBox="0 0 24 24" className="ml-auto h-4 w-4 shrink-0 text-[#94A3B8] transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>

        <button
          type="button"
          onClick={() => navigate('/audit-log')}
          className="group flex items-center gap-4 rounded-[18px] border border-[#E2E8F0] bg-white p-4 text-left transition hover:shadow-md"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F0FDF4] text-[#16A34A]">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" /><path d="M8 13h8" /><path d="M8 17h5" />
            </svg>
          </div>
          <div className="min-w-0">
            <p className="text-[15px] font-semibold text-[#0B1220]">Audit Log</p>
            <p className="mt-0.5 text-[13px] text-[#475569]">Full admin action history</p>
          </div>
          <svg viewBox="0 0 24 24" className="ml-auto h-4 w-4 shrink-0 text-[#94A3B8] transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Recent Moderation Activity */}
      <section className="rounded-[20px] bg-white shadow-sm ring-1 ring-[#E8ECF4]">
        <div className="flex items-center justify-between border-b border-[#EEF1F5] px-6 py-5">
          <h2 className="text-[17px] font-semibold text-[#0B1220]">Recent Admin Activity</h2>
          <button
            type="button"
            onClick={() => navigate('/audit-log')}
            className="text-[13px] font-medium text-[#3838EC] hover:underline"
          >
            View full log →
          </button>
        </div>

        {recentActivity.length === 0 ? (
          <div className="px-6 py-10 text-center text-[14px] text-[#94A3B8]">
            No activity yet. Actions taken by admins will appear here.
          </div>
        ) : (
          <div className="divide-y divide-[#F1F5F9]">
            {recentActivity.map((entry) => {
              const tone = actionToneMap[entry.action] || 'primary'
              const bg = toneBg[tone]
              return (
                <div key={entry.id} className="flex items-start gap-4 px-6 py-4">
                  <div className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${bg}`}>
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      {tone === 'danger' && <><circle cx="12" cy="12" r="9" /><path d="M8 8l8 8" /></>}
                      {tone === 'success' && <><circle cx="12" cy="12" r="9" /><path d="m8 12 2.5 2.5L16 9" /></>}
                      {tone === 'warning' && <><path d="M12 9v4" /><path d="M12 17h.01" /><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" /></>}
                      {(tone === 'neutral' || tone === 'primary') && <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></>}
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-[14px] font-semibold text-[#0B1220]">
                        {AUDIT_ACTION_LABELS[entry.action] || entry.action}
                      </p>
                      <span className="shrink-0 text-[12px] text-[#94A3B8]">
                        {formatRelativeTime(entry.createdAt)}
                      </span>
                    </div>
                    <p className="mt-0.5 text-[12px] text-[#64748B]">
                      by <span className="font-medium text-[#334155]">{entry.actor_name}</span>
                      <span className="ml-1 rounded-full bg-[#F1F5F9] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#64748B]">
                        {entry.actor_role}
                      </span>
                      {entry.target_snapshot?.name && (
                        <> · {entry.target_snapshot.name}</>
                      )}
                      {entry.target_snapshot?.title && (
                        <> · {entry.target_snapshot.title}</>
                      )}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </section>
    </div>
  )
}

export default memo(Dashboard)
