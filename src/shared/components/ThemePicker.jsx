import { memo, useEffect, useRef, useState } from 'react'
import { useTheme } from '../context/ThemeContext'

const ThemeIcon = ({ type, className = 'h-4 w-4' }) => {
  switch (type) {
    case 'sun':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      )
    case 'moon':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      )
    case 'waves':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
          <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
          <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
        </svg>
      )
    case 'crown':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7Z" />
        </svg>
      )
    case 'zap':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    case 'atom':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="12" r="8" strokeDasharray="3 3" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
        </svg>
      )
  }
}

const ThemePicker = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const { theme, themeId, setTheme, themes } = useTheme()

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
    }
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [isOpen])

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Theme selector"
        aria-expanded={isOpen}
        className="inline-flex h-9 items-center gap-2 rounded-xl border border-[#E2E8F0] dark:border-[#333333] bg-white dark:bg-[#1E1E1E] px-3 text-xs font-semibold text-[#0B1220] dark:text-[#E2E8F0] shadow-sm transition hover:bg-[#F8FAFC] dark:hover:bg-[#2A2D2E]"
      >
        <ThemeIcon type={theme.icon} className="h-4 w-4 text-[#475569] dark:text-[#A2ACB8]" />
        <span>Theme</span>
        <span
          className="h-2.5 w-2.5 rounded-full ring-2 ring-white/20"
          style={{ backgroundColor: theme.dotColor }}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-64 origin-top-right rounded-2xl border border-[#E2E8F0] dark:border-[#2D333B] bg-white dark:bg-[#161B22] p-2 text-left shadow-2xl backdrop-blur-md transition-all animate-in fade-in slide-in-from-top-1">
          <div className="px-3 py-2">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#94A3B8] dark:text-[#7D8590]">
              Appearance
            </p>
          </div>

          <div className="space-y-1">
            {themes.map((t) => {
              const isSelected = t.id === themeId

              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    setTheme(t.id)
                    setIsOpen(false)
                  }}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left transition ${
                    isSelected
                      ? 'bg-[#EEF2FF] text-[#1E40AF] dark:bg-[#1F293D] dark:text-[#58A6FF]'
                      : 'text-[#334155] dark:text-[#C9D1D9] hover:bg-[#F8FAFC] dark:hover:bg-[#21262D]'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span
                      className="h-3 w-3 shrink-0 rounded-full ring-2 ring-black/5 dark:ring-white/10"
                      style={{ backgroundColor: t.dotColor }}
                    />
                    <span className="shrink-0 text-current">
                      <ThemeIcon type={t.icon} className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-xs font-semibold leading-tight">{t.name}</p>
                      <p className="truncate text-[10px] text-[#64748B] dark:text-[#8B949E] leading-tight">
                        {t.subtitle}
                      </p>
                    </div>
                  </div>

                  {isSelected && (
                    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-[#2563EB] dark:text-[#58A6FF]" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default memo(ThemePicker)
