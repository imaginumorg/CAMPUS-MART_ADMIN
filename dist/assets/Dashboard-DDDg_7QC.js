import { r as a, j as e, L as n } from "./index-CVk0w7rZ.js";
import { a as d, u as c } from "./api-CZRt35Ey.js";
import "./constants-Df5Dkz-m.js";
const l = {
    primary: "bg-[#EEF2FF] text-primary",
    danger: "bg-[#FEF2F2] text-[#DC2626]",
    success: "bg-[#ECFDF3] text-[#16A34A]",
    neutral: "bg-[#F1F5F9] text-[#64748B]",
  },
  o = [
    "border-l-[4px] border-primary",
    "border-l-[4px] border-[#DC2626]",
    "border-l-[4px] border-[#22C55E]",
  ],
  h = () => {
    const i = a.useCallback(() => d.getDashboard(), []),
      { data: r, loading: x } = c(i);
    return x && !r
      ? e.jsx(n, { rows: 4, columns: 3 })
      : e.jsxs("div", {
          className: "space-y-6",
          children: [
            e.jsxs("div", {
              children: [
                e.jsx("h1", {
                  className:
                    "text-[24px] font-semibold tracking-[-0.03em] text-[#0B1220]",
                  children: "Admin Control Center",
                }),
                e.jsxs("div", {
                  className:
                    "mt-2 flex items-center gap-3 text-[14px] text-primary",
                  children: [
                    e.jsx("span", {
                      className:
                        "flex h-5 w-5 items-center justify-center rounded-full border border-primary",
                      children: e.jsx("svg", {
                        viewBox: "0 0 24 24",
                        className: "h-3 w-3",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: e.jsx("path", { d: "m5 12 5 5L20 7" }),
                      }),
                    }),
                    e.jsx("span", {
                      children: "Operational status is currently optimal.",
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("section", {
              className: "grid gap-5 xl:grid-cols-[1.55fr_0.75fr]",
              children: [
                e.jsxs("div", {
                  className: "space-y-5",
                  children: [
                    e.jsx("div", {
                      className: "grid gap-4 md:grid-cols-3",
                      children: r.stats.map((s, t) =>
                        e.jsxs(
                          "article",
                          {
                            className: `rounded-[20px] bg-white p-5 shadow-sm ${o[t]}`,
                            children: [
                              e.jsxs("div", {
                                className: "flex items-start justify-between",
                                children: [
                                  e.jsxs("div", {
                                    children: [
                                      e.jsx("p", {
                                        className:
                                          "text-[12px] font-semibold uppercase tracking-[0.16em] text-[#64748B]",
                                        children: s.label,
                                      }),
                                      e.jsx("p", {
                                        className:
                                          "mt-5 text-[38px] font-semibold leading-none tracking-[-0.05em] text-[#0B1220]",
                                        children: s.value,
                                      }),
                                    ],
                                  }),
                                  e.jsxs("div", {
                                    className: `flex h-10 w-10 items-center justify-center rounded-2xl ${t === 0 ? "text-primary" : t === 1 ? "text-[#DC2626]" : "text-[#22C55E]"}`,
                                    children: [
                                      t === 0 &&
                                        e.jsxs("svg", {
                                          viewBox: "0 0 24 24",
                                          className: "h-5 w-5",
                                          fill: "none",
                                          stroke: "currentColor",
                                          strokeWidth: "2",
                                          children: [
                                            e.jsx("rect", {
                                              x: "4",
                                              y: "4",
                                              width: "16",
                                              height: "16",
                                              rx: "2",
                                            }),
                                            e.jsx("path", { d: "M8 16V8" }),
                                            e.jsx("path", { d: "M12 16v-4" }),
                                            e.jsx("path", { d: "M16 16v-7" }),
                                          ],
                                        }),
                                      t === 1 &&
                                        e.jsxs("svg", {
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
                                            e.jsx("path", { d: "M8 8l8 8" }),
                                          ],
                                        }),
                                      t === 2 &&
                                        e.jsxs("svg", {
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
                                    ],
                                  }),
                                ],
                              }),
                              e.jsx("div", {
                                className:
                                  "mt-4 inline-flex rounded-full px-3 py-1.5 text-[12px] font-semibold leading-none shadow-sm",
                                children: e.jsx("span", {
                                  className:
                                    t === 0
                                      ? "text-[#16A34A]"
                                      : t === 1
                                        ? "text-[#DC2626]"
                                        : "text-primary",
                                  children:
                                    t === 0
                                      ? "+12%"
                                      : t === 1
                                        ? "High priority"
                                        : "98% efficiency",
                                }),
                              }),
                            ],
                          },
                          s.label,
                        ),
                      ),
                    }),
                    e.jsxs("section", {
                      className: "rounded-[24px] bg-white p-6 shadow-sm",
                      children: [
                        e.jsxs("div", {
                          className: "flex items-center justify-between gap-4",
                          children: [
                            e.jsx("h2", {
                              className:
                                "text-[19px] font-semibold text-[#0B1220]",
                              children: "Priority queue",
                            }),
                            e.jsx("button", {
                              type: "button",
                              className: "text-[14px] font-medium text-primary",
                              children: "View all tasks",
                            }),
                          ],
                        }),
                        e.jsx("div", {
                          className: "mt-6 space-y-4",
                          children: r.queue.map((s) =>
                            e.jsxs(
                              "article",
                              {
                                className: `flex flex-col gap-4 rounded-[20px] border p-4 md:flex-row md:items-center md:justify-between ${s.tone === "danger" ? "border-[#FECACA] bg-[#FFF7F7]" : "border-[#E2E8F0] bg-[#F8FAFC]"}`,
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                      e.jsx("div", {
                                        className: `flex h-12 w-12 items-center justify-center rounded-2xl ${s.tone === "danger" ? "bg-[#EF4444] text-white" : "bg-[#E0E7FF] text-primary"}`,
                                        children: e.jsx("svg", {
                                          viewBox: "0 0 24 24",
                                          className: "h-6 w-6",
                                          fill: "none",
                                          stroke: "currentColor",
                                          strokeWidth: "2",
                                          children:
                                            s.tone === "danger"
                                              ? e.jsxs(e.Fragment, {
                                                  children: [
                                                    e.jsx("path", {
                                                      d: "M12 9v4",
                                                    }),
                                                    e.jsx("path", {
                                                      d: "M12 17h.01",
                                                    }),
                                                    e.jsx("path", {
                                                      d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z",
                                                    }),
                                                  ],
                                                })
                                              : e.jsxs(e.Fragment, {
                                                  children: [
                                                    e.jsx("path", {
                                                      d: "M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4Z",
                                                    }),
                                                    e.jsx("circle", {
                                                      cx: "12",
                                                      cy: "11",
                                                      r: "2.2",
                                                    }),
                                                  ],
                                                }),
                                        }),
                                      }),
                                      e.jsxs("div", {
                                        children: [
                                          e.jsx("p", {
                                            className:
                                              "text-[15px] font-semibold text-[#0B1220]",
                                            children: s.title,
                                          }),
                                          e.jsxs("p", {
                                            className:
                                              "mt-1 text-[13px] text-[#475569]",
                                            children: [
                                              s.subtitle,
                                              " ",
                                              e.jsxs("span", {
                                                className: "text-[#0B1220]",
                                                children: ["• ", s.time],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  e.jsx("button", {
                                    type: "button",
                                    className: `rounded-xl px-5 py-2.5 text-[13px] font-semibold ${s.tone === "danger" ? "bg-[#DC2626] text-white" : "bg-[#E2E8F0] text-[#0B1220]"}`,
                                    children: s.actionLabel,
                                  }),
                                ],
                              },
                              s.id,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("section", {
                  className: "rounded-[24px] bg-white shadow-sm",
                  children: [
                    e.jsx("div", {
                      className: "border-b border-[#EEF1F5] px-6 py-6",
                      children: e.jsx("h2", {
                        className: "text-[19px] font-semibold text-[#0B1220]",
                        children: "Recent Moderation Activity",
                      }),
                    }),
                    e.jsx("div", {
                      className: "space-y-6 px-6 py-6",
                      children: r.activity.map((s) =>
                        e.jsxs(
                          "article",
                          {
                            className: "flex items-start gap-4",
                            children: [
                              e.jsx("div", {
                                className: `mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${l[s.tone]}`,
                                children: e.jsxs("svg", {
                                  viewBox: "0 0 24 24",
                                  className: "h-5 w-5",
                                  fill: "none",
                                  stroke: "currentColor",
                                  strokeWidth: "2",
                                  children: [
                                    s.tone === "primary" &&
                                      e.jsx("path", {
                                        d: "M7 4h10v16l-5-3-5 3V4Z",
                                      }),
                                    s.tone === "neutral" &&
                                      e.jsxs(e.Fragment, {
                                        children: [
                                          e.jsx("circle", {
                                            cx: "11",
                                            cy: "8",
                                            r: "3",
                                          }),
                                          e.jsx("path", {
                                            d: "M5 20c1.4-2.8 4-4 6-4",
                                          }),
                                          e.jsx("path", {
                                            d: "m17 15 2 2 4-4",
                                          }),
                                        ],
                                      }),
                                    s.tone === "danger" &&
                                      e.jsxs(e.Fragment, {
                                        children: [
                                          e.jsx("circle", {
                                            cx: "12",
                                            cy: "12",
                                            r: "9",
                                          }),
                                          e.jsx("path", { d: "M12 8v5" }),
                                          e.jsx("path", { d: "M12 16h.01" }),
                                        ],
                                      }),
                                  ],
                                }),
                              }),
                              e.jsxs("div", {
                                className: "min-w-0 flex-1",
                                children: [
                                  e.jsxs("div", {
                                    className:
                                      "flex items-start justify-between gap-3",
                                    children: [
                                      e.jsxs("div", {
                                        children: [
                                          e.jsx("h3", {
                                            className:
                                              "text-[16px] font-semibold text-[#0B1220]",
                                            children: s.title,
                                          }),
                                          e.jsx("div", {
                                            className: `mt-2 inline-flex rounded-full px-3 py-1 text-[11px] font-semibold ${l[s.tone]}`,
                                            children: s.tag,
                                          }),
                                        ],
                                      }),
                                      e.jsx("span", {
                                        className: "text-[12px] text-[#0B1220]",
                                        children: s.time,
                                      }),
                                    ],
                                  }),
                                  e.jsx("p", {
                                    className:
                                      "mt-3 text-[13px] leading-6 text-[#475569]",
                                    children: s.description,
                                  }),
                                ],
                              }),
                            ],
                          },
                          s.id,
                        ),
                      ),
                    }),
                    e.jsx("div", {
                      className:
                        "border-t border-[#EEF1F5] px-6 py-5 text-center",
                      children: e.jsx("button", {
                        type: "button",
                        className: "text-[15px] font-medium text-primary",
                        children: "View full activity log",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  b = a.memo(h);
export { b as default };
