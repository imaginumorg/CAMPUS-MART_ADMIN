import { r, j as e } from "./index-CVk0w7rZ.js";
const c = ({
    open: t,
    title: d,
    description: i,
    confirmLabel: o = "Confirm",
    tone: l = "primary",
    onClose: s,
    onConfirm: a,
  }) => {
    if (
      (r.useEffect(() => {
        if (!t) return;
        const n = (m) => {
          m.key === "Escape" && s();
        };
        return (
          window.addEventListener("keydown", n),
          () => window.removeEventListener("keydown", n)
        );
      }, [t, s]),
      !t)
    )
      return null;
    const x =
      l === "danger"
        ? "rounded-xl bg-[#DC2626] px-4 py-2 text-sm font-semibold text-white"
        : "rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white";
    return e.jsx("div", {
      className:
        "fixed inset-0 z-50 flex items-center justify-center bg-[#64707D]/40 px-4",
      children: e.jsxs("div", {
        className:
          "w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm",
        children: [
          e.jsx("h2", {
            className: "text-base font-semibold text-[#0B1220]",
            children: d,
          }),
          e.jsx("p", {
            className: "mt-2 text-sm leading-6 text-[#475569]",
            children: i,
          }),
          e.jsxs("div", {
            className: "mt-5 flex justify-end gap-3",
            children: [
              e.jsx("button", {
                type: "button",
                onClick: s,
                className:
                  "rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm font-semibold text-[#475569]",
                children: "Cancel",
              }),
              e.jsx("button", {
                type: "button",
                onClick: a,
                className: x,
                children: o,
              }),
            ],
          }),
        ],
      }),
    });
  },
  b = r.memo(c);
export { b as M };
