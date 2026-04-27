import { r as l, j as e, L as d } from "./index-KimkZZM5.js";
import { a as o, u as n } from "./api-CcCF0Jhs.js";
import "./constants-DQJo3WZW.js";
const c = [
    {
      title: "Review backlog",
      value: "18",
      note: "Items waiting for moderator action",
    },
    {
      title: "Risk watch",
      value: "03",
      note: "Listings close to escalation threshold",
    },
    {
      title: "Resolution rate",
      value: "92%",
      note: "Closed in the last 24 hours",
    },
  ],
  x = [
    {
      title: "Fake listing cluster",
      note: "3 products tied to one seller",
      actionLabel: "Escalate",
      isDanger: !0,
    },
    {
      title: "Dorm move-out spike",
      note: "Large burst in newly listed items",
      actionLabel: "Review",
      isDanger: !1,
    },
    {
      title: "Repeated report source",
      note: "Possible spam reporter behavior",
      actionLabel: "Inspect",
      isDanger: !1,
    },
  ],
  m = () => {
    const r = l.useCallback(() => o.getDashboard(), []),
      { data: a, loading: i } = n(r);
    return i
      ? e.jsx(d, { rows: 4, columns: 4 })
      : e.jsxs("div", {
          className: "space-y-6",
          children: [
            e.jsx("div", {
              className:
                "dashboard-grid overflow-hidden rounded-xl border border-neutral-200 shadow-sm",
              children: e.jsxs("div", {
                className: "grid gap-4 p-5 lg:grid-cols-[1.3fr_0.9fr] lg:p-6",
                children: [
                  e.jsxs("section", {
                    className: "rounded-xl bg-primary p-6 text-white",
                    children: [
                      e.jsx("p", {
                        className: "text-sm font-semibold text-white",
                        children: "Campus Mart Admin",
                      }),
                      e.jsx("h1", {
                        className: "mt-2 text-3xl font-bold text-white",
                        children: "Admin control center",
                      }),
                      e.jsx("p", {
                        className:
                          "mt-3 max-w-2xl text-sm leading-6 text-white",
                        children:
                          "Marketplace health, moderation throughput, and user trust signals in one operating surface.",
                      }),
                      e.jsx("div", {
                        className: "mt-6 grid gap-3 sm:grid-cols-3",
                        children: c.map((s) =>
                          e.jsxs(
                            "article",
                            {
                              className:
                                "rounded-xl border border-white/30 bg-white/10 p-4 backdrop-blur-sm",
                              children: [
                                e.jsx("p", {
                                  className:
                                    "text-xs font-semibold uppercase text-white",
                                  children: s.title,
                                }),
                                e.jsx("p", {
                                  className:
                                    "mt-2 text-2xl font-bold text-white",
                                  children: s.value,
                                }),
                                e.jsx("p", {
                                  className:
                                    "mt-2 text-xs leading-5 text-white",
                                  children: s.note,
                                }),
                              ],
                            },
                            s.title,
                          ),
                        ),
                      }),
                    ],
                  }),
                  e.jsxs("section", {
                    className: "grid gap-4",
                    children: [
                      e.jsxs("article", {
                        className:
                          "rounded-xl border border-neutral-200 bg-white p-5 shadow-sm",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-start justify-between",
                            children: [
                              e.jsxs("div", {
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "text-sm font-semibold text-[#64707D]",
                                    children: "Live moderation stream",
                                  }),
                                  e.jsx("p", {
                                    className: "mt-1 text-xs text-[#7A8697]",
                                    children:
                                      "Recent actions taken across the marketplace",
                                  }),
                                ],
                              }),
                              e.jsx("span", {
                                className:
                                  "rounded-xl bg-[#EEF1F5] px-3 py-1 text-xs font-semibold text-primary",
                                children: "Online",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "mt-5 space-y-3",
                            children: [
                              e.jsxs("div", {
                                className: "rounded-xl bg-[#F7F8FA] p-3",
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "text-sm font-semibold text-[#64707D]",
                                    children: "Bike listing escalated",
                                  }),
                                  e.jsx("p", {
                                    className: "mt-1 text-xs text-[#7A8697]",
                                    children:
                                      "Report threshold crossed 4 minutes ago",
                                  }),
                                ],
                              }),
                              e.jsxs("div", {
                                className: "rounded-xl bg-[#F7F8FA] p-3",
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "text-sm font-semibold text-[#64707D]",
                                    children: "Seller access updated",
                                  }),
                                  e.jsx("p", {
                                    className: "mt-1 text-xs text-[#7A8697]",
                                    children:
                                      "Inactive accounts reviewed this morning",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("article", {
                        className:
                          "rounded-xl border border-neutral-200 bg-white p-5 shadow-sm",
                        children: [
                          e.jsx("p", {
                            className: "text-sm font-semibold text-[#64707D]",
                            children: "Today at a glance",
                          }),
                          e.jsx("div", {
                            className: "mt-4 grid grid-cols-3 gap-3",
                            children: [
                              "Approvals",
                              "Warnings",
                              "Escalations",
                            ].map((s, t) =>
                              e.jsxs(
                                "div",
                                {
                                  className: `rounded-xl p-4 ${t === 2 ? "bg-[#FEF2F2] text-[#DC2626]" : "bg-[#EEF1F5] text-primary"}`,
                                  children: [
                                    e.jsx("p", {
                                      className:
                                        "text-xs font-semibold uppercase",
                                      children: s,
                                    }),
                                    e.jsx("p", {
                                      className: "mt-2 text-2xl font-bold",
                                      children:
                                        t === 0 ? "24" : t === 1 ? "11" : "3",
                                    }),
                                  ],
                                },
                                s,
                              ),
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            e.jsx("section", {
              className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
              children: a.stats.map((s, t) =>
                e.jsxs(
                  "article",
                  {
                    className:
                      "rounded-xl border border-neutral-200 bg-white p-5 shadow-sm",
                    children: [
                      e.jsx("div", {
                        className: `mb-4 h-2 w-12 rounded-xl ${t === 0 ? "bg-primary" : "bg-[#C9D1DC]"}`,
                      }),
                      e.jsx("p", {
                        className: "text-sm font-semibold text-[#7A8697]",
                        children: s.label,
                      }),
                      e.jsx("p", {
                        className: "mt-3 text-3xl font-bold text-primary",
                        children: s.value,
                      }),
                    ],
                  },
                  s.label,
                ),
              ),
            }),
            e.jsxs("div", {
              className: "grid gap-4 xl:grid-cols-[1.15fr_0.85fr]",
              children: [
                e.jsxs("section", {
                  className:
                    "rounded-xl border border-neutral-200 bg-white p-5 shadow-sm",
                  children: [
                    e.jsxs("div", {
                      className: "mb-4 flex items-center justify-between",
                      children: [
                        e.jsx("h2", {
                          className: "text-lg font-semibold text-[#64707D]",
                          children: "Recent moderation activity",
                        }),
                        e.jsx("span", {
                          className:
                            "rounded-xl bg-[#EEF1F5] px-3 py-1 text-xs font-semibold text-primary",
                          children: "Updated now",
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "grid gap-4 md:grid-cols-2",
                      children: a.activity.map((s) =>
                        e.jsxs(
                          "article",
                          {
                            className:
                              "rounded-xl border border-neutral-200 bg-[#F7F8FA] p-4",
                            children: [
                              e.jsx("div", {
                                className:
                                  "mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white",
                                children: s.title.charAt(0).toUpperCase(),
                              }),
                              e.jsx("p", {
                                className:
                                  "text-sm font-semibold text-[#64707D]",
                                children: s.title,
                              }),
                              e.jsx("p", {
                                className: "mt-2 text-sm text-[#7A8697]",
                                children: s.value,
                              }),
                            ],
                          },
                          s.title,
                        ),
                      ),
                    }),
                  ],
                }),
                e.jsxs("section", {
                  className:
                    "rounded-xl border border-neutral-200 bg-white p-5 shadow-sm",
                  children: [
                    e.jsx("h2", {
                      className: "text-lg font-semibold text-[#64707D]",
                      children: "Priority queue",
                    }),
                    e.jsx("div", {
                      className: "mt-4 space-y-3",
                      children: x.map((s) =>
                        e.jsx(
                          "article",
                          {
                            className:
                              "rounded-xl border border-neutral-200 p-4",
                            children: e.jsxs("div", {
                              className:
                                "flex items-start justify-between gap-3",
                              children: [
                                e.jsxs("div", {
                                  children: [
                                    e.jsx("p", {
                                      className:
                                        "text-sm font-semibold text-[#64707D]",
                                      children: s.title,
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "mt-1 text-xs leading-5 text-[#7A8697]",
                                      children: s.note,
                                    }),
                                  ],
                                }),
                                e.jsx("span", {
                                  className: `rounded-xl px-3 py-1 text-xs font-semibold ${s.isDanger ? "bg-[#FEF2F2] text-[#DC2626]" : "bg-[#EEF1F5] text-primary"}`,
                                  children: s.actionLabel,
                                }),
                              ],
                            }),
                          },
                          s.title,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  g = l.memo(m);
export { g as default };
