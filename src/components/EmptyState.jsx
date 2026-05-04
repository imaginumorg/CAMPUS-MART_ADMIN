import { memo } from 'react'

const EmptyState = ({ message }) => (
  <div className="rounded-2xl border border-dashed border-[#D7E2F0] bg-[#F8FAFC] px-4 py-10 text-center text-sm text-[#64748B]">
    {message}
  </div>
)

export default memo(EmptyState)
