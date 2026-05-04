import { r as a, j as e, L as J } from "./index-CVk0w7rZ.js";
import { E as Q } from "./EmptyState-BZBhjZ2x.js";
import { M as V } from "./Modal-Z1_Smz2z.js";
import { a as j, u as W } from "./api-CZRt35Ey.js";
import { U as l } from "./constants-Df5Dkz-m.js";
const B = [
    "from-[#6B7280] to-[#111827]",
    "from-[#1F2937] to-[#64748B]",
    "from-[#0F172A] to-[#1D4ED8]",
    "from-[#E2B38B] to-[#F8D5C2]",
  ],
  U = [
    { label: "Pro+", className: "bg-[#FEF3C7] text-[#92400E]" },
    { label: "Basic", className: "bg-[#F1F5F9] text-[#334155]" },
    { label: "Pro+", className: "bg-[#FEF3C7] text-[#92400E]" },
    { label: "Pro", className: "bg-[#DCFCE7] text-[#15803D]" },
  ],
  G = {
    [l.ACTIVE]: "bg-[#ECFDF3] text-[#15803D]",
    [l.INACTIVE]: "bg-[#F1F5F9] text-[#475569]",
    [l.SUSPENDED]: "bg-[#FEF2F2] text-[#DC2626]",
  },
  T = ["London, UK", "Madrid, ES", "Berlin, DE", "New York, US"],
  k = ["Oct 12, 2023", "Nov 04, 2023", "Jan 18, 2024", "Feb 11, 2024"],
  M = [
    "m.thorne@example.com",
    "elena.rod@example.org",
    "sk@kael-tech.com",
    "jenkins.s@cloudscale.net",
  ],
  O = () => {
    const [m, b] = a.useState(""),
      [f, g] = a.useState(""),
      [N, o] = a.useState(1),
      [r, h] = a.useState(null),
      [d, y] = a.useState(""),
      [c, w] = a.useState(""),
      [u, v] = a.useState("newest");
    a.useEffect(() => {
      const t = window.setTimeout(() => {
        (g(m), o(1));
      }, 120);
      return () => window.clearTimeout(t);
    }, [m]);
    const P = a.useCallback(() => j.getUsers({ search: f, page: N }), [f, N]),
      { data: E, pagination: n, loading: A, error: S, refetch: x } = W(P),
      i = a.useMemo(() => E ?? [], [E]),
      F = a.useMemo(
        () =>
          i.map((t, s) => ({
            ...t,
            displayTier: U[s % U.length],
            displayLocation: T[s % T.length],
            displayGradient: B[s % B.length],
            displayJoinedDate: k[s % k.length],
            displayId: `${8829 + s * 275}-${10293 + s * 298}-${44102 + s * 972}`,
            displayEmail: M[s % M.length],
          })),
        [i],
      ),
      p = a.useMemo(
        () =>
          F.filter((t) => {
            const s = t.displayTier.label.toLowerCase();
            return (!d || t.status === d) && (!c || s === c);
          }).sort((t, s) =>
            u === "oldest"
              ? new Date(t.joined).getTime() - new Date(s.joined).getTime()
              : new Date(s.joined).getTime() - new Date(t.joined).getTime(),
          ),
        [F, u, d, c],
      ),
      L = a.useCallback(
        async (t, s) => {
          if (s === l.SUSPENDED) {
            const C = i.find((D) => D.id === t);
            h(C);
            return;
          }
          (await j.updateUserStatus(t, s), x());
        },
        [i, x],
      ),
      I = a.useCallback(async () => {
        r && (await j.updateUserStatus(r.id, l.SUSPENDED), h(null), x());
      }, [r, x]),
      $ = () => {
        (b(""), g(""), y(""), w(""), v("newest"), o(1));
      };
    return A && i.length === 0
      ? e.jsx(J, { rows: 4, columns: 7 })
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
                      children: "User Directory",
                    }),
                    e.jsx("p", {
                      className: "mt-1 text-[14px] text-[#475569]",
                      children:
                        "Manage platform users, monitor account health, and adjust access permissions.",
                    }),
                  ],
                }),
                e.jsxs("button", {
                  type: "button",
                  className:
                    "inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm",
                  children: [
                    e.jsxs("svg", {
                      viewBox: "0 0 24 24",
                      className: "h-4 w-4",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      children: [
                        e.jsx("path", {
                          d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
                        }),
                        e.jsx("circle", { cx: "9", cy: "7", r: "4" }),
                        e.jsx("path", { d: "M19 8v6" }),
                        e.jsx("path", { d: "M22 11h-6" }),
                      ],
                    }),
                    "Add New User",
                  ],
                }),
              ],
            }),
            e.jsx("section", {
              className: "rounded-[18px] bg-white p-3.5 shadow-sm",
              children: e.jsxs("div", {
                className: "flex flex-col gap-4 xl:flex-row xl:items-center",
                children: [
                  e.jsxs("div", {
                    className:
                      "flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-[#E2E8F0] bg-white px-4 py-2.5",
                    children: [
                      e.jsxs("svg", {
                        viewBox: "0 0 24 24",
                        className: "h-4 w-4 text-[#94A3B8]",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: [
                          e.jsx("path", { d: "M4 6h16" }),
                          e.jsx("path", { d: "M7 12h10" }),
                          e.jsx("path", { d: "M10 18h4" }),
                        ],
                      }),
                      e.jsx("input", {
                        value: m,
                        onChange: (t) => b(t.target.value),
                        placeholder: "Filter by name, email or user ID...",
                        className:
                          "w-full bg-transparent text-sm text-[#0B1220] outline-none placeholder:text-[#64748B]",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex flex-wrap items-center gap-3",
                    children: [
                      e.jsxs("select", {
                        value: d,
                        onChange: (t) => y(t.target.value),
                        className:
                          "h-10 rounded-xl border border-[#E2E8F0] bg-white px-4 text-sm font-medium text-[#0B1220] outline-none",
                        children: [
                          e.jsx("option", {
                            value: "",
                            children: "Status: All",
                          }),
                          e.jsx("option", {
                            value: l.ACTIVE,
                            children: "Active",
                          }),
                          e.jsx("option", {
                            value: l.INACTIVE,
                            children: "Inactive",
                          }),
                          e.jsx("option", {
                            value: l.SUSPENDED,
                            children: "Suspended",
                          }),
                        ],
                      }),
                      e.jsxs("select", {
                        value: c,
                        onChange: (t) => w(t.target.value),
                        className:
                          "h-10 rounded-xl border border-[#E2E8F0] bg-white px-4 text-sm font-medium text-[#0B1220] outline-none",
                        children: [
                          e.jsx("option", { value: "", children: "Tier: All" }),
                          e.jsx("option", {
                            value: "basic",
                            children: "Basic",
                          }),
                          e.jsx("option", { value: "pro", children: "Pro" }),
                          e.jsx("option", { value: "pro+", children: "Pro+" }),
                        ],
                      }),
                      e.jsxs("button", {
                        type: "button",
                        onClick: () =>
                          v((t) => (t === "newest" ? "oldest" : "newest")),
                        className:
                          "inline-flex h-10 items-center gap-2 rounded-xl px-4 text-sm font-medium text-[#334155]",
                        children: [
                          e.jsxs("svg", {
                            viewBox: "0 0 24 24",
                            className: "h-4 w-4",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: [
                              e.jsx("rect", {
                                x: "3",
                                y: "4",
                                width: "18",
                                height: "18",
                                rx: "2",
                              }),
                              e.jsx("path", { d: "M16 2v4" }),
                              e.jsx("path", { d: "M8 2v4" }),
                            ],
                          }),
                          u === "newest" ? "Newest First" : "Oldest First",
                        ],
                      }),
                      e.jsxs("button", {
                        type: "button",
                        onClick: $,
                        className:
                          "inline-flex h-10 items-center gap-2 rounded-xl px-4 text-sm font-medium text-[#64748B]",
                        children: [
                          e.jsxs("svg", {
                            viewBox: "0 0 24 24",
                            className: "h-4 w-4",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            children: [
                              e.jsx("path", {
                                d: "M3 12a9 9 0 0 1 15.5-6.4L21 8",
                              }),
                              e.jsx("path", { d: "M21 3v5h-5" }),
                              e.jsx("path", {
                                d: "M21 12a9 9 0 0 1-15.5 6.4L3 16",
                              }),
                              e.jsx("path", { d: "M8 16H3v5" }),
                            ],
                          }),
                          "Reset",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            S
              ? e.jsx(Q, { message: S })
              : e.jsxs("section", {
                  className:
                    "overflow-hidden rounded-[20px] bg-white shadow-sm",
                  children: [
                    e.jsx("div", {
                      className: "overflow-x-auto",
                      children: e.jsxs("table", {
                        className: "w-full min-w-[820px] text-left",
                        children: [
                          e.jsx("thead", {
                            className:
                              "text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748B]",
                            children: e.jsxs("tr", {
                              children: [
                                e.jsx("th", {
                                  className: "px-5 py-4",
                                  children: "User ID",
                                }),
                                e.jsx("th", {
                                  className: "px-4 py-4",
                                  children: "User Profile",
                                }),
                                e.jsx("th", {
                                  className: "px-4 py-4",
                                  children: "Account Tier",
                                }),
                                e.jsx("th", {
                                  className: "px-4 py-4",
                                  children: "Email",
                                }),
                                e.jsx("th", {
                                  className: "px-4 py-4",
                                  children: "Status",
                                }),
                                e.jsx("th", {
                                  className: "px-4 py-4",
                                  children: "Listings",
                                }),
                                e.jsx("th", {
                                  className: "px-4 py-4",
                                  children: "Joined Date",
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
                              p.length > 0
                                ? p.map((t) =>
                                    e.jsxs(
                                      "tr",
                                      {
                                        className: "border-t border-[#EEF1F5]",
                                        children: [
                                          e.jsx("td", {
                                            className:
                                              "px-5 py-4 text-[12px] text-[#64748B]",
                                            children: t.displayId,
                                          }),
                                          e.jsx("td", {
                                            className: "px-4 py-4",
                                            children: e.jsxs("div", {
                                              className:
                                                "flex items-center gap-3",
                                              children: [
                                                e.jsx("div", {
                                                  className: `flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.displayGradient} text-xs font-semibold text-white ring-2 ring-[#E2E8F0]`,
                                                  children: t.name
                                                    .split(" ")
                                                    .map((s) => s[0])
                                                    .join(""),
                                                }),
                                                e.jsxs("div", {
                                                  children: [
                                                    e.jsx("p", {
                                                      className:
                                                        "text-[14px] font-semibold text-[#0B1220]",
                                                      children: t.name,
                                                    }),
                                                    e.jsx("p", {
                                                      className:
                                                        "text-[12px] text-[#64748B]",
                                                      children:
                                                        t.displayLocation,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          }),
                                          e.jsx("td", {
                                            className: "px-4 py-4",
                                            children: e.jsx("span", {
                                              className: `inline-flex rounded-full px-3 py-1 text-[11px] font-semibold ${t.displayTier.className}`,
                                              children: t.displayTier.label,
                                            }),
                                          }),
                                          e.jsx("td", {
                                            className:
                                              "px-4 py-4 text-[13px] text-[#334155]",
                                            children: t.displayEmail,
                                          }),
                                          e.jsx("td", {
                                            className: "px-4 py-4",
                                            children: e.jsxs("span", {
                                              className: `inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold ${G[t.status]}`,
                                              children: [
                                                e.jsx("span", {
                                                  className:
                                                    "text-[10px] leading-none",
                                                  children: "•",
                                                }),
                                                e.jsx("span", {
                                                  children:
                                                    t.status
                                                      .charAt(0)
                                                      .toUpperCase() +
                                                    t.status.slice(1),
                                                }),
                                              ],
                                            }),
                                          }),
                                          e.jsx("td", {
                                            className:
                                              "px-4 py-4 text-[14px] font-semibold text-[#0B1220]",
                                            children: t.listings,
                                          }),
                                          e.jsx("td", {
                                            className:
                                              "px-4 py-4 text-[13px] text-[#334155]",
                                            children: t.displayJoinedDate,
                                          }),
                                          e.jsx("td", {
                                            className: "px-5 py-4",
                                            children: e.jsx("div", {
                                              className: "flex justify-end",
                                              children: e.jsx("select", {
                                                value: t.status,
                                                onChange: (s) =>
                                                  L(t.id, s.target.value),
                                                className:
                                                  "rounded-xl border border-[#E2E8F0] bg-white px-3 py-2 text-[13px] font-medium text-[#0B1220] outline-none",
                                                children: Object.values(l).map(
                                                  (s) =>
                                                    e.jsx(
                                                      "option",
                                                      { value: s, children: s },
                                                      s,
                                                    ),
                                                ),
                                              }),
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
                                        "No users match the current search or filters.",
                                    }),
                                  }),
                          }),
                        ],
                      }),
                    }),
                    e.jsxs("div", {
                      className:
                        "flex flex-col gap-4 px-5 py-5 text-sm text-[#64748B] md:flex-row md:items-center md:justify-between",
                      children: [
                        e.jsxs("span", {
                          children: [
                            "Showing ",
                            p.length > 0 ? `1-${p.length}` : "0",
                            " of ",
                            (n == null ? void 0 : n.total) || 0,
                            " users",
                          ],
                        }),
                        e.jsxs("div", {
                          className: "flex gap-3",
                          children: [
                            e.jsx("button", {
                              type: "button",
                              disabled: !n || n.page <= 1,
                              onClick: () => o((t) => Math.max(1, t - 1)),
                              className:
                                "rounded-xl border border-[#E2E8F0] px-4 py-2 text-[#334155] disabled:text-[#CBD5E1]",
                              children: "Previous",
                            }),
                            e.jsx("button", {
                              type: "button",
                              disabled: !n || n.page >= n.totalPages,
                              onClick: () => o((t) => t + 1),
                              className:
                                "rounded-xl border border-primary px-4 py-2 font-medium text-primary disabled:border-[#E2E8F0] disabled:text-[#CBD5E1]",
                              children: "Next",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
            e.jsx(V, {
              open: !!r,
              title: "Suspend user",
              description: r
                ? `Suspend ${r.name} and restrict marketplace access?`
                : "",
              confirmLabel: "Suspend",
              tone: "danger",
              onClose: () => h(null),
              onConfirm: I,
            }),
          ],
        });
  },
  q = a.memo(O);
export { q as default };
