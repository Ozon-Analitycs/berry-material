"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _material = require("@mui/material");
var _reactApexcharts = _interopRequireDefault(require("react-apexcharts"));
var _MainCard = _interopRequireDefault(require("./MainCard"));
var _ArrowDownward = _interopRequireDefault(require("@mui/icons-material/ArrowDownward"));
var _ArrowUpward = _interopRequireDefault(require("@mui/icons-material/ArrowUpward"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } // material-ui
// third party
// project imports
// assets
// ==========================|| ANALYTICS CHART CARD ||========================== //

var AnalyticsChartCard = function AnalyticsChartCard(_ref) {
  var title = _ref.title,
    chartData = _ref.chartData,
    dropData = _ref.dropData,
    listData = _ref.listData;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    anchorEl = _useState2[0],
    setAnchorEl = _useState2[1];
  var dropHtml;
  if (dropData) {
    var handleClick = function handleClick(event) {
      setAnchorEl(event === null || event === void 0 ? void 0 : event.currentTarget);
    };
    var handleClose = function handleClose() {
      setAnchorEl(null);
    };
    dropHtml = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_material.Button, {
      variant: "text",
      disableElevation: true,
      size: "small",
      "aria-controls": "simple-menu",
      "aria-haspopup": "true",
      onClick: handleClick
    }, dropData.title), /*#__PURE__*/_react["default"].createElement(_material.Menu, {
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "right"
      },
      id: "simple-menu",
      anchorEl: anchorEl,
      keepMounted: true,
      open: Boolean(anchorEl),
      onClose: handleClose
    }, dropData === null || dropData === void 0 ? void 0 : dropData.options.map(function (option, index) {
      return /*#__PURE__*/_react["default"].createElement(_material.MenuItem, {
        key: index,
        onClick: handleClose
      }, option.label);
    })));
  }
  var listItem;
  if (listData) {
    listItem = listData.map(function (item, index) {
      return /*#__PURE__*/_react["default"].createElement(_material.Grid, {
        item: true,
        key: index,
        sm: 12
      }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
        sx: {
          color: item.color
        }
      }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
        container: true,
        spacing: 2,
        justifyContent: "center"
      }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
        item: true
      }, item.icon), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
        item: true
      }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
        variant: "subtitle1"
      }, item.value, "%")), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
        item: true
      }, item.state === 1 && /*#__PURE__*/_react["default"].createElement(_ArrowUpward["default"], {
        fontSize: "inherit",
        color: "inherit"
      }), item.state === 0 && /*#__PURE__*/_react["default"].createElement(_ArrowDownward["default"], {
        fontSize: "inherit",
        color: "inherit"
      })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
        item: true
      }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
        variant: "subtitle1",
        color: "inherit"
      }, item.percentage, "%")))));
    });
  }
  return /*#__PURE__*/_react["default"].createElement(_MainCard["default"], null, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    justifyContent: "space-between",
    alignItems: "center"
  }, title && /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "subtitle1"
  }, title)), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, dropHtml)), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    container: true,
    direction: "column",
    spacing: 1,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    sx: {
      mt: 3,
      display: "block"
    }
  }, listItem)), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    xs: 12,
    sm: 6
  }, /*#__PURE__*/_react["default"].createElement(_reactApexcharts["default"], chartData))));
};
AnalyticsChartCard.propTypes = {
  title: _propTypes["default"].string,
  chartData: _propTypes["default"].object,
  dropData: _propTypes["default"].object,
  listData: _propTypes["default"].array
};
var _default = exports["default"] = AnalyticsChartCard;