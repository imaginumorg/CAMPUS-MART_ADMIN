import { memo } from 'react'
import PageHeader from '../components/PageHeader'
import SectionCard from '../components/SectionCard'

const Analytics = () => (
  <div className="space-y-5">
    <PageHeader title="Analytics" description="Moderation metrics and marketplace trends." />

    <SectionCard className="bg-primary text-white">
      <h2 className="text-lg font-semibold text-white">Analytics backend space</h2>
      <p className="mt-2 text-sm text-white/90">Charts will connect here later using backend endpoints.</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {['Listings', 'Reports', 'Users'].map((label) => (
          <div key={label} className="rounded-xl border border-white/20 bg-white/5 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/80">{label}</p>
            <p className="mt-2 text-xl font-semibold text-white">--</p>
          </div>
        ))}
      </div>
    </SectionCard>
  </div>
)

export default memo(Analytics)
