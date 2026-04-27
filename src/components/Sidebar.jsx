import { memo } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Users', path: '/users' },
  { label: 'Products', path: '/products' },
  { label: 'Reports', path: '/reports' },
  { label: 'Analytics', path: '/analytics' },
  { label: 'Settings', path: '/settings' },
]

const Sidebar = ({ open, onClose }) => (
  <>
    <aside
      className={`fixed inset-y-0 left-0 z-40 w-64 border-r border-neutral-200 bg-[#FCFCFC] p-4 transition-transform lg:static lg:translate-x-0 ${
        open ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="mb-8 rounded-xl bg-primary p-4 text-white shadow-sm">
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-bold text-primary">
          CM
        </div>
        <p className="text-lg font-bold text-white">Campus Mart</p>
        <p className="text-sm font-medium text-white">Admin Portal</p>
      </div>
      <nav className="space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={onClose}
            className={({ isActive }) =>
              `block rounded-xl px-4 py-3 text-sm font-semibold transition ${
                isActive ? 'bg-primary text-white shadow-sm' : 'text-[#64707D] hover:bg-[#EEF1F5] hover:text-primary'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
    {open && <button type="button" aria-label="Close menu" onClick={onClose} className="fixed inset-0 z-30 bg-[#64707D]/40 lg:hidden" />}
  </>
)

export default memo(Sidebar)
