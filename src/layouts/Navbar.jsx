import { memo } from 'react'
import ProfileMenu from './ProfileMenu'

const Navbar = ({ onMenuClick, onSidebarToggle, sidebarCollapsed }) => {
  return (
  <header className="sticky top-0 z-30 border-b border-[#E3E8F2] bg-white/95 shadow-sm backdrop-blur">
    <div className="flex h-[64px] items-center justify-between px-4 lg:px-6">
      <button
        type="button"
        onClick={onMenuClick}
        className="inline-flex h-10 items-center gap-2 rounded-xl border border-[#E2E8F0] bg-white px-3 text-sm font-semibold text-[#334155] lg:hidden"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </svg>
        <span>Menu</span>
      </button>

      <button
        type="button"
        onClick={onSidebarToggle}
        aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        className="hidden h-10 w-10 items-center justify-center rounded-xl border border-[#E2E8F0] bg-white text-[#334155] transition hover:bg-[#F8FAFC] lg:inline-flex"
      >
        <svg viewBox="0 0 24 24" className={`h-5 w-5 transition-transform ${sidebarCollapsed ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <div className="ml-auto flex items-center gap-6">
        <div className="hidden text-right sm:block">
          <p className="text-[13px] font-semibold text-[#0B1220]">Admin workspace</p>
          <p className="text-[12px] text-[#64748B]">UniDeals operations</p>
        </div>
        <ProfileMenu />
      </div>
    </div>
  </header>
  )
}

export default memo(Navbar)
