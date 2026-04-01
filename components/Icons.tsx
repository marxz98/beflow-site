const s = { width: 18, height: 18, fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
const s16 = { ...s, width: 16, height: 16 }

// Document/table — for spreadsheet files
export const IconDocument = () => (
  <svg {...s} viewBox="0 0 18 18">
    <path d="M10.5 1.5H4.5a1.5 1.5 0 0 0-1.5 1.5v12a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V6L10.5 1.5Z" />
    <path d="M10.5 1.5V6H15" />
    <path d="M6 9.75h6M6 12.75h4" />
  </svg>
)

// Clipboard/list — for plans
export const IconClipboard = () => (
  <svg {...s} viewBox="0 0 18 18">
    <path d="M12 2.25h1.5A1.5 1.5 0 0 1 15 3.75v11.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 3 15.25V3.75a1.5 1.5 0 0 1 1.5-1.5H6" />
    <rect x="6" y="1" width="6" height="2.5" rx="1" />
    <path d="M6.75 8.5h4.5M6.75 11.25h3" />
  </svg>
)

// Map pin — for zones
export const IconMapPin = () => (
  <svg {...s} viewBox="0 0 18 18">
    <path d="M14.25 7.5c0 4.5-5.25 8.75-5.25 8.75S3.75 12 3.75 7.5a5.25 5.25 0 1 1 10.5 0Z" />
    <circle cx="9" cy="7.5" r="1.75" />
  </svg>
)

// Chat bubble — for messaging
export const IconChat = () => (
  <svg {...s} viewBox="0 0 18 18">
    <path d="M15.75 8.625a6.1 6.1 0 0 1-.66 2.775 6.188 6.188 0 0 1-5.59 3.475 6.1 6.1 0 0 1-2.775-.66L2.25 15.75l1.535-4.475A6.1 6.1 0 0 1 3.125 8.5a6.188 6.188 0 0 1 3.475-5.59A6.1 6.1 0 0 1 9.375 2.25h.375A6.17 6.17 0 0 1 15.75 8.25v.375Z" />
  </svg>
)

// Lightning bolt — for orders/energy
export const IconBolt = () => (
  <svg {...s} viewBox="0 0 18 18">
    <path d="M10 1.5 3.75 10.5H9L8 16.5l6.25-9H9.75L10 1.5Z" />
  </svg>
)

// Checkmark
export const IconCheck = () => (
  <svg {...s16} viewBox="0 0 16 16">
    <path d="M3.5 8.5 6.5 11.5 12.5 4.5" />
  </svg>
)

// Users/people
export const IconUsers = () => (
  <svg {...s} viewBox="0 0 18 18">
    <path d="M12.75 15.75v-1.5a3 3 0 0 0-3-3h-4.5a3 3 0 0 0-3 3v1.5" />
    <circle cx="8" cy="5.25" r="2.75" />
    <path d="M15.75 15.75v-1.5a3 3 0 0 0-2.25-2.9" />
    <path d="M11.25 2.35a3 3 0 0 1 0 5.8" />
  </svg>
)

// Dollar/currency
export const IconCurrency = () => (
  <svg {...s} viewBox="0 0 18 18">
    <path d="M9 1.5v15" />
    <path d="M12.75 4.5H7.125a2.625 2.625 0 0 0 0 5.25h3.75a2.625 2.625 0 0 1 0 5.25H5.25" />
  </svg>
)

// Ticket/clipboard order
export const IconTicket = () => (
  <svg {...s} viewBox="0 0 18 18">
    <path d="M14.25 3h-10.5A1.5 1.5 0 0 0 2.25 4.5v2.25a1.5 1.5 0 1 1 0 3v2.25a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5v-2.25a1.5 1.5 0 1 1 0-3V4.5A1.5 1.5 0 0 0 14.25 3Z" />
    <path d="M7.5 6.75v4.5" strokeDasharray="2 2" />
  </svg>
)

// Refresh/arrows circle
export const IconRefresh = () => (
  <svg {...s16} viewBox="0 0 16 16">
    <path d="M1.5 2.5v4h4" />
    <path d="M14.5 13.5v-4h-4" />
    <path d="M13.15 5.75A5.25 5.25 0 0 0 4.1 3.85L1.5 6.5" />
    <path d="M2.85 10.25a5.25 5.25 0 0 0 9.05 1.9L14.5 9.5" />
  </svg>
)

// Diamond — for products eyebrow
export const IconDiamond = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" stroke="none">
    <path d="M5 0L9.33 5L5 10L0.67 5Z" />
  </svg>
)

// Target/bullseye — for pricing eyebrow
export const IconTarget = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <circle cx="5" cy="5" r="4" />
    <circle cx="5" cy="5" r="1.5" />
  </svg>
)

// Arrow right — for process eyebrow
export const IconArrowRight = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 5h6M5.5 2.5 8 5 5.5 7.5" />
  </svg>
)

// Question mark circle — for FAQ eyebrow
export const IconQuestion = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="5" cy="5" r="4" />
    <path d="M3.75 3.75a1.5 1.5 0 0 1 2.75.75c0 1-1.5 1.25-1.5 1.25" />
    <circle cx="5" cy="7.5" r="0.25" fill="currentColor" stroke="none" />
  </svg>
)
