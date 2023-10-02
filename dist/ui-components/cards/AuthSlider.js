"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _material = require("@mui/material");
var _reactSlick = _interopRequireDefault(require("react-slick"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// material-ui

// third-party

var AuthSlider = function AuthSlider(_ref) {
  var items = _ref.items;
  var settings = {
    autoplay: true,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return /*#__PURE__*/_react["default"].createElement(_reactSlick["default"], settings, items.map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement(_material.Grid, {
      key: i,
      container: true,
      direction: "column",
      alignItems: "center",
      spacing: 3,
      textAlign: "center"
    }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
      variant: "h1"
    }, item.title)), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
      item: true
    }, /*#__PURE__*/_react["default"].createElement(_material.Typography, {
      variant: "subtitle2"
    }, item.description)));
  }));
};
AuthSlider.propTypes = {
  items: _propTypes["default"].array.isRequired
};
var _default = exports["default"] = AuthSlider;