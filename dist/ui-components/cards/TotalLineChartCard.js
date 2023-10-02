"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styles = require("@mui/material/styles");
var _material = require("@mui/material");
var _reactApexcharts = _interopRequireDefault(require("react-apexcharts"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// material-ui

// third party

// ============================|| TOTAL LINE CHART CARD ||============================ //

var TotalLineChartCard = function TotalLineChartCard(_ref) {
  var bgColor = _ref.bgColor,
    chartData = _ref.chartData,
    title = _ref.title,
    percentage = _ref.percentage,
    value = _ref.value;
  var theme = (0, _styles.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_material.Card, null, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      color: '#fff',
      bgcolor: bgColor || theme.palette.primary.dark
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      p: 2.5
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    container: true,
    justifyContent: "space-between",
    alignItems: "center"
  }, value && /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "h3",
    color: "inherit"
  }, value)), percentage && /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body2",
    color: "inherit"
  }, percentage))), title && /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body2",
    color: "inherit"
  }, title)))), chartData && /*#__PURE__*/_react["default"].createElement(_reactApexcharts["default"], chartData)));
};
TotalLineChartCard.propTypes = {
  bgColor: _propTypes["default"].string,
  chartData: _propTypes["default"].object,
  title: _propTypes["default"].string,
  percentage: _propTypes["default"].string,
  value: _propTypes["default"].number
};
var _default = exports["default"] = TotalLineChartCard;