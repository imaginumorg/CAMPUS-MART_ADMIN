export const PRODUCT_STATUS = {
  DRAFT: 'draft',
  LISTED: 'listed',
  SOLD: 'sold',
  UNLISTED: 'unlisted',
  BLOCKED: 'blocked',
}

export const USER_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
  SUSPENDED: 'suspended',
}

export const USER_ROLES = {
  ADMIN: 'admin',
  SUPPORT: 'support',
  USER: 'user',
}

export const REPORT_STATUS = {
  PENDING: 'pending',
  ACTION_TAKEN: 'action_taken',
  DISMISSED: 'dismissed',
}

export const REPORT_REASONS = {
  SPAM_OR_ADVERTISEMENT: 'spam_or_advertisement',
  FAKE_OR_MISLEADING: 'fake_or_misleading',
  INAPPROPRIATE_CONTENT: 'inappropriate_content',
  FRAUD_OR_SCAM: 'fraud_or_scam',
  PROHIBITED_ITEM: 'prohibited_item',
  DUPLICATE_LISTING: 'duplicate_listing',
  WRONG_CATEGORY: 'wrong_category',
  SOLD_OR_UNAVAILABLE: 'sold_or_unavailable',
  OTHER: 'other',
}

export const STATUS_BADGE_STYLES = {
  active: 'bg-[#ECFDF3] text-[#15803D]',
  inactive: 'bg-[#F1F5F9] text-[#64748B]',
  suspended: 'bg-[#FEF2F2] text-[#DC2626]',
  listed: 'bg-[#EEF2FF] text-[#3838EC]',
  draft: 'bg-[#F1F5F9] text-[#64748B]',
  sold: 'bg-[#F0FDF4] text-[#15803D]',
  unlisted: 'bg-[#FFF7ED] text-[#C2410C]',
  blocked: 'bg-[#FEF2F2] text-[#DC2626]',
  pending: 'bg-[#FFF7ED] text-[#C2410C]',
  action_taken: 'bg-[#ECFDF3] text-[#15803D]',
  dismissed: 'bg-[#F1F5F9] text-[#64748B]',
}

export const REPORT_REASON_LABELS = {
  spam_or_advertisement: 'Spam / Ad',
  fake_or_misleading: 'Fake / Misleading',
  inappropriate_content: 'Inappropriate',
  fraud_or_scam: 'Fraud / Scam',
  prohibited_item: 'Prohibited Item',
  duplicate_listing: 'Duplicate',
  wrong_category: 'Wrong Category',
  sold_or_unavailable: 'Sold / Unavailable',
  other: 'Other',
}

export const AUDIT_ACTION_LABELS = {
  'user.suspend': 'Suspended user',
  'user.activate': 'Activated user',
  'user.status_change': 'Changed user status',
  'product.block': 'Blocked product',
  'product.unlist': 'Unlisted product',
  'product.activate': 'Activated product',
  'product.status_change': 'Changed product status',
  'product.soft_delete': 'Soft-deleted product',
  'product.hard_delete': 'Permanently deleted product',
  'campus.create': 'Created campus',
  'campus.update': 'Updated campus',
  'campus.activate': 'Activated campus',
  'campus.pause': 'Paused campus',
  'report.dismiss': 'Dismissed reports',
  'report.action_taken': 'Took action on reports',
}

export const REPORT_THRESHOLD = 3
