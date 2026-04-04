"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  uniffiInitAsync: true
};
exports["default"] = void 0;
exports.uniffiInitAsync = uniffiInitAsync;
var matrix_sdk = _interopRequireWildcard(require("./generated-compat/matrix_sdk"));
Object.keys(matrix_sdk).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === matrix_sdk[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return matrix_sdk[key];
    }
  });
});
var matrix_sdk_base = _interopRequireWildcard(require("./generated-compat/matrix_sdk_base"));
Object.keys(matrix_sdk_base).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === matrix_sdk_base[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return matrix_sdk_base[key];
    }
  });
});
var matrix_sdk_common = _interopRequireWildcard(require("./generated-compat/matrix_sdk_common"));
Object.keys(matrix_sdk_common).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === matrix_sdk_common[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return matrix_sdk_common[key];
    }
  });
});
var matrix_sdk_crypto = _interopRequireWildcard(require("./generated-compat/matrix_sdk_crypto"));
Object.keys(matrix_sdk_crypto).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === matrix_sdk_crypto[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return matrix_sdk_crypto[key];
    }
  });
});
var matrix_sdk_ffi = _interopRequireWildcard(require("./generated-compat/matrix_sdk_ffi"));
Object.keys(matrix_sdk_ffi).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === matrix_sdk_ffi[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return matrix_sdk_ffi[key];
    }
  });
});
var matrix_sdk_ui = _interopRequireWildcard(require("./generated-compat/matrix_sdk_ui"));
Object.keys(matrix_sdk_ui).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === matrix_sdk_ui[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return matrix_sdk_ui[key];
    }
  });
});
var _index = _interopRequireDefault(require("./generated-compat/wasm-bindgen/index.js"));
var _index_bg = _interopRequireDefault(require("./generated-compat/wasm-bindgen/index_bg.wasm"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; } // Generated by uniffi-bindgen-react-native
// Export the generated bindings to the app.
// Now import the bindings so we can:
// - intialize them
// - export them as namespaced objects as the default export.
function uniffiInitAsync() {
  return _uniffiInitAsync.apply(this, arguments);
} // Export the crates as individually namespaced objects.
function _uniffiInitAsync() {
  _uniffiInitAsync = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          _context.n = 1;
          return (0, _index["default"])({
            module_or_path: _index_bg["default"]
          });
        case 1:
          // Initialize the generated bindings: mostly checksums, but also callbacks.
          // - the boolean flag ensures this loads exactly once, even if the JS code
          //   is reloaded (e.g. during development with metro).
          matrix_sdk["default"].initialize();
          matrix_sdk_base["default"].initialize();
          matrix_sdk_common["default"].initialize();
          matrix_sdk_crypto["default"].initialize();
          matrix_sdk_ffi["default"].initialize();
          matrix_sdk_ui["default"].initialize();
        case 2:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _uniffiInitAsync.apply(this, arguments);
}
var _default = exports["default"] = {
  matrix_sdk: matrix_sdk,
  matrix_sdk_base: matrix_sdk_base,
  matrix_sdk_common: matrix_sdk_common,
  matrix_sdk_crypto: matrix_sdk_crypto,
  matrix_sdk_ffi: matrix_sdk_ffi,
  matrix_sdk_ui: matrix_sdk_ui
};
