import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const AuthContext = createContext(null)
const ADMIN_SESSION_STORAGE_KEY = 'campus_mart_admin'

export const AuthProvider = ({ children }) => {
  const [authenticatedAdmin, setAuthenticatedAdmin] = useState(() => {
    const storedAdmin = localStorage.getItem(ADMIN_SESSION_STORAGE_KEY)
    return storedAdmin ? JSON.parse(storedAdmin) : null
  })

  const login = useCallback((email, password) => {
    if (email === 'admin@campus.edu' && password === 'password123') {
      const adminSession = { email, name: 'Admin', role: 'Moderator access', initials: 'AD' }
      localStorage.setItem(ADMIN_SESSION_STORAGE_KEY, JSON.stringify(adminSession))
      setAuthenticatedAdmin(adminSession)
      return { success: true, message: 'Signed in' }
    }

    return { success: false, message: 'Invalid admin credentials' }
  }, [])

  const logout = useCallback(() => {
    localStorage.removeItem(ADMIN_SESSION_STORAGE_KEY)
    setAuthenticatedAdmin(null)
  }, [])

  const authContextValue = useMemo(
    () => ({ admin: authenticatedAdmin, isAuthenticated: Boolean(authenticatedAdmin), login, logout }),
    [authenticatedAdmin, login, logout],
  )

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext)
