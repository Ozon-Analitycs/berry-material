"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
var _MainCard = _interopRequireDefault(require("./MainCard"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// material-ui

// project imports

// ============================|| HOVER DATA CARD ||============================ //

var HoverDataCard = function HoverDataCard(_ref) {
  var title = _ref.title,
    iconPrimary = _ref.iconPrimary,
    primary = _ref.primary,
    secondary = _ref.secondary,
    color = _ref.color;
  var IconPrimary = iconPrimary;
  var primaryIcon = iconPrimary !== undefined ? /*#__PURE__*/_react["default"].createElement(IconPrimary, {
    fontSize: "large",
    sx: {
      width: 20,
      height: 20,
      color: color
    }
  }) : null;
  return /*#__PURE__*/_react["default"].createElement(_MainCard["default"], null, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    justifyContent: "space-between",
    direction: "column",
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    sm: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h5",
    color: "inherit"
  }, title)), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    sm: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    direction: "row",
    alignItems: "center",
    spacing: 0.5,
    sx: {
      my: 1.75,
      mx: 'auto'
    }
  }, primaryIcon, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3"
  }, primary))), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    sm: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body2",
    color: "textSecondary"
  }, secondary))));
};
HoverDataCard.propTypes = {
  title: _propTypes["default"].string,
  iconPrimary: _propTypes["default"].object,
  primary: _propTypes["default"].number,
  secondary: _propTypes["default"].string,
  color: _propTypes["default"].string
};
var _default = exports["default"] = HoverDataCard;