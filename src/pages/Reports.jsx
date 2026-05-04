import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import EmptyState from '../components/EmptyState'
import Loader from '../components/Loader'
import Modal from '../components/Modal'
import { useFetch } from '../hooks/useFetch'
import { api } from '../services/api'
import { PRODUCT_STATUS } from '../utils/constants'

const reportModes = {
  USER: 'user',
  PRODUCT: 'product',
}

const userReportStatusStyles = {
  pending: 'bg-[#FEF3C7] text-[#B45309]',
  warned: 'bg-[#EEF2FF] text-primary',
  suspended: 'bg-[#FEF2F2] text-[#DC2626]',
  banned: 'bg-[#FEE2E2] text-[#991B1B]',
  dismissed: 'bg-[#ECFDF3] text-[#15803D]',
}

const reviewTimelineItems = [
  {
    title: 'Report Submitted',
    description: 'Jane Smith filed a complaint for Inappropriate Content.',
    time: 'Oct 24, 09:12 AM',
    tone: 'neutral',
  },
  {
    title: 'Auto-flagged',
    description: 'System detected high-risk keywords and escalated for review.',
    time: 'Oct 24, 09:12 AM',
    tone: 'primary',
  },
  {
    title: 'Assigned to moderator',
    description: 'Case assigned to Mod_SarahV for final decision.',
    time: 'Oct 24, 10:45 AM',
    tone: 'success',
  },
  {
    title: 'Resolution Pending',
    description: 'Moderator must select an action to close the case.',
    time: 'Current Status',
    tone: 'muted',
  },
]

const timelineDotStyles = {
  primary: 'bg-primary',
  success: 'bg-[#22C55E]',
  neutral: 'bg-[#94A3B8]',
  muted: 'border border-[#CBD5E1] bg-white',
}

const Reports = () => {
  const [activeMode, setActiveMode] = useState(reportModes.USER)
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [productReportPendingBlock, setProductReportPendingBlock] = useState(null)
  const [selectedUserReportId, setSelectedUserReportId] = useState(null)

  useEffect(() => {
    const debounceTimer = window.setTimeout(() => {
      setDebouncedSearchQuery(searchQuery)
      setCurrentPage(1)
    }, 120)

    return () => window.clearTimeout(debounceTimer)
  }, [searchQuery])

  const loadProductReports = useCallback(
    () => api.getReports({ search: debouncedSearchQuery, page: currentPage }),
    [debouncedSearchQuery, currentPage],
  )
  const loadUserReports = useCallback(() => api.getUserReports(), [])

  const productReportsState = useFetch(loadProductReports)
  const userReportsState = useFetch(loadUserReports)

  const selectedUserReportRequest = useCallback(
    () => (selectedUserReportId ? api.getUserReportById(selectedUserReportId) : Promise.resolve({ success: true, data: null, pagination: null })),
    [selectedUserReportId],
  )
  const selectedUserReportState = useFetch(selectedUserReportRequest)

  const userReports = useMemo(() => userReportsState.data ?? [], [userReportsState.data])
  const productReports = useMemo(() => productReportsState.data ?? [], [productReportsState.data])

  const filteredUserReports = useMemo(
    () =>
      userReports.filter((userReport) =>
        !debouncedSearchQuery ||
        [
          userReport.reportedUser,
          userReport.reporterName,
          userReport.reporterId,
          userReport.email,
          userReport.id,
          userReport.reason,
          userReport.status,
        ]
          .join(' ')
          .toLowerCase()
          .includes(debouncedSearchQuery.toLowerCase()),
      ),
    [debouncedSearchQuery, userReports],
  )

  const visibleProductReports = productReports
  const activeUserReport = selectedUserReportState.data
  const hasVisibleData = activeMode === reportModes.USER ? userReports.length > 0 : productReports.length > 0

  const refreshUserReports = useCallback(async () => {
    await userReportsState.refetch()
    setSelectedUserReportId(null)
  }, [userReportsState])

  const handleUserReportAction = useCallback(
    async (nextStatus) => {
      if (!activeUserReport) return

      await api.updateUserReportStatus(activeUserReport.id, nextStatus)
      await refreshUserReports()
    },
    [activeUserReport, refreshUserReports],
  )

  const confirmProductBlock = useCallback(async () => {
    if (!productReportPendingBlock) return

    await api.updateProduct(productReportPendingBlock.productId, { status: PRODUCT_STATUS.BLOCKED })
    await api.ignoreReport(productReportPendingBlock.id)
    setProductReportPendingBlock(null)
    productReportsState.refetch()
  }, [productReportPendingBlock, productReportsState])

  if ((productReportsState.loading || userReportsState.loading || selectedUserReportState.loading) && !hasVisibleData) {
    return <Loader rows={4} columns={4} />
  }

  if (activeMode === reportModes.USER && activeUserReport) {
    return (
      <div className="space-y-5">
        <div className="flex flex-wrap items-center gap-2 text-[13px] text-[#475569]">
          <button type="button" onClick={() => setSelectedUserReportId(null)} className="font-medium">
            Moderation
          </button>
          <span>&gt;</span>
          <button type="button" onClick={() => setSelectedUserReportId(null)} className="font-medium">
            Active Reports
          </button>
          <span>&gt;</span>
          <span className="font-semibold text-primary">Review Report #{activeUserReport.id}</span>
        </div>

        <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <h1 className="text-[22px] font-semibold text-[#0B1220]">Case Investigation</h1>
            <p className="mt-1.5 text-[15px] text-[#475569]">Reviewing user {activeUserReport.reportedUser} for reported violations.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={() => handleUserReportAction('dismissed')} className="rounded-xl border border-[#E2E8F0] bg-white px-5 py-2.5 text-[15px] font-medium text-[#334155] shadow-sm">
              Dismiss
            </button>
            <button type="button" onClick={() => handleUserReportAction('warned')} className="rounded-xl bg-primary px-5 py-2.5 text-[15px] font-medium text-white shadow-sm">
              Warn User
            </button>
            <button type="button" onClick={() => handleUserReportAction('suspended')} className="rounded-xl bg-[#EF4444] px-5 py-2.5 text-[15px] font-medium text-white shadow-sm">
              Suspend Account
            </button>
            <button type="button" onClick={() => handleUserReportAction('banned')} className="rounded-xl bg-[#DC2626] px-5 py-2.5 text-[15px] font-medium text-white shadow-sm">
              Ban User
            </button>
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-[0.58fr_1.32fr]">
          <div className="space-y-5">
            <section className="rounded-[24px] bg-white p-6 shadow-sm">
              <div className="text-center">
                <div className={`mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${activeUserReport.avatarColor} text-2xl font-semibold text-white ring-4 ring-[#EEF2FF]`}>
                  {activeUserReport.reportedUser
                    .split(' ')
                    .map((namePart) => namePart[0])
                    .join('')}
                </div>
                <div className="mt-5 inline-flex h-4.5 w-4.5 rounded-full bg-[#FF4D4F] ring-4 ring-white" />
                <h2 className="mt-3 text-[22px] font-semibold text-[#0B1220]">{activeUserReport.reportedUser}</h2>
                <div className="mt-2 inline-flex rounded-full bg-[#EEF2FF] px-3 py-1.5 text-[13px] font-semibold text-primary">
                  {activeUserReport.reporterId}
                </div>
                <div className="mt-6 flex justify-center gap-2">
                  <span className="rounded-full bg-[#EEF2FF] px-3 py-1.5 text-[13px] font-semibold text-primary">Flagged</span>
                  <span className="rounded-full bg-[#F1F5F9] px-3 py-1.5 text-[13px] font-semibold text-[#64748B]">Since Oct 2023</span>
                </div>
              </div>
            </section>

            <section className="rounded-[24px] bg-white p-6 shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B1220]">Violation History</p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-xl bg-[#F8FAFC] p-4 text-center">
                  <p className="text-[34px] font-semibold leading-none text-[#0B1220]">3</p>
                  <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#64748B]">Warnings</p>
                </div>
                <div className="rounded-xl border border-[#FECACA] bg-[#FFF5F5] p-4 text-center">
                  <p className="text-[34px] font-semibold leading-none text-[#DC2626]">1</p>
                  <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#64748B]">Suspension</p>
                </div>
                <div className="rounded-xl bg-[#F8FAFC] p-4 text-center">
                  <p className="text-[34px] font-semibold leading-none text-[#0B1220]">12</p>
                  <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#64748B]">Resolved</p>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-[14px]">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[#64748B]">Email Verification</span>
                  <span className="font-semibold text-[#16A34A]">Verified</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[#64748B]">Device Fingerprint</span>
                  <span className="font-medium text-[#0B1220]">Bravia-90X7-L</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[#64748B]">Primary IP</span>
                  <span className="font-medium text-[#0B1220]">192.168.1.42</span>
                </div>
              </div>
            </section>
          </div>

          <div className="space-y-5">
            <section className="rounded-[24px] bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="inline-flex rounded-full bg-[#FFF1F2] px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#DC2626]">
                    Urgent
                  </div>
                  <h2 className="mt-4 text-[22px] font-semibold text-[#0B1220]">Report Details - #{activeUserReport.id}</h2>
                  <p className="mt-1.5 text-[15px] text-[#475569]">
                    Reason: <span className="font-semibold text-[#0B1220]">Inappropriate Content</span>
                  </p>
                </div>
                <p className="text-[15px] text-[#0B1220]">
                  Reporter: <span className="font-medium text-[#0B1220]">Jane Smith (USR-3301)</span>
                </p>
              </div>

              <div className="mt-6 rounded-[20px] border border-dashed border-[#D7E2F0] bg-[#F8FAFC] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748B]">Submitted Evidence (Text)</p>
                <div className="mt-4 rounded-xl bg-white p-5 text-[17px] italic leading-8 text-[#111827] shadow-sm">
                  &quot;{activeUserReport.evidenceText}&quot;
                </div>
              </div>

              <div className="mt-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748B]">Submitted Evidence (Images)</p>
                <div className="mt-4 flex flex-wrap gap-4">
                  <div className="h-32 w-32 rounded-xl bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#334155] shadow-sm" />
                  <div className="h-32 w-32 rounded-xl bg-gradient-to-br from-[#450A0A] via-[#7F1D1D] to-[#EF4444] shadow-sm" />
                </div>
              </div>
            </section>

            <section className="rounded-[24px] bg-white p-6 shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B1220]">Report Timeline</p>
              <div className="mt-6 space-y-6">
                {reviewTimelineItems.map((timelineItem, index) => (
                  <div key={timelineItem.title} className="grid gap-3 md:grid-cols-[28px_1fr_auto] md:items-start">
                    <div className="relative flex justify-center">
                      <span className={`mt-1.5 h-3 w-3 rounded-full ${timelineDotStyles[timelineItem.tone]}`} />
                      {index !== reviewTimelineItems.length - 1 && <span className="absolute left-1/2 top-4 h-[58px] w-px -translate-x-1/2 bg-[#E2E8F0]" />}
                    </div>
                    <div>
                      <p className={`text-[16px] font-semibold ${timelineItem.tone === 'muted' ? 'text-[#CBD5E1]' : 'text-[#0B1220]'}`}>{timelineItem.title}</p>
                      <p className={`mt-1 text-[14px] ${timelineItem.tone === 'muted' ? 'text-[#CBD5E1]' : 'text-[#475569]'}`}>{timelineItem.description}</p>
                    </div>
                    <p className={`text-[13px] ${timelineItem.tone === 'muted' ? 'text-[#CBD5E1]' : 'text-[#0B1220]'}`}>{timelineItem.time}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
        <div>
          <h1 className="text-[24px] font-semibold tracking-[-0.03em] text-[#0B1220]">Reports</h1>
          <p className="mt-1 text-[14px] text-[#475569]">Review listing reports against moderation thresholds to maintain catalog integrity.</p>
        </div>
        <div className="inline-flex rounded-[16px] border border-[#DCE3EE] bg-[#F8FAFC] p-1">
          <button
            type="button"
            onClick={() => {
              setActiveMode(reportModes.USER)
              setSelectedUserReportId(null)
            }}
            className={`rounded-[12px] px-6 py-2.5 text-[15px] font-semibold ${activeMode === reportModes.USER ? 'bg-white text-primary shadow-sm' : 'text-[#334155]'}`}
          >
            Report User
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveMode(reportModes.PRODUCT)
              setSelectedUserReportId(null)
            }}
            className={`rounded-[12px] px-6 py-2.5 text-[15px] font-semibold ${activeMode === reportModes.PRODUCT ? 'bg-white text-primary shadow-sm' : 'text-[#334155]'}`}
          >
            Report Product
          </button>
        </div>
      </div>

      <div className="max-w-3xl">
        <div className="flex items-center gap-3 rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 shadow-sm">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#94A3B8]" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>
          <input
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search reports, products, or users..."
            className="w-full bg-transparent text-[14px] text-[#0B1220] outline-none placeholder:text-[#64748B]"
          />
        </div>
      </div>

      {activeMode === reportModes.USER ? (
        <>
          {userReportsState.error ? (
            <EmptyState message={userReportsState.error} />
          ) : (
          <section className="overflow-hidden rounded-[20px] bg-white shadow-sm">
            <div className="flex flex-col gap-3 border-b border-[#EEF1F5] px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-3">
                <h2 className="text-[19px] font-semibold text-[#0B1220]">Active User Reports</h2>
                <span className="rounded-full bg-[#EEF2FF] px-3 py-1 text-[11px] font-semibold text-primary">
                  {filteredUserReports.filter((report) => report.status === 'pending').length} Pending
                </span>
              </div>
              <button type="button" className="flex items-center gap-2 text-[15px] font-medium text-[#334155]">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6h16" />
                  <path d="M7 12h10" />
                  <path d="M10 18h4" />
                </svg>
                Filters
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[860px] text-left">
                <thead className="bg-[#F8FAFC] text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                  <tr>
                    <th className="px-6 py-4">Reported User</th>
                    <th className="px-4 py-4">Seller ID</th>
                    <th className="px-4 py-4">Report ID</th>
                    <th className="px-4 py-4">Reported By</th>
                    <th className="px-4 py-4">Reason</th>
                    <th className="px-4 py-4">Status</th>
                    <th className="px-6 py-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUserReports.length > 0 ? filteredUserReports.map((userReport) => (
                    <tr key={userReport.id} className="border-t border-[#EEF1F5]">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${userReport.avatarColor} text-sm font-semibold text-white`}>
                            {userReport.reportedUser
                              .split(' ')
                              .map((namePart) => namePart[0])
                              .join('')}
                          </div>
                          <div>
                            <p className="text-[14px] font-semibold text-[#0B1220]">{userReport.reportedUser}</p>
                            <p className="mt-0.5 text-[12px] text-[#64748B]">{userReport.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-5 text-[14px] text-[#334155]">{userReport.sellerId}</td>
                      <td className="px-4 py-5 text-[14px] text-[#334155]">#{userReport.id}</td>
                      <td className="px-4 py-5">
                        <p className="text-[14px] font-medium text-[#0B1220]">{userReport.reporterName}</p>
                        <p className="mt-0.5 text-[12px] text-[#64748B]">ID: {userReport.reporterId}</p>
                      </td>
                      <td className="px-4 py-5 text-[14px] text-[#334155]">{userReport.shortReason}</td>
                      <td className="px-4 py-5">
                        <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${userReportStatusStyles[userReport.status]}`}>
                          {userReport.resolutionLabel || 'Pending'}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <button type="button" onClick={() => setSelectedUserReportId(userReport.id)} className="text-[15px] font-semibold text-primary">
                          Review
                        </button>
                      </td>
                    </tr>
                  )) : (
                    <tr className="border-t border-[#EEF1F5]">
                      <td colSpan="7" className="px-6 py-10 text-center text-[14px] text-[#64748B]">
                        No user reports match the current search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>
          )}

          <section className="rounded-[20px] bg-white px-6 py-7 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#ECFDF3] text-[#16A34A]">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="9" />
                    <path d="m8 12 2.5 2.5L16 9" />
                  </svg>
                </div>
                <div>
                  <p className="text-[16px] font-semibold text-[#0B1220]">24 Reports Resolved</p>
                  <p className="text-[14px] text-[#64748B]">In the last 24 hours</p>
                </div>
              </div>
              <button type="button" className="text-[15px] font-medium text-primary">
                View History
              </button>
            </div>
          </section>
        </>
      ) : (
        <>
          {productReportsState.error ? (
            <EmptyState message={productReportsState.error} />
          ) : (
          <section className="overflow-hidden rounded-[20px] bg-white shadow-sm">
            <div className="flex flex-col gap-3 border-b border-[#EEF1F5] px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-3">
                <h2 className="text-[19px] font-semibold text-[#0B1220]">Active Product Reports</h2>
                <span className="rounded-full bg-[#EEF2FF] px-3 py-1 text-[11px] font-semibold text-primary">
                  {visibleProductReports.filter((report) => report.status === 'open').length} Pending
                </span>
              </div>
              <button type="button" className="flex items-center gap-2 text-[15px] font-medium text-[#334155]">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6h16" />
                  <path d="M7 12h10" />
                  <path d="M10 18h4" />
                </svg>
                Filters
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[860px] text-left">
                <thead className="bg-[#F8FAFC] text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748B]">
                  <tr>
                    <th className="px-6 py-4">Report ID</th>
                    <th className="px-4 py-4">Reported By</th>
                    <th className="px-4 py-4">Seller ID</th>
                    <th className="px-4 py-4">Product</th>
                    <th className="px-4 py-4">Reason</th>
                    <th className="px-4 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleProductReports.length > 0 ? visibleProductReports.map((productReport, index) => (
                    <tr key={productReport.id} className="border-t border-[#EEF1F5]">
                      <td className="px-6 py-5 text-[12px] text-[#64748B]">{productReport.reportId}</td>
                      <td className="px-4 py-5">
                        <p className="text-[14px] font-semibold text-[#0B1220]">{productReport.reporterName}</p>
                        <p className="mt-0.5 text-[12px] text-[#64748B]">{productReport.reporterReference}</p>
                      </td>
                      <td className="px-4 py-5 text-[12px] text-[#64748B]">{productReport.sellerId}</td>
                      <td className="px-4 py-5">
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                              index === 0
                                ? 'bg-gradient-to-br from-[#475569] to-[#111827]'
                                : index === 1
                                  ? 'bg-gradient-to-br from-[#94A3B8] to-[#2563EB]'
                                  : 'bg-gradient-to-br from-[#EF4444] to-[#FB7185]'
                            }`}
                          >
                            <div className="h-4.5 w-4.5 rounded bg-white/85" />
                          </div>
                          <div>
                            <p className="text-[14px] font-medium text-[#0B1220]">{productReport.product}</p>
                            <p className="text-[12px] text-[#64748B]">SKU: {productReport.sku}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-5 text-[14px] text-[#334155]">{productReport.reason}</td>
                      <td className="px-4 py-5">
                        <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${productReport.reportCount >= 3 ? 'bg-[#EEF2FF] text-primary' : 'bg-[#F1F5F9] text-[#475569]'}`}>
                          {productReport.reportCount >= 3 ? 'Auto Flagged' : 'Pending'}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            onClick={() => setProductReportPendingBlock(productReport)}
                            className="rounded-lg bg-[#DC2626] px-3 py-2 text-[11px] font-medium text-white"
                          >
                            Block
                          </button>
                          <button
                            type="button"
                            onClick={async () => {
                              await api.ignoreReport(productReport.id)
                              productReportsState.refetch()
                            }}
                            className="rounded-lg bg-[#F8FAFC] px-3 py-2 text-[11px] font-medium text-[#475569]"
                          >
                            Ignore
                          </button>
                        </div>
                      </td>
                    </tr>
                  )) : (
                    <tr className="border-t border-[#EEF1F5]">
                      <td colSpan="7" className="px-6 py-10 text-center text-[14px] text-[#64748B]">
                        No product reports match the current search.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between px-6 py-5 text-sm text-[#64748B]">
              <span>Showing 1 to {visibleProductReports.length} of {productReportsState.pagination?.total || 0} results</span>
              <div className="flex gap-2">
                <button type="button" className="rounded-lg border border-[#E2E8F0] px-3 py-2 text-[#CBD5E1]">&lt;</button>
                <button type="button" className="rounded-lg bg-primary px-3 py-2 text-white">1</button>
                <button type="button" className="rounded-lg border border-[#E2E8F0] px-3 py-2 text-[#334155]">2</button>
                <button type="button" className="rounded-lg border border-[#E2E8F0] px-3 py-2 text-[#334155]">3</button>
                <button type="button" className="rounded-lg border border-[#E2E8F0] px-3 py-2 text-[#334155]">&gt;</button>
              </div>
            </div>
          </section>
          )}

          <section className="max-w-sm rounded-[20px] bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEF2FF] text-primary">
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="m8 12 2.5 2.5L16 9" />
                </svg>
              </div>
              <span className="text-[11px] font-semibold text-[#16A34A]">Weekly Peak</span>
            </div>
            <p className="mt-5 text-[13px] text-[#64748B]">Reports Resolved</p>
            <p className="mt-1 text-[26px] font-semibold tracking-[-0.04em] text-[#0B1220]">1,284 Total Resolved</p>
          </section>
        </>
      )}

      <Modal
        open={Boolean(productReportPendingBlock)}
        title="Block product"
        description={productReportPendingBlock ? `Block ${productReportPendingBlock.product} and close this report?` : ''}
        confirmLabel="Block"
        tone="danger"
        onClose={() => setProductReportPendingBlock(null)}
        onConfirm={confirmProductBlock}
      />
    </div>
  )
}

export default memo(Reports)
