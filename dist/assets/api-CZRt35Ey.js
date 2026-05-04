import { r as c } from "./index-CVk0w7rZ.js";
import { P as m, U as g } from "./constants-Df5Dkz-m.js";
const v = (t) => {
    const [e, a] = c.useState(),
      [s, n] = c.useState(),
      [o, d] = c.useState(!0),
      [f, P] = c.useState(""),
      y = c.useRef(0),
      b = c.useRef(!1),
      S = c.useCallback(async () => {
        const R = y.current + 1;
        ((y.current = R), d((C) => C || !b.current), P(""));
        const p = await t();
        return (
          R !== y.current ||
            (p.success
              ? (a(p.data), n(p.pagination), (b.current = !0))
              : P(p.message),
            d(!1)),
          p
        );
      }, [t]);
    return (
      c.useEffect(() => {
        const R = window.setTimeout(S, 0);
        return () => window.clearTimeout(R);
      }, [S]),
      { data: e, pagination: s, loading: o, error: f, refetch: S }
    );
  },
  T = (t = 0) => new Promise((e) => setTimeout(e, t));
let h = [
    {
      id: 1,
      name: "Maya Chen",
      email: "maya@campus.edu",
      status: g.ACTIVE,
      listings: 12,
      joined: "2026-01-12",
    },
    {
      id: 2,
      name: "Arjun Mehta",
      email: "arjun@campus.edu",
      status: g.INACTIVE,
      listings: 4,
      joined: "2026-02-04",
    },
    {
      id: 3,
      name: "Lina Ortiz",
      email: "lina@campus.edu",
      status: g.SUSPENDED,
      listings: 8,
      joined: "2025-11-18",
    },
    {
      id: 4,
      name: "Noah Brooks",
      email: "noah@campus.edu",
      status: g.ACTIVE,
      listings: 21,
      joined: "2025-12-02",
    },
    {
      id: 5,
      name: "Priya Shah",
      email: "priya@campus.edu",
      status: g.ACTIVE,
      listings: 7,
      joined: "2026-03-09",
    },
  ],
  u = [
    {
      id: 1,
      product: "MacBook Air M2",
      seller: "Maya Chen",
      category: "Electronics",
      price: "$760",
      status: m.LISTED,
      reports: 1,
      created: "2026-04-12",
      is_deleted: !1,
    },
    {
      id: 2,
      product: "Calculus Textbook",
      seller: "Arjun Mehta",
      category: "Books",
      price: "$34",
      status: m.UNLISTED,
      reports: 2,
      created: "2026-04-08",
      is_deleted: !1,
    },
    {
      id: 3,
      product: "Campus Bike",
      seller: "Lina Ortiz",
      category: "Transport",
      price: "$140",
      status: m.BLOCKED,
      reports: 5,
      created: "2026-03-27",
      is_deleted: !1,
    },
    {
      id: 4,
      product: "Desk Lamp",
      seller: "Noah Brooks",
      category: "Dorm",
      price: "$18",
      status: m.SOLD,
      reports: 0,
      created: "2026-03-16",
      is_deleted: !1,
    },
    {
      id: 5,
      product: "Lab Coat",
      seller: "Priya Shah",
      category: "Supplies",
      price: "$22",
      status: m.LISTED,
      reports: 3,
      created: "2026-04-18",
      is_deleted: !1,
    },
  ],
  l = [
    {
      id: 1,
      reportId: "RID-9238476",
      product: "Zephyr Chronograph",
      productId: 3,
      reporterName: "Sarah Jenkins",
      reporterReference: "RID-238776148",
      sellerId: "UID-1293184",
      sku: "884729",
      reason: "Counterfeit Item",
      reportCount: 5,
      status: "open",
      created: "2026-04-20",
    },
    {
      id: 2,
      reportId: "RID-9238477",
      product: "SonicMax Elite",
      productId: 5,
      reporterName: "Michael Chen",
      reporterReference: "RID-238776149",
      sellerId: "UID-1294059",
      sku: "886134",
      reason: "Inappropriate Content",
      reportCount: 3,
      status: "open",
      created: "2026-04-21",
    },
    {
      id: 3,
      reportId: "RID-9238478",
      product: "Vanguard Trainers",
      productId: 2,
      reporterName: "Elena Rodriguez",
      reporterReference: "RID-238776150",
      sellerId: "UID-1294934",
      sku: "887539",
      reason: "Spam Listing",
      reportCount: 2,
      status: "open",
      created: "2026-04-22",
    },
    {
      id: 4,
      reportId: "RID-9238479",
      product: "Vanguard Trainers",
      productId: 1,
      reporterName: "Elena Rodriguez",
      reporterReference: "RID-238776151",
      sellerId: "UID-1295809",
      sku: "888944",
      reason: "Spam Listing",
      reportCount: 1,
      status: "open",
      created: "2026-04-23",
    },
  ],
  I = [
    {
      id: "REP-10293",
      reportedUser: "Alex Rivers",
      email: "alex.r@example.com",
      sellerId: "SEL-4829",
      reporterName: "Sarah Jenkins",
      reporterId: "USR-9021",
      reason: "Suspicious Activity",
      shortReason: "Suspicious ...",
      status: "pending",
      resolutionLabel: "Pending",
      severity: "urgent",
      avatarColor: "from-[#4B5563] to-[#111827]",
      evidenceText:
        "The user in question has been repeatedly posting content that violates the community guidelines regarding safety and harassment. Despite multiple requests to stop, they continue to target specific members...",
    },
    {
      id: "REP-10294",
      reportedUser: "Maria Chen",
      email: "m.chen@example.com",
      sellerId: "SEL-3104",
      reporterName: "Tom Wilson",
      reporterId: "USR-4421",
      reason: "Inaccurate Information",
      shortReason: "Inaccurate ...",
      status: "pending",
      resolutionLabel: "Pending",
      severity: "medium",
      avatarColor: "from-[#111827] to-[#64748B]",
      evidenceText:
        "Listing and profile details appear to be inconsistent across multiple reports. Additional review is needed to determine whether this is misinformation or a data mismatch.",
    },
  ];
const D = (t, { page: e = 1, limit: a = 5 } = {}) => {
    const s = t.length,
      n = Math.max(1, Math.ceil(s / a)),
      o = (e - 1) * a;
    return {
      data: t.slice(o, o + a),
      pagination: { page: e, limit: a, total: s, totalPages: n },
    };
  },
  U = (t, e) =>
    !e || Object.values(t).join(" ").toLowerCase().includes(e.toLowerCase()),
  r = (t, e = "Request completed", a = null) => ({
    success: !0,
    message: e,
    data: t,
    pagination: a,
  }),
  i = async (t) => {
    try {
      await T();
      const e = typeof t == "function" ? await t() : t;
      if (!(e != null && e.success))
        throw new Error((e == null ? void 0 : e.message) || "Request failed");
      return {
        success: e.success,
        message: e.message,
        data: e.data,
        pagination: e.pagination,
      };
    } catch (e) {
      return { success: !1, message: e.message, data: null, pagination: null };
    }
  },
  A = {
    getDashboard: () =>
      i(() => {
        const t = u.filter((a) => !a.is_deleted),
          e = {
            stats: [
              { label: "Active Reports", value: "1,284" },
              { label: "Rejected", value: "42" },
              { label: "Resolved", value: "912" },
            ],
            queue: [
              {
                id: "queue-1",
                title: "Review anomalous login spike in Region-4",
                subtitle: "Triggered by system security audit",
                time: "2 mins ago",
                actionLabel: "Urgent Action",
                tone: "danger",
              },
              {
                id: "queue-2",
                title: "Validate new data categorization model",
                subtitle: "Scheduled maintenance task",
                time: "15 mins ago",
                actionLabel: "Open",
                tone: "neutral",
              },
            ],
            activity: [
              {
                id: "activity-1",
                title: "Content Flag #8902",
                tag: "AUTO FLAGGED",
                description:
                  "Automated system detected high-risk keywords in public forum post.",
                time: "Just now",
                tone: "primary",
              },
              {
                id: "activity-2",
                title: "User Audit Complete",
                tag: "PENDING",
                description:
                  "Verification process for user ID_7739-X has been finalized by moderation.",
                time: "12m ago",
                tone: "neutral",
              },
              {
                id: "activity-3",
                title: "Critical Rejection",
                tag: "HIGH ALERT",
                description:
                  "Infrastructure attempt blocked from unauthorized IP range 192.x.x.x",
                time: "45m ago",
                tone: "danger",
              },
            ],
            summary: {
              activeUsers: h.filter((a) => a.status === g.ACTIVE).length,
              listedProducts: t.filter((a) => a.status === m.LISTED).length,
              openReports: l.filter((a) => a.status === "open").length,
              totalResolved: "1,284",
              productPending: 24,
              userPending: 12,
            },
          };
        return r(e, "Dashboard loaded");
      }),
    getUsers: ({ search: t = "", page: e = 1, limit: a = 5 } = {}) =>
      i(() => {
        const s = h.filter((d) => U(d, t)),
          { data: n, pagination: o } = D(s, { page: e, limit: a });
        return r(n, "Users loaded", o);
      }),
    updateUserStatus: (t, e) =>
      i(
        () => (
          (h = h.map((a) => (a.id === t ? { ...a, status: e } : a))),
          r(
            h.find((a) => a.id === t),
            "User status updated",
          )
        ),
      ),
    getProducts: ({
      search: t = "",
      status: e = "",
      page: a = 1,
      limit: s = 5,
    } = {}) =>
      i(() => {
        const n = u.filter(
            (f) => !f.is_deleted && U(f, t) && (!e || f.status === e),
          ),
          { data: o, pagination: d } = D(n, { page: a, limit: s });
        return r(o, "Products loaded", d);
      }),
    updateProduct: (t, e) =>
      i(
        () => (
          (u = u.map((a) => (a.id === t ? { ...a, ...e } : a))),
          r(
            u.find((a) => a.id === t),
            "Product updated",
          )
        ),
      ),
    hardDeleteProduct: (t) =>
      i(
        () => (
          (u = u.filter((e) => e.id !== t)),
          (l = l.filter((e) => e.productId !== t)),
          r({ id: t }, "Product permanently deleted")
        ),
      ),
    getReports: ({ search: t = "", page: e = 1, limit: a = 5 } = {}) =>
      i(() => {
        const s = l.filter((d) => d.status === "open" && U(d, t)),
          { data: n, pagination: o } = D(s, { page: e, limit: a });
        return r(n, "Reports loaded", o);
      }),
    getUserReports: () => i(() => r(I, "User reports loaded")),
    getUserReportById: (t) =>
      i(() =>
        r(
          I.find((e) => e.id === t),
          "User report loaded",
        ),
      ),
    updateUserReportStatus: (t, e) =>
      i(() => {
        const a = {
          pending: "Pending",
          dismissed: "Dismissed",
          warned: "Warned",
          suspended: "Suspended",
          banned: "Banned",
        };
        return (
          (I = I.map((s) =>
            s.id === t
              ? { ...s, status: e, resolutionLabel: a[e] || "Pending" }
              : s,
          )),
          r(
            I.find((s) => s.id === t),
            "User report status updated",
          )
        );
      }),
    getNotificationCenter: () =>
      i(() =>
        r(
          {
            preview: {
              title: "System Maintenance",
              body: "Scheduled maintenance window starting tomorrow at 9:00 PM.",
            },
            broadcasts: [
              {
                id: "broadcast-1",
                title: "Holiday Promo Alert",
                audience: "12.4k recipients",
                status: "SENT",
                time: "Today, 09:12 AM",
              },
              {
                id: "broadcast-2",
                title: "v2.4 Patch Notes",
                audience: "850 recipients",
                status: "DRAFT",
                time: "Oct 22, 04:45 PM",
              },
              {
                id: "broadcast-3",
                title: "Security Update",
                audience: "All Users",
                status: "SCHEDULED",
                time: "Oct 25, 10:00 AM",
              },
            ],
          },
          "Notification center loaded",
        ),
      ),
    ignoreReport: (t) =>
      i(
        () => (
          (l = l.map((e) => (e.id === t ? { ...e, status: "ignored" } : e))),
          r(
            l.find((e) => e.id === t),
            "Report ignored",
          )
        ),
      ),
  };
export { A as a, v as u };