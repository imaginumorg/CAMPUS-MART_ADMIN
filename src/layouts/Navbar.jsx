import { memo } from 'react'
import ProfileMenu from './ProfileMenu'

const Navbar = ({ onMenuClick }) => {
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
        <div className="hidden text-right sm:block">
          <p className="text-[13px] font-semibold text-[#0B1220]">Admin workspace</p>
          <p className="text-[12px] text-[#64748B]">Campus Mart operations</p>
        </div>
        <ProfileMenu />
      </div>
    </div>
  </header>
  )
}

export default memo(Navbar)
