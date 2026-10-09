import { memo, useState } from 'react'

/**
 * Extracts a valid URL from different avatar formats:
 * - String URL
 * - Object { url: '...' }
 * - Nested object { avatar: { url: '...' } }
 */
export const extractAvatarUrl = (avatarSource) => {
  if (!avatarSource) return null
  if (typeof avatarSource === 'string' && avatarSource.trim().length > 0) {
    return avatarSource.trim()
  }
  if (typeof avatarSource === 'object') {
    if (avatarSource.url && typeof avatarSource.url === 'string') {
      return avatarSource.url.trim()
    }
    if (avatarSource.avatar) {
      return extractAvatarUrl(avatarSource.avatar)
    }
  }
  return null
}

const computeInitials = (name, fallback = 'AU') => {
  if (!name || typeof name !== 'string') return fallback
  const segments = name.trim().split(/\s+/).filter(Boolean)
  if (segments.length === 0) return fallback
  if (segments.length === 1) return segments[0].slice(0, 2).toUpperCase()
  return (segments[0][0] + segments[segments.length - 1][0]).toUpperCase()
}

const Avatar = ({
  src,
  name,
  initials,
  gradient = 'from-[#3838EC] to-[#0F172A]',
  className = 'h-10 w-10 text-xs',
  ringClassName = 'ring-2 ring-[#E2E8F0]',
  alt,
}) => {
  const [imageError, setImageError] = useState(false)
  const avatarUrl = extractAvatarUrl(src)
  const displayInitials = initials || computeInitials(name)
  const canShowImage = Boolean(avatarUrl) && !imageError

  return (
    <div
      className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full font-semibold select-none transition-transform ${ringClassName} ${
        !canShowImage ? `bg-gradient-to-br ${gradient} text-white` : 'bg-slate-200 dark:bg-slate-800'
      } ${className}`}
    >
      {canShowImage ? (
        <img
          src={avatarUrl}
          alt={alt || name || 'Profile photo'}
          onError={() => setImageError(true)}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      ) : (
        <span className="leading-none tracking-wider">{displayInitials}</span>
      )}
    </div>
  )
}

export default memo(Avatar)
