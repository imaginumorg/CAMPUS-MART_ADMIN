import { r, j as t } from "./index-KimkZZM5.js";
import { S as P, D as L, M as j } from "./Modal-CBS8S1HZ.js";
import { a as c, u as F } from "./api-CcCF0Jhs.js";
import { P as b } from "./constants-DQJo3WZW.js";
const o = {
    BLOCK: "block",
    UNLIST: "unlist",
    SOFT_DELETE: "soft_delete",
    HARD_DELETE: "hard_delete",
  },
  N = {
    [o.BLOCK]: {
      title: "Block product",
      description:
        "This product will be blocked and hidden from marketplace moderation views.",
      confirmLabel: "Block",
    },
    [o.SOFT_DELETE]: {
      title: "Soft delete product",
      description:
        "This product will be marked as deleted and removed from active tables.",
      confirmLabel: "Soft delete",
    },
    [o.HARD_DELETE]: {
      title: "Hard delete product",
      description:
        "This permanently removes the product and related reports from mock storage.",
      confirmLabel: "Hard delete",
    },
  },
  w = () => {
    const [i, f] = r.useState(""),
      [h, C] = r.useState(""),
      [u, E] = r.useState(""),
      [x, p] = r.useState(1),
      [s, m] = r.useState(null);
    r.useEffect(() => {
      const e = window.setTimeout(() => {
        (C(i), p(1));
      }, 300);
      return () => window.clearTimeout(e);
    }, [i]);
    const y = r.useCallback(
        () => c.getProducts({ search: h, status: u, page: x }),
        [h, u, x],
      ),
      { data: S = [], pagination: T, loading: g, refetch: l } = F(y),
      n = r.useCallback(
        async ({ action: e, product: d }) => {
          if (e === o.UNLIST) {
            (await c.updateProduct(d.id, { status: b.UNLISTED }), l());
            return;
          }
          m({ action: e, product: d });
        },
        [l],
      ),
      D = r.useCallback(async () => {
        const { action: e, product: d } = s;
        (e === o.BLOCK && (await c.updateProduct(d.id, { status: b.BLOCKED })),
          e === o.SOFT_DELETE &&
            (await c.updateProduct(d.id, { is_deleted: !0 })),
          e === o.HARD_DELETE && (await c.hardDeleteProduct(d.id)),
          m(null),
          l());
      }, [s, l]),
      k = r.useMemo(
        () => [
          { key: "product", header: "Product" },
          { key: "seller", header: "Seller" },
          { key: "category", header: "Category" },
          { key: "price", header: "Price" },
          {
            key: "status",
            header: "Status",
            render: (e) => t.jsx(P, { status: e.status }),
          },
          { key: "reports", header: "Reports" },
          { key: "created", header: "Created" },
          {
            key: "actions",
            header: "Actions",
            render: (e) =>
              t.jsxs("div", {
                className: "flex flex-wrap gap-2",
                children: [
                  t.jsx("button", {
                    type: "button",
                    onClick: () => n({ action: o.BLOCK, product: e }),
                    className:
                      "rounded-xl bg-[#DC2626] px-3 py-2 text-sm font-semibold text-white",
                    children: "Block",
                  }),
                  t.jsx("button", {
                    type: "button",
                    onClick: () => n({ action: o.UNLIST, product: e }),
                    className:
                      "rounded-xl border border-neutral-300 bg-[#FCFCFC] px-3 py-2 text-sm font-semibold text-[#64707D]",
                    children: "Unlist",
                  }),
                  t.jsx("button", {
                    type: "button",
                    onClick: () => n({ action: o.SOFT_DELETE, product: e }),
                    className:
                      "rounded-xl border border-[#FECACA] bg-[#FEF2F2] px-3 py-2 text-sm font-semibold text-[#DC2626]",
                    children: "Soft delete",
                  }),
                  t.jsx("button", {
                    type: "button",
                    onClick: () => n({ action: o.HARD_DELETE, product: e }),
                    className:
                      "rounded-xl border border-[#FECACA] bg-white px-3 py-2 text-sm font-semibold text-[#DC2626]",
                    children: "Hard delete",
                  }),
                ],
              }),
          },
        ],
        [n],
      ),
      a = s ? N[s.action] : null;
    return t.jsxs("div", {
      className: "space-y-4",
      children: [
        t.jsxs("div", {
          className:
            "rounded-xl border border-neutral-200 bg-white p-5 shadow-sm",
          children: [
            t.jsx("div", { className: "mb-4 h-2 w-16 rounded-xl bg-primary" }),
            t.jsx("h1", {
              className: "text-2xl font-bold text-[#64707D]",
              children: "Products",
            }),
            t.jsx("p", {
              className: "mt-1 text-sm text-[#7A8697]",
              children: "Moderate marketplace listings and removal actions.",
            }),
          ],
        }),
        t.jsx(L, {
          columns: k,
          rows: S,
          loading: g,
          pagination: T,
          onPageChange: p,
          searchValue: i,
          onSearchChange: f,
          searchPlaceholder: "Search products",
          filters: t.jsxs("select", {
            value: u,
            onChange: (e) => {
              (E(e.target.value), p(1));
            },
            className:
              "rounded-xl border border-neutral-300 bg-[#FCFCFC] px-3 py-2.5 text-sm font-semibold text-[#64707D] outline-none focus:border-primary",
            children: [
              t.jsx("option", { value: "", children: "All statuses" }),
              Object.values(b).map((e) =>
                t.jsx("option", { value: e, children: e }, e),
              ),
            ],
          }),
        }),
        t.jsx(j, {
          open: !!s,
          title: a == null ? void 0 : a.title,
          description: a
            ? `${a.description} Product: ${s.product.product}.`
            : "",
          confirmLabel: a == null ? void 0 : a.confirmLabel,
          tone: "danger",
          onClose: () => m(null),
          onConfirm: D,
        }),
      ],
    });
  },
  B = r.memo(w);
export { B as default };
