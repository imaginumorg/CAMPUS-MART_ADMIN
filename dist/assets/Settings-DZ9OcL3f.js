import { r as s, j as e } from "./index-KimkZZM5.js";
import { R as r } from "./constants-DQJo3WZW.js";
const t = () =>
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
              children: "Settings",
            }),
            e.jsx("p", {
              className: "mt-1 text-sm text-[#7A8697]",
              children: "Read-only moderation configuration.",
            }),
          ],
        }),
        e.jsx("section", {
          className:
            "rounded-xl border border-neutral-200 bg-white p-6 shadow-sm",
          children: e.jsxs("div", {
            className: "grid gap-4 md:grid-cols-2",
            children: [
              e.jsxs("label", {
                className: "block",
                children: [
                  e.jsx("span", {
                    className:
                      "mb-2 block text-sm font-semibold text-[#64707D]",
                    children: "Report threshold",
                  }),
                  e.jsx("input", {
                    readOnly: !0,
                    value: r,
                    className:
                      "w-full rounded-xl border border-neutral-300 bg-[#EEF1F5] px-4 py-3 text-sm font-semibold text-primary",
                  }),
                ],
              }),
              e.jsxs("label", {
                className: "block",
                children: [
                  e.jsx("span", {
                    className:
                      "mb-2 block text-sm font-semibold text-[#64707D]",
                    children: "Admin role",
                  }),
                  e.jsx("input", {
                    readOnly: !0,
                    value: "Moderator access",
                    className:
                      "w-full rounded-xl border border-neutral-300 bg-[#EEF1F5] px-4 py-3 text-sm font-semibold text-primary",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  d = s.memo(t);
export { d as default };
