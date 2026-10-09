import { memo, useEffect, useState } from 'react'
import { usersApi } from '../api/usersApi'
import { STATUS_BADGE_STYLES } from '../../../shared/constants/constants'
import Avatar from '../../../shared/components/Avatar'

const formatDate = (d) =>
  d
    ? new Intl.DateTimeFormat('en', { month: 'short', day: '2-digit', year: 'numeric' }).format(new Date(d))
    : 'Not available'

const formatPrice = (p) =>
  p != null ? `₹${Number(p).toLocaleString('en-IN')}` : '—'

const statusChipStyles = {
  active: 'bg-[#ECFDF3] text-[#15803D] dark:bg-[#064E3B]/40 dark:text-[#34D399]',
  inactive: 'bg-[#F1F5F9] text-[#64748B] dark:bg-[#1E293B] dark:text-[#94A3B8]',
  suspended: 'bg-[#FEF2F2] text-[#DC2626] dark:bg-[#450A0A]/40 dark:text-[#F87171]',
}

const tierBadge = {
  base_user: 'bg-[#F1F5F9] text-[#64748B] dark:bg-[#1E293B] dark:text-[#94A3B8]',
  pro: 'bg-[#EEF2FF] text-[#3838EC] dark:bg-[#1F293D] dark:text-[#58A6FF]',
  pro_plus: 'bg-gradient-to-r from-[#8B5CF6] to-[#3838EC] text-white',
}

const tierLabel = { base_user: 'Base', pro: 'Pro', pro_plus: 'Pro+' }

/**
 * UserDetailsDrawer — right-side slide-in panel showing full user profile.
 * Props:
 *   userId: string | null — open when non-null
 *   onClose: () => void
 *   onStatusChange: (userId, newStatus) => Promise<void>
 *   isAdmin: boolean — show admin-only actions
 */
const UserDetailsDrawer = ({ userId, onClose, onStatusChange }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isActing, setIsActing] = useState(false)

  useEffect(() => {
    if (!userId) {
      setUser(null)
      setError(null)
      return
    }

    let active = true
    setLoading(true)
    setError(null)

    usersApi.getUserDetails(userId).then((res) => {
      if (!active) return
      if (res.success) setUser(res.data)
      else setError(res.message)
      setLoading(false)
    })

    return () => { active = false }
  }, [userId])

  const handleStatusChange = async (newStatus) => {
    if (!user) return
    setIsActing(true)
    await onStatusChange?.(user.id, newStatus)
    // Refresh user data after status change
    const res = await usersApi.getUserDetails(user.id)
    if (res.success) setUser(res.data)
    setIsActing(false)
  }

  const isOpen = Boolean(userId)

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close drawer"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-[#0F172A]/40 backdrop-blur-[2px]"
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-[420px] flex-col border-l border-[#EEF1F5] dark:border-[#333333] bg-white dark:bg-[#1E1E1E] shadow-2xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="User details"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-[#EEF1F5] dark:border-[#2D333B] px-5 py-4">
          <h2 className="text-[16px] font-semibold text-[#0B1220] dark:text-white">User Profile</h2>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-[#E2E8F0] dark:border-[#333333] text-[#64748B] dark:text-[#94A3B8] hover:bg-[#F8FAFC] dark:hover:bg-[#2A2D2E]"
            aria-label="Close"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6 6 18" /><path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {loading && (
            <div className="flex items-center justify-center py-16">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#EEF2FF] border-t-[#3838EC] dark:border-[#1F293D] dark:border-t-[#58A6FF]" />
            </div>
          )}

          {error && !loading && (
            <div className="px-5 py-10 text-center text-[14px] text-[#DC2626] dark:text-[#F87171]">{error}</div>
          )}

          {user && !loading && (
            <div className="px-5 py-5 space-y-5">
              {/* Avatar + name block */}
              <div className="flex items-center gap-4 rounded-[16px] bg-gradient-to-br from-[#EEF2FF] to-[#F8FAFF] dark:from-[#1F293D] dark:to-[#161B22] border border-[#E0E7FF] dark:border-[#2D333B] p-4">
                <Avatar
                  src={user.avatar}
                  name={user.name}
                  className="h-14 w-14 shrink-0 text-[18px]"
                  ringClassName="ring-2 ring-white/70 dark:ring-[#333333] shadow-md"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-[16px] font-bold text-[#0B1220] dark:text-white truncate">{user.name}</p>
                    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${statusChipStyles[user.status] || ''}`}>
                      {user.status}
                    </span>
                    {user.subscription && (
                      <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${tierBadge[user.subscription] || ''}`}>
                        {tierLabel[user.subscription] || user.subscription}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-[12px] text-[#64748B] dark:text-[#8B949E] truncate">{user.email}</p>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-[14px] border border-[#EEF1F5] dark:border-[#2D333B] bg-[#F8FAFC] dark:bg-[#161B22] p-3 text-center">
                  <p className="text-[22px] font-bold text-[#0B1220] dark:text-white">{user.listingsCount ?? 0}</p>
                  <p className="text-[11px] text-[#64748B] dark:text-[#8B949E]">Listings</p>
                </div>
                <div className="rounded-[14px] border border-[#EEF1F5] dark:border-[#2D333B] bg-[#F8FAFC] dark:bg-[#161B22] p-3 text-center">
                  <p className="text-[22px] font-bold text-[#0B1220] dark:text-white">{user.reportCount ?? 0}</p>
                  <p className="text-[11px] text-[#64748B] dark:text-[#8B949E]">Reports</p>
                </div>
                <div className="rounded-[14px] border border-[#EEF1F5] dark:border-[#2D333B] bg-[#F8FAFC] dark:bg-[#161B22] p-3 text-center">
                  <p className="text-[22px] font-bold text-[#0B1220] dark:text-white">{user.gamification?.level ?? 1}</p>
                  <p className="text-[11px] text-[#64748B] dark:text-[#8B949E]">Level</p>
                </div>
              </div>

              {/* Details */}
              <div className="rounded-[16px] border border-[#EEF1F5] dark:border-[#2D333B] bg-white dark:bg-[#1E1E1E] divide-y divide-[#F1F5F9] dark:divide-[#2D333B]">
                {[
                  { label: 'User ID', value: user.id ? user.id.slice(-8).toUpperCase() : '—' },
                  { label: 'Mobile', value: user.mobile || 'Not set' },
                  { label: 'Gender', value: user.gender ? user.gender.charAt(0).toUpperCase() + user.gender.slice(1) : 'Not set' },
                  { label: 'Campus', value: user.campus ? `${user.campus.name} (${user.campus.short_name})` : 'Not assigned' },
                  { label: 'Rank', value: user.gamification?.rank_title || 'Seedling' },
                  { label: 'Joined', value: formatDate(user.joinedAt) },
                  { label: 'Last login', value: formatDate(user.lastLoginAt) },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between px-4 py-3">
                    <span className="text-[12px] font-semibold text-[#94A3B8] dark:text-[#64748B] uppercase tracking-[0.1em]">{label}</span>
                    <span className="text-[13px] font-medium text-[#334155] dark:text-[#CBD5E1] text-right max-w-[55%] truncate">{value}</span>
                  </div>
                ))}
              </div>

              {/* Recent products */}
              {user.recentProducts?.length > 0 && (
                <div>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#64748B] dark:text-[#8B949E]">
                    Recent Listings
                  </p>
                  <div className="space-y-2">
                    {user.recentProducts.map((product) => (
                      <div
                        key={product.id}
                        className="flex items-center gap-3 rounded-[12px] border border-[#EEF1F5] dark:border-[#2D333B] bg-[#F8FAFC] dark:bg-[#161B22] px-3 py-2.5"
                      >
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.title}
                            className="h-9 w-9 rounded-lg object-cover"
                          />
                        ) : (
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EEF2FF] dark:bg-[#1F293D] text-[#3838EC] dark:text-[#58A6FF]">
                            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M3 7h18" /><path d="M6 3h12l1 4H5l1-4Z" /><rect x="4" y="7" width="16" height="14" rx="2" />
                            </svg>
                          </div>
                        )}
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-[13px] font-semibold text-[#0B1220] dark:text-white">{product.title}</p>
                          <p className="text-[11px] text-[#64748B] dark:text-[#8B949E]">{formatPrice(product.price)}</p>
                        </div>
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${STATUS_BADGE_STYLES[product.status] || 'bg-[#F1F5F9] text-[#64748B]'}`}>
                          {product.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer actions */}
        {user && !loading && (
          <div className="border-t border-[#EEF1F5] dark:border-[#2D333B] px-5 py-4 space-y-2">
            {user.status !== 'suspended' ? (
              <button
                type="button"
                disabled={isActing}
                onClick={() => handleStatusChange('suspended')}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FEF2F2] dark:bg-[#450A0A]/40 px-4 py-2.5 text-[13px] font-semibold text-[#DC2626] dark:text-[#F87171] transition hover:bg-[#FEE2E2] dark:hover:bg-[#450A0A]/60 disabled:opacity-50"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" /><path d="M8 8l8 8" />
                </svg>
                Suspend account
              </button>
            ) : (
              <button
                type="button"
                disabled={isActing}
                onClick={() => handleStatusChange('active')}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#ECFDF3] dark:bg-[#064E3B]/40 px-4 py-2.5 text-[13px] font-semibold text-[#15803D] dark:text-[#34D399] transition hover:bg-[#D1FAE5] dark:hover:bg-[#064E3B]/60 disabled:opacity-50"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" /><path d="m8 12 2.5 2.5L16 9" />
                </svg>
                Reactivate account
              </button>
            )}
            {user.status === 'active' && (
              <button
                type="button"
                disabled={isActing}
                onClick={() => handleStatusChange('inactive')}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#E2E8F0] dark:border-[#333333] px-4 py-2.5 text-[13px] font-semibold text-[#334155] dark:text-[#CBD5E1] transition hover:bg-[#F8FAFC] dark:hover:bg-[#2A2D2E] disabled:opacity-50"
              >
                Mark inactive
              </button>
            )}
          </div>
        )}
      </aside>
    </>
  )
}

export default memo(UserDetailsDrawer)
