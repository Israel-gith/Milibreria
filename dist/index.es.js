var Ho = Object.defineProperty;
var Ko = (e, t, r) => t in e ? Ho(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var St = (e, t, r) => Ko(e, typeof t != "symbol" ? t + "" : t, r);
import * as _ from "react";
import lt, { forwardRef as Xo, useContext as Jo, Children as Qo, isValidElement as qt, cloneElement as Gt } from "react";
function Zo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Dt = { exports: {} }, Et = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pn;
function ei() {
  if (pn) return Et;
  pn = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.fragment");
  function r(n, o, i) {
    var a = null;
    if (i !== void 0 && (a = "" + i), o.key !== void 0 && (a = "" + o.key), "key" in o) {
      i = {};
      for (var c in o)
        c !== "key" && (i[c] = o[c]);
    } else i = o;
    return o = i.ref, {
      $$typeof: e,
      type: n,
      key: a,
      ref: o !== void 0 ? o : null,
      props: i
    };
  }
  return Et.Fragment = t, Et.jsx = r, Et.jsxs = r, Et;
}
var xt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gn;
function ti() {
  return gn || (gn = 1, process.env.NODE_ENV !== "production" && function() {
    function e(f) {
      if (f == null) return null;
      if (typeof f == "function")
        return f.$$typeof === Ee ? null : f.displayName || f.name || null;
      if (typeof f == "string") return f;
      switch (f) {
        case A:
          return "Fragment";
        case v:
          return "Portal";
        case G:
          return "Profiler";
        case I:
          return "StrictMode";
        case N:
          return "Suspense";
        case B:
          return "SuspenseList";
      }
      if (typeof f == "object")
        switch (typeof f.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), f.$$typeof) {
          case s:
            return (f.displayName || "Context") + ".Provider";
          case te:
            return (f._context.displayName || "Context") + ".Consumer";
          case O:
            var T = f.render;
            return f = f.displayName, f || (f = T.displayName || T.name || "", f = f !== "" ? "ForwardRef(" + f + ")" : "ForwardRef"), f;
          case W:
            return T = f.displayName || null, T !== null ? T : e(f.type) || "Memo";
          case le:
            T = f._payload, f = f._init;
            try {
              return e(f(T));
            } catch {
            }
        }
      return null;
    }
    function t(f) {
      return "" + f;
    }
    function r(f) {
      try {
        t(f);
        var T = !1;
      } catch {
        T = !0;
      }
      if (T) {
        T = console;
        var M = T.error, X = typeof Symbol == "function" && Symbol.toStringTag && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return M.call(
          T,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          X
        ), t(f);
      }
    }
    function n() {
    }
    function o() {
      if (j === 0) {
        U = console.log, F = console.info, V = console.warn, Y = console.error, H = console.group, q = console.groupCollapsed, ye = console.groupEnd;
        var f = {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0
        };
        Object.defineProperties(console, {
          info: f,
          log: f,
          warn: f,
          error: f,
          group: f,
          groupCollapsed: f,
          groupEnd: f
        });
      }
      j++;
    }
    function i() {
      if (j--, j === 0) {
        var f = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: $({}, f, { value: U }),
          info: $({}, f, { value: F }),
          warn: $({}, f, { value: V }),
          error: $({}, f, { value: Y }),
          group: $({}, f, { value: H }),
          groupCollapsed: $({}, f, { value: q }),
          groupEnd: $({}, f, { value: ye })
        });
      }
      0 > j && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function a(f) {
      if (P === void 0)
        try {
          throw Error();
        } catch (M) {
          var T = M.stack.trim().match(/\n( *(at )?)/);
          P = T && T[1] || "", xe = -1 < M.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < M.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + P + f + xe;
    }
    function c(f, T) {
      if (!f || Ae) return "";
      var M = Ue.get(f);
      if (M !== void 0) return M;
      Ae = !0, M = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var X = null;
      X = re.H, re.H = null, o();
      try {
        var ve = {
          DetermineComponentFrameRoot: function() {
            try {
              if (T) {
                var qe = function() {
                  throw Error();
                };
                if (Object.defineProperty(qe.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(qe, []);
                  } catch (De) {
                    var zt = De;
                  }
                  Reflect.construct(f, [], qe);
                } else {
                  try {
                    qe.call();
                  } catch (De) {
                    zt = De;
                  }
                  f.call(qe.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (De) {
                  zt = De;
                }
                (qe = f()) && typeof qe.catch == "function" && qe.catch(function() {
                });
              }
            } catch (De) {
              if (De && zt && typeof De.stack == "string")
                return [De.stack, zt.stack];
            }
            return [null, null];
          }
        };
        ve.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var fe = Object.getOwnPropertyDescriptor(
          ve.DetermineComponentFrameRoot,
          "name"
        );
        fe && fe.configurable && Object.defineProperty(
          ve.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var L = ve.DetermineComponentFrameRoot(), ze = L[0], nt = L[1];
        if (ze && nt) {
          var Ce = ze.split(`
`), Ze = nt.split(`
`);
          for (L = fe = 0; fe < Ce.length && !Ce[fe].includes(
            "DetermineComponentFrameRoot"
          ); )
            fe++;
          for (; L < Ze.length && !Ze[L].includes(
            "DetermineComponentFrameRoot"
          ); )
            L++;
          if (fe === Ce.length || L === Ze.length)
            for (fe = Ce.length - 1, L = Ze.length - 1; 1 <= fe && 0 <= L && Ce[fe] !== Ze[L]; )
              L--;
          for (; 1 <= fe && 0 <= L; fe--, L--)
            if (Ce[fe] !== Ze[L]) {
              if (fe !== 1 || L !== 1)
                do
                  if (fe--, L--, 0 > L || Ce[fe] !== Ze[L]) {
                    var vt = `
` + Ce[fe].replace(
                      " at new ",
                      " at "
                    );
                    return f.displayName && vt.includes("<anonymous>") && (vt = vt.replace("<anonymous>", f.displayName)), typeof f == "function" && Ue.set(f, vt), vt;
                  }
                while (1 <= fe && 0 <= L);
              break;
            }
        }
      } finally {
        Ae = !1, re.H = X, i(), Error.prepareStackTrace = M;
      }
      return Ce = (Ce = f ? f.displayName || f.name : "") ? a(Ce) : "", typeof f == "function" && Ue.set(f, Ce), Ce;
    }
    function u(f) {
      if (f == null) return "";
      if (typeof f == "function") {
        var T = f.prototype;
        return c(
          f,
          !(!T || !T.isReactComponent)
        );
      }
      if (typeof f == "string") return a(f);
      switch (f) {
        case N:
          return a("Suspense");
        case B:
          return a("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case O:
            return f = c(f.render, !1), f;
          case W:
            return u(f.type);
          case le:
            T = f._payload, f = f._init;
            try {
              return u(f(T));
            } catch {
            }
        }
      return "";
    }
    function d() {
      var f = re.A;
      return f === null ? null : f.getOwner();
    }
    function m(f) {
      if (w.call(f, "key")) {
        var T = Object.getOwnPropertyDescriptor(f, "key").get;
        if (T && T.isReactWarning) return !1;
      }
      return f.key !== void 0;
    }
    function g(f, T) {
      function M() {
        Qe || (Qe = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          T
        ));
      }
      M.isReactWarning = !0, Object.defineProperty(f, "key", {
        get: M,
        configurable: !0
      });
    }
    function h() {
      var f = e(this.type);
      return Ye[f] || (Ye[f] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), f = this.props.ref, f !== void 0 ? f : null;
    }
    function x(f, T, M, X, ve, fe) {
      return M = fe.ref, f = {
        $$typeof: E,
        type: f,
        key: T,
        props: fe,
        _owner: ve
      }, (M !== void 0 ? M : null) !== null ? Object.defineProperty(f, "ref", {
        enumerable: !1,
        get: h
      }) : Object.defineProperty(f, "ref", { enumerable: !1, value: null }), f._store = {}, Object.defineProperty(f._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(f, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
    }
    function y(f, T, M, X, ve, fe) {
      if (typeof f == "string" || typeof f == "function" || f === A || f === G || f === I || f === N || f === B || f === oe || typeof f == "object" && f !== null && (f.$$typeof === le || f.$$typeof === W || f.$$typeof === s || f.$$typeof === te || f.$$typeof === O || f.$$typeof === z || f.getModuleId !== void 0)) {
        var L = T.children;
        if (L !== void 0)
          if (X)
            if (D(L)) {
              for (X = 0; X < L.length; X++)
                l(L[X], f);
              Object.freeze && Object.freeze(L);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else l(L, f);
      } else
        L = "", (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (L += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), f === null ? X = "null" : D(f) ? X = "array" : f !== void 0 && f.$$typeof === E ? (X = "<" + (e(f.type) || "Unknown") + " />", L = " Did you accidentally export a JSX literal instead of a component?") : X = typeof f, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          X,
          L
        );
      if (w.call(T, "key")) {
        L = e(f);
        var ze = Object.keys(T).filter(function(Ce) {
          return Ce !== "key";
        });
        X = 0 < ze.length ? "{key: someKey, " + ze.join(": ..., ") + ": ...}" : "{key: someKey}", jt[L + X] || (ze = 0 < ze.length ? "{" + ze.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          X,
          L,
          ze,
          L
        ), jt[L + X] = !0);
      }
      if (L = null, M !== void 0 && (r(M), L = "" + M), m(T) && (r(T.key), L = "" + T.key), "key" in T) {
        M = {};
        for (var nt in T)
          nt !== "key" && (M[nt] = T[nt]);
      } else M = T;
      return L && g(
        M,
        typeof f == "function" ? f.displayName || f.name || "Unknown" : f
      ), x(f, L, fe, ve, d(), M);
    }
    function l(f, T) {
      if (typeof f == "object" && f && f.$$typeof !== xr) {
        if (D(f))
          for (var M = 0; M < f.length; M++) {
            var X = f[M];
            S(X) && C(X, T);
          }
        else if (S(f))
          f._store && (f._store.validated = 1);
        else if (f === null || typeof f != "object" ? M = null : (M = de && f[de] || f["@@iterator"], M = typeof M == "function" ? M : null), typeof M == "function" && M !== f.entries && (M = M.call(f), M !== f))
          for (; !(f = M.next()).done; )
            S(f.value) && C(f.value, T);
      }
    }
    function S(f) {
      return typeof f == "object" && f !== null && f.$$typeof === E;
    }
    function C(f, T) {
      if (f._store && !f._store.validated && f.key == null && (f._store.validated = 1, T = k(T), !bt[T])) {
        bt[T] = !0;
        var M = "";
        f && f._owner != null && f._owner !== d() && (M = null, typeof f._owner.tag == "number" ? M = e(f._owner.type) : typeof f._owner.name == "string" && (M = f._owner.name), M = " It was passed a child from " + M + ".");
        var X = re.getCurrentStack;
        re.getCurrentStack = function() {
          var ve = u(f.type);
          return X && (ve += X() || ""), ve;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          T,
          M
        ), re.getCurrentStack = X;
      }
    }
    function k(f) {
      var T = "", M = d();
      return M && (M = e(M.type)) && (T = `

Check the render method of \`` + M + "`."), T || (f = e(f)) && (T = `

Check the top-level render call using <` + f + ">."), T;
    }
    var R = lt, E = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), G = Symbol.for("react.profiler"), te = Symbol.for("react.consumer"), s = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), le = Symbol.for("react.lazy"), oe = Symbol.for("react.offscreen"), de = Symbol.iterator, Ee = Symbol.for("react.client.reference"), re = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, w = Object.prototype.hasOwnProperty, $ = Object.assign, z = Symbol.for("react.client.reference"), D = Array.isArray, j = 0, U, F, V, Y, H, q, ye;
    n.__reactDisabledLog = !0;
    var P, xe, Ae = !1, Ue = new (typeof WeakMap == "function" ? WeakMap : Map)(), xr = Symbol.for("react.client.reference"), Qe, Ye = {}, jt = {}, bt = {};
    xt.Fragment = A, xt.jsx = function(f, T, M, X, ve) {
      return y(f, T, M, !1, X, ve);
    }, xt.jsxs = function(f, T, M, X, ve) {
      return y(f, T, M, !0, X, ve);
    };
  }()), xt;
}
var mn;
function ri() {
  return mn || (mn = 1, process.env.NODE_ENV === "production" ? Dt.exports = ei() : Dt.exports = ti()), Dt.exports;
}
var K = ri(), Ft = { exports: {} }, Vt = { exports: {} }, Z = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hn;
function ni() {
  if (hn) return Z;
  hn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
  function R(v) {
    if (typeof v == "object" && v !== null) {
      var A = v.$$typeof;
      switch (A) {
        case t:
          switch (v = v.type, v) {
            case u:
            case d:
            case n:
            case i:
            case o:
            case g:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case c:
                case m:
                case y:
                case x:
                case a:
                  return v;
                default:
                  return A;
              }
          }
        case r:
          return A;
      }
    }
  }
  function E(v) {
    return R(v) === d;
  }
  return Z.AsyncMode = u, Z.ConcurrentMode = d, Z.ContextConsumer = c, Z.ContextProvider = a, Z.Element = t, Z.ForwardRef = m, Z.Fragment = n, Z.Lazy = y, Z.Memo = x, Z.Portal = r, Z.Profiler = i, Z.StrictMode = o, Z.Suspense = g, Z.isAsyncMode = function(v) {
    return E(v) || R(v) === u;
  }, Z.isConcurrentMode = E, Z.isContextConsumer = function(v) {
    return R(v) === c;
  }, Z.isContextProvider = function(v) {
    return R(v) === a;
  }, Z.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, Z.isForwardRef = function(v) {
    return R(v) === m;
  }, Z.isFragment = function(v) {
    return R(v) === n;
  }, Z.isLazy = function(v) {
    return R(v) === y;
  }, Z.isMemo = function(v) {
    return R(v) === x;
  }, Z.isPortal = function(v) {
    return R(v) === r;
  }, Z.isProfiler = function(v) {
    return R(v) === i;
  }, Z.isStrictMode = function(v) {
    return R(v) === o;
  }, Z.isSuspense = function(v) {
    return R(v) === g;
  }, Z.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === d || v === i || v === o || v === g || v === h || typeof v == "object" && v !== null && (v.$$typeof === y || v.$$typeof === x || v.$$typeof === a || v.$$typeof === c || v.$$typeof === m || v.$$typeof === S || v.$$typeof === C || v.$$typeof === k || v.$$typeof === l);
  }, Z.typeOf = R, Z;
}
var ee = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yn;
function oi() {
  return yn || (yn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, g = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, S = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
    function R(P) {
      return typeof P == "string" || typeof P == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      P === n || P === d || P === i || P === o || P === g || P === h || typeof P == "object" && P !== null && (P.$$typeof === y || P.$$typeof === x || P.$$typeof === a || P.$$typeof === c || P.$$typeof === m || P.$$typeof === S || P.$$typeof === C || P.$$typeof === k || P.$$typeof === l);
    }
    function E(P) {
      if (typeof P == "object" && P !== null) {
        var xe = P.$$typeof;
        switch (xe) {
          case t:
            var Ae = P.type;
            switch (Ae) {
              case u:
              case d:
              case n:
              case i:
              case o:
              case g:
                return Ae;
              default:
                var Ue = Ae && Ae.$$typeof;
                switch (Ue) {
                  case c:
                  case m:
                  case y:
                  case x:
                  case a:
                    return Ue;
                  default:
                    return xe;
                }
            }
          case r:
            return xe;
        }
      }
    }
    var v = u, A = d, I = c, G = a, te = t, s = m, O = n, N = y, B = x, W = r, le = i, oe = o, de = g, Ee = !1;
    function re(P) {
      return Ee || (Ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), w(P) || E(P) === u;
    }
    function w(P) {
      return E(P) === d;
    }
    function $(P) {
      return E(P) === c;
    }
    function z(P) {
      return E(P) === a;
    }
    function D(P) {
      return typeof P == "object" && P !== null && P.$$typeof === t;
    }
    function j(P) {
      return E(P) === m;
    }
    function U(P) {
      return E(P) === n;
    }
    function F(P) {
      return E(P) === y;
    }
    function V(P) {
      return E(P) === x;
    }
    function Y(P) {
      return E(P) === r;
    }
    function H(P) {
      return E(P) === i;
    }
    function q(P) {
      return E(P) === o;
    }
    function ye(P) {
      return E(P) === g;
    }
    ee.AsyncMode = v, ee.ConcurrentMode = A, ee.ContextConsumer = I, ee.ContextProvider = G, ee.Element = te, ee.ForwardRef = s, ee.Fragment = O, ee.Lazy = N, ee.Memo = B, ee.Portal = W, ee.Profiler = le, ee.StrictMode = oe, ee.Suspense = de, ee.isAsyncMode = re, ee.isConcurrentMode = w, ee.isContextConsumer = $, ee.isContextProvider = z, ee.isElement = D, ee.isForwardRef = j, ee.isFragment = U, ee.isLazy = F, ee.isMemo = V, ee.isPortal = Y, ee.isProfiler = H, ee.isStrictMode = q, ee.isSuspense = ye, ee.isValidElementType = R, ee.typeOf = E;
  }()), ee;
}
var bn;
function Ur() {
  return bn || (bn = 1, process.env.NODE_ENV === "production" ? Vt.exports = ni() : Vt.exports = oi()), Vt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Cr, vn;
function ii() {
  if (vn) return Cr;
  vn = 1;
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
      for (var a = {}, c = 0; c < 10; c++)
        a["_" + String.fromCharCode(c)] = c;
      var u = Object.getOwnPropertyNames(a).map(function(m) {
        return a[m];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        d[m] = m;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Cr = o() ? Object.assign : function(i, a) {
    for (var c, u = n(i), d, m = 1; m < arguments.length; m++) {
      c = Object(arguments[m]);
      for (var g in c)
        t.call(c, g) && (u[g] = c[g]);
      if (e) {
        d = e(c);
        for (var h = 0; h < d.length; h++)
          r.call(c, d[h]) && (u[d[h]] = c[d[h]]);
      }
    }
    return u;
  }, Cr;
}
var Tr, Sn;
function Yr() {
  if (Sn) return Tr;
  Sn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Tr = e, Tr;
}
var wr, En;
function so() {
  return En || (En = 1, wr = Function.call.bind(Object.prototype.hasOwnProperty)), wr;
}
var Or, xn;
function ai() {
  if (xn) return Or;
  xn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Yr(), r = {}, n = /* @__PURE__ */ so();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, c, u, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in i)
        if (n(i, m)) {
          var g;
          try {
            if (typeof i[m] != "function") {
              var h = Error(
                (u || "React class") + ": " + c + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            g = i[m](a, m, u, c, null, t);
          } catch (y) {
            g = y;
          }
          if (g && !(g instanceof Error) && e(
            (u || "React class") + ": type specification of " + c + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof g + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), g instanceof Error && !(g.message in r)) {
            r[g.message] = !0;
            var x = d ? d() : "";
            e(
              "Failed " + c + " type: " + g.message + (x ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Or = o, Or;
}
var Rr, Cn;
function si() {
  if (Cn) return Rr;
  Cn = 1;
  var e = Ur(), t = ii(), r = /* @__PURE__ */ Yr(), n = /* @__PURE__ */ so(), o = /* @__PURE__ */ ai(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var u = "Warning: " + c;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Rr = function(c, u) {
    var d = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function g(w) {
      var $ = w && (d && w[d] || w[m]);
      if (typeof $ == "function")
        return $;
    }
    var h = "<<anonymous>>", x = {
      array: C("array"),
      bigint: C("bigint"),
      bool: C("boolean"),
      func: C("function"),
      number: C("number"),
      object: C("object"),
      string: C("string"),
      symbol: C("symbol"),
      any: k(),
      arrayOf: R,
      element: E(),
      elementType: v(),
      instanceOf: A,
      node: s(),
      objectOf: G,
      oneOf: I,
      oneOfType: te,
      shape: N,
      exact: B
    };
    function y(w, $) {
      return w === $ ? w !== 0 || 1 / w === 1 / $ : w !== w && $ !== $;
    }
    function l(w, $) {
      this.message = w, this.data = $ && typeof $ == "object" ? $ : {}, this.stack = "";
    }
    l.prototype = Error.prototype;
    function S(w) {
      if (process.env.NODE_ENV !== "production")
        var $ = {}, z = 0;
      function D(U, F, V, Y, H, q, ye) {
        if (Y = Y || h, q = q || V, ye !== r) {
          if (u) {
            var P = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw P.name = "Invariant Violation", P;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var xe = Y + ":" + V;
            !$[xe] && // Avoid spamming the console because they are often not actionable except for lib authors
            z < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + Y + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), $[xe] = !0, z++);
          }
        }
        return F[V] == null ? U ? F[V] === null ? new l("The " + H + " `" + q + "` is marked as required " + ("in `" + Y + "`, but its value is `null`.")) : new l("The " + H + " `" + q + "` is marked as required in " + ("`" + Y + "`, but its value is `undefined`.")) : null : w(F, V, Y, H, q);
      }
      var j = D.bind(null, !1);
      return j.isRequired = D.bind(null, !0), j;
    }
    function C(w) {
      function $(z, D, j, U, F, V) {
        var Y = z[D], H = oe(Y);
        if (H !== w) {
          var q = de(Y);
          return new l(
            "Invalid " + U + " `" + F + "` of type " + ("`" + q + "` supplied to `" + j + "`, expected ") + ("`" + w + "`."),
            { expectedType: w }
          );
        }
        return null;
      }
      return S($);
    }
    function k() {
      return S(a);
    }
    function R(w) {
      function $(z, D, j, U, F) {
        if (typeof w != "function")
          return new l("Property `" + F + "` of component `" + j + "` has invalid PropType notation inside arrayOf.");
        var V = z[D];
        if (!Array.isArray(V)) {
          var Y = oe(V);
          return new l("Invalid " + U + " `" + F + "` of type " + ("`" + Y + "` supplied to `" + j + "`, expected an array."));
        }
        for (var H = 0; H < V.length; H++) {
          var q = w(V, H, j, U, F + "[" + H + "]", r);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return S($);
    }
    function E() {
      function w($, z, D, j, U) {
        var F = $[z];
        if (!c(F)) {
          var V = oe(F);
          return new l("Invalid " + j + " `" + U + "` of type " + ("`" + V + "` supplied to `" + D + "`, expected a single ReactElement."));
        }
        return null;
      }
      return S(w);
    }
    function v() {
      function w($, z, D, j, U) {
        var F = $[z];
        if (!e.isValidElementType(F)) {
          var V = oe(F);
          return new l("Invalid " + j + " `" + U + "` of type " + ("`" + V + "` supplied to `" + D + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return S(w);
    }
    function A(w) {
      function $(z, D, j, U, F) {
        if (!(z[D] instanceof w)) {
          var V = w.name || h, Y = re(z[D]);
          return new l("Invalid " + U + " `" + F + "` of type " + ("`" + Y + "` supplied to `" + j + "`, expected ") + ("instance of `" + V + "`."));
        }
        return null;
      }
      return S($);
    }
    function I(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function $(z, D, j, U, F) {
        for (var V = z[D], Y = 0; Y < w.length; Y++)
          if (y(V, w[Y]))
            return null;
        var H = JSON.stringify(w, function(ye, P) {
          var xe = de(P);
          return xe === "symbol" ? String(P) : P;
        });
        return new l("Invalid " + U + " `" + F + "` of value `" + String(V) + "` " + ("supplied to `" + j + "`, expected one of " + H + "."));
      }
      return S($);
    }
    function G(w) {
      function $(z, D, j, U, F) {
        if (typeof w != "function")
          return new l("Property `" + F + "` of component `" + j + "` has invalid PropType notation inside objectOf.");
        var V = z[D], Y = oe(V);
        if (Y !== "object")
          return new l("Invalid " + U + " `" + F + "` of type " + ("`" + Y + "` supplied to `" + j + "`, expected an object."));
        for (var H in V)
          if (n(V, H)) {
            var q = w(V, H, j, U, F + "." + H, r);
            if (q instanceof Error)
              return q;
          }
        return null;
      }
      return S($);
    }
    function te(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var $ = 0; $ < w.length; $++) {
        var z = w[$];
        if (typeof z != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Ee(z) + " at index " + $ + "."
          ), a;
      }
      function D(j, U, F, V, Y) {
        for (var H = [], q = 0; q < w.length; q++) {
          var ye = w[q], P = ye(j, U, F, V, Y, r);
          if (P == null)
            return null;
          P.data && n(P.data, "expectedType") && H.push(P.data.expectedType);
        }
        var xe = H.length > 0 ? ", expected one of type [" + H.join(", ") + "]" : "";
        return new l("Invalid " + V + " `" + Y + "` supplied to " + ("`" + F + "`" + xe + "."));
      }
      return S(D);
    }
    function s() {
      function w($, z, D, j, U) {
        return W($[z]) ? null : new l("Invalid " + j + " `" + U + "` supplied to " + ("`" + D + "`, expected a ReactNode."));
      }
      return S(w);
    }
    function O(w, $, z, D, j) {
      return new l(
        (w || "React class") + ": " + $ + " type `" + z + "." + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + j + "`."
      );
    }
    function N(w) {
      function $(z, D, j, U, F) {
        var V = z[D], Y = oe(V);
        if (Y !== "object")
          return new l("Invalid " + U + " `" + F + "` of type `" + Y + "` " + ("supplied to `" + j + "`, expected `object`."));
        for (var H in w) {
          var q = w[H];
          if (typeof q != "function")
            return O(j, U, F, H, de(q));
          var ye = q(V, H, j, U, F + "." + H, r);
          if (ye)
            return ye;
        }
        return null;
      }
      return S($);
    }
    function B(w) {
      function $(z, D, j, U, F) {
        var V = z[D], Y = oe(V);
        if (Y !== "object")
          return new l("Invalid " + U + " `" + F + "` of type `" + Y + "` " + ("supplied to `" + j + "`, expected `object`."));
        var H = t({}, z[D], w);
        for (var q in H) {
          var ye = w[q];
          if (n(w, q) && typeof ye != "function")
            return O(j, U, F, q, de(ye));
          if (!ye)
            return new l(
              "Invalid " + U + " `" + F + "` key `" + q + "` supplied to `" + j + "`.\nBad object: " + JSON.stringify(z[D], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(w), null, "  ")
            );
          var P = ye(V, q, j, U, F + "." + q, r);
          if (P)
            return P;
        }
        return null;
      }
      return S($);
    }
    function W(w) {
      switch (typeof w) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !w;
        case "object":
          if (Array.isArray(w))
            return w.every(W);
          if (w === null || c(w))
            return !0;
          var $ = g(w);
          if ($) {
            var z = $.call(w), D;
            if ($ !== w.entries) {
              for (; !(D = z.next()).done; )
                if (!W(D.value))
                  return !1;
            } else
              for (; !(D = z.next()).done; ) {
                var j = D.value;
                if (j && !W(j[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function le(w, $) {
      return w === "symbol" ? !0 : $ ? $["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && $ instanceof Symbol : !1;
    }
    function oe(w) {
      var $ = typeof w;
      return Array.isArray(w) ? "array" : w instanceof RegExp ? "object" : le($, w) ? "symbol" : $;
    }
    function de(w) {
      if (typeof w > "u" || w === null)
        return "" + w;
      var $ = oe(w);
      if ($ === "object") {
        if (w instanceof Date)
          return "date";
        if (w instanceof RegExp)
          return "regexp";
      }
      return $;
    }
    function Ee(w) {
      var $ = de(w);
      switch ($) {
        case "array":
        case "object":
          return "an " + $;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + $;
        default:
          return $;
      }
    }
    function re(w) {
      return !w.constructor || !w.constructor.name ? h : w.constructor.name;
    }
    return x.checkPropTypes = o, x.resetWarningCache = o.resetWarningCache, x.PropTypes = x, x;
  }, Rr;
}
var $r, Tn;
function ci() {
  if (Tn) return $r;
  Tn = 1;
  var e = /* @__PURE__ */ Yr();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, $r = function() {
    function n(a, c, u, d, m, g) {
      if (g !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
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
  }, $r;
}
var wn;
function li() {
  if (wn) return Ft.exports;
  if (wn = 1, process.env.NODE_ENV !== "production") {
    var e = Ur(), t = !0;
    Ft.exports = /* @__PURE__ */ si()(e.isElement, t);
  } else
    Ft.exports = /* @__PURE__ */ ci()();
  return Ft.exports;
}
var ui = /* @__PURE__ */ li();
const p = /* @__PURE__ */ Zo(ui);
function co(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = co(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Te() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = co(e)) && (n && (n += " "), n += t);
  return n;
}
function Zt(e, t) {
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
          for (const c in i)
            if (Object.prototype.hasOwnProperty.call(i, c)) {
              const u = c;
              r[o][u] = Zt(i[u], a[u]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
function _t(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let a = "", c = !0;
    for (let u = 0; u < i.length; u += 1) {
      const d = i[u];
      d && (a += (c === !0 ? "" : " ") + t(d), c = !1, r && r[d] && (a += " " + r[d]));
    }
    n[o] = a;
  }
  return n;
}
function Ke(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function fi(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function qr(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), fi(e, t, r);
}
function di(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Xe(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Xe(di(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Ke(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Ke(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const pi = (e) => {
  const t = Xe(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, wt = (e, t) => {
  try {
    return pi(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function sr(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function lo(e) {
  e = Xe(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (d, m = (d + r / 30) % 12) => o - i * Math.max(Math.min(m - 3, 9 - m, 1), -1);
  let c = "rgb";
  const u = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (c += "a", u.push(t[3])), sr({
    type: c,
    values: u
  });
}
function Nr(e) {
  e = Xe(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Xe(lo(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function On(e, t) {
  const r = Nr(e), n = Nr(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function He(e, t) {
  return e = Xe(e), t = qr(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, sr(e);
}
function Lt(e, t, r) {
  try {
    return He(e, t);
  } catch {
    return e;
  }
}
function Gr(e, t) {
  if (e = Xe(e), t = qr(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return sr(e);
}
function se(e, t, r) {
  try {
    return Gr(e, t);
  } catch {
    return e;
  }
}
function Hr(e, t) {
  if (e = Xe(e), t = qr(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return sr(e);
}
function ce(e, t, r) {
  try {
    return Hr(e, t);
  } catch {
    return e;
  }
}
function gi(e, t = 0.15) {
  return Nr(e) > 0.5 ? Gr(e, t) : Hr(e, t);
}
function Wt(e, t, r) {
  try {
    return gi(e, t);
  } catch {
    return e;
  }
}
function Kr(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
var Ut = { exports: {} }, ie = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rn;
function mi() {
  if (Rn) return ie;
  Rn = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), x = Symbol.for("react.client.reference");
  function y(l) {
    if (typeof l == "object" && l !== null) {
      var S = l.$$typeof;
      switch (S) {
        case e:
          switch (l = l.type, l) {
            case r:
            case o:
            case n:
            case u:
            case d:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case a:
                case c:
                case g:
                case m:
                  return l;
                case i:
                  return l;
                default:
                  return S;
              }
          }
        case t:
          return S;
      }
    }
  }
  return ie.ContextConsumer = i, ie.ContextProvider = a, ie.Element = e, ie.ForwardRef = c, ie.Fragment = r, ie.Lazy = g, ie.Memo = m, ie.Portal = t, ie.Profiler = o, ie.StrictMode = n, ie.Suspense = u, ie.SuspenseList = d, ie.isContextConsumer = function(l) {
    return y(l) === i;
  }, ie.isContextProvider = function(l) {
    return y(l) === a;
  }, ie.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === e;
  }, ie.isForwardRef = function(l) {
    return y(l) === c;
  }, ie.isFragment = function(l) {
    return y(l) === r;
  }, ie.isLazy = function(l) {
    return y(l) === g;
  }, ie.isMemo = function(l) {
    return y(l) === m;
  }, ie.isPortal = function(l) {
    return y(l) === t;
  }, ie.isProfiler = function(l) {
    return y(l) === o;
  }, ie.isStrictMode = function(l) {
    return y(l) === n;
  }, ie.isSuspense = function(l) {
    return y(l) === u;
  }, ie.isSuspenseList = function(l) {
    return y(l) === d;
  }, ie.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === r || l === o || l === n || l === u || l === d || l === h || typeof l == "object" && l !== null && (l.$$typeof === g || l.$$typeof === m || l.$$typeof === a || l.$$typeof === i || l.$$typeof === c || l.$$typeof === x || l.getModuleId !== void 0);
  }, ie.typeOf = y, ie;
}
var ae = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $n;
function hi() {
  return $n || ($n = 1, process.env.NODE_ENV !== "production" && function() {
    function e(l) {
      if (typeof l == "object" && l !== null) {
        var S = l.$$typeof;
        switch (S) {
          case t:
            switch (l = l.type, l) {
              case n:
              case i:
              case o:
              case d:
              case m:
                return l;
              default:
                switch (l = l && l.$$typeof, l) {
                  case c:
                  case u:
                  case h:
                  case g:
                    return l;
                  case a:
                    return l;
                  default:
                    return S;
                }
            }
          case r:
            return S;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), y = Symbol.for("react.client.reference");
    ae.ContextConsumer = a, ae.ContextProvider = c, ae.Element = t, ae.ForwardRef = u, ae.Fragment = n, ae.Lazy = h, ae.Memo = g, ae.Portal = r, ae.Profiler = i, ae.StrictMode = o, ae.Suspense = d, ae.SuspenseList = m, ae.isContextConsumer = function(l) {
      return e(l) === a;
    }, ae.isContextProvider = function(l) {
      return e(l) === c;
    }, ae.isElement = function(l) {
      return typeof l == "object" && l !== null && l.$$typeof === t;
    }, ae.isForwardRef = function(l) {
      return e(l) === u;
    }, ae.isFragment = function(l) {
      return e(l) === n;
    }, ae.isLazy = function(l) {
      return e(l) === h;
    }, ae.isMemo = function(l) {
      return e(l) === g;
    }, ae.isPortal = function(l) {
      return e(l) === r;
    }, ae.isProfiler = function(l) {
      return e(l) === i;
    }, ae.isStrictMode = function(l) {
      return e(l) === o;
    }, ae.isSuspense = function(l) {
      return e(l) === d;
    }, ae.isSuspenseList = function(l) {
      return e(l) === m;
    }, ae.isValidElementType = function(l) {
      return typeof l == "string" || typeof l == "function" || l === n || l === i || l === o || l === d || l === m || l === x || typeof l == "object" && l !== null && (l.$$typeof === h || l.$$typeof === g || l.$$typeof === c || l.$$typeof === a || l.$$typeof === u || l.$$typeof === y || l.getModuleId !== void 0);
    }, ae.typeOf = e;
  }()), ae;
}
var Pn;
function yi() {
  return Pn || (Pn = 1, process.env.NODE_ENV === "production" ? Ut.exports = /* @__PURE__ */ mi() : Ut.exports = /* @__PURE__ */ hi()), Ut.exports;
}
var er = /* @__PURE__ */ yi();
function Le(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function uo(e) {
  if (/* @__PURE__ */ _.isValidElement(e) || er.isValidElementType(e) || !Le(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = uo(e[r]);
  }), t;
}
function $e(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Le(e) && Le(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ _.isValidElement(t[o]) || er.isValidElementType(t[o]) ? n[o] = t[o] : Le(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Le(e[o]) ? n[o] = $e(e[o], t[o], r) : r.clone ? n[o] = Le(t[o]) ? uo(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
function bi(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function vi(e, t, r, n, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof i == "function" && !bi(i) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Si = Kr(p.elementType, vi);
function fo(e, t = "") {
  return e.displayName || e.name || t;
}
function An(e, t, r) {
  const n = fo(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Ei(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return fo(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case er.ForwardRef:
          return An(e, e.render, "ForwardRef");
        case er.Memo:
          return An(e, e.type, "memo");
        default:
          return;
      }
  }
}
const xi = p.oneOfType([p.func, p.object]);
function ne(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ke(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ci(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const Ti = typeof window < "u" ? _.useLayoutEffect : _.useEffect;
let kn = 0;
function wi(e) {
  const [t, r] = _.useState(e), n = e || t;
  return _.useEffect(() => {
    t == null && (kn += 1, r(`mui-${kn}`));
  }, [t]), n;
}
const Oi = {
  ..._
}, _n = Oi.useId;
function po(e) {
  if (_n !== void 0) {
    const t = _n();
    return e ?? t;
  }
  return wi(e);
}
function Ht(e) {
  const t = _.useRef(e);
  return Ti(() => {
    t.current = e;
  }), _.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function In(...e) {
  return _.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      Ci(r, t);
    });
  }, e);
}
const Nn = {};
function go(e, t) {
  const r = _.useRef(Nn);
  return r.current === Nn && (r.current = e(t)), r;
}
const Ri = [];
function $i(e) {
  _.useEffect(e, Ri);
}
class Xr {
  constructor() {
    St(this, "currentId", null);
    St(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    St(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new Xr();
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
function Pi() {
  const e = go(Xr.create).current;
  return $i(e.disposeEffect), e;
}
function Mn(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const Bn = (e) => e, Ai = () => {
  let e = Bn;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Bn;
    }
  };
}, ki = Ai(), _i = {
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
function rt(e, t, r = "Mui") {
  const n = _i[t];
  return n ? `${r}-${n}` : `${ki.generate(e)}-${t}`;
}
function mt(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = rt(e, o, r);
  }), n;
}
function Rt(e, t) {
  return t ? $e(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Je = process.env.NODE_ENV !== "production" ? p.oneOfType([p.number, p.string, p.object, p.array]) : {};
function Ii(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((n) => n.startsWith("@container")).sort((n, o) => {
    var a, c;
    const i = /min-width:\s*([0-9.]+)/;
    return +(((a = n.match(i)) == null ? void 0 : a[1]) || 0) - +(((c = o.match(i)) == null ? void 0 : c[1]) || 0);
  });
  return r.length ? r.reduce((n, o) => {
    const i = t[o];
    return delete n[o], n[o] = i, n;
  }, {
    ...t
  }) : t;
}
function Ni(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function Mi(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : Ke(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function Bi(e) {
  const t = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function r(i, a) {
    i.up = (...c) => t(e.breakpoints.up(...c), a), i.down = (...c) => t(e.breakpoints.down(...c), a), i.between = (...c) => t(e.breakpoints.between(...c), a), i.only = (...c) => t(e.breakpoints.only(...c), a), i.not = (...c) => {
      const u = t(e.breakpoints.not(...c), a);
      return u.includes("not all and") ? u.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : u;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const cr = {
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
}, jn = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${cr[e]}px)`
}, ji = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : cr[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function We(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || jn;
    return t.reduce((a, c, u) => (a[i.up(i.keys[u])] = r(t[u]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || jn;
    return Object.keys(t).reduce((a, c) => {
      if (Ni(i.keys, c)) {
        const u = Mi(n.containerQueries ? n : ji, c);
        u && (a[u] = r(t[c], c));
      } else if (Object.keys(i.values || cr).includes(c)) {
        const u = i.up(c);
        a[u] = r(t[c], c);
      } else {
        const u = c;
        a[u] = t[u];
      }
      return a;
    }, {});
  }
  return r(t);
}
function zi(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Di(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function lr(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function tr(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = lr(e, r) || n, t && (o = t(o, n, e)), o;
}
function me(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const c = a[t], u = a.theme, d = lr(u, n) || {};
    return We(a, c, (g) => {
      let h = tr(d, o, g);
      return g === h && typeof g == "string" && (h = tr(d, o, `${t}${g === "default" ? "" : ne(g)}`, g)), r === !1 ? h : {
        [r]: h
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Je
  } : {}, i.filterProps = [t], i;
}
function Fi(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const Vi = {
  m: "margin",
  p: "padding"
}, Li = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, zn = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Wi = Fi((e) => {
  if (e.length > 2)
    if (zn[e])
      e = zn[e];
    else
      return [e];
  const [t, r] = e.split(""), n = Vi[t], o = Li[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), ur = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], fr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Ui = [...ur, ...fr];
function It(e, t, r, n) {
  const o = lr(e, t, !0) ?? r;
  return typeof o == "number" || typeof o == "string" ? (i) => typeof i == "string" ? i : (process.env.NODE_ENV !== "production" && typeof i != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${i}.`), typeof o == "string" ? `calc(${i} * ${o})` : o * i) : Array.isArray(o) ? (i) => {
    if (typeof i == "string")
      return i;
    const a = Math.abs(i);
    process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > o.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(o)}.`, `${a} > ${o.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${t}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${t}\` as a number.`].join(`
`)));
    const c = o[a];
    return i >= 0 ? c : typeof c == "number" ? -c : `-${c}`;
  } : typeof o == "function" ? o : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${t}\` value (${o}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function Jr(e) {
  return It(e, "spacing", 8, "spacing");
}
function Nt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Yi(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Nt(t, r), n), {});
}
function qi(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = Wi(r), i = Yi(o, n), a = e[r];
  return We(e, a, i);
}
function mo(e, t) {
  const r = Jr(e.theme);
  return Object.keys(e).map((n) => qi(e, t, n, r)).reduce(Rt, {});
}
function pe(e) {
  return mo(e, ur);
}
pe.propTypes = process.env.NODE_ENV !== "production" ? ur.reduce((e, t) => (e[t] = Je, e), {}) : {};
pe.filterProps = ur;
function ge(e) {
  return mo(e, fr);
}
ge.propTypes = process.env.NODE_ENV !== "production" ? fr.reduce((e, t) => (e[t] = Je, e), {}) : {};
ge.filterProps = fr;
process.env.NODE_ENV !== "production" && Ui.reduce((e, t) => (e[t] = Je, e), {});
function dr(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? Rt(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function _e(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Ie(e, t) {
  return me({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Gi = Ie("border", _e), Hi = Ie("borderTop", _e), Ki = Ie("borderRight", _e), Xi = Ie("borderBottom", _e), Ji = Ie("borderLeft", _e), Qi = Ie("borderColor"), Zi = Ie("borderTopColor"), ea = Ie("borderRightColor"), ta = Ie("borderBottomColor"), ra = Ie("borderLeftColor"), na = Ie("outline", _e), oa = Ie("outlineColor"), pr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = It(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Nt(t, n)
    });
    return We(e, e.borderRadius, r);
  }
  return null;
};
pr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Je
} : {};
pr.filterProps = ["borderRadius"];
dr(Gi, Hi, Ki, Xi, Ji, Qi, Zi, ea, ta, ra, pr, na, oa);
const gr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = It(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Nt(t, n)
    });
    return We(e, e.gap, r);
  }
  return null;
};
gr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Je
} : {};
gr.filterProps = ["gap"];
const mr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = It(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Nt(t, n)
    });
    return We(e, e.columnGap, r);
  }
  return null;
};
mr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Je
} : {};
mr.filterProps = ["columnGap"];
const hr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = It(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Nt(t, n)
    });
    return We(e, e.rowGap, r);
  }
  return null;
};
hr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Je
} : {};
hr.filterProps = ["rowGap"];
const ia = me({
  prop: "gridColumn"
}), aa = me({
  prop: "gridRow"
}), sa = me({
  prop: "gridAutoFlow"
}), ca = me({
  prop: "gridAutoColumns"
}), la = me({
  prop: "gridAutoRows"
}), ua = me({
  prop: "gridTemplateColumns"
}), fa = me({
  prop: "gridTemplateRows"
}), da = me({
  prop: "gridTemplateAreas"
}), pa = me({
  prop: "gridArea"
});
dr(gr, mr, hr, ia, aa, sa, ca, la, ua, fa, da, pa);
function ut(e, t) {
  return t === "grey" ? t : e;
}
const ga = me({
  prop: "color",
  themeKey: "palette",
  transform: ut
}), ma = me({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: ut
}), ha = me({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: ut
});
dr(ga, ma, ha);
function Re(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const ya = me({
  prop: "width",
  transform: Re
}), Qr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, a, c, u;
      const n = ((a = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : a[r]) || cr[r];
      return n ? ((u = (c = e.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : u.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: Re(r)
      };
    };
    return We(e, e.maxWidth, t);
  }
  return null;
};
Qr.filterProps = ["maxWidth"];
const ba = me({
  prop: "minWidth",
  transform: Re
}), va = me({
  prop: "height",
  transform: Re
}), Sa = me({
  prop: "maxHeight",
  transform: Re
}), Ea = me({
  prop: "minHeight",
  transform: Re
});
me({
  prop: "size",
  cssProperty: "width",
  transform: Re
});
me({
  prop: "size",
  cssProperty: "height",
  transform: Re
});
const xa = me({
  prop: "boxSizing"
});
dr(ya, Qr, ba, va, Sa, Ea, xa);
const yr = {
  // borders
  border: {
    themeKey: "borders",
    transform: _e
  },
  borderTop: {
    themeKey: "borders",
    transform: _e
  },
  borderRight: {
    themeKey: "borders",
    transform: _e
  },
  borderBottom: {
    themeKey: "borders",
    transform: _e
  },
  borderLeft: {
    themeKey: "borders",
    transform: _e
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
    transform: _e
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: pr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: ut
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: ut
  },
  backgroundColor: {
    themeKey: "palette",
    transform: ut
  },
  // spacing
  p: {
    style: ge
  },
  pt: {
    style: ge
  },
  pr: {
    style: ge
  },
  pb: {
    style: ge
  },
  pl: {
    style: ge
  },
  px: {
    style: ge
  },
  py: {
    style: ge
  },
  padding: {
    style: ge
  },
  paddingTop: {
    style: ge
  },
  paddingRight: {
    style: ge
  },
  paddingBottom: {
    style: ge
  },
  paddingLeft: {
    style: ge
  },
  paddingX: {
    style: ge
  },
  paddingY: {
    style: ge
  },
  paddingInline: {
    style: ge
  },
  paddingInlineStart: {
    style: ge
  },
  paddingInlineEnd: {
    style: ge
  },
  paddingBlock: {
    style: ge
  },
  paddingBlockStart: {
    style: ge
  },
  paddingBlockEnd: {
    style: ge
  },
  m: {
    style: pe
  },
  mt: {
    style: pe
  },
  mr: {
    style: pe
  },
  mb: {
    style: pe
  },
  ml: {
    style: pe
  },
  mx: {
    style: pe
  },
  my: {
    style: pe
  },
  margin: {
    style: pe
  },
  marginTop: {
    style: pe
  },
  marginRight: {
    style: pe
  },
  marginBottom: {
    style: pe
  },
  marginLeft: {
    style: pe
  },
  marginX: {
    style: pe
  },
  marginY: {
    style: pe
  },
  marginInline: {
    style: pe
  },
  marginInlineStart: {
    style: pe
  },
  marginInlineEnd: {
    style: pe
  },
  marginBlock: {
    style: pe
  },
  marginBlockStart: {
    style: pe
  },
  marginBlockEnd: {
    style: pe
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
    style: gr
  },
  rowGap: {
    style: hr
  },
  columnGap: {
    style: mr
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
    transform: Re
  },
  maxWidth: {
    style: Qr
  },
  minWidth: {
    transform: Re
  },
  height: {
    transform: Re
  },
  maxHeight: {
    transform: Re
  },
  minHeight: {
    transform: Re
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
function Ca(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Ta(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function wa() {
  function e(r, n, o, i) {
    const a = {
      [r]: n,
      theme: o
    }, c = i[r];
    if (!c)
      return {
        [r]: n
      };
    const {
      cssProperty: u = r,
      themeKey: d,
      transform: m,
      style: g
    } = c;
    if (n == null)
      return null;
    if (d === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const h = lr(o, d) || {};
    return g ? g(a) : We(a, n, (y) => {
      let l = tr(h, m, y);
      return y === l && typeof y == "string" && (l = tr(h, m, `${r}${y === "default" ? "" : ne(y)}`, y)), u === !1 ? l : {
        [u]: l
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
    const i = o.unstable_sxConfig ?? yr;
    function a(c) {
      let u = c;
      if (typeof c == "function")
        u = c(o);
      else if (typeof c != "object")
        return c;
      if (!u)
        return null;
      const d = zi(o.breakpoints), m = Object.keys(d);
      let g = d;
      return Object.keys(u).forEach((h) => {
        const x = Ta(u[h], o);
        if (x != null)
          if (typeof x == "object")
            if (i[h])
              g = Rt(g, e(h, x, o, i));
            else {
              const y = We({
                theme: o
              }, x, (l) => ({
                [h]: l
              }));
              Ca(y, x) ? g[h] = t({
                sx: x,
                theme: o
              }) : g = Rt(g, y);
            }
          else
            g = Rt(g, e(h, x, o, i));
      }), Ii(o, Di(m, g));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return t;
}
const dt = wa();
dt.filterProps = ["sx"];
function rr() {
  return rr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, rr.apply(null, arguments);
}
function Oa(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Ra(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var $a = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Ra(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Oa(o);
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
}(), Se = "-ms-", nr = "-moz-", J = "-webkit-", ho = "comm", Zr = "rule", en = "decl", Pa = "@import", yo = "@keyframes", Aa = "@layer", ka = Math.abs, br = String.fromCharCode, _a = Object.assign;
function Ia(e, t) {
  return be(e, 0) ^ 45 ? (((t << 2 ^ be(e, 0)) << 2 ^ be(e, 1)) << 2 ^ be(e, 2)) << 2 ^ be(e, 3) : 0;
}
function bo(e) {
  return e.trim();
}
function Na(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Q(e, t, r) {
  return e.replace(t, r);
}
function Mr(e, t) {
  return e.indexOf(t);
}
function be(e, t) {
  return e.charCodeAt(t) | 0;
}
function $t(e, t, r) {
  return e.slice(t, r);
}
function Me(e) {
  return e.length;
}
function tn(e) {
  return e.length;
}
function Yt(e, t) {
  return t.push(e), e;
}
function Ma(e, t) {
  return e.map(t).join("");
}
var vr = 1, pt = 1, vo = 0, we = 0, he = 0, ht = "";
function Sr(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: vr, column: pt, length: a, return: "" };
}
function Ct(e, t) {
  return _a(Sr("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Ba() {
  return he;
}
function ja() {
  return he = we > 0 ? be(ht, --we) : 0, pt--, he === 10 && (pt = 1, vr--), he;
}
function Pe() {
  return he = we < vo ? be(ht, we++) : 0, pt++, he === 10 && (pt = 1, vr++), he;
}
function je() {
  return be(ht, we);
}
function Kt() {
  return we;
}
function Mt(e, t) {
  return $t(ht, e, t);
}
function Pt(e) {
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
function So(e) {
  return vr = pt = 1, vo = Me(ht = e), we = 0, [];
}
function Eo(e) {
  return ht = "", e;
}
function Xt(e) {
  return bo(Mt(we - 1, Br(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function za(e) {
  for (; (he = je()) && he < 33; )
    Pe();
  return Pt(e) > 2 || Pt(he) > 3 ? "" : " ";
}
function Da(e, t) {
  for (; --t && Pe() && !(he < 48 || he > 102 || he > 57 && he < 65 || he > 70 && he < 97); )
    ;
  return Mt(e, Kt() + (t < 6 && je() == 32 && Pe() == 32));
}
function Br(e) {
  for (; Pe(); )
    switch (he) {
      // ] ) " '
      case e:
        return we;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Br(he);
        break;
      // (
      case 40:
        e === 41 && Br(e);
        break;
      // \
      case 92:
        Pe();
        break;
    }
  return we;
}
function Fa(e, t) {
  for (; Pe() && e + he !== 57; )
    if (e + he === 84 && je() === 47)
      break;
  return "/*" + Mt(t, we - 1) + "*" + br(e === 47 ? e : Pe());
}
function Va(e) {
  for (; !Pt(je()); )
    Pe();
  return Mt(e, we);
}
function La(e) {
  return Eo(Jt("", null, null, null, [""], e = So(e), 0, [0], e));
}
function Jt(e, t, r, n, o, i, a, c, u) {
  for (var d = 0, m = 0, g = a, h = 0, x = 0, y = 0, l = 1, S = 1, C = 1, k = 0, R = "", E = o, v = i, A = n, I = R; S; )
    switch (y = k, k = Pe()) {
      // (
      case 40:
        if (y != 108 && be(I, g - 1) == 58) {
          Mr(I += Q(Xt(k), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        I += Xt(k);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        I += za(y);
        break;
      // \
      case 92:
        I += Da(Kt() - 1, 7);
        continue;
      // /
      case 47:
        switch (je()) {
          case 42:
          case 47:
            Yt(Wa(Fa(Pe(), Kt()), t, r), u);
            break;
          default:
            I += "/";
        }
        break;
      // {
      case 123 * l:
        c[d++] = Me(I) * C;
      // } ; \0
      case 125 * l:
      case 59:
      case 0:
        switch (k) {
          // \0 }
          case 0:
          case 125:
            S = 0;
          // ;
          case 59 + m:
            C == -1 && (I = Q(I, /\f/g, "")), x > 0 && Me(I) - g && Yt(x > 32 ? Fn(I + ";", n, r, g - 1) : Fn(Q(I, " ", "") + ";", n, r, g - 2), u);
            break;
          // @ ;
          case 59:
            I += ";";
          // { rule/at-rule
          default:
            if (Yt(A = Dn(I, t, r, d, m, o, c, R, E = [], v = [], g), i), k === 123)
              if (m === 0)
                Jt(I, t, A, A, E, i, g, c, v);
              else
                switch (h === 99 && be(I, 3) === 110 ? 100 : h) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Jt(e, A, A, n && Yt(Dn(e, A, A, 0, 0, o, c, R, o, E = [], g), v), o, v, g, c, n ? E : v);
                    break;
                  default:
                    Jt(I, A, A, A, [""], v, 0, c, v);
                }
        }
        d = m = x = 0, l = C = 1, R = I = "", g = a;
        break;
      // :
      case 58:
        g = 1 + Me(I), x = y;
      default:
        if (l < 1) {
          if (k == 123)
            --l;
          else if (k == 125 && l++ == 0 && ja() == 125)
            continue;
        }
        switch (I += br(k), k * l) {
          // &
          case 38:
            C = m > 0 ? 1 : (I += "\f", -1);
            break;
          // ,
          case 44:
            c[d++] = (Me(I) - 1) * C, C = 1;
            break;
          // @
          case 64:
            je() === 45 && (I += Xt(Pe())), h = je(), m = g = Me(R = I += Va(Kt())), k++;
            break;
          // -
          case 45:
            y === 45 && Me(I) == 2 && (l = 0);
        }
    }
  return i;
}
function Dn(e, t, r, n, o, i, a, c, u, d, m) {
  for (var g = o - 1, h = o === 0 ? i : [""], x = tn(h), y = 0, l = 0, S = 0; y < n; ++y)
    for (var C = 0, k = $t(e, g + 1, g = ka(l = a[y])), R = e; C < x; ++C)
      (R = bo(l > 0 ? h[C] + " " + k : Q(k, /&\f/g, h[C]))) && (u[S++] = R);
  return Sr(e, t, r, o === 0 ? Zr : c, u, d, m);
}
function Wa(e, t, r) {
  return Sr(e, t, r, ho, br(Ba()), $t(e, 2, -2), 0);
}
function Fn(e, t, r, n) {
  return Sr(e, t, r, en, $t(e, 0, n), $t(e, n + 1, -1), n);
}
function ft(e, t) {
  for (var r = "", n = tn(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function Ua(e, t, r, n) {
  switch (e.type) {
    case Aa:
      if (e.children.length) break;
    case Pa:
    case en:
      return e.return = e.return || e.value;
    case ho:
      return "";
    case yo:
      return e.return = e.value + "{" + ft(e.children, n) + "}";
    case Zr:
      e.value = e.props.join(",");
  }
  return Me(r = ft(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Ya(e) {
  var t = tn(e);
  return function(r, n, o, i) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](r, n, o, i) || "";
    return a;
  };
}
function qa(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function xo(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Ga = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = je(), o === 38 && i === 12 && (r[n] = 1), !Pt(i); )
    Pe();
  return Mt(t, we);
}, Ha = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Pt(o)) {
      case 0:
        o === 38 && je() === 12 && (r[n] = 1), t[n] += Ga(we - 1, r, n);
        break;
      case 2:
        t[n] += Xt(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = je() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      // fallthrough
      default:
        t[n] += br(o);
    }
  while (o = Pe());
  return t;
}, Ka = function(t, r) {
  return Eo(Ha(So(t), r));
}, Vn = /* @__PURE__ */ new WeakMap(), Xa = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Vn.get(n)) && !o) {
      Vn.set(t, !0);
      for (var i = [], a = Ka(r, i), c = n.props, u = 0, d = 0; u < a.length; u++)
        for (var m = 0; m < c.length; m++, d++)
          t.props[d] = i[u] ? a[u].replace(/&\f/g, c[m]) : c[m] + " " + a[u];
    }
  }
}, Ja = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Co(e, t) {
  switch (Ia(e, t)) {
    // color-adjust
    case 5103:
      return J + "print-" + e + e;
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
      return J + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return J + e + nr + e + Se + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return J + e + Se + e + e;
    // order
    case 6165:
      return J + e + Se + "flex-" + e + e;
    // align-items
    case 5187:
      return J + e + Q(e, /(\w+).+(:[^]+)/, J + "box-$1$2" + Se + "flex-$1$2") + e;
    // align-self
    case 5443:
      return J + e + Se + "flex-item-" + Q(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return J + e + Se + "flex-line-pack" + Q(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return J + e + Se + Q(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return J + e + Se + Q(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return J + "box-" + Q(e, "-grow", "") + J + e + Se + Q(e, "grow", "positive") + e;
    // transition
    case 4554:
      return J + Q(e, /([^-])(transform)/g, "$1" + J + "$2") + e;
    // cursor
    case 6187:
      return Q(Q(Q(e, /(zoom-|grab)/, J + "$1"), /(image-set)/, J + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return Q(e, /(image-set\([^]*)/, J + "$1$`$1");
    // justify-content
    case 4968:
      return Q(Q(e, /(.+:)(flex-)?(.*)/, J + "box-pack:$3" + Se + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + J + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Q(e, /(.+)-inline(.+)/, J + "$1$2") + e;
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
      if (Me(e) - 1 - t > 6) switch (be(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (be(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return Q(e, /(.+:)(.+)-([^]+)/, "$1" + J + "$2-$3$1" + nr + (be(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~Mr(e, "stretch") ? Co(Q(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (be(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (be(e, Me(e) - 3 - (~Mr(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return Q(e, ":", ":" + J) + e;
        // (inline-)?fl(e)x
        case 101:
          return Q(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + J + (be(e, 14) === 45 ? "inline-" : "") + "box$3$1" + J + "$2$3$1" + Se + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (be(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return J + e + Se + Q(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return J + e + Se + Q(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return J + e + Se + Q(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return J + e + Se + e + e;
  }
  return e;
}
var Qa = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case en:
      t.return = Co(t.value, t.length);
      break;
    case yo:
      return ft([Ct(t, {
        value: Q(t.value, "@", "@" + J)
      })], o);
    case Zr:
      if (t.length) return Ma(t.props, function(i) {
        switch (Na(i, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return ft([Ct(t, {
              props: [Q(i, /:(read-\w+)/, ":" + nr + "$1")]
            })], o);
          // :placeholder
          case "::placeholder":
            return ft([Ct(t, {
              props: [Q(i, /:(plac\w+)/, ":" + J + "input-$1")]
            }), Ct(t, {
              props: [Q(i, /:(plac\w+)/, ":" + nr + "$1")]
            }), Ct(t, {
              props: [Q(i, /:(plac\w+)/, Se + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Za = [Qa], es = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(l) {
      var S = l.getAttribute("data-emotion");
      S.indexOf(" ") !== -1 && (document.head.appendChild(l), l.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Za, i = {}, a, c = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(l) {
      for (var S = l.getAttribute("data-emotion").split(" "), C = 1; C < S.length; C++)
        i[S[C]] = !0;
      c.push(l);
    }
  );
  var u, d = [Xa, Ja];
  {
    var m, g = [Ua, qa(function(l) {
      m.insert(l);
    })], h = Ya(d.concat(o, g)), x = function(S) {
      return ft(La(S), h);
    };
    u = function(S, C, k, R) {
      m = k, x(S ? S + "{" + C.styles + "}" : C.styles), R && (y.inserted[C.name] = !0);
    };
  }
  var y = {
    key: r,
    sheet: new $a({
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
    insert: u
  };
  return y.sheet.hydrate(c), y;
}, Pr, Ln;
function ts() {
  if (Ln) return Pr;
  Ln = 1;
  var e = Ur(), t = {
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
  function a(y) {
    return e.isMemo(y) ? o : i[y.$$typeof] || t;
  }
  var c = Object.defineProperty, u = Object.getOwnPropertyNames, d = Object.getOwnPropertySymbols, m = Object.getOwnPropertyDescriptor, g = Object.getPrototypeOf, h = Object.prototype;
  function x(y, l, S) {
    if (typeof l != "string") {
      if (h) {
        var C = g(l);
        C && C !== h && x(y, C, S);
      }
      var k = u(l);
      d && (k = k.concat(d(l)));
      for (var R = a(y), E = a(l), v = 0; v < k.length; ++v) {
        var A = k[v];
        if (!r[A] && !(S && S[A]) && !(E && E[A]) && !(R && R[A])) {
          var I = m(l, A);
          try {
            c(y, A, I);
          } catch {
          }
        }
      }
    }
    return y;
  }
  return Pr = x, Pr;
}
ts();
var rs = !0;
function To(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var rn = function(t, r, n) {
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
  rs === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, wo = function(t, r, n) {
  rn(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function ns(e) {
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
var os = {
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
}, is = /[A-Z]|^ms/g, as = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Oo = function(t) {
  return t.charCodeAt(1) === 45;
}, Wn = function(t) {
  return t != null && typeof t != "boolean";
}, Ar = /* @__PURE__ */ xo(function(e) {
  return Oo(e) ? e : e.replace(is, "-$&").toLowerCase();
}), Un = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(as, function(n, o, i) {
          return Be = {
            name: o,
            styles: i,
            next: Be
          }, o;
        });
  }
  return os[t] !== 1 && !Oo(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function At(e, t, r) {
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
        return Be = {
          name: o.name,
          styles: o.styles,
          next: Be
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Be = {
              name: a.name,
              styles: a.styles,
              next: Be
            }, a = a.next;
        var c = i.styles + ";";
        return c;
      }
      return ss(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var u = Be, d = r(e);
        return Be = u, At(e, t, d);
      }
      break;
    }
  }
  var m = r;
  if (t == null)
    return m;
  var g = t[m];
  return g !== void 0 ? g : m;
}
function ss(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += At(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object") {
        var c = a;
        t != null && t[c] !== void 0 ? n += i + "{" + t[c] + "}" : Wn(c) && (n += Ar(i) + ":" + Un(i, c) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var u = 0; u < a.length; u++)
          Wn(a[u]) && (n += Ar(i) + ":" + Un(i, a[u]) + ";");
      else {
        var d = At(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            n += Ar(i) + ":" + d + ";";
            break;
          }
          default:
            n += i + "{" + d + "}";
        }
      }
    }
  return n;
}
var Yn = /label:\s*([^\s;{]+)\s*(;|$)/g, Be;
function Er(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Be = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += At(r, t, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var c = 1; c < e.length; c++)
    if (o += At(r, t, e[c]), n) {
      var u = i;
      o += u[c];
    }
  Yn.lastIndex = 0;
  for (var d = "", m; (m = Yn.exec(o)) !== null; )
    d += "-" + m[1];
  var g = ns(o) + d;
  return {
    name: g,
    styles: o,
    next: Be
  };
}
var cs = function(t) {
  return t();
}, ls = _.useInsertionEffect ? _.useInsertionEffect : !1, Ro = ls || cs, $o = /* @__PURE__ */ _.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ es({
    key: "css"
  }) : null
);
$o.Provider;
var Po = function(t) {
  return /* @__PURE__ */ Xo(function(r, n) {
    var o = Jo($o);
    return t(r, o, n);
  });
}, Ao = /* @__PURE__ */ _.createContext({}), nn = {}.hasOwnProperty, jr = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", us = function(t, r) {
  var n = {};
  for (var o in r)
    nn.call(r, o) && (n[o] = r[o]);
  return n[jr] = t, n;
}, fs = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return rn(r, n, o), Ro(function() {
    return wo(r, n, o);
  }), null;
}, ds = /* @__PURE__ */ Po(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[jr], i = [n], a = "";
  typeof e.className == "string" ? a = To(t.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var c = Er(i, void 0, _.useContext(Ao));
  a += t.key + "-" + c.name;
  var u = {};
  for (var d in e)
    nn.call(e, d) && d !== "css" && d !== jr && (u[d] = e[d]);
  return u.className = a, r && (u.ref = r), /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement(fs, {
    cache: t,
    serialized: c,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ _.createElement(o, u));
}), ps = ds, gs = function(t, r) {
  var n = arguments;
  if (r == null || !nn.call(r, "css"))
    return _.createElement.apply(void 0, n);
  var o = n.length, i = new Array(o);
  i[0] = ps, i[1] = us(t, r);
  for (var a = 2; a < o; a++)
    i[a] = n[a];
  return _.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(gs);
function on() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Er(t);
}
function Bt() {
  var e = on.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var ms = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, hs = /* @__PURE__ */ xo(
  function(e) {
    return ms.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ys = hs, bs = function(t) {
  return t !== "theme";
}, qn = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? ys : bs;
}, Gn = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, vs = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return rn(r, n, o), Ro(function() {
    return wo(r, n, o);
  }), null;
}, Ss = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var c = Gn(t, r, n), u = c || qn(o), d = !u("as");
  return function() {
    var m = arguments, g = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && g.push("label:" + i + ";"), m[0] == null || m[0].raw === void 0)
      g.push.apply(g, m);
    else {
      var h = m[0];
      g.push(h[0]);
      for (var x = m.length, y = 1; y < x; y++)
        g.push(m[y], h[y]);
    }
    var l = Po(function(S, C, k) {
      var R = d && S.as || o, E = "", v = [], A = S;
      if (S.theme == null) {
        A = {};
        for (var I in S)
          A[I] = S[I];
        A.theme = _.useContext(Ao);
      }
      typeof S.className == "string" ? E = To(C.registered, v, S.className) : S.className != null && (E = S.className + " ");
      var G = Er(g.concat(v), C.registered, A);
      E += C.key + "-" + G.name, a !== void 0 && (E += " " + a);
      var te = d && c === void 0 ? qn(R) : u, s = {};
      for (var O in S)
        d && O === "as" || te(O) && (s[O] = S[O]);
      return s.className = E, k && (s.ref = k), /* @__PURE__ */ _.createElement(_.Fragment, null, /* @__PURE__ */ _.createElement(vs, {
        cache: C,
        serialized: G,
        isStringTag: typeof R == "string"
      }), /* @__PURE__ */ _.createElement(R, s));
    });
    return l.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", l.defaultProps = t.defaultProps, l.__emotion_real = l, l.__emotion_base = o, l.__emotion_styles = g, l.__emotion_forwardProp = c, Object.defineProperty(l, "toString", {
      value: function() {
        return "." + a;
      }
    }), l.withComponent = function(S, C) {
      var k = e(S, rr({}, r, C, {
        shouldForwardProp: Gn(l, C, !0)
      }));
      return k.apply(void 0, g);
    }, l;
  };
}, Es = [
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
], zr = Ss.bind(null);
Es.forEach(function(e) {
  zr[e] = zr(e);
});
/**
 * @mui/styled-engine v6.4.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function xs(e, t) {
  const r = zr(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function Cs(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Hn = [];
function Kn(e) {
  return Hn[0] = e, Er(Hn);
}
const Ts = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function ws(e) {
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
  } = e, i = Ts(t), a = Object.keys(i);
  function c(h) {
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r})`;
  }
  function u(h) {
    return `@media (max-width:${(typeof t[h] == "number" ? t[h] : h) - n / 100}${r})`;
  }
  function d(h, x) {
    const y = a.indexOf(x);
    return `@media (min-width:${typeof t[h] == "number" ? t[h] : h}${r}) and (max-width:${(y !== -1 && typeof t[a[y]] == "number" ? t[a[y]] : x) - n / 100}${r})`;
  }
  function m(h) {
    return a.indexOf(h) + 1 < a.length ? d(h, a[a.indexOf(h) + 1]) : c(h);
  }
  function g(h) {
    const x = a.indexOf(h);
    return x === 0 ? c(a[1]) : x === a.length - 1 ? u(a[x]) : d(h, a[a.indexOf(h) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: c,
    down: u,
    between: d,
    only: m,
    not: g,
    unit: r,
    ...o
  };
}
const Os = {
  borderRadius: 4
};
function ko(e = 8, t = Jr({
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
function Rs(e, t) {
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
function _o(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...a
  } = e, c = ws(r), u = ko(o);
  let d = $e({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: u,
    shape: {
      ...Os,
      ...i
    }
  }, a);
  return d = Bi(d), d.applyStyles = Rs, d = t.reduce((m, g) => $e(m, g), d), d.unstable_sxConfig = {
    ...yr,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, d.unstable_sx = function(g) {
    return dt({
      sx: g,
      theme: this
    });
  }, d;
}
function Io(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: Kn(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Kn(o.style));
  }), n;
}
const $s = _o();
function kr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Ps(e) {
  return e ? (t, r) => r[e] : null;
}
function As(e, t, r) {
  e.theme = Ns(e.theme) ? r : e.theme[t] || e.theme;
}
function Qt(e, t) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((n) => Qt(e, n));
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
    return No(e, r.variants, [n]);
  }
  return r != null && r.isProcessed ? r.style : r;
}
function No(e, t, r = []) {
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
      for (const c in a.props)
        if (e[c] !== a.props[c] && ((o = e.ownerState) == null ? void 0 : o[c]) !== a.props[c])
          continue e;
    typeof a.style == "function" ? (n ?? (n = {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }), r.push(a.style(n))) : r.push(a.style);
  }
  return r;
}
function ks(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = $s,
    rootShouldForwardProp: n = kr,
    slotShouldForwardProp: o = kr
  } = e;
  function i(c) {
    As(c, t, r);
  }
  return (c, u = {}) => {
    Cs(c, (v) => v.filter((A) => A !== dt));
    const {
      name: d,
      slot: m,
      skipVariantsResolver: g,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: x = Ps(Mo(m)),
      ...y
    } = u, l = g !== void 0 ? g : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      m && m !== "Root" && m !== "root" || !1
    ), S = h || !1;
    let C = kr;
    m === "Root" || m === "root" ? C = n : m ? C = o : Ms(c) && (C = void 0);
    const k = xs(c, {
      shouldForwardProp: C,
      label: Is(d, m),
      ...y
    }), R = (v) => {
      if (typeof v == "function" && v.__emotion_real !== v)
        return function(I) {
          return Qt(I, v);
        };
      if (Le(v)) {
        const A = Io(v);
        return A.variants ? function(G) {
          return Qt(G, A);
        } : A.style;
      }
      return v;
    }, E = (...v) => {
      const A = [], I = v.map(R), G = [];
      if (A.push(i), d && x && G.push(function(N) {
        var oe, de;
        const W = (de = (oe = N.theme.components) == null ? void 0 : oe[d]) == null ? void 0 : de.styleOverrides;
        if (!W)
          return null;
        const le = {};
        for (const Ee in W)
          le[Ee] = Qt(N, W[Ee]);
        return x(N, le);
      }), d && !l && G.push(function(N) {
        var le, oe;
        const B = N.theme, W = (oe = (le = B == null ? void 0 : B.components) == null ? void 0 : le[d]) == null ? void 0 : oe.variants;
        return W ? No(N, W) : null;
      }), S || G.push(dt), Array.isArray(I[0])) {
        const O = I.shift(), N = new Array(A.length).fill(""), B = new Array(G.length).fill("");
        let W;
        W = [...N, ...O, ...B], W.raw = [...N, ...O.raw, ...B], A.unshift(W);
      }
      const te = [...A, ...I, ...G], s = k(...te);
      return c.muiName && (s.muiName = c.muiName), process.env.NODE_ENV !== "production" && (s.displayName = _s(d, m, c)), s;
    };
    return k.withConfig && (E.withConfig = k.withConfig), E;
  };
}
function _s(e, t, r) {
  return e ? `${e}${ne(t || "")}` : `Styled(${Ei(r)})`;
}
function Is(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${Mo(t || "Root")}`), r;
}
function Ns(e) {
  for (const t in e)
    return !1;
  return !0;
}
function Ms(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Mo(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const Bs = /* @__PURE__ */ _.createContext(void 0);
process.env.NODE_ENV !== "production" && (p.node, p.object);
function js(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? Zt(o.defaultProps, n) : !o.styleOverrides && !o.variants ? Zt(o, n) : n;
}
function zs({
  props: e,
  name: t
}) {
  const r = _.useContext(Bs);
  return js({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const Xn = {
  theme: void 0
};
function Ds(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (Xn.theme = o.theme, i = Io(e(Xn)), t = i, r = o.theme), i;
  };
}
function Fs(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const Jn = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, Vs = (e, t, r) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([c, u]) => {
      (!r || !r([...i, c])) && u != null && (typeof u == "object" && Object.keys(u).length > 0 ? n(u, [...i, c], Array.isArray(u) ? [...a, c] : a) : t([...i, c], u, a));
    });
  }
  n(e);
}, Ls = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function _r(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, a = {};
  return Vs(
    e,
    (c, u, d) => {
      if ((typeof u == "string" || typeof u == "number") && (!n || !n(c, u))) {
        const m = `--${r ? `${r}-` : ""}${c.join("-")}`, g = Ls(c, u);
        Object.assign(o, {
          [m]: g
        }), Jn(i, c, `var(${m})`, d), Jn(a, c, `var(${m}, ${g})`, d);
      }
    },
    (c) => c[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: o,
    vars: i,
    varsWithDefaults: a
  };
}
function Ws(e, t = {}) {
  const {
    getSelector: r = S,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: a,
    defaultColorScheme: c = "light",
    ...u
  } = e, {
    vars: d,
    css: m,
    varsWithDefaults: g
  } = _r(u, t);
  let h = g;
  const x = {}, {
    [c]: y,
    ...l
  } = i;
  if (Object.entries(l || {}).forEach(([R, E]) => {
    const {
      vars: v,
      css: A,
      varsWithDefaults: I
    } = _r(E, t);
    h = $e(h, I), x[R] = {
      css: A,
      vars: v
    };
  }), y) {
    const {
      css: R,
      vars: E,
      varsWithDefaults: v
    } = _r(y, t);
    h = $e(h, v), x[c] = {
      css: R,
      vars: E
    };
  }
  function S(R, E) {
    var A, I;
    let v = o;
    if (o === "class" && (v = ".%s"), o === "data" && (v = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (v = `[${o}="%s"]`), R) {
      if (v === "media")
        return e.defaultColorScheme === R ? ":root" : {
          [`@media (prefers-color-scheme: ${((I = (A = i[R]) == null ? void 0 : A.palette) == null ? void 0 : I.mode) || R})`]: {
            ":root": E
          }
        };
      if (v)
        return e.defaultColorScheme === R ? `:root, ${v.replace("%s", String(R))}` : v.replace("%s", String(R));
    }
    return ":root";
  }
  return {
    vars: h,
    generateThemeVars: () => {
      let R = {
        ...d
      };
      return Object.entries(x).forEach(([, {
        vars: E
      }]) => {
        R = $e(R, E);
      }), R;
    },
    generateStyleSheets: () => {
      var G, te;
      const R = [], E = e.defaultColorScheme || "light";
      function v(s, O) {
        Object.keys(O).length && R.push(typeof s == "string" ? {
          [s]: {
            ...O
          }
        } : s);
      }
      v(r(void 0, {
        ...m
      }), m);
      const {
        [E]: A,
        ...I
      } = x;
      if (A) {
        const {
          css: s
        } = A, O = (te = (G = i[E]) == null ? void 0 : G.palette) == null ? void 0 : te.mode, N = !n && O ? {
          colorScheme: O,
          ...s
        } : {
          ...s
        };
        v(r(E, {
          ...N
        }), N);
      }
      return Object.entries(I).forEach(([s, {
        css: O
      }]) => {
        var W, le;
        const N = (le = (W = i[s]) == null ? void 0 : W.palette) == null ? void 0 : le.mode, B = !n && N ? {
          colorScheme: N,
          ...O
        } : {
          ...O
        };
        v(r(s, {
          ...B
        }), B);
      }), R;
    }
  };
}
function Us(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const kt = {
  black: "#000",
  white: "#fff"
}, Ys = {
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
}, ot = {
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
}, it = {
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
}, Tt = {
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
}, at = {
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
}, st = {
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
}, ct = {
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
function Bo() {
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
      paper: kt.white,
      default: kt.white
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
const qs = Bo();
function jo() {
  return {
    text: {
      primary: kt.white,
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
      active: kt.white,
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
const Qn = jo();
function Zn(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Hr(e.main, o) : t === "dark" && (e.dark = Gr(e.main, i)));
}
function Gs(e = "light") {
  return e === "dark" ? {
    main: at[200],
    light: at[50],
    dark: at[400]
  } : {
    main: at[700],
    light: at[400],
    dark: at[800]
  };
}
function Hs(e = "light") {
  return e === "dark" ? {
    main: ot[200],
    light: ot[50],
    dark: ot[400]
  } : {
    main: ot[500],
    light: ot[300],
    dark: ot[700]
  };
}
function Ks(e = "light") {
  return e === "dark" ? {
    main: it[500],
    light: it[300],
    dark: it[700]
  } : {
    main: it[700],
    light: it[400],
    dark: it[800]
  };
}
function Xs(e = "light") {
  return e === "dark" ? {
    main: st[400],
    light: st[300],
    dark: st[700]
  } : {
    main: st[700],
    light: st[500],
    dark: st[900]
  };
}
function Js(e = "light") {
  return e === "dark" ? {
    main: ct[400],
    light: ct[300],
    dark: ct[700]
  } : {
    main: ct[800],
    light: ct[500],
    dark: ct[900]
  };
}
function Qs(e = "light") {
  return e === "dark" ? {
    main: Tt[400],
    light: Tt[300],
    dark: Tt[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Tt[500],
    dark: Tt[900]
  };
}
function an(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || Gs(t), a = e.secondary || Hs(t), c = e.error || Ks(t), u = e.info || Xs(t), d = e.success || Js(t), m = e.warning || Qs(t);
  function g(l) {
    const S = On(l, Qn.text.primary) >= r ? Qn.text.primary : qs.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const C = On(l, S);
      C < 3 && console.error([`MUI: The contrast ratio of ${C}:1 for ${S} on ${l}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return S;
  }
  const h = ({
    color: l,
    name: S,
    mainShade: C = 500,
    lightShade: k = 300,
    darkShade: R = 700
  }) => {
    if (l = {
      ...l
    }, !l.main && l[C] && (l.main = l[C]), !l.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${S ? ` (${S})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${C}\` property.` : Ke(11, S ? ` (${S})` : "", C));
    if (typeof l.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${S ? ` (${S})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(l.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Ke(12, S ? ` (${S})` : "", JSON.stringify(l.main)));
    return Zn(l, "light", k, n), Zn(l, "dark", R, n), l.contrastText || (l.contrastText = g(l.main)), l;
  };
  let x;
  return t === "light" ? x = Bo() : t === "dark" && (x = jo()), process.env.NODE_ENV !== "production" && (x || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), $e({
    // A collection of common colors.
    common: {
      ...kt
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: h({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: h({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: h({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: h({
      color: m,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: h({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: h({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: Ys,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: g,
    // Generate a rich color object.
    augmentColor: h,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...x
  }, o);
}
function Zs(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function ec(e, t) {
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
function tc(e) {
  return Math.round(e * 1e5) / 1e5;
}
const eo = {
  textTransform: "uppercase"
}, to = '"Roboto", "Helvetica", "Arial", sans-serif';
function rc(e, t) {
  const {
    fontFamily: r = to,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: u = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: m,
    ...g
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof u != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const h = n / 14, x = m || ((S) => `${S / u * h}rem`), y = (S, C, k, R, E) => ({
    fontFamily: r,
    fontWeight: S,
    fontSize: x(C),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: k,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === to ? {
      letterSpacing: `${tc(R / C)}em`
    } : {},
    ...E,
    ...d
  }), l = {
    h1: y(o, 96, 1.167, -1.5),
    h2: y(o, 60, 1.2, -0.5),
    h3: y(i, 48, 1.167, 0),
    h4: y(i, 34, 1.235, 0.25),
    h5: y(i, 24, 1.334, 0),
    h6: y(a, 20, 1.6, 0.15),
    subtitle1: y(i, 16, 1.75, 0.15),
    subtitle2: y(a, 14, 1.57, 0.1),
    body1: y(i, 16, 1.5, 0.15),
    body2: y(i, 14, 1.43, 0.15),
    button: y(a, 14, 1.75, 0.4, eo),
    caption: y(i, 12, 1.66, 0.4),
    overline: y(i, 12, 2.66, 1, eo),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return $e({
    htmlFontSize: u,
    pxToRem: x,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: c,
    ...l
  }, g, {
    clone: !1
    // No need to clone deep
  });
}
const nc = 0.2, oc = 0.14, ic = 0.12;
function ue(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${nc})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${oc})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${ic})`].join(",");
}
const ac = ["none", ue(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ue(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ue(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ue(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ue(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ue(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ue(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ue(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ue(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ue(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ue(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ue(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ue(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ue(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ue(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ue(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ue(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ue(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ue(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ue(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ue(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ue(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ue(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ue(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], sc = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, cc = {
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
function ro(e) {
  return `${Math.round(e)}ms`;
}
function lc(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function uc(e) {
  const t = {
    ...sc,
    ...e.easing
  }, r = {
    ...cc,
    ...e.duration
  };
  return {
    getAutoHeightDuration: lc,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: c = t.easeInOut,
        delay: u = 0,
        ...d
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const m = (h) => typeof h == "string", g = (h) => !Number.isNaN(parseFloat(h));
        !m(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !g(a) && !m(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), m(c) || console.error('MUI: Argument "easing" must be a string.'), !g(u) && !m(u) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(d).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((m) => `${m} ${typeof a == "string" ? a : ro(a)} ${c} ${typeof u == "string" ? u : ro(u)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const fc = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function dc(e) {
  return Le(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function zo(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, c] = o[i];
      !dc(c) || a.startsWith("unstable_") ? delete n[a] : Le(c) && (n[a] = {
        ...c
      }, r(n[a]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Dr(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: a = {},
    typography: c = {},
    shape: u,
    ...d
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Ke(20));
  const m = an(i), g = _o(e);
  let h = $e(g, {
    mixins: ec(g.breakpoints, n),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: ac.slice(),
    typography: rc(m, c),
    transitions: uc(a),
    zIndex: {
      ...fc
    }
  });
  if (h = $e(h, d), h = t.reduce((x, y) => $e(x, y), h), process.env.NODE_ENV !== "production") {
    const x = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], y = (l, S) => {
      let C;
      for (C in l) {
        const k = l[C];
        if (x.includes(C) && Object.keys(k).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const R = rt("", C);
            console.error([`MUI: The \`${S}\` component increases the CSS specificity of the \`${C}\` internal state.`, "You can not override it like this: ", JSON.stringify(l, null, 2), "", `Instead, you need to use the '&.${R}' syntax:`, JSON.stringify({
              root: {
                [`&.${R}`]: k
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          l[C] = {};
        }
      }
    };
    Object.keys(h.components).forEach((l) => {
      const S = h.components[l].styleOverrides;
      S && l.startsWith("Mui") && y(S, l);
    });
  }
  return h.unstable_sxConfig = {
    ...yr,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, h.unstable_sx = function(y) {
    return dt({
      sx: y,
      theme: this
    });
  }, h.toRuntimeSource = zo, h;
}
function pc(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const gc = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = pc(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function Do(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Fo(e) {
  return e === "dark" ? gc : [];
}
function mc(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, i = an(t);
  return {
    palette: i,
    opacity: {
      ...Do(i.mode),
      ...r
    },
    overlays: n || Fo(i.mode),
    ...o
  };
}
function hc(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const yc = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], bc = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return yc(e.cssVarPrefix).forEach((c) => {
        a[c] = r[c], delete r[c];
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
function vc(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function b(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function Ot(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : lo(e);
}
function Fe(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = wt(Ot(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Sc(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Ne = (e) => {
  try {
    return e();
  } catch {
  }
}, Ec = (e = "mui") => Fs(e);
function Ir(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = mc({
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
  } = Dr({
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
      ...Do(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || Fo(o)
  }, a;
}
function xc(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: a = hc,
    colorSchemeSelector: c = r.light && r.dark ? "media" : void 0,
    rootSelector: u = ":root",
    ...d
  } = e, m = Object.keys(r)[0], g = n || (r.light && m !== "light" ? "light" : m), h = Ec(i), {
    [g]: x,
    light: y,
    dark: l,
    ...S
  } = r, C = {
    ...S
  };
  let k = x;
  if ((g === "dark" && !("dark" in r) || g === "light" && !("light" in r)) && (k = !0), !k)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${g}\` option is either missing or invalid.` : Ke(21, g));
  const R = Ir(C, k, d, g);
  y && !C.light && Ir(C, y, void 0, "light"), l && !C.dark && Ir(C, l, void 0, "dark");
  let E = {
    defaultColorScheme: g,
    ...R,
    cssVarPrefix: i,
    colorSchemeSelector: c,
    rootSelector: u,
    getCssVar: h,
    colorSchemes: C,
    font: {
      ...Zs(R.typography),
      ...R.font
    },
    spacing: Sc(d.spacing)
  };
  Object.keys(E.colorSchemes).forEach((te) => {
    const s = E.colorSchemes[te].palette, O = (N) => {
      const B = N.split("-"), W = B[1], le = B[2];
      return h(N, s[W][le]);
    };
    if (s.mode === "light" && (b(s.common, "background", "#fff"), b(s.common, "onBackground", "#000")), s.mode === "dark" && (b(s.common, "background", "#000"), b(s.common, "onBackground", "#fff")), vc(s, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), s.mode === "light") {
      b(s.Alert, "errorColor", se(s.error.light, 0.6)), b(s.Alert, "infoColor", se(s.info.light, 0.6)), b(s.Alert, "successColor", se(s.success.light, 0.6)), b(s.Alert, "warningColor", se(s.warning.light, 0.6)), b(s.Alert, "errorFilledBg", O("palette-error-main")), b(s.Alert, "infoFilledBg", O("palette-info-main")), b(s.Alert, "successFilledBg", O("palette-success-main")), b(s.Alert, "warningFilledBg", O("palette-warning-main")), b(s.Alert, "errorFilledColor", Ne(() => s.getContrastText(s.error.main))), b(s.Alert, "infoFilledColor", Ne(() => s.getContrastText(s.info.main))), b(s.Alert, "successFilledColor", Ne(() => s.getContrastText(s.success.main))), b(s.Alert, "warningFilledColor", Ne(() => s.getContrastText(s.warning.main))), b(s.Alert, "errorStandardBg", ce(s.error.light, 0.9)), b(s.Alert, "infoStandardBg", ce(s.info.light, 0.9)), b(s.Alert, "successStandardBg", ce(s.success.light, 0.9)), b(s.Alert, "warningStandardBg", ce(s.warning.light, 0.9)), b(s.Alert, "errorIconColor", O("palette-error-main")), b(s.Alert, "infoIconColor", O("palette-info-main")), b(s.Alert, "successIconColor", O("palette-success-main")), b(s.Alert, "warningIconColor", O("palette-warning-main")), b(s.AppBar, "defaultBg", O("palette-grey-100")), b(s.Avatar, "defaultBg", O("palette-grey-400")), b(s.Button, "inheritContainedBg", O("palette-grey-300")), b(s.Button, "inheritContainedHoverBg", O("palette-grey-A100")), b(s.Chip, "defaultBorder", O("palette-grey-400")), b(s.Chip, "defaultAvatarColor", O("palette-grey-700")), b(s.Chip, "defaultIconColor", O("palette-grey-700")), b(s.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), b(s.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), b(s.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), b(s.LinearProgress, "primaryBg", ce(s.primary.main, 0.62)), b(s.LinearProgress, "secondaryBg", ce(s.secondary.main, 0.62)), b(s.LinearProgress, "errorBg", ce(s.error.main, 0.62)), b(s.LinearProgress, "infoBg", ce(s.info.main, 0.62)), b(s.LinearProgress, "successBg", ce(s.success.main, 0.62)), b(s.LinearProgress, "warningBg", ce(s.warning.main, 0.62)), b(s.Skeleton, "bg", `rgba(${O("palette-text-primaryChannel")} / 0.11)`), b(s.Slider, "primaryTrack", ce(s.primary.main, 0.62)), b(s.Slider, "secondaryTrack", ce(s.secondary.main, 0.62)), b(s.Slider, "errorTrack", ce(s.error.main, 0.62)), b(s.Slider, "infoTrack", ce(s.info.main, 0.62)), b(s.Slider, "successTrack", ce(s.success.main, 0.62)), b(s.Slider, "warningTrack", ce(s.warning.main, 0.62));
      const N = Wt(s.background.default, 0.8);
      b(s.SnackbarContent, "bg", N), b(s.SnackbarContent, "color", Ne(() => s.getContrastText(N))), b(s.SpeedDialAction, "fabHoverBg", Wt(s.background.paper, 0.15)), b(s.StepConnector, "border", O("palette-grey-400")), b(s.StepContent, "border", O("palette-grey-400")), b(s.Switch, "defaultColor", O("palette-common-white")), b(s.Switch, "defaultDisabledColor", O("palette-grey-100")), b(s.Switch, "primaryDisabledColor", ce(s.primary.main, 0.62)), b(s.Switch, "secondaryDisabledColor", ce(s.secondary.main, 0.62)), b(s.Switch, "errorDisabledColor", ce(s.error.main, 0.62)), b(s.Switch, "infoDisabledColor", ce(s.info.main, 0.62)), b(s.Switch, "successDisabledColor", ce(s.success.main, 0.62)), b(s.Switch, "warningDisabledColor", ce(s.warning.main, 0.62)), b(s.TableCell, "border", ce(Lt(s.divider, 1), 0.88)), b(s.Tooltip, "bg", Lt(s.grey[700], 0.92));
    }
    if (s.mode === "dark") {
      b(s.Alert, "errorColor", ce(s.error.light, 0.6)), b(s.Alert, "infoColor", ce(s.info.light, 0.6)), b(s.Alert, "successColor", ce(s.success.light, 0.6)), b(s.Alert, "warningColor", ce(s.warning.light, 0.6)), b(s.Alert, "errorFilledBg", O("palette-error-dark")), b(s.Alert, "infoFilledBg", O("palette-info-dark")), b(s.Alert, "successFilledBg", O("palette-success-dark")), b(s.Alert, "warningFilledBg", O("palette-warning-dark")), b(s.Alert, "errorFilledColor", Ne(() => s.getContrastText(s.error.dark))), b(s.Alert, "infoFilledColor", Ne(() => s.getContrastText(s.info.dark))), b(s.Alert, "successFilledColor", Ne(() => s.getContrastText(s.success.dark))), b(s.Alert, "warningFilledColor", Ne(() => s.getContrastText(s.warning.dark))), b(s.Alert, "errorStandardBg", se(s.error.light, 0.9)), b(s.Alert, "infoStandardBg", se(s.info.light, 0.9)), b(s.Alert, "successStandardBg", se(s.success.light, 0.9)), b(s.Alert, "warningStandardBg", se(s.warning.light, 0.9)), b(s.Alert, "errorIconColor", O("palette-error-main")), b(s.Alert, "infoIconColor", O("palette-info-main")), b(s.Alert, "successIconColor", O("palette-success-main")), b(s.Alert, "warningIconColor", O("palette-warning-main")), b(s.AppBar, "defaultBg", O("palette-grey-900")), b(s.AppBar, "darkBg", O("palette-background-paper")), b(s.AppBar, "darkColor", O("palette-text-primary")), b(s.Avatar, "defaultBg", O("palette-grey-600")), b(s.Button, "inheritContainedBg", O("palette-grey-800")), b(s.Button, "inheritContainedHoverBg", O("palette-grey-700")), b(s.Chip, "defaultBorder", O("palette-grey-700")), b(s.Chip, "defaultAvatarColor", O("palette-grey-300")), b(s.Chip, "defaultIconColor", O("palette-grey-300")), b(s.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), b(s.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), b(s.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), b(s.LinearProgress, "primaryBg", se(s.primary.main, 0.5)), b(s.LinearProgress, "secondaryBg", se(s.secondary.main, 0.5)), b(s.LinearProgress, "errorBg", se(s.error.main, 0.5)), b(s.LinearProgress, "infoBg", se(s.info.main, 0.5)), b(s.LinearProgress, "successBg", se(s.success.main, 0.5)), b(s.LinearProgress, "warningBg", se(s.warning.main, 0.5)), b(s.Skeleton, "bg", `rgba(${O("palette-text-primaryChannel")} / 0.13)`), b(s.Slider, "primaryTrack", se(s.primary.main, 0.5)), b(s.Slider, "secondaryTrack", se(s.secondary.main, 0.5)), b(s.Slider, "errorTrack", se(s.error.main, 0.5)), b(s.Slider, "infoTrack", se(s.info.main, 0.5)), b(s.Slider, "successTrack", se(s.success.main, 0.5)), b(s.Slider, "warningTrack", se(s.warning.main, 0.5));
      const N = Wt(s.background.default, 0.98);
      b(s.SnackbarContent, "bg", N), b(s.SnackbarContent, "color", Ne(() => s.getContrastText(N))), b(s.SpeedDialAction, "fabHoverBg", Wt(s.background.paper, 0.15)), b(s.StepConnector, "border", O("palette-grey-600")), b(s.StepContent, "border", O("palette-grey-600")), b(s.Switch, "defaultColor", O("palette-grey-300")), b(s.Switch, "defaultDisabledColor", O("palette-grey-600")), b(s.Switch, "primaryDisabledColor", se(s.primary.main, 0.55)), b(s.Switch, "secondaryDisabledColor", se(s.secondary.main, 0.55)), b(s.Switch, "errorDisabledColor", se(s.error.main, 0.55)), b(s.Switch, "infoDisabledColor", se(s.info.main, 0.55)), b(s.Switch, "successDisabledColor", se(s.success.main, 0.55)), b(s.Switch, "warningDisabledColor", se(s.warning.main, 0.55)), b(s.TableCell, "border", se(Lt(s.divider, 1), 0.68)), b(s.Tooltip, "bg", Lt(s.grey[700], 0.92));
    }
    Fe(s.background, "default"), Fe(s.background, "paper"), Fe(s.common, "background"), Fe(s.common, "onBackground"), Fe(s, "divider"), Object.keys(s).forEach((N) => {
      const B = s[N];
      N !== "tonalOffset" && B && typeof B == "object" && (B.main && b(s[N], "mainChannel", wt(Ot(B.main))), B.light && b(s[N], "lightChannel", wt(Ot(B.light))), B.dark && b(s[N], "darkChannel", wt(Ot(B.dark))), B.contrastText && b(s[N], "contrastTextChannel", wt(Ot(B.contrastText))), N === "text" && (Fe(s[N], "primary"), Fe(s[N], "secondary")), N === "action" && (B.active && Fe(s[N], "active"), B.selected && Fe(s[N], "selected")));
    });
  }), E = t.reduce((te, s) => $e(te, s), E);
  const v = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: bc(E)
  }, {
    vars: A,
    generateThemeVars: I,
    generateStyleSheets: G
  } = Ws(E, v);
  return E.vars = A, Object.entries(E.colorSchemes[E.defaultColorScheme]).forEach(([te, s]) => {
    E[te] = s;
  }), E.generateThemeVars = I, E.generateStyleSheets = G, E.generateSpacing = function() {
    return ko(d.spacing, Jr(this));
  }, E.getColorSchemeSelector = Us(c), E.spacing = E.generateSpacing(), E.shouldSkipGeneratingVar = a, E.unstable_sxConfig = {
    ...yr,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, E.unstable_sx = function(s) {
    return dt({
      sx: s,
      theme: this
    });
  }, E.toRuntimeSource = zo, E;
}
function no(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: an({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Cc(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r == null ? void 0 : r.mode,
    ...a
  } = e, c = i || "light", u = o == null ? void 0 : o[c], d = {
    ...o,
    ...r ? {
      [c]: {
        ...typeof u != "boolean" && u,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return Dr(e, ...t);
    let m = r;
    "palette" in e || d[c] && (d[c] !== !0 ? m = d[c].palette : c === "dark" && (m = {
      mode: "dark"
    }));
    const g = Dr({
      ...e,
      palette: m
    }, ...t);
    return g.defaultColorScheme = c, g.colorSchemes = d, g.palette.mode === "light" && (g.colorSchemes.light = {
      ...d.light !== !0 && d.light,
      palette: g.palette
    }, no(g, "dark", d.dark)), g.palette.mode === "dark" && (g.colorSchemes.dark = {
      ...d.dark !== !0 && d.dark,
      palette: g.palette
    }, no(g, "light", d.light)), g;
  }
  return !r && !("light" in d) && c === "light" && (d.light = !0), xc({
    ...a,
    colorSchemes: d,
    defaultColorScheme: c,
    ...typeof n != "boolean" && n
  }, ...t);
}
const Tc = Cc(), wc = "$$material";
function Oc(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Vo = (e) => Oc(e) && e !== "classes", Oe = ks({
  themeId: wc,
  defaultTheme: Tc,
  rootShouldForwardProp: Vo
}), gt = Ds;
process.env.NODE_ENV !== "production" && (p.node, p.object.isRequired);
function yt(e) {
  return zs(e);
}
function Rc(e) {
  return rt("MuiSvgIcon", e);
}
mt("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const $c = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: n
  } = e, o = {
    root: ["root", t !== "inherit" && `color${ne(t)}`, `fontSize${ne(r)}`]
  };
  return _t(o, Rc, n);
}, Pc = Oe("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${ne(r.color)}`], t[`fontSize${ne(r.fontSize)}`]];
  }
})(gt(({
  theme: e
}) => {
  var t, r, n, o, i, a, c, u, d, m, g, h, x, y;
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
          fontSize: ((u = (c = e.typography) == null ? void 0 : c.pxToRem) == null ? void 0 : u.call(c, 24)) || "1.5rem"
        }
      },
      {
        props: {
          fontSize: "large"
        },
        style: {
          fontSize: ((m = (d = e.typography) == null ? void 0 : d.pxToRem) == null ? void 0 : m.call(d, 35)) || "2.1875rem"
        }
      },
      // TODO v5 deprecate color prop, v6 remove for sx
      ...Object.entries((e.vars ?? e).palette).filter(([, l]) => l && l.main).map(([l]) => {
        var S, C;
        return {
          props: {
            color: l
          },
          style: {
            color: (C = (S = (e.vars ?? e).palette) == null ? void 0 : S[l]) == null ? void 0 : C.main
          }
        };
      }),
      {
        props: {
          color: "action"
        },
        style: {
          color: (h = (g = (e.vars ?? e).palette) == null ? void 0 : g.action) == null ? void 0 : h.active
        }
      },
      {
        props: {
          color: "disabled"
        },
        style: {
          color: (y = (x = (e.vars ?? e).palette) == null ? void 0 : x.action) == null ? void 0 : y.disabled
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
})), or = /* @__PURE__ */ _.forwardRef(function(t, r) {
  const n = yt({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: o,
    className: i,
    color: a = "inherit",
    component: c = "svg",
    fontSize: u = "medium",
    htmlColor: d,
    inheritViewBox: m = !1,
    titleAccess: g,
    viewBox: h = "0 0 24 24",
    ...x
  } = n, y = /* @__PURE__ */ _.isValidElement(o) && o.type === "svg", l = {
    ...n,
    color: a,
    component: c,
    fontSize: u,
    instanceFontSize: t.fontSize,
    inheritViewBox: m,
    viewBox: h,
    hasSvgAsChild: y
  }, S = {};
  m || (S.viewBox = h);
  const C = $c(l);
  return /* @__PURE__ */ K.jsxs(Pc, {
    as: c,
    className: Te(C.root, i),
    focusable: "false",
    color: d,
    "aria-hidden": g ? void 0 : !0,
    role: g ? "img" : void 0,
    ref: r,
    ...S,
    ...x,
    ...y && o.props,
    ownerState: l,
    children: [y ? o.props.children : o, g ? /* @__PURE__ */ K.jsx("title", {
      children: g
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (or.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Node passed into the SVG element.
   */
  children: p.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: p.object,
  /**
   * @ignore
   */
  className: p.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: p.oneOfType([p.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), p.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: p.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: p.oneOfType([p.oneOf(["inherit", "large", "medium", "small"]), p.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: p.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: p.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: p.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: p.oneOfType([p.arrayOf(p.oneOfType([p.func, p.object, p.bool])), p.func, p.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: p.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: p.string
});
or.muiName = "SvgIcon";
function Lo(e, t) {
  function r(n, o) {
    return /* @__PURE__ */ K.jsx(or, {
      "data-testid": `${t}Icon`,
      ref: o,
      ...n,
      children: e
    });
  }
  return process.env.NODE_ENV !== "production" && (r.displayName = `${t}Icon`), r.muiName = or.muiName, /* @__PURE__ */ _.memo(/* @__PURE__ */ _.forwardRef(r));
}
class ir {
  constructor() {
    St(this, "mountEffect", () => {
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
    return new ir();
  }
  static use() {
    const t = go(ir.create).current, [r, n] = _.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, _.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = kc(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function Ac() {
  return ir.use();
}
function kc() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function _c(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Fr(e, t) {
  return Fr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Fr(e, t);
}
function Ic(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Fr(e, t);
}
const oo = lt.createContext(null);
function Nc(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function sn(e, t) {
  var r = function(i) {
    return t && qt(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Qo.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function Mc(e, t) {
  e = e || {}, t = t || {};
  function r(m) {
    return m in t ? t[m] : e[m];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var a, c = {};
  for (var u in t) {
    if (n[u])
      for (a = 0; a < n[u].length; a++) {
        var d = n[u][a];
        c[n[u][a]] = r(d);
      }
    c[u] = r(u);
  }
  for (a = 0; a < o.length; a++)
    c[o[a]] = r(o[a]);
  return c;
}
function tt(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function Bc(e, t) {
  return sn(e.children, function(r) {
    return Gt(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: tt(r, "appear", e),
      enter: tt(r, "enter", e),
      exit: tt(r, "exit", e)
    });
  });
}
function jc(e, t, r) {
  var n = sn(e.children), o = Mc(t, n);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (qt(a)) {
      var c = i in t, u = i in n, d = t[i], m = qt(d) && !d.props.in;
      u && (!c || m) ? o[i] = Gt(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: tt(a, "exit", e),
        enter: tt(a, "enter", e)
      }) : !u && c && !m ? o[i] = Gt(a, {
        in: !1
      }) : u && c && qt(d) && (o[i] = Gt(a, {
        onExited: r.bind(null, a),
        in: d.props.in,
        exit: tt(a, "exit", e),
        enter: tt(a, "enter", e)
      }));
    }
  }), o;
}
var zc = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Dc = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, cn = /* @__PURE__ */ function(e) {
  Ic(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = i.handleExited.bind(Nc(i));
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
    var a = i.children, c = i.handleExited, u = i.firstRender;
    return {
      children: u ? Bc(o, c) : jc(o, a, c),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var a = sn(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(c) {
      var u = rr({}, c.children);
      return delete u[o.key], {
        children: u
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, c = _c(o, ["component", "childFactory"]), u = this.state.contextValue, d = zc(this.state.children).map(a);
    return delete c.appear, delete c.enter, delete c.exit, i === null ? /* @__PURE__ */ lt.createElement(oo.Provider, {
      value: u
    }, d) : /* @__PURE__ */ lt.createElement(oo.Provider, {
      value: u
    }, /* @__PURE__ */ lt.createElement(i, c, d));
  }, t;
}(lt.Component);
cn.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: p.any,
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
  children: p.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: p.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: p.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: p.bool,
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
  childFactory: p.func
} : {};
cn.defaultProps = Dc;
function Wo(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: a,
    in: c,
    onExited: u,
    timeout: d
  } = e, [m, g] = _.useState(!1), h = Te(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), x = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, y = Te(r.child, m && r.childLeaving, n && r.childPulsate);
  return !c && !m && g(!0), _.useEffect(() => {
    if (!c && u != null) {
      const l = setTimeout(u, d);
      return () => {
        clearTimeout(l);
      };
    }
  }, [u, c, d]), /* @__PURE__ */ K.jsx("span", {
    className: h,
    style: x,
    children: /* @__PURE__ */ K.jsx("span", {
      className: y
    })
  });
}
process.env.NODE_ENV !== "production" && (Wo.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: p.object.isRequired,
  className: p.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: p.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: p.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: p.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: p.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: p.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: p.number,
  /**
   * exit delay
   */
  timeout: p.number.isRequired
});
const ke = mt("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Vr = 550, Fc = 80, Vc = Bt`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Lc = Bt`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Wc = Bt`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Uc = Oe("span", {
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
}), Yc = Oe(Wo, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${ke.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Vc};
    animation-duration: ${Vr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${ke.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${ke.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${ke.childLeaving} {
    opacity: 0;
    animation-name: ${Lc};
    animation-duration: ${Vr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${ke.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Wc};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Uo = /* @__PURE__ */ _.forwardRef(function(t, r) {
  const n = yt({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a,
    ...c
  } = n, [u, d] = _.useState([]), m = _.useRef(0), g = _.useRef(null);
  _.useEffect(() => {
    g.current && (g.current(), g.current = null);
  }, [u]);
  const h = _.useRef(!1), x = Pi(), y = _.useRef(null), l = _.useRef(null), S = _.useCallback((E) => {
    const {
      pulsate: v,
      rippleX: A,
      rippleY: I,
      rippleSize: G,
      cb: te
    } = E;
    d((s) => [...s, /* @__PURE__ */ K.jsx(Yc, {
      classes: {
        ripple: Te(i.ripple, ke.ripple),
        rippleVisible: Te(i.rippleVisible, ke.rippleVisible),
        ripplePulsate: Te(i.ripplePulsate, ke.ripplePulsate),
        child: Te(i.child, ke.child),
        childLeaving: Te(i.childLeaving, ke.childLeaving),
        childPulsate: Te(i.childPulsate, ke.childPulsate)
      },
      timeout: Vr,
      pulsate: v,
      rippleX: A,
      rippleY: I,
      rippleSize: G
    }, m.current)]), m.current += 1, g.current = te;
  }, [i]), C = _.useCallback((E = {}, v = {}, A = () => {
  }) => {
    const {
      pulsate: I = !1,
      center: G = o || v.pulsate,
      fakeElement: te = !1
      // For test purposes
    } = v;
    if ((E == null ? void 0 : E.type) === "mousedown" && h.current) {
      h.current = !1;
      return;
    }
    (E == null ? void 0 : E.type) === "touchstart" && (h.current = !0);
    const s = te ? null : l.current, O = s ? s.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let N, B, W;
    if (G || E === void 0 || E.clientX === 0 && E.clientY === 0 || !E.clientX && !E.touches)
      N = Math.round(O.width / 2), B = Math.round(O.height / 2);
    else {
      const {
        clientX: le,
        clientY: oe
      } = E.touches && E.touches.length > 0 ? E.touches[0] : E;
      N = Math.round(le - O.left), B = Math.round(oe - O.top);
    }
    if (G)
      W = Math.sqrt((2 * O.width ** 2 + O.height ** 2) / 3), W % 2 === 0 && (W += 1);
    else {
      const le = Math.max(Math.abs((s ? s.clientWidth : 0) - N), N) * 2 + 2, oe = Math.max(Math.abs((s ? s.clientHeight : 0) - B), B) * 2 + 2;
      W = Math.sqrt(le ** 2 + oe ** 2);
    }
    E != null && E.touches ? y.current === null && (y.current = () => {
      S({
        pulsate: I,
        rippleX: N,
        rippleY: B,
        rippleSize: W,
        cb: A
      });
    }, x.start(Fc, () => {
      y.current && (y.current(), y.current = null);
    })) : S({
      pulsate: I,
      rippleX: N,
      rippleY: B,
      rippleSize: W,
      cb: A
    });
  }, [o, S, x]), k = _.useCallback(() => {
    C({}, {
      pulsate: !0
    });
  }, [C]), R = _.useCallback((E, v) => {
    if (x.clear(), (E == null ? void 0 : E.type) === "touchend" && y.current) {
      y.current(), y.current = null, x.start(0, () => {
        R(E, v);
      });
      return;
    }
    y.current = null, d((A) => A.length > 0 ? A.slice(1) : A), g.current = v;
  }, [x]);
  return _.useImperativeHandle(r, () => ({
    pulsate: k,
    start: C,
    stop: R
  }), [k, C, R]), /* @__PURE__ */ K.jsx(Uc, {
    className: Te(ke.root, i.root, a),
    ref: l,
    ...c,
    children: /* @__PURE__ */ K.jsx(cn, {
      component: null,
      exit: !0,
      children: u
    })
  });
});
process.env.NODE_ENV !== "production" && (Uo.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: p.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: p.object,
  /**
   * @ignore
   */
  className: p.string
});
function qc(e) {
  return rt("MuiButtonBase", e);
}
const Gc = mt("MuiButtonBase", ["root", "disabled", "focusVisible"]), Hc = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, a = _t({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, qc, o);
  return r && n && (a.root += ` ${n}`), a;
}, Kc = Oe("button", {
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
  [`&.${Gc.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), ln = /* @__PURE__ */ _.forwardRef(function(t, r) {
  const n = yt({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: c,
    component: u = "button",
    disabled: d = !1,
    disableRipple: m = !1,
    disableTouchRipple: g = !1,
    focusRipple: h = !1,
    focusVisibleClassName: x,
    LinkComponent: y = "a",
    onBlur: l,
    onClick: S,
    onContextMenu: C,
    onDragLeave: k,
    onFocus: R,
    onFocusVisible: E,
    onKeyDown: v,
    onKeyUp: A,
    onMouseDown: I,
    onMouseLeave: G,
    onMouseUp: te,
    onTouchEnd: s,
    onTouchMove: O,
    onTouchStart: N,
    tabIndex: B = 0,
    TouchRippleProps: W,
    touchRippleRef: le,
    type: oe,
    ...de
  } = n, Ee = _.useRef(null), re = Ac(), w = In(re.ref, le), [$, z] = _.useState(!1);
  d && $ && z(!1), _.useImperativeHandle(o, () => ({
    focusVisible: () => {
      z(!0), Ee.current.focus();
    }
  }), []);
  const D = re.shouldMount && !m && !d;
  _.useEffect(() => {
    $ && h && !m && re.pulsate();
  }, [m, h, $, re]);
  const j = Ve(re, "start", I, g), U = Ve(re, "stop", C, g), F = Ve(re, "stop", k, g), V = Ve(re, "stop", te, g), Y = Ve(re, "stop", (T) => {
    $ && T.preventDefault(), G && G(T);
  }, g), H = Ve(re, "start", N, g), q = Ve(re, "stop", s, g), ye = Ve(re, "stop", O, g), P = Ve(re, "stop", (T) => {
    Mn(T.target) || z(!1), l && l(T);
  }, !1), xe = Ht((T) => {
    Ee.current || (Ee.current = T.currentTarget), Mn(T.target) && (z(!0), E && E(T)), R && R(T);
  }), Ae = () => {
    const T = Ee.current;
    return u && u !== "button" && !(T.tagName === "A" && T.href);
  }, Ue = Ht((T) => {
    h && !T.repeat && $ && T.key === " " && re.stop(T, () => {
      re.start(T);
    }), T.target === T.currentTarget && Ae() && T.key === " " && T.preventDefault(), v && v(T), T.target === T.currentTarget && Ae() && T.key === "Enter" && !d && (T.preventDefault(), S && S(T));
  }), xr = Ht((T) => {
    h && T.key === " " && $ && !T.defaultPrevented && re.stop(T, () => {
      re.pulsate(T);
    }), A && A(T), S && T.target === T.currentTarget && Ae() && T.key === " " && !T.defaultPrevented && S(T);
  });
  let Qe = u;
  Qe === "button" && (de.href || de.to) && (Qe = y);
  const Ye = {};
  Qe === "button" ? (Ye.type = oe === void 0 ? "button" : oe, Ye.disabled = d) : (!de.href && !de.to && (Ye.role = "button"), d && (Ye["aria-disabled"] = d));
  const jt = In(r, Ee), bt = {
    ...n,
    centerRipple: i,
    component: u,
    disabled: d,
    disableRipple: m,
    disableTouchRipple: g,
    focusRipple: h,
    tabIndex: B,
    focusVisible: $
  }, f = Hc(bt);
  return /* @__PURE__ */ K.jsxs(Kc, {
    as: Qe,
    className: Te(f.root, c),
    ownerState: bt,
    onBlur: P,
    onClick: S,
    onContextMenu: U,
    onFocus: xe,
    onKeyDown: Ue,
    onKeyUp: xr,
    onMouseDown: j,
    onMouseLeave: Y,
    onMouseUp: V,
    onDragLeave: F,
    onTouchEnd: q,
    onTouchMove: ye,
    onTouchStart: H,
    ref: jt,
    tabIndex: d ? -1 : B,
    type: oe,
    ...Ye,
    ...de,
    children: [a, D ? /* @__PURE__ */ K.jsx(Uo, {
      ref: w,
      center: i,
      ...W
    }) : null]
  });
});
function Ve(e, t, r, n = !1) {
  return Ht((o) => (r && r(o), n || e[t](o), !0));
}
process.env.NODE_ENV !== "production" && (ln.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: xi,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: p.bool,
  /**
   * The content of the component.
   */
  children: p.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: p.object,
  /**
   * @ignore
   */
  className: p.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Si,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: p.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: p.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: p.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: p.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: p.string,
  /**
   * @ignore
   */
  href: p.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: p.elementType,
  /**
   * @ignore
   */
  onBlur: p.func,
  /**
   * @ignore
   */
  onClick: p.func,
  /**
   * @ignore
   */
  onContextMenu: p.func,
  /**
   * @ignore
   */
  onDragLeave: p.func,
  /**
   * @ignore
   */
  onFocus: p.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: p.func,
  /**
   * @ignore
   */
  onKeyDown: p.func,
  /**
   * @ignore
   */
  onKeyUp: p.func,
  /**
   * @ignore
   */
  onMouseDown: p.func,
  /**
   * @ignore
   */
  onMouseLeave: p.func,
  /**
   * @ignore
   */
  onMouseUp: p.func,
  /**
   * @ignore
   */
  onTouchEnd: p.func,
  /**
   * @ignore
   */
  onTouchMove: p.func,
  /**
   * @ignore
   */
  onTouchStart: p.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: p.oneOfType([p.arrayOf(p.oneOfType([p.func, p.object, p.bool])), p.func, p.object]),
  /**
   * @default 0
   */
  tabIndex: p.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: p.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: p.oneOfType([p.func, p.shape({
    current: p.shape({
      pulsate: p.func.isRequired,
      start: p.func.isRequired,
      stop: p.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: p.oneOfType([p.oneOf(["button", "reset", "submit"]), p.string])
});
function Xc(e) {
  return typeof e.main == "string";
}
function Jc(e, t = []) {
  if (!Xc(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function ar(e = []) {
  return ([, t]) => t && Jc(t, e);
}
function Qc(e) {
  return rt("MuiCircularProgress", e);
}
mt("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Ge = 44, Lr = Bt`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Wr = Bt`
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
`, Zc = typeof Lr != "string" ? on`
        animation: ${Lr} 1.4s linear infinite;
      ` : null, el = typeof Wr != "string" ? on`
        animation: ${Wr} 1.4s ease-in-out infinite;
      ` : null, tl = (e) => {
  const {
    classes: t,
    variant: r,
    color: n,
    disableShrink: o
  } = e, i = {
    root: ["root", r, `color${ne(n)}`],
    svg: ["svg"],
    circle: ["circle", `circle${ne(r)}`, o && "circleDisableShrink"]
  };
  return _t(i, Qc, t);
}, rl = Oe("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`color${ne(r.color)}`]];
  }
})(gt(({
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
    style: Zc || {
      animation: `${Lr} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(ar()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), nl = Oe("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), ol = Oe("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.circle, t[`circle${ne(r.variant)}`], r.disableShrink && t.circleDisableShrink];
  }
})(gt(({
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
    style: el || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${Wr} 1.4s ease-in-out infinite`
    }
  }]
}))), un = /* @__PURE__ */ _.forwardRef(function(t, r) {
  const n = yt({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: i = "primary",
    disableShrink: a = !1,
    size: c = 40,
    style: u,
    thickness: d = 3.6,
    value: m = 0,
    variant: g = "indeterminate",
    ...h
  } = n, x = {
    ...n,
    color: i,
    disableShrink: a,
    size: c,
    thickness: d,
    value: m,
    variant: g
  }, y = tl(x), l = {}, S = {}, C = {};
  if (g === "determinate") {
    const k = 2 * Math.PI * ((Ge - d) / 2);
    l.strokeDasharray = k.toFixed(3), C["aria-valuenow"] = Math.round(m), l.strokeDashoffset = `${((100 - m) / 100 * k).toFixed(3)}px`, S.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ K.jsx(rl, {
    className: Te(y.root, o),
    style: {
      width: c,
      height: c,
      ...S,
      ...u
    },
    ownerState: x,
    ref: r,
    role: "progressbar",
    ...C,
    ...h,
    children: /* @__PURE__ */ K.jsx(nl, {
      className: y.svg,
      ownerState: x,
      viewBox: `${Ge / 2} ${Ge / 2} ${Ge} ${Ge}`,
      children: /* @__PURE__ */ K.jsx(ol, {
        className: y.circle,
        style: l,
        ownerState: x,
        cx: Ge,
        cy: Ge,
        r: (Ge - d) / 2,
        fill: "none",
        strokeWidth: d
      })
    })
  });
});
process.env.NODE_ENV !== "production" && (un.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: p.object,
  /**
   * @ignore
   */
  className: p.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: p.oneOfType([p.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), p.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: Kr(p.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: p.oneOfType([p.number, p.string]),
  /**
   * @ignore
   */
  style: p.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: p.oneOfType([p.arrayOf(p.oneOfType([p.func, p.object, p.bool])), p.func, p.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: p.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: p.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: p.oneOf(["determinate", "indeterminate"])
});
function il(e) {
  return rt("MuiButton", e);
}
const et = mt("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), Yo = /* @__PURE__ */ _.createContext({});
process.env.NODE_ENV !== "production" && (Yo.displayName = "ButtonGroupContext");
const qo = /* @__PURE__ */ _.createContext(void 0);
process.env.NODE_ENV !== "production" && (qo.displayName = "ButtonGroupButtonContext");
const al = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: i,
    loading: a,
    loadingPosition: c,
    classes: u
  } = e, d = {
    root: ["root", a && "loading", i, `${i}${ne(t)}`, `size${ne(o)}`, `${i}Size${ne(o)}`, `color${ne(t)}`, r && "disableElevation", n && "fullWidth", a && `loadingPosition${ne(c)}`],
    startIcon: ["icon", "startIcon", `iconSize${ne(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${ne(o)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, m = _t(d, il, u);
  return {
    ...u,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...m
  };
}, Go = [{
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
}], sl = Oe(ln, {
  shouldForwardProp: (e) => Vo(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${ne(r.color)}`], t[`size${ne(r.size)}`], t[`${r.variant}Size${ne(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth, r.loading && t.loading];
  }
})(gt(({
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
    [`&.${et.disabled}`]: {
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
        [`&.${et.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${et.disabled}`]: {
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
        [`&.${et.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(ar()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[n].main,
        "--variant-outlinedColor": (e.vars || e).palette[n].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.5)` : He(e.palette[n].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[n].contrastText,
        "--variant-containedBg": (e.vars || e).palette[n].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[n].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : He(e.palette[n].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[n].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : He(e.palette[n].main, e.palette.action.hoverOpacity)
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
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : He(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : He(e.palette.text.primary, e.palette.action.hoverOpacity)
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
        [`&.${et.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${et.disabled}`]: {
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
        [`&.${et.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), cl = Oe("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, r.loading && t.startIconLoadingStart, t[`iconSize${ne(r.size)}`]];
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
  }, ...Go]
})), ll = Oe("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, r.loading && t.endIconLoadingEnd, t[`iconSize${ne(r.size)}`]];
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
  }, ...Go]
})), ul = Oe("span", {
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
})), io = Oe("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder",
  overridesResolver: (e, t) => t.loadingIconPlaceholder
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), fn = /* @__PURE__ */ _.forwardRef(function(t, r) {
  const n = _.useContext(Yo), o = _.useContext(qo), i = Zt(n, t), a = yt({
    props: i,
    name: "MuiButton"
  }), {
    children: c,
    color: u = "primary",
    component: d = "button",
    className: m,
    disabled: g = !1,
    disableElevation: h = !1,
    disableFocusRipple: x = !1,
    endIcon: y,
    focusVisibleClassName: l,
    fullWidth: S = !1,
    id: C,
    loading: k = null,
    loadingIndicator: R,
    loadingPosition: E = "center",
    size: v = "medium",
    startIcon: A,
    type: I,
    variant: G = "text",
    ...te
  } = a, s = po(C), O = R ?? /* @__PURE__ */ K.jsx(un, {
    "aria-labelledby": s,
    color: "inherit",
    size: 16
  }), N = {
    ...a,
    color: u,
    component: d,
    disabled: g,
    disableElevation: h,
    disableFocusRipple: x,
    fullWidth: S,
    loading: k,
    loadingIndicator: O,
    loadingPosition: E,
    size: v,
    type: I,
    variant: G
  }, B = al(N), W = (A || k && E === "start") && /* @__PURE__ */ K.jsx(cl, {
    className: B.startIcon,
    ownerState: N,
    children: A || /* @__PURE__ */ K.jsx(io, {
      className: B.loadingIconPlaceholder,
      ownerState: N
    })
  }), le = (y || k && E === "end") && /* @__PURE__ */ K.jsx(ll, {
    className: B.endIcon,
    ownerState: N,
    children: y || /* @__PURE__ */ K.jsx(io, {
      className: B.loadingIconPlaceholder,
      ownerState: N
    })
  }), oe = o || "", de = typeof k == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ K.jsx("span", {
      className: B.loadingWrapper,
      style: {
        display: "contents"
      },
      children: k && /* @__PURE__ */ K.jsx(ul, {
        className: B.loadingIndicator,
        ownerState: N,
        children: O
      })
    })
  ) : null;
  return /* @__PURE__ */ K.jsxs(sl, {
    ownerState: N,
    className: Te(n.className, B.root, m, oe),
    component: d,
    disabled: g || k,
    focusRipple: !x,
    focusVisibleClassName: Te(B.focusVisible, l),
    ref: r,
    type: I,
    id: s,
    ...te,
    classes: B,
    children: [W, E !== "end" && de, c, E === "end" && de, le]
  });
});
process.env.NODE_ENV !== "production" && (fn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: p.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: p.object,
  /**
   * @ignore
   */
  className: p.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: p.oneOfType([p.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), p.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: p.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: p.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: p.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: p.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: p.bool,
  /**
   * Element placed after the children.
   */
  endIcon: p.node,
  /**
   * @ignore
   */
  focusVisibleClassName: p.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: p.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: p.string,
  /**
   * @ignore
   */
  id: p.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: p.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: p.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: p.oneOf(["center", "end", "start"]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: p.oneOfType([p.oneOf(["small", "medium", "large"]), p.string]),
  /**
   * Element placed before the children.
   */
  startIcon: p.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: p.oneOfType([p.arrayOf(p.oneOfType([p.func, p.object, p.bool])), p.func, p.object]),
  /**
   * @ignore
   */
  type: p.oneOfType([p.oneOf(["button", "reset", "submit"]), p.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: p.oneOfType([p.oneOf(["contained", "outlined", "text"]), p.string])
});
function vl(e) {
  const { bgcolor: t, text: r, txtcolor: n, disabled: o, onClick: i, size: a } = e;
  return (
    //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
    /* @__PURE__ */ K.jsx(
      fn,
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
function Sl(e) {
  const { bgcolor: t, text: r, txtcolor: n, bordercolor: o, borderwidth: i, hover: { hovertxtcolor: a, hoverbgcolor: c }, disabled: u, onClick: d, size: m } = e;
  return /* @__PURE__ */ K.jsx(
    fn,
    {
      type: "button",
      onClick: d,
      disabled: u,
      size: m,
      sx: {
        backgroundColor: t,
        color: n,
        hover: { backgroundColor: c, color: a }
      },
      style: {
        borderColor: o,
        borderWidth: i
      },
      children: r
    }
  );
}
function fl(e) {
  return rt("MuiIconButton", e);
}
const ao = mt("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), dl = (e) => {
  const {
    classes: t,
    disabled: r,
    color: n,
    edge: o,
    size: i,
    loading: a
  } = e, c = {
    root: ["root", a && "loading", r && "disabled", n !== "default" && `color${ne(n)}`, o && `edge${ne(o)}`, `size${ne(i)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return _t(c, fl, t);
}, pl = Oe(ln, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.loading && t.loading, r.color !== "default" && t[`color${ne(r.color)}`], r.edge && t[`edge${ne(r.edge)}`], t[`size${ne(r.size)}`]];
  }
})(gt(({
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
      "--IconButton-hoverBg": e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : He(e.palette.action.active, e.palette.action.hoverOpacity),
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
})), gt(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(ar()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(ar()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : He((e.vars || e).palette[t].main, e.palette.action.hoverOpacity)
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
  [`&.${ao.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${ao.loading}`]: {
    color: "transparent"
  }
}))), gl = Oe("span", {
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
})), dn = /* @__PURE__ */ _.forwardRef(function(t, r) {
  const n = yt({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: o = !1,
    children: i,
    className: a,
    color: c = "default",
    disabled: u = !1,
    disableFocusRipple: d = !1,
    size: m = "medium",
    id: g,
    loading: h = null,
    loadingIndicator: x,
    ...y
  } = n, l = po(g), S = x ?? /* @__PURE__ */ K.jsx(un, {
    "aria-labelledby": l,
    color: "inherit",
    size: 16
  }), C = {
    ...n,
    edge: o,
    color: c,
    disabled: u,
    disableFocusRipple: d,
    loading: h,
    loadingIndicator: S,
    size: m
  }, k = dl(C);
  return /* @__PURE__ */ K.jsxs(pl, {
    id: l,
    className: Te(k.root, a),
    centerRipple: !0,
    focusRipple: !d,
    disabled: u || h,
    ref: r,
    ...y,
    ownerState: C,
    children: [typeof h == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ K.jsx("span", {
      className: k.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ K.jsx(gl, {
        className: k.loadingIndicator,
        ownerState: C,
        children: h && S
      })
    }), i]
  });
});
process.env.NODE_ENV !== "production" && (dn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The icon to display.
   */
  children: Kr(p.node, (e) => _.Children.toArray(e.children).some((r) => /* @__PURE__ */ _.isValidElement(r) && r.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: p.object,
  /**
   * @ignore
   */
  className: p.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: p.oneOfType([p.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), p.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: p.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: p.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: p.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: p.oneOf(["end", "start", !1]),
  /**
   * @ignore
   */
  id: p.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: p.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: p.node,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: p.oneOfType([p.oneOf(["small", "medium", "large"]), p.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: p.oneOfType([p.arrayOf(p.oneOfType([p.func, p.object, p.bool])), p.func, p.object])
});
const ml = Lo(/* @__PURE__ */ K.jsx("path", {
  d: "m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"
}), "Favorite");
function El(e) {
  const { iconcolor: t, disabled: r, onClick: n } = e;
  return /* @__PURE__ */ K.jsx(dn, { onClick: n, disabled: r, children: /* @__PURE__ */ K.jsx(ml, { sx: { color: t } }) });
}
const hl = Lo(/* @__PURE__ */ K.jsx("path", {
  d: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"
}), "FavoriteBorder");
function xl(e) {
  const { iconcolor: t, disabled: r, onClick: n } = e;
  return /* @__PURE__ */ K.jsx(dn, { onClick: n, disabled: r, children: /* @__PURE__ */ K.jsx(hl, { sx: { color: t } }) });
}
export {
  vl as CustomButton,
  Sl as MyButton,
  El as MyFavourite,
  xl as MyFavouriteBorder
};
//# sourceMappingURL=index.es.js.map
