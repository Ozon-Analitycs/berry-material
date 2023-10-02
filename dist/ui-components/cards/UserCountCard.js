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
// material-ui

// styles
var IconWrapper = (0, _styles.styled)('div')({
  position: 'absolute',
  left: '-17px',
  bottom: '-27px',
  color: '#fff',
  transform: 'rotate(25deg)',
  '&> svg': {
    width: '100px',
    height: '100px',
    opacity: '0.35'
  }
});

// =============================|| USER NUM CARD ||============================= //

var UserCountCard = function UserCountCard(_ref) {
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
      color: '#fff'
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.CardContent, null, /*#__PURE__*/_react["default"].createElement(IconWrapper, null, primaryIcon), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    direction: "column",
    justifyContent: "center",
    alignItems: "center",
    spacing: 1
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    sm: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3",
    align: "center",
    color: "inherit"
  }, secondary)), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    sm: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body1",
    align: "center",
    color: "inherit"
  }, primary)))));
};
UserCountCard.propTypes = {
  primary: _propTypes["default"].string,
  secondary: _propTypes["default"].string,
  iconPrimary: _propTypes["default"].object,
  color: _propTypes["default"].string
};
var _default = exports["default"] = UserCountCard;