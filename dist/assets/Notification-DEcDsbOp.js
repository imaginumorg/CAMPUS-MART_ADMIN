import { r as a, j as e, L as y } from "./index-CVk0w7rZ.js";
import { a as k, u as B } from "./api-CZRt35Ey.js";
import "./constants-Df5Dkz-m.js";
const C = {
    SENT: "text-primary",
    DRAFT: "text-[#334155]",
    SCHEDULED: "text-[#D97706]",
  },
  s = {
    active: "border-2 border-primary bg-[#EEF2FF] text-primary",
    idle: "border border-[#E2E8F0] bg-white text-[#0B1220]",
  },
  o = ({ active: n }) =>
    e.jsx("span", {
      className: `flex h-6 w-6 items-center justify-center rounded-full ${n ? "border border-primary text-primary" : "border border-[#CBD5E1] text-[#CBD5E1]"}`,
      children:
        n &&
        e.jsx("svg", {
          viewBox: "0 0 24 24",
          className: "h-3.5 w-3.5",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "3",
          children: e.jsx("path", { d: "m5 12 4 4 10-10" }),
        }),
    }),
  M = () => {
    var u, j;
    const [n, f] = a.useState(""),
      [x, b] = a.useState(""),
      [r, m] = a.useState("all_users"),
      [c, p] = a.useState("send_now"),
      [i, h] = a.useState("in_app"),
      N = a.useCallback(() => k.getNotificationCenter(), []),
      { data: t, loading: w } = B(N),
      v =
        n.trim() ||
        ((u = t == null ? void 0 : t.preview) == null ? void 0 : u.title) ||
        "System Maintenance",
      g =
        x.trim() ||
        ((j = t == null ? void 0 : t.preview) == null ? void 0 : j.body) ||
        "Scheduled maintenance window starting tomorrow at 9:00 PM.",
      d = a.useMemo(
        () => ({
          in_app: {
            title: "In-App Notification",
            description: "Delivered directly to user's dashboard",
          },
          email: {
            title: "Email Notification",
            description: "Sent to primary email address",
          },
        }),
        [],
      );
    return w && !t
      ? e.jsx(y, { rows: 4, columns: 2 })
      : e.jsxs("div", {
          className: "grid gap-6 xl:grid-cols-[1.3fr_0.78fr]",
          children: [
            e.jsxs("div", {
              className: "space-y-5",
              children: [
                e.jsxs("div", {
                  className:
                    "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",
                  children: [
                    e.jsx("h1", {
                      className:
                        "text-[28px] font-semibold tracking-[-0.03em] text-[#0B1220]",
                      children: "Send Notification",
                    }),
                    e.jsxs("div", {
                      className: "flex gap-3",
                      children: [
                        e.jsx("button", {
                          type: "button",
                          className:
                            "rounded-xl bg-[#F8FAFC] px-4 py-2.5 text-sm font-semibold text-[#334155]",
                          children: "Save Draft",
                        }),
                        e.jsx("button", {
                          type: "button",
                          className:
                            "rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm",
                          children: "Send Now",
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx("section", {
                  className: "rounded-[20px] bg-white p-5 shadow-sm",
                  children: e.jsxs("div", {
                    className: "space-y-5",
                    children: [
                      e.jsxs("label", {
                        className: "block",
                        children: [
                          e.jsx("span", {
                            className:
                              "mb-3 block text-[12px] font-semibold uppercase tracking-[0.14em] text-[#64748B]",
                            children: "Notification Title",
                          }),
                          e.jsx("input", {
                            value: n,
                            onChange: (l) => f(l.target.value),
                            placeholder: "Enter a descriptive title...",
                            className:
                              "h-12 w-full rounded-xl border border-[#E2E8F0] px-4 text-sm text-[#0B1220] outline-none placeholder:text-[#64748B]",
                          }),
                        ],
                      }),
                      e.jsxs("label", {
                        className: "block",
                        children: [
                          e.jsx("span", {
                            className:
                              "mb-3 block text-[12px] font-semibold uppercase tracking-[0.14em] text-[#64748B]",
                            children: "Message Content",
                          }),
                          e.jsx("textarea", {
                            value: x,
                            onChange: (l) => b(l.target.value),
                            placeholder: "Write your message here...",
                            className:
                              "min-h-[140px] w-full rounded-xl border border-[#E2E8F0] px-4 py-4 text-sm text-[#0B1220] outline-none placeholder:text-[#64748B]",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                e.jsxs("div", {
                  className: "grid gap-5 lg:grid-cols-2",
                  children: [
                    e.jsxs("section", {
                      className: "rounded-[20px] bg-white p-5 shadow-sm",
                      children: [
                        e.jsx("h2", {
                          className: "text-[22px] font-semibold text-[#0B1220]",
                          children: "Select Recipients",
                        }),
                        e.jsxs("div", {
                          className: "mt-5 space-y-3",
                          children: [
                            e.jsxs("button", {
                              type: "button",
                              onClick: () => m("all_users"),
                              className: `flex w-full items-center justify-between rounded-xl px-5 py-4 text-left transition ${r === "all_users" ? s.active : s.idle}`,
                              children: [
                                e.jsxs("span", {
                                  className:
                                    "flex items-center gap-3 text-[16px] font-semibold",
                                  children: [
                                    e.jsxs("svg", {
                                      viewBox: "0 0 24 24",
                                      className: "h-5 w-5",
                                      fill: "none",
                                      stroke: "currentColor",
                                      strokeWidth: "2",
                                      children: [
                                        e.jsx("path", {
                                          d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",
                                        }),
                                        e.jsx("circle", {
                                          cx: "9",
                                          cy: "7",
                                          r: "4",
                                        }),
                                        e.jsx("path", {
                                          d: "M22 21v-2a4 4 0 0 0-3-3.87",
                                        }),
                                      ],
                                    }),
                                    "All Users",
                                  ],
                                }),
                                e.jsx(o, { active: r === "all_users" }),
                              ],
                            }),
                            e.jsxs("button", {
                              type: "button",
                              onClick: () => m("select_users"),
                              className: `flex w-full items-center justify-between rounded-xl px-5 py-4 text-left transition ${r === "select_users" ? s.active : s.idle}`,
                              children: [
                                e.jsxs("span", {
                                  className:
                                    "flex items-center gap-3 text-[16px] font-semibold",
                                  children: [
                                    e.jsxs("svg", {
                                      viewBox: "0 0 24 24",
                                      className: "h-5 w-5",
                                      fill: "none",
                                      stroke: "currentColor",
                                      strokeWidth: "2",
                                      children: [
                                        e.jsx("circle", {
                                          cx: "11",
                                          cy: "11",
                                          r: "7",
                                        }),
                                        e.jsx("path", { d: "m20 20-3.5-3.5" }),
                                      ],
                                    }),
                                    "Pro Users",
                                  ],
                                }),
                                e.jsx(o, { active: r === "select_users" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsxs("section", {
                      className: "rounded-[20px] bg-white p-5 shadow-sm",
                      children: [
                        e.jsx("h2", {
                          className: "text-[22px] font-semibold text-[#0B1220]",
                          children: "Delivery Schedule",
                        }),
                        e.jsxs("div", {
                          className: "mt-5 space-y-3",
                          children: [
                            e.jsxs("button", {
                              type: "button",
                              onClick: () => p("send_now"),
                              className: `flex w-full items-center justify-between rounded-xl px-5 py-4 text-left transition ${c === "send_now" ? s.active : s.idle}`,
                              children: [
                                e.jsxs("span", {
                                  className:
                                    "flex items-center gap-3 text-[16px] font-semibold",
                                  children: [
                                    e.jsx("svg", {
                                      viewBox: "0 0 24 24",
                                      className: "h-5 w-5",
                                      fill: "none",
                                      stroke: "currentColor",
                                      strokeWidth: "2",
                                      children: e.jsx("path", {
                                        d: "m13 2-2 7h4l-4 13 2-9H9z",
                                      }),
                                    }),
                                    "Send Now",
                                  ],
                                }),
                                e.jsx(o, { active: c === "send_now" }),
                              ],
                            }),
                            e.jsxs("button", {
                              type: "button",
                              onClick: () => p("schedule"),
                              className: `flex w-full items-center justify-between rounded-xl px-5 py-4 text-left transition ${c === "schedule" ? s.active : s.idle}`,
                              children: [
                                e.jsxs("span", {
                                  className:
                                    "flex items-center gap-3 text-[16px] font-semibold",
                                  children: [
                                    e.jsxs("svg", {
                                      viewBox: "0 0 24 24",
                                      className: "h-5 w-5",
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
                                        e.jsx("path", { d: "M3 10h18" }),
                                      ],
                                    }),
                                    "Schedule",
                                  ],
                                }),
                                e.jsx(o, { active: c === "schedule" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("section", {
                  className: "rounded-[20px] bg-white p-5 shadow-sm",
                  children: [
                    e.jsx("h2", {
                      className: "text-[22px] font-semibold text-[#0B1220]",
                      children: "Notification Channel",
                    }),
                    e.jsxs("div", {
                      className: "mt-5 grid gap-4 md:grid-cols-2",
                      children: [
                        e.jsxs("button", {
                          type: "button",
                          onClick: () => h("in_app"),
                          className: `rounded-xl p-5 text-left transition ${i === "in_app" ? s.active : s.idle}`,
                          children: [
                            e.jsx("div", {
                              className: `flex h-10 w-10 items-center justify-center rounded-xl ${i === "in_app" ? "bg-white text-primary" : "bg-[#F8FAFC] text-[#334155]"}`,
                              children: e.jsxs("svg", {
                                viewBox: "0 0 24 24",
                                className: "h-5 w-5",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: [
                                  e.jsx("path", {
                                    d: "M15 17h5l-1.4-1.4a2 2 0 0 1-.6-1.4V11a6 6 0 0 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5",
                                  }),
                                  e.jsx("path", { d: "M10 21a2 2 0 0 0 4 0" }),
                                ],
                              }),
                            }),
                            e.jsx("p", {
                              className: `mt-4 text-[18px] font-semibold ${i === "in_app" ? "text-primary" : "text-[#0B1220]"}`,
                              children: d.in_app.title,
                            }),
                            e.jsx("p", {
                              className: "mt-2 text-sm text-[#475569]",
                              children: d.in_app.description,
                            }),
                          ],
                        }),
                        e.jsxs("button", {
                          type: "button",
                          onClick: () => h("email"),
                          className: `rounded-xl p-5 text-left transition ${i === "email" ? s.active : s.idle}`,
                          children: [
                            e.jsx("div", {
                              className: `flex h-10 w-10 items-center justify-center rounded-xl ${i === "email" ? "bg-white text-primary" : "bg-[#F8FAFC] text-[#334155]"}`,
                              children: e.jsxs("svg", {
                                viewBox: "0 0 24 24",
                                className: "h-5 w-5",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children: [
                                  e.jsx("path", { d: "M4 4h16v16H4z" }),
                                  e.jsx("path", { d: "m4 7 8 6 8-6" }),
                                ],
                              }),
                            }),
                            e.jsx("p", {
                              className: `mt-4 text-[18px] font-semibold ${i === "email" ? "text-primary" : "text-[#0B1220]"}`,
                              children: d.email.title,
                            }),
                            e.jsx("p", {
                              className: "mt-2 text-sm text-[#475569]",
                              children: d.email.description,
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
                  className: "rounded-[20px] bg-white p-5 shadow-sm",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        e.jsx("h2", {
                          className: "text-[17px] font-semibold text-[#0B1220]",
                          children: "Notification Preview",
                        }),
                        e.jsx("span", {
                          className:
                            "text-[11px] font-semibold uppercase tracking-[0.14em] text-[#0B1220]",
                          children: "Mobile",
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "mt-5 rounded-[18px] bg-[#F8FAFC] p-4",
                      children: e.jsx("div", {
                        className: "rounded-[18px] bg-white p-4 shadow-sm",
                        children: e.jsxs("div", {
                          className: "flex items-start gap-4",
                          children: [
                            e.jsx("div", {
                              className:
                                "flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white",
                              children: e.jsx("svg", {
                                viewBox: "0 0 24 24",
                                className: "h-5 w-5",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                children:
                                  i === "in_app"
                                    ? e.jsxs(e.Fragment, {
                                        children: [
                                          e.jsx("path", {
                                            d: "M15 17h5l-1.4-1.4a2 2 0 0 1-.6-1.4V11a6 6 0 0 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5",
                                          }),
                                          e.jsx("path", {
                                            d: "M10 21a2 2 0 0 0 4 0",
                                          }),
                                        ],
                                      })
                                    : e.jsxs(e.Fragment, {
                                        children: [
                                          e.jsx("path", { d: "M4 4h16v16H4z" }),
                                          e.jsx("path", { d: "m4 7 8 6 8-6" }),
                                        ],
                                      }),
                              }),
                            }),
                            e.jsxs("div", {
                              className: "min-w-0 flex-1",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex items-center justify-between gap-3",
                                  children: [
                                    e.jsx("span", {
                                      className:
                                        "text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0B1220]",
                                      children:
                                        i === "in_app"
                                          ? "Campus Mart"
                                          : "Email Alert",
                                    }),
                                    e.jsx("span", {
                                      className:
                                        "text-[10px] font-semibold uppercase tracking-[0.16em] text-[#CBD5E1]",
                                      children:
                                        c === "schedule" ? "Scheduled" : "Now",
                                    }),
                                  ],
                                }),
                                e.jsx("p", {
                                  className:
                                    "mt-2 text-[17px] font-semibold text-[#0B1220]",
                                  children: v,
                                }),
                                e.jsx("p", {
                                  className:
                                    "mt-2 text-sm leading-6 text-[#334155]",
                                  children: g,
                                }),
                                e.jsxs("p", {
                                  className:
                                    "mt-3 text-[12px] font-medium text-[#475569]",
                                  children: [
                                    "Audience: ",
                                    r === "all_users"
                                      ? "All Users"
                                      : "Pro Users",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
                e.jsxs("section", {
                  className: "rounded-[20px] bg-white p-5 shadow-sm",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        e.jsx("h2", {
                          className: "text-[17px] font-semibold text-[#0B1220]",
                          children: "Recent Broadcasts",
                        }),
                        e.jsx("button", {
                          type: "button",
                          className: "text-sm font-semibold text-primary",
                          children: "View All",
                        }),
                      ],
                    }),
                    e.jsx("div", {
                      className: "mt-5 space-y-4",
                      children: ((t == null ? void 0 : t.broadcasts) || []).map(
                        (l) =>
                          e.jsxs(
                            "article",
                            {
                              className:
                                "border-b border-[#EEF1F5] pb-4 last:border-0 last:pb-0",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex items-start justify-between gap-3",
                                  children: [
                                    e.jsxs("div", {
                                      children: [
                                        e.jsx("p", {
                                          className:
                                            "text-[17px] font-semibold text-[#0B1220]",
                                          children: l.title,
                                        }),
                                        e.jsx("p", {
                                          className:
                                            "mt-1 text-sm text-[#64748B]",
                                          children: l.audience,
                                        }),
                                      ],
                                    }),
                                    e.jsx("span", {
                                      className: `text-[12px] font-semibold uppercase tracking-[0.14em] ${C[l.status]}`,
                                      children: l.status,
                                    }),
                                  ],
                                }),
                                e.jsx("p", {
                                  className: "mt-2 text-sm text-[#475569]",
                                  children: l.time,
                                }),
                              ],
                            },
                            l.id,
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
  S = a.memo(M);
export { S as default };