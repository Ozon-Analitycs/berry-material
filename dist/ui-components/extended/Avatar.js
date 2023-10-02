"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styles = require("@mui/material/styles");
var _Avatar = _interopRequireDefault(require("@mui/material/Avatar"));
var _react = _interopRequireDefault(require("react"));
var _excluded = ["color", "outline", "size", "sx"]; // material-ui
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
// ==============================|| AVATAR ||============================== //

var Avatar = function Avatar(_ref) {
  var color = _ref.color,
    outline = _ref.outline,
    size = _ref.size,
    sx = _ref.sx,
    others = _objectWithoutProperties(_ref, _excluded);
  var theme = (0, _styles.useTheme)();
  var colorSX = color && !outline && {
    color: theme.palette.background.paper,
    bgcolor: "".concat(color, ".main")
  };
  var outlineSX = outline && {
    color: color ? "".concat(color, ".main") : "primary.main",
    bgcolor: theme.palette.background.paper,
    border: '2px solid',
    borderColor: color ? "".concat(color, ".main") : "primary.main"
  };
  var sizeSX = {};
  switch (size) {
    case 'badge':
      sizeSX = {
        width: theme.spacing(3.5),
        height: theme.spacing(3.5)
      };
      break;
    case 'xs':
      sizeSX = {
        width: theme.spacing(4.25),
        height: theme.spacing(4.25)
      };
      break;
    case 'sm':
      sizeSX = {
        width: theme.spacing(5),
        height: theme.spacing(5)
      };
      break;
    case 'lg':
      sizeSX = {
        width: theme.spacing(9),
        height: theme.spacing(9)
      };
      break;
    case 'xl':
      sizeSX = {
        width: theme.spacing(10.25),
        height: theme.spacing(10.25)
      };
      break;
    case 'md':
      sizeSX = {
        width: theme.spacing(7.5),
        height: theme.spacing(7.5)
      };
      break;
    default:
      sizeSX = {};
  }
  return /*#__PURE__*/_react["default"].createElement(_Avatar["default"], _extends({
    sx: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, colorSX), outlineSX), sizeSX), sx)
  }, others));
};
Avatar.propTypes = {
  color: _propTypes["default"].string,
  outline: _propTypes["default"].bool,
  size: _propTypes["default"].string,
  sx: _propTypes["default"].object
};
var _default = exports["default"] = Avatar;