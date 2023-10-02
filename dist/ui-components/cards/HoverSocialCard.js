"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _material = require("@mui/material");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// material-ui

// ===========================|| HOVER SOCIAL CARD ||=========================== //

var HoverSocialCard = function HoverSocialCard(_ref) {
  var primary = _ref.primary,
    secondary = _ref.secondary,
    iconPrimary = _ref.iconPrimary,
    color = _ref.color;
  var IconPrimary = iconPrimary;
  var primaryIcon = iconPrimary ? /*#__PURE__*/_react["default"].createElement(IconPrimary, {
    fontSize: "large"
  }) : null;
  return /*#__PURE__*/_react["default"].createElement(_material.Card, {
    sx: {
      background: color,
      position: 'relative',
      color: '#fff',
      '&:hover svg': {
        opacity: '1',
        transform: 'scale(1.1)'
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.CardContent, null, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body2",
    sx: {
      position: 'absolute',
      right: 15,
      top: 25,
      color: '#fff',
      '&> svg': {
        width: 40,
        height: 40,
        opacity: '0.4',
        transition: 'all .3s ease-in-out'
      }
    }
  }, primaryIcon), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: 0
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
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
  }, primary)))));
};
HoverSocialCard.propTypes = {
  primary: _propTypes["default"].string,
  secondary: _propTypes["default"].string,
  iconPrimary: _propTypes["default"].object,
  color: _propTypes["default"].string
};
var _default = exports["default"] = HoverSocialCard;