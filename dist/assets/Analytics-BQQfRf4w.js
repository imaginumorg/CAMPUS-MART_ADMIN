import { r as t, j as e } from "./index-CVk0w7rZ.js";
import { P as a, S as i } from "./SectionCard-DYp2Qevb.js";
const r = () =>
    e.jsxs("div", {
      className: "space-y-5",
      children: [
        e.jsx(a, {
          title: "Analytics",
          description: "Moderation metrics and marketplace trends.",
        }),
        e.jsxs(i, {
          className: "bg-primary text-white",
          children: [
            e.jsx("h2", {
              className: "text-lg font-semibold text-white",
              children: "Analytics backend space",
            }),
            e.jsx("p", {
              className: "mt-2 text-sm text-white/90",
              children:
                "Charts will connect here later using backend endpoints.",
            }),
            e.jsx("div", {
              className: "mt-5 grid gap-3 sm:grid-cols-3",
              children: ["Listings", "Reports", "Users"].map((s) =>
                e.jsxs(
                  "div",
                  {
                    className:
                      "rounded-xl border border-white/20 bg-white/5 p-4",
                    children: [
                      e.jsx("p", {
                        className:
                          "text-[11px] font-semibold uppercase tracking-[0.12em] text-white/80",
                        children: s,
                      }),
                      e.jsx("p", {
                        className: "mt-2 text-xl font-semibold text-white",
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
  l = t.memo(r);
export { l as default };
