"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _material = require("@mui/material");
var _Skeleton = _interopRequireDefault(require("@mui/material/Skeleton"));
var _react = _interopRequireDefault(require("react"));
var _constant = require("../../../store/constant");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// material-ui

// project imports

// ==============================|| SKELETON TOTAL GROWTH BAR CHART ||============================== //

var TotalGrowthBarChart = function TotalGrowthBarChart() {
  return /*#__PURE__*/_react["default"].createElement(_material.Card, null, /*#__PURE__*/_react["default"].createElement(_material.CardContent, null, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: _constant.gridSpacing
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    alignItems: "center",
    justifyContent: "space-between",
    spacing: _constant.gridSpacing
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: true,
    zeroMinWidth: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: 1
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], {
    variant: "text"
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], {
    variant: "rectangular",
    height: 20
  })))), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], {
    variant: "rectangular",
    height: 50,
    width: 80
  })))), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_Skeleton["default"], {
    variant: "rectangular",
    height: 530
  })))));
};
var _default = exports["default"] = TotalGrowthBarChart;