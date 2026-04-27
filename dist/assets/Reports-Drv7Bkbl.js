import { r as t, j as e } from "./index-KimkZZM5.js";
import { S as f, D as k, M as y } from "./Modal-CBS8S1HZ.js";
import { a, u as S } from "./api-CcCF0Jhs.js";
import { P as j, R as w } from "./constants-DQJo3WZW.js";
const P = () => {
    const [n, p] = t.useState(""),
      [d, m] = t.useState(""),
      [l, u] = t.useState(1),
      [r, c] = t.useState(null);
    t.useEffect(() => {
      const o = window.setTimeout(() => {
        (m(n), u(1));
      }, 300);
      return () => window.clearTimeout(o);
    }, [n]);
    const h = t.useCallback(() => a.getReports({ search: d, page: l }), [d, l]),
      { data: x = [], pagination: g, loading: b, refetch: s } = S(h),
      i = t.useCallback(
        async (o) => {
          (await a.ignoreReport(o), s());
        },
        [s],
      ),
      C = t.useCallback(async () => {
        (await a.updateProduct(r.productId, { status: j.BLOCKED }),
          await a.ignoreReport(r.id),
          c(null),
          s());
      }, [r, s]),
      R = t.useMemo(
        () => [
          { key: "product", header: "Product" },
          { key: "reason", header: "Reason" },
          { key: "reportCount", header: "Report count" },
          {
            key: "status",
            header: "Status",
            render: (o) =>
              e.jsx(f, {
                status: o.reportCount >= w ? "auto-flagged" : "pending",
              }),
          },
          { key: "created", header: "Created" },
          {
            key: "actions",
            header: "Actions",
            render: (o) =>
              e.jsxs("div", {
                className: "flex flex-wrap gap-2",
                children: [
                  e.jsx("button", {
                    type: "button",
                    onClick: () => c(o),
                    className:
                      "rounded-xl bg-[#DC2626] px-3 py-2 text-sm font-semibold text-white",
                    children: "Block product",
                  }),
                  e.jsx("button", {
                    type: "button",
                    onClick: () => i(o.id),
                    className:
                      "rounded-xl border border-neutral-300 bg-[#FCFCFC] px-3 py-2 text-sm font-semibold text-[#64707D]",
                    children: "Ignore report",
                  }),
                ],
              }),
          },
        ],
        [i],
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
              children: "Reports",
            }),
            e.jsx("p", {
              className: "mt-1 text-sm text-[#7A8697]",
              children: "Review listing reports against moderation thresholds.",
            }),
          ],
        }),
        e.jsx(k, {
          columns: R,
          rows: x,
          loading: b,
          pagination: g,
          onPageChange: u,
          searchValue: n,
          onSearchChange: p,
          searchPlaceholder: "Search reports",
        }),
        e.jsx(y, {
          open: !!r,
          title: "Block product",
          description: r ? `Block ${r.product} and close this report?` : "",
          confirmLabel: "Block",
          tone: "danger",
          onClose: () => c(null),
          onConfirm: C,
        }),
      ],
    });
  },
  E = t.memo(P);
export { E as default };
