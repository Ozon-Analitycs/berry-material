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

// ============================|| ROUND ICON CARD ||============================ //

var RoundIconCard = function RoundIconCard(_ref) {
  var primary = _ref.primary,
    secondary = _ref.secondary,
    content = _ref.content,
    iconPrimary = _ref.iconPrimary,
    color = _ref.color,
    bgcolor = _ref.bgcolor;
  var IconPrimary = iconPrimary;
  var primaryIcon = iconPrimary ? /*#__PURE__*/_react["default"].createElement(IconPrimary, {
    fontSize: "large"
  }) : null;
  return /*#__PURE__*/_react["default"].createElement(_MainCard["default"], null, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    alignItems: "center",
    spacing: 0,
    justifyContent: "space-between"
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    spacing: 1
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h5",
    color: "inherit"
  }, primary), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3"
  }, secondary), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "subtitle2",
    color: "inherit"
  }, content))), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    sx: {
      bgcolor: bgcolor,
      color: color,
      '& .MuiSvgIcon-root': {
        fontSize: '1.5rem'
      }
    },
    size: "large",
    "aria-label": "view icon"
  }, primaryIcon))));
};
RoundIconCard.propTypes = {
  primary: _propTypes["default"].string,
  secondary: _propTypes["default"].string,
  content: _propTypes["default"].string,
  iconPrimary: _propTypes["default"].object,
  color: _propTypes["default"].string,
  bgcolor: _propTypes["default"].string
};
var _default = exports["default"] = RoundIconCard;