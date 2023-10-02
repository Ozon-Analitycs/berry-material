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

// =============================|| SIDE ICON CARD ||============================= //

var SideIconCard = function SideIconCard(_ref) {
  var iconPrimary = _ref.iconPrimary,
    primary = _ref.primary,
    secondary = _ref.secondary,
    secondarySub = _ref.secondarySub,
    color = _ref.color,
    bgcolor = _ref.bgcolor;
  var theme = (0, _styles.useTheme)();
  var matchDownXs = (0, _material.useMediaQuery)(theme.breakpoints.down('sm'));
  var IconPrimary = iconPrimary;
  var primaryIcon = iconPrimary !== undefined ? /*#__PURE__*/_react["default"].createElement(IconPrimary, null) : null;
  return /*#__PURE__*/_react["default"].createElement(_material.Card, {
    sx: {
      bgcolor: bgcolor || '',
      position: 'relative'
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    justifyContent: "space-between",
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 4,
    sx: {
      background: color,
      py: 3.5,
      px: 0
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h5",
    sx: {
      textAlign: 'center',
      color: '#fff',
      '& > svg': {
        width: 32,
        height: 32
      }
    },
    align: "center"
  }, primaryIcon)), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 8
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    direction: "column",
    justifyContent: "space-between",
    spacing: 1,
    alignItems: matchDownXs ? 'center' : 'flex-start'
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    sm: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3",
    sx: {
      color: bgcolor ? '#fff' : '',
      ml: 2
    }
  }, primary)), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    sm: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body2",
    align: "left",
    sx: {
      color: bgcolor ? '#fff' : 'grey.600',
      ml: 2
    }
  }, secondary, " ", /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      color: color
    }
  }, secondarySub), ' '))))));
};
SideIconCard.propTypes = {
  iconPrimary: _propTypes["default"].object,
  primary: _propTypes["default"].string,
  secondary: _propTypes["default"].string,
  secondarySub: _propTypes["default"].string,
  color: _propTypes["default"].string,
  bgcolor: _propTypes["default"].string
};
var _default = exports["default"] = SideIconCard;