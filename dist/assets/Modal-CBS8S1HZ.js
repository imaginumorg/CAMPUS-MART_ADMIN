import { r as i, j as e, L as p } from "./index-KimkZZM5.js";
import { S as f } from "./constants-DQJo3WZW.js";
const N = i.memo(({ status: s }) => {
    const l = String(s).toLowerCase();
    return e.jsx("span", {
      className: `inline-flex rounded-xl px-3 py-1 text-xs font-semibold capitalize ${f[l] || "bg-[#F7F8FA] text-[#64707D]"}`,
      children: l.replace("-", " "),
    });
  }),
  h = ({
    columns: s,
    rows: l,
    loading: m,
    emptyMessage: c = "No records found",
    pagination: t,
    onPageChange: d,
    searchValue: b,
    onSearchChange: a,
    searchPlaceholder: n = "Search",
    filters: o,
  }) => {
    const u = a || o;
    return e.jsxs("div", {
      className: "rounded-xl border border-neutral-200 bg-white p-4 shadow-sm",
      children: [
        u &&
          e.jsxs("div", {
            className:
              "mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
            children: [
              a &&
                e.jsx("input", {
                  value: b,
                  onChange: (r) => a(r.target.value),
                  placeholder: n,
                  className:
                    "w-full rounded-xl border border-neutral-300 bg-[#FCFCFC] px-4 py-2.5 text-sm text-[#64707D] outline-none transition focus:border-primary focus:bg-white sm:max-w-xs",
                }),
              o &&
                e.jsx("div", {
                  className: "flex flex-wrap gap-2",
                  children: o,
                }),
            ],
          }),
        m
          ? e.jsx(p, { rows: 5, columns: s.length })
          : l.length === 0
            ? e.jsx("div", {
                className:
                  "rounded-xl border border-neutral-200 bg-neutral-50 p-8 text-center text-sm font-medium text-[#7A8697]",
                children: c,
              })
            : e.jsx("div", {
                className: "overflow-x-auto",
                children: e.jsxs("table", {
                  className: "w-full min-w-[760px] border-collapse text-left",
                  children: [
                    e.jsx("thead", {
                      className: "bg-[#EEF1F5]",
                      children: e.jsx("tr", {
                        className: "border-b border-neutral-200",
                        children: s.map((r) =>
                          e.jsx(
                            "th",
                            {
                              className:
                                "px-3 py-3 text-xs font-semibold uppercase text-primary first:rounded-l-xl last:rounded-r-xl",
                              children: r.header,
                            },
                            r.key,
                          ),
                        ),
                      }),
                    }),
                    e.jsx("tbody", {
                      children: l.map((r) =>
                        e.jsx(
                          "tr",
                          {
                            className:
                              "border-b border-neutral-200 transition hover:bg-[#FCFCFC] last:border-0",
                            children: s.map((x) =>
                              e.jsx(
                                "td",
                                {
                                  className: "px-3 py-4 text-sm text-[#64707D]",
                                  children: x.render ? x.render(r) : r[x.key],
                                },
                                x.key,
                              ),
                            ),
                          },
                          r.id,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
        t &&
          e.jsxs("div", {
            className:
              "mt-4 flex flex-col gap-3 border-t border-neutral-200 pt-4 text-sm text-[#7A8697] sm:flex-row sm:items-center sm:justify-between",
            children: [
              e.jsxs("span", {
                children: [
                  "Page ",
                  t.page,
                  " of ",
                  t.totalPages,
                  " - ",
                  t.total,
                  " records",
                ],
              }),
              e.jsxs("div", {
                className: "flex gap-2",
                children: [
                  e.jsx("button", {
                    type: "button",
                    disabled: t.page <= 1,
                    onClick: () => d(t.page - 1),
                    className:
                      "rounded-xl border border-neutral-300 bg-[#FCFCFC] px-3 py-2 font-semibold text-[#64707D] disabled:cursor-not-allowed disabled:text-[#C9D1DC]",
                    children: "Previous",
                  }),
                  e.jsx("button", {
                    type: "button",
                    disabled: t.page >= t.totalPages,
                    onClick: () => d(t.page + 1),
                    className:
                      "rounded-xl border border-neutral-300 bg-primary px-3 py-2 font-semibold text-white disabled:cursor-not-allowed disabled:bg-[#EEF1F5] disabled:text-[#C9D1DC]",
                    children: "Next",
                  }),
                ],
              }),
            ],
          }),
      ],
    });
  },
  g = i.memo(h),
  j = ({
    open: s,
    title: l,
    description: m,
    confirmLabel: c = "Confirm",
    tone: t = "primary",
    onClose: d,
    onConfirm: b,
  }) => {
    if (
      (i.useEffect(() => {
        if (!s) return;
        const n = (o) => {
          o.key === "Escape" && d();
        };
        return (
          window.addEventListener("keydown", n),
          () => window.removeEventListener("keydown", n)
        );
      }, [s, d]),
      !s)
    )
      return null;
    const a =
      t === "danger"
        ? "rounded-xl bg-[#DC2626] px-4 py-2 text-sm font-semibold text-white"
        : "rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white";
    return e.jsx("div", {
      className:
        "fixed inset-0 z-50 flex items-center justify-center bg-[#64707D]/40 px-4",
      children: e.jsxs("div", {
        className:
          "w-full max-w-md rounded-xl border border-neutral-200 bg-white p-6 shadow-sm",
        children: [
          e.jsx("h2", {
            className: "text-lg font-semibold text-[#64707D]",
            children: l,
          }),
          e.jsx("p", {
            className: "mt-2 text-sm leading-6 text-[#7A8697]",
            children: m,
          }),
          e.jsxs("div", {
            className: "mt-6 flex justify-end gap-3",
            children: [
              e.jsx("button", {
                type: "button",
                onClick: d,
                className:
                  "rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-[#64707D]",
                children: "Cancel",
              }),
              e.jsx("button", {
                type: "button",
                onClick: b,
                className: a,
                children: c,
              }),
            ],
          }),
        ],
      }),
    });
  },
  v = i.memo(j);
export { g as D, v as M, N as S };
