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

// ==============================|| REPORT CARD ||============================== //

var ReportCard = function ReportCard(_ref) {
  var primary = _ref.primary,
    secondary = _ref.secondary,
    iconPrimary = _ref.iconPrimary,
    color = _ref.color;
  var IconPrimary = iconPrimary;
  var primaryIcon = iconPrimary ? /*#__PURE__*/_react["default"].createElement(IconPrimary, {
    fontSize: "large"
  }) : null;
  return /*#__PURE__*/_react["default"].createElement(_MainCard["default"], null, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    justifyContent: "space-between",
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    spacing: 1
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3"
  }, primary), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body1"
  }, secondary))), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h2",
    style: {
      color: color
    }
  }, primaryIcon))));
};
ReportCard.propTypes = {
  primary: _propTypes["default"].string,
  secondary: _propTypes["default"].string,
  iconPrimary: _propTypes["default"].object,
  color: _propTypes["default"].string
};
var _default = exports["default"] = ReportCard;