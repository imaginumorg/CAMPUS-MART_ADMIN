import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import DataTable, { StatusBadge } from '../components/DataTable'
import Modal from '../components/Modal'
import { useFetch } from '../hooks/useFetch'
import { api } from '../services/api'
import { USER_STATUS } from '../utils/constants'

const Users = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [userPendingSuspension, setUserPendingSuspension] = useState(null)

  useEffect(() => {
    const debounceTimer = window.setTimeout(() => {
      setDebouncedSearchQuery(searchQuery)
      setCurrentPage(1)
    }, 300)

    return () => window.clearTimeout(debounceTimer)
  }, [searchQuery])

  const loadUsers = useCallback(() => api.getUsers({ search: debouncedSearchQuery, page: currentPage }), [debouncedSearchQuery, currentPage])
  const { data: users = [], pagination, loading, refetch } = useFetch(loadUsers)

  const handleUserStatusChange = useCallback(async (userId, status) => {
    if (status === USER_STATUS.SUSPENDED) {
      const selectedUser = users.find((user) => user.id === userId)
      setUserPendingSuspension(selectedUser)
      return
    }

    await api.updateUserStatus(userId, status)
    refetch()
  }, [users, refetch])

  const confirmUserSuspension = useCallback(async () => {
    if (!userPendingSuspension) return

    await api.updateUserStatus(userPendingSuspension.id, USER_STATUS.SUSPENDED)
    setUserPendingSuspension(null)
    refetch()
  }, [userPendingSuspension, refetch])

  const userTableColumns = useMemo(
    () => [
      { key: 'name', header: 'Name' },
      { key: 'email', header: 'Email' },
      { key: 'status', header: 'Status', render: (row) => <StatusBadge status={row.status} /> },
      { key: 'listings', header: 'Listings' },
      { key: 'joined', header: 'Joined' },
      {
        key: 'actions',
        header: 'Actions',
        render: (row) => (
          <select
            value={row.status}
            onChange={(event) => handleUserStatusChange(row.id, event.target.value)}
            className={`rounded-xl border px-3 py-2 text-sm font-semibold outline-none focus:border-primary ${
              row.status === USER_STATUS.SUSPENDED
                ? 'border-[#FECACA] bg-[#FEF2F2] text-[#DC2626]'
                : 'border-neutral-300 bg-[#FCFCFC] text-[#64707D]'
            }`}
          >
            {Object.values(USER_STATUS).map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        ),
      },
    ],
    [handleUserStatusChange],
  )

  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
        <div className="mb-4 h-2 w-16 rounded-xl bg-primary" />
        <h1 className="text-2xl font-bold text-[#64707D]">Users</h1>
        <p className="mt-1 text-sm text-[#7A8697]">Review user access and listing activity.</p>
        <p className="mt-3 inline-flex rounded-xl bg-[#FEF2F2] px-3 py-1 text-xs font-semibold text-[#DC2626]">
          Suspensions require confirmation
        </p>
      </div>
      <DataTable
        columns={userTableColumns}
        rows={users}
        loading={loading}
        pagination={pagination}
        onPageChange={setCurrentPage}
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
        searchPlaceholder="Search users"
      />
      <Modal
        open={Boolean(userPendingSuspension)}
        title="Suspend user"
        description={userPendingSuspension ? `Suspend ${userPendingSuspension.name} and restrict marketplace access?` : ''}
        confirmLabel="Suspend"
        tone="danger"
        onClose={() => setUserPendingSuspension(null)}
        onConfirm={confirmUserSuspension}
      />
    </div>
  )
}

export default memo(Users)
