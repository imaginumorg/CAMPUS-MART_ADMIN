import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import EmptyState from '../../../shared/components/EmptyState'
import Modal from '../../../shared/components/Modal'
import Loader from '../../../shared/components/Loader'
import Avatar from '../../../shared/components/Avatar'
import { useFetch } from '../../../shared/hooks/useFetch'
import { usersApi } from '../api/usersApi'
import { USER_STATUS } from '../../../shared/constants/constants'
import { useToast } from '../../../shared/components/ToastContext'
import UserDetailsDrawer from '../components/UserDetailsDrawer'
import { useAuth } from '../../auth/context/AuthContext'

const userProfileGradients = [
  'from-[#6B7280] to-[#111827]',
  'from-[#1F2937] to-[#64748B]',
  'from-[#0F172A] to-[#1D4ED8]',
  'from-[#E2B38B] to-[#F8D5C2]',
]

const statusChipStyles = {
  [USER_STATUS.ACTIVE]: 'bg-[#ECFDF3] text-[#15803D] dark:bg-[#064E3B]/30 dark:text-[#34D399]',
  [USER_STATUS.INACTIVE]: 'bg-[#F1F5F9] text-[#475569] dark:bg-[#1E293B] dark:text-[#94A3B8]',
  [USER_STATUS.SUSPENDED]: 'bg-[#FEF2F2] text-[#DC2626] dark:bg-[#450A0A]/40 dark:text-[#F87171]',
}

const formatDisplayDate = (dateValue) =>
  new Intl.DateTimeFormat('en', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }).format(new Date(dateValue))

const PAGE_SIZE = 10

const Users = () => {
  const { admin } = useAuth()
  const isAdmin = admin?.role === 'admin'
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [pendingUserSuspension, setPendingUserSuspension] = useState(null)
  const [selectedStatusFilter, setSelectedStatusFilter] = useState('')
  const [joinDateOrder, setJoinDateOrder] = useState('newest')
  const [selectedUserId, setSelectedUserId] = useState(null)
  const { showToast } = useToast()

  useEffect(() => {
    const debounceTimer = window.setTimeout(() => {
      setDebouncedSearchQuery(searchQuery)
      setCurrentPage(1)
    }, 120)

    return () => window.clearTimeout(debounceTimer)
  }, [searchQuery])

  const loadUsers = useCallback(
    () =>
      usersApi.getUsers({
        search: debouncedSearchQuery,
        status: selectedStatusFilter,
        page: currentPage,
        limit: PAGE_SIZE,
      }),
    [debouncedSearchQuery, selectedStatusFilter, currentPage],
  )
  const { data: fetchedUsers, pagination, loading, error, refetch } = useFetch(loadUsers)
  const users = useMemo(() => fetchedUsers ?? [], [fetchedUsers])

  const decoratedUsers = useMemo(
    () =>
      users.map((user, index) => ({
        ...user,
        displayGradient: userProfileGradients[index % userProfileGradients.length],
        displayJoinedDate: user.joined ? formatDisplayDate(user.joined) : 'Not available',
        displayId: user.id,
      })),
    [users],
  )

  const visibleUsers = useMemo(
    () =>
      decoratedUsers.sort((leftUser, rightUser) =>
        joinDateOrder === 'oldest'
          ? new Date(leftUser.joined).getTime() - new Date(rightUser.joined).getTime()
          : new Date(rightUser.joined).getTime() - new Date(leftUser.joined).getTime(),
      ),
    [decoratedUsers, joinDateOrder],
  )

  const handleUserStatusUpdate = useCallback(
    async (userId, nextStatus) => {
      if (nextStatus === USER_STATUS.SUSPENDED) {
        const selectedUser = users.find((user) => user.id === userId)
        setPendingUserSuspension(selectedUser)
        return
      }

      const response = await usersApi.updateUserStatus(userId, nextStatus)

      if (response.success) {
        showToast({ type: 'success', message: response.message })
      } else {
        showToast({ type: 'error', message: response.message })
      }

      refetch()
    },
    [users, refetch, showToast],
  )

  // For drawer status changes (includes suspend)
  const handleDrawerStatusChange = useCallback(
    async (userId, newStatus) => {
      const response = await usersApi.updateUserStatus(userId, newStatus)
      if (response.success) {
        showToast({ type: 'success', message: response.message })
        refetch()
      } else {
        showToast({ type: 'error', message: response.message })
      }
    },
    [refetch, showToast],
  )

  const confirmUserSuspension = useCallback(async () => {
    if (!pendingUserSuspension) return

    const response = await usersApi.updateUserStatus(pendingUserSuspension.id, USER_STATUS.SUSPENDED)

    if (response.success) {
      showToast({ type: 'success', message: response.message })
    } else {
      showToast({ type: 'error', message: response.message })
    }

    setPendingUserSuspension(null)
    refetch()
  }, [pendingUserSuspension, refetch, showToast])

  const resetFilters = () => {
    setSearchQuery('')
    setDebouncedSearchQuery('')
    setSelectedStatusFilter('')
    setJoinDateOrder('newest')
    setCurrentPage(1)
  }

  const totalUsers = pagination?.total ?? visibleUsers.length
  const startItem = totalUsers > 0 ? (currentPage - 1) * PAGE_SIZE + 1 : 0
  const endItem = totalUsers > 0 ? Math.min(currentPage * PAGE_SIZE, totalUsers) : 0

  if (loading && users.length === 0) return <Loader rows={4} columns={7} />

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="text-[24px] font-semibold tracking-[-0.03em] text-[#0B1220] dark:text-white">User Directory</h1>
          <p className="mt-1 text-[14px] text-[#475569] dark:text-[#94A3B8]">Manage platform users, monitor account health, and adjust access permissions.</p>
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center">
          <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-[#E2E8F0] dark:border-[#333333] bg-white dark:bg-[#1E1E1E] px-4 py-2.5">
            <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-[#94A3B8]" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
            </svg>
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Filter by name, email or user ID..."
              className="w-full bg-transparent text-sm text-[#0B1220] dark:text-white outline-none placeholder:text-[#64748B] dark:placeholder:text-[#6E7681]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <select
              value={selectedStatusFilter}
              onChange={(event) => {
                setSelectedStatusFilter(event.target.value)
                setCurrentPage(1)
              }}
              className="h-10 rounded-xl border border-[#E2E8F0] dark:border-[#333333] bg-white dark:bg-[#1E1E1E] px-4 text-sm font-medium text-[#0B1220] dark:text-white outline-none"
            >
              <option value="">Status: All</option>
              <option value={USER_STATUS.ACTIVE}>Active</option>
              <option value={USER_STATUS.INACTIVE}>Inactive</option>
              <option value={USER_STATUS.SUSPENDED}>Suspended</option>
            </select>
            <button
              type="button"
              onClick={() => setJoinDateOrder((currentOrder) => (currentOrder === 'newest' ? 'oldest' : 'newest'))}
              className="inline-flex h-10 items-center gap-2 rounded-xl border border-[#E2E8F0] dark:border-[#333333] bg-white dark:bg-[#1E1E1E] px-4 text-sm font-medium text-[#334155] dark:text-[#CBD5E1]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4" /><path d="M8 2v4" />
              </svg>
              {joinDateOrder === 'newest' ? 'Newest First' : 'Oldest First'}
            </button>
            <button type="button" onClick={resetFilters} className="inline-flex h-10 items-center gap-2 rounded-xl px-4 text-sm font-medium text-[#64748B] dark:text-[#94A3B8]">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12a9 9 0 0 1 15.5-6.4L21 8" />
                <path d="M21 3v5h-5" />
                <path d="M21 12a9 9 0 0 1-15.5 6.4L3 16" />
                <path d="M8 16H3v5" />
              </svg>
              Reset
            </button>
          </div>
        </div>
      </div>

      {error ? (
        <EmptyState message={error} />
      ) : (
        <section className="overflow-hidden rounded-[20px] border border-[#EEF1F5] dark:border-[#2D333B] bg-white dark:bg-[#1E1E1E] shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] text-left">
              <thead className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748B] dark:text-[#8B949E] border-b border-[#EEF1F5] dark:border-[#2D333B]">
                <tr>
                  <th className="px-5 py-4">User</th>
                  <th className="px-4 py-4">Email</th>
                  <th className="px-4 py-4">Status</th>
                  <th className="px-4 py-4">Listings</th>
                  <th className="px-4 py-4">Joined</th>
                  <th className="px-5 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {visibleUsers.length > 0 ? (
                  visibleUsers.map((user) => (
                    <tr key={user.id} className="border-t border-[#EEF1F5] dark:border-[#2D333B] hover:bg-[#FAFBFF] dark:hover:bg-[#252A33] transition-colors">
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <Avatar
                            src={user.avatar}
                            name={user.name}
                            gradient={user.displayGradient}
                            className="h-10 w-10 text-xs shrink-0"
                            ringClassName="ring-2 ring-[#E2E8F0] dark:ring-[#333333]"
                          />
                          <div>
                            <p className="text-[14px] font-semibold text-[#0B1220] dark:text-[#E2E8F0]">{user.name}</p>
                            <p className="text-[11px] text-[#94A3B8] dark:text-[#64748B]">{user.displayId?.slice(-8).toUpperCase()}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-[13px] text-[#334155] dark:text-[#CBD5E1]">{user.email}</td>
                      <td className="px-4 py-4">
                        <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold ${statusChipStyles[user.status]}`}>
                          <span className="text-[10px] leading-none">•</span>
                          <span>{user.status.charAt(0).toUpperCase() + user.status.slice(1)}</span>
                        </span>
                      </td>
                      <td className="px-4 py-4 text-[14px] font-semibold text-[#0B1220] dark:text-white">{user.listings}</td>
                      <td className="px-4 py-4 text-[13px] text-[#334155] dark:text-[#CBD5E1]">{user.displayJoinedDate}</td>
                      <td className="px-5 py-4">
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => setSelectedUserId(user.id)}
                            className="rounded-xl border border-[#E2E8F0] dark:border-[#333333] bg-white dark:bg-[#1E1E1E] px-3 py-1.5 text-[12px] font-semibold text-[#334155] dark:text-[#CBD5E1] hover:bg-[#F8FAFC] dark:hover:bg-[#2A2D2E] transition"
                          >
                            View
                          </button>
                          <select
                            value={user.status}
                            onChange={(event) => handleUserStatusUpdate(user.id, event.target.value)}
                            className="rounded-xl border border-[#E2E8F0] dark:border-[#333333] bg-white dark:bg-[#1E1E1E] px-3 py-2 text-[13px] font-medium text-[#0B1220] dark:text-white outline-none"
                          >
                            {Object.values(USER_STATUS).map((statusOption) => (
                              <option key={statusOption} value={statusOption}>
                                {statusOption}
                              </option>
                            ))}
                          </select>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="border-t border-[#EEF1F5] dark:border-[#2D333B]">
                    <td colSpan="6" className="px-5 py-10 text-center text-[14px] text-[#64748B] dark:text-[#8B949E]">
                      No users match the current search or filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-4 px-5 py-5 text-sm text-[#64748B] dark:text-[#8B949E] md:flex-row md:items-center md:justify-between border-t border-[#EEF1F5] dark:border-[#2D333B]">
            <span>
              Showing {totalUsers > 0 ? `${startItem}-${endItem}` : '0'} of {totalUsers} users
            </span>
            <div className="flex gap-3">
              <button
                type="button"
                disabled={!pagination || pagination.page <= 1}
                onClick={() => setCurrentPage((currentValue) => Math.max(1, currentValue - 1))}
                className="rounded-xl border border-[#E2E8F0] dark:border-[#333333] px-4 py-2 text-[#334155] dark:text-[#CBD5E1] disabled:text-[#CBD5E1] dark:disabled:text-[#4A5568]"
              >
                Previous
              </button>
              <button
                type="button"
                disabled={!pagination || pagination.page >= pagination.totalPages}
                onClick={() => setCurrentPage((currentValue) => currentValue + 1)}
                className="rounded-xl border border-primary px-4 py-2 font-medium text-primary disabled:border-[#E2E8F0] dark:disabled:border-[#333333] disabled:text-[#CBD5E1] dark:disabled:text-[#4A5568]"
              >
                Next
              </button>
            </div>
          </div>
        </section>
      )}

      <Modal
        open={Boolean(pendingUserSuspension)}
        title="Suspend user"
        description={pendingUserSuspension ? `Suspend ${pendingUserSuspension.name} and restrict marketplace access?` : ''}
        confirmLabel="Suspend"
        tone="danger"
        onClose={() => setPendingUserSuspension(null)}
        onConfirm={confirmUserSuspension}
      />

      {/* User details drawer */}
      <UserDetailsDrawer
        userId={selectedUserId}
        onClose={() => setSelectedUserId(null)}
        onStatusChange={handleDrawerStatusChange}
        isAdmin={isAdmin}
      />
    </div>
  )
}

export default memo(Users)
