import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import EmptyState from '../components/EmptyState'
import Modal from '../components/Modal'
import Loader from '../components/Loader'
import { useFetch } from '../hooks/useFetch'
import { api } from '../services/api'
import { USER_STATUS } from '../utils/constants'

const userProfileGradients = [
  'from-[#6B7280] to-[#111827]',
  'from-[#1F2937] to-[#64748B]',
  'from-[#0F172A] to-[#1D4ED8]',
  'from-[#E2B38B] to-[#F8D5C2]',
]

const userTierContent = [
  { label: 'Pro+', className: 'bg-[#FEF3C7] text-[#92400E]' },
  { label: 'Basic', className: 'bg-[#F1F5F9] text-[#334155]' },
  { label: 'Pro+', className: 'bg-[#FEF3C7] text-[#92400E]' },
  { label: 'Pro', className: 'bg-[#DCFCE7] text-[#15803D]' },
]

const statusChipStyles = {
  [USER_STATUS.ACTIVE]: 'bg-[#ECFDF3] text-[#15803D]',
  [USER_STATUS.INACTIVE]: 'bg-[#F1F5F9] text-[#475569]',
  [USER_STATUS.SUSPENDED]: 'bg-[#FEF2F2] text-[#DC2626]',
}

const userLocations = ['London, UK', 'Madrid, ES', 'Berlin, DE', 'New York, US']
const userJoinedDates = ['Oct 12, 2023', 'Nov 04, 2023', 'Jan 18, 2024', 'Feb 11, 2024']
const userEmails = ['m.thorne@example.com', 'elena.rod@example.org', 'sk@kael-tech.com', 'jenkins.s@cloudscale.net']

const Users = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [pendingUserSuspension, setPendingUserSuspension] = useState(null)
  const [selectedStatusFilter, setSelectedStatusFilter] = useState('')
  const [selectedTierFilter, setSelectedTierFilter] = useState('')
  const [joinDateOrder, setJoinDateOrder] = useState('newest')

  useEffect(() => {
    const debounceTimer = window.setTimeout(() => {
      setDebouncedSearchQuery(searchQuery)
      setCurrentPage(1)
    }, 120)

    return () => window.clearTimeout(debounceTimer)
  }, [searchQuery])

  const loadUsers = useCallback(() => api.getUsers({ search: debouncedSearchQuery, page: currentPage }), [debouncedSearchQuery, currentPage])
  const { data: fetchedUsers, pagination, loading, error, refetch } = useFetch(loadUsers)
  const users = useMemo(() => fetchedUsers ?? [], [fetchedUsers])

  const decoratedUsers = useMemo(
    () =>
      users.map((user, index) => ({
        ...user,
        displayTier: userTierContent[index % userTierContent.length],
        displayLocation: userLocations[index % userLocations.length],
        displayGradient: userProfileGradients[index % userProfileGradients.length],
        displayJoinedDate: userJoinedDates[index % userJoinedDates.length],
        displayId: `${8829 + index * 275}-${10293 + index * 298}-${44102 + index * 972}`,
        displayEmail: userEmails[index % userEmails.length],
      })),
    [users],
  )

  const visibleUsers = useMemo(
    () =>
      decoratedUsers
        .filter((user) => {
          const tierLabel = user.displayTier.label.toLowerCase()
          const matchesStatus = !selectedStatusFilter || user.status === selectedStatusFilter
          const matchesTier = !selectedTierFilter || tierLabel === selectedTierFilter
          return matchesStatus && matchesTier
        })
        .sort((leftUser, rightUser) =>
          joinDateOrder === 'oldest'
            ? new Date(leftUser.joined).getTime() - new Date(rightUser.joined).getTime()
            : new Date(rightUser.joined).getTime() - new Date(leftUser.joined).getTime(),
        ),
    [decoratedUsers, joinDateOrder, selectedStatusFilter, selectedTierFilter],
  )

  const handleUserStatusUpdate = useCallback(
    async (userId, nextStatus) => {
      if (nextStatus === USER_STATUS.SUSPENDED) {
        const selectedUser = users.find((user) => user.id === userId)
        setPendingUserSuspension(selectedUser)
        return
      }

      await api.updateUserStatus(userId, nextStatus)
      refetch()
    },
    [users, refetch],
  )

  const confirmUserSuspension = useCallback(async () => {
    if (!pendingUserSuspension) return

    await api.updateUserStatus(pendingUserSuspension.id, USER_STATUS.SUSPENDED)
    setPendingUserSuspension(null)
    refetch()
  }, [pendingUserSuspension, refetch])

  const resetFilters = () => {
    setSearchQuery('')
    setDebouncedSearchQuery('')
    setSelectedStatusFilter('')
    setSelectedTierFilter('')
    setJoinDateOrder('newest')
    setCurrentPage(1)
  }

  if (loading && users.length === 0) return <Loader rows={4} columns={7} />

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h1 className="text-[24px] font-semibold tracking-[-0.03em] text-[#0B1220]">User Directory</h1>
          <p className="mt-1 text-[14px] text-[#475569]">Manage platform users, monitor account health, and adjust access permissions.</p>
        </div>
        <button type="button" className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M19 8v6" />
            <path d="M22 11h-6" />
          </svg>
          Add New User
        </button>
      </div>

      <section className="rounded-[18px] bg-white p-3.5 shadow-sm">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center">
          <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-[#E2E8F0] bg-white px-4 py-2.5">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#94A3B8]" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16" />
              <path d="M7 12h10" />
              <path d="M10 18h4" />
            </svg>
            <input
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Filter by name, email or user ID..."
              className="w-full bg-transparent text-sm text-[#0B1220] outline-none placeholder:text-[#64748B]"
            />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <select
              value={selectedStatusFilter}
              onChange={(event) => setSelectedStatusFilter(event.target.value)}
              className="h-10 rounded-xl border border-[#E2E8F0] bg-white px-4 text-sm font-medium text-[#0B1220] outline-none"
            >
              <option value="">Status: All</option>
              <option value={USER_STATUS.ACTIVE}>Active</option>
              <option value={USER_STATUS.INACTIVE}>Inactive</option>
              <option value={USER_STATUS.SUSPENDED}>Suspended</option>
            </select>
            <select
              value={selectedTierFilter}
              onChange={(event) => setSelectedTierFilter(event.target.value)}
              className="h-10 rounded-xl border border-[#E2E8F0] bg-white px-4 text-sm font-medium text-[#0B1220] outline-none"
            >
              <option value="">Tier: All</option>
              <option value="basic">Basic</option>
              <option value="pro">Pro</option>
              <option value="pro+">Pro+</option>
            </select>
            <button
              type="button"
              onClick={() => setJoinDateOrder((currentOrder) => (currentOrder === 'newest' ? 'oldest' : 'newest'))}
              className="inline-flex h-10 items-center gap-2 rounded-xl px-4 text-sm font-medium text-[#334155]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <path d="M16 2v4" />
                <path d="M8 2v4" />
              </svg>
              {joinDateOrder === 'newest' ? 'Newest First' : 'Oldest First'}
            </button>
            <button type="button" onClick={resetFilters} className="inline-flex h-10 items-center gap-2 rounded-xl px-4 text-sm font-medium text-[#64748B]">
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
      </section>

      {error ? (
        <EmptyState message={error} />
      ) : (
      <section className="overflow-hidden rounded-[20px] bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px] text-left">
            <thead className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748B]">
              <tr>
                <th className="px-5 py-4">User ID</th>
                <th className="px-4 py-4">User Profile</th>
                <th className="px-4 py-4">Account Tier</th>
                <th className="px-4 py-4">Email</th>
                <th className="px-4 py-4">Status</th>
                <th className="px-4 py-4">Listings</th>
                <th className="px-4 py-4">Joined Date</th>
                <th className="px-5 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {visibleUsers.length > 0 ? (
                visibleUsers.map((user) => (
                  <tr key={user.id} className="border-t border-[#EEF1F5]">
                    <td className="px-5 py-4 text-[12px] text-[#64748B]">{user.displayId}</td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${user.displayGradient} text-xs font-semibold text-white ring-2 ring-[#E2E8F0]`}>
                          {user.name
                            .split(' ')
                            .map((namePart) => namePart[0])
                            .join('')}
                        </div>
                        <div>
                          <p className="text-[14px] font-semibold text-[#0B1220]">{user.name}</p>
                          <p className="text-[12px] text-[#64748B]">{user.displayLocation}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold ${user.displayTier.className}`}>{user.displayTier.label}</span>
                    </td>
                    <td className="px-4 py-4 text-[13px] text-[#334155]">{user.displayEmail}</td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold ${statusChipStyles[user.status]}`}>
                        <span className="text-[10px] leading-none">•</span>
                        <span>{user.status.charAt(0).toUpperCase() + user.status.slice(1)}</span>
                      </span>
                    </td>
                    <td className="px-4 py-4 text-[14px] font-semibold text-[#0B1220]">{user.listings}</td>
                    <td className="px-4 py-4 text-[13px] text-[#334155]">{user.displayJoinedDate}</td>
                    <td className="px-5 py-4">
                      <div className="flex justify-end">
                        <select
                          value={user.status}
                          onChange={(event) => handleUserStatusUpdate(user.id, event.target.value)}
                          className="rounded-xl border border-[#E2E8F0] bg-white px-3 py-2 text-[13px] font-medium text-[#0B1220] outline-none"
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
                <tr className="border-t border-[#EEF1F5]">
                  <td colSpan="8" className="px-5 py-10 text-center text-[14px] text-[#64748B]">
                    No users match the current search or filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-4 px-5 py-5 text-sm text-[#64748B] md:flex-row md:items-center md:justify-between">
          <span>
            Showing {visibleUsers.length > 0 ? `1-${visibleUsers.length}` : '0'} of {pagination?.total || 0} users
          </span>
          <div className="flex gap-3">
            <button
              type="button"
              disabled={!pagination || pagination.page <= 1}
              onClick={() => setCurrentPage((currentValue) => Math.max(1, currentValue - 1))}
              className="rounded-xl border border-[#E2E8F0] px-4 py-2 text-[#334155] disabled:text-[#CBD5E1]"
            >
              Previous
            </button>
            <button
              type="button"
              disabled={!pagination || pagination.page >= pagination.totalPages}
              onClick={() => setCurrentPage((currentValue) => currentValue + 1)}
              className="rounded-xl border border-primary px-4 py-2 font-medium text-primary disabled:border-[#E2E8F0] disabled:text-[#CBD5E1]"
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
    </div>
  )
}

export default memo(Users)
