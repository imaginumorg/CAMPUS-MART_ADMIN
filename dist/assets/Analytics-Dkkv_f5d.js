import { r as t, j as e } from "./index-KimkZZM5.js";
const r = () =>
    e.jsxs("div", {
      className: "space-y-4",
      children: [
        e.jsxs("div", {
          className:
            "rounded-xl border border-neutral-200 bg-white p-5 shadow-sm",
          children: [
            e.jsx("div", { className: "mb-4 h-2 w-16 rounded-xl bg-primary" }),
            e.jsx("h1", {
              className: "text-2xl font-bold text-[#64707D]",
              children: "Analytics",
            }),
            e.jsx("p", {
              className: "mt-1 text-sm text-[#7A8697]",
              children: "Moderation metrics and marketplace trends.",
            }),
          ],
        }),
        e.jsxs("section", {
          className:
            "rounded-xl border border-neutral-200 bg-primary p-6 text-white shadow-sm",
          children: [
            e.jsx("h2", {
              className: "text-lg font-semibold text-white",
              children: "Analytics backend space",
            }),
            e.jsx("p", {
              className: "mt-2 text-sm text-white",
              children:
                "Charts will connect here later using backend endpoints",
            }),
            e.jsx("div", {
              className: "mt-6 grid gap-3 sm:grid-cols-3",
              children: ["Listings", "Reports", "Users"].map((s) =>
                e.jsxs(
                  "div",
                  {
                    className: "rounded-xl border border-white bg-primary p-4",
                    children: [
                      e.jsx("p", {
                        className: "text-xs font-semibold uppercase text-white",
                        children: s,
                      }),
                      e.jsx("p", {
                        className: "mt-2 text-2xl font-bold text-white",
                        children: "--",
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
  d = t.memo(r);
export { d as default };
