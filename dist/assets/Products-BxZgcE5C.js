import { r as a, j as e, L as C } from "./index-CVk0w7rZ.js";
import { M as E } from "./Modal-Z1_Smz2z.js";
import { a as d, u as k } from "./api-CZRt35Ey.js";
import { P as h } from "./constants-Df5Dkz-m.js";
const P = {
    block: {
      title: "Block product",
      description:
        "This product will be blocked and hidden from the marketplace.",
      confirmLabel: "Block",
      tone: "danger",
    },
    soft_delete: {
      title: "Soft delete product",
      description:
        "This product will be removed from active tables but kept in the archive.",
      confirmLabel: "Soft delete",
      tone: "danger",
    },
    hard_delete: {
      title: "Hard delete product",
      description:
        "This will permanently remove the product from the mock data store.",
      confirmLabel: "Hard delete",
      tone: "danger",
    },
  },
  j = [
    "from-[#E2E8F0] to-[#CBD5E1]",
    "from-[#FECACA] to-[#EF4444]",
    "from-[#D6D3D1] to-[#78716C]",
    "from-[#E0F2FE] to-[#0284C7]",
    "from-[#EDE9FE] to-[#7C3AED]",
  ],
  B = () => {
    const [x, g] = a.useState(""),
      [f, N] = a.useState(""),
      [p, y] = a.useState(""),
      [b, c] = a.useState(1),
      [o, m] = a.useState(null);
    a.useEffect(() => {
      const t = window.setTimeout(() => {
        (N(x), c(1));
      }, 120);
      return () => window.clearTimeout(t);
    }, [x]);
    const w = a.useCallback(
        () => d.getProducts({ search: f, status: p, page: b }),
        [f, p, b],
      ),
      { data: u = [], pagination: r, loading: F, refetch: n } = k(w),
      i = a.useCallback(
        async (t, s) => {
          if (t === "unlist") {
            (await d.updateProduct(s.id, { status: h.UNLISTED }), n());
            return;
          }
          m({ action: t, product: s });
        },
        [n],
      ),
      v = a.useCallback(async () => {
        if (!o) return;
        const { action: t, product: s } = o;
        (t === "block" && (await d.updateProduct(s.id, { status: h.BLOCKED })),
          t === "soft_delete" &&
            (await d.updateProduct(s.id, { is_deleted: !0 })),
          t === "hard_delete" && (await d.hardDeleteProduct(s.id)),
          m(null),
          n());
      }, [o, n]),
      l = o ? P[o.action] : null;
    return F && !u.length
      ? e.jsx(C, { rows: 4, columns: 8 })
      : e.jsxs("div", {
          className: "space-y-5",
          children: [
            e.jsxs("div", {
              className:
                "flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx("h1", {
                      className:
                        "text-[24px] font-semibold tracking-[-0.03em] text-[#0B1220]",
                      children: "Products",
                    }),
                    e.jsx("p", {
                      className: "mt-1 text-[14px] text-[#475569]",
                      children:
                        "Moderate marketplace listings and removal actions.",
                    }),
                  ],
                }),
                e.jsxs("select", {
                  value: p,
                  onChange: (t) => {
                    (y(t.target.value), c(1));
                  },
                  className:
                    "h-10 rounded-xl border border-[#D9E0EA] bg-white px-4 text-sm font-medium text-[#0B1220] outline-none",
                  children: [
                    e.jsx("option", { value: "", children: "All statuses" }),
                    Object.values(h).map((t) =>
                      e.jsx("option", { value: t, children: t }, t),
                    ),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className: "max-w-md",
              children: e.jsxs("div", {
                className:
                  "flex items-center gap-3 rounded-xl border border-[#E2E8F0] bg-white px-4 py-2.5 shadow-sm",
                children: [
                  e.jsxs("svg", {
                    viewBox: "0 0 24 24",
                    className: "h-4 w-4 text-[#94A3B8]",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    children: [
                      e.jsx("circle", { cx: "11", cy: "11", r: "7" }),
                      e.jsx("path", { d: "m20 20-3.5-3.5" }),
                    ],
                  }),
                  e.jsx("input", {
                    value: x,
                    onChange: (t) => g(t.target.value),
                    placeholder: "Search products, seller or category...",
                    className:
                      "w-full bg-transparent text-sm text-[#0B1220] outline-none placeholder:text-[#64748B]",
                  }),
                ],
              }),
            }),
            e.jsxs("section", {
              className: "overflow-hidden rounded-[20px] bg-white shadow-sm",
              children: [
                e.jsx("div", {
                  className: "overflow-x-auto",
                  children: e.jsxs("table", {
                    className: "w-full min-w-[820px] text-left",
                    children: [
                      e.jsx("thead", {
                        className:
                          "bg-[#F8FAFC] text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748B]",
                        children: e.jsxs("tr", {
                          children: [
                            e.jsx("th", {
                              className: "px-5 py-4",
                              children: "Product",
                            }),
                            e.jsx("th", {
                              className: "px-4 py-4",
                              children: "Product ID",
                            }),
                            e.jsx("th", {
                              className: "px-4 py-4",
                              children: "Seller ID",
                            }),
                            e.jsx("th", {
                              className: "px-4 py-4",
                              children: "Category",
                            }),
                            e.jsx("th", {
                              className: "px-4 py-4",
                              children: "Status",
                            }),
                            e.jsx("th", {
                              className: "px-4 py-4",
                              children: "Reports",
                            }),
                            e.jsx("th", {
                              className: "px-4 py-4",
                              children: "Created",
                            }),
                            e.jsx("th", {
                              className: "px-5 py-4 text-right",
                              children: "Actions",
                            }),
                          ],
                        }),
                      }),
                      e.jsx("tbody", {
                        children:
                          u.length > 0
                            ? u.map((t, s) =>
                                e.jsxs(
                                  "tr",
                                  {
                                    className: "border-t border-[#EEF1F5]",
                                    children: [
                                      e.jsx("td", {
                                        className: "px-5 py-4",
                                        children: e.jsxs("div", {
                                          className: "flex items-center gap-3",
                                          children: [
                                            e.jsx("div", {
                                              className: `flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${j[s % j.length]}`,
                                              children: e.jsx("div", {
                                                className:
                                                  "h-5 w-5 rounded bg-white/80",
                                              }),
                                            }),
                                            e.jsx("span", {
                                              className:
                                                "text-[14px] font-medium text-[#0B1220]",
                                              children: t.product,
                                            }),
                                          ],
                                        }),
                                      }),
                                      e.jsx("td", {
                                        className:
                                          "px-4 py-4 text-[12px] text-[#64748B]",
                                        children: "849201748291045",
                                      }),
                                      e.jsxs("td", {
                                        className:
                                          "px-4 py-4 text-[12px] text-[#64748B]",
                                        children: ["SL-", 99210 + s * 2324],
                                      }),
                                      e.jsx("td", {
                                        className:
                                          "px-4 py-4 text-[14px] text-[#0B1220]",
                                        children: t.category,
                                      }),
                                      e.jsx("td", {
                                        className: "px-4 py-4",
                                        children: e.jsx("span", {
                                          className: `inline-flex rounded-full px-3 py-1 text-[11px] font-semibold ${s === 0 || t.reports >= 3 ? "bg-[#EEF2FF] text-primary" : "bg-[#F1F5F9] text-[#475569]"}`,
                                          children:
                                            s === 0
                                              ? "Live"
                                              : t.reports >= 3
                                                ? "Auto Flagged"
                                                : "Pending",
                                        }),
                                      }),
                                      e.jsx("td", {
                                        className: `px-4 py-4 text-[14px] font-medium ${t.reports >= 3 ? "text-[#DC2626]" : "text-[#0F172A]"}`,
                                        children: t.reports,
                                      }),
                                      e.jsx("td", {
                                        className:
                                          "px-4 py-4 text-[13px] text-[#334155]",
                                        children:
                                          s === 0
                                            ? "Oct 12, 2023"
                                            : s === 1
                                              ? "Nov 05, 2023"
                                              : "Nov 18, 2023",
                                      }),
                                      e.jsx("td", {
                                        className: "px-5 py-4",
                                        children: e.jsxs("div", {
                                          className:
                                            "flex justify-end gap-2 whitespace-nowrap",
                                          children: [
                                            e.jsx("button", {
                                              type: "button",
                                              onClick: () => i("unlist", t),
                                              className:
                                                "rounded-xl bg-[#F8FAFC] px-4 py-2.5 text-[12px] font-medium text-[#475569]",
                                              children: "Unlist",
                                            }),
                                            e.jsx("button", {
                                              type: "button",
                                              onClick: () => i("block", t),
                                              className:
                                                "rounded-xl bg-[#DC2626] px-4 py-2.5 text-[12px] font-medium text-white",
                                              children: "Block",
                                            }),
                                            e.jsx("button", {
                                              type: "button",
                                              onClick: () =>
                                                i("soft_delete", t),
                                              className:
                                                "rounded-xl bg-[#F8FAFC] px-4 py-2.5 text-[12px] font-medium text-[#475569]",
                                              children: "Soft delete",
                                            }),
                                            e.jsx("button", {
                                              type: "button",
                                              onClick: () =>
                                                i("hard_delete", t),
                                              className:
                                                "rounded-xl bg-[#B91C1C] px-4 py-2.5 text-[12px] font-medium text-white",
                                              children: "Hard delete",
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  },
                                  t.id,
                                ),
                              )
                            : e.jsx("tr", {
                                className: "border-t border-[#EEF1F5]",
                                children: e.jsx("td", {
                                  colSpan: "8",
                                  className:
                                    "px-5 py-10 text-center text-[14px] text-[#64748B]",
                                  children:
                                    "No products match the current search or filters.",
                                }),
                              }),
                      }),
                    ],
                  }),
                }),
                e.jsxs("div", {
                  className:
                    "flex items-center justify-end gap-4 px-5 py-5 text-sm text-[#64748B]",
                  children: [
                    e.jsxs("span", {
                      children: [
                        "Page ",
                        (r == null ? void 0 : r.page) || 1,
                        " of ",
                        (r == null ? void 0 : r.totalPages) || 1,
                      ],
                    }),
                    e.jsx("button", {
                      type: "button",
                      disabled: !r || r.page <= 1,
                      onClick: () => c((t) => Math.max(1, t - 1)),
                      className:
                        "rounded-xl border border-[#E2E8F0] px-4 py-2 disabled:text-[#CBD5E1]",
                      children: "Previous",
                    }),
                    e.jsx("button", {
                      type: "button",
                      disabled: !r || r.page >= r.totalPages,
                      onClick: () => c((t) => t + 1),
                      className:
                        "rounded-xl border border-[#D9E0EA] bg-white px-4 py-2 text-[#0F172A] disabled:text-[#CBD5E1]",
                      children: "Next",
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("section", {
              className: "max-w-sm rounded-[18px] bg-white p-5 shadow-sm",
              children: e.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  e.jsx("div", {
                    className:
                      "flex h-10 w-10 items-center justify-center rounded-full bg-[#EEF2FF] text-primary",
                    children: e.jsxs("svg", {
                      viewBox: "0 0 24 24",
                      className: "h-4.5 w-4.5",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      children: [
                        e.jsx("circle", { cx: "12", cy: "12", r: "9" }),
                        e.jsx("path", { d: "m8 12 2.5 2.5L16 9" }),
                      ],
                    }),
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-[17px] font-semibold text-[#101828]",
                        children: "1,284 Total Resolved",
                      }),
                      e.jsx("p", {
                        className: "text-[13px] text-[#64748B]",
                        children: "Reports Resolved",
                      }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsx(E, {
              open: !!o,
              title: l == null ? void 0 : l.title,
              description:
                l && o ? `${l.description} Product: ${o.product.product}.` : "",
              confirmLabel: l == null ? void 0 : l.confirmLabel,
              tone: l == null ? void 0 : l.tone,
              onClose: () => m(null),
              onConfirm: v,
            }),
          ],
        });
  },
  T = a.memo(B);
export { T as default };
