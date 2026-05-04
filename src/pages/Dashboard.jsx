import { memo, useCallback } from 'react'
import Loader from '../components/Loader'
import { useFetch } from '../hooks/useFetch'
import { api } from '../services/api'

const toneStyles = {
  primary: 'bg-[#EEF2FF] text-primary',
  danger: 'bg-[#FEF2F2] text-[#DC2626]',
  success: 'bg-[#ECFDF3] text-[#16A34A]',
  neutral: 'bg-[#F1F5F9] text-[#64748B]',
}

const statsAccent = ['border-l-[4px] border-primary', 'border-l-[4px] border-[#DC2626]', 'border-l-[4px] border-[#22C55E]']

const Dashboard = () => {
  const loadDashboard = useCallback(() => api.getDashboard(), [])
  const { data: dashboardData, loading } = useFetch(loadDashboard)

  if (loading && !dashboardData) return <Loader rows={4} columns={3} />

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[24px] font-semibold tracking-[-0.03em] text-[#0B1220]">Admin Control Center</h1>
        <div className="mt-2 flex items-center gap-3 text-[14px] text-primary">
          <span className="flex h-5 w-5 items-center justify-center rounded-full border border-primary">
            <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m5 12 5 5L20 7" />
            </svg>
          </span>
          <span>Operational status is currently optimal.</span>
        </div>
      </div>

      <section className="grid gap-5 xl:grid-cols-[1.55fr_0.75fr]">
        <div className="space-y-5">
          <div className="grid gap-4 md:grid-cols-3">
            {dashboardData.stats.map((statCard, index) => (
              <article key={statCard.label} className={`rounded-[20px] bg-white p-5 shadow-sm ${statsAccent[index]}`}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#64748B]">{statCard.label}</p>
                    <p className="mt-5 text-[38px] font-semibold leading-none tracking-[-0.05em] text-[#0B1220]">{statCard.value}</p>
                  </div>
                  <div className={`flex h-10 w-10 items-center justify-center rounded-2xl ${index === 0 ? 'text-primary' : index === 1 ? 'text-[#DC2626]' : 'text-[#22C55E]'}`}>
                    {index === 0 && (
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="4" y="4" width="16" height="16" rx="2" />
                        <path d="M8 16V8" />
                        <path d="M12 16v-4" />
                        <path d="M16 16v-7" />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="9" />
                        <path d="M8 8l8 8" />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="9" />
                        <path d="m8 12 2.5 2.5L16 9" />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="mt-4 inline-flex rounded-full px-3 py-1.5 text-[12px] font-semibold leading-none shadow-sm">
                  <span className={index === 0 ? 'text-[#16A34A]' : index === 1 ? 'text-[#DC2626]' : 'text-primary'}>
                    {index === 0 ? '+12%' : index === 1 ? 'High priority' : '98% efficiency'}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <section className="rounded-[24px] bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-[19px] font-semibold text-[#0B1220]">Priority queue</h2>
              <button type="button" className="text-[14px] font-medium text-primary">
                View all tasks
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {dashboardData.queue.map((queueItem) => (
                <article
                  key={queueItem.id}
                  className={`flex flex-col gap-4 rounded-[20px] border p-4 md:flex-row md:items-center md:justify-between ${
                    queueItem.tone === 'danger' ? 'border-[#FECACA] bg-[#FFF7F7]' : 'border-[#E2E8F0] bg-[#F8FAFC]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                        queueItem.tone === 'danger' ? 'bg-[#EF4444] text-white' : 'bg-[#E0E7FF] text-primary'
                      }`}
                    >
                      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                        {queueItem.tone === 'danger' ? (
                          <>
                            <path d="M12 9v4" />
                            <path d="M12 17h.01" />
                            <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
                          </>
                        ) : (
                          <>
                            <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4Z" />
                            <circle cx="12" cy="11" r="2.2" />
                          </>
                        )}
                      </svg>
                    </div>
                    <div>
                      <p className="text-[15px] font-semibold text-[#0B1220]">{queueItem.title}</p>
                      <p className="mt-1 text-[13px] text-[#475569]">
                        {queueItem.subtitle} <span className="text-[#0B1220]">• {queueItem.time}</span>
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className={`rounded-xl px-5 py-2.5 text-[13px] font-semibold ${
                      queueItem.tone === 'danger' ? 'bg-[#DC2626] text-white' : 'bg-[#E2E8F0] text-[#0B1220]'
                    }`}
                  >
                    {queueItem.actionLabel}
                  </button>
                </article>
              ))}
            </div>
          </section>
        </div>

        <section className="rounded-[24px] bg-white shadow-sm">
          <div className="border-b border-[#EEF1F5] px-6 py-6">
            <h2 className="text-[19px] font-semibold text-[#0B1220]">Recent Moderation Activity</h2>
          </div>
          <div className="space-y-6 px-6 py-6">
            {dashboardData.activity.map((activityItem) => (
              <article key={activityItem.id} className="flex items-start gap-4">
                <div className={`mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${toneStyles[activityItem.tone]}`}>
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    {activityItem.tone === 'primary' && <path d="M7 4h10v16l-5-3-5 3V4Z" />}
                    {activityItem.tone === 'neutral' && (
                      <>
                        <circle cx="11" cy="8" r="3" />
                        <path d="M5 20c1.4-2.8 4-4 6-4" />
                        <path d="m17 15 2 2 4-4" />
                      </>
                    )}
                    {activityItem.tone === 'danger' && (
                      <>
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 8v5" />
                        <path d="M12 16h.01" />
                      </>
                    )}
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-[16px] font-semibold text-[#0B1220]">{activityItem.title}</h3>
                      <div className={`mt-2 inline-flex rounded-full px-3 py-1 text-[11px] font-semibold ${toneStyles[activityItem.tone]}`}>
                        {activityItem.tag}
                      </div>
                    </div>
                    <span className="text-[12px] text-[#0B1220]">{activityItem.time}</span>
                  </div>
                  <p className="mt-3 text-[13px] leading-6 text-[#475569]">{activityItem.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="border-t border-[#EEF1F5] px-6 py-5 text-center">
            <button type="button" className="text-[15px] font-medium text-primary">
              View full activity log
            </button>
          </div>
        </section>
      </section>
    </div>
  )
}

export default memo(Dashboard)
