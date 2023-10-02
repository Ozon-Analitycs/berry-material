"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _styles = require("@mui/material/styles");
var _Chip = _interopRequireDefault(require("@mui/material/Chip"));
var _excluded = ["chipcolor", "disabled", "sx", "variant"]; // material-ui
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
// ==============================|| CHIP ||============================== //

var Chip = function Chip(_ref) {
  var _theme$palette$orange, _theme$palette$orange2, _theme$palette$orange3, _theme$palette$orange4, _theme$palette$orange5, _theme$palette$orange6, _theme$palette$orange7, _theme$palette$orange8;
  var chipcolor = _ref.chipcolor,
    disabled = _ref.disabled,
    _ref$sx = _ref.sx,
    sx = _ref$sx === void 0 ? {} : _ref$sx,
    variant = _ref.variant,
    others = _objectWithoutProperties(_ref, _excluded);
  var theme = (0, _styles.useTheme)();
  var defaultSX = {
    color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
    bgcolor: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.primary.light,
    ':hover': {
      color: theme.palette.primary.light,
      bgcolor: theme.palette.mode === 'dark' ? theme.palette.primary.dark + 90 : theme.palette.primary.dark
    }
  };
  var outlineSX = {
    color: theme.palette.primary.main,
    bgcolor: 'transparent',
    border: '1px solid',
    borderColor: theme.palette.primary.main,
    ':hover': {
      color: theme.palette.mode === 'dark' ? theme.palette.primary.light : theme.palette.primary.light,
      bgcolor: theme.palette.mode === 'dark' ? theme.palette.primary.main : theme.palette.primary.dark
    }
  };
  switch (chipcolor) {
    case 'secondary':
      if (variant === 'outlined') outlineSX = {
        color: theme.palette.secondary.main,
        bgcolor: 'transparent',
        border: '1px solid',
        borderColor: theme.palette.secondary.main,
        ':hover': {
          color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.main,
          bgcolor: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light
        }
      };else defaultSX = {
        color: theme.palette.mode === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.main,
        bgcolor: theme.palette.mode === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
        ':hover': {
          color: theme.palette.secondary.light,
          bgcolor: theme.palette.mode === 'dark' ? theme.palette.secondary.dark + 90 : theme.palette.secondary.main
        }
      };
      break;
    case 'success':
      if (variant === 'outlined') outlineSX = {
        color: theme.palette.success.dark,
        bgcolor: 'transparent',
        border: '1px solid',
        borderColor: theme.palette.success.dark,
        ':hover': {
          color: theme.palette.mode === 'dark' ? theme.palette.success.light : theme.palette.success.dark,
          bgcolor: theme.palette.mode === 'dark' ? theme.palette.success.dark : theme.palette.success.light + 60
        }
      };else defaultSX = {
        color: theme.palette.mode === 'dark' ? theme.palette.success.light : theme.palette.success.dark,
        bgcolor: theme.palette.mode === 'dark' ? theme.palette.success.dark : theme.palette.success.light + 60,
        ':hover': {
          color: theme.palette.success.light,
          bgcolor: theme.palette.mode === 'dark' ? theme.palette.success.dark + 90 : theme.palette.success.dark
        }
      };
      break;
    case 'error':
      if (variant === 'outlined') outlineSX = {
        color: theme.palette.error.main,
        bgcolor: 'transparent',
        border: '1px solid',
        borderColor: theme.palette.error.main,
        ':hover': {
          color: theme.palette.mode === 'dark' ? theme.palette.error.light : theme.palette.error.dark,
          bgcolor: theme.palette.mode === 'dark' ? theme.palette.error.dark : theme.palette.error.light
        }
      };else defaultSX = {
        color: theme.palette.mode === 'dark' ? theme.palette.error.light : theme.palette.error.dark,
        bgcolor: theme.palette.mode === 'dark' ? theme.palette.error.dark : theme.palette.error.light + 60,
        ':hover': {
          color: theme.palette.error.light,
          bgcolor: theme.palette.mode === 'dark' ? theme.palette.error.dark + 90 : theme.palette.error.dark
        }
      };
      break;
    case 'orange':
      if (variant === 'outlined') outlineSX = {
        color: (_theme$palette$orange = theme.palette.orange) === null || _theme$palette$orange === void 0 ? void 0 : _theme$palette$orange.dark,
        bgcolor: 'transparent',
        border: '1px solid',
        borderColor: (_theme$palette$orange2 = theme.palette.orange) === null || _theme$palette$orange2 === void 0 ? void 0 : _theme$palette$orange2.main,
        ':hover': {
          color: (_theme$palette$orange3 = theme.palette.orange) === null || _theme$palette$orange3 === void 0 ? void 0 : _theme$palette$orange3.dark,
          bgcolor: (_theme$palette$orange4 = theme.palette.orange) === null || _theme$palette$orange4 === void 0 ? void 0 : _theme$palette$orange4.light
        }
      };else defaultSX = {
        color: (_theme$palette$orange5 = theme.palette.orange) === null || _theme$palette$orange5 === void 0 ? void 0 : _theme$palette$orange5.dark,
        bgcolor: (_theme$palette$orange6 = theme.palette.orange) === null || _theme$palette$orange6 === void 0 ? void 0 : _theme$palette$orange6.light,
        ':hover': {
          color: (_theme$palette$orange7 = theme.palette.orange) === null || _theme$palette$orange7 === void 0 ? void 0 : _theme$palette$orange7.light,
          bgcolor: (_theme$palette$orange8 = theme.palette.orange) === null || _theme$palette$orange8 === void 0 ? void 0 : _theme$palette$orange8.dark
        }
      };
      break;
    case 'warning':
      if (variant === 'outlined') outlineSX = {
        color: theme.palette.warning.dark,
        bgcolor: 'transparent',
        border: '1px solid',
        borderColor: theme.palette.warning.dark,
        ':hover': {
          color: theme.palette.warning.dark,
          bgcolor: theme.palette.warning.light
        }
      };else defaultSX = {
        color: theme.palette.warning.dark,
        bgcolor: theme.palette.warning.light,
        ':hover': {
          color: theme.palette.warning.light,
          bgcolor: theme.palette.mode === 'dark' ? theme.palette.warning.dark + 90 : theme.palette.warning.dark
        }
      };
      break;
    default:
  }
  if (disabled) {
    if (variant === 'outlined') outlineSX = {
      color: theme.palette.grey[500],
      bgcolor: 'transparent',
      border: '1px solid',
      borderColor: theme.palette.grey[500],
      ':hover': {
        color: theme.palette.grey[500],
        bgcolor: 'transparent'
      }
    };else defaultSX = {
      color: theme.palette.grey[500],
      bgcolor: theme.palette.grey[50],
      ':hover': {
        color: theme.palette.grey[500],
        bgcolor: theme.palette.grey[50]
      }
    };
  }
  var SX = defaultSX;
  if (variant === 'outlined') {
    SX = outlineSX;
  }
  SX = _objectSpread(_objectSpread({}, SX), sx);
  return /*#__PURE__*/_react["default"].createElement(_Chip["default"], _extends({}, others, {
    sx: SX
  }));
};
Chip.propTypes = {
  sx: _propTypes["default"].object,
  chipcolor: _propTypes["default"].string,
  variant: _propTypes["default"].string,
  disabled: _propTypes["default"].bool
};
var _default = exports["default"] = Chip;