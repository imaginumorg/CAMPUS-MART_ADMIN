import { memo } from 'react'
import { REPORT_THRESHOLD } from '../utils/constants'

const Settings = () => (
  <div className="space-y-4">
    <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="mb-4 h-2 w-16 rounded-xl bg-primary" />
      <h1 className="text-2xl font-bold text-[#64707D]">Settings</h1>
      <p className="mt-1 text-sm text-[#7A8697]">Read-only moderation configuration.</p>
    </div>
    <section className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-[#64707D]">Report threshold</span>
          <input
            readOnly
            value={REPORT_THRESHOLD}
            className="w-full rounded-xl border border-neutral-300 bg-[#EEF1F5] px-4 py-3 text-sm font-semibold text-primary"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-[#64707D]">Admin role</span>
          <input
            readOnly
            value="Moderator access"
            className="w-full rounded-xl border border-neutral-300 bg-[#EEF1F5] px-4 py-3 text-sm font-semibold text-primary"
          />
        </label>
      </div>
    </section>
  </div>
)

export default memo(Settings)
