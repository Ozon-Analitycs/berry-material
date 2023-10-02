"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PositioningSnackbar;
var _material = require("@mui/material");
var _react = _interopRequireDefault(require("react"));
var _notistack = require("notistack");
var _SubCard = _interopRequireDefault(require("../../cards/SubCard"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// material-ul

// third-party

// project import

// ==============================|| NOTISTACK - POSTIONING ||============================== //

function PositioningSnackbar() {
  return /*#__PURE__*/_react["default"].createElement(_SubCard["default"], {
    title: "Positioning"
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "contained",
    onClick: function onClick() {
      return (0, _notistack.enqueueSnackbar)('This is default message.', {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'left'
        },
        variant: 'info'
      });
    }
  }, "Top-Left")), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "contained",
    onClick: function onClick() {
      return (0, _notistack.enqueueSnackbar)('his is success message', {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center'
        },
        variant: 'info'
      });
    }
  }, "Top-Center")), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "contained",
    onClick: function onClick() {
      return (0, _notistack.enqueueSnackbar)('This is warning message', {
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        variant: 'info'
      });
    }
  }, "Top-right")), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "contained",
    onClick: function onClick() {
      return (0, _notistack.enqueueSnackbar)('This is info message', {
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left'
        },
        variant: 'info'
      });
    }
  }, "Bottom-left")), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "contained",
    onClick: function onClick() {
      return (0, _notistack.enqueueSnackbar)('This is info message', {
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center'
        },
        variant: 'info'
      });
    }
  }, "Bottom-center")), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "contained",
    onClick: function onClick() {
      return (0, _notistack.enqueueSnackbar)('This is info message', {
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right'
        },
        variant: 'info'
      });
    }
  }, "Bottom-Right"))));
}