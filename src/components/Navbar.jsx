import { memo } from 'react'
import ProfileMenu from './ProfileMenu'

const Navbar = ({ onMenuClick }) => (
  <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white">
    <div className="flex h-16 items-center justify-between px-4 lg:justify-end lg:px-6">
      <button
        type="button"
        onClick={onMenuClick}
        className="rounded-xl border border-neutral-300 bg-[#EEF1F5] px-3 py-2 text-sm font-semibold text-primary lg:hidden"
      >
        Menu
      </button>
      <ProfileMenu />
    </div>
  </header>
)

export default memo(Navbar)
