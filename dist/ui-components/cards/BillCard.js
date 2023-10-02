"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRouterDom = require("react-router-dom");
var _styles = require("@mui/material/styles");
var _material = require("@mui/material");
var _ArrowRightAltRounded = _interopRequireDefault(require("@mui/icons-material/ArrowRightAltRounded"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// material-ui

// assets

// ==============================|| BILL CARD ||============================== //

var BillCard = function BillCard(_ref) {
  var primary = _ref.primary,
    secondary = _ref.secondary,
    link = _ref.link,
    color = _ref.color,
    bg = _ref.bg;
  var theme = (0, _styles.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_material.Card, {
    sx: {
      borderLeft: '10px solid',
      borderColor: color,
      background: bg
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.CardContent, null, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: 0
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body1",
    sx: {
      color: theme.palette.grey[700]
    }
  }, primary)), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h2",
    sx: {
      fontWeight: 500,
      mb: 1.5,
      color: theme.palette.grey[800]
    }
  }, secondary)), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "text",
    disableElevation: true,
    disableRipple: true,
    component: _reactRouterDom.Link,
    to: "#",
    sx: {
      color: color,
      p: 0,
      '&:hover': {
        bgcolor: 'transparent'
      }
    },
    endIcon: /*#__PURE__*/_react["default"].createElement(_ArrowRightAltRounded["default"], null)
  }, link)))));
};
BillCard.propTypes = {
  primary: _propTypes["default"].string,
  secondary: _propTypes["default"].string,
  link: _propTypes["default"].string,
  color: _propTypes["default"].string,
  bg: _propTypes["default"].string
};
var _default = exports["default"] = BillCard;