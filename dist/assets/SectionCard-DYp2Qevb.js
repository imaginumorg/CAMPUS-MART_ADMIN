import { r as m, j as e } from "./index-CVk0w7rZ.js";
const r = ({ title: t, description: s, actions: a }) =>
    e.jsxs("div", {
      className:
        "flex flex-col gap-3 md:flex-row md:items-start md:justify-between",
      children: [
        e.jsxs("div", {
          className: "min-w-0",
          children: [
            e.jsx("h1", {
              className:
                "text-xl font-semibold tracking-[-0.02em] text-[#0B1220] md:text-2xl",
              children: t,
            }),
            s
              ? e.jsx("p", {
                  className: "mt-1 text-sm text-[#475569]",
                  children: s,
                })
              : null,
          ],
        }),
        a
          ? e.jsx("div", {
              className: "flex shrink-0 flex-wrap gap-2",
              children: a,
            })
          : null,
      ],
    }),
  d = m.memo(r),
  l = ({ children: t, className: s = "" }) =>
    e.jsx("section", {
      className:
        `rounded-2xl border border-[#E8ECF4] bg-white p-4 shadow-sm md:p-5 ${s}`.trim(),
      children: t,
    }),
  o = m.memo(l);
export { d as P, o as S };