import { Suspense, memo, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Loader from '../shared/components/Loader'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { useAuth } from '../features/auth/context/AuthContext'

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const { isAuthenticated, sessionLoading } = useAuth()

  if (sessionLoading) return <Loader />

  if (!isAuthenticated) return <Navigate to="/login" replace />

  return (
    <div className="min-h-screen bg-[#F4F6FA] lg:flex lg:h-screen lg:min-h-0 lg:overflow-hidden">
      <Sidebar
        open={sidebarOpen}
        collapsed={sidebarCollapsed}
        onClose={() => setSidebarOpen(false)}
      />
      <div className="min-w-0 flex-1 lg:h-screen lg:overflow-y-auto">
        <Navbar
          sidebarCollapsed={sidebarCollapsed}
          onMenuClick={() => setSidebarOpen(true)}
          onSidebarToggle={() => setSidebarCollapsed((currentValue) => !currentValue)}
        />
        <main className="mx-auto w-full max-w-[1440px] px-3 py-4 sm:px-4 lg:px-6 lg:py-6">
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  )
}

export default memo(AdminLayout)
