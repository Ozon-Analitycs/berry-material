"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _material = require("@mui/material");
var _Skeleton = _interopRequireDefault(require("@mui/material/Skeleton"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// material-ui

// ==============================|| SKELETON - EARNING CARD ||============================== //

var EarningCard = function EarningCard() {
  return /*#__PURE__*/_react["default"].createElement(_material.Card, null, /*#__PURE__*/_react["default"].createElement(_material.CardContent, null, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    justifyContent: "space-between"
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], {
    variant: "rectangular",
    width: 44,
    height: 44
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], {
    variant: "rectangular",
    width: 34,
    height: 34
  })))), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], {
    variant: "rectangular",
    sx: {
      my: 2
    },
    height: 40
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], {
    variant: "rectangular",
    height: 30
  })))));
};
var _default = exports["default"] = EarningCard;