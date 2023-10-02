"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _material = require("@mui/material");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// material-ui

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

var AuthFooter = function AuthFooter() {
  return /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    direction: "row",
    justifyContent: "space-between"
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "subtitle2",
    component: _material.Link,
    href: "https://berrydashboard.io",
    target: "_blank",
    underline: "hover"
  }, "berrydashboard.io"), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "subtitle2",
    component: _material.Link,
    href: "https://codedthemes.com",
    target: "_blank",
    underline: "hover"
  }, "\xA9 codedthemes.com"));
};
var _default = exports["default"] = AuthFooter;