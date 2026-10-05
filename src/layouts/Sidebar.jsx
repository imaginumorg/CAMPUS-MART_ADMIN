import { memo } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../features/auth/context/AuthContext'

const navigationItems = [
  {
    section: 'Overview',
    label: 'Dashboard',
    path: '/dashboard',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    section: 'Marketplace',
    label: 'Users',
    path: '/users',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    section: 'Marketplace',
    label: 'Products',
    path: '/products',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 7h18" />
        <path d="M6 3h12l1 4H5l1-4Z" />
        <rect x="4" y="7" width="16" height="14" rx="2" />
      </svg>
    ),
  },
  {
    section: 'Marketplace',
    label: 'Campuses',
    path: '/campuses',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-6h6v6" />
        <path d="M9 9h.01" />
        <path d="M12 9h.01" />
        <path d="M15 9h.01" />
      </svg>
    ),
  },
  {
    section: 'Moderation',
    label: 'Reports',
    path: '/reports',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8" />
        <path d="M8 17h5" />
      </svg>
    ),
  },
  {
    section: 'Insights',
    label: 'Analytics',
    path: '/analytics',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 3v18h18" />
        <rect x="7" y="11" width="3" height="6" />
        <rect x="12" y="8" width="3" height="9" />
        <rect x="17" y="5" width="3" height="12" />
      </svg>
    ),
  },
  {
    section: 'System',
    label: 'Settings',
    path: '/settings',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.08a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.08a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
]

const navigationGroups = navigationItems.reduce((groups, item) => {
  const sectionItems = groups.get(item.section) || []
  sectionItems.push(item)
  groups.set(item.section, sectionItems)
  return groups
}, new Map())

const Sidebar = ({ open, onClose }) => {
  const navigate = useNavigate()
  const { logout } = useAuth()

  const handleLogout = () => {
    logout()
    onClose?.()
    navigate('/login', { replace: true })
  }

  return (
    <>
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-[248px] flex-col border-r border-[#E8ECF4] bg-white transition-transform lg:static lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="border-b border-[#EEF1F5] px-5 py-6">
          <p className="text-[17px] font-bold text-[#0B1220]">Campus Mart</p>
          <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#64748B]">Admin Portal</p>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-5">
          <div className="space-y-6">
            {Array.from(navigationGroups.entries()).map(([section, items]) => (
              <div key={section}>
                <p className="px-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#94A3B8]">{section}</p>
                <div className="mt-2 space-y-1">
                  {items.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `flex items-center gap-3 rounded-none border-r-4 px-4 py-2.5 text-[14px] font-medium transition ${
                          isActive
                            ? 'border-primary bg-[#EEF2FF] text-primary'
                            : 'border-transparent text-[#334155] hover:bg-[#F8FAFC]'
                        }`
                      }
                    >
                      <span className="text-current">{item.icon}</span>
                      <span>{item.label}</span>
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </nav>

        <div className="mt-auto border-t border-[#EEF1F5] px-3 py-3">
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-left text-[14px] font-medium text-[#334155] transition hover:bg-[#F8FAFC]"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v.01" />
              <path d="M12 8a2 2 0 0 1 2 2c0 1.4-2 2-2 4" />
            </svg>
            <span>Help Center</span>
          </button>
          <button
            type="button"
            onClick={handleLogout}
            className="mt-2 flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-left text-[14px] font-medium text-[#DC2626] transition hover:bg-[#FEF2F2]"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <path d="M16 17l5-5-5-5" />
              <path d="M21 12H9" />
            </svg>
            <span>Log Out</span>
          </button>
        </div>
      </aside>
      {open && <button type="button" aria-label="Close menu" onClick={onClose} className="fixed inset-0 z-30 bg-[#0F172A]/20 lg:hidden" />}
    </>
  )
}

export default memo(Sidebar)
