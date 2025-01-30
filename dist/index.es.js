var Wo = Object.defineProperty;
var Uo = (e, t, r) => t in e ? Wo(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var gt = (e, t, r) => Uo(e, typeof t != "symbol" ? t + "" : t, r);
import * as M from "react";
import ct, { forwardRef as Yo, useContext as qo, Children as Go, isValidElement as Lt, cloneElement as Wt } from "react";
function Ho(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Mt = { exports: {} }, yt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var an;
function Ko() {
  if (an) return yt;
  an = 1;
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
  return yt.Fragment = t, yt.jsx = r, yt.jsxs = r, yt;
}
var bt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sn;
function Xo() {
  return sn || (sn = 1, process.env.NODE_ENV !== "production" && function() {
    function e(u) {
      if (u == null) return null;
      if (typeof u == "function")
        return u.$$typeof === Ee ? null : u.displayName || u.name || null;
      if (typeof u == "string") return u;
      switch (u) {
        case A:
          return "Fragment";
        case b:
          return "Portal";
        case G:
          return "Profiler";
        case _:
          return "StrictMode";
        case N:
          return "Suspense";
        case B:
          return "SuspenseList";
      }
      if (typeof u == "object")
        switch (typeof u.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), u.$$typeof) {
          case s:
            return (u.displayName || "Context") + ".Provider";
          case ee:
            return (u._context.displayName || "Context") + ".Consumer";
          case O:
            var C = u.render;
            return u = u.displayName, u || (u = C.displayName || C.name || "", u = u !== "" ? "ForwardRef(" + u + ")" : "ForwardRef"), u;
          case W:
            return C = u.displayName || null, C !== null ? C : e(u.type) || "Memo";
          case se:
            C = u._payload, u = u._init;
            try {
              return e(u(C));
            } catch {
            }
        }
      return null;
    }
    function t(u) {
      return "" + u;
    }
    function r(u) {
      try {
        t(u);
        var C = !1;
      } catch {
        C = !0;
      }
      if (C) {
        C = console;
        var I = C.error, K = typeof Symbol == "function" && Symbol.toStringTag && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return I.call(
          C,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          K
        ), t(u);
      }
    }
    function n() {
    }
    function o() {
      if (j === 0) {
        U = console.log, F = console.info, V = console.warn, Y = console.error, H = console.group, q = console.groupCollapsed, he = console.groupEnd;
        var u = {
          configurable: !0,
          enumerable: !0,
          value: n,
          writable: !0
        };
        Object.defineProperties(console, {
          info: u,
          log: u,
          warn: u,
          error: u,
          group: u,
          groupCollapsed: u,
          groupEnd: u
        });
      }
      j++;
    }
    function i() {
      if (j--, j === 0) {
        var u = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: R({}, u, { value: U }),
          info: R({}, u, { value: F }),
          warn: R({}, u, { value: V }),
          error: R({}, u, { value: Y }),
          group: R({}, u, { value: H }),
          groupCollapsed: R({}, u, { value: q }),
          groupEnd: R({}, u, { value: he })
        });
      }
      0 > j && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function a(u) {
      if ($ === void 0)
        try {
          throw Error();
        } catch (I) {
          var C = I.stack.trim().match(/\n( *(at )?)/);
          $ = C && C[1] || "", Ce = -1 < I.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < I.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + $ + u + Ce;
    }
    function c(u, C) {
      if (!u || $e) return "";
      var I = Ue.get(u);
      if (I !== void 0) return I;
      $e = !0, I = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var K = null;
      K = te.H, te.H = null, o();
      try {
        var ve = {
          DetermineComponentFrameRoot: function() {
            try {
              if (C) {
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
                  } catch (ze) {
                    var It = ze;
                  }
                  Reflect.construct(u, [], qe);
                } else {
                  try {
                    qe.call();
                  } catch (ze) {
                    It = ze;
                  }
                  u.call(qe.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (ze) {
                  It = ze;
                }
                (qe = u()) && typeof qe.catch == "function" && qe.catch(function() {
                });
              }
            } catch (ze) {
              if (ze && It && typeof ze.stack == "string")
                return [ze.stack, It.stack];
            }
            return [null, null];
          }
        };
        ve.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var le = Object.getOwnPropertyDescriptor(
          ve.DetermineComponentFrameRoot,
          "name"
        );
        le && le.configurable && Object.defineProperty(
          ve.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var L = ve.DetermineComponentFrameRoot(), De = L[0], tt = L[1];
        if (De && tt) {
          var xe = De.split(`
`), Qe = tt.split(`
`);
          for (L = le = 0; le < xe.length && !xe[le].includes(
            "DetermineComponentFrameRoot"
          ); )
            le++;
          for (; L < Qe.length && !Qe[L].includes(
            "DetermineComponentFrameRoot"
          ); )
            L++;
          if (le === xe.length || L === Qe.length)
            for (le = xe.length - 1, L = Qe.length - 1; 1 <= le && 0 <= L && xe[le] !== Qe[L]; )
              L--;
          for (; 1 <= le && 0 <= L; le--, L--)
            if (xe[le] !== Qe[L]) {
              if (le !== 1 || L !== 1)
                do
                  if (le--, L--, 0 > L || xe[le] !== Qe[L]) {
                    var ht = `
` + xe[le].replace(
                      " at new ",
                      " at "
                    );
                    return u.displayName && ht.includes("<anonymous>") && (ht = ht.replace("<anonymous>", u.displayName)), typeof u == "function" && Ue.set(u, ht), ht;
                  }
                while (1 <= le && 0 <= L);
              break;
            }
        }
      } finally {
        $e = !1, te.H = K, i(), Error.prepareStackTrace = I;
      }
      return xe = (xe = u ? u.displayName || u.name : "") ? a(xe) : "", typeof u == "function" && Ue.set(u, xe), xe;
    }
    function f(u) {
      if (u == null) return "";
      if (typeof u == "function") {
        var C = u.prototype;
        return c(
          u,
          !(!C || !C.isReactComponent)
        );
      }
      if (typeof u == "string") return a(u);
      switch (u) {
        case N:
          return a("Suspense");
        case B:
          return a("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case O:
            return u = c(u.render, !1), u;
          case W:
            return f(u.type);
          case se:
            C = u._payload, u = u._init;
            try {
              return f(u(C));
            } catch {
            }
        }
      return "";
    }
    function d() {
      var u = te.A;
      return u === null ? null : u.getOwner();
    }
    function m(u) {
      if (w.call(u, "key")) {
        var C = Object.getOwnPropertyDescriptor(u, "key").get;
        if (C && C.isReactWarning) return !1;
      }
      return u.key !== void 0;
    }
    function p(u, C) {
      function I() {
        Je || (Je = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          C
        ));
      }
      I.isReactWarning = !0, Object.defineProperty(u, "key", {
        get: I,
        configurable: !0
      });
    }
    function g() {
      var u = e(this.type);
      return Ye[u] || (Ye[u] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), u = this.props.ref, u !== void 0 ? u : null;
    }
    function x(u, C, I, K, ve, le) {
      return I = le.ref, u = {
        $$typeof: S,
        type: u,
        key: C,
        props: le,
        _owner: ve
      }, (I !== void 0 ? I : null) !== null ? Object.defineProperty(u, "ref", {
        enumerable: !1,
        get: g
      }) : Object.defineProperty(u, "ref", { enumerable: !1, value: null }), u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(u, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    }
    function v(u, C, I, K, ve, le) {
      if (typeof u == "string" || typeof u == "function" || u === A || u === G || u === _ || u === N || u === B || u === re || typeof u == "object" && u !== null && (u.$$typeof === se || u.$$typeof === W || u.$$typeof === s || u.$$typeof === ee || u.$$typeof === O || u.$$typeof === D || u.getModuleId !== void 0)) {
        var L = C.children;
        if (L !== void 0)
          if (K)
            if (z(L)) {
              for (K = 0; K < L.length; K++)
                l(L[K], u);
              Object.freeze && Object.freeze(L);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else l(L, u);
      } else
        L = "", (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (L += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), u === null ? K = "null" : z(u) ? K = "array" : u !== void 0 && u.$$typeof === S ? (K = "<" + (e(u.type) || "Unknown") + " />", L = " Did you accidentally export a JSX literal instead of a component?") : K = typeof u, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          K,
          L
        );
      if (w.call(C, "key")) {
        L = e(u);
        var De = Object.keys(C).filter(function(xe) {
          return xe !== "key";
        });
        K = 0 < De.length ? "{key: someKey, " + De.join(": ..., ") + ": ...}" : "{key: someKey}", Nt[L + K] || (De = 0 < De.length ? "{" + De.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          K,
          L,
          De,
          L
        ), Nt[L + K] = !0);
      }
      if (L = null, I !== void 0 && (r(I), L = "" + I), m(C) && (r(C.key), L = "" + C.key), "key" in C) {
        I = {};
        for (var tt in C)
          tt !== "key" && (I[tt] = C[tt]);
      } else I = C;
      return L && p(
        I,
        typeof u == "function" ? u.displayName || u.name || "Unknown" : u
      ), x(u, L, le, ve, d(), I);
    }
    function l(u, C) {
      if (typeof u == "object" && u && u.$$typeof !== br) {
        if (z(u))
          for (var I = 0; I < u.length; I++) {
            var K = u[I];
            E(K) && T(K, C);
          }
        else if (E(u))
          u._store && (u._store.validated = 1);
        else if (u === null || typeof u != "object" ? I = null : (I = ue && u[ue] || u["@@iterator"], I = typeof I == "function" ? I : null), typeof I == "function" && I !== u.entries && (I = I.call(u), I !== u))
          for (; !(u = I.next()).done; )
            E(u.value) && T(u.value, C);
      }
    }
    function E(u) {
      return typeof u == "object" && u !== null && u.$$typeof === S;
    }
    function T(u, C) {
      if (u._store && !u._store.validated && u.key == null && (u._store.validated = 1, C = k(C), !mt[C])) {
        mt[C] = !0;
        var I = "";
        u && u._owner != null && u._owner !== d() && (I = null, typeof u._owner.tag == "number" ? I = e(u._owner.type) : typeof u._owner.name == "string" && (I = u._owner.name), I = " It was passed a child from " + I + ".");
        var K = te.getCurrentStack;
        te.getCurrentStack = function() {
          var ve = f(u.type);
          return K && (ve += K() || ""), ve;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          C,
          I
        ), te.getCurrentStack = K;
      }
    }
    function k(u) {
      var C = "", I = d();
      return I && (I = e(I.type)) && (C = `

Check the render method of \`` + I + "`."), C || (u = e(u)) && (C = `

Check the top-level render call using <` + u + ">."), C;
    }
    var P = ct, S = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), A = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), G = Symbol.for("react.profiler"), ee = Symbol.for("react.consumer"), s = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), re = Symbol.for("react.offscreen"), ue = Symbol.iterator, Ee = Symbol.for("react.client.reference"), te = P.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, w = Object.prototype.hasOwnProperty, R = Object.assign, D = Symbol.for("react.client.reference"), z = Array.isArray, j = 0, U, F, V, Y, H, q, he;
    n.__reactDisabledLog = !0;
    var $, Ce, $e = !1, Ue = new (typeof WeakMap == "function" ? WeakMap : Map)(), br = Symbol.for("react.client.reference"), Je, Ye = {}, Nt = {}, mt = {};
    bt.Fragment = A, bt.jsx = function(u, C, I, K, ve) {
      return v(u, C, I, !1, K, ve);
    }, bt.jsxs = function(u, C, I, K, ve) {
      return v(u, C, I, !0, K, ve);
    };
  }()), bt;
}
var cn;
function Jo() {
  return cn || (cn = 1, process.env.NODE_ENV === "production" ? Mt.exports = Ko() : Mt.exports = Xo()), Mt.exports;
}
var ge = Jo(), Bt = { exports: {} }, jt = { exports: {} }, Q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ln;
function Qo() {
  if (ln) return Q;
  ln = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
  function P(b) {
    if (typeof b == "object" && b !== null) {
      var A = b.$$typeof;
      switch (A) {
        case t:
          switch (b = b.type, b) {
            case f:
            case d:
            case n:
            case i:
            case o:
            case p:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case c:
                case m:
                case v:
                case x:
                case a:
                  return b;
                default:
                  return A;
              }
          }
        case r:
          return A;
      }
    }
  }
  function S(b) {
    return P(b) === d;
  }
  return Q.AsyncMode = f, Q.ConcurrentMode = d, Q.ContextConsumer = c, Q.ContextProvider = a, Q.Element = t, Q.ForwardRef = m, Q.Fragment = n, Q.Lazy = v, Q.Memo = x, Q.Portal = r, Q.Profiler = i, Q.StrictMode = o, Q.Suspense = p, Q.isAsyncMode = function(b) {
    return S(b) || P(b) === f;
  }, Q.isConcurrentMode = S, Q.isContextConsumer = function(b) {
    return P(b) === c;
  }, Q.isContextProvider = function(b) {
    return P(b) === a;
  }, Q.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, Q.isForwardRef = function(b) {
    return P(b) === m;
  }, Q.isFragment = function(b) {
    return P(b) === n;
  }, Q.isLazy = function(b) {
    return P(b) === v;
  }, Q.isMemo = function(b) {
    return P(b) === x;
  }, Q.isPortal = function(b) {
    return P(b) === r;
  }, Q.isProfiler = function(b) {
    return P(b) === i;
  }, Q.isStrictMode = function(b) {
    return P(b) === o;
  }, Q.isSuspense = function(b) {
    return P(b) === p;
  }, Q.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === n || b === d || b === i || b === o || b === p || b === g || typeof b == "object" && b !== null && (b.$$typeof === v || b.$$typeof === x || b.$$typeof === a || b.$$typeof === c || b.$$typeof === m || b.$$typeof === E || b.$$typeof === T || b.$$typeof === k || b.$$typeof === l);
  }, Q.typeOf = P, Q;
}
var Z = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var un;
function Zo() {
  return un || (un = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, d = e ? Symbol.for("react.concurrent_mode") : 60111, m = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, l = e ? Symbol.for("react.block") : 60121, E = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
    function P($) {
      return typeof $ == "string" || typeof $ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      $ === n || $ === d || $ === i || $ === o || $ === p || $ === g || typeof $ == "object" && $ !== null && ($.$$typeof === v || $.$$typeof === x || $.$$typeof === a || $.$$typeof === c || $.$$typeof === m || $.$$typeof === E || $.$$typeof === T || $.$$typeof === k || $.$$typeof === l);
    }
    function S($) {
      if (typeof $ == "object" && $ !== null) {
        var Ce = $.$$typeof;
        switch (Ce) {
          case t:
            var $e = $.type;
            switch ($e) {
              case f:
              case d:
              case n:
              case i:
              case o:
              case p:
                return $e;
              default:
                var Ue = $e && $e.$$typeof;
                switch (Ue) {
                  case c:
                  case m:
                  case v:
                  case x:
                  case a:
                    return Ue;
                  default:
                    return Ce;
                }
            }
          case r:
            return Ce;
        }
      }
    }
    var b = f, A = d, _ = c, G = a, ee = t, s = m, O = n, N = v, B = x, W = r, se = i, re = o, ue = p, Ee = !1;
    function te($) {
      return Ee || (Ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), w($) || S($) === f;
    }
    function w($) {
      return S($) === d;
    }
    function R($) {
      return S($) === c;
    }
    function D($) {
      return S($) === a;
    }
    function z($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === t;
    }
    function j($) {
      return S($) === m;
    }
    function U($) {
      return S($) === n;
    }
    function F($) {
      return S($) === v;
    }
    function V($) {
      return S($) === x;
    }
    function Y($) {
      return S($) === r;
    }
    function H($) {
      return S($) === i;
    }
    function q($) {
      return S($) === o;
    }
    function he($) {
      return S($) === p;
    }
    Z.AsyncMode = b, Z.ConcurrentMode = A, Z.ContextConsumer = _, Z.ContextProvider = G, Z.Element = ee, Z.ForwardRef = s, Z.Fragment = O, Z.Lazy = N, Z.Memo = B, Z.Portal = W, Z.Profiler = se, Z.StrictMode = re, Z.Suspense = ue, Z.isAsyncMode = te, Z.isConcurrentMode = w, Z.isContextConsumer = R, Z.isContextProvider = D, Z.isElement = z, Z.isForwardRef = j, Z.isFragment = U, Z.isLazy = F, Z.isMemo = V, Z.isPortal = Y, Z.isProfiler = H, Z.isStrictMode = q, Z.isSuspense = he, Z.isValidElementType = P, Z.typeOf = S;
  }()), Z;
}
var fn;
function Fr() {
  return fn || (fn = 1, process.env.NODE_ENV === "production" ? jt.exports = Qo() : jt.exports = Zo()), jt.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var vr, dn;
function ei() {
  if (dn) return vr;
  dn = 1;
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
      var f = Object.getOwnPropertyNames(a).map(function(m) {
        return a[m];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var d = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(m) {
        d[m] = m;
      }), Object.keys(Object.assign({}, d)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return vr = o() ? Object.assign : function(i, a) {
    for (var c, f = n(i), d, m = 1; m < arguments.length; m++) {
      c = Object(arguments[m]);
      for (var p in c)
        t.call(c, p) && (f[p] = c[p]);
      if (e) {
        d = e(c);
        for (var g = 0; g < d.length; g++)
          r.call(c, d[g]) && (f[d[g]] = c[d[g]]);
      }
    }
    return f;
  }, vr;
}
var Sr, pn;
function Vr() {
  if (pn) return Sr;
  pn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Sr = e, Sr;
}
var Er, mn;
function Zn() {
  return mn || (mn = 1, Er = Function.call.bind(Object.prototype.hasOwnProperty)), Er;
}
var Cr, hn;
function ti() {
  if (hn) return Cr;
  hn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = /* @__PURE__ */ Vr(), r = {}, n = /* @__PURE__ */ Zn();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, c, f, d) {
    if (process.env.NODE_ENV !== "production") {
      for (var m in i)
        if (n(i, m)) {
          var p;
          try {
            if (typeof i[m] != "function") {
              var g = Error(
                (f || "React class") + ": " + c + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            p = i[m](a, m, f, c, null, t);
          } catch (v) {
            p = v;
          }
          if (p && !(p instanceof Error) && e(
            (f || "React class") + ": type specification of " + c + " `" + m + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in r)) {
            r[p.message] = !0;
            var x = d ? d() : "";
            e(
              "Failed " + c + " type: " + p.message + (x ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Cr = o, Cr;
}
var xr, gn;
function ri() {
  if (gn) return xr;
  gn = 1;
  var e = Fr(), t = ei(), r = /* @__PURE__ */ Vr(), n = /* @__PURE__ */ Zn(), o = /* @__PURE__ */ ti(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var f = "Warning: " + c;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return xr = function(c, f) {
    var d = typeof Symbol == "function" && Symbol.iterator, m = "@@iterator";
    function p(w) {
      var R = w && (d && w[d] || w[m]);
      if (typeof R == "function")
        return R;
    }
    var g = "<<anonymous>>", x = {
      array: T("array"),
      bigint: T("bigint"),
      bool: T("boolean"),
      func: T("function"),
      number: T("number"),
      object: T("object"),
      string: T("string"),
      symbol: T("symbol"),
      any: k(),
      arrayOf: P,
      element: S(),
      elementType: b(),
      instanceOf: A,
      node: s(),
      objectOf: G,
      oneOf: _,
      oneOfType: ee,
      shape: N,
      exact: B
    };
    function v(w, R) {
      return w === R ? w !== 0 || 1 / w === 1 / R : w !== w && R !== R;
    }
    function l(w, R) {
      this.message = w, this.data = R && typeof R == "object" ? R : {}, this.stack = "";
    }
    l.prototype = Error.prototype;
    function E(w) {
      if (process.env.NODE_ENV !== "production")
        var R = {}, D = 0;
      function z(U, F, V, Y, H, q, he) {
        if (Y = Y || g, q = q || V, he !== r) {
          if (f) {
            var $ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw $.name = "Invariant Violation", $;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ce = Y + ":" + V;
            !R[Ce] && // Avoid spamming the console because they are often not actionable except for lib authors
            D < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + q + "` prop on `" + Y + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), R[Ce] = !0, D++);
          }
        }
        return F[V] == null ? U ? F[V] === null ? new l("The " + H + " `" + q + "` is marked as required " + ("in `" + Y + "`, but its value is `null`.")) : new l("The " + H + " `" + q + "` is marked as required in " + ("`" + Y + "`, but its value is `undefined`.")) : null : w(F, V, Y, H, q);
      }
      var j = z.bind(null, !1);
      return j.isRequired = z.bind(null, !0), j;
    }
    function T(w) {
      function R(D, z, j, U, F, V) {
        var Y = D[z], H = re(Y);
        if (H !== w) {
          var q = ue(Y);
          return new l(
            "Invalid " + U + " `" + F + "` of type " + ("`" + q + "` supplied to `" + j + "`, expected ") + ("`" + w + "`."),
            { expectedType: w }
          );
        }
        return null;
      }
      return E(R);
    }
    function k() {
      return E(a);
    }
    function P(w) {
      function R(D, z, j, U, F) {
        if (typeof w != "function")
          return new l("Property `" + F + "` of component `" + j + "` has invalid PropType notation inside arrayOf.");
        var V = D[z];
        if (!Array.isArray(V)) {
          var Y = re(V);
          return new l("Invalid " + U + " `" + F + "` of type " + ("`" + Y + "` supplied to `" + j + "`, expected an array."));
        }
        for (var H = 0; H < V.length; H++) {
          var q = w(V, H, j, U, F + "[" + H + "]", r);
          if (q instanceof Error)
            return q;
        }
        return null;
      }
      return E(R);
    }
    function S() {
      function w(R, D, z, j, U) {
        var F = R[D];
        if (!c(F)) {
          var V = re(F);
          return new l("Invalid " + j + " `" + U + "` of type " + ("`" + V + "` supplied to `" + z + "`, expected a single ReactElement."));
        }
        return null;
      }
      return E(w);
    }
    function b() {
      function w(R, D, z, j, U) {
        var F = R[D];
        if (!e.isValidElementType(F)) {
          var V = re(F);
          return new l("Invalid " + j + " `" + U + "` of type " + ("`" + V + "` supplied to `" + z + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return E(w);
    }
    function A(w) {
      function R(D, z, j, U, F) {
        if (!(D[z] instanceof w)) {
          var V = w.name || g, Y = te(D[z]);
          return new l("Invalid " + U + " `" + F + "` of type " + ("`" + Y + "` supplied to `" + j + "`, expected ") + ("instance of `" + V + "`."));
        }
        return null;
      }
      return E(R);
    }
    function _(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function R(D, z, j, U, F) {
        for (var V = D[z], Y = 0; Y < w.length; Y++)
          if (v(V, w[Y]))
            return null;
        var H = JSON.stringify(w, function(he, $) {
          var Ce = ue($);
          return Ce === "symbol" ? String($) : $;
        });
        return new l("Invalid " + U + " `" + F + "` of value `" + String(V) + "` " + ("supplied to `" + j + "`, expected one of " + H + "."));
      }
      return E(R);
    }
    function G(w) {
      function R(D, z, j, U, F) {
        if (typeof w != "function")
          return new l("Property `" + F + "` of component `" + j + "` has invalid PropType notation inside objectOf.");
        var V = D[z], Y = re(V);
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
      return E(R);
    }
    function ee(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var R = 0; R < w.length; R++) {
        var D = w[R];
        if (typeof D != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Ee(D) + " at index " + R + "."
          ), a;
      }
      function z(j, U, F, V, Y) {
        for (var H = [], q = 0; q < w.length; q++) {
          var he = w[q], $ = he(j, U, F, V, Y, r);
          if ($ == null)
            return null;
          $.data && n($.data, "expectedType") && H.push($.data.expectedType);
        }
        var Ce = H.length > 0 ? ", expected one of type [" + H.join(", ") + "]" : "";
        return new l("Invalid " + V + " `" + Y + "` supplied to " + ("`" + F + "`" + Ce + "."));
      }
      return E(z);
    }
    function s() {
      function w(R, D, z, j, U) {
        return W(R[D]) ? null : new l("Invalid " + j + " `" + U + "` supplied to " + ("`" + z + "`, expected a ReactNode."));
      }
      return E(w);
    }
    function O(w, R, D, z, j) {
      return new l(
        (w || "React class") + ": " + R + " type `" + D + "." + z + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + j + "`."
      );
    }
    function N(w) {
      function R(D, z, j, U, F) {
        var V = D[z], Y = re(V);
        if (Y !== "object")
          return new l("Invalid " + U + " `" + F + "` of type `" + Y + "` " + ("supplied to `" + j + "`, expected `object`."));
        for (var H in w) {
          var q = w[H];
          if (typeof q != "function")
            return O(j, U, F, H, ue(q));
          var he = q(V, H, j, U, F + "." + H, r);
          if (he)
            return he;
        }
        return null;
      }
      return E(R);
    }
    function B(w) {
      function R(D, z, j, U, F) {
        var V = D[z], Y = re(V);
        if (Y !== "object")
          return new l("Invalid " + U + " `" + F + "` of type `" + Y + "` " + ("supplied to `" + j + "`, expected `object`."));
        var H = t({}, D[z], w);
        for (var q in H) {
          var he = w[q];
          if (n(w, q) && typeof he != "function")
            return O(j, U, F, q, ue(he));
          if (!he)
            return new l(
              "Invalid " + U + " `" + F + "` key `" + q + "` supplied to `" + j + "`.\nBad object: " + JSON.stringify(D[z], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(w), null, "  ")
            );
          var $ = he(V, q, j, U, F + "." + q, r);
          if ($)
            return $;
        }
        return null;
      }
      return E(R);
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
          var R = p(w);
          if (R) {
            var D = R.call(w), z;
            if (R !== w.entries) {
              for (; !(z = D.next()).done; )
                if (!W(z.value))
                  return !1;
            } else
              for (; !(z = D.next()).done; ) {
                var j = z.value;
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
    function se(w, R) {
      return w === "symbol" ? !0 : R ? R["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && R instanceof Symbol : !1;
    }
    function re(w) {
      var R = typeof w;
      return Array.isArray(w) ? "array" : w instanceof RegExp ? "object" : se(R, w) ? "symbol" : R;
    }
    function ue(w) {
      if (typeof w > "u" || w === null)
        return "" + w;
      var R = re(w);
      if (R === "object") {
        if (w instanceof Date)
          return "date";
        if (w instanceof RegExp)
          return "regexp";
      }
      return R;
    }
    function Ee(w) {
      var R = ue(w);
      switch (R) {
        case "array":
        case "object":
          return "an " + R;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + R;
        default:
          return R;
      }
    }
    function te(w) {
      return !w.constructor || !w.constructor.name ? g : w.constructor.name;
    }
    return x.checkPropTypes = o, x.resetWarningCache = o.resetWarningCache, x.PropTypes = x, x;
  }, xr;
}
var Tr, yn;
function ni() {
  if (yn) return Tr;
  yn = 1;
  var e = /* @__PURE__ */ Vr();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Tr = function() {
    function n(a, c, f, d, m, p) {
      if (p !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
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
  }, Tr;
}
var bn;
function oi() {
  if (bn) return Bt.exports;
  if (bn = 1, process.env.NODE_ENV !== "production") {
    var e = Fr(), t = !0;
    Bt.exports = /* @__PURE__ */ ri()(e.isElement, t);
  } else
    Bt.exports = /* @__PURE__ */ ni()();
  return Bt.exports;
}
var ii = /* @__PURE__ */ oi();
const h = /* @__PURE__ */ Ho(ii);
function eo(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = eo(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function we() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = eo(e)) && (n && (n += " "), n += t);
  return n;
}
function Kt(e, t) {
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
              const f = c;
              r[o][f] = Kt(i[f], a[f]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
function Lr(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let a = "", c = !0;
    for (let f = 0; f < i.length; f += 1) {
      const d = i[f];
      d && (a += (c === !0 ? "" : " ") + t(d), c = !1, r && r[d] && (a += " " + r[d]));
    }
    n[o] = a;
  }
  return n;
}
function He(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function ai(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Wr(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), ai(e, t, r);
}
function si(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), process.env.NODE_ENV !== "production" && e.length !== e.trim().length && console.error(`MUI: The color: "${e}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Ke(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Ke(si(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : He(9, e));
  let n = e.substring(t + 1, e.length - 1), o;
  if (r === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(o))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : He(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: r,
    values: n,
    colorSpace: o
  };
}
const ci = (e) => {
  const t = Ke(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Et = (e, t) => {
  try {
    return ci(e);
  } catch {
    return t && process.env.NODE_ENV !== "production" && console.warn(t), e;
  }
};
function tr(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: n
  } = e;
  return t.includes("rgb") ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : t.includes("hsl") && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), t.includes("color") ? n = `${r} ${n.join(" ")}` : n = `${n.join(", ")}`, `${t}(${n})`;
}
function to(e) {
  e = Ke(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (d, m = (d + r / 30) % 12) => o - i * Math.max(Math.min(m - 3, 9 - m, 1), -1);
  let c = "rgb";
  const f = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (c += "a", f.push(t[3])), tr({
    type: c,
    values: f
  });
}
function Ar(e) {
  e = Ke(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Ke(to(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function vn(e, t) {
  const r = Ar(e), n = Ar(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function st(e, t) {
  return e = Ke(e), t = Wr(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, tr(e);
}
function Dt(e, t, r) {
  try {
    return st(e, t);
  } catch {
    return e;
  }
}
function Ur(e, t) {
  if (e = Ke(e), t = Wr(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return tr(e);
}
function ie(e, t, r) {
  try {
    return Ur(e, t);
  } catch {
    return e;
  }
}
function Yr(e, t) {
  if (e = Ke(e), t = Wr(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return tr(e);
}
function ae(e, t, r) {
  try {
    return Yr(e, t);
  } catch {
    return e;
  }
}
function li(e, t = 0.15) {
  return Ar(e) > 0.5 ? Ur(e, t) : Yr(e, t);
}
function zt(e, t, r) {
  try {
    return li(e, t);
  } catch {
    return e;
  }
}
function ro(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
var Ft = { exports: {} }, ne = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sn;
function ui() {
  if (Sn) return ne;
  Sn = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.consumer"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), x = Symbol.for("react.client.reference");
  function v(l) {
    if (typeof l == "object" && l !== null) {
      var E = l.$$typeof;
      switch (E) {
        case e:
          switch (l = l.type, l) {
            case r:
            case o:
            case n:
            case f:
            case d:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case a:
                case c:
                case p:
                case m:
                  return l;
                case i:
                  return l;
                default:
                  return E;
              }
          }
        case t:
          return E;
      }
    }
  }
  return ne.ContextConsumer = i, ne.ContextProvider = a, ne.Element = e, ne.ForwardRef = c, ne.Fragment = r, ne.Lazy = p, ne.Memo = m, ne.Portal = t, ne.Profiler = o, ne.StrictMode = n, ne.Suspense = f, ne.SuspenseList = d, ne.isContextConsumer = function(l) {
    return v(l) === i;
  }, ne.isContextProvider = function(l) {
    return v(l) === a;
  }, ne.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === e;
  }, ne.isForwardRef = function(l) {
    return v(l) === c;
  }, ne.isFragment = function(l) {
    return v(l) === r;
  }, ne.isLazy = function(l) {
    return v(l) === p;
  }, ne.isMemo = function(l) {
    return v(l) === m;
  }, ne.isPortal = function(l) {
    return v(l) === t;
  }, ne.isProfiler = function(l) {
    return v(l) === o;
  }, ne.isStrictMode = function(l) {
    return v(l) === n;
  }, ne.isSuspense = function(l) {
    return v(l) === f;
  }, ne.isSuspenseList = function(l) {
    return v(l) === d;
  }, ne.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === r || l === o || l === n || l === f || l === d || l === g || typeof l == "object" && l !== null && (l.$$typeof === p || l.$$typeof === m || l.$$typeof === a || l.$$typeof === i || l.$$typeof === c || l.$$typeof === x || l.getModuleId !== void 0);
  }, ne.typeOf = v, ne;
}
var oe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var En;
function fi() {
  return En || (En = 1, process.env.NODE_ENV !== "production" && function() {
    function e(l) {
      if (typeof l == "object" && l !== null) {
        var E = l.$$typeof;
        switch (E) {
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
                  case f:
                  case g:
                  case p:
                    return l;
                  case a:
                    return l;
                  default:
                    return E;
                }
            }
          case r:
            return E;
        }
      }
    }
    var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.consumer"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), v = Symbol.for("react.client.reference");
    oe.ContextConsumer = a, oe.ContextProvider = c, oe.Element = t, oe.ForwardRef = f, oe.Fragment = n, oe.Lazy = g, oe.Memo = p, oe.Portal = r, oe.Profiler = i, oe.StrictMode = o, oe.Suspense = d, oe.SuspenseList = m, oe.isContextConsumer = function(l) {
      return e(l) === a;
    }, oe.isContextProvider = function(l) {
      return e(l) === c;
    }, oe.isElement = function(l) {
      return typeof l == "object" && l !== null && l.$$typeof === t;
    }, oe.isForwardRef = function(l) {
      return e(l) === f;
    }, oe.isFragment = function(l) {
      return e(l) === n;
    }, oe.isLazy = function(l) {
      return e(l) === g;
    }, oe.isMemo = function(l) {
      return e(l) === p;
    }, oe.isPortal = function(l) {
      return e(l) === r;
    }, oe.isProfiler = function(l) {
      return e(l) === i;
    }, oe.isStrictMode = function(l) {
      return e(l) === o;
    }, oe.isSuspense = function(l) {
      return e(l) === d;
    }, oe.isSuspenseList = function(l) {
      return e(l) === m;
    }, oe.isValidElementType = function(l) {
      return typeof l == "string" || typeof l == "function" || l === n || l === i || l === o || l === d || l === m || l === x || typeof l == "object" && l !== null && (l.$$typeof === g || l.$$typeof === p || l.$$typeof === c || l.$$typeof === a || l.$$typeof === f || l.$$typeof === v || l.getModuleId !== void 0);
    }, oe.typeOf = e;
  }()), oe;
}
var Cn;
function di() {
  return Cn || (Cn = 1, process.env.NODE_ENV === "production" ? Ft.exports = /* @__PURE__ */ ui() : Ft.exports = /* @__PURE__ */ fi()), Ft.exports;
}
var Xt = /* @__PURE__ */ di();
function Le(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function no(e) {
  if (/* @__PURE__ */ M.isValidElement(e) || Xt.isValidElementType(e) || !Le(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = no(e[r]);
  }), t;
}
function Pe(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Le(e) && Le(t) && Object.keys(t).forEach((o) => {
    /* @__PURE__ */ M.isValidElement(t[o]) || Xt.isValidElementType(t[o]) ? n[o] = t[o] : Le(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Le(e[o]) ? n[o] = Pe(e[o], t[o], r) : r.clone ? n[o] = Le(t[o]) ? no(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
function pi(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function mi(e, t, r, n, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof i == "function" && !pi(i) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const hi = ro(h.elementType, mi);
function oo(e, t = "") {
  return e.displayName || e.name || t;
}
function xn(e, t, r) {
  const n = oo(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function gi(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return oo(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Xt.ForwardRef:
          return xn(e, e.render, "ForwardRef");
        case Xt.Memo:
          return xn(e, e.type, "memo");
        default:
          return;
      }
  }
}
const yi = h.oneOfType([h.func, h.object]);
function ye(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : He(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function bi(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const vi = typeof window < "u" ? M.useLayoutEffect : M.useEffect;
let Tn = 0;
function Si(e) {
  const [t, r] = M.useState(e), n = e || t;
  return M.useEffect(() => {
    t == null && (Tn += 1, r(`mui-${Tn}`));
  }, [t]), n;
}
const Ei = {
  ...M
}, wn = Ei.useId;
function Ci(e) {
  if (wn !== void 0) {
    const t = wn();
    return e ?? t;
  }
  return Si(e);
}
function Ut(e) {
  const t = M.useRef(e);
  return vi(() => {
    t.current = e;
  }), M.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function On(...e) {
  return M.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      bi(r, t);
    });
  }, e);
}
const Pn = {};
function io(e, t) {
  const r = M.useRef(Pn);
  return r.current === Pn && (r.current = e(t)), r;
}
const xi = [];
function Ti(e) {
  M.useEffect(e, xi);
}
class qr {
  constructor() {
    gt(this, "currentId", null);
    gt(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    gt(this, "disposeEffect", () => this.clear);
  }
  static create() {
    return new qr();
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
function wi() {
  const e = io(qr.create).current;
  return Ti(e.disposeEffect), e;
}
function Rn(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const $n = (e) => e, Oi = () => {
  let e = $n;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = $n;
    }
  };
}, Pi = Oi(), Ri = {
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
function Rt(e, t, r = "Mui") {
  const n = Ri[t];
  return n ? `${r}-${n}` : `${Pi.generate(e)}-${t}`;
}
function rr(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = Rt(e, o, r);
  }), n;
}
function xt(e, t) {
  return t ? Pe(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Xe = process.env.NODE_ENV !== "production" ? h.oneOfType([h.number, h.string, h.object, h.array]) : {};
function $i(e, t) {
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
function Ai(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function ki(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r) {
    if (process.env.NODE_ENV !== "production")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The provided shorthand ${`(${t})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.` : He(18, `(${t})`));
    return null;
  }
  const [, n, o] = r, i = Number.isNaN(+n) ? n || 0 : +n;
  return e.containerQueries(o).up(i);
}
function _i(e) {
  const t = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function r(i, a) {
    i.up = (...c) => t(e.breakpoints.up(...c), a), i.down = (...c) => t(e.breakpoints.down(...c), a), i.between = (...c) => t(e.breakpoints.between(...c), a), i.only = (...c) => t(e.breakpoints.only(...c), a), i.not = (...c) => {
      const f = t(e.breakpoints.not(...c), a);
      return f.includes("not all and") ? f.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : f;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const nr = {
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
}, An = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${nr[e]}px)`
}, Ni = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : nr[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function We(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || An;
    return t.reduce((a, c, f) => (a[i.up(i.keys[f])] = r(t[f]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || An;
    return Object.keys(t).reduce((a, c) => {
      if (Ai(i.keys, c)) {
        const f = ki(n.containerQueries ? n : Ni, c);
        f && (a[f] = r(t[c], c));
      } else if (Object.keys(i.values || nr).includes(c)) {
        const f = i.up(c);
        a[f] = r(t[c], c);
      } else {
        const f = c;
        a[f] = t[f];
      }
      return a;
    }, {});
  }
  return r(t);
}
function Ii(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function Mi(e, t) {
  return e.reduce((r, n) => {
    const o = r[n];
    return (!o || Object.keys(o).length === 0) && delete r[n], r;
  }, t);
}
function or(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const n = `vars.${t}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return t.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function Jt(e, t, r, n = r) {
  let o;
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = or(e, r) || n, t && (o = t(o, n, e)), o;
}
function pe(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const c = a[t], f = a.theme, d = or(f, n) || {};
    return We(a, c, (p) => {
      let g = Jt(d, o, p);
      return p === g && typeof p == "string" && (g = Jt(d, o, `${t}${p === "default" ? "" : ye(p)}`, p)), r === !1 ? g : {
        [r]: g
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Xe
  } : {}, i.filterProps = [t], i;
}
function Bi(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const ji = {
  m: "margin",
  p: "padding"
}, Di = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, kn = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, zi = Bi((e) => {
  if (e.length > 2)
    if (kn[e])
      e = kn[e];
    else
      return [e];
  const [t, r] = e.split(""), n = ji[t], o = Di[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), ir = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ar = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Fi = [...ir, ...ar];
function $t(e, t, r, n) {
  const o = or(e, t, !0) ?? r;
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
function Gr(e) {
  return $t(e, "spacing", 8, "spacing");
}
function At(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Vi(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = At(t, r), n), {});
}
function Li(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = zi(r), i = Vi(o, n), a = e[r];
  return We(e, a, i);
}
function ao(e, t) {
  const r = Gr(e.theme);
  return Object.keys(e).map((n) => Li(e, t, n, r)).reduce(xt, {});
}
function fe(e) {
  return ao(e, ir);
}
fe.propTypes = process.env.NODE_ENV !== "production" ? ir.reduce((e, t) => (e[t] = Xe, e), {}) : {};
fe.filterProps = ir;
function de(e) {
  return ao(e, ar);
}
de.propTypes = process.env.NODE_ENV !== "production" ? ar.reduce((e, t) => (e[t] = Xe, e), {}) : {};
de.filterProps = ar;
process.env.NODE_ENV !== "production" && Fi.reduce((e, t) => (e[t] = Xe, e), {});
function sr(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? xt(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function ke(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function _e(e, t) {
  return pe({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const Wi = _e("border", ke), Ui = _e("borderTop", ke), Yi = _e("borderRight", ke), qi = _e("borderBottom", ke), Gi = _e("borderLeft", ke), Hi = _e("borderColor"), Ki = _e("borderTopColor"), Xi = _e("borderRightColor"), Ji = _e("borderBottomColor"), Qi = _e("borderLeftColor"), Zi = _e("outline", ke), ea = _e("outlineColor"), cr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = $t(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: At(t, n)
    });
    return We(e, e.borderRadius, r);
  }
  return null;
};
cr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Xe
} : {};
cr.filterProps = ["borderRadius"];
sr(Wi, Ui, Yi, qi, Gi, Hi, Ki, Xi, Ji, Qi, cr, Zi, ea);
const lr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = $t(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: At(t, n)
    });
    return We(e, e.gap, r);
  }
  return null;
};
lr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Xe
} : {};
lr.filterProps = ["gap"];
const ur = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = $t(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: At(t, n)
    });
    return We(e, e.columnGap, r);
  }
  return null;
};
ur.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Xe
} : {};
ur.filterProps = ["columnGap"];
const fr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = $t(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: At(t, n)
    });
    return We(e, e.rowGap, r);
  }
  return null;
};
fr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Xe
} : {};
fr.filterProps = ["rowGap"];
const ta = pe({
  prop: "gridColumn"
}), ra = pe({
  prop: "gridRow"
}), na = pe({
  prop: "gridAutoFlow"
}), oa = pe({
  prop: "gridAutoColumns"
}), ia = pe({
  prop: "gridAutoRows"
}), aa = pe({
  prop: "gridTemplateColumns"
}), sa = pe({
  prop: "gridTemplateRows"
}), ca = pe({
  prop: "gridTemplateAreas"
}), la = pe({
  prop: "gridArea"
});
sr(lr, ur, fr, ta, ra, na, oa, ia, aa, sa, ca, la);
function lt(e, t) {
  return t === "grey" ? t : e;
}
const ua = pe({
  prop: "color",
  themeKey: "palette",
  transform: lt
}), fa = pe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: lt
}), da = pe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: lt
});
sr(ua, fa, da);
function Oe(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const pa = pe({
  prop: "width",
  transform: Oe
}), Hr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, a, c, f;
      const n = ((a = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : a[r]) || nr[r];
      return n ? ((f = (c = e.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : f.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: Oe(r)
      };
    };
    return We(e, e.maxWidth, t);
  }
  return null;
};
Hr.filterProps = ["maxWidth"];
const ma = pe({
  prop: "minWidth",
  transform: Oe
}), ha = pe({
  prop: "height",
  transform: Oe
}), ga = pe({
  prop: "maxHeight",
  transform: Oe
}), ya = pe({
  prop: "minHeight",
  transform: Oe
});
pe({
  prop: "size",
  cssProperty: "width",
  transform: Oe
});
pe({
  prop: "size",
  cssProperty: "height",
  transform: Oe
});
const ba = pe({
  prop: "boxSizing"
});
sr(pa, Hr, ma, ha, ga, ya, ba);
const dr = {
  // borders
  border: {
    themeKey: "borders",
    transform: ke
  },
  borderTop: {
    themeKey: "borders",
    transform: ke
  },
  borderRight: {
    themeKey: "borders",
    transform: ke
  },
  borderBottom: {
    themeKey: "borders",
    transform: ke
  },
  borderLeft: {
    themeKey: "borders",
    transform: ke
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
    transform: ke
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: cr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: lt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: lt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: lt
  },
  // spacing
  p: {
    style: de
  },
  pt: {
    style: de
  },
  pr: {
    style: de
  },
  pb: {
    style: de
  },
  pl: {
    style: de
  },
  px: {
    style: de
  },
  py: {
    style: de
  },
  padding: {
    style: de
  },
  paddingTop: {
    style: de
  },
  paddingRight: {
    style: de
  },
  paddingBottom: {
    style: de
  },
  paddingLeft: {
    style: de
  },
  paddingX: {
    style: de
  },
  paddingY: {
    style: de
  },
  paddingInline: {
    style: de
  },
  paddingInlineStart: {
    style: de
  },
  paddingInlineEnd: {
    style: de
  },
  paddingBlock: {
    style: de
  },
  paddingBlockStart: {
    style: de
  },
  paddingBlockEnd: {
    style: de
  },
  m: {
    style: fe
  },
  mt: {
    style: fe
  },
  mr: {
    style: fe
  },
  mb: {
    style: fe
  },
  ml: {
    style: fe
  },
  mx: {
    style: fe
  },
  my: {
    style: fe
  },
  margin: {
    style: fe
  },
  marginTop: {
    style: fe
  },
  marginRight: {
    style: fe
  },
  marginBottom: {
    style: fe
  },
  marginLeft: {
    style: fe
  },
  marginX: {
    style: fe
  },
  marginY: {
    style: fe
  },
  marginInline: {
    style: fe
  },
  marginInlineStart: {
    style: fe
  },
  marginInlineEnd: {
    style: fe
  },
  marginBlock: {
    style: fe
  },
  marginBlockStart: {
    style: fe
  },
  marginBlockEnd: {
    style: fe
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
    style: lr
  },
  rowGap: {
    style: fr
  },
  columnGap: {
    style: ur
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
    transform: Oe
  },
  maxWidth: {
    style: Hr
  },
  minWidth: {
    transform: Oe
  },
  height: {
    transform: Oe
  },
  maxHeight: {
    transform: Oe
  },
  minHeight: {
    transform: Oe
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
function va(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function Sa(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ea() {
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
      cssProperty: f = r,
      themeKey: d,
      transform: m,
      style: p
    } = c;
    if (n == null)
      return null;
    if (d === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const g = or(o, d) || {};
    return p ? p(a) : We(a, n, (v) => {
      let l = Jt(g, m, v);
      return v === l && typeof v == "string" && (l = Jt(g, m, `${r}${v === "default" ? "" : ye(v)}`, v)), f === !1 ? l : {
        [f]: l
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
    const i = o.unstable_sxConfig ?? dr;
    function a(c) {
      let f = c;
      if (typeof c == "function")
        f = c(o);
      else if (typeof c != "object")
        return c;
      if (!f)
        return null;
      const d = Ii(o.breakpoints), m = Object.keys(d);
      let p = d;
      return Object.keys(f).forEach((g) => {
        const x = Sa(f[g], o);
        if (x != null)
          if (typeof x == "object")
            if (i[g])
              p = xt(p, e(g, x, o, i));
            else {
              const v = We({
                theme: o
              }, x, (l) => ({
                [g]: l
              }));
              va(v, x) ? p[g] = t({
                sx: x,
                theme: o
              }) : p = xt(p, v);
            }
          else
            p = xt(p, e(g, x, o, i));
      }), $i(o, Mi(m, p));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return t;
}
const ft = Ea();
ft.filterProps = ["sx"];
function Qt() {
  return Qt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Qt.apply(null, arguments);
}
function Ca(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function xa(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Ta = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(xa(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = Ca(o);
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
}(), Se = "-ms-", Zt = "-moz-", X = "-webkit-", so = "comm", Kr = "rule", Xr = "decl", wa = "@import", co = "@keyframes", Oa = "@layer", Pa = Math.abs, pr = String.fromCharCode, Ra = Object.assign;
function $a(e, t) {
  return be(e, 0) ^ 45 ? (((t << 2 ^ be(e, 0)) << 2 ^ be(e, 1)) << 2 ^ be(e, 2)) << 2 ^ be(e, 3) : 0;
}
function lo(e) {
  return e.trim();
}
function Aa(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function J(e, t, r) {
  return e.replace(t, r);
}
function kr(e, t) {
  return e.indexOf(t);
}
function be(e, t) {
  return e.charCodeAt(t) | 0;
}
function Tt(e, t, r) {
  return e.slice(t, r);
}
function Me(e) {
  return e.length;
}
function Jr(e) {
  return e.length;
}
function Vt(e, t) {
  return t.push(e), e;
}
function ka(e, t) {
  return e.map(t).join("");
}
var mr = 1, dt = 1, uo = 0, Te = 0, me = 0, pt = "";
function hr(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: mr, column: dt, length: a, return: "" };
}
function vt(e, t) {
  return Ra(hr("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function _a() {
  return me;
}
function Na() {
  return me = Te > 0 ? be(pt, --Te) : 0, dt--, me === 10 && (dt = 1, mr--), me;
}
function Re() {
  return me = Te < uo ? be(pt, Te++) : 0, dt++, me === 10 && (dt = 1, mr++), me;
}
function je() {
  return be(pt, Te);
}
function Yt() {
  return Te;
}
function kt(e, t) {
  return Tt(pt, e, t);
}
function wt(e) {
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
function fo(e) {
  return mr = dt = 1, uo = Me(pt = e), Te = 0, [];
}
function po(e) {
  return pt = "", e;
}
function qt(e) {
  return lo(kt(Te - 1, _r(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ia(e) {
  for (; (me = je()) && me < 33; )
    Re();
  return wt(e) > 2 || wt(me) > 3 ? "" : " ";
}
function Ma(e, t) {
  for (; --t && Re() && !(me < 48 || me > 102 || me > 57 && me < 65 || me > 70 && me < 97); )
    ;
  return kt(e, Yt() + (t < 6 && je() == 32 && Re() == 32));
}
function _r(e) {
  for (; Re(); )
    switch (me) {
      // ] ) " '
      case e:
        return Te;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && _r(me);
        break;
      // (
      case 40:
        e === 41 && _r(e);
        break;
      // \
      case 92:
        Re();
        break;
    }
  return Te;
}
function Ba(e, t) {
  for (; Re() && e + me !== 57; )
    if (e + me === 84 && je() === 47)
      break;
  return "/*" + kt(t, Te - 1) + "*" + pr(e === 47 ? e : Re());
}
function ja(e) {
  for (; !wt(je()); )
    Re();
  return kt(e, Te);
}
function Da(e) {
  return po(Gt("", null, null, null, [""], e = fo(e), 0, [0], e));
}
function Gt(e, t, r, n, o, i, a, c, f) {
  for (var d = 0, m = 0, p = a, g = 0, x = 0, v = 0, l = 1, E = 1, T = 1, k = 0, P = "", S = o, b = i, A = n, _ = P; E; )
    switch (v = k, k = Re()) {
      // (
      case 40:
        if (v != 108 && be(_, p - 1) == 58) {
          kr(_ += J(qt(k), "&", "&\f"), "&\f") != -1 && (T = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        _ += qt(k);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        _ += Ia(v);
        break;
      // \
      case 92:
        _ += Ma(Yt() - 1, 7);
        continue;
      // /
      case 47:
        switch (je()) {
          case 42:
          case 47:
            Vt(za(Ba(Re(), Yt()), t, r), f);
            break;
          default:
            _ += "/";
        }
        break;
      // {
      case 123 * l:
        c[d++] = Me(_) * T;
      // } ; \0
      case 125 * l:
      case 59:
      case 0:
        switch (k) {
          // \0 }
          case 0:
          case 125:
            E = 0;
          // ;
          case 59 + m:
            T == -1 && (_ = J(_, /\f/g, "")), x > 0 && Me(_) - p && Vt(x > 32 ? Nn(_ + ";", n, r, p - 1) : Nn(J(_, " ", "") + ";", n, r, p - 2), f);
            break;
          // @ ;
          case 59:
            _ += ";";
          // { rule/at-rule
          default:
            if (Vt(A = _n(_, t, r, d, m, o, c, P, S = [], b = [], p), i), k === 123)
              if (m === 0)
                Gt(_, t, A, A, S, i, p, c, b);
              else
                switch (g === 99 && be(_, 3) === 110 ? 100 : g) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Gt(e, A, A, n && Vt(_n(e, A, A, 0, 0, o, c, P, o, S = [], p), b), o, b, p, c, n ? S : b);
                    break;
                  default:
                    Gt(_, A, A, A, [""], b, 0, c, b);
                }
        }
        d = m = x = 0, l = T = 1, P = _ = "", p = a;
        break;
      // :
      case 58:
        p = 1 + Me(_), x = v;
      default:
        if (l < 1) {
          if (k == 123)
            --l;
          else if (k == 125 && l++ == 0 && Na() == 125)
            continue;
        }
        switch (_ += pr(k), k * l) {
          // &
          case 38:
            T = m > 0 ? 1 : (_ += "\f", -1);
            break;
          // ,
          case 44:
            c[d++] = (Me(_) - 1) * T, T = 1;
            break;
          // @
          case 64:
            je() === 45 && (_ += qt(Re())), g = je(), m = p = Me(P = _ += ja(Yt())), k++;
            break;
          // -
          case 45:
            v === 45 && Me(_) == 2 && (l = 0);
        }
    }
  return i;
}
function _n(e, t, r, n, o, i, a, c, f, d, m) {
  for (var p = o - 1, g = o === 0 ? i : [""], x = Jr(g), v = 0, l = 0, E = 0; v < n; ++v)
    for (var T = 0, k = Tt(e, p + 1, p = Pa(l = a[v])), P = e; T < x; ++T)
      (P = lo(l > 0 ? g[T] + " " + k : J(k, /&\f/g, g[T]))) && (f[E++] = P);
  return hr(e, t, r, o === 0 ? Kr : c, f, d, m);
}
function za(e, t, r) {
  return hr(e, t, r, so, pr(_a()), Tt(e, 2, -2), 0);
}
function Nn(e, t, r, n) {
  return hr(e, t, r, Xr, Tt(e, 0, n), Tt(e, n + 1, -1), n);
}
function ut(e, t) {
  for (var r = "", n = Jr(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function Fa(e, t, r, n) {
  switch (e.type) {
    case Oa:
      if (e.children.length) break;
    case wa:
    case Xr:
      return e.return = e.return || e.value;
    case so:
      return "";
    case co:
      return e.return = e.value + "{" + ut(e.children, n) + "}";
    case Kr:
      e.value = e.props.join(",");
  }
  return Me(r = ut(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Va(e) {
  var t = Jr(e);
  return function(r, n, o, i) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](r, n, o, i) || "";
    return a;
  };
}
function La(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function mo(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Wa = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = je(), o === 38 && i === 12 && (r[n] = 1), !wt(i); )
    Re();
  return kt(t, Te);
}, Ua = function(t, r) {
  var n = -1, o = 44;
  do
    switch (wt(o)) {
      case 0:
        o === 38 && je() === 12 && (r[n] = 1), t[n] += Wa(Te - 1, r, n);
        break;
      case 2:
        t[n] += qt(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = je() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      // fallthrough
      default:
        t[n] += pr(o);
    }
  while (o = Re());
  return t;
}, Ya = function(t, r) {
  return po(Ua(fo(t), r));
}, In = /* @__PURE__ */ new WeakMap(), qa = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !In.get(n)) && !o) {
      In.set(t, !0);
      for (var i = [], a = Ya(r, i), c = n.props, f = 0, d = 0; f < a.length; f++)
        for (var m = 0; m < c.length; m++, d++)
          t.props[d] = i[f] ? a[f].replace(/&\f/g, c[m]) : c[m] + " " + a[f];
    }
  }
}, Ga = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function ho(e, t) {
  switch ($a(e, t)) {
    // color-adjust
    case 5103:
      return X + "print-" + e + e;
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
      return X + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return X + e + Zt + e + Se + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return X + e + Se + e + e;
    // order
    case 6165:
      return X + e + Se + "flex-" + e + e;
    // align-items
    case 5187:
      return X + e + J(e, /(\w+).+(:[^]+)/, X + "box-$1$2" + Se + "flex-$1$2") + e;
    // align-self
    case 5443:
      return X + e + Se + "flex-item-" + J(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return X + e + Se + "flex-line-pack" + J(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return X + e + Se + J(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return X + e + Se + J(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return X + "box-" + J(e, "-grow", "") + X + e + Se + J(e, "grow", "positive") + e;
    // transition
    case 4554:
      return X + J(e, /([^-])(transform)/g, "$1" + X + "$2") + e;
    // cursor
    case 6187:
      return J(J(J(e, /(zoom-|grab)/, X + "$1"), /(image-set)/, X + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return J(e, /(image-set\([^]*)/, X + "$1$`$1");
    // justify-content
    case 4968:
      return J(J(e, /(.+:)(flex-)?(.*)/, X + "box-pack:$3" + Se + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + X + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return J(e, /(.+)-inline(.+)/, X + "$1$2") + e;
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
          return J(e, /(.+:)(.+)-([^]+)/, "$1" + X + "$2-$3$1" + Zt + (be(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~kr(e, "stretch") ? ho(J(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (be(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (be(e, Me(e) - 3 - (~kr(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return J(e, ":", ":" + X) + e;
        // (inline-)?fl(e)x
        case 101:
          return J(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + X + (be(e, 14) === 45 ? "inline-" : "") + "box$3$1" + X + "$2$3$1" + Se + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (be(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return X + e + Se + J(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return X + e + Se + J(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return X + e + Se + J(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return X + e + Se + e + e;
  }
  return e;
}
var Ha = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Xr:
      t.return = ho(t.value, t.length);
      break;
    case co:
      return ut([vt(t, {
        value: J(t.value, "@", "@" + X)
      })], o);
    case Kr:
      if (t.length) return ka(t.props, function(i) {
        switch (Aa(i, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return ut([vt(t, {
              props: [J(i, /:(read-\w+)/, ":" + Zt + "$1")]
            })], o);
          // :placeholder
          case "::placeholder":
            return ut([vt(t, {
              props: [J(i, /:(plac\w+)/, ":" + X + "input-$1")]
            }), vt(t, {
              props: [J(i, /:(plac\w+)/, ":" + Zt + "$1")]
            }), vt(t, {
              props: [J(i, /:(plac\w+)/, Se + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Ka = [Ha], Xa = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(l) {
      var E = l.getAttribute("data-emotion");
      E.indexOf(" ") !== -1 && (document.head.appendChild(l), l.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Ka, i = {}, a, c = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(l) {
      for (var E = l.getAttribute("data-emotion").split(" "), T = 1; T < E.length; T++)
        i[E[T]] = !0;
      c.push(l);
    }
  );
  var f, d = [qa, Ga];
  {
    var m, p = [Fa, La(function(l) {
      m.insert(l);
    })], g = Va(d.concat(o, p)), x = function(E) {
      return ut(Da(E), g);
    };
    f = function(E, T, k, P) {
      m = k, x(E ? E + "{" + T.styles + "}" : T.styles), P && (v.inserted[T.name] = !0);
    };
  }
  var v = {
    key: r,
    sheet: new Ta({
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
    insert: f
  };
  return v.sheet.hydrate(c), v;
}, wr, Mn;
function Ja() {
  if (Mn) return wr;
  Mn = 1;
  var e = Fr(), t = {
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
  function a(v) {
    return e.isMemo(v) ? o : i[v.$$typeof] || t;
  }
  var c = Object.defineProperty, f = Object.getOwnPropertyNames, d = Object.getOwnPropertySymbols, m = Object.getOwnPropertyDescriptor, p = Object.getPrototypeOf, g = Object.prototype;
  function x(v, l, E) {
    if (typeof l != "string") {
      if (g) {
        var T = p(l);
        T && T !== g && x(v, T, E);
      }
      var k = f(l);
      d && (k = k.concat(d(l)));
      for (var P = a(v), S = a(l), b = 0; b < k.length; ++b) {
        var A = k[b];
        if (!r[A] && !(E && E[A]) && !(S && S[A]) && !(P && P[A])) {
          var _ = m(l, A);
          try {
            c(v, A, _);
          } catch {
          }
        }
      }
    }
    return v;
  }
  return wr = x, wr;
}
Ja();
var Qa = !0;
function go(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var Qr = function(t, r, n) {
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
  Qa === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, yo = function(t, r, n) {
  Qr(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Za(e) {
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
var es = {
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
}, ts = /[A-Z]|^ms/g, rs = /_EMO_([^_]+?)_([^]*?)_EMO_/g, bo = function(t) {
  return t.charCodeAt(1) === 45;
}, Bn = function(t) {
  return t != null && typeof t != "boolean";
}, Or = /* @__PURE__ */ mo(function(e) {
  return bo(e) ? e : e.replace(ts, "-$&").toLowerCase();
}), jn = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(rs, function(n, o, i) {
          return Be = {
            name: o,
            styles: i,
            next: Be
          }, o;
        });
  }
  return es[t] !== 1 && !bo(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function Ot(e, t, r) {
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
      return ns(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var f = Be, d = r(e);
        return Be = f, Ot(e, t, d);
      }
      break;
    }
  }
  var m = r;
  if (t == null)
    return m;
  var p = t[m];
  return p !== void 0 ? p : m;
}
function ns(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Ot(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object") {
        var c = a;
        t != null && t[c] !== void 0 ? n += i + "{" + t[c] + "}" : Bn(c) && (n += Or(i) + ":" + jn(i, c) + ";");
      } else if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
        for (var f = 0; f < a.length; f++)
          Bn(a[f]) && (n += Or(i) + ":" + jn(i, a[f]) + ";");
      else {
        var d = Ot(e, t, a);
        switch (i) {
          case "animation":
          case "animationName": {
            n += Or(i) + ":" + d + ";";
            break;
          }
          default:
            n += i + "{" + d + "}";
        }
      }
    }
  return n;
}
var Dn = /label:\s*([^\s;{]+)\s*(;|$)/g, Be;
function gr(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Be = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += Ot(r, t, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var c = 1; c < e.length; c++)
    if (o += Ot(r, t, e[c]), n) {
      var f = i;
      o += f[c];
    }
  Dn.lastIndex = 0;
  for (var d = "", m; (m = Dn.exec(o)) !== null; )
    d += "-" + m[1];
  var p = Za(o) + d;
  return {
    name: p,
    styles: o,
    next: Be
  };
}
var os = function(t) {
  return t();
}, is = M.useInsertionEffect ? M.useInsertionEffect : !1, vo = is || os, So = /* @__PURE__ */ M.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Xa({
    key: "css"
  }) : null
);
So.Provider;
var Eo = function(t) {
  return /* @__PURE__ */ Yo(function(r, n) {
    var o = qo(So);
    return t(r, o, n);
  });
}, Co = /* @__PURE__ */ M.createContext({}), Zr = {}.hasOwnProperty, Nr = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", as = function(t, r) {
  var n = {};
  for (var o in r)
    Zr.call(r, o) && (n[o] = r[o]);
  return n[Nr] = t, n;
}, ss = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Qr(r, n, o), vo(function() {
    return yo(r, n, o);
  }), null;
}, cs = /* @__PURE__ */ Eo(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[Nr], i = [n], a = "";
  typeof e.className == "string" ? a = go(t.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var c = gr(i, void 0, M.useContext(Co));
  a += t.key + "-" + c.name;
  var f = {};
  for (var d in e)
    Zr.call(e, d) && d !== "css" && d !== Nr && (f[d] = e[d]);
  return f.className = a, r && (f.ref = r), /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement(ss, {
    cache: t,
    serialized: c,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ M.createElement(o, f));
}), ls = cs, us = function(t, r) {
  var n = arguments;
  if (r == null || !Zr.call(r, "css"))
    return M.createElement.apply(void 0, n);
  var o = n.length, i = new Array(o);
  i[0] = ls, i[1] = as(t, r);
  for (var a = 2; a < o; a++)
    i[a] = n[a];
  return M.createElement.apply(null, i);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(us);
function en() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return gr(t);
}
function _t() {
  var e = en.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var fs = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ds = /* @__PURE__ */ mo(
  function(e) {
    return fs.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), ps = ds, ms = function(t) {
  return t !== "theme";
}, zn = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? ps : ms;
}, Fn = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, hs = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Qr(r, n, o), vo(function() {
    return yo(r, n, o);
  }), null;
}, gs = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var c = Fn(t, r, n), f = c || zn(o), d = !f("as");
  return function() {
    var m = arguments, p = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && p.push("label:" + i + ";"), m[0] == null || m[0].raw === void 0)
      p.push.apply(p, m);
    else {
      var g = m[0];
      p.push(g[0]);
      for (var x = m.length, v = 1; v < x; v++)
        p.push(m[v], g[v]);
    }
    var l = Eo(function(E, T, k) {
      var P = d && E.as || o, S = "", b = [], A = E;
      if (E.theme == null) {
        A = {};
        for (var _ in E)
          A[_] = E[_];
        A.theme = M.useContext(Co);
      }
      typeof E.className == "string" ? S = go(T.registered, b, E.className) : E.className != null && (S = E.className + " ");
      var G = gr(p.concat(b), T.registered, A);
      S += T.key + "-" + G.name, a !== void 0 && (S += " " + a);
      var ee = d && c === void 0 ? zn(P) : f, s = {};
      for (var O in E)
        d && O === "as" || ee(O) && (s[O] = E[O]);
      return s.className = S, k && (s.ref = k), /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement(hs, {
        cache: T,
        serialized: G,
        isStringTag: typeof P == "string"
      }), /* @__PURE__ */ M.createElement(P, s));
    });
    return l.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", l.defaultProps = t.defaultProps, l.__emotion_real = l, l.__emotion_base = o, l.__emotion_styles = p, l.__emotion_forwardProp = c, Object.defineProperty(l, "toString", {
      value: function() {
        return "." + a;
      }
    }), l.withComponent = function(E, T) {
      var k = e(E, Qt({}, r, T, {
        shouldForwardProp: Fn(l, T, !0)
      }));
      return k.apply(void 0, p);
    }, l;
  };
}, ys = [
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
], Ir = gs.bind(null);
ys.forEach(function(e) {
  Ir[e] = Ir(e);
});
/**
 * @mui/styled-engine v6.4.2
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function bs(e, t) {
  const r = Ir(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function vs(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Vn = [];
function Ln(e) {
  return Vn[0] = e, gr(Vn);
}
const Ss = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, n) => r.val - n.val), t.reduce((r, n) => ({
    ...r,
    [n.key]: n.val
  }), {});
};
function Es(e) {
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
  } = e, i = Ss(t), a = Object.keys(i);
  function c(g) {
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${r})`;
  }
  function f(g) {
    return `@media (max-width:${(typeof t[g] == "number" ? t[g] : g) - n / 100}${r})`;
  }
  function d(g, x) {
    const v = a.indexOf(x);
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${r}) and (max-width:${(v !== -1 && typeof t[a[v]] == "number" ? t[a[v]] : x) - n / 100}${r})`;
  }
  function m(g) {
    return a.indexOf(g) + 1 < a.length ? d(g, a[a.indexOf(g) + 1]) : c(g);
  }
  function p(g) {
    const x = a.indexOf(g);
    return x === 0 ? c(a[1]) : x === a.length - 1 ? f(a[x]) : d(g, a[a.indexOf(g) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: c,
    down: f,
    between: d,
    only: m,
    not: p,
    unit: r,
    ...o
  };
}
const Cs = {
  borderRadius: 4
};
function xo(e = 8, t = Gr({
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
function xs(e, t) {
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
function To(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: n = {},
    spacing: o,
    shape: i = {},
    ...a
  } = e, c = Es(r), f = xo(o);
  let d = Pe({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: f,
    shape: {
      ...Cs,
      ...i
    }
  }, a);
  return d = _i(d), d.applyStyles = xs, d = t.reduce((m, p) => Pe(m, p), d), d.unstable_sxConfig = {
    ...dr,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, d.unstable_sx = function(p) {
    return ft({
      sx: p,
      theme: this
    });
  }, d;
}
function wo(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: Ln(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Ln(o.style));
  }), n;
}
const Ts = To();
function Pr(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function ws(e) {
  return e ? (t, r) => r[e] : null;
}
function Os(e, t, r) {
  e.theme = As(e.theme) ? r : e.theme[t] || e.theme;
}
function Ht(e, t) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((n) => Ht(e, n));
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
    return Oo(e, r.variants, [n]);
  }
  return r != null && r.isProcessed ? r.style : r;
}
function Oo(e, t, r = []) {
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
function Ps(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = Ts,
    rootShouldForwardProp: n = Pr,
    slotShouldForwardProp: o = Pr
  } = e;
  function i(c) {
    Os(c, t, r);
  }
  return (c, f = {}) => {
    vs(c, (b) => b.filter((A) => A !== ft));
    const {
      name: d,
      slot: m,
      skipVariantsResolver: p,
      skipSx: g,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: x = ws(Po(m)),
      ...v
    } = f, l = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      m && m !== "Root" && m !== "root" || !1
    ), E = g || !1;
    let T = Pr;
    m === "Root" || m === "root" ? T = n : m ? T = o : ks(c) && (T = void 0);
    const k = bs(c, {
      shouldForwardProp: T,
      label: $s(d, m),
      ...v
    }), P = (b) => {
      if (typeof b == "function" && b.__emotion_real !== b)
        return function(_) {
          return Ht(_, b);
        };
      if (Le(b)) {
        const A = wo(b);
        return A.variants ? function(G) {
          return Ht(G, A);
        } : A.style;
      }
      return b;
    }, S = (...b) => {
      const A = [], _ = b.map(P), G = [];
      if (A.push(i), d && x && G.push(function(N) {
        var re, ue;
        const W = (ue = (re = N.theme.components) == null ? void 0 : re[d]) == null ? void 0 : ue.styleOverrides;
        if (!W)
          return null;
        const se = {};
        for (const Ee in W)
          se[Ee] = Ht(N, W[Ee]);
        return x(N, se);
      }), d && !l && G.push(function(N) {
        var se, re;
        const B = N.theme, W = (re = (se = B == null ? void 0 : B.components) == null ? void 0 : se[d]) == null ? void 0 : re.variants;
        return W ? Oo(N, W) : null;
      }), E || G.push(ft), Array.isArray(_[0])) {
        const O = _.shift(), N = new Array(A.length).fill(""), B = new Array(G.length).fill("");
        let W;
        W = [...N, ...O, ...B], W.raw = [...N, ...O.raw, ...B], A.unshift(W);
      }
      const ee = [...A, ..._, ...G], s = k(...ee);
      return c.muiName && (s.muiName = c.muiName), process.env.NODE_ENV !== "production" && (s.displayName = Rs(d, m, c)), s;
    };
    return k.withConfig && (S.withConfig = k.withConfig), S;
  };
}
function Rs(e, t, r) {
  return e ? `${e}${ye(t || "")}` : `Styled(${gi(r)})`;
}
function $s(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${Po(t || "Root")}`), r;
}
function As(e) {
  for (const t in e)
    return !1;
  return !0;
}
function ks(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function Po(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const _s = /* @__PURE__ */ M.createContext(void 0);
process.env.NODE_ENV !== "production" && (h.node, h.object);
function Ns(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? Kt(o.defaultProps, n) : !o.styleOverrides && !o.variants ? Kt(o, n) : n;
}
function Is({
  props: e,
  name: t
}) {
  const r = M.useContext(_s);
  return Ns({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const Wn = {
  theme: void 0
};
function Ms(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (Wn.theme = o.theme, i = wo(e(Wn)), t = i, r = o.theme), i;
  };
}
function Bs(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const Un = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, js = (e, t, r) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([c, f]) => {
      (!r || !r([...i, c])) && f != null && (typeof f == "object" && Object.keys(f).length > 0 ? n(f, [...i, c], Array.isArray(f) ? [...a, c] : a) : t([...i, c], f, a));
    });
  }
  n(e);
}, Ds = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Rr(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, a = {};
  return js(
    e,
    (c, f, d) => {
      if ((typeof f == "string" || typeof f == "number") && (!n || !n(c, f))) {
        const m = `--${r ? `${r}-` : ""}${c.join("-")}`, p = Ds(c, f);
        Object.assign(o, {
          [m]: p
        }), Un(i, c, `var(${m})`, d), Un(a, c, `var(${m}, ${p})`, d);
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
function zs(e, t = {}) {
  const {
    getSelector: r = E,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: a,
    defaultColorScheme: c = "light",
    ...f
  } = e, {
    vars: d,
    css: m,
    varsWithDefaults: p
  } = Rr(f, t);
  let g = p;
  const x = {}, {
    [c]: v,
    ...l
  } = i;
  if (Object.entries(l || {}).forEach(([P, S]) => {
    const {
      vars: b,
      css: A,
      varsWithDefaults: _
    } = Rr(S, t);
    g = Pe(g, _), x[P] = {
      css: A,
      vars: b
    };
  }), v) {
    const {
      css: P,
      vars: S,
      varsWithDefaults: b
    } = Rr(v, t);
    g = Pe(g, b), x[c] = {
      css: P,
      vars: S
    };
  }
  function E(P, S) {
    var A, _;
    let b = o;
    if (o === "class" && (b = ".%s"), o === "data" && (b = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (b = `[${o}="%s"]`), P) {
      if (b === "media")
        return e.defaultColorScheme === P ? ":root" : {
          [`@media (prefers-color-scheme: ${((_ = (A = i[P]) == null ? void 0 : A.palette) == null ? void 0 : _.mode) || P})`]: {
            ":root": S
          }
        };
      if (b)
        return e.defaultColorScheme === P ? `:root, ${b.replace("%s", String(P))}` : b.replace("%s", String(P));
    }
    return ":root";
  }
  return {
    vars: g,
    generateThemeVars: () => {
      let P = {
        ...d
      };
      return Object.entries(x).forEach(([, {
        vars: S
      }]) => {
        P = Pe(P, S);
      }), P;
    },
    generateStyleSheets: () => {
      var G, ee;
      const P = [], S = e.defaultColorScheme || "light";
      function b(s, O) {
        Object.keys(O).length && P.push(typeof s == "string" ? {
          [s]: {
            ...O
          }
        } : s);
      }
      b(r(void 0, {
        ...m
      }), m);
      const {
        [S]: A,
        ..._
      } = x;
      if (A) {
        const {
          css: s
        } = A, O = (ee = (G = i[S]) == null ? void 0 : G.palette) == null ? void 0 : ee.mode, N = !n && O ? {
          colorScheme: O,
          ...s
        } : {
          ...s
        };
        b(r(S, {
          ...N
        }), N);
      }
      return Object.entries(_).forEach(([s, {
        css: O
      }]) => {
        var W, se;
        const N = (se = (W = i[s]) == null ? void 0 : W.palette) == null ? void 0 : se.mode, B = !n && N ? {
          colorScheme: N,
          ...O
        } : {
          ...O
        };
        b(r(s, {
          ...B
        }), B);
      }), P;
    }
  };
}
function Fs(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const Pt = {
  black: "#000",
  white: "#fff"
}, Vs = {
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
}, rt = {
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
}, nt = {
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
}, St = {
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
}, ot = {
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
}, it = {
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
}, at = {
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
function Ro() {
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
      paper: Pt.white,
      default: Pt.white
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
const Ls = Ro();
function $o() {
  return {
    text: {
      primary: Pt.white,
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
      active: Pt.white,
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
const Yn = $o();
function qn(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = Yr(e.main, o) : t === "dark" && (e.dark = Ur(e.main, i)));
}
function Ws(e = "light") {
  return e === "dark" ? {
    main: ot[200],
    light: ot[50],
    dark: ot[400]
  } : {
    main: ot[700],
    light: ot[400],
    dark: ot[800]
  };
}
function Us(e = "light") {
  return e === "dark" ? {
    main: rt[200],
    light: rt[50],
    dark: rt[400]
  } : {
    main: rt[500],
    light: rt[300],
    dark: rt[700]
  };
}
function Ys(e = "light") {
  return e === "dark" ? {
    main: nt[500],
    light: nt[300],
    dark: nt[700]
  } : {
    main: nt[700],
    light: nt[400],
    dark: nt[800]
  };
}
function qs(e = "light") {
  return e === "dark" ? {
    main: it[400],
    light: it[300],
    dark: it[700]
  } : {
    main: it[700],
    light: it[500],
    dark: it[900]
  };
}
function Gs(e = "light") {
  return e === "dark" ? {
    main: at[400],
    light: at[300],
    dark: at[700]
  } : {
    main: at[800],
    light: at[500],
    dark: at[900]
  };
}
function Hs(e = "light") {
  return e === "dark" ? {
    main: St[400],
    light: St[300],
    dark: St[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: St[500],
    dark: St[900]
  };
}
function tn(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || Ws(t), a = e.secondary || Us(t), c = e.error || Ys(t), f = e.info || qs(t), d = e.success || Gs(t), m = e.warning || Hs(t);
  function p(l) {
    const E = vn(l, Yn.text.primary) >= r ? Yn.text.primary : Ls.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const T = vn(l, E);
      T < 3 && console.error([`MUI: The contrast ratio of ${T}:1 for ${E} on ${l}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return E;
  }
  const g = ({
    color: l,
    name: E,
    mainShade: T = 500,
    lightShade: k = 300,
    darkShade: P = 700
  }) => {
    if (l = {
      ...l
    }, !l.main && l[T] && (l.main = l[T]), !l.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${E ? ` (${E})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${T}\` property.` : He(11, E ? ` (${E})` : "", T));
    if (typeof l.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${E ? ` (${E})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(l.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : He(12, E ? ` (${E})` : "", JSON.stringify(l.main)));
    return qn(l, "light", k, n), qn(l, "dark", P, n), l.contrastText || (l.contrastText = p(l.main)), l;
  };
  let x;
  return t === "light" ? x = Ro() : t === "dark" && (x = $o()), process.env.NODE_ENV !== "production" && (x || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Pe({
    // A collection of common colors.
    common: {
      ...Pt
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: g({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: g({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: g({
      color: c,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: g({
      color: m,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: g({
      color: f,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: g({
      color: d,
      name: "success"
    }),
    // The grey colors.
    grey: Vs,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: p,
    // Generate a rich color object.
    augmentColor: g,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n,
    // The light and dark mode object.
    ...x
  }, o);
}
function Ks(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function Xs(e, t) {
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
function Js(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Gn = {
  textTransform: "uppercase"
}, Hn = '"Roboto", "Helvetica", "Arial", sans-serif';
function Qs(e, t) {
  const {
    fontFamily: r = Hn,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: f = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: m,
    ...p
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof f != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = n / 14, x = m || ((E) => `${E / f * g}rem`), v = (E, T, k, P, S) => ({
    fontFamily: r,
    fontWeight: E,
    fontSize: x(T),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: k,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === Hn ? {
      letterSpacing: `${Js(P / T)}em`
    } : {},
    ...S,
    ...d
  }), l = {
    h1: v(o, 96, 1.167, -1.5),
    h2: v(o, 60, 1.2, -0.5),
    h3: v(i, 48, 1.167, 0),
    h4: v(i, 34, 1.235, 0.25),
    h5: v(i, 24, 1.334, 0),
    h6: v(a, 20, 1.6, 0.15),
    subtitle1: v(i, 16, 1.75, 0.15),
    subtitle2: v(a, 14, 1.57, 0.1),
    body1: v(i, 16, 1.5, 0.15),
    body2: v(i, 14, 1.43, 0.15),
    button: v(a, 14, 1.75, 0.4, Gn),
    caption: v(i, 12, 1.66, 0.4),
    overline: v(i, 12, 2.66, 1, Gn),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Pe({
    htmlFontSize: f,
    pxToRem: x,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: c,
    ...l
  }, p, {
    clone: !1
    // No need to clone deep
  });
}
const Zs = 0.2, ec = 0.14, tc = 0.12;
function ce(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Zs})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${ec})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${tc})`].join(",");
}
const rc = ["none", ce(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), ce(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), ce(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), ce(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), ce(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), ce(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), ce(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), ce(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), ce(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), ce(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), ce(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), ce(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), ce(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), ce(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), ce(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), ce(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), ce(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), ce(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), ce(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), ce(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), ce(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), ce(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), ce(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), ce(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], nc = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, oc = {
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
function Kn(e) {
  return `${Math.round(e)}ms`;
}
function ic(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function ac(e) {
  const t = {
    ...nc,
    ...e.easing
  }, r = {
    ...oc,
    ...e.duration
  };
  return {
    getAutoHeightDuration: ic,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: c = t.easeInOut,
        delay: f = 0,
        ...d
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const m = (g) => typeof g == "string", p = (g) => !Number.isNaN(parseFloat(g));
        !m(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(a) && !m(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), m(c) || console.error('MUI: Argument "easing" must be a string.'), !p(f) && !m(f) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(d).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(d).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((m) => `${m} ${typeof a == "string" ? a : Kn(a)} ${c} ${typeof f == "string" ? f : Kn(f)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const sc = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function cc(e) {
  return Le(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Ao(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, c] = o[i];
      !cc(c) || a.startsWith("unstable_") ? delete n[a] : Le(c) && (n[a] = {
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
function Mr(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: a = {},
    typography: c = {},
    shape: f,
    ...d
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : He(20));
  const m = tn(i), p = To(e);
  let g = Pe(p, {
    mixins: Xs(p.breakpoints, n),
    palette: m,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: rc.slice(),
    typography: Qs(m, c),
    transitions: ac(a),
    zIndex: {
      ...sc
    }
  });
  if (g = Pe(g, d), g = t.reduce((x, v) => Pe(x, v), g), process.env.NODE_ENV !== "production") {
    const x = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], v = (l, E) => {
      let T;
      for (T in l) {
        const k = l[T];
        if (x.includes(T) && Object.keys(k).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const P = Rt("", T);
            console.error([`MUI: The \`${E}\` component increases the CSS specificity of the \`${T}\` internal state.`, "You can not override it like this: ", JSON.stringify(l, null, 2), "", `Instead, you need to use the '&.${P}' syntax:`, JSON.stringify({
              root: {
                [`&.${P}`]: k
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          l[T] = {};
        }
      }
    };
    Object.keys(g.components).forEach((l) => {
      const E = g.components[l].styleOverrides;
      E && l.startsWith("Mui") && v(E, l);
    });
  }
  return g.unstable_sxConfig = {
    ...dr,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, g.unstable_sx = function(v) {
    return ft({
      sx: v,
      theme: this
    });
  }, g.toRuntimeSource = Ao, g;
}
function lc(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const uc = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = lc(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function ko(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function _o(e) {
  return e === "dark" ? uc : [];
}
function fc(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, i = tn(t);
  return {
    palette: i,
    opacity: {
      ...ko(i.mode),
      ...r
    },
    overlays: n || _o(i.mode),
    ...o
  };
}
function dc(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const pc = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], mc = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return pc(e.cssVarPrefix).forEach((c) => {
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
function hc(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function y(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function Ct(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : to(e);
}
function Fe(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Et(Ct(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function gc(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Ie = (e) => {
  try {
    return e();
  } catch {
  }
}, yc = (e = "mui") => Bs(e);
function $r(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = fc({
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
  } = Mr({
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
      ...ko(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || _o(o)
  }, a;
}
function bc(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: a = dc,
    colorSchemeSelector: c = r.light && r.dark ? "media" : void 0,
    rootSelector: f = ":root",
    ...d
  } = e, m = Object.keys(r)[0], p = n || (r.light && m !== "light" ? "light" : m), g = yc(i), {
    [p]: x,
    light: v,
    dark: l,
    ...E
  } = r, T = {
    ...E
  };
  let k = x;
  if ((p === "dark" && !("dark" in r) || p === "light" && !("light" in r)) && (k = !0), !k)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${p}\` option is either missing or invalid.` : He(21, p));
  const P = $r(T, k, d, p);
  v && !T.light && $r(T, v, void 0, "light"), l && !T.dark && $r(T, l, void 0, "dark");
  let S = {
    defaultColorScheme: p,
    ...P,
    cssVarPrefix: i,
    colorSchemeSelector: c,
    rootSelector: f,
    getCssVar: g,
    colorSchemes: T,
    font: {
      ...Ks(P.typography),
      ...P.font
    },
    spacing: gc(d.spacing)
  };
  Object.keys(S.colorSchemes).forEach((ee) => {
    const s = S.colorSchemes[ee].palette, O = (N) => {
      const B = N.split("-"), W = B[1], se = B[2];
      return g(N, s[W][se]);
    };
    if (s.mode === "light" && (y(s.common, "background", "#fff"), y(s.common, "onBackground", "#000")), s.mode === "dark" && (y(s.common, "background", "#000"), y(s.common, "onBackground", "#fff")), hc(s, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), s.mode === "light") {
      y(s.Alert, "errorColor", ie(s.error.light, 0.6)), y(s.Alert, "infoColor", ie(s.info.light, 0.6)), y(s.Alert, "successColor", ie(s.success.light, 0.6)), y(s.Alert, "warningColor", ie(s.warning.light, 0.6)), y(s.Alert, "errorFilledBg", O("palette-error-main")), y(s.Alert, "infoFilledBg", O("palette-info-main")), y(s.Alert, "successFilledBg", O("palette-success-main")), y(s.Alert, "warningFilledBg", O("palette-warning-main")), y(s.Alert, "errorFilledColor", Ie(() => s.getContrastText(s.error.main))), y(s.Alert, "infoFilledColor", Ie(() => s.getContrastText(s.info.main))), y(s.Alert, "successFilledColor", Ie(() => s.getContrastText(s.success.main))), y(s.Alert, "warningFilledColor", Ie(() => s.getContrastText(s.warning.main))), y(s.Alert, "errorStandardBg", ae(s.error.light, 0.9)), y(s.Alert, "infoStandardBg", ae(s.info.light, 0.9)), y(s.Alert, "successStandardBg", ae(s.success.light, 0.9)), y(s.Alert, "warningStandardBg", ae(s.warning.light, 0.9)), y(s.Alert, "errorIconColor", O("palette-error-main")), y(s.Alert, "infoIconColor", O("palette-info-main")), y(s.Alert, "successIconColor", O("palette-success-main")), y(s.Alert, "warningIconColor", O("palette-warning-main")), y(s.AppBar, "defaultBg", O("palette-grey-100")), y(s.Avatar, "defaultBg", O("palette-grey-400")), y(s.Button, "inheritContainedBg", O("palette-grey-300")), y(s.Button, "inheritContainedHoverBg", O("palette-grey-A100")), y(s.Chip, "defaultBorder", O("palette-grey-400")), y(s.Chip, "defaultAvatarColor", O("palette-grey-700")), y(s.Chip, "defaultIconColor", O("palette-grey-700")), y(s.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), y(s.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), y(s.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), y(s.LinearProgress, "primaryBg", ae(s.primary.main, 0.62)), y(s.LinearProgress, "secondaryBg", ae(s.secondary.main, 0.62)), y(s.LinearProgress, "errorBg", ae(s.error.main, 0.62)), y(s.LinearProgress, "infoBg", ae(s.info.main, 0.62)), y(s.LinearProgress, "successBg", ae(s.success.main, 0.62)), y(s.LinearProgress, "warningBg", ae(s.warning.main, 0.62)), y(s.Skeleton, "bg", `rgba(${O("palette-text-primaryChannel")} / 0.11)`), y(s.Slider, "primaryTrack", ae(s.primary.main, 0.62)), y(s.Slider, "secondaryTrack", ae(s.secondary.main, 0.62)), y(s.Slider, "errorTrack", ae(s.error.main, 0.62)), y(s.Slider, "infoTrack", ae(s.info.main, 0.62)), y(s.Slider, "successTrack", ae(s.success.main, 0.62)), y(s.Slider, "warningTrack", ae(s.warning.main, 0.62));
      const N = zt(s.background.default, 0.8);
      y(s.SnackbarContent, "bg", N), y(s.SnackbarContent, "color", Ie(() => s.getContrastText(N))), y(s.SpeedDialAction, "fabHoverBg", zt(s.background.paper, 0.15)), y(s.StepConnector, "border", O("palette-grey-400")), y(s.StepContent, "border", O("palette-grey-400")), y(s.Switch, "defaultColor", O("palette-common-white")), y(s.Switch, "defaultDisabledColor", O("palette-grey-100")), y(s.Switch, "primaryDisabledColor", ae(s.primary.main, 0.62)), y(s.Switch, "secondaryDisabledColor", ae(s.secondary.main, 0.62)), y(s.Switch, "errorDisabledColor", ae(s.error.main, 0.62)), y(s.Switch, "infoDisabledColor", ae(s.info.main, 0.62)), y(s.Switch, "successDisabledColor", ae(s.success.main, 0.62)), y(s.Switch, "warningDisabledColor", ae(s.warning.main, 0.62)), y(s.TableCell, "border", ae(Dt(s.divider, 1), 0.88)), y(s.Tooltip, "bg", Dt(s.grey[700], 0.92));
    }
    if (s.mode === "dark") {
      y(s.Alert, "errorColor", ae(s.error.light, 0.6)), y(s.Alert, "infoColor", ae(s.info.light, 0.6)), y(s.Alert, "successColor", ae(s.success.light, 0.6)), y(s.Alert, "warningColor", ae(s.warning.light, 0.6)), y(s.Alert, "errorFilledBg", O("palette-error-dark")), y(s.Alert, "infoFilledBg", O("palette-info-dark")), y(s.Alert, "successFilledBg", O("palette-success-dark")), y(s.Alert, "warningFilledBg", O("palette-warning-dark")), y(s.Alert, "errorFilledColor", Ie(() => s.getContrastText(s.error.dark))), y(s.Alert, "infoFilledColor", Ie(() => s.getContrastText(s.info.dark))), y(s.Alert, "successFilledColor", Ie(() => s.getContrastText(s.success.dark))), y(s.Alert, "warningFilledColor", Ie(() => s.getContrastText(s.warning.dark))), y(s.Alert, "errorStandardBg", ie(s.error.light, 0.9)), y(s.Alert, "infoStandardBg", ie(s.info.light, 0.9)), y(s.Alert, "successStandardBg", ie(s.success.light, 0.9)), y(s.Alert, "warningStandardBg", ie(s.warning.light, 0.9)), y(s.Alert, "errorIconColor", O("palette-error-main")), y(s.Alert, "infoIconColor", O("palette-info-main")), y(s.Alert, "successIconColor", O("palette-success-main")), y(s.Alert, "warningIconColor", O("palette-warning-main")), y(s.AppBar, "defaultBg", O("palette-grey-900")), y(s.AppBar, "darkBg", O("palette-background-paper")), y(s.AppBar, "darkColor", O("palette-text-primary")), y(s.Avatar, "defaultBg", O("palette-grey-600")), y(s.Button, "inheritContainedBg", O("palette-grey-800")), y(s.Button, "inheritContainedHoverBg", O("palette-grey-700")), y(s.Chip, "defaultBorder", O("palette-grey-700")), y(s.Chip, "defaultAvatarColor", O("palette-grey-300")), y(s.Chip, "defaultIconColor", O("palette-grey-300")), y(s.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), y(s.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), y(s.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), y(s.LinearProgress, "primaryBg", ie(s.primary.main, 0.5)), y(s.LinearProgress, "secondaryBg", ie(s.secondary.main, 0.5)), y(s.LinearProgress, "errorBg", ie(s.error.main, 0.5)), y(s.LinearProgress, "infoBg", ie(s.info.main, 0.5)), y(s.LinearProgress, "successBg", ie(s.success.main, 0.5)), y(s.LinearProgress, "warningBg", ie(s.warning.main, 0.5)), y(s.Skeleton, "bg", `rgba(${O("palette-text-primaryChannel")} / 0.13)`), y(s.Slider, "primaryTrack", ie(s.primary.main, 0.5)), y(s.Slider, "secondaryTrack", ie(s.secondary.main, 0.5)), y(s.Slider, "errorTrack", ie(s.error.main, 0.5)), y(s.Slider, "infoTrack", ie(s.info.main, 0.5)), y(s.Slider, "successTrack", ie(s.success.main, 0.5)), y(s.Slider, "warningTrack", ie(s.warning.main, 0.5));
      const N = zt(s.background.default, 0.98);
      y(s.SnackbarContent, "bg", N), y(s.SnackbarContent, "color", Ie(() => s.getContrastText(N))), y(s.SpeedDialAction, "fabHoverBg", zt(s.background.paper, 0.15)), y(s.StepConnector, "border", O("palette-grey-600")), y(s.StepContent, "border", O("palette-grey-600")), y(s.Switch, "defaultColor", O("palette-grey-300")), y(s.Switch, "defaultDisabledColor", O("palette-grey-600")), y(s.Switch, "primaryDisabledColor", ie(s.primary.main, 0.55)), y(s.Switch, "secondaryDisabledColor", ie(s.secondary.main, 0.55)), y(s.Switch, "errorDisabledColor", ie(s.error.main, 0.55)), y(s.Switch, "infoDisabledColor", ie(s.info.main, 0.55)), y(s.Switch, "successDisabledColor", ie(s.success.main, 0.55)), y(s.Switch, "warningDisabledColor", ie(s.warning.main, 0.55)), y(s.TableCell, "border", ie(Dt(s.divider, 1), 0.68)), y(s.Tooltip, "bg", Dt(s.grey[700], 0.92));
    }
    Fe(s.background, "default"), Fe(s.background, "paper"), Fe(s.common, "background"), Fe(s.common, "onBackground"), Fe(s, "divider"), Object.keys(s).forEach((N) => {
      const B = s[N];
      N !== "tonalOffset" && B && typeof B == "object" && (B.main && y(s[N], "mainChannel", Et(Ct(B.main))), B.light && y(s[N], "lightChannel", Et(Ct(B.light))), B.dark && y(s[N], "darkChannel", Et(Ct(B.dark))), B.contrastText && y(s[N], "contrastTextChannel", Et(Ct(B.contrastText))), N === "text" && (Fe(s[N], "primary"), Fe(s[N], "secondary")), N === "action" && (B.active && Fe(s[N], "active"), B.selected && Fe(s[N], "selected")));
    });
  }), S = t.reduce((ee, s) => Pe(ee, s), S);
  const b = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: mc(S)
  }, {
    vars: A,
    generateThemeVars: _,
    generateStyleSheets: G
  } = zs(S, b);
  return S.vars = A, Object.entries(S.colorSchemes[S.defaultColorScheme]).forEach(([ee, s]) => {
    S[ee] = s;
  }), S.generateThemeVars = _, S.generateStyleSheets = G, S.generateSpacing = function() {
    return xo(d.spacing, Gr(this));
  }, S.getColorSchemeSelector = Fs(c), S.spacing = S.generateSpacing(), S.shouldSkipGeneratingVar = a, S.unstable_sxConfig = {
    ...dr,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, S.unstable_sx = function(s) {
    return ft({
      sx: s,
      theme: this
    });
  }, S.toRuntimeSource = Ao, S;
}
function Xn(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: tn({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function vc(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r == null ? void 0 : r.mode,
    ...a
  } = e, c = i || "light", f = o == null ? void 0 : o[c], d = {
    ...o,
    ...r ? {
      [c]: {
        ...typeof f != "boolean" && f,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return Mr(e, ...t);
    let m = r;
    "palette" in e || d[c] && (d[c] !== !0 ? m = d[c].palette : c === "dark" && (m = {
      mode: "dark"
    }));
    const p = Mr({
      ...e,
      palette: m
    }, ...t);
    return p.defaultColorScheme = c, p.colorSchemes = d, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...d.light !== !0 && d.light,
      palette: p.palette
    }, Xn(p, "dark", d.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...d.dark !== !0 && d.dark,
      palette: p.palette
    }, Xn(p, "light", d.light)), p;
  }
  return !r && !("light" in d) && c === "light" && (d.light = !0), bc({
    ...a,
    colorSchemes: d,
    defaultColorScheme: c,
    ...typeof n != "boolean" && n
  }, ...t);
}
const Sc = vc(), Ec = "$$material";
function Cc(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const No = (e) => Cc(e) && e !== "classes", Ne = Ps({
  themeId: Ec,
  defaultTheme: Sc,
  rootShouldForwardProp: No
}), rn = Ms;
process.env.NODE_ENV !== "production" && (h.node, h.object.isRequired);
function yr(e) {
  return Is(e);
}
class er {
  constructor() {
    gt(this, "mountEffect", () => {
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
    return new er();
  }
  static use() {
    const t = io(er.create).current, [r, n] = M.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, M.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = Tc(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function xc() {
  return er.use();
}
function Tc() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function wc(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function Br(e, t) {
  return Br = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Br(e, t);
}
function Oc(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Br(e, t);
}
const Jn = ct.createContext(null);
function Pc(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function nn(e, t) {
  var r = function(i) {
    return t && Lt(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && Go.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function Rc(e, t) {
  e = e || {}, t = t || {};
  function r(m) {
    return m in t ? t[m] : e[m];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var a, c = {};
  for (var f in t) {
    if (n[f])
      for (a = 0; a < n[f].length; a++) {
        var d = n[f][a];
        c[n[f][a]] = r(d);
      }
    c[f] = r(f);
  }
  for (a = 0; a < o.length; a++)
    c[o[a]] = r(o[a]);
  return c;
}
function et(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function $c(e, t) {
  return nn(e.children, function(r) {
    return Wt(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: et(r, "appear", e),
      enter: et(r, "enter", e),
      exit: et(r, "exit", e)
    });
  });
}
function Ac(e, t, r) {
  var n = nn(e.children), o = Rc(t, n);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (Lt(a)) {
      var c = i in t, f = i in n, d = t[i], m = Lt(d) && !d.props.in;
      f && (!c || m) ? o[i] = Wt(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: et(a, "exit", e),
        enter: et(a, "enter", e)
      }) : !f && c && !m ? o[i] = Wt(a, {
        in: !1
      }) : f && c && Lt(d) && (o[i] = Wt(a, {
        onExited: r.bind(null, a),
        in: d.props.in,
        exit: et(a, "exit", e),
        enter: et(a, "enter", e)
      }));
    }
  }), o;
}
var kc = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, _c = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, on = /* @__PURE__ */ function(e) {
  Oc(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = i.handleExited.bind(Pc(i));
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
    var a = i.children, c = i.handleExited, f = i.firstRender;
    return {
      children: f ? $c(o, c) : Ac(o, a, c),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var a = nn(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(c) {
      var f = Qt({}, c.children);
      return delete f[o.key], {
        children: f
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, c = wc(o, ["component", "childFactory"]), f = this.state.contextValue, d = kc(this.state.children).map(a);
    return delete c.appear, delete c.enter, delete c.exit, i === null ? /* @__PURE__ */ ct.createElement(Jn.Provider, {
      value: f
    }, d) : /* @__PURE__ */ ct.createElement(Jn.Provider, {
      value: f
    }, /* @__PURE__ */ ct.createElement(i, c, d));
  }, t;
}(ct.Component);
on.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: h.any,
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
  children: h.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: h.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: h.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: h.bool,
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
  childFactory: h.func
} : {};
on.defaultProps = _c;
function Io(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: a,
    in: c,
    onExited: f,
    timeout: d
  } = e, [m, p] = M.useState(!1), g = we(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), x = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, v = we(r.child, m && r.childLeaving, n && r.childPulsate);
  return !c && !m && p(!0), M.useEffect(() => {
    if (!c && f != null) {
      const l = setTimeout(f, d);
      return () => {
        clearTimeout(l);
      };
    }
  }, [f, c, d]), /* @__PURE__ */ ge.jsx("span", {
    className: g,
    style: x,
    children: /* @__PURE__ */ ge.jsx("span", {
      className: v
    })
  });
}
process.env.NODE_ENV !== "production" && (Io.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: h.object.isRequired,
  className: h.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: h.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: h.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: h.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: h.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: h.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: h.number,
  /**
   * exit delay
   */
  timeout: h.number.isRequired
});
const Ae = rr("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), jr = 550, Nc = 80, Ic = _t`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Mc = _t`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Bc = _t`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, jc = Ne("span", {
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
}), Dc = Ne(Io, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Ae.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Ic};
    animation-duration: ${jr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${Ae.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${Ae.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Ae.childLeaving} {
    opacity: 0;
    animation-name: ${Mc};
    animation-duration: ${jr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${Ae.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Bc};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Mo = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = yr({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a,
    ...c
  } = n, [f, d] = M.useState([]), m = M.useRef(0), p = M.useRef(null);
  M.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [f]);
  const g = M.useRef(!1), x = wi(), v = M.useRef(null), l = M.useRef(null), E = M.useCallback((S) => {
    const {
      pulsate: b,
      rippleX: A,
      rippleY: _,
      rippleSize: G,
      cb: ee
    } = S;
    d((s) => [...s, /* @__PURE__ */ ge.jsx(Dc, {
      classes: {
        ripple: we(i.ripple, Ae.ripple),
        rippleVisible: we(i.rippleVisible, Ae.rippleVisible),
        ripplePulsate: we(i.ripplePulsate, Ae.ripplePulsate),
        child: we(i.child, Ae.child),
        childLeaving: we(i.childLeaving, Ae.childLeaving),
        childPulsate: we(i.childPulsate, Ae.childPulsate)
      },
      timeout: jr,
      pulsate: b,
      rippleX: A,
      rippleY: _,
      rippleSize: G
    }, m.current)]), m.current += 1, p.current = ee;
  }, [i]), T = M.useCallback((S = {}, b = {}, A = () => {
  }) => {
    const {
      pulsate: _ = !1,
      center: G = o || b.pulsate,
      fakeElement: ee = !1
      // For test purposes
    } = b;
    if ((S == null ? void 0 : S.type) === "mousedown" && g.current) {
      g.current = !1;
      return;
    }
    (S == null ? void 0 : S.type) === "touchstart" && (g.current = !0);
    const s = ee ? null : l.current, O = s ? s.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let N, B, W;
    if (G || S === void 0 || S.clientX === 0 && S.clientY === 0 || !S.clientX && !S.touches)
      N = Math.round(O.width / 2), B = Math.round(O.height / 2);
    else {
      const {
        clientX: se,
        clientY: re
      } = S.touches && S.touches.length > 0 ? S.touches[0] : S;
      N = Math.round(se - O.left), B = Math.round(re - O.top);
    }
    if (G)
      W = Math.sqrt((2 * O.width ** 2 + O.height ** 2) / 3), W % 2 === 0 && (W += 1);
    else {
      const se = Math.max(Math.abs((s ? s.clientWidth : 0) - N), N) * 2 + 2, re = Math.max(Math.abs((s ? s.clientHeight : 0) - B), B) * 2 + 2;
      W = Math.sqrt(se ** 2 + re ** 2);
    }
    S != null && S.touches ? v.current === null && (v.current = () => {
      E({
        pulsate: _,
        rippleX: N,
        rippleY: B,
        rippleSize: W,
        cb: A
      });
    }, x.start(Nc, () => {
      v.current && (v.current(), v.current = null);
    })) : E({
      pulsate: _,
      rippleX: N,
      rippleY: B,
      rippleSize: W,
      cb: A
    });
  }, [o, E, x]), k = M.useCallback(() => {
    T({}, {
      pulsate: !0
    });
  }, [T]), P = M.useCallback((S, b) => {
    if (x.clear(), (S == null ? void 0 : S.type) === "touchend" && v.current) {
      v.current(), v.current = null, x.start(0, () => {
        P(S, b);
      });
      return;
    }
    v.current = null, d((A) => A.length > 0 ? A.slice(1) : A), p.current = b;
  }, [x]);
  return M.useImperativeHandle(r, () => ({
    pulsate: k,
    start: T,
    stop: P
  }), [k, T, P]), /* @__PURE__ */ ge.jsx(jc, {
    className: we(Ae.root, i.root, a),
    ref: l,
    ...c,
    children: /* @__PURE__ */ ge.jsx(on, {
      component: null,
      exit: !0,
      children: f
    })
  });
});
process.env.NODE_ENV !== "production" && (Mo.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: h.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: h.object,
  /**
   * @ignore
   */
  className: h.string
});
function zc(e) {
  return Rt("MuiButtonBase", e);
}
const Fc = rr("MuiButtonBase", ["root", "disabled", "focusVisible"]), Vc = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, a = Lr({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, zc, o);
  return r && n && (a.root += ` ${n}`), a;
}, Lc = Ne("button", {
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
  [`&.${Fc.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Bo = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = yr({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: c,
    component: f = "button",
    disabled: d = !1,
    disableRipple: m = !1,
    disableTouchRipple: p = !1,
    focusRipple: g = !1,
    focusVisibleClassName: x,
    LinkComponent: v = "a",
    onBlur: l,
    onClick: E,
    onContextMenu: T,
    onDragLeave: k,
    onFocus: P,
    onFocusVisible: S,
    onKeyDown: b,
    onKeyUp: A,
    onMouseDown: _,
    onMouseLeave: G,
    onMouseUp: ee,
    onTouchEnd: s,
    onTouchMove: O,
    onTouchStart: N,
    tabIndex: B = 0,
    TouchRippleProps: W,
    touchRippleRef: se,
    type: re,
    ...ue
  } = n, Ee = M.useRef(null), te = xc(), w = On(te.ref, se), [R, D] = M.useState(!1);
  d && R && D(!1), M.useImperativeHandle(o, () => ({
    focusVisible: () => {
      D(!0), Ee.current.focus();
    }
  }), []);
  const z = te.shouldMount && !m && !d;
  M.useEffect(() => {
    R && g && !m && te.pulsate();
  }, [m, g, R, te]);
  const j = Ve(te, "start", _, p), U = Ve(te, "stop", T, p), F = Ve(te, "stop", k, p), V = Ve(te, "stop", ee, p), Y = Ve(te, "stop", (C) => {
    R && C.preventDefault(), G && G(C);
  }, p), H = Ve(te, "start", N, p), q = Ve(te, "stop", s, p), he = Ve(te, "stop", O, p), $ = Ve(te, "stop", (C) => {
    Rn(C.target) || D(!1), l && l(C);
  }, !1), Ce = Ut((C) => {
    Ee.current || (Ee.current = C.currentTarget), Rn(C.target) && (D(!0), S && S(C)), P && P(C);
  }), $e = () => {
    const C = Ee.current;
    return f && f !== "button" && !(C.tagName === "A" && C.href);
  }, Ue = Ut((C) => {
    g && !C.repeat && R && C.key === " " && te.stop(C, () => {
      te.start(C);
    }), C.target === C.currentTarget && $e() && C.key === " " && C.preventDefault(), b && b(C), C.target === C.currentTarget && $e() && C.key === "Enter" && !d && (C.preventDefault(), E && E(C));
  }), br = Ut((C) => {
    g && C.key === " " && R && !C.defaultPrevented && te.stop(C, () => {
      te.pulsate(C);
    }), A && A(C), E && C.target === C.currentTarget && $e() && C.key === " " && !C.defaultPrevented && E(C);
  });
  let Je = f;
  Je === "button" && (ue.href || ue.to) && (Je = v);
  const Ye = {};
  Je === "button" ? (Ye.type = re === void 0 ? "button" : re, Ye.disabled = d) : (!ue.href && !ue.to && (Ye.role = "button"), d && (Ye["aria-disabled"] = d));
  const Nt = On(r, Ee), mt = {
    ...n,
    centerRipple: i,
    component: f,
    disabled: d,
    disableRipple: m,
    disableTouchRipple: p,
    focusRipple: g,
    tabIndex: B,
    focusVisible: R
  }, u = Vc(mt);
  return /* @__PURE__ */ ge.jsxs(Lc, {
    as: Je,
    className: we(u.root, c),
    ownerState: mt,
    onBlur: $,
    onClick: E,
    onContextMenu: U,
    onFocus: Ce,
    onKeyDown: Ue,
    onKeyUp: br,
    onMouseDown: j,
    onMouseLeave: Y,
    onMouseUp: V,
    onDragLeave: F,
    onTouchEnd: q,
    onTouchMove: he,
    onTouchStart: H,
    ref: Nt,
    tabIndex: d ? -1 : B,
    type: re,
    ...Ye,
    ...ue,
    children: [a, z ? /* @__PURE__ */ ge.jsx(Mo, {
      ref: w,
      center: i,
      ...W
    }) : null]
  });
});
function Ve(e, t, r, n = !1) {
  return Ut((o) => (r && r(o), n || e[t](o), !0));
}
process.env.NODE_ENV !== "production" && (Bo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: yi,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: h.bool,
  /**
   * The content of the component.
   */
  children: h.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: h.object,
  /**
   * @ignore
   */
  className: h.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: hi,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: h.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: h.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: h.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: h.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: h.string,
  /**
   * @ignore
   */
  href: h.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: h.elementType,
  /**
   * @ignore
   */
  onBlur: h.func,
  /**
   * @ignore
   */
  onClick: h.func,
  /**
   * @ignore
   */
  onContextMenu: h.func,
  /**
   * @ignore
   */
  onDragLeave: h.func,
  /**
   * @ignore
   */
  onFocus: h.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: h.func,
  /**
   * @ignore
   */
  onKeyDown: h.func,
  /**
   * @ignore
   */
  onKeyUp: h.func,
  /**
   * @ignore
   */
  onMouseDown: h.func,
  /**
   * @ignore
   */
  onMouseLeave: h.func,
  /**
   * @ignore
   */
  onMouseUp: h.func,
  /**
   * @ignore
   */
  onTouchEnd: h.func,
  /**
   * @ignore
   */
  onTouchMove: h.func,
  /**
   * @ignore
   */
  onTouchStart: h.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: h.oneOfType([h.arrayOf(h.oneOfType([h.func, h.object, h.bool])), h.func, h.object]),
  /**
   * @default 0
   */
  tabIndex: h.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: h.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: h.oneOfType([h.func, h.shape({
    current: h.shape({
      pulsate: h.func.isRequired,
      start: h.func.isRequired,
      stop: h.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: h.oneOfType([h.oneOf(["button", "reset", "submit"]), h.string])
});
function Wc(e) {
  return typeof e.main == "string";
}
function Uc(e, t = []) {
  if (!Wc(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function jo(e = []) {
  return ([, t]) => t && Uc(t, e);
}
function Yc(e) {
  return Rt("MuiCircularProgress", e);
}
rr("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Ge = 44, Dr = _t`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, zr = _t`
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
`, qc = typeof Dr != "string" ? en`
        animation: ${Dr} 1.4s linear infinite;
      ` : null, Gc = typeof zr != "string" ? en`
        animation: ${zr} 1.4s ease-in-out infinite;
      ` : null, Hc = (e) => {
  const {
    classes: t,
    variant: r,
    color: n,
    disableShrink: o
  } = e, i = {
    root: ["root", r, `color${ye(n)}`],
    svg: ["svg"],
    circle: ["circle", `circle${ye(r)}`, o && "circleDisableShrink"]
  };
  return Lr(i, Yc, t);
}, Kc = Ne("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`color${ye(r.color)}`]];
  }
})(rn(({
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
    style: qc || {
      animation: `${Dr} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(jo()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), Xc = Ne("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), Jc = Ne("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.circle, t[`circle${ye(r.variant)}`], r.disableShrink && t.circleDisableShrink];
  }
})(rn(({
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
    style: Gc || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${zr} 1.4s ease-in-out infinite`
    }
  }]
}))), Do = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = yr({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: o,
    color: i = "primary",
    disableShrink: a = !1,
    size: c = 40,
    style: f,
    thickness: d = 3.6,
    value: m = 0,
    variant: p = "indeterminate",
    ...g
  } = n, x = {
    ...n,
    color: i,
    disableShrink: a,
    size: c,
    thickness: d,
    value: m,
    variant: p
  }, v = Hc(x), l = {}, E = {}, T = {};
  if (p === "determinate") {
    const k = 2 * Math.PI * ((Ge - d) / 2);
    l.strokeDasharray = k.toFixed(3), T["aria-valuenow"] = Math.round(m), l.strokeDashoffset = `${((100 - m) / 100 * k).toFixed(3)}px`, E.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ ge.jsx(Kc, {
    className: we(v.root, o),
    style: {
      width: c,
      height: c,
      ...E,
      ...f
    },
    ownerState: x,
    ref: r,
    role: "progressbar",
    ...T,
    ...g,
    children: /* @__PURE__ */ ge.jsx(Xc, {
      className: v.svg,
      ownerState: x,
      viewBox: `${Ge / 2} ${Ge / 2} ${Ge} ${Ge}`,
      children: /* @__PURE__ */ ge.jsx(Jc, {
        className: v.circle,
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
process.env.NODE_ENV !== "production" && (Do.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Override or extend the styles applied to the component.
   */
  classes: h.object,
  /**
   * @ignore
   */
  className: h.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: h.oneOfType([h.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), h.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: ro(h.bool, (e) => e.disableShrink && e.variant && e.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, for example '3rem'.
   * @default 40
   */
  size: h.oneOfType([h.number, h.string]),
  /**
   * @ignore
   */
  style: h.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: h.oneOfType([h.arrayOf(h.oneOfType([h.func, h.object, h.bool])), h.func, h.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: h.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: h.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: h.oneOf(["determinate", "indeterminate"])
});
function Qc(e) {
  return Rt("MuiButton", e);
}
const Ze = rr("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), zo = /* @__PURE__ */ M.createContext({});
process.env.NODE_ENV !== "production" && (zo.displayName = "ButtonGroupContext");
const Fo = /* @__PURE__ */ M.createContext(void 0);
process.env.NODE_ENV !== "production" && (Fo.displayName = "ButtonGroupButtonContext");
const Zc = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: i,
    loading: a,
    loadingPosition: c,
    classes: f
  } = e, d = {
    root: ["root", a && "loading", i, `${i}${ye(t)}`, `size${ye(o)}`, `${i}Size${ye(o)}`, `color${ye(t)}`, r && "disableElevation", n && "fullWidth", a && `loadingPosition${ye(c)}`],
    startIcon: ["icon", "startIcon", `iconSize${ye(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${ye(o)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, m = Lr(d, Qc, f);
  return {
    ...f,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...m
  };
}, Vo = [{
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
}], el = Ne(Bo, {
  shouldForwardProp: (e) => No(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${ye(r.color)}`], t[`size${ye(r.size)}`], t[`${r.variant}Size${ye(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth, r.loading && t.loading];
  }
})(rn(({
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
    [`&.${Ze.disabled}`]: {
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
        [`&.${Ze.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${Ze.disabled}`]: {
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
        [`&.${Ze.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(jo()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[n].main,
        "--variant-outlinedColor": (e.vars || e).palette[n].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.5)` : st(e.palette[n].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[n].contrastText,
        "--variant-containedBg": (e.vars || e).palette[n].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[n].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : st(e.palette[n].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[n].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : st(e.palette[n].main, e.palette.action.hoverOpacity)
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
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : st(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : st(e.palette.text.primary, e.palette.action.hoverOpacity)
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
        [`&.${Ze.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Ze.disabled}`]: {
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
        [`&.${Ze.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), tl = Ne("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, r.loading && t.startIconLoadingStart, t[`iconSize${ye(r.size)}`]];
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
  }, ...Vo]
})), rl = Ne("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, r.loading && t.endIconLoadingEnd, t[`iconSize${ye(r.size)}`]];
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
  }, ...Vo]
})), nl = Ne("span", {
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
})), Qn = Ne("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder",
  overridesResolver: (e, t) => t.loadingIconPlaceholder
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Lo = /* @__PURE__ */ M.forwardRef(function(t, r) {
  const n = M.useContext(zo), o = M.useContext(Fo), i = Kt(n, t), a = yr({
    props: i,
    name: "MuiButton"
  }), {
    children: c,
    color: f = "primary",
    component: d = "button",
    className: m,
    disabled: p = !1,
    disableElevation: g = !1,
    disableFocusRipple: x = !1,
    endIcon: v,
    focusVisibleClassName: l,
    fullWidth: E = !1,
    id: T,
    loading: k = null,
    loadingIndicator: P,
    loadingPosition: S = "center",
    size: b = "medium",
    startIcon: A,
    type: _,
    variant: G = "text",
    ...ee
  } = a, s = Ci(T), O = P ?? /* @__PURE__ */ ge.jsx(Do, {
    "aria-labelledby": s,
    color: "inherit",
    size: 16
  }), N = {
    ...a,
    color: f,
    component: d,
    disabled: p,
    disableElevation: g,
    disableFocusRipple: x,
    fullWidth: E,
    loading: k,
    loadingIndicator: O,
    loadingPosition: S,
    size: b,
    type: _,
    variant: G
  }, B = Zc(N), W = (A || k && S === "start") && /* @__PURE__ */ ge.jsx(tl, {
    className: B.startIcon,
    ownerState: N,
    children: A || /* @__PURE__ */ ge.jsx(Qn, {
      className: B.loadingIconPlaceholder,
      ownerState: N
    })
  }), se = (v || k && S === "end") && /* @__PURE__ */ ge.jsx(rl, {
    className: B.endIcon,
    ownerState: N,
    children: v || /* @__PURE__ */ ge.jsx(Qn, {
      className: B.loadingIconPlaceholder,
      ownerState: N
    })
  }), re = o || "", ue = typeof k == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ ge.jsx("span", {
      className: B.loadingWrapper,
      style: {
        display: "contents"
      },
      children: k && /* @__PURE__ */ ge.jsx(nl, {
        className: B.loadingIndicator,
        ownerState: N,
        children: O
      })
    })
  ) : null;
  return /* @__PURE__ */ ge.jsxs(el, {
    ownerState: N,
    className: we(n.className, B.root, m, re),
    component: d,
    disabled: p || k,
    focusRipple: !x,
    focusVisibleClassName: we(B.focusVisible, l),
    ref: r,
    type: _,
    id: s,
    ...ee,
    classes: B,
    children: [W, S !== "end" && ue, c, S === "end" && ue, se]
  });
});
process.env.NODE_ENV !== "production" && (Lo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: h.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: h.object,
  /**
   * @ignore
   */
  className: h.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: h.oneOfType([h.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), h.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: h.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: h.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: h.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: h.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: h.bool,
  /**
   * Element placed after the children.
   */
  endIcon: h.node,
  /**
   * @ignore
   */
  focusVisibleClassName: h.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: h.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: h.string,
  /**
   * @ignore
   */
  id: h.string,
  /**
   * If `true`, the loading indicator is visible and the button is disabled.
   * If `true | false`, the loading wrapper is always rendered before the children to prevent [Google Translation Crash](https://github.com/mui/material-ui/issues/27853).
   * @default null
   */
  loading: h.bool,
  /**
   * Element placed before the children if the button is in loading state.
   * The node should contain an element with `role="progressbar"` with an accessible name.
   * By default, it renders a `CircularProgress` that is labeled by the button itself.
   * @default <CircularProgress color="inherit" size={16} />
   */
  loadingIndicator: h.node,
  /**
   * The loading indicator can be positioned on the start, end, or the center of the button.
   * @default 'center'
   */
  loadingPosition: h.oneOf(["center", "end", "start"]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: h.oneOfType([h.oneOf(["small", "medium", "large"]), h.string]),
  /**
   * Element placed before the children.
   */
  startIcon: h.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: h.oneOfType([h.arrayOf(h.oneOfType([h.func, h.object, h.bool])), h.func, h.object]),
  /**
   * @ignore
   */
  type: h.oneOfType([h.oneOf(["button", "reset", "submit"]), h.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: h.oneOfType([h.oneOf(["contained", "outlined", "text"]), h.string])
});
function al(e) {
  const { bgcolor: t, text: r, txtcolor: n, disabled: o, onClick: i, size: a } = e;
  return (
    //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
    /* @__PURE__ */ ge.jsx(
      Lo,
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
export {
  al as CustomButton
};
//# sourceMappingURL=index.es.js.map
