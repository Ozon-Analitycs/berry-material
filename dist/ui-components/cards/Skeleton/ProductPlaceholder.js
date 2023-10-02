"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _material = require("@mui/material");
var _react = _interopRequireDefault(require("react"));
var _MainCard = _interopRequireDefault(require("../MainCard"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// material-ui

// project import

// ===========================|| SKELETON TOTAL GROWTH BAR CHART ||=========================== //

var ProductPlaceholder = function ProductPlaceholder() {
  return /*#__PURE__*/_react["default"].createElement(_MainCard["default"], {
    content: false,
    boxShadow: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Skeleton, {
    variant: "rectangular",
    height: 220
  }), /*#__PURE__*/_react["default"].createElement(_material.CardContent, {
    sx: {
      p: 2
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Skeleton, {
    variant: "rectangular",
    height: 20
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Skeleton, {
    variant: "rectangular",
    height: 45
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12,
    sx: {
      pt: '8px !important'
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    direction: "row",
    alignItems: "center",
    spacing: 1
  }, /*#__PURE__*/_react["default"].createElement(_material.Skeleton, {
    variant: "rectangular",
    height: 20,
    width: 90
  }), /*#__PURE__*/_react["default"].createElement(_material.Skeleton, {
    variant: "rectangular",
    height: 20,
    width: 38
  }))), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Stack, {
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Skeleton, {
    variant: "rectangular",
    height: 20,
    width: 40
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Skeleton, {
    variant: "rectangular",
    height: 17,
    width: 20
  }))), /*#__PURE__*/_react["default"].createElement(_material.Skeleton, {
    variant: "rectangular",
    height: 32,
    width: 47
  }))))));
};
var _default = exports["default"] = ProductPlaceholder;