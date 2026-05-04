import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfileMenu from './ProfileMenu'

const Navbar = ({ onMenuClick }) => {
  const navigate = useNavigate()

  return (
  <header className="sticky top-0 z-30 border-b border-[#E8ECF4] bg-white shadow-sm">
    <div className="flex h-[64px] items-center justify-between px-4 lg:px-5">
      <button
        type="button"
        onClick={onMenuClick}
        className="rounded-xl border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-semibold text-[#334155] lg:hidden"
      >
        Menu
      </button>

      <div className="ml-auto flex items-center gap-6">
        <button
          type="button"
          aria-label="Open notifications"
          onClick={() => navigate('/notification')}
          className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#E2E8F0] text-[#334155] transition hover:bg-[#F8FAFC]"
        >
          <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-primary" />
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M15 17h5l-1.4-1.4a2 2 0 0 1-.6-1.4V11a6 6 0 0 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5" />
            <path d="M10 21a2 2 0 0 0 4 0" />
          </svg>
        </button>
        <ProfileMenu />
      </div>
    </div>
  </header>
  )
}

export default memo(Navbar)