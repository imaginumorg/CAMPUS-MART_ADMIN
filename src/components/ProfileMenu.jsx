import { memo, useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const ProfileMenu = () => {
  const menuRef = useRef(null)
  const location = useLocation()
  const [menuState, setMenuState] = useState({ open: false, path: location.pathname })
  const navigate = useNavigate()
  const { admin, logout } = useAuth()

  const open = menuState.open && menuState.path === location.pathname

  useEffect(() => {
    const onPointerDown = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuState((current) => ({ ...current, open: false }))
      }
    }

    document.addEventListener('mousedown', onPointerDown)
    return () => document.removeEventListener('mousedown', onPointerDown)
  }, [])

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setMenuState({ open: !open, path: location.pathname })}
        className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-[#FCFCFC] px-2 py-1.5 transition hover:bg-[#EEF1F5]"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
          {admin?.initials || 'AD'}
        </span>
        <span className="hidden text-left sm:block">
          <span className="block text-sm font-semibold text-[#64707D]">Admin</span>
          <span className="block text-xs text-[#7A8697]">Moderator access</span>
        </span>
      </button>
      <div
        className={`absolute right-0 mt-2 w-48 origin-top-right rounded-xl border border-neutral-200 bg-white p-2 shadow-sm transition duration-150 ${
          open ? 'scale-100 opacity-100' : 'pointer-events-none scale-95 opacity-0'
        }`}
      >
        <button
          type="button"
          onClick={handleLogout}
          className="w-full rounded-xl px-3 py-2 text-left text-sm font-semibold text-primary transition hover:bg-[#EEF1F5]"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default memo(ProfileMenu)
