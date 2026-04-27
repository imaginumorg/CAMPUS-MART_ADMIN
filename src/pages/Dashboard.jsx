import { memo, useCallback } from 'react'
import Loader from '../components/Loader'
import { useFetch } from '../hooks/useFetch'
import { api } from '../services/api'

const dashboardSignalCards = [
  { title: 'Review backlog', value: '18', note: 'Items waiting for moderator action' },
  { title: 'Risk watch', value: '03', note: 'Listings close to escalation threshold' },
  { title: 'Resolution rate', value: '92%', note: 'Closed in the last 24 hours' },
]

const dashboardQueueItems = [
  { title: 'Fake listing cluster', note: '3 products tied to one seller', actionLabel: 'Escalate', isDanger: true },
  { title: 'Dorm move-out spike', note: 'Large burst in newly listed items', actionLabel: 'Review', isDanger: false },
  { title: 'Repeated report source', note: 'Possible spam reporter behavior', actionLabel: 'Inspect', isDanger: false },
]

const Dashboard = () => {
  const loadDashboardData = useCallback(() => api.getDashboard(), [])
  const { data: dashboardData, loading } = useFetch(loadDashboardData)

  if (loading) return <Loader rows={4} columns={4} />

  return (
    <div className="space-y-6">
      <div className="dashboard-grid overflow-hidden rounded-xl border border-neutral-200 shadow-sm">
        <div className="grid gap-4 p-5 lg:grid-cols-[1.3fr_0.9fr] lg:p-6">
          <section className="rounded-xl bg-primary p-6 text-white">
            <p className="text-sm font-semibold text-white">Campus Mart Admin</p>
            <h1 className="mt-2 text-3xl font-bold text-white">Admin control center</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white">
              Marketplace health, moderation throughput, and user trust signals in one operating surface.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {dashboardSignalCards.map((signalCard) => (
                <article key={signalCard.title} className="rounded-xl border border-white/30 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase text-white">{signalCard.title}</p>
                  <p className="mt-2 text-2xl font-bold text-white">{signalCard.value}</p>
                  <p className="mt-2 text-xs leading-5 text-white">{signalCard.note}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-4">
            <article className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#64707D]">Live moderation stream</p>
                  <p className="mt-1 text-xs text-[#7A8697]">Recent actions taken across the marketplace</p>
                </div>
                <span className="rounded-xl bg-[#EEF1F5] px-3 py-1 text-xs font-semibold text-primary">Online</span>
              </div>
              <div className="mt-5 space-y-3">
                <div className="rounded-xl bg-[#F7F8FA] p-3">
                  <p className="text-sm font-semibold text-[#64707D]">Bike listing escalated</p>
                  <p className="mt-1 text-xs text-[#7A8697]">Report threshold crossed 4 minutes ago</p>
                </div>
                <div className="rounded-xl bg-[#F7F8FA] p-3">
                  <p className="text-sm font-semibold text-[#64707D]">Seller access updated</p>
                  <p className="mt-1 text-xs text-[#7A8697]">Inactive accounts reviewed this morning</p>
                </div>
              </div>
            </article>
            <article className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-[#64707D]">Today at a glance</p>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {['Approvals', 'Warnings', 'Escalations'].map((item, index) => (
                  <div key={item} className={`rounded-xl p-4 ${index === 2 ? 'bg-[#FEF2F2] text-[#DC2626]' : 'bg-[#EEF1F5] text-primary'}`}>
                    <p className="text-xs font-semibold uppercase">{item}</p>
                    <p className="mt-2 text-2xl font-bold">{index === 0 ? '24' : index === 1 ? '11' : '3'}</p>
                  </div>
                ))}
              </div>
            </article>
          </section>
        </div>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardData.stats.map((statCard, index) => (
          <article key={statCard.label} className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
            <div className={`mb-4 h-2 w-12 rounded-xl ${index === 0 ? 'bg-primary' : 'bg-[#C9D1DC]'}`} />
            <p className="text-sm font-semibold text-[#7A8697]">{statCard.label}</p>
            <p className="mt-3 text-3xl font-bold text-primary">{statCard.value}</p>
          </article>
        ))}
      </section>

      <div className="grid gap-4 xl:grid-cols-[1.15fr_0.85fr]">
        <section className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-[#64707D]">Recent moderation activity</h2>
            <span className="rounded-xl bg-[#EEF1F5] px-3 py-1 text-xs font-semibold text-primary">Updated now</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {dashboardData.activity.map((activityItem) => (
              <article key={activityItem.title} className="rounded-xl border border-neutral-200 bg-[#F7F8FA] p-4">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white">
                  {activityItem.title.charAt(0).toUpperCase()}
                </div>
                <p className="text-sm font-semibold text-[#64707D]">{activityItem.title}</p>
                <p className="mt-2 text-sm text-[#7A8697]">{activityItem.value}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-[#64707D]">Priority queue</h2>
          <div className="mt-4 space-y-3">
            {dashboardQueueItems.map((queueItem) => (
              <article key={queueItem.title} className="rounded-xl border border-neutral-200 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-[#64707D]">{queueItem.title}</p>
                    <p className="mt-1 text-xs leading-5 text-[#7A8697]">{queueItem.note}</p>
                  </div>
                  <span className={`rounded-xl px-3 py-1 text-xs font-semibold ${queueItem.isDanger ? 'bg-[#FEF2F2] text-[#DC2626]' : 'bg-[#EEF1F5] text-primary'}`}>
                    {queueItem.actionLabel}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default memo(Dashboard)
