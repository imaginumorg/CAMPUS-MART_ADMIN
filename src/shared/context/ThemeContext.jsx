import { createContext, useContext, useEffect, useMemo, useState } from 'react'

export const THEMES = [
  {
    id: 'light',
    name: 'Light',
    subtitle: 'GitHub Light',
    dotColor: '#3B82F6',
    icon: 'sun',
    isDark: false,
  },
  {
    id: 'dark-plus',
    name: 'Dark+',
    subtitle: 'VSCode Dark+',
    dotColor: '#3B82F6',
    icon: 'moon',
    isDark: true,
  },
  {
    id: 'night-owl',
    name: 'Night Owl',
    subtitle: 'Deep navy',
    dotColor: '#06B6D4',
    icon: 'waves',
    isDark: true,
  },
  {
    id: 'dracula',
    name: 'Dracula',
    subtitle: 'Plum pop',
    dotColor: '#A855F7',
    icon: 'crown',
    isDark: true,
  },
  {
    id: 'monokai',
    name: 'Monokai',
    subtitle: 'Warm amber',
    dotColor: '#FBBF24',
    icon: 'zap',
    isDark: true,
  },
  {
    id: 'one-dark',
    name: 'One Dark',
    subtitle: 'Atom slate',
    dotColor: '#60A5FA',
    icon: 'atom',
    isDark: true,
  },
]

const STORAGE_KEY = 'campus_mart_admin_theme'
const DEFAULT_THEME_ID = 'dark-plus'

const ThemeContext = createContext(null)

export const ThemeProvider = ({ children }) => {
  const [currentThemeId, setCurrentThemeId] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved && THEMES.some((t) => t.id === saved)) {
        return saved
      }
    } catch {
      // ignore
    }
    return DEFAULT_THEME_ID
  })

  useEffect(() => {
    const activeTheme = THEMES.find((t) => t.id === currentThemeId) || THEMES[1]
    const root = document.documentElement

    root.setAttribute('data-theme', activeTheme.id)
    if (activeTheme.isDark) {
      root.classList.add('dark')
      root.style.colorScheme = 'dark'
    } else {
      root.classList.remove('dark')
      root.style.colorScheme = 'light'
    }

    try {
      localStorage.setItem(STORAGE_KEY, activeTheme.id)
    } catch {
      // ignore
    }
  }, [currentThemeId])

  const setTheme = (themeId) => {
    if (THEMES.some((t) => t.id === themeId)) {
      setCurrentThemeId(themeId)
    }
  }

  const activeTheme = useMemo(
    () => THEMES.find((t) => t.id === currentThemeId) || THEMES[1],
    [currentThemeId],
  )

  const value = useMemo(
    () => ({
      theme: activeTheme,
      themeId: currentThemeId,
      setTheme,
      themes: THEMES,
      isDark: activeTheme.isDark,
    }),
    [activeTheme, currentThemeId],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
