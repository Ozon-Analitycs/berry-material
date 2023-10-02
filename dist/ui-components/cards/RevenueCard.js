"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _styles = require("@mui/material/styles");
var _material = require("@mui/material");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } // material-ui
// =============================|| REVENUE CARD ||============================= //

var RevenueCard = function RevenueCard(_ref) {
  var primary = _ref.primary,
    secondary = _ref.secondary,
    content = _ref.content,
    iconPrimary = _ref.iconPrimary,
    color = _ref.color;
  var theme = (0, _styles.useTheme)();
  var matchDownXs = (0, _material.useMediaQuery)(theme.breakpoints.down('sm'));
  var IconPrimary = iconPrimary;
  var primaryIcon = iconPrimary ? /*#__PURE__*/_react["default"].createElement(IconPrimary, {
    fontSize: "large"
  }) : null;
  return /*#__PURE__*/_react["default"].createElement(_material.Card, {
    sx: {
      background: color,
      position: 'relative',
      color: '#fff'
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.CardContent, null, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body2",
    sx: _defineProperty({
      position: 'absolute',
      right: 13,
      top: 14,
      color: '#fff',
      '&> svg': {
        width: 100,
        height: 100,
        opacity: '0.5'
      }
    }, theme.breakpoints.down('sm'), {
      top: 13,
      '&> svg': {
        width: 80,
        height: 80
      }
    })
  }, primaryIcon), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    direction: matchDownXs ? 'column' : 'row',
    spacing: 1
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h5",
    color: "inherit"
  }, primary)), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3",
    color: "inherit"
  }, secondary)), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "subtitle2",
    color: "inherit"
  }, content)))));
};
RevenueCard.propTypes = {
  primary: _propTypes["default"].string,
  secondary: _propTypes["default"].string,
  content: _propTypes["default"].string,
  iconPrimary: _propTypes["default"].object,
  color: _propTypes["default"].string
};
var _default = exports["default"] = RevenueCard;