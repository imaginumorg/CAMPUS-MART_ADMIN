import { memo } from 'react'
import ProfileMenu from './ProfileMenu'
import ThemePicker from '../shared/components/ThemePicker'

const Navbar = ({ onMenuClick }) => {
  return (
    <header className="sticky top-0 z-30 border-b border-[#E3E8F2] dark:border-[#333333] bg-white/95 dark:bg-[#1E1E1E]/95 shadow-sm backdrop-blur">
      <div className="flex h-[64px] items-center justify-between px-4 lg:px-6">
        <button
          type="button"
          onClick={onMenuClick}
          className="inline-flex h-10 items-center gap-2 rounded-xl border border-[#E2E8F0] dark:border-[#333333] bg-white dark:bg-[#1E1E1E] px-3 text-sm font-semibold text-[#334155] dark:text-[#CBD5E1] lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M4 18h16" />
          </svg>
          <span>Menu</span>
        </button>

        <div className="ml-auto flex items-center gap-3 sm:gap-5">
          <ThemePicker />
          <div className="hidden text-right sm:block">
            <p className="text-[13px] font-semibold text-[#0B1220] dark:text-[#E2E8F0]">Admin workspace</p>
            <p className="text-[12px] text-[#64748B] dark:text-[#94A3B8]">UniDeals operations</p>
          </div>
          <ProfileMenu />
        </div>
      </div>
    </header>
  )
}

export default memo(Navbar)
