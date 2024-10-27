var ai = Object.defineProperty;
var si = (e, t, r) => t in e ? ai(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Ct = (e, t, r) => si(e, typeof t != "symbol" ? t + "" : t, r);
import * as V from "react";
import tt, { forwardRef as ci, useContext as ui, Children as li, isValidElement as Ut, cloneElement as Yt } from "react";
function fi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ar = { exports: {} }, Et = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gn;
function di() {
  if (gn) return Et;
  gn = 1;
  var e = tt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(c, l, f) {
    var d, p = {}, g = null, x = null;
    f !== void 0 && (g = "" + f), l.key !== void 0 && (g = "" + l.key), l.ref !== void 0 && (x = l.ref);
    for (d in l) n.call(l, d) && !i.hasOwnProperty(d) && (p[d] = l[d]);
    if (c && c.defaultProps) for (d in l = c.defaultProps, l) p[d] === void 0 && (p[d] = l[d]);
    return { $$typeof: t, type: c, key: g, ref: x, props: p, _owner: o.current };
  }
  return Et.Fragment = r, Et.jsx = a, Et.jsxs = a, Et;
}
var xt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yn;
function pi() {
  return yn || (yn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = tt, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), c = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), S = Symbol.iterator, y = "@@iterator";
    function h(u) {
      if (u === null || typeof u != "object")
        return null;
      var E = S && u[S] || u[y];
      return typeof E == "function" ? E : null;
    }
    var T = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(u) {
      {
        for (var E = arguments.length, P = new Array(E > 1 ? E - 1 : 0), B = 1; B < E; B++)
          P[B - 1] = arguments[B];
        R("error", u, P);
      }
    }
    function R(u, E, P) {
      {
        var B = T.ReactDebugCurrentFrame, re = B.getStackAddendum();
        re !== "" && (E += "%s", P = P.concat([re]));
        var ue = P.map(function(Q) {
          return String(Q);
        });
        ue.unshift("Warning: " + E), Function.prototype.apply.call(console[u], console, ue);
      }
    }
    var C = !1, m = !1, I = !1, A = !1, Z = !1, J;
    J = Symbol.for("react.module.reference");
    function s(u) {
      return !!(typeof u == "string" || typeof u == "function" || u === n || u === i || Z || u === o || u === f || u === d || A || u === x || C || m || I || typeof u == "object" && u !== null && (u.$$typeof === g || u.$$typeof === p || u.$$typeof === a || u.$$typeof === c || u.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      u.$$typeof === J || u.getModuleId !== void 0));
    }
    function _(u, E, P) {
      var B = u.displayName;
      if (B)
        return B;
      var re = E.displayName || E.name || "";
      return re !== "" ? P + "(" + re + ")" : P;
    }
    function N(u) {
      return u.displayName || "Context";
    }
    function D(u) {
      if (u == null)
        return null;
      if (typeof u.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof u == "function")
        return u.displayName || u.name || null;
      if (typeof u == "string")
        return u;
      switch (u) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case f:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case c:
            var E = u;
            return N(E) + ".Consumer";
          case a:
            var P = u;
            return N(P._context) + ".Provider";
          case l:
            return _(u, u.render, "ForwardRef");
          case p:
            var B = u.displayName || null;
            return B !== null ? B : D(u.type) || "Memo";
          case g: {
            var re = u, ue = re._payload, Q = re._init;
            try {
              return D(Q(ue));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Y = Object.assign, ce = 0, se, me, Ce, Ee, w, O, F;
    function W() {
    }
    W.__reactDisabledLog = !0;
    function j() {
      {
        if (ce === 0) {
          se = console.log, me = console.info, Ce = console.warn, Ee = console.error, w = console.group, O = console.groupCollapsed, F = console.groupEnd;
          var u = {
            configurable: !0,
            enumerable: !0,
            value: W,
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
        ce++;
      }
    }
    function K() {
      {
        if (ce--, ce === 0) {
          var u = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Y({}, u, {
              value: se
            }),
            info: Y({}, u, {
              value: me
            }),
            warn: Y({}, u, {
              value: Ce
            }),
            error: Y({}, u, {
              value: Ee
            }),
            group: Y({}, u, {
              value: w
            }),
            groupCollapsed: Y({}, u, {
              value: O
            }),
            groupEnd: Y({}, u, {
              value: F
            })
          });
        }
        ce < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var L = T.ReactCurrentDispatcher, z;
    function q(u, E, P) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (re) {
            var B = re.stack.trim().match(/\n( *(at )?)/);
            z = B && B[1] || "";
          }
        return `
` + z + u;
      }
    }
    var H = !1, G;
    {
      var be = typeof WeakMap == "function" ? WeakMap : Map;
      G = new be();
    }
    function $(u, E) {
      if (!u || H)
        return "";
      {
        var P = G.get(u);
        if (P !== void 0)
          return P;
      }
      var B;
      H = !0;
      var re = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ue;
      ue = L.current, L.current = null, j();
      try {
        if (E) {
          var Q = function() {
            throw Error();
          };
          if (Object.defineProperty(Q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Q, []);
            } catch ($e) {
              B = $e;
            }
            Reflect.construct(u, [], Q);
          } else {
            try {
              Q.call();
            } catch ($e) {
              B = $e;
            }
            u.call(Q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($e) {
            B = $e;
          }
          u();
        }
      } catch ($e) {
        if ($e && B && typeof $e.stack == "string") {
          for (var X = $e.stack.split(`
`), Oe = B.stack.split(`
`), ge = X.length - 1, ve = Oe.length - 1; ge >= 1 && ve >= 0 && X[ge] !== Oe[ve]; )
            ve--;
          for (; ge >= 1 && ve >= 0; ge--, ve--)
            if (X[ge] !== Oe[ve]) {
              if (ge !== 1 || ve !== 1)
                do
                  if (ge--, ve--, ve < 0 || X[ge] !== Oe[ve]) {
                    var Ne = `
` + X[ge].replace(" at new ", " at ");
                    return u.displayName && Ne.includes("<anonymous>") && (Ne = Ne.replace("<anonymous>", u.displayName)), typeof u == "function" && G.set(u, Ne), Ne;
                  }
                while (ge >= 1 && ve >= 0);
              break;
            }
        }
      } finally {
        H = !1, L.current = ue, K(), Error.prepareStackTrace = re;
      }
      var it = u ? u.displayName || u.name : "", et = it ? q(it) : "";
      return typeof u == "function" && G.set(u, et), et;
    }
    function we(u, E, P) {
      return $(u, !1);
    }
    function M(u) {
      var E = u.prototype;
      return !!(E && E.isReactComponent);
    }
    function Re(u, E, P) {
      if (u == null)
        return "";
      if (typeof u == "function")
        return $(u, M(u));
      if (typeof u == "string")
        return q(u);
      switch (u) {
        case f:
          return q("Suspense");
        case d:
          return q("SuspenseList");
      }
      if (typeof u == "object")
        switch (u.$$typeof) {
          case l:
            return we(u.render);
          case p:
            return Re(u.type, E, P);
          case g: {
            var B = u, re = B._payload, ue = B._init;
            try {
              return Re(ue(re), E, P);
            } catch {
            }
          }
        }
      return "";
    }
    var Me = Object.prototype.hasOwnProperty, Qe = {}, Ze = T.ReactDebugCurrentFrame;
    function Ve(u) {
      if (u) {
        var E = u._owner, P = Re(u.type, u._source, E ? E.type : null);
        Ze.setExtraStackFrame(P);
      } else
        Ze.setExtraStackFrame(null);
    }
    function gr(u, E, P, B, re) {
      {
        var ue = Function.call.bind(Me);
        for (var Q in u)
          if (ue(u, Q)) {
            var X = void 0;
            try {
              if (typeof u[Q] != "function") {
                var Oe = Error((B || "React class") + ": " + P + " type `" + Q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[Q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Oe.name = "Invariant Violation", Oe;
              }
              X = u[Q](E, Q, B, P, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ge) {
              X = ge;
            }
            X && !(X instanceof Error) && (Ve(re), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", B || "React class", P, Q, typeof X), Ve(null)), X instanceof Error && !(X.message in Qe) && (Qe[X.message] = !0, Ve(re), k("Failed %s type: %s", P, X.message), Ve(null));
          }
      }
    }
    var jt = Array.isArray;
    function vt(u) {
      return jt(u);
    }
    function U(u) {
      {
        var E = typeof Symbol == "function" && Symbol.toStringTag, P = E && u[Symbol.toStringTag] || u.constructor.name || "Object";
        return P;
      }
    }
    function Dt(u) {
      try {
        return Bt(u), !1;
      } catch {
        return !0;
      }
    }
    function Bt(u) {
      return "" + u;
    }
    function St(u) {
      if (Dt(u))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", U(u)), Bt(u);
    }
    var nt = T.ReactCurrentOwner, zo = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, sn, cn, yr;
    yr = {};
    function Wo(u) {
      if (Me.call(u, "ref")) {
        var E = Object.getOwnPropertyDescriptor(u, "ref").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return u.ref !== void 0;
    }
    function Uo(u) {
      if (Me.call(u, "key")) {
        var E = Object.getOwnPropertyDescriptor(u, "key").get;
        if (E && E.isReactWarning)
          return !1;
      }
      return u.key !== void 0;
    }
    function Yo(u, E) {
      if (typeof u.ref == "string" && nt.current && E && nt.current.stateNode !== E) {
        var P = D(nt.current.type);
        yr[P] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(nt.current.type), u.ref), yr[P] = !0);
      }
    }
    function qo(u, E) {
      {
        var P = function() {
          sn || (sn = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        P.isReactWarning = !0, Object.defineProperty(u, "key", {
          get: P,
          configurable: !0
        });
      }
    }
    function Go(u, E) {
      {
        var P = function() {
          cn || (cn = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", E));
        };
        P.isReactWarning = !0, Object.defineProperty(u, "ref", {
          get: P,
          configurable: !0
        });
      }
    }
    var Ko = function(u, E, P, B, re, ue, Q) {
      var X = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: u,
        key: E,
        ref: P,
        props: Q,
        // Record the component responsible for creating this element.
        _owner: ue
      };
      return X._store = {}, Object.defineProperty(X._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(X, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: B
      }), Object.defineProperty(X, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: re
      }), Object.freeze && (Object.freeze(X.props), Object.freeze(X)), X;
    };
    function Ho(u, E, P, B, re) {
      {
        var ue, Q = {}, X = null, Oe = null;
        P !== void 0 && (St(P), X = "" + P), Uo(E) && (St(E.key), X = "" + E.key), Wo(E) && (Oe = E.ref, Yo(E, re));
        for (ue in E)
          Me.call(E, ue) && !zo.hasOwnProperty(ue) && (Q[ue] = E[ue]);
        if (u && u.defaultProps) {
          var ge = u.defaultProps;
          for (ue in ge)
            Q[ue] === void 0 && (Q[ue] = ge[ue]);
        }
        if (X || Oe) {
          var ve = typeof u == "function" ? u.displayName || u.name || "Unknown" : u;
          X && qo(Q, ve), Oe && Go(Q, ve);
        }
        return Ko(u, X, Oe, re, B, nt.current, Q);
      }
    }
    var br = T.ReactCurrentOwner, un = T.ReactDebugCurrentFrame;
    function ot(u) {
      if (u) {
        var E = u._owner, P = Re(u.type, u._source, E ? E.type : null);
        un.setExtraStackFrame(P);
      } else
        un.setExtraStackFrame(null);
    }
    var vr;
    vr = !1;
    function Sr(u) {
      return typeof u == "object" && u !== null && u.$$typeof === t;
    }
    function ln() {
      {
        if (br.current) {
          var u = D(br.current.type);
          if (u)
            return `

Check the render method of \`` + u + "`.";
        }
        return "";
      }
    }
    function Xo(u) {
      return "";
    }
    var fn = {};
    function Jo(u) {
      {
        var E = ln();
        if (!E) {
          var P = typeof u == "string" ? u : u.displayName || u.name;
          P && (E = `

Check the top-level render call using <` + P + ">.");
        }
        return E;
      }
    }
    function dn(u, E) {
      {
        if (!u._store || u._store.validated || u.key != null)
          return;
        u._store.validated = !0;
        var P = Jo(E);
        if (fn[P])
          return;
        fn[P] = !0;
        var B = "";
        u && u._owner && u._owner !== br.current && (B = " It was passed a child from " + D(u._owner.type) + "."), ot(u), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', P, B), ot(null);
      }
    }
    function pn(u, E) {
      {
        if (typeof u != "object")
          return;
        if (vt(u))
          for (var P = 0; P < u.length; P++) {
            var B = u[P];
            Sr(B) && dn(B, E);
          }
        else if (Sr(u))
          u._store && (u._store.validated = !0);
        else if (u) {
          var re = h(u);
          if (typeof re == "function" && re !== u.entries)
            for (var ue = re.call(u), Q; !(Q = ue.next()).done; )
              Sr(Q.value) && dn(Q.value, E);
        }
      }
    }
    function Qo(u) {
      {
        var E = u.type;
        if (E == null || typeof E == "string")
          return;
        var P;
        if (typeof E == "function")
          P = E.propTypes;
        else if (typeof E == "object" && (E.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        E.$$typeof === p))
          P = E.propTypes;
        else
          return;
        if (P) {
          var B = D(E);
          gr(P, u.props, "prop", B, u);
        } else if (E.PropTypes !== void 0 && !vr) {
          vr = !0;
          var re = D(E);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", re || "Unknown");
        }
        typeof E.getDefaultProps == "function" && !E.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Zo(u) {
      {
        for (var E = Object.keys(u.props), P = 0; P < E.length; P++) {
          var B = E[P];
          if (B !== "children" && B !== "key") {
            ot(u), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", B), ot(null);
            break;
          }
        }
        u.ref !== null && (ot(u), k("Invalid attribute `ref` supplied to `React.Fragment`."), ot(null));
      }
    }
    var hn = {};
    function mn(u, E, P, B, re, ue) {
      {
        var Q = s(u);
        if (!Q) {
          var X = "";
          (u === void 0 || typeof u == "object" && u !== null && Object.keys(u).length === 0) && (X += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Oe = Xo();
          Oe ? X += Oe : X += ln();
          var ge;
          u === null ? ge = "null" : vt(u) ? ge = "array" : u !== void 0 && u.$$typeof === t ? (ge = "<" + (D(u.type) || "Unknown") + " />", X = " Did you accidentally export a JSX literal instead of a component?") : ge = typeof u, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ge, X);
        }
        var ve = Ho(u, E, P, re, ue);
        if (ve == null)
          return ve;
        if (Q) {
          var Ne = E.children;
          if (Ne !== void 0)
            if (B)
              if (vt(Ne)) {
                for (var it = 0; it < Ne.length; it++)
                  pn(Ne[it], u);
                Object.freeze && Object.freeze(Ne);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              pn(Ne, u);
        }
        if (Me.call(E, "key")) {
          var et = D(u), $e = Object.keys(E).filter(function(ii) {
            return ii !== "key";
          }), Cr = $e.length > 0 ? "{key: someKey, " + $e.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!hn[et + Cr]) {
            var oi = $e.length > 0 ? "{" + $e.join(": ..., ") + ": ...}" : "{}";
            k(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Cr, et, oi, et), hn[et + Cr] = !0;
          }
        }
        return u === n ? Zo(ve) : Qo(ve), ve;
      }
    }
    function ei(u, E, P) {
      return mn(u, E, P, !0);
    }
    function ti(u, E, P) {
      return mn(u, E, P, !1);
    }
    var ri = ti, ni = ei;
    xt.Fragment = n, xt.jsx = ri, xt.jsxs = ni;
  }()), xt;
}
process.env.NODE_ENV === "production" ? Ar.exports = di() : Ar.exports = pi();
var Le = Ar.exports, Ir = { exports: {} }, Ft = { exports: {} }, ne = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bn;
function hi() {
  if (bn) return ne;
  bn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
  function R(m) {
    if (typeof m == "object" && m !== null) {
      var I = m.$$typeof;
      switch (I) {
        case t:
          switch (m = m.type, m) {
            case l:
            case f:
            case n:
            case i:
            case o:
            case p:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case c:
                case d:
                case S:
                case x:
                case a:
                  return m;
                default:
                  return I;
              }
          }
        case r:
          return I;
      }
    }
  }
  function C(m) {
    return R(m) === f;
  }
  return ne.AsyncMode = l, ne.ConcurrentMode = f, ne.ContextConsumer = c, ne.ContextProvider = a, ne.Element = t, ne.ForwardRef = d, ne.Fragment = n, ne.Lazy = S, ne.Memo = x, ne.Portal = r, ne.Profiler = i, ne.StrictMode = o, ne.Suspense = p, ne.isAsyncMode = function(m) {
    return C(m) || R(m) === l;
  }, ne.isConcurrentMode = C, ne.isContextConsumer = function(m) {
    return R(m) === c;
  }, ne.isContextProvider = function(m) {
    return R(m) === a;
  }, ne.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === t;
  }, ne.isForwardRef = function(m) {
    return R(m) === d;
  }, ne.isFragment = function(m) {
    return R(m) === n;
  }, ne.isLazy = function(m) {
    return R(m) === S;
  }, ne.isMemo = function(m) {
    return R(m) === x;
  }, ne.isPortal = function(m) {
    return R(m) === r;
  }, ne.isProfiler = function(m) {
    return R(m) === i;
  }, ne.isStrictMode = function(m) {
    return R(m) === o;
  }, ne.isSuspense = function(m) {
    return R(m) === p;
  }, ne.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === f || m === i || m === o || m === p || m === g || typeof m == "object" && m !== null && (m.$$typeof === S || m.$$typeof === x || m.$$typeof === a || m.$$typeof === c || m.$$typeof === d || m.$$typeof === h || m.$$typeof === T || m.$$typeof === k || m.$$typeof === y);
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
var vn;
function mi() {
  return vn || (vn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, f = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, x = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, T = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
    function R($) {
      return typeof $ == "string" || typeof $ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      $ === n || $ === f || $ === i || $ === o || $ === p || $ === g || typeof $ == "object" && $ !== null && ($.$$typeof === S || $.$$typeof === x || $.$$typeof === a || $.$$typeof === c || $.$$typeof === d || $.$$typeof === h || $.$$typeof === T || $.$$typeof === k || $.$$typeof === y);
    }
    function C($) {
      if (typeof $ == "object" && $ !== null) {
        var we = $.$$typeof;
        switch (we) {
          case t:
            var M = $.type;
            switch (M) {
              case l:
              case f:
              case n:
              case i:
              case o:
              case p:
                return M;
              default:
                var Re = M && M.$$typeof;
                switch (Re) {
                  case c:
                  case d:
                  case S:
                  case x:
                  case a:
                    return Re;
                  default:
                    return we;
                }
            }
          case r:
            return we;
        }
      }
    }
    var m = l, I = f, A = c, Z = a, J = t, s = d, _ = n, N = S, D = x, Y = r, ce = i, se = o, me = p, Ce = !1;
    function Ee($) {
      return Ce || (Ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), w($) || C($) === l;
    }
    function w($) {
      return C($) === f;
    }
    function O($) {
      return C($) === c;
    }
    function F($) {
      return C($) === a;
    }
    function W($) {
      return typeof $ == "object" && $ !== null && $.$$typeof === t;
    }
    function j($) {
      return C($) === d;
    }
    function K($) {
      return C($) === n;
    }
    function L($) {
      return C($) === S;
    }
    function z($) {
      return C($) === x;
    }
    function q($) {
      return C($) === r;
    }
    function H($) {
      return C($) === i;
    }
    function G($) {
      return C($) === o;
    }
    function be($) {
      return C($) === p;
    }
    oe.AsyncMode = m, oe.ConcurrentMode = I, oe.ContextConsumer = A, oe.ContextProvider = Z, oe.Element = J, oe.ForwardRef = s, oe.Fragment = _, oe.Lazy = N, oe.Memo = D, oe.Portal = Y, oe.Profiler = ce, oe.StrictMode = se, oe.Suspense = me, oe.isAsyncMode = Ee, oe.isConcurrentMode = w, oe.isContextConsumer = O, oe.isContextProvider = F, oe.isElement = W, oe.isForwardRef = j, oe.isFragment = K, oe.isLazy = L, oe.isMemo = z, oe.isPortal = q, oe.isProfiler = H, oe.isStrictMode = G, oe.isSuspense = be, oe.isValidElementType = R, oe.typeOf = C;
  }()), oe;
}
var Sn;
function zr() {
  return Sn || (Sn = 1, process.env.NODE_ENV === "production" ? Ft.exports = hi() : Ft.exports = mi()), Ft.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Er, Cn;
function gi() {
  if (Cn) return Er;
  Cn = 1;
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
      var l = Object.getOwnPropertyNames(a).map(function(d) {
        return a[d];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var f = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        f[d] = d;
      }), Object.keys(Object.assign({}, f)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Er = o() ? Object.assign : function(i, a) {
    for (var c, l = n(i), f, d = 1; d < arguments.length; d++) {
      c = Object(arguments[d]);
      for (var p in c)
        t.call(c, p) && (l[p] = c[p]);
      if (e) {
        f = e(c);
        for (var g = 0; g < f.length; g++)
          r.call(c, f[g]) && (l[f[g]] = c[f[g]]);
      }
    }
    return l;
  }, Er;
}
var xr, En;
function Wr() {
  if (En) return xr;
  En = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return xr = e, xr;
}
var wr, xn;
function no() {
  return xn || (xn = 1, wr = Function.call.bind(Object.prototype.hasOwnProperty)), wr;
}
var Tr, wn;
function yi() {
  if (wn) return Tr;
  wn = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Wr(), r = {}, n = no();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, c, l, f) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in i)
        if (n(i, d)) {
          var p;
          try {
            if (typeof i[d] != "function") {
              var g = Error(
                (l || "React class") + ": " + c + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            p = i[d](a, d, l, c, null, t);
          } catch (S) {
            p = S;
          }
          if (p && !(p instanceof Error) && e(
            (l || "React class") + ": type specification of " + c + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in r)) {
            r[p.message] = !0;
            var x = f ? f() : "";
            e(
              "Failed " + c + " type: " + p.message + (x ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Tr = o, Tr;
}
var Rr, Tn;
function bi() {
  if (Tn) return Rr;
  Tn = 1;
  var e = zr(), t = gi(), r = Wr(), n = no(), o = yi(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(c) {
    var l = "Warning: " + c;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Rr = function(c, l) {
    var f = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function p(w) {
      var O = w && (f && w[f] || w[d]);
      if (typeof O == "function")
        return O;
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
      arrayOf: R,
      element: C(),
      elementType: m(),
      instanceOf: I,
      node: s(),
      objectOf: Z,
      oneOf: A,
      oneOfType: J,
      shape: N,
      exact: D
    };
    function S(w, O) {
      return w === O ? w !== 0 || 1 / w === 1 / O : w !== w && O !== O;
    }
    function y(w, O) {
      this.message = w, this.data = O && typeof O == "object" ? O : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function h(w) {
      if (process.env.NODE_ENV !== "production")
        var O = {}, F = 0;
      function W(K, L, z, q, H, G, be) {
        if (q = q || g, G = G || z, be !== r) {
          if (l) {
            var $ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw $.name = "Invariant Violation", $;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var we = q + ":" + z;
            !O[we] && // Avoid spamming the console because they are often not actionable except for lib authors
            F < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + G + "` prop on `" + q + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), O[we] = !0, F++);
          }
        }
        return L[z] == null ? K ? L[z] === null ? new y("The " + H + " `" + G + "` is marked as required " + ("in `" + q + "`, but its value is `null`.")) : new y("The " + H + " `" + G + "` is marked as required in " + ("`" + q + "`, but its value is `undefined`.")) : null : w(L, z, q, H, G);
      }
      var j = W.bind(null, !1);
      return j.isRequired = W.bind(null, !0), j;
    }
    function T(w) {
      function O(F, W, j, K, L, z) {
        var q = F[W], H = se(q);
        if (H !== w) {
          var G = me(q);
          return new y(
            "Invalid " + K + " `" + L + "` of type " + ("`" + G + "` supplied to `" + j + "`, expected ") + ("`" + w + "`."),
            { expectedType: w }
          );
        }
        return null;
      }
      return h(O);
    }
    function k() {
      return h(a);
    }
    function R(w) {
      function O(F, W, j, K, L) {
        if (typeof w != "function")
          return new y("Property `" + L + "` of component `" + j + "` has invalid PropType notation inside arrayOf.");
        var z = F[W];
        if (!Array.isArray(z)) {
          var q = se(z);
          return new y("Invalid " + K + " `" + L + "` of type " + ("`" + q + "` supplied to `" + j + "`, expected an array."));
        }
        for (var H = 0; H < z.length; H++) {
          var G = w(z, H, j, K, L + "[" + H + "]", r);
          if (G instanceof Error)
            return G;
        }
        return null;
      }
      return h(O);
    }
    function C() {
      function w(O, F, W, j, K) {
        var L = O[F];
        if (!c(L)) {
          var z = se(L);
          return new y("Invalid " + j + " `" + K + "` of type " + ("`" + z + "` supplied to `" + W + "`, expected a single ReactElement."));
        }
        return null;
      }
      return h(w);
    }
    function m() {
      function w(O, F, W, j, K) {
        var L = O[F];
        if (!e.isValidElementType(L)) {
          var z = se(L);
          return new y("Invalid " + j + " `" + K + "` of type " + ("`" + z + "` supplied to `" + W + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return h(w);
    }
    function I(w) {
      function O(F, W, j, K, L) {
        if (!(F[W] instanceof w)) {
          var z = w.name || g, q = Ee(F[W]);
          return new y("Invalid " + K + " `" + L + "` of type " + ("`" + q + "` supplied to `" + j + "`, expected ") + ("instance of `" + z + "`."));
        }
        return null;
      }
      return h(O);
    }
    function A(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function O(F, W, j, K, L) {
        for (var z = F[W], q = 0; q < w.length; q++)
          if (S(z, w[q]))
            return null;
        var H = JSON.stringify(w, function(be, $) {
          var we = me($);
          return we === "symbol" ? String($) : $;
        });
        return new y("Invalid " + K + " `" + L + "` of value `" + String(z) + "` " + ("supplied to `" + j + "`, expected one of " + H + "."));
      }
      return h(O);
    }
    function Z(w) {
      function O(F, W, j, K, L) {
        if (typeof w != "function")
          return new y("Property `" + L + "` of component `" + j + "` has invalid PropType notation inside objectOf.");
        var z = F[W], q = se(z);
        if (q !== "object")
          return new y("Invalid " + K + " `" + L + "` of type " + ("`" + q + "` supplied to `" + j + "`, expected an object."));
        for (var H in z)
          if (n(z, H)) {
            var G = w(z, H, j, K, L + "." + H, r);
            if (G instanceof Error)
              return G;
          }
        return null;
      }
      return h(O);
    }
    function J(w) {
      if (!Array.isArray(w))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var O = 0; O < w.length; O++) {
        var F = w[O];
        if (typeof F != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Ce(F) + " at index " + O + "."
          ), a;
      }
      function W(j, K, L, z, q) {
        for (var H = [], G = 0; G < w.length; G++) {
          var be = w[G], $ = be(j, K, L, z, q, r);
          if ($ == null)
            return null;
          $.data && n($.data, "expectedType") && H.push($.data.expectedType);
        }
        var we = H.length > 0 ? ", expected one of type [" + H.join(", ") + "]" : "";
        return new y("Invalid " + z + " `" + q + "` supplied to " + ("`" + L + "`" + we + "."));
      }
      return h(W);
    }
    function s() {
      function w(O, F, W, j, K) {
        return Y(O[F]) ? null : new y("Invalid " + j + " `" + K + "` supplied to " + ("`" + W + "`, expected a ReactNode."));
      }
      return h(w);
    }
    function _(w, O, F, W, j) {
      return new y(
        (w || "React class") + ": " + O + " type `" + F + "." + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + j + "`."
      );
    }
    function N(w) {
      function O(F, W, j, K, L) {
        var z = F[W], q = se(z);
        if (q !== "object")
          return new y("Invalid " + K + " `" + L + "` of type `" + q + "` " + ("supplied to `" + j + "`, expected `object`."));
        for (var H in w) {
          var G = w[H];
          if (typeof G != "function")
            return _(j, K, L, H, me(G));
          var be = G(z, H, j, K, L + "." + H, r);
          if (be)
            return be;
        }
        return null;
      }
      return h(O);
    }
    function D(w) {
      function O(F, W, j, K, L) {
        var z = F[W], q = se(z);
        if (q !== "object")
          return new y("Invalid " + K + " `" + L + "` of type `" + q + "` " + ("supplied to `" + j + "`, expected `object`."));
        var H = t({}, F[W], w);
        for (var G in H) {
          var be = w[G];
          if (n(w, G) && typeof be != "function")
            return _(j, K, L, G, me(be));
          if (!be)
            return new y(
              "Invalid " + K + " `" + L + "` key `" + G + "` supplied to `" + j + "`.\nBad object: " + JSON.stringify(F[W], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(w), null, "  ")
            );
          var $ = be(z, G, j, K, L + "." + G, r);
          if ($)
            return $;
        }
        return null;
      }
      return h(O);
    }
    function Y(w) {
      switch (typeof w) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !w;
        case "object":
          if (Array.isArray(w))
            return w.every(Y);
          if (w === null || c(w))
            return !0;
          var O = p(w);
          if (O) {
            var F = O.call(w), W;
            if (O !== w.entries) {
              for (; !(W = F.next()).done; )
                if (!Y(W.value))
                  return !1;
            } else
              for (; !(W = F.next()).done; ) {
                var j = W.value;
                if (j && !Y(j[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ce(w, O) {
      return w === "symbol" ? !0 : O ? O["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && O instanceof Symbol : !1;
    }
    function se(w) {
      var O = typeof w;
      return Array.isArray(w) ? "array" : w instanceof RegExp ? "object" : ce(O, w) ? "symbol" : O;
    }
    function me(w) {
      if (typeof w > "u" || w === null)
        return "" + w;
      var O = se(w);
      if (O === "object") {
        if (w instanceof Date)
          return "date";
        if (w instanceof RegExp)
          return "regexp";
      }
      return O;
    }
    function Ce(w) {
      var O = me(w);
      switch (O) {
        case "array":
        case "object":
          return "an " + O;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + O;
        default:
          return O;
      }
    }
    function Ee(w) {
      return !w.constructor || !w.constructor.name ? g : w.constructor.name;
    }
    return x.checkPropTypes = o, x.resetWarningCache = o.resetWarningCache, x.PropTypes = x, x;
  }, Rr;
}
var Or, Rn;
function vi() {
  if (Rn) return Or;
  Rn = 1;
  var e = Wr();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, Or = function() {
    function n(a, c, l, f, d, p) {
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
  }, Or;
}
if (process.env.NODE_ENV !== "production") {
  var Si = zr(), Ci = !0;
  Ir.exports = bi()(Si.isElement, Ci);
} else
  Ir.exports = vi()();
var Ei = Ir.exports;
const v = /* @__PURE__ */ fi(Ei);
function oo(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = oo(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function je() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = oo(e)) && (n && (n += " "), n += t);
  return n;
}
function Xt(e, t) {
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
              const l = c;
              r[o][l] = Xt(i[l], a[l]);
            }
        }
      } else r[o] === void 0 && (r[o] = e[o]);
    }
  return r;
}
function io(e, t, r = void 0) {
  const n = {};
  for (const o in e) {
    const i = e[o];
    let a = "", c = !0;
    for (let l = 0; l < i.length; l += 1) {
      const f = i[l];
      f && (a += (c === !0 ? "" : " ") + t(f), c = !1, r && r[f] && (a += " " + r[f]));
    }
    n[o] = a;
  }
  return n;
}
function He(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((n) => r.searchParams.append("args[]", n)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
function xi(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function Ur(e, t = 0, r = 1) {
  return process.env.NODE_ENV !== "production" && (e < t || e > r) && console.error(`MUI: The value provided ${e} is out of range [${t}, ${r}].`), xi(e, t, r);
}
function wi(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((n) => n + n)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Xe(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Xe(wi(e));
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
const Ti = (e) => {
  const t = Xe(e);
  return t.values.slice(0, 3).map((r, n) => t.type.includes("hsl") && n !== 0 ? `${r}%` : r).join(" ");
}, Rt = (e, t) => {
  try {
    return Ti(e);
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
function ao(e) {
  e = Xe(e);
  const {
    values: t
  } = e, r = t[0], n = t[1] / 100, o = t[2] / 100, i = n * Math.min(o, 1 - o), a = (f, d = (f + r / 30) % 12) => o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let c = "rgb";
  const l = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (c += "a", l.push(t[3])), tr({
    type: c,
    values: l
  });
}
function Mr(e) {
  e = Xe(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Xe(ao(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function On(e, t) {
  const r = Mr(e), n = Mr(t);
  return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
}
function dt(e, t) {
  return e = Xe(e), t = Ur(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, tr(e);
}
function Lt(e, t, r) {
  try {
    return dt(e, t);
  } catch {
    return e;
  }
}
function Yr(e, t) {
  if (e = Xe(e), t = Ur(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return tr(e);
}
function le(e, t, r) {
  try {
    return Yr(e, t);
  } catch {
    return e;
  }
}
function qr(e, t) {
  if (e = Xe(e), t = Ur(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return tr(e);
}
function fe(e, t, r) {
  try {
    return qr(e, t);
  } catch {
    return e;
  }
}
function Ri(e, t = 0.15) {
  return Mr(e) > 0.5 ? Yr(e, t) : qr(e, t);
}
function Vt(e, t, r) {
  try {
    return Ri(e, t);
  } catch {
    return e;
  }
}
function Oi(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const so = (e) => Oi(e) && e !== "classes";
function _e(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : He(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ge(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function co(e) {
  if (!Ge(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = co(e[r]);
  }), t;
}
function Ae(e, t, r = {
  clone: !0
}) {
  const n = r.clone ? {
    ...e
  } : e;
  return Ge(e) && Ge(t) && Object.keys(t).forEach((o) => {
    Ge(t[o]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, o) && Ge(e[o]) ? n[o] = Ae(e[o], t[o], r) : r.clone ? n[o] = Ge(t[o]) ? co(t[o]) : t[o] : n[o] = t[o];
  }), n;
}
function $t(e, t) {
  return t ? Ae(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Je = process.env.NODE_ENV !== "production" ? v.oneOfType([v.number, v.string, v.object, v.array]) : {};
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
function _i(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function Pi(e, t) {
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
function ki(e) {
  const t = (i, a) => i.replace("@media", a ? `@container ${a}` : "@container");
  function r(i, a) {
    i.up = (...c) => t(e.breakpoints.up(...c), a), i.down = (...c) => t(e.breakpoints.down(...c), a), i.between = (...c) => t(e.breakpoints.between(...c), a), i.only = (...c) => t(e.breakpoints.only(...c), a), i.not = (...c) => {
      const l = t(e.breakpoints.not(...c), a);
      return l.includes("not all and") ? l.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : l;
    };
  }
  const n = {}, o = (i) => (r(n, i), n);
  return r(o), {
    ...e,
    containerQueries: o
  };
}
const rr = {
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
}, $n = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${rr[e]}px)`
}, Ai = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : rr[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function Ke(e, t, r) {
  const n = e.theme || {};
  if (Array.isArray(t)) {
    const i = n.breakpoints || $n;
    return t.reduce((a, c, l) => (a[i.up(i.keys[l])] = r(t[l]), a), {});
  }
  if (typeof t == "object") {
    const i = n.breakpoints || $n;
    return Object.keys(t).reduce((a, c) => {
      if (_i(i.keys, c)) {
        const l = Pi(n.containerQueries ? n : Ai, c);
        l && (a[l] = r(t[c], c));
      } else if (Object.keys(i.values || rr).includes(c)) {
        const l = i.up(c);
        a[l] = r(t[c], c);
      } else {
        const l = c;
        a[l] = t[l];
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
function nr(e, t, r = !0) {
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
  return typeof e == "function" ? o = e(r) : Array.isArray(e) ? o = e[r] || n : o = nr(e, r) || n, t && (o = t(o, n, e)), o;
}
function ye(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[t] == null)
      return null;
    const c = a[t], l = a.theme, f = nr(l, n) || {};
    return Ke(a, c, (p) => {
      let g = Jt(f, o, p);
      return p === g && typeof p == "string" && (g = Jt(f, o, `${t}${p === "default" ? "" : _e(p)}`, p)), r === !1 ? g : {
        [r]: g
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [t]: Je
  } : {}, i.filterProps = [t], i;
}
function Ni(e) {
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
}, _n = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Bi = Ni((e) => {
  if (e.length > 2)
    if (_n[e])
      e = _n[e];
    else
      return [e];
  const [t, r] = e.split(""), n = ji[t], o = Di[r] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), or = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ir = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Fi = [...or, ...ir];
function It(e, t, r, n) {
  const o = nr(e, t, !0) ?? r;
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
  return It(e, "spacing", 8, "spacing");
}
function Mt(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function Li(e, t) {
  return (r) => e.reduce((n, o) => (n[o] = Mt(t, r), n), {});
}
function Vi(e, t, r, n) {
  if (!t.includes(r))
    return null;
  const o = Bi(r), i = Li(o, n), a = e[r];
  return Ke(e, a, i);
}
function uo(e, t) {
  const r = Gr(e.theme);
  return Object.keys(e).map((n) => Vi(e, t, n, r)).reduce($t, {});
}
function pe(e) {
  return uo(e, or);
}
pe.propTypes = process.env.NODE_ENV !== "production" ? or.reduce((e, t) => (e[t] = Je, e), {}) : {};
pe.filterProps = or;
function he(e) {
  return uo(e, ir);
}
he.propTypes = process.env.NODE_ENV !== "production" ? ir.reduce((e, t) => (e[t] = Je, e), {}) : {};
he.filterProps = ir;
process.env.NODE_ENV !== "production" && Fi.reduce((e, t) => (e[t] = Je, e), {});
function ar(...e) {
  const t = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), r = (n) => Object.keys(n).reduce((o, i) => t[i] ? $t(o, t[i](n)) : o, {});
  return r.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, r.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), r;
}
function Be(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function Fe(e, t) {
  return ye({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const zi = Fe("border", Be), Wi = Fe("borderTop", Be), Ui = Fe("borderRight", Be), Yi = Fe("borderBottom", Be), qi = Fe("borderLeft", Be), Gi = Fe("borderColor"), Ki = Fe("borderTopColor"), Hi = Fe("borderRightColor"), Xi = Fe("borderBottomColor"), Ji = Fe("borderLeftColor"), Qi = Fe("outline", Be), Zi = Fe("outlineColor"), sr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = It(e.theme, "shape.borderRadius", 4, "borderRadius"), r = (n) => ({
      borderRadius: Mt(t, n)
    });
    return Ke(e, e.borderRadius, r);
  }
  return null;
};
sr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Je
} : {};
sr.filterProps = ["borderRadius"];
ar(zi, Wi, Ui, Yi, qi, Gi, Ki, Hi, Xi, Ji, sr, Qi, Zi);
const cr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = It(e.theme, "spacing", 8, "gap"), r = (n) => ({
      gap: Mt(t, n)
    });
    return Ke(e, e.gap, r);
  }
  return null;
};
cr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Je
} : {};
cr.filterProps = ["gap"];
const ur = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = It(e.theme, "spacing", 8, "columnGap"), r = (n) => ({
      columnGap: Mt(t, n)
    });
    return Ke(e, e.columnGap, r);
  }
  return null;
};
ur.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Je
} : {};
ur.filterProps = ["columnGap"];
const lr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = It(e.theme, "spacing", 8, "rowGap"), r = (n) => ({
      rowGap: Mt(t, n)
    });
    return Ke(e, e.rowGap, r);
  }
  return null;
};
lr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Je
} : {};
lr.filterProps = ["rowGap"];
const ea = ye({
  prop: "gridColumn"
}), ta = ye({
  prop: "gridRow"
}), ra = ye({
  prop: "gridAutoFlow"
}), na = ye({
  prop: "gridAutoColumns"
}), oa = ye({
  prop: "gridAutoRows"
}), ia = ye({
  prop: "gridTemplateColumns"
}), aa = ye({
  prop: "gridTemplateRows"
}), sa = ye({
  prop: "gridTemplateAreas"
}), ca = ye({
  prop: "gridArea"
});
ar(cr, ur, lr, ea, ta, ra, na, oa, ia, aa, sa, ca);
function pt(e, t) {
  return t === "grey" ? t : e;
}
const ua = ye({
  prop: "color",
  themeKey: "palette",
  transform: pt
}), la = ye({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: pt
}), fa = ye({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: pt
});
ar(ua, la, fa);
function ke(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const da = ye({
  prop: "width",
  transform: ke
}), Kr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      var o, i, a, c, l;
      const n = ((a = (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null ? void 0 : i.values) == null ? void 0 : a[r]) || rr[r];
      return n ? ((l = (c = e.theme) == null ? void 0 : c.breakpoints) == null ? void 0 : l.unit) !== "px" ? {
        maxWidth: `${n}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: n
      } : {
        maxWidth: ke(r)
      };
    };
    return Ke(e, e.maxWidth, t);
  }
  return null;
};
Kr.filterProps = ["maxWidth"];
const pa = ye({
  prop: "minWidth",
  transform: ke
}), ha = ye({
  prop: "height",
  transform: ke
}), ma = ye({
  prop: "maxHeight",
  transform: ke
}), ga = ye({
  prop: "minHeight",
  transform: ke
});
ye({
  prop: "size",
  cssProperty: "width",
  transform: ke
});
ye({
  prop: "size",
  cssProperty: "height",
  transform: ke
});
const ya = ye({
  prop: "boxSizing"
});
ar(da, Kr, pa, ha, ma, ga, ya);
const fr = {
  // borders
  border: {
    themeKey: "borders",
    transform: Be
  },
  borderTop: {
    themeKey: "borders",
    transform: Be
  },
  borderRight: {
    themeKey: "borders",
    transform: Be
  },
  borderBottom: {
    themeKey: "borders",
    transform: Be
  },
  borderLeft: {
    themeKey: "borders",
    transform: Be
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
    transform: Be
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: sr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: pt
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: pt
  },
  backgroundColor: {
    themeKey: "palette",
    transform: pt
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
    style: cr
  },
  rowGap: {
    style: lr
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
    transform: ke
  },
  maxWidth: {
    style: Kr
  },
  minWidth: {
    transform: ke
  },
  height: {
    transform: ke
  },
  maxHeight: {
    transform: ke
  },
  minHeight: {
    transform: ke
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
function ba(...e) {
  const t = e.reduce((n, o) => n.concat(Object.keys(o)), []), r = new Set(t);
  return e.every((n) => r.size === Object.keys(n).length);
}
function va(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Sa() {
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
      cssProperty: l = r,
      themeKey: f,
      transform: d,
      style: p
    } = c;
    if (n == null)
      return null;
    if (f === "typography" && n === "inherit")
      return {
        [r]: n
      };
    const g = nr(o, f) || {};
    return p ? p(a) : Ke(a, n, (S) => {
      let y = Jt(g, d, S);
      return S === y && typeof S == "string" && (y = Jt(g, d, `${r}${S === "default" ? "" : _e(S)}`, S)), l === !1 ? y : {
        [l]: y
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
    const i = o.unstable_sxConfig ?? fr;
    function a(c) {
      let l = c;
      if (typeof c == "function")
        l = c(o);
      else if (typeof c != "object")
        return c;
      if (!l)
        return null;
      const f = Ii(o.breakpoints), d = Object.keys(f);
      let p = f;
      return Object.keys(l).forEach((g) => {
        const x = va(l[g], o);
        if (x != null)
          if (typeof x == "object")
            if (i[g])
              p = $t(p, e(g, x, o, i));
            else {
              const S = Ke({
                theme: o
              }, x, (y) => ({
                [g]: y
              }));
              ba(S, x) ? p[g] = t({
                sx: x,
                theme: o
              }) : p = $t(p, S);
            }
          else
            p = $t(p, e(g, x, o, i));
      }), $i(o, Mi(d, p));
    }
    return Array.isArray(n) ? n.map(a) : a(n);
  }
  return t;
}
const mt = Sa();
mt.filterProps = ["sx"];
function Qt() {
  return Qt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Qt.apply(null, arguments);
}
function lo(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Ca = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ea = /* @__PURE__ */ lo(
  function(e) {
    return Ca.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), xa = !1;
function wa(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Ta(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Ra = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? !xa : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Ta(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var i = wa(o);
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
}(), Te = "-ms-", Zt = "-moz-", ee = "-webkit-", fo = "comm", Hr = "rule", Xr = "decl", Oa = "@import", po = "@keyframes", $a = "@layer", _a = Math.abs, dr = String.fromCharCode, Pa = Object.assign;
function ka(e, t) {
  return xe(e, 0) ^ 45 ? (((t << 2 ^ xe(e, 0)) << 2 ^ xe(e, 1)) << 2 ^ xe(e, 2)) << 2 ^ xe(e, 3) : 0;
}
function ho(e) {
  return e.trim();
}
function Aa(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function te(e, t, r) {
  return e.replace(t, r);
}
function Nr(e, t) {
  return e.indexOf(t);
}
function xe(e, t) {
  return e.charCodeAt(t) | 0;
}
function _t(e, t, r) {
  return e.slice(t, r);
}
function We(e) {
  return e.length;
}
function Jr(e) {
  return e.length;
}
function zt(e, t) {
  return t.push(e), e;
}
function Ia(e, t) {
  return e.map(t).join("");
}
var pr = 1, gt = 1, mo = 0, Pe = 0, Se = 0, yt = "";
function hr(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: pr, column: gt, length: a, return: "" };
}
function wt(e, t) {
  return Pa(hr("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Ma() {
  return Se;
}
function Na() {
  return Se = Pe > 0 ? xe(yt, --Pe) : 0, gt--, Se === 10 && (gt = 1, pr--), Se;
}
function Ie() {
  return Se = Pe < mo ? xe(yt, Pe++) : 0, gt++, Se === 10 && (gt = 1, pr++), Se;
}
function Ye() {
  return xe(yt, Pe);
}
function qt() {
  return Pe;
}
function Nt(e, t) {
  return _t(yt, e, t);
}
function Pt(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function go(e) {
  return pr = gt = 1, mo = We(yt = e), Pe = 0, [];
}
function yo(e) {
  return yt = "", e;
}
function Gt(e) {
  return ho(Nt(Pe - 1, jr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ja(e) {
  for (; (Se = Ye()) && Se < 33; )
    Ie();
  return Pt(e) > 2 || Pt(Se) > 3 ? "" : " ";
}
function Da(e, t) {
  for (; --t && Ie() && !(Se < 48 || Se > 102 || Se > 57 && Se < 65 || Se > 70 && Se < 97); )
    ;
  return Nt(e, qt() + (t < 6 && Ye() == 32 && Ie() == 32));
}
function jr(e) {
  for (; Ie(); )
    switch (Se) {
      case e:
        return Pe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && jr(Se);
        break;
      case 40:
        e === 41 && jr(e);
        break;
      case 92:
        Ie();
        break;
    }
  return Pe;
}
function Ba(e, t) {
  for (; Ie() && e + Se !== 57; )
    if (e + Se === 84 && Ye() === 47)
      break;
  return "/*" + Nt(t, Pe - 1) + "*" + dr(e === 47 ? e : Ie());
}
function Fa(e) {
  for (; !Pt(Ye()); )
    Ie();
  return Nt(e, Pe);
}
function La(e) {
  return yo(Kt("", null, null, null, [""], e = go(e), 0, [0], e));
}
function Kt(e, t, r, n, o, i, a, c, l) {
  for (var f = 0, d = 0, p = a, g = 0, x = 0, S = 0, y = 1, h = 1, T = 1, k = 0, R = "", C = o, m = i, I = n, A = R; h; )
    switch (S = k, k = Ie()) {
      case 40:
        if (S != 108 && xe(A, p - 1) == 58) {
          Nr(A += te(Gt(k), "&", "&\f"), "&\f") != -1 && (T = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        A += Gt(k);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        A += ja(S);
        break;
      case 92:
        A += Da(qt() - 1, 7);
        continue;
      case 47:
        switch (Ye()) {
          case 42:
          case 47:
            zt(Va(Ba(Ie(), qt()), t, r), l);
            break;
          default:
            A += "/";
        }
        break;
      case 123 * y:
        c[f++] = We(A) * T;
      case 125 * y:
      case 59:
      case 0:
        switch (k) {
          case 0:
          case 125:
            h = 0;
          case 59 + d:
            T == -1 && (A = te(A, /\f/g, "")), x > 0 && We(A) - p && zt(x > 32 ? kn(A + ";", n, r, p - 1) : kn(te(A, " ", "") + ";", n, r, p - 2), l);
            break;
          case 59:
            A += ";";
          default:
            if (zt(I = Pn(A, t, r, f, d, o, c, R, C = [], m = [], p), i), k === 123)
              if (d === 0)
                Kt(A, t, I, I, C, i, p, c, m);
              else
                switch (g === 99 && xe(A, 3) === 110 ? 100 : g) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Kt(e, I, I, n && zt(Pn(e, I, I, 0, 0, o, c, R, o, C = [], p), m), o, m, p, c, n ? C : m);
                    break;
                  default:
                    Kt(A, I, I, I, [""], m, 0, c, m);
                }
        }
        f = d = x = 0, y = T = 1, R = A = "", p = a;
        break;
      case 58:
        p = 1 + We(A), x = S;
      default:
        if (y < 1) {
          if (k == 123)
            --y;
          else if (k == 125 && y++ == 0 && Na() == 125)
            continue;
        }
        switch (A += dr(k), k * y) {
          case 38:
            T = d > 0 ? 1 : (A += "\f", -1);
            break;
          case 44:
            c[f++] = (We(A) - 1) * T, T = 1;
            break;
          case 64:
            Ye() === 45 && (A += Gt(Ie())), g = Ye(), d = p = We(R = A += Fa(qt())), k++;
            break;
          case 45:
            S === 45 && We(A) == 2 && (y = 0);
        }
    }
  return i;
}
function Pn(e, t, r, n, o, i, a, c, l, f, d) {
  for (var p = o - 1, g = o === 0 ? i : [""], x = Jr(g), S = 0, y = 0, h = 0; S < n; ++S)
    for (var T = 0, k = _t(e, p + 1, p = _a(y = a[S])), R = e; T < x; ++T)
      (R = ho(y > 0 ? g[T] + " " + k : te(k, /&\f/g, g[T]))) && (l[h++] = R);
  return hr(e, t, r, o === 0 ? Hr : c, l, f, d);
}
function Va(e, t, r) {
  return hr(e, t, r, fo, dr(Ma()), _t(e, 2, -2), 0);
}
function kn(e, t, r, n) {
  return hr(e, t, r, Xr, _t(e, 0, n), _t(e, n + 1, -1), n);
}
function ht(e, t) {
  for (var r = "", n = Jr(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function za(e, t, r, n) {
  switch (e.type) {
    case $a:
      if (e.children.length) break;
    case Oa:
    case Xr:
      return e.return = e.return || e.value;
    case fo:
      return "";
    case po:
      return e.return = e.value + "{" + ht(e.children, n) + "}";
    case Hr:
      e.value = e.props.join(",");
  }
  return We(r = ht(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Wa(e) {
  var t = Jr(e);
  return function(r, n, o, i) {
    for (var a = "", c = 0; c < t; c++)
      a += e[c](r, n, o, i) || "";
    return a;
  };
}
function Ua(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Ya = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = Ye(), o === 38 && i === 12 && (r[n] = 1), !Pt(i); )
    Ie();
  return Nt(t, Pe);
}, qa = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Pt(o)) {
      case 0:
        o === 38 && Ye() === 12 && (r[n] = 1), t[n] += Ya(Pe - 1, r, n);
        break;
      case 2:
        t[n] += Gt(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Ye() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += dr(o);
    }
  while (o = Ie());
  return t;
}, Ga = function(t, r) {
  return yo(qa(go(t), r));
}, An = /* @__PURE__ */ new WeakMap(), Ka = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !An.get(n)) && !o) {
      An.set(t, !0);
      for (var i = [], a = Ga(r, i), c = n.props, l = 0, f = 0; l < a.length; l++)
        for (var d = 0; d < c.length; d++, f++)
          t.props[f] = i[l] ? a[l].replace(/&\f/g, c[d]) : c[d] + " " + a[l];
    }
  }
}, Ha = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function bo(e, t) {
  switch (ka(e, t)) {
    case 5103:
      return ee + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ee + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ee + e + Zt + e + Te + e + e;
    case 6828:
    case 4268:
      return ee + e + Te + e + e;
    case 6165:
      return ee + e + Te + "flex-" + e + e;
    case 5187:
      return ee + e + te(e, /(\w+).+(:[^]+)/, ee + "box-$1$2" + Te + "flex-$1$2") + e;
    case 5443:
      return ee + e + Te + "flex-item-" + te(e, /flex-|-self/, "") + e;
    case 4675:
      return ee + e + Te + "flex-line-pack" + te(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return ee + e + Te + te(e, "shrink", "negative") + e;
    case 5292:
      return ee + e + Te + te(e, "basis", "preferred-size") + e;
    case 6060:
      return ee + "box-" + te(e, "-grow", "") + ee + e + Te + te(e, "grow", "positive") + e;
    case 4554:
      return ee + te(e, /([^-])(transform)/g, "$1" + ee + "$2") + e;
    case 6187:
      return te(te(te(e, /(zoom-|grab)/, ee + "$1"), /(image-set)/, ee + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return te(e, /(image-set\([^]*)/, ee + "$1$`$1");
    case 4968:
      return te(te(e, /(.+:)(flex-)?(.*)/, ee + "box-pack:$3" + Te + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ee + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return te(e, /(.+)-inline(.+)/, ee + "$1$2") + e;
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
      if (We(e) - 1 - t > 6) switch (xe(e, t + 1)) {
        case 109:
          if (xe(e, t + 4) !== 45) break;
        case 102:
          return te(e, /(.+:)(.+)-([^]+)/, "$1" + ee + "$2-$3$1" + Zt + (xe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Nr(e, "stretch") ? bo(te(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    case 4949:
      if (xe(e, t + 1) !== 115) break;
    case 6444:
      switch (xe(e, We(e) - 3 - (~Nr(e, "!important") && 10))) {
        case 107:
          return te(e, ":", ":" + ee) + e;
        case 101:
          return te(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ee + (xe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ee + "$2$3$1" + Te + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (xe(e, t + 11)) {
        case 114:
          return ee + e + Te + te(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ee + e + Te + te(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ee + e + Te + te(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ee + e + Te + e + e;
  }
  return e;
}
var Xa = function(t, r, n, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Xr:
      t.return = bo(t.value, t.length);
      break;
    case po:
      return ht([wt(t, {
        value: te(t.value, "@", "@" + ee)
      })], o);
    case Hr:
      if (t.length) return Ia(t.props, function(i) {
        switch (Aa(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return ht([wt(t, {
              props: [te(i, /:(read-\w+)/, ":" + Zt + "$1")]
            })], o);
          case "::placeholder":
            return ht([wt(t, {
              props: [te(i, /:(plac\w+)/, ":" + ee + "input-$1")]
            }), wt(t, {
              props: [te(i, /:(plac\w+)/, ":" + Zt + "$1")]
            }), wt(t, {
              props: [te(i, /:(plac\w+)/, Te + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Ja = [Xa], Qa = function(t) {
  var r = t.key;
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(y) {
      var h = y.getAttribute("data-emotion");
      h.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Ja, i = {}, a, c = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(y) {
      for (var h = y.getAttribute("data-emotion").split(" "), T = 1; T < h.length; T++)
        i[h[T]] = !0;
      c.push(y);
    }
  );
  var l, f = [Ka, Ha];
  {
    var d, p = [za, Ua(function(y) {
      d.insert(y);
    })], g = Wa(f.concat(o, p)), x = function(h) {
      return ht(La(h), g);
    };
    l = function(h, T, k, R) {
      d = k, x(h ? h + "{" + T.styles + "}" : T.styles), R && (S.inserted[T.name] = !0);
    };
  }
  var S = {
    key: r,
    sheet: new Ra({
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
    insert: l
  };
  return S.sheet.hydrate(c), S;
}, vo = zr(), Za = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, es = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, So = {};
So[vo.ForwardRef] = Za;
So[vo.Memo] = es;
var ts = !0;
function rs(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (n += o + " ");
  }), n;
}
var Co = function(t, r, n) {
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
  ts === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, ns = function(t, r, n) {
  Co(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function os(e) {
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
var is = {
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
}, as = !1, ss = /[A-Z]|^ms/g, cs = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Eo = function(t) {
  return t.charCodeAt(1) === 45;
}, In = function(t) {
  return t != null && typeof t != "boolean";
}, $r = /* @__PURE__ */ lo(function(e) {
  return Eo(e) ? e : e.replace(ss, "-$&").toLowerCase();
}), Mn = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(cs, function(n, o, i) {
          return Ue = {
            name: o,
            styles: i,
            next: Ue
          }, o;
        });
  }
  return is[t] !== 1 && !Eo(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
}, us = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function kt(e, t, r) {
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
        return Ue = {
          name: o.name,
          styles: o.styles,
          next: Ue
        }, o.name;
      var i = r;
      if (i.styles !== void 0) {
        var a = i.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Ue = {
              name: a.name,
              styles: a.styles,
              next: Ue
            }, a = a.next;
        var c = i.styles + ";";
        return c;
      }
      return ls(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var l = Ue, f = r(e);
        return Ue = l, kt(e, t, f);
      }
      break;
    }
  }
  var d = r;
  if (t == null)
    return d;
  var p = t[d];
  return p !== void 0 ? p : d;
}
function ls(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += kt(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object") {
        var c = a;
        t != null && t[c] !== void 0 ? n += i + "{" + t[c] + "}" : In(c) && (n += $r(i) + ":" + Mn(i, c) + ";");
      } else {
        if (i === "NO_COMPONENT_SELECTOR" && as)
          throw new Error(us);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var l = 0; l < a.length; l++)
            In(a[l]) && (n += $r(i) + ":" + Mn(i, a[l]) + ";");
        else {
          var f = kt(e, t, a);
          switch (i) {
            case "animation":
            case "animationName": {
              n += $r(i) + ":" + f + ";";
              break;
            }
            default:
              n += i + "{" + f + "}";
          }
        }
      }
    }
  return n;
}
var Nn = /label:\s*([^\s;{]+)\s*(;|$)/g, Ue;
function Qr(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var n = !0, o = "";
  Ue = void 0;
  var i = e[0];
  if (i == null || i.raw === void 0)
    n = !1, o += kt(r, t, i);
  else {
    var a = i;
    o += a[0];
  }
  for (var c = 1; c < e.length; c++)
    if (o += kt(r, t, e[c]), n) {
      var l = i;
      o += l[c];
    }
  Nn.lastIndex = 0;
  for (var f = "", d; (d = Nn.exec(o)) !== null; )
    f += "-" + d[1];
  var p = os(o) + f;
  return {
    name: p,
    styles: o,
    next: Ue
  };
}
var fs = function(t) {
  return t();
}, ds = V.useInsertionEffect ? V.useInsertionEffect : !1, ps = ds || fs, xo = /* @__PURE__ */ V.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Qa({
    key: "css"
  }) : null
);
xo.Provider;
var hs = function(t) {
  return /* @__PURE__ */ ci(function(r, n) {
    var o = ui(xo);
    return t(r, o, n);
  });
}, ms = /* @__PURE__ */ V.createContext({});
function gs() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Qr(t);
}
var Zr = function() {
  var t = gs.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, ys = Ea, bs = function(t) {
  return t !== "theme";
}, jn = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? ys : bs;
}, Dn = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, vs = !1, Ss = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Co(r, n, o), ps(function() {
    return ns(r, n, o);
  }), null;
}, Cs = function e(t, r) {
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var c = Dn(t, r, n), l = c || jn(o), f = !l("as");
  return function() {
    var d = arguments, p = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && p.push("label:" + i + ";"), d[0] == null || d[0].raw === void 0)
      p.push.apply(p, d);
    else {
      p.push(d[0][0]);
      for (var g = d.length, x = 1; x < g; x++)
        p.push(d[x], d[0][x]);
    }
    var S = hs(function(y, h, T) {
      var k = f && y.as || o, R = "", C = [], m = y;
      if (y.theme == null) {
        m = {};
        for (var I in y)
          m[I] = y[I];
        m.theme = V.useContext(ms);
      }
      typeof y.className == "string" ? R = rs(h.registered, C, y.className) : y.className != null && (R = y.className + " ");
      var A = Qr(p.concat(C), h.registered, m);
      R += h.key + "-" + A.name, a !== void 0 && (R += " " + a);
      var Z = f && c === void 0 ? jn(k) : l, J = {};
      for (var s in y)
        f && s === "as" || Z(s) && (J[s] = y[s]);
      return J.className = R, T && (J.ref = T), /* @__PURE__ */ V.createElement(V.Fragment, null, /* @__PURE__ */ V.createElement(Ss, {
        cache: h,
        serialized: A,
        isStringTag: typeof k == "string"
      }), /* @__PURE__ */ V.createElement(k, J));
    });
    return S.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", S.defaultProps = t.defaultProps, S.__emotion_real = S, S.__emotion_base = o, S.__emotion_styles = p, S.__emotion_forwardProp = c, Object.defineProperty(S, "toString", {
      value: function() {
        return a === void 0 && vs ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), S.withComponent = function(y, h) {
      return e(y, Qt({}, r, h, {
        shouldForwardProp: Dn(S, h, !0)
      })).apply(void 0, p);
    }, S;
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
], Dr = Cs.bind();
Es.forEach(function(e) {
  Dr[e] = Dr(e);
});
/**
 * @mui/styled-engine v6.1.4
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function xs(e, t) {
  const r = Dr(e, t);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), r(...n);
  } : r;
}
function ws(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const Bn = [];
function Fn(e) {
  return Bn[0] = e, Qr(Bn);
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
function Rs(e) {
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
  function c(g) {
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${r})`;
  }
  function l(g) {
    return `@media (max-width:${(typeof t[g] == "number" ? t[g] : g) - n / 100}${r})`;
  }
  function f(g, x) {
    const S = a.indexOf(x);
    return `@media (min-width:${typeof t[g] == "number" ? t[g] : g}${r}) and (max-width:${(S !== -1 && typeof t[a[S]] == "number" ? t[a[S]] : x) - n / 100}${r})`;
  }
  function d(g) {
    return a.indexOf(g) + 1 < a.length ? f(g, a[a.indexOf(g) + 1]) : c(g);
  }
  function p(g) {
    const x = a.indexOf(g);
    return x === 0 ? c(a[1]) : x === a.length - 1 ? l(a[x]) : f(g, a[a.indexOf(g) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: a,
    values: i,
    up: c,
    down: l,
    between: f,
    only: d,
    not: p,
    unit: r,
    ...o
  };
}
const Os = {
  borderRadius: 4
};
function wo(e = 8, t = Gr({
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
function $s(e, t) {
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
  } = e, c = Rs(r), l = wo(o);
  let f = Ae({
    breakpoints: c,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...n
    },
    spacing: l,
    shape: {
      ...Os,
      ...i
    }
  }, a);
  return f = ki(f), f.applyStyles = $s, f = t.reduce((d, p) => Ae(d, p), f), f.unstable_sxConfig = {
    ...fr,
    ...a == null ? void 0 : a.unstable_sxConfig
  }, f.unstable_sx = function(p) {
    return mt({
      sx: p,
      theme: this
    });
  }, f;
}
const Ln = (e) => e, _s = () => {
  let e = Ln;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Ln;
    }
  };
}, Ps = _s(), ks = {
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
function mr(e, t, r = "Mui") {
  const n = ks[t];
  return n ? `${r}-${n}` : `${Ps.generate(e)}-${t}`;
}
function en(e, t, r = "Mui") {
  const n = {};
  return t.forEach((o) => {
    n[o] = mr(e, o, r);
  }), n;
}
var Br = { exports: {} }, ie = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vn;
function As() {
  if (Vn) return ie;
  Vn = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), S;
  S = Symbol.for("react.module.reference");
  function y(h) {
    if (typeof h == "object" && h !== null) {
      var T = h.$$typeof;
      switch (T) {
        case e:
          switch (h = h.type, h) {
            case r:
            case o:
            case n:
            case f:
            case d:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case c:
                case a:
                case l:
                case g:
                case p:
                case i:
                  return h;
                default:
                  return T;
              }
          }
        case t:
          return T;
      }
    }
  }
  return ie.ContextConsumer = a, ie.ContextProvider = i, ie.Element = e, ie.ForwardRef = l, ie.Fragment = r, ie.Lazy = g, ie.Memo = p, ie.Portal = t, ie.Profiler = o, ie.StrictMode = n, ie.Suspense = f, ie.SuspenseList = d, ie.isAsyncMode = function() {
    return !1;
  }, ie.isConcurrentMode = function() {
    return !1;
  }, ie.isContextConsumer = function(h) {
    return y(h) === a;
  }, ie.isContextProvider = function(h) {
    return y(h) === i;
  }, ie.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, ie.isForwardRef = function(h) {
    return y(h) === l;
  }, ie.isFragment = function(h) {
    return y(h) === r;
  }, ie.isLazy = function(h) {
    return y(h) === g;
  }, ie.isMemo = function(h) {
    return y(h) === p;
  }, ie.isPortal = function(h) {
    return y(h) === t;
  }, ie.isProfiler = function(h) {
    return y(h) === o;
  }, ie.isStrictMode = function(h) {
    return y(h) === n;
  }, ie.isSuspense = function(h) {
    return y(h) === f;
  }, ie.isSuspenseList = function(h) {
    return y(h) === d;
  }, ie.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === r || h === o || h === n || h === f || h === d || h === x || typeof h == "object" && h !== null && (h.$$typeof === g || h.$$typeof === p || h.$$typeof === i || h.$$typeof === a || h.$$typeof === l || h.$$typeof === S || h.getModuleId !== void 0);
  }, ie.typeOf = y, ie;
}
var ae = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zn;
function Is() {
  return zn || (zn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), S = !1, y = !1, h = !1, T = !1, k = !1, R;
    R = Symbol.for("react.module.reference");
    function C(M) {
      return !!(typeof M == "string" || typeof M == "function" || M === r || M === o || k || M === n || M === f || M === d || T || M === x || S || y || h || typeof M == "object" && M !== null && (M.$$typeof === g || M.$$typeof === p || M.$$typeof === i || M.$$typeof === a || M.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      M.$$typeof === R || M.getModuleId !== void 0));
    }
    function m(M) {
      if (typeof M == "object" && M !== null) {
        var Re = M.$$typeof;
        switch (Re) {
          case e:
            var Me = M.type;
            switch (Me) {
              case r:
              case o:
              case n:
              case f:
              case d:
                return Me;
              default:
                var Qe = Me && Me.$$typeof;
                switch (Qe) {
                  case c:
                  case a:
                  case l:
                  case g:
                  case p:
                  case i:
                    return Qe;
                  default:
                    return Re;
                }
            }
          case t:
            return Re;
        }
      }
    }
    var I = a, A = i, Z = e, J = l, s = r, _ = g, N = p, D = t, Y = o, ce = n, se = f, me = d, Ce = !1, Ee = !1;
    function w(M) {
      return Ce || (Ce = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function O(M) {
      return Ee || (Ee = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function F(M) {
      return m(M) === a;
    }
    function W(M) {
      return m(M) === i;
    }
    function j(M) {
      return typeof M == "object" && M !== null && M.$$typeof === e;
    }
    function K(M) {
      return m(M) === l;
    }
    function L(M) {
      return m(M) === r;
    }
    function z(M) {
      return m(M) === g;
    }
    function q(M) {
      return m(M) === p;
    }
    function H(M) {
      return m(M) === t;
    }
    function G(M) {
      return m(M) === o;
    }
    function be(M) {
      return m(M) === n;
    }
    function $(M) {
      return m(M) === f;
    }
    function we(M) {
      return m(M) === d;
    }
    ae.ContextConsumer = I, ae.ContextProvider = A, ae.Element = Z, ae.ForwardRef = J, ae.Fragment = s, ae.Lazy = _, ae.Memo = N, ae.Portal = D, ae.Profiler = Y, ae.StrictMode = ce, ae.Suspense = se, ae.SuspenseList = me, ae.isAsyncMode = w, ae.isConcurrentMode = O, ae.isContextConsumer = F, ae.isContextProvider = W, ae.isElement = j, ae.isForwardRef = K, ae.isFragment = L, ae.isLazy = z, ae.isMemo = q, ae.isPortal = H, ae.isProfiler = G, ae.isStrictMode = be, ae.isSuspense = $, ae.isSuspenseList = we, ae.isValidElementType = C, ae.typeOf = m;
  }()), ae;
}
process.env.NODE_ENV === "production" ? Br.exports = As() : Br.exports = Is();
var Wn = Br.exports;
function Ro(e, t = "") {
  return e.displayName || e.name || t;
}
function Un(e, t, r) {
  const n = Ro(t);
  return e.displayName || (n !== "" ? `${r}(${n})` : r);
}
function Ms(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Ro(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Wn.ForwardRef:
          return Un(e, e.render, "ForwardRef");
        case Wn.Memo:
          return Un(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Oo(e) {
  const {
    variants: t,
    ...r
  } = e, n = {
    variants: t,
    style: Fn(r),
    isProcessed: !0
  };
  return n.style === r || t && t.forEach((o) => {
    typeof o.style != "function" && (o.style = Fn(o.style));
  }), n;
}
const Ns = To();
function _r(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function js(e) {
  return e ? (t, r) => r[e] : null;
}
function Ds(e, t, r) {
  e.theme = Vs(e.theme) ? r : e.theme[t] || e.theme;
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
    return $o(e, r.variants, [n]);
  }
  return r != null && r.isProcessed ? r.style : r;
}
function $o(e, t, r = []) {
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
function Bs(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = Ns,
    rootShouldForwardProp: n = _r,
    slotShouldForwardProp: o = _r
  } = e;
  function i(c) {
    Ds(c, t, r);
  }
  return (c, l = {}) => {
    ws(c, (m) => m.filter((I) => I !== mt));
    const {
      name: f,
      slot: d,
      skipVariantsResolver: p,
      skipSx: g,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: x = js(_o(d)),
      ...S
    } = l, y = p !== void 0 ? p : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      d && d !== "Root" && d !== "root" || !1
    ), h = g || !1;
    let T = _r;
    d === "Root" || d === "root" ? T = n : d ? T = o : zs(c) && (T = void 0);
    const k = xs(c, {
      shouldForwardProp: T,
      label: Ls(f, d),
      ...S
    }), R = (m) => {
      if (typeof m == "function" && m.__emotion_real !== m)
        return function(A) {
          return Ht(A, m);
        };
      if (Ge(m)) {
        const I = Oo(m);
        return I.variants ? function(Z) {
          return Ht(Z, I);
        } : I.style;
      }
      return m;
    }, C = (...m) => {
      const I = [], A = m.map(R), Z = [];
      if (I.push(i), f && x && Z.push(function(N) {
        var se, me;
        const Y = (me = (se = N.theme.components) == null ? void 0 : se[f]) == null ? void 0 : me.styleOverrides;
        if (!Y)
          return null;
        const ce = {};
        for (const Ce in Y)
          ce[Ce] = Ht(N, Y[Ce]);
        return x(N, ce);
      }), f && !y && Z.push(function(N) {
        var ce, se;
        const D = N.theme, Y = (se = (ce = D == null ? void 0 : D.components) == null ? void 0 : ce[f]) == null ? void 0 : se.variants;
        return Y ? $o(N, Y) : null;
      }), h || Z.push(mt), Array.isArray(A[0])) {
        const _ = A.shift(), N = new Array(I.length).fill(""), D = new Array(Z.length).fill("");
        let Y;
        Y = [...N, ..._, ...D], Y.raw = [...N, ..._.raw, ...D], I.unshift(Y);
      }
      const J = [...I, ...A, ...Z], s = k(...J);
      return c.muiName && (s.muiName = c.muiName), process.env.NODE_ENV !== "production" && (s.displayName = Fs(f, d, c)), s;
    };
    return k.withConfig && (C.withConfig = k.withConfig), C;
  };
}
function Fs(e, t, r) {
  return e ? `${e}${_e(t || "")}` : `Styled(${Ms(r)})`;
}
function Ls(e, t) {
  let r;
  return process.env.NODE_ENV !== "production" && e && (r = `${e}-${_o(t || "Root")}`), r;
}
function Vs(e) {
  for (const t in e)
    return !1;
  return !0;
}
function zs(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function _o(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
const Ws = typeof window < "u" ? V.useLayoutEffect : V.useEffect;
function Us(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...n) {
    return e(...n) || t(...n);
  };
}
function Ys(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function qs(e, t, r, n, o) {
  const i = e[t], a = o || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let c;
  return typeof i == "function" && !Ys(i) && (c = "Did you accidentally provide a plain function component instead?"), c !== void 0 ? new Error(`Invalid ${n} \`${a}\` supplied to \`${r}\`. Expected an element type that can hold a ref. ${c} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const Gs = Us(v.elementType, qs), Ks = v.oneOfType([v.func, v.object]);
function Hs(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
function Wt(e) {
  const t = V.useRef(e);
  return Ws(() => {
    t.current = e;
  }), V.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function Yn(...e) {
  return V.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      Hs(r, t);
    });
  }, e);
}
const qn = {};
function Po(e, t) {
  const r = V.useRef(qn);
  return r.current === qn && (r.current = e(t)), r;
}
const Xs = [];
function Js(e) {
  V.useEffect(e, Xs);
}
class tn {
  constructor() {
    Ct(this, "currentId", null);
    Ct(this, "clear", () => {
      this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
    });
    Ct(this, "disposeEffect", () => this.clear);
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
function Qs() {
  const e = Po(tn.create).current;
  return Js(e.disposeEffect), e;
}
function Gn(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
    process.env.NODE_ENV !== "production" && !/jsdom/.test(window.navigator.userAgent) && console.warn(["MUI: The `:focus-visible` pseudo class is not supported in this browser.", "Some components rely on this feature to work properly."].join(`
`));
  }
  return !1;
}
const Zs = /* @__PURE__ */ V.createContext(void 0);
process.env.NODE_ENV !== "production" && (v.node, v.object);
function ec(e) {
  const {
    theme: t,
    name: r,
    props: n
  } = e;
  if (!t || !t.components || !t.components[r])
    return n;
  const o = t.components[r];
  return o.defaultProps ? Xt(o.defaultProps, n) : !o.styleOverrides && !o.variants ? Xt(o, n) : n;
}
function tc({
  props: e,
  name: t
}) {
  const r = V.useContext(Zs);
  return ec({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const Kn = {
  theme: void 0
};
function rc(e) {
  let t, r;
  return function(o) {
    let i = t;
    return (i === void 0 || o.theme !== r) && (Kn.theme = o.theme, i = Oo(e(Kn)), t = i, r = o.theme), i;
  };
}
function nc(e = "") {
  function t(...n) {
    if (!n.length)
      return "";
    const o = n[0];
    return typeof o == "string" && !o.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${o}${t(...n.slice(1))})` : `, ${o}`;
  }
  return (n, ...o) => `var(--${e ? `${e}-` : ""}${n}${t(...o)})`;
}
const Hn = (e, t, r, n = []) => {
  let o = e;
  t.forEach((i, a) => {
    a === t.length - 1 ? Array.isArray(o) ? o[Number(i)] = r : o && typeof o == "object" && (o[i] = r) : o && typeof o == "object" && (o[i] || (o[i] = n.includes(i) ? [] : {}), o = o[i]);
  });
}, oc = (e, t, r) => {
  function n(o, i = [], a = []) {
    Object.entries(o).forEach(([c, l]) => {
      (!r || r && !r([...i, c])) && l != null && (typeof l == "object" && Object.keys(l).length > 0 ? n(l, [...i, c], Array.isArray(l) ? [...a, c] : a) : t([...i, c], l, a));
    });
  }
  n(e);
}, ic = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((n) => e.includes(n)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Pr(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: n
  } = t || {}, o = {}, i = {}, a = {};
  return oc(
    e,
    (c, l, f) => {
      if ((typeof l == "string" || typeof l == "number") && (!n || !n(c, l))) {
        const d = `--${r ? `${r}-` : ""}${c.join("-")}`, p = ic(c, l);
        Object.assign(o, {
          [d]: p
        }), Hn(i, c, `var(${d})`, f), Hn(a, c, `var(${d}, ${p})`, f);
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
function ac(e, t = {}) {
  const {
    getSelector: r = h,
    disableCssColorScheme: n,
    colorSchemeSelector: o
  } = t, {
    colorSchemes: i = {},
    components: a,
    defaultColorScheme: c = "light",
    ...l
  } = e, {
    vars: f,
    css: d,
    varsWithDefaults: p
  } = Pr(l, t);
  let g = p;
  const x = {}, {
    [c]: S,
    ...y
  } = i;
  if (Object.entries(y || {}).forEach(([R, C]) => {
    const {
      vars: m,
      css: I,
      varsWithDefaults: A
    } = Pr(C, t);
    g = Ae(g, A), x[R] = {
      css: I,
      vars: m
    };
  }), S) {
    const {
      css: R,
      vars: C,
      varsWithDefaults: m
    } = Pr(S, t);
    g = Ae(g, m), x[c] = {
      css: R,
      vars: C
    };
  }
  function h(R, C) {
    var I, A;
    let m = o;
    if (o === "class" && (m = ".%s"), o === "data" && (m = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (m = `[${o}="%s"]`), R) {
      if (m === "media")
        return e.defaultColorScheme === R ? ":root" : {
          [`@media (prefers-color-scheme: ${((A = (I = i[R]) == null ? void 0 : I.palette) == null ? void 0 : A.mode) || R})`]: {
            ":root": C
          }
        };
      if (m)
        return e.defaultColorScheme === R ? `:root, ${m.replace("%s", String(R))}` : m.replace("%s", String(R));
    }
    return ":root";
  }
  return {
    vars: g,
    generateThemeVars: () => {
      let R = {
        ...f
      };
      return Object.entries(x).forEach(([, {
        vars: C
      }]) => {
        R = Ae(R, C);
      }), R;
    },
    generateStyleSheets: () => {
      var Z, J;
      const R = [], C = e.defaultColorScheme || "light";
      function m(s, _) {
        Object.keys(_).length && R.push(typeof s == "string" ? {
          [s]: {
            ..._
          }
        } : s);
      }
      m(r(void 0, {
        ...d
      }), d);
      const {
        [C]: I,
        ...A
      } = x;
      if (I) {
        const {
          css: s
        } = I, _ = (J = (Z = i[C]) == null ? void 0 : Z.palette) == null ? void 0 : J.mode, N = !n && _ ? {
          colorScheme: _,
          ...s
        } : {
          ...s
        };
        m(r(C, {
          ...N
        }), N);
      }
      return Object.entries(A).forEach(([s, {
        css: _
      }]) => {
        var Y, ce;
        const N = (ce = (Y = i[s]) == null ? void 0 : Y.palette) == null ? void 0 : ce.mode, D = !n && N ? {
          colorScheme: N,
          ..._
        } : {
          ..._
        };
        m(r(s, {
          ...D
        }), D);
      }), R;
    }
  };
}
function sc(e) {
  return function(r) {
    return e === "media" ? (process.env.NODE_ENV !== "production" && r !== "light" && r !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${r}'.`), `@media (prefers-color-scheme: ${r})`) : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
const At = {
  black: "#000",
  white: "#fff"
}, cc = {
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
}, at = {
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
}, st = {
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
}, ct = {
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
}, ut = {
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
}, lt = {
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
function ko() {
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
      paper: At.white,
      default: At.white
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
const uc = ko();
function Ao() {
  return {
    text: {
      primary: At.white,
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
      active: At.white,
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
const Xn = Ao();
function Jn(e, t, r, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = qr(e.main, o) : t === "dark" && (e.dark = Yr(e.main, i)));
}
function lc(e = "light") {
  return e === "dark" ? {
    main: ct[200],
    light: ct[50],
    dark: ct[400]
  } : {
    main: ct[700],
    light: ct[400],
    dark: ct[800]
  };
}
function fc(e = "light") {
  return e === "dark" ? {
    main: at[200],
    light: at[50],
    dark: at[400]
  } : {
    main: at[500],
    light: at[300],
    dark: at[700]
  };
}
function dc(e = "light") {
  return e === "dark" ? {
    main: st[500],
    light: st[300],
    dark: st[700]
  } : {
    main: st[700],
    light: st[400],
    dark: st[800]
  };
}
function pc(e = "light") {
  return e === "dark" ? {
    main: ut[400],
    light: ut[300],
    dark: ut[700]
  } : {
    main: ut[700],
    light: ut[500],
    dark: ut[900]
  };
}
function hc(e = "light") {
  return e === "dark" ? {
    main: lt[400],
    light: lt[300],
    dark: lt[700]
  } : {
    main: lt[800],
    light: lt[500],
    dark: lt[900]
  };
}
function mc(e = "light") {
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
function rn(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: n = 0.2,
    ...o
  } = e, i = e.primary || lc(t), a = e.secondary || fc(t), c = e.error || dc(t), l = e.info || pc(t), f = e.success || hc(t), d = e.warning || mc(t);
  function p(y) {
    const h = On(y, Xn.text.primary) >= r ? Xn.text.primary : uc.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const T = On(y, h);
      T < 3 && console.error([`MUI: The contrast ratio of ${T}:1 for ${h} on ${y}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return h;
  }
  const g = ({
    color: y,
    name: h,
    mainShade: T = 500,
    lightShade: k = 300,
    darkShade: R = 700
  }) => {
    if (y = {
      ...y
    }, !y.main && y[T] && (y.main = y[T]), !y.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${h ? ` (${h})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${T}\` property.` : He(11, h ? ` (${h})` : "", T));
    if (typeof y.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${h ? ` (${h})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(y.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : He(12, h ? ` (${h})` : "", JSON.stringify(y.main)));
    return Jn(y, "light", k, n), Jn(y, "dark", R, n), y.contrastText || (y.contrastText = p(y.main)), y;
  };
  let x;
  return t === "light" ? x = ko() : t === "dark" && (x = Ao()), process.env.NODE_ENV !== "production" && (x || console.error(`MUI: The palette mode \`${t}\` is not supported.`)), Ae({
    // A collection of common colors.
    common: {
      ...At
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
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: g({
      color: l,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: g({
      color: f,
      name: "success"
    }),
    // The grey colors.
    grey: cc,
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
function gc(e) {
  const t = {};
  return Object.entries(e).forEach((n) => {
    const [o, i] = n;
    typeof i == "object" && (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${i.fontVariant ? `${i.fontVariant} ` : ""}${i.fontWeight ? `${i.fontWeight} ` : ""}${i.fontStretch ? `${i.fontStretch} ` : ""}${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${i.fontFamily || ""}`);
  }), t;
}
function yc(e, t) {
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
function bc(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Qn = {
  textTransform: "uppercase"
}, Zn = '"Roboto", "Helvetica", "Arial", sans-serif';
function vc(e, t) {
  const {
    fontFamily: r = Zn,
    // The default font size of the Material Specification.
    fontSize: n = 14,
    // px
    fontWeightLight: o = 300,
    fontWeightRegular: i = 400,
    fontWeightMedium: a = 500,
    fontWeightBold: c = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: f,
    pxToRem: d,
    ...p
  } = typeof t == "function" ? t(e) : t;
  process.env.NODE_ENV !== "production" && (typeof n != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const g = n / 14, x = d || ((h) => `${h / l * g}rem`), S = (h, T, k, R, C) => ({
    fontFamily: r,
    fontWeight: h,
    fontSize: x(T),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: k,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === Zn ? {
      letterSpacing: `${bc(R / T)}em`
    } : {},
    ...C,
    ...f
  }), y = {
    h1: S(o, 96, 1.167, -1.5),
    h2: S(o, 60, 1.2, -0.5),
    h3: S(i, 48, 1.167, 0),
    h4: S(i, 34, 1.235, 0.25),
    h5: S(i, 24, 1.334, 0),
    h6: S(a, 20, 1.6, 0.15),
    subtitle1: S(i, 16, 1.75, 0.15),
    subtitle2: S(a, 14, 1.57, 0.1),
    body1: S(i, 16, 1.5, 0.15),
    body2: S(i, 14, 1.43, 0.15),
    button: S(a, 14, 1.75, 0.4, Qn),
    caption: S(i, 12, 1.66, 0.4),
    overline: S(i, 12, 2.66, 1, Qn),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ae({
    htmlFontSize: l,
    pxToRem: x,
    fontFamily: r,
    fontSize: n,
    fontWeightLight: o,
    fontWeightRegular: i,
    fontWeightMedium: a,
    fontWeightBold: c,
    ...y
  }, p, {
    clone: !1
    // No need to clone deep
  });
}
const Sc = 0.2, Cc = 0.14, Ec = 0.12;
function de(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Sc})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Cc})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Ec})`].join(",");
}
const xc = ["none", de(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), de(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), de(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), de(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), de(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), de(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), de(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), de(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), de(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), de(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), de(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), de(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), de(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), de(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), de(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), de(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), de(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), de(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), de(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), de(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), de(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), de(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), de(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), de(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], wc = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Tc = {
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
function eo(e) {
  return `${Math.round(e)}ms`;
}
function Rc(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function Oc(e) {
  const t = {
    ...wc,
    ...e.easing
  }, r = {
    ...Tc,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Rc,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = r.standard,
        easing: c = t.easeInOut,
        delay: l = 0,
        ...f
      } = i;
      if (process.env.NODE_ENV !== "production") {
        const d = (g) => typeof g == "string", p = (g) => !Number.isNaN(parseFloat(g));
        !d(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !p(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(c) || console.error('MUI: Argument "easing" must be a string.'), !p(l) && !d(l) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(f).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(f).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((d) => `${d} ${typeof a == "string" ? a : eo(a)} ${c} ${typeof l == "string" ? l : eo(l)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const $c = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Fr(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: n = {},
    spacing: o,
    palette: i = {},
    transitions: a = {},
    typography: c = {},
    shape: l,
    ...f
  } = e;
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : He(20));
  const d = rn(i), p = To(e);
  let g = Ae(p, {
    mixins: yc(p.breakpoints, n),
    palette: d,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: xc.slice(),
    typography: vc(d, c),
    transitions: Oc(a),
    zIndex: {
      ...$c
    }
  });
  if (g = Ae(g, f), g = t.reduce((x, S) => Ae(x, S), g), process.env.NODE_ENV !== "production") {
    const x = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], S = (y, h) => {
      let T;
      for (T in y) {
        const k = y[T];
        if (x.includes(T) && Object.keys(k).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const R = mr("", T);
            console.error([`MUI: The \`${h}\` component increases the CSS specificity of the \`${T}\` internal state.`, "You can not override it like this: ", JSON.stringify(y, null, 2), "", `Instead, you need to use the '&.${R}' syntax:`, JSON.stringify({
              root: {
                [`&.${R}`]: k
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          y[T] = {};
        }
      }
    };
    Object.keys(g.components).forEach((y) => {
      const h = g.components[y].styleOverrides;
      h && y.startsWith("Mui") && S(h, y);
    });
  }
  return g.unstable_sxConfig = {
    ...fr,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, g.unstable_sx = function(S) {
    return mt({
      sx: S,
      theme: this
    });
  }, g;
}
function _c(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const Pc = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = _c(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function Io(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Mo(e) {
  return e === "dark" ? Pc : [];
}
function kc(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: n,
    ...o
  } = e, i = rn(t);
  return {
    palette: i,
    opacity: {
      ...Io(i.mode),
      ...r
    },
    overlays: n || Mo(i.mode),
    ...o
  };
}
function Ac(e) {
  var t;
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!((t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/));
}
const Ic = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Mc = (e) => (t, r) => {
  const n = e.rootSelector || ":root", o = e.colorSchemeSelector;
  let i = o;
  if (o === "class" && (i = ".%s"), o === "data" && (i = "[data-%s]"), o != null && o.startsWith("data-") && !o.includes("%s") && (i = `[${o}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const a = {};
      return Ic(e.cssVarPrefix).forEach((c) => {
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
function Nc(e) {
  return Ge(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function jc(e = {}) {
  const t = {
    ...e
  };
  function r(n) {
    const o = Object.entries(n);
    for (let i = 0; i < o.length; i++) {
      const [a, c] = o[i];
      !Nc(c) || a.startsWith("unstable_") ? delete n[a] : Ge(c) && (n[a] = {
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
function Dc(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function b(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function Ot(e) {
  return !e || !e.startsWith("hsl") ? e : ao(e);
}
function qe(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = Rt(Ot(e[t]), `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function Bc(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const ze = (e) => {
  try {
    return e();
  } catch {
  }
}, Fc = (e = "mui") => nc(e);
function kr(e, t, r, n) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const o = n === "dark" ? "dark" : "light";
  if (!r) {
    e[n] = kc({
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
  } = Fr({
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
      ...Io(o),
      ...t == null ? void 0 : t.opacity
    },
    overlays: (t == null ? void 0 : t.overlays) || Mo(o)
  }, a;
}
function Lc(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: n,
    disableCssColorScheme: o = !1,
    cssVarPrefix: i = "mui",
    shouldSkipGeneratingVar: a = Ac,
    colorSchemeSelector: c = r.light && r.dark ? "media" : void 0,
    rootSelector: l = ":root",
    ...f
  } = e, d = Object.keys(r)[0], p = n || (r.light && d !== "light" ? "light" : d), g = Fc(i), {
    [p]: x,
    light: S,
    dark: y,
    ...h
  } = r, T = {
    ...h
  };
  let k = x;
  if ((p === "dark" && !("dark" in r) || p === "light" && !("light" in r)) && (k = !0), !k)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The \`colorSchemes.${p}\` option is either missing or invalid.` : He(21, p));
  const R = kr(T, k, f, p);
  S && !T.light && kr(T, S, void 0, "light"), y && !T.dark && kr(T, y, void 0, "dark");
  let C = {
    defaultColorScheme: p,
    ...R,
    cssVarPrefix: i,
    colorSchemeSelector: c,
    rootSelector: l,
    getCssVar: g,
    colorSchemes: T,
    font: {
      ...gc(R.typography),
      ...R.font
    },
    spacing: Bc(f.spacing)
  };
  Object.keys(C.colorSchemes).forEach((J) => {
    const s = C.colorSchemes[J].palette, _ = (N) => {
      const D = N.split("-"), Y = D[1], ce = D[2];
      return g(N, s[Y][ce]);
    };
    if (s.mode === "light" && (b(s.common, "background", "#fff"), b(s.common, "onBackground", "#000")), s.mode === "dark" && (b(s.common, "background", "#000"), b(s.common, "onBackground", "#fff")), Dc(s, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), s.mode === "light") {
      b(s.Alert, "errorColor", le(s.error.light, 0.6)), b(s.Alert, "infoColor", le(s.info.light, 0.6)), b(s.Alert, "successColor", le(s.success.light, 0.6)), b(s.Alert, "warningColor", le(s.warning.light, 0.6)), b(s.Alert, "errorFilledBg", _("palette-error-main")), b(s.Alert, "infoFilledBg", _("palette-info-main")), b(s.Alert, "successFilledBg", _("palette-success-main")), b(s.Alert, "warningFilledBg", _("palette-warning-main")), b(s.Alert, "errorFilledColor", ze(() => s.getContrastText(s.error.main))), b(s.Alert, "infoFilledColor", ze(() => s.getContrastText(s.info.main))), b(s.Alert, "successFilledColor", ze(() => s.getContrastText(s.success.main))), b(s.Alert, "warningFilledColor", ze(() => s.getContrastText(s.warning.main))), b(s.Alert, "errorStandardBg", fe(s.error.light, 0.9)), b(s.Alert, "infoStandardBg", fe(s.info.light, 0.9)), b(s.Alert, "successStandardBg", fe(s.success.light, 0.9)), b(s.Alert, "warningStandardBg", fe(s.warning.light, 0.9)), b(s.Alert, "errorIconColor", _("palette-error-main")), b(s.Alert, "infoIconColor", _("palette-info-main")), b(s.Alert, "successIconColor", _("palette-success-main")), b(s.Alert, "warningIconColor", _("palette-warning-main")), b(s.AppBar, "defaultBg", _("palette-grey-100")), b(s.Avatar, "defaultBg", _("palette-grey-400")), b(s.Button, "inheritContainedBg", _("palette-grey-300")), b(s.Button, "inheritContainedHoverBg", _("palette-grey-A100")), b(s.Chip, "defaultBorder", _("palette-grey-400")), b(s.Chip, "defaultAvatarColor", _("palette-grey-700")), b(s.Chip, "defaultIconColor", _("palette-grey-700")), b(s.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), b(s.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), b(s.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), b(s.LinearProgress, "primaryBg", fe(s.primary.main, 0.62)), b(s.LinearProgress, "secondaryBg", fe(s.secondary.main, 0.62)), b(s.LinearProgress, "errorBg", fe(s.error.main, 0.62)), b(s.LinearProgress, "infoBg", fe(s.info.main, 0.62)), b(s.LinearProgress, "successBg", fe(s.success.main, 0.62)), b(s.LinearProgress, "warningBg", fe(s.warning.main, 0.62)), b(s.Skeleton, "bg", `rgba(${_("palette-text-primaryChannel")} / 0.11)`), b(s.Slider, "primaryTrack", fe(s.primary.main, 0.62)), b(s.Slider, "secondaryTrack", fe(s.secondary.main, 0.62)), b(s.Slider, "errorTrack", fe(s.error.main, 0.62)), b(s.Slider, "infoTrack", fe(s.info.main, 0.62)), b(s.Slider, "successTrack", fe(s.success.main, 0.62)), b(s.Slider, "warningTrack", fe(s.warning.main, 0.62));
      const N = Vt(s.background.default, 0.8);
      b(s.SnackbarContent, "bg", N), b(s.SnackbarContent, "color", ze(() => s.getContrastText(N))), b(s.SpeedDialAction, "fabHoverBg", Vt(s.background.paper, 0.15)), b(s.StepConnector, "border", _("palette-grey-400")), b(s.StepContent, "border", _("palette-grey-400")), b(s.Switch, "defaultColor", _("palette-common-white")), b(s.Switch, "defaultDisabledColor", _("palette-grey-100")), b(s.Switch, "primaryDisabledColor", fe(s.primary.main, 0.62)), b(s.Switch, "secondaryDisabledColor", fe(s.secondary.main, 0.62)), b(s.Switch, "errorDisabledColor", fe(s.error.main, 0.62)), b(s.Switch, "infoDisabledColor", fe(s.info.main, 0.62)), b(s.Switch, "successDisabledColor", fe(s.success.main, 0.62)), b(s.Switch, "warningDisabledColor", fe(s.warning.main, 0.62)), b(s.TableCell, "border", fe(Lt(s.divider, 1), 0.88)), b(s.Tooltip, "bg", Lt(s.grey[700], 0.92));
    }
    if (s.mode === "dark") {
      b(s.Alert, "errorColor", fe(s.error.light, 0.6)), b(s.Alert, "infoColor", fe(s.info.light, 0.6)), b(s.Alert, "successColor", fe(s.success.light, 0.6)), b(s.Alert, "warningColor", fe(s.warning.light, 0.6)), b(s.Alert, "errorFilledBg", _("palette-error-dark")), b(s.Alert, "infoFilledBg", _("palette-info-dark")), b(s.Alert, "successFilledBg", _("palette-success-dark")), b(s.Alert, "warningFilledBg", _("palette-warning-dark")), b(s.Alert, "errorFilledColor", ze(() => s.getContrastText(s.error.dark))), b(s.Alert, "infoFilledColor", ze(() => s.getContrastText(s.info.dark))), b(s.Alert, "successFilledColor", ze(() => s.getContrastText(s.success.dark))), b(s.Alert, "warningFilledColor", ze(() => s.getContrastText(s.warning.dark))), b(s.Alert, "errorStandardBg", le(s.error.light, 0.9)), b(s.Alert, "infoStandardBg", le(s.info.light, 0.9)), b(s.Alert, "successStandardBg", le(s.success.light, 0.9)), b(s.Alert, "warningStandardBg", le(s.warning.light, 0.9)), b(s.Alert, "errorIconColor", _("palette-error-main")), b(s.Alert, "infoIconColor", _("palette-info-main")), b(s.Alert, "successIconColor", _("palette-success-main")), b(s.Alert, "warningIconColor", _("palette-warning-main")), b(s.AppBar, "defaultBg", _("palette-grey-900")), b(s.AppBar, "darkBg", _("palette-background-paper")), b(s.AppBar, "darkColor", _("palette-text-primary")), b(s.Avatar, "defaultBg", _("palette-grey-600")), b(s.Button, "inheritContainedBg", _("palette-grey-800")), b(s.Button, "inheritContainedHoverBg", _("palette-grey-700")), b(s.Chip, "defaultBorder", _("palette-grey-700")), b(s.Chip, "defaultAvatarColor", _("palette-grey-300")), b(s.Chip, "defaultIconColor", _("palette-grey-300")), b(s.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), b(s.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), b(s.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), b(s.LinearProgress, "primaryBg", le(s.primary.main, 0.5)), b(s.LinearProgress, "secondaryBg", le(s.secondary.main, 0.5)), b(s.LinearProgress, "errorBg", le(s.error.main, 0.5)), b(s.LinearProgress, "infoBg", le(s.info.main, 0.5)), b(s.LinearProgress, "successBg", le(s.success.main, 0.5)), b(s.LinearProgress, "warningBg", le(s.warning.main, 0.5)), b(s.Skeleton, "bg", `rgba(${_("palette-text-primaryChannel")} / 0.13)`), b(s.Slider, "primaryTrack", le(s.primary.main, 0.5)), b(s.Slider, "secondaryTrack", le(s.secondary.main, 0.5)), b(s.Slider, "errorTrack", le(s.error.main, 0.5)), b(s.Slider, "infoTrack", le(s.info.main, 0.5)), b(s.Slider, "successTrack", le(s.success.main, 0.5)), b(s.Slider, "warningTrack", le(s.warning.main, 0.5));
      const N = Vt(s.background.default, 0.98);
      b(s.SnackbarContent, "bg", N), b(s.SnackbarContent, "color", ze(() => s.getContrastText(N))), b(s.SpeedDialAction, "fabHoverBg", Vt(s.background.paper, 0.15)), b(s.StepConnector, "border", _("palette-grey-600")), b(s.StepContent, "border", _("palette-grey-600")), b(s.Switch, "defaultColor", _("palette-grey-300")), b(s.Switch, "defaultDisabledColor", _("palette-grey-600")), b(s.Switch, "primaryDisabledColor", le(s.primary.main, 0.55)), b(s.Switch, "secondaryDisabledColor", le(s.secondary.main, 0.55)), b(s.Switch, "errorDisabledColor", le(s.error.main, 0.55)), b(s.Switch, "infoDisabledColor", le(s.info.main, 0.55)), b(s.Switch, "successDisabledColor", le(s.success.main, 0.55)), b(s.Switch, "warningDisabledColor", le(s.warning.main, 0.55)), b(s.TableCell, "border", le(Lt(s.divider, 1), 0.68)), b(s.Tooltip, "bg", Lt(s.grey[700], 0.92));
    }
    qe(s.background, "default"), qe(s.background, "paper"), qe(s.common, "background"), qe(s.common, "onBackground"), qe(s, "divider"), Object.keys(s).forEach((N) => {
      const D = s[N];
      D && typeof D == "object" && (D.main && b(s[N], "mainChannel", Rt(Ot(D.main))), D.light && b(s[N], "lightChannel", Rt(Ot(D.light))), D.dark && b(s[N], "darkChannel", Rt(Ot(D.dark))), D.contrastText && b(s[N], "contrastTextChannel", Rt(Ot(D.contrastText))), N === "text" && (qe(s[N], "primary"), qe(s[N], "secondary")), N === "action" && (D.active && qe(s[N], "active"), D.selected && qe(s[N], "selected")));
    });
  }), C = t.reduce((J, s) => Ae(J, s), C);
  const m = {
    prefix: i,
    disableCssColorScheme: o,
    shouldSkipGeneratingVar: a,
    getSelector: Mc(C)
  }, {
    vars: I,
    generateThemeVars: A,
    generateStyleSheets: Z
  } = ac(C, m);
  return C.vars = I, Object.entries(C.colorSchemes[C.defaultColorScheme]).forEach(([J, s]) => {
    C[J] = s;
  }), C.generateThemeVars = A, C.generateStyleSheets = Z, C.generateSpacing = function() {
    return wo(f.spacing, Gr(this));
  }, C.getColorSchemeSelector = sc(c), C.spacing = C.generateSpacing(), C.shouldSkipGeneratingVar = a, C.unstable_sxConfig = {
    ...fr,
    ...f == null ? void 0 : f.unstable_sxConfig
  }, C.unstable_sx = function(s) {
    return mt({
      sx: s,
      theme: this
    });
  }, C.toRuntimeSource = jc, C;
}
function to(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: rn({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function Vc(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: n = !1,
    colorSchemes: o = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: i = r == null ? void 0 : r.mode,
    ...a
  } = e, c = i || "light", l = o == null ? void 0 : o[c], f = {
    ...o,
    ...r ? {
      [c]: {
        ...typeof l != "boolean" && l,
        palette: r
      }
    } : void 0
  };
  if (n === !1) {
    if (!("colorSchemes" in e))
      return Fr(e, ...t);
    let d = r;
    "palette" in e || f[c] && (f[c] !== !0 ? d = f[c].palette : c === "dark" && (d = {
      mode: "dark"
    }));
    const p = Fr({
      ...e,
      palette: d
    }, ...t);
    return p.defaultColorScheme = c, p.colorSchemes = f, p.palette.mode === "light" && (p.colorSchemes.light = {
      ...f.light !== !0 && f.light,
      palette: p.palette
    }, to(p, "dark", f.dark)), p.palette.mode === "dark" && (p.colorSchemes.dark = {
      ...f.dark !== !0 && f.dark,
      palette: p.palette
    }, to(p, "light", f.light)), p;
  }
  return !r && !("light" in f) && c === "light" && (f.light = !0), Lc({
    ...a,
    colorSchemes: f,
    defaultColorScheme: c,
    ...typeof n != "boolean" && n
  }, ...t);
}
const zc = Vc(), Wc = "$$material", bt = Bs({
  themeId: Wc,
  defaultTheme: zc,
  rootShouldForwardProp: so
}), Uc = rc;
process.env.NODE_ENV !== "production" && (v.node, v.object.isRequired);
function nn(e) {
  return tc(e);
}
class er {
  constructor() {
    Ct(this, "mountEffect", () => {
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
    const t = Po(er.create).current, [r, n] = V.useState(!1);
    return t.shouldMount = r, t.setShouldMount = n, V.useEffect(t.mountEffect, [r]), t;
  }
  mount() {
    return this.mounted || (this.mounted = qc(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function Yc() {
  return er.use();
}
function qc() {
  let e, t;
  const r = new Promise((n, o) => {
    e = n, t = o;
  });
  return r.resolve = e, r.reject = t, r;
}
function Gc(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.includes(n)) continue;
    r[n] = e[n];
  }
  return r;
}
function Lr(e, t) {
  return Lr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, Lr(e, t);
}
function Kc(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Lr(e, t);
}
const ro = tt.createContext(null);
function Hc(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function on(e, t) {
  var r = function(i) {
    return t && Ut(i) ? t(i) : i;
  }, n = /* @__PURE__ */ Object.create(null);
  return e && li.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    n[o.key] = r(o);
  }), n;
}
function Xc(e, t) {
  e = e || {}, t = t || {};
  function r(d) {
    return d in t ? t[d] : e[d];
  }
  var n = /* @__PURE__ */ Object.create(null), o = [];
  for (var i in e)
    i in t ? o.length && (n[i] = o, o = []) : o.push(i);
  var a, c = {};
  for (var l in t) {
    if (n[l])
      for (a = 0; a < n[l].length; a++) {
        var f = n[l][a];
        c[n[l][a]] = r(f);
      }
    c[l] = r(l);
  }
  for (a = 0; a < o.length; a++)
    c[o[a]] = r(o[a]);
  return c;
}
function rt(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function Jc(e, t) {
  return on(e.children, function(r) {
    return Yt(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: rt(r, "appear", e),
      enter: rt(r, "enter", e),
      exit: rt(r, "exit", e)
    });
  });
}
function Qc(e, t, r) {
  var n = on(e.children), o = Xc(t, n);
  return Object.keys(o).forEach(function(i) {
    var a = o[i];
    if (Ut(a)) {
      var c = i in t, l = i in n, f = t[i], d = Ut(f) && !f.props.in;
      l && (!c || d) ? o[i] = Yt(a, {
        onExited: r.bind(null, a),
        in: !0,
        exit: rt(a, "exit", e),
        enter: rt(a, "enter", e)
      }) : !l && c && !d ? o[i] = Yt(a, {
        in: !1
      }) : l && c && Ut(f) && (o[i] = Yt(a, {
        onExited: r.bind(null, a),
        in: f.props.in,
        exit: rt(a, "exit", e),
        enter: rt(a, "enter", e)
      }));
    }
  }), o;
}
var Zc = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, eu = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, an = /* @__PURE__ */ function(e) {
  Kc(t, e);
  function t(n, o) {
    var i;
    i = e.call(this, n, o) || this;
    var a = i.handleExited.bind(Hc(i));
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
    var a = i.children, c = i.handleExited, l = i.firstRender;
    return {
      children: l ? Jc(o, c) : Qc(o, a, c),
      firstRender: !1
    };
  }, r.handleExited = function(o, i) {
    var a = on(this.props.children);
    o.key in a || (o.props.onExited && o.props.onExited(i), this.mounted && this.setState(function(c) {
      var l = Qt({}, c.children);
      return delete l[o.key], {
        children: l
      };
    }));
  }, r.render = function() {
    var o = this.props, i = o.component, a = o.childFactory, c = Gc(o, ["component", "childFactory"]), l = this.state.contextValue, f = Zc(this.state.children).map(a);
    return delete c.appear, delete c.enter, delete c.exit, i === null ? /* @__PURE__ */ tt.createElement(ro.Provider, {
      value: l
    }, f) : /* @__PURE__ */ tt.createElement(ro.Provider, {
      value: l
    }, /* @__PURE__ */ tt.createElement(i, c, f));
  }, t;
}(tt.Component);
an.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: v.any,
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
  children: v.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: v.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: v.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: v.bool,
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
  childFactory: v.func
} : {};
an.defaultProps = eu;
function No(e) {
  const {
    className: t,
    classes: r,
    pulsate: n = !1,
    rippleX: o,
    rippleY: i,
    rippleSize: a,
    in: c,
    onExited: l,
    timeout: f
  } = e, [d, p] = V.useState(!1), g = je(t, r.ripple, r.rippleVisible, n && r.ripplePulsate), x = {
    width: a,
    height: a,
    top: -(a / 2) + i,
    left: -(a / 2) + o
  }, S = je(r.child, d && r.childLeaving, n && r.childPulsate);
  return !c && !d && p(!0), V.useEffect(() => {
    if (!c && l != null) {
      const y = setTimeout(l, f);
      return () => {
        clearTimeout(y);
      };
    }
  }, [l, c, f]), /* @__PURE__ */ Le.jsx("span", {
    className: g,
    style: x,
    children: /* @__PURE__ */ Le.jsx("span", {
      className: S
    })
  });
}
process.env.NODE_ENV !== "production" && (No.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: v.object.isRequired,
  className: v.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: v.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: v.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: v.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: v.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: v.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: v.number,
  /**
   * exit delay
   */
  timeout: v.number.isRequired
});
const De = en("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Vr = 550, tu = 80, ru = Zr`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, nu = Zr`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, ou = Zr`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, iu = bt("span", {
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
}), au = bt(No, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${De.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${ru};
    animation-duration: ${Vr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${De.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${De.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${De.childLeaving} {
    opacity: 0;
    animation-name: ${nu};
    animation-duration: ${Vr}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${De.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${ou};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, jo = /* @__PURE__ */ V.forwardRef(function(t, r) {
  const n = nn({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: i = {},
    className: a,
    ...c
  } = n, [l, f] = V.useState([]), d = V.useRef(0), p = V.useRef(null);
  V.useEffect(() => {
    p.current && (p.current(), p.current = null);
  }, [l]);
  const g = V.useRef(!1), x = Qs(), S = V.useRef(null), y = V.useRef(null), h = V.useCallback((C) => {
    const {
      pulsate: m,
      rippleX: I,
      rippleY: A,
      rippleSize: Z,
      cb: J
    } = C;
    f((s) => [...s, /* @__PURE__ */ Le.jsx(au, {
      classes: {
        ripple: je(i.ripple, De.ripple),
        rippleVisible: je(i.rippleVisible, De.rippleVisible),
        ripplePulsate: je(i.ripplePulsate, De.ripplePulsate),
        child: je(i.child, De.child),
        childLeaving: je(i.childLeaving, De.childLeaving),
        childPulsate: je(i.childPulsate, De.childPulsate)
      },
      timeout: Vr,
      pulsate: m,
      rippleX: I,
      rippleY: A,
      rippleSize: Z
    }, d.current)]), d.current += 1, p.current = J;
  }, [i]), T = V.useCallback((C = {}, m = {}, I = () => {
  }) => {
    const {
      pulsate: A = !1,
      center: Z = o || m.pulsate,
      fakeElement: J = !1
      // For test purposes
    } = m;
    if ((C == null ? void 0 : C.type) === "mousedown" && g.current) {
      g.current = !1;
      return;
    }
    (C == null ? void 0 : C.type) === "touchstart" && (g.current = !0);
    const s = J ? null : y.current, _ = s ? s.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let N, D, Y;
    if (Z || C === void 0 || C.clientX === 0 && C.clientY === 0 || !C.clientX && !C.touches)
      N = Math.round(_.width / 2), D = Math.round(_.height / 2);
    else {
      const {
        clientX: ce,
        clientY: se
      } = C.touches && C.touches.length > 0 ? C.touches[0] : C;
      N = Math.round(ce - _.left), D = Math.round(se - _.top);
    }
    if (Z)
      Y = Math.sqrt((2 * _.width ** 2 + _.height ** 2) / 3), Y % 2 === 0 && (Y += 1);
    else {
      const ce = Math.max(Math.abs((s ? s.clientWidth : 0) - N), N) * 2 + 2, se = Math.max(Math.abs((s ? s.clientHeight : 0) - D), D) * 2 + 2;
      Y = Math.sqrt(ce ** 2 + se ** 2);
    }
    C != null && C.touches ? S.current === null && (S.current = () => {
      h({
        pulsate: A,
        rippleX: N,
        rippleY: D,
        rippleSize: Y,
        cb: I
      });
    }, x.start(tu, () => {
      S.current && (S.current(), S.current = null);
    })) : h({
      pulsate: A,
      rippleX: N,
      rippleY: D,
      rippleSize: Y,
      cb: I
    });
  }, [o, h, x]), k = V.useCallback(() => {
    T({}, {
      pulsate: !0
    });
  }, [T]), R = V.useCallback((C, m) => {
    if (x.clear(), (C == null ? void 0 : C.type) === "touchend" && S.current) {
      S.current(), S.current = null, x.start(0, () => {
        R(C, m);
      });
      return;
    }
    S.current = null, f((I) => I.length > 0 ? I.slice(1) : I), p.current = m;
  }, [x]);
  return V.useImperativeHandle(r, () => ({
    pulsate: k,
    start: T,
    stop: R
  }), [k, T, R]), /* @__PURE__ */ Le.jsx(iu, {
    className: je(De.root, i.root, a),
    ref: y,
    ...c,
    children: /* @__PURE__ */ Le.jsx(an, {
      component: null,
      exit: !0,
      children: l
    })
  });
});
process.env.NODE_ENV !== "production" && (jo.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: v.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: v.object,
  /**
   * @ignore
   */
  className: v.string
});
function su(e) {
  return mr("MuiButtonBase", e);
}
const cu = en("MuiButtonBase", ["root", "disabled", "focusVisible"]), uu = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: n,
    classes: o
  } = e, a = io({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, su, o);
  return r && n && (a.root += ` ${n}`), a;
}, lu = bt("button", {
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
  [`&.${cu.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Do = /* @__PURE__ */ V.forwardRef(function(t, r) {
  const n = nn({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: i = !1,
    children: a,
    className: c,
    component: l = "button",
    disabled: f = !1,
    disableRipple: d = !1,
    disableTouchRipple: p = !1,
    focusRipple: g = !1,
    focusVisibleClassName: x,
    LinkComponent: S = "a",
    onBlur: y,
    onClick: h,
    onContextMenu: T,
    onDragLeave: k,
    onFocus: R,
    onFocusVisible: C,
    onKeyDown: m,
    onKeyUp: I,
    onMouseDown: A,
    onMouseLeave: Z,
    onMouseUp: J,
    onTouchEnd: s,
    onTouchMove: _,
    onTouchStart: N,
    tabIndex: D = 0,
    TouchRippleProps: Y,
    touchRippleRef: ce,
    type: se,
    ...me
  } = n, Ce = V.useRef(null), Ee = Yc(), w = Yn(Ee.ref, ce), [O, F] = V.useState(!1);
  f && O && F(!1), V.useImperativeHandle(o, () => ({
    focusVisible: () => {
      F(!0), Ce.current.focus();
    }
  }), []);
  const W = Ee.shouldMount && !d && !f;
  V.useEffect(() => {
    O && g && !d && Ee.pulsate();
  }, [d, g, O, Ee]);
  function j(U, Dt, Bt = p) {
    return Wt((St) => (Dt && Dt(St), Bt || Ee[U](St), !0));
  }
  const K = j("start", A), L = j("stop", T), z = j("stop", k), q = j("stop", J), H = j("stop", (U) => {
    O && U.preventDefault(), Z && Z(U);
  }), G = j("start", N), be = j("stop", s), $ = j("stop", _), we = j("stop", (U) => {
    Gn(U.target) || F(!1), y && y(U);
  }, !1), M = Wt((U) => {
    Ce.current || (Ce.current = U.currentTarget), Gn(U.target) && (F(!0), C && C(U)), R && R(U);
  }), Re = () => {
    const U = Ce.current;
    return l && l !== "button" && !(U.tagName === "A" && U.href);
  }, Me = Wt((U) => {
    g && !U.repeat && O && U.key === " " && Ee.stop(U, () => {
      Ee.start(U);
    }), U.target === U.currentTarget && Re() && U.key === " " && U.preventDefault(), m && m(U), U.target === U.currentTarget && Re() && U.key === "Enter" && !f && (U.preventDefault(), h && h(U));
  }), Qe = Wt((U) => {
    g && U.key === " " && O && !U.defaultPrevented && Ee.stop(U, () => {
      Ee.pulsate(U);
    }), I && I(U), h && U.target === U.currentTarget && Re() && U.key === " " && !U.defaultPrevented && h(U);
  });
  let Ze = l;
  Ze === "button" && (me.href || me.to) && (Ze = S);
  const Ve = {};
  Ze === "button" ? (Ve.type = se === void 0 ? "button" : se, Ve.disabled = f) : (!me.href && !me.to && (Ve.role = "button"), f && (Ve["aria-disabled"] = f));
  const gr = Yn(r, Ce), jt = {
    ...n,
    centerRipple: i,
    component: l,
    disabled: f,
    disableRipple: d,
    disableTouchRipple: p,
    focusRipple: g,
    tabIndex: D,
    focusVisible: O
  }, vt = uu(jt);
  return /* @__PURE__ */ Le.jsxs(lu, {
    as: Ze,
    className: je(vt.root, c),
    ownerState: jt,
    onBlur: we,
    onClick: h,
    onContextMenu: L,
    onFocus: M,
    onKeyDown: Me,
    onKeyUp: Qe,
    onMouseDown: K,
    onMouseLeave: H,
    onMouseUp: q,
    onDragLeave: z,
    onTouchEnd: be,
    onTouchMove: $,
    onTouchStart: G,
    ref: gr,
    tabIndex: f ? -1 : D,
    type: se,
    ...Ve,
    ...me,
    children: [a, W ? /* @__PURE__ */ Le.jsx(jo, {
      ref: w,
      center: i,
      ...Y
    }) : null]
  });
});
process.env.NODE_ENV !== "production" && (Do.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Ks,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: v.bool,
  /**
   * The content of the component.
   */
  children: v.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: v.object,
  /**
   * @ignore
   */
  className: v.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Gs,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: v.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: v.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: v.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: v.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: v.string,
  /**
   * @ignore
   */
  href: v.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: v.elementType,
  /**
   * @ignore
   */
  onBlur: v.func,
  /**
   * @ignore
   */
  onClick: v.func,
  /**
   * @ignore
   */
  onContextMenu: v.func,
  /**
   * @ignore
   */
  onDragLeave: v.func,
  /**
   * @ignore
   */
  onFocus: v.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: v.func,
  /**
   * @ignore
   */
  onKeyDown: v.func,
  /**
   * @ignore
   */
  onKeyUp: v.func,
  /**
   * @ignore
   */
  onMouseDown: v.func,
  /**
   * @ignore
   */
  onMouseLeave: v.func,
  /**
   * @ignore
   */
  onMouseUp: v.func,
  /**
   * @ignore
   */
  onTouchEnd: v.func,
  /**
   * @ignore
   */
  onTouchMove: v.func,
  /**
   * @ignore
   */
  onTouchStart: v.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: v.oneOfType([v.arrayOf(v.oneOfType([v.func, v.object, v.bool])), v.func, v.object]),
  /**
   * @default 0
   */
  tabIndex: v.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: v.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: v.oneOfType([v.func, v.shape({
    current: v.shape({
      pulsate: v.func.isRequired,
      start: v.func.isRequired,
      stop: v.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: v.oneOfType([v.oneOf(["button", "reset", "submit"]), v.string])
});
function fu(e) {
  return typeof e.main == "string";
}
function du(e, t = []) {
  if (!fu(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function pu(e = []) {
  return ([, t]) => t && du(t, e);
}
function hu(e) {
  return mr("MuiButton", e);
}
const ft = en("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), Bo = /* @__PURE__ */ V.createContext({});
process.env.NODE_ENV !== "production" && (Bo.displayName = "ButtonGroupContext");
const Fo = /* @__PURE__ */ V.createContext(void 0);
process.env.NODE_ENV !== "production" && (Fo.displayName = "ButtonGroupButtonContext");
const mu = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: n,
    size: o,
    variant: i,
    classes: a
  } = e, c = {
    root: ["root", i, `${i}${_e(t)}`, `size${_e(o)}`, `${i}Size${_e(o)}`, `color${_e(t)}`, r && "disableElevation", n && "fullWidth"],
    label: ["label"],
    startIcon: ["icon", "startIcon", `iconSize${_e(o)}`],
    endIcon: ["icon", "endIcon", `iconSize${_e(o)}`]
  }, l = io(c, hu, a);
  return {
    ...a,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...l
  };
}, Lo = [{
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
}], gu = bt(Do, {
  shouldForwardProp: (e) => so(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${_e(r.color)}`], t[`size${_e(r.size)}`], t[`${r.variant}Size${_e(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth];
  }
})(Uc(({
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
    [`&.${ft.disabled}`]: {
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
        [`&.${ft.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${ft.disabled}`]: {
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
        [`&.${ft.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(pu()).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[n].main,
        "--variant-outlinedColor": (e.vars || e).palette[n].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / 0.5)` : dt(e.palette[n].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[n].contrastText,
        "--variant-containedBg": (e.vars || e).palette[n].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[n].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : dt(e.palette[n].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[n].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : dt(e.palette[n].main, e.palette.action.hoverOpacity)
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
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : dt(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : dt(e.palette.text.primary, e.palette.action.hoverOpacity)
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
        [`&.${ft.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${ft.disabled}`]: {
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
    }]
  };
})), yu = bt("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, t[`iconSize${_e(r.size)}`]];
  }
})({
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
  }, ...Lo]
}), bu = bt("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, t[`iconSize${_e(r.size)}`]];
  }
})({
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
  }, ...Lo]
}), Vo = /* @__PURE__ */ V.forwardRef(function(t, r) {
  const n = V.useContext(Bo), o = V.useContext(Fo), i = Xt(n, t), a = nn({
    props: i,
    name: "MuiButton"
  }), {
    children: c,
    color: l = "primary",
    component: f = "button",
    className: d,
    disabled: p = !1,
    disableElevation: g = !1,
    disableFocusRipple: x = !1,
    endIcon: S,
    focusVisibleClassName: y,
    fullWidth: h = !1,
    size: T = "medium",
    startIcon: k,
    type: R,
    variant: C = "text",
    ...m
  } = a, I = {
    ...a,
    color: l,
    component: f,
    disabled: p,
    disableElevation: g,
    disableFocusRipple: x,
    fullWidth: h,
    size: T,
    type: R,
    variant: C
  }, A = mu(I), Z = k && /* @__PURE__ */ Le.jsx(yu, {
    className: A.startIcon,
    ownerState: I,
    children: k
  }), J = S && /* @__PURE__ */ Le.jsx(bu, {
    className: A.endIcon,
    ownerState: I,
    children: S
  }), s = o || "";
  return /* @__PURE__ */ Le.jsxs(gu, {
    ownerState: I,
    className: je(n.className, A.root, d, s),
    component: f,
    disabled: p,
    focusRipple: !x,
    focusVisibleClassName: je(A.focusVisible, y),
    ref: r,
    type: R,
    ...m,
    classes: A,
    children: [Z, c, J]
  });
});
process.env.NODE_ENV !== "production" && (Vo.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: v.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: v.object,
  /**
   * @ignore
   */
  className: v.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: v.oneOfType([v.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), v.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: v.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: v.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: v.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: v.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: v.bool,
  /**
   * Element placed after the children.
   */
  endIcon: v.node,
  /**
   * @ignore
   */
  focusVisibleClassName: v.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: v.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: v.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: v.oneOfType([v.oneOf(["small", "medium", "large"]), v.string]),
  /**
   * Element placed before the children.
   */
  startIcon: v.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: v.oneOfType([v.arrayOf(v.oneOfType([v.func, v.object, v.bool])), v.func, v.object]),
  /**
   * @ignore
   */
  type: v.oneOfType([v.oneOf(["button", "reset", "submit"]), v.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: v.oneOfType([v.oneOf(["contained", "outlined", "text"]), v.string])
});
function Cu(e) {
  const { bgcolor: t, text: r, txtcolor: n, disabled: o, onClick: i, size: a } = e;
  return (
    //Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
    /* @__PURE__ */ Le.jsx(
      Vo,
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
  Cu as CustomButton
};
//# sourceMappingURL=index.es.js.map
