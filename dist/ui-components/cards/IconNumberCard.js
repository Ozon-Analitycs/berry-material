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

// =============================|| ICON NUMBER CARD ||============================= //

var IconNumberCard = function IconNumberCard(_ref) {
  var title = _ref.title,
    primary = _ref.primary,
    color = _ref.color,
    iconPrimary = _ref.iconPrimary;
  var IconPrimary = iconPrimary;
  var primaryIcon = iconPrimary ? /*#__PURE__*/_react["default"].createElement(IconPrimary, null) : null;
  return /*#__PURE__*/_react["default"].createElement(_MainCard["default"], null, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: 2,
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    justifyContent: "space-between",
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "subtitle2",
    sx: {
      color: color
    }
  }, primaryIcon), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h5",
    color: "inherit"
  }, title)), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3"
  }, primary))))));
};
IconNumberCard.propTypes = {
  title: _propTypes["default"].string,
  primary: _propTypes["default"].string,
  color: _propTypes["default"].string,
  iconPrimary: _propTypes["default"].object
};
var _default = exports["default"] = IconNumberCard;