import { memo } from 'react'
import Loader from './Loader'
import EmptyState from './EmptyState'
import { STATUS_BADGE_STYLES } from '../utils/constants'

export const StatusBadge = memo(({ status }) => {
  const normalizedStatus = String(status).toLowerCase()

  return (
    <span className={`inline-flex rounded-xl px-3 py-1 text-xs font-semibold capitalize ${STATUS_BADGE_STYLES[normalizedStatus] || 'bg-[#F7F8FA] text-[#64707D]'}`}>
      {normalizedStatus.replace('-', ' ')}
    </span>
  )
})

const DataTable = ({
  columns,
  rows,
  loading,
  emptyMessage = 'No records found',
  pagination,
  onPageChange,
  searchValue,
  onSearchChange,
  searchPlaceholder = 'Search',
  filters,
}) => {
  const showsToolbar = onSearchChange || filters

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm md:p-5">
      {showsToolbar && (
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {onSearchChange && (
            <input
              value={searchValue}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder={searchPlaceholder}
              className="w-full rounded-xl border border-neutral-300 bg-[#FCFCFC] px-4 py-2.5 text-sm text-[#64707D] outline-none transition focus:border-primary focus:bg-white sm:max-w-xs"
            />
          )}
          {filters && <div className="flex flex-wrap gap-2">{filters}</div>}
        </div>
      )}

      {loading ? (
        <Loader rows={5} columns={columns.length} />
      ) : rows.length === 0 ? (
        <EmptyState message={emptyMessage} />
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <thead className="bg-[#EEF1F5]">
              <tr className="border-b border-neutral-200">
                {columns.map((column) => (
                  <th key={column.key} className="px-3 py-3 text-xs font-semibold uppercase text-primary first:rounded-l-xl last:rounded-r-xl">
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-b border-neutral-200 transition hover:bg-[#FCFCFC] last:border-0">
                  {columns.map((column) => (
                    <td key={column.key} className="px-3 py-4 text-sm text-[#64707D]">
                      {column.render ? column.render(row) : row[column.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {pagination && (
        <div className="mt-4 flex flex-col gap-3 border-t border-neutral-200 pt-4 text-sm text-[#7A8697] sm:flex-row sm:items-center sm:justify-between">
          <span>
            Page {pagination.page} of {pagination.totalPages} - {pagination.total} records
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              disabled={pagination.page <= 1}
              onClick={() => onPageChange(pagination.page - 1)}
              className="rounded-xl border border-neutral-300 bg-[#FCFCFC] px-3 py-2 font-semibold text-[#64707D] disabled:cursor-not-allowed disabled:text-[#C9D1DC]"
            >
              Previous
            </button>
            <button
              type="button"
              disabled={pagination.page >= pagination.totalPages}
              onClick={() => onPageChange(pagination.page + 1)}
              className="rounded-xl border border-neutral-300 bg-primary px-3 py-2 font-semibold text-white disabled:cursor-not-allowed disabled:bg-[#EEF1F5] disabled:text-[#C9D1DC]"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default memo(DataTable)
