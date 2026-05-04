import { memo, useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const ProfileMenu = () => {
  const menuRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()
  const { admin, logout } = useAuth()
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

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setOpenPath((currentPath) => (currentPath === location.pathname ? '' : location.pathname))}
        className="flex items-center gap-3 rounded-xl px-2 py-1.5 transition hover:bg-[#F8FAFC]"
      >
        <div className="hidden items-center gap-3 md:flex">
          <div className="text-right">
            <p className="text-sm font-semibold text-[#0B1220]">{admin?.name || 'Admin User'}</p>
            <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#64748B]">Superuser</p>
          </div>
          <div className="h-9 w-px bg-[#E2E8F0]" />
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#64748B] to-[#0F172A] text-sm font-semibold text-white ring-2 ring-[#E2E8F0]">
          {admin?.initials || 'AU'}
        </div>
      </button>

      <div
        className={`absolute right-0 top-full z-20 mt-2 w-44 origin-top-right rounded-2xl border border-[#E2E8F0] bg-white p-2 shadow-sm transition ${
          isOpen ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'
        }`}
      >
        <button
          type="button"
          onClick={handleLogout}
          className="w-full rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-[#DC2626] transition hover:bg-[#FEF2F2]"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default memo(ProfileMenu)
