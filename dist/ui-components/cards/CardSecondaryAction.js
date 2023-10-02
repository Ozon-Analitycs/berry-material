"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _styles = require("@mui/material/styles");
var _material = require("@mui/material");
var _Avatar = _interopRequireDefault(require("../extended/Avatar"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// material-ui

// project imports

// ==============================|| CARD SECONDARY ACTION ||============================== //

var CardSecondaryAction = function CardSecondaryAction(_ref) {
  var title = _ref.title,
    link = _ref.link,
    icon = _ref.icon;
  var theme = (0, _styles.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_material.Tooltip, {
    title: title || 'Reference',
    placement: "left"
  }, /*#__PURE__*/_react["default"].createElement(_material.ButtonBase, {
    disableRipple: true
  }, !icon && /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
    component: _material.Link,
    href: link,
    target: "_blank",
    alt: "MUI Logo",
    size: "badge",
    color: "primary",
    outline: true,
    "aria-label": "'ui material icon'"
  }, /*#__PURE__*/_react["default"].createElement("svg", {
    width: "500",
    height: "500",
    viewBox: "0 0 500 500",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react["default"].createElement("g", {
    clipPath: "url(#clip0)"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M100 260.9V131L212.5 195.95V239.25L137.5 195.95V282.55L100 260.9Z",
    fill: theme.palette.primary[800]
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M212.5 195.95L325 131V260.9L250 304.2L212.5 282.55L287.5 239.25V195.95L212.5 239.25V195.95Z",
    fill: theme.palette.primary.main
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M212.5 282.55V325.85L287.5 369.15V325.85L212.5 282.55Z",
    fill: theme.palette.primary[800]
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M287.5 369.15L400 304.2V217.6L362.5 239.25V282.55L287.5 325.85V369.15ZM362.5 195.95V152.65L400 131V174.3L362.5 195.95Z",
    fill: theme.palette.primary.main
  })), /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("clipPath", {
    id: "clip0"
  }, /*#__PURE__*/_react["default"].createElement("rect", {
    width: "300",
    height: "238.3",
    fill: "white",
    transform: "translate(100 131)"
  }))))), icon && /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
    component: _material.Link,
    href: link,
    target: "_blank",
    size: "badge",
    color: "primary",
    outline: true,
    "aria-label": "ui material icon"
  }, icon)));
};
CardSecondaryAction.propTypes = {
  icon: _propTypes["default"].node,
  link: _propTypes["default"].string,
  title: _propTypes["default"].string
};
var _default = exports["default"] = CardSecondaryAction;