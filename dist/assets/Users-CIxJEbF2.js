import { r as a, j as e } from "./index-KimkZZM5.js";
import { S as E, D, M as F } from "./Modal-CBS8S1HZ.js";
import { a as d, u as N } from "./api-CcCF0Jhs.js";
import { U as o } from "./constants-DQJo3WZW.js";
const k = () => {
    const [i, x] = a.useState(""),
      [l, S] = a.useState(""),
      [m, h] = a.useState(1),
      [r, c] = a.useState(null);
    a.useEffect(() => {
      const s = window.setTimeout(() => {
        (S(i), h(1));
      }, 300);
      return () => window.clearTimeout(s);
    }, [i]);
    const b = a.useCallback(() => d.getUsers({ search: l, page: m }), [l, m]),
      { data: u = [], pagination: g, loading: f, refetch: n } = N(b),
      p = a.useCallback(
        async (s, t) => {
          if (t === o.SUSPENDED) {
            const U = u.find((j) => j.id === s);
            c(U);
            return;
          }
          (await d.updateUserStatus(s, t), n());
        },
        [u, n],
      ),
      y = a.useCallback(async () => {
        r && (await d.updateUserStatus(r.id, o.SUSPENDED), c(null), n());
      }, [r, n]),
      C = a.useMemo(
        () => [
          { key: "name", header: "Name" },
          { key: "email", header: "Email" },
          {
            key: "status",
            header: "Status",
            render: (s) => e.jsx(E, { status: s.status }),
          },
          { key: "listings", header: "Listings" },
          { key: "joined", header: "Joined" },
          {
            key: "actions",
            header: "Actions",
            render: (s) =>
              e.jsx("select", {
                value: s.status,
                onChange: (t) => p(s.id, t.target.value),
                className: `rounded-xl border px-3 py-2 text-sm font-semibold outline-none focus:border-primary ${s.status === o.SUSPENDED ? "border-[#FECACA] bg-[#FEF2F2] text-[#DC2626]" : "border-neutral-300 bg-[#FCFCFC] text-[#64707D]"}`,
                children: Object.values(o).map((t) =>
                  e.jsx("option", { value: t, children: t }, t),
                ),
              }),
          },
        ],
        [p],
      );
    return e.jsxs("div", {
      className: "space-y-4",
      children: [
        e.jsxs("div", {
          className:
            "rounded-xl border border-neutral-200 bg-white p-5 shadow-sm",
          children: [
            e.jsx("div", { className: "mb-4 h-2 w-16 rounded-xl bg-primary" }),
            e.jsx("h1", {
              className: "text-2xl font-bold text-[#64707D]",
              children: "Users",
            }),
            e.jsx("p", {
              className: "mt-1 text-sm text-[#7A8697]",
              children: "Review user access and listing activity.",
            }),
            e.jsx("p", {
              className:
                "mt-3 inline-flex rounded-xl bg-[#FEF2F2] px-3 py-1 text-xs font-semibold text-[#DC2626]",
              children: "Suspensions require confirmation",
            }),
          ],
        }),
        e.jsx(D, {
          columns: C,
          rows: u,
          loading: f,
          pagination: g,
          onPageChange: h,
          searchValue: i,
          onSearchChange: x,
          searchPlaceholder: "Search users",
        }),
        e.jsx(F, {
          open: !!r,
          title: "Suspend user",
          description: r
            ? `Suspend ${r.name} and restrict marketplace access?`
            : "",
          confirmLabel: "Suspend",
          tone: "danger",
          onClose: () => c(null),
          onConfirm: y,
        }),
      ],
    });
  },
  A = a.memo(k);
export { A as default };