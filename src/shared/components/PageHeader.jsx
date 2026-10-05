import { memo } from 'react'

const PageHeader = ({ title, description, actions }) => (
  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
    <div className="min-w-0">
      <h1 className="text-xl font-semibold tracking-[-0.02em] text-[#0B1220] md:text-2xl">{title}</h1>
      {description ? <p className="mt-1 text-sm text-[#475569]">{description}</p> : null}
    </div>
    {actions ? <div className="flex shrink-0 flex-wrap gap-2">{actions}</div> : null}
  </div>
)

export default memo(PageHeader)