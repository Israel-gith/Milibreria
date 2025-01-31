var bi = Object.defineProperty;
var vi = (e, t, r) => t in e ? bi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Tt = (e, t, r) => vi(e, typeof t != "symbol" ? t + "" : t, r);
import * as k from "react";
import ht, { forwardRef as Si, useContext as xi, Children as Ei, isValidElement as Jt, cloneElement as Qt } from "react";
function Ci(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Wt = { exports: {} }, wt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xn;
function Ti() {
  if (xn) return wt;
  xn = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, o, i) {
    var a = null;
    if (i !== void 0 && (a = "" + i), o.key !== void 0 && (a = "" + o.key), "key" in o) {
      i = {};
      for (var s in o)
        s !== "key" && (i[s] = o[s]);
    } else i = o;
    return o = i.ref, {
      $$typeof: e,
      type: n,
      key: a,
      ref: o !== void 0 ? o : null,
      props: i
    };
  }
  return wt.Fragment = t, wt.jsx = r, wt.jsxs = r, wt;
}
var Rt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var En;
function wi() {
  return En || (En = 1, process.env.NODE_ENV !== "production" && function() {
    function e(p) {
      if (p == null) return null;
      if (typeof p == "function")
        return p.$$typeof === Ee ? null : p.displayName || p.name || null;
      if (typeof p == "string") return p;
      switch (p) {
        case A:
          return "Fragment";
        case g:
          return "Portal";
        case H:
          return "Profiler";
        case I:
          return "StrictMode";
        case N:
          return "Suspense";
        case B:
          return "SuspenseList";
      }
      if (typeof p == "object")
        switch (typeof p.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), p.$$typeof) {
          case c:
            return (p.displayName || "Context") + ".Provider";
          case J:
            return (p._context.displayName || "Context") + ".Consumer";
          case $:
            var w = p.render;
            return p = p.displayName, p || (p = w.displayName || w.name || "", p = p !== "" ? "ForwardRef(" + p + ")" : "ForwardRef"), p;
          case U:
            return w = p.displayName || null, w !== null ? w : e(p.type) || "Memo";
          case se:
            w = p._payload, p = p._init;
            try {
              return e(p(w));
            } catch {
            }
        }
      return null;
    }
    function t(p) {
      return "" + p;
    }
    function r(p) {
      try {
        t(p);
        var w = !1;
      } catch {
        w = !0;
      }
      if (w) {
        w = console;
        var M = w.error, Z = typeof Symbol == "function" && Symbol.toStringTag && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return M.call(
          w,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          Z
        ), t(p);
      }
    }
    function n() {
    }
    function o() {
      if (j === 0) {
        Y = console.log, V = console.info, L = console.warn, q = console.error, K = console.group, G = console.groupCollapsed, ye = console.groupEnd;
        var p = {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0
        };
        Object.defineProperties(console, {
          info: p,
          log: p,
          warn: p,
          error: p,
          group: p,
          groupCollapsed: p,
          groupEnd: p
        });
      }
      j++;
    }
    function i() {
      if (j--, j === 0) {
        var p = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: P({}, p, { value: Y }),
          info: P({}, p, { value: V }),
          warn: P({}, p, { value: L }),
          error: P({}, p, { value: q }),
          group: P({}, p, { value: K }),
          groupCollapsed: P({}, p, { value: G }),
          groupEnd: P({}, p, { value: ye })
        });
      }
      0 > j && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function a(p) {
      if (v === void 0)
        try {
          throw Error();
        } catch (M) {
          var w = M.stack.trim().match(/\n( *(at )?)/);
          v = w && w[1] || "", xe = -1 < M.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < M.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + v + p + xe;
    }
    function s(p, w) {
      if (!p || Te) return "";
      var M = Be.get(p);
      if (M !== void 0) return M;
      Te = !0, M = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var Z = null;
      Z = Q.H, Q.H = null, o();
      try {
        var Re = {
          DetermineComponentFrameRoot: function() {
            try {
              if (w) {
                var et = function() {
                  throw Error();
                };
                if (Object.defineProperty(et.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(et, []);
                  } catch (He) {
                    var Lt = He;
                  }
                  Reflect.construct(p, [], et);
                } else {
                  try {
                    et.call();
                  } catch (He) {
                    Lt = He;
                  }
                  p.call(et.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (He) {
                  Lt = He;
                }
                (et = p()) && typeof et.catch == "function" && et.catch(function() {
                });
              }
            } catch (He) {
              if (He && Lt && typeof He.stack == "string")
                return [He.stack, Lt.stack];
            }
            return [null, null];
          }
        };
        Re.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var ge = Object.getOwnPropertyDescriptor(
          Re.DetermineComponentFrameRoot,
          "name"
        );
        ge && ge.configurable && Object.defineProperty(
          Re.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var W = Re.DetermineComponentFrameRoot(), Ge = W[0], ut = W[1];
        if (Ge && ut) {
          var $e = Ge.split(`
`), at = ut.split(`
`);
          for (W = ge = 0; ge < $e.length && !$e[ge].includes(
            "DetermineComponentFrameRoot"
          ); )
            ge++;
          for (; W < at.length && !at[W].includes(
            "DetermineComponentFrameRoot"
          ); )
            W++;
          if (ge === $e.length || W === at.length)
            for (ge = $e.length - 1, W = at.length - 1; 1 <= ge && 0 <= W && $e[ge] !== at[W]; )
              W--;
          for (; 1 <= ge && 0 <= W; ge--, W--)
            if ($e[ge] !== at[W]) {
              if (ge !== 1 || W !== 1)
                do
                  if (ge--, W--, 0 > W || $e[ge] !== at[W]) {
                    var Ct = `
` + $e[ge].replace(
                      " at new ",
                      " at "
                    );
                    return p.displayName && Ct.includes("<anonymous>") && (Ct = Ct.replace("<anonymous>", p.displayName)), typeof p == "function" && Be.set(p, Ct), Ct;
                  }
                while (1 <= ge && 0 <= W);
              break;
            }
        }
      } finally {
        Te = !1, Q.H = Z, i(), Error.prepareStackTrace = M;
      }
      return $e = ($e = p ? p.displayName || p.name : "") ? a($e) : "", typeof p == "function" && Be.set(p, $e), $e;
    }
    function d(p) {
      if (p == null) return "";
      if (typeof p == "function") {
        var w = p.prototype;
        return s(
          p,
          !(!w || !w.isReactComponent)
        );
      }
      if (typeof p == "string") return a(p);
      switch (p) {
        case N:
          return a("Suspense");
        case B:
          return a("SuspenseList");
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case $:
            return p = s(p.render, !1), p;
          case U:
            return d(p.type);
          case se:
            w = p._payload, p = p._init;
            try {
              return d(p(w));
            } catch {
            }
        }
      return "";
    }
    function f() {
      var p = Q.A;
      return p === null ? null : p.getOwner();
    }
    function h(p) {
      if (O.call(p, "key")) {
        var w = Object.getOwnPropertyDescriptor(p, "key").get;
        if (w && w.isReactWarning) return !1;
      }
      return p.key !== void 0;
    }
    function m(p, w) {
      function M() {
        it || (it = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          w
        ));
      }
      M.isReactWarning = !0, Object.defineProperty(p, "key", {
        get: M,
        configurable: !0
      });
    }
    function y() {
      var p = e(this.type);
      return Ze[p] || (Ze[p] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), p = this.props.ref, p !== void 0 ? p : null;
    }
    function E(p, w, M, Z, Re, ge) {
      return M = ge.ref, p = {
        $$typeof: S,
        type: p,
        key: w,
        props: ge,
        _owner: Re
      }, (M !== void 0 ? M : null) !== null ? Object.defineProperty(p, "ref", {
        enumerable: !1,
        get: y
      }) : Object.defineProperty(p, "ref", { enumerable: !1, value: null }), p._store = {}, Object.defineProperty(p._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(p, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
    }
    function b(p, w, M, Z, Re, ge) {
      if (typeof p == "string" || typeof p == "function" || p === A || p === H || p === I || p === N || p === B || p === re || typeof p == "object" && p !== null && (p.$$typeof === se || p.$$typeof === U || p.$$typeof === c || p.$$typeof === J || p.$$typeof === $ || p.$$typeof === D || p.getModuleId !== void 0)) {
        var W = w.children;
        if (W !== void 0)
          if (Z)
            if (F(W)) {
              for (Z = 0; Z < W.length; Z++)
                l(W[Z], p);
              Object.freeze && Object.freeze(W);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else l(W, p);
      } else
        W = "", (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (W += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), p === null ? Z = "null" : F(p) ? Z = "array" : p !== void 0 && p.$$typeof === S ? (Z = "<" + (e(p.type) || "Unknown") + " />", W = " Did you accidentally export a JSX literal instead of a component?") : Z = typeof p, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          Z,
          W
        );
      if (O.call(w, "key")) {
        W = e(p);
        var Ge = Object.keys(w).filter(function($e) {
          return $e !== "key";
        });
        Z = 0 < Ge.length ? "{key: someKey, " + Ge.join(": ..., ") + ": ...}" : "{key: someKey}", Vt[W + Z] || (Ge = 0 < Ge.length ? "{" + Ge.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          Z,
          W,
          Ge,
          W
        ), Vt[W + Z] = !0);
      }
      if (W = null, M !== void 0 && (r(M), W = "" + M), h(w) && (r(w.key), W = "" + w.key), "key" in w) {
        M = {};
        for (var ut in w)
          ut !== "key" && (M[ut] = w[ut]);
      } else M = w;
      return W && m(
        M,
        typeof p == "function" ? p.displayName || p.name || "Unknown" : p
      ), E(p, W, ge, Re, f(), M);
    }
    function l(p, w) {
      if (typeof p == "object" && p && p.$$typeof !== Or) {
        if (F(p))
          for (var M = 0; M < p.length; M++) {
            var Z = p[M];
            C(Z) && T(Z, w);
          }
        else if (C(p))
          p._store && (p._store.validated = 1);
        else if (p === null || typeof p != "object" ? M = null : (M = de && p[de] || p["@@iterator"], M = typeof M == "function" ? M : null), typeof M == "function" && M !== p.entries && (M = M.call(p), M !== p))
          for (; !(p = M.next()).done; )
            C(p.value) && T(p.value, w);
      }
    }
    function C(p) {
      return typeof p == "object" && p !== null && p.$$typeof === S;
    }
    function T(p, w) {
      if (p._store && !p._store.validated && p.key == null && (p._store.validated = 1, w = _(w), !Et[w])) {
        Et[w] = !0;
        var M = "";
        p && p._owner != null && p._owner !== f() && (M = null, typeof p._owner.tag == "number" ? M = e(p._owner.type) : typeof p._owner.name == "string" && (M = p._owner.name), M = " It was passed a child from " + M + ".");
        var Z = Q.getCurrentStack;
        Q.getCurrentStack = function() {
          var Re = d(p.type);
          return Z && (Re += Z() || ""), Re;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          w,
          M
        ), Q.getCurrentStack = Z;
      }
    }
    function _(p) {
      var w = "", M = f();
      return M && (M = e(M.type)) && (w = `

Check the render method of \`` + M + "`."), w || (p = e(p)) && (w = `

Check the top-level render call using <` + p + ">."), w;
    }
    var R = ht, S = Symbol.for("react.transitional.element"), g = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), J = Symbol.for("react.consumer"), c = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), re = Symbol.for("react.offscreen"), de = Symbol.iterator, Ee = Symbol.for("react.client.reference"), Q = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, O = Object.prototype.hasOwnProperty, P = Object.assign, D = Symbol.for("react.client.reference"), F = Array.isArray, j = 0, Y, V, L, q, K, G, ye;
    n.__reactDisabledLog = !0;
    var v, xe, Te = !1, Be = new (typeof WeakMap == "function" ? WeakMap : Map)(), Or = Symbol.for("react.client.reference"), it, Ze = {}, Vt = {}, Et = {};
    Rt.Fragment = A, Rt.jsx = function(p, w, M, Z, Re) {
      return b(p, w, M, !1, Z, Re);
    }, Rt.jsxs = function(p, w, M, Z, Re) {
      return b(p, w, M, !0, Z, Re);
    };
  }()), Rt;
}
var Cn;
function Ri() {
  return Cn || (Cn = 1, process.env.NODE_ENV === "production" ? Wt.exports = Ti() : Wt.exports = wi()), Wt.exports;
}
var z = Ri(), Ut = { exports: {} }, Yt = { exports: {} }, ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tn;
function Oi() {
  if (Tn) return ne;
  Tn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
  function R(g) {
    if (typeof g == "object" && g !== null) {
      var A = g.$$typeof;
      switch (A) {
        case t:
          switch (g = g.type, g) {
            case d:
            case f:
            case n:
            case i:
            case o:
            case m:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case s:
                case h:
                case b:
                case E:
                case a:
                  return g;
                default:
                  return A;
              }
          }
        case r:
          return A;
      }
    }
  }
  function S(g) {
    return R(g) === f;
  }
  return ne.AsyncMode = d, ne.ConcurrentMode = f, ne.ContextConsumer = s, ne.ContextProvider = a, ne.Element = t, ne.ForwardRef = h, ne.Fragment = n, ne.Lazy = b, ne.Memo = E, ne.Portal = r, ne.Profiler = i, ne.StrictMode = o, ne.Suspense = m, ne.isAsyncMode = function(g) {
    return S(g) || R(g) === d;
  }, ne.isConcurrentMode = S, ne.isContextConsumer = function(g) {
    return R(g) === s;
  }, ne.isContextProvider = function(g) {
    return R(g) === a;
  }, ne.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, ne.isForwardRef = function(g) {
    return R(g) === h;
  }, ne.isFragment = function(g) {
    return R(g) === n;
  }, ne.isLazy = function(g) {
    return R(g) === b;
  }, ne.isMemo = function(g) {
    return R(g) === E;
  }, ne.isPortal = function(g) {
    return R(g) === r;
  }, ne.isProfiler = function(g) {
    return R(g) === i;
  }, ne.isStrictMode = function(g) {
    return R(g) === o;
  }, ne.isSuspense = function(g) {
    return R(g) === m;
  }, ne.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === f || g === i || g === o || g === m || g === y || typeof g == "object" && g !== null && (g.$$typeof === b || g.$$typeof === E || g.$$typeof === a || g.$$typeof === s || g.$$typeof === h || g.$$typeof === C || g.$$typeof === T || g.$$typeof === _ || g.$$typeof === l);
  }, ne.typeOf = R, ne;
}
var oe = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wn;
function $i() {
  return wn || (wn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
    function R(v) {
      return typeof v == "string" || typeof v == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      v === n || v === f || v === i || v === o || v === m || v === y || typeof v == "object" && v !== null && (v.$$typeof === b || v.$$typeof === E || v.$$typeof === a || v.$$typeof === s || v.$$typeof === h || v.$$typeof === C || v.$$typeof === T || v.$$typeof === _ || v.$$typeof === l);
    }
    function S(v) {
      if (typeof v == "object" && v !== null) {
        var xe = v.$$typeof;
        switch (xe) {
          case t:
            var Te = v.type;
            switch (Te) {
              case d:
              case f:
              case n:
              case i:
              case o:
              case m:
                return Te;
              default:
                var Be = Te && Te.$$typeof;
                switch (Be) {
                  case s:
                  case h:
                  case b:
                  case E:
                  case a:
                    return Be;
                  default:
                    return xe;
                }
            }
          case r:
            return xe;
        }
      }
    }
    var g = d, A = f, I = s, H = a, J = t, c = h, $ = n, N = b, B = E, U = r, se = i, re = o, de = m, Ee = !1;
    function Q(v) {
      return Ee || (Ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(v) || S(v) === d;
    }
    function O(v) {
      return S(v) === f;
    }
    function P(v) {
      return S(v) === s;
    }
    function D(v) {
      return S(v) === a;
    }
    function F(v) {
      return typeof v == "object" && v !== null && v.$$typeof === t;
    }
    function j(v) {
      return S(v) === h;
    }
    function Y(v) {
      return S(v) === n;
    }
    function V(v) {
      return S(v) === b;
    }
    function L(v) {
      return S(v) === E;
    }
    function q(v) {
      return S(v) === r;
    }
    function K(v) {
      return S(v) === i;
    }
    function G(v) {
      return S(v) === o;
    }
    function ye(v) {
      return S(v) === m;
    }
    oe.AsyncMode = g, oe.ConcurrentMode = A, oe.ContextConsumer = I, oe.ContextProvider = H, oe.Element = J, oe.ForwardRef = c, oe.Fragment = $, oe.Lazy = N, oe.Memo = B, oe.Portal = U, oe.Profiler = se, oe.StrictMode = re, oe.Suspense = de, oe.isAsyncMode = Q, oe.isConcurrentMode = O, oe.isContextConsumer = P, oe.isContextProvider = D, oe.isElement = F, oe.isForwardRef = j, oe.isFragment = Y, oe.isLazy = V, oe.isMemo = L, oe.isPortal = q, oe.isProfiler = K, oe.isStrictMode = G, oe.isSuspense = ye, oe.isValidElementType = R, oe.typeOf = S;
  }()), oe;
}
var Rn;
function xo() {
  return Rn || (Rn = 1, process.env.NODE_ENV === "production" ? Yt.exports = Oi() : Yt.exports = $i()), Yt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var $r, On;
function Pi() {
  if (On) return $r;
  On = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, s = 0; s < 10; s++)
        a["_" + String.fromCharCode(s)] = s;
      var d = Object.getOwnPropertyNames(a).map(function(h) {
        return a[h];
      });
      if (d.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(h) {
        f[h] = h;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return $r = o() ? Object.assign : function(i, a) {
    for (var s, d = n(i), f, h = 1; h < arguments.length; h++) {
      s = Object(arguments[h]);
      for (var m in s)
        t.call(s, m) && (d[m] = s[m]);
      if (e) {
        f = e(s);
        for (var y = 0; y < f.length; y++)
          r.call(s, f[y]) && (d[f[y]] = s[f[y]]);
      }
    }
    return d;
  }, $r;
}
var Pr, $n;
function Jr() {
  if ($n) return Pr;
  $n = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Pr = e, Pr;
}
var Ar, Pn;
function Eo() {
  return Pn || (Pn = 1, Ar = Function.call.bind(Object.prototype.hasOwnProperty)), Ar;
}
var _r, An;
function Ai() {
  if (An) return _r;
  An = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Jr(), r = {}, n = /* @__PURE__ */ Eo();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, s, d, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var h in i)
        if (n(i, h)) {
          var m;
          try {
            if (typeof i[h] != "function") {
              var y = Error(
                (d || "React class") + ": " + s + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw y.name = "Invariant Violation", y;
            }
            m = i[h](a, h, d, s, null, t);
          } catch (b) {
            m = b;
          }
          if (m && !(m instanceof Error) && e(
            (d || "React class") + ": type specification of " + s + " `" + h + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in r)) {
            r[m.message] = !0;
            var E = f ? f() : "";
            e(
              "Failed " + s + " type: " + m.message + (E ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, _r = o, _r;
}
var kr, _n;
function _i() {
  if (_n) return kr;
  _n = 1;
  var e = xo(), t = Pi(), r = /* @__PURE__ */ Jr(), n = /* @__PURE__ */ Eo(), o = /* @__PURE__ */ Ai(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var d = "Warning: " + s;
    typeof console < "u" && console.error(d);
    try {
      throw new Error(d);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return kr = function(s, d) {
    var f = typeof Symbol == "function" && Symbol.iterator, h = "@@iterator";
    function m(O) {
      var P = O && (f && O[f] || O[h]);
      if (typeof P == "function")
        return P;
    }
    var y = "<<anonymous>>", E = {
      array: T("array"),
      bigint: T("bigint"),
      bool: T("boolean"),
      func: T("function"),
      number: T("number"),
      object: T("object"),
      string: T("string"),
      symbol: T("symbol"),
      any: _(),
      arrayOf: R,
      element: S(),
      elementType: g(),
      instanceOf: A,
      node: c(),
      objectOf: H,
      oneOf: I,
      oneOfType: J,
      shape: N,
      exact: B
    };
    function b(O, P) {
      return O === P ? O !== 0 || 1 / O === 1 / P : O !== O && P !== P;
    }
    function l(O, P) {
      this.message = O, this.data = P && typeof P == "object" ? P : {}, this.stack = "";
    }
    l.prototype = Error.prototype;
    function C(O) {
      if (process.env.NODE_ENV !== "production")
        var P = {}, D = 0;
      function F(Y, V, L, q, K, G, ye) {
        if (q = q || y, G = G || L, ye !== r) {
          if (d) {
            var v = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw v.name = "Invariant Violation", v;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var xe = q + ":" + L;
            !P[xe] && // Avoid spamming the console because they are often not actionable except for lib authors
            D < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + G + "` prop on `" + q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), P[xe] = !0, D++);
          }
        }
        return V[L] == null ? Y ? V[L] === null ? new l("The " + K + " `" + G + "` is marked as required " + ("in `" + q + "`, but its value is `null`.")) : new l("The " + K + " `" + G + "` is marked as required in " + ("`" + q + "`, but its value is `undefined`.")) : null : O(V, L, q, K, G);
      }
      var j = F.bind(null, !1);
      return j.isRequired = F.bind(null, !0), j;
    }
    function T(O) {
      function P(D, F, j, Y, V, L) {
        var q = D[F], K = re(q);
        if (K !== O) {
          var G = de(q);
          return new l(
            "Invalid " + Y + " `" + V + "` of type " + ("`" + G + "` supplied to `" + j + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return C(P);
    }
    function _() {
      return C(a);
    }
    function R(O) {
      function P(D, F, j, Y, V) {
        if (typeof O != "function")
          return new l("Property `" + V + "` of component `" + j + "` has invalid PropType notation inside arrayOf.");
        var L = D[F];
        if (!Array.isArray(L)) {
          var q = re(L);
          return new l("Invalid " + Y + " `" + V + "` of type " + ("`" + q + "` supplied to `" + j + "`, expected an array."));
        }
        for (var K = 0; K < L.length; K++) {
          var G = O(L, K, j, Y, V + "[" + K + "]", r);
          if (G instanceof Error)
            return G;
        }
        return null;
      }
      return C(P);
    }
    function S() {
      function O(P, D, F, j, Y) {
        var V = P[D];
        if (!s(V)) {
          var L = re(V);
          return new l("Invalid " + j + " `" + Y + "` of type " + ("`" + L + "` supplied to `" + F + "`, expected a single ReactElement."));
        }
        return null;
      }
      return C(O);
    }
    function g() {
      function O(P, D, F, j, Y) {
        var V = P[D];
        if (!e.isValidElementType(V)) {
          var L = re(V);
          return new l("Invalid " + j + " `" + Y + "` of type " + ("`" + L + "` supplied to `" + F + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return C(O);
    }
    function A(O) {
      function P(D, F, j, Y, V) {
        if (!(D[F] instanceof O)) {
          var L = O.name || y, q = Q(D[F]);
          return new l("Invalid " + Y + " `" + V + "` of type " + ("`" + q + "` supplied to `" + j + "`, expected ") + ("instance of `" + L + "`."));
        }
        return null;
      }
      return C(P);
    }
    function I(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function P(D, F, j, Y, V) {
        for (var L = D[F], q = 0; q < O.length; q++)
          if (b(L, O[q]))
            return null;
        var K = JSON.stringify(O, function(ye, v) {
          var xe = de(v);
          return xe === "symbol" ? String(v) : v;
        });
        return new l("Invalid " + Y + " `" + V + "` of value `" + String(L) + "` " + ("supplied to `" + j + "`, expected one of " + K + "."));
      }
      return C(P);
    }
    function H(O) {
      function P(D, F, j, Y, V) {
        if (typeof O != "function")
          return new l("Property `" + V + "` of component `" + j + "` has invalid PropType notation inside objectOf.");
        var L = D[F], q = re(L);
        if (q !== "object")
          return new l("Invalid " + Y + " `" + V + "` of type " + ("`" + q + "` supplied to `" + j + "`, expected an object."));
        for (var K in L)
          if (n(L, K)) {
            var G = O(L, K, j, Y, V + "." + K, r);
            if (G instanceof Error)
              return G;
          }
        return null;
      }
      return C(P);
    }
    function J(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var P = 0; P < O.length; P++) {
        var D = O[P];
        if (typeof D != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Ee(D) + " at index " + P + "."
          ), a;
      }
      function F(j, Y, V, L, q) {
        for (var K = [], G = 0; G < O.length; G++) {
          var ye = O[G], v = ye(j, Y, V, L, q, r);
          if (v == null)
            return null;
          v.data && n(v.data, "expectedType") && K.push(v.data.expectedType);
        }
        var xe = K.length > 0 ? ", expected one of type [" + K.join(", ") + "]" : "";
        return new l("Invalid " + L + " `" + q + "` supplied to " + ("`" + V + "`" + xe + "."));
      }
      return C(F);
    }
    function c() {
      function O(P, D, F, j, Y) {
        return U(P[D]) ? null : new l("Invalid " + j + " `" + Y + "` supplied to " + ("`" + F + "`, expected a ReactNode."));
      }
      return C(O);
    }
    function $(O, P, D, F, j) {
      return new l(
        (O || "React class") + ": " + P + " type `" + D + "." + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + j + "`."
      );
    }
    function N(O) {
      function P(D, F, j, Y, V) {
        var L = D[F], q = re(L);
        if (q !== "object")
          return new l("Invalid " + Y + " `" + V + "` of type `" + q + "` " + ("supplied to `" + j + "`, expected `object`."));
        for (var K in O) {
          var G = O[K];
          if (typeof G != "function")
            return $(j, Y, V, K, de(G));
          var ye = G(L, K, j, Y, V + "." + K, r);
          if (ye)
            return ye;
        }
        return null;
      }
      return C(P);
    }
    function B(O) {
      function P(D, F, j, Y, V) {
        var L = D[F], q = re(L);
        if (q !== "object")
          return new l("Invalid " + Y + " `" + V + "` of type `" + q + "` " + ("supplied to `" + j + "`, expected `object`."));
        var K = t({}, D[F], O);
        for (var G in K) {
          var ye = O[G];
          if (n(O, G) && typeof ye != "function")
            return $(j, Y, V, G, de(ye));
          if (!ye)
            return new l(
              "Invalid " + Y + " `" + V + "` key `" + G + "` supplied to `" + j + "`.\nBad object: " + JSON.stringify(D[F], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var v = ye(L, G, j, Y, V + "." + G, r);
          if (v)
            return v;
        }
        return null;
      }
      return C(P);
    }
    function U(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(U);
          if (O === null || s(O))
            return !0;
          var P = m(O);
          if (P) {
            var D = P.call(O), F;
            if (P !== O.entries) {
              for (; !(F = D.next()).done; )
                if (!U(F.value))
                  return !1;
            } else
              for (; !(F = D.next()).done; ) {
                var j = F.value;
                if (j && !U(j[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function se(O, P) {
      return O === "symbol" ? !0 : P ? P["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && P instanceof Symbol : !1;
    }
    function re(O) {
      var P = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : se(P, O) ? "symbol" : P;
    }
    function de(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var P = re(O);
      if (P === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return P;
    }
    function Ee(O) {
      var P = de(O);
      switch (P) {
        case "array":
        case "object":
          return "an " + P;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + P;
        default:
          return P;
      }
    }
    function Q(O) {
      return !O.constructor || !O.constructor.name ? y : O.constructor.name;
    }
    return E.checkPropTypes = o, E.resetWarningCache = o.resetWarningCache, E.PropTypes = E, E;
  }, kr;
}
var Ir, kn;
function ki() {
  if (kn) return Ir;
  kn = 1;
  var e = /* @__PURE__ */ Jr();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Ir = function() {
    function n(a, s, d, f, h, m) {
      if (m !== e) {
        var y = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw y.name = "Invariant Violation", y;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Ir;
}
var In;
function Ii() {
  if (In) return Ut.exports;
  if (In = 1, process.env.NODE_ENV !== "production") {
    var e = xo(), t = !0;
    Ut.exports = /* @__PURE__ */ _i()(e.isElement, t);
  } else
    Ut.exports = /* @__PURE__ */ ki()();
  return Ut.exports;
}
var Ni = /* @__PURE__ */ Ii();
const u = /* @__PURE__ */ Ci(Ni);
function Co(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = Co(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function ve() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = Co(e)) && (n && (n += " "), n += t);
  return n;
}
function or(e, t) {
  const r = {
    ...t
  };
  for (const n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      const o = n;
      if (o === "components" || o === "slots")
        r[o] = {
          ...e[o],
          ...r[o]
        };
      else if (o === "componentsProps" || o === "slotProps") {
        const i = e[o], a = t[o];
        if (!a)
          r[o] = i || {};
        else if (!i)
          r[o] = a;
        else {
          r[o] = {
            ...a
          };
          for (const s in i)
            if (Object.prototype.hasOwnProperty.call(i, s)) {
              const d = s;
              r[o][d] = or(i[d], a[d]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
function Qe(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let a = "", s = !0;
    for (let d = 0; d < i.length; d += 1) {
      const f = i[d];
      f && (a += (s === !0 ? "" : " ") + t(f), s = !1, r && r[f] && (a += " " + r[f]));
    }
    n[o] = a;
  }
  return n;
}
function rt(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function Mi(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Qr(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), Mi(e, t, r);
}
function Bi(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function nt(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return nt(Bi(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : rt(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : rt(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const ji = (e) => {
  const t = nt(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Pt = (e, t) => {
  try {
    return ji(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function fr(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function To(e) {
  e = nt(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (f, h = (f + r / 30) % 12) => o - i * Math.max(Math.min(h - 3, 9 - h, 1), -1);
  let s = "rgb";
  const d = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (s += "a", d.push(t[3])), fr({
    type: s,
    values: d
  });
}
function Dr(e) {
  e = nt(e);
  let t = e.type === "hsl" || e.type === "hsla" ? nt(To(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function Nn(e, t) {
  const r = Dr(e), n = Dr(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function Le(e, t) {
  return e = nt(e), t = Qr(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, fr(e);
}
function qt(e, t, r) {
  try {
    return Le(e, t);
  } catch {
    return e;
  }
}
function Zr(e, t) {
  if (e = nt(e), t = Qr(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return fr(e);
}
function ue(e, t, r) {
  try {
    return Zr(e, t);
  } catch {
    return e;
  }
}
function en(e, t) {
  if (e = nt(e), t = Qr(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return fr(e);
}
function fe(e, t, r) {
  try {
    return en(e, t);
  } catch {
    return e;
  }
}
function zi(e, t = 0.15) {
  return Dr(e) > 0.5 ? Zr(e, t) : en(e, t);
}
function Gt(e, t, r) {
  try {
    return zi(e, t);
  } catch {
    return e;
  }
}
function dr(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
var Ht = { exports: {} }, ce = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mn;
function Di() {
  if (Mn) return ce;
  Mn = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), E = Symbol.for("react.client.reference");
  function b(l) {
    if (typeof l == "object" && l !== null) {
      var C = l.$$typeof;
      switch (C) {
        case e:
          switch (l = l.type, l) {
            case r:
            case o:
            case n:
            case d:
            case f:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case a:
                case s:
                case m:
                case h:
                  return l;
                case i:
                  return l;
                default:
                  return C;
              }
          }
        case t:
          return C;
      }
    }
  }
  return ce.ContextConsumer = i, ce.ContextProvider = a, ce.Element = e, ce.ForwardRef = s, ce.Fragment = r, ce.Lazy = m, ce.Memo = h, ce.Portal = t, ce.Profiler = o, ce.StrictMode = n, ce.Suspense = d, ce.SuspenseList = f, ce.isContextConsumer = function(l) {
    return b(l) === i;
  }, ce.isContextProvider = function(l) {
    return b(l) === a;
  }, ce.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === e;
  }, ce.isForwardRef = function(l) {
    return b(l) === s;
  }, ce.isFragment = function(l) {
    return b(l) === r;
  }, ce.isLazy = function(l) {
    return b(l) === m;
  }, ce.isMemo = function(l) {
    return b(l) === h;
  }, ce.isPortal = function(l) {
    return b(l) === t;
  }, ce.isProfiler = function(l) {
    return b(l) === o;
  }, ce.isStrictMode = function(l) {
    return b(l) === n;
  }, ce.isSuspense = function(l) {
    return b(l) === d;
  }, ce.isSuspenseList = function(l) {
    return b(l) === f;
  }, ce.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === r || l === o || l === n || l === d || l === f || l === y || typeof l == "object" && l !== null && (l.$$typeof === m || l.$$typeof === h || l.$$typeof === a || l.$$typeof === i || l.$$typeof === s || l.$$typeof === E || l.getModuleId !== void 0);
  }, ce.typeOf = b, ce;
}
var le = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bn;
function Fi() {
  return Bn || (Bn = 1, process.env.NODE_ENV !== "production" && function() {
    function e(l) {
      if (typeof l == "object" && l !== null) {
        var C = l.$$typeof;
        switch (C) {
          case t:
            switch (l = l.type, l) {
              case n:
              case i:
              case o:
              case f:
              case h:
                return l;
              default:
                switch (l = l && l.$$typeof, l) {
                  case s:
                  case d:
                  case y:
                  case m:
                    return l;
                  case a:
                    return l;
                  default:
                    return C;
                }
            }
          case r:
            return C;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), s = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), b = Symbol.for("react.client.reference");
    le.ContextConsumer = a, le.ContextProvider = s, le.Element = t, le.ForwardRef = d, le.Fragment = n, le.Lazy = y, le.Memo = m, le.Portal = r, le.Profiler = i, le.StrictMode = o, le.Suspense = f, le.SuspenseList = h, le.isContextConsumer = function(l) {
      return e(l) === a;
    }, le.isContextProvider = function(l) {
      return e(l) === s;
    }, le.isElement = function(l) {
      return typeof l == "object" && l !== null && l.$$typeof === t;
    }, le.isForwardRef = function(l) {
      return e(l) === d;
    }, le.isFragment = function(l) {
      return e(l) === n;
    }, le.isLazy = function(l) {
      return e(l) === y;
    }, le.isMemo = function(l) {
      return e(l) === m;
    }, le.isPortal = function(l) {
      return e(l) === r;
    }, le.isProfiler = function(l) {
      return e(l) === i;
    }, le.isStrictMode = function(l) {
      return e(l) === o;
    }, le.isSuspense = function(l) {
      return e(l) === f;
    }, le.isSuspenseList = function(l) {
      return e(l) === h;
    }, le.isValidElementType = function(l) {
      return typeof l == "string" || typeof l == "function" || l === n || l === i || l === o || l === f || l === h || l === E || typeof l == "object" && l !== null && (l.$$typeof === y || l.$$typeof === m || l.$$typeof === s || l.$$typeof === a || l.$$typeof === d || l.$$typeof === b || l.getModuleId !== void 0);
    }, le.typeOf = e;
  }()), le;
}
var jn;
function Vi() {
  return jn || (jn = 1, process.env.NODE_ENV === "production" ? Ht.exports = /* @__PURE__ */ Di() : Ht.exports = /* @__PURE__ */ Fi()), Ht.exports;
}
var ir = /* @__PURE__ */ Vi();
function We(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function wo(e) {
  if (/* @__PURE__ */ k.isValidElement(e) || ir.isValidElementType(e) || !We(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = wo(e[r]);
  }), t;
}
function _e(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return We(e) && We(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ k.isValidElement(t[o]) || ir.isValidElementType(t[o]) ? n[o] = t[o] : We(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && We(e[o]) ? n[o] = _e(e[o], t[o], r) : r.clone ? n[o] = We(t[o]) ? wo(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
function Li(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function Wi(e, t, r, n, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let s;
  return typeof i == "function" && !Li(i) && (s = "Did you accidentally provide a plain function component instead?"), s !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${s} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Ui = dr(u.elementType, Wi);
function Ro(e, t = "") {
  return e.displayName || e.name || t;
}
function zn(e, t, r) {
  const n = Ro(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Yi(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Ro(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ir.ForwardRef:
          return zn(e, e.render, "ForwardRef");
        case ir.Memo:
          return zn(e, e.type, "memo");
        default:
          return;
      }
  }
}
const qi = u.oneOfType([u.func, u.object]);
function X(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : rt(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Gi(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const Hi = typeof window < "u" ? k.useLayoutEffect : k.useEffect;
let Dn = 0;
function Ki(e) {
  const [t, r] = k.useState(e), n = e || t;
  return k.useEffect(() => {
    t == null && (Dn += 1, r(`mui-${Dn}`));
  }, [t]), n;
}
const Xi = {
  ...k
}, Fn = Xi.useId;
function Oo(e) {
  if (Fn !== void 0) {
    const t = Fn();
    return e ?? t;
  }
  return Ki(e);
}
function Zt(e) {
  const t = k.useRef(e);
  return Hi(() => {
    t.current = e;
  }), k.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function Vn(...e) {
  return k.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      Gi(r, t);
    });
  }, e);
}
const Ln = {};
function $o(e, t) {
  const r = k.useRef(Ln);
  return r.current === Ln && (r.current = e(t)), r;
}
const Ji = [];
function Qi(e) {
  k.useEffect(e, Ji);
}
class tn {
  constructor() {
    Tt(this, "currentId", null);
    Tt(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Tt(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new tn();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
}
function Zi() {
  const e = $o(tn.create).current;
  return Qi(e.disposeEffect), e;
}
function Wn(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
function ea(e) {
  const t = typeof e;
  switch (t) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return t;
  }
}
function Po(e, t, r, n) {
  const o = e[t];
  if (o == null || !Number.isInteger(o)) {
    const i = ea(o);
    return new RangeError(`Invalid ${n} \`${t}\` of type \`${i}\` supplied to \`${r}\`, expected \`integer\`.`);
  }
  return null;
}
function Ao(e, t, ...r) {
  return e[t] === void 0 ? null : Po(e, t, ...r);
}
function Fr() {
  return null;
}
Ao.isRequired = Po;
Fr.isRequired = Fr;
const ta = process.env.NODE_ENV === "production" ? Fr : Ao, Un = (e) => e, ra = () => {
  let e = Un;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Un;
    }
  };
}, _o = ra(), na = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function je(e, t, r = "Mui") {
  const n = na[t];
  return n ? `${r}-${n}` : `${_o.generate(e)}-${t}`;
}
function ze(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = je(e, o, r);
  }), n;
}
function _t(e, t) {
  return t ? _e(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const ot = process.env.NODE_ENV !== "production" ? u.oneOfType([u.number, u.string, u.object, u.array]) : {};
function oa(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var a, s;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((a = n.match(i)) == null ? void 0 : a[1]) || 0) - +(((s = o.match(i)) == null ? void 0 : s[1]) || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const i = t[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...t
  }) : t;
}
function ia(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function aa(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : rt(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function sa(e) {
  const t = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function r(i, a) {
    i.up = (...s) => t(e.breakpoints.up(...s), a), i.down = (...s) => t(e.breakpoints.down(...s), a), i.between = (...s) => t(e.breakpoints.between(...s), a), i.only = (...s) => t(e.breakpoints.only(...s), a), i.not = (...s) => {
      const d = t(e.breakpoints.not(...s), a);
      return d.includes("not all and") ? d.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : d;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const pr = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, Yn = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${pr[e]}px)`
}, ca = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : pr[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function Je(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || Yn;
    return t.reduce((a, s, d) => (a[i.up(i.keys[d])] = r(t[d]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || Yn;
    return Object.keys(t).reduce((a, s) => {
      if (ia(i.keys, s)) {
        const d = aa(n.containerQueries ? n : ca, s);
        d && (a[d] = r(t[s], s));
      } else if (Object.keys(i.values || pr).includes(s)) {
        const d = i.up(s);
        a[d] = r(t[s], s);
      } else {
        const d = s;
        a[d] = t[d];
      }
      return a;
    }, {});
  }
  return r(t);
}
function la(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function ua(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function gr(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function ar(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = gr(e, r) || n, t && (o = t(o, n, e)), o;
}
function be(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const s = a[t], d = a.theme, f = gr(d, n) || {};
    return Je(a, s, (m) => {
      let y = ar(f, o, m);
      return m === y && typeof m == "string" && (y = ar(f, o, `${t}${m === "default" ? "" : X(m)}`, m)), r === !1 ? y : {
        [r]: y
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: ot
  } : {}, i.filterProps = [t], i;
}
function fa(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const da = {
  m: "margin",
  p: "padding"
}, pa = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, qn = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, ga = fa((e) => {
  if (e.length > 2)
    if (qn[e])
      e = qn[e];
    else
      return [e];
  const [t, r] = e.split(""), n = da[t], o = pa[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), mr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], hr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], ma = [...mr, ...hr];
function Bt(e, t, r, n) {
  const o = gr(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const a = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const s = o[a];
    return i >= 0 ? s : typeof s == "number" ? -s : `-${s}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function rn(e) {
  return Bt(e, "spacing", 8, "spacing");
}
function jt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function ha(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = jt(t, r), n), {});
}
function ya(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = ga(r), i = ha(o, n), a = e[r];
  return Je(e, a, i);
}
function ko(e, t) {
  const r = rn(e.theme);
  return Object.keys(e).map((n) => ya(e, t, n, r)).reduce(_t, {});
}
function me(e) {
  return ko(e, mr);
}
me.propTypes = process.env.NODE_ENV !== "production" ? mr.reduce((e, t) => (e[t] = ot, e), {}) : {};
me.filterProps = mr;
function he(e) {
  return ko(e, hr);
}
he.propTypes = process.env.NODE_ENV !== "production" ? hr.reduce((e, t) => (e[t] = ot, e), {}) : {};
he.filterProps = hr;
process.env.NODE_ENV !== "production" && ma.reduce((e, t) => (e[t] = ot, e), {});
function yr(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? _t(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function Ne(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Me(e, t) {
  return be({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const ba = Me("border", Ne), va = Me("borderTop", Ne), Sa = Me("borderRight", Ne), xa = Me("borderBottom", Ne), Ea = Me("borderLeft", Ne), Ca = Me("borderColor"), Ta = Me("borderTopColor"), wa = Me("borderRightColor"), Ra = Me("borderBottomColor"), Oa = Me("borderLeftColor"), $a = Me("outline", Ne), Pa = Me("outlineColor"), br = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Bt(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: jt(t, n)
    });
    return Je(e, e.borderRadius, r);
  }
  return null;
};
br.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: ot
} : {};
br.filterProps = ["borderRadius"];
yr(ba, va, Sa, xa, Ea, Ca, Ta, wa, Ra, Oa, br, $a, Pa);
const vr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Bt(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: jt(t, n)
    });
    return Je(e, e.gap, r);
  }
  return null;
};
vr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: ot
} : {};
vr.filterProps = ["gap"];
const Sr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Bt(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: jt(t, n)
    });
    return Je(e, e.columnGap, r);
  }
  return null;
};
Sr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: ot
} : {};
Sr.filterProps = ["columnGap"];
const xr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Bt(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: jt(t, n)
    });
    return Je(e, e.rowGap, r);
  }
  return null;
};
xr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: ot
} : {};
xr.filterProps = ["rowGap"];
const Aa = be({
  prop: "gridColumn"
}), _a = be({
  prop: "gridRow"
}), ka = be({
  prop: "gridAutoFlow"
}), Ia = be({
  prop: "gridAutoColumns"
}), Na = be({
  prop: "gridAutoRows"
}), Ma = be({
  prop: "gridTemplateColumns"
}), Ba = be({
  prop: "gridTemplateRows"
}), ja = be({
  prop: "gridTemplateAreas"
}), za = be({
  prop: "gridArea"
});
yr(vr, Sr, xr, Aa, _a, ka, Ia, Na, Ma, Ba, ja, za);
function yt(e, t) {
  return t === "grey" ? t : e;
}
const Da = be({
  prop: "color",
  themeKey: "palette",
  transform: yt
}), Fa = be({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: yt
}), Va = be({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: yt
});
yr(Da, Fa, Va);
function Ae(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const La = be({
  prop: "width",
  transform: Ae
}), nn = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, a, s, d;
      const n = ((a = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : a[r]) || pr[r];
      return n ? ((d = (s = e.theme) == null ? void 0 : s.breakpoints) == null ? void 0 : d.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: Ae(r)
      };
    };
    return Je(e, e.maxWidth, t);
  }
  return null;
};
nn.filterProps = ["maxWidth"];
const Wa = be({
  prop: "minWidth",
  transform: Ae
}), Ua = be({
  prop: "height",
  transform: Ae
}), Ya = be({
  prop: "maxHeight",
  transform: Ae
}), qa = be({
  prop: "minHeight",
  transform: Ae
});
be({
  prop: "size",
  cssProperty: "width",
  transform: Ae
});
be({
  prop: "size",
  cssProperty: "height",
  transform: Ae
});
const Ga = be({
  prop: "boxSizing"
});
yr(La, nn, Wa, Ua, Ya, qa, Ga);
const zt = {
  // borders
  border: {
    themeKey: "borders",
    transform: Ne
  },
  borderTop: {
    themeKey: "borders",
    transform: Ne
  },
  borderRight: {
    themeKey: "borders",
    transform: Ne
  },
  borderBottom: {
    themeKey: "borders",
    transform: Ne
  },
  borderLeft: {
    themeKey: "borders",
    transform: Ne
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: Ne
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: br
  },
  // palette
  color: {
    themeKey: "palette",
    transform: yt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: yt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: yt
  },
  // spacing
  p: {
    style: he
  },
  pt: {
    style: he
  },
  pr: {
    style: he
  },
  pb: {
    style: he
  },
  pl: {
    style: he
  },
  px: {
    style: he
  },
  py: {
    style: he
  },
  padding: {
    style: he
  },
  paddingTop: {
    style: he
  },
  paddingRight: {
    style: he
  },
  paddingBottom: {
    style: he
  },
  paddingLeft: {
    style: he
  },
  paddingX: {
    style: he
  },
  paddingY: {
    style: he
  },
  paddingInline: {
    style: he
  },
  paddingInlineStart: {
    style: he
  },
  paddingInlineEnd: {
    style: he
  },
  paddingBlock: {
    style: he
  },
  paddingBlockStart: {
    style: he
  },
  paddingBlockEnd: {
    style: he
  },
  m: {
    style: me
  },
  mt: {
    style: me
  },
  mr: {
    style: me
  },
  mb: {
    style: me
  },
  ml: {
    style: me
  },
  mx: {
    style: me
  },
  my: {
    style: me
  },
  margin: {
    style: me
  },
  marginTop: {
    style: me
  },
  marginRight: {
    style: me
  },
  marginBottom: {
    style: me
  },
  marginLeft: {
    style: me
  },
  marginX: {
    style: me
  },
  marginY: {
    style: me
  },
  marginInline: {
    style: me
  },
  marginInlineStart: {
    style: me
  },
  marginInlineEnd: {
    style: me
  },
  marginBlock: {
    style: me
  },
  marginBlockStart: {
    style: me
  },
  marginBlockEnd: {
    style: me
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: vr
  },
  rowGap: {
    style: xr
  },
  columnGap: {
    style: Sr
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Ae
  },
  maxWidth: {
    style: nn
  },
  minWidth: {
    transform: Ae
  },
  height: {
    transform: Ae
  },
  maxHeight: {
    transform: Ae
  },
  minHeight: {
    transform: Ae
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function Ha(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Ka(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Xa() {
  function e(r, n, o, i) {
    const a = {
      [r]: n,
      theme: o
    }, s = i[r];
    if (!s)
      return {
        [r]: n
      };
    const {
      cssProperty: d = r,
      themeKey: f,
      transform: h,
      style: m
    } = s;
    if (n == null)
      return null;
    if (f === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const y = gr(o, f) || {};
    return m ? m(a) : Je(a, n, (b) => {
      let l = ar(y, h, b);
      return b === l && typeof b == "string" && (l = ar(y, h, `${r}${b === "default" ? "" : X(b)}`, b)), d === !1 ? l : {
        [d]: l
      };
    });
  }
  function t(r) {
    const {
      sx: n,
      theme: o = {}
    } = r || {};
    if (!n)
      return null;
    const i = o.unstable_sxConfig ?? zt;
    function a(s) {
      let d = s;
      if (typeof s == "function")
        d = s(o);
      else if (typeof s != "object")
        return s;
      if (!d)
        return null;
      const f = la(o.breakpoints), h = Object.keys(f);
      let m = f;
      return Object.keys(d).forEach((y) => {
        const E = Ka(d[y], o);
        if (E != null)
          if (typeof E == "object")
            if (i[y])
              m = _t(m, e(y, E, o, i));
            else {
              const b = Je({
                theme: o
              }, E, (l) => ({
                [y]: l
              }));
              Ha(b, E) ? m[y] = t({
                sx: E,
                theme: o
              }) : m = _t(m, b);
            }
          else
            m = _t(m, e(y, E, o, i));
      }), oa(o, ua(h, m));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return t;
}
const lt = Xa();
lt.filterProps = ["sx"];
const Ja = (e) => {
  var n;
  const t = {
    systemProps: {},
    otherProps: {}
  }, r = ((n = e == null ? void 0 : e.theme) == null ? void 0 : n.unstable_sxConfig) ?? zt;
  return Object.keys(e).forEach((o) => {
    r[o] ? t.systemProps[o] = e[o] : t.otherProps[o] = e[o];
  }), t;
};
function Io(e) {
  const {
    sx: t,
    ...r
  } = e, {
    systemProps: n,
    otherProps: o
  } = Ja(r);
  let i;
  return Array.isArray(t) ? i = [n, ...t] : typeof t == "function" ? i = (...a) => {
    const s = t(...a);
    return We(s) ? {
      ...n,
      ...s
    } : n;
  } : i = {
    ...n,
    ...t
  }, {
    ...o,
    sx: i
  };
}
function sr() {
  return sr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, sr.apply(null, arguments);
}
function Qa(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Za(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var es = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Za(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Qa(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      var o;
      return (o = n.parentNode) == null ? void 0 : o.removeChild(n);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), Oe = "-ms-", cr = "-moz-", ee = "-webkit-", No = "comm", on = "rule", an = "decl", ts = "@import", Mo = "@keyframes", rs = "@layer", ns = Math.abs, Er = String.fromCharCode, os = Object.assign;
function is(e, t) {
  return we(e, 0) ^ 45 ? (((t << 2 ^ we(e, 0)) << 2 ^ we(e, 1)) << 2 ^ we(e, 2)) << 2 ^ we(e, 3) : 0;
}
function Bo(e) {
  return e.trim();
}
function as(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function te(e, t, r) {
  return e.replace(t, r);
}
function Vr(e, t) {
  return e.indexOf(t);
}
function we(e, t) {
  return e.charCodeAt(t) | 0;
}
function kt(e, t, r) {
  return e.slice(t, r);
}
function Fe(e) {
  return e.length;
}
function sn(e) {
  return e.length;
}
function Kt(e, t) {
  return t.push(e), e;
}
function ss(e, t) {
  return e.map(t).join("");
}
var Cr = 1, vt = 1, jo = 0, Pe = 0, Se = 0, xt = "";
function Tr(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Cr, column: vt, length: a, return: "" };
}
function Ot(e, t) {
  return os(Tr("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function cs() {
  return Se;
}
function ls() {
  return Se = Pe > 0 ? we(xt, --Pe) : 0, vt--, Se === 10 && (vt = 1, Cr--), Se;
}
function ke() {
  return Se = Pe < jo ? we(xt, Pe++) : 0, vt++, Se === 10 && (vt = 1, Cr++), Se;
}
function Ue() {
  return we(xt, Pe);
}
function er() {
  return Pe;
}
function Dt(e, t) {
  return kt(xt, e, t);
}
function It(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function zo(e) {
  return Cr = vt = 1, jo = Fe(xt = e), Pe = 0, [];
}
function Do(e) {
  return xt = "", e;
}
function tr(e) {
  return Bo(Dt(Pe - 1, Lr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function us(e) {
  for (; (Se = Ue()) && Se < 33; )
    ke();
  return It(e) > 2 || It(Se) > 3 ? "" : " ";
}
function fs(e, t) {
  for (; --t && ke() && !(Se < 48 || Se > 102 || Se > 57 && Se < 65 || Se > 70 && Se < 97); )
    ;
  return Dt(e, er() + (t < 6 && Ue() == 32 && ke() == 32));
}
function Lr(e) {
  for (; ke(); )
    switch (Se) {
      // ] ) " '
      case e:
        return Pe;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Lr(Se);
        break;
      // (
      case 40:
        e === 41 && Lr(e);
        break;
      // \
      case 92:
        ke();
        break;
    }
  return Pe;
}
function ds(e, t) {
  for (; ke() && e + Se !== 57; )
    if (e + Se === 84 && Ue() === 47)
      break;
  return "/*" + Dt(t, Pe - 1) + "*" + Er(e === 47 ? e : ke());
}
function ps(e) {
  for (; !It(Ue()); )
    ke();
  return Dt(e, Pe);
}
function gs(e) {
  return Do(rr("", null, null, null, [""], e = zo(e), 0, [0], e));
}
function rr(e, t, r, n, o, i, a, s, d) {
  for (var f = 0, h = 0, m = a, y = 0, E = 0, b = 0, l = 1, C = 1, T = 1, _ = 0, R = "", S = o, g = i, A = n, I = R; C; )
    switch (b = _, _ = ke()) {
      // (
      case 40:
        if (b != 108 && we(I, m - 1) == 58) {
          Vr(I += te(tr(_), "&", "&\f"), "&\f") != -1 && (T = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        I += tr(_);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        I += us(b);
        break;
      // \
      case 92:
        I += fs(er() - 1, 7);
        continue;
      // /
      case 47:
        switch (Ue()) {
          case 42:
          case 47:
            Kt(ms(ds(ke(), er()), t, r), d);
            break;
          default:
            I += "/";
        }
        break;
      // {
      case 123 * l:
        s[f++] = Fe(I) * T;
      // } ; \0
      case 125 * l:
      case 59:
      case 0:
        switch (_) {
          // \0 }
          case 0:
          case 125:
            C = 0;
          // ;
          case 59 + h:
            T == -1 && (I = te(I, /\f/g, "")), E > 0 && Fe(I) - m && Kt(E > 32 ? Hn(I + ";", n, r, m - 1) : Hn(te(I, " ", "") + ";", n, r, m - 2), d);
            break;
          // @ ;
          case 59:
            I += ";";
          // { rule/at-rule
          default:
            if (Kt(A = Gn(I, t, r, f, h, o, s, R, S = [], g = [], m), i), _ === 123)
              if (h === 0)
                rr(I, t, A, A, S, i, m, s, g);
              else
                switch (y === 99 && we(I, 3) === 110 ? 100 : y) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    rr(e, A, A, n && Kt(Gn(e, A, A, 0, 0, o, s, R, o, S = [], m), g), o, g, m, s, n ? S : g);
                    break;
                  default:
                    rr(I, A, A, A, [""], g, 0, s, g);
                }
        }
        f = h = E = 0, l = T = 1, R = I = "", m = a;
        break;
      // :
      case 58:
        m = 1 + Fe(I), E = b;
      default:
        if (l < 1) {
          if (_ == 123)
            --l;
          else if (_ == 125 && l++ == 0 && ls() == 125)
            continue;
        }
        switch (I += Er(_), _ * l) {
          // &
          case 38:
            T = h > 0 ? 1 : (I += "\f", -1);
            break;
          // ,
          case 44:
            s[f++] = (Fe(I) - 1) * T, T = 1;
            break;
          // @
          case 64:
            Ue() === 45 && (I += tr(ke())), y = Ue(), h = m = Fe(R = I += ps(er())), _++;
            break;
          // -
          case 45:
            b === 45 && Fe(I) == 2 && (l = 0);
        }
    }
  return i;
}
function Gn(e, t, r, n, o, i, a, s, d, f, h) {
  for (var m = o - 1, y = o === 0 ? i : [""], E = sn(y), b = 0, l = 0, C = 0; b < n; ++b)
    for (var T = 0, _ = kt(e, m + 1, m = ns(l = a[b])), R = e; T < E; ++T)
      (R = Bo(l > 0 ? y[T] + " " + _ : te(_, /&\f/g, y[T]))) && (d[C++] = R);
  return Tr(e, t, r, o === 0 ? on : s, d, f, h);
}
function ms(e, t, r) {
  return Tr(e, t, r, No, Er(cs()), kt(e, 2, -2), 0);
}
function Hn(e, t, r, n) {
  return Tr(e, t, r, an, kt(e, 0, n), kt(e, n + 1, -1), n);
}
function bt(e, t) {
  for (var r = "", n = sn(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function hs(e, t, r, n) {
  switch (e.type) {
    case rs:
      if (e.children.length) break;
    case ts:
    case an:
      return e.return = e.return || e.value;
    case No:
      return "";
    case Mo:
      return e.return = e.value + "{" + bt(e.children, n) + "}";
    case on:
      e.value = e.props.join(",");
  }
  return Fe(r = bt(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function ys(e) {
  var t = sn(e);
  return function(r, n, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](r, n, o, i) || "";
    return a;
  };
}
function bs(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function Fo(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var vs = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = Ue(), o === 38 && i === 12 && (r[n] = 1), !It(i); )
    ke();
  return Dt(t, Pe);
}, Ss = function(t, r) {
  var n = -1, o = 44;
  do
    switch (It(o)) {
      case 0:
        o === 38 && Ue() === 12 && (r[n] = 1), t[n] += vs(Pe - 1, r, n);
        break;
      case 2:
        t[n] += tr(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Ue() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      // fallthrough
      default:
        t[n] += Er(o);
    }
  while (o = ke());
  return t;
}, xs = function(t, r) {
  return Do(Ss(zo(t), r));
}, Kn = /* @__PURE__ */ new WeakMap(), Es = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Kn.get(n)) && !o) {
      Kn.set(t, !0);
      for (var i = [], a = xs(r, i), s = n.props, d = 0, f = 0; d < a.length; d++)
        for (var h = 0; h < s.length; h++, f++)
          t.props[f] = i[d] ? a[d].replace(/&\f/g, s[h]) : s[h] + " " + a[d];
    }
  }
}, Cs = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Vo(e, t) {
  switch (is(e, t)) {
    // color-adjust
    case 5103:
      return ee + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ee + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ee + e + cr + e + Oe + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return ee + e + Oe + e + e;
    // order
    case 6165:
      return ee + e + Oe + "flex-" + e + e;
    // align-items
    case 5187:
      return ee + e + te(e, /(\w+).+(:[^]+)/, ee + "box-$1$2" + Oe + "flex-$1$2") + e;
    // align-self
    case 5443:
      return ee + e + Oe + "flex-item-" + te(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return ee + e + Oe + "flex-line-pack" + te(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return ee + e + Oe + te(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return ee + e + Oe + te(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return ee + "box-" + te(e, "-grow", "") + ee + e + Oe + te(e, "grow", "positive") + e;
    // transition
    case 4554:
      return ee + te(e, /([^-])(transform)/g, "$1" + ee + "$2") + e;
    // cursor
    case 6187:
      return te(te(te(e, /(zoom-|grab)/, ee + "$1"), /(image-set)/, ee + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return te(e, /(image-set\([^]*)/, ee + "$1$`$1");
    // justify-content
    case 4968:
      return te(te(e, /(.+:)(flex-)?(.*)/, ee + "box-pack:$3" + Oe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ee + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return te(e, /(.+)-inline(.+)/, ee + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Fe(e) - 1 - t > 6) switch (we(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (we(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return te(e, /(.+:)(.+)-([^]+)/, "$1" + ee + "$2-$3$1" + cr + (we(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~Vr(e, "stretch") ? Vo(te(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (we(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (we(e, Fe(e) - 3 - (~Vr(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return te(e, ":", ":" + ee) + e;
        // (inline-)?fl(e)x
        case 101:
          return te(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ee + (we(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ee + "$2$3$1" + Oe + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (we(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return ee + e + Oe + te(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return ee + e + Oe + te(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return ee + e + Oe + te(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ee + e + Oe + e + e;
  }
  return e;
}
var Ts = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case an:
      t.return = Vo(t.value, t.length);
      break;
    case Mo:
      return bt([Ot(t, {
        value: te(t.value, "@", "@" + ee)
      })], o);
    case on:
      if (t.length) return ss(t.props, function(i) {
        switch (as(i, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return bt([Ot(t, {
              props: [te(i, /:(read-\w+)/, ":" + cr + "$1")]
            })], o);
          // :placeholder
          case "::placeholder":
            return bt([Ot(t, {
              props: [te(i, /:(plac\w+)/, ":" + ee + "input-$1")]
            }), Ot(t, {
              props: [te(i, /:(plac\w+)/, ":" + cr + "$1")]
            }), Ot(t, {
              props: [te(i, /:(plac\w+)/, Oe + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, ws = [Ts], Rs = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(l) {
      var C = l.getAttribute("data-emotion");
      C.indexOf(" ") !== -1 && (document.head.appendChild(l), l.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || ws, i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(l) {
      for (var C = l.getAttribute("data-emotion").split(" "), T = 1; T < C.length; T++)
        i[C[T]] = !0;
      s.push(l);
    }
  );
  var d, f = [Es, Cs];
  {
    var h, m = [hs, bs(function(l) {
      h.insert(l);
    })], y = ys(f.concat(o, m)), E = function(C) {
      return bt(gs(C), y);
    };
    d = function(C, T, _, R) {
      h = _, E(C ? C + "{" + T.styles + "}" : T.styles), R && (b.inserted[T.name] = !0);
    };
  }
  var b = {
    key: r,
    sheet: new es({
      key: r,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: d
  };
  return b.sheet.hydrate(s), b;
}, Xt = { exports: {} }, ie = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xn;
function Os() {
  if (Xn) return ie;
  Xn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
  function R(g) {
    if (typeof g == "object" && g !== null) {
      var A = g.$$typeof;
      switch (A) {
        case t:
          switch (g = g.type, g) {
            case d:
            case f:
            case n:
            case i:
            case o:
            case m:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case s:
                case h:
                case b:
                case E:
                case a:
                  return g;
                default:
                  return A;
              }
          }
        case r:
          return A;
      }
    }
  }
  function S(g) {
    return R(g) === f;
  }
  return ie.AsyncMode = d, ie.ConcurrentMode = f, ie.ContextConsumer = s, ie.ContextProvider = a, ie.Element = t, ie.ForwardRef = h, ie.Fragment = n, ie.Lazy = b, ie.Memo = E, ie.Portal = r, ie.Profiler = i, ie.StrictMode = o, ie.Suspense = m, ie.isAsyncMode = function(g) {
    return S(g) || R(g) === d;
  }, ie.isConcurrentMode = S, ie.isContextConsumer = function(g) {
    return R(g) === s;
  }, ie.isContextProvider = function(g) {
    return R(g) === a;
  }, ie.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, ie.isForwardRef = function(g) {
    return R(g) === h;
  }, ie.isFragment = function(g) {
    return R(g) === n;
  }, ie.isLazy = function(g) {
    return R(g) === b;
  }, ie.isMemo = function(g) {
    return R(g) === E;
  }, ie.isPortal = function(g) {
    return R(g) === r;
  }, ie.isProfiler = function(g) {
    return R(g) === i;
  }, ie.isStrictMode = function(g) {
    return R(g) === o;
  }, ie.isSuspense = function(g) {
    return R(g) === m;
  }, ie.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === f || g === i || g === o || g === m || g === y || typeof g == "object" && g !== null && (g.$$typeof === b || g.$$typeof === E || g.$$typeof === a || g.$$typeof === s || g.$$typeof === h || g.$$typeof === C || g.$$typeof === T || g.$$typeof === _ || g.$$typeof === l);
  }, ie.typeOf = R, ie;
}
var ae = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jn;
function $s() {
  return Jn || (Jn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, h = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, C = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
    function R(v) {
      return typeof v == "string" || typeof v == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      v === n || v === f || v === i || v === o || v === m || v === y || typeof v == "object" && v !== null && (v.$$typeof === b || v.$$typeof === E || v.$$typeof === a || v.$$typeof === s || v.$$typeof === h || v.$$typeof === C || v.$$typeof === T || v.$$typeof === _ || v.$$typeof === l);
    }
    function S(v) {
      if (typeof v == "object" && v !== null) {
        var xe = v.$$typeof;
        switch (xe) {
          case t:
            var Te = v.type;
            switch (Te) {
              case d:
              case f:
              case n:
              case i:
              case o:
              case m:
                return Te;
              default:
                var Be = Te && Te.$$typeof;
                switch (Be) {
                  case s:
                  case h:
                  case b:
                  case E:
                  case a:
                    return Be;
                  default:
                    return xe;
                }
            }
          case r:
            return xe;
        }
      }
    }
    var g = d, A = f, I = s, H = a, J = t, c = h, $ = n, N = b, B = E, U = r, se = i, re = o, de = m, Ee = !1;
    function Q(v) {
      return Ee || (Ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(v) || S(v) === d;
    }
    function O(v) {
      return S(v) === f;
    }
    function P(v) {
      return S(v) === s;
    }
    function D(v) {
      return S(v) === a;
    }
    function F(v) {
      return typeof v == "object" && v !== null && v.$$typeof === t;
    }
    function j(v) {
      return S(v) === h;
    }
    function Y(v) {
      return S(v) === n;
    }
    function V(v) {
      return S(v) === b;
    }
    function L(v) {
      return S(v) === E;
    }
    function q(v) {
      return S(v) === r;
    }
    function K(v) {
      return S(v) === i;
    }
    function G(v) {
      return S(v) === o;
    }
    function ye(v) {
      return S(v) === m;
    }
    ae.AsyncMode = g, ae.ConcurrentMode = A, ae.ContextConsumer = I, ae.ContextProvider = H, ae.Element = J, ae.ForwardRef = c, ae.Fragment = $, ae.Lazy = N, ae.Memo = B, ae.Portal = U, ae.Profiler = se, ae.StrictMode = re, ae.Suspense = de, ae.isAsyncMode = Q, ae.isConcurrentMode = O, ae.isContextConsumer = P, ae.isContextProvider = D, ae.isElement = F, ae.isForwardRef = j, ae.isFragment = Y, ae.isLazy = V, ae.isMemo = L, ae.isPortal = q, ae.isProfiler = K, ae.isStrictMode = G, ae.isSuspense = ye, ae.isValidElementType = R, ae.typeOf = S;
  }()), ae;
}
var Qn;
function Ps() {
  return Qn || (Qn = 1, process.env.NODE_ENV === "production" ? Xt.exports = Os() : Xt.exports = $s()), Xt.exports;
}
var Nr, Zn;
function As() {
  if (Zn) return Nr;
  Zn = 1;
  var e = Ps(), t = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, r = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, n = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, o = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, i = {};
  i[e.ForwardRef] = n, i[e.Memo] = o;
  function a(b) {
    return e.isMemo(b) ? o : i[b.$$typeof] || t;
  }
  var s = Object.defineProperty, d = Object.getOwnPropertyNames, f = Object.getOwnPropertySymbols, h = Object.getOwnPropertyDescriptor, m = Object.getPrototypeOf, y = Object.prototype;
  function E(b, l, C) {
    if (typeof l != "string") {
      if (y) {
        var T = m(l);
        T && T !== y && E(b, T, C);
      }
      var _ = d(l);
      f && (_ = _.concat(f(l)));
      for (var R = a(b), S = a(l), g = 0; g < _.length; ++g) {
        var A = _[g];
        if (!r[A] && !(C && C[A]) && !(S && S[A]) && !(R && R[A])) {
          var I = h(l, A);
          try {
            s(b, A, I);
          } catch {
          }
        }
      }
    }
    return b;
  }
  return Nr = E, Nr;
}
As();
var _s = !0;
function Lo(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var cn = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  _s === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, Wo = function(t, r, n) {
  cn(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function ks(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var Is = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Ns = /[A-Z]|^ms/g, Ms = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Uo = function(t) {
  return t.charCodeAt(1) === 45;
}, eo = function(t) {
  return t != null && typeof t != "boolean";
}, Mr = /* @__PURE__ */ Fo(function(e) {
  return Uo(e) ? e : e.replace(Ns, "-$&").toLowerCase();
}), to = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Ms, function(n, o, i) {
          return Ve = {
            name: o,
            styles: i,
            next: Ve
          }, o;
        });
  }
  return Is[t] !== 1 && !Uo(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function Nt(e, t, r) {
  if (r == null)
    return "";
  var n = r;
  if (n.__emotion_styles !== void 0)
    return n;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var o = r;
      if (o.anim === 1)
        return Ve = {
          name: o.name,
          styles: o.styles,
          next: Ve
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Ve = {
              name: a.name,
              styles: a.styles,
              next: Ve
            }, a = a.next;
        var s = i.styles + ";";
        return s;
      }
      return Bs(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var d = Ve, f = r(e);
        return Ve = d, Nt(e, t, f);
      }
      break;
    }
  }
  var h = r;
  if (t == null)
    return h;
  var m = t[h];
  return m !== void 0 ? m : h;
}
function Bs(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Nt(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object") {
        var s = a;
        t != null && t[s] !== void 0 ? n += i + "{" + t[s] + "}" : eo(s) && (n += Mr(i) + ":" + to(i, s) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var d = 0; d < a.length; d++)
          eo(a[d]) && (n += Mr(i) + ":" + to(i, a[d]) + ";");
      else {
        var f = Nt(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            n += Mr(i) + ":" + f + ";";
            break;
          }
          default:
            n += i + "{" + f + "}";
        }
      }
    }
  return n;
}
var ro = /label:\s*([^\s;{]+)\s*(;|$)/g, Ve;
function wr(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Ve = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += Nt(r, t, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var s = 1; s < e.length; s++)
    if (o += Nt(r, t, e[s]), n) {
      var d = i;
      o += d[s];
    }
  ro.lastIndex = 0;
  for (var f = "", h; (h = ro.exec(o)) !== null; )
    f += "-" + h[1];
  var m = ks(o) + f;
  return {
    name: m,
    styles: o,
    next: Ve
  };
}
var js = function(t) {
  return t();
}, zs = k.useInsertionEffect ? k.useInsertionEffect : !1, Yo = zs || js, qo = /* @__PURE__ */ k.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Rs({
    key: "css"
  }) : null
);
qo.Provider;
var Go = function(t) {
  return /* @__PURE__ */ Si(function(r, n) {
    var o = xi(qo);
    return t(r, o, n);
  });
}, ln = /* @__PURE__ */ k.createContext({}), un = {}.hasOwnProperty, Wr = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Ds = function(t, r) {
  var n = {};
  for (var o in r)
    un.call(r, o) && (n[o] = r[o]);
  return n[Wr] = t, n;
}, Fs = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return cn(r, n, o), Yo(function() {
    return Wo(r, n, o);
  }), null;
}, Vs = /* @__PURE__ */ Go(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[Wr], i = [n], a = "";
  typeof e.className == "string" ? a = Lo(t.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var s = wr(i, void 0, k.useContext(ln));
  a += t.key + "-" + s.name;
  var d = {};
  for (var f in e)
    un.call(e, f) && f !== "css" && f !== Wr && (d[f] = e[f]);
  return d.className = a, r && (d.ref = r), /* @__PURE__ */ k.createElement(k.Fragment, null, /* @__PURE__ */ k.createElement(Fs, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ k.createElement(o, d));
}), Ls = Vs, Ws = function(t, r) {
  var n = arguments;
  if (r == null || !un.call(r, "css"))
    return k.createElement.apply(void 0, n);
  var o = n.length, i = new Array(o);
  i[0] = Ls, i[1] = Ds(t, r);
  for (var a = 2; a < o; a++)
    i[a] = n[a];
  return k.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Ws);
function fn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return wr(t);
}
function Ft() {
  var e = fn.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var Us = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ys = /* @__PURE__ */ Fo(
  function(e) {
    return Us.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), qs = Ys, Gs = function(t) {
  return t !== "theme";
}, no = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? qs : Gs;
}, oo = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, Hs = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return cn(r, n, o), Yo(function() {
    return Wo(r, n, o);
  }), null;
}, Ks = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var s = oo(t, r, n), d = s || no(o), f = !d("as");
  return function() {
    var h = arguments, m = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && m.push("label:" + i + ";"), h[0] == null || h[0].raw === void 0)
      m.push.apply(m, h);
    else {
      var y = h[0];
      m.push(y[0]);
      for (var E = h.length, b = 1; b < E; b++)
        m.push(h[b], y[b]);
    }
    var l = Go(function(C, T, _) {
      var R = f && C.as || o, S = "", g = [], A = C;
      if (C.theme == null) {
        A = {};
        for (var I in C)
          A[I] = C[I];
        A.theme = k.useContext(ln);
      }
      typeof C.className == "string" ? S = Lo(T.registered, g, C.className) : C.className != null && (S = C.className + " ");
      var H = wr(m.concat(g), T.registered, A);
      S += T.key + "-" + H.name, a !== void 0 && (S += " " + a);
      var J = f && s === void 0 ? no(R) : d, c = {};
      for (var $ in C)
        f && $ === "as" || J($) && (c[$] = C[$]);
      return c.className = S, _ && (c.ref = _), /* @__PURE__ */ k.createElement(k.Fragment, null, /* @__PURE__ */ k.createElement(Hs, {
        cache: T,
        serialized: H,
        isStringTag: typeof R == "string"
      }), /* @__PURE__ */ k.createElement(R, c));
    });
    return l.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", l.defaultProps = t.defaultProps, l.__emotion_real = l, l.__emotion_base = o, l.__emotion_styles = m, l.__emotion_forwardProp = s, Object.defineProperty(l, "toString", {
      value: function() {
        return "." + a;
      }
    }), l.withComponent = function(C, T) {
      var _ = e(C, sr({}, r, T, {
        shouldForwardProp: oo(l, T, !0)
      }));
      return _.apply(void 0, m);
    }, l;
  };
}, Xs = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Ur = Ks.bind(null);
Xs.forEach(function(e) {
  Ur[e] = Ur(e);
});
/**
 * @mui/styled-engine v6.4.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function Ho(e, t) {
  const r = Ur(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function Js(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const io = [];
function ao(e) {
  return io[0] = e, wr(io);
}
const Qs = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function Zs(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: r = "px",
    step: n = 5,
    ...o
  } = e, i = Qs(t), a = Object.keys(i);
  function s(y) {
    return `@media (min-width:${typeof t[y] == "number" ? t[y] : y}${r})`;
  }
  function d(y) {
    return `@media (max-width:${(typeof t[y] == "number" ? t[y] : y) - n / 100}${r})`;
  }
  function f(y, E) {
    const b = a.indexOf(E);
    return `@media (min-width:${typeof t[y] == "number" ? t[y] : y}${r}) and (max-width:${(b !== -1 && typeof t[a[b]] == "number" ? t[a[b]] : E) - n / 100}${r})`;
  }
  function h(y) {
    return a.indexOf(y) + 1 < a.length ? f(y, a[a.indexOf(y) + 1]) : s(y);
  }
  function m(y) {
    const E = a.indexOf(y);
    return E === 0 ? s(a[1]) : E === a.length - 1 ? d(a[E]) : f(y, a[a.indexOf(y) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: s,
    down: d,
    between: f,
    only: h,
    not: m,
    unit: r,
    ...o
  };
}
const ec = {
  borderRadius: 4
};
function Ko(e = 8, t = rn({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = t(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return r.mui = !0, r;
}
function tc(e, t) {
  var n;
  const r = this;
  if (r.vars) {
    if (!((n = r.colorSchemes) != null && n[e]) || typeof r.getColorSchemeSelector != "function")
      return {};
    let o = r.getColorSchemeSelector(e);
    return o === "&" ? t : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function dn(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...a
  } = e, s = Zs(r), d = Ko(o);
  let f = _e({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: d,
    shape: {
      ...ec,
      ...i
    }
  }, a);
  return f = sa(f), f.applyStyles = tc, f = t.reduce((h, m) => _e(h, m), f), f.unstable_sxConfig = {
    ...zt,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, f.unstable_sx = function(m) {
    return lt({
      sx: m,
      theme: this
    });
  }, f;
}
function rc(e) {
  return Object.keys(e).length === 0;
}
function nc(e = null) {
  const t = k.useContext(ln);
  return !t || rc(t) ? e : t;
}
const oc = dn();
function Xo(e = oc) {
  return nc(e);
}
function ic(e = {}) {
  const {
    themeId: t,
    defaultTheme: r,
    defaultClassName: n = "MuiBox-root",
    generateClassName: o
  } = e, i = Ho("div", {
    shouldForwardProp: (s) => s !== "theme" && s !== "sx" && s !== "as"
  })(lt);
  return /* @__PURE__ */ k.forwardRef(function(d, f) {
    const h = Xo(r), {
      className: m,
      component: y = "div",
      ...E
    } = Io(d);
    return /* @__PURE__ */ z.jsx(i, {
      as: y,
      ref: f,
      className: ve(m, o ? o(n) : n),
      theme: t && h[t] || h,
      ...E
    });
  });
}
function Jo(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: ao(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = ao(o.style));
  }), n;
}
const ac = dn();
function Br(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function sc(e) {
  return e ? (t, r) => r[e] : null;
}
function cc(e, t, r) {
  e.theme = dc(e.theme) ? r : e.theme[t] || e.theme;
}
function nr(e, t) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((n) => nr(e, n));
  if (Array.isArray(r == null ? void 0 : r.variants)) {
    let n;
    if (r.isProcessed)
      n = r.style;
    else {
      const {
        variants: o,
        ...i
      } = r;
      n = i;
    }
    return Qo(e, r.variants, [n]);
  }
  return r != null && r.isProcessed ? r.style : r;
}
function Qo(e, t, r = []) {
  var o;
  let n;
  e: for (let i = 0; i < t.length; i += 1) {
    const a = t[i];
    if (typeof a.props == "function") {
      if (n ?? (n = {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }), !a.props(n))
        continue;
    } else
      for (const s in a.props)
        if (e[s] !== a.props[s] && ((o = e.ownerState) == null ? void 0 : o[s]) !== a.props[s])
          continue e;
    typeof a.style == "function" ? (n ?? (n = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(a.style(n))) : r.push(a.style);
  }
  return r;
}
function lc(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = ac,
    rootShouldForwardProp: n = Br,
    slotShouldForwardProp: o = Br
  } = e;
  function i(s) {
    cc(s, t, r);
  }
  return (s, d = {}) => {
    Js(s, (g) => g.filter((A) => A !== lt));
    const {
      name: f,
      slot: h,
      skipVariantsResolver: m,
      skipSx: y,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: E = sc(Zo(h)),
      ...b
    } = d, l = m !== void 0 ? m : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      h && h !== "Root" && h !== "root" || !1
    ), C = y || !1;
    let T = Br;
    h === "Root" || h === "root" ? T = n : h ? T = o : pc(s) && (T = void 0);
    const _ = Ho(s, {
      shouldForwardProp: T,
      label: fc(f, h),
      ...b
    }), R = (g) => {
      if (typeof g == "function" && g.__emotion_real !== g)
        return function(I) {
          return nr(I, g);
        };
      if (We(g)) {
        const A = Jo(g);
        return A.variants ? function(H) {
          return nr(H, A);
        } : A.style;
      }
      return g;
    }, S = (...g) => {
      const A = [], I = g.map(R), H = [];
      if (A.push(i), f && E && H.push(function(N) {
        var re, de;
        const U = (de = (re = N.theme.components) == null ? void 0 : re[f]) == null ? void 0 : de.styleOverrides;
        if (!U)
          return null;
        const se = {};
        for (const Ee in U)
          se[Ee] = nr(N, U[Ee]);
        return E(N, se);
      }), f && !l && H.push(function(N) {
        var se, re;
        const B = N.theme, U = (re = (se = B == null ? void 0 : B.components) == null ? void 0 : se[f]) == null ? void 0 : re.variants;
        return U ? Qo(N, U) : null;
      }), C || H.push(lt), Array.isArray(I[0])) {
        const $ = I.shift(), N = new Array(A.length).fill(""), B = new Array(H.length).fill("");
        let U;
        U = [...N, ...$, ...B], U.raw = [...N, ...$.raw, ...B], A.unshift(U);
      }
      const J = [...A, ...I, ...H], c = _(...J);
      return s.muiName && (c.muiName = s.muiName), process.env.NODE_ENV !== "production" && (c.displayName = uc(f, h, s)), c;
    };
    return _.withConfig && (S.withConfig = _.withConfig), S;
  };
}
function uc(e, t, r) {
  return e ? `${e}${X(t || "")}` : `Styled(${Yi(r)})`;
}
function fc(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${Zo(t || "Root")}`), r;
}
function dc(e) {
  for (const t in e)
    return !1;
  return !0;
}
function pc(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Zo(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const gc = /* @__PURE__ */ k.createContext(void 0);
process.env.NODE_ENV !== "production" && (u.node, u.object);
function mc(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? or(o.defaultProps, n) : !o.styleOverrides && !o.variants ? or(o, n) : n;
}
function hc({
  props: e,
  name: t
}) {
  const r = k.useContext(gc);
  return mc({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const so = {
  theme: void 0
};
function yc(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (so.theme = o.theme, i = Jo(e(so)), t = i, r = o.theme), i;
  };
}
function bc(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const co = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, vc = (e, t, r) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([s, d]) => {
      (!r || !r([...i, s])) && d != null && (typeof d == "object" && Object.keys(d).length > 0 ? n(d, [...i, s], Array.isArray(d) ? [...a, s] : a) : t([...i, s], d, a));
    });
  }
  n(e);
}, Sc = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function jr(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, a = {};
  return vc(
    e,
    (s, d, f) => {
      if ((typeof d == "string" || typeof d == "number") && (!n || !n(s, d))) {
        const h = `--${r ? `${r}-` : ""}${s.join("-")}`, m = Sc(s, d);
        Object.assign(o, {
          [h]: m
        }), co(i, s, `var(${h})`, f), co(a, s, `var(${h}, ${m})`, f);
      }
    },
    (s) => s[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: a
  };
}
function xc(e, t = {}) {
  const {
    getSelector: r = C,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: a,
    defaultColorScheme: s = "light",
    ...d
  } = e, {
    vars: f,
    css: h,
    varsWithDefaults: m
  } = jr(d, t);
  let y = m;
  const E = {}, {
    [s]: b,
    ...l
  } = i;
  if (Object.entries(l || {}).forEach(([R, S]) => {
    const {
      vars: g,
      css: A,
      varsWithDefaults: I
    } = jr(S, t);
    y = _e(y, I), E[R] = {
      css: A,
      vars: g
    };
  }), b) {
    const {
      css: R,
      vars: S,
      varsWithDefaults: g
    } = jr(b, t);
    y = _e(y, g), E[s] = {
      css: R,
      vars: S
    };
  }
  function C(R, S) {
    var A, I;
    let g = o;
    if (o === "class" && (g = ".%s"), o === "data" && (g = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (g = `[${o}="%s"]`), R) {
      if (g === "media")
        return e.defaultColorScheme === R ? ":root" : {
          [`@media (prefers-color-scheme: ${((I = (A = i[R]) == null ? void 0 : A.palette) == null ? void 0 : I.mode) || R})`]: {
            ":root": S
          }
        };
      if (g)
        return e.defaultColorScheme === R ? `:root, ${g.replace("%s", String(R))}` : g.replace("%s", String(R));
    }
    return ":root";
  }
  return {
    vars: y,
    generateThemeVars: () => {
      let R = {
        ...f
      };
      return Object.entries(E).forEach(([, {
        vars: S
      }]) => {
        R = _e(R, S);
      }), R;
    },
    generateStyleSheets: () => {
      var H, J;
      const R = [], S = e.defaultColorScheme || "light";
      function g(c, $) {
        Object.keys($).length && R.push(typeof c == "string" ? {
          [c]: {
            ...$
          }
        } : c);
      }
      g(r(void 0, {
        ...h
      }), h);
      const {
        [S]: A,
        ...I
      } = E;
      if (A) {
        const {
          css: c
        } = A, $ = (J = (H = i[S]) == null ? void 0 : H.palette) == null ? void 0 : J.mode, N = !n && $ ? {
          colorScheme: $,
          ...c
        } : {
          ...c
        };
        g(r(S, {
          ...N
        }), N);
      }
      return Object.entries(I).forEach(([c, {
        css: $
      }]) => {
        var U, se;
        const N = (se = (U = i[c]) == null ? void 0 : U.palette) == null ? void 0 : se.mode, B = !n && N ? {
          colorScheme: N,
          ...$
        } : {
          ...$
        };
        g(r(c, {
          ...B
        }), B);
      }), R;
    }
  };
}
function Ec(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const Mt = {
  black: "#000",
  white: "#fff"
}, Cc = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, ft = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, dt = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, $t = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, pt = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, gt = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, mt = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
};
function ei() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: Mt.white,
      default: Mt.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const Tc = ei();
function ti() {
  return {
    text: {
      primary: Mt.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: Mt.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const lo = ti();
function uo(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = en(e.main, o) : t === "dark" && (e.dark = Zr(e.main, i)));
}
function wc(e = "light") {
  return e === "dark" ? {
    main: pt[200],
    light: pt[50],
    dark: pt[400]
  } : {
    main: pt[700],
    light: pt[400],
    dark: pt[800]
  };
}
function Rc(e = "light") {
  return e === "dark" ? {
    main: ft[200],
    light: ft[50],
    dark: ft[400]
  } : {
    main: ft[500],
    light: ft[300],
    dark: ft[700]
  };
}
function Oc(e = "light") {
  return e === "dark" ? {
    main: dt[500],
    light: dt[300],
    dark: dt[700]
  } : {
    main: dt[700],
    light: dt[400],
    dark: dt[800]
  };
}
function $c(e = "light") {
  return e === "dark" ? {
    main: gt[400],
    light: gt[300],
    dark: gt[700]
  } : {
    main: gt[700],
    light: gt[500],
    dark: gt[900]
  };
}
function Pc(e = "light") {
  return e === "dark" ? {
    main: mt[400],
    light: mt[300],
    dark: mt[700]
  } : {
    main: mt[800],
    light: mt[500],
    dark: mt[900]
  };
}
function Ac(e = "light") {
  return e === "dark" ? {
    main: $t[400],
    light: $t[300],
    dark: $t[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: $t[500],
    dark: $t[900]
  };
}
function pn(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || wc(t), a = e.secondary || Rc(t), s = e.error || Oc(t), d = e.info || $c(t), f = e.success || Pc(t), h = e.warning || Ac(t);
  function m(l) {
    const C = Nn(l, lo.text.primary) >= r ? lo.text.primary : Tc.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const T = Nn(l, C);
      T < 3 && console.error([`MUI: The contrast ratio of ${T}:1 for ${C} on ${l}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return C;
  }
  const y = ({
    color: l,
    name: C,
    mainShade: T = 500,
    lightShade: _ = 300,
    darkShade: R = 700
  }) => {
    if (l = {
      ...l
    }, !l.main && l[T] && (l.main = l[T]), !l.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${C ? ` (${C})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${T}\` property.` : rt(11, C ? ` (${C})` : "", T));
    if (typeof l.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${C ? ` (${C})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(l.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : rt(12, C ? ` (${C})` : "", JSON.stringify(l.main)));
    return uo(l, "light", _, n), uo(l, "dark", R, n), l.contrastText || (l.contrastText = m(l.main)), l;
  };
  let E;
  return t === "light" ? E = ei() : t === "dark" && (E = ti()), process.env.NODE_ENV !== "production" && (E || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), _e({
    // A collection of common colors.
    common: {
      ...Mt
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: y({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: y({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: y({
      color: s,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: y({
      color: h,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: y({
      color: d,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: y({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: Cc,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: m,
    // Generate a rich color object.
    augmentColor: y,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...E
  }, o);
}
function _c(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function kc(e, t) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...t
  };
}
function Ic(e) {
  return Math.round(e * 1e5) / 1e5;
}
const fo = {
  textTransform: "uppercase"
}, po = '"Roboto", "Helvetica", "Arial", sans-serif';
function Nc(e, t) {
  const {
    fontFamily: r = po,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: s = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: d = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: h,
    ...m
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof d != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const y = n / 14, E = h || ((C) => `${C / d * y}rem`), b = (C, T, _, R, S) => ({
    fontFamily: r,
    fontWeight: C,
    fontSize: E(T),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: _,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === po ? {
      letterSpacing: `${Ic(R / T)}em`
    } : {},
    ...S,
    ...f
  }), l = {
    h1: b(o, 96, 1.167, -1.5),
    h2: b(o, 60, 1.2, -0.5),
    h3: b(i, 48, 1.167, 0),
    h4: b(i, 34, 1.235, 0.25),
    h5: b(i, 24, 1.334, 0),
    h6: b(a, 20, 1.6, 0.15),
    subtitle1: b(i, 16, 1.75, 0.15),
    subtitle2: b(a, 14, 1.57, 0.1),
    body1: b(i, 16, 1.5, 0.15),
    body2: b(i, 14, 1.43, 0.15),
    button: b(a, 14, 1.75, 0.4, fo),
    caption: b(i, 12, 1.66, 0.4),
    overline: b(i, 12, 2.66, 1, fo),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return _e({
    htmlFontSize: d,
    pxToRem: E,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: s,
    ...l
  }, m, {
    clone: !1
    // No need to clone deep
  });
}
const Mc = 0.2, Bc = 0.14, jc = 0.12;
function pe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Mc})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Bc})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${jc})`].join(",");
}
const zc = ["none", pe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), pe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), pe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), pe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), pe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), pe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), pe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), pe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), pe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), pe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), pe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), pe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), pe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), pe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), pe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), pe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), pe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), pe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), pe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), pe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), pe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), pe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), pe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), pe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Dc = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Fc = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function go(e) {
  return `${Math.round(e)}ms`;
}
function Vc(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Lc(e) {
  const t = {
    ...Dc,
    ...e.easing
  }, r = {
    ...Fc,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Vc,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: s = t.easeInOut,
        delay: d = 0,
        ...f
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const h = (y) => typeof y == "string", m = (y) => !Number.isNaN(parseFloat(y));
        !h(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !m(a) && !h(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), h(s) || console.error('MUI: Argument "easing" must be a string.'), !m(d) && !h(d) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((h) => `${h} ${typeof a == "string" ? a : go(a)} ${s} ${typeof d == "string" ? d : go(d)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const Wc = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Uc(e) {
  return We(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function ri(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, s] = o[i];
      !Uc(s) || a.startsWith("unstable_") ? delete n[a] : We(s) && (n[a] = {
        ...s
      }, r(n[a]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Yr(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: a = {},
    typography: s = {},
    shape: d,
    ...f
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : rt(20));
  const h = pn(i), m = dn(e);
  let y = _e(m, {
    mixins: kc(m.breakpoints, n),
    palette: h,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: zc.slice(),
    typography: Nc(h, s),
    transitions: Lc(a),
    zIndex: {
      ...Wc
    }
  });
  if (y = _e(y, f), y = t.reduce((E, b) => _e(E, b), y), process.env.NODE_ENV !== "production") {
    const E = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], b = (l, C) => {
      let T;
      for (T in l) {
        const _ = l[T];
        if (E.includes(T) && Object.keys(_).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const R = je("", T);
            console.error([`MUI: The \`${C}\` component increases the CSS specificity of the \`${T}\` internal state.`, "You can not override it like this: ", JSON.stringify(l, null, 2), "", `Instead, you need to use the '&.${R}' syntax:`, JSON.stringify({
              root: {
                [`&.${R}`]: _
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          l[T] = {};
        }
      }
    };
    Object.keys(y.components).forEach((l) => {
      const C = y.components[l].styleOverrides;
      C && l.startsWith("Mui") && b(C, l);
    });
  }
  return y.unstable_sxConfig = {
    ...zt,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, y.unstable_sx = function(b) {
    return lt({
      sx: b,
      theme: this
    });
  }, y.toRuntimeSource = ri, y;
}
function qr(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Yc = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = qr(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function ni(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function oi(e) {
  return e === "dark" ? Yc : [];
}
function qc(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, i = pn(t);
  return {
    palette: i,
    opacity: {
      ...ni(i.mode),
      ...r
    },
    overlays: n || oi(i.mode),
    ...o
  };
}
function Gc(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Hc = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Kc = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return Hc(e.cssVarPrefix).forEach((s) => {
        a[s] = r[s], delete r[s];
      }), i === "media" ? {
        [n]: r,
        "@media (prefers-color-scheme: dark)": {
          [n]: a
        }
      } : i ? {
        [i.replace("%s", t)]: a,
        [`${n}, ${i.replace("%s", t)}`]: r
      } : {
        [n]: {
          ...r,
          ...a
        }
      };
    }
    if (i && i !== "media")
      return `${n}, ${i.replace("%s", String(t))}`;
  } else if (t) {
    if (i === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [n]: r
        }
      };
    if (i)
      return i.replace("%s", String(t));
  }
  return n;
};
function Xc(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function x(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function At(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : To(e);
}
function Ke(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Pt(At(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Jc(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const De = (e) => {
  try {
    return e();
  } catch {
  }
}, Qc = (e = "mui") => bc(e);
function zr(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = qc({
      ...t,
      palette: {
        mode: o,
        ...t == null ? void 0 : t.palette
      }
    });
    return;
  }
  const {
    palette: i,
    ...a
  } = Yr({
    ...r,
    palette: {
      mode: o,
      ...t == null ? void 0 : t.palette
    }
  });
  return e[n] = {
    ...t,
    palette: i,
    opacity: {
      ...ni(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || oi(o)
  }, a;
}
function Zc(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: a = Gc,
    colorSchemeSelector: s = r.light && r.dark ? "media" : void 0,
    rootSelector: d = ":root",
    ...f
  } = e, h = Object.keys(r)[0], m = n || (r.light && h !== "light" ? "light" : h), y = Qc(i), {
    [m]: E,
    light: b,
    dark: l,
    ...C
  } = r, T = {
    ...C
  };
  let _ = E;
  if ((m === "dark" && !("dark" in r) || m === "light" && !("light" in r)) && (_ = !0), !_)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${m}\` option is either missing or invalid.` : rt(21, m));
  const R = zr(T, _, f, m);
  b && !T.light && zr(T, b, void 0, "light"), l && !T.dark && zr(T, l, void 0, "dark");
  let S = {
    defaultColorScheme: m,
    ...R,
    cssVarPrefix: i,
    colorSchemeSelector: s,
    rootSelector: d,
    getCssVar: y,
    colorSchemes: T,
    font: {
      ..._c(R.typography),
      ...R.font
    },
    spacing: Jc(f.spacing)
  };
  Object.keys(S.colorSchemes).forEach((J) => {
    const c = S.colorSchemes[J].palette, $ = (N) => {
      const B = N.split("-"), U = B[1], se = B[2];
      return y(N, c[U][se]);
    };
    if (c.mode === "light" && (x(c.common, "background", "#fff"), x(c.common, "onBackground", "#000")), c.mode === "dark" && (x(c.common, "background", "#000"), x(c.common, "onBackground", "#fff")), Xc(c, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), c.mode === "light") {
      x(c.Alert, "errorColor", ue(c.error.light, 0.6)), x(c.Alert, "infoColor", ue(c.info.light, 0.6)), x(c.Alert, "successColor", ue(c.success.light, 0.6)), x(c.Alert, "warningColor", ue(c.warning.light, 0.6)), x(c.Alert, "errorFilledBg", $("palette-error-main")), x(c.Alert, "infoFilledBg", $("palette-info-main")), x(c.Alert, "successFilledBg", $("palette-success-main")), x(c.Alert, "warningFilledBg", $("palette-warning-main")), x(c.Alert, "errorFilledColor", De(() => c.getContrastText(c.error.main))), x(c.Alert, "infoFilledColor", De(() => c.getContrastText(c.info.main))), x(c.Alert, "successFilledColor", De(() => c.getContrastText(c.success.main))), x(c.Alert, "warningFilledColor", De(() => c.getContrastText(c.warning.main))), x(c.Alert, "errorStandardBg", fe(c.error.light, 0.9)), x(c.Alert, "infoStandardBg", fe(c.info.light, 0.9)), x(c.Alert, "successStandardBg", fe(c.success.light, 0.9)), x(c.Alert, "warningStandardBg", fe(c.warning.light, 0.9)), x(c.Alert, "errorIconColor", $("palette-error-main")), x(c.Alert, "infoIconColor", $("palette-info-main")), x(c.Alert, "successIconColor", $("palette-success-main")), x(c.Alert, "warningIconColor", $("palette-warning-main")), x(c.AppBar, "defaultBg", $("palette-grey-100")), x(c.Avatar, "defaultBg", $("palette-grey-400")), x(c.Button, "inheritContainedBg", $("palette-grey-300")), x(c.Button, "inheritContainedHoverBg", $("palette-grey-A100")), x(c.Chip, "defaultBorder", $("palette-grey-400")), x(c.Chip, "defaultAvatarColor", $("palette-grey-700")), x(c.Chip, "defaultIconColor", $("palette-grey-700")), x(c.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), x(c.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), x(c.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), x(c.LinearProgress, "primaryBg", fe(c.primary.main, 0.62)), x(c.LinearProgress, "secondaryBg", fe(c.secondary.main, 0.62)), x(c.LinearProgress, "errorBg", fe(c.error.main, 0.62)), x(c.LinearProgress, "infoBg", fe(c.info.main, 0.62)), x(c.LinearProgress, "successBg", fe(c.success.main, 0.62)), x(c.LinearProgress, "warningBg", fe(c.warning.main, 0.62)), x(c.Skeleton, "bg", `rgba(${$("palette-text-primaryChannel")} / 0.11)`), x(c.Slider, "primaryTrack", fe(c.primary.main, 0.62)), x(c.Slider, "secondaryTrack", fe(c.secondary.main, 0.62)), x(c.Slider, "errorTrack", fe(c.error.main, 0.62)), x(c.Slider, "infoTrack", fe(c.info.main, 0.62)), x(c.Slider, "successTrack", fe(c.success.main, 0.62)), x(c.Slider, "warningTrack", fe(c.warning.main, 0.62));
      const N = Gt(c.background.default, 0.8);
      x(c.SnackbarContent, "bg", N), x(c.SnackbarContent, "color", De(() => c.getContrastText(N))), x(c.SpeedDialAction, "fabHoverBg", Gt(c.background.paper, 0.15)), x(c.StepConnector, "border", $("palette-grey-400")), x(c.StepContent, "border", $("palette-grey-400")), x(c.Switch, "defaultColor", $("palette-common-white")), x(c.Switch, "defaultDisabledColor", $("palette-grey-100")), x(c.Switch, "primaryDisabledColor", fe(c.primary.main, 0.62)), x(c.Switch, "secondaryDisabledColor", fe(c.secondary.main, 0.62)), x(c.Switch, "errorDisabledColor", fe(c.error.main, 0.62)), x(c.Switch, "infoDisabledColor", fe(c.info.main, 0.62)), x(c.Switch, "successDisabledColor", fe(c.success.main, 0.62)), x(c.Switch, "warningDisabledColor", fe(c.warning.main, 0.62)), x(c.TableCell, "border", fe(qt(c.divider, 1), 0.88)), x(c.Tooltip, "bg", qt(c.grey[700], 0.92));
    }
    if (c.mode === "dark") {
      x(c.Alert, "errorColor", fe(c.error.light, 0.6)), x(c.Alert, "infoColor", fe(c.info.light, 0.6)), x(c.Alert, "successColor", fe(c.success.light, 0.6)), x(c.Alert, "warningColor", fe(c.warning.light, 0.6)), x(c.Alert, "errorFilledBg", $("palette-error-dark")), x(c.Alert, "infoFilledBg", $("palette-info-dark")), x(c.Alert, "successFilledBg", $("palette-success-dark")), x(c.Alert, "warningFilledBg", $("palette-warning-dark")), x(c.Alert, "errorFilledColor", De(() => c.getContrastText(c.error.dark))), x(c.Alert, "infoFilledColor", De(() => c.getContrastText(c.info.dark))), x(c.Alert, "successFilledColor", De(() => c.getContrastText(c.success.dark))), x(c.Alert, "warningFilledColor", De(() => c.getContrastText(c.warning.dark))), x(c.Alert, "errorStandardBg", ue(c.error.light, 0.9)), x(c.Alert, "infoStandardBg", ue(c.info.light, 0.9)), x(c.Alert, "successStandardBg", ue(c.success.light, 0.9)), x(c.Alert, "warningStandardBg", ue(c.warning.light, 0.9)), x(c.Alert, "errorIconColor", $("palette-error-main")), x(c.Alert, "infoIconColor", $("palette-info-main")), x(c.Alert, "successIconColor", $("palette-success-main")), x(c.Alert, "warningIconColor", $("palette-warning-main")), x(c.AppBar, "defaultBg", $("palette-grey-900")), x(c.AppBar, "darkBg", $("palette-background-paper")), x(c.AppBar, "darkColor", $("palette-text-primary")), x(c.Avatar, "defaultBg", $("palette-grey-600")), x(c.Button, "inheritContainedBg", $("palette-grey-800")), x(c.Button, "inheritContainedHoverBg", $("palette-grey-700")), x(c.Chip, "defaultBorder", $("palette-grey-700")), x(c.Chip, "defaultAvatarColor", $("palette-grey-300")), x(c.Chip, "defaultIconColor", $("palette-grey-300")), x(c.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), x(c.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), x(c.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), x(c.LinearProgress, "primaryBg", ue(c.primary.main, 0.5)), x(c.LinearProgress, "secondaryBg", ue(c.secondary.main, 0.5)), x(c.LinearProgress, "errorBg", ue(c.error.main, 0.5)), x(c.LinearProgress, "infoBg", ue(c.info.main, 0.5)), x(c.LinearProgress, "successBg", ue(c.success.main, 0.5)), x(c.LinearProgress, "warningBg", ue(c.warning.main, 0.5)), x(c.Skeleton, "bg", `rgba(${$("palette-text-primaryChannel")} / 0.13)`), x(c.Slider, "primaryTrack", ue(c.primary.main, 0.5)), x(c.Slider, "secondaryTrack", ue(c.secondary.main, 0.5)), x(c.Slider, "errorTrack", ue(c.error.main, 0.5)), x(c.Slider, "infoTrack", ue(c.info.main, 0.5)), x(c.Slider, "successTrack", ue(c.success.main, 0.5)), x(c.Slider, "warningTrack", ue(c.warning.main, 0.5));
      const N = Gt(c.background.default, 0.98);
      x(c.SnackbarContent, "bg", N), x(c.SnackbarContent, "color", De(() => c.getContrastText(N))), x(c.SpeedDialAction, "fabHoverBg", Gt(c.background.paper, 0.15)), x(c.StepConnector, "border", $("palette-grey-600")), x(c.StepContent, "border", $("palette-grey-600")), x(c.Switch, "defaultColor", $("palette-grey-300")), x(c.Switch, "defaultDisabledColor", $("palette-grey-600")), x(c.Switch, "primaryDisabledColor", ue(c.primary.main, 0.55)), x(c.Switch, "secondaryDisabledColor", ue(c.secondary.main, 0.55)), x(c.Switch, "errorDisabledColor", ue(c.error.main, 0.55)), x(c.Switch, "infoDisabledColor", ue(c.info.main, 0.55)), x(c.Switch, "successDisabledColor", ue(c.success.main, 0.55)), x(c.Switch, "warningDisabledColor", ue(c.warning.main, 0.55)), x(c.TableCell, "border", ue(qt(c.divider, 1), 0.68)), x(c.Tooltip, "bg", qt(c.grey[700], 0.92));
    }
    Ke(c.background, "default"), Ke(c.background, "paper"), Ke(c.common, "background"), Ke(c.common, "onBackground"), Ke(c, "divider"), Object.keys(c).forEach((N) => {
      const B = c[N];
      N !== "tonalOffset" && B && typeof B == "object" && (B.main && x(c[N], "mainChannel", Pt(At(B.main))), B.light && x(c[N], "lightChannel", Pt(At(B.light))), B.dark && x(c[N], "darkChannel", Pt(At(B.dark))), B.contrastText && x(c[N], "contrastTextChannel", Pt(At(B.contrastText))), N === "text" && (Ke(c[N], "primary"), Ke(c[N], "secondary")), N === "action" && (B.active && Ke(c[N], "active"), B.selected && Ke(c[N], "selected")));
    });
  }), S = t.reduce((J, c) => _e(J, c), S);
  const g = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: Kc(S)
  }, {
    vars: A,
    generateThemeVars: I,
    generateStyleSheets: H
  } = xc(S, g);
  return S.vars = A, Object.entries(S.colorSchemes[S.defaultColorScheme]).forEach(([J, c]) => {
    S[J] = c;
  }), S.generateThemeVars = I, S.generateStyleSheets = H, S.generateSpacing = function() {
    return Ko(f.spacing, rn(this));
  }, S.getColorSchemeSelector = Ec(s), S.spacing = S.generateSpacing(), S.shouldSkipGeneratingVar = a, S.unstable_sxConfig = {
    ...zt,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, S.unstable_sx = function(c) {
    return lt({
      sx: c,
      theme: this
    });
  }, S.toRuntimeSource = ri, S;
}
function mo(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: pn({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function ii(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r == null ? void 0 : r.mode,
    ...a
  } = e, s = i || "light", d = o == null ? void 0 : o[s], f = {
    ...o,
    ...r ? {
      [s]: {
        ...typeof d != "boolean" && d,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return Yr(e, ...t);
    let h = r;
    "palette" in e || f[s] && (f[s] !== !0 ? h = f[s].palette : s === "dark" && (h = {
      mode: "dark"
    }));
    const m = Yr({
      ...e,
      palette: h
    }, ...t);
    return m.defaultColorScheme = s, m.colorSchemes = f, m.palette.mode === "light" && (m.colorSchemes.light = {
      ...f.light !== !0 && f.light,
      palette: m.palette
    }, mo(m, "dark", f.dark)), m.palette.mode === "dark" && (m.colorSchemes.dark = {
      ...f.dark !== !0 && f.dark,
      palette: m.palette
    }, mo(m, "light", f.light)), m;
  }
  return !r && !("light" in f) && s === "light" && (f.light = !0), Zc({
    ...a,
    colorSchemes: f,
    defaultColorScheme: s,
    ...typeof n != "boolean" && n
  }, ...t);
}
const ai = ii(), gn = "$$material";
function el() {
  const e = Xo(ai);
  return process.env.NODE_ENV !== "production" && k.useDebugValue(e), e[gn] || e;
}
function tl(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const si = (e) => tl(e) && e !== "classes", Ce = lc({
  themeId: gn,
  defaultTheme: ai,
  rootShouldForwardProp: si
});
function rl() {
  return Io;
}
const Ye = yc;
process.env.NODE_ENV !== "production" && (u.node, u.object.isRequired);
function qe(e) {
  return hc(e);
}
function nl(e) {
  return je("MuiSvgIcon", e);
}
ze("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const ol = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${X(t)}`, `fontSize${X(r)}`]
  };
  return Qe(o, nl, n);
}, il = Ce("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${X(r.color)}`], t[`fontSize${X(r.fontSize)}`]];
  }
})(Ye(({
  theme: e
}) => {
  var t, r, n, o, i, a, s, d, f, h, m, y, E, b;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    flexShrink: 0,
    transition: (o = (t = e.transitions) == null ? void 0 : t.create) == null ? void 0 : o.call(t, "fill", {
      duration: (n = (r = (e.vars ?? e).transitions) == null ? void 0 : r.duration) == null ? void 0 : n.shorter
    }),
    variants: [
      {
        props: (l) => !l.hasSvgAsChild,
        style: {
          // the <svg> will define the property that has `currentColor`
          // for example heroicons uses fill="none" and stroke="currentColor"
          fill: "currentColor"
        }
      },
      {
        props: {
          fontSize: "inherit"
        },
        style: {
          fontSize: "inherit"
        }
      },
      {
        props: {
          fontSize: "small"
        },
        style: {
          fontSize: ((a = (i = e.typography) == null ? void 0 : i.pxToRem) == null ? void 0 : a.call(i, 20)) || "1.25rem"
        }
      },
      {
        props: {
          fontSize: "medium"
        },
        style: {
          fontSize: ((d = (s = e.typography) == null ? void 0 : s.pxToRem) == null ? void 0 : d.call(s, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((h = (f = e.typography) == null ? void 0 : f.pxToRem) == null ? void 0 : h.call(f, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, l]) => l && l.main).map(([l]) => {
        var C, T;
        return {
          props: {
            color: l
          },
          style: {
            color: (T = (C = (e.vars ?? e).palette) == null ? void 0 : C[l]) == null ? void 0 : T.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (y = (m = (e.vars ?? e).palette) == null ? void 0 : m.action) == null ? void 0 : y.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (b = (E = (e.vars ?? e).palette) == null ? void 0 : E.action) == null ? void 0 : b.disabled
        }
      },
      {
        props: {
          color: "inherit"
        },
        style: {
          color: void 0
        }
      }
    ]
  };
})), lr = /* @__PURE__ */ k.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: a = "inherit",
    component: s = "svg",
    fontSize: d = "medium",
    htmlColor: f,
    inheritViewBox: h = !1,
    titleAccess: m,
    viewBox: y = "0 0 24 24",
    ...E
  } = n, b = /* @__PURE__ */ k.isValidElement(o) && o.type === "svg", l = {
    ...n,
    color: a,
    component: s,
    fontSize: d,
    instanceFontSize: t.fontSize,
    inheritViewBox: h,
    viewBox: y,
    hasSvgAsChild: b
  }, C = {};
  h || (C.viewBox = y);
  const T = ol(l);
  return /* @__PURE__ */ z.jsxs(il, {
    as: s,
    className: ve(T.root, i),
    focusable: "false",
    color: f,
    "aria-hidden": m ? void 0 : !0,
    role: m ? "img" : void 0,
    ref: r,
    ...C,
    ...E,
    ...b && o.props,
    ownerState: l,
    children: [b ? o.props.children : o, m ? /* @__PURE__ */ z.jsx("title", {
      children: m
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (lr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: u.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: u.oneOfType([u.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), u.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: u.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: u.oneOfType([u.oneOf(["inherit", "large", "medium", "small"]), u.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: u.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: u.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: u.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: u.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: u.string
});
lr.muiName = "SvgIcon";
function mn(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ z.jsx(lr, {
      "data-testid": `${t}Icon`,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = lr.muiName, /* @__PURE__ */ k.memo(/* @__PURE__ */ k.forwardRef(r));
}
class ur {
  constructor() {
    Tt(this, "mountEffect", () => {
      this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
    });
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new ur();
  }
  static use() {
    const t = $o(ur.create).current, [r, n] = k.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, k.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = sl(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  /* Ripple API */
  start(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.start(...t);
    });
  }
  stop(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.stop(...t);
    });
  }
  pulsate(...t) {
    this.mount().then(() => {
      var r;
      return (r = this.ref.current) == null ? void 0 : r.pulsate(...t);
    });
  }
}
function al() {
  return ur.use();
}
function sl() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function cl(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Gr(e, t) {
  return Gr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Gr(e, t);
}
function ll(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Gr(e, t);
}
const ho = ht.createContext(null);
function ul(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function hn(e, t) {
  var r = function(i) {
    return t && Jt(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Ei.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function fl(e, t) {
  e = e || {}, t = t || {};
  function r(h) {
    return h in t ? t[h] : e[h];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var a, s = {};
  for (var d in t) {
    if (n[d])
      for (a = 0; a < n[d].length; a++) {
        var f = n[d][a];
        s[n[d][a]] = r(f);
      }
    s[d] = r(d);
  }
  for (a = 0; a < o.length; a++)
    s[o[a]] = r(o[a]);
  return s;
}
function ct(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function dl(e, t) {
  return hn(e.children, function(r) {
    return Qt(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: ct(r, "appear", e),
      enter: ct(r, "enter", e),
      exit: ct(r, "exit", e)
    });
  });
}
function pl(e, t, r) {
  var n = hn(e.children), o = fl(t, n);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (Jt(a)) {
      var s = i in t, d = i in n, f = t[i], h = Jt(f) && !f.props.in;
      d && (!s || h) ? o[i] = Qt(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: ct(a, "exit", e),
        enter: ct(a, "enter", e)
      }) : !d && s && !h ? o[i] = Qt(a, {
        in: !1
      }) : d && s && Jt(f) && (o[i] = Qt(a, {
        onExited: r.bind(null, a),
        in: f.props.in,
        exit: ct(a, "exit", e),
        enter: ct(a, "enter", e)
      }));
    }
  }), o;
}
var gl = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, ml = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, yn = /* @__PURE__ */ function(e) {
  ll(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = i.handleExited.bind(ul(i));
    return i.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: a,
      firstRender: !0
    }, i;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(o, i) {
    var a = i.children, s = i.handleExited, d = i.firstRender;
    return {
      children: d ? dl(o, s) : pl(o, a, s),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var a = hn(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(s) {
      var d = sr({}, s.children);
      return delete d[o.key], {
        children: d
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, s = cl(o, ["component", "childFactory"]), d = this.state.contextValue, f = gl(this.state.children).map(a);
    return delete s.appear, delete s.enter, delete s.exit, i === null ? /* @__PURE__ */ ht.createElement(ho.Provider, {
      value: d
    }, f) : /* @__PURE__ */ ht.createElement(ho.Provider, {
      value: d
    }, /* @__PURE__ */ ht.createElement(i, s, f));
  }, t;
}(ht.Component);
yn.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: u.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: u.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: u.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: u.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: u.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: u.func
} : {};
yn.defaultProps = ml;
function ci(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: a,
    in: s,
    onExited: d,
    timeout: f
  } = e, [h, m] = k.useState(!1), y = ve(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), E = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, b = ve(r.child, h && r.childLeaving, n && r.childPulsate);
  return !s && !h && m(!0), k.useEffect(() => {
    if (!s && d != null) {
      const l = setTimeout(d, f);
      return () => {
        clearTimeout(l);
      };
    }
  }, [d, s, f]), /* @__PURE__ */ z.jsx("span", {
    className: y,
    style: E,
    children: /* @__PURE__ */ z.jsx("span", {
      className: b
    })
  });
}
process.env.NODE_ENV !== "production" && (ci.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object.isRequired,
  className: u.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: u.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: u.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: u.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: u.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: u.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: u.number,
  /**
   * exit delay
   */
  timeout: u.number.isRequired
});
const Ie = ze("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Hr = 550, hl = 80, yl = Ft`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, bl = Ft`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, vl = Ft`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Sl = Ce("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), xl = Ce(ci, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Ie.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${yl};
    animation-duration: ${Hr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${Ie.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${Ie.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Ie.childLeaving} {
    opacity: 0;
    animation-name: ${bl};
    animation-duration: ${Hr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${Ie.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${vl};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, li = /* @__PURE__ */ k.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a,
    ...s
  } = n, [d, f] = k.useState([]), h = k.useRef(0), m = k.useRef(null);
  k.useEffect(() => {
    m.current && (m.current(), m.current = null);
  }, [d]);
  const y = k.useRef(!1), E = Zi(), b = k.useRef(null), l = k.useRef(null), C = k.useCallback((S) => {
    const {
      pulsate: g,
      rippleX: A,
      rippleY: I,
      rippleSize: H,
      cb: J
    } = S;
    f((c) => [...c, /* @__PURE__ */ z.jsx(xl, {
      classes: {
        ripple: ve(i.ripple, Ie.ripple),
        rippleVisible: ve(i.rippleVisible, Ie.rippleVisible),
        ripplePulsate: ve(i.ripplePulsate, Ie.ripplePulsate),
        child: ve(i.child, Ie.child),
        childLeaving: ve(i.childLeaving, Ie.childLeaving),
        childPulsate: ve(i.childPulsate, Ie.childPulsate)
      },
      timeout: Hr,
      pulsate: g,
      rippleX: A,
      rippleY: I,
      rippleSize: H
    }, h.current)]), h.current += 1, m.current = J;
  }, [i]), T = k.useCallback((S = {}, g = {}, A = () => {
  }) => {
    const {
      pulsate: I = !1,
      center: H = o || g.pulsate,
      fakeElement: J = !1
      // For test purposes
    } = g;
    if ((S == null ? void 0 : S.type) === "mousedown" && y.current) {
      y.current = !1;
      return;
    }
    (S == null ? void 0 : S.type) === "touchstart" && (y.current = !0);
    const c = J ? null : l.current, $ = c ? c.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let N, B, U;
    if (H || S === void 0 || S.clientX === 0 && S.clientY === 0 || !S.clientX && !S.touches)
      N = Math.round($.width / 2), B = Math.round($.height / 2);
    else {
      const {
        clientX: se,
        clientY: re
      } = S.touches && S.touches.length > 0 ? S.touches[0] : S;
      N = Math.round(se - $.left), B = Math.round(re - $.top);
    }
    if (H)
      U = Math.sqrt((2 * $.width ** 2 + $.height ** 2) / 3), U % 2 === 0 && (U += 1);
    else {
      const se = Math.max(Math.abs((c ? c.clientWidth : 0) - N), N) * 2 + 2, re = Math.max(Math.abs((c ? c.clientHeight : 0) - B), B) * 2 + 2;
      U = Math.sqrt(se ** 2 + re ** 2);
    }
    S != null && S.touches ? b.current === null && (b.current = () => {
      C({
        pulsate: I,
        rippleX: N,
        rippleY: B,
        rippleSize: U,
        cb: A
      });
    }, E.start(hl, () => {
      b.current && (b.current(), b.current = null);
    })) : C({
      pulsate: I,
      rippleX: N,
      rippleY: B,
      rippleSize: U,
      cb: A
    });
  }, [o, C, E]), _ = k.useCallback(() => {
    T({}, {
      pulsate: !0
    });
  }, [T]), R = k.useCallback((S, g) => {
    if (E.clear(), (S == null ? void 0 : S.type) === "touchend" && b.current) {
      b.current(), b.current = null, E.start(0, () => {
        R(S, g);
      });
      return;
    }
    b.current = null, f((A) => A.length > 0 ? A.slice(1) : A), m.current = g;
  }, [E]);
  return k.useImperativeHandle(r, () => ({
    pulsate: _,
    start: T,
    stop: R
  }), [_, T, R]), /* @__PURE__ */ z.jsx(Sl, {
    className: ve(Ie.root, i.root, a),
    ref: l,
    ...s,
    children: /* @__PURE__ */ z.jsx(yn, {
      component: null,
      exit: !0,
      children: d
    })
  });
});
process.env.NODE_ENV !== "production" && (li.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: u.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string
});
function El(e) {
  return je("MuiButtonBase", e);
}
const Cl = ze("MuiButtonBase", ["root", "disabled", "focusVisible"]), Tl = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, a = Qe({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, El, o);
  return r && n && (a.root += ` ${n}`), a;
}, wl = Ce("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${Cl.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), bn = /* @__PURE__ */ k.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: s,
    component: d = "button",
    disabled: f = !1,
    disableRipple: h = !1,
    disableTouchRipple: m = !1,
    focusRipple: y = !1,
    focusVisibleClassName: E,
    LinkComponent: b = "a",
    onBlur: l,
    onClick: C,
    onContextMenu: T,
    onDragLeave: _,
    onFocus: R,
    onFocusVisible: S,
    onKeyDown: g,
    onKeyUp: A,
    onMouseDown: I,
    onMouseLeave: H,
    onMouseUp: J,
    onTouchEnd: c,
    onTouchMove: $,
    onTouchStart: N,
    tabIndex: B = 0,
    TouchRippleProps: U,
    touchRippleRef: se,
    type: re,
    ...de
  } = n, Ee = k.useRef(null), Q = al(), O = Vn(Q.ref, se), [P, D] = k.useState(!1);
  f && P && D(!1), k.useImperativeHandle(o, () => ({
    focusVisible: () => {
      D(!0), Ee.current.focus();
    }
  }), []);
  const F = Q.shouldMount && !h && !f;
  k.useEffect(() => {
    P && y && !h && Q.pulsate();
  }, [h, y, P, Q]);
  const j = Xe(Q, "start", I, m), Y = Xe(Q, "stop", T, m), V = Xe(Q, "stop", _, m), L = Xe(Q, "stop", J, m), q = Xe(Q, "stop", (w) => {
    P && w.preventDefault(), H && H(w);
  }, m), K = Xe(Q, "start", N, m), G = Xe(Q, "stop", c, m), ye = Xe(Q, "stop", $, m), v = Xe(Q, "stop", (w) => {
    Wn(w.target) || D(!1), l && l(w);
  }, !1), xe = Zt((w) => {
    Ee.current || (Ee.current = w.currentTarget), Wn(w.target) && (D(!0), S && S(w)), R && R(w);
  }), Te = () => {
    const w = Ee.current;
    return d && d !== "button" && !(w.tagName === "A" && w.href);
  }, Be = Zt((w) => {
    y && !w.repeat && P && w.key === " " && Q.stop(w, () => {
      Q.start(w);
    }), w.target === w.currentTarget && Te() && w.key === " " && w.preventDefault(), g && g(w), w.target === w.currentTarget && Te() && w.key === "Enter" && !f && (w.preventDefault(), C && C(w));
  }), Or = Zt((w) => {
    y && w.key === " " && P && !w.defaultPrevented && Q.stop(w, () => {
      Q.pulsate(w);
    }), A && A(w), C && w.target === w.currentTarget && Te() && w.key === " " && !w.defaultPrevented && C(w);
  });
  let it = d;
  it === "button" && (de.href || de.to) && (it = b);
  const Ze = {};
  it === "button" ? (Ze.type = re === void 0 ? "button" : re, Ze.disabled = f) : (!de.href && !de.to && (Ze.role = "button"), f && (Ze["aria-disabled"] = f));
  const Vt = Vn(r, Ee), Et = {
    ...n,
    centerRipple: i,
    component: d,
    disabled: f,
    disableRipple: h,
    disableTouchRipple: m,
    focusRipple: y,
    tabIndex: B,
    focusVisible: P
  }, p = Tl(Et);
  return /* @__PURE__ */ z.jsxs(wl, {
    as: it,
    className: ve(p.root, s),
    ownerState: Et,
    onBlur: v,
    onClick: C,
    onContextMenu: Y,
    onFocus: xe,
    onKeyDown: Be,
    onKeyUp: Or,
    onMouseDown: j,
    onMouseLeave: q,
    onMouseUp: L,
    onDragLeave: V,
    onTouchEnd: G,
    onTouchMove: ye,
    onTouchStart: K,
    ref: Vt,
    tabIndex: f ? -1 : B,
    type: re,
    ...Ze,
    ...de,
    children: [a, F ? /* @__PURE__ */ z.jsx(li, {
      ref: O,
      center: i,
      ...U
    }) : null]
  });
});
function Xe(e, t, r, n = !1) {
  return Zt((o) => (r && r(o), n || e[t](o), !0));
}
process.env.NODE_ENV !== "production" && (bn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: qi,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: u.bool,
  /**
   * The content of the component.
   */
  children: u.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Ui,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: u.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: u.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: u.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: u.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: u.string,
  /**
   * @ignore
   */
  href: u.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: u.elementType,
  /**
   * @ignore
   */
  onBlur: u.func,
  /**
   * @ignore
   */
  onClick: u.func,
  /**
   * @ignore
   */
  onContextMenu: u.func,
  /**
   * @ignore
   */
  onDragLeave: u.func,
  /**
   * @ignore
   */
  onFocus: u.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: u.func,
  /**
   * @ignore
   */
  onKeyDown: u.func,
  /**
   * @ignore
   */
  onKeyUp: u.func,
  /**
   * @ignore
   */
  onMouseDown: u.func,
  /**
   * @ignore
   */
  onMouseLeave: u.func,
  /**
   * @ignore
   */
  onMouseUp: u.func,
  /**
   * @ignore
   */
  onTouchEnd: u.func,
  /**
   * @ignore
   */
  onTouchMove: u.func,
  /**
   * @ignore
   */
  onTouchStart: u.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object]),
  /**
   * @default 0
   */
  tabIndex: u.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: u.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: u.oneOfType([u.func, u.shape({
    current: u.shape({
      pulsate: u.func.isRequired,
      start: u.func.isRequired,
      stop: u.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: u.oneOfType([u.oneOf(["button", "reset", "submit"]), u.string])
});
function Rl(e) {
  return typeof e.main == "string";
}
function Ol(e, t = []) {
  if (!Rl(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function St(e = []) {
  return ([, t]) => t && Ol(t, e);
}
function $l(e) {
  return je("MuiCircularProgress", e);
}
ze("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const tt = 44, Kr = Ft`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Xr = Ft`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, Pl = typeof Kr != "string" ? fn`
        animation: ${Kr} 1.4s linear infinite;
      ` : null, Al = typeof Xr != "string" ? fn`
        animation: ${Xr} 1.4s ease-in-out infinite;
      ` : null, _l = (e) => {
  const {
    classes: t,
    variant: r,
    color: n,
    disableShrink: o
  } = e, i = {
    root: ["root", r, `color${X(n)}`],
    svg: ["svg"],
    circle: ["circle", `circle${X(r)}`, o && "circleDisableShrink"]
  };
  return Qe(i, $l, t);
}, kl = Ce("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`color${X(r.color)}`]];
  }
})(Ye(({
  theme: e
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: Pl || {
      animation: `${Kr} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(St()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), Il = Ce("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), Nl = Ce("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.circle, t[`circle${X(r.variant)}`], r.disableShrink && t.circleDisableShrink];
  }
})(Ye(({
  theme: e
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState: t
    }) => t.variant === "indeterminate" && !t.disableShrink,
    style: Al || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${Xr} 1.4s ease-in-out infinite`
    }
  }]
}))), vn = /* @__PURE__ */ k.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: i = "primary",
    disableShrink: a = !1,
    size: s = 40,
    style: d,
    thickness: f = 3.6,
    value: h = 0,
    variant: m = "indeterminate",
    ...y
  } = n, E = {
    ...n,
    color: i,
    disableShrink: a,
    size: s,
    thickness: f,
    value: h,
    variant: m
  }, b = _l(E), l = {}, C = {}, T = {};
  if (m === "determinate") {
    const _ = 2 * Math.PI * ((tt - f) / 2);
    l.strokeDasharray = _.toFixed(3), T["aria-valuenow"] = Math.round(h), l.strokeDashoffset = `${((100 - h) / 100 * _).toFixed(3)}px`, C.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ z.jsx(kl, {
    className: ve(b.root, o),
    style: {
      width: s,
      height: s,
      ...C,
      ...d
    },
    ownerState: E,
    ref: r,
    role: "progressbar",
    ...T,
    ...y,
    children: /* @__PURE__ */ z.jsx(Il, {
      className: b.svg,
      ownerState: E,
      viewBox: `${tt / 2} ${tt / 2} ${tt} ${tt}`,
      children: /* @__PURE__ */ z.jsx(Nl, {
        className: b.circle,
        style: l,
        ownerState: E,
        cx: tt,
        cy: tt,
        r: (tt - f) / 2,
        fill: "none",
        strokeWidth: f
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (vn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: u.oneOfType([u.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), u.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: dr(u.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: u.oneOfType([u.number, u.string]),
  /**
   * @ignore
   */
  style: u.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: u.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: u.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: u.oneOf(["determinate", "indeterminate"])
});
function Ml(e) {
  return je("MuiButton", e);
}
const st = ze("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), ui = /* @__PURE__ */ k.createContext({});
process.env.NODE_ENV !== "production" && (ui.displayName = "ButtonGroupContext");
const fi = /* @__PURE__ */ k.createContext(void 0);
process.env.NODE_ENV !== "production" && (fi.displayName = "ButtonGroupButtonContext");
const Bl = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: i,
    loading: a,
    loadingPosition: s,
    classes: d
  } = e, f = {
    root: ["root", a && "loading", i, `${i}${X(t)}`, `size${X(o)}`, `${i}Size${X(o)}`, `color${X(t)}`, r && "disableElevation", n && "fullWidth", a && `loadingPosition${X(s)}`],
    startIcon: ["icon", "startIcon", `iconSize${X(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${X(o)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, h = Qe(f, Ml, d);
  return {
    ...d,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...h
  };
}, di = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], jl = Ce(bn, {
  shouldForwardProp: (e) => si(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${X(r.color)}`], t[`size${X(r.size)}`], t[`${r.variant}Size${X(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth, r.loading && t.loading];
  }
})(Ye(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], r = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${st.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${st.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${st.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${st.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(St()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[n].main,
        "--variant-outlinedColor": (e.vars || e).palette[n].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.5)` : Le(e.palette[n].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[n].contrastText,
        "--variant-containedBg": (e.vars || e).palette[n].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[n].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Le(e.palette[n].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[n].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Le(e.palette[n].main, e.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : r,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Le(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : Le(e.palette.text.primary, e.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${st.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${st.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }, {
      props: {
        loadingPosition: "center"
      },
      style: {
        transition: e.transitions.create(["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${st.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), zl = Ce("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, r.loading && t.startIconLoadingStart, t[`iconSize${X(r.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginRight: -8
    }
  }, ...di]
})), Dl = Ce("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, r.loading && t.endIconLoadingEnd, t[`iconSize${X(r.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginLeft: -8
    }
  }, ...di]
})), Fl = Ce("span", {
  name: "MuiButton",
  slot: "LoadingIndicator",
  overridesResolver: (e, t) => t.loadingIndicator
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }, {
    props: {
      loadingPosition: "start"
    },
    style: {
      left: 14
    }
  }, {
    props: {
      loadingPosition: "start",
      size: "small"
    },
    style: {
      left: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "start"
    },
    style: {
      left: 6
    }
  }, {
    props: {
      loadingPosition: "center"
    },
    style: {
      left: "50%",
      transform: "translate(-50%)",
      color: (e.vars || e).palette.action.disabled
    }
  }, {
    props: {
      loadingPosition: "end"
    },
    style: {
      right: 14
    }
  }, {
    props: {
      loadingPosition: "end",
      size: "small"
    },
    style: {
      right: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "end"
    },
    style: {
      right: 6
    }
  }, {
    props: {
      loadingPosition: "start",
      fullWidth: !0
    },
    style: {
      position: "relative",
      left: -10
    }
  }, {
    props: {
      loadingPosition: "end",
      fullWidth: !0
    },
    style: {
      position: "relative",
      right: -10
    }
  }]
})), yo = Ce("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder",
  overridesResolver: (e, t) => t.loadingIconPlaceholder
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Sn = /* @__PURE__ */ k.forwardRef(function(t, r) {
  const n = k.useContext(ui), o = k.useContext(fi), i = or(n, t), a = qe({
    props: i,
    name: "MuiButton"
  }), {
    children: s,
    color: d = "primary",
    component: f = "button",
    className: h,
    disabled: m = !1,
    disableElevation: y = !1,
    disableFocusRipple: E = !1,
    endIcon: b,
    focusVisibleClassName: l,
    fullWidth: C = !1,
    id: T,
    loading: _ = null,
    loadingIndicator: R,
    loadingPosition: S = "center",
    size: g = "medium",
    startIcon: A,
    type: I,
    variant: H = "text",
    ...J
  } = a, c = Oo(T), $ = R ?? /* @__PURE__ */ z.jsx(vn, {
    "aria-labelledby": c,
    color: "inherit",
    size: 16
  }), N = {
    ...a,
    color: d,
    component: f,
    disabled: m,
    disableElevation: y,
    disableFocusRipple: E,
    fullWidth: C,
    loading: _,
    loadingIndicator: $,
    loadingPosition: S,
    size: g,
    type: I,
    variant: H
  }, B = Bl(N), U = (A || _ && S === "start") && /* @__PURE__ */ z.jsx(zl, {
    className: B.startIcon,
    ownerState: N,
    children: A || /* @__PURE__ */ z.jsx(yo, {
      className: B.loadingIconPlaceholder,
      ownerState: N
    })
  }), se = (b || _ && S === "end") && /* @__PURE__ */ z.jsx(Dl, {
    className: B.endIcon,
    ownerState: N,
    children: b || /* @__PURE__ */ z.jsx(yo, {
      className: B.loadingIconPlaceholder,
      ownerState: N
    })
  }), re = o || "", de = typeof _ == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ z.jsx("span", {
      className: B.loadingWrapper,
      style: {
        display: "contents"
      },
      children: _ && /* @__PURE__ */ z.jsx(Fl, {
        className: B.loadingIndicator,
        ownerState: N,
        children: $
      })
    })
  ) : null;
  return /* @__PURE__ */ z.jsxs(jl, {
    ownerState: N,
    className: ve(n.className, B.root, h, re),
    component: f,
    disabled: m || _,
    focusRipple: !E,
    focusVisibleClassName: ve(B.focusVisible, l),
    ref: r,
    type: I,
    id: c,
    ...J,
    classes: B,
    children: [U, S !== "end" && de, s, S === "end" && de, se]
  });
});
process.env.NODE_ENV !== "production" && (Sn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: u.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: u.oneOfType([u.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), u.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: u.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: u.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: u.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: u.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: u.bool,
  /**
   * Element placed after the children.
   */
  endIcon: u.node,
  /**
   * @ignore
   */
  focusVisibleClassName: u.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: u.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: u.string,
  /**
   * @ignore
   */
  id: u.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: u.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: u.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: u.oneOf(["center", "end", "start"]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: u.oneOfType([u.oneOf(["small", "medium", "large"]), u.string]),
  /**
   * Element placed before the children.
   */
  startIcon: u.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object]),
  /**
   * @ignore
   */
  type: u.oneOfType([u.oneOf(["button", "reset", "submit"]), u.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: u.oneOfType([u.oneOf(["contained", "outlined", "text"]), u.string])
});
function du(e) {
  const { bgcolor: t, text: r, txtcolor: n, disabled: o, onClick: i, size: a } = e;
  return (
    //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
    /* @__PURE__ */ z.jsx(
      Sn,
      {
        type: "button",
        onClick: i,
        disabled: o,
        size: a,
        sx: { backgroundColor: t, color: n },
        children: r
      }
    )
  );
}
function pu(e) {
  const { bgcolor: t, text: r, txtcolor: n, bordercolor: o, borderwidth: i, hovertxtcolor: a, hoverbgcolor: s, disabled: d, onClick: f, size: h } = e;
  return /* @__PURE__ */ z.jsx(
    Sn,
    {
      type: "button",
      onClick: f,
      disabled: d,
      size: h,
      sx: {
        backgroundColor: t,
        color: n,
        border: `${i}px solid ${o}`,
        "&:hover": {
          backgroundColor: s,
          color: a
        }
      },
      children: r
    }
  );
}
function Vl(e) {
  return je("MuiPaper", e);
}
ze("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Ll = (e) => {
  const {
    square: t,
    elevation: r,
    variant: n,
    classes: o
  } = e, i = {
    root: ["root", n, !t && "rounded", n === "elevation" && `elevation${r}`]
  };
  return Qe(i, Vl, o);
}, Wl = Ce("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], !r.square && t.rounded, r.variant === "elevation" && t[`elevation${r.elevation}`]];
  }
})(Ye(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  transition: e.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: t
    }) => !t.square,
    style: {
      borderRadius: e.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), pi = /* @__PURE__ */ k.forwardRef(function(t, r) {
  var E;
  const n = qe({
    props: t,
    name: "MuiPaper"
  }), o = el(), {
    className: i,
    component: a = "div",
    elevation: s = 1,
    square: d = !1,
    variant: f = "elevation",
    ...h
  } = n, m = {
    ...n,
    component: a,
    elevation: s,
    square: d,
    variant: f
  }, y = Ll(m);
  return process.env.NODE_ENV !== "production" && o.shadows[s] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${s}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${s}]\` is defined.`].join(`
`)), /* @__PURE__ */ z.jsx(Wl, {
    as: a,
    ownerState: m,
    className: ve(y.root, i),
    ref: r,
    ...h,
    style: {
      ...f === "elevation" && {
        "--Paper-shadow": (o.vars || o).shadows[s],
        ...o.vars && {
          "--Paper-overlay": (E = o.vars.overlays) == null ? void 0 : E[s]
        },
        ...!o.vars && o.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${Le("#fff", qr(s))}, ${Le("#fff", qr(s))})`
        }
      },
      ...h.style
    }
  });
});
process.env.NODE_ENV !== "production" && (pi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: u.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: u.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: dr(ta, (e) => {
    const {
      elevation: t,
      variant: r
    } = e;
    return t > 0 && r === "outlined" ? new Error(`MUI: Combining \`elevation={${t}}\` with \`variant="${r}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: u.bool,
  /**
   * @ignore
   */
  style: u.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: u.oneOfType([u.oneOf(["elevation", "outlined"]), u.string])
});
function Ul(e) {
  return je("MuiIconButton", e);
}
const bo = ze("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), Yl = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: o,
    size: i,
    loading: a
  } = e, s = {
    root: ["root", a && "loading", r && "disabled", n !== "default" && `color${X(n)}`, o && `edge${X(o)}`, `size${X(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return Qe(s, Ul, t);
}, ql = Ce(bn, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.loading && t.loading, r.color !== "default" && t[`color${X(r.color)}`], r.edge && t[`edge${X(r.edge)}`], t[`size${X(r.size)}`]];
  }
})(Ye(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: (t) => !t.disableRipple,
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : Le(e.palette.action.active, e.palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), Ye(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(St()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(St()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : Le((e.vars || e).palette[t].main, e.palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: e.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: e.typography.pxToRem(28)
    }
  }],
  [`&.${bo.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${bo.loading}`]: {
    color: "transparent"
  }
}))), Gl = Ce("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator",
  overridesResolver: (e, t) => t.loadingIndicator
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: (e.vars || e).palette.action.disabled,
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }]
})), Rr = /* @__PURE__ */ k.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: a,
    color: s = "default",
    disabled: d = !1,
    disableFocusRipple: f = !1,
    size: h = "medium",
    id: m,
    loading: y = null,
    loadingIndicator: E,
    ...b
  } = n, l = Oo(m), C = E ?? /* @__PURE__ */ z.jsx(vn, {
    "aria-labelledby": l,
    color: "inherit",
    size: 16
  }), T = {
    ...n,
    edge: o,
    color: s,
    disabled: d,
    disableFocusRipple: f,
    loading: y,
    loadingIndicator: C,
    size: h
  }, _ = Yl(T);
  return /* @__PURE__ */ z.jsxs(ql, {
    id: l,
    className: ve(_.root, a),
    centerRipple: !0,
    focusRipple: !f,
    disabled: d || y,
    ref: r,
    ...b,
    ownerState: T,
    children: [typeof y == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ z.jsx("span", {
      className: _.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ z.jsx(Gl, {
        className: _.loadingIndicator,
        ownerState: T,
        children: y && C
      })
    }), i]
  });
});
process.env.NODE_ENV !== "production" && (Rr.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: dr(u.node, (e) => k.Children.toArray(e.children).some((r) => /* @__PURE__ */ k.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: u.oneOfType([u.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), u.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: u.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: u.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: u.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: u.oneOf(["end", "start", !1]),
  /**
   * @ignore
   */
  id: u.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: u.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: u.node,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: u.oneOfType([u.oneOf(["small", "medium", "large"]), u.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object])
});
function Hl(e) {
  return je("MuiTypography", e);
}
ze("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const Kl = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, Xl = rl(), Jl = (e) => {
  const {
    align: t,
    gutterBottom: r,
    noWrap: n,
    paragraph: o,
    variant: i,
    classes: a
  } = e, s = {
    root: ["root", i, e.align !== "inherit" && `align${X(t)}`, r && "gutterBottom", n && "noWrap", o && "paragraph"]
  };
  return Qe(s, Hl, a);
}, Ql = Ce("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.variant && t[r.variant], r.align !== "inherit" && t[`align${X(r.align)}`], r.noWrap && t.noWrap, r.gutterBottom && t.gutterBottom, r.paragraph && t.paragraph];
  }
})(Ye(({
  theme: e
}) => {
  var t;
  return {
    margin: 0,
    variants: [{
      props: {
        variant: "inherit"
      },
      style: {
        // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
        font: "inherit",
        lineHeight: "inherit",
        letterSpacing: "inherit"
      }
    }, ...Object.entries(e.typography).filter(([r, n]) => r !== "inherit" && n && typeof n == "object").map(([r, n]) => ({
      props: {
        variant: r
      },
      style: n
    })), ...Object.entries(e.palette).filter(St()).map(([r]) => ({
      props: {
        color: r
      },
      style: {
        color: (e.vars || e).palette[r].main
      }
    })), ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {}).filter(([, r]) => typeof r == "string").map(([r]) => ({
      props: {
        color: `text${X(r)}`
      },
      style: {
        color: (e.vars || e).palette.text[r]
      }
    })), {
      props: ({
        ownerState: r
      }) => r.align !== "inherit",
      style: {
        textAlign: "var(--Typography-textAlign)"
      }
    }, {
      props: ({
        ownerState: r
      }) => r.noWrap,
      style: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, {
      props: ({
        ownerState: r
      }) => r.gutterBottom,
      style: {
        marginBottom: "0.35em"
      }
    }, {
      props: ({
        ownerState: r
      }) => r.paragraph,
      style: {
        marginBottom: 16
      }
    }]
  };
})), vo = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, gi = /* @__PURE__ */ k.forwardRef(function(t, r) {
  const {
    color: n,
    ...o
  } = qe({
    props: t,
    name: "MuiTypography"
  }), i = !Kl[n], a = Xl({
    ...o,
    ...i && {
      color: n
    }
  }), {
    align: s = "inherit",
    className: d,
    component: f,
    gutterBottom: h = !1,
    noWrap: m = !1,
    paragraph: y = !1,
    variant: E = "body1",
    variantMapping: b = vo,
    ...l
  } = a, C = {
    ...a,
    align: s,
    color: n,
    className: d,
    component: f,
    gutterBottom: h,
    noWrap: m,
    paragraph: y,
    variant: E,
    variantMapping: b
  }, T = f || (y ? "p" : b[E] || vo[E]) || "span", _ = Jl(C);
  return /* @__PURE__ */ z.jsx(Ql, {
    as: T,
    ref: r,
    className: ve(_.root, d),
    ...l,
    ownerState: C,
    style: {
      ...s !== "inherit" && {
        "--Typography-textAlign": s
      },
      ...l.style
    }
  });
});
process.env.NODE_ENV !== "production" && (gi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: u.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: u.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: u.oneOfType([u.oneOf(["primary", "secondary", "success", "error", "info", "warning", "textPrimary", "textSecondary", "textDisabled"]), u.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: u.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: u.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: u.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   * @deprecated Use the `component` prop instead. This prop will be removed in v7. See [Migrating from deprecated APIs](https://mui.com/material-ui/migration/migrating-from-deprecated-apis/) for more details.
   */
  paragraph: u.bool,
  /**
   * @ignore
   */
  style: u.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: u.oneOfType([u.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), u.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: u.object
});
function Zl(e) {
  return je("MuiAppBar", e);
}
ze("MuiAppBar", ["root", "positionFixed", "positionAbsolute", "positionSticky", "positionStatic", "positionRelative", "colorDefault", "colorPrimary", "colorSecondary", "colorInherit", "colorTransparent", "colorError", "colorInfo", "colorSuccess", "colorWarning"]);
const eu = (e) => {
  const {
    color: t,
    position: r,
    classes: n
  } = e, o = {
    root: ["root", `color${X(t)}`, `position${X(r)}`]
  };
  return Qe(o, Zl, n);
}, So = (e, t) => e ? `${e == null ? void 0 : e.replace(")", "")}, ${t})` : t, tu = Ce(pi, {
  name: "MuiAppBar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[`position${X(r.position)}`], t[`color${X(r.color)}`]];
  }
})(Ye(({
  theme: e
}) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  boxSizing: "border-box",
  // Prevent padding issue with the Modal and fixed positioned AppBar.
  flexShrink: 0,
  variants: [{
    props: {
      position: "fixed"
    },
    style: {
      position: "fixed",
      zIndex: (e.vars || e).zIndex.appBar,
      top: 0,
      left: "auto",
      right: 0,
      "@media print": {
        // Prevent the app bar to be visible on each printed page.
        position: "absolute"
      }
    }
  }, {
    props: {
      position: "absolute"
    },
    style: {
      position: "absolute",
      zIndex: (e.vars || e).zIndex.appBar,
      top: 0,
      left: "auto",
      right: 0
    }
  }, {
    props: {
      position: "sticky"
    },
    style: {
      position: "sticky",
      zIndex: (e.vars || e).zIndex.appBar,
      top: 0,
      left: "auto",
      right: 0
    }
  }, {
    props: {
      position: "static"
    },
    style: {
      position: "static"
    }
  }, {
    props: {
      position: "relative"
    },
    style: {
      position: "relative"
    }
  }, {
    props: {
      color: "inherit"
    },
    style: {
      "--AppBar-color": "inherit"
    }
  }, {
    props: {
      color: "default"
    },
    style: {
      "--AppBar-background": e.vars ? e.vars.palette.AppBar.defaultBg : e.palette.grey[100],
      "--AppBar-color": e.vars ? e.vars.palette.text.primary : e.palette.getContrastText(e.palette.grey[100]),
      ...e.applyStyles("dark", {
        "--AppBar-background": e.vars ? e.vars.palette.AppBar.defaultBg : e.palette.grey[900],
        "--AppBar-color": e.vars ? e.vars.palette.text.primary : e.palette.getContrastText(e.palette.grey[900])
      })
    }
  }, ...Object.entries(e.palette).filter(St(["contrastText"])).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--AppBar-background": (e.vars ?? e).palette[t].main,
      "--AppBar-color": (e.vars ?? e).palette[t].contrastText
    }
  })), {
    props: (t) => t.enableColorOnDark === !0 && !["inherit", "transparent"].includes(t.color),
    style: {
      backgroundColor: "var(--AppBar-background)",
      color: "var(--AppBar-color)"
    }
  }, {
    props: (t) => t.enableColorOnDark === !1 && !["inherit", "transparent"].includes(t.color),
    style: {
      backgroundColor: "var(--AppBar-background)",
      color: "var(--AppBar-color)",
      ...e.applyStyles("dark", {
        backgroundColor: e.vars ? So(e.vars.palette.AppBar.darkBg, "var(--AppBar-background)") : null,
        color: e.vars ? So(e.vars.palette.AppBar.darkColor, "var(--AppBar-color)") : null
      })
    }
  }, {
    props: {
      color: "transparent"
    },
    style: {
      "--AppBar-background": "transparent",
      "--AppBar-color": "inherit",
      backgroundColor: "var(--AppBar-background)",
      color: "var(--AppBar-color)",
      ...e.applyStyles("dark", {
        backgroundImage: "none"
      })
    }
  }]
}))), mi = /* @__PURE__ */ k.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiAppBar"
  }), {
    className: o,
    color: i = "primary",
    enableColorOnDark: a = !1,
    position: s = "fixed",
    ...d
  } = n, f = {
    ...n,
    color: i,
    position: s,
    enableColorOnDark: a
  }, h = eu(f);
  return /* @__PURE__ */ z.jsx(tu, {
    square: !0,
    component: "header",
    ownerState: f,
    elevation: 4,
    className: ve(h.root, o, s === "fixed" && "mui-fixed"),
    ref: r,
    ...d
  });
});
process.env.NODE_ENV !== "production" && (mi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: u.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: u.oneOfType([u.oneOf(["default", "inherit", "primary", "secondary", "transparent", "error", "info", "success", "warning"]), u.string]),
  /**
   * If true, the `color` prop is applied in dark mode.
   * @default false
   */
  enableColorOnDark: u.bool,
  /**
   * The positioning type. The behavior of the different options is described
   * [in the MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/position).
   * Note: `sticky` is not universally supported and will fall back to `static` when unavailable.
   * @default 'fixed'
   */
  position: u.oneOf(["absolute", "fixed", "relative", "static", "sticky"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object])
});
const ru = ze("MuiBox", ["root"]), nu = ii(), hi = ic({
  themeId: gn,
  defaultTheme: nu,
  defaultClassName: ru.root,
  generateClassName: _o.generate
});
process.env.NODE_ENV !== "production" && (hi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: u.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: u.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object])
});
function ou(e) {
  return je("MuiToolbar", e);
}
ze("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const iu = (e) => {
  const {
    classes: t,
    disableGutters: r,
    variant: n
  } = e;
  return Qe({
    root: ["root", !r && "gutters", n]
  }, ou, t);
}, au = Ce("div", {
  name: "MuiToolbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, !r.disableGutters && t.gutters, t[r.variant]];
  }
})(Ye(({
  theme: e
}) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disableGutters,
    style: {
      paddingLeft: e.spacing(2),
      paddingRight: e.spacing(2),
      [e.breakpoints.up("sm")]: {
        paddingLeft: e.spacing(3),
        paddingRight: e.spacing(3)
      }
    }
  }, {
    props: {
      variant: "dense"
    },
    style: {
      minHeight: 48
    }
  }, {
    props: {
      variant: "regular"
    },
    style: e.mixins.toolbar
  }]
}))), yi = /* @__PURE__ */ k.forwardRef(function(t, r) {
  const n = qe({
    props: t,
    name: "MuiToolbar"
  }), {
    className: o,
    component: i = "div",
    disableGutters: a = !1,
    variant: s = "regular",
    ...d
  } = n, f = {
    ...n,
    component: i,
    disableGutters: a,
    variant: s
  }, h = iu(f);
  return /* @__PURE__ */ z.jsx(au, {
    as: i,
    className: ve(h.root, o),
    ref: r,
    ownerState: f,
    ...d
  });
});
process.env.NODE_ENV !== "production" && (yi.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
   * The Toolbar is a flex container, allowing flex item properties to be used to lay out the children.
   */
  children: u.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: u.object,
  /**
   * @ignore
   */
  className: u.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: u.elementType,
  /**
   * If `true`, disables gutter padding.
   * @default false
   */
  disableGutters: u.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: u.oneOfType([u.arrayOf(u.oneOfType([u.func, u.object, u.bool])), u.func, u.object]),
  /**
   * The variant to use.
   * @default 'regular'
   */
  variant: u.oneOfType([u.oneOf(["dense", "regular"]), u.string])
});
const su = mn(/* @__PURE__ */ z.jsx("path", {
  d: "m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"
}), "Favorite");
function gu(e) {
  const { iconcolor: t, disabled: r, onClick: n } = e;
  return /* @__PURE__ */ z.jsx(Rr, { onClick: n, disabled: r, children: /* @__PURE__ */ z.jsx(su, { sx: { color: t } }) });
}
const cu = mn(/* @__PURE__ */ z.jsx("path", {
  d: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"
}), "FavoriteBorder");
function mu(e) {
  const { iconcolor: t, disabled: r, onClick: n } = e;
  return /* @__PURE__ */ z.jsx(Rr, { onClick: n, disabled: r, children: /* @__PURE__ */ z.jsx(cu, { sx: { color: t } }) });
}
const lu = mn(/* @__PURE__ */ z.jsx("path", {
  d: "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
}), "Menu");
function hu(e) {
  const { text: t, textcolor: r, barcolor: n, onClick: o } = e;
  return /* @__PURE__ */ z.jsx(hi, { sx: { flexGrow: 1 }, children: /* @__PURE__ */ z.jsx(mi, { position: "static", sx: { backgroundColor: n }, children: /* @__PURE__ */ z.jsxs(yi, { children: [
    /* @__PURE__ */ z.jsx(
      Rr,
      {
        size: "large",
        edge: "start",
        "aria-label": "menu",
        sx: { mr: 2, color: r },
        onClick: o,
        children: /* @__PURE__ */ z.jsx(lu, {})
      }
    ),
    /* @__PURE__ */ z.jsx(gi, { variant: "h6", component: "div", sx: { flexGrow: 1, color: r }, children: t })
  ] }) }) });
}
export {
  du as CustomButton,
  hu as IsraelRL,
  pu as MyButton,
  gu as MyFavourite,
  mu as MyFavouriteBorder
};
//# sourceMappingURL=index.es.js.map
