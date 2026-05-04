import { memo } from 'react'

const SectionCard = ({ children, className = '' }) => (
  <section className={`rounded-2xl border border-[#E8ECF4] bg-white p-4 shadow-sm md:p-5 ${className}`.trim()}>
    {children}
  </section>
)

export default memo(SectionCard)
