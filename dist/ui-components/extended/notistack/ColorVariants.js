"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ColorVariants;
var _styles = require("@mui/material/styles");
var _material = require("@mui/material");
var _notistack = require("notistack");
var _SubCard = _interopRequireDefault(require("../../cards/SubCard"));
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// material-ul

// third-party

// project import

// ==============================|| NOTISTACK - COLOR VARIANTS ||============================== //

function ColorVariants() {
  var theme = (0, _styles.useTheme)();
  return /*#__PURE__*/_react["default"].createElement(_SubCard["default"], {
    title: "Color Variants"
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "contained",
    sx: {
      backgroundColor: theme.palette.grey[900],
      '&:hover': {
        backgroundColor: theme.palette.grey[700]
      }
    },
    onClick: function onClick() {
      return (0, _notistack.enqueueSnackbar)('This is default message.');
    }
  }, "Default")), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "contained",
    color: "success",
    onClick: function onClick() {
      return (0, _notistack.enqueueSnackbar)('his is success message', {
        variant: 'success'
      });
    }
  }, "Success")), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "contained",
    color: "warning",
    onClick: function onClick() {
      return (0, _notistack.enqueueSnackbar)('This is warning message', {
        variant: 'warning'
      });
    }
  }, "Warning")), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "contained",
    color: "info",
    onClick: function onClick() {
      return (0, _notistack.enqueueSnackbar)('This is info message', {
        variant: 'info'
      });
    }
  }, "Info")), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "contained",
    color: "error",
    onClick: function onClick() {
      return (0, _notistack.enqueueSnackbar)('This is error message', {
        variant: 'error'
      });
    }
  }, "Error"))));
}