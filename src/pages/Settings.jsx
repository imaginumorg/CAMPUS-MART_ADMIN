import { memo } from 'react'
import PageHeader from '../components/PageHeader'
import SectionCard from '../components/SectionCard'
import { REPORT_THRESHOLD } from '../utils/constants'

const Settings = () => (
  <div className="space-y-5">
    <PageHeader title="Settings" description="Read-only moderation configuration." />

    <SectionCard>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-[#475569]">Report threshold</span>
          <input
            readOnly
            value={REPORT_THRESHOLD}
            className="w-full rounded-xl border border-neutral-300 bg-[#EEF1F5] px-4 py-2.5 text-sm font-semibold text-primary"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-[#475569]">Admin role</span>
          <input
            readOnly
            value="Moderator access"
            className="w-full rounded-xl border border-neutral-300 bg-[#EEF1F5] px-4 py-2.5 text-sm font-semibold text-primary"
          />
        </label>
      </div>
    </SectionCard>
  </div>
)

export default memo(Settings)
