import { r as p } from "./index-KimkZZM5.js";
import { a as C, P as g, U as m } from "./constants-DQJo3WZW.js";
const D = (t) => {
    const [e, a] = p.useState(null),
      [s, r] = p.useState(null),
      [o, n] = p.useState(!0),
      [f, E] = p.useState(""),
      S = p.useCallback(async () => {
        (n(!0), E(""));
        const c = await t();
        return (
          c.success ? (a(c.data), r(c.pagination)) : E(c.message),
          n(!1),
          c
        );
      }, [t]);
    return (
      p.useEffect(() => {
        const c = window.setTimeout(S, 0);
        return () => window.clearTimeout(c);
      }, [S]),
      { data: e, pagination: s, loading: o, error: f, refetch: S }
    );
  },
  y = (t = 350) => new Promise((e) => setTimeout(e, t));
let h = [
    {
      id: 1,
      name: "Maya Chen",
      email: "maya@campus.edu",
      status: m.ACTIVE,
      listings: 12,
      joined: "2026-01-12",
    },
    {
      id: 2,
      name: "Arjun Mehta",
      email: "arjun@campus.edu",
      status: m.INACTIVE,
      listings: 4,
      joined: "2026-02-04",
    },
    {
      id: 3,
      name: "Lina Ortiz",
      email: "lina@campus.edu",
      status: m.SUSPENDED,
      listings: 8,
      joined: "2025-11-18",
    },
    {
      id: 4,
      name: "Noah Brooks",
      email: "noah@campus.edu",
      status: m.ACTIVE,
      listings: 21,
      joined: "2025-12-02",
    },
    {
      id: 5,
      name: "Priya Shah",
      email: "priya@campus.edu",
      status: m.ACTIVE,
      listings: 7,
      joined: "2026-03-09",
    },
  ],
  l = [
    {
      id: 1,
      product: "MacBook Air M2",
      seller: "Maya Chen",
      category: "Electronics",
      price: "$760",
      status: g.LISTED,
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
      status: g.UNLISTED,
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
      status: g.BLOCKED,
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
      status: g.SOLD,
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
      status: g.LISTED,
      reports: 3,
      created: "2026-04-18",
      is_deleted: !1,
    },
  ],
  u = [
    {
      id: 1,
      product: "Campus Bike",
      productId: 3,
      reason: C.SCAM,
      reportCount: 5,
      status: "open",
      created: "2026-04-20",
    },
    {
      id: 2,
      product: "Lab Coat",
      productId: 5,
      reason: C.FAKE,
      reportCount: 3,
      status: "open",
      created: "2026-04-21",
    },
    {
      id: 3,
      product: "Calculus Textbook",
      productId: 2,
      reason: C.SPAM,
      reportCount: 2,
      status: "open",
      created: "2026-04-22",
    },
    {
      id: 4,
      product: "MacBook Air M2",
      productId: 1,
      reason: C.OTHER,
      reportCount: 1,
      status: "open",
      created: "2026-04-23",
    },
  ];
const P = (t, { page: e = 1, limit: a = 5 } = {}) => {
    const s = t.length,
      r = Math.max(1, Math.ceil(s / a)),
      o = (e - 1) * a;
    return {
      data: t.slice(o, o + a),
      pagination: { page: e, limit: a, total: s, totalPages: r },
    };
  },
  T = (t, e) =>
    !e || Object.values(t).join(" ").toLowerCase().includes(e.toLowerCase()),
  i = (t, e = "Request completed", a = null) => ({
    success: !0,
    message: e,
    data: t,
    pagination: a,
  }),
  d = async (t) => {
    try {
      await y();
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
  k = {
    getDashboard: () =>
      d(() => {
        const t = l.filter((a) => !a.is_deleted),
          e = {
            stats: [
              { label: "Total Products", value: t.length },
              {
                label: "Listed Products",
                value: t.filter((a) => a.status === g.LISTED).length,
              },
              {
                label: "Active Users",
                value: h.filter((a) => a.status === m.ACTIVE).length,
              },
              {
                label: "Open Reports",
                value: u.filter((a) => a.status === "open").length,
              },
            ],
            activity: [
              {
                title: "Recent flagged products",
                value: "Campus Bike, Lab Coat",
              },
              {
                title: "Recent suspensions",
                value: "Lina Ortiz moved to suspended",
              },
              {
                title: "Recent approvals",
                value: "Desk Lamp listing reviewed",
              },
              {
                title: "Pending reviews summary",
                value: "6 listings awaiting moderation",
              },
            ],
          };
        return i(e, "Dashboard loaded");
      }),
    getUsers: ({ search: t = "", page: e = 1, limit: a = 5 } = {}) =>
      d(() => {
        const s = h.filter((n) => T(n, t)),
          { data: r, pagination: o } = P(s, { page: e, limit: a });
        return i(r, "Users loaded", o);
      }),
    updateUserStatus: (t, e) =>
      d(
        () => (
          (h = h.map((a) => (a.id === t ? { ...a, status: e } : a))),
          i(
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
      d(() => {
        const r = l.filter(
            (f) => !f.is_deleted && T(f, t) && (!e || f.status === e),
          ),
          { data: o, pagination: n } = P(r, { page: a, limit: s });
        return i(o, "Products loaded", n);
      }),
    updateProduct: (t, e) =>
      d(
        () => (
          (l = l.map((a) => (a.id === t ? { ...a, ...e } : a))),
          i(
            l.find((a) => a.id === t),
            "Product updated",
          )
        ),
      ),
    hardDeleteProduct: (t) =>
      d(
        () => (
          (l = l.filter((e) => e.id !== t)),
          (u = u.filter((e) => e.productId !== t)),
          i({ id: t }, "Product permanently deleted")
        ),
      ),
    getReports: ({ search: t = "", page: e = 1, limit: a = 5 } = {}) =>
      d(() => {
        const s = u.filter((n) => n.status === "open" && T(n, t)),
          { data: r, pagination: o } = P(s, { page: e, limit: a });
        return i(r, "Reports loaded", o);
      }),
    ignoreReport: (t) =>
      d(
        () => (
          (u = u.map((e) => (e.id === t ? { ...e, status: "ignored" } : e))),
          i(
            u.find((e) => e.id === t),
            "Report ignored",
          )
        ),
      ),
  };
export { k as a, D as u };
