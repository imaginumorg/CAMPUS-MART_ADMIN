import { Suspense, memo, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Loader from '../shared/components/Loader'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { useAuth } from '../features/auth/context/AuthContext'

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { isAuthenticated, sessionLoading } = useAuth()

  if (sessionLoading) return <Loader />

  if (!isAuthenticated) return <Navigate to="/login" replace />

  return (
    <div className="min-h-screen bg-[#F5F7FB] lg:flex">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="min-w-0 flex-1">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />
        <main className="mx-auto w-full max-w-[1240px] p-3.5 lg:p-4">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  )
}

export default memo(AdminLayout)
