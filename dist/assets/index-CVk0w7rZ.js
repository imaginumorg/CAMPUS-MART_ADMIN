const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/Dashboard-DDDg_7QC.js",
      "assets/api-CZRt35Ey.js",
      "assets/constants-Df5Dkz-m.js",
      "assets/Users-D3VrSFqC.js",
      "assets/EmptyState-BZBhjZ2x.js",
      "assets/Modal-Z1_Smz2z.js",
      "assets/Products-BxZgcE5C.js",
      "assets/Reports-B21qDsP6.js",
      "assets/Analytics-BQQfRf4w.js",
      "assets/SectionCard-DYp2Qevb.js",
      "assets/Notification-DEcDsbOp.js",
      "assets/Settings-Co6FdeI8.js",
    ]),
) => i.map((i) => d[i]);
function Wh(t, l) {
  for (var e = 0; e < l.length; e++) {
    const a = l[e];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const u in a)
        if (u !== "default" && !(u in t)) {
          const n = Object.getOwnPropertyDescriptor(a, u);
          n &&
            Object.defineProperty(
              t,
              u,
              n.get ? n : { enumerable: !0, get: () => a[u] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const l = document.createElement("link").relList;
  if (l && l.supports && l.supports("modulepreload")) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) a(u);
  new MutationObserver((u) => {
    for (const n of u)
      if (n.type === "childList")
        for (const i of n.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && a(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function e(u) {
    const n = {};
    return (
      u.integrity && (n.integrity = u.integrity),
      u.referrerPolicy && (n.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === "use-credentials"
        ? (n.credentials = "include")
        : u.crossOrigin === "anonymous"
          ? (n.credentials = "omit")
          : (n.credentials = "same-origin"),
      n
    );
  }
  function a(u) {
    if (u.ep) return;
    u.ep = !0;
    const n = e(u);
    fetch(u.href, n);
  }
})();
function $h(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
var jo = { exports: {} },
  jn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fh = Symbol.for("react.transitional.element"),
  kh = Symbol.for("react.fragment");
function Ro(t, l, e) {
  var a = null;
  if (
    (e !== void 0 && (a = "" + e),
    l.key !== void 0 && (a = "" + l.key),
    "key" in l)
  ) {
    e = {};
    for (var u in l) u !== "key" && (e[u] = l[u]);
  } else e = l;
  return (
    (l = e.ref),
    { $$typeof: Fh, type: t, key: a, ref: l !== void 0 ? l : null, props: e }
  );
}
jn.Fragment = kh;
jn.jsx = Ro;
jn.jsxs = Ro;
jo.exports = jn;
var S = jo.exports,
  Ho = { exports: {} },
  D = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Zc = Symbol.for("react.transitional.element"),
  Ih = Symbol.for("react.portal"),
  Ph = Symbol.for("react.fragment"),
  t0 = Symbol.for("react.strict_mode"),
  l0 = Symbol.for("react.profiler"),
  e0 = Symbol.for("react.consumer"),
  a0 = Symbol.for("react.context"),
  u0 = Symbol.for("react.forward_ref"),
  n0 = Symbol.for("react.suspense"),
  i0 = Symbol.for("react.memo"),
  Bo = Symbol.for("react.lazy"),
  c0 = Symbol.for("react.activity"),
  $f = Symbol.iterator;
function f0(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = ($f && t[$f]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var Yo = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  qo = Object.assign,
  Go = {};
function sa(t, l, e) {
  ((this.props = t),
    (this.context = l),
    (this.refs = Go),
    (this.updater = e || Yo));
}
sa.prototype.isReactComponent = {};
sa.prototype.setState = function (t, l) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error(
      "takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, t, l, "setState");
};
sa.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function Lo() {}
Lo.prototype = sa.prototype;
function Vc(t, l, e) {
  ((this.props = t),
    (this.context = l),
    (this.refs = Go),
    (this.updater = e || Yo));
}
var Kc = (Vc.prototype = new Lo());
Kc.constructor = Vc;
qo(Kc, sa.prototype);
Kc.isPureReactComponent = !0;
var Ff = Array.isArray;
function Zi() {}
var F = { H: null, A: null, T: null, S: null },
  Xo = Object.prototype.hasOwnProperty;
function Jc(t, l, e) {
  var a = e.ref;
  return {
    $$typeof: Zc,
    type: t,
    key: l,
    ref: a !== void 0 ? a : null,
    props: e,
  };
}
function s0(t, l) {
  return Jc(t.type, l, t.props);
}
function wc(t) {
  return typeof t == "object" && t !== null && t.$$typeof === Zc;
}
function o0(t) {
  var l = { "=": "=0", ":": "=2" };
  return (
    "$" +
    t.replace(/[=:]/g, function (e) {
      return l[e];
    })
  );
}
var kf = /\/+/g;
function ui(t, l) {
  return typeof t == "object" && t !== null && t.key != null
    ? o0("" + t.key)
    : l.toString(36);
}
function r0(t) {
  switch (t.status) {
    case "fulfilled":
      return t.value;
    case "rejected":
      throw t.reason;
    default:
      switch (
        (typeof t.status == "string"
          ? t.then(Zi, Zi)
          : ((t.status = "pending"),
            t.then(
              function (l) {
                t.status === "pending" &&
                  ((t.status = "fulfilled"), (t.value = l));
              },
              function (l) {
                t.status === "pending" &&
                  ((t.status = "rejected"), (t.reason = l));
              },
            )),
        t.status)
      ) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw t.reason;
      }
  }
  throw t;
}
function Ue(t, l, e, a, u) {
  var n = typeof t;
  (n === "undefined" || n === "boolean") && (t = null);
  var i = !1;
  if (t === null) i = !0;
  else
    switch (n) {
      case "bigint":
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case Zc:
          case Ih:
            i = !0;
            break;
          case Bo:
            return ((i = t._init), Ue(i(t._payload), l, e, a, u));
        }
    }
  if (i)
    return (
      (u = u(t)),
      (i = a === "" ? "." + ui(t, 0) : a),
      Ff(u)
        ? ((e = ""),
          i != null && (e = i.replace(kf, "$&/") + "/"),
          Ue(u, l, e, "", function (s) {
            return s;
          }))
        : u != null &&
          (wc(u) &&
            (u = s0(
              u,
              e +
                (u.key == null || (t && t.key === u.key)
                  ? ""
                  : ("" + u.key).replace(kf, "$&/") + "/") +
                i,
            )),
          l.push(u)),
      1
    );
  i = 0;
  var c = a === "" ? "." : a + ":";
  if (Ff(t))
    for (var f = 0; f < t.length; f++)
      ((a = t[f]), (n = c + ui(a, f)), (i += Ue(a, l, e, n, u)));
  else if (((f = f0(t)), typeof f == "function"))
    for (t = f.call(t), f = 0; !(a = t.next()).done; )
      ((a = a.value), (n = c + ui(a, f++)), (i += Ue(a, l, e, n, u)));
  else if (n === "object") {
    if (typeof t.then == "function") return Ue(r0(t), l, e, a, u);
    throw (
      (l = String(t)),
      Error(
        "Objects are not valid as a React child (found: " +
          (l === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : l) +
          "). If you meant to render a collection of children, use an array instead.",
      )
    );
  }
  return i;
}
function Tu(t, l, e) {
  if (t == null) return t;
  var a = [],
    u = 0;
  return (
    Ue(t, a, "", "", function (n) {
      return l.call(e, n, u++);
    }),
    a
  );
}
function d0(t) {
  if (t._status === -1) {
    var l = t._result;
    ((l = l()),
      l.then(
        function (e) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 1), (t._result = e));
        },
        function (e) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 2), (t._result = e));
        },
      ),
      t._status === -1 && ((t._status = 0), (t._result = l)));
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var If =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var l = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(l)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        },
  h0 = {
    map: Tu,
    forEach: function (t, l, e) {
      Tu(
        t,
        function () {
          l.apply(this, arguments);
        },
        e,
      );
    },
    count: function (t) {
      var l = 0;
      return (
        Tu(t, function () {
          l++;
        }),
        l
      );
    },
    toArray: function (t) {
      return (
        Tu(t, function (l) {
          return l;
        }) || []
      );
    },
    only: function (t) {
      if (!wc(t))
        throw Error(
          "React.Children.only expected to receive a single React element child.",
        );
      return t;
    },
  };
D.Activity = c0;
D.Children = h0;
D.Component = sa;
D.Fragment = Ph;
D.Profiler = l0;
D.PureComponent = Vc;
D.StrictMode = t0;
D.Suspense = n0;
D.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F;
D.__COMPILER_RUNTIME = {
  __proto__: null,
  c: function (t) {
    return F.H.useMemoCache(t);
  },
};
D.cache = function (t) {
  return function () {
    return t.apply(null, arguments);
  };
};
D.cacheSignal = function () {
  return null;
};
D.cloneElement = function (t, l, e) {
  if (t == null)
    throw Error(
      "The argument must be a React element, but you passed " + t + ".",
    );
  var a = qo({}, t.props),
    u = t.key;
  if (l != null)
    for (n in (l.key !== void 0 && (u = "" + l.key), l))
      !Xo.call(l, n) ||
        n === "key" ||
        n === "__self" ||
        n === "__source" ||
        (n === "ref" && l.ref === void 0) ||
        (a[n] = l[n]);
  var n = arguments.length - 2;
  if (n === 1) a.children = e;
  else if (1 < n) {
    for (var i = Array(n), c = 0; c < n; c++) i[c] = arguments[c + 2];
    a.children = i;
  }
  return Jc(t.type, u, a);
};
D.createContext = function (t) {
  return (
    (t = {
      $$typeof: a0,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
    }),
    (t.Provider = t),
    (t.Consumer = { $$typeof: e0, _context: t }),
    t
  );
};
D.createElement = function (t, l, e) {
  var a,
    u = {},
    n = null;
  if (l != null)
    for (a in (l.key !== void 0 && (n = "" + l.key), l))
      Xo.call(l, a) &&
        a !== "key" &&
        a !== "__self" &&
        a !== "__source" &&
        (u[a] = l[a]);
  var i = arguments.length - 2;
  if (i === 1) u.children = e;
  else if (1 < i) {
    for (var c = Array(i), f = 0; f < i; f++) c[f] = arguments[f + 2];
    u.children = c;
  }
  if (t && t.defaultProps)
    for (a in ((i = t.defaultProps), i)) u[a] === void 0 && (u[a] = i[a]);
  return Jc(t, n, u);
};
D.createRef = function () {
  return { current: null };
};
D.forwardRef = function (t) {
  return { $$typeof: u0, render: t };
};
D.isValidElement = wc;
D.lazy = function (t) {
  return { $$typeof: Bo, _payload: { _status: -1, _result: t }, _init: d0 };
};
D.memo = function (t, l) {
  return { $$typeof: i0, type: t, compare: l === void 0 ? null : l };
};
D.startTransition = function (t) {
  var l = F.T,
    e = {};
  F.T = e;
  try {
    var a = t(),
      u = F.S;
    (u !== null && u(e, a),
      typeof a == "object" &&
        a !== null &&
        typeof a.then == "function" &&
        a.then(Zi, If));
  } catch (n) {
    If(n);
  } finally {
    (l !== null && e.types !== null && (l.types = e.types), (F.T = l));
  }
};
D.unstable_useCacheRefresh = function () {
  return F.H.useCacheRefresh();
};
D.use = function (t) {
  return F.H.use(t);
};
D.useActionState = function (t, l, e) {
  return F.H.useActionState(t, l, e);
};
D.useCallback = function (t, l) {
  return F.H.useCallback(t, l);
};
D.useContext = function (t) {
  return F.H.useContext(t);
};
D.useDebugValue = function () {};
D.useDeferredValue = function (t, l) {
  return F.H.useDeferredValue(t, l);
};
D.useEffect = function (t, l) {
  return F.H.useEffect(t, l);
};
D.useEffectEvent = function (t) {
  return F.H.useEffectEvent(t);
};
D.useId = function () {
  return F.H.useId();
};
D.useImperativeHandle = function (t, l, e) {
  return F.H.useImperativeHandle(t, l, e);
};
D.useInsertionEffect = function (t, l) {
  return F.H.useInsertionEffect(t, l);
};
D.useLayoutEffect = function (t, l) {
  return F.H.useLayoutEffect(t, l);
};
D.useMemo = function (t, l) {
  return F.H.useMemo(t, l);
};
D.useOptimistic = function (t, l) {
  return F.H.useOptimistic(t, l);
};
D.useReducer = function (t, l, e) {
  return F.H.useReducer(t, l, e);
};
D.useRef = function (t) {
  return F.H.useRef(t);
};
D.useState = function (t) {
  return F.H.useState(t);
};
D.useSyncExternalStore = function (t, l, e) {
  return F.H.useSyncExternalStore(t, l, e);
};
D.useTransition = function () {
  return F.H.useTransition();
};
D.version = "19.2.5";
Ho.exports = D;
var b = Ho.exports;
const m0 = $h(b),
  v0 = Wh({ __proto__: null, default: m0 }, [b]);
var Qo = { exports: {} },
  Rn = {},
  Zo = { exports: {} },
  Vo = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function l(O, H) {
    var R = O.length;
    O.push(H);
    t: for (; 0 < R; ) {
      var et = (R - 1) >>> 1,
        rt = O[et];
      if (0 < u(rt, H)) ((O[et] = H), (O[R] = rt), (R = et));
      else break t;
    }
  }
  function e(O) {
    return O.length === 0 ? null : O[0];
  }
  function a(O) {
    if (O.length === 0) return null;
    var H = O[0],
      R = O.pop();
    if (R !== H) {
      O[0] = R;
      t: for (var et = 0, rt = O.length, bu = rt >>> 1; et < bu; ) {
        var Eu = 2 * (et + 1) - 1,
          ai = O[Eu],
          ne = Eu + 1,
          zu = O[ne];
        if (0 > u(ai, R))
          ne < rt && 0 > u(zu, ai)
            ? ((O[et] = zu), (O[ne] = R), (et = ne))
            : ((O[et] = ai), (O[Eu] = R), (et = Eu));
        else if (ne < rt && 0 > u(zu, R))
          ((O[et] = zu), (O[ne] = R), (et = ne));
        else break t;
      }
    }
    return H;
  }
  function u(O, H) {
    var R = O.sortIndex - H.sortIndex;
    return R !== 0 ? R : O.id - H.id;
  }
  if (
    ((t.unstable_now = void 0),
    typeof performance == "object" && typeof performance.now == "function")
  ) {
    var n = performance;
    t.unstable_now = function () {
      return n.now();
    };
  } else {
    var i = Date,
      c = i.now();
    t.unstable_now = function () {
      return i.now() - c;
    };
  }
  var f = [],
    s = [],
    v = 1,
    h = null,
    r = 3,
    y = !1,
    E = !1,
    z = !1,
    T = !1,
    d = typeof setTimeout == "function" ? setTimeout : null,
    o = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  function g(O) {
    for (var H = e(s); H !== null; ) {
      if (H.callback === null) a(s);
      else if (H.startTime <= O)
        (a(s), (H.sortIndex = H.expirationTime), l(f, H));
      else break;
      H = e(s);
    }
  }
  function _(O) {
    if (((z = !1), g(O), !E))
      if (e(f) !== null) ((E = !0), U || ((U = !0), Ml()));
      else {
        var H = e(s);
        H !== null && ei(_, H.startTime - O);
      }
  }
  var U = !1,
    A = -1,
    x = 5,
    C = -1;
  function j() {
    return T ? !0 : !(t.unstable_now() - C < x);
  }
  function Tt() {
    if (((T = !1), U)) {
      var O = t.unstable_now();
      C = O;
      var H = !0;
      try {
        t: {
          ((E = !1), z && ((z = !1), o(A), (A = -1)), (y = !0));
          var R = r;
          try {
            l: {
              for (
                g(O), h = e(f);
                h !== null && !(h.expirationTime > O && j());
              ) {
                var et = h.callback;
                if (typeof et == "function") {
                  ((h.callback = null), (r = h.priorityLevel));
                  var rt = et(h.expirationTime <= O);
                  if (((O = t.unstable_now()), typeof rt == "function")) {
                    ((h.callback = rt), g(O), (H = !0));
                    break l;
                  }
                  (h === e(f) && a(f), g(O));
                } else a(f);
                h = e(f);
              }
              if (h !== null) H = !0;
              else {
                var bu = e(s);
                (bu !== null && ei(_, bu.startTime - O), (H = !1));
              }
            }
            break t;
          } finally {
            ((h = null), (r = R), (y = !1));
          }
          H = void 0;
        }
      } finally {
        H ? Ml() : (U = !1);
      }
    }
  }
  var Ml;
  if (typeof m == "function")
    Ml = function () {
      m(Tt);
    };
  else if (typeof MessageChannel < "u") {
    var Wf = new MessageChannel(),
      wh = Wf.port2;
    ((Wf.port1.onmessage = Tt),
      (Ml = function () {
        wh.postMessage(null);
      }));
  } else
    Ml = function () {
      d(Tt, 0);
    };
  function ei(O, H) {
    A = d(function () {
      O(t.unstable_now());
    }, H);
  }
  ((t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (O) {
      O.callback = null;
    }),
    (t.unstable_forceFrameRate = function (O) {
      0 > O || 125 < O
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (x = 0 < O ? Math.floor(1e3 / O) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return r;
    }),
    (t.unstable_next = function (O) {
      switch (r) {
        case 1:
        case 2:
        case 3:
          var H = 3;
          break;
        default:
          H = r;
      }
      var R = r;
      r = H;
      try {
        return O();
      } finally {
        r = R;
      }
    }),
    (t.unstable_requestPaint = function () {
      T = !0;
    }),
    (t.unstable_runWithPriority = function (O, H) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var R = r;
      r = O;
      try {
        return H();
      } finally {
        r = R;
      }
    }),
    (t.unstable_scheduleCallback = function (O, H, R) {
      var et = t.unstable_now();
      switch (
        (typeof R == "object" && R !== null
          ? ((R = R.delay), (R = typeof R == "number" && 0 < R ? et + R : et))
          : (R = et),
        O)
      ) {
        case 1:
          var rt = -1;
          break;
        case 2:
          rt = 250;
          break;
        case 5:
          rt = 1073741823;
          break;
        case 4:
          rt = 1e4;
          break;
        default:
          rt = 5e3;
      }
      return (
        (rt = R + rt),
        (O = {
          id: v++,
          callback: H,
          priorityLevel: O,
          startTime: R,
          expirationTime: rt,
          sortIndex: -1,
        }),
        R > et
          ? ((O.sortIndex = R),
            l(s, O),
            e(f) === null &&
              O === e(s) &&
              (z ? (o(A), (A = -1)) : (z = !0), ei(_, R - et)))
          : ((O.sortIndex = rt),
            l(f, O),
            E || y || ((E = !0), U || ((U = !0), Ml()))),
        O
      );
    }),
    (t.unstable_shouldYield = j),
    (t.unstable_wrapCallback = function (O) {
      var H = r;
      return function () {
        var R = r;
        r = H;
        try {
          return O.apply(this, arguments);
        } finally {
          r = R;
        }
      };
    }));
})(Vo);
Zo.exports = Vo;
var y0 = Zo.exports,
  Ko = { exports: {} },
  zt = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var g0 = b;
function Jo(t) {
  var l = "https://react.dev/errors/" + t;
  if (1 < arguments.length) {
    l += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var e = 2; e < arguments.length; e++)
      l += "&args[]=" + encodeURIComponent(arguments[e]);
  }
  return (
    "Minified React error #" +
    t +
    "; visit " +
    l +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
function Ul() {}
var Et = {
    d: {
      f: Ul,
      r: function () {
        throw Error(Jo(522));
      },
      D: Ul,
      C: Ul,
      L: Ul,
      m: Ul,
      X: Ul,
      S: Ul,
      M: Ul,
    },
    p: 0,
    findDOMNode: null,
  },
  S0 = Symbol.for("react.portal");
function p0(t, l, e) {
  var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: S0,
    key: a == null ? null : "" + a,
    children: t,
    containerInfo: l,
    implementation: e,
  };
}
var Na = g0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
function Hn(t, l) {
  if (t === "font") return "";
  if (typeof l == "string") return l === "use-credentials" ? l : "";
}
zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Et;
zt.createPortal = function (t, l) {
  var e = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11))
    throw Error(Jo(299));
  return p0(t, l, null, e);
};
zt.flushSync = function (t) {
  var l = Na.T,
    e = Et.p;
  try {
    if (((Na.T = null), (Et.p = 2), t)) return t();
  } finally {
    ((Na.T = l), (Et.p = e), Et.d.f());
  }
};
zt.preconnect = function (t, l) {
  typeof t == "string" &&
    (l
      ? ((l = l.crossOrigin),
        (l =
          typeof l == "string" ? (l === "use-credentials" ? l : "") : void 0))
      : (l = null),
    Et.d.C(t, l));
};
zt.prefetchDNS = function (t) {
  typeof t == "string" && Et.d.D(t);
};
zt.preinit = function (t, l) {
  if (typeof t == "string" && l && typeof l.as == "string") {
    var e = l.as,
      a = Hn(e, l.crossOrigin),
      u = typeof l.integrity == "string" ? l.integrity : void 0,
      n = typeof l.fetchPriority == "string" ? l.fetchPriority : void 0;
    e === "style"
      ? Et.d.S(t, typeof l.precedence == "string" ? l.precedence : void 0, {
          crossOrigin: a,
          integrity: u,
          fetchPriority: n,
        })
      : e === "script" &&
        Et.d.X(t, {
          crossOrigin: a,
          integrity: u,
          fetchPriority: n,
          nonce: typeof l.nonce == "string" ? l.nonce : void 0,
        });
  }
};
zt.preinitModule = function (t, l) {
  if (typeof t == "string")
    if (typeof l == "object" && l !== null) {
      if (l.as == null || l.as === "script") {
        var e = Hn(l.as, l.crossOrigin);
        Et.d.M(t, {
          crossOrigin: e,
          integrity: typeof l.integrity == "string" ? l.integrity : void 0,
          nonce: typeof l.nonce == "string" ? l.nonce : void 0,
        });
      }
    } else l == null && Et.d.M(t);
};
zt.preload = function (t, l) {
  if (
    typeof t == "string" &&
    typeof l == "object" &&
    l !== null &&
    typeof l.as == "string"
  ) {
    var e = l.as,
      a = Hn(e, l.crossOrigin);
    Et.d.L(t, e, {
      crossOrigin: a,
      integrity: typeof l.integrity == "string" ? l.integrity : void 0,
      nonce: typeof l.nonce == "string" ? l.nonce : void 0,
      type: typeof l.type == "string" ? l.type : void 0,
      fetchPriority:
        typeof l.fetchPriority == "string" ? l.fetchPriority : void 0,
      referrerPolicy:
        typeof l.referrerPolicy == "string" ? l.referrerPolicy : void 0,
      imageSrcSet: typeof l.imageSrcSet == "string" ? l.imageSrcSet : void 0,
      imageSizes: typeof l.imageSizes == "string" ? l.imageSizes : void 0,
      media: typeof l.media == "string" ? l.media : void 0,
    });
  }
};
zt.preloadModule = function (t, l) {
  if (typeof t == "string")
    if (l) {
      var e = Hn(l.as, l.crossOrigin);
      Et.d.m(t, {
        as: typeof l.as == "string" && l.as !== "script" ? l.as : void 0,
        crossOrigin: e,
        integrity: typeof l.integrity == "string" ? l.integrity : void 0,
      });
    } else Et.d.m(t);
};
zt.requestFormReset = function (t) {
  Et.d.r(t);
};
zt.unstable_batchedUpdates = function (t, l) {
  return t(l);
};
zt.useFormState = function (t, l, e) {
  return Na.H.useFormState(t, l, e);
};
zt.useFormStatus = function () {
  return Na.H.useHostTransitionStatus();
};
zt.version = "19.2.5";
function wo() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wo);
    } catch (t) {
      console.error(t);
    }
}
(wo(), (Ko.exports = zt));
var b0 = Ko.exports;
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ot = y0,
  Wo = b,
  E0 = b0;
function p(t) {
  var l = "https://react.dev/errors/" + t;
  if (1 < arguments.length) {
    l += "?args[]=" + encodeURIComponent(arguments[1]);
    for (var e = 2; e < arguments.length; e++)
      l += "&args[]=" + encodeURIComponent(arguments[e]);
  }
  return (
    "Minified React error #" +
    t +
    "; visit " +
    l +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
function $o(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function cu(t) {
  var l = t,
    e = t;
  if (t.alternate) for (; l.return; ) l = l.return;
  else {
    t = l;
    do ((l = t), l.flags & 4098 && (e = l.return), (t = l.return));
    while (t);
  }
  return l.tag === 3 ? e : null;
}
function Fo(t) {
  if (t.tag === 13) {
    var l = t.memoizedState;
    if (
      (l === null && ((t = t.alternate), t !== null && (l = t.memoizedState)),
      l !== null)
    )
      return l.dehydrated;
  }
  return null;
}
function ko(t) {
  if (t.tag === 31) {
    var l = t.memoizedState;
    if (
      (l === null && ((t = t.alternate), t !== null && (l = t.memoizedState)),
      l !== null)
    )
      return l.dehydrated;
  }
  return null;
}
function Pf(t) {
  if (cu(t) !== t) throw Error(p(188));
}
function z0(t) {
  var l = t.alternate;
  if (!l) {
    if (((l = cu(t)), l === null)) throw Error(p(188));
    return l !== t ? null : t;
  }
  for (var e = t, a = l; ; ) {
    var u = e.return;
    if (u === null) break;
    var n = u.alternate;
    if (n === null) {
      if (((a = u.return), a !== null)) {
        e = a;
        continue;
      }
      break;
    }
    if (u.child === n.child) {
      for (n = u.child; n; ) {
        if (n === e) return (Pf(u), t);
        if (n === a) return (Pf(u), l);
        n = n.sibling;
      }
      throw Error(p(188));
    }
    if (e.return !== a.return) ((e = u), (a = n));
    else {
      for (var i = !1, c = u.child; c; ) {
        if (c === e) {
          ((i = !0), (e = u), (a = n));
          break;
        }
        if (c === a) {
          ((i = !0), (a = u), (e = n));
          break;
        }
        c = c.sibling;
      }
      if (!i) {
        for (c = n.child; c; ) {
          if (c === e) {
            ((i = !0), (e = n), (a = u));
            break;
          }
          if (c === a) {
            ((i = !0), (a = n), (e = u));
            break;
          }
          c = c.sibling;
        }
        if (!i) throw Error(p(189));
      }
    }
    if (e.alternate !== a) throw Error(p(190));
  }
  if (e.tag !== 3) throw Error(p(188));
  return e.stateNode.current === e ? t : l;
}
function Io(t) {
  var l = t.tag;
  if (l === 5 || l === 26 || l === 27 || l === 6) return t;
  for (t = t.child; t !== null; ) {
    if (((l = Io(t)), l !== null)) return l;
    t = t.sibling;
  }
  return null;
}
var k = Object.assign,
  T0 = Symbol.for("react.element"),
  Au = Symbol.for("react.transitional.element"),
  Oa = Symbol.for("react.portal"),
  Ce = Symbol.for("react.fragment"),
  Po = Symbol.for("react.strict_mode"),
  Vi = Symbol.for("react.profiler"),
  tr = Symbol.for("react.consumer"),
  ml = Symbol.for("react.context"),
  Wc = Symbol.for("react.forward_ref"),
  Ki = Symbol.for("react.suspense"),
  Ji = Symbol.for("react.suspense_list"),
  $c = Symbol.for("react.memo"),
  Dl = Symbol.for("react.lazy"),
  wi = Symbol.for("react.activity"),
  A0 = Symbol.for("react.memo_cache_sentinel"),
  ts = Symbol.iterator;
function pa(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (ts && t[ts]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var _0 = Symbol.for("react.client.reference");
function Wi(t) {
  if (t == null) return null;
  if (typeof t == "function")
    return t.$$typeof === _0 ? null : t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case Ce:
      return "Fragment";
    case Vi:
      return "Profiler";
    case Po:
      return "StrictMode";
    case Ki:
      return "Suspense";
    case Ji:
      return "SuspenseList";
    case wi:
      return "Activity";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case Oa:
        return "Portal";
      case ml:
        return t.displayName || "Context";
      case tr:
        return (t._context.displayName || "Context") + ".Consumer";
      case Wc:
        var l = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = l.displayName || l.name || ""),
            (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
          t
        );
      case $c:
        return (
          (l = t.displayName || null),
          l !== null ? l : Wi(t.type) || "Memo"
        );
      case Dl:
        ((l = t._payload), (t = t._init));
        try {
          return Wi(t(l));
        } catch {}
    }
  return null;
}
var xa = Array.isArray,
  M = Wo.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  X = E0.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
  re = { pending: !1, data: null, method: null, action: null },
  $i = [],
  je = -1;
function nl(t) {
  return { current: t };
}
function mt(t) {
  0 > je || ((t.current = $i[je]), ($i[je] = null), je--);
}
function w(t, l) {
  (je++, ($i[je] = t.current), (t.current = l));
}
var ul = nl(null),
  Ka = nl(null),
  Ql = nl(null),
  ln = nl(null);
function en(t, l) {
  switch ((w(Ql, l), w(Ka, t), w(ul, null), l.nodeType)) {
    case 9:
    case 11:
      t = (t = l.documentElement) && (t = t.namespaceURI) ? io(t) : 0;
      break;
    default:
      if (((t = l.tagName), (l = l.namespaceURI)))
        ((l = io(l)), (t = bh(l, t)));
      else
        switch (t) {
          case "svg":
            t = 1;
            break;
          case "math":
            t = 2;
            break;
          default:
            t = 0;
        }
  }
  (mt(ul), w(ul, t));
}
function ke() {
  (mt(ul), mt(Ka), mt(Ql));
}
function Fi(t) {
  t.memoizedState !== null && w(ln, t);
  var l = ul.current,
    e = bh(l, t.type);
  l !== e && (w(Ka, t), w(ul, e));
}
function an(t) {
  (Ka.current === t && (mt(ul), mt(Ka)),
    ln.current === t && (mt(ln), (eu._currentValue = re)));
}
var ni, ls;
function ce(t) {
  if (ni === void 0)
    try {
      throw Error();
    } catch (e) {
      var l = e.stack.trim().match(/\n( *(at )?)/);
      ((ni = (l && l[1]) || ""),
        (ls =
          -1 <
          e.stack.indexOf(`
    at`)
            ? " (<anonymous>)"
            : -1 < e.stack.indexOf("@")
              ? "@unknown:0:0"
              : ""));
    }
  return (
    `
` +
    ni +
    t +
    ls
  );
}
var ii = !1;
function ci(t, l) {
  if (!t || ii) return "";
  ii = !0;
  var e = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    var a = {
      DetermineComponentFrameRoot: function () {
        try {
          if (l) {
            var h = function () {
              throw Error();
            };
            if (
              (Object.defineProperty(h.prototype, "props", {
                set: function () {
                  throw Error();
                },
              }),
              typeof Reflect == "object" && Reflect.construct)
            ) {
              try {
                Reflect.construct(h, []);
              } catch (y) {
                var r = y;
              }
              Reflect.construct(t, [], h);
            } else {
              try {
                h.call();
              } catch (y) {
                r = y;
              }
              t.call(h.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (y) {
              r = y;
            }
            (h = t()) &&
              typeof h.catch == "function" &&
              h.catch(function () {});
          }
        } catch (y) {
          if (y && r && typeof y.stack == "string") return [y.stack, r.stack];
        }
        return [null, null];
      },
    };
    a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
    var u = Object.getOwnPropertyDescriptor(
      a.DetermineComponentFrameRoot,
      "name",
    );
    u &&
      u.configurable &&
      Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
        value: "DetermineComponentFrameRoot",
      });
    var n = a.DetermineComponentFrameRoot(),
      i = n[0],
      c = n[1];
    if (i && c) {
      var f = i.split(`
`),
        s = c.split(`
`);
      for (
        u = a = 0;
        a < f.length && !f[a].includes("DetermineComponentFrameRoot");
      )
        a++;
      for (; u < s.length && !s[u].includes("DetermineComponentFrameRoot"); )
        u++;
      if (a === f.length || u === s.length)
        for (
          a = f.length - 1, u = s.length - 1;
          1 <= a && 0 <= u && f[a] !== s[u];
        )
          u--;
      for (; 1 <= a && 0 <= u; a--, u--)
        if (f[a] !== s[u]) {
          if (a !== 1 || u !== 1)
            do
              if ((a--, u--, 0 > u || f[a] !== s[u])) {
                var v =
                  `
` + f[a].replace(" at new ", " at ");
                return (
                  t.displayName &&
                    v.includes("<anonymous>") &&
                    (v = v.replace("<anonymous>", t.displayName)),
                  v
                );
              }
            while (1 <= a && 0 <= u);
          break;
        }
    }
  } finally {
    ((ii = !1), (Error.prepareStackTrace = e));
  }
  return (e = t ? t.displayName || t.name : "") ? ce(e) : "";
}
function O0(t, l) {
  switch (t.tag) {
    case 26:
    case 27:
    case 5:
      return ce(t.type);
    case 16:
      return ce("Lazy");
    case 13:
      return t.child !== l && l !== null
        ? ce("Suspense Fallback")
        : ce("Suspense");
    case 19:
      return ce("SuspenseList");
    case 0:
    case 15:
      return ci(t.type, !1);
    case 11:
      return ci(t.type.render, !1);
    case 1:
      return ci(t.type, !0);
    case 31:
      return ce("Activity");
    default:
      return "";
  }
}
function es(t) {
  try {
    var l = "",
      e = null;
    do ((l += O0(t, e)), (e = t), (t = t.return));
    while (t);
    return l;
  } catch (a) {
    return (
      `
Error generating stack: ` +
      a.message +
      `
` +
      a.stack
    );
  }
}
var ki = Object.prototype.hasOwnProperty,
  Fc = ot.unstable_scheduleCallback,
  fi = ot.unstable_cancelCallback,
  x0 = ot.unstable_shouldYield,
  M0 = ot.unstable_requestPaint,
  Ht = ot.unstable_now,
  U0 = ot.unstable_getCurrentPriorityLevel,
  lr = ot.unstable_ImmediatePriority,
  er = ot.unstable_UserBlockingPriority,
  un = ot.unstable_NormalPriority,
  D0 = ot.unstable_LowPriority,
  ar = ot.unstable_IdlePriority,
  N0 = ot.log,
  C0 = ot.unstable_setDisableYieldValue,
  fu = null,
  Bt = null;
function Bl(t) {
  if (
    (typeof N0 == "function" && C0(t),
    Bt && typeof Bt.setStrictMode == "function")
  )
    try {
      Bt.setStrictMode(fu, t);
    } catch {}
}
var Yt = Math.clz32 ? Math.clz32 : H0,
  j0 = Math.log,
  R0 = Math.LN2;
function H0(t) {
  return ((t >>>= 0), t === 0 ? 32 : (31 - ((j0(t) / R0) | 0)) | 0);
}
var _u = 256,
  Ou = 262144,
  xu = 4194304;
function fe(t) {
  var l = t & 42;
  if (l !== 0) return l;
  switch (t & -t) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
      return 64;
    case 128:
      return 128;
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
      return t & 261888;
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t & 3932160;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return t & 62914560;
    case 67108864:
      return 67108864;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 0;
    default:
      return t;
  }
}
function Bn(t, l, e) {
  var a = t.pendingLanes;
  if (a === 0) return 0;
  var u = 0,
    n = t.suspendedLanes,
    i = t.pingedLanes;
  t = t.warmLanes;
  var c = a & 134217727;
  return (
    c !== 0
      ? ((a = c & ~n),
        a !== 0
          ? (u = fe(a))
          : ((i &= c),
            i !== 0
              ? (u = fe(i))
              : e || ((e = c & ~t), e !== 0 && (u = fe(e)))))
      : ((c = a & ~n),
        c !== 0
          ? (u = fe(c))
          : i !== 0
            ? (u = fe(i))
            : e || ((e = a & ~t), e !== 0 && (u = fe(e)))),
    u === 0
      ? 0
      : l !== 0 &&
          l !== u &&
          !(l & n) &&
          ((n = u & -u),
          (e = l & -l),
          n >= e || (n === 32 && (e & 4194048) !== 0))
        ? l
        : u
  );
}
function su(t, l) {
  return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
}
function B0(t, l) {
  switch (t) {
    case 1:
    case 2:
    case 4:
    case 8:
    case 64:
      return l + 250;
    case 16:
    case 32:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return l + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      return -1;
    case 67108864:
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function ur() {
  var t = xu;
  return ((xu <<= 1), !(xu & 62914560) && (xu = 4194304), t);
}
function si(t) {
  for (var l = [], e = 0; 31 > e; e++) l.push(t);
  return l;
}
function ou(t, l) {
  ((t.pendingLanes |= l),
    l !== 268435456 &&
      ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
}
function Y0(t, l, e, a, u, n) {
  var i = t.pendingLanes;
  ((t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.warmLanes = 0),
    (t.expiredLanes &= e),
    (t.entangledLanes &= e),
    (t.errorRecoveryDisabledLanes &= e),
    (t.shellSuspendCounter = 0));
  var c = t.entanglements,
    f = t.expirationTimes,
    s = t.hiddenUpdates;
  for (e = i & ~e; 0 < e; ) {
    var v = 31 - Yt(e),
      h = 1 << v;
    ((c[v] = 0), (f[v] = -1));
    var r = s[v];
    if (r !== null)
      for (s[v] = null, v = 0; v < r.length; v++) {
        var y = r[v];
        y !== null && (y.lane &= -536870913);
      }
    e &= ~h;
  }
  (a !== 0 && nr(t, a, 0),
    n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(i & ~l)));
}
function nr(t, l, e) {
  ((t.pendingLanes |= l), (t.suspendedLanes &= ~l));
  var a = 31 - Yt(l);
  ((t.entangledLanes |= l),
    (t.entanglements[a] = t.entanglements[a] | 1073741824 | (e & 261930)));
}
function ir(t, l) {
  var e = (t.entangledLanes |= l);
  for (t = t.entanglements; e; ) {
    var a = 31 - Yt(e),
      u = 1 << a;
    ((u & l) | (t[a] & l) && (t[a] |= l), (e &= ~u));
  }
}
function cr(t, l) {
  var e = l & -l;
  return ((e = e & 42 ? 1 : kc(e)), e & (t.suspendedLanes | l) ? 0 : e);
}
function kc(t) {
  switch (t) {
    case 2:
      t = 1;
      break;
    case 8:
      t = 4;
      break;
    case 32:
      t = 16;
      break;
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
      t = 128;
      break;
    case 268435456:
      t = 134217728;
      break;
    default:
      t = 0;
  }
  return t;
}
function Ic(t) {
  return (
    (t &= -t),
    2 < t ? (8 < t ? (t & 134217727 ? 32 : 268435456) : 8) : 2
  );
}
function fr() {
  var t = X.p;
  return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Nh(t.type));
}
function as(t, l) {
  var e = X.p;
  try {
    return ((X.p = t), l());
  } finally {
    X.p = e;
  }
}
var ee = Math.random().toString(36).slice(2),
  yt = "__reactFiber$" + ee,
  Ut = "__reactProps$" + ee,
  oa = "__reactContainer$" + ee,
  Ii = "__reactEvents$" + ee,
  q0 = "__reactListeners$" + ee,
  G0 = "__reactHandles$" + ee,
  us = "__reactResources$" + ee,
  ru = "__reactMarker$" + ee;
function Pc(t) {
  (delete t[yt], delete t[Ut], delete t[Ii], delete t[q0], delete t[G0]);
}
function Re(t) {
  var l = t[yt];
  if (l) return l;
  for (var e = t.parentNode; e; ) {
    if ((l = e[oa] || e[yt])) {
      if (
        ((e = l.alternate),
        l.child !== null || (e !== null && e.child !== null))
      )
        for (t = ro(t); t !== null; ) {
          if ((e = t[yt])) return e;
          t = ro(t);
        }
      return l;
    }
    ((t = e), (e = t.parentNode));
  }
  return null;
}
function ra(t) {
  if ((t = t[yt] || t[oa])) {
    var l = t.tag;
    if (
      l === 5 ||
      l === 6 ||
      l === 13 ||
      l === 31 ||
      l === 26 ||
      l === 27 ||
      l === 3
    )
      return t;
  }
  return null;
}
function Ma(t) {
  var l = t.tag;
  if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
  throw Error(p(33));
}
function Ve(t) {
  var l = t[us];
  return (
    l ||
      (l = t[us] = { hoistableStyles: new Map(), hoistableScripts: new Map() }),
    l
  );
}
function ht(t) {
  t[ru] = !0;
}
var sr = new Set(),
  or = {};
function Ee(t, l) {
  (Ie(t, l), Ie(t + "Capture", l));
}
function Ie(t, l) {
  for (or[t] = l, t = 0; t < l.length; t++) sr.add(l[t]);
}
var L0 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
  ),
  ns = {},
  is = {};
function X0(t) {
  return ki.call(is, t)
    ? !0
    : ki.call(ns, t)
      ? !1
      : L0.test(t)
        ? (is[t] = !0)
        : ((ns[t] = !0), !1);
}
function Gu(t, l, e) {
  if (X0(l))
    if (e === null) t.removeAttribute(l);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
          t.removeAttribute(l);
          return;
        case "boolean":
          var a = l.toLowerCase().slice(0, 5);
          if (a !== "data-" && a !== "aria-") {
            t.removeAttribute(l);
            return;
          }
      }
      t.setAttribute(l, "" + e);
    }
}
function Mu(t, l, e) {
  if (e === null) t.removeAttribute(l);
  else {
    switch (typeof e) {
      case "undefined":
      case "function":
      case "symbol":
      case "boolean":
        t.removeAttribute(l);
        return;
    }
    t.setAttribute(l, "" + e);
  }
}
function cl(t, l, e, a) {
  if (a === null) t.removeAttribute(e);
  else {
    switch (typeof a) {
      case "undefined":
      case "function":
      case "symbol":
      case "boolean":
        t.removeAttribute(e);
        return;
    }
    t.setAttributeNS(l, e, "" + a);
  }
}
function Zt(t) {
  switch (typeof t) {
    case "bigint":
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function rr(t) {
  var l = t.type;
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === "input" &&
    (l === "checkbox" || l === "radio")
  );
}
function Q0(t, l, e) {
  var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, l);
  if (
    !t.hasOwnProperty(l) &&
    typeof a < "u" &&
    typeof a.get == "function" &&
    typeof a.set == "function"
  ) {
    var u = a.get,
      n = a.set;
    return (
      Object.defineProperty(t, l, {
        configurable: !0,
        get: function () {
          return u.call(this);
        },
        set: function (i) {
          ((e = "" + i), n.call(this, i));
        },
      }),
      Object.defineProperty(t, l, { enumerable: a.enumerable }),
      {
        getValue: function () {
          return e;
        },
        setValue: function (i) {
          e = "" + i;
        },
        stopTracking: function () {
          ((t._valueTracker = null), delete t[l]);
        },
      }
    );
  }
}
function Pi(t) {
  if (!t._valueTracker) {
    var l = rr(t) ? "checked" : "value";
    t._valueTracker = Q0(t, l, "" + t[l]);
  }
}
function dr(t) {
  if (!t) return !1;
  var l = t._valueTracker;
  if (!l) return !0;
  var e = l.getValue(),
    a = "";
  return (
    t && (a = rr(t) ? (t.checked ? "true" : "false") : t.value),
    (t = a),
    t !== e ? (l.setValue(t), !0) : !1
  );
}
function nn(t) {
  if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u"))
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
var Z0 = /[\n"\\]/g;
function Jt(t) {
  return t.replace(Z0, function (l) {
    return "\\" + l.charCodeAt(0).toString(16) + " ";
  });
}
function tc(t, l, e, a, u, n, i, c) {
  ((t.name = ""),
    i != null &&
    typeof i != "function" &&
    typeof i != "symbol" &&
    typeof i != "boolean"
      ? (t.type = i)
      : t.removeAttribute("type"),
    l != null
      ? i === "number"
        ? ((l === 0 && t.value === "") || t.value != l) &&
          (t.value = "" + Zt(l))
        : t.value !== "" + Zt(l) && (t.value = "" + Zt(l))
      : (i !== "submit" && i !== "reset") || t.removeAttribute("value"),
    l != null
      ? lc(t, i, Zt(l))
      : e != null
        ? lc(t, i, Zt(e))
        : a != null && t.removeAttribute("value"),
    u == null && n != null && (t.defaultChecked = !!n),
    u != null &&
      (t.checked = u && typeof u != "function" && typeof u != "symbol"),
    c != null &&
    typeof c != "function" &&
    typeof c != "symbol" &&
    typeof c != "boolean"
      ? (t.name = "" + Zt(c))
      : t.removeAttribute("name"));
}
function hr(t, l, e, a, u, n, i, c) {
  if (
    (n != null &&
      typeof n != "function" &&
      typeof n != "symbol" &&
      typeof n != "boolean" &&
      (t.type = n),
    l != null || e != null)
  ) {
    if (!((n !== "submit" && n !== "reset") || l != null)) {
      Pi(t);
      return;
    }
    ((e = e != null ? "" + Zt(e) : ""),
      (l = l != null ? "" + Zt(l) : e),
      c || l === t.value || (t.value = l),
      (t.defaultValue = l));
  }
  ((a = a ?? u),
    (a = typeof a != "function" && typeof a != "symbol" && !!a),
    (t.checked = c ? t.checked : !!a),
    (t.defaultChecked = !!a),
    i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean" &&
      (t.name = i),
    Pi(t));
}
function lc(t, l, e) {
  (l === "number" && nn(t.ownerDocument) === t) ||
    t.defaultValue === "" + e ||
    (t.defaultValue = "" + e);
}
function Ke(t, l, e, a) {
  if (((t = t.options), l)) {
    l = {};
    for (var u = 0; u < e.length; u++) l["$" + e[u]] = !0;
    for (e = 0; e < t.length; e++)
      ((u = l.hasOwnProperty("$" + t[e].value)),
        t[e].selected !== u && (t[e].selected = u),
        u && a && (t[e].defaultSelected = !0));
  } else {
    for (e = "" + Zt(e), l = null, u = 0; u < t.length; u++) {
      if (t[u].value === e) {
        ((t[u].selected = !0), a && (t[u].defaultSelected = !0));
        return;
      }
      l !== null || t[u].disabled || (l = t[u]);
    }
    l !== null && (l.selected = !0);
  }
}
function mr(t, l, e) {
  if (
    l != null &&
    ((l = "" + Zt(l)), l !== t.value && (t.value = l), e == null)
  ) {
    t.defaultValue !== l && (t.defaultValue = l);
    return;
  }
  t.defaultValue = e != null ? "" + Zt(e) : "";
}
function vr(t, l, e, a) {
  if (l == null) {
    if (a != null) {
      if (e != null) throw Error(p(92));
      if (xa(a)) {
        if (1 < a.length) throw Error(p(93));
        a = a[0];
      }
      e = a;
    }
    (e == null && (e = ""), (l = e));
  }
  ((e = Zt(l)),
    (t.defaultValue = e),
    (a = t.textContent),
    a === e && a !== "" && a !== null && (t.value = a),
    Pi(t));
}
function Pe(t, l) {
  if (l) {
    var e = t.firstChild;
    if (e && e === t.lastChild && e.nodeType === 3) {
      e.nodeValue = l;
      return;
    }
  }
  t.textContent = l;
}
var V0 = new Set(
  "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
    " ",
  ),
);
function cs(t, l, e) {
  var a = l.indexOf("--") === 0;
  e == null || typeof e == "boolean" || e === ""
    ? a
      ? t.setProperty(l, "")
      : l === "float"
        ? (t.cssFloat = "")
        : (t[l] = "")
    : a
      ? t.setProperty(l, e)
      : typeof e != "number" || e === 0 || V0.has(l)
        ? l === "float"
          ? (t.cssFloat = e)
          : (t[l] = ("" + e).trim())
        : (t[l] = e + "px");
}
function yr(t, l, e) {
  if (l != null && typeof l != "object") throw Error(p(62));
  if (((t = t.style), e != null)) {
    for (var a in e)
      !e.hasOwnProperty(a) ||
        (l != null && l.hasOwnProperty(a)) ||
        (a.indexOf("--") === 0
          ? t.setProperty(a, "")
          : a === "float"
            ? (t.cssFloat = "")
            : (t[a] = ""));
    for (var u in l)
      ((a = l[u]), l.hasOwnProperty(u) && e[u] !== a && cs(t, u, a));
  } else for (var n in l) l.hasOwnProperty(n) && cs(t, n, l[n]);
}
function tf(t) {
  if (t.indexOf("-") === -1) return !1;
  switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var K0 = new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"],
  ]),
  J0 =
    /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
function Lu(t) {
  return J0.test("" + t)
    ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
    : t;
}
function vl() {}
var ec = null;
function lf(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var He = null,
  Je = null;
function fs(t) {
  var l = ra(t);
  if (l && (t = l.stateNode)) {
    var e = t[Ut] || null;
    t: switch (((t = l.stateNode), l.type)) {
      case "input":
        if (
          (tc(
            t,
            e.value,
            e.defaultValue,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name,
          ),
          (l = e.name),
          e.type === "radio" && l != null)
        ) {
          for (e = t; e.parentNode; ) e = e.parentNode;
          for (
            e = e.querySelectorAll(
              'input[name="' + Jt("" + l) + '"][type="radio"]',
            ),
              l = 0;
            l < e.length;
            l++
          ) {
            var a = e[l];
            if (a !== t && a.form === t.form) {
              var u = a[Ut] || null;
              if (!u) throw Error(p(90));
              tc(
                a,
                u.value,
                u.defaultValue,
                u.defaultValue,
                u.checked,
                u.defaultChecked,
                u.type,
                u.name,
              );
            }
          }
          for (l = 0; l < e.length; l++)
            ((a = e[l]), a.form === t.form && dr(a));
        }
        break t;
      case "textarea":
        mr(t, e.value, e.defaultValue);
        break t;
      case "select":
        ((l = e.value), l != null && Ke(t, !!e.multiple, l, !1));
    }
  }
}
var oi = !1;
function gr(t, l, e) {
  if (oi) return t(l, e);
  oi = !0;
  try {
    var a = t(l);
    return a;
  } finally {
    if (
      ((oi = !1),
      (He !== null || Je !== null) &&
        (Wn(), He && ((l = He), (t = Je), (Je = He = null), fs(l), t)))
    )
      for (l = 0; l < t.length; l++) fs(t[l]);
  }
}
function Ja(t, l) {
  var e = t.stateNode;
  if (e === null) return null;
  var a = e[Ut] || null;
  if (a === null) return null;
  e = a[l];
  t: switch (l) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      ((a = !a.disabled) ||
        ((t = t.type),
        (a = !(
          t === "button" ||
          t === "input" ||
          t === "select" ||
          t === "textarea"
        ))),
        (t = !a));
      break t;
    default:
      t = !1;
  }
  if (t) return null;
  if (e && typeof e != "function") throw Error(p(231, l, typeof e));
  return e;
}
var bl = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  ac = !1;
if (bl)
  try {
    var ba = {};
    (Object.defineProperty(ba, "passive", {
      get: function () {
        ac = !0;
      },
    }),
      window.addEventListener("test", ba, ba),
      window.removeEventListener("test", ba, ba));
  } catch {
    ac = !1;
  }
var Yl = null,
  ef = null,
  Xu = null;
function Sr() {
  if (Xu) return Xu;
  var t,
    l = ef,
    e = l.length,
    a,
    u = "value" in Yl ? Yl.value : Yl.textContent,
    n = u.length;
  for (t = 0; t < e && l[t] === u[t]; t++);
  var i = e - t;
  for (a = 1; a <= i && l[e - a] === u[n - a]; a++);
  return (Xu = u.slice(t, 1 < a ? 1 - a : void 0));
}
function Qu(t) {
  var l = t.keyCode;
  return (
    "charCode" in t
      ? ((t = t.charCode), t === 0 && l === 13 && (t = 13))
      : (t = l),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function Uu() {
  return !0;
}
function ss() {
  return !1;
}
function Dt(t) {
  function l(e, a, u, n, i) {
    ((this._reactName = e),
      (this._targetInst = u),
      (this.type = a),
      (this.nativeEvent = n),
      (this.target = i),
      (this.currentTarget = null));
    for (var c in t)
      t.hasOwnProperty(c) && ((e = t[c]), (this[c] = e ? e(n) : n[c]));
    return (
      (this.isDefaultPrevented = (
        n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
      )
        ? Uu
        : ss),
      (this.isPropagationStopped = ss),
      this
    );
  }
  return (
    k(l.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e &&
          (e.preventDefault
            ? e.preventDefault()
            : typeof e.returnValue != "unknown" && (e.returnValue = !1),
          (this.isDefaultPrevented = Uu));
      },
      stopPropagation: function () {
        var e = this.nativeEvent;
        e &&
          (e.stopPropagation
            ? e.stopPropagation()
            : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0),
          (this.isPropagationStopped = Uu));
      },
      persist: function () {},
      isPersistent: Uu,
    }),
    l
  );
}
var ze = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Yn = Dt(ze),
  du = k({}, ze, { view: 0, detail: 0 }),
  w0 = Dt(du),
  ri,
  di,
  Ea,
  qn = k({}, du, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: af,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return "movementX" in t
        ? t.movementX
        : (t !== Ea &&
            (Ea && t.type === "mousemove"
              ? ((ri = t.screenX - Ea.screenX), (di = t.screenY - Ea.screenY))
              : (di = ri = 0),
            (Ea = t)),
          ri);
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : di;
    },
  }),
  os = Dt(qn),
  W0 = k({}, qn, { dataTransfer: 0 }),
  $0 = Dt(W0),
  F0 = k({}, du, { relatedTarget: 0 }),
  hi = Dt(F0),
  k0 = k({}, ze, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  I0 = Dt(k0),
  P0 = k({}, ze, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    },
  }),
  tm = Dt(P0),
  lm = k({}, ze, { data: 0 }),
  rs = Dt(lm),
  em = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  am = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  um = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function nm(t) {
  var l = this.nativeEvent;
  return l.getModifierState ? l.getModifierState(t) : (t = um[t]) ? !!l[t] : !1;
}
function af() {
  return nm;
}
var im = k({}, du, {
    key: function (t) {
      if (t.key) {
        var l = em[t.key] || t.key;
        if (l !== "Unidentified") return l;
      }
      return t.type === "keypress"
        ? ((t = Qu(t)), t === 13 ? "Enter" : String.fromCharCode(t))
        : t.type === "keydown" || t.type === "keyup"
          ? am[t.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: af,
    charCode: function (t) {
      return t.type === "keypress" ? Qu(t) : 0;
    },
    keyCode: function (t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === "keypress"
        ? Qu(t)
        : t.type === "keydown" || t.type === "keyup"
          ? t.keyCode
          : 0;
    },
  }),
  cm = Dt(im),
  fm = k({}, qn, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ds = Dt(fm),
  sm = k({}, du, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: af,
  }),
  om = Dt(sm),
  rm = k({}, ze, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  dm = Dt(rm),
  hm = k({}, qn, {
    deltaX: function (t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return "deltaY" in t
        ? t.deltaY
        : "wheelDeltaY" in t
          ? -t.wheelDeltaY
          : "wheelDelta" in t
            ? -t.wheelDelta
            : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  mm = Dt(hm),
  vm = k({}, ze, { newState: 0, oldState: 0 }),
  ym = Dt(vm),
  gm = [9, 13, 27, 32],
  uf = bl && "CompositionEvent" in window,
  Ca = null;
bl && "documentMode" in document && (Ca = document.documentMode);
var Sm = bl && "TextEvent" in window && !Ca,
  pr = bl && (!uf || (Ca && 8 < Ca && 11 >= Ca)),
  hs = " ",
  ms = !1;
function br(t, l) {
  switch (t) {
    case "keyup":
      return gm.indexOf(l.keyCode) !== -1;
    case "keydown":
      return l.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Er(t) {
  return ((t = t.detail), typeof t == "object" && "data" in t ? t.data : null);
}
var Be = !1;
function pm(t, l) {
  switch (t) {
    case "compositionend":
      return Er(l);
    case "keypress":
      return l.which !== 32 ? null : ((ms = !0), hs);
    case "textInput":
      return ((t = l.data), t === hs && ms ? null : t);
    default:
      return null;
  }
}
function bm(t, l) {
  if (Be)
    return t === "compositionend" || (!uf && br(t, l))
      ? ((t = Sr()), (Xu = ef = Yl = null), (Be = !1), t)
      : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(l.ctrlKey || l.altKey || l.metaKey) || (l.ctrlKey && l.altKey)) {
        if (l.char && 1 < l.char.length) return l.char;
        if (l.which) return String.fromCharCode(l.which);
      }
      return null;
    case "compositionend":
      return pr && l.locale !== "ko" ? null : l.data;
    default:
      return null;
  }
}
var Em = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function vs(t) {
  var l = t && t.nodeName && t.nodeName.toLowerCase();
  return l === "input" ? !!Em[t.type] : l === "textarea";
}
function zr(t, l, e, a) {
  (He ? (Je ? Je.push(a) : (Je = [a])) : (He = a),
    (l = An(l, "onChange")),
    0 < l.length &&
      ((e = new Yn("onChange", "change", null, e, a)),
      t.push({ event: e, listeners: l })));
}
var ja = null,
  wa = null;
function zm(t) {
  gh(t, 0);
}
function Gn(t) {
  var l = Ma(t);
  if (dr(l)) return t;
}
function ys(t, l) {
  if (t === "change") return l;
}
var Tr = !1;
if (bl) {
  var mi;
  if (bl) {
    var vi = "oninput" in document;
    if (!vi) {
      var gs = document.createElement("div");
      (gs.setAttribute("oninput", "return;"),
        (vi = typeof gs.oninput == "function"));
    }
    mi = vi;
  } else mi = !1;
  Tr = mi && (!document.documentMode || 9 < document.documentMode);
}
function Ss() {
  ja && (ja.detachEvent("onpropertychange", Ar), (wa = ja = null));
}
function Ar(t) {
  if (t.propertyName === "value" && Gn(wa)) {
    var l = [];
    (zr(l, wa, t, lf(t)), gr(zm, l));
  }
}
function Tm(t, l, e) {
  t === "focusin"
    ? (Ss(), (ja = l), (wa = e), ja.attachEvent("onpropertychange", Ar))
    : t === "focusout" && Ss();
}
function Am(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return Gn(wa);
}
function _m(t, l) {
  if (t === "click") return Gn(l);
}
function Om(t, l) {
  if (t === "input" || t === "change") return Gn(l);
}
function xm(t, l) {
  return (t === l && (t !== 0 || 1 / t === 1 / l)) || (t !== t && l !== l);
}
var Gt = typeof Object.is == "function" ? Object.is : xm;
function Wa(t, l) {
  if (Gt(t, l)) return !0;
  if (typeof t != "object" || t === null || typeof l != "object" || l === null)
    return !1;
  var e = Object.keys(t),
    a = Object.keys(l);
  if (e.length !== a.length) return !1;
  for (a = 0; a < e.length; a++) {
    var u = e[a];
    if (!ki.call(l, u) || !Gt(t[u], l[u])) return !1;
  }
  return !0;
}
function ps(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function bs(t, l) {
  var e = ps(t);
  t = 0;
  for (var a; e; ) {
    if (e.nodeType === 3) {
      if (((a = t + e.textContent.length), t <= l && a >= l))
        return { node: e, offset: l - t };
      t = a;
    }
    t: {
      for (; e; ) {
        if (e.nextSibling) {
          e = e.nextSibling;
          break t;
        }
        e = e.parentNode;
      }
      e = void 0;
    }
    e = ps(e);
  }
}
function _r(t, l) {
  return t && l
    ? t === l
      ? !0
      : t && t.nodeType === 3
        ? !1
        : l && l.nodeType === 3
          ? _r(t, l.parentNode)
          : "contains" in t
            ? t.contains(l)
            : t.compareDocumentPosition
              ? !!(t.compareDocumentPosition(l) & 16)
              : !1
    : !1;
}
function Or(t) {
  t =
    t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null
      ? t.ownerDocument.defaultView
      : window;
  for (var l = nn(t.document); l instanceof t.HTMLIFrameElement; ) {
    try {
      var e = typeof l.contentWindow.location.href == "string";
    } catch {
      e = !1;
    }
    if (e) t = l.contentWindow;
    else break;
    l = nn(t.document);
  }
  return l;
}
function nf(t) {
  var l = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    l &&
    ((l === "input" &&
      (t.type === "text" ||
        t.type === "search" ||
        t.type === "tel" ||
        t.type === "url" ||
        t.type === "password")) ||
      l === "textarea" ||
      t.contentEditable === "true")
  );
}
var Mm = bl && "documentMode" in document && 11 >= document.documentMode,
  Ye = null,
  uc = null,
  Ra = null,
  nc = !1;
function Es(t, l, e) {
  var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
  nc ||
    Ye == null ||
    Ye !== nn(a) ||
    ((a = Ye),
    "selectionStart" in a && nf(a)
      ? (a = { start: a.selectionStart, end: a.selectionEnd })
      : ((a = (
          (a.ownerDocument && a.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (a = {
          anchorNode: a.anchorNode,
          anchorOffset: a.anchorOffset,
          focusNode: a.focusNode,
          focusOffset: a.focusOffset,
        })),
    (Ra && Wa(Ra, a)) ||
      ((Ra = a),
      (a = An(uc, "onSelect")),
      0 < a.length &&
        ((l = new Yn("onSelect", "select", null, l, e)),
        t.push({ event: l, listeners: a }),
        (l.target = Ye))));
}
function ie(t, l) {
  var e = {};
  return (
    (e[t.toLowerCase()] = l.toLowerCase()),
    (e["Webkit" + t] = "webkit" + l),
    (e["Moz" + t] = "moz" + l),
    e
  );
}
var qe = {
    animationend: ie("Animation", "AnimationEnd"),
    animationiteration: ie("Animation", "AnimationIteration"),
    animationstart: ie("Animation", "AnimationStart"),
    transitionrun: ie("Transition", "TransitionRun"),
    transitionstart: ie("Transition", "TransitionStart"),
    transitioncancel: ie("Transition", "TransitionCancel"),
    transitionend: ie("Transition", "TransitionEnd"),
  },
  yi = {},
  xr = {};
bl &&
  ((xr = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete qe.animationend.animation,
    delete qe.animationiteration.animation,
    delete qe.animationstart.animation),
  "TransitionEvent" in window || delete qe.transitionend.transition);
function Te(t) {
  if (yi[t]) return yi[t];
  if (!qe[t]) return t;
  var l = qe[t],
    e;
  for (e in l) if (l.hasOwnProperty(e) && e in xr) return (yi[t] = l[e]);
  return t;
}
var Mr = Te("animationend"),
  Ur = Te("animationiteration"),
  Dr = Te("animationstart"),
  Um = Te("transitionrun"),
  Dm = Te("transitionstart"),
  Nm = Te("transitioncancel"),
  Nr = Te("transitionend"),
  Cr = new Map(),
  ic =
    "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
ic.push("scrollEnd");
function tl(t, l) {
  (Cr.set(t, l), Ee(l, [t]));
}
var cn =
    typeof reportError == "function"
      ? reportError
      : function (t) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var l = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof t == "object" &&
                t !== null &&
                typeof t.message == "string"
                  ? String(t.message)
                  : String(t),
              error: t,
            });
            if (!window.dispatchEvent(l)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", t);
            return;
          }
          console.error(t);
        },
  Qt = [],
  Ge = 0,
  cf = 0;
function Ln() {
  for (var t = Ge, l = (cf = Ge = 0); l < t; ) {
    var e = Qt[l];
    Qt[l++] = null;
    var a = Qt[l];
    Qt[l++] = null;
    var u = Qt[l];
    Qt[l++] = null;
    var n = Qt[l];
    if (((Qt[l++] = null), a !== null && u !== null)) {
      var i = a.pending;
      (i === null ? (u.next = u) : ((u.next = i.next), (i.next = u)),
        (a.pending = u));
    }
    n !== 0 && jr(e, u, n);
  }
}
function Xn(t, l, e, a) {
  ((Qt[Ge++] = t),
    (Qt[Ge++] = l),
    (Qt[Ge++] = e),
    (Qt[Ge++] = a),
    (cf |= a),
    (t.lanes |= a),
    (t = t.alternate),
    t !== null && (t.lanes |= a));
}
function ff(t, l, e, a) {
  return (Xn(t, l, e, a), fn(t));
}
function Ae(t, l) {
  return (Xn(t, null, null, l), fn(t));
}
function jr(t, l, e) {
  t.lanes |= e;
  var a = t.alternate;
  a !== null && (a.lanes |= e);
  for (var u = !1, n = t.return; n !== null; )
    ((n.childLanes |= e),
      (a = n.alternate),
      a !== null && (a.childLanes |= e),
      n.tag === 22 &&
        ((t = n.stateNode), t === null || t._visibility & 1 || (u = !0)),
      (t = n),
      (n = n.return));
  return t.tag === 3
    ? ((n = t.stateNode),
      u &&
        l !== null &&
        ((u = 31 - Yt(e)),
        (t = n.hiddenUpdates),
        (a = t[u]),
        a === null ? (t[u] = [l]) : a.push(l),
        (l.lane = e | 536870912)),
      n)
    : null;
}
function fn(t) {
  if (50 < Za) throw ((Za = 0), (xc = null), Error(p(185)));
  for (var l = t.return; l !== null; ) ((t = l), (l = t.return));
  return t.tag === 3 ? t.stateNode : null;
}
var Le = {};
function Cm(t, l, e, a) {
  ((this.tag = t),
    (this.key = e),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.refCleanup = this.ref = null),
    (this.pendingProps = l),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = a),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null));
}
function jt(t, l, e, a) {
  return new Cm(t, l, e, a);
}
function sf(t) {
  return ((t = t.prototype), !(!t || !t.isReactComponent));
}
function gl(t, l) {
  var e = t.alternate;
  return (
    e === null
      ? ((e = jt(t.tag, l, t.key, t.mode)),
        (e.elementType = t.elementType),
        (e.type = t.type),
        (e.stateNode = t.stateNode),
        (e.alternate = t),
        (t.alternate = e))
      : ((e.pendingProps = l),
        (e.type = t.type),
        (e.flags = 0),
        (e.subtreeFlags = 0),
        (e.deletions = null)),
    (e.flags = t.flags & 65011712),
    (e.childLanes = t.childLanes),
    (e.lanes = t.lanes),
    (e.child = t.child),
    (e.memoizedProps = t.memoizedProps),
    (e.memoizedState = t.memoizedState),
    (e.updateQueue = t.updateQueue),
    (l = t.dependencies),
    (e.dependencies =
      l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }),
    (e.sibling = t.sibling),
    (e.index = t.index),
    (e.ref = t.ref),
    (e.refCleanup = t.refCleanup),
    e
  );
}
function Rr(t, l) {
  t.flags &= 65011714;
  var e = t.alternate;
  return (
    e === null
      ? ((t.childLanes = 0),
        (t.lanes = l),
        (t.child = null),
        (t.subtreeFlags = 0),
        (t.memoizedProps = null),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.dependencies = null),
        (t.stateNode = null))
      : ((t.childLanes = e.childLanes),
        (t.lanes = e.lanes),
        (t.child = e.child),
        (t.subtreeFlags = 0),
        (t.deletions = null),
        (t.memoizedProps = e.memoizedProps),
        (t.memoizedState = e.memoizedState),
        (t.updateQueue = e.updateQueue),
        (t.type = e.type),
        (l = e.dependencies),
        (t.dependencies =
          l === null
            ? null
            : { lanes: l.lanes, firstContext: l.firstContext })),
    t
  );
}
function Zu(t, l, e, a, u, n) {
  var i = 0;
  if (((a = t), typeof t == "function")) sf(t) && (i = 1);
  else if (typeof t == "string")
    i = Yv(t, e, ul.current)
      ? 26
      : t === "html" || t === "head" || t === "body"
        ? 27
        : 5;
  else
    t: switch (t) {
      case wi:
        return ((t = jt(31, e, l, u)), (t.elementType = wi), (t.lanes = n), t);
      case Ce:
        return de(e.children, u, n, l);
      case Po:
        ((i = 8), (u |= 24));
        break;
      case Vi:
        return (
          (t = jt(12, e, l, u | 2)),
          (t.elementType = Vi),
          (t.lanes = n),
          t
        );
      case Ki:
        return ((t = jt(13, e, l, u)), (t.elementType = Ki), (t.lanes = n), t);
      case Ji:
        return ((t = jt(19, e, l, u)), (t.elementType = Ji), (t.lanes = n), t);
      default:
        if (typeof t == "object" && t !== null)
          switch (t.$$typeof) {
            case ml:
              i = 10;
              break t;
            case tr:
              i = 9;
              break t;
            case Wc:
              i = 11;
              break t;
            case $c:
              i = 14;
              break t;
            case Dl:
              ((i = 16), (a = null));
              break t;
          }
        ((i = 29),
          (e = Error(p(130, t === null ? "null" : typeof t, ""))),
          (a = null));
    }
  return (
    (l = jt(i, e, l, u)),
    (l.elementType = t),
    (l.type = a),
    (l.lanes = n),
    l
  );
}
function de(t, l, e, a) {
  return ((t = jt(7, t, a, l)), (t.lanes = e), t);
}
function gi(t, l, e) {
  return ((t = jt(6, t, null, l)), (t.lanes = e), t);
}
function Hr(t) {
  var l = jt(18, null, null, 0);
  return ((l.stateNode = t), l);
}
function Si(t, l, e) {
  return (
    (l = jt(4, t.children !== null ? t.children : [], t.key, l)),
    (l.lanes = e),
    (l.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    l
  );
}
var zs = new WeakMap();
function wt(t, l) {
  if (typeof t == "object" && t !== null) {
    var e = zs.get(t);
    return e !== void 0
      ? e
      : ((l = { value: t, source: l, stack: es(l) }), zs.set(t, l), l);
  }
  return { value: t, source: l, stack: es(l) };
}
var Xe = [],
  Qe = 0,
  sn = null,
  $a = 0,
  Vt = [],
  Kt = 0,
  Il = null,
  ll = 1,
  el = "";
function dl(t, l) {
  ((Xe[Qe++] = $a), (Xe[Qe++] = sn), (sn = t), ($a = l));
}
function Br(t, l, e) {
  ((Vt[Kt++] = ll), (Vt[Kt++] = el), (Vt[Kt++] = Il), (Il = t));
  var a = ll;
  t = el;
  var u = 32 - Yt(a) - 1;
  ((a &= ~(1 << u)), (e += 1));
  var n = 32 - Yt(l) + u;
  if (30 < n) {
    var i = u - (u % 5);
    ((n = (a & ((1 << i) - 1)).toString(32)),
      (a >>= i),
      (u -= i),
      (ll = (1 << (32 - Yt(l) + u)) | (e << u) | a),
      (el = n + t));
  } else ((ll = (1 << n) | (e << u) | a), (el = t));
}
function of(t) {
  t.return !== null && (dl(t, 1), Br(t, 1, 0));
}
function rf(t) {
  for (; t === sn; )
    ((sn = Xe[--Qe]), (Xe[Qe] = null), ($a = Xe[--Qe]), (Xe[Qe] = null));
  for (; t === Il; )
    ((Il = Vt[--Kt]),
      (Vt[Kt] = null),
      (el = Vt[--Kt]),
      (Vt[Kt] = null),
      (ll = Vt[--Kt]),
      (Vt[Kt] = null));
}
function Yr(t, l) {
  ((Vt[Kt++] = ll),
    (Vt[Kt++] = el),
    (Vt[Kt++] = Il),
    (ll = l.id),
    (el = l.overflow),
    (Il = t));
}
var gt = null,
  $ = null,
  G = !1,
  Zl = null,
  Wt = !1,
  cc = Error(p(519));
function Pl(t) {
  var l = Error(
    p(
      418,
      1 < arguments.length && arguments[1] !== void 0 && arguments[1]
        ? "text"
        : "HTML",
      "",
    ),
  );
  throw (Fa(wt(l, t)), cc);
}
function Ts(t) {
  var l = t.stateNode,
    e = t.type,
    a = t.memoizedProps;
  switch (((l[yt] = t), (l[Ut] = a), e)) {
    case "dialog":
      (B("cancel", l), B("close", l));
      break;
    case "iframe":
    case "object":
    case "embed":
      B("load", l);
      break;
    case "video":
    case "audio":
      for (e = 0; e < tu.length; e++) B(tu[e], l);
      break;
    case "source":
      B("error", l);
      break;
    case "img":
    case "image":
    case "link":
      (B("error", l), B("load", l));
      break;
    case "details":
      B("toggle", l);
      break;
    case "input":
      (B("invalid", l),
        hr(
          l,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0,
        ));
      break;
    case "select":
      B("invalid", l);
      break;
    case "textarea":
      (B("invalid", l), vr(l, a.value, a.defaultValue, a.children));
  }
  ((e = a.children),
    (typeof e != "string" && typeof e != "number" && typeof e != "bigint") ||
    l.textContent === "" + e ||
    a.suppressHydrationWarning === !0 ||
    ph(l.textContent, e)
      ? (a.popover != null && (B("beforetoggle", l), B("toggle", l)),
        a.onScroll != null && B("scroll", l),
        a.onScrollEnd != null && B("scrollend", l),
        a.onClick != null && (l.onclick = vl),
        (l = !0))
      : (l = !1),
    l || Pl(t, !0));
}
function As(t) {
  for (gt = t.return; gt; )
    switch (gt.tag) {
      case 5:
      case 31:
      case 13:
        Wt = !1;
        return;
      case 27:
      case 3:
        Wt = !0;
        return;
      default:
        gt = gt.return;
    }
}
function xe(t) {
  if (t !== gt) return !1;
  if (!G) return (As(t), (G = !0), !1);
  var l = t.tag,
    e;
  if (
    ((e = l !== 3 && l !== 27) &&
      ((e = l === 5) &&
        ((e = t.type),
        (e = !(e !== "form" && e !== "button") || Cc(t.type, t.memoizedProps))),
      (e = !e)),
    e && $ && Pl(t),
    As(t),
    l === 13)
  ) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(p(317));
    $ = oo(t);
  } else if (l === 31) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(p(317));
    $ = oo(t);
  } else
    l === 27
      ? ((l = $), ae(t.type) ? ((t = Bc), (Bc = null), ($ = t)) : ($ = l))
      : ($ = gt ? Ft(t.stateNode.nextSibling) : null);
  return !0;
}
function ye() {
  (($ = gt = null), (G = !1));
}
function pi() {
  var t = Zl;
  return (
    t !== null && (xt === null ? (xt = t) : xt.push.apply(xt, t), (Zl = null)),
    t
  );
}
function Fa(t) {
  Zl === null ? (Zl = [t]) : Zl.push(t);
}
var fc = nl(null),
  _e = null,
  yl = null;
function Cl(t, l, e) {
  (w(fc, l._currentValue), (l._currentValue = e));
}
function Sl(t) {
  ((t._currentValue = fc.current), mt(fc));
}
function sc(t, l, e) {
  for (; t !== null; ) {
    var a = t.alternate;
    if (
      ((t.childLanes & l) !== l
        ? ((t.childLanes |= l), a !== null && (a.childLanes |= l))
        : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l),
      t === e)
    )
      break;
    t = t.return;
  }
}
function oc(t, l, e, a) {
  var u = t.child;
  for (u !== null && (u.return = t); u !== null; ) {
    var n = u.dependencies;
    if (n !== null) {
      var i = u.child;
      n = n.firstContext;
      t: for (; n !== null; ) {
        var c = n;
        n = u;
        for (var f = 0; f < l.length; f++)
          if (c.context === l[f]) {
            ((n.lanes |= e),
              (c = n.alternate),
              c !== null && (c.lanes |= e),
              sc(n.return, e, t),
              a || (i = null));
            break t;
          }
        n = c.next;
      }
    } else if (u.tag === 18) {
      if (((i = u.return), i === null)) throw Error(p(341));
      ((i.lanes |= e),
        (n = i.alternate),
        n !== null && (n.lanes |= e),
        sc(i, e, t),
        (i = null));
    } else i = u.child;
    if (i !== null) i.return = u;
    else
      for (i = u; i !== null; ) {
        if (i === t) {
          i = null;
          break;
        }
        if (((u = i.sibling), u !== null)) {
          ((u.return = i.return), (i = u));
          break;
        }
        i = i.return;
      }
    u = i;
  }
}
function da(t, l, e, a) {
  t = null;
  for (var u = l, n = !1; u !== null; ) {
    if (!n) {
      if (u.flags & 524288) n = !0;
      else if (u.flags & 262144) break;
    }
    if (u.tag === 10) {
      var i = u.alternate;
      if (i === null) throw Error(p(387));
      if (((i = i.memoizedProps), i !== null)) {
        var c = u.type;
        Gt(u.pendingProps.value, i.value) ||
          (t !== null ? t.push(c) : (t = [c]));
      }
    } else if (u === ln.current) {
      if (((i = u.alternate), i === null)) throw Error(p(387));
      i.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
        (t !== null ? t.push(eu) : (t = [eu]));
    }
    u = u.return;
  }
  (t !== null && oc(l, t, e, a), (l.flags |= 262144));
}
function on(t) {
  for (t = t.firstContext; t !== null; ) {
    if (!Gt(t.context._currentValue, t.memoizedValue)) return !0;
    t = t.next;
  }
  return !1;
}
function ge(t) {
  ((_e = t),
    (yl = null),
    (t = t.dependencies),
    t !== null && (t.firstContext = null));
}
function St(t) {
  return qr(_e, t);
}
function Du(t, l) {
  return (_e === null && ge(t), qr(t, l));
}
function qr(t, l) {
  var e = l._currentValue;
  if (((l = { context: l, memoizedValue: e, next: null }), yl === null)) {
    if (t === null) throw Error(p(308));
    ((yl = l),
      (t.dependencies = { lanes: 0, firstContext: l }),
      (t.flags |= 524288));
  } else yl = yl.next = l;
  return e;
}
var jm =
    typeof AbortController < "u"
      ? AbortController
      : function () {
          var t = [],
            l = (this.signal = {
              aborted: !1,
              addEventListener: function (e, a) {
                t.push(a);
              },
            });
          this.abort = function () {
            ((l.aborted = !0),
              t.forEach(function (e) {
                return e();
              }));
          };
        },
  Rm = ot.unstable_scheduleCallback,
  Hm = ot.unstable_NormalPriority,
  ct = {
    $$typeof: ml,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0,
  };
function df() {
  return { controller: new jm(), data: new Map(), refCount: 0 };
}
function hu(t) {
  (t.refCount--,
    t.refCount === 0 &&
      Rm(Hm, function () {
        t.controller.abort();
      }));
}
var Ha = null,
  rc = 0,
  ta = 0,
  we = null;
function Bm(t, l) {
  if (Ha === null) {
    var e = (Ha = []);
    ((rc = 0),
      (ta = Yf()),
      (we = {
        status: "pending",
        value: void 0,
        then: function (a) {
          e.push(a);
        },
      }));
  }
  return (rc++, l.then(_s, _s), l);
}
function _s() {
  if (--rc === 0 && Ha !== null) {
    we !== null && (we.status = "fulfilled");
    var t = Ha;
    ((Ha = null), (ta = 0), (we = null));
    for (var l = 0; l < t.length; l++) (0, t[l])();
  }
}
function Ym(t, l) {
  var e = [],
    a = {
      status: "pending",
      value: null,
      reason: null,
      then: function (u) {
        e.push(u);
      },
    };
  return (
    t.then(
      function () {
        ((a.status = "fulfilled"), (a.value = l));
        for (var u = 0; u < e.length; u++) (0, e[u])(l);
      },
      function (u) {
        for (a.status = "rejected", a.reason = u, u = 0; u < e.length; u++)
          (0, e[u])(void 0);
      },
    ),
    a
  );
}
var Os = M.S;
M.S = function (t, l) {
  ((Id = Ht()),
    typeof l == "object" &&
      l !== null &&
      typeof l.then == "function" &&
      Bm(t, l),
    Os !== null && Os(t, l));
};
var he = nl(null);
function hf() {
  var t = he.current;
  return t !== null ? t : J.pooledCache;
}
function Vu(t, l) {
  l === null ? w(he, he.current) : w(he, l.pool);
}
function Gr() {
  var t = hf();
  return t === null ? null : { parent: ct._currentValue, pool: t };
}
var ha = Error(p(460)),
  mf = Error(p(474)),
  Qn = Error(p(542)),
  rn = { then: function () {} };
function xs(t) {
  return ((t = t.status), t === "fulfilled" || t === "rejected");
}
function Lr(t, l, e) {
  switch (
    ((e = t[e]),
    e === void 0 ? t.push(l) : e !== l && (l.then(vl, vl), (l = e)),
    l.status)
  ) {
    case "fulfilled":
      return l.value;
    case "rejected":
      throw ((t = l.reason), Us(t), t);
    default:
      if (typeof l.status == "string") l.then(vl, vl);
      else {
        if (((t = J), t !== null && 100 < t.shellSuspendCounter))
          throw Error(p(482));
        ((t = l),
          (t.status = "pending"),
          t.then(
            function (a) {
              if (l.status === "pending") {
                var u = l;
                ((u.status = "fulfilled"), (u.value = a));
              }
            },
            function (a) {
              if (l.status === "pending") {
                var u = l;
                ((u.status = "rejected"), (u.reason = a));
              }
            },
          ));
      }
      switch (l.status) {
        case "fulfilled":
          return l.value;
        case "rejected":
          throw ((t = l.reason), Us(t), t);
      }
      throw ((me = l), ha);
  }
}
function se(t) {
  try {
    var l = t._init;
    return l(t._payload);
  } catch (e) {
    throw e !== null && typeof e == "object" && typeof e.then == "function"
      ? ((me = e), ha)
      : e;
  }
}
var me = null;
function Ms() {
  if (me === null) throw Error(p(459));
  var t = me;
  return ((me = null), t);
}
function Us(t) {
  if (t === ha || t === Qn) throw Error(p(483));
}
var We = null,
  ka = 0;
function Nu(t) {
  var l = ka;
  return ((ka += 1), We === null && (We = []), Lr(We, t, l));
}
function za(t, l) {
  ((l = l.props.ref), (t.ref = l !== void 0 ? l : null));
}
function Cu(t, l) {
  throw l.$$typeof === T0
    ? Error(p(525))
    : ((t = Object.prototype.toString.call(l)),
      Error(
        p(
          31,
          t === "[object Object]"
            ? "object with keys {" + Object.keys(l).join(", ") + "}"
            : t,
        ),
      ));
}
function Xr(t) {
  function l(d, o) {
    if (t) {
      var m = d.deletions;
      m === null ? ((d.deletions = [o]), (d.flags |= 16)) : m.push(o);
    }
  }
  function e(d, o) {
    if (!t) return null;
    for (; o !== null; ) (l(d, o), (o = o.sibling));
    return null;
  }
  function a(d) {
    for (var o = new Map(); d !== null; )
      (d.key !== null ? o.set(d.key, d) : o.set(d.index, d), (d = d.sibling));
    return o;
  }
  function u(d, o) {
    return ((d = gl(d, o)), (d.index = 0), (d.sibling = null), d);
  }
  function n(d, o, m) {
    return (
      (d.index = m),
      t
        ? ((m = d.alternate),
          m !== null
            ? ((m = m.index), m < o ? ((d.flags |= 67108866), o) : m)
            : ((d.flags |= 67108866), o))
        : ((d.flags |= 1048576), o)
    );
  }
  function i(d) {
    return (t && d.alternate === null && (d.flags |= 67108866), d);
  }
  function c(d, o, m, g) {
    return o === null || o.tag !== 6
      ? ((o = gi(m, d.mode, g)), (o.return = d), o)
      : ((o = u(o, m)), (o.return = d), o);
  }
  function f(d, o, m, g) {
    var _ = m.type;
    return _ === Ce
      ? v(d, o, m.props.children, g, m.key)
      : o !== null &&
          (o.elementType === _ ||
            (typeof _ == "object" &&
              _ !== null &&
              _.$$typeof === Dl &&
              se(_) === o.type))
        ? ((o = u(o, m.props)), za(o, m), (o.return = d), o)
        : ((o = Zu(m.type, m.key, m.props, null, d.mode, g)),
          za(o, m),
          (o.return = d),
          o);
  }
  function s(d, o, m, g) {
    return o === null ||
      o.tag !== 4 ||
      o.stateNode.containerInfo !== m.containerInfo ||
      o.stateNode.implementation !== m.implementation
      ? ((o = Si(m, d.mode, g)), (o.return = d), o)
      : ((o = u(o, m.children || [])), (o.return = d), o);
  }
  function v(d, o, m, g, _) {
    return o === null || o.tag !== 7
      ? ((o = de(m, d.mode, g, _)), (o.return = d), o)
      : ((o = u(o, m)), (o.return = d), o);
  }
  function h(d, o, m) {
    if (
      (typeof o == "string" && o !== "") ||
      typeof o == "number" ||
      typeof o == "bigint"
    )
      return ((o = gi("" + o, d.mode, m)), (o.return = d), o);
    if (typeof o == "object" && o !== null) {
      switch (o.$$typeof) {
        case Au:
          return (
            (m = Zu(o.type, o.key, o.props, null, d.mode, m)),
            za(m, o),
            (m.return = d),
            m
          );
        case Oa:
          return ((o = Si(o, d.mode, m)), (o.return = d), o);
        case Dl:
          return ((o = se(o)), h(d, o, m));
      }
      if (xa(o) || pa(o))
        return ((o = de(o, d.mode, m, null)), (o.return = d), o);
      if (typeof o.then == "function") return h(d, Nu(o), m);
      if (o.$$typeof === ml) return h(d, Du(d, o), m);
      Cu(d, o);
    }
    return null;
  }
  function r(d, o, m, g) {
    var _ = o !== null ? o.key : null;
    if (
      (typeof m == "string" && m !== "") ||
      typeof m == "number" ||
      typeof m == "bigint"
    )
      return _ !== null ? null : c(d, o, "" + m, g);
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Au:
          return m.key === _ ? f(d, o, m, g) : null;
        case Oa:
          return m.key === _ ? s(d, o, m, g) : null;
        case Dl:
          return ((m = se(m)), r(d, o, m, g));
      }
      if (xa(m) || pa(m)) return _ !== null ? null : v(d, o, m, g, null);
      if (typeof m.then == "function") return r(d, o, Nu(m), g);
      if (m.$$typeof === ml) return r(d, o, Du(d, m), g);
      Cu(d, m);
    }
    return null;
  }
  function y(d, o, m, g, _) {
    if (
      (typeof g == "string" && g !== "") ||
      typeof g == "number" ||
      typeof g == "bigint"
    )
      return ((d = d.get(m) || null), c(o, d, "" + g, _));
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Au:
          return (
            (d = d.get(g.key === null ? m : g.key) || null),
            f(o, d, g, _)
          );
        case Oa:
          return (
            (d = d.get(g.key === null ? m : g.key) || null),
            s(o, d, g, _)
          );
        case Dl:
          return ((g = se(g)), y(d, o, m, g, _));
      }
      if (xa(g) || pa(g)) return ((d = d.get(m) || null), v(o, d, g, _, null));
      if (typeof g.then == "function") return y(d, o, m, Nu(g), _);
      if (g.$$typeof === ml) return y(d, o, m, Du(o, g), _);
      Cu(o, g);
    }
    return null;
  }
  function E(d, o, m, g) {
    for (
      var _ = null, U = null, A = o, x = (o = 0), C = null;
      A !== null && x < m.length;
      x++
    ) {
      A.index > x ? ((C = A), (A = null)) : (C = A.sibling);
      var j = r(d, A, m[x], g);
      if (j === null) {
        A === null && (A = C);
        break;
      }
      (t && A && j.alternate === null && l(d, A),
        (o = n(j, o, x)),
        U === null ? (_ = j) : (U.sibling = j),
        (U = j),
        (A = C));
    }
    if (x === m.length) return (e(d, A), G && dl(d, x), _);
    if (A === null) {
      for (; x < m.length; x++)
        ((A = h(d, m[x], g)),
          A !== null &&
            ((o = n(A, o, x)),
            U === null ? (_ = A) : (U.sibling = A),
            (U = A)));
      return (G && dl(d, x), _);
    }
    for (A = a(A); x < m.length; x++)
      ((C = y(A, d, x, m[x], g)),
        C !== null &&
          (t && C.alternate !== null && A.delete(C.key === null ? x : C.key),
          (o = n(C, o, x)),
          U === null ? (_ = C) : (U.sibling = C),
          (U = C)));
    return (
      t &&
        A.forEach(function (Tt) {
          return l(d, Tt);
        }),
      G && dl(d, x),
      _
    );
  }
  function z(d, o, m, g) {
    if (m == null) throw Error(p(151));
    for (
      var _ = null, U = null, A = o, x = (o = 0), C = null, j = m.next();
      A !== null && !j.done;
      x++, j = m.next()
    ) {
      A.index > x ? ((C = A), (A = null)) : (C = A.sibling);
      var Tt = r(d, A, j.value, g);
      if (Tt === null) {
        A === null && (A = C);
        break;
      }
      (t && A && Tt.alternate === null && l(d, A),
        (o = n(Tt, o, x)),
        U === null ? (_ = Tt) : (U.sibling = Tt),
        (U = Tt),
        (A = C));
    }
    if (j.done) return (e(d, A), G && dl(d, x), _);
    if (A === null) {
      for (; !j.done; x++, j = m.next())
        ((j = h(d, j.value, g)),
          j !== null &&
            ((o = n(j, o, x)),
            U === null ? (_ = j) : (U.sibling = j),
            (U = j)));
      return (G && dl(d, x), _);
    }
    for (A = a(A); !j.done; x++, j = m.next())
      ((j = y(A, d, x, j.value, g)),
        j !== null &&
          (t && j.alternate !== null && A.delete(j.key === null ? x : j.key),
          (o = n(j, o, x)),
          U === null ? (_ = j) : (U.sibling = j),
          (U = j)));
    return (
      t &&
        A.forEach(function (Ml) {
          return l(d, Ml);
        }),
      G && dl(d, x),
      _
    );
  }
  function T(d, o, m, g) {
    if (
      (typeof m == "object" &&
        m !== null &&
        m.type === Ce &&
        m.key === null &&
        (m = m.props.children),
      typeof m == "object" && m !== null)
    ) {
      switch (m.$$typeof) {
        case Au:
          t: {
            for (var _ = m.key; o !== null; ) {
              if (o.key === _) {
                if (((_ = m.type), _ === Ce)) {
                  if (o.tag === 7) {
                    (e(d, o.sibling),
                      (g = u(o, m.props.children)),
                      (g.return = d),
                      (d = g));
                    break t;
                  }
                } else if (
                  o.elementType === _ ||
                  (typeof _ == "object" &&
                    _ !== null &&
                    _.$$typeof === Dl &&
                    se(_) === o.type)
                ) {
                  (e(d, o.sibling),
                    (g = u(o, m.props)),
                    za(g, m),
                    (g.return = d),
                    (d = g));
                  break t;
                }
                e(d, o);
                break;
              } else l(d, o);
              o = o.sibling;
            }
            m.type === Ce
              ? ((g = de(m.props.children, d.mode, g, m.key)),
                (g.return = d),
                (d = g))
              : ((g = Zu(m.type, m.key, m.props, null, d.mode, g)),
                za(g, m),
                (g.return = d),
                (d = g));
          }
          return i(d);
        case Oa:
          t: {
            for (_ = m.key; o !== null; ) {
              if (o.key === _)
                if (
                  o.tag === 4 &&
                  o.stateNode.containerInfo === m.containerInfo &&
                  o.stateNode.implementation === m.implementation
                ) {
                  (e(d, o.sibling),
                    (g = u(o, m.children || [])),
                    (g.return = d),
                    (d = g));
                  break t;
                } else {
                  e(d, o);
                  break;
                }
              else l(d, o);
              o = o.sibling;
            }
            ((g = Si(m, d.mode, g)), (g.return = d), (d = g));
          }
          return i(d);
        case Dl:
          return ((m = se(m)), T(d, o, m, g));
      }
      if (xa(m)) return E(d, o, m, g);
      if (pa(m)) {
        if (((_ = pa(m)), typeof _ != "function")) throw Error(p(150));
        return ((m = _.call(m)), z(d, o, m, g));
      }
      if (typeof m.then == "function") return T(d, o, Nu(m), g);
      if (m.$$typeof === ml) return T(d, o, Du(d, m), g);
      Cu(d, m);
    }
    return (typeof m == "string" && m !== "") ||
      typeof m == "number" ||
      typeof m == "bigint"
      ? ((m = "" + m),
        o !== null && o.tag === 6
          ? (e(d, o.sibling), (g = u(o, m)), (g.return = d), (d = g))
          : (e(d, o), (g = gi(m, d.mode, g)), (g.return = d), (d = g)),
        i(d))
      : e(d, o);
  }
  return function (d, o, m, g) {
    try {
      ka = 0;
      var _ = T(d, o, m, g);
      return ((We = null), _);
    } catch (A) {
      if (A === ha || A === Qn) throw A;
      var U = jt(29, A, null, d.mode);
      return ((U.lanes = g), (U.return = d), U);
    } finally {
    }
  };
}
var Se = Xr(!0),
  Qr = Xr(!1),
  Nl = !1;
function vf(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, lanes: 0, hiddenCallbacks: null },
    callbacks: null,
  };
}
function dc(t, l) {
  ((t = t.updateQueue),
    l.updateQueue === t &&
      (l.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        callbacks: null,
      }));
}
function Vl(t) {
  return { lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Kl(t, l, e) {
  var a = t.updateQueue;
  if (a === null) return null;
  if (((a = a.shared), L & 2)) {
    var u = a.pending;
    return (
      u === null ? (l.next = l) : ((l.next = u.next), (u.next = l)),
      (a.pending = l),
      (l = fn(t)),
      jr(t, null, e),
      l
    );
  }
  return (Xn(t, a, l, e), fn(t));
}
function Ba(t, l, e) {
  if (
    ((l = l.updateQueue), l !== null && ((l = l.shared), (e & 4194048) !== 0))
  ) {
    var a = l.lanes;
    ((a &= t.pendingLanes), (e |= a), (l.lanes = e), ir(t, e));
  }
}
function bi(t, l) {
  var e = t.updateQueue,
    a = t.alternate;
  if (a !== null && ((a = a.updateQueue), e === a)) {
    var u = null,
      n = null;
    if (((e = e.firstBaseUpdate), e !== null)) {
      do {
        var i = {
          lane: e.lane,
          tag: e.tag,
          payload: e.payload,
          callback: null,
          next: null,
        };
        (n === null ? (u = n = i) : (n = n.next = i), (e = e.next));
      } while (e !== null);
      n === null ? (u = n = l) : (n = n.next = l);
    } else u = n = l;
    ((e = {
      baseState: a.baseState,
      firstBaseUpdate: u,
      lastBaseUpdate: n,
      shared: a.shared,
      callbacks: a.callbacks,
    }),
      (t.updateQueue = e));
    return;
  }
  ((t = e.lastBaseUpdate),
    t === null ? (e.firstBaseUpdate = l) : (t.next = l),
    (e.lastBaseUpdate = l));
}
var hc = !1;
function Ya() {
  if (hc) {
    var t = we;
    if (t !== null) throw t;
  }
}
function qa(t, l, e, a) {
  hc = !1;
  var u = t.updateQueue;
  Nl = !1;
  var n = u.firstBaseUpdate,
    i = u.lastBaseUpdate,
    c = u.shared.pending;
  if (c !== null) {
    u.shared.pending = null;
    var f = c,
      s = f.next;
    ((f.next = null), i === null ? (n = s) : (i.next = s), (i = f));
    var v = t.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (c = v.lastBaseUpdate),
      c !== i &&
        (c === null ? (v.firstBaseUpdate = s) : (c.next = s),
        (v.lastBaseUpdate = f)));
  }
  if (n !== null) {
    var h = u.baseState;
    ((i = 0), (v = s = f = null), (c = n));
    do {
      var r = c.lane & -536870913,
        y = r !== c.lane;
      if (y ? (q & r) === r : (a & r) === r) {
        (r !== 0 && r === ta && (hc = !0),
          v !== null &&
            (v = v.next =
              {
                lane: 0,
                tag: c.tag,
                payload: c.payload,
                callback: null,
                next: null,
              }));
        t: {
          var E = t,
            z = c;
          r = l;
          var T = e;
          switch (z.tag) {
            case 1:
              if (((E = z.payload), typeof E == "function")) {
                h = E.call(T, h, r);
                break t;
              }
              h = E;
              break t;
            case 3:
              E.flags = (E.flags & -65537) | 128;
            case 0:
              if (
                ((E = z.payload),
                (r = typeof E == "function" ? E.call(T, h, r) : E),
                r == null)
              )
                break t;
              h = k({}, h, r);
              break t;
            case 2:
              Nl = !0;
          }
        }
        ((r = c.callback),
          r !== null &&
            ((t.flags |= 64),
            y && (t.flags |= 8192),
            (y = u.callbacks),
            y === null ? (u.callbacks = [r]) : y.push(r)));
      } else
        ((y = {
          lane: r,
          tag: c.tag,
          payload: c.payload,
          callback: c.callback,
          next: null,
        }),
          v === null ? ((s = v = y), (f = h)) : (v = v.next = y),
          (i |= r));
      if (((c = c.next), c === null)) {
        if (((c = u.shared.pending), c === null)) break;
        ((y = c),
          (c = y.next),
          (y.next = null),
          (u.lastBaseUpdate = y),
          (u.shared.pending = null));
      }
    } while (!0);
    (v === null && (f = h),
      (u.baseState = f),
      (u.firstBaseUpdate = s),
      (u.lastBaseUpdate = v),
      n === null && (u.shared.lanes = 0),
      (le |= i),
      (t.lanes = i),
      (t.memoizedState = h));
  }
}
function Zr(t, l) {
  if (typeof t != "function") throw Error(p(191, t));
  t.call(l);
}
function Vr(t, l) {
  var e = t.callbacks;
  if (e !== null)
    for (t.callbacks = null, t = 0; t < e.length; t++) Zr(e[t], l);
}
var la = nl(null),
  dn = nl(0);
function Ds(t, l) {
  ((t = Al), w(dn, t), w(la, l), (Al = t | l.baseLanes));
}
function mc() {
  (w(dn, Al), w(la, la.current));
}
function yf() {
  ((Al = dn.current), mt(la), mt(dn));
}
var Lt = nl(null),
  $t = null;
function jl(t) {
  var l = t.alternate;
  (w(at, at.current & 1),
    w(Lt, t),
    $t === null &&
      (l === null || la.current !== null || l.memoizedState !== null) &&
      ($t = t));
}
function vc(t) {
  (w(at, at.current), w(Lt, t), $t === null && ($t = t));
}
function Kr(t) {
  t.tag === 22 ? (w(at, at.current), w(Lt, t), $t === null && ($t = t)) : Rl();
}
function Rl() {
  (w(at, at.current), w(Lt, Lt.current));
}
function Ct(t) {
  (mt(Lt), $t === t && ($t = null), mt(at));
}
var at = nl(0);
function hn(t) {
  for (var l = t; l !== null; ) {
    if (l.tag === 13) {
      var e = l.memoizedState;
      if (e !== null && ((e = e.dehydrated), e === null || Rc(e) || Hc(e)))
        return l;
    } else if (
      l.tag === 19 &&
      (l.memoizedProps.revealOrder === "forwards" ||
        l.memoizedProps.revealOrder === "backwards" ||
        l.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
        l.memoizedProps.revealOrder === "together")
    ) {
      if (l.flags & 128) return l;
    } else if (l.child !== null) {
      ((l.child.return = l), (l = l.child));
      continue;
    }
    if (l === t) break;
    for (; l.sibling === null; ) {
      if (l.return === null || l.return === t) return null;
      l = l.return;
    }
    ((l.sibling.return = l.return), (l = l.sibling));
  }
  return null;
}
var El = 0,
  N = null,
  K = null,
  nt = null,
  mn = !1,
  $e = !1,
  pe = !1,
  vn = 0,
  Ia = 0,
  Fe = null,
  qm = 0;
function tt() {
  throw Error(p(321));
}
function gf(t, l) {
  if (l === null) return !1;
  for (var e = 0; e < l.length && e < t.length; e++)
    if (!Gt(t[e], l[e])) return !1;
  return !0;
}
function Sf(t, l, e, a, u, n) {
  return (
    (El = n),
    (N = l),
    (l.memoizedState = null),
    (l.updateQueue = null),
    (l.lanes = 0),
    (M.H = t === null || t.memoizedState === null ? zd : Uf),
    (pe = !1),
    (n = e(a, u)),
    (pe = !1),
    $e && (n = wr(l, e, a, u)),
    Jr(t),
    n
  );
}
function Jr(t) {
  M.H = Pa;
  var l = K !== null && K.next !== null;
  if (((El = 0), (nt = K = N = null), (mn = !1), (Ia = 0), (Fe = null), l))
    throw Error(p(300));
  t === null || ft || ((t = t.dependencies), t !== null && on(t) && (ft = !0));
}
function wr(t, l, e, a) {
  N = t;
  var u = 0;
  do {
    if (($e && (Fe = null), (Ia = 0), ($e = !1), 25 <= u)) throw Error(p(301));
    if (((u += 1), (nt = K = null), t.updateQueue != null)) {
      var n = t.updateQueue;
      ((n.lastEffect = null),
        (n.events = null),
        (n.stores = null),
        n.memoCache != null && (n.memoCache.index = 0));
    }
    ((M.H = Td), (n = l(e, a)));
  } while ($e);
  return n;
}
function Gm() {
  var t = M.H,
    l = t.useState()[0];
  return (
    (l = typeof l.then == "function" ? mu(l) : l),
    (t = t.useState()[0]),
    (K !== null ? K.memoizedState : null) !== t && (N.flags |= 1024),
    l
  );
}
function pf() {
  var t = vn !== 0;
  return ((vn = 0), t);
}
function bf(t, l, e) {
  ((l.updateQueue = t.updateQueue), (l.flags &= -2053), (t.lanes &= ~e));
}
function Ef(t) {
  if (mn) {
    for (t = t.memoizedState; t !== null; ) {
      var l = t.queue;
      (l !== null && (l.pending = null), (t = t.next));
    }
    mn = !1;
  }
  ((El = 0), (nt = K = N = null), ($e = !1), (Ia = vn = 0), (Fe = null));
}
function bt() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return (nt === null ? (N.memoizedState = nt = t) : (nt = nt.next = t), nt);
}
function ut() {
  if (K === null) {
    var t = N.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = K.next;
  var l = nt === null ? N.memoizedState : nt.next;
  if (l !== null) ((nt = l), (K = t));
  else {
    if (t === null) throw N.alternate === null ? Error(p(467)) : Error(p(310));
    ((K = t),
      (t = {
        memoizedState: K.memoizedState,
        baseState: K.baseState,
        baseQueue: K.baseQueue,
        queue: K.queue,
        next: null,
      }),
      nt === null ? (N.memoizedState = nt = t) : (nt = nt.next = t));
  }
  return nt;
}
function Zn() {
  return { lastEffect: null, events: null, stores: null, memoCache: null };
}
function mu(t) {
  var l = Ia;
  return (
    (Ia += 1),
    Fe === null && (Fe = []),
    (t = Lr(Fe, t, l)),
    (l = N),
    (nt === null ? l.memoizedState : nt.next) === null &&
      ((l = l.alternate),
      (M.H = l === null || l.memoizedState === null ? zd : Uf)),
    t
  );
}
function Vn(t) {
  if (t !== null && typeof t == "object") {
    if (typeof t.then == "function") return mu(t);
    if (t.$$typeof === ml) return St(t);
  }
  throw Error(p(438, String(t)));
}
function zf(t) {
  var l = null,
    e = N.updateQueue;
  if ((e !== null && (l = e.memoCache), l == null)) {
    var a = N.alternate;
    a !== null &&
      ((a = a.updateQueue),
      a !== null &&
        ((a = a.memoCache),
        a != null &&
          (l = {
            data: a.data.map(function (u) {
              return u.slice();
            }),
            index: 0,
          })));
  }
  if (
    (l == null && (l = { data: [], index: 0 }),
    e === null && ((e = Zn()), (N.updateQueue = e)),
    (e.memoCache = l),
    (e = l.data[l.index]),
    e === void 0)
  )
    for (e = l.data[l.index] = Array(t), a = 0; a < t; a++) e[a] = A0;
  return (l.index++, e);
}
function zl(t, l) {
  return typeof l == "function" ? l(t) : l;
}
function Ku(t) {
  var l = ut();
  return Tf(l, K, t);
}
function Tf(t, l, e) {
  var a = t.queue;
  if (a === null) throw Error(p(311));
  a.lastRenderedReducer = e;
  var u = t.baseQueue,
    n = a.pending;
  if (n !== null) {
    if (u !== null) {
      var i = u.next;
      ((u.next = n.next), (n.next = i));
    }
    ((l.baseQueue = u = n), (a.pending = null));
  }
  if (((n = t.baseState), u === null)) t.memoizedState = n;
  else {
    l = u.next;
    var c = (i = null),
      f = null,
      s = l,
      v = !1;
    do {
      var h = s.lane & -536870913;
      if (h !== s.lane ? (q & h) === h : (El & h) === h) {
        var r = s.revertLane;
        if (r === 0)
          (f !== null &&
            (f = f.next =
              {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: s.action,
                hasEagerState: s.hasEagerState,
                eagerState: s.eagerState,
                next: null,
              }),
            h === ta && (v = !0));
        else if ((El & r) === r) {
          ((s = s.next), r === ta && (v = !0));
          continue;
        } else
          ((h = {
            lane: 0,
            revertLane: s.revertLane,
            gesture: null,
            action: s.action,
            hasEagerState: s.hasEagerState,
            eagerState: s.eagerState,
            next: null,
          }),
            f === null ? ((c = f = h), (i = n)) : (f = f.next = h),
            (N.lanes |= r),
            (le |= r));
        ((h = s.action),
          pe && e(n, h),
          (n = s.hasEagerState ? s.eagerState : e(n, h)));
      } else
        ((r = {
          lane: h,
          revertLane: s.revertLane,
          gesture: s.gesture,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        }),
          f === null ? ((c = f = r), (i = n)) : (f = f.next = r),
          (N.lanes |= h),
          (le |= h));
      s = s.next;
    } while (s !== null && s !== l);
    if (
      (f === null ? (i = n) : (f.next = c),
      !Gt(n, t.memoizedState) && ((ft = !0), v && ((e = we), e !== null)))
    )
      throw e;
    ((t.memoizedState = n),
      (t.baseState = i),
      (t.baseQueue = f),
      (a.lastRenderedState = n));
  }
  return (u === null && (a.lanes = 0), [t.memoizedState, a.dispatch]);
}
function Ei(t) {
  var l = ut(),
    e = l.queue;
  if (e === null) throw Error(p(311));
  e.lastRenderedReducer = t;
  var a = e.dispatch,
    u = e.pending,
    n = l.memoizedState;
  if (u !== null) {
    e.pending = null;
    var i = (u = u.next);
    do ((n = t(n, i.action)), (i = i.next));
    while (i !== u);
    (Gt(n, l.memoizedState) || (ft = !0),
      (l.memoizedState = n),
      l.baseQueue === null && (l.baseState = n),
      (e.lastRenderedState = n));
  }
  return [n, a];
}
function Wr(t, l, e) {
  var a = N,
    u = ut(),
    n = G;
  if (n) {
    if (e === void 0) throw Error(p(407));
    e = e();
  } else e = l();
  var i = !Gt((K || u).memoizedState, e);
  if (
    (i && ((u.memoizedState = e), (ft = !0)),
    (u = u.queue),
    Af(kr.bind(null, a, u, t), [t]),
    u.getSnapshot !== l || i || (nt !== null && nt.memoizedState.tag & 1))
  ) {
    if (
      ((a.flags |= 2048),
      ea(9, { destroy: void 0 }, Fr.bind(null, a, u, e, l), null),
      J === null)
    )
      throw Error(p(349));
    n || El & 127 || $r(a, l, e);
  }
  return e;
}
function $r(t, l, e) {
  ((t.flags |= 16384),
    (t = { getSnapshot: l, value: e }),
    (l = N.updateQueue),
    l === null
      ? ((l = Zn()), (N.updateQueue = l), (l.stores = [t]))
      : ((e = l.stores), e === null ? (l.stores = [t]) : e.push(t)));
}
function Fr(t, l, e, a) {
  ((l.value = e), (l.getSnapshot = a), Ir(l) && Pr(t));
}
function kr(t, l, e) {
  return e(function () {
    Ir(l) && Pr(t);
  });
}
function Ir(t) {
  var l = t.getSnapshot;
  t = t.value;
  try {
    var e = l();
    return !Gt(t, e);
  } catch {
    return !0;
  }
}
function Pr(t) {
  var l = Ae(t, 2);
  l !== null && Mt(l, t, 2);
}
function yc(t) {
  var l = bt();
  if (typeof t == "function") {
    var e = t;
    if (((t = e()), pe)) {
      Bl(!0);
      try {
        e();
      } finally {
        Bl(!1);
      }
    }
  }
  return (
    (l.memoizedState = l.baseState = t),
    (l.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: zl,
      lastRenderedState: t,
    }),
    l
  );
}
function td(t, l, e, a) {
  return ((t.baseState = e), Tf(t, K, typeof a == "function" ? a : zl));
}
function Lm(t, l, e, a, u) {
  if (Jn(t)) throw Error(p(485));
  if (((t = l.action), t !== null)) {
    var n = {
      payload: u,
      action: t,
      next: null,
      isTransition: !0,
      status: "pending",
      value: null,
      reason: null,
      listeners: [],
      then: function (i) {
        n.listeners.push(i);
      },
    };
    (M.T !== null ? e(!0) : (n.isTransition = !1),
      a(n),
      (e = l.pending),
      e === null
        ? ((n.next = l.pending = n), ld(l, n))
        : ((n.next = e.next), (l.pending = e.next = n)));
  }
}
function ld(t, l) {
  var e = l.action,
    a = l.payload,
    u = t.state;
  if (l.isTransition) {
    var n = M.T,
      i = {};
    M.T = i;
    try {
      var c = e(u, a),
        f = M.S;
      (f !== null && f(i, c), Ns(t, l, c));
    } catch (s) {
      gc(t, l, s);
    } finally {
      (n !== null && i.types !== null && (n.types = i.types), (M.T = n));
    }
  } else
    try {
      ((n = e(u, a)), Ns(t, l, n));
    } catch (s) {
      gc(t, l, s);
    }
}
function Ns(t, l, e) {
  e !== null && typeof e == "object" && typeof e.then == "function"
    ? e.then(
        function (a) {
          Cs(t, l, a);
        },
        function (a) {
          return gc(t, l, a);
        },
      )
    : Cs(t, l, e);
}
function Cs(t, l, e) {
  ((l.status = "fulfilled"),
    (l.value = e),
    ed(l),
    (t.state = e),
    (l = t.pending),
    l !== null &&
      ((e = l.next),
      e === l ? (t.pending = null) : ((e = e.next), (l.next = e), ld(t, e))));
}
function gc(t, l, e) {
  var a = t.pending;
  if (((t.pending = null), a !== null)) {
    a = a.next;
    do ((l.status = "rejected"), (l.reason = e), ed(l), (l = l.next));
    while (l !== a);
  }
  t.action = null;
}
function ed(t) {
  t = t.listeners;
  for (var l = 0; l < t.length; l++) (0, t[l])();
}
function ad(t, l) {
  return l;
}
function js(t, l) {
  if (G) {
    var e = J.formState;
    if (e !== null) {
      t: {
        var a = N;
        if (G) {
          if ($) {
            l: {
              for (var u = $, n = Wt; u.nodeType !== 8; ) {
                if (!n) {
                  u = null;
                  break l;
                }
                if (((u = Ft(u.nextSibling)), u === null)) {
                  u = null;
                  break l;
                }
              }
              ((n = u.data), (u = n === "F!" || n === "F" ? u : null));
            }
            if (u) {
              (($ = Ft(u.nextSibling)), (a = u.data === "F!"));
              break t;
            }
          }
          Pl(a);
        }
        a = !1;
      }
      a && (l = e[0]);
    }
  }
  return (
    (e = bt()),
    (e.memoizedState = e.baseState = l),
    (a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ad,
      lastRenderedState: l,
    }),
    (e.queue = a),
    (e = pd.bind(null, N, a)),
    (a.dispatch = e),
    (a = yc(!1)),
    (n = Mf.bind(null, N, !1, a.queue)),
    (a = bt()),
    (u = { state: l, dispatch: null, action: t, pending: null }),
    (a.queue = u),
    (e = Lm.bind(null, N, u, n, e)),
    (u.dispatch = e),
    (a.memoizedState = t),
    [l, e, !1]
  );
}
function Rs(t) {
  var l = ut();
  return ud(l, K, t);
}
function ud(t, l, e) {
  if (
    ((l = Tf(t, l, ad)[0]),
    (t = Ku(zl)[0]),
    typeof l == "object" && l !== null && typeof l.then == "function")
  )
    try {
      var a = mu(l);
    } catch (i) {
      throw i === ha ? Qn : i;
    }
  else a = l;
  l = ut();
  var u = l.queue,
    n = u.dispatch;
  return (
    e !== l.memoizedState &&
      ((N.flags |= 2048),
      ea(9, { destroy: void 0 }, Xm.bind(null, u, e), null)),
    [a, n, t]
  );
}
function Xm(t, l) {
  t.action = l;
}
function Hs(t) {
  var l = ut(),
    e = K;
  if (e !== null) return ud(l, e, t);
  (ut(), (l = l.memoizedState), (e = ut()));
  var a = e.queue.dispatch;
  return ((e.memoizedState = t), [l, a, !1]);
}
function ea(t, l, e, a) {
  return (
    (t = { tag: t, create: e, deps: a, inst: l, next: null }),
    (l = N.updateQueue),
    l === null && ((l = Zn()), (N.updateQueue = l)),
    (e = l.lastEffect),
    e === null
      ? (l.lastEffect = t.next = t)
      : ((a = e.next), (e.next = t), (t.next = a), (l.lastEffect = t)),
    t
  );
}
function nd() {
  return ut().memoizedState;
}
function Ju(t, l, e, a) {
  var u = bt();
  ((N.flags |= t),
    (u.memoizedState = ea(
      1 | l,
      { destroy: void 0 },
      e,
      a === void 0 ? null : a,
    )));
}
function Kn(t, l, e, a) {
  var u = ut();
  a = a === void 0 ? null : a;
  var n = u.memoizedState.inst;
  K !== null && a !== null && gf(a, K.memoizedState.deps)
    ? (u.memoizedState = ea(l, n, e, a))
    : ((N.flags |= t), (u.memoizedState = ea(1 | l, n, e, a)));
}
function Bs(t, l) {
  Ju(8390656, 8, t, l);
}
function Af(t, l) {
  Kn(2048, 8, t, l);
}
function Qm(t) {
  N.flags |= 4;
  var l = N.updateQueue;
  if (l === null) ((l = Zn()), (N.updateQueue = l), (l.events = [t]));
  else {
    var e = l.events;
    e === null ? (l.events = [t]) : e.push(t);
  }
}
function id(t) {
  var l = ut().memoizedState;
  return (
    Qm({ ref: l, nextImpl: t }),
    function () {
      if (L & 2) throw Error(p(440));
      return l.impl.apply(void 0, arguments);
    }
  );
}
function cd(t, l) {
  return Kn(4, 2, t, l);
}
function fd(t, l) {
  return Kn(4, 4, t, l);
}
function sd(t, l) {
  if (typeof l == "function") {
    t = t();
    var e = l(t);
    return function () {
      typeof e == "function" ? e() : l(null);
    };
  }
  if (l != null)
    return (
      (t = t()),
      (l.current = t),
      function () {
        l.current = null;
      }
    );
}
function od(t, l, e) {
  ((e = e != null ? e.concat([t]) : null), Kn(4, 4, sd.bind(null, l, t), e));
}
function _f() {}
function rd(t, l) {
  var e = ut();
  l = l === void 0 ? null : l;
  var a = e.memoizedState;
  return l !== null && gf(l, a[1]) ? a[0] : ((e.memoizedState = [t, l]), t);
}
function dd(t, l) {
  var e = ut();
  l = l === void 0 ? null : l;
  var a = e.memoizedState;
  if (l !== null && gf(l, a[1])) return a[0];
  if (((a = t()), pe)) {
    Bl(!0);
    try {
      t();
    } finally {
      Bl(!1);
    }
  }
  return ((e.memoizedState = [a, l]), a);
}
function Of(t, l, e) {
  return e === void 0 || (El & 1073741824 && !(q & 261930))
    ? (t.memoizedState = l)
    : ((t.memoizedState = e), (t = th()), (N.lanes |= t), (le |= t), e);
}
function hd(t, l, e, a) {
  return Gt(e, l)
    ? e
    : la.current !== null
      ? ((t = Of(t, e, a)), Gt(t, l) || (ft = !0), t)
      : !(El & 42) || (El & 1073741824 && !(q & 261930))
        ? ((ft = !0), (t.memoizedState = e))
        : ((t = th()), (N.lanes |= t), (le |= t), l);
}
function md(t, l, e, a, u) {
  var n = X.p;
  X.p = n !== 0 && 8 > n ? n : 8;
  var i = M.T,
    c = {};
  ((M.T = c), Mf(t, !1, l, e));
  try {
    var f = u(),
      s = M.S;
    if (
      (s !== null && s(c, f),
      f !== null && typeof f == "object" && typeof f.then == "function")
    ) {
      var v = Ym(f, a);
      Ga(t, l, v, qt(t));
    } else Ga(t, l, a, qt(t));
  } catch (h) {
    Ga(t, l, { then: function () {}, status: "rejected", reason: h }, qt());
  } finally {
    ((X.p = n),
      i !== null && c.types !== null && (i.types = c.types),
      (M.T = i));
  }
}
function Zm() {}
function Sc(t, l, e, a) {
  if (t.tag !== 5) throw Error(p(476));
  var u = vd(t).queue;
  md(
    t,
    u,
    l,
    re,
    e === null
      ? Zm
      : function () {
          return (yd(t), e(a));
        },
  );
}
function vd(t) {
  var l = t.memoizedState;
  if (l !== null) return l;
  l = {
    memoizedState: re,
    baseState: re,
    baseQueue: null,
    queue: {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: zl,
      lastRenderedState: re,
    },
    next: null,
  };
  var e = {};
  return (
    (l.next = {
      memoizedState: e,
      baseState: e,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: zl,
        lastRenderedState: e,
      },
      next: null,
    }),
    (t.memoizedState = l),
    (t = t.alternate),
    t !== null && (t.memoizedState = l),
    l
  );
}
function yd(t) {
  var l = vd(t);
  (l.next === null && (l = t.alternate.memoizedState),
    Ga(t, l.next.queue, {}, qt()));
}
function xf() {
  return St(eu);
}
function gd() {
  return ut().memoizedState;
}
function Sd() {
  return ut().memoizedState;
}
function Vm(t) {
  for (var l = t.return; l !== null; ) {
    switch (l.tag) {
      case 24:
      case 3:
        var e = qt();
        t = Vl(e);
        var a = Kl(l, t, e);
        (a !== null && (Mt(a, l, e), Ba(a, l, e)),
          (l = { cache: df() }),
          (t.payload = l));
        return;
    }
    l = l.return;
  }
}
function Km(t, l, e) {
  var a = qt();
  ((e = {
    lane: a,
    revertLane: 0,
    gesture: null,
    action: e,
    hasEagerState: !1,
    eagerState: null,
    next: null,
  }),
    Jn(t)
      ? bd(l, e)
      : ((e = ff(t, l, e, a)), e !== null && (Mt(e, t, a), Ed(e, l, a))));
}
function pd(t, l, e) {
  var a = qt();
  Ga(t, l, e, a);
}
function Ga(t, l, e, a) {
  var u = {
    lane: a,
    revertLane: 0,
    gesture: null,
    action: e,
    hasEagerState: !1,
    eagerState: null,
    next: null,
  };
  if (Jn(t)) bd(l, u);
  else {
    var n = t.alternate;
    if (
      t.lanes === 0 &&
      (n === null || n.lanes === 0) &&
      ((n = l.lastRenderedReducer), n !== null)
    )
      try {
        var i = l.lastRenderedState,
          c = n(i, e);
        if (((u.hasEagerState = !0), (u.eagerState = c), Gt(c, i)))
          return (Xn(t, l, u, 0), J === null && Ln(), !1);
      } catch {
      } finally {
      }
    if (((e = ff(t, l, u, a)), e !== null))
      return (Mt(e, t, a), Ed(e, l, a), !0);
  }
  return !1;
}
function Mf(t, l, e, a) {
  if (
    ((a = {
      lane: 2,
      revertLane: Yf(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Jn(t))
  ) {
    if (l) throw Error(p(479));
  } else ((l = ff(t, e, a, 2)), l !== null && Mt(l, t, 2));
}
function Jn(t) {
  var l = t.alternate;
  return t === N || (l !== null && l === N);
}
function bd(t, l) {
  $e = mn = !0;
  var e = t.pending;
  (e === null ? (l.next = l) : ((l.next = e.next), (e.next = l)),
    (t.pending = l));
}
function Ed(t, l, e) {
  if (e & 4194048) {
    var a = l.lanes;
    ((a &= t.pendingLanes), (e |= a), (l.lanes = e), ir(t, e));
  }
}
var Pa = {
  readContext: St,
  use: Vn,
  useCallback: tt,
  useContext: tt,
  useEffect: tt,
  useImperativeHandle: tt,
  useLayoutEffect: tt,
  useInsertionEffect: tt,
  useMemo: tt,
  useReducer: tt,
  useRef: tt,
  useState: tt,
  useDebugValue: tt,
  useDeferredValue: tt,
  useTransition: tt,
  useSyncExternalStore: tt,
  useId: tt,
  useHostTransitionStatus: tt,
  useFormState: tt,
  useActionState: tt,
  useOptimistic: tt,
  useMemoCache: tt,
  useCacheRefresh: tt,
};
Pa.useEffectEvent = tt;
var zd = {
    readContext: St,
    use: Vn,
    useCallback: function (t, l) {
      return ((bt().memoizedState = [t, l === void 0 ? null : l]), t);
    },
    useContext: St,
    useEffect: Bs,
    useImperativeHandle: function (t, l, e) {
      ((e = e != null ? e.concat([t]) : null),
        Ju(4194308, 4, sd.bind(null, l, t), e));
    },
    useLayoutEffect: function (t, l) {
      return Ju(4194308, 4, t, l);
    },
    useInsertionEffect: function (t, l) {
      Ju(4, 2, t, l);
    },
    useMemo: function (t, l) {
      var e = bt();
      l = l === void 0 ? null : l;
      var a = t();
      if (pe) {
        Bl(!0);
        try {
          t();
        } finally {
          Bl(!1);
        }
      }
      return ((e.memoizedState = [a, l]), a);
    },
    useReducer: function (t, l, e) {
      var a = bt();
      if (e !== void 0) {
        var u = e(l);
        if (pe) {
          Bl(!0);
          try {
            e(l);
          } finally {
            Bl(!1);
          }
        }
      } else u = l;
      return (
        (a.memoizedState = a.baseState = u),
        (t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: u,
        }),
        (a.queue = t),
        (t = t.dispatch = Km.bind(null, N, t)),
        [a.memoizedState, t]
      );
    },
    useRef: function (t) {
      var l = bt();
      return ((t = { current: t }), (l.memoizedState = t));
    },
    useState: function (t) {
      t = yc(t);
      var l = t.queue,
        e = pd.bind(null, N, l);
      return ((l.dispatch = e), [t.memoizedState, e]);
    },
    useDebugValue: _f,
    useDeferredValue: function (t, l) {
      var e = bt();
      return Of(e, t, l);
    },
    useTransition: function () {
      var t = yc(!1);
      return (
        (t = md.bind(null, N, t.queue, !0, !1)),
        (bt().memoizedState = t),
        [!1, t]
      );
    },
    useSyncExternalStore: function (t, l, e) {
      var a = N,
        u = bt();
      if (G) {
        if (e === void 0) throw Error(p(407));
        e = e();
      } else {
        if (((e = l()), J === null)) throw Error(p(349));
        q & 127 || $r(a, l, e);
      }
      u.memoizedState = e;
      var n = { value: e, getSnapshot: l };
      return (
        (u.queue = n),
        Bs(kr.bind(null, a, n, t), [t]),
        (a.flags |= 2048),
        ea(9, { destroy: void 0 }, Fr.bind(null, a, n, e, l), null),
        e
      );
    },
    useId: function () {
      var t = bt(),
        l = J.identifierPrefix;
      if (G) {
        var e = el,
          a = ll;
        ((e = (a & ~(1 << (32 - Yt(a) - 1))).toString(32) + e),
          (l = "_" + l + "R_" + e),
          (e = vn++),
          0 < e && (l += "H" + e.toString(32)),
          (l += "_"));
      } else ((e = qm++), (l = "_" + l + "r_" + e.toString(32) + "_"));
      return (t.memoizedState = l);
    },
    useHostTransitionStatus: xf,
    useFormState: js,
    useActionState: js,
    useOptimistic: function (t) {
      var l = bt();
      l.memoizedState = l.baseState = t;
      var e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (l.queue = e),
        (l = Mf.bind(null, N, !0, e)),
        (e.dispatch = l),
        [t, l]
      );
    },
    useMemoCache: zf,
    useCacheRefresh: function () {
      return (bt().memoizedState = Vm.bind(null, N));
    },
    useEffectEvent: function (t) {
      var l = bt(),
        e = { impl: t };
      return (
        (l.memoizedState = e),
        function () {
          if (L & 2) throw Error(p(440));
          return e.impl.apply(void 0, arguments);
        }
      );
    },
  },
  Uf = {
    readContext: St,
    use: Vn,
    useCallback: rd,
    useContext: St,
    useEffect: Af,
    useImperativeHandle: od,
    useInsertionEffect: cd,
    useLayoutEffect: fd,
    useMemo: dd,
    useReducer: Ku,
    useRef: nd,
    useState: function () {
      return Ku(zl);
    },
    useDebugValue: _f,
    useDeferredValue: function (t, l) {
      var e = ut();
      return hd(e, K.memoizedState, t, l);
    },
    useTransition: function () {
      var t = Ku(zl)[0],
        l = ut().memoizedState;
      return [typeof t == "boolean" ? t : mu(t), l];
    },
    useSyncExternalStore: Wr,
    useId: gd,
    useHostTransitionStatus: xf,
    useFormState: Rs,
    useActionState: Rs,
    useOptimistic: function (t, l) {
      var e = ut();
      return td(e, K, t, l);
    },
    useMemoCache: zf,
    useCacheRefresh: Sd,
  };
Uf.useEffectEvent = id;
var Td = {
  readContext: St,
  use: Vn,
  useCallback: rd,
  useContext: St,
  useEffect: Af,
  useImperativeHandle: od,
  useInsertionEffect: cd,
  useLayoutEffect: fd,
  useMemo: dd,
  useReducer: Ei,
  useRef: nd,
  useState: function () {
    return Ei(zl);
  },
  useDebugValue: _f,
  useDeferredValue: function (t, l) {
    var e = ut();
    return K === null ? Of(e, t, l) : hd(e, K.memoizedState, t, l);
  },
  useTransition: function () {
    var t = Ei(zl)[0],
      l = ut().memoizedState;
    return [typeof t == "boolean" ? t : mu(t), l];
  },
  useSyncExternalStore: Wr,
  useId: gd,
  useHostTransitionStatus: xf,
  useFormState: Hs,
  useActionState: Hs,
  useOptimistic: function (t, l) {
    var e = ut();
    return K !== null
      ? td(e, K, t, l)
      : ((e.baseState = t), [t, e.queue.dispatch]);
  },
  useMemoCache: zf,
  useCacheRefresh: Sd,
};
Td.useEffectEvent = id;
function zi(t, l, e, a) {
  ((l = t.memoizedState),
    (e = e(a, l)),
    (e = e == null ? l : k({}, l, e)),
    (t.memoizedState = e),
    t.lanes === 0 && (t.updateQueue.baseState = e));
}
var pc = {
  enqueueSetState: function (t, l, e) {
    t = t._reactInternals;
    var a = qt(),
      u = Vl(a);
    ((u.payload = l),
      e != null && (u.callback = e),
      (l = Kl(t, u, a)),
      l !== null && (Mt(l, t, a), Ba(l, t, a)));
  },
  enqueueReplaceState: function (t, l, e) {
    t = t._reactInternals;
    var a = qt(),
      u = Vl(a);
    ((u.tag = 1),
      (u.payload = l),
      e != null && (u.callback = e),
      (l = Kl(t, u, a)),
      l !== null && (Mt(l, t, a), Ba(l, t, a)));
  },
  enqueueForceUpdate: function (t, l) {
    t = t._reactInternals;
    var e = qt(),
      a = Vl(e);
    ((a.tag = 2),
      l != null && (a.callback = l),
      (l = Kl(t, a, e)),
      l !== null && (Mt(l, t, e), Ba(l, t, e)));
  },
};
function Ys(t, l, e, a, u, n, i) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == "function"
      ? t.shouldComponentUpdate(a, n, i)
      : l.prototype && l.prototype.isPureReactComponent
        ? !Wa(e, a) || !Wa(u, n)
        : !0
  );
}
function qs(t, l, e, a) {
  ((t = l.state),
    typeof l.componentWillReceiveProps == "function" &&
      l.componentWillReceiveProps(e, a),
    typeof l.UNSAFE_componentWillReceiveProps == "function" &&
      l.UNSAFE_componentWillReceiveProps(e, a),
    l.state !== t && pc.enqueueReplaceState(l, l.state, null));
}
function be(t, l) {
  var e = l;
  if ("ref" in l) {
    e = {};
    for (var a in l) a !== "ref" && (e[a] = l[a]);
  }
  if ((t = t.defaultProps)) {
    e === l && (e = k({}, e));
    for (var u in t) e[u] === void 0 && (e[u] = t[u]);
  }
  return e;
}
function Ad(t) {
  cn(t);
}
function _d(t) {
  console.error(t);
}
function Od(t) {
  cn(t);
}
function yn(t, l) {
  try {
    var e = t.onUncaughtError;
    e(l.value, { componentStack: l.stack });
  } catch (a) {
    setTimeout(function () {
      throw a;
    });
  }
}
function Gs(t, l, e) {
  try {
    var a = t.onCaughtError;
    a(e.value, {
      componentStack: e.stack,
      errorBoundary: l.tag === 1 ? l.stateNode : null,
    });
  } catch (u) {
    setTimeout(function () {
      throw u;
    });
  }
}
function bc(t, l, e) {
  return (
    (e = Vl(e)),
    (e.tag = 3),
    (e.payload = { element: null }),
    (e.callback = function () {
      yn(t, l);
    }),
    e
  );
}
function xd(t) {
  return ((t = Vl(t)), (t.tag = 3), t);
}
function Md(t, l, e, a) {
  var u = e.type.getDerivedStateFromError;
  if (typeof u == "function") {
    var n = a.value;
    ((t.payload = function () {
      return u(n);
    }),
      (t.callback = function () {
        Gs(l, e, a);
      }));
  }
  var i = e.stateNode;
  i !== null &&
    typeof i.componentDidCatch == "function" &&
    (t.callback = function () {
      (Gs(l, e, a),
        typeof u != "function" &&
          (Jl === null ? (Jl = new Set([this])) : Jl.add(this)));
      var c = a.stack;
      this.componentDidCatch(a.value, { componentStack: c !== null ? c : "" });
    });
}
function Jm(t, l, e, a, u) {
  if (
    ((e.flags |= 32768),
    a !== null && typeof a == "object" && typeof a.then == "function")
  ) {
    if (
      ((l = e.alternate),
      l !== null && da(l, e, u, !0),
      (e = Lt.current),
      e !== null)
    ) {
      switch (e.tag) {
        case 31:
        case 13:
          return (
            $t === null ? En() : e.alternate === null && lt === 0 && (lt = 3),
            (e.flags &= -257),
            (e.flags |= 65536),
            (e.lanes = u),
            a === rn
              ? (e.flags |= 16384)
              : ((l = e.updateQueue),
                l === null ? (e.updateQueue = new Set([a])) : l.add(a),
                ji(t, a, u)),
            !1
          );
        case 22:
          return (
            (e.flags |= 65536),
            a === rn
              ? (e.flags |= 16384)
              : ((l = e.updateQueue),
                l === null
                  ? ((l = {
                      transitions: null,
                      markerInstances: null,
                      retryQueue: new Set([a]),
                    }),
                    (e.updateQueue = l))
                  : ((e = l.retryQueue),
                    e === null ? (l.retryQueue = new Set([a])) : e.add(a)),
                ji(t, a, u)),
            !1
          );
      }
      throw Error(p(435, e.tag));
    }
    return (ji(t, a, u), En(), !1);
  }
  if (G)
    return (
      (l = Lt.current),
      l !== null
        ? (!(l.flags & 65536) && (l.flags |= 256),
          (l.flags |= 65536),
          (l.lanes = u),
          a !== cc && ((t = Error(p(422), { cause: a })), Fa(wt(t, e))))
        : (a !== cc && ((l = Error(p(423), { cause: a })), Fa(wt(l, e))),
          (t = t.current.alternate),
          (t.flags |= 65536),
          (u &= -u),
          (t.lanes |= u),
          (a = wt(a, e)),
          (u = bc(t.stateNode, a, u)),
          bi(t, u),
          lt !== 4 && (lt = 2)),
      !1
    );
  var n = Error(p(520), { cause: a });
  if (
    ((n = wt(n, e)),
    Qa === null ? (Qa = [n]) : Qa.push(n),
    lt !== 4 && (lt = 2),
    l === null)
  )
    return !0;
  ((a = wt(a, e)), (e = l));
  do {
    switch (e.tag) {
      case 3:
        return (
          (e.flags |= 65536),
          (t = u & -u),
          (e.lanes |= t),
          (t = bc(e.stateNode, a, t)),
          bi(e, t),
          !1
        );
      case 1:
        if (
          ((l = e.type),
          (n = e.stateNode),
          (e.flags & 128) === 0 &&
            (typeof l.getDerivedStateFromError == "function" ||
              (n !== null &&
                typeof n.componentDidCatch == "function" &&
                (Jl === null || !Jl.has(n)))))
        )
          return (
            (e.flags |= 65536),
            (u &= -u),
            (e.lanes |= u),
            (u = xd(u)),
            Md(u, t, e, a),
            bi(e, u),
            !1
          );
    }
    e = e.return;
  } while (e !== null);
  return !1;
}
var Df = Error(p(461)),
  ft = !1;
function vt(t, l, e, a) {
  l.child = t === null ? Qr(l, null, e, a) : Se(l, t.child, e, a);
}
function Ls(t, l, e, a, u) {
  e = e.render;
  var n = l.ref;
  if ("ref" in a) {
    var i = {};
    for (var c in a) c !== "ref" && (i[c] = a[c]);
  } else i = a;
  return (
    ge(l),
    (a = Sf(t, l, e, i, n, u)),
    (c = pf()),
    t !== null && !ft
      ? (bf(t, l, u), Tl(t, l, u))
      : (G && c && of(l), (l.flags |= 1), vt(t, l, a, u), l.child)
  );
}
function Xs(t, l, e, a, u) {
  if (t === null) {
    var n = e.type;
    return typeof n == "function" &&
      !sf(n) &&
      n.defaultProps === void 0 &&
      e.compare === null
      ? ((l.tag = 15), (l.type = n), Ud(t, l, n, a, u))
      : ((t = Zu(e.type, null, a, l, l.mode, u)),
        (t.ref = l.ref),
        (t.return = l),
        (l.child = t));
  }
  if (((n = t.child), !Nf(t, u))) {
    var i = n.memoizedProps;
    if (
      ((e = e.compare), (e = e !== null ? e : Wa), e(i, a) && t.ref === l.ref)
    )
      return Tl(t, l, u);
  }
  return (
    (l.flags |= 1),
    (t = gl(n, a)),
    (t.ref = l.ref),
    (t.return = l),
    (l.child = t)
  );
}
function Ud(t, l, e, a, u) {
  if (t !== null) {
    var n = t.memoizedProps;
    if (Wa(n, a) && t.ref === l.ref)
      if (((ft = !1), (l.pendingProps = a = n), Nf(t, u)))
        t.flags & 131072 && (ft = !0);
      else return ((l.lanes = t.lanes), Tl(t, l, u));
  }
  return Ec(t, l, e, a, u);
}
function Dd(t, l, e, a) {
  var u = a.children,
    n = t !== null ? t.memoizedState : null;
  if (
    (t === null &&
      l.stateNode === null &&
      (l.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
    a.mode === "hidden")
  ) {
    if (l.flags & 128) {
      if (((n = n !== null ? n.baseLanes | e : e), t !== null)) {
        for (a = l.child = t.child, u = 0; a !== null; )
          ((u = u | a.lanes | a.childLanes), (a = a.sibling));
        a = u & ~n;
      } else ((a = 0), (l.child = null));
      return Qs(t, l, n, e, a);
    }
    if (e & 536870912)
      ((l.memoizedState = { baseLanes: 0, cachePool: null }),
        t !== null && Vu(l, n !== null ? n.cachePool : null),
        n !== null ? Ds(l, n) : mc(),
        Kr(l));
    else
      return (
        (a = l.lanes = 536870912),
        Qs(t, l, n !== null ? n.baseLanes | e : e, e, a)
      );
  } else
    n !== null
      ? (Vu(l, n.cachePool), Ds(l, n), Rl(), (l.memoizedState = null))
      : (t !== null && Vu(l, null), mc(), Rl());
  return (vt(t, l, u, e), l.child);
}
function Ua(t, l) {
  return (
    (t !== null && t.tag === 22) ||
      l.stateNode !== null ||
      (l.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
    l.sibling
  );
}
function Qs(t, l, e, a, u) {
  var n = hf();
  return (
    (n = n === null ? null : { parent: ct._currentValue, pool: n }),
    (l.memoizedState = { baseLanes: e, cachePool: n }),
    t !== null && Vu(l, null),
    mc(),
    Kr(l),
    t !== null && da(t, l, a, !0),
    (l.childLanes = u),
    null
  );
}
function wu(t, l) {
  return (
    (l = gn({ mode: l.mode, children: l.children }, t.mode)),
    (l.ref = t.ref),
    (t.child = l),
    (l.return = t),
    l
  );
}
function Zs(t, l, e) {
  return (
    Se(l, t.child, null, e),
    (t = wu(l, l.pendingProps)),
    (t.flags |= 2),
    Ct(l),
    (l.memoizedState = null),
    t
  );
}
function wm(t, l, e) {
  var a = l.pendingProps,
    u = (l.flags & 128) !== 0;
  if (((l.flags &= -129), t === null)) {
    if (G) {
      if (a.mode === "hidden")
        return ((t = wu(l, a)), (l.lanes = 536870912), Ua(null, t));
      if (
        (vc(l),
        (t = $)
          ? ((t = zh(t, Wt)),
            (t = t !== null && t.data === "&" ? t : null),
            t !== null &&
              ((l.memoizedState = {
                dehydrated: t,
                treeContext: Il !== null ? { id: ll, overflow: el } : null,
                retryLane: 536870912,
                hydrationErrors: null,
              }),
              (e = Hr(t)),
              (e.return = l),
              (l.child = e),
              (gt = l),
              ($ = null)))
          : (t = null),
        t === null)
      )
        throw Pl(l);
      return ((l.lanes = 536870912), null);
    }
    return wu(l, a);
  }
  var n = t.memoizedState;
  if (n !== null) {
    var i = n.dehydrated;
    if ((vc(l), u))
      if (l.flags & 256) ((l.flags &= -257), (l = Zs(t, l, e)));
      else if (l.memoizedState !== null)
        ((l.child = t.child), (l.flags |= 128), (l = null));
      else throw Error(p(558));
    else if ((ft || da(t, l, e, !1), (u = (e & t.childLanes) !== 0), ft || u)) {
      if (
        ((a = J), a !== null && ((i = cr(a, e)), i !== 0 && i !== n.retryLane))
      )
        throw ((n.retryLane = i), Ae(t, i), Mt(a, t, i), Df);
      (En(), (l = Zs(t, l, e)));
    } else
      ((t = n.treeContext),
        ($ = Ft(i.nextSibling)),
        (gt = l),
        (G = !0),
        (Zl = null),
        (Wt = !1),
        t !== null && Yr(l, t),
        (l = wu(l, a)),
        (l.flags |= 4096));
    return l;
  }
  return (
    (t = gl(t.child, { mode: a.mode, children: a.children })),
    (t.ref = l.ref),
    (l.child = t),
    (t.return = l),
    t
  );
}
function Wu(t, l) {
  var e = l.ref;
  if (e === null) t !== null && t.ref !== null && (l.flags |= 4194816);
  else {
    if (typeof e != "function" && typeof e != "object") throw Error(p(284));
    (t === null || t.ref !== e) && (l.flags |= 4194816);
  }
}
function Ec(t, l, e, a, u) {
  return (
    ge(l),
    (e = Sf(t, l, e, a, void 0, u)),
    (a = pf()),
    t !== null && !ft
      ? (bf(t, l, u), Tl(t, l, u))
      : (G && a && of(l), (l.flags |= 1), vt(t, l, e, u), l.child)
  );
}
function Vs(t, l, e, a, u, n) {
  return (
    ge(l),
    (l.updateQueue = null),
    (e = wr(l, a, e, u)),
    Jr(t),
    (a = pf()),
    t !== null && !ft
      ? (bf(t, l, n), Tl(t, l, n))
      : (G && a && of(l), (l.flags |= 1), vt(t, l, e, n), l.child)
  );
}
function Ks(t, l, e, a, u) {
  if ((ge(l), l.stateNode === null)) {
    var n = Le,
      i = e.contextType;
    (typeof i == "object" && i !== null && (n = St(i)),
      (n = new e(a, n)),
      (l.memoizedState =
        n.state !== null && n.state !== void 0 ? n.state : null),
      (n.updater = pc),
      (l.stateNode = n),
      (n._reactInternals = l),
      (n = l.stateNode),
      (n.props = a),
      (n.state = l.memoizedState),
      (n.refs = {}),
      vf(l),
      (i = e.contextType),
      (n.context = typeof i == "object" && i !== null ? St(i) : Le),
      (n.state = l.memoizedState),
      (i = e.getDerivedStateFromProps),
      typeof i == "function" && (zi(l, e, i, a), (n.state = l.memoizedState)),
      typeof e.getDerivedStateFromProps == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function" ||
        (typeof n.UNSAFE_componentWillMount != "function" &&
          typeof n.componentWillMount != "function") ||
        ((i = n.state),
        typeof n.componentWillMount == "function" && n.componentWillMount(),
        typeof n.UNSAFE_componentWillMount == "function" &&
          n.UNSAFE_componentWillMount(),
        i !== n.state && pc.enqueueReplaceState(n, n.state, null),
        qa(l, a, n, u),
        Ya(),
        (n.state = l.memoizedState)),
      typeof n.componentDidMount == "function" && (l.flags |= 4194308),
      (a = !0));
  } else if (t === null) {
    n = l.stateNode;
    var c = l.memoizedProps,
      f = be(e, c);
    n.props = f;
    var s = n.context,
      v = e.contextType;
    ((i = Le), typeof v == "object" && v !== null && (i = St(v)));
    var h = e.getDerivedStateFromProps;
    ((v =
      typeof h == "function" || typeof n.getSnapshotBeforeUpdate == "function"),
      (c = l.pendingProps !== c),
      v ||
        (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
          typeof n.componentWillReceiveProps != "function") ||
        ((c || s !== i) && qs(l, n, a, i)),
      (Nl = !1));
    var r = l.memoizedState;
    ((n.state = r),
      qa(l, a, n, u),
      Ya(),
      (s = l.memoizedState),
      c || r !== s || Nl
        ? (typeof h == "function" && (zi(l, e, h, a), (s = l.memoizedState)),
          (f = Nl || Ys(l, e, f, a, r, s, i))
            ? (v ||
                (typeof n.UNSAFE_componentWillMount != "function" &&
                  typeof n.componentWillMount != "function") ||
                (typeof n.componentWillMount == "function" &&
                  n.componentWillMount(),
                typeof n.UNSAFE_componentWillMount == "function" &&
                  n.UNSAFE_componentWillMount()),
              typeof n.componentDidMount == "function" && (l.flags |= 4194308))
            : (typeof n.componentDidMount == "function" && (l.flags |= 4194308),
              (l.memoizedProps = a),
              (l.memoizedState = s)),
          (n.props = a),
          (n.state = s),
          (n.context = i),
          (a = f))
        : (typeof n.componentDidMount == "function" && (l.flags |= 4194308),
          (a = !1)));
  } else {
    ((n = l.stateNode),
      dc(t, l),
      (i = l.memoizedProps),
      (v = be(e, i)),
      (n.props = v),
      (h = l.pendingProps),
      (r = n.context),
      (s = e.contextType),
      (f = Le),
      typeof s == "object" && s !== null && (f = St(s)),
      (c = e.getDerivedStateFromProps),
      (s =
        typeof c == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function") ||
        (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
          typeof n.componentWillReceiveProps != "function") ||
        ((i !== h || r !== f) && qs(l, n, a, f)),
      (Nl = !1),
      (r = l.memoizedState),
      (n.state = r),
      qa(l, a, n, u),
      Ya());
    var y = l.memoizedState;
    i !== h ||
    r !== y ||
    Nl ||
    (t !== null && t.dependencies !== null && on(t.dependencies))
      ? (typeof c == "function" && (zi(l, e, c, a), (y = l.memoizedState)),
        (v =
          Nl ||
          Ys(l, e, v, a, r, y, f) ||
          (t !== null && t.dependencies !== null && on(t.dependencies)))
          ? (s ||
              (typeof n.UNSAFE_componentWillUpdate != "function" &&
                typeof n.componentWillUpdate != "function") ||
              (typeof n.componentWillUpdate == "function" &&
                n.componentWillUpdate(a, y, f),
              typeof n.UNSAFE_componentWillUpdate == "function" &&
                n.UNSAFE_componentWillUpdate(a, y, f)),
            typeof n.componentDidUpdate == "function" && (l.flags |= 4),
            typeof n.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024))
          : (typeof n.componentDidUpdate != "function" ||
              (i === t.memoizedProps && r === t.memoizedState) ||
              (l.flags |= 4),
            typeof n.getSnapshotBeforeUpdate != "function" ||
              (i === t.memoizedProps && r === t.memoizedState) ||
              (l.flags |= 1024),
            (l.memoizedProps = a),
            (l.memoizedState = y)),
        (n.props = a),
        (n.state = y),
        (n.context = f),
        (a = v))
      : (typeof n.componentDidUpdate != "function" ||
          (i === t.memoizedProps && r === t.memoizedState) ||
          (l.flags |= 4),
        typeof n.getSnapshotBeforeUpdate != "function" ||
          (i === t.memoizedProps && r === t.memoizedState) ||
          (l.flags |= 1024),
        (a = !1));
  }
  return (
    (n = a),
    Wu(t, l),
    (a = (l.flags & 128) !== 0),
    n || a
      ? ((n = l.stateNode),
        (e =
          a && typeof e.getDerivedStateFromError != "function"
            ? null
            : n.render()),
        (l.flags |= 1),
        t !== null && a
          ? ((l.child = Se(l, t.child, null, u)), (l.child = Se(l, null, e, u)))
          : vt(t, l, e, u),
        (l.memoizedState = n.state),
        (t = l.child))
      : (t = Tl(t, l, u)),
    t
  );
}
function Js(t, l, e, a) {
  return (ye(), (l.flags |= 256), vt(t, l, e, a), l.child);
}
var Ti = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0,
  hydrationErrors: null,
};
function Ai(t) {
  return { baseLanes: t, cachePool: Gr() };
}
function _i(t, l, e) {
  return ((t = t !== null ? t.childLanes & ~e : 0), l && (t |= Rt), t);
}
function Nd(t, l, e) {
  var a = l.pendingProps,
    u = !1,
    n = (l.flags & 128) !== 0,
    i;
  if (
    ((i = n) ||
      (i =
        t !== null && t.memoizedState === null ? !1 : (at.current & 2) !== 0),
    i && ((u = !0), (l.flags &= -129)),
    (i = (l.flags & 32) !== 0),
    (l.flags &= -33),
    t === null)
  ) {
    if (G) {
      if (
        (u ? jl(l) : Rl(),
        (t = $)
          ? ((t = zh(t, Wt)),
            (t = t !== null && t.data !== "&" ? t : null),
            t !== null &&
              ((l.memoizedState = {
                dehydrated: t,
                treeContext: Il !== null ? { id: ll, overflow: el } : null,
                retryLane: 536870912,
                hydrationErrors: null,
              }),
              (e = Hr(t)),
              (e.return = l),
              (l.child = e),
              (gt = l),
              ($ = null)))
          : (t = null),
        t === null)
      )
        throw Pl(l);
      return (Hc(t) ? (l.lanes = 32) : (l.lanes = 536870912), null);
    }
    var c = a.children;
    return (
      (a = a.fallback),
      u
        ? (Rl(),
          (u = l.mode),
          (c = gn({ mode: "hidden", children: c }, u)),
          (a = de(a, u, e, null)),
          (c.return = l),
          (a.return = l),
          (c.sibling = a),
          (l.child = c),
          (a = l.child),
          (a.memoizedState = Ai(e)),
          (a.childLanes = _i(t, i, e)),
          (l.memoizedState = Ti),
          Ua(null, a))
        : (jl(l), zc(l, c))
    );
  }
  var f = t.memoizedState;
  if (f !== null && ((c = f.dehydrated), c !== null)) {
    if (n)
      l.flags & 256
        ? (jl(l), (l.flags &= -257), (l = Oi(t, l, e)))
        : l.memoizedState !== null
          ? (Rl(), (l.child = t.child), (l.flags |= 128), (l = null))
          : (Rl(),
            (c = a.fallback),
            (u = l.mode),
            (a = gn({ mode: "visible", children: a.children }, u)),
            (c = de(c, u, e, null)),
            (c.flags |= 2),
            (a.return = l),
            (c.return = l),
            (a.sibling = c),
            (l.child = a),
            Se(l, t.child, null, e),
            (a = l.child),
            (a.memoizedState = Ai(e)),
            (a.childLanes = _i(t, i, e)),
            (l.memoizedState = Ti),
            (l = Ua(null, a)));
    else if ((jl(l), Hc(c))) {
      if (((i = c.nextSibling && c.nextSibling.dataset), i)) var s = i.dgst;
      ((i = s),
        (a = Error(p(419))),
        (a.stack = ""),
        (a.digest = i),
        Fa({ value: a, source: null, stack: null }),
        (l = Oi(t, l, e)));
    } else if (
      (ft || da(t, l, e, !1), (i = (e & t.childLanes) !== 0), ft || i)
    ) {
      if (
        ((i = J), i !== null && ((a = cr(i, e)), a !== 0 && a !== f.retryLane))
      )
        throw ((f.retryLane = a), Ae(t, a), Mt(i, t, a), Df);
      (Rc(c) || En(), (l = Oi(t, l, e)));
    } else
      Rc(c)
        ? ((l.flags |= 192), (l.child = t.child), (l = null))
        : ((t = f.treeContext),
          ($ = Ft(c.nextSibling)),
          (gt = l),
          (G = !0),
          (Zl = null),
          (Wt = !1),
          t !== null && Yr(l, t),
          (l = zc(l, a.children)),
          (l.flags |= 4096));
    return l;
  }
  return u
    ? (Rl(),
      (c = a.fallback),
      (u = l.mode),
      (f = t.child),
      (s = f.sibling),
      (a = gl(f, { mode: "hidden", children: a.children })),
      (a.subtreeFlags = f.subtreeFlags & 65011712),
      s !== null ? (c = gl(s, c)) : ((c = de(c, u, e, null)), (c.flags |= 2)),
      (c.return = l),
      (a.return = l),
      (a.sibling = c),
      (l.child = a),
      Ua(null, a),
      (a = l.child),
      (c = t.child.memoizedState),
      c === null
        ? (c = Ai(e))
        : ((u = c.cachePool),
          u !== null
            ? ((f = ct._currentValue),
              (u = u.parent !== f ? { parent: f, pool: f } : u))
            : (u = Gr()),
          (c = { baseLanes: c.baseLanes | e, cachePool: u })),
      (a.memoizedState = c),
      (a.childLanes = _i(t, i, e)),
      (l.memoizedState = Ti),
      Ua(t.child, a))
    : (jl(l),
      (e = t.child),
      (t = e.sibling),
      (e = gl(e, { mode: "visible", children: a.children })),
      (e.return = l),
      (e.sibling = null),
      t !== null &&
        ((i = l.deletions),
        i === null ? ((l.deletions = [t]), (l.flags |= 16)) : i.push(t)),
      (l.child = e),
      (l.memoizedState = null),
      e);
}
function zc(t, l) {
  return (
    (l = gn({ mode: "visible", children: l }, t.mode)),
    (l.return = t),
    (t.child = l)
  );
}
function gn(t, l) {
  return ((t = jt(22, t, null, l)), (t.lanes = 0), t);
}
function Oi(t, l, e) {
  return (
    Se(l, t.child, null, e),
    (t = zc(l, l.pendingProps.children)),
    (t.flags |= 2),
    (l.memoizedState = null),
    t
  );
}
function ws(t, l, e) {
  t.lanes |= l;
  var a = t.alternate;
  (a !== null && (a.lanes |= l), sc(t.return, l, e));
}
function xi(t, l, e, a, u, n) {
  var i = t.memoizedState;
  i === null
    ? (t.memoizedState = {
        isBackwards: l,
        rendering: null,
        renderingStartTime: 0,
        last: a,
        tail: e,
        tailMode: u,
        treeForkCount: n,
      })
    : ((i.isBackwards = l),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = a),
      (i.tail = e),
      (i.tailMode = u),
      (i.treeForkCount = n));
}
function Cd(t, l, e) {
  var a = l.pendingProps,
    u = a.revealOrder,
    n = a.tail;
  a = a.children;
  var i = at.current,
    c = (i & 2) !== 0;
  if (
    (c ? ((i = (i & 1) | 2), (l.flags |= 128)) : (i &= 1),
    w(at, i),
    vt(t, l, a, e),
    (a = G ? $a : 0),
    !c && t !== null && t.flags & 128)
  )
    t: for (t = l.child; t !== null; ) {
      if (t.tag === 13) t.memoizedState !== null && ws(t, e, l);
      else if (t.tag === 19) ws(t, e, l);
      else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === l) break t;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) break t;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
  switch (u) {
    case "forwards":
      for (e = l.child, u = null; e !== null; )
        ((t = e.alternate),
          t !== null && hn(t) === null && (u = e),
          (e = e.sibling));
      ((e = u),
        e === null
          ? ((u = l.child), (l.child = null))
          : ((u = e.sibling), (e.sibling = null)),
        xi(l, !1, u, e, n, a));
      break;
    case "backwards":
    case "unstable_legacy-backwards":
      for (e = null, u = l.child, l.child = null; u !== null; ) {
        if (((t = u.alternate), t !== null && hn(t) === null)) {
          l.child = u;
          break;
        }
        ((t = u.sibling), (u.sibling = e), (e = u), (u = t));
      }
      xi(l, !0, e, null, n, a);
      break;
    case "together":
      xi(l, !1, null, null, void 0, a);
      break;
    default:
      l.memoizedState = null;
  }
  return l.child;
}
function Tl(t, l, e) {
  if (
    (t !== null && (l.dependencies = t.dependencies),
    (le |= l.lanes),
    !(e & l.childLanes))
  )
    if (t !== null) {
      if ((da(t, l, e, !1), (e & l.childLanes) === 0)) return null;
    } else return null;
  if (t !== null && l.child !== t.child) throw Error(p(153));
  if (l.child !== null) {
    for (
      t = l.child, e = gl(t, t.pendingProps), l.child = e, e.return = l;
      t.sibling !== null;
    )
      ((t = t.sibling),
        (e = e.sibling = gl(t, t.pendingProps)),
        (e.return = l));
    e.sibling = null;
  }
  return l.child;
}
function Nf(t, l) {
  return t.lanes & l ? !0 : ((t = t.dependencies), !!(t !== null && on(t)));
}
function Wm(t, l, e) {
  switch (l.tag) {
    case 3:
      (en(l, l.stateNode.containerInfo),
        Cl(l, ct, t.memoizedState.cache),
        ye());
      break;
    case 27:
    case 5:
      Fi(l);
      break;
    case 4:
      en(l, l.stateNode.containerInfo);
      break;
    case 10:
      Cl(l, l.type, l.memoizedProps.value);
      break;
    case 31:
      if (l.memoizedState !== null) return ((l.flags |= 128), vc(l), null);
      break;
    case 13:
      var a = l.memoizedState;
      if (a !== null)
        return a.dehydrated !== null
          ? (jl(l), (l.flags |= 128), null)
          : e & l.child.childLanes
            ? Nd(t, l, e)
            : (jl(l), (t = Tl(t, l, e)), t !== null ? t.sibling : null);
      jl(l);
      break;
    case 19:
      var u = (t.flags & 128) !== 0;
      if (
        ((a = (e & l.childLanes) !== 0),
        a || (da(t, l, e, !1), (a = (e & l.childLanes) !== 0)),
        u)
      ) {
        if (a) return Cd(t, l, e);
        l.flags |= 128;
      }
      if (
        ((u = l.memoizedState),
        u !== null &&
          ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
        w(at, at.current),
        a)
      )
        break;
      return null;
    case 22:
      return ((l.lanes = 0), Dd(t, l, e, l.pendingProps));
    case 24:
      Cl(l, ct, t.memoizedState.cache);
  }
  return Tl(t, l, e);
}
function jd(t, l, e) {
  if (t !== null)
    if (t.memoizedProps !== l.pendingProps) ft = !0;
    else {
      if (!Nf(t, e) && !(l.flags & 128)) return ((ft = !1), Wm(t, l, e));
      ft = !!(t.flags & 131072);
    }
  else ((ft = !1), G && l.flags & 1048576 && Br(l, $a, l.index));
  switch (((l.lanes = 0), l.tag)) {
    case 16:
      t: {
        var a = l.pendingProps;
        if (((t = se(l.elementType)), (l.type = t), typeof t == "function"))
          sf(t)
            ? ((a = be(t, a)), (l.tag = 1), (l = Ks(null, l, t, a, e)))
            : ((l.tag = 0), (l = Ec(null, l, t, a, e)));
        else {
          if (t != null) {
            var u = t.$$typeof;
            if (u === Wc) {
              ((l.tag = 11), (l = Ls(null, l, t, a, e)));
              break t;
            } else if (u === $c) {
              ((l.tag = 14), (l = Xs(null, l, t, a, e)));
              break t;
            }
          }
          throw ((l = Wi(t) || t), Error(p(306, l, "")));
        }
      }
      return l;
    case 0:
      return Ec(t, l, l.type, l.pendingProps, e);
    case 1:
      return ((a = l.type), (u = be(a, l.pendingProps)), Ks(t, l, a, u, e));
    case 3:
      t: {
        if ((en(l, l.stateNode.containerInfo), t === null)) throw Error(p(387));
        a = l.pendingProps;
        var n = l.memoizedState;
        ((u = n.element), dc(t, l), qa(l, a, null, e));
        var i = l.memoizedState;
        if (
          ((a = i.cache),
          Cl(l, ct, a),
          a !== n.cache && oc(l, [ct], e, !0),
          Ya(),
          (a = i.element),
          n.isDehydrated)
        )
          if (
            ((n = { element: a, isDehydrated: !1, cache: i.cache }),
            (l.updateQueue.baseState = n),
            (l.memoizedState = n),
            l.flags & 256)
          ) {
            l = Js(t, l, a, e);
            break t;
          } else if (a !== u) {
            ((u = wt(Error(p(424)), l)), Fa(u), (l = Js(t, l, a, e)));
            break t;
          } else {
            switch (((t = l.stateNode.containerInfo), t.nodeType)) {
              case 9:
                t = t.body;
                break;
              default:
                t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
            }
            for (
              $ = Ft(t.firstChild),
                gt = l,
                G = !0,
                Zl = null,
                Wt = !0,
                e = Qr(l, null, a, e),
                l.child = e;
              e;
            )
              ((e.flags = (e.flags & -3) | 4096), (e = e.sibling));
          }
        else {
          if ((ye(), a === u)) {
            l = Tl(t, l, e);
            break t;
          }
          vt(t, l, a, e);
        }
        l = l.child;
      }
      return l;
    case 26:
      return (
        Wu(t, l),
        t === null
          ? (e = mo(l.type, null, l.pendingProps, null))
            ? (l.memoizedState = e)
            : G ||
              ((e = l.type),
              (t = l.pendingProps),
              (a = _n(Ql.current).createElement(e)),
              (a[yt] = l),
              (a[Ut] = t),
              pt(a, e, t),
              ht(a),
              (l.stateNode = a))
          : (l.memoizedState = mo(
              l.type,
              t.memoizedProps,
              l.pendingProps,
              t.memoizedState,
            )),
        null
      );
    case 27:
      return (
        Fi(l),
        t === null &&
          G &&
          ((a = l.stateNode = Th(l.type, l.pendingProps, Ql.current)),
          (gt = l),
          (Wt = !0),
          (u = $),
          ae(l.type) ? ((Bc = u), ($ = Ft(a.firstChild))) : ($ = u)),
        vt(t, l, l.pendingProps.children, e),
        Wu(t, l),
        t === null && (l.flags |= 4194304),
        l.child
      );
    case 5:
      return (
        t === null &&
          G &&
          ((u = a = $) &&
            ((a = Av(a, l.type, l.pendingProps, Wt)),
            a !== null
              ? ((l.stateNode = a),
                (gt = l),
                ($ = Ft(a.firstChild)),
                (Wt = !1),
                (u = !0))
              : (u = !1)),
          u || Pl(l)),
        Fi(l),
        (u = l.type),
        (n = l.pendingProps),
        (i = t !== null ? t.memoizedProps : null),
        (a = n.children),
        Cc(u, n) ? (a = null) : i !== null && Cc(u, i) && (l.flags |= 32),
        l.memoizedState !== null &&
          ((u = Sf(t, l, Gm, null, null, e)), (eu._currentValue = u)),
        Wu(t, l),
        vt(t, l, a, e),
        l.child
      );
    case 6:
      return (
        t === null &&
          G &&
          ((t = e = $) &&
            ((e = _v(e, l.pendingProps, Wt)),
            e !== null
              ? ((l.stateNode = e), (gt = l), ($ = null), (t = !0))
              : (t = !1)),
          t || Pl(l)),
        null
      );
    case 13:
      return Nd(t, l, e);
    case 4:
      return (
        en(l, l.stateNode.containerInfo),
        (a = l.pendingProps),
        t === null ? (l.child = Se(l, null, a, e)) : vt(t, l, a, e),
        l.child
      );
    case 11:
      return Ls(t, l, l.type, l.pendingProps, e);
    case 7:
      return (vt(t, l, l.pendingProps, e), l.child);
    case 8:
      return (vt(t, l, l.pendingProps.children, e), l.child);
    case 12:
      return (vt(t, l, l.pendingProps.children, e), l.child);
    case 10:
      return (
        (a = l.pendingProps),
        Cl(l, l.type, a.value),
        vt(t, l, a.children, e),
        l.child
      );
    case 9:
      return (
        (u = l.type._context),
        (a = l.pendingProps.children),
        ge(l),
        (u = St(u)),
        (a = a(u)),
        (l.flags |= 1),
        vt(t, l, a, e),
        l.child
      );
    case 14:
      return Xs(t, l, l.type, l.pendingProps, e);
    case 15:
      return Ud(t, l, l.type, l.pendingProps, e);
    case 19:
      return Cd(t, l, e);
    case 31:
      return wm(t, l, e);
    case 22:
      return Dd(t, l, e, l.pendingProps);
    case 24:
      return (
        ge(l),
        (a = St(ct)),
        t === null
          ? ((u = hf()),
            u === null &&
              ((u = J),
              (n = df()),
              (u.pooledCache = n),
              n.refCount++,
              n !== null && (u.pooledCacheLanes |= e),
              (u = n)),
            (l.memoizedState = { parent: a, cache: u }),
            vf(l),
            Cl(l, ct, u))
          : (t.lanes & e && (dc(t, l), qa(l, null, null, e), Ya()),
            (u = t.memoizedState),
            (n = l.memoizedState),
            u.parent !== a
              ? ((u = { parent: a, cache: a }),
                (l.memoizedState = u),
                l.lanes === 0 &&
                  (l.memoizedState = l.updateQueue.baseState = u),
                Cl(l, ct, a))
              : ((a = n.cache),
                Cl(l, ct, a),
                a !== u.cache && oc(l, [ct], e, !0))),
        vt(t, l, l.pendingProps.children, e),
        l.child
      );
    case 29:
      throw l.pendingProps;
  }
  throw Error(p(156, l.tag));
}
function fl(t) {
  t.flags |= 4;
}
function Mi(t, l, e, a, u) {
  if (((l = (t.mode & 32) !== 0) && (l = !1), l)) {
    if (((t.flags |= 16777216), (u & 335544128) === u))
      if (t.stateNode.complete) t.flags |= 8192;
      else if (ah()) t.flags |= 8192;
      else throw ((me = rn), mf);
  } else t.flags &= -16777217;
}
function Ws(t, l) {
  if (l.type !== "stylesheet" || l.state.loading & 4) t.flags &= -16777217;
  else if (((t.flags |= 16777216), !Oh(l)))
    if (ah()) t.flags |= 8192;
    else throw ((me = rn), mf);
}
function ju(t, l) {
  (l !== null && (t.flags |= 4),
    t.flags & 16384 &&
      ((l = t.tag !== 22 ? ur() : 536870912), (t.lanes |= l), (aa |= l)));
}
function Ta(t, l) {
  if (!G)
    switch (t.tailMode) {
      case "hidden":
        l = t.tail;
        for (var e = null; l !== null; )
          (l.alternate !== null && (e = l), (l = l.sibling));
        e === null ? (t.tail = null) : (e.sibling = null);
        break;
      case "collapsed":
        e = t.tail;
        for (var a = null; e !== null; )
          (e.alternate !== null && (a = e), (e = e.sibling));
        a === null
          ? l || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (a.sibling = null);
    }
}
function W(t) {
  var l = t.alternate !== null && t.alternate.child === t.child,
    e = 0,
    a = 0;
  if (l)
    for (var u = t.child; u !== null; )
      ((e |= u.lanes | u.childLanes),
        (a |= u.subtreeFlags & 65011712),
        (a |= u.flags & 65011712),
        (u.return = t),
        (u = u.sibling));
  else
    for (u = t.child; u !== null; )
      ((e |= u.lanes | u.childLanes),
        (a |= u.subtreeFlags),
        (a |= u.flags),
        (u.return = t),
        (u = u.sibling));
  return ((t.subtreeFlags |= a), (t.childLanes = e), l);
}
function $m(t, l, e) {
  var a = l.pendingProps;
  switch ((rf(l), l.tag)) {
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return (W(l), null);
    case 1:
      return (W(l), null);
    case 3:
      return (
        (e = l.stateNode),
        (a = null),
        t !== null && (a = t.memoizedState.cache),
        l.memoizedState.cache !== a && (l.flags |= 2048),
        Sl(ct),
        ke(),
        e.pendingContext &&
          ((e.context = e.pendingContext), (e.pendingContext = null)),
        (t === null || t.child === null) &&
          (xe(l)
            ? fl(l)
            : t === null ||
              (t.memoizedState.isDehydrated && !(l.flags & 256)) ||
              ((l.flags |= 1024), pi())),
        W(l),
        null
      );
    case 26:
      var u = l.type,
        n = l.memoizedState;
      return (
        t === null
          ? (fl(l),
            n !== null ? (W(l), Ws(l, n)) : (W(l), Mi(l, u, null, a, e)))
          : n
            ? n !== t.memoizedState
              ? (fl(l), W(l), Ws(l, n))
              : (W(l), (l.flags &= -16777217))
            : ((t = t.memoizedProps),
              t !== a && fl(l),
              W(l),
              Mi(l, u, t, a, e)),
        null
      );
    case 27:
      if (
        (an(l),
        (e = Ql.current),
        (u = l.type),
        t !== null && l.stateNode != null)
      )
        t.memoizedProps !== a && fl(l);
      else {
        if (!a) {
          if (l.stateNode === null) throw Error(p(166));
          return (W(l), null);
        }
        ((t = ul.current),
          xe(l) ? Ts(l) : ((t = Th(u, a, e)), (l.stateNode = t), fl(l)));
      }
      return (W(l), null);
    case 5:
      if ((an(l), (u = l.type), t !== null && l.stateNode != null))
        t.memoizedProps !== a && fl(l);
      else {
        if (!a) {
          if (l.stateNode === null) throw Error(p(166));
          return (W(l), null);
        }
        if (((n = ul.current), xe(l))) Ts(l);
        else {
          var i = _n(Ql.current);
          switch (n) {
            case 1:
              n = i.createElementNS("http://www.w3.org/2000/svg", u);
              break;
            case 2:
              n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
              break;
            default:
              switch (u) {
                case "svg":
                  n = i.createElementNS("http://www.w3.org/2000/svg", u);
                  break;
                case "math":
                  n = i.createElementNS(
                    "http://www.w3.org/1998/Math/MathML",
                    u,
                  );
                  break;
                case "script":
                  ((n = i.createElement("div")),
                    (n.innerHTML = "<script><\/script>"),
                    (n = n.removeChild(n.firstChild)));
                  break;
                case "select":
                  ((n =
                    typeof a.is == "string"
                      ? i.createElement("select", { is: a.is })
                      : i.createElement("select")),
                    a.multiple
                      ? (n.multiple = !0)
                      : a.size && (n.size = a.size));
                  break;
                default:
                  n =
                    typeof a.is == "string"
                      ? i.createElement(u, { is: a.is })
                      : i.createElement(u);
              }
          }
          ((n[yt] = l), (n[Ut] = a));
          t: for (i = l.child; i !== null; ) {
            if (i.tag === 5 || i.tag === 6) n.appendChild(i.stateNode);
            else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
              ((i.child.return = i), (i = i.child));
              continue;
            }
            if (i === l) break t;
            for (; i.sibling === null; ) {
              if (i.return === null || i.return === l) break t;
              i = i.return;
            }
            ((i.sibling.return = i.return), (i = i.sibling));
          }
          l.stateNode = n;
          t: switch ((pt(n, u, a), u)) {
            case "button":
            case "input":
            case "select":
            case "textarea":
              a = !!a.autoFocus;
              break t;
            case "img":
              a = !0;
              break t;
            default:
              a = !1;
          }
          a && fl(l);
        }
      }
      return (
        W(l),
        Mi(l, l.type, t === null ? null : t.memoizedProps, l.pendingProps, e),
        null
      );
    case 6:
      if (t && l.stateNode != null) t.memoizedProps !== a && fl(l);
      else {
        if (typeof a != "string" && l.stateNode === null) throw Error(p(166));
        if (((t = Ql.current), xe(l))) {
          if (
            ((t = l.stateNode),
            (e = l.memoizedProps),
            (a = null),
            (u = gt),
            u !== null)
          )
            switch (u.tag) {
              case 27:
              case 5:
                a = u.memoizedProps;
            }
          ((t[yt] = l),
            (t = !!(
              t.nodeValue === e ||
              (a !== null && a.suppressHydrationWarning === !0) ||
              ph(t.nodeValue, e)
            )),
            t || Pl(l, !0));
        } else ((t = _n(t).createTextNode(a)), (t[yt] = l), (l.stateNode = t));
      }
      return (W(l), null);
    case 31:
      if (((e = l.memoizedState), t === null || t.memoizedState !== null)) {
        if (((a = xe(l)), e !== null)) {
          if (t === null) {
            if (!a) throw Error(p(318));
            if (
              ((t = l.memoizedState),
              (t = t !== null ? t.dehydrated : null),
              !t)
            )
              throw Error(p(557));
            t[yt] = l;
          } else
            (ye(),
              !(l.flags & 128) && (l.memoizedState = null),
              (l.flags |= 4));
          (W(l), (t = !1));
        } else
          ((e = pi()),
            t !== null &&
              t.memoizedState !== null &&
              (t.memoizedState.hydrationErrors = e),
            (t = !0));
        if (!t) return l.flags & 256 ? (Ct(l), l) : (Ct(l), null);
        if (l.flags & 128) throw Error(p(558));
      }
      return (W(l), null);
    case 13:
      if (
        ((a = l.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (((u = xe(l)), a !== null && a.dehydrated !== null)) {
          if (t === null) {
            if (!u) throw Error(p(318));
            if (
              ((u = l.memoizedState),
              (u = u !== null ? u.dehydrated : null),
              !u)
            )
              throw Error(p(317));
            u[yt] = l;
          } else
            (ye(),
              !(l.flags & 128) && (l.memoizedState = null),
              (l.flags |= 4));
          (W(l), (u = !1));
        } else
          ((u = pi()),
            t !== null &&
              t.memoizedState !== null &&
              (t.memoizedState.hydrationErrors = u),
            (u = !0));
        if (!u) return l.flags & 256 ? (Ct(l), l) : (Ct(l), null);
      }
      return (
        Ct(l),
        l.flags & 128
          ? ((l.lanes = e), l)
          : ((e = a !== null),
            (t = t !== null && t.memoizedState !== null),
            e &&
              ((a = l.child),
              (u = null),
              a.alternate !== null &&
                a.alternate.memoizedState !== null &&
                a.alternate.memoizedState.cachePool !== null &&
                (u = a.alternate.memoizedState.cachePool.pool),
              (n = null),
              a.memoizedState !== null &&
                a.memoizedState.cachePool !== null &&
                (n = a.memoizedState.cachePool.pool),
              n !== u && (a.flags |= 2048)),
            e !== t && e && (l.child.flags |= 8192),
            ju(l, l.updateQueue),
            W(l),
            null)
      );
    case 4:
      return (ke(), t === null && qf(l.stateNode.containerInfo), W(l), null);
    case 10:
      return (Sl(l.type), W(l), null);
    case 19:
      if ((mt(at), (a = l.memoizedState), a === null)) return (W(l), null);
      if (((u = (l.flags & 128) !== 0), (n = a.rendering), n === null))
        if (u) Ta(a, !1);
        else {
          if (lt !== 0 || (t !== null && t.flags & 128))
            for (t = l.child; t !== null; ) {
              if (((n = hn(t)), n !== null)) {
                for (
                  l.flags |= 128,
                    Ta(a, !1),
                    t = n.updateQueue,
                    l.updateQueue = t,
                    ju(l, t),
                    l.subtreeFlags = 0,
                    t = e,
                    e = l.child;
                  e !== null;
                )
                  (Rr(e, t), (e = e.sibling));
                return (
                  w(at, (at.current & 1) | 2),
                  G && dl(l, a.treeForkCount),
                  l.child
                );
              }
              t = t.sibling;
            }
          a.tail !== null &&
            Ht() > pn &&
            ((l.flags |= 128), (u = !0), Ta(a, !1), (l.lanes = 4194304));
        }
      else {
        if (!u)
          if (((t = hn(n)), t !== null)) {
            if (
              ((l.flags |= 128),
              (u = !0),
              (t = t.updateQueue),
              (l.updateQueue = t),
              ju(l, t),
              Ta(a, !0),
              a.tail === null && a.tailMode === "hidden" && !n.alternate && !G)
            )
              return (W(l), null);
          } else
            2 * Ht() - a.renderingStartTime > pn &&
              e !== 536870912 &&
              ((l.flags |= 128), (u = !0), Ta(a, !1), (l.lanes = 4194304));
        a.isBackwards
          ? ((n.sibling = l.child), (l.child = n))
          : ((t = a.last),
            t !== null ? (t.sibling = n) : (l.child = n),
            (a.last = n));
      }
      return a.tail !== null
        ? ((t = a.tail),
          (a.rendering = t),
          (a.tail = t.sibling),
          (a.renderingStartTime = Ht()),
          (t.sibling = null),
          (e = at.current),
          w(at, u ? (e & 1) | 2 : e & 1),
          G && dl(l, a.treeForkCount),
          t)
        : (W(l), null);
    case 22:
    case 23:
      return (
        Ct(l),
        yf(),
        (a = l.memoizedState !== null),
        t !== null
          ? (t.memoizedState !== null) !== a && (l.flags |= 8192)
          : a && (l.flags |= 8192),
        a
          ? e & 536870912 &&
            !(l.flags & 128) &&
            (W(l), l.subtreeFlags & 6 && (l.flags |= 8192))
          : W(l),
        (e = l.updateQueue),
        e !== null && ju(l, e.retryQueue),
        (e = null),
        t !== null &&
          t.memoizedState !== null &&
          t.memoizedState.cachePool !== null &&
          (e = t.memoizedState.cachePool.pool),
        (a = null),
        l.memoizedState !== null &&
          l.memoizedState.cachePool !== null &&
          (a = l.memoizedState.cachePool.pool),
        a !== e && (l.flags |= 2048),
        t !== null && mt(he),
        null
      );
    case 24:
      return (
        (e = null),
        t !== null && (e = t.memoizedState.cache),
        l.memoizedState.cache !== e && (l.flags |= 2048),
        Sl(ct),
        W(l),
        null
      );
    case 25:
      return null;
    case 30:
      return null;
  }
  throw Error(p(156, l.tag));
}
function Fm(t, l) {
  switch ((rf(l), l.tag)) {
    case 1:
      return (
        (t = l.flags),
        t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
      );
    case 3:
      return (
        Sl(ct),
        ke(),
        (t = l.flags),
        t & 65536 && !(t & 128) ? ((l.flags = (t & -65537) | 128), l) : null
      );
    case 26:
    case 27:
    case 5:
      return (an(l), null);
    case 31:
      if (l.memoizedState !== null) {
        if ((Ct(l), l.alternate === null)) throw Error(p(340));
        ye();
      }
      return (
        (t = l.flags),
        t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
      );
    case 13:
      if ((Ct(l), (t = l.memoizedState), t !== null && t.dehydrated !== null)) {
        if (l.alternate === null) throw Error(p(340));
        ye();
      }
      return (
        (t = l.flags),
        t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
      );
    case 19:
      return (mt(at), null);
    case 4:
      return (ke(), null);
    case 10:
      return (Sl(l.type), null);
    case 22:
    case 23:
      return (
        Ct(l),
        yf(),
        t !== null && mt(he),
        (t = l.flags),
        t & 65536 ? ((l.flags = (t & -65537) | 128), l) : null
      );
    case 24:
      return (Sl(ct), null);
    case 25:
      return null;
    default:
      return null;
  }
}
function Rd(t, l) {
  switch ((rf(l), l.tag)) {
    case 3:
      (Sl(ct), ke());
      break;
    case 26:
    case 27:
    case 5:
      an(l);
      break;
    case 4:
      ke();
      break;
    case 31:
      l.memoizedState !== null && Ct(l);
      break;
    case 13:
      Ct(l);
      break;
    case 19:
      mt(at);
      break;
    case 10:
      Sl(l.type);
      break;
    case 22:
    case 23:
      (Ct(l), yf(), t !== null && mt(he));
      break;
    case 24:
      Sl(ct);
  }
}
function vu(t, l) {
  try {
    var e = l.updateQueue,
      a = e !== null ? e.lastEffect : null;
    if (a !== null) {
      var u = a.next;
      e = u;
      do {
        if ((e.tag & t) === t) {
          a = void 0;
          var n = e.create,
            i = e.inst;
          ((a = n()), (i.destroy = a));
        }
        e = e.next;
      } while (e !== u);
    }
  } catch (c) {
    Z(l, l.return, c);
  }
}
function te(t, l, e) {
  try {
    var a = l.updateQueue,
      u = a !== null ? a.lastEffect : null;
    if (u !== null) {
      var n = u.next;
      a = n;
      do {
        if ((a.tag & t) === t) {
          var i = a.inst,
            c = i.destroy;
          if (c !== void 0) {
            ((i.destroy = void 0), (u = l));
            var f = e,
              s = c;
            try {
              s();
            } catch (v) {
              Z(u, f, v);
            }
          }
        }
        a = a.next;
      } while (a !== n);
    }
  } catch (v) {
    Z(l, l.return, v);
  }
}
function Hd(t) {
  var l = t.updateQueue;
  if (l !== null) {
    var e = t.stateNode;
    try {
      Vr(l, e);
    } catch (a) {
      Z(t, t.return, a);
    }
  }
}
function Bd(t, l, e) {
  ((e.props = be(t.type, t.memoizedProps)), (e.state = t.memoizedState));
  try {
    e.componentWillUnmount();
  } catch (a) {
    Z(t, l, a);
  }
}
function La(t, l) {
  try {
    var e = t.ref;
    if (e !== null) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          var a = t.stateNode;
          break;
        case 30:
          a = t.stateNode;
          break;
        default:
          a = t.stateNode;
      }
      typeof e == "function" ? (t.refCleanup = e(a)) : (e.current = a);
    }
  } catch (u) {
    Z(t, l, u);
  }
}
function al(t, l) {
  var e = t.ref,
    a = t.refCleanup;
  if (e !== null)
    if (typeof a == "function")
      try {
        a();
      } catch (u) {
        Z(t, l, u);
      } finally {
        ((t.refCleanup = null),
          (t = t.alternate),
          t != null && (t.refCleanup = null));
      }
    else if (typeof e == "function")
      try {
        e(null);
      } catch (u) {
        Z(t, l, u);
      }
    else e.current = null;
}
function Yd(t) {
  var l = t.type,
    e = t.memoizedProps,
    a = t.stateNode;
  try {
    t: switch (l) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        e.autoFocus && a.focus();
        break t;
      case "img":
        e.src ? (a.src = e.src) : e.srcSet && (a.srcset = e.srcSet);
    }
  } catch (u) {
    Z(t, t.return, u);
  }
}
function Ui(t, l, e) {
  try {
    var a = t.stateNode;
    (Sv(a, t.type, e, l), (a[Ut] = l));
  } catch (u) {
    Z(t, t.return, u);
  }
}
function qd(t) {
  return (
    t.tag === 5 ||
    t.tag === 3 ||
    t.tag === 26 ||
    (t.tag === 27 && ae(t.type)) ||
    t.tag === 4
  );
}
function Di(t) {
  t: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || qd(t.return)) return null;
      t = t.return;
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
    ) {
      if (
        (t.tag === 27 && ae(t.type)) ||
        t.flags & 2 ||
        t.child === null ||
        t.tag === 4
      )
        continue t;
      ((t.child.return = t), (t = t.child));
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function Tc(t, l, e) {
  var a = t.tag;
  if (a === 5 || a === 6)
    ((t = t.stateNode),
      l
        ? (e.nodeType === 9
            ? e.body
            : e.nodeName === "HTML"
              ? e.ownerDocument.body
              : e
          ).insertBefore(t, l)
        : ((l =
            e.nodeType === 9
              ? e.body
              : e.nodeName === "HTML"
                ? e.ownerDocument.body
                : e),
          l.appendChild(t),
          (e = e._reactRootContainer),
          e != null || l.onclick !== null || (l.onclick = vl)));
  else if (
    a !== 4 &&
    (a === 27 && ae(t.type) && ((e = t.stateNode), (l = null)),
    (t = t.child),
    t !== null)
  )
    for (Tc(t, l, e), t = t.sibling; t !== null; )
      (Tc(t, l, e), (t = t.sibling));
}
function Sn(t, l, e) {
  var a = t.tag;
  if (a === 5 || a === 6)
    ((t = t.stateNode), l ? e.insertBefore(t, l) : e.appendChild(t));
  else if (
    a !== 4 &&
    (a === 27 && ae(t.type) && (e = t.stateNode), (t = t.child), t !== null)
  )
    for (Sn(t, l, e), t = t.sibling; t !== null; )
      (Sn(t, l, e), (t = t.sibling));
}
function Gd(t) {
  var l = t.stateNode,
    e = t.memoizedProps;
  try {
    for (var a = t.type, u = l.attributes; u.length; )
      l.removeAttributeNode(u[0]);
    (pt(l, a, e), (l[yt] = t), (l[Ut] = e));
  } catch (n) {
    Z(t, t.return, n);
  }
}
var hl = !1,
  it = !1,
  Ni = !1,
  $s = typeof WeakSet == "function" ? WeakSet : Set,
  dt = null;
function km(t, l) {
  if (((t = t.containerInfo), (Dc = Un), (t = Or(t)), nf(t))) {
    if ("selectionStart" in t)
      var e = { start: t.selectionStart, end: t.selectionEnd };
    else
      t: {
        e = ((e = t.ownerDocument) && e.defaultView) || window;
        var a = e.getSelection && e.getSelection();
        if (a && a.rangeCount !== 0) {
          e = a.anchorNode;
          var u = a.anchorOffset,
            n = a.focusNode;
          a = a.focusOffset;
          try {
            (e.nodeType, n.nodeType);
          } catch {
            e = null;
            break t;
          }
          var i = 0,
            c = -1,
            f = -1,
            s = 0,
            v = 0,
            h = t,
            r = null;
          l: for (;;) {
            for (
              var y;
              h !== e || (u !== 0 && h.nodeType !== 3) || (c = i + u),
                h !== n || (a !== 0 && h.nodeType !== 3) || (f = i + a),
                h.nodeType === 3 && (i += h.nodeValue.length),
                (y = h.firstChild) !== null;
            )
              ((r = h), (h = y));
            for (;;) {
              if (h === t) break l;
              if (
                (r === e && ++s === u && (c = i),
                r === n && ++v === a && (f = i),
                (y = h.nextSibling) !== null)
              )
                break;
              ((h = r), (r = h.parentNode));
            }
            h = y;
          }
          e = c === -1 || f === -1 ? null : { start: c, end: f };
        } else e = null;
      }
    e = e || { start: 0, end: 0 };
  } else e = null;
  for (
    Nc = { focusedElem: t, selectionRange: e }, Un = !1, dt = l;
    dt !== null;
  )
    if (((l = dt), (t = l.child), (l.subtreeFlags & 1028) !== 0 && t !== null))
      ((t.return = l), (dt = t));
    else
      for (; dt !== null; ) {
        switch (((l = dt), (n = l.alternate), (t = l.flags), l.tag)) {
          case 0:
            if (
              t & 4 &&
              ((t = l.updateQueue),
              (t = t !== null ? t.events : null),
              t !== null)
            )
              for (e = 0; e < t.length; e++)
                ((u = t[e]), (u.ref.impl = u.nextImpl));
            break;
          case 11:
          case 15:
            break;
          case 1:
            if (t & 1024 && n !== null) {
              ((t = void 0),
                (e = l),
                (u = n.memoizedProps),
                (n = n.memoizedState),
                (a = e.stateNode));
              try {
                var E = be(e.type, u);
                ((t = a.getSnapshotBeforeUpdate(E, n)),
                  (a.__reactInternalSnapshotBeforeUpdate = t));
              } catch (z) {
                Z(e, e.return, z);
              }
            }
            break;
          case 3:
            if (t & 1024) {
              if (((t = l.stateNode.containerInfo), (e = t.nodeType), e === 9))
                jc(t);
              else if (e === 1)
                switch (t.nodeName) {
                  case "HEAD":
                  case "HTML":
                  case "BODY":
                    jc(t);
                    break;
                  default:
                    t.textContent = "";
                }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          default:
            if (t & 1024) throw Error(p(163));
        }
        if (((t = l.sibling), t !== null)) {
          ((t.return = l.return), (dt = t));
          break;
        }
        dt = l.return;
      }
}
function Ld(t, l, e) {
  var a = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 15:
      (ol(t, e), a & 4 && vu(5, e));
      break;
    case 1:
      if ((ol(t, e), a & 4))
        if (((t = e.stateNode), l === null))
          try {
            t.componentDidMount();
          } catch (i) {
            Z(e, e.return, i);
          }
        else {
          var u = be(e.type, l.memoizedProps);
          l = l.memoizedState;
          try {
            t.componentDidUpdate(u, l, t.__reactInternalSnapshotBeforeUpdate);
          } catch (i) {
            Z(e, e.return, i);
          }
        }
      (a & 64 && Hd(e), a & 512 && La(e, e.return));
      break;
    case 3:
      if ((ol(t, e), a & 64 && ((t = e.updateQueue), t !== null))) {
        if (((l = null), e.child !== null))
          switch (e.child.tag) {
            case 27:
            case 5:
              l = e.child.stateNode;
              break;
            case 1:
              l = e.child.stateNode;
          }
        try {
          Vr(t, l);
        } catch (i) {
          Z(e, e.return, i);
        }
      }
      break;
    case 27:
      l === null && a & 4 && Gd(e);
    case 26:
    case 5:
      (ol(t, e), l === null && a & 4 && Yd(e), a & 512 && La(e, e.return));
      break;
    case 12:
      ol(t, e);
      break;
    case 31:
      (ol(t, e), a & 4 && Zd(t, e));
      break;
    case 13:
      (ol(t, e),
        a & 4 && Vd(t, e),
        a & 64 &&
          ((t = e.memoizedState),
          t !== null &&
            ((t = t.dehydrated),
            t !== null && ((e = iv.bind(null, e)), Ov(t, e)))));
      break;
    case 22:
      if (((a = e.memoizedState !== null || hl), !a)) {
        ((l = (l !== null && l.memoizedState !== null) || it), (u = hl));
        var n = it;
        ((hl = a),
          (it = l) && !n ? rl(t, e, (e.subtreeFlags & 8772) !== 0) : ol(t, e),
          (hl = u),
          (it = n));
      }
      break;
    case 30:
      break;
    default:
      ol(t, e);
  }
}
function Xd(t) {
  var l = t.alternate;
  (l !== null && ((t.alternate = null), Xd(l)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 && ((l = t.stateNode), l !== null && Pc(l)),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null));
}
var I = null,
  Ot = !1;
function sl(t, l, e) {
  for (e = e.child; e !== null; ) (Qd(t, l, e), (e = e.sibling));
}
function Qd(t, l, e) {
  if (Bt && typeof Bt.onCommitFiberUnmount == "function")
    try {
      Bt.onCommitFiberUnmount(fu, e);
    } catch {}
  switch (e.tag) {
    case 26:
      (it || al(e, l),
        sl(t, l, e),
        e.memoizedState
          ? e.memoizedState.count--
          : e.stateNode && ((e = e.stateNode), e.parentNode.removeChild(e)));
      break;
    case 27:
      it || al(e, l);
      var a = I,
        u = Ot;
      (ae(e.type) && ((I = e.stateNode), (Ot = !1)),
        sl(t, l, e),
        Va(e.stateNode),
        (I = a),
        (Ot = u));
      break;
    case 5:
      it || al(e, l);
    case 6:
      if (
        ((a = I),
        (u = Ot),
        (I = null),
        sl(t, l, e),
        (I = a),
        (Ot = u),
        I !== null)
      )
        if (Ot)
          try {
            (I.nodeType === 9
              ? I.body
              : I.nodeName === "HTML"
                ? I.ownerDocument.body
                : I
            ).removeChild(e.stateNode);
          } catch (n) {
            Z(e, l, n);
          }
        else
          try {
            I.removeChild(e.stateNode);
          } catch (n) {
            Z(e, l, n);
          }
      break;
    case 18:
      I !== null &&
        (Ot
          ? ((t = I),
            fo(
              t.nodeType === 9
                ? t.body
                : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t,
              e.stateNode,
            ),
            ca(t))
          : fo(I, e.stateNode));
      break;
    case 4:
      ((a = I),
        (u = Ot),
        (I = e.stateNode.containerInfo),
        (Ot = !0),
        sl(t, l, e),
        (I = a),
        (Ot = u));
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      (te(2, e, l), it || te(4, e, l), sl(t, l, e));
      break;
    case 1:
      (it ||
        (al(e, l),
        (a = e.stateNode),
        typeof a.componentWillUnmount == "function" && Bd(e, l, a)),
        sl(t, l, e));
      break;
    case 21:
      sl(t, l, e);
      break;
    case 22:
      ((it = (a = it) || e.memoizedState !== null), sl(t, l, e), (it = a));
      break;
    default:
      sl(t, l, e);
  }
}
function Zd(t, l) {
  if (
    l.memoizedState === null &&
    ((t = l.alternate), t !== null && ((t = t.memoizedState), t !== null))
  ) {
    t = t.dehydrated;
    try {
      ca(t);
    } catch (e) {
      Z(l, l.return, e);
    }
  }
}
function Vd(t, l) {
  if (
    l.memoizedState === null &&
    ((t = l.alternate),
    t !== null &&
      ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
  )
    try {
      ca(t);
    } catch (e) {
      Z(l, l.return, e);
    }
}
function Im(t) {
  switch (t.tag) {
    case 31:
    case 13:
    case 19:
      var l = t.stateNode;
      return (l === null && (l = t.stateNode = new $s()), l);
    case 22:
      return (
        (t = t.stateNode),
        (l = t._retryCache),
        l === null && (l = t._retryCache = new $s()),
        l
      );
    default:
      throw Error(p(435, t.tag));
  }
}
function Ru(t, l) {
  var e = Im(t);
  l.forEach(function (a) {
    if (!e.has(a)) {
      e.add(a);
      var u = cv.bind(null, t, a);
      a.then(u, u);
    }
  });
}
function At(t, l) {
  var e = l.deletions;
  if (e !== null)
    for (var a = 0; a < e.length; a++) {
      var u = e[a],
        n = t,
        i = l,
        c = i;
      t: for (; c !== null; ) {
        switch (c.tag) {
          case 27:
            if (ae(c.type)) {
              ((I = c.stateNode), (Ot = !1));
              break t;
            }
            break;
          case 5:
            ((I = c.stateNode), (Ot = !1));
            break t;
          case 3:
          case 4:
            ((I = c.stateNode.containerInfo), (Ot = !0));
            break t;
        }
        c = c.return;
      }
      if (I === null) throw Error(p(160));
      (Qd(n, i, u),
        (I = null),
        (Ot = !1),
        (n = u.alternate),
        n !== null && (n.return = null),
        (u.return = null));
    }
  if (l.subtreeFlags & 13886)
    for (l = l.child; l !== null; ) (Kd(l, t), (l = l.sibling));
}
var Pt = null;
function Kd(t, l) {
  var e = t.alternate,
    a = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      (At(l, t),
        _t(t),
        a & 4 && (te(3, t, t.return), vu(3, t), te(5, t, t.return)));
      break;
    case 1:
      (At(l, t),
        _t(t),
        a & 512 && (it || e === null || al(e, e.return)),
        a & 64 &&
          hl &&
          ((t = t.updateQueue),
          t !== null &&
            ((a = t.callbacks),
            a !== null &&
              ((e = t.shared.hiddenCallbacks),
              (t.shared.hiddenCallbacks = e === null ? a : e.concat(a))))));
      break;
    case 26:
      var u = Pt;
      if (
        (At(l, t),
        _t(t),
        a & 512 && (it || e === null || al(e, e.return)),
        a & 4)
      ) {
        var n = e !== null ? e.memoizedState : null;
        if (((a = t.memoizedState), e === null))
          if (a === null)
            if (t.stateNode === null) {
              t: {
                ((a = t.type),
                  (e = t.memoizedProps),
                  (u = u.ownerDocument || u));
                l: switch (a) {
                  case "title":
                    ((n = u.getElementsByTagName("title")[0]),
                      (!n ||
                        n[ru] ||
                        n[yt] ||
                        n.namespaceURI === "http://www.w3.org/2000/svg" ||
                        n.hasAttribute("itemprop")) &&
                        ((n = u.createElement(a)),
                        u.head.insertBefore(
                          n,
                          u.querySelector("head > title"),
                        )),
                      pt(n, a, e),
                      (n[yt] = t),
                      ht(n),
                      (a = n));
                    break t;
                  case "link":
                    var i = yo("link", "href", u).get(a + (e.href || ""));
                    if (i) {
                      for (var c = 0; c < i.length; c++)
                        if (
                          ((n = i[c]),
                          n.getAttribute("href") ===
                            (e.href == null || e.href === "" ? null : e.href) &&
                            n.getAttribute("rel") ===
                              (e.rel == null ? null : e.rel) &&
                            n.getAttribute("title") ===
                              (e.title == null ? null : e.title) &&
                            n.getAttribute("crossorigin") ===
                              (e.crossOrigin == null ? null : e.crossOrigin))
                        ) {
                          i.splice(c, 1);
                          break l;
                        }
                    }
                    ((n = u.createElement(a)),
                      pt(n, a, e),
                      u.head.appendChild(n));
                    break;
                  case "meta":
                    if (
                      (i = yo("meta", "content", u).get(a + (e.content || "")))
                    ) {
                      for (c = 0; c < i.length; c++)
                        if (
                          ((n = i[c]),
                          n.getAttribute("content") ===
                            (e.content == null ? null : "" + e.content) &&
                            n.getAttribute("name") ===
                              (e.name == null ? null : e.name) &&
                            n.getAttribute("property") ===
                              (e.property == null ? null : e.property) &&
                            n.getAttribute("http-equiv") ===
                              (e.httpEquiv == null ? null : e.httpEquiv) &&
                            n.getAttribute("charset") ===
                              (e.charSet == null ? null : e.charSet))
                        ) {
                          i.splice(c, 1);
                          break l;
                        }
                    }
                    ((n = u.createElement(a)),
                      pt(n, a, e),
                      u.head.appendChild(n));
                    break;
                  default:
                    throw Error(p(468, a));
                }
                ((n[yt] = t), ht(n), (a = n));
              }
              t.stateNode = a;
            } else go(u, t.type, t.stateNode);
          else t.stateNode = vo(u, a, t.memoizedProps);
        else
          n !== a
            ? (n === null
                ? e.stateNode !== null &&
                  ((e = e.stateNode), e.parentNode.removeChild(e))
                : n.count--,
              a === null
                ? go(u, t.type, t.stateNode)
                : vo(u, a, t.memoizedProps))
            : a === null &&
              t.stateNode !== null &&
              Ui(t, t.memoizedProps, e.memoizedProps);
      }
      break;
    case 27:
      (At(l, t),
        _t(t),
        a & 512 && (it || e === null || al(e, e.return)),
        e !== null && a & 4 && Ui(t, t.memoizedProps, e.memoizedProps));
      break;
    case 5:
      if (
        (At(l, t),
        _t(t),
        a & 512 && (it || e === null || al(e, e.return)),
        t.flags & 32)
      ) {
        u = t.stateNode;
        try {
          Pe(u, "");
        } catch (E) {
          Z(t, t.return, E);
        }
      }
      (a & 4 &&
        t.stateNode != null &&
        ((u = t.memoizedProps), Ui(t, u, e !== null ? e.memoizedProps : u)),
        a & 1024 && (Ni = !0));
      break;
    case 6:
      if ((At(l, t), _t(t), a & 4)) {
        if (t.stateNode === null) throw Error(p(162));
        ((a = t.memoizedProps), (e = t.stateNode));
        try {
          e.nodeValue = a;
        } catch (E) {
          Z(t, t.return, E);
        }
      }
      break;
    case 3:
      if (
        ((ku = null),
        (u = Pt),
        (Pt = On(l.containerInfo)),
        At(l, t),
        (Pt = u),
        _t(t),
        a & 4 && e !== null && e.memoizedState.isDehydrated)
      )
        try {
          ca(l.containerInfo);
        } catch (E) {
          Z(t, t.return, E);
        }
      Ni && ((Ni = !1), Jd(t));
      break;
    case 4:
      ((a = Pt),
        (Pt = On(t.stateNode.containerInfo)),
        At(l, t),
        _t(t),
        (Pt = a));
      break;
    case 12:
      (At(l, t), _t(t));
      break;
    case 31:
      (At(l, t),
        _t(t),
        a & 4 &&
          ((a = t.updateQueue),
          a !== null && ((t.updateQueue = null), Ru(t, a))));
      break;
    case 13:
      (At(l, t),
        _t(t),
        t.child.flags & 8192 &&
          (t.memoizedState !== null) !=
            (e !== null && e.memoizedState !== null) &&
          (wn = Ht()),
        a & 4 &&
          ((a = t.updateQueue),
          a !== null && ((t.updateQueue = null), Ru(t, a))));
      break;
    case 22:
      u = t.memoizedState !== null;
      var f = e !== null && e.memoizedState !== null,
        s = hl,
        v = it;
      if (
        ((hl = s || u),
        (it = v || f),
        At(l, t),
        (it = v),
        (hl = s),
        _t(t),
        a & 8192)
      )
        t: for (
          l = t.stateNode,
            l._visibility = u ? l._visibility & -2 : l._visibility | 1,
            u && (e === null || f || hl || it || oe(t)),
            e = null,
            l = t;
          ;
        ) {
          if (l.tag === 5 || l.tag === 26) {
            if (e === null) {
              f = e = l;
              try {
                if (((n = f.stateNode), u))
                  ((i = n.style),
                    typeof i.setProperty == "function"
                      ? i.setProperty("display", "none", "important")
                      : (i.display = "none"));
                else {
                  c = f.stateNode;
                  var h = f.memoizedProps.style,
                    r =
                      h != null && h.hasOwnProperty("display")
                        ? h.display
                        : null;
                  c.style.display =
                    r == null || typeof r == "boolean" ? "" : ("" + r).trim();
                }
              } catch (E) {
                Z(f, f.return, E);
              }
            }
          } else if (l.tag === 6) {
            if (e === null) {
              f = l;
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (E) {
                Z(f, f.return, E);
              }
            }
          } else if (l.tag === 18) {
            if (e === null) {
              f = l;
              try {
                var y = f.stateNode;
                u ? so(y, !0) : so(f.stateNode, !1);
              } catch (E) {
                Z(f, f.return, E);
              }
            }
          } else if (
            ((l.tag !== 22 && l.tag !== 23) ||
              l.memoizedState === null ||
              l === t) &&
            l.child !== null
          ) {
            ((l.child.return = l), (l = l.child));
            continue;
          }
          if (l === t) break t;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === t) break t;
            (e === l && (e = null), (l = l.return));
          }
          (e === l && (e = null),
            (l.sibling.return = l.return),
            (l = l.sibling));
        }
      a & 4 &&
        ((a = t.updateQueue),
        a !== null &&
          ((e = a.retryQueue),
          e !== null && ((a.retryQueue = null), Ru(t, e))));
      break;
    case 19:
      (At(l, t),
        _t(t),
        a & 4 &&
          ((a = t.updateQueue),
          a !== null && ((t.updateQueue = null), Ru(t, a))));
      break;
    case 30:
      break;
    case 21:
      break;
    default:
      (At(l, t), _t(t));
  }
}
function _t(t) {
  var l = t.flags;
  if (l & 2) {
    try {
      for (var e, a = t.return; a !== null; ) {
        if (qd(a)) {
          e = a;
          break;
        }
        a = a.return;
      }
      if (e == null) throw Error(p(160));
      switch (e.tag) {
        case 27:
          var u = e.stateNode,
            n = Di(t);
          Sn(t, n, u);
          break;
        case 5:
          var i = e.stateNode;
          e.flags & 32 && (Pe(i, ""), (e.flags &= -33));
          var c = Di(t);
          Sn(t, c, i);
          break;
        case 3:
        case 4:
          var f = e.stateNode.containerInfo,
            s = Di(t);
          Tc(t, s, f);
          break;
        default:
          throw Error(p(161));
      }
    } catch (v) {
      Z(t, t.return, v);
    }
    t.flags &= -3;
  }
  l & 4096 && (t.flags &= -4097);
}
function Jd(t) {
  if (t.subtreeFlags & 1024)
    for (t = t.child; t !== null; ) {
      var l = t;
      (Jd(l),
        l.tag === 5 && l.flags & 1024 && l.stateNode.reset(),
        (t = t.sibling));
    }
}
function ol(t, l) {
  if (l.subtreeFlags & 8772)
    for (l = l.child; l !== null; ) (Ld(t, l.alternate, l), (l = l.sibling));
}
function oe(t) {
  for (t = t.child; t !== null; ) {
    var l = t;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (te(4, l, l.return), oe(l));
        break;
      case 1:
        al(l, l.return);
        var e = l.stateNode;
        (typeof e.componentWillUnmount == "function" && Bd(l, l.return, e),
          oe(l));
        break;
      case 27:
        Va(l.stateNode);
      case 26:
      case 5:
        (al(l, l.return), oe(l));
        break;
      case 22:
        l.memoizedState === null && oe(l);
        break;
      case 30:
        oe(l);
        break;
      default:
        oe(l);
    }
    t = t.sibling;
  }
}
function rl(t, l, e) {
  for (e = e && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
    var a = l.alternate,
      u = t,
      n = l,
      i = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (rl(u, n, e), vu(4, n));
        break;
      case 1:
        if (
          (rl(u, n, e),
          (a = n),
          (u = a.stateNode),
          typeof u.componentDidMount == "function")
        )
          try {
            u.componentDidMount();
          } catch (s) {
            Z(a, a.return, s);
          }
        if (((a = n), (u = a.updateQueue), u !== null)) {
          var c = a.stateNode;
          try {
            var f = u.shared.hiddenCallbacks;
            if (f !== null)
              for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++)
                Zr(f[u], c);
          } catch (s) {
            Z(a, a.return, s);
          }
        }
        (e && i & 64 && Hd(n), La(n, n.return));
        break;
      case 27:
        Gd(n);
      case 26:
      case 5:
        (rl(u, n, e), e && a === null && i & 4 && Yd(n), La(n, n.return));
        break;
      case 12:
        rl(u, n, e);
        break;
      case 31:
        (rl(u, n, e), e && i & 4 && Zd(u, n));
        break;
      case 13:
        (rl(u, n, e), e && i & 4 && Vd(u, n));
        break;
      case 22:
        (n.memoizedState === null && rl(u, n, e), La(n, n.return));
        break;
      case 30:
        break;
      default:
        rl(u, n, e);
    }
    l = l.sibling;
  }
}
function Cf(t, l) {
  var e = null;
  (t !== null &&
    t.memoizedState !== null &&
    t.memoizedState.cachePool !== null &&
    (e = t.memoizedState.cachePool.pool),
    (t = null),
    l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (t = l.memoizedState.cachePool.pool),
    t !== e && (t != null && t.refCount++, e != null && hu(e)));
}
function jf(t, l) {
  ((t = null),
    l.alternate !== null && (t = l.alternate.memoizedState.cache),
    (l = l.memoizedState.cache),
    l !== t && (l.refCount++, t != null && hu(t)));
}
function It(t, l, e, a) {
  if (l.subtreeFlags & 10256)
    for (l = l.child; l !== null; ) (wd(t, l, e, a), (l = l.sibling));
}
function wd(t, l, e, a) {
  var u = l.flags;
  switch (l.tag) {
    case 0:
    case 11:
    case 15:
      (It(t, l, e, a), u & 2048 && vu(9, l));
      break;
    case 1:
      It(t, l, e, a);
      break;
    case 3:
      (It(t, l, e, a),
        u & 2048 &&
          ((t = null),
          l.alternate !== null && (t = l.alternate.memoizedState.cache),
          (l = l.memoizedState.cache),
          l !== t && (l.refCount++, t != null && hu(t))));
      break;
    case 12:
      if (u & 2048) {
        (It(t, l, e, a), (t = l.stateNode));
        try {
          var n = l.memoizedProps,
            i = n.id,
            c = n.onPostCommit;
          typeof c == "function" &&
            c(
              i,
              l.alternate === null ? "mount" : "update",
              t.passiveEffectDuration,
              -0,
            );
        } catch (f) {
          Z(l, l.return, f);
        }
      } else It(t, l, e, a);
      break;
    case 31:
      It(t, l, e, a);
      break;
    case 13:
      It(t, l, e, a);
      break;
    case 23:
      break;
    case 22:
      ((n = l.stateNode),
        (i = l.alternate),
        l.memoizedState !== null
          ? n._visibility & 2
            ? It(t, l, e, a)
            : Xa(t, l)
          : n._visibility & 2
            ? It(t, l, e, a)
            : ((n._visibility |= 2),
              De(t, l, e, a, (l.subtreeFlags & 10256) !== 0 || !1)),
        u & 2048 && Cf(i, l));
      break;
    case 24:
      (It(t, l, e, a), u & 2048 && jf(l.alternate, l));
      break;
    default:
      It(t, l, e, a);
  }
}
function De(t, l, e, a, u) {
  for (
    u = u && ((l.subtreeFlags & 10256) !== 0 || !1), l = l.child;
    l !== null;
  ) {
    var n = t,
      i = l,
      c = e,
      f = a,
      s = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        (De(n, i, c, f, u), vu(8, i));
        break;
      case 23:
        break;
      case 22:
        var v = i.stateNode;
        (i.memoizedState !== null
          ? v._visibility & 2
            ? De(n, i, c, f, u)
            : Xa(n, i)
          : ((v._visibility |= 2), De(n, i, c, f, u)),
          u && s & 2048 && Cf(i.alternate, i));
        break;
      case 24:
        (De(n, i, c, f, u), u && s & 2048 && jf(i.alternate, i));
        break;
      default:
        De(n, i, c, f, u);
    }
    l = l.sibling;
  }
}
function Xa(t, l) {
  if (l.subtreeFlags & 10256)
    for (l = l.child; l !== null; ) {
      var e = t,
        a = l,
        u = a.flags;
      switch (a.tag) {
        case 22:
          (Xa(e, a), u & 2048 && Cf(a.alternate, a));
          break;
        case 24:
          (Xa(e, a), u & 2048 && jf(a.alternate, a));
          break;
        default:
          Xa(e, a);
      }
      l = l.sibling;
    }
}
var Da = 8192;
function Me(t, l, e) {
  if (t.subtreeFlags & Da)
    for (t = t.child; t !== null; ) (Wd(t, l, e), (t = t.sibling));
}
function Wd(t, l, e) {
  switch (t.tag) {
    case 26:
      (Me(t, l, e),
        t.flags & Da &&
          t.memoizedState !== null &&
          qv(e, Pt, t.memoizedState, t.memoizedProps));
      break;
    case 5:
      Me(t, l, e);
      break;
    case 3:
    case 4:
      var a = Pt;
      ((Pt = On(t.stateNode.containerInfo)), Me(t, l, e), (Pt = a));
      break;
    case 22:
      t.memoizedState === null &&
        ((a = t.alternate),
        a !== null && a.memoizedState !== null
          ? ((a = Da), (Da = 16777216), Me(t, l, e), (Da = a))
          : Me(t, l, e));
      break;
    default:
      Me(t, l, e);
  }
}
function $d(t) {
  var l = t.alternate;
  if (l !== null && ((t = l.child), t !== null)) {
    l.child = null;
    do ((l = t.sibling), (t.sibling = null), (t = l));
    while (t !== null);
  }
}
function Aa(t) {
  var l = t.deletions;
  if (t.flags & 16) {
    if (l !== null)
      for (var e = 0; e < l.length; e++) {
        var a = l[e];
        ((dt = a), kd(a, t));
      }
    $d(t);
  }
  if (t.subtreeFlags & 10256)
    for (t = t.child; t !== null; ) (Fd(t), (t = t.sibling));
}
function Fd(t) {
  switch (t.tag) {
    case 0:
    case 11:
    case 15:
      (Aa(t), t.flags & 2048 && te(9, t, t.return));
      break;
    case 3:
      Aa(t);
      break;
    case 12:
      Aa(t);
      break;
    case 22:
      var l = t.stateNode;
      t.memoizedState !== null &&
      l._visibility & 2 &&
      (t.return === null || t.return.tag !== 13)
        ? ((l._visibility &= -3), $u(t))
        : Aa(t);
      break;
    default:
      Aa(t);
  }
}
function $u(t) {
  var l = t.deletions;
  if (t.flags & 16) {
    if (l !== null)
      for (var e = 0; e < l.length; e++) {
        var a = l[e];
        ((dt = a), kd(a, t));
      }
    $d(t);
  }
  for (t = t.child; t !== null; ) {
    switch (((l = t), l.tag)) {
      case 0:
      case 11:
      case 15:
        (te(8, l, l.return), $u(l));
        break;
      case 22:
        ((e = l.stateNode),
          e._visibility & 2 && ((e._visibility &= -3), $u(l)));
        break;
      default:
        $u(l);
    }
    t = t.sibling;
  }
}
function kd(t, l) {
  for (; dt !== null; ) {
    var e = dt;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        te(8, e, l);
        break;
      case 23:
      case 22:
        if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
          var a = e.memoizedState.cachePool.pool;
          a != null && a.refCount++;
        }
        break;
      case 24:
        hu(e.memoizedState.cache);
    }
    if (((a = e.child), a !== null)) ((a.return = e), (dt = a));
    else
      t: for (e = t; dt !== null; ) {
        a = dt;
        var u = a.sibling,
          n = a.return;
        if ((Xd(a), a === e)) {
          dt = null;
          break t;
        }
        if (u !== null) {
          ((u.return = n), (dt = u));
          break t;
        }
        dt = n;
      }
  }
}
var Pm = {
    getCacheForType: function (t) {
      var l = St(ct),
        e = l.data.get(t);
      return (e === void 0 && ((e = t()), l.data.set(t, e)), e);
    },
    cacheSignal: function () {
      return St(ct).controller.signal;
    },
  },
  tv = typeof WeakMap == "function" ? WeakMap : Map,
  L = 0,
  J = null,
  Y = null,
  q = 0,
  Q = 0,
  Nt = null,
  ql = !1,
  ma = !1,
  Rf = !1,
  Al = 0,
  lt = 0,
  le = 0,
  ve = 0,
  Hf = 0,
  Rt = 0,
  aa = 0,
  Qa = null,
  xt = null,
  Ac = !1,
  wn = 0,
  Id = 0,
  pn = 1 / 0,
  bn = null,
  Jl = null,
  st = 0,
  wl = null,
  ua = null,
  pl = 0,
  _c = 0,
  Oc = null,
  Pd = null,
  Za = 0,
  xc = null;
function qt() {
  return L & 2 && q !== 0 ? q & -q : M.T !== null ? Yf() : fr();
}
function th() {
  if (Rt === 0)
    if (!(q & 536870912) || G) {
      var t = Ou;
      ((Ou <<= 1), !(Ou & 3932160) && (Ou = 262144), (Rt = t));
    } else Rt = 536870912;
  return ((t = Lt.current), t !== null && (t.flags |= 32), Rt);
}
function Mt(t, l, e) {
  (((t === J && (Q === 2 || Q === 9)) || t.cancelPendingCommit !== null) &&
    (na(t, 0), Gl(t, q, Rt, !1)),
    ou(t, e),
    (!(L & 2) || t !== J) &&
      (t === J && (!(L & 2) && (ve |= e), lt === 4 && Gl(t, q, Rt, !1)),
      il(t)));
}
function lh(t, l, e) {
  if (L & 6) throw Error(p(327));
  var a = (!e && (l & 127) === 0 && (l & t.expiredLanes) === 0) || su(t, l),
    u = a ? av(t, l) : Ci(t, l, !0),
    n = a;
  do {
    if (u === 0) {
      ma && !a && Gl(t, l, 0, !1);
      break;
    } else {
      if (((e = t.current.alternate), n && !lv(e))) {
        ((u = Ci(t, l, !1)), (n = !1));
        continue;
      }
      if (u === 2) {
        if (((n = l), t.errorRecoveryDisabledLanes & n)) var i = 0;
        else
          ((i = t.pendingLanes & -536870913),
            (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
        if (i !== 0) {
          l = i;
          t: {
            var c = t;
            u = Qa;
            var f = c.current.memoizedState.isDehydrated;
            if ((f && (na(c, i).flags |= 256), (i = Ci(c, i, !1)), i !== 2)) {
              if (Rf && !f) {
                ((c.errorRecoveryDisabledLanes |= n), (ve |= n), (u = 4));
                break t;
              }
              ((n = xt),
                (xt = u),
                n !== null && (xt === null ? (xt = n) : xt.push.apply(xt, n)));
            }
            u = i;
          }
          if (((n = !1), u !== 2)) continue;
        }
      }
      if (u === 1) {
        (na(t, 0), Gl(t, l, 0, !0));
        break;
      }
      t: {
        switch (((a = t), (n = u), n)) {
          case 0:
          case 1:
            throw Error(p(345));
          case 4:
            if ((l & 4194048) !== l) break;
          case 6:
            Gl(a, l, Rt, !ql);
            break t;
          case 2:
            xt = null;
            break;
          case 3:
          case 5:
            break;
          default:
            throw Error(p(329));
        }
        if ((l & 62914560) === l && ((u = wn + 300 - Ht()), 10 < u)) {
          if ((Gl(a, l, Rt, !ql), Bn(a, 0, !0) !== 0)) break t;
          ((pl = l),
            (a.timeoutHandle = Eh(
              Fs.bind(
                null,
                a,
                e,
                xt,
                bn,
                Ac,
                l,
                Rt,
                ve,
                aa,
                ql,
                n,
                "Throttled",
                -0,
                0,
              ),
              u,
            )));
          break t;
        }
        Fs(a, e, xt, bn, Ac, l, Rt, ve, aa, ql, n, null, -0, 0);
      }
    }
    break;
  } while (!0);
  il(t);
}
function Fs(t, l, e, a, u, n, i, c, f, s, v, h, r, y) {
  if (
    ((t.timeoutHandle = -1),
    (h = l.subtreeFlags),
    h & 8192 || (h & 16785408) === 16785408)
  ) {
    ((h = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: vl,
    }),
      Wd(l, n, h));
    var E =
      (n & 62914560) === n ? wn - Ht() : (n & 4194048) === n ? Id - Ht() : 0;
    if (((E = Gv(h, E)), E !== null)) {
      ((pl = n),
        (t.cancelPendingCommit = E(
          Is.bind(null, t, l, n, e, a, u, i, c, f, v, h, null, r, y),
        )),
        Gl(t, n, i, !s));
      return;
    }
  }
  Is(t, l, n, e, a, u, i, c, f);
}
function lv(t) {
  for (var l = t; ; ) {
    var e = l.tag;
    if (
      (e === 0 || e === 11 || e === 15) &&
      l.flags & 16384 &&
      ((e = l.updateQueue), e !== null && ((e = e.stores), e !== null))
    )
      for (var a = 0; a < e.length; a++) {
        var u = e[a],
          n = u.getSnapshot;
        u = u.value;
        try {
          if (!Gt(n(), u)) return !1;
        } catch {
          return !1;
        }
      }
    if (((e = l.child), l.subtreeFlags & 16384 && e !== null))
      ((e.return = l), (l = e));
    else {
      if (l === t) break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === t) return !0;
        l = l.return;
      }
      ((l.sibling.return = l.return), (l = l.sibling));
    }
  }
  return !0;
}
function Gl(t, l, e, a) {
  ((l &= ~Hf),
    (l &= ~ve),
    (t.suspendedLanes |= l),
    (t.pingedLanes &= ~l),
    a && (t.warmLanes |= l),
    (a = t.expirationTimes));
  for (var u = l; 0 < u; ) {
    var n = 31 - Yt(u),
      i = 1 << n;
    ((a[n] = -1), (u &= ~i));
  }
  e !== 0 && nr(t, e, l);
}
function Wn() {
  return L & 6 ? !0 : (yu(0), !1);
}
function Bf() {
  if (Y !== null) {
    if (Q === 0) var t = Y.return;
    else ((t = Y), (yl = _e = null), Ef(t), (We = null), (ka = 0), (t = Y));
    for (; t !== null; ) (Rd(t.alternate, t), (t = t.return));
    Y = null;
  }
}
function na(t, l) {
  var e = t.timeoutHandle;
  (e !== -1 && ((t.timeoutHandle = -1), Ev(e)),
    (e = t.cancelPendingCommit),
    e !== null && ((t.cancelPendingCommit = null), e()),
    (pl = 0),
    Bf(),
    (J = t),
    (Y = e = gl(t.current, null)),
    (q = l),
    (Q = 0),
    (Nt = null),
    (ql = !1),
    (ma = su(t, l)),
    (Rf = !1),
    (aa = Rt = Hf = ve = le = lt = 0),
    (xt = Qa = null),
    (Ac = !1),
    l & 8 && (l |= l & 32));
  var a = t.entangledLanes;
  if (a !== 0)
    for (t = t.entanglements, a &= l; 0 < a; ) {
      var u = 31 - Yt(a),
        n = 1 << u;
      ((l |= t[u]), (a &= ~n));
    }
  return ((Al = l), Ln(), e);
}
function eh(t, l) {
  ((N = null),
    (M.H = Pa),
    l === ha || l === Qn
      ? ((l = Ms()), (Q = 3))
      : l === mf
        ? ((l = Ms()), (Q = 4))
        : (Q =
            l === Df
              ? 8
              : l !== null &&
                  typeof l == "object" &&
                  typeof l.then == "function"
                ? 6
                : 1),
    (Nt = l),
    Y === null && ((lt = 1), yn(t, wt(l, t.current))));
}
function ah() {
  var t = Lt.current;
  return t === null
    ? !0
    : (q & 4194048) === q
      ? $t === null
      : (q & 62914560) === q || q & 536870912
        ? t === $t
        : !1;
}
function uh() {
  var t = M.H;
  return ((M.H = Pa), t === null ? Pa : t);
}
function nh() {
  var t = M.A;
  return ((M.A = Pm), t);
}
function En() {
  ((lt = 4),
    ql || ((q & 4194048) !== q && Lt.current !== null) || (ma = !0),
    (!(le & 134217727) && !(ve & 134217727)) || J === null || Gl(J, q, Rt, !1));
}
function Ci(t, l, e) {
  var a = L;
  L |= 2;
  var u = uh(),
    n = nh();
  ((J !== t || q !== l) && ((bn = null), na(t, l)), (l = !1));
  var i = lt;
  t: do
    try {
      if (Q !== 0 && Y !== null) {
        var c = Y,
          f = Nt;
        switch (Q) {
          case 8:
            (Bf(), (i = 6));
            break t;
          case 3:
          case 2:
          case 9:
          case 6:
            Lt.current === null && (l = !0);
            var s = Q;
            if (((Q = 0), (Nt = null), Ze(t, c, f, s), e && ma)) {
              i = 0;
              break t;
            }
            break;
          default:
            ((s = Q), (Q = 0), (Nt = null), Ze(t, c, f, s));
        }
      }
      (ev(), (i = lt));
      break;
    } catch (v) {
      eh(t, v);
    }
  while (!0);
  return (
    l && t.shellSuspendCounter++,
    (yl = _e = null),
    (L = a),
    (M.H = u),
    (M.A = n),
    Y === null && ((J = null), (q = 0), Ln()),
    i
  );
}
function ev() {
  for (; Y !== null; ) ih(Y);
}
function av(t, l) {
  var e = L;
  L |= 2;
  var a = uh(),
    u = nh();
  J !== t || q !== l
    ? ((bn = null), (pn = Ht() + 500), na(t, l))
    : (ma = su(t, l));
  t: do
    try {
      if (Q !== 0 && Y !== null) {
        l = Y;
        var n = Nt;
        l: switch (Q) {
          case 1:
            ((Q = 0), (Nt = null), Ze(t, l, n, 1));
            break;
          case 2:
          case 9:
            if (xs(n)) {
              ((Q = 0), (Nt = null), ks(l));
              break;
            }
            ((l = function () {
              ((Q !== 2 && Q !== 9) || J !== t || (Q = 7), il(t));
            }),
              n.then(l, l));
            break t;
          case 3:
            Q = 7;
            break t;
          case 4:
            Q = 5;
            break t;
          case 7:
            xs(n)
              ? ((Q = 0), (Nt = null), ks(l))
              : ((Q = 0), (Nt = null), Ze(t, l, n, 7));
            break;
          case 5:
            var i = null;
            switch (Y.tag) {
              case 26:
                i = Y.memoizedState;
              case 5:
              case 27:
                var c = Y;
                if (i ? Oh(i) : c.stateNode.complete) {
                  ((Q = 0), (Nt = null));
                  var f = c.sibling;
                  if (f !== null) Y = f;
                  else {
                    var s = c.return;
                    s !== null ? ((Y = s), $n(s)) : (Y = null);
                  }
                  break l;
                }
            }
            ((Q = 0), (Nt = null), Ze(t, l, n, 5));
            break;
          case 6:
            ((Q = 0), (Nt = null), Ze(t, l, n, 6));
            break;
          case 8:
            (Bf(), (lt = 6));
            break t;
          default:
            throw Error(p(462));
        }
      }
      uv();
      break;
    } catch (v) {
      eh(t, v);
    }
  while (!0);
  return (
    (yl = _e = null),
    (M.H = a),
    (M.A = u),
    (L = e),
    Y !== null ? 0 : ((J = null), (q = 0), Ln(), lt)
  );
}
function uv() {
  for (; Y !== null && !x0(); ) ih(Y);
}
function ih(t) {
  var l = jd(t.alternate, t, Al);
  ((t.memoizedProps = t.pendingProps), l === null ? $n(t) : (Y = l));
}
function ks(t) {
  var l = t,
    e = l.alternate;
  switch (l.tag) {
    case 15:
    case 0:
      l = Vs(e, l, l.pendingProps, l.type, void 0, q);
      break;
    case 11:
      l = Vs(e, l, l.pendingProps, l.type.render, l.ref, q);
      break;
    case 5:
      Ef(l);
    default:
      (Rd(e, l), (l = Y = Rr(l, Al)), (l = jd(e, l, Al)));
  }
  ((t.memoizedProps = t.pendingProps), l === null ? $n(t) : (Y = l));
}
function Ze(t, l, e, a) {
  ((yl = _e = null), Ef(l), (We = null), (ka = 0));
  var u = l.return;
  try {
    if (Jm(t, u, l, e, q)) {
      ((lt = 1), yn(t, wt(e, t.current)), (Y = null));
      return;
    }
  } catch (n) {
    if (u !== null) throw ((Y = u), n);
    ((lt = 1), yn(t, wt(e, t.current)), (Y = null));
    return;
  }
  l.flags & 32768
    ? (G || a === 1
        ? (t = !0)
        : ma || q & 536870912
          ? (t = !1)
          : ((ql = t = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = Lt.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
      ch(l, t))
    : $n(l);
}
function $n(t) {
  var l = t;
  do {
    if (l.flags & 32768) {
      ch(l, ql);
      return;
    }
    t = l.return;
    var e = $m(l.alternate, l, Al);
    if (e !== null) {
      Y = e;
      return;
    }
    if (((l = l.sibling), l !== null)) {
      Y = l;
      return;
    }
    Y = l = t;
  } while (l !== null);
  lt === 0 && (lt = 5);
}
function ch(t, l) {
  do {
    var e = Fm(t.alternate, t);
    if (e !== null) {
      ((e.flags &= 32767), (Y = e));
      return;
    }
    if (
      ((e = t.return),
      e !== null &&
        ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)),
      !l && ((t = t.sibling), t !== null))
    ) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  ((lt = 6), (Y = null));
}
function Is(t, l, e, a, u, n, i, c, f) {
  t.cancelPendingCommit = null;
  do Fn();
  while (st !== 0);
  if (L & 6) throw Error(p(327));
  if (l !== null) {
    if (l === t.current) throw Error(p(177));
    if (
      ((n = l.lanes | l.childLanes),
      (n |= cf),
      Y0(t, e, n, i, c, f),
      t === J && ((Y = J = null), (q = 0)),
      (ua = l),
      (wl = t),
      (pl = e),
      (_c = n),
      (Oc = u),
      (Pd = a),
      l.subtreeFlags & 10256 || l.flags & 10256
        ? ((t.callbackNode = null),
          (t.callbackPriority = 0),
          fv(un, function () {
            return (dh(), null);
          }))
        : ((t.callbackNode = null), (t.callbackPriority = 0)),
      (a = (l.flags & 13878) !== 0),
      l.subtreeFlags & 13878 || a)
    ) {
      ((a = M.T), (M.T = null), (u = X.p), (X.p = 2), (i = L), (L |= 4));
      try {
        km(t, l, e);
      } finally {
        ((L = i), (X.p = u), (M.T = a));
      }
    }
    ((st = 1), fh(), sh(), oh());
  }
}
function fh() {
  if (st === 1) {
    st = 0;
    var t = wl,
      l = ua,
      e = (l.flags & 13878) !== 0;
    if (l.subtreeFlags & 13878 || e) {
      ((e = M.T), (M.T = null));
      var a = X.p;
      X.p = 2;
      var u = L;
      L |= 4;
      try {
        Kd(l, t);
        var n = Nc,
          i = Or(t.containerInfo),
          c = n.focusedElem,
          f = n.selectionRange;
        if (
          i !== c &&
          c &&
          c.ownerDocument &&
          _r(c.ownerDocument.documentElement, c)
        ) {
          if (f !== null && nf(c)) {
            var s = f.start,
              v = f.end;
            if ((v === void 0 && (v = s), "selectionStart" in c))
              ((c.selectionStart = s),
                (c.selectionEnd = Math.min(v, c.value.length)));
            else {
              var h = c.ownerDocument || document,
                r = (h && h.defaultView) || window;
              if (r.getSelection) {
                var y = r.getSelection(),
                  E = c.textContent.length,
                  z = Math.min(f.start, E),
                  T = f.end === void 0 ? z : Math.min(f.end, E);
                !y.extend && z > T && ((i = T), (T = z), (z = i));
                var d = bs(c, z),
                  o = bs(c, T);
                if (
                  d &&
                  o &&
                  (y.rangeCount !== 1 ||
                    y.anchorNode !== d.node ||
                    y.anchorOffset !== d.offset ||
                    y.focusNode !== o.node ||
                    y.focusOffset !== o.offset)
                ) {
                  var m = h.createRange();
                  (m.setStart(d.node, d.offset),
                    y.removeAllRanges(),
                    z > T
                      ? (y.addRange(m), y.extend(o.node, o.offset))
                      : (m.setEnd(o.node, o.offset), y.addRange(m)));
                }
              }
            }
          }
          for (h = [], y = c; (y = y.parentNode); )
            y.nodeType === 1 &&
              h.push({ element: y, left: y.scrollLeft, top: y.scrollTop });
          for (
            typeof c.focus == "function" && c.focus(), c = 0;
            c < h.length;
            c++
          ) {
            var g = h[c];
            ((g.element.scrollLeft = g.left), (g.element.scrollTop = g.top));
          }
        }
        ((Un = !!Dc), (Nc = Dc = null));
      } finally {
        ((L = u), (X.p = a), (M.T = e));
      }
    }
    ((t.current = l), (st = 2));
  }
}
function sh() {
  if (st === 2) {
    st = 0;
    var t = wl,
      l = ua,
      e = (l.flags & 8772) !== 0;
    if (l.subtreeFlags & 8772 || e) {
      ((e = M.T), (M.T = null));
      var a = X.p;
      X.p = 2;
      var u = L;
      L |= 4;
      try {
        Ld(t, l.alternate, l);
      } finally {
        ((L = u), (X.p = a), (M.T = e));
      }
    }
    st = 3;
  }
}
function oh() {
  if (st === 4 || st === 3) {
    ((st = 0), M0());
    var t = wl,
      l = ua,
      e = pl,
      a = Pd;
    l.subtreeFlags & 10256 || l.flags & 10256
      ? (st = 5)
      : ((st = 0), (ua = wl = null), rh(t, t.pendingLanes));
    var u = t.pendingLanes;
    if (
      (u === 0 && (Jl = null),
      Ic(e),
      (l = l.stateNode),
      Bt && typeof Bt.onCommitFiberRoot == "function")
    )
      try {
        Bt.onCommitFiberRoot(fu, l, void 0, (l.current.flags & 128) === 128);
      } catch {}
    if (a !== null) {
      ((l = M.T), (u = X.p), (X.p = 2), (M.T = null));
      try {
        for (var n = t.onRecoverableError, i = 0; i < a.length; i++) {
          var c = a[i];
          n(c.value, { componentStack: c.stack });
        }
      } finally {
        ((M.T = l), (X.p = u));
      }
    }
    (pl & 3 && Fn(),
      il(t),
      (u = t.pendingLanes),
      e & 261930 && u & 42
        ? t === xc
          ? Za++
          : ((Za = 0), (xc = t))
        : (Za = 0),
      yu(0));
  }
}
function rh(t, l) {
  (t.pooledCacheLanes &= l) === 0 &&
    ((l = t.pooledCache), l != null && ((t.pooledCache = null), hu(l)));
}
function Fn() {
  return (fh(), sh(), oh(), dh());
}
function dh() {
  if (st !== 5) return !1;
  var t = wl,
    l = _c;
  _c = 0;
  var e = Ic(pl),
    a = M.T,
    u = X.p;
  try {
    ((X.p = 32 > e ? 32 : e), (M.T = null), (e = Oc), (Oc = null));
    var n = wl,
      i = pl;
    if (((st = 0), (ua = wl = null), (pl = 0), L & 6)) throw Error(p(331));
    var c = L;
    if (
      ((L |= 4),
      Fd(n.current),
      wd(n, n.current, i, e),
      (L = c),
      yu(0, !1),
      Bt && typeof Bt.onPostCommitFiberRoot == "function")
    )
      try {
        Bt.onPostCommitFiberRoot(fu, n);
      } catch {}
    return !0;
  } finally {
    ((X.p = u), (M.T = a), rh(t, l));
  }
}
function Ps(t, l, e) {
  ((l = wt(e, l)),
    (l = bc(t.stateNode, l, 2)),
    (t = Kl(t, l, 2)),
    t !== null && (ou(t, 2), il(t)));
}
function Z(t, l, e) {
  if (t.tag === 3) Ps(t, t, e);
  else
    for (; l !== null; ) {
      if (l.tag === 3) {
        Ps(l, t, e);
        break;
      } else if (l.tag === 1) {
        var a = l.stateNode;
        if (
          typeof l.type.getDerivedStateFromError == "function" ||
          (typeof a.componentDidCatch == "function" &&
            (Jl === null || !Jl.has(a)))
        ) {
          ((t = wt(e, t)),
            (e = xd(2)),
            (a = Kl(l, e, 2)),
            a !== null && (Md(e, a, l, t), ou(a, 2), il(a)));
          break;
        }
      }
      l = l.return;
    }
}
function ji(t, l, e) {
  var a = t.pingCache;
  if (a === null) {
    a = t.pingCache = new tv();
    var u = new Set();
    a.set(l, u);
  } else ((u = a.get(l)), u === void 0 && ((u = new Set()), a.set(l, u)));
  u.has(e) || ((Rf = !0), u.add(e), (t = nv.bind(null, t, l, e)), l.then(t, t));
}
function nv(t, l, e) {
  var a = t.pingCache;
  (a !== null && a.delete(l),
    (t.pingedLanes |= t.suspendedLanes & e),
    (t.warmLanes &= ~e),
    J === t &&
      (q & e) === e &&
      (lt === 4 || (lt === 3 && (q & 62914560) === q && 300 > Ht() - wn)
        ? !(L & 2) && na(t, 0)
        : (Hf |= e),
      aa === q && (aa = 0)),
    il(t));
}
function hh(t, l) {
  (l === 0 && (l = ur()), (t = Ae(t, l)), t !== null && (ou(t, l), il(t)));
}
function iv(t) {
  var l = t.memoizedState,
    e = 0;
  (l !== null && (e = l.retryLane), hh(t, e));
}
function cv(t, l) {
  var e = 0;
  switch (t.tag) {
    case 31:
    case 13:
      var a = t.stateNode,
        u = t.memoizedState;
      u !== null && (e = u.retryLane);
      break;
    case 19:
      a = t.stateNode;
      break;
    case 22:
      a = t.stateNode._retryCache;
      break;
    default:
      throw Error(p(314));
  }
  (a !== null && a.delete(l), hh(t, e));
}
function fv(t, l) {
  return Fc(t, l);
}
var zn = null,
  Ne = null,
  Mc = !1,
  Tn = !1,
  Ri = !1,
  Ll = 0;
function il(t) {
  (t !== Ne &&
    t.next === null &&
    (Ne === null ? (zn = Ne = t) : (Ne = Ne.next = t)),
    (Tn = !0),
    Mc || ((Mc = !0), ov()));
}
function yu(t, l) {
  if (!Ri && Tn) {
    Ri = !0;
    do
      for (var e = !1, a = zn; a !== null; ) {
        if (t !== 0) {
          var u = a.pendingLanes;
          if (u === 0) var n = 0;
          else {
            var i = a.suspendedLanes,
              c = a.pingedLanes;
            ((n = (1 << (31 - Yt(42 | t) + 1)) - 1),
              (n &= u & ~(i & ~c)),
              (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0));
          }
          n !== 0 && ((e = !0), to(a, n));
        } else
          ((n = q),
            (n = Bn(
              a,
              a === J ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
            )),
            !(n & 3) || su(a, n) || ((e = !0), to(a, n)));
        a = a.next;
      }
    while (e);
    Ri = !1;
  }
}
function sv() {
  mh();
}
function mh() {
  Tn = Mc = !1;
  var t = 0;
  Ll !== 0 && bv() && (t = Ll);
  for (var l = Ht(), e = null, a = zn; a !== null; ) {
    var u = a.next,
      n = vh(a, l);
    (n === 0
      ? ((a.next = null),
        e === null ? (zn = u) : (e.next = u),
        u === null && (Ne = e))
      : ((e = a), (t !== 0 || n & 3) && (Tn = !0)),
      (a = u));
  }
  ((st !== 0 && st !== 5) || yu(t), Ll !== 0 && (Ll = 0));
}
function vh(t, l) {
  for (
    var e = t.suspendedLanes,
      a = t.pingedLanes,
      u = t.expirationTimes,
      n = t.pendingLanes & -62914561;
    0 < n;
  ) {
    var i = 31 - Yt(n),
      c = 1 << i,
      f = u[i];
    (f === -1
      ? (!(c & e) || c & a) && (u[i] = B0(c, l))
      : f <= l && (t.expiredLanes |= c),
      (n &= ~c));
  }
  if (
    ((l = J),
    (e = q),
    (e = Bn(
      t,
      t === l ? e : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
    )),
    (a = t.callbackNode),
    e === 0 ||
      (t === l && (Q === 2 || Q === 9)) ||
      t.cancelPendingCommit !== null)
  )
    return (
      a !== null && a !== null && fi(a),
      (t.callbackNode = null),
      (t.callbackPriority = 0)
    );
  if (!(e & 3) || su(t, e)) {
    if (((l = e & -e), l === t.callbackPriority)) return l;
    switch ((a !== null && fi(a), Ic(e))) {
      case 2:
      case 8:
        e = er;
        break;
      case 32:
        e = un;
        break;
      case 268435456:
        e = ar;
        break;
      default:
        e = un;
    }
    return (
      (a = yh.bind(null, t)),
      (e = Fc(e, a)),
      (t.callbackPriority = l),
      (t.callbackNode = e),
      l
    );
  }
  return (
    a !== null && a !== null && fi(a),
    (t.callbackPriority = 2),
    (t.callbackNode = null),
    2
  );
}
function yh(t, l) {
  if (st !== 0 && st !== 5)
    return ((t.callbackNode = null), (t.callbackPriority = 0), null);
  var e = t.callbackNode;
  if (Fn() && t.callbackNode !== e) return null;
  var a = q;
  return (
    (a = Bn(
      t,
      t === J ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
    )),
    a === 0
      ? null
      : (lh(t, a, l),
        vh(t, Ht()),
        t.callbackNode != null && t.callbackNode === e
          ? yh.bind(null, t)
          : null)
  );
}
function to(t, l) {
  if (Fn()) return null;
  lh(t, l, !0);
}
function ov() {
  zv(function () {
    L & 6 ? Fc(lr, sv) : mh();
  });
}
function Yf() {
  if (Ll === 0) {
    var t = ta;
    (t === 0 && ((t = _u), (_u <<= 1), !(_u & 261888) && (_u = 256)), (Ll = t));
  }
  return Ll;
}
function lo(t) {
  return t == null || typeof t == "symbol" || typeof t == "boolean"
    ? null
    : typeof t == "function"
      ? t
      : Lu("" + t);
}
function eo(t, l) {
  var e = l.ownerDocument.createElement("input");
  return (
    (e.name = l.name),
    (e.value = l.value),
    t.id && e.setAttribute("form", t.id),
    l.parentNode.insertBefore(e, l),
    (t = new FormData(t)),
    e.parentNode.removeChild(e),
    t
  );
}
function rv(t, l, e, a, u) {
  if (l === "submit" && e && e.stateNode === u) {
    var n = lo((u[Ut] || null).action),
      i = a.submitter;
    i &&
      ((l = (l = i[Ut] || null)
        ? lo(l.formAction)
        : i.getAttribute("formAction")),
      l !== null && ((n = l), (i = null)));
    var c = new Yn("action", "action", null, a, u);
    t.push({
      event: c,
      listeners: [
        {
          instance: null,
          listener: function () {
            if (a.defaultPrevented) {
              if (Ll !== 0) {
                var f = i ? eo(u, i) : new FormData(u);
                Sc(
                  e,
                  { pending: !0, data: f, method: u.method, action: n },
                  null,
                  f,
                );
              }
            } else
              typeof n == "function" &&
                (c.preventDefault(),
                (f = i ? eo(u, i) : new FormData(u)),
                Sc(
                  e,
                  { pending: !0, data: f, method: u.method, action: n },
                  n,
                  f,
                ));
          },
          currentTarget: u,
        },
      ],
    });
  }
}
for (var Hi = 0; Hi < ic.length; Hi++) {
  var Bi = ic[Hi],
    dv = Bi.toLowerCase(),
    hv = Bi[0].toUpperCase() + Bi.slice(1);
  tl(dv, "on" + hv);
}
tl(Mr, "onAnimationEnd");
tl(Ur, "onAnimationIteration");
tl(Dr, "onAnimationStart");
tl("dblclick", "onDoubleClick");
tl("focusin", "onFocus");
tl("focusout", "onBlur");
tl(Um, "onTransitionRun");
tl(Dm, "onTransitionStart");
tl(Nm, "onTransitionCancel");
tl(Nr, "onTransitionEnd");
Ie("onMouseEnter", ["mouseout", "mouseover"]);
Ie("onMouseLeave", ["mouseout", "mouseover"]);
Ie("onPointerEnter", ["pointerout", "pointerover"]);
Ie("onPointerLeave", ["pointerout", "pointerover"]);
Ee(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
Ee(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
Ee("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ee(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
Ee(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
Ee(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var tu =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  mv = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle"
      .split(" ")
      .concat(tu),
  );
function gh(t, l) {
  l = (l & 4) !== 0;
  for (var e = 0; e < t.length; e++) {
    var a = t[e],
      u = a.event;
    a = a.listeners;
    t: {
      var n = void 0;
      if (l)
        for (var i = a.length - 1; 0 <= i; i--) {
          var c = a[i],
            f = c.instance,
            s = c.currentTarget;
          if (((c = c.listener), f !== n && u.isPropagationStopped())) break t;
          ((n = c), (u.currentTarget = s));
          try {
            n(u);
          } catch (v) {
            cn(v);
          }
          ((u.currentTarget = null), (n = f));
        }
      else
        for (i = 0; i < a.length; i++) {
          if (
            ((c = a[i]),
            (f = c.instance),
            (s = c.currentTarget),
            (c = c.listener),
            f !== n && u.isPropagationStopped())
          )
            break t;
          ((n = c), (u.currentTarget = s));
          try {
            n(u);
          } catch (v) {
            cn(v);
          }
          ((u.currentTarget = null), (n = f));
        }
    }
  }
}
function B(t, l) {
  var e = l[Ii];
  e === void 0 && (e = l[Ii] = new Set());
  var a = t + "__bubble";
  e.has(a) || (Sh(l, t, 2, !1), e.add(a));
}
function Yi(t, l, e) {
  var a = 0;
  (l && (a |= 4), Sh(e, t, a, l));
}
var Hu = "_reactListening" + Math.random().toString(36).slice(2);
function qf(t) {
  if (!t[Hu]) {
    ((t[Hu] = !0),
      sr.forEach(function (e) {
        e !== "selectionchange" && (mv.has(e) || Yi(e, !1, t), Yi(e, !0, t));
      }));
    var l = t.nodeType === 9 ? t : t.ownerDocument;
    l === null || l[Hu] || ((l[Hu] = !0), Yi("selectionchange", !1, l));
  }
}
function Sh(t, l, e, a) {
  switch (Nh(l)) {
    case 2:
      var u = Qv;
      break;
    case 8:
      u = Zv;
      break;
    default:
      u = Qf;
  }
  ((e = u.bind(null, l, e, t)),
    (u = void 0),
    !ac ||
      (l !== "touchstart" && l !== "touchmove" && l !== "wheel") ||
      (u = !0),
    a
      ? u !== void 0
        ? t.addEventListener(l, e, { capture: !0, passive: u })
        : t.addEventListener(l, e, !0)
      : u !== void 0
        ? t.addEventListener(l, e, { passive: u })
        : t.addEventListener(l, e, !1));
}
function qi(t, l, e, a, u) {
  var n = a;
  if (!(l & 1) && !(l & 2) && a !== null)
    t: for (;;) {
      if (a === null) return;
      var i = a.tag;
      if (i === 3 || i === 4) {
        var c = a.stateNode.containerInfo;
        if (c === u) break;
        if (i === 4)
          for (i = a.return; i !== null; ) {
            var f = i.tag;
            if ((f === 3 || f === 4) && i.stateNode.containerInfo === u) return;
            i = i.return;
          }
        for (; c !== null; ) {
          if (((i = Re(c)), i === null)) return;
          if (((f = i.tag), f === 5 || f === 6 || f === 26 || f === 27)) {
            a = n = i;
            continue t;
          }
          c = c.parentNode;
        }
      }
      a = a.return;
    }
  gr(function () {
    var s = n,
      v = lf(e),
      h = [];
    t: {
      var r = Cr.get(t);
      if (r !== void 0) {
        var y = Yn,
          E = t;
        switch (t) {
          case "keypress":
            if (Qu(e) === 0) break t;
          case "keydown":
          case "keyup":
            y = cm;
            break;
          case "focusin":
            ((E = "focus"), (y = hi));
            break;
          case "focusout":
            ((E = "blur"), (y = hi));
            break;
          case "beforeblur":
          case "afterblur":
            y = hi;
            break;
          case "click":
            if (e.button === 2) break t;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = os;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = $0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = om;
            break;
          case Mr:
          case Ur:
          case Dr:
            y = I0;
            break;
          case Nr:
            y = dm;
            break;
          case "scroll":
          case "scrollend":
            y = w0;
            break;
          case "wheel":
            y = mm;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = tm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = ds;
            break;
          case "toggle":
          case "beforetoggle":
            y = ym;
        }
        var z = (l & 4) !== 0,
          T = !z && (t === "scroll" || t === "scrollend"),
          d = z ? (r !== null ? r + "Capture" : null) : r;
        z = [];
        for (var o = s, m; o !== null; ) {
          var g = o;
          if (
            ((m = g.stateNode),
            (g = g.tag),
            (g !== 5 && g !== 26 && g !== 27) ||
              m === null ||
              d === null ||
              ((g = Ja(o, d)), g != null && z.push(lu(o, g, m))),
            T)
          )
            break;
          o = o.return;
        }
        0 < z.length &&
          ((r = new y(r, E, null, e, v)), h.push({ event: r, listeners: z }));
      }
    }
    if (!(l & 7)) {
      t: {
        if (
          ((r = t === "mouseover" || t === "pointerover"),
          (y = t === "mouseout" || t === "pointerout"),
          r &&
            e !== ec &&
            (E = e.relatedTarget || e.fromElement) &&
            (Re(E) || E[oa]))
        )
          break t;
        if (
          (y || r) &&
          ((r =
            v.window === v
              ? v
              : (r = v.ownerDocument)
                ? r.defaultView || r.parentWindow
                : window),
          y
            ? ((E = e.relatedTarget || e.toElement),
              (y = s),
              (E = E ? Re(E) : null),
              E !== null &&
                ((T = cu(E)),
                (z = E.tag),
                E !== T || (z !== 5 && z !== 27 && z !== 6)) &&
                (E = null))
            : ((y = null), (E = s)),
          y !== E)
        ) {
          if (
            ((z = os),
            (g = "onMouseLeave"),
            (d = "onMouseEnter"),
            (o = "mouse"),
            (t === "pointerout" || t === "pointerover") &&
              ((z = ds),
              (g = "onPointerLeave"),
              (d = "onPointerEnter"),
              (o = "pointer")),
            (T = y == null ? r : Ma(y)),
            (m = E == null ? r : Ma(E)),
            (r = new z(g, o + "leave", y, e, v)),
            (r.target = T),
            (r.relatedTarget = m),
            (g = null),
            Re(v) === s &&
              ((z = new z(d, o + "enter", E, e, v)),
              (z.target = m),
              (z.relatedTarget = T),
              (g = z)),
            (T = g),
            y && E)
          )
            l: {
              for (z = vv, d = y, o = E, m = 0, g = d; g; g = z(g)) m++;
              g = 0;
              for (var _ = o; _; _ = z(_)) g++;
              for (; 0 < m - g; ) ((d = z(d)), m--);
              for (; 0 < g - m; ) ((o = z(o)), g--);
              for (; m--; ) {
                if (d === o || (o !== null && d === o.alternate)) {
                  z = d;
                  break l;
                }
                ((d = z(d)), (o = z(o)));
              }
              z = null;
            }
          else z = null;
          (y !== null && ao(h, r, y, z, !1),
            E !== null && T !== null && ao(h, T, E, z, !0));
        }
      }
      t: {
        if (
          ((r = s ? Ma(s) : window),
          (y = r.nodeName && r.nodeName.toLowerCase()),
          y === "select" || (y === "input" && r.type === "file"))
        )
          var U = ys;
        else if (vs(r))
          if (Tr) U = Om;
          else {
            U = Am;
            var A = Tm;
          }
        else
          ((y = r.nodeName),
            !y ||
            y.toLowerCase() !== "input" ||
            (r.type !== "checkbox" && r.type !== "radio")
              ? s && tf(s.elementType) && (U = ys)
              : (U = _m));
        if (U && (U = U(t, s))) {
          zr(h, U, e, v);
          break t;
        }
        (A && A(t, r, s),
          t === "focusout" &&
            s &&
            r.type === "number" &&
            s.memoizedProps.value != null &&
            lc(r, "number", r.value));
      }
      switch (((A = s ? Ma(s) : window), t)) {
        case "focusin":
          (vs(A) || A.contentEditable === "true") &&
            ((Ye = A), (uc = s), (Ra = null));
          break;
        case "focusout":
          Ra = uc = Ye = null;
          break;
        case "mousedown":
          nc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ((nc = !1), Es(h, e, v));
          break;
        case "selectionchange":
          if (Mm) break;
        case "keydown":
        case "keyup":
          Es(h, e, v);
      }
      var x;
      if (uf)
        t: {
          switch (t) {
            case "compositionstart":
              var C = "onCompositionStart";
              break t;
            case "compositionend":
              C = "onCompositionEnd";
              break t;
            case "compositionupdate":
              C = "onCompositionUpdate";
              break t;
          }
          C = void 0;
        }
      else
        Be
          ? br(t, e) && (C = "onCompositionEnd")
          : t === "keydown" && e.keyCode === 229 && (C = "onCompositionStart");
      (C &&
        (pr &&
          e.locale !== "ko" &&
          (Be || C !== "onCompositionStart"
            ? C === "onCompositionEnd" && Be && (x = Sr())
            : ((Yl = v),
              (ef = "value" in Yl ? Yl.value : Yl.textContent),
              (Be = !0))),
        (A = An(s, C)),
        0 < A.length &&
          ((C = new rs(C, t, null, e, v)),
          h.push({ event: C, listeners: A }),
          x ? (C.data = x) : ((x = Er(e)), x !== null && (C.data = x)))),
        (x = Sm ? pm(t, e) : bm(t, e)) &&
          ((C = An(s, "onBeforeInput")),
          0 < C.length &&
            ((A = new rs("onBeforeInput", "beforeinput", null, e, v)),
            h.push({ event: A, listeners: C }),
            (A.data = x))),
        rv(h, t, s, e, v));
    }
    gh(h, l);
  });
}
function lu(t, l, e) {
  return { instance: t, listener: l, currentTarget: e };
}
function An(t, l) {
  for (var e = l + "Capture", a = []; t !== null; ) {
    var u = t,
      n = u.stateNode;
    if (
      ((u = u.tag),
      (u !== 5 && u !== 26 && u !== 27) ||
        n === null ||
        ((u = Ja(t, e)),
        u != null && a.unshift(lu(t, u, n)),
        (u = Ja(t, l)),
        u != null && a.push(lu(t, u, n))),
      t.tag === 3)
    )
      return a;
    t = t.return;
  }
  return [];
}
function vv(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5 && t.tag !== 27);
  return t || null;
}
function ao(t, l, e, a, u) {
  for (var n = l._reactName, i = []; e !== null && e !== a; ) {
    var c = e,
      f = c.alternate,
      s = c.stateNode;
    if (((c = c.tag), f !== null && f === a)) break;
    ((c !== 5 && c !== 26 && c !== 27) ||
      s === null ||
      ((f = s),
      u
        ? ((s = Ja(e, n)), s != null && i.unshift(lu(e, s, f)))
        : u || ((s = Ja(e, n)), s != null && i.push(lu(e, s, f)))),
      (e = e.return));
  }
  i.length !== 0 && t.push({ event: l, listeners: i });
}
var yv = /\r\n?/g,
  gv = /\u0000|\uFFFD/g;
function uo(t) {
  return (typeof t == "string" ? t : "" + t)
    .replace(
      yv,
      `
`,
    )
    .replace(gv, "");
}
function ph(t, l) {
  return ((l = uo(l)), uo(t) === l);
}
function V(t, l, e, a, u, n) {
  switch (e) {
    case "children":
      typeof a == "string"
        ? l === "body" || (l === "textarea" && a === "") || Pe(t, a)
        : (typeof a == "number" || typeof a == "bigint") &&
          l !== "body" &&
          Pe(t, "" + a);
      break;
    case "className":
      Mu(t, "class", a);
      break;
    case "tabIndex":
      Mu(t, "tabindex", a);
      break;
    case "dir":
    case "role":
    case "viewBox":
    case "width":
    case "height":
      Mu(t, e, a);
      break;
    case "style":
      yr(t, a, n);
      break;
    case "data":
      if (l !== "object") {
        Mu(t, "data", a);
        break;
      }
    case "src":
    case "href":
      if (a === "" && (l !== "a" || e !== "href")) {
        t.removeAttribute(e);
        break;
      }
      if (
        a == null ||
        typeof a == "function" ||
        typeof a == "symbol" ||
        typeof a == "boolean"
      ) {
        t.removeAttribute(e);
        break;
      }
      ((a = Lu("" + a)), t.setAttribute(e, a));
      break;
    case "action":
    case "formAction":
      if (typeof a == "function") {
        t.setAttribute(
          e,
          "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
        );
        break;
      } else
        typeof n == "function" &&
          (e === "formAction"
            ? (l !== "input" && V(t, l, "name", u.name, u, null),
              V(t, l, "formEncType", u.formEncType, u, null),
              V(t, l, "formMethod", u.formMethod, u, null),
              V(t, l, "formTarget", u.formTarget, u, null))
            : (V(t, l, "encType", u.encType, u, null),
              V(t, l, "method", u.method, u, null),
              V(t, l, "target", u.target, u, null)));
      if (a == null || typeof a == "symbol" || typeof a == "boolean") {
        t.removeAttribute(e);
        break;
      }
      ((a = Lu("" + a)), t.setAttribute(e, a));
      break;
    case "onClick":
      a != null && (t.onclick = vl);
      break;
    case "onScroll":
      a != null && B("scroll", t);
      break;
    case "onScrollEnd":
      a != null && B("scrollend", t);
      break;
    case "dangerouslySetInnerHTML":
      if (a != null) {
        if (typeof a != "object" || !("__html" in a)) throw Error(p(61));
        if (((e = a.__html), e != null)) {
          if (u.children != null) throw Error(p(60));
          t.innerHTML = e;
        }
      }
      break;
    case "multiple":
      t.multiple = a && typeof a != "function" && typeof a != "symbol";
      break;
    case "muted":
      t.muted = a && typeof a != "function" && typeof a != "symbol";
      break;
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "defaultValue":
    case "defaultChecked":
    case "innerHTML":
    case "ref":
      break;
    case "autoFocus":
      break;
    case "xlinkHref":
      if (
        a == null ||
        typeof a == "function" ||
        typeof a == "boolean" ||
        typeof a == "symbol"
      ) {
        t.removeAttribute("xlink:href");
        break;
      }
      ((e = Lu("" + a)),
        t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e));
      break;
    case "contentEditable":
    case "spellCheck":
    case "draggable":
    case "value":
    case "autoReverse":
    case "externalResourcesRequired":
    case "focusable":
    case "preserveAlpha":
      a != null && typeof a != "function" && typeof a != "symbol"
        ? t.setAttribute(e, "" + a)
        : t.removeAttribute(e);
      break;
    case "inert":
    case "allowFullScreen":
    case "async":
    case "autoPlay":
    case "controls":
    case "default":
    case "defer":
    case "disabled":
    case "disablePictureInPicture":
    case "disableRemotePlayback":
    case "formNoValidate":
    case "hidden":
    case "loop":
    case "noModule":
    case "noValidate":
    case "open":
    case "playsInline":
    case "readOnly":
    case "required":
    case "reversed":
    case "scoped":
    case "seamless":
    case "itemScope":
      a && typeof a != "function" && typeof a != "symbol"
        ? t.setAttribute(e, "")
        : t.removeAttribute(e);
      break;
    case "capture":
    case "download":
      a === !0
        ? t.setAttribute(e, "")
        : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? t.setAttribute(e, a)
          : t.removeAttribute(e);
      break;
    case "cols":
    case "rows":
    case "size":
    case "span":
      a != null &&
      typeof a != "function" &&
      typeof a != "symbol" &&
      !isNaN(a) &&
      1 <= a
        ? t.setAttribute(e, a)
        : t.removeAttribute(e);
      break;
    case "rowSpan":
    case "start":
      a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
        ? t.removeAttribute(e)
        : t.setAttribute(e, a);
      break;
    case "popover":
      (B("beforetoggle", t), B("toggle", t), Gu(t, "popover", a));
      break;
    case "xlinkActuate":
      cl(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
      break;
    case "xlinkArcrole":
      cl(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
      break;
    case "xlinkRole":
      cl(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
      break;
    case "xlinkShow":
      cl(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
      break;
    case "xlinkTitle":
      cl(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
      break;
    case "xlinkType":
      cl(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
      break;
    case "xmlBase":
      cl(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
      break;
    case "xmlLang":
      cl(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
      break;
    case "xmlSpace":
      cl(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
      break;
    case "is":
      Gu(t, "is", a);
      break;
    case "innerText":
    case "textContent":
      break;
    default:
      (!(2 < e.length) ||
        (e[0] !== "o" && e[0] !== "O") ||
        (e[1] !== "n" && e[1] !== "N")) &&
        ((e = K0.get(e) || e), Gu(t, e, a));
  }
}
function Uc(t, l, e, a, u, n) {
  switch (e) {
    case "style":
      yr(t, a, n);
      break;
    case "dangerouslySetInnerHTML":
      if (a != null) {
        if (typeof a != "object" || !("__html" in a)) throw Error(p(61));
        if (((e = a.__html), e != null)) {
          if (u.children != null) throw Error(p(60));
          t.innerHTML = e;
        }
      }
      break;
    case "children":
      typeof a == "string"
        ? Pe(t, a)
        : (typeof a == "number" || typeof a == "bigint") && Pe(t, "" + a);
      break;
    case "onScroll":
      a != null && B("scroll", t);
      break;
    case "onScrollEnd":
      a != null && B("scrollend", t);
      break;
    case "onClick":
      a != null && (t.onclick = vl);
      break;
    case "suppressContentEditableWarning":
    case "suppressHydrationWarning":
    case "innerHTML":
    case "ref":
      break;
    case "innerText":
    case "textContent":
      break;
    default:
      if (!or.hasOwnProperty(e))
        t: {
          if (
            e[0] === "o" &&
            e[1] === "n" &&
            ((u = e.endsWith("Capture")),
            (l = e.slice(2, u ? e.length - 7 : void 0)),
            (n = t[Ut] || null),
            (n = n != null ? n[e] : null),
            typeof n == "function" && t.removeEventListener(l, n, u),
            typeof a == "function")
          ) {
            (typeof n != "function" &&
              n !== null &&
              (e in t
                ? (t[e] = null)
                : t.hasAttribute(e) && t.removeAttribute(e)),
              t.addEventListener(l, a, u));
            break t;
          }
          e in t ? (t[e] = a) : a === !0 ? t.setAttribute(e, "") : Gu(t, e, a);
        }
  }
}
function pt(t, l, e) {
  switch (l) {
    case "div":
    case "span":
    case "svg":
    case "path":
    case "a":
    case "g":
    case "p":
    case "li":
      break;
    case "img":
      (B("error", t), B("load", t));
      var a = !1,
        u = !1,
        n;
      for (n in e)
        if (e.hasOwnProperty(n)) {
          var i = e[n];
          if (i != null)
            switch (n) {
              case "src":
                a = !0;
                break;
              case "srcSet":
                u = !0;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(p(137, l));
              default:
                V(t, l, n, i, e, null);
            }
        }
      (u && V(t, l, "srcSet", e.srcSet, e, null),
        a && V(t, l, "src", e.src, e, null));
      return;
    case "input":
      B("invalid", t);
      var c = (n = i = u = null),
        f = null,
        s = null;
      for (a in e)
        if (e.hasOwnProperty(a)) {
          var v = e[a];
          if (v != null)
            switch (a) {
              case "name":
                u = v;
                break;
              case "type":
                i = v;
                break;
              case "checked":
                f = v;
                break;
              case "defaultChecked":
                s = v;
                break;
              case "value":
                n = v;
                break;
              case "defaultValue":
                c = v;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(p(137, l));
                break;
              default:
                V(t, l, a, v, e, null);
            }
        }
      hr(t, n, c, f, s, i, u, !1);
      return;
    case "select":
      (B("invalid", t), (a = i = n = null));
      for (u in e)
        if (e.hasOwnProperty(u) && ((c = e[u]), c != null))
          switch (u) {
            case "value":
              n = c;
              break;
            case "defaultValue":
              i = c;
              break;
            case "multiple":
              a = c;
            default:
              V(t, l, u, c, e, null);
          }
      ((l = n),
        (e = i),
        (t.multiple = !!a),
        l != null ? Ke(t, !!a, l, !1) : e != null && Ke(t, !!a, e, !0));
      return;
    case "textarea":
      (B("invalid", t), (n = u = a = null));
      for (i in e)
        if (e.hasOwnProperty(i) && ((c = e[i]), c != null))
          switch (i) {
            case "value":
              a = c;
              break;
            case "defaultValue":
              u = c;
              break;
            case "children":
              n = c;
              break;
            case "dangerouslySetInnerHTML":
              if (c != null) throw Error(p(91));
              break;
            default:
              V(t, l, i, c, e, null);
          }
      vr(t, a, u, n);
      return;
    case "option":
      for (f in e)
        if (e.hasOwnProperty(f) && ((a = e[f]), a != null))
          switch (f) {
            case "selected":
              t.selected = a && typeof a != "function" && typeof a != "symbol";
              break;
            default:
              V(t, l, f, a, e, null);
          }
      return;
    case "dialog":
      (B("beforetoggle", t), B("toggle", t), B("cancel", t), B("close", t));
      break;
    case "iframe":
    case "object":
      B("load", t);
      break;
    case "video":
    case "audio":
      for (a = 0; a < tu.length; a++) B(tu[a], t);
      break;
    case "image":
      (B("error", t), B("load", t));
      break;
    case "details":
      B("toggle", t);
      break;
    case "embed":
    case "source":
    case "link":
      (B("error", t), B("load", t));
    case "area":
    case "base":
    case "br":
    case "col":
    case "hr":
    case "keygen":
    case "meta":
    case "param":
    case "track":
    case "wbr":
    case "menuitem":
      for (s in e)
        if (e.hasOwnProperty(s) && ((a = e[s]), a != null))
          switch (s) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(p(137, l));
            default:
              V(t, l, s, a, e, null);
          }
      return;
    default:
      if (tf(l)) {
        for (v in e)
          e.hasOwnProperty(v) &&
            ((a = e[v]), a !== void 0 && Uc(t, l, v, a, e, void 0));
        return;
      }
  }
  for (c in e)
    e.hasOwnProperty(c) && ((a = e[c]), a != null && V(t, l, c, a, e, null));
}
function Sv(t, l, e, a) {
  switch (l) {
    case "div":
    case "span":
    case "svg":
    case "path":
    case "a":
    case "g":
    case "p":
    case "li":
      break;
    case "input":
      var u = null,
        n = null,
        i = null,
        c = null,
        f = null,
        s = null,
        v = null;
      for (y in e) {
        var h = e[y];
        if (e.hasOwnProperty(y) && h != null)
          switch (y) {
            case "checked":
              break;
            case "value":
              break;
            case "defaultValue":
              f = h;
            default:
              a.hasOwnProperty(y) || V(t, l, y, null, a, h);
          }
      }
      for (var r in a) {
        var y = a[r];
        if (((h = e[r]), a.hasOwnProperty(r) && (y != null || h != null)))
          switch (r) {
            case "type":
              n = y;
              break;
            case "name":
              u = y;
              break;
            case "checked":
              s = y;
              break;
            case "defaultChecked":
              v = y;
              break;
            case "value":
              i = y;
              break;
            case "defaultValue":
              c = y;
              break;
            case "children":
            case "dangerouslySetInnerHTML":
              if (y != null) throw Error(p(137, l));
              break;
            default:
              y !== h && V(t, l, r, y, a, h);
          }
      }
      tc(t, i, c, f, s, v, n, u);
      return;
    case "select":
      y = i = c = r = null;
      for (n in e)
        if (((f = e[n]), e.hasOwnProperty(n) && f != null))
          switch (n) {
            case "value":
              break;
            case "multiple":
              y = f;
            default:
              a.hasOwnProperty(n) || V(t, l, n, null, a, f);
          }
      for (u in a)
        if (
          ((n = a[u]),
          (f = e[u]),
          a.hasOwnProperty(u) && (n != null || f != null))
        )
          switch (u) {
            case "value":
              r = n;
              break;
            case "defaultValue":
              c = n;
              break;
            case "multiple":
              i = n;
            default:
              n !== f && V(t, l, u, n, a, f);
          }
      ((l = c),
        (e = i),
        (a = y),
        r != null
          ? Ke(t, !!e, r, !1)
          : !!a != !!e &&
            (l != null ? Ke(t, !!e, l, !0) : Ke(t, !!e, e ? [] : "", !1)));
      return;
    case "textarea":
      y = r = null;
      for (c in e)
        if (
          ((u = e[c]), e.hasOwnProperty(c) && u != null && !a.hasOwnProperty(c))
        )
          switch (c) {
            case "value":
              break;
            case "children":
              break;
            default:
              V(t, l, c, null, a, u);
          }
      for (i in a)
        if (
          ((u = a[i]),
          (n = e[i]),
          a.hasOwnProperty(i) && (u != null || n != null))
        )
          switch (i) {
            case "value":
              r = u;
              break;
            case "defaultValue":
              y = u;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (u != null) throw Error(p(91));
              break;
            default:
              u !== n && V(t, l, i, u, a, n);
          }
      mr(t, r, y);
      return;
    case "option":
      for (var E in e)
        if (
          ((r = e[E]), e.hasOwnProperty(E) && r != null && !a.hasOwnProperty(E))
        )
          switch (E) {
            case "selected":
              t.selected = !1;
              break;
            default:
              V(t, l, E, null, a, r);
          }
      for (f in a)
        if (
          ((r = a[f]),
          (y = e[f]),
          a.hasOwnProperty(f) && r !== y && (r != null || y != null))
        )
          switch (f) {
            case "selected":
              t.selected = r && typeof r != "function" && typeof r != "symbol";
              break;
            default:
              V(t, l, f, r, a, y);
          }
      return;
    case "img":
    case "link":
    case "area":
    case "base":
    case "br":
    case "col":
    case "embed":
    case "hr":
    case "keygen":
    case "meta":
    case "param":
    case "source":
    case "track":
    case "wbr":
    case "menuitem":
      for (var z in e)
        ((r = e[z]),
          e.hasOwnProperty(z) &&
            r != null &&
            !a.hasOwnProperty(z) &&
            V(t, l, z, null, a, r));
      for (s in a)
        if (
          ((r = a[s]),
          (y = e[s]),
          a.hasOwnProperty(s) && r !== y && (r != null || y != null))
        )
          switch (s) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (r != null) throw Error(p(137, l));
              break;
            default:
              V(t, l, s, r, a, y);
          }
      return;
    default:
      if (tf(l)) {
        for (var T in e)
          ((r = e[T]),
            e.hasOwnProperty(T) &&
              r !== void 0 &&
              !a.hasOwnProperty(T) &&
              Uc(t, l, T, void 0, a, r));
        for (v in a)
          ((r = a[v]),
            (y = e[v]),
            !a.hasOwnProperty(v) ||
              r === y ||
              (r === void 0 && y === void 0) ||
              Uc(t, l, v, r, a, y));
        return;
      }
  }
  for (var d in e)
    ((r = e[d]),
      e.hasOwnProperty(d) &&
        r != null &&
        !a.hasOwnProperty(d) &&
        V(t, l, d, null, a, r));
  for (h in a)
    ((r = a[h]),
      (y = e[h]),
      !a.hasOwnProperty(h) ||
        r === y ||
        (r == null && y == null) ||
        V(t, l, h, r, a, y));
}
function no(t) {
  switch (t) {
    case "css":
    case "script":
    case "font":
    case "img":
    case "image":
    case "input":
    case "link":
      return !0;
    default:
      return !1;
  }
}
function pv() {
  if (typeof performance.getEntriesByType == "function") {
    for (
      var t = 0, l = 0, e = performance.getEntriesByType("resource"), a = 0;
      a < e.length;
      a++
    ) {
      var u = e[a],
        n = u.transferSize,
        i = u.initiatorType,
        c = u.duration;
      if (n && c && no(i)) {
        for (i = 0, c = u.responseEnd, a += 1; a < e.length; a++) {
          var f = e[a],
            s = f.startTime;
          if (s > c) break;
          var v = f.transferSize,
            h = f.initiatorType;
          v &&
            no(h) &&
            ((f = f.responseEnd), (i += v * (f < c ? 1 : (c - s) / (f - s))));
        }
        if ((--a, (l += (8 * (n + i)) / (u.duration / 1e3)), t++, 10 < t))
          break;
      }
    }
    if (0 < t) return l / t / 1e6;
  }
  return navigator.connection &&
    ((t = navigator.connection.downlink), typeof t == "number")
    ? t
    : 5;
}
var Dc = null,
  Nc = null;
function _n(t) {
  return t.nodeType === 9 ? t : t.ownerDocument;
}
function io(t) {
  switch (t) {
    case "http://www.w3.org/2000/svg":
      return 1;
    case "http://www.w3.org/1998/Math/MathML":
      return 2;
    default:
      return 0;
  }
}
function bh(t, l) {
  if (t === 0)
    switch (l) {
      case "svg":
        return 1;
      case "math":
        return 2;
      default:
        return 0;
    }
  return t === 1 && l === "foreignObject" ? 0 : t;
}
function Cc(t, l) {
  return (
    t === "textarea" ||
    t === "noscript" ||
    typeof l.children == "string" ||
    typeof l.children == "number" ||
    typeof l.children == "bigint" ||
    (typeof l.dangerouslySetInnerHTML == "object" &&
      l.dangerouslySetInnerHTML !== null &&
      l.dangerouslySetInnerHTML.__html != null)
  );
}
var Gi = null;
function bv() {
  var t = window.event;
  return t && t.type === "popstate"
    ? t === Gi
      ? !1
      : ((Gi = t), !0)
    : ((Gi = null), !1);
}
var Eh = typeof setTimeout == "function" ? setTimeout : void 0,
  Ev = typeof clearTimeout == "function" ? clearTimeout : void 0,
  co = typeof Promise == "function" ? Promise : void 0,
  zv =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof co < "u"
        ? function (t) {
            return co.resolve(null).then(t).catch(Tv);
          }
        : Eh;
function Tv(t) {
  setTimeout(function () {
    throw t;
  });
}
function ae(t) {
  return t === "head";
}
function fo(t, l) {
  var e = l,
    a = 0;
  do {
    var u = e.nextSibling;
    if ((t.removeChild(e), u && u.nodeType === 8))
      if (((e = u.data), e === "/$" || e === "/&")) {
        if (a === 0) {
          (t.removeChild(u), ca(l));
          return;
        }
        a--;
      } else if (
        e === "$" ||
        e === "$?" ||
        e === "$~" ||
        e === "$!" ||
        e === "&"
      )
        a++;
      else if (e === "html") Va(t.ownerDocument.documentElement);
      else if (e === "head") {
        ((e = t.ownerDocument.head), Va(e));
        for (var n = e.firstChild; n; ) {
          var i = n.nextSibling,
            c = n.nodeName;
          (n[ru] ||
            c === "SCRIPT" ||
            c === "STYLE" ||
            (c === "LINK" && n.rel.toLowerCase() === "stylesheet") ||
            e.removeChild(n),
            (n = i));
        }
      } else e === "body" && Va(t.ownerDocument.body);
    e = u;
  } while (e);
  ca(l);
}
function so(t, l) {
  var e = t;
  t = 0;
  do {
    var a = e.nextSibling;
    if (
      (e.nodeType === 1
        ? l
          ? ((e._stashedDisplay = e.style.display), (e.style.display = "none"))
          : ((e.style.display = e._stashedDisplay || ""),
            e.getAttribute("style") === "" && e.removeAttribute("style"))
        : e.nodeType === 3 &&
          (l
            ? ((e._stashedText = e.nodeValue), (e.nodeValue = ""))
            : (e.nodeValue = e._stashedText || "")),
      a && a.nodeType === 8)
    )
      if (((e = a.data), e === "/$")) {
        if (t === 0) break;
        t--;
      } else (e !== "$" && e !== "$?" && e !== "$~" && e !== "$!") || t++;
    e = a;
  } while (e);
}
function jc(t) {
  var l = t.firstChild;
  for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
    var e = l;
    switch (((l = l.nextSibling), e.nodeName)) {
      case "HTML":
      case "HEAD":
      case "BODY":
        (jc(e), Pc(e));
        continue;
      case "SCRIPT":
      case "STYLE":
        continue;
      case "LINK":
        if (e.rel.toLowerCase() === "stylesheet") continue;
    }
    t.removeChild(e);
  }
}
function Av(t, l, e, a) {
  for (; t.nodeType === 1; ) {
    var u = e;
    if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
      if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
    } else if (a) {
      if (!t[ru])
        switch (l) {
          case "meta":
            if (!t.hasAttribute("itemprop")) break;
            return t;
          case "link":
            if (
              ((n = t.getAttribute("rel")),
              n === "stylesheet" && t.hasAttribute("data-precedence"))
            )
              break;
            if (
              n !== u.rel ||
              t.getAttribute("href") !==
                (u.href == null || u.href === "" ? null : u.href) ||
              t.getAttribute("crossorigin") !==
                (u.crossOrigin == null ? null : u.crossOrigin) ||
              t.getAttribute("title") !== (u.title == null ? null : u.title)
            )
              break;
            return t;
          case "style":
            if (t.hasAttribute("data-precedence")) break;
            return t;
          case "script":
            if (
              ((n = t.getAttribute("src")),
              (n !== (u.src == null ? null : u.src) ||
                t.getAttribute("type") !== (u.type == null ? null : u.type) ||
                t.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin)) &&
                n &&
                t.hasAttribute("async") &&
                !t.hasAttribute("itemprop"))
            )
              break;
            return t;
          default:
            return t;
        }
    } else if (l === "input" && t.type === "hidden") {
      var n = u.name == null ? null : "" + u.name;
      if (u.type === "hidden" && t.getAttribute("name") === n) return t;
    } else return t;
    if (((t = Ft(t.nextSibling)), t === null)) break;
  }
  return null;
}
function _v(t, l, e) {
  if (l === "") return null;
  for (; t.nodeType !== 3; )
    if (
      ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
        !e) ||
      ((t = Ft(t.nextSibling)), t === null)
    )
      return null;
  return t;
}
function zh(t, l) {
  for (; t.nodeType !== 8; )
    if (
      ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
        !l) ||
      ((t = Ft(t.nextSibling)), t === null)
    )
      return null;
  return t;
}
function Rc(t) {
  return t.data === "$?" || t.data === "$~";
}
function Hc(t) {
  return (
    t.data === "$!" ||
    (t.data === "$?" && t.ownerDocument.readyState !== "loading")
  );
}
function Ov(t, l) {
  var e = t.ownerDocument;
  if (t.data === "$~") t._reactRetry = l;
  else if (t.data !== "$?" || e.readyState !== "loading") l();
  else {
    var a = function () {
      (l(), e.removeEventListener("DOMContentLoaded", a));
    };
    (e.addEventListener("DOMContentLoaded", a), (t._reactRetry = a));
  }
}
function Ft(t) {
  for (; t != null; t = t.nextSibling) {
    var l = t.nodeType;
    if (l === 1 || l === 3) break;
    if (l === 8) {
      if (
        ((l = t.data),
        l === "$" ||
          l === "$!" ||
          l === "$?" ||
          l === "$~" ||
          l === "&" ||
          l === "F!" ||
          l === "F")
      )
        break;
      if (l === "/$" || l === "/&") return null;
    }
  }
  return t;
}
var Bc = null;
function oo(t) {
  t = t.nextSibling;
  for (var l = 0; t; ) {
    if (t.nodeType === 8) {
      var e = t.data;
      if (e === "/$" || e === "/&") {
        if (l === 0) return Ft(t.nextSibling);
        l--;
      } else
        (e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&") ||
          l++;
    }
    t = t.nextSibling;
  }
  return null;
}
function ro(t) {
  t = t.previousSibling;
  for (var l = 0; t; ) {
    if (t.nodeType === 8) {
      var e = t.data;
      if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
        if (l === 0) return t;
        l--;
      } else (e !== "/$" && e !== "/&") || l++;
    }
    t = t.previousSibling;
  }
  return null;
}
function Th(t, l, e) {
  switch (((l = _n(e)), t)) {
    case "html":
      if (((t = l.documentElement), !t)) throw Error(p(452));
      return t;
    case "head":
      if (((t = l.head), !t)) throw Error(p(453));
      return t;
    case "body":
      if (((t = l.body), !t)) throw Error(p(454));
      return t;
    default:
      throw Error(p(451));
  }
}
function Va(t) {
  for (var l = t.attributes; l.length; ) t.removeAttributeNode(l[0]);
  Pc(t);
}
var kt = new Map(),
  ho = new Set();
function On(t) {
  return typeof t.getRootNode == "function"
    ? t.getRootNode()
    : t.nodeType === 9
      ? t
      : t.ownerDocument;
}
var _l = X.d;
X.d = { f: xv, r: Mv, D: Uv, C: Dv, L: Nv, m: Cv, X: Rv, S: jv, M: Hv };
function xv() {
  var t = _l.f(),
    l = Wn();
  return t || l;
}
function Mv(t) {
  var l = ra(t);
  l !== null && l.tag === 5 && l.type === "form" ? yd(l) : _l.r(t);
}
var va = typeof document > "u" ? null : document;
function Ah(t, l, e) {
  var a = va;
  if (a && typeof l == "string" && l) {
    var u = Jt(l);
    ((u = 'link[rel="' + t + '"][href="' + u + '"]'),
      typeof e == "string" && (u += '[crossorigin="' + e + '"]'),
      ho.has(u) ||
        (ho.add(u),
        (t = { rel: t, crossOrigin: e, href: l }),
        a.querySelector(u) === null &&
          ((l = a.createElement("link")),
          pt(l, "link", t),
          ht(l),
          a.head.appendChild(l))));
  }
}
function Uv(t) {
  (_l.D(t), Ah("dns-prefetch", t, null));
}
function Dv(t, l) {
  (_l.C(t, l), Ah("preconnect", t, l));
}
function Nv(t, l, e) {
  _l.L(t, l, e);
  var a = va;
  if (a && t && l) {
    var u = 'link[rel="preload"][as="' + Jt(l) + '"]';
    l === "image" && e && e.imageSrcSet
      ? ((u += '[imagesrcset="' + Jt(e.imageSrcSet) + '"]'),
        typeof e.imageSizes == "string" &&
          (u += '[imagesizes="' + Jt(e.imageSizes) + '"]'))
      : (u += '[href="' + Jt(t) + '"]');
    var n = u;
    switch (l) {
      case "style":
        n = ia(t);
        break;
      case "script":
        n = ya(t);
    }
    kt.has(n) ||
      ((t = k(
        {
          rel: "preload",
          href: l === "image" && e && e.imageSrcSet ? void 0 : t,
          as: l,
        },
        e,
      )),
      kt.set(n, t),
      a.querySelector(u) !== null ||
        (l === "style" && a.querySelector(gu(n))) ||
        (l === "script" && a.querySelector(Su(n))) ||
        ((l = a.createElement("link")),
        pt(l, "link", t),
        ht(l),
        a.head.appendChild(l)));
  }
}
function Cv(t, l) {
  _l.m(t, l);
  var e = va;
  if (e && t) {
    var a = l && typeof l.as == "string" ? l.as : "script",
      u = 'link[rel="modulepreload"][as="' + Jt(a) + '"][href="' + Jt(t) + '"]',
      n = u;
    switch (a) {
      case "audioworklet":
      case "paintworklet":
      case "serviceworker":
      case "sharedworker":
      case "worker":
      case "script":
        n = ya(t);
    }
    if (
      !kt.has(n) &&
      ((t = k({ rel: "modulepreload", href: t }, l)),
      kt.set(n, t),
      e.querySelector(u) === null)
    ) {
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          if (e.querySelector(Su(n))) return;
      }
      ((a = e.createElement("link")),
        pt(a, "link", t),
        ht(a),
        e.head.appendChild(a));
    }
  }
}
function jv(t, l, e) {
  _l.S(t, l, e);
  var a = va;
  if (a && t) {
    var u = Ve(a).hoistableStyles,
      n = ia(t);
    l = l || "default";
    var i = u.get(n);
    if (!i) {
      var c = { loading: 0, preload: null };
      if ((i = a.querySelector(gu(n)))) c.loading = 5;
      else {
        ((t = k({ rel: "stylesheet", href: t, "data-precedence": l }, e)),
          (e = kt.get(n)) && Gf(t, e));
        var f = (i = a.createElement("link"));
        (ht(f),
          pt(f, "link", t),
          (f._p = new Promise(function (s, v) {
            ((f.onload = s), (f.onerror = v));
          })),
          f.addEventListener("load", function () {
            c.loading |= 1;
          }),
          f.addEventListener("error", function () {
            c.loading |= 2;
          }),
          (c.loading |= 4),
          Fu(i, l, a));
      }
      ((i = { type: "stylesheet", instance: i, count: 1, state: c }),
        u.set(n, i));
    }
  }
}
function Rv(t, l) {
  _l.X(t, l);
  var e = va;
  if (e && t) {
    var a = Ve(e).hoistableScripts,
      u = ya(t),
      n = a.get(u);
    n ||
      ((n = e.querySelector(Su(u))),
      n ||
        ((t = k({ src: t, async: !0 }, l)),
        (l = kt.get(u)) && Lf(t, l),
        (n = e.createElement("script")),
        ht(n),
        pt(n, "link", t),
        e.head.appendChild(n)),
      (n = { type: "script", instance: n, count: 1, state: null }),
      a.set(u, n));
  }
}
function Hv(t, l) {
  _l.M(t, l);
  var e = va;
  if (e && t) {
    var a = Ve(e).hoistableScripts,
      u = ya(t),
      n = a.get(u);
    n ||
      ((n = e.querySelector(Su(u))),
      n ||
        ((t = k({ src: t, async: !0, type: "module" }, l)),
        (l = kt.get(u)) && Lf(t, l),
        (n = e.createElement("script")),
        ht(n),
        pt(n, "link", t),
        e.head.appendChild(n)),
      (n = { type: "script", instance: n, count: 1, state: null }),
      a.set(u, n));
  }
}
function mo(t, l, e, a) {
  var u = (u = Ql.current) ? On(u) : null;
  if (!u) throw Error(p(446));
  switch (t) {
    case "meta":
    case "title":
      return null;
    case "style":
      return typeof e.precedence == "string" && typeof e.href == "string"
        ? ((l = ia(e.href)),
          (e = Ve(u).hoistableStyles),
          (a = e.get(l)),
          a ||
            ((a = { type: "style", instance: null, count: 0, state: null }),
            e.set(l, a)),
          a)
        : { type: "void", instance: null, count: 0, state: null };
    case "link":
      if (
        e.rel === "stylesheet" &&
        typeof e.href == "string" &&
        typeof e.precedence == "string"
      ) {
        t = ia(e.href);
        var n = Ve(u).hoistableStyles,
          i = n.get(t);
        if (
          (i ||
            ((u = u.ownerDocument || u),
            (i = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: 0, preload: null },
            }),
            n.set(t, i),
            (n = u.querySelector(gu(t))) &&
              !n._p &&
              ((i.instance = n), (i.state.loading = 5)),
            kt.has(t) ||
              ((e = {
                rel: "preload",
                as: "style",
                href: e.href,
                crossOrigin: e.crossOrigin,
                integrity: e.integrity,
                media: e.media,
                hrefLang: e.hrefLang,
                referrerPolicy: e.referrerPolicy,
              }),
              kt.set(t, e),
              n || Bv(u, t, e, i.state))),
          l && a === null)
        )
          throw Error(p(528, ""));
        return i;
      }
      if (l && a !== null) throw Error(p(529, ""));
      return null;
    case "script":
      return (
        (l = e.async),
        (e = e.src),
        typeof e == "string" &&
        l &&
        typeof l != "function" &&
        typeof l != "symbol"
          ? ((l = ya(e)),
            (e = Ve(u).hoistableScripts),
            (a = e.get(l)),
            a ||
              ((a = { type: "script", instance: null, count: 0, state: null }),
              e.set(l, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null }
      );
    default:
      throw Error(p(444, t));
  }
}
function ia(t) {
  return 'href="' + Jt(t) + '"';
}
function gu(t) {
  return 'link[rel="stylesheet"][' + t + "]";
}
function _h(t) {
  return k({}, t, { "data-precedence": t.precedence, precedence: null });
}
function Bv(t, l, e, a) {
  t.querySelector('link[rel="preload"][as="style"][' + l + "]")
    ? (a.loading = 1)
    : ((l = t.createElement("link")),
      (a.preload = l),
      l.addEventListener("load", function () {
        return (a.loading |= 1);
      }),
      l.addEventListener("error", function () {
        return (a.loading |= 2);
      }),
      pt(l, "link", e),
      ht(l),
      t.head.appendChild(l));
}
function ya(t) {
  return '[src="' + Jt(t) + '"]';
}
function Su(t) {
  return "script[async]" + t;
}
function vo(t, l, e) {
  if ((l.count++, l.instance === null))
    switch (l.type) {
      case "style":
        var a = t.querySelector('style[data-href~="' + Jt(e.href) + '"]');
        if (a) return ((l.instance = a), ht(a), a);
        var u = k({}, e, {
          "data-href": e.href,
          "data-precedence": e.precedence,
          href: null,
          precedence: null,
        });
        return (
          (a = (t.ownerDocument || t).createElement("style")),
          ht(a),
          pt(a, "style", u),
          Fu(a, e.precedence, t),
          (l.instance = a)
        );
      case "stylesheet":
        u = ia(e.href);
        var n = t.querySelector(gu(u));
        if (n) return ((l.state.loading |= 4), (l.instance = n), ht(n), n);
        ((a = _h(e)),
          (u = kt.get(u)) && Gf(a, u),
          (n = (t.ownerDocument || t).createElement("link")),
          ht(n));
        var i = n;
        return (
          (i._p = new Promise(function (c, f) {
            ((i.onload = c), (i.onerror = f));
          })),
          pt(n, "link", a),
          (l.state.loading |= 4),
          Fu(n, e.precedence, t),
          (l.instance = n)
        );
      case "script":
        return (
          (n = ya(e.src)),
          (u = t.querySelector(Su(n)))
            ? ((l.instance = u), ht(u), u)
            : ((a = e),
              (u = kt.get(n)) && ((a = k({}, e)), Lf(a, u)),
              (t = t.ownerDocument || t),
              (u = t.createElement("script")),
              ht(u),
              pt(u, "link", a),
              t.head.appendChild(u),
              (l.instance = u))
        );
      case "void":
        return null;
      default:
        throw Error(p(443, l.type));
    }
  else
    l.type === "stylesheet" &&
      !(l.state.loading & 4) &&
      ((a = l.instance), (l.state.loading |= 4), Fu(a, e.precedence, t));
  return l.instance;
}
function Fu(t, l, e) {
  for (
    var a = e.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]',
      ),
      u = a.length ? a[a.length - 1] : null,
      n = u,
      i = 0;
    i < a.length;
    i++
  ) {
    var c = a[i];
    if (c.dataset.precedence === l) n = c;
    else if (n !== u) break;
  }
  n
    ? n.parentNode.insertBefore(t, n.nextSibling)
    : ((l = e.nodeType === 9 ? e.head : e), l.insertBefore(t, l.firstChild));
}
function Gf(t, l) {
  (t.crossOrigin == null && (t.crossOrigin = l.crossOrigin),
    t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy),
    t.title == null && (t.title = l.title));
}
function Lf(t, l) {
  (t.crossOrigin == null && (t.crossOrigin = l.crossOrigin),
    t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy),
    t.integrity == null && (t.integrity = l.integrity));
}
var ku = null;
function yo(t, l, e) {
  if (ku === null) {
    var a = new Map(),
      u = (ku = new Map());
    u.set(e, a);
  } else ((u = ku), (a = u.get(e)), a || ((a = new Map()), u.set(e, a)));
  if (a.has(t)) return a;
  for (
    a.set(t, null), e = e.getElementsByTagName(t), u = 0;
    u < e.length;
    u++
  ) {
    var n = e[u];
    if (
      !(
        n[ru] ||
        n[yt] ||
        (t === "link" && n.getAttribute("rel") === "stylesheet")
      ) &&
      n.namespaceURI !== "http://www.w3.org/2000/svg"
    ) {
      var i = n.getAttribute(l) || "";
      i = t + i;
      var c = a.get(i);
      c ? c.push(n) : a.set(i, [n]);
    }
  }
  return a;
}
function go(t, l, e) {
  ((t = t.ownerDocument || t),
    t.head.insertBefore(
      e,
      l === "title" ? t.querySelector("head > title") : null,
    ));
}
function Yv(t, l, e) {
  if (e === 1 || l.itemProp != null) return !1;
  switch (t) {
    case "meta":
    case "title":
      return !0;
    case "style":
      if (
        typeof l.precedence != "string" ||
        typeof l.href != "string" ||
        l.href === ""
      )
        break;
      return !0;
    case "link":
      if (
        typeof l.rel != "string" ||
        typeof l.href != "string" ||
        l.href === "" ||
        l.onLoad ||
        l.onError
      )
        break;
      switch (l.rel) {
        case "stylesheet":
          return (
            (t = l.disabled),
            typeof l.precedence == "string" && t == null
          );
        default:
          return !0;
      }
    case "script":
      if (
        l.async &&
        typeof l.async != "function" &&
        typeof l.async != "symbol" &&
        !l.onLoad &&
        !l.onError &&
        l.src &&
        typeof l.src == "string"
      )
        return !0;
  }
  return !1;
}
function Oh(t) {
  return !(t.type === "stylesheet" && !(t.state.loading & 3));
}
function qv(t, l, e, a) {
  if (
    e.type === "stylesheet" &&
    (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
    !(e.state.loading & 4)
  ) {
    if (e.instance === null) {
      var u = ia(a.href),
        n = l.querySelector(gu(u));
      if (n) {
        ((l = n._p),
          l !== null &&
            typeof l == "object" &&
            typeof l.then == "function" &&
            (t.count++, (t = xn.bind(t)), l.then(t, t)),
          (e.state.loading |= 4),
          (e.instance = n),
          ht(n));
        return;
      }
      ((n = l.ownerDocument || l),
        (a = _h(a)),
        (u = kt.get(u)) && Gf(a, u),
        (n = n.createElement("link")),
        ht(n));
      var i = n;
      ((i._p = new Promise(function (c, f) {
        ((i.onload = c), (i.onerror = f));
      })),
        pt(n, "link", a),
        (e.instance = n));
    }
    (t.stylesheets === null && (t.stylesheets = new Map()),
      t.stylesheets.set(e, l),
      (l = e.state.preload) &&
        !(e.state.loading & 3) &&
        (t.count++,
        (e = xn.bind(t)),
        l.addEventListener("load", e),
        l.addEventListener("error", e)));
  }
}
var Li = 0;
function Gv(t, l) {
  return (
    t.stylesheets && t.count === 0 && Iu(t, t.stylesheets),
    0 < t.count || 0 < t.imgCount
      ? function (e) {
          var a = setTimeout(function () {
            if ((t.stylesheets && Iu(t, t.stylesheets), t.unsuspend)) {
              var n = t.unsuspend;
              ((t.unsuspend = null), n());
            }
          }, 6e4 + l);
          0 < t.imgBytes && Li === 0 && (Li = 62500 * pv());
          var u = setTimeout(
            function () {
              if (
                ((t.waitingForImages = !1),
                t.count === 0 &&
                  (t.stylesheets && Iu(t, t.stylesheets), t.unsuspend))
              ) {
                var n = t.unsuspend;
                ((t.unsuspend = null), n());
              }
            },
            (t.imgBytes > Li ? 50 : 800) + l,
          );
          return (
            (t.unsuspend = e),
            function () {
              ((t.unsuspend = null), clearTimeout(a), clearTimeout(u));
            }
          );
        }
      : null
  );
}
function xn() {
  if (
    (this.count--,
    this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
  ) {
    if (this.stylesheets) Iu(this, this.stylesheets);
    else if (this.unsuspend) {
      var t = this.unsuspend;
      ((this.unsuspend = null), t());
    }
  }
}
var Mn = null;
function Iu(t, l) {
  ((t.stylesheets = null),
    t.unsuspend !== null &&
      (t.count++, (Mn = new Map()), l.forEach(Lv, t), (Mn = null), xn.call(t)));
}
function Lv(t, l) {
  if (!(l.state.loading & 4)) {
    var e = Mn.get(t);
    if (e) var a = e.get(null);
    else {
      ((e = new Map()), Mn.set(t, e));
      for (
        var u = t.querySelectorAll(
            "link[data-precedence],style[data-precedence]",
          ),
          n = 0;
        n < u.length;
        n++
      ) {
        var i = u[n];
        (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
          (e.set(i.dataset.precedence, i), (a = i));
      }
      a && e.set(null, a);
    }
    ((u = l.instance),
      (i = u.getAttribute("data-precedence")),
      (n = e.get(i) || a),
      n === a && e.set(null, u),
      e.set(i, u),
      this.count++,
      (a = xn.bind(this)),
      u.addEventListener("load", a),
      u.addEventListener("error", a),
      n
        ? n.parentNode.insertBefore(u, n.nextSibling)
        : ((t = t.nodeType === 9 ? t.head : t),
          t.insertBefore(u, t.firstChild)),
      (l.state.loading |= 4));
  }
}
var eu = {
  $$typeof: ml,
  Provider: null,
  Consumer: null,
  _currentValue: re,
  _currentValue2: re,
  _threadCount: 0,
};
function Xv(t, l, e, a, u, n, i, c, f) {
  ((this.tag = 1),
    (this.containerInfo = t),
    (this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode =
      this.next =
      this.pendingContext =
      this.context =
      this.cancelPendingCommit =
        null),
    (this.callbackPriority = 0),
    (this.expirationTimes = si(-1)),
    (this.entangledLanes =
      this.shellSuspendCounter =
      this.errorRecoveryDisabledLanes =
      this.expiredLanes =
      this.warmLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = si(0)),
    (this.hiddenUpdates = si(null)),
    (this.identifierPrefix = a),
    (this.onUncaughtError = u),
    (this.onCaughtError = n),
    (this.onRecoverableError = i),
    (this.pooledCache = null),
    (this.pooledCacheLanes = 0),
    (this.formState = f),
    (this.incompleteTransitions = new Map()));
}
function xh(t, l, e, a, u, n, i, c, f, s, v, h) {
  return (
    (t = new Xv(t, l, e, i, f, s, v, h, c)),
    (l = 1),
    n === !0 && (l |= 24),
    (n = jt(3, null, null, l)),
    (t.current = n),
    (n.stateNode = t),
    (l = df()),
    l.refCount++,
    (t.pooledCache = l),
    l.refCount++,
    (n.memoizedState = { element: a, isDehydrated: e, cache: l }),
    vf(n),
    t
  );
}
function Mh(t) {
  return t ? ((t = Le), t) : Le;
}
function Uh(t, l, e, a, u, n) {
  ((u = Mh(u)),
    a.context === null ? (a.context = u) : (a.pendingContext = u),
    (a = Vl(l)),
    (a.payload = { element: e }),
    (n = n === void 0 ? null : n),
    n !== null && (a.callback = n),
    (e = Kl(t, a, l)),
    e !== null && (Mt(e, t, l), Ba(e, t, l)));
}
function So(t, l) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var e = t.retryLane;
    t.retryLane = e !== 0 && e < l ? e : l;
  }
}
function Xf(t, l) {
  (So(t, l), (t = t.alternate) && So(t, l));
}
function Dh(t) {
  if (t.tag === 13 || t.tag === 31) {
    var l = Ae(t, 67108864);
    (l !== null && Mt(l, t, 67108864), Xf(t, 67108864));
  }
}
function po(t) {
  if (t.tag === 13 || t.tag === 31) {
    var l = qt();
    l = kc(l);
    var e = Ae(t, l);
    (e !== null && Mt(e, t, l), Xf(t, l));
  }
}
var Un = !0;
function Qv(t, l, e, a) {
  var u = M.T;
  M.T = null;
  var n = X.p;
  try {
    ((X.p = 2), Qf(t, l, e, a));
  } finally {
    ((X.p = n), (M.T = u));
  }
}
function Zv(t, l, e, a) {
  var u = M.T;
  M.T = null;
  var n = X.p;
  try {
    ((X.p = 8), Qf(t, l, e, a));
  } finally {
    ((X.p = n), (M.T = u));
  }
}
function Qf(t, l, e, a) {
  if (Un) {
    var u = Yc(a);
    if (u === null) (qi(t, l, a, Dn, e), bo(t, a));
    else if (Kv(u, t, l, e, a)) a.stopPropagation();
    else if ((bo(t, a), l & 4 && -1 < Vv.indexOf(t))) {
      for (; u !== null; ) {
        var n = ra(u);
        if (n !== null)
          switch (n.tag) {
            case 3:
              if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                var i = fe(n.pendingLanes);
                if (i !== 0) {
                  var c = n;
                  for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                    var f = 1 << (31 - Yt(i));
                    ((c.entanglements[1] |= f), (i &= ~f));
                  }
                  (il(n), !(L & 6) && ((pn = Ht() + 500), yu(0)));
                }
              }
              break;
            case 31:
            case 13:
              ((c = Ae(n, 2)), c !== null && Mt(c, n, 2), Wn(), Xf(n, 2));
          }
        if (((n = Yc(a)), n === null && qi(t, l, a, Dn, e), n === u)) break;
        u = n;
      }
      u !== null && a.stopPropagation();
    } else qi(t, l, a, null, e);
  }
}
function Yc(t) {
  return ((t = lf(t)), Zf(t));
}
var Dn = null;
function Zf(t) {
  if (((Dn = null), (t = Re(t)), t !== null)) {
    var l = cu(t);
    if (l === null) t = null;
    else {
      var e = l.tag;
      if (e === 13) {
        if (((t = Fo(l)), t !== null)) return t;
        t = null;
      } else if (e === 31) {
        if (((t = ko(l)), t !== null)) return t;
        t = null;
      } else if (e === 3) {
        if (l.stateNode.current.memoizedState.isDehydrated)
          return l.tag === 3 ? l.stateNode.containerInfo : null;
        t = null;
      } else l !== t && (t = null);
    }
  }
  return ((Dn = t), null);
}
function Nh(t) {
  switch (t) {
    case "beforetoggle":
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "toggle":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 2;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 8;
    case "message":
      switch (U0()) {
        case lr:
          return 2;
        case er:
          return 8;
        case un:
        case D0:
          return 32;
        case ar:
          return 268435456;
        default:
          return 32;
      }
    default:
      return 32;
  }
}
var qc = !1,
  Wl = null,
  $l = null,
  Fl = null,
  au = new Map(),
  uu = new Map(),
  Hl = [],
  Vv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " ",
    );
function bo(t, l) {
  switch (t) {
    case "focusin":
    case "focusout":
      Wl = null;
      break;
    case "dragenter":
    case "dragleave":
      $l = null;
      break;
    case "mouseover":
    case "mouseout":
      Fl = null;
      break;
    case "pointerover":
    case "pointerout":
      au.delete(l.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      uu.delete(l.pointerId);
  }
}
function _a(t, l, e, a, u, n) {
  return t === null || t.nativeEvent !== n
    ? ((t = {
        blockedOn: l,
        domEventName: e,
        eventSystemFlags: a,
        nativeEvent: n,
        targetContainers: [u],
      }),
      l !== null && ((l = ra(l)), l !== null && Dh(l)),
      t)
    : ((t.eventSystemFlags |= a),
      (l = t.targetContainers),
      u !== null && l.indexOf(u) === -1 && l.push(u),
      t);
}
function Kv(t, l, e, a, u) {
  switch (l) {
    case "focusin":
      return ((Wl = _a(Wl, t, l, e, a, u)), !0);
    case "dragenter":
      return (($l = _a($l, t, l, e, a, u)), !0);
    case "mouseover":
      return ((Fl = _a(Fl, t, l, e, a, u)), !0);
    case "pointerover":
      var n = u.pointerId;
      return (au.set(n, _a(au.get(n) || null, t, l, e, a, u)), !0);
    case "gotpointercapture":
      return (
        (n = u.pointerId),
        uu.set(n, _a(uu.get(n) || null, t, l, e, a, u)),
        !0
      );
  }
  return !1;
}
function Ch(t) {
  var l = Re(t.target);
  if (l !== null) {
    var e = cu(l);
    if (e !== null) {
      if (((l = e.tag), l === 13)) {
        if (((l = Fo(e)), l !== null)) {
          ((t.blockedOn = l),
            as(t.priority, function () {
              po(e);
            }));
          return;
        }
      } else if (l === 31) {
        if (((l = ko(e)), l !== null)) {
          ((t.blockedOn = l),
            as(t.priority, function () {
              po(e);
            }));
          return;
        }
      } else if (l === 3 && e.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function Pu(t) {
  if (t.blockedOn !== null) return !1;
  for (var l = t.targetContainers; 0 < l.length; ) {
    var e = Yc(t.nativeEvent);
    if (e === null) {
      e = t.nativeEvent;
      var a = new e.constructor(e.type, e);
      ((ec = a), e.target.dispatchEvent(a), (ec = null));
    } else return ((l = ra(e)), l !== null && Dh(l), (t.blockedOn = e), !1);
    l.shift();
  }
  return !0;
}
function Eo(t, l, e) {
  Pu(t) && e.delete(l);
}
function Jv() {
  ((qc = !1),
    Wl !== null && Pu(Wl) && (Wl = null),
    $l !== null && Pu($l) && ($l = null),
    Fl !== null && Pu(Fl) && (Fl = null),
    au.forEach(Eo),
    uu.forEach(Eo));
}
function Bu(t, l) {
  t.blockedOn === l &&
    ((t.blockedOn = null),
    qc ||
      ((qc = !0),
      ot.unstable_scheduleCallback(ot.unstable_NormalPriority, Jv)));
}
var Yu = null;
function zo(t) {
  Yu !== t &&
    ((Yu = t),
    ot.unstable_scheduleCallback(ot.unstable_NormalPriority, function () {
      Yu === t && (Yu = null);
      for (var l = 0; l < t.length; l += 3) {
        var e = t[l],
          a = t[l + 1],
          u = t[l + 2];
        if (typeof a != "function") {
          if (Zf(a || e) === null) continue;
          break;
        }
        var n = ra(e);
        n !== null &&
          (t.splice(l, 3),
          (l -= 3),
          Sc(n, { pending: !0, data: u, method: e.method, action: a }, a, u));
      }
    }));
}
function ca(t) {
  function l(f) {
    return Bu(f, t);
  }
  (Wl !== null && Bu(Wl, t),
    $l !== null && Bu($l, t),
    Fl !== null && Bu(Fl, t),
    au.forEach(l),
    uu.forEach(l));
  for (var e = 0; e < Hl.length; e++) {
    var a = Hl[e];
    a.blockedOn === t && (a.blockedOn = null);
  }
  for (; 0 < Hl.length && ((e = Hl[0]), e.blockedOn === null); )
    (Ch(e), e.blockedOn === null && Hl.shift());
  if (((e = (t.ownerDocument || t).$$reactFormReplay), e != null))
    for (a = 0; a < e.length; a += 3) {
      var u = e[a],
        n = e[a + 1],
        i = u[Ut] || null;
      if (typeof n == "function") i || zo(e);
      else if (i) {
        var c = null;
        if (n && n.hasAttribute("formAction")) {
          if (((u = n), (i = n[Ut] || null))) c = i.formAction;
          else if (Zf(u) !== null) continue;
        } else c = i.action;
        (typeof c == "function" ? (e[a + 1] = c) : (e.splice(a, 3), (a -= 3)),
          zo(e));
      }
    }
}
function jh() {
  function t(n) {
    n.canIntercept &&
      n.info === "react-transition" &&
      n.intercept({
        handler: function () {
          return new Promise(function (i) {
            return (u = i);
          });
        },
        focusReset: "manual",
        scroll: "manual",
      });
  }
  function l() {
    (u !== null && (u(), (u = null)), a || setTimeout(e, 20));
  }
  function e() {
    if (!a && !navigation.transition) {
      var n = navigation.currentEntry;
      n &&
        n.url != null &&
        navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace",
        });
    }
  }
  if (typeof navigation == "object") {
    var a = !1,
      u = null;
    return (
      navigation.addEventListener("navigate", t),
      navigation.addEventListener("navigatesuccess", l),
      navigation.addEventListener("navigateerror", l),
      setTimeout(e, 100),
      function () {
        ((a = !0),
          navigation.removeEventListener("navigate", t),
          navigation.removeEventListener("navigatesuccess", l),
          navigation.removeEventListener("navigateerror", l),
          u !== null && (u(), (u = null)));
      }
    );
  }
}
function Vf(t) {
  this._internalRoot = t;
}
kn.prototype.render = Vf.prototype.render = function (t) {
  var l = this._internalRoot;
  if (l === null) throw Error(p(409));
  var e = l.current,
    a = qt();
  Uh(e, a, t, l, null, null);
};
kn.prototype.unmount = Vf.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var l = t.containerInfo;
    (Uh(t.current, 2, null, t, null, null), Wn(), (l[oa] = null));
  }
};
function kn(t) {
  this._internalRoot = t;
}
kn.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var l = fr();
    t = { blockedOn: null, target: t, priority: l };
    for (var e = 0; e < Hl.length && l !== 0 && l < Hl[e].priority; e++);
    (Hl.splice(e, 0, t), e === 0 && Ch(t));
  }
};
var To = Wo.version;
if (To !== "19.2.5") throw Error(p(527, To, "19.2.5"));
X.findDOMNode = function (t) {
  var l = t._reactInternals;
  if (l === void 0)
    throw typeof t.render == "function"
      ? Error(p(188))
      : ((t = Object.keys(t).join(",")), Error(p(268, t)));
  return (
    (t = z0(l)),
    (t = t !== null ? Io(t) : null),
    (t = t === null ? null : t.stateNode),
    t
  );
};
var wv = {
  bundleType: 0,
  version: "19.2.5",
  rendererPackageName: "react-dom",
  currentDispatcherRef: M,
  reconcilerVersion: "19.2.5",
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var qu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!qu.isDisabled && qu.supportsFiber)
    try {
      ((fu = qu.inject(wv)), (Bt = qu));
    } catch {}
}
Rn.createRoot = function (t, l) {
  if (!$o(t)) throw Error(p(299));
  var e = !1,
    a = "",
    u = Ad,
    n = _d,
    i = Od;
  return (
    l != null &&
      (l.unstable_strictMode === !0 && (e = !0),
      l.identifierPrefix !== void 0 && (a = l.identifierPrefix),
      l.onUncaughtError !== void 0 && (u = l.onUncaughtError),
      l.onCaughtError !== void 0 && (n = l.onCaughtError),
      l.onRecoverableError !== void 0 && (i = l.onRecoverableError)),
    (l = xh(t, 1, !1, null, null, e, a, null, u, n, i, jh)),
    (t[oa] = l.current),
    qf(t),
    new Vf(l)
  );
};
Rn.hydrateRoot = function (t, l, e) {
  if (!$o(t)) throw Error(p(299));
  var a = !1,
    u = "",
    n = Ad,
    i = _d,
    c = Od,
    f = null;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (a = !0),
      e.identifierPrefix !== void 0 && (u = e.identifierPrefix),
      e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
      e.onCaughtError !== void 0 && (i = e.onCaughtError),
      e.onRecoverableError !== void 0 && (c = e.onRecoverableError),
      e.formState !== void 0 && (f = e.formState)),
    (l = xh(t, 1, !0, l, e ?? null, a, u, f, n, i, c, jh)),
    (l.context = Mh(null)),
    (e = l.current),
    (a = qt()),
    (a = kc(a)),
    (u = Vl(a)),
    (u.callback = null),
    Kl(e, u, a),
    (e = a),
    (l.current.lanes = e),
    ou(l, e),
    il(l),
    (t[oa] = l.current),
    qf(t),
    new kn(l)
  );
};
Rn.version = "19.2.5";
function Rh() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rh);
    } catch (t) {
      console.error(t);
    }
}
(Rh(), (Qo.exports = Rn));
var Wv = Qo.exports;
/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function nu() {
  return (
    (nu = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var l = 1; l < arguments.length; l++) {
            var e = arguments[l];
            for (var a in e)
              Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
          }
          return t;
        }),
    nu.apply(this, arguments)
  );
}
var Xl;
(function (t) {
  ((t.Pop = "POP"), (t.Push = "PUSH"), (t.Replace = "REPLACE"));
})(Xl || (Xl = {}));
const Ao = "popstate";
function $v(t) {
  t === void 0 && (t = {});
  function l(a, u) {
    let { pathname: n, search: i, hash: c } = a.location;
    return Gc(
      "",
      { pathname: n, search: i, hash: c },
      (u.state && u.state.usr) || null,
      (u.state && u.state.key) || "default",
    );
  }
  function e(a, u) {
    return typeof u == "string" ? u : Nn(u);
  }
  return kv(l, e, null, t);
}
function P(t, l) {
  if (t === !1 || t === null || typeof t > "u") throw new Error(l);
}
function Kf(t, l) {
  if (!t) {
    typeof console < "u" && console.warn(l);
    try {
      throw new Error(l);
    } catch {}
  }
}
function Fv() {
  return Math.random().toString(36).substr(2, 8);
}
function _o(t, l) {
  return { usr: t.state, key: t.key, idx: l };
}
function Gc(t, l, e, a) {
  return (
    e === void 0 && (e = null),
    nu(
      { pathname: typeof t == "string" ? t : t.pathname, search: "", hash: "" },
      typeof l == "string" ? ga(l) : l,
      { state: e, key: (l && l.key) || a || Fv() },
    )
  );
}
function Nn(t) {
  let { pathname: l = "/", search: e = "", hash: a = "" } = t;
  return (
    e && e !== "?" && (l += e.charAt(0) === "?" ? e : "?" + e),
    a && a !== "#" && (l += a.charAt(0) === "#" ? a : "#" + a),
    l
  );
}
function ga(t) {
  let l = {};
  if (t) {
    let e = t.indexOf("#");
    e >= 0 && ((l.hash = t.substr(e)), (t = t.substr(0, e)));
    let a = t.indexOf("?");
    (a >= 0 && ((l.search = t.substr(a)), (t = t.substr(0, a))),
      t && (l.pathname = t));
  }
  return l;
}
function kv(t, l, e, a) {
  a === void 0 && (a = {});
  let { window: u = document.defaultView, v5Compat: n = !1 } = a,
    i = u.history,
    c = Xl.Pop,
    f = null,
    s = v();
  s == null && ((s = 0), i.replaceState(nu({}, i.state, { idx: s }), ""));
  function v() {
    return (i.state || { idx: null }).idx;
  }
  function h() {
    c = Xl.Pop;
    let T = v(),
      d = T == null ? null : T - s;
    ((s = T), f && f({ action: c, location: z.location, delta: d }));
  }
  function r(T, d) {
    c = Xl.Push;
    let o = Gc(z.location, T, d);
    s = v() + 1;
    let m = _o(o, s),
      g = z.createHref(o);
    try {
      i.pushState(m, "", g);
    } catch (_) {
      if (_ instanceof DOMException && _.name === "DataCloneError") throw _;
      u.location.assign(g);
    }
    n && f && f({ action: c, location: z.location, delta: 1 });
  }
  function y(T, d) {
    c = Xl.Replace;
    let o = Gc(z.location, T, d);
    s = v();
    let m = _o(o, s),
      g = z.createHref(o);
    (i.replaceState(m, "", g),
      n && f && f({ action: c, location: z.location, delta: 0 }));
  }
  function E(T) {
    let d = u.location.origin !== "null" ? u.location.origin : u.location.href,
      o = typeof T == "string" ? T : Nn(T);
    return (
      (o = o.replace(/ $/, "%20")),
      P(
        d,
        "No window.location.(origin|href) available to create URL for href: " +
          o,
      ),
      new URL(o, d)
    );
  }
  let z = {
    get action() {
      return c;
    },
    get location() {
      return t(u, i);
    },
    listen(T) {
      if (f) throw new Error("A history only accepts one active listener");
      return (
        u.addEventListener(Ao, h),
        (f = T),
        () => {
          (u.removeEventListener(Ao, h), (f = null));
        }
      );
    },
    createHref(T) {
      return l(u, T);
    },
    createURL: E,
    encodeLocation(T) {
      let d = E(T);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: r,
    replace: y,
    go(T) {
      return i.go(T);
    },
  };
  return z;
}
var Oo;
(function (t) {
  ((t.data = "data"),
    (t.deferred = "deferred"),
    (t.redirect = "redirect"),
    (t.error = "error"));
})(Oo || (Oo = {}));
function Iv(t, l, e) {
  return (e === void 0 && (e = "/"), Pv(t, l, e));
}
function Pv(t, l, e, a) {
  let u = typeof l == "string" ? ga(l) : l,
    n = fa(u.pathname || "/", e);
  if (n == null) return null;
  let i = Hh(t);
  ty(i);
  let c = null;
  for (let f = 0; c == null && f < i.length; ++f) {
    let s = ry(n);
    c = sy(i[f], s);
  }
  return c;
}
function Hh(t, l, e, a) {
  (l === void 0 && (l = []),
    e === void 0 && (e = []),
    a === void 0 && (a = ""));
  let u = (n, i, c) => {
    let f = {
      relativePath: c === void 0 ? n.path || "" : c,
      caseSensitive: n.caseSensitive === !0,
      childrenIndex: i,
      route: n,
    };
    f.relativePath.startsWith("/") &&
      (P(
        f.relativePath.startsWith(a),
        'Absolute route path "' +
          f.relativePath +
          '" nested under path ' +
          ('"' + a + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes.",
      ),
      (f.relativePath = f.relativePath.slice(a.length)));
    let s = kl([a, f.relativePath]),
      v = e.concat(f);
    (n.children &&
      n.children.length > 0 &&
      (P(
        n.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".'),
      ),
      Hh(n.children, l, v, s)),
      !(n.path == null && !n.index) &&
        l.push({ path: s, score: cy(s, n.index), routesMeta: v }));
  };
  return (
    t.forEach((n, i) => {
      var c;
      if (n.path === "" || !((c = n.path) != null && c.includes("?"))) u(n, i);
      else for (let f of Bh(n.path)) u(n, i, f);
    }),
    l
  );
}
function Bh(t) {
  let l = t.split("/");
  if (l.length === 0) return [];
  let [e, ...a] = l,
    u = e.endsWith("?"),
    n = e.replace(/\?$/, "");
  if (a.length === 0) return u ? [n, ""] : [n];
  let i = Bh(a.join("/")),
    c = [];
  return (
    c.push(...i.map((f) => (f === "" ? n : [n, f].join("/")))),
    u && c.push(...i),
    c.map((f) => (t.startsWith("/") && f === "" ? "/" : f))
  );
}
function ty(t) {
  t.sort((l, e) =>
    l.score !== e.score
      ? e.score - l.score
      : fy(
          l.routesMeta.map((a) => a.childrenIndex),
          e.routesMeta.map((a) => a.childrenIndex),
        ),
  );
}
const ly = /^:[\w-]+$/,
  ey = 3,
  ay = 2,
  uy = 1,
  ny = 10,
  iy = -2,
  xo = (t) => t === "*";
function cy(t, l) {
  let e = t.split("/"),
    a = e.length;
  return (
    e.some(xo) && (a += iy),
    l && (a += ay),
    e
      .filter((u) => !xo(u))
      .reduce((u, n) => u + (ly.test(n) ? ey : n === "" ? uy : ny), a)
  );
}
function fy(t, l) {
  return t.length === l.length && t.slice(0, -1).every((a, u) => a === l[u])
    ? t[t.length - 1] - l[l.length - 1]
    : 0;
}
function sy(t, l, e) {
  let { routesMeta: a } = t,
    u = {},
    n = "/",
    i = [];
  for (let c = 0; c < a.length; ++c) {
    let f = a[c],
      s = c === a.length - 1,
      v = n === "/" ? l : l.slice(n.length) || "/",
      h = Lc(
        { path: f.relativePath, caseSensitive: f.caseSensitive, end: s },
        v,
      ),
      r = f.route;
    if (!h) return null;
    (Object.assign(u, h.params),
      i.push({
        params: u,
        pathname: kl([n, h.pathname]),
        pathnameBase: yy(kl([n, h.pathnameBase])),
        route: r,
      }),
      h.pathnameBase !== "/" && (n = kl([n, h.pathnameBase])));
  }
  return i;
}
function Lc(t, l) {
  typeof t == "string" && (t = { path: t, caseSensitive: !1, end: !0 });
  let [e, a] = oy(t.path, t.caseSensitive, t.end),
    u = l.match(e);
  if (!u) return null;
  let n = u[0],
    i = n.replace(/(.)\/+$/, "$1"),
    c = u.slice(1);
  return {
    params: a.reduce((s, v, h) => {
      let { paramName: r, isOptional: y } = v;
      if (r === "*") {
        let z = c[h] || "";
        i = n.slice(0, n.length - z.length).replace(/(.)\/+$/, "$1");
      }
      const E = c[h];
      return (
        y && !E ? (s[r] = void 0) : (s[r] = (E || "").replace(/%2F/g, "/")),
        s
      );
    }, {}),
    pathname: n,
    pathnameBase: i,
    pattern: t,
  };
}
function oy(t, l, e) {
  (l === void 0 && (l = !1),
    e === void 0 && (e = !0),
    Kf(
      t === "*" || !t.endsWith("*") || t.endsWith("/*"),
      'Route path "' +
        t +
        '" will be treated as if it were ' +
        ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'),
    ));
  let a = [],
    u =
      "^" +
      t
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, c, f) => (
            a.push({ paramName: c, isOptional: f != null }),
            f ? "/?([^\\/]+)?" : "/([^\\/]+)"
          ),
        );
  return (
    t.endsWith("*")
      ? (a.push({ paramName: "*" }),
        (u += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : e
        ? (u += "\\/*$")
        : t !== "" && t !== "/" && (u += "(?:(?=\\/|$))"),
    [new RegExp(u, l ? void 0 : "i"), a]
  );
}
function ry(t) {
  try {
    return t
      .split("/")
      .map((l) => decodeURIComponent(l).replace(/\//g, "%2F"))
      .join("/");
  } catch (l) {
    return (
      Kf(
        !1,
        'The URL path "' +
          t +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + l + ")."),
      ),
      t
    );
  }
}
function fa(t, l) {
  if (l === "/") return t;
  if (!t.toLowerCase().startsWith(l.toLowerCase())) return null;
  let e = l.endsWith("/") ? l.length - 1 : l.length,
    a = t.charAt(e);
  return a && a !== "/" ? null : t.slice(e) || "/";
}
const dy = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  hy = (t) => dy.test(t);
function my(t, l) {
  l === void 0 && (l = "/");
  let {
      pathname: e,
      search: a = "",
      hash: u = "",
    } = typeof t == "string" ? ga(t) : t,
    n;
  if (e)
    if (hy(e)) n = e;
    else {
      if (e.includes("//")) {
        let i = e;
        ((e = e.replace(/\/\/+/g, "/")),
          Kf(
            !1,
            "Pathnames cannot have embedded double slashes - normalizing " +
              (i + " -> " + e),
          ));
      }
      e.startsWith("/") ? (n = Mo(e.substring(1), "/")) : (n = Mo(e, l));
    }
  else n = l;
  return { pathname: n, search: gy(a), hash: Sy(u) };
}
function Mo(t, l) {
  let e = l.replace(/\/+$/, "").split("/");
  return (
    t.split("/").forEach((u) => {
      u === ".." ? e.length > 1 && e.pop() : u !== "." && e.push(u);
    }),
    e.length > 1 ? e.join("/") : "/"
  );
}
function Xi(t, l, e, a) {
  return (
    "Cannot include a '" +
    t +
    "' character in a manually specified " +
    ("`to." +
      l +
      "` field [" +
      JSON.stringify(a) +
      "].  Please separate it out to the ") +
    ("`to." + e + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function vy(t) {
  return t.filter(
    (l, e) => e === 0 || (l.route.path && l.route.path.length > 0),
  );
}
function Jf(t, l) {
  let e = vy(t);
  return l
    ? e.map((a, u) => (u === e.length - 1 ? a.pathname : a.pathnameBase))
    : e.map((a) => a.pathnameBase);
}
function wf(t, l, e, a) {
  a === void 0 && (a = !1);
  let u;
  typeof t == "string"
    ? (u = ga(t))
    : ((u = nu({}, t)),
      P(
        !u.pathname || !u.pathname.includes("?"),
        Xi("?", "pathname", "search", u),
      ),
      P(
        !u.pathname || !u.pathname.includes("#"),
        Xi("#", "pathname", "hash", u),
      ),
      P(!u.search || !u.search.includes("#"), Xi("#", "search", "hash", u)));
  let n = t === "" || u.pathname === "",
    i = n ? "/" : u.pathname,
    c;
  if (i == null) c = e;
  else {
    let h = l.length - 1;
    if (!a && i.startsWith("..")) {
      let r = i.split("/");
      for (; r[0] === ".."; ) (r.shift(), (h -= 1));
      u.pathname = r.join("/");
    }
    c = h >= 0 ? l[h] : "/";
  }
  let f = my(u, c),
    s = i && i !== "/" && i.endsWith("/"),
    v = (n || i === ".") && e.endsWith("/");
  return (!f.pathname.endsWith("/") && (s || v) && (f.pathname += "/"), f);
}
const kl = (t) => t.join("/").replace(/\/\/+/g, "/"),
  yy = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
  gy = (t) => (!t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t),
  Sy = (t) => (!t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t);
function py(t) {
  return (
    t != null &&
    typeof t.status == "number" &&
    typeof t.statusText == "string" &&
    typeof t.internal == "boolean" &&
    "data" in t
  );
}
const Yh = ["post", "put", "patch", "delete"];
new Set(Yh);
const by = ["get", ...Yh];
new Set(by);
/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function iu() {
  return (
    (iu = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var l = 1; l < arguments.length; l++) {
            var e = arguments[l];
            for (var a in e)
              Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
          }
          return t;
        }),
    iu.apply(this, arguments)
  );
}
const In = b.createContext(null),
  qh = b.createContext(null),
  Ol = b.createContext(null),
  Pn = b.createContext(null),
  xl = b.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Gh = b.createContext(null);
function Ey(t, l) {
  let { relative: e } = l === void 0 ? {} : l;
  Sa() || P(!1);
  let { basename: a, navigator: u } = b.useContext(Ol),
    { hash: n, pathname: i, search: c } = ti(t, { relative: e }),
    f = i;
  return (
    a !== "/" && (f = i === "/" ? a : kl([a, i])),
    u.createHref({ pathname: f, search: c, hash: n })
  );
}
function Sa() {
  return b.useContext(Pn) != null;
}
function Oe() {
  return (Sa() || P(!1), b.useContext(Pn).location);
}
function Lh(t) {
  b.useContext(Ol).static || b.useLayoutEffect(t);
}
function pu() {
  let { isDataRoute: t } = b.useContext(xl);
  return t ? By() : zy();
}
function zy() {
  Sa() || P(!1);
  let t = b.useContext(In),
    { basename: l, future: e, navigator: a } = b.useContext(Ol),
    { matches: u } = b.useContext(xl),
    { pathname: n } = Oe(),
    i = JSON.stringify(Jf(u, e.v7_relativeSplatPath)),
    c = b.useRef(!1);
  return (
    Lh(() => {
      c.current = !0;
    }),
    b.useCallback(
      function (s, v) {
        if ((v === void 0 && (v = {}), !c.current)) return;
        if (typeof s == "number") {
          a.go(s);
          return;
        }
        let h = wf(s, JSON.parse(i), n, v.relative === "path");
        (t == null &&
          l !== "/" &&
          (h.pathname = h.pathname === "/" ? l : kl([l, h.pathname])),
          (v.replace ? a.replace : a.push)(h, v.state, v));
      },
      [l, a, i, n, t],
    )
  );
}
const Ty = b.createContext(null);
function Ay(t) {
  let l = b.useContext(xl).outlet;
  return l && b.createElement(Ty.Provider, { value: t }, l);
}
function ti(t, l) {
  let { relative: e } = l === void 0 ? {} : l,
    { future: a } = b.useContext(Ol),
    { matches: u } = b.useContext(xl),
    { pathname: n } = Oe(),
    i = JSON.stringify(Jf(u, a.v7_relativeSplatPath));
  return b.useMemo(() => wf(t, JSON.parse(i), n, e === "path"), [t, i, n, e]);
}
function _y(t, l) {
  return Oy(t, l);
}
function Oy(t, l, e, a) {
  Sa() || P(!1);
  let { navigator: u } = b.useContext(Ol),
    { matches: n } = b.useContext(xl),
    i = n[n.length - 1],
    c = i ? i.params : {};
  i && i.pathname;
  let f = i ? i.pathnameBase : "/";
  i && i.route;
  let s = Oe(),
    v;
  if (l) {
    var h;
    let T = typeof l == "string" ? ga(l) : l;
    (f === "/" || ((h = T.pathname) != null && h.startsWith(f)) || P(!1),
      (v = T));
  } else v = s;
  let r = v.pathname || "/",
    y = r;
  if (f !== "/") {
    let T = f.replace(/^\//, "").split("/");
    y = "/" + r.replace(/^\//, "").split("/").slice(T.length).join("/");
  }
  let E = Iv(t, { pathname: y }),
    z = Ny(
      E &&
        E.map((T) =>
          Object.assign({}, T, {
            params: Object.assign({}, c, T.params),
            pathname: kl([
              f,
              u.encodeLocation
                ? u.encodeLocation(T.pathname).pathname
                : T.pathname,
            ]),
            pathnameBase:
              T.pathnameBase === "/"
                ? f
                : kl([
                    f,
                    u.encodeLocation
                      ? u.encodeLocation(T.pathnameBase).pathname
                      : T.pathnameBase,
                  ]),
          }),
        ),
      n,
      e,
      a,
    );
  return l && z
    ? b.createElement(
        Pn.Provider,
        {
          value: {
            location: iu(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              v,
            ),
            navigationType: Xl.Pop,
          },
        },
        z,
      )
    : z;
}
function xy() {
  let t = Hy(),
    l = py(t)
      ? t.status + " " + t.statusText
      : t instanceof Error
        ? t.message
        : JSON.stringify(t),
    e = t instanceof Error ? t.stack : null,
    u = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return b.createElement(
    b.Fragment,
    null,
    b.createElement("h2", null, "Unexpected Application Error!"),
    b.createElement("h3", { style: { fontStyle: "italic" } }, l),
    e ? b.createElement("pre", { style: u }, e) : null,
    null,
  );
}
const My = b.createElement(xy, null);
class Uy extends b.Component {
  constructor(l) {
    (super(l),
      (this.state = {
        location: l.location,
        revalidation: l.revalidation,
        error: l.error,
      }));
  }
  static getDerivedStateFromError(l) {
    return { error: l };
  }
  static getDerivedStateFromProps(l, e) {
    return e.location !== l.location ||
      (e.revalidation !== "idle" && l.revalidation === "idle")
      ? { error: l.error, location: l.location, revalidation: l.revalidation }
      : {
          error: l.error !== void 0 ? l.error : e.error,
          location: e.location,
          revalidation: l.revalidation || e.revalidation,
        };
  }
  componentDidCatch(l, e) {
    console.error(
      "React Router caught the following error during render",
      l,
      e,
    );
  }
  render() {
    return this.state.error !== void 0
      ? b.createElement(
          xl.Provider,
          { value: this.props.routeContext },
          b.createElement(Gh.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children;
  }
}
function Dy(t) {
  let { routeContext: l, match: e, children: a } = t,
    u = b.useContext(In);
  return (
    u &&
      u.static &&
      u.staticContext &&
      (e.route.errorElement || e.route.ErrorBoundary) &&
      (u.staticContext._deepestRenderedBoundaryId = e.route.id),
    b.createElement(xl.Provider, { value: l }, a)
  );
}
function Ny(t, l, e, a) {
  var u;
  if (
    (l === void 0 && (l = []),
    e === void 0 && (e = null),
    a === void 0 && (a = null),
    t == null)
  ) {
    var n;
    if (!e) return null;
    if (e.errors) t = e.matches;
    else if (
      (n = a) != null &&
      n.v7_partialHydration &&
      l.length === 0 &&
      !e.initialized &&
      e.matches.length > 0
    )
      t = e.matches;
    else return null;
  }
  let i = t,
    c = (u = e) == null ? void 0 : u.errors;
  if (c != null) {
    let v = i.findIndex(
      (h) => h.route.id && (c == null ? void 0 : c[h.route.id]) !== void 0,
    );
    (v >= 0 || P(!1), (i = i.slice(0, Math.min(i.length, v + 1))));
  }
  let f = !1,
    s = -1;
  if (e && a && a.v7_partialHydration)
    for (let v = 0; v < i.length; v++) {
      let h = i[v];
      if (
        ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (s = v),
        h.route.id)
      ) {
        let { loaderData: r, errors: y } = e,
          E =
            h.route.loader &&
            r[h.route.id] === void 0 &&
            (!y || y[h.route.id] === void 0);
        if (h.route.lazy || E) {
          ((f = !0), s >= 0 ? (i = i.slice(0, s + 1)) : (i = [i[0]]));
          break;
        }
      }
    }
  return i.reduceRight((v, h, r) => {
    let y,
      E = !1,
      z = null,
      T = null;
    e &&
      ((y = c && h.route.id ? c[h.route.id] : void 0),
      (z = h.route.errorElement || My),
      f &&
        (s < 0 && r === 0
          ? (Yy("route-fallback"), (E = !0), (T = null))
          : s === r &&
            ((E = !0), (T = h.route.hydrateFallbackElement || null))));
    let d = l.concat(i.slice(0, r + 1)),
      o = () => {
        let m;
        return (
          y
            ? (m = z)
            : E
              ? (m = T)
              : h.route.Component
                ? (m = b.createElement(h.route.Component, null))
                : h.route.element
                  ? (m = h.route.element)
                  : (m = v),
          b.createElement(Dy, {
            match: h,
            routeContext: { outlet: v, matches: d, isDataRoute: e != null },
            children: m,
          })
        );
      };
    return e && (h.route.ErrorBoundary || h.route.errorElement || r === 0)
      ? b.createElement(Uy, {
          location: e.location,
          revalidation: e.revalidation,
          component: z,
          error: y,
          children: o(),
          routeContext: { outlet: null, matches: d, isDataRoute: !0 },
        })
      : o();
  }, null);
}
var Xh = (function (t) {
    return (
      (t.UseBlocker = "useBlocker"),
      (t.UseRevalidator = "useRevalidator"),
      (t.UseNavigateStable = "useNavigate"),
      t
    );
  })(Xh || {}),
  Qh = (function (t) {
    return (
      (t.UseBlocker = "useBlocker"),
      (t.UseLoaderData = "useLoaderData"),
      (t.UseActionData = "useActionData"),
      (t.UseRouteError = "useRouteError"),
      (t.UseNavigation = "useNavigation"),
      (t.UseRouteLoaderData = "useRouteLoaderData"),
      (t.UseMatches = "useMatches"),
      (t.UseRevalidator = "useRevalidator"),
      (t.UseNavigateStable = "useNavigate"),
      (t.UseRouteId = "useRouteId"),
      t
    );
  })(Qh || {});
function Cy(t) {
  let l = b.useContext(In);
  return (l || P(!1), l);
}
function jy(t) {
  let l = b.useContext(qh);
  return (l || P(!1), l);
}
function Ry(t) {
  let l = b.useContext(xl);
  return (l || P(!1), l);
}
function Zh(t) {
  let l = Ry(),
    e = l.matches[l.matches.length - 1];
  return (e.route.id || P(!1), e.route.id);
}
function Hy() {
  var t;
  let l = b.useContext(Gh),
    e = jy(),
    a = Zh();
  return l !== void 0 ? l : (t = e.errors) == null ? void 0 : t[a];
}
function By() {
  let { router: t } = Cy(Xh.UseNavigateStable),
    l = Zh(Qh.UseNavigateStable),
    e = b.useRef(!1);
  return (
    Lh(() => {
      e.current = !0;
    }),
    b.useCallback(
      function (u, n) {
        (n === void 0 && (n = {}),
          e.current &&
            (typeof u == "number"
              ? t.navigate(u)
              : t.navigate(u, iu({ fromRouteId: l }, n))));
      },
      [t, l],
    )
  );
}
const Uo = {};
function Yy(t, l, e) {
  Uo[t] || (Uo[t] = !0);
}
function qy(t, l) {
  (t == null || t.v7_startTransition, t == null || t.v7_relativeSplatPath);
}
function tn(t) {
  let { to: l, replace: e, state: a, relative: u } = t;
  Sa() || P(!1);
  let { future: n, static: i } = b.useContext(Ol),
    { matches: c } = b.useContext(xl),
    { pathname: f } = Oe(),
    s = pu(),
    v = wf(l, Jf(c, n.v7_relativeSplatPath), f, u === "path"),
    h = JSON.stringify(v);
  return (
    b.useEffect(
      () => s(JSON.parse(h), { replace: e, state: a, relative: u }),
      [s, h, u, e, a],
    ),
    null
  );
}
function Gy(t) {
  return Ay(t.context);
}
function Xt(t) {
  P(!1);
}
function Ly(t) {
  let {
    basename: l = "/",
    children: e = null,
    location: a,
    navigationType: u = Xl.Pop,
    navigator: n,
    static: i = !1,
    future: c,
  } = t;
  Sa() && P(!1);
  let f = l.replace(/^\/*/, "/"),
    s = b.useMemo(
      () => ({
        basename: f,
        navigator: n,
        static: i,
        future: iu({ v7_relativeSplatPath: !1 }, c),
      }),
      [f, c, n, i],
    );
  typeof a == "string" && (a = ga(a));
  let {
      pathname: v = "/",
      search: h = "",
      hash: r = "",
      state: y = null,
      key: E = "default",
    } = a,
    z = b.useMemo(() => {
      let T = fa(v, f);
      return T == null
        ? null
        : {
            location: { pathname: T, search: h, hash: r, state: y, key: E },
            navigationType: u,
          };
    }, [f, v, h, r, y, E, u]);
  return z == null
    ? null
    : b.createElement(
        Ol.Provider,
        { value: s },
        b.createElement(Pn.Provider, { children: e, value: z }),
      );
}
function Xy(t) {
  let { children: l, location: e } = t;
  return _y(Xc(l), e);
}
new Promise(() => {});
function Xc(t, l) {
  l === void 0 && (l = []);
  let e = [];
  return (
    b.Children.forEach(t, (a, u) => {
      if (!b.isValidElement(a)) return;
      let n = [...l, u];
      if (a.type === b.Fragment) {
        e.push.apply(e, Xc(a.props.children, n));
        return;
      }
      (a.type !== Xt && P(!1), !a.props.index || !a.props.children || P(!1));
      let i = {
        id: a.props.id || n.join("-"),
        caseSensitive: a.props.caseSensitive,
        element: a.props.element,
        Component: a.props.Component,
        index: a.props.index,
        path: a.props.path,
        loader: a.props.loader,
        action: a.props.action,
        errorElement: a.props.errorElement,
        ErrorBoundary: a.props.ErrorBoundary,
        hasErrorBoundary:
          a.props.ErrorBoundary != null || a.props.errorElement != null,
        shouldRevalidate: a.props.shouldRevalidate,
        handle: a.props.handle,
        lazy: a.props.lazy,
      };
      (a.props.children && (i.children = Xc(a.props.children, n)), e.push(i));
    }),
    e
  );
}
/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Cn() {
  return (
    (Cn = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var l = 1; l < arguments.length; l++) {
            var e = arguments[l];
            for (var a in e)
              Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
          }
          return t;
        }),
    Cn.apply(this, arguments)
  );
}
function Vh(t, l) {
  if (t == null) return {};
  var e = {},
    a = Object.keys(t),
    u,
    n;
  for (n = 0; n < a.length; n++)
    ((u = a[n]), !(l.indexOf(u) >= 0) && (e[u] = t[u]));
  return e;
}
function Qy(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function Zy(t, l) {
  return t.button === 0 && (!l || l === "_self") && !Qy(t);
}
const Vy = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ],
  Ky = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "viewTransition",
    "children",
  ],
  Jy = "6";
try {
  window.__reactRouterVersion = Jy;
} catch {}
const wy = b.createContext({ isTransitioning: !1 }),
  Wy = "startTransition",
  Do = v0[Wy];
function $y(t) {
  let { basename: l, children: e, future: a, window: u } = t,
    n = b.useRef();
  n.current == null && (n.current = $v({ window: u, v5Compat: !0 }));
  let i = n.current,
    [c, f] = b.useState({ action: i.action, location: i.location }),
    { v7_startTransition: s } = a || {},
    v = b.useCallback(
      (h) => {
        s && Do ? Do(() => f(h)) : f(h);
      },
      [f, s],
    );
  return (
    b.useLayoutEffect(() => i.listen(v), [i, v]),
    b.useEffect(() => qy(a), [a]),
    b.createElement(Ly, {
      basename: l,
      children: e,
      location: c.location,
      navigationType: c.action,
      navigator: i,
      future: a,
    })
  );
}
const Fy =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  ky = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Iy = b.forwardRef(function (l, e) {
    let {
        onClick: a,
        relative: u,
        reloadDocument: n,
        replace: i,
        state: c,
        target: f,
        to: s,
        preventScrollReset: v,
        viewTransition: h,
      } = l,
      r = Vh(l, Vy),
      { basename: y } = b.useContext(Ol),
      E,
      z = !1;
    if (typeof s == "string" && ky.test(s) && ((E = s), Fy))
      try {
        let m = new URL(window.location.href),
          g = s.startsWith("//") ? new URL(m.protocol + s) : new URL(s),
          _ = fa(g.pathname, y);
        g.origin === m.origin && _ != null
          ? (s = _ + g.search + g.hash)
          : (z = !0);
      } catch {}
    let T = Ey(s, { relative: u }),
      d = l1(s, {
        replace: i,
        state: c,
        target: f,
        preventScrollReset: v,
        relative: u,
        viewTransition: h,
      });
    function o(m) {
      (a && a(m), m.defaultPrevented || d(m));
    }
    return b.createElement(
      "a",
      Cn({}, r, { href: E || T, onClick: z || n ? a : o, ref: e, target: f }),
    );
  }),
  Py = b.forwardRef(function (l, e) {
    let {
        "aria-current": a = "page",
        caseSensitive: u = !1,
        className: n = "",
        end: i = !1,
        style: c,
        to: f,
        viewTransition: s,
        children: v,
      } = l,
      h = Vh(l, Ky),
      r = ti(f, { relative: h.relative }),
      y = Oe(),
      E = b.useContext(qh),
      { navigator: z, basename: T } = b.useContext(Ol),
      d = E != null && e1(r) && s === !0,
      o = z.encodeLocation ? z.encodeLocation(r).pathname : r.pathname,
      m = y.pathname,
      g =
        E && E.navigation && E.navigation.location
          ? E.navigation.location.pathname
          : null;
    (u ||
      ((m = m.toLowerCase()),
      (g = g ? g.toLowerCase() : null),
      (o = o.toLowerCase())),
      g && T && (g = fa(g, T) || g));
    const _ = o !== "/" && o.endsWith("/") ? o.length - 1 : o.length;
    let U = m === o || (!i && m.startsWith(o) && m.charAt(_) === "/"),
      A =
        g != null &&
        (g === o || (!i && g.startsWith(o) && g.charAt(o.length) === "/")),
      x = { isActive: U, isPending: A, isTransitioning: d },
      C = U ? a : void 0,
      j;
    typeof n == "function"
      ? (j = n(x))
      : (j = [
          n,
          U ? "active" : null,
          A ? "pending" : null,
          d ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let Tt = typeof c == "function" ? c(x) : c;
    return b.createElement(
      Iy,
      Cn({}, h, {
        "aria-current": C,
        className: j,
        ref: e,
        style: Tt,
        to: f,
        viewTransition: s,
      }),
      typeof v == "function" ? v(x) : v,
    );
  });
var Qc;
(function (t) {
  ((t.UseScrollRestoration = "useScrollRestoration"),
    (t.UseSubmit = "useSubmit"),
    (t.UseSubmitFetcher = "useSubmitFetcher"),
    (t.UseFetcher = "useFetcher"),
    (t.useViewTransitionState = "useViewTransitionState"));
})(Qc || (Qc = {}));
var No;
(function (t) {
  ((t.UseFetcher = "useFetcher"),
    (t.UseFetchers = "useFetchers"),
    (t.UseScrollRestoration = "useScrollRestoration"));
})(No || (No = {}));
function t1(t) {
  let l = b.useContext(In);
  return (l || P(!1), l);
}
function l1(t, l) {
  let {
      target: e,
      replace: a,
      state: u,
      preventScrollReset: n,
      relative: i,
      viewTransition: c,
    } = l === void 0 ? {} : l,
    f = pu(),
    s = Oe(),
    v = ti(t, { relative: i });
  return b.useCallback(
    (h) => {
      if (Zy(h, e)) {
        h.preventDefault();
        let r = a !== void 0 ? a : Nn(s) === Nn(v);
        f(t, {
          replace: r,
          state: u,
          preventScrollReset: n,
          relative: i,
          viewTransition: c,
        });
      }
    },
    [s, f, v, a, u, e, t, n, i, c],
  );
}
function e1(t, l) {
  l === void 0 && (l = {});
  let e = b.useContext(wy);
  e == null && P(!1);
  let { basename: a } = t1(Qc.useViewTransitionState),
    u = ti(t, { relative: l.relative });
  if (!e.isTransitioning) return !1;
  let n = fa(e.currentLocation.pathname, a) || e.currentLocation.pathname,
    i = fa(e.nextLocation.pathname, a) || e.nextLocation.pathname;
  return Lc(u.pathname, i) != null || Lc(u.pathname, n) != null;
}
const Kh = b.createContext(null),
  Qi = "campus_mart_admin",
  a1 = ({ children: t }) => {
    const [l, e] = b.useState(() => {
        const i = localStorage.getItem(Qi);
        return i ? JSON.parse(i) : null;
      }),
      a = b.useCallback((i, c) => {
        if (i === "admin@campus.edu" && c === "password123") {
          const f = {
            email: i,
            name: "Admin",
            role: "Moderator access",
            initials: "AD",
          };
          return (
            localStorage.setItem(Qi, JSON.stringify(f)),
            e(f),
            { success: !0, message: "Signed in" }
          );
        }
        return { success: !1, message: "Invalid admin credentials" };
      }, []),
      u = b.useCallback(() => {
        (localStorage.removeItem(Qi), e(null));
      }, []),
      n = b.useMemo(
        () => ({ admin: l, isAuthenticated: !!l, login: a, logout: u }),
        [l, a, u],
      );
    return S.jsx(Kh.Provider, { value: n, children: t });
  },
  li = () => b.useContext(Kh),
  u1 = "modulepreload",
  n1 = function (t) {
    return "/" + t;
  },
  Co = {},
  ue = function (l, e, a) {
    let u = Promise.resolve();
    if (e && e.length > 0) {
      document.getElementsByTagName("link");
      const i = document.querySelector("meta[property=csp-nonce]"),
        c =
          (i == null ? void 0 : i.nonce) ||
          (i == null ? void 0 : i.getAttribute("nonce"));
      u = Promise.allSettled(
        e.map((f) => {
          if (((f = n1(f)), f in Co)) return;
          Co[f] = !0;
          const s = f.endsWith(".css"),
            v = s ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${f}"]${v}`)) return;
          const h = document.createElement("link");
          if (
            ((h.rel = s ? "stylesheet" : u1),
            s || (h.as = "script"),
            (h.crossOrigin = ""),
            (h.href = f),
            c && h.setAttribute("nonce", c),
            document.head.appendChild(h),
            s)
          )
            return new Promise((r, y) => {
              (h.addEventListener("load", r),
                h.addEventListener("error", () =>
                  y(new Error(`Unable to preload CSS for ${f}`)),
                ));
            });
        }),
      );
    }
    function n(i) {
      const c = new Event("vite:preloadError", { cancelable: !0 });
      if (((c.payload = i), window.dispatchEvent(c), !c.defaultPrevented))
        throw i;
    }
    return u.then((i) => {
      for (const c of i || []) c.status === "rejected" && n(c.reason);
      return l().catch(n);
    });
  },
  i1 = ({ rows: t = 5, columns: l = 5 }) =>
    S.jsx("div", {
      className: "space-y-3",
      children: Array.from({ length: t }).map((e, a) =>
        S.jsx(
          "div",
          {
            className: "grid gap-3",
            style: { gridTemplateColumns: `repeat(${l}, minmax(0, 1fr))` },
            children: Array.from({ length: l }).map((u, n) =>
              S.jsx(
                "div",
                { className: "h-9 animate-pulse rounded-xl bg-neutral-200" },
                n,
              ),
            ),
          },
          a,
        ),
      ),
    }),
  Jh = b.memo(i1),
  c1 = () => {
    const t = b.useRef(null),
      l = Oe(),
      e = pu(),
      { admin: a, logout: u } = li(),
      [n, i] = b.useState(""),
      c = n === l.pathname;
    b.useEffect(() => {
      const s = (v) => {
        t.current && !t.current.contains(v.target) && i("");
      };
      return (
        document.addEventListener("mousedown", s),
        () => document.removeEventListener("mousedown", s)
      );
    }, []);
    const f = () => {
      (u(), e("/login", { replace: !0 }));
    };
    return S.jsxs("div", {
      ref: t,
      className: "relative",
      children: [
        S.jsxs("button", {
          type: "button",
          onClick: () => i((s) => (s === l.pathname ? "" : l.pathname)),
          className:
            "flex items-center gap-3 rounded-xl px-2 py-1.5 transition hover:bg-[#F8FAFC]",
          children: [
            S.jsxs("div", {
              className: "hidden items-center gap-3 md:flex",
              children: [
                S.jsxs("div", {
                  className: "text-right",
                  children: [
                    S.jsx("p", {
                      className: "text-sm font-semibold text-[#0B1220]",
                      children: (a == null ? void 0 : a.name) || "Admin User",
                    }),
                    S.jsx("p", {
                      className:
                        "text-[11px] font-medium uppercase tracking-[0.12em] text-[#64748B]",
                      children: "Superuser",
                    }),
                  ],
                }),
                S.jsx("div", { className: "h-9 w-px bg-[#E2E8F0]" }),
              ],
            }),
            S.jsx("div", {
              className:
                "flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#64748B] to-[#0F172A] text-sm font-semibold text-white ring-2 ring-[#E2E8F0]",
              children: (a == null ? void 0 : a.initials) || "AU",
            }),
          ],
        }),
        S.jsx("div", {
          className: `absolute right-0 top-full z-20 mt-2 w-44 origin-top-right rounded-2xl border border-[#E2E8F0] bg-white p-2 shadow-sm transition ${c ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"}`,
          children: S.jsx("button", {
            type: "button",
            onClick: f,
            className:
              "w-full rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-[#DC2626] transition hover:bg-[#FEF2F2]",
            children: "Logout",
          }),
        }),
      ],
    });
  },
  f1 = b.memo(c1),
  s1 = ({ onMenuClick: t }) => {
    const l = pu();
    return S.jsx("header", {
      className:
        "sticky top-0 z-30 border-b border-[#E8ECF4] bg-white shadow-sm",
      children: S.jsxs("div", {
        className: "flex h-[64px] items-center justify-between px-4 lg:px-5",
        children: [
          S.jsx("button", {
            type: "button",
            onClick: t,
            className:
              "rounded-xl border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-semibold text-[#334155] lg:hidden",
            children: "Menu",
          }),
          S.jsxs("div", {
            className: "ml-auto flex items-center gap-6",
            children: [
              S.jsxs("button", {
                type: "button",
                "aria-label": "Open notifications",
                onClick: () => l("/notification"),
                className:
                  "relative flex h-10 w-10 items-center justify-center rounded-full border border-[#E2E8F0] text-[#334155] transition hover:bg-[#F8FAFC]",
                children: [
                  S.jsx("span", {
                    className:
                      "absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-primary",
                  }),
                  S.jsxs("svg", {
                    viewBox: "0 0 24 24",
                    className: "h-6 w-6",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.8",
                    children: [
                      S.jsx("path", {
                        d: "M15 17h5l-1.4-1.4a2 2 0 0 1-.6-1.4V11a6 6 0 0 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5",
                      }),
                      S.jsx("path", { d: "M10 21a2 2 0 0 0 4 0" }),
                    ],
                  }),
                ],
              }),
              S.jsx(f1, {}),
            ],
          }),
        ],
      }),
    });
  },
  o1 = b.memo(s1),
  r1 = [
    {
      label: "Dashboard",
      path: "/dashboard",
      icon: S.jsxs("svg", {
        viewBox: "0 0 24 24",
        className: "h-5 w-5",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: [
          S.jsx("rect", { x: "3", y: "3", width: "7", height: "7", rx: "1.5" }),
          S.jsx("rect", {
            x: "14",
            y: "3",
            width: "7",
            height: "7",
            rx: "1.5",
          }),
          S.jsx("rect", {
            x: "3",
            y: "14",
            width: "7",
            height: "7",
            rx: "1.5",
          }),
          S.jsx("rect", {
            x: "14",
            y: "14",
            width: "7",
            height: "7",
            rx: "1.5",
          }),
        ],
      }),
    },
    {
      label: "Users",
      path: "/users",
      icon: S.jsxs("svg", {
        viewBox: "0 0 24 24",
        className: "h-5 w-5",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: [
          S.jsx("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
          S.jsx("circle", { cx: "9", cy: "7", r: "4" }),
          S.jsx("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
          S.jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" }),
        ],
      }),
    },
    {
      label: "Products",
      path: "/products",
      icon: S.jsxs("svg", {
        viewBox: "0 0 24 24",
        className: "h-5 w-5",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: [
          S.jsx("path", { d: "M3 7h18" }),
          S.jsx("path", { d: "M6 3h12l1 4H5l1-4Z" }),
          S.jsx("rect", { x: "4", y: "7", width: "16", height: "14", rx: "2" }),
        ],
      }),
    },
    {
      label: "Reports",
      path: "/reports",
      icon: S.jsxs("svg", {
        viewBox: "0 0 24 24",
        className: "h-5 w-5",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: [
          S.jsx("path", {
            d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z",
          }),
          S.jsx("path", { d: "M14 2v6h6" }),
          S.jsx("path", { d: "M8 13h8" }),
          S.jsx("path", { d: "M8 17h5" }),
        ],
      }),
    },
    {
      label: "Analytics",
      path: "/analytics",
      icon: S.jsxs("svg", {
        viewBox: "0 0 24 24",
        className: "h-5 w-5",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: [
          S.jsx("path", { d: "M3 3v18h18" }),
          S.jsx("rect", { x: "7", y: "11", width: "3", height: "6" }),
          S.jsx("rect", { x: "12", y: "8", width: "3", height: "9" }),
          S.jsx("rect", { x: "17", y: "5", width: "3", height: "12" }),
        ],
      }),
    },
    {
      label: "Notification",
      path: "/notification",
      icon: S.jsxs("svg", {
        viewBox: "0 0 24 24",
        className: "h-5 w-5",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: [
          S.jsx("path", {
            d: "M15 17h5l-1.4-1.4a2 2 0 0 1-.6-1.4V11a6 6 0 0 0-12 0v3.2a2 2 0 0 1-.6 1.4L4 17h5",
          }),
          S.jsx("path", { d: "M10 21a2 2 0 0 0 4 0" }),
        ],
      }),
    },
    {
      label: "Settings",
      path: "/settings",
      icon: S.jsxs("svg", {
        viewBox: "0 0 24 24",
        className: "h-5 w-5",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "2",
        children: [
          S.jsx("circle", { cx: "12", cy: "12", r: "3" }),
          S.jsx("path", {
            d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.08a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.08a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z",
          }),
        ],
      }),
    },
  ],
  d1 = ({ open: t, onClose: l }) => {
    const e = pu(),
      { logout: a } = li(),
      u = () => {
        (a(), l == null || l(), e("/login", { replace: !0 }));
      };
    return S.jsxs(S.Fragment, {
      children: [
        S.jsxs("aside", {
          className: `fixed inset-y-0 left-0 z-40 flex w-[248px] flex-col border-r border-[#E8ECF4] bg-white transition-transform lg:static lg:translate-x-0 ${t ? "translate-x-0" : "-translate-x-full"}`,
          children: [
            S.jsxs("div", {
              className: "border-b border-[#EEF1F5] px-5 py-6",
              children: [
                S.jsx("p", {
                  className: "text-[17px] font-bold text-[#0B1220]",
                  children: "Campus Mart",
                }),
                S.jsx("p", {
                  className:
                    "mt-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#64748B]",
                  children: "Admin Portal",
                }),
              ],
            }),
            S.jsx("nav", {
              className: "flex-1 px-3 py-5",
              children: S.jsx("div", {
                className: "space-y-2",
                children: r1.map((n) =>
                  S.jsxs(
                    Py,
                    {
                      to: n.path,
                      onClick: l,
                      className: ({ isActive: i }) =>
                        `flex items-center gap-3 rounded-none border-r-4 px-4 py-2.5 text-[14px] font-medium transition ${i ? "border-primary bg-[#EEF2FF] text-primary" : "border-transparent text-[#334155] hover:bg-[#F8FAFC]"}`,
                      children: [
                        S.jsx("span", {
                          className: "text-current",
                          children: n.icon,
                        }),
                        S.jsx("span", { children: n.label }),
                      ],
                    },
                    n.path,
                  ),
                ),
              }),
            }),
            S.jsxs("div", {
              className: "mt-auto border-t border-[#EEF1F5] px-3 py-3",
              children: [
                S.jsxs("button", {
                  type: "button",
                  className:
                    "flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-left text-[14px] font-medium text-[#334155] transition hover:bg-[#F8FAFC]",
                  children: [
                    S.jsxs("svg", {
                      viewBox: "0 0 24 24",
                      className: "h-5 w-5",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      children: [
                        S.jsx("circle", { cx: "12", cy: "12", r: "10" }),
                        S.jsx("path", { d: "M12 16v.01" }),
                        S.jsx("path", {
                          d: "M12 8a2 2 0 0 1 2 2c0 1.4-2 2-2 4",
                        }),
                      ],
                    }),
                    S.jsx("span", { children: "Help Center" }),
                  ],
                }),
                S.jsxs("button", {
                  type: "button",
                  onClick: u,
                  className:
                    "mt-2 flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-left text-[14px] font-medium text-[#DC2626] transition hover:bg-[#FEF2F2]",
                  children: [
                    S.jsxs("svg", {
                      viewBox: "0 0 24 24",
                      className: "h-5 w-5",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "2",
                      children: [
                        S.jsx("path", {
                          d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
                        }),
                        S.jsx("path", { d: "M16 17l5-5-5-5" }),
                        S.jsx("path", { d: "M21 12H9" }),
                      ],
                    }),
                    S.jsx("span", { children: "Log Out" }),
                  ],
                }),
              ],
            }),
          ],
        }),
        t &&
          S.jsx("button", {
            type: "button",
            "aria-label": "Close menu",
            onClick: l,
            className: "fixed inset-0 z-30 bg-[#0F172A]/20 lg:hidden",
          }),
      ],
    });
  },
  h1 = b.memo(d1),
  m1 = () => {
    const [t, l] = b.useState(!1),
      { isAuthenticated: e } = li();
    return e
      ? S.jsxs("div", {
          className: "min-h-screen bg-[#F5F7FB] lg:flex",
          children: [
            S.jsx(h1, { open: t, onClose: () => l(!1) }),
            S.jsxs("div", {
              className: "min-w-0 flex-1",
              children: [
                S.jsx(o1, { onMenuClick: () => l(!0) }),
                S.jsx("main", {
                  className: "mx-auto w-full max-w-[1240px] p-3.5 lg:p-4",
                  children: S.jsx(b.Suspense, {
                    fallback: S.jsx(Jh, {}),
                    children: S.jsx(Gy, {}),
                  }),
                }),
              ],
            }),
          ],
        })
      : S.jsx(tn, { to: "/login", replace: !0 });
  },
  v1 = b.memo(m1),
  y1 = b.lazy(() => ue(() => import("./Login-BGOi198n.js"), [])),
  g1 = b.lazy(() =>
    ue(() => import("./Dashboard-DDDg_7QC.js"), __vite__mapDeps([0, 1, 2])),
  ),
  S1 = b.lazy(() =>
    ue(() => import("./Users-D3VrSFqC.js"), __vite__mapDeps([3, 4, 5, 1, 2])),
  ),
  p1 = b.lazy(() =>
    ue(() => import("./Products-BxZgcE5C.js"), __vite__mapDeps([6, 5, 1, 2])),
  ),
  b1 = b.lazy(() =>
    ue(() => import("./Reports-B21qDsP6.js"), __vite__mapDeps([7, 4, 5, 1, 2])),
  ),
  E1 = b.lazy(() =>
    ue(() => import("./Analytics-BQQfRf4w.js"), __vite__mapDeps([8, 9])),
  ),
  z1 = b.lazy(() =>
    ue(() => import("./Notification-DEcDsbOp.js"), __vite__mapDeps([10, 1, 2])),
  ),
  T1 = b.lazy(() =>
    ue(() => import("./Settings-Co6FdeI8.js"), __vite__mapDeps([11, 9, 2])),
  ),
  A1 = () => {
    const { isAuthenticated: t } = li();
    return S.jsx(b.Suspense, {
      fallback: S.jsx(Jh, {}),
      children: S.jsxs(Xy, {
        children: [
          S.jsx(Xt, {
            path: "/login",
            element: t
              ? S.jsx(tn, { to: "/dashboard", replace: !0 })
              : S.jsx(y1, {}),
          }),
          S.jsxs(Xt, {
            element: S.jsx(v1, {}),
            children: [
              S.jsx(Xt, {
                path: "/",
                element: S.jsx(tn, { to: "/dashboard", replace: !0 }),
              }),
              S.jsx(Xt, { path: "/dashboard", element: S.jsx(g1, {}) }),
              S.jsx(Xt, { path: "/users", element: S.jsx(S1, {}) }),
              S.jsx(Xt, { path: "/products", element: S.jsx(p1, {}) }),
              S.jsx(Xt, { path: "/reports", element: S.jsx(b1, {}) }),
              S.jsx(Xt, { path: "/analytics", element: S.jsx(E1, {}) }),
              S.jsx(Xt, { path: "/notification", element: S.jsx(z1, {}) }),
              S.jsx(Xt, { path: "/settings", element: S.jsx(T1, {}) }),
              S.jsx(Xt, {
                path: "*",
                element: S.jsx(tn, { to: "/dashboard", replace: !0 }),
              }),
            ],
          }),
        ],
      }),
    });
  },
  _1 = b.memo(A1);
Wv.createRoot(document.getElementById("root")).render(
  S.jsx(b.StrictMode, {
    children: S.jsx($y, { children: S.jsx(a1, { children: S.jsx(_1, {}) }) }),
  }),
);
export { Jh as L, pu as a, S as j, b as r, li as u };
