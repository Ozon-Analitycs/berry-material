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

// ============================|| SALES LINE CARD ||============================ //

var SalesLineChartCard = function SalesLineChartCard(_ref) {
  var bgColor = _ref.bgColor,
    chartData = _ref.chartData,
    footerData = _ref.footerData,
    icon = _ref.icon,
    title = _ref.title,
    percentage = _ref.percentage;
  var theme = (0, _styles.useTheme)();
  var footerHtml;
  if (footerData) {
    footerHtml = footerData.map(function (item, index) {
      return /*#__PURE__*/_react["default"].createElement(_material.Grid, {
        item: true,
        key: index
      }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
        sx: {
          mt: 3,
          mb: 3,
          p: 1
        }
      }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
        container: true,
        direction: "column",
        spacing: 1,
        alignItems: "center"
      }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
        variant: "h3",
        sx: {
          mb: 1
        }
      }, item.value), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
        variant: "body1"
      }, item.label))));
    });
  }
  return /*#__PURE__*/_react["default"].createElement(_material.Card, null, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      color: '#fff',
      bgcolor: bgColor || theme.palette.primary.dark,
      p: 3
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    direction: "column",
    spacing: 1
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    container: true,
    justifyContent: "space-between",
    alignItems: "center"
  }, title && /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "subtitle1",
    color: "inherit"
  }, title)), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    alignItems: "center"
  }, icon && /*#__PURE__*/_react["default"].createElement(_material.Box, {
    component: "span",
    sx: {
      mr: 2
    }
  }, icon), percentage && /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "subtitle1",
    color: "inherit"
  }, percentage)))), chartData && /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_reactApexcharts["default"], chartData)))), footerData && /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    justifyContent: "space-around",
    alignItems: "center"
  }, footerHtml));
};
SalesLineChartCard.propTypes = {
  title: _propTypes["default"].string,
  chartData: _propTypes["default"].object,
  footerData: _propTypes["default"].array,
  dropData: _propTypes["default"].object,
  listData: _propTypes["default"].object,
  bgColor: _propTypes["default"].string,
  icon: _propTypes["default"].element,
  percentage: _propTypes["default"].string
};
var _default = exports["default"] = SalesLineChartCard;