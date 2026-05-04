import { r as s, j as e, L as T } from "./index-CVk0w7rZ.js";
import { E as C } from "./EmptyState-BZBhjZ2x.js";
import { M as $ } from "./Modal-Z1_Smz2z.js";
import { a as d, u as N } from "./api-CZRt35Ey.js";
import { P as L } from "./constants-Df5Dkz-m.js";
const a = { USER: "user", PRODUCT: "product" },
  O = {
    pending: "bg-[#FEF3C7] text-[#B45309]",
    warned: "bg-[#EEF2FF] text-primary",
    suspended: "bg-[#FEF2F2] text-[#DC2626]",
    banned: "bg-[#FEE2E2] text-[#991B1B]",
    dismissed: "bg-[#ECFDF3] text-[#15803D]",
  },
  k = [
    {
      title: "Report Submitted",
      description: "Jane Smith filed a complaint for Inappropriate Content.",
      time: "Oct 24, 09:12 AM",
      tone: "neutral",
    },
    {
      title: "Auto-flagged",
      description:
        "System detected high-risk keywords and escalated for review.",
      time: "Oct 24, 09:12 AM",
      tone: "primary",
    },
    {
      title: "Assigned to moderator",
      description: "Case assigned to Mod_SarahV for final decision.",
      time: "Oct 24, 10:45 AM",
      tone: "success",
    },
    {
      title: "Resolution Pending",
      description: "Moderator must select an action to close the case.",
      time: "Current Status",
      tone: "muted",
    },
  ],
  W = {
    primary: "bg-primary",
    success: "bg-[#22C55E]",
    neutral: "bg-[#94A3B8]",
    muted: "border border-[#CBD5E1] bg-white",
  },
  V = () => {
    var B;
    const [o, y] = s.useState(a.USER),
      [u, S] = s.useState(""),
      [p, R] = s.useState(""),
      [w, U] = s.useState(1),
      [n, j] = s.useState(null),
      [b, x] = s.useState(null);
    s.useEffect(() => {
      const t = window.setTimeout(() => {
        (R(u), U(1));
      }, 120);
      return () => window.clearTimeout(t);
    }, [u]);
    const A = s.useCallback(() => d.getReports({ search: p, page: w }), [p, w]),
      D = s.useCallback(() => d.getUserReports(), []),
      l = N(A),
      i = N(D),
      P = s.useCallback(
        () =>
          b
            ? d.getUserReportById(b)
            : Promise.resolve({ success: !0, data: null, pagination: null }),
        [b],
      ),
      v = N(P),
      g = s.useMemo(() => i.data ?? [], [i.data]),
      F = s.useMemo(() => l.data ?? [], [l.data]),
      f = s.useMemo(
        () =>
          g.filter(
            (t) =>
              !p ||
              [
                t.reportedUser,
                t.reporterName,
                t.reporterId,
                t.email,
                t.id,
                t.reason,
                t.status,
              ]
                .join(" ")
                .toLowerCase()
                .includes(p.toLowerCase()),
          ),
        [p, g],
      ),
      m = F,
      r = v.data,
      M = o === a.USER ? g.length > 0 : F.length > 0,
      E = s.useCallback(async () => {
        (await i.refetch(), x(null));
      }, [i]),
      h = s.useCallback(
        async (t) => {
          r && (await d.updateUserReportStatus(r.id, t), await E());
        },
        [r, E],
      ),
      I = s.useCallback(async () => {
        n &&
          (await d.updateProduct(n.productId, { status: L.BLOCKED }),
          await d.ignoreReport(n.id),
          j(null),
          l.refetch());
      }, [n, l]);
    return (l.loading || i.loading || v.loading) && !M
      ? e.jsx(T, { rows: 4, columns: 4 })
      : o === a.USER && r
        ? e.jsxs("div", {
            className: "space-y-5",
            children: [
              e.jsxs("div", {
                className:
                  "flex flex-wrap items-center gap-2 text-[13px] text-[#475569]",
                children: [
                  e.jsx("button", {
                    type: "button",
                    onClick: () => x(null),
                    className: "font-medium",
                    children: "Moderation",
                  }),
                  e.jsx("span", { children: ">" }),
                  e.jsx("button", {
                    type: "button",
                    onClick: () => x(null),
                    className: "font-medium",
                    children: "Active Reports",
                  }),
                  e.jsx("span", { children: ">" }),
                  e.jsxs("span", {
                    className: "font-semibold text-primary",
                    children: ["Review Report #", r.id],
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("h1", {
                        className: "text-[22px] font-semibold text-[#0B1220]",
                        children: "Case Investigation",
                      }),
                      e.jsxs("p", {
                        className: "mt-1.5 text-[15px] text-[#475569]",
                        children: [
                          "Reviewing user ",
                          r.reportedUser,
                          " for reported violations.",
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex flex-wrap gap-3",
                    children: [
                      e.jsx("button", {
                        type: "button",
                        onClick: () => h("dismissed"),
                        className:
                          "rounded-xl border border-[#E2E8F0] bg-white px-5 py-2.5 text-[15px] font-medium text-[#334155] shadow-sm",
                        children: "Dismiss",
                      }),
                      e.jsx("button", {
                        type: "button",
                        onClick: () => h("warned"),
                        className:
                          "rounded-xl bg-primary px-5 py-2.5 text-[15px] font-medium text-white shadow-sm",
                        children: "Warn User",
                      }),
                      e.jsx("button", {
                        type: "button",
                        onClick: () => h("suspended"),
                        className:
                          "rounded-xl bg-[#EF4444] px-5 py-2.5 text-[15px] font-medium text-white shadow-sm",
                        children: "Suspend Account",
                      }),
                      e.jsx("button", {
                        type: "button",
                        onClick: () => h("banned"),
                        className:
                          "rounded-xl bg-[#DC2626] px-5 py-2.5 text-[15px] font-medium text-white shadow-sm",
                        children: "Ban User",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "grid gap-5 xl:grid-cols-[0.58fr_1.32fr]",
                children: [
                  e.jsxs("div", {
                    className: "space-y-5",
                    children: [
                      e.jsx("section", {
                        className: "rounded-[24px] bg-white p-6 shadow-sm",
                        children: e.jsxs("div", {
                          className: "text-center",
                          children: [
                            e.jsx("div", {
                              className: `mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${r.avatarColor} text-2xl font-semibold text-white ring-4 ring-[#EEF2FF]`,
                              children: r.reportedUser
                                .split(" ")
                                .map((t) => t[0])
                                .join(""),
                            }),
                            e.jsx("div", {
                              className:
                                "mt-5 inline-flex h-4.5 w-4.5 rounded-full bg-[#FF4D4F] ring-4 ring-white",
                            }),
                            e.jsx("h2", {
                              className:
                                "mt-3 text-[22px] font-semibold text-[#0B1220]",
                              children: r.reportedUser,
                            }),
                            e.jsx("div", {
                              className:
                                "mt-2 inline-flex rounded-full bg-[#EEF2FF] px-3 py-1.5 text-[13px] font-semibold text-primary",
                              children: r.reporterId,
                            }),
                            e.jsxs("div", {
                              className: "mt-6 flex justify-center gap-2",
                              children: [
                                e.jsx("span", {
                                  className:
                                    "rounded-full bg-[#EEF2FF] px-3 py-1.5 text-[13px] font-semibold text-primary",
                                  children: "Flagged",
                                }),
                                e.jsx("span", {
                                  className:
                                    "rounded-full bg-[#F1F5F9] px-3 py-1.5 text-[13px] font-semibold text-[#64748B]",
                                  children: "Since Oct 2023",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      e.jsxs("section", {
                        className: "rounded-[24px] bg-white p-6 shadow-sm",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B1220]",
                            children: "Violation History",
                          }),
                          e.jsxs("div", {
                            className: "mt-6 grid grid-cols-3 gap-3",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "rounded-xl bg-[#F8FAFC] p-4 text-center",
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "text-[34px] font-semibold leading-none text-[#0B1220]",
                                    children: "3",
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "mt-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#64748B]",
                                    children: "Warnings",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "rounded-xl border border-[#FECACA] bg-[#FFF5F5] p-4 text-center",
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "text-[34px] font-semibold leading-none text-[#DC2626]",
                                    children: "1",
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "mt-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#64748B]",
                                    children: "Suspension",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "rounded-xl bg-[#F8FAFC] p-4 text-center",
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "text-[34px] font-semibold leading-none text-[#0B1220]",
                                    children: "12",
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "mt-2 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#64748B]",
                                    children: "Resolved",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "mt-6 space-y-4 text-[14px]",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex items-center justify-between gap-3",
                                children: [
                                  e.jsx("span", {
                                    className: "text-[#64748B]",
                                    children: "Email Verification",
                                  }),
                                  e.jsx("span", {
                                    className: "font-semibold text-[#16A34A]",
                                    children: "Verified",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "flex items-center justify-between gap-3",
                                children: [
                                  e.jsx("span", {
                                    className: "text-[#64748B]",
                                    children: "Device Fingerprint",
                                  }),
                                  e.jsx("span", {
                                    className: "font-medium text-[#0B1220]",
                                    children: "Bravia-90X7-L",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className:
                                  "flex items-center justify-between gap-3",
                                children: [
                                  e.jsx("span", {
                                    className: "text-[#64748B]",
                                    children: "Primary IP",
                                  }),
                                  e.jsx("span", {
                                    className: "font-medium text-[#0B1220]",
                                    children: "192.168.1.42",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "space-y-5",
                    children: [
                      e.jsxs("section", {
                        className: "rounded-[24px] bg-white p-6 shadow-sm",
                        children: [
                          e.jsxs("div", {
                            className:
                              "flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between",
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "inline-flex rounded-full bg-[#FFF1F2] px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#DC2626]",
                                    children: "Urgent",
                                  }),
                                  e.jsxs("h2", {
                                    className:
                                      "mt-4 text-[22px] font-semibold text-[#0B1220]",
                                    children: ["Report Details - #", r.id],
                                  }),
                                  e.jsxs("p", {
                                    className:
                                      "mt-1.5 text-[15px] text-[#475569]",
                                    children: [
                                      "Reason: ",
                                      e.jsx("span", {
                                        className:
                                          "font-semibold text-[#0B1220]",
                                        children: "Inappropriate Content",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              e.jsxs("p", {
                                className: "text-[15px] text-[#0B1220]",
                                children: [
                                  "Reporter: ",
                                  e.jsx("span", {
                                    className: "font-medium text-[#0B1220]",
                                    children: "Jane Smith (USR-3301)",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className:
                              "mt-6 rounded-[20px] border border-dashed border-[#D7E2F0] bg-[#F8FAFC] p-4",
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748B]",
                                children: "Submitted Evidence (Text)",
                              }),
                              e.jsxs("div", {
                                className:
                                  "mt-4 rounded-xl bg-white p-5 text-[17px] italic leading-8 text-[#111827] shadow-sm",
                                children: ['"', r.evidenceText, '"'],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "mt-6",
                            children: [
                              e.jsx("p", {
                                className:
                                  "text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748B]",
                                children: "Submitted Evidence (Images)",
                              }),
                              e.jsxs("div", {
                                className: "mt-4 flex flex-wrap gap-4",
                                children: [
                                  e.jsx("div", {
                                    className:
                                      "h-32 w-32 rounded-xl bg-gradient-to-br from-[#111827] via-[#1F2937] to-[#334155] shadow-sm",
                                  }),
                                  e.jsx("div", {
                                    className:
                                      "h-32 w-32 rounded-xl bg-gradient-to-br from-[#450A0A] via-[#7F1D1D] to-[#EF4444] shadow-sm",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("section", {
                        className: "rounded-[24px] bg-white p-6 shadow-sm",
                        children: [
                          e.jsx("p", {
                            className:
                              "text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0B1220]",
                            children: "Report Timeline",
                          }),
                          e.jsx("div", {
                            className: "mt-6 space-y-6",
                            children: k.map((t, c) =>
                              e.jsxs(
                                "div",
                                {
                                  className:
                                    "grid gap-3 md:grid-cols-[28px_1fr_auto] md:items-start",
                                  children: [
                                    e.jsxs("div", {
                                      className: "relative flex justify-center",
                                      children: [
                                        e.jsx("span", {
                                          className: `mt-1.5 h-3 w-3 rounded-full ${W[t.tone]}`,
                                        }),
                                        c !== k.length - 1 &&
                                          e.jsx("span", {
                                            className:
                                              "absolute left-1/2 top-4 h-[58px] w-px -translate-x-1/2 bg-[#E2E8F0]",
                                          }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      children: [
                                        e.jsx("p", {
                                          className: `text-[16px] font-semibold ${t.tone === "muted" ? "text-[#CBD5E1]" : "text-[#0B1220]"}`,
                                          children: t.title,
                                        }),
                                        e.jsx("p", {
                                          className: `mt-1 text-[14px] ${t.tone === "muted" ? "text-[#CBD5E1]" : "text-[#475569]"}`,
                                          children: t.description,
                                        }),
                                      ],
                                    }),
                                    e.jsx("p", {
                                      className: `text-[13px] ${t.tone === "muted" ? "text-[#CBD5E1]" : "text-[#0B1220]"}`,
                                      children: t.time,
                                    }),
                                  ],
                                },
                                t.title,
                              ),
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        : e.jsxs("div", {
            className: "space-y-5",
            children: [
              e.jsxs("div", {
                className:
                  "flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("h1", {
                        className:
                          "text-[24px] font-semibold tracking-[-0.03em] text-[#0B1220]",
                        children: "Reports",
                      }),
                      e.jsx("p", {
                        className: "mt-1 text-[14px] text-[#475569]",
                        children:
                          "Review listing reports against moderation thresholds to maintain catalog integrity.",
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "inline-flex rounded-[16px] border border-[#DCE3EE] bg-[#F8FAFC] p-1",
                    children: [
                      e.jsx("button", {
                        type: "button",
                        onClick: () => {
                          (y(a.USER), x(null));
                        },
                        className: `rounded-[12px] px-6 py-2.5 text-[15px] font-semibold ${o === a.USER ? "bg-white text-primary shadow-sm" : "text-[#334155]"}`,
                        children: "Report User",
                      }),
                      e.jsx("button", {
                        type: "button",
                        onClick: () => {
                          (y(a.PRODUCT), x(null));
                        },
                        className: `rounded-[12px] px-6 py-2.5 text-[15px] font-semibold ${o === a.PRODUCT ? "bg-white text-primary shadow-sm" : "text-[#334155]"}`,
                        children: "Report Product",
                      }),
                    ],
                  }),
                ],
              }),
              e.jsx("div", {
                className: "max-w-3xl",
                children: e.jsxs("div", {
                  className:
                    "flex items-center gap-3 rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 shadow-sm",
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
                      value: u,
                      onChange: (t) => S(t.target.value),
                      placeholder: "Search reports, products, or users...",
                      className:
                        "w-full bg-transparent text-[14px] text-[#0B1220] outline-none placeholder:text-[#64748B]",
                    }),
                  ],
                }),
              }),
              o === a.USER
                ? e.jsxs(e.Fragment, {
                    children: [
                      i.error
                        ? e.jsx(C, { message: i.error })
                        : e.jsxs("section", {
                            className:
                              "overflow-hidden rounded-[20px] bg-white shadow-sm",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex flex-col gap-3 border-b border-[#EEF1F5] px-6 py-5 lg:flex-row lg:items-center lg:justify-between",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                      e.jsx("h2", {
                                        className:
                                          "text-[19px] font-semibold text-[#0B1220]",
                                        children: "Active User Reports",
                                      }),
                                      e.jsxs("span", {
                                        className:
                                          "rounded-full bg-[#EEF2FF] px-3 py-1 text-[11px] font-semibold text-primary",
                                        children: [
                                          f.filter(
                                            (t) => t.status === "pending",
                                          ).length,
                                          " Pending",
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsxs("button", {
                                    type: "button",
                                    className:
                                      "flex items-center gap-2 text-[15px] font-medium text-[#334155]",
                                    children: [
                                      e.jsxs("svg", {
                                        viewBox: "0 0 24 24",
                                        className: "h-4 w-4",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: [
                                          e.jsx("path", { d: "M4 6h16" }),
                                          e.jsx("path", { d: "M7 12h10" }),
                                          e.jsx("path", { d: "M10 18h4" }),
                                        ],
                                      }),
                                      "Filters",
                                    ],
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className: "overflow-x-auto",
                                children: e.jsxs("table", {
                                  className: "w-full min-w-[860px] text-left",
                                  children: [
                                    e.jsx("thead", {
                                      className:
                                        "bg-[#F8FAFC] text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748B]",
                                      children: e.jsxs("tr", {
                                        children: [
                                          e.jsx("th", {
                                            className: "px-6 py-4",
                                            children: "Reported User",
                                          }),
                                          e.jsx("th", {
                                            className: "px-4 py-4",
                                            children: "Seller ID",
                                          }),
                                          e.jsx("th", {
                                            className: "px-4 py-4",
                                            children: "Report ID",
                                          }),
                                          e.jsx("th", {
                                            className: "px-4 py-4",
                                            children: "Reported By",
                                          }),
                                          e.jsx("th", {
                                            className: "px-4 py-4",
                                            children: "Reason",
                                          }),
                                          e.jsx("th", {
                                            className: "px-4 py-4",
                                            children: "Status",
                                          }),
                                          e.jsx("th", {
                                            className: "px-6 py-4",
                                            children: "Actions",
                                          }),
                                        ],
                                      }),
                                    }),
                                    e.jsx("tbody", {
                                      children:
                                        f.length > 0
                                          ? f.map((t) =>
                                              e.jsxs(
                                                "tr",
                                                {
                                                  className:
                                                    "border-t border-[#EEF1F5]",
                                                  children: [
                                                    e.jsx("td", {
                                                      className: "px-6 py-5",
                                                      children: e.jsxs("div", {
                                                        className:
                                                          "flex items-center gap-3",
                                                        children: [
                                                          e.jsx("div", {
                                                            className: `flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${t.avatarColor} text-sm font-semibold text-white`,
                                                            children:
                                                              t.reportedUser
                                                                .split(" ")
                                                                .map(
                                                                  (c) => c[0],
                                                                )
                                                                .join(""),
                                                          }),
                                                          e.jsxs("div", {
                                                            children: [
                                                              e.jsx("p", {
                                                                className:
                                                                  "text-[14px] font-semibold text-[#0B1220]",
                                                                children:
                                                                  t.reportedUser,
                                                              }),
                                                              e.jsx("p", {
                                                                className:
                                                                  "mt-0.5 text-[12px] text-[#64748B]",
                                                                children:
                                                                  t.email,
                                                              }),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                    }),
                                                    e.jsx("td", {
                                                      className:
                                                        "px-4 py-5 text-[14px] text-[#334155]",
                                                      children: t.sellerId,
                                                    }),
                                                    e.jsxs("td", {
                                                      className:
                                                        "px-4 py-5 text-[14px] text-[#334155]",
                                                      children: ["#", t.id],
                                                    }),
                                                    e.jsxs("td", {
                                                      className: "px-4 py-5",
                                                      children: [
                                                        e.jsx("p", {
                                                          className:
                                                            "text-[14px] font-medium text-[#0B1220]",
                                                          children:
                                                            t.reporterName,
                                                        }),
                                                        e.jsxs("p", {
                                                          className:
                                                            "mt-0.5 text-[12px] text-[#64748B]",
                                                          children: [
                                                            "ID: ",
                                                            t.reporterId,
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    e.jsx("td", {
                                                      className:
                                                        "px-4 py-5 text-[14px] text-[#334155]",
                                                      children: t.shortReason,
                                                    }),
                                                    e.jsx("td", {
                                                      className: "px-4 py-5",
                                                      children: e.jsx("span", {
                                                        className: `rounded-full px-3 py-1 text-[11px] font-semibold ${O[t.status]}`,
                                                        children:
                                                          t.resolutionLabel ||
                                                          "Pending",
                                                      }),
                                                    }),
                                                    e.jsx("td", {
                                                      className: "px-6 py-5",
                                                      children: e.jsx(
                                                        "button",
                                                        {
                                                          type: "button",
                                                          onClick: () =>
                                                            x(t.id),
                                                          className:
                                                            "text-[15px] font-semibold text-primary",
                                                          children: "Review",
                                                        },
                                                      ),
                                                    }),
                                                  ],
                                                },
                                                t.id,
                                              ),
                                            )
                                          : e.jsx("tr", {
                                              className:
                                                "border-t border-[#EEF1F5]",
                                              children: e.jsx("td", {
                                                colSpan: "7",
                                                className:
                                                  "px-6 py-10 text-center text-[14px] text-[#64748B]",
                                                children:
                                                  "No user reports match the current search.",
                                              }),
                                            }),
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                      e.jsx("section", {
                        className:
                          "rounded-[20px] bg-white px-6 py-7 shadow-sm",
                        children: e.jsxs("div", {
                          className: "flex items-center justify-between gap-4",
                          children: [
                            e.jsxs("div", {
                              className: "flex items-center gap-4",
                              children: [
                                e.jsx("div", {
                                  className:
                                    "flex h-11 w-11 items-center justify-center rounded-full bg-[#ECFDF3] text-[#16A34A]",
                                  children: e.jsxs("svg", {
                                    viewBox: "0 0 24 24",
                                    className: "h-5 w-5",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    children: [
                                      e.jsx("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "9",
                                      }),
                                      e.jsx("path", {
                                        d: "m8 12 2.5 2.5L16 9",
                                      }),
                                    ],
                                  }),
                                }),
                                e.jsxs("div", {
                                  children: [
                                    e.jsx("p", {
                                      className:
                                        "text-[16px] font-semibold text-[#0B1220]",
                                      children: "24 Reports Resolved",
                                    }),
                                    e.jsx("p", {
                                      className: "text-[14px] text-[#64748B]",
                                      children: "In the last 24 hours",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsx("button", {
                              type: "button",
                              className: "text-[15px] font-medium text-primary",
                              children: "View History",
                            }),
                          ],
                        }),
                      }),
                    ],
                  })
                : e.jsxs(e.Fragment, {
                    children: [
                      l.error
                        ? e.jsx(C, { message: l.error })
                        : e.jsxs("section", {
                            className:
                              "overflow-hidden rounded-[20px] bg-white shadow-sm",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "flex flex-col gap-3 border-b border-[#EEF1F5] px-6 py-5 lg:flex-row lg:items-center lg:justify-between",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                      e.jsx("h2", {
                                        className:
                                          "text-[19px] font-semibold text-[#0B1220]",
                                        children: "Active Product Reports",
                                      }),
                                      e.jsxs("span", {
                                        className:
                                          "rounded-full bg-[#EEF2FF] px-3 py-1 text-[11px] font-semibold text-primary",
                                        children: [
                                          m.filter((t) => t.status === "open")
                                            .length,
                                          " Pending",
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsxs("button", {
                                    type: "button",
                                    className:
                                      "flex items-center gap-2 text-[15px] font-medium text-[#334155]",
                                    children: [
                                      e.jsxs("svg", {
                                        viewBox: "0 0 24 24",
                                        className: "h-4 w-4",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: [
                                          e.jsx("path", { d: "M4 6h16" }),
                                          e.jsx("path", { d: "M7 12h10" }),
                                          e.jsx("path", { d: "M10 18h4" }),
                                        ],
                                      }),
                                      "Filters",
                                    ],
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className: "overflow-x-auto",
                                children: e.jsxs("table", {
                                  className: "w-full min-w-[860px] text-left",
                                  children: [
                                    e.jsx("thead", {
                                      className:
                                        "bg-[#F8FAFC] text-[11px] font-semibold uppercase tracking-[0.16em] text-[#64748B]",
                                      children: e.jsxs("tr", {
                                        children: [
                                          e.jsx("th", {
                                            className: "px-6 py-4",
                                            children: "Report ID",
                                          }),
                                          e.jsx("th", {
                                            className: "px-4 py-4",
                                            children: "Reported By",
                                          }),
                                          e.jsx("th", {
                                            className: "px-4 py-4",
                                            children: "Seller ID",
                                          }),
                                          e.jsx("th", {
                                            className: "px-4 py-4",
                                            children: "Product",
                                          }),
                                          e.jsx("th", {
                                            className: "px-4 py-4",
                                            children: "Reason",
                                          }),
                                          e.jsx("th", {
                                            className: "px-4 py-4",
                                            children: "Status",
                                          }),
                                          e.jsx("th", {
                                            className: "px-6 py-4 text-right",
                                            children: "Actions",
                                          }),
                                        ],
                                      }),
                                    }),
                                    e.jsx("tbody", {
                                      children:
                                        m.length > 0
                                          ? m.map((t, c) =>
                                              e.jsxs(
                                                "tr",
                                                {
                                                  className:
                                                    "border-t border-[#EEF1F5]",
                                                  children: [
                                                    e.jsx("td", {
                                                      className:
                                                        "px-6 py-5 text-[12px] text-[#64748B]",
                                                      children: t.reportId,
                                                    }),
                                                    e.jsxs("td", {
                                                      className: "px-4 py-5",
                                                      children: [
                                                        e.jsx("p", {
                                                          className:
                                                            "text-[14px] font-semibold text-[#0B1220]",
                                                          children:
                                                            t.reporterName,
                                                        }),
                                                        e.jsx("p", {
                                                          className:
                                                            "mt-0.5 text-[12px] text-[#64748B]",
                                                          children:
                                                            t.reporterReference,
                                                        }),
                                                      ],
                                                    }),
                                                    e.jsx("td", {
                                                      className:
                                                        "px-4 py-5 text-[12px] text-[#64748B]",
                                                      children: t.sellerId,
                                                    }),
                                                    e.jsx("td", {
                                                      className: "px-4 py-5",
                                                      children: e.jsxs("div", {
                                                        className:
                                                          "flex items-center gap-3",
                                                        children: [
                                                          e.jsx("div", {
                                                            className: `flex h-9 w-9 items-center justify-center rounded-lg ${c === 0 ? "bg-gradient-to-br from-[#475569] to-[#111827]" : c === 1 ? "bg-gradient-to-br from-[#94A3B8] to-[#2563EB]" : "bg-gradient-to-br from-[#EF4444] to-[#FB7185]"}`,
                                                            children: e.jsx(
                                                              "div",
                                                              {
                                                                className:
                                                                  "h-4.5 w-4.5 rounded bg-white/85",
                                                              },
                                                            ),
                                                          }),
                                                          e.jsxs("div", {
                                                            children: [
                                                              e.jsx("p", {
                                                                className:
                                                                  "text-[14px] font-medium text-[#0B1220]",
                                                                children:
                                                                  t.product,
                                                              }),
                                                              e.jsxs("p", {
                                                                className:
                                                                  "text-[12px] text-[#64748B]",
                                                                children: [
                                                                  "SKU: ",
                                                                  t.sku,
                                                                ],
                                                              }),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                    }),
                                                    e.jsx("td", {
                                                      className:
                                                        "px-4 py-5 text-[14px] text-[#334155]",
                                                      children: t.reason,
                                                    }),
                                                    e.jsx("td", {
                                                      className: "px-4 py-5",
                                                      children: e.jsx("span", {
                                                        className: `rounded-full px-3 py-1 text-[11px] font-semibold ${t.reportCount >= 3 ? "bg-[#EEF2FF] text-primary" : "bg-[#F1F5F9] text-[#475569]"}`,
                                                        children:
                                                          t.reportCount >= 3
                                                            ? "Auto Flagged"
                                                            : "Pending",
                                                      }),
                                                    }),
                                                    e.jsx("td", {
                                                      className: "px-6 py-5",
                                                      children: e.jsxs("div", {
                                                        className:
                                                          "flex justify-end gap-2",
                                                        children: [
                                                          e.jsx("button", {
                                                            type: "button",
                                                            onClick: () => j(t),
                                                            className:
                                                              "rounded-lg bg-[#DC2626] px-3 py-2 text-[11px] font-medium text-white",
                                                            children: "Block",
                                                          }),
                                                          e.jsx("button", {
                                                            type: "button",
                                                            onClick:
                                                              async () => {
                                                                (await d.ignoreReport(
                                                                  t.id,
                                                                ),
                                                                  l.refetch());
                                                              },
                                                            className:
                                                              "rounded-lg bg-[#F8FAFC] px-3 py-2 text-[11px] font-medium text-[#475569]",
                                                            children: "Ignore",
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
                                              className:
                                                "border-t border-[#EEF1F5]",
                                              children: e.jsx("td", {
                                                colSpan: "7",
                                                className:
                                                  "px-6 py-10 text-center text-[14px] text-[#64748B]",
                                                children:
                                                  "No product reports match the current search.",
                                              }),
                                            }),
                                    }),
                                  ],
                                }),
                              }),
                              e.jsxs("div", {
                                className:
                                  "flex items-center justify-between px-6 py-5 text-sm text-[#64748B]",
                                children: [
                                  e.jsxs("span", {
                                    children: [
                                      "Showing 1 to ",
                                      m.length,
                                      " of ",
                                      ((B = l.pagination) == null
                                        ? void 0
                                        : B.total) || 0,
                                      " results",
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: "flex gap-2",
                                    children: [
                                      e.jsx("button", {
                                        type: "button",
                                        className:
                                          "rounded-lg border border-[#E2E8F0] px-3 py-2 text-[#CBD5E1]",
                                        children: "<",
                                      }),
                                      e.jsx("button", {
                                        type: "button",
                                        className:
                                          "rounded-lg bg-primary px-3 py-2 text-white",
                                        children: "1",
                                      }),
                                      e.jsx("button", {
                                        type: "button",
                                        className:
                                          "rounded-lg border border-[#E2E8F0] px-3 py-2 text-[#334155]",
                                        children: "2",
                                      }),
                                      e.jsx("button", {
                                        type: "button",
                                        className:
                                          "rounded-lg border border-[#E2E8F0] px-3 py-2 text-[#334155]",
                                        children: "3",
                                      }),
                                      e.jsx("button", {
                                        type: "button",
                                        className:
                                          "rounded-lg border border-[#E2E8F0] px-3 py-2 text-[#334155]",
                                        children: ">",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                      e.jsxs("section", {
                        className:
                          "max-w-sm rounded-[20px] bg-white p-6 shadow-sm",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [
                              e.jsx("div", {
                                className:
                                  "flex h-9 w-9 items-center justify-center rounded-full bg-[#EEF2FF] text-primary",
                                children: e.jsxs("svg", {
                                  viewBox: "0 0 24 24",
                                  className: "h-4.5 w-4.5",
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeWidth: "2",
                                  children: [
                                    e.jsx("circle", {
                                      cx: "12",
                                      cy: "12",
                                      r: "9",
                                    }),
                                    e.jsx("path", { d: "m8 12 2.5 2.5L16 9" }),
                                  ],
                                }),
                              }),
                              e.jsx("span", {
                                className:
                                  "text-[11px] font-semibold text-[#16A34A]",
                                children: "Weekly Peak",
                              }),
                            ],
                          }),
                          e.jsx("p", {
                            className: "mt-5 text-[13px] text-[#64748B]",
                            children: "Reports Resolved",
                          }),
                          e.jsx("p", {
                            className:
                              "mt-1 text-[26px] font-semibold tracking-[-0.04em] text-[#0B1220]",
                            children: "1,284 Total Resolved",
                          }),
                        ],
                      }),
                    ],
                  }),
              e.jsx($, {
                open: !!n,
                title: "Block product",
                description: n
                  ? `Block ${n.product} and close this report?`
                  : "",
                confirmLabel: "Block",
                tone: "danger",
                onClose: () => j(null),
                onConfirm: I,
              }),
            ],
          });
  },
  q = s.memo(V);
export { q as default };
