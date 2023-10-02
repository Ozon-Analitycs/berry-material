"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _react2 = require("@emotion/react");
var _cache = _interopRequireDefault(require("@emotion/cache"));
var _stylisPluginRtl = _interopRequireDefault(require("stylis-plugin-rtl"));
var _useConfig2 = _interopRequireDefault(require("../hooks/useConfig"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// material-ui

// third-party

// ==============================|| RTL LAYOUT ||============================== //

var RTLLayout = function RTLLayout(_ref) {
  var children = _ref.children;
  var _useConfig = (0, _useConfig2["default"])(),
    rtlLayout = _useConfig.rtlLayout;
  (0, _react.useEffect)(function () {
    document.dir = rtlLayout ? 'rtl' : 'ltr';
  }, [rtlLayout]);
  var cacheRtl = (0, _cache["default"])({
    key: rtlLayout ? 'rtl' : 'css',
    prepend: true,
    stylisPlugins: rtlLayout ? [_stylisPluginRtl["default"]] : []
  });
  return /*#__PURE__*/_react["default"].createElement(_react2.CacheProvider, {
    value: cacheRtl
  }, children);
};
RTLLayout.propTypes = {
  children: _propTypes["default"].node
};
var _default = exports["default"] = RTLLayout;