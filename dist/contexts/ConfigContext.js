"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConfigContext = void 0;
exports.ConfigProvider = ConfigProvider;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _config = _interopRequireDefault(require("../config"));
var _useLocalStorage3 = _interopRequireDefault(require("../hooks/useLocalStorage"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } // project import
// initial state
var initialState = _objectSpread(_objectSpread({}, _config["default"]), {}, {
  onChangeLayout: function onChangeLayout() {},
  onChangeDrawer: function onChangeDrawer() {},
  onChangeMenuType: function onChangeMenuType() {},
  onChangePresetColor: function onChangePresetColor() {},
  onChangeLocale: function onChangeLocale() {},
  onChangeRTL: function onChangeRTL() {},
  onChangeContainer: function onChangeContainer() {},
  onChangeFontFamily: function onChangeFontFamily() {},
  onChangeBorderRadius: function onChangeBorderRadius() {},
  onChangeOutlinedField: function onChangeOutlinedField() {},
  onReset: function onReset() {}
});

// ==============================|| CONFIG CONTEXT & PROVIDER ||============================== //

var ConfigContext = exports.ConfigContext = /*#__PURE__*/(0, _react.createContext)(initialState);
function ConfigProvider(_ref) {
  var children = _ref.children;
  var _useLocalStorage = (0, _useLocalStorage3["default"])('berry-config', {
      layout: initialState.layout,
      drawerType: initialState.drawerType,
      fontFamily: initialState.fontFamily,
      borderRadius: initialState.borderRadius,
      outlinedFilled: initialState.outlinedFilled,
      navType: initialState.navType,
      presetColor: initialState.presetColor,
      locale: initialState.locale,
      rtlLayout: initialState.rtlLayout
    }),
    _useLocalStorage2 = _slicedToArray(_useLocalStorage, 2),
    config = _useLocalStorage2[0],
    setConfig = _useLocalStorage2[1];
  var onChangeLayout = function onChangeLayout(layout) {
    setConfig(_objectSpread(_objectSpread({}, config), {}, {
      layout: layout
    }));
  };
  var onChangeDrawer = function onChangeDrawer(drawerType) {
    setConfig(_objectSpread(_objectSpread({}, config), {}, {
      drawerType: drawerType
    }));
  };
  var onChangeMenuType = function onChangeMenuType(navType) {
    setConfig(_objectSpread(_objectSpread({}, config), {}, {
      navType: navType
    }));
  };
  var onChangePresetColor = function onChangePresetColor(presetColor) {
    setConfig(_objectSpread(_objectSpread({}, config), {}, {
      presetColor: presetColor
    }));
  };
  var onChangeLocale = function onChangeLocale(locale) {
    setConfig(_objectSpread(_objectSpread({}, config), {}, {
      locale: locale
    }));
  };
  var onChangeRTL = function onChangeRTL(rtlLayout) {
    setConfig(_objectSpread(_objectSpread({}, config), {}, {
      rtlLayout: rtlLayout
    }));
  };
  var onChangeContainer = function onChangeContainer(container) {
    setConfig(_objectSpread(_objectSpread({}, config), {}, {
      container: container
    }));
  };
  var onChangeFontFamily = function onChangeFontFamily(fontFamily) {
    setConfig(_objectSpread(_objectSpread({}, config), {}, {
      fontFamily: fontFamily
    }));
  };
  var onChangeBorderRadius = function onChangeBorderRadius(event, newValue) {
    setConfig(_objectSpread(_objectSpread({}, config), {}, {
      borderRadius: newValue
    }));
  };
  var onChangeOutlinedField = function onChangeOutlinedField(outlinedFilled) {
    setConfig(_objectSpread(_objectSpread({}, config), {}, {
      outlinedFilled: outlinedFilled
    }));
  };
  var onReset = function onReset() {
    setConfig(_objectSpread({}, _config["default"]));
  };
  return /*#__PURE__*/_react["default"].createElement(ConfigContext.Provider, {
    value: _objectSpread(_objectSpread({}, config), {}, {
      onChangeLayout: onChangeLayout,
      onChangeDrawer: onChangeDrawer,
      onChangeMenuType: onChangeMenuType,
      onChangePresetColor: onChangePresetColor,
      onChangeLocale: onChangeLocale,
      onChangeRTL: onChangeRTL,
      onChangeContainer: onChangeContainer,
      onChangeFontFamily: onChangeFontFamily,
      onChangeBorderRadius: onChangeBorderRadius,
      onChangeOutlinedField: onChangeOutlinedField,
      onReset: onReset
    })
  }, children);
}
ConfigProvider.propTypes = {
  children: _propTypes["default"].node
};