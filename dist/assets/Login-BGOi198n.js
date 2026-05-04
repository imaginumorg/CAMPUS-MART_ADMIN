import { r as l, u, a as b, j as e } from "./index-CVk0w7rZ.js";
const g = () => {
    const [a, n] = l.useState(""),
      [t, o] = l.useState(""),
      [r, d] = l.useState(""),
      { login: c } = u(),
      m = b(),
      x = (s) => {
        s.preventDefault();
        const i = c(a, t);
        if (i.success) {
          m("/dashboard", { replace: !0 });
          return;
        }
        d(i.message);
      };
    return e.jsx("main", {
      className:
        "login-shell flex min-h-screen items-center justify-center px-4 py-8",
      children: e.jsx("section", {
        className: "w-full max-w-6xl",
        children: e.jsx("div", {
          className:
            "mx-auto max-w-5xl rounded-[2rem] border border-neutral-300 bg-white p-3 shadow-sm",
          children: e.jsxs("div", {
            className:
              "rounded-[1.6rem] border border-neutral-200 bg-[#FCFCFC] p-3",
            children: [
              e.jsx("div", {
                className: "rounded-[1.25rem] bg-[#FCFCFC] p-4 sm:p-6",
                children: e.jsxs("div", {
                  className:
                    "grid min-h-[560px] overflow-hidden rounded-xl border border-neutral-300 bg-white shadow-sm lg:grid-cols-[1.18fr_0.82fr]",
                  children: [
                    e.jsxs("div", {
                      className:
                        "relative hidden overflow-hidden border-r border-neutral-200 bg-[#F7F8FA] p-8 lg:block",
                      children: [
                        e.jsx("div", {
                          className:
                            "login-illustration-grid absolute inset-0 opacity-70",
                        }),
                        e.jsxs("div", {
                          className:
                            "relative z-10 flex h-full flex-col justify-between",
                          children: [
                            e.jsxs("div", {
                              children: [
                                e.jsx("div", {
                                  className:
                                    "inline-flex rounded-xl bg-white px-4 py-2 text-sm font-bold text-primary shadow-sm",
                                  children: "Campus Mart Admin",
                                }),
                                e.jsx("p", {
                                  className:
                                    "mt-6 max-w-sm text-3xl font-bold leading-tight text-[#64707D]",
                                  children:
                                    "Review listings, reports, and seller activity from one focused workspace.",
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className: "login-illustration-scene",
                              children: [
                                e.jsx("div", {
                                  className: "login-bubble login-bubble-one",
                                }),
                                e.jsx("div", {
                                  className: "login-bubble login-bubble-two",
                                }),
                                e.jsx("div", {
                                  className: "login-bubble login-bubble-three",
                                }),
                                e.jsx("div", { className: "login-desk" }),
                                e.jsx("div", { className: "login-monitor" }),
                                e.jsx("div", { className: "login-cup" }),
                                e.jsx("div", { className: "login-plant" }),
                                e.jsx("div", { className: "login-chair" }),
                                e.jsxs("div", {
                                  className: "login-figure",
                                  children: [
                                    e.jsx("div", {
                                      className: "login-figure-head",
                                    }),
                                    e.jsx("div", {
                                      className: "login-figure-body",
                                    }),
                                    e.jsx("div", {
                                      className: "login-figure-arm",
                                    }),
                                    e.jsx("div", {
                                      className: "login-figure-leg-left",
                                    }),
                                    e.jsx("div", {
                                      className: "login-figure-leg-right",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    e.jsx("form", {
                      onSubmit: x,
                      className: "flex items-center bg-white p-6 sm:p-10",
                      children: e.jsxs("div", {
                        className: "mx-auto w-full max-w-sm",
                        children: [
                          e.jsxs("div", {
                            className: "mb-8 text-center",
                            children: [
                              e.jsx("div", {
                                className:
                                  "mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white",
                                children: "CM",
                              }),
                              e.jsx("h1", {
                                className: "text-3xl font-bold text-[#111827]",
                                children: "Login",
                              }),
                              e.jsx("p", {
                                className: "mt-2 text-sm text-[#7A8697]",
                                children: "Moderator access for Campus Mart",
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "space-y-4",
                            children: [
                              e.jsxs("label", {
                                className: "block",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "mb-2 block text-xs font-semibold uppercase tracking-wide text-[#7A8697]",
                                    children: "Email",
                                  }),
                                  e.jsx("input", {
                                    type: "email",
                                    value: a,
                                    onChange: (s) => n(s.target.value),
                                    className:
                                      "w-full rounded-xl border border-neutral-300 bg-[#FCFCFC] px-4 py-3 text-sm text-[#64707D] outline-none transition focus:border-primary focus:bg-white",
                                    placeholder: "admin@campus.edu",
                                    required: !0,
                                  }),
                                ],
                              }),
                              e.jsxs("label", {
                                className: "block",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "mb-2 block text-xs font-semibold uppercase tracking-wide text-[#7A8697]",
                                    children: "Password",
                                  }),
                                  e.jsx("input", {
                                    type: "password",
                                    value: t,
                                    onChange: (s) => o(s.target.value),
                                    className:
                                      "w-full rounded-xl border border-neutral-300 bg-[#FCFCFC] px-4 py-3 text-sm text-[#64707D] outline-none transition focus:border-primary focus:bg-white",
                                    placeholder: "password123",
                                    required: !0,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          e.jsx("div", {
                            className: "mt-3 flex justify-end",
                            children: e.jsx("button", {
                              type: "button",
                              className: "text-xs font-medium text-primary",
                              children: "Forgot Password?",
                            }),
                          }),
                          r &&
                            e.jsx("p", {
                              className:
                                "mt-4 rounded-xl border border-neutral-300 bg-[#EEF1F5] px-4 py-3 text-sm font-semibold text-primary",
                              children: r,
                            }),
                          e.jsx("button", {
                            type: "submit",
                            className:
                              "mt-5 w-full rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#3838EC]",
                            children: "Login",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              e.jsx("div", {
                className: "flex justify-center pt-3",
                children: e.jsx("div", {
                  className: "h-1.5 w-24 rounded-full bg-[#2C3440]",
                }),
              }),
            ],
          }),
        }),
      }),
    });
  },
  p = l.memo(g);
export { p as default };
