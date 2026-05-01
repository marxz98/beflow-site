const s = { width: 18, height: 18, fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
const s16 = { ...s, width: 16, height: 16 }

export const IconDocument = () => (
  <svg {...s} viewBox="0 0 18 18">
    <path d="M10.5 1.5H4.5a1.5 1.5 0 0 0-1.5 1.5v12a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V6L10.5 1.5Z" />
    <path d="M10.5 1.5V6H15" />
    <path d="M6 9.75h6M6 12.75h4" />
  </svg>
)

export const IconClipboard = () => (
  <svg {...s} viewBox="0 0 18 18">
    <path d="M12 2.25h1.5A1.5 1.5 0 0 1 15 3.75v11.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 3 15.25V3.75a1.5 1.5 0 0 1 1.5-1.5H6" />
    <rect x="6" y="1" width="6" height="2.5" rx="1" />
    <path d="M6.75 8.5h4.5M6.75 11.25h3" />
  </svg>
)

export const IconMapPin = () => (
  <svg {...s} viewBox="0 0 18 18">
    <path d="M14.25 7.5c0 4.5-5.25 8.75-5.25 8.75S3.75 12 3.75 7.5a5.25 5.25 0 1 1 10.5 0Z" />
    <circle cx="9" cy="7.5" r="1.75" />
  </svg>
)

export const IconChat = () => (
  <svg {...s} viewBox="0 0 18 18">
    <path d="M15.75 8.625a6.1 6.1 0 0 1-.66 2.775 6.188 6.188 0 0 1-5.59 3.475 6.1 6.1 0 0 1-2.775-.66L2.25 15.75l1.535-4.475A6.1 6.1 0 0 1 3.125 8.5a6.188 6.188 0 0 1 3.475-5.59A6.1 6.1 0 0 1 9.375 2.25h.375A6.17 6.17 0 0 1 15.75 8.25v.375Z" />
  </svg>
)

export const IconBolt = () => (
  <svg {...s} viewBox="0 0 18 18">
    <path d="M10 1.5 3.75 10.5H9L8 16.5l6.25-9H9.75L10 1.5Z" />
  </svg>
)

export const IconCheck = () => (
  <svg {...s16} viewBox="0 0 16 16">
    <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
  </svg>
)

export const IconUsers = () => (
  <svg {...s} viewBox="0 0 18 18">
    <path d="M12.75 15.75v-1.5a3 3 0 0 0-3-3h-4.5a3 3 0 0 0-3 3v1.5" />
    <circle cx="8" cy="5.25" r="2.75" />
    <path d="M15.75 15.75v-1.5a3 3 0 0 0-2.25-2.9" />
    <path d="M11.25 2.35a3 3 0 0 1 0 5.8" />
  </svg>
)

export const IconCurrency = () => (
  <svg {...s} viewBox="0 0 18 18">
    <path d="M9 1.5v15" />
    <path d="M12.75 4.5H7.125a2.625 2.625 0 0 0 0 5.25h3.75a2.625 2.625 0 0 1 0 5.25H5.25" />
  </svg>
)

export const IconTicket = () => (
  <svg {...s} viewBox="0 0 18 18">
    <path d="M14.25 3h-10.5A1.5 1.5 0 0 0 2.25 4.5v2.25a1.5 1.5 0 1 1 0 3v2.25a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5v-2.25a1.5 1.5 0 1 1 0-3V4.5A1.5 1.5 0 0 0 14.25 3Z" />
    <path d="M7.5 6.75v4.5" strokeDasharray="2 2" />
  </svg>
)

export const IconRefresh = () => (
  <svg {...s16} viewBox="0 0 16 16">
    <path d="M1.5 2.5v4h4" />
    <path d="M14.5 13.5v-4h-4" />
    <path d="M13.15 5.75A5.25 5.25 0 0 0 4.1 3.85L1.5 6.5" />
    <path d="M2.85 10.25a5.25 5.25 0 0 0 9.05 1.9L14.5 9.5" />
  </svg>
)

export const IconDiamond = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" stroke="none">
    <path d="M5 0L9.33 5L5 10L0.67 5Z" />
  </svg>
)

export const IconTarget = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <circle cx="5" cy="5" r="4" />
    <circle cx="5" cy="5" r="1.5" />
  </svg>
)

export const IconArrowRight = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 5h6M5.5 2.5 8 5 5.5 7.5" />
  </svg>
)

export const IconQuestion = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="5" cy="5" r="4" />
    <path d="M3.75 3.75a1.5 1.5 0 0 1 2.75.75c0 1-1.5 1.25-1.5 1.25" />
    <circle cx="5" cy="7.5" r="0.25" fill="currentColor" stroke="none" />
  </svg>
)

export const IconCode = () => (
  <svg {...s} viewBox="0 0 18 18">
    <path d="M12 3.75l3.75 5.25L12 14.25" />
    <path d="M6 14.25L2.25 9 6 3.75" />
    <path d="M10.5 2.25l-3 13.5" />
  </svg>
)

export const IconGlobe = () => (
  <svg {...s} viewBox="0 0 18 18">
    <circle cx="9" cy="9" r="7.5" />
    <path d="M1.5 9h15" />
    <path d="M9 1.5a11.25 11.25 0 0 1 3 7.5 11.25 11.25 0 0 1-3 7.5" />
    <path d="M9 1.5a11.25 11.25 0 0 0-3 7.5 11.25 11.25 0 0 0 3 7.5" />
  </svg>
)

export const IconShield = () => (
  <svg {...s} viewBox="0 0 18 18">
    <path d="M9 16.5s6-3 6-8.25V3.75L9 1.5 3 3.75v4.5C3 13.5 9 16.5 9 16.5Z" />
    <path d="M6.75 9l1.5 1.5 3-3" />
  </svg>
)

export const IconTerminal = () => (
  <svg {...s} viewBox="0 0 18 18">
    <path d="M3 12.75l4.5-3.75L3 5.25" />
    <path d="M9.75 12.75H15" />
  </svg>
)

export const IconPackage = () => (
  <svg {...s} viewBox="0 0 18 18">
    <path d="M15.38 5.03L9 1.5 2.63 5.03 9 8.56l6.38-3.53Z" />
    <path d="M2.63 5.03V12.97L9 16.5" />
    <path d="M15.38 5.03V12.97L9 16.5" />
    <path d="M9 8.56V16.5" />
  </svg>
)

export const IconLock = () => (
  <svg {...s} viewBox="0 0 18 18">
    <rect x="3.75" y="8.25" width="10.5" height="7.5" rx="1.5" />
    <path d="M5.25 8.25V5.25a3.75 3.75 0 1 1 7.5 0v3" />
  </svg>
)

export const IconEye = () => (
  <svg {...s} viewBox="0 0 18 18">
    <path d="M1.5 9s3-6 7.5-6 7.5 6 7.5 6-3 6-7.5 6S1.5 9 1.5 9Z" />
    <circle cx="9" cy="9" r="2.25" />
  </svg>
)

export const IconZap = () => (
  <svg {...s} viewBox="0 0 18 18">
    <path d="M9.75 1.5L3 10.5h5.25l-.75 6 6.75-9H9L9.75 1.5Z" />
  </svg>
)

export const IconSearch = () => (
  <svg {...s} viewBox="0 0 18 18">
    <circle cx="8" cy="8" r="5.25" />
    <path d="M15.75 15.75l-3.65-3.65" />
  </svg>
)

export const IconAlertTriangle = () => (
  <svg {...s} viewBox="0 0 18 18">
    <path d="M7.86 2.93L1.21 14.25a1.31 1.31 0 0 0 1.14 1.97h13.3a1.31 1.31 0 0 0 1.14-1.97L10.14 2.93a1.31 1.31 0 0 0-2.28 0Z" />
    <path d="M9 6.75v3" />
    <circle cx="9" cy="12.75" r="0.375" fill="currentColor" stroke="none" />
  </svg>
)

export const IconFileText = () => (
  <svg {...s} viewBox="0 0 18 18">
    <path d="M10.5 1.5H4.5a1.5 1.5 0 0 0-1.5 1.5v12a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V6L10.5 1.5Z" />
    <path d="M10.5 1.5V6H15" />
    <path d="M6 9.75h6M6 12.75h4" />
  </svg>
)

export const IconSettings = () => (
  <svg {...s} viewBox="0 0 18 18">
    <circle cx="9" cy="9" r="2.25" />
    <path d="M14.7 11.1a1.2 1.2 0 0 0 .24 1.32l.04.04a1.46 1.46 0 1 1-2.06 2.06l-.04-.04a1.2 1.2 0 0 0-1.32-.24 1.2 1.2 0 0 0-.73 1.1v.12a1.46 1.46 0 1 1-2.91 0v-.06a1.2 1.2 0 0 0-.79-1.1 1.2 1.2 0 0 0-1.32.24l-.04.04a1.46 1.46 0 1 1-2.06-2.06l.04-.04a1.2 1.2 0 0 0 .24-1.32 1.2 1.2 0 0 0-1.1-.73h-.12a1.46 1.46 0 1 1 0-2.91h.06a1.2 1.2 0 0 0 1.1-.79 1.2 1.2 0 0 0-.24-1.32l-.04-.04A1.46 1.46 0 1 1 5.6 3.24l.04.04a1.2 1.2 0 0 0 1.32.24h.06a1.2 1.2 0 0 0 .73-1.1v-.12a1.46 1.46 0 0 1 2.91 0v.06a1.2 1.2 0 0 0 .73 1.1 1.2 1.2 0 0 0 1.32-.24l.04-.04a1.46 1.46 0 1 1 2.06 2.06l-.04.04a1.2 1.2 0 0 0-.24 1.32v.06a1.2 1.2 0 0 0 1.1.73h.12a1.46 1.46 0 0 1 0 2.91h-.06a1.2 1.2 0 0 0-1.1.73Z" />
  </svg>
)

export const IconWifi = () => (
  <svg {...s} viewBox="0 0 18 18">
    <path d="M1.5 6.38a11.25 11.25 0 0 1 15 0" />
    <path d="M4.5 9.38a7.5 7.5 0 0 1 9 0" />
    <path d="M7.13 12.38a3.75 3.75 0 0 1 3.75 0" />
    <circle cx="9" cy="15" r="0.375" fill="currentColor" stroke="none" />
  </svg>
)

export const IconGitBranch = () => (
  <svg {...s} viewBox="0 0 18 18">
    <path d="M4.5 2.25v9" />
    <path d="M13.5 6.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" />
    <path d="M4.5 15.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" />
    <path d="M13.5 6.75a6.75 6.75 0 0 1-6.75 6.75" />
  </svg>
)
