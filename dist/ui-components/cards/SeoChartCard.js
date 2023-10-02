"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _styles = require("@mui/material/styles");
var _material = require("@mui/material");
var _reactApexcharts = _interopRequireDefault(require("react-apexcharts"));
var _MainCard = _interopRequireDefault(require("./MainCard"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// material-ui

// third party

// project imports

// =============================|| SEO CHART CARD ||============================= //

var SeoChartCard = function SeoChartCard(_ref) {
  var chartData = _ref.chartData,
    value = _ref.value,
    title = _ref.title,
    icon = _ref.icon,
    type = _ref.type;
  var theme = (0, _styles.useTheme)();
  var matchDownMd = (0, _material.useMediaQuery)(theme.breakpoints.down('lg'));
  return /*#__PURE__*/_react["default"].createElement(_MainCard["default"], null, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    justifyContent: "space-between",
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    direction: type === 1 ? 'column-reverse' : 'column',
    spacing: type === 1 ? 0 : 1
  }, value && /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: matchDownMd ? 'h4' : 'h3'
  }, value)), (title || icon) && /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    container: true,
    justifyContent: "flex-start",
    alignContent: "center"
  }, title && /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body1"
  }, title), icon && /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      ml: 1
    }
  }, icon)))), chartData && /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12
  }, /*#__PURE__*/_react["default"].createElement(_reactApexcharts["default"], chartData))));
};
SeoChartCard.propTypes = {
  chartData: _propTypes["default"].object,
  title: _propTypes["default"].string,
  icon: _propTypes["default"].element,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  type: _propTypes["default"].number
};
var _default = exports["default"] = SeoChartCard;