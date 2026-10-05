import { memo } from 'react'

const Loader = ({ rows = 5, columns = 5 }) => (
  <div className="space-y-3">
    {Array.from({ length: rows }).map((_, row) => (
      <div key={row} className="grid gap-3" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
        {Array.from({ length: columns }).map((__, column) => (
          <div key={column} className="h-9 animate-pulse rounded-xl bg-neutral-200" />
        ))}
      </div>
    ))}
  </div>
)

export default memo(Loader)
