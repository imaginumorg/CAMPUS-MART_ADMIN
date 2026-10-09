import { memo, useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../features/auth/context/AuthContext'
import { useToast } from '../shared/components/ToastContext'
import Avatar from '../shared/components/Avatar'

const ProfileMenu = () => {
  const menuRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()
  const { admin, logout } = useAuth()
  const { showToast } = useToast()
  const [openPath, setOpenPath] = useState('')

  const isOpen = openPath === location.pathname

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenPath('')
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [])

  const handleLogout = async () => {
    await logout()
    showToast({ type: 'success', message: 'Logged out successfully' })
    navigate('/login', { replace: true })
  }

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setOpenPath((currentPath) => (currentPath === location.pathname ? '' : location.pathname))}
        className="flex items-center gap-3 rounded-xl border border-transparent px-2 py-1.5 transition hover:border-[#E2E8F0] dark:hover:border-[#333333] hover:bg-[#F8FAFC] dark:hover:bg-[#2A2D2E]"
      >
        <div className="hidden items-center gap-3 md:flex">
          <div className="text-right">
            <p className="text-sm font-semibold text-[#0B1220] dark:text-[#E2E8F0]">{admin?.name || 'Admin User'}</p>
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#64748B] dark:text-[#94A3B8]">{admin?.roleLabel || 'Superuser'}</p>
          </div>
          <div className="h-9 w-px bg-[#E2E8F0] dark:bg-[#333333]" />
        </div>
        <Avatar
          src={admin?.avatar}
          name={admin?.name}
          initials={admin?.initials}
          className="h-10 w-10 text-sm"
          ringClassName="ring-2 ring-[#E2E8F0] dark:ring-[#333333]"
        />
      </button>

      <div
        className={`absolute right-0 top-full z-20 mt-2 w-44 origin-top-right rounded-2xl border border-[#E2E8F0] dark:border-[#333333] bg-white dark:bg-[#1E1E1E] p-2 shadow-xl transition ${
          isOpen ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'
        }`}
      >
        <button
          type="button"
          onClick={handleLogout}
          className="w-full rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-[#DC2626] transition hover:bg-[#FEF2F2] dark:hover:bg-[#3E1B1B]"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default memo(ProfileMenu)
