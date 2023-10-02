"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _material = require("@mui/material");
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// material-ui

// ==============================|| SKELETON - TOTAL INCOME DARK/LIGHT CARD ||============================== //

var TotalIncomeCard = function TotalIncomeCard() {
  return /*#__PURE__*/_react["default"].createElement(_material.Card, {
    sx: {
      p: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.List, {
    sx: {
      py: 0
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.ListItem, {
    alignItems: "center",
    disableGutters: true,
    sx: {
      py: 0
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.ListItemAvatar, null, /*#__PURE__*/_react["default"].createElement(_material.Skeleton, {
    variant: "rectangular",
    width: 44,
    height: 44
  })), /*#__PURE__*/_react["default"].createElement(_material.ListItemText, {
    sx: {
      py: 0
    },
    primary: /*#__PURE__*/_react["default"].createElement(_material.Skeleton, {
      variant: "rectangular",
      height: 20
    }),
    secondary: /*#__PURE__*/_react["default"].createElement(_material.Skeleton, {
      variant: "text"
    })
  }))));
};
var _default = exports["default"] = TotalIncomeCard;