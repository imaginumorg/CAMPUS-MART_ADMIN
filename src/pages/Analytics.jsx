import { memo } from 'react'

const Analytics = () => (
  <div className="space-y-4">
    <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="mb-4 h-2 w-16 rounded-xl bg-primary" />
      <h1 className="text-2xl font-bold text-[#64707D]">Analytics</h1>
      <p className="mt-1 text-sm text-[#7A8697]">Moderation metrics and marketplace trends.</p>
    </div>
    <section className="rounded-xl border border-neutral-200 bg-primary p-6 text-white shadow-sm">
      <h2 className="text-lg font-semibold text-white">Analytics backend space</h2>
      <p className="mt-2 text-sm text-white">Charts will connect here later using backend endpoints</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {['Listings', 'Reports', 'Users'].map((label) => (
          <div key={label} className="rounded-xl border border-white bg-primary p-4">
            <p className="text-xs font-semibold uppercase text-white">{label}</p>
            <p className="mt-2 text-2xl font-bold text-white">--</p>
          </div>
        ))}
      </div>
    </section>
  </div>
)

export default memo(Analytics)
