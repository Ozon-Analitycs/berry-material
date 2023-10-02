"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FormControlSelect = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _styles = require("@mui/material/styles");
var _material = require("@mui/material");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // material-ui
// ==============================|| FORM CONTROL SELECT ||============================== //

var FormControlSelect = exports.FormControlSelect = function FormControlSelect(_ref) {
  var captionLabel = _ref.captionLabel,
    currencies = _ref.currencies,
    formState = _ref.formState,
    iconPrimary = _ref.iconPrimary,
    iconSecondary = _ref.iconSecondary,
    selected = _ref.selected,
    textPrimary = _ref.textPrimary,
    textSecondary = _ref.textSecondary;
  var theme = (0, _styles.useTheme)();
  var IconPrimary = iconPrimary;
  var primaryIcon = iconPrimary ? /*#__PURE__*/_react["default"].createElement(IconPrimary, {
    fontSize: "small",
    sx: {
      color: theme.palette.grey[700]
    }
  }) : null;
  var IconSecondary = iconSecondary;
  var secondaryIcon = iconSecondary ? /*#__PURE__*/_react["default"].createElement(IconSecondary, {
    fontSize: "small",
    sx: {
      color: theme.palette.grey[700]
    }
  }) : null;
  var errorState = formState === 'error';
  var val = selected || '';
  var _useState = (0, _react.useState)(val),
    _useState2 = _slicedToArray(_useState, 2),
    currency = _useState2[0],
    setCurrency = _useState2[1];
  var handleChange = function handleChange(event) {
    return setCurrency(event === null || event === void 0 ? void 0 : event.target.value);
  };
  return /*#__PURE__*/_react["default"].createElement(_material.FormControl, {
    fullWidth: true,
    error: errorState
  }, /*#__PURE__*/_react["default"].createElement(_material.TextField, {
    id: "outlined-select-currency",
    select: true,
    fullWidth: true,
    label: captionLabel,
    value: currency,
    onChange: handleChange,
    InputProps: {
      startAdornment: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, primaryIcon && /*#__PURE__*/_react["default"].createElement(_material.InputAdornment, {
        position: "start"
      }, primaryIcon), textPrimary && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_material.InputAdornment, {
        position: "start"
      }, textPrimary), /*#__PURE__*/_react["default"].createElement(_material.Divider, {
        sx: {
          height: 28,
          m: 0.5
        },
        orientation: "vertical"
      }))),
      endAdornment: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, secondaryIcon && /*#__PURE__*/_react["default"].createElement(_material.InputAdornment, {
        position: "end"
      }, secondaryIcon), textSecondary && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_material.Divider, {
        sx: {
          height: 28,
          m: 0.5
        },
        orientation: "vertical"
      }), /*#__PURE__*/_react["default"].createElement(_material.InputAdornment, {
        position: "end"
      }, textSecondary)))
    }
  }, currencies === null || currencies === void 0 ? void 0 : currencies.map(function (option, index) {
    return /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
      key: index,
      value: option.value
    }, option.label);
  })));
};
FormControlSelect.propTypes = {
  captionLabel: _propTypes["default"].string,
  currencies: _propTypes["default"].array,
  formState: _propTypes["default"].string,
  iconPrimary: _propTypes["default"].object,
  iconSecondary: _propTypes["default"].object,
  selected: _propTypes["default"].string,
  textPrimary: _propTypes["default"].string,
  textSecondary: _propTypes["default"].string
};
var _default = exports["default"] = FormControlSelect;