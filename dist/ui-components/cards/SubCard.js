"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _styles = require("@mui/material/styles");
var _material = require("@mui/material");
var _excluded = ["children", "content", "contentClass", "darkTitle", "secondary", "sx", "contentSX", "title"]; // material-ui
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
// ==============================|| CUSTOM SUB CARD ||============================== //

var SubCard = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var children = _ref.children,
    content = _ref.content,
    contentClass = _ref.contentClass,
    darkTitle = _ref.darkTitle,
    secondary = _ref.secondary,
    _ref$sx = _ref.sx,
    sx = _ref$sx === void 0 ? {} : _ref$sx,
    _ref$contentSX = _ref.contentSX,
    contentSX = _ref$contentSX === void 0 ? {} : _ref$contentSX,
    title = _ref.title,
    others = _objectWithoutProperties(_ref, _excluded);
  var theme = (0, _styles.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_material.Card, _extends({
    ref: ref,
    sx: _objectSpread({
      border: '1px solid',
      borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.light + 15 : theme.palette.grey[200],
      ':hover': {
        boxShadow: theme.palette.mode === 'dark' ? '0 2px 14px 0 rgb(33 150 243 / 10%)' : '0 2px 14px 0 rgb(32 40 45 / 8%)'
      }
    }, sx)
  }, others), !darkTitle && title && /*#__PURE__*/_react["default"].createElement(_material.CardHeader, {
    sx: {
      p: 2.5
    },
    title: /*#__PURE__*/_react["default"].createElement(_material.Typography, {
      variant: "h5"
    }, title),
    action: secondary
  }), darkTitle && title && /*#__PURE__*/_react["default"].createElement(_material.CardHeader, {
    sx: {
      p: 2.5
    },
    title: /*#__PURE__*/_react["default"].createElement(_material.Typography, {
      variant: "h4"
    }, title),
    action: secondary
  }), title && /*#__PURE__*/_react["default"].createElement(_material.Divider, {
    sx: {
      opacity: 1,
      borderColor: theme.palette.mode === 'dark' ? theme.palette.dark.light + 15 : theme.palette.grey[200]
    }
  }), content && /*#__PURE__*/_react["default"].createElement(_material.CardContent, {
    sx: _objectSpread({
      p: 2.5
    }, contentSX),
    className: contentClass || ''
  }, children), !content && children);
});
SubCard.propTypes = {
  children: _propTypes["default"].node,
  content: _propTypes["default"].bool,
  contentClass: _propTypes["default"].string,
  darkTitle: _propTypes["default"].bool,
  secondary: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string, _propTypes["default"].object]),
  sx: _propTypes["default"].object,
  contentSX: _propTypes["default"].object,
  title: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string, _propTypes["default"].object])
};
SubCard.defaultProps = {
  content: true
};
var _default = exports["default"] = SubCard;