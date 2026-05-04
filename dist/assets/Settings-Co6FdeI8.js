import { r as s, j as e } from "./index-CVk0w7rZ.js";
import { P as t, S as r } from "./SectionCard-DYp2Qevb.js";
import { R as a } from "./constants-Df5Dkz-m.js";
const l = () =>
    e.jsxs("div", {
      className: "space-y-5",
      children: [
        e.jsx(t, {
          title: "Settings",
          description: "Read-only moderation configuration.",
        }),
        e.jsx(r, {
          children: e.jsxs("div", {
            className: "grid gap-4 md:grid-cols-2",
            children: [
              e.jsxs("label", {
                className: "block",
                children: [
                  e.jsx("span", {
                    className:
                      "mb-2 block text-sm font-semibold text-[#475569]",
                    children: "Report threshold",
                  }),
                  e.jsx("input", {
                    readOnly: !0,
                    value: a,
                    className:
                      "w-full rounded-xl border border-neutral-300 bg-[#EEF1F5] px-4 py-2.5 text-sm font-semibold text-primary",
                  }),
                ],
              }),
              e.jsxs("label", {
                className: "block",
                children: [
                  e.jsx("span", {
                    className:
                      "mb-2 block text-sm font-semibold text-[#475569]",
                    children: "Admin role",
                  }),
                  e.jsx("input", {
                    readOnly: !0,
                    value: "Moderator access",
                    className:
                      "w-full rounded-xl border border-neutral-300 bg-[#EEF1F5] px-4 py-2.5 text-sm font-semibold text-primary",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  n = s.memo(l);
export { n as default };
